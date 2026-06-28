/* Seed script for Studio Nova Creative Agency Portfolio Website — generates realistic demo data. Run with: npm run seed */
import { PrismaClient } from "../generated/prisma-client";
import bcrypt from "bcryptjs";

const db = new PrismaClient();
const SCHEMA = [
  {
    "name": "User",
    "count": 6,
    "isUser": true,
    "fields": [
      {
        "name": "email",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": false,
        "attr": ""
      },
      {
        "name": "name",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": false,
        "attr": ""
      },
      {
        "name": "role",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": false,
        "attr": ""
      },
      {
        "name": "createdAt",
        "kind": "scalar",
        "type": "DateTime",
        "list": false,
        "text": false,
        "attr": "@default(now())"
      }
    ]
  },
  {
    "name": "Project",
    "count": 12,
    "isUser": false,
    "fields": [
      {
        "name": "title",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": false,
        "attr": ""
      },
      {
        "name": "category",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": false,
        "attr": ""
      },
      {
        "name": "summary",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": true,
        "attr": ""
      },
      {
        "name": "cover",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": false,
        "attr": ""
      },
      {
        "name": "content",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": true,
        "attr": ""
      },
      {
        "name": "createdAt",
        "kind": "scalar",
        "type": "DateTime",
        "list": false,
        "text": false,
        "attr": "@default(now())"
      }
    ]
  },
  {
    "name": "Inquiry",
    "count": 10,
    "isUser": false,
    "fields": [
      {
        "name": "name",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": false,
        "attr": ""
      },
      {
        "name": "email",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": false,
        "attr": ""
      },
      {
        "name": "company",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": false,
        "attr": ""
      },
      {
        "name": "message",
        "kind": "scalar",
        "type": "Int",
        "list": false,
        "text": false,
        "attr": "@default(0)"
      },
      {
        "name": "createdAt",
        "kind": "scalar",
        "type": "DateTime",
        "list": false,
        "text": false,
        "attr": "@default(now())"
      }
    ]
  },
  {
    "name": "TeamMember",
    "count": 10,
    "isUser": false,
    "fields": [
      {
        "name": "name",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": false,
        "attr": ""
      },
      {
        "name": "role",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": false,
        "attr": ""
      },
      {
        "name": "photo",
        "kind": "scalar",
        "type": "String",
        "list": false,
        "text": false,
        "attr": ""
      },
      {
        "name": "createdAt",
        "kind": "scalar",
        "type": "DateTime",
        "list": false,
        "text": false,
        "attr": "@default(now())"
      }
    ]
  }
];
const ROLES = ["Visitor","Admin"];

const pick = (a) => a[Math.floor(Math.random() * a.length)];
const rint = (lo, hi) => Math.floor(lo + Math.random() * (hi - lo + 1));
const rfloat = (lo, hi) => Math.round((lo + Math.random() * (hi - lo)) * 100) / 100;
const chance = (p) => Math.random() < p;
const daysFromNow = (d) => new Date(Date.now() + d * 86400000);
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 48);

const FIRST = ["Ava","Liam","Noah","Maya","Ethan","Sofia","Lucas","Mia","Aria","Kai","Zoe","Owen","Isla","Leo","Nora","Ivan","Priya","Diego","Hana","Omar","Lena","Ruby","Felix","Tara","Jonas","Amara","Cole","Nina","Bram","Yara"];
const LAST = ["Carter","Nguyen","Patel","Rossi","Khan","Silva","Okafor","Meyer","Haddad","Lopez","Kim","Novak","Reyes","Dubois","Costa","Ahmed","Berg","Tan","Ivanov","Moreno","Walsh","Park","Vasquez","Cohen","Bauer","Singh","Romano","Flynn","Adeyemi","Larsen"];
const COMPANIES = ["Northwind","Acme Labs","BlueHarbor","Vertex","Lumen Co","Greenfield","Riverstone","Summit","Orbit","Kindred","Meridian","Foxglove","Anchor","Cobalt","Maple & Co","Drift","Beacon","Cedar","Atlas","Halcyon"];
const ADJ = ["Premium","Classic","Deluxe","Signature","Essential","Modern","Vintage","Coastal","Urban","Artisan","Limited","Everyday","Pro","Studio","Heritage","Bright","Calm","Bold"];
const NOUN = ["Collection","Edition","Series","Bundle","Set","Pack","Suite","Kit","Plan","Experience","Package","Selection"];
const CITY = ["Lisbon","Austin","Kyoto","Berlin","Cape Town","Lima","Oslo","Da Nang","Porto","Bali","Tbilisi","Medellín","Split","Penang","Ghent"];
const SENTENCE = ["Reliable and well-loved by the team.","A favorite for everyday use.","Carefully prepared and quality-checked.","Thoughtfully designed with attention to detail.","Highly rated by recent customers.","Flexible options to fit most needs.","Crafted for comfort and durability.","A dependable pick at a fair price."];

