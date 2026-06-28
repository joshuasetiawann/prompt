import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadSpec } from "./lib/spec.mjs";
import { computeMeta } from "./lib/meta.mjs";
import { buildSchema } from "./lib/prisma.mjs";
import { buildSeed } from "./lib/seed.mjs";
import { boilerplate } from "./lib/files.mjs";
import { buildPages } from "./lib/pages.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PROMPTS = path.join(ROOT, "prompts");
const APPS = path.join(ROOT, "apps");

function writeFile(base, rel, content) {
  const full = path.join(base, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
}

export function generateApp(promptFile, index) {
  const spec = loadSpec(promptFile, index);
  const meta = computeMeta(spec);
  const appDir = path.join(APPS, `${spec.id}-${spec.slug}`);

  const files = {
    ...boilerplate(spec, meta),
    ...buildPages(spec, meta),
    "prisma/schema.prisma": buildSchema(spec),
    "prisma/seed.ts": buildSeed(spec),
  };
  // app-local gitignore (defensive; root .gitignore also covers)
  files[".gitignore"] = `node_modules\n.next\ngenerated\nprisma/dev.db*\n.env\n*.tsbuildinfo\nnext-env.d.ts\n`;

  for (const [rel, content] of Object.entries(files)) writeFile(appDir, rel, content);
  return { spec, meta, appDir, fileCount: Object.keys(files).length };
}

function main() {
  const arg = process.argv[2];
  const all = fs.readdirSync(PROMPTS).filter((f) => f.endsWith(".yaml")).sort();
  let targets = all;
  if (arg && arg !== "all") {
    const ids = arg.split(",").map((s) => s.trim().padStart(2, "0"));
    targets = all.filter((f) => ids.includes(f.slice(0, 2)));
  }
  fs.mkdirSync(APPS, { recursive: true });
  const summary = [];
  for (let i = 0; i < all.length; i++) {
    const f = all[i];
    if (!targets.includes(f)) continue;
    const res = generateApp(path.join(PROMPTS, f), i);
    summary.push(`${res.spec.id} ${res.spec.appName.padEnd(42)} kind=${res.spec.kind.padEnd(10)} models=${res.spec.modelNames.length} managed=${res.meta.managed.length} files=${res.fileCount}`);
    console.log("✓ " + summary[summary.length - 1]);
  }
  console.log(`\nGenerated ${summary.length} app(s) into apps/`);
}

main();
