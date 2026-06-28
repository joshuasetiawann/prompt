import fs from "node:fs";
import yaml from "js-yaml";

/* ----------------------------------------------------------- color handling */
const COLOR_WORDS = {
  navy: "#1e3a5f", "deep navy": "#16314f", blue: "#2563eb", "royal blue": "#1d4ed8",
  "sky blue": "#0ea5e9", sky: "#0ea5e9", teal: "#0d9488", emerald: "#059669", green: "#16a34a",
  "forest green": "#15803d", mint: "#10b981", lime: "#65a30d", gold: "#c8a45c", "warm gold": "#c79a4b",
  amber: "#d97706", orange: "#ea580c", "burnt orange": "#c2410c", coral: "#f97362", peach: "#fb923c",
  red: "#dc2626", crimson: "#be123c", rose: "#e11d48", pink: "#db2777", magenta: "#c026d3",
  purple: "#7c3aed", violet: "#7c3aed", indigo: "#4f46e5", lavender: "#8b5cf6", plum: "#9333ea",
  charcoal: "#1f2937", "slate gray": "#475569", slate: "#334155", graphite: "#374151", black: "#0f172a",
  ink: "#0b1220", brown: "#92400e", terracotta: "#c2613f", sand: "#caa472", beige: "#cbb893",
  cream: "#f5efe2", "off-white": "#f7f5f0", ivory: "#f8f5ee", white: "#ffffff", gray: "#64748b",
  grey: "#64748b", turquoise: "#06b6d4", cyan: "#0891b2", maroon: "#7f1d1d", burgundy: "#7b1e3b",
  "deep green": "#14532d", olive: "#4d7c0f", yellow: "#ca8a04", "midnight blue": "#172554",
  "electric blue": "#2563eb", aqua: "#06b6d4", fuchsia: "#c026d3", "soft pink": "#f9a8d4",
};

const NEUTRAL_BY_TONE = [
  { rx: /(warm|cream|sand|beige|terracotta|earth|brown|gold|ivory)/i, neutral: "stone" },
  { rx: /(tech|dark|charcoal|graphite|ink|midnight|electric|neon)/i, neutral: "zinc" },
  { rx: /(green|emerald|forest|natural|organic|calm)/i, neutral: "neutral" },
];

function pickColors(prompt, fallbackSeed) {
  const m = /Colors?:\s*([^.]+)\./i.exec(prompt || "");
  const phrase = (m?.[1] || "").toLowerCase();
  const found = [];
  // longest names first so "deep navy" wins over "navy"
  const names = Object.keys(COLOR_WORDS).sort((a, b) => b.length - a.length);
  let scan = phrase;
  for (const n of names) {
    if (scan.includes(n)) {
      found.push(COLOR_WORDS[n]);
      scan = scan.split(n).join(" ");
    }
    if (found.length >= 3) break;
  }
  const palettes = [
    ["#1e3a5f", "#c8a45c"], ["#0d9488", "#f59e0b"], ["#4f46e5", "#06b6d4"],
    ["#be123c", "#0f172a"], ["#15803d", "#ca8a04"], ["#7c3aed", "#ec4899"],
    ["#0ea5e9", "#1e293b"], ["#c2410c", "#1f2937"],
  ];
  const fb = palettes[fallbackSeed % palettes.length];
  let brand = found[0] || fb[0];
  let accent = found.find((c) => c !== brand) || fb[1];
  // avoid near-white brand
  if (["#ffffff", "#f7f5f0", "#f8f5ee", "#f5efe2"].includes(brand)) brand = fb[0];
  return { brand, accent };
}

function pickNeutral(style) {
  for (const n of NEUTRAL_BY_TONE) if (n.rx.test(style || "")) return n.neutral;
  return "slate";
}

function pickFonts(style, prompt) {
  const s = (style + " " + prompt).toLowerCase();
  const luxury = /(luxur|elegan|premium|boutique|sophisticat|refined|editorial|timeless|classic)/.test(s);
  const tech = /(tech|modern|bold|developer|ai |saas|dashboard|data|minimal)/.test(s);
  if (luxury) return { heading: "SERIF", body: "SANS" };
  if (tech) return { heading: "GROTESK", body: "SANS" };
  return { heading: "SANS", body: "SANS" };
}

/* ------------------------------------------------------- field/model parsing */
const SYSTEM_MODELS = new Set([
  "User", "Account", "Session", "VerificationToken", "AuditLog", "Notification",
  "Setting", "Settings",
]);

const CATALOG_NOUNS = [
  "Room", "Villa", "Property", "Listing", "Product", "Course", "Service", "Car", "Vehicle",
  "Space", "Package", "Event", "MenuItem", "Item", "Plan", "Ticket", "Lesson", "Tour",
  "Appointment", "Class", "Session", "Asset", "Template", "Prompt", "Ebook", "Profile",
];

