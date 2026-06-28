import { helpers } from "./spec.mjs";
const { cap, camel, pluralize, iconFor, SYSTEM_MODELS } = helpers;

function humanize(name) {
  return name
    .replace(/Id$/, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase())
    .trim();
}
function kebab(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase().replace(/(^-|-$)/g, "");
}

const TITLE_PRIORITY = ["name", "title", "fullName", "subject", "label", "sku", "number", "email", "slug"];
const SUBTITLE_PRIORITY = ["description", "company", "summary", "category", "type", "notes", "bio", "email", "address"];
const STATUS_PRIORITY = ["status", "stage", "state", "priority"];
const PRICE_PRIORITY = ["price", "total", "amount", "basePrice", "value", "balance", "salary", "budget", "revenue"];

function scalarStrings(m) {
  return m.fields.filter((f) => f.kind === "scalar" && f.type === "String" && f.name !== "passwordHash");
}

function statusOptions(modelName, field) {
  const m = modelName.toLowerCase();
  if (/stage/.test(field)) return ["Lead", "Qualified", "Proposal", "Negotiation", "Won", "Lost"];
  if (/booking|reservation|appointment/.test(m)) return ["pending", "confirmed", "completed", "cancelled", "no-show"];
  if (/order|payment|invoice|transaction/.test(m)) return ["pending", "paid", "processing", "shipped", "completed", "cancelled"];
  if (/ticket|complaint|request|approval/.test(m)) return ["open", "pending", "in_progress", "resolved", "closed"];
  if (/task|activity/.test(m)) return ["todo", "in_progress", "done"];
  if (/priority/.test(field)) return ["low", "medium", "high", "urgent"];
  return ["active", "draft", "archived"];
}

