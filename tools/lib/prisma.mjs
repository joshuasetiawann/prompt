import { helpers } from "./spec.mjs";
const { cap, camel, pluralize } = helpers;

const UNIQUE_FIELDS = new Set(["email", "slug", "username", "handle"]);

/**
 * Build a Prisma schema string from a spec's models.
 * - every FK is optional (String?) with an explicit, uniquely-named relation
 * - back-references are disambiguated so multi-FK-to-same-target works
 * - self-relations use onDelete: NoAction to avoid SQLite cascade cycles
 */
export function buildSchema(spec) {
  const models = spec.models;
  const names = new Set(models.map((m) => m.name));

  // collect edges: { source, role, fkField, target }
  const edges = [];
  for (const m of models) {
    for (const f of m.fields) {
      if (f.kind === "fk") {
        edges.push({ source: m.name, role: f.base, fkField: f.name, target: f.target });
      }
    }
  }

  // compute backref names per target
  const backrefs = {}; // target -> array of {source, role, relName, fieldName, fkField}
  for (const m of models) backrefs[m.name] = [];
  for (const e of edges) {
    const relName = `${e.source}_${e.role}_${e.target}`;
    const base = camel(pluralize(e.source));
    backrefs[e.target].push({ ...e, relName, base });
  }
  // disambiguate collisions on same target
  for (const t of Object.keys(backrefs)) {
    const list = backrefs[t];
    const counts = {};
    for (const b of list) counts[b.base] = (counts[b.base] || 0) + 1;
    const used = new Set();
    // reserve the target model's own emitted field names so a back-relation can't
    // collide with a scalar field (e.g. a scalar "notes" + a Note[] back-relation)
    // or with a forward FK relation role / its id column.
    const targetModel = models.find((mm) => mm.name === t);
    if (targetModel) {
      for (const f of targetModel.fields) {
        used.add(f.name);
        if (f.kind === "fk") used.add(f.base);
      }
    }
    for (const b of list) {
      let name = used.has(b.base) || counts[b.base] > 1 ? `${b.base}_${b.role}` : b.base;
      while (used.has(name)) name = name + "_x";
      used.add(name);
      b.fieldName = name;
    }
  }

  const lines = [];
  lines.push(
    `// Auto-generated for ${spec.appName}. Edit prisma/schema.prisma to evolve the data model.`,
  );
  lines.push(
    `generator client {\n  provider = "prisma-client-js"\n  output   = "../generated/prisma-client"\n}\n`,
  );
  lines.push(
    `datasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n`,
  );

  for (const m of models) {
    const body = [];
    const indexes = [];
    for (const f of m.fields) {
      if (f.kind === "id") {
        body.push(`  id String @id @default(cuid())`);
        continue;
      }
      if (f.kind === "fk") {
        const role = f.base;
        const relName = `${m.name}_${role}_${f.target}`;
        const selfRel = f.target === m.name;
        const onDelete = selfRel ? "NoAction" : "Cascade";
        body.push(`  ${f.name} String?`);
        body.push(
          `  ${role} ${f.target}? @relation("${relName}", fields: [${f.name}], references: [id], onDelete: ${onDelete}, onUpdate: ${selfRel ? "NoAction" : "Cascade"})`,
        );
        indexes.push(`  @@index([${f.name}])`);
        continue;
      }
      // scalar
      let line = `  ${f.name} ${f.type}`;
      const attrs = [];
      if (UNIQUE_FIELDS.has(f.name)) attrs.push("@unique");
      if (f.attr) attrs.push(f.attr);
      // optional-ize free text that has no default
      if (f.type === "String" && !attrs.length && f.name !== "id") {
        // keep required for core identity-ish fields, optional otherwise
        if (!/^(name|title|email|slug)$/.test(f.name)) line = `  ${f.name} String?`;
      }
      if (attrs.length) line += " " + attrs.join(" ");
      body.push(line);
    }
    // back relations
    for (const b of backrefs[m.name]) {
      body.push(`  ${b.fieldName} ${b.source}[] @relation("${b.relName}")`);
    }
    const idx = indexes.length ? "\n" + indexes.join("\n") : "";
    lines.push(`model ${m.name} {\n${body.join("\n")}${idx}\n}\n`);
  }

  return lines.join("\n");
}