function singularize(name) {
  if (/ies$/.test(name)) return name.replace(/ies$/, "y");
  if (/ses$/.test(name)) return name.replace(/es$/, "");
  if (/s$/.test(name) && !/ss$/.test(name)) return name.replace(/s$/, "");
  return name;
}
function cap(s) {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}
function camel(s) {
  return s ? s[0].toLowerCase() + s.slice(1) : s;
}
function pluralize(name) {
  if (/[^aeiou]y$/.test(name)) return name.replace(/y$/, "ies");
  if (/(s|x|z|ch|sh)$/.test(name)) return name + "es";
  return name + "s";
}

/** Map a foreign-key field (e.g. roomId, ownerId) to a target model name. */
function fkTarget(fieldBase, modelNames) {
  const direct = cap(fieldBase);
  if (modelNames.has(direct)) return direct;
  const ROLE_TO_USER = ["owner", "user", "author", "assignee", "manager", "creator", "createdBy", "agent", "rep", "host", "instructor", "tutor", "teacher", "member", "requester", "approver", "uploadedBy", "reviewer", "seller", "vendor", "staff", "employee", "submittedBy"];
  if (ROLE_TO_USER.includes(fieldBase) && modelNames.has("User")) return "User";
  // strip common suffixes
  const alt = cap(fieldBase.replace(/(Type|Category|Group|Status)$/, ""));
  if (modelNames.has(alt)) return alt;
  // pluralizable match
  for (const mn of modelNames) if (camel(mn) === fieldBase) return mn;
  return null;
}

const FLOAT_HINT = /(amount|price|baseprice|total|subtotal|value|balance|cost|rate|salary|deposit|revenue|fee|tax|discount|wage|budget|payout|commission)/i;
const INT_HINT = /(quantity|qty|stock|capacity|count|points|streak|duration|views|progress|rating|level|reorder|seats|reps|sets|calories|steps|minutes|hours|days|age|tier|sort|position)/i;
const BOOL_HINT = /^(is|has|can)?(done|paid|active|enabled|published|featured|completed|depositpaid|verified|read|archived|approved|public|default|pinned|starred)$/i;
const DATE_HINT = /(at$|date$|datetime|deadline|checkin|checkout|due|start|end|expires|scheduledfor|publishedat|paidat|joinedat|closedat|time$)/i;
const JSON_LIST_HINT = /(amenities|tags|images|photos|skills|gallery|attachments|items|features|options|labels|categories)$/i;
const TEXT_HINT = /(description|notes?|content|message|body|bio|summary|address|instructions|details|comment|review|answer|question)/i;

function inferField(name, modelNames) {
  const lower = name.toLowerCase();
  if (name === "id") return { kind: "id" };
  if (lower === "createdat") return { kind: "scalar", type: "DateTime", attr: "@default(now())" };
  if (lower === "updatedat") return { kind: "scalar", type: "DateTime", attr: "@updatedAt" };
  if (/Id$/.test(name) && name.length > 2) {
    const base = name.replace(/Id$/, "");
    const target = fkTarget(base, modelNames);
    if (target) return { kind: "fk", base, target };
    return { kind: "scalar", type: "String" }; // unknown fk -> plain string
  }
  if (BOOL_HINT.test(name)) return { kind: "scalar", type: "Boolean", attr: "@default(false)" };
  if (DATE_HINT.test(lower)) return { kind: "scalar", type: "DateTime", attr: "@default(now())" };
  if (FLOAT_HINT.test(lower)) return { kind: "scalar", type: "Float", attr: "@default(0)" };
  if (INT_HINT.test(lower)) return { kind: "scalar", type: "Int", attr: "@default(0)" };
  if (JSON_LIST_HINT.test(lower)) return { kind: "scalar", type: "String", attr: '@default("")', list: true };
  if (TEXT_HINT.test(lower)) return { kind: "scalar", type: "String", text: true };
  return { kind: "scalar", type: "String" };
}

/* --------------------------------------------------------------- role mapping */
function parseRoles(prompt) {
  const roles = [];
  const block = /USER ROLES\s*([\s\S]*?)\n\s*\n/i.exec(prompt || "");
  const body = block?.[1] || "";
  for (const line of body.split("\n")) {
    const m = /^\s*-\s*([A-Za-z][A-Za-z\/ ]+?)\s*[—-]/.exec(line);
    if (m) roles.push(m[1].trim());
  }
  return roles;
}

/* ------------------------------------------------------------- kind detection */
function detectKind(id, category) {
  const c = (category || "").toLowerCase();
  const landing = ["17", "18", "48", "49"];
  if (landing.includes(id)) return "landing";
  if (/marketing|lead/.test(c) && !/e-commerce/.test(c)) return "landing";
  if (/portal/.test(c)) return "dashboard";
  if (/booking|reservation|e-commerce|ecommerce|marketplace|listing|e-learning|membership|travel/.test(c))
    return "storefront";
  if (/community & social/.test(c)) return "dashboard";
  return "dashboard";
}