function statusOptionsFor(model, field) {
  const m = model.toLowerCase();
  if (/stage/.test(field)) return ["Lead","Qualified","Proposal","Negotiation","Won","Lost"];
  if (/booking|reservation|appointment/.test(m)) return ["pending","confirmed","completed","cancelled","no-show"];
  if (/order|payment|invoice|transaction/.test(m)) return ["pending","paid","processing","shipped","completed","cancelled"];
  if (/ticket|complaint|request|approval/.test(m)) return ["open","pending","in_progress","resolved","closed"];
  if (/task|activity/.test(m)) return ["todo","in_progress","done"];
  if (/product|listing|item|course|service/.test(m)) return ["active","draft","archived"];
  if (/priority/.test(field)) return ["low","medium","high","urgent"];
  return ["active","pending","inactive","completed"];
}

function genValue(model, f, ctx) {
  const name = f.name;
  const ln = name.toLowerCase();
  if (f.kind === "fk") {
    const pool = ctx.ids[f.target] || [];
    if (!pool.length) return undefined;
    return pick(pool);
  }
  if (f.type === "DateTime") {
    if (/checkout|enddate|expires|returndate|completedat/.test(ln)) return daysFromNow(rint(1, 20));
    if (/checkin|startdate|scheduled|due|date|joinedat|paidat|closedat/.test(ln)) return daysFromNow(rint(-30, 25));
    return daysFromNow(rint(-40, 0));
  }
  if (f.type === "Boolean") return chance(/done|paid|completed|active|published|verified/.test(ln) ? 0.5 : 0.3);
  if (f.type === "Float") {
    if (/salary|wage/.test(ln)) return rint(38, 130) * 1000;
    if (/budget|revenue|payout|value|total|balance/.test(ln)) return rfloat(200, 9000);
    if (/rate|tax|discount|commission/.test(ln)) return rfloat(2, 25);
    return rfloat(15, 480);
  }
  if (f.type === "Int") {
    if (/capacity|seats|guests|pax/.test(ln)) return rint(1, 8);
    if (/stock|quantity|qty|count|reorder/.test(ln)) return rint(0, 240);
    if (/points|score|xp/.test(ln)) return rint(0, 1200);
    if (/rating/.test(ln)) return rint(3, 5);
    if (/progress|level|streak|reps|sets|calories|steps|duration|minutes|hours|days/.test(ln)) return rint(1, 90);
    return rint(1, 100);
  }
  // strings
  if (f.list) return pick([ADJ.slice(0,3), ["Wi-Fi","Parking","Breakfast"], ["new","popular"], ["design","tips"], ["cotton","summer"]]).join(",");
  if (ln === "email") return ctx.email || (slugify(ctx.personName || "user") + ctx.i + "@demo.test");
  if (ln === "name" || ln === "fullname") return ctx.isPeople ? (ctx.personName || ctx.label) : ctx.label;
  if (ln === "title" || ln === "subject" || ln === "label") return ctx.label;
  if (ln === "slug") return slugify((ctx.label || ctx.personName || "item") + "-" + ctx.i);
  if (ln === "company") return pick(COMPANIES);
  if (ln === "phone") return "+1 " + rint(200,989) + " " + rint(200,989) + " " + rint(1000,9999);
  if (ln === "role") return ctx.role || pick(ROLES);
  if (/stage|status|priority|state/.test(ln)) return pick(statusOptionsFor(model, ln));
  if (ln === "type" || ln === "category" || ln === "method") return pick(["standard","premium","basic","express","custom"]);
  if (ln === "sku") return "SKU-" + rint(10000, 99999);
  if (ln === "number") return /invoice|order/.test(model.toLowerCase()) ? "NO-" + rint(1000,9999) : String(rint(101, 940));
  if (ln === "city" || ln === "location") return pick(CITY);
  if (ln === "address") return rint(10,990) + " " + pick(LAST) + " St, " + pick(CITY);
  if (ln === "color") return pick(["#2563eb","#059669","#db2777","#d97706","#7c3aed"]);
  if (ln === "url" || ln === "link" || ln === "website") return "https://example.com/" + slugify(ctx.label || "link");
  if (ln === "currency") return "USD";
  if (f.text || /description|notes?|content|message|body|bio|summary|details|instructions|answer|review|comment|question/.test(ln))
    return pick(SENTENCE) + (chance(0.5) ? " " + pick(SENTENCE) : "");
  return ctx.label;
}

