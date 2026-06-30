# ✨ PromptKita — 100 Production-Grade App Prompts + Browser

A curated pack of **100 production-grade, app-builder prompts** for AI coding tools
(Claude Code, Cursor, Replit, Bolt, Lovable, v0), each stored as a structured YAML
file with a copy-paste `ready_to_use_prompt`. The repo also ships the **runnable app
scaffolds** generated from those prompts and a lightweight **PromptKita website** for
browsing and copying prompts in the browser.

Every prompt targets the same bar: a **production-grade full-stack scaffold with local
run support and deployment readiness** — runs locally on seed data with mock modes and
no paid keys, and is structured for deployment with security, testing, and
real-service integration guidance.

---

## 📁 Repository layout

```
.
├── index.html, assets/           # PromptKita website — browse, search & copy prompts
├── prompts/                      # 100 structured prompt sources (.yaml), numbered 01–100
├── prompts-md/                   # Same 100 prompts as readable Markdown + category catalog
├── apps/                         # Runnable Next.js scaffolds generated from the prompts
├── packages/, tools/             # The build engine that turns a prompt into a running app
├── scripts/build_prompts.py      # Single source of truth: regenerates prompts + catalog
├── PROMPT_INDEX.yaml             # Machine-readable index of all 100 prompts
├── ALL_PROMPTS.yaml              # Every prompt in one YAML file
└── *.md                          # Product, deployment, security & QA guides
```

---

## 🚀 Using the prompts

Open any file in [`prompts/`](prompts/), copy its `ready_to_use_prompt`, and paste it
into your AI coding tool. Prefer reading? Browse [`prompts-md/`](prompts-md/) for the
same prompts as Markdown and copy from the **Ready-to-use prompt** block, or open the
website and copy with one click.

Each prompt is consistent by construction: app-specific details (brand, pages, models,
features, roles) live in structured YAML fields, while the shared scaffold standard
(stack, navigation, security, testing, deployment, acceptance) comes from one master
template — so no two prompts disagree on the boilerplate.

### Browsing in the website

The PromptKita site is a zero-dependency static page (HTML/CSS/JS, no build step):

```bash
# open directly
xdg-open index.html        # Linux
open index.html            # macOS

# or serve statically (recommended, enables the Clipboard API)
python3 -m http.server 8000   # then visit http://localhost:8000
```

The prompt library shown on the site lives in [`assets/js/data.js`](assets/js/data.js).

---

## 🧩 The catalog is generated

`prompts/*.yaml` is the source. Everything else in the catalog is derived and must not
be hand-edited:

```bash
python3 scripts/build_prompts.py          # rebuild prompts-md/, PROMPT_INDEX, ALL_PROMPTS
python3 scripts/build_prompts.py --check   # CI-friendly: fail if anything is stale
```

`build_prompts.py` regenerates each `ready_to_use_prompt` from the master template,
rewrites the YAML in canonical form, maps each prompt's granular `domain` to one of 12
consolidated `category` values, and writes the Markdown and index files. Requires
`pyyaml` (`pip install pyyaml`).

---

## 🗂️ Categories

The 100 prompts are grouped into 12 browsable categories — Booking & Reservations,
E-commerce & Retail, Business Operations, AI Apps, Analytics & Dashboards, Marketing &
Lead Gen, Education & Learning, Healthcare & Wellness, Community/Civic & Nonprofit,
Finance/Legal & HR, Logistics & Field Service, and Productivity & Personal. Each prompt
also keeps its original, more specific `domain` label. See
[`prompts-md/README.md`](prompts-md/README.md) for the full catalog.

---

## 🛠️ Building a prompt into a running app

The `apps/` directory holds the Next.js + Prisma (SQLite) + Tailwind scaffolds produced
from the prompts by the engine in `tools/` and `packages/`. See
[`HOW_TO_USE.md`](HOW_TO_USE.md) and [`DEPLOYMENT_GUIDE.md`](DEPLOYMENT_GUIDE.md) for the
full workflow, and [`PRODUCTION_READINESS_GUIDE.md`](PRODUCTION_READINESS_GUIDE.md) /
[`SECURITY_AND_COMPLIANCE_NOTES.md`](SECURITY_AND_COMPLIANCE_NOTES.md) before going live.

---

## ✅ Honest standard

These are **production-grade scaffolds, not guaranteed-live deployments.** Each app
runs locally on seed data with mock payment / notification / AI modes and no paid keys.
Going live still requires your own credentials, real provider setup, a real database
with migrations, and a security review. Mock modes simulate integrations locally; real
integrations, compliance, and production hardening are your responsibility and are
documented in the guides above.

---

## 🤝 Contributing

Improve or add a prompt by editing `prompts/*.yaml` and running
`python3 scripts/build_prompts.py`, then open a pull request. That one command
regenerates everything downstream — Markdown, indexes, and the website's
`assets/js/data.js` (which is generated, not hand-edited). New prompts, fixes, and
feature ideas are all welcome.

## 📄 License

See [`LICENSE`](LICENSE) and [`LICENSE_AND_USAGE.md`](LICENSE_AND_USAGE.md). Free to use,
modify, and share.