/* ----------------------------------------------------------------- nav icons */
const ICON_BY_WORD = [
  [/dashboard|overview|home/i, "dashboard"], [/calendar|schedule|booking|appointment/i, "calendar"],
  [/room|villa|propert|listing|space|venue/i, "building"], [/product|catalog|shop|store/i, "bag"],
  [/order|cart|checkout|sale/i, "cart"], [/contact|customer|client|guest|patient|lead|people/i, "users"],
  [/deal|pipeline|opportunit/i, "kanban"], [/task|activit|to-?do/i, "list-checks"],
  [/invoice|billing|payment|finance|transaction|expense/i, "receipt"], [/report|analytic|stat|metric/i, "chart"],
  [/inventory|stock|warehouse/i, "warehouse"], [/course|lesson|class|learn|module/i, "book"],
  [/member|community|subscri/i, "badge-check"], [/ticket|event|complaint|support/i, "ticket"],
  [/document|file|content|article/i, "file-text"], [/employee|staff|hr|team/i, "briefcase"],
  [/delivery|shipment|track|logistic/i, "truck"], [/message|chat|conversation|inbox/i, "message"],
  [/setting|config|admin|profile|account/i, "settings"], [/car|vehicle|rental/i, "car"],
  [/student|grade|enroll/i, "graduation-cap"], [/habit|streak|routine/i, "repeat"],
  [/workout|fitness|exercise/i, "dumbbell"], [/budget|wallet|money/i, "wallet"],
  [/ai|generat|prompt|assistant|bot/i, "sparkles"], [/menu|food|cafe|restaurant/i, "utensils"],
  [/payment|payout/i, "credit-card"], [/approval|request|workflow/i, "clipboard-check"],
  [/attendance|clock|time/i, "clock"], [/link|bio|page/i, "link"], [/social|post|planner/i, "megaphone"],
  [/resume|cv/i, "file-text"], [/language|flashcard|word/i, "book"],
];
function iconFor(label) {
  for (const [rx, icon] of ICON_BY_WORD) if (rx.test(label)) return icon;
  return "layers";
}

/* ------------------------------------------------------------------- exports */
export function loadSpec(file, index = 0) {
  const raw = fs.readFileSync(file, "utf8");
  const y = yaml.load(raw);
  const prompt = y.ready_to_use_prompt || "";
  const id = String(y.prompt_id).padStart(2, "0");
  const styleM = /Brand style:\s*([^.]+)\./i.exec(prompt);
  const style = styleM?.[1] || "";
  const colors = pickColors(prompt, index);
  const fonts = pickFonts(style, prompt);
  const neutral = pickNeutral(style + " " + (colors.brand || ""));

  const modelDefs = Array.isArray(y.database_models) ? y.database_models : [];
  const modelNames = new Set(modelDefs.map((m) => m.name));

  // build models with inferred fields + relations
  const models = modelDefs.map((m) => {
    const fields = (m.fields || []).map((fn) => ({ name: fn, ...inferField(fn, modelNames) }));
    return { name: m.name, fields, raw: m };
  });

  // every app needs a User model for the shared cookie auth; inject one if absent
  if (!modelNames.has("User")) {
    const uf = ["id", "email", "passwordHash", "name", "role", "createdAt", "updatedAt"].map((fn) => ({
      name: fn,
      ...inferField(fn, modelNames),
    }));
    models.unshift({ name: "User", fields: uf, raw: { name: "User" }, synthetic: true });
    modelNames.add("User");
  }

  // ensure the User model carries the fields the shared cookie auth + seeder need
  const userModel = models.find((m) => m.name === "User");
  if (userModel) {
    for (const fn of ["email", "passwordHash", "name", "role"]) {
      if (!userModel.fields.some((f) => f.name === fn)) {
        userModel.fields.push({ name: fn, ...inferField(fn, modelNames) });
      }
    }
  }

  // primary catalog model
  const nonSystem = models.filter((m) => !SYSTEM_MODELS.has(m.name));
  let primary =
    nonSystem.find((m) => CATALOG_NOUNS.includes(m.name)) ||
    nonSystem.find((m) => new RegExp(m.name, "i").test(y.title)) ||
    nonSystem[0] ||
    models[0];

  const kind = detectKind(id, y.category);

  // tagline from business goal
  const tagline = (y.business_goal || y.best_for || "").replace(/\s+/g, " ").trim();

  // brand short style descriptor
  const heroSub =
    /BRAND & DESIGN[\s\S]*?Brand style:\s*([^.]+\.[^.]*\.)/i.exec(prompt)?.[1] || tagline;

  return {
    id,
    slug: y.slug,
    title: y.title,
    appName: y.app_name || y.title,
    category: y.category,
    difficulty: y.difficulty,
    kind,
    colors,
    fonts,
    neutral,
    style: style.trim(),
    tagline,
    heroSub: heroSub.trim(),
    businessGoal: y.business_goal || "",
    bestFor: y.best_for || "",
    targetUser: y.target_user || "",
    roles: parseRoles(prompt),
    requiredPages: y.required_pages || [],
    requiredFeatures: y.required_features || [],
    backendLogic: y.backend_logic || [],
    securityRequirements: y.security_requirements || [],
    models,
    modelNames: [...modelNames],
    primary: primary?.name,
    recommendedTools: y.recommended_tools || [],
    techStack: y.tech_stack || {},
  };
}

export const helpers = {
  singularize, cap, camel, pluralize, fkTarget, iconFor, SYSTEM_MODELS, CATALOG_NOUNS,
};