async function main() {
  console.log("Seeding Studio Nova Creative Agency Portfolio Website…");
  // wipe (reverse dependency order)
  for (const m of [...SCHEMA].reverse()) {
    try { await (db as any)[m.name.charAt(0).toLowerCase() + m.name.slice(1)].deleteMany({}); } catch {}
  }

  const ids: Record<string, string[]> = {};
  const passwordHash = bcrypt.hashSync("demo1234", 10);

  for (const model of SCHEMA) {
    ids[model.name] = [];
    const delegate = (db as any)[model.name.charAt(0).toLowerCase() + model.name.slice(1)];
    if (!delegate) continue;

    if (model.isUser) {
      const demo: any[] = [];
      const baseRoles = ROLES.length ? ROLES : ["Admin","Member"];
      const normalized = baseRoles.map((r) => r.split("/")[0].trim());
      // first account is always the admin/owner
      const adminRole = normalized.find((r) => /admin|owner|manager/i.test(r)) || normalized[0];
      demo.push({ name: "Demo Admin", email: "admin@demo.test", role: adminRole });
      const second = normalized.find((r) => r !== adminRole) || "Member";
      demo.push({ name: pick(FIRST) + " " + pick(LAST), email: "user@demo.test", role: second });
      demo.push({ name: pick(FIRST) + " " + pick(LAST), email: "user2@demo.test", role: normalized[normalized.length-1] || second });
      while (demo.length < model.count) {
        const fn = pick(FIRST), ls = pick(LAST);
        demo.push({ name: fn + " " + ls, email: (fn+"."+ls+demo.length).toLowerCase()+"@demo.test", role: pick(normalized) });
      }
      for (let i = 0; i < demo.length; i++) {
        const d = demo[i];
        const data: any = { passwordHash };
        for (const f of model.fields) {
          if (f.name === "name") data.name = d.name;
          else if (f.name === "email") data.email = d.email;
          else if (f.name === "role") data.role = d.role;
          else {
            const v = genValue(model.name, f, { i, personName: d.name, email: d.email, role: d.role, label: d.name, ids, isPeople: true });
            if (v !== undefined) data[f.name] = v;
          }
        }
        const row = await delegate.create({ data });
        ids[model.name].push(row.id);
      }
      continue;
    }

    const isPeople = /(Guest|Contact|Customer|Employee|Member|Student|Patient|Tutor|Vendor|Instructor|Client|Staff|Lead|Applicant|Attendee|Subscriber|Person|Doctor|Teacher)/.test(model.name);
    const humanModel = model.name.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
    for (let i = 0; i < model.count; i++) {
      const personName = pick(FIRST) + " " + pick(LAST);
      const label = isPeople ? personName : pick(ADJ) + " " + humanModel + " " + pick(NOUN) + " " + (i + 1);
      const ctx = { i, personName, label, role: pick(ROLES), ids, isPeople };
      const data: any = {};
      let ok = true;
      for (const f of model.fields) {
        const v = genValue(model.name, f, ctx);
        if (v === undefined) {
          // required fk missing -> skip row
          if (f.kind === "fk") { ok = false; break; }
          continue;
        }
        data[f.name] = v;
      }
      if (!ok) continue;
      try {
        const row = await delegate.create({ data });
        ids[model.name].push(row.id);
      } catch (e) {
        // skip rows that violate a constraint rather than failing the whole seed
      }
    }
    console.log("  " + model.name + ": " + ids[model.name].length);
  }
  console.log("Seed complete. Demo logins: admin@demo.test / user@demo.test — password: demo1234");
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => db.$disconnect());