export function computeMeta(spec) {
  const models = spec.models;
  // first pass: title fields for relation rendering
  const titleOf = {};
  for (const m of models) {
    const fieldNames = m.fields.map((f) => f.name);
    titleOf[m.name] =
      TITLE_PRIORITY.find((t) => fieldNames.includes(t)) ||
      scalarStrings(m)[0]?.name ||
      "id";
  }

  const modelMeta = {};
  for (const m of models) {
    const fieldNames = m.fields.map((f) => f.name);
    const has = (n) => fieldNames.includes(n);
    const titleField = titleOf[m.name];
    const statusField = STATUS_PRIORITY.find(has) || null;
    const subtitleField = SUBTITLE_PRIORITY.find((s) => has(s) && s !== titleField) || null;
    const priceField =
      PRICE_PRIORITY.find((p) => m.fields.some((f) => f.name === p && f.type === "Float")) || null;
    const dateField = has("createdAt")
      ? "createdAt"
      : m.fields.find((f) => f.type === "DateTime")?.name || null;
    const label = humanize(m.name);
    const labelPlural = humanize(pluralize(m.name));
    const route = `/app/${kebab(pluralize(m.name))}`;

    // columns
    const cols = [];
    const titleKind = /^(status|stage|state|priority)$/.test(titleField) ? "status" : "text";
    cols.push({ key: titleField, header: humanize(titleField) || label, kind: titleKind });
    const fk = m.fields.find((f) => f.kind === "fk");
    if (fk) cols.push({ key: fk.base, header: humanize(fk.base), kind: "relation", titleField: titleOf[fk.target] || "name" });
    if (statusField) cols.push({ key: statusField, header: humanize(statusField), kind: "status" });
    if (priceField) cols.push({ key: priceField, header: humanize(priceField), kind: "price" });
    else {
      const numF = m.fields.find((f) => f.type === "Int");
      if (numF) cols.push({ key: numF.name, header: humanize(numF.name), kind: "number" });
    }
    if (dateField) cols.push({ key: dateField, header: humanize(dateField), kind: "date" });
    // de-dup by key, cap 5
    const seen = new Set();
    const columns = cols.filter((c) => c.key && !seen.has(c.key) && seen.add(c.key)).slice(0, 5);

    modelMeta[m.name] = {
      name: m.name,
      label,
      labelPlural,
      route,
      icon: iconFor(label + " " + m.name),
      titleField,
      subtitleField,
      statusField,
      priceField,
      dateField,
      columns,
    };
  }

  // detail fields (for RecordView) per model
  for (const m of models) {
    const meta = modelMeta[m.name];
    const detail = [];
    for (const f of m.fields) {
      if (["id", "passwordHash", "updatedAt"].includes(f.name)) continue;
      let kind = "text";
      if (f.kind === "fk") {
        detail.push({ name: f.base, label: humanize(f.base), kind: "relation", titleField: titleOf[f.target] || "name" });
        continue;
      }
      if (f.type === "DateTime") kind = "date";
      else if (f.type === "Boolean") kind = "bool";
      else if (f.type === "Float") kind = meta.priceField === f.name ? "price" : "number";
      else if (f.type === "Int") kind = "number";
      else if (STATUS_PRIORITY.includes(f.name)) kind = "status";
      detail.push({ name: f.name, label: humanize(f.name), kind });
    }
    meta.detailFields = detail.slice(0, 12);
  }

  // managed models (nav + CRUD pages): rank non-system models
  const nonSystem = models.filter((m) => !SYSTEM_MODELS.has(m.name) && !/Item$|Line$|SubOrder$|Detail$/.test(m.name));
  const incoming = {};
  for (const m of models) for (const f of m.fields) if (f.kind === "fk") incoming[f.target] = (incoming[f.target] || 0) + 1;
  const ranked = [...nonSystem].sort((a, b) => {
    if (a.name === spec.primary) return -1;
    if (b.name === spec.primary) return 1;
    return (incoming[b.name] || 0) - (incoming[a.name] || 0) || b.fields.length - a.fields.length;
  });
  let managed = ranked.slice(0, 6).map((m) => m.name);
  if (managed.length < 2 && models.some((m) => m.name === "User")) managed.push("User");

  // writable config (create forms + submit route)
  const writable = {};
  for (const name of managed) {
    const m = models.find((x) => x.name === name);
    const meta = modelMeta[name];
    const fields = [];
    fields.push({ name: meta.titleField, label: humanize(meta.titleField), type: meta.titleField === "email" ? "email" : "text", required: true });
    const descF = m.fields.find((f) => /description|notes|summary|message|content/.test(f.name));
    if (descF) fields.push({ name: descF.name, label: humanize(descF.name), type: "textarea" });
    if (meta.statusField) fields.push({ name: meta.statusField, label: humanize(meta.statusField), type: "select", options: statusOptions(name, meta.statusField).map((o) => ({ value: o, label: humanize(o) })) });
    if (meta.priceField) fields.push({ name: meta.priceField, label: humanize(meta.priceField), type: "number" });
    const emailF = m.fields.find((f) => f.name === "email");
    if (emailF && meta.titleField !== "email") fields.push({ name: "email", label: "Email", type: "email" });
    const phoneF = m.fields.find((f) => f.name === "phone");
    if (phoneF) fields.push({ name: "phone", label: "Phone", type: "tel" });
    writable[name] = { delegate: camel(name), fields: fields.slice(0, 6) };
  }

  // nav
  const nav = [{ href: "/app", label: "Dashboard", icon: "dashboard" }];
  for (const name of managed) nav.push({ href: modelMeta[name].route, label: modelMeta[name].labelPlural, icon: modelMeta[name].icon });
  nav.push({ href: "/app/reports", label: "Reports", icon: "chart" });
  nav.push({ href: "/app/settings", label: "Settings", icon: "settings" });

  // marketing links
  const primaryMeta = modelMeta[spec.primary];
  const marketingLinks =
    spec.kind === "landing"
      ? [
          { label: "Overview", href: "/#features" },
          { label: "How it works", href: "/#how" },
          { label: "FAQ", href: "/#faq" },
        ]
      : [
          { label: "Home", href: "/" },
          { label: primaryMeta ? primaryMeta.labelPlural : "Browse", href: "/browse" },
          { label: "Features", href: "/#features" },
          { label: "Contact", href: "/#contact" },
        ];

  return { models: modelMeta, managed, writable, nav, marketingLinks, titleOf };
}

export const metaHelpers = { humanize, kebab, statusOptions };
