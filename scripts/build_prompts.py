#!/usr/bin/env python3
"""PromptKita catalog generator — single source of truth for the 100 app prompts.

Pipeline (run with no args to rebuild everything):

  1. Read every prompts/*.yaml.
  2. Ensure each prompt carries its structured fields (role_line, target_users,
     brand_design, user_roles, env flags, seed_data, domain). On first run these
     are extracted once from the legacy ``ready_to_use_prompt`` text; afterwards
     they are the authored source.
  3. Map each prompt's granular ``domain`` to a consolidated ``category``.
  4. Regenerate ``ready_to_use_prompt`` from ONE master template so the prompt
     text can never drift from the structured fields again.
  5. Rewrite prompts/*.yaml in a canonical style, then emit every derived file:
     prompts-md/*.md, prompts-md/README.md, PROMPT_INDEX.yaml, ALL_PROMPTS.yaml.

Usage:
  python3 scripts/build_prompts.py            # rebuild everything
  python3 scripts/build_prompts.py --check     # fail if anything is out of date
"""
import os
import re
import sys
import glob
import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "prompts")
OUT_MD = os.path.join(ROOT, "prompts-md")

# --------------------------------------------------------------------------- #
# Consolidated category taxonomy: maps each granular ``domain`` to one of 12.  #
# --------------------------------------------------------------------------- #
CATEGORY_MAP = {
    # Booking & Reservations
    "Booking & Reservation": "Booking & Reservations",
    "Reservations & Hospitality": "Booking & Reservations",
    "Rental & Reservations": "Booking & Reservations",
    "Service Booking & Operations": "Booking & Reservations",
    "Booking & Client Proofing": "Booking & Reservations",
    # E-commerce & Retail
    "E-commerce": "E-commerce & Retail",
    "E-commerce & Booking": "E-commerce & Retail",
    "Digital Products & E-commerce": "E-commerce & Retail",
    "Subscriptions & Recurring Commerce": "E-commerce & Retail",
    "Wholesale & Order Management": "E-commerce & Retail",
    "Catering & Order Management": "E-commerce & Retail",
    "B2B Commerce": "E-commerce & Retail",
    "Marketplace & Listings": "E-commerce & Retail",
    "Agriculture Marketplace": "E-commerce & Retail",
    # Marketing & Lead Gen
    "Marketing Website": "Marketing & Lead Gen",
    "Marketing & Campaigns": "Marketing & Lead Gen",
    "Marketing & Lead Capture": "Marketing & Lead Gen",
    "Marketing & Lead Generation": "Marketing & Lead Gen",
    "Directory & Lead Generation": "Marketing & Lead Gen",
    # AI Apps
    "AI Tools": "AI Apps",
    # Analytics & Dashboards
    "Analytics & Dashboards": "Analytics & Dashboards",
    "Sustainability & Tracking": "Analytics & Dashboards",
    "Operations & Tracking": "Analytics & Dashboards",
    # Business Operations
    "Business & Operations": "Business Operations",
    "Multi-Location Operations": "Business Operations",
    "Property & Facilities": "Business Operations",
    "Construction & Project Ops": "Business Operations",
    "Agriculture & Operations": "Business Operations",
    "Builders & SaaS": "Business Operations",
    "Client Portal & Freelance Ops": "Business Operations",
    "Client Portal & Planning": "Business Operations",
    # Productivity & Personal
    "Productivity & Personal": "Productivity & Personal",
    "Smart Home & Devices": "Productivity & Personal",
    # Education & Learning
    "Education & E-learning": "Education & Learning",
    "Education & Portals": "Education & Learning",
    "Education & Scholarships": "Education & Learning",
    "Education Admissions": "Education & Learning",
    "Education Communication": "Education & Learning",
    "Knowledge & Training": "Education & Learning",
    "Library & Lending": "Education & Learning",
    "Coaching Portals": "Education & Learning",
    # Healthcare & Wellness
    "Healthcare Portals": "Healthcare & Wellness",
    "Telehealth & Consultations": "Healthcare & Wellness",
    "Nutrition & Coaching": "Healthcare & Wellness",
    "Pharmacy & Operations": "Healthcare & Wellness",
    # Community, Civic & Nonprofit
    "Community & Membership": "Community, Civic & Nonprofit",
    "Community & Organizations": "Community, Civic & Nonprofit",
    "Community & Social": "Community, Civic & Nonprofit",
    "Nonprofit & Fundraising": "Community, Civic & Nonprofit",
    "Volunteer & Community Ops": "Community, Civic & Nonprofit",
    "Food Community": "Community, Civic & Nonprofit",
    "Sports League Management": "Community, Civic & Nonprofit",
    "Culture & Ticketing": "Community, Civic & Nonprofit",
    "Civic & Safety Reporting": "Community, Civic & Nonprofit",
    "Crisis & Coordination": "Community, Civic & Nonprofit",
    "Municipal & Scheduling": "Community, Civic & Nonprofit",
    # Finance, Legal & HR
    "Client Portal & Accounting": "Finance, Legal & HR",
    "Legal & Case Management": "Finance, Legal & HR",
    "Insurance & Claims": "Finance, Legal & HR",
    "Sales Documents & Contracts": "Finance, Legal & HR",
    "Recruitment & ATS": "Finance, Legal & HR",
    "Recruitment & Job Boards": "Finance, Legal & HR",
    # Logistics & Field Service
    "On-Demand Logistics": "Logistics & Field Service",
    "Parking & Mobility": "Logistics & Field Service",
    "Fleet & Maintenance": "Logistics & Field Service",
    "Field Service Management": "Logistics & Field Service",
}

# Display order for the catalog (most-populated themes first).
CATEGORY_ORDER = [
    "Booking & Reservations",
    "E-commerce & Retail",
    "Business Operations",
    "AI Apps",
    "Analytics & Dashboards",
    "Marketing & Lead Gen",
    "Education & Learning",
    "Healthcare & Wellness",
    "Community, Civic & Nonprofit",
    "Finance, Legal & HR",
    "Logistics & Field Service",
    "Productivity & Personal",
]

# --------------------------------------------------------------------------- #
# Master template: boilerplate that is identical for every prompt.            #
# --------------------------------------------------------------------------- #
C = {
"STANDARD": "Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.",
"TECH STACK": "- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui\n- Prisma ORM; PostgreSQL for production, with SQLite supported for local development\n- Auth.js (or secure hashed email/password) wherever accounts and roles are needed\n- Zod and React Hook Form for both client-side and server-side validation\n- Vercel-ready and Docker-ready",
"NAVIGATION": "- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.",
"BRAND_TAIL": "Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.",
"DB_TAIL": "- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.",
"BACKEND_TAIL": "- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.",
"ENV_HEAD": "- Provide a complete .env.example documenting every variable.\n- Local mode runs fully on seed data with mock modes and no paid keys.",
"ENV_PAY": "- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.",
"ENV_AI": "- AI: implement a deterministic, offline mock AI provider behind one interface; switch to a real model (OpenAI/Anthropic) via an env var, defaulting to mock so it runs with no keys.",
"ENV_NOTIF": "- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.",
"UX REQUIREMENTS": "- Every data view has loading, empty, error, and success states.\n- All forms validate on client and server with inline messages and clear success/error feedback.\n- Realistic, human copywriting throughout — no dummy filler text.",
"SECURITY": "- Keep all secrets in environment variables (never in code). Apply role-based access control where roles exist, protect private routes, handle any file uploads safely, add rate-limiting guidance for public endpoints, and write audit logs for sensitive actions where relevant.",
"TESTING": "- Include unit test examples for the core logic and integration test examples for the most important flows, plus a manual QA checklist and a production smoke-test checklist.",
"DEPLOYMENT": "- Include a Dockerfile (and docker-compose where useful), the production build and database-migration commands, Vercel deployment notes, and a post-deployment smoke test.",
"DELIVERABLES": "- Create every file needed to run locally and to deploy: the full Next.js App Router structure, the Prisma schema and migrations, a seed script, .env.example, a README with exact copy-paste setup commands (install, prisma generate and migrate, seed, dev), a Dockerfile, and test examples.\n- Build only real, working screens: functional navigation, working forms, no dead buttons, no unfinished screens, no dummy filler, no leftover task comments, and no unresolved template tokens.",
"ACCEPTANCE": "- Installs and runs locally with the documented commands, on seed data, with no paid keys.\n- Builds successfully and migrates the database successfully.\n- Every page renders and is reachable from the navigation.\n- Forms validate on client and server; protected routes are protected; role permissions work.\n- Admin pages work where included; mock modes work without paid keys; real-provider setup is documented.\n- Loading, empty, error, and success states are present; responsive layout works.\n- No unresolved template tokens or dummy filler remains; no dead buttons or dead links remain.\n- README setup steps and production deployment steps are complete.",
}

_SECTIONS = ["STANDARD", "APP", "BRAND & DESIGN", "TECH STACK", "PAGES / SCREENS",
    "NAVIGATION", "USER ROLES", "CORE FEATURES", "DATABASE MODELS", "BACKEND / API LOGIC",
    "ENVIRONMENT & MODES", "SEED DATA", "UX REQUIREMENTS", "SECURITY", "TESTING",
    "DEPLOYMENT", "DELIVERABLES", "ACCEPTANCE"]


def _split_legacy(rp):
    """Split a legacy ready_to_use_prompt into its named sections (one-time migration)."""
    lines = rp.splitlines()
    idx = []
    for i, ln in enumerate(lines):
        s = ln.strip()
        for sec in _SECTIONS:
            if s == sec or s.startswith(sec + " ") or s.startswith(sec + ":"):
                idx.append((i, sec)); break
    out = {}
    for k, (i, sec) in enumerate(idx):
        j = idx[k + 1][0] if k + 1 < len(idx) else len(lines)
        out[sec] = "\n".join(lines[i + 1:j]).strip()
    out["__intro"] = "\n".join(lines[:idx[0][0]]).strip()
    return out


def ensure_structured_fields(d):
    """Populate the structured prompt fields from the legacy prompt text if absent."""
    if "role_line" in d and "brand_design" in d and "user_roles" in d:
        return d
    s = _split_legacy(d["ready_to_use_prompt"])
    d["role_line"] = re.search(r"^(.*?), building a production-grade full-stack app scaffold",
                               s["__intro"], re.S).group(1)
    app = s["APP"]
    d["domain"] = re.search(r"Type:\s*.+?\(([^)]*)\)", app).group(1).strip()
    d["target_users"] = re.search(r"Target users:\s*(.+)", app).group(1).strip().rstrip(".")
    bd = s["BRAND & DESIGN"]
    d["brand_design"] = bd[:bd.find("Use Tailwind")].strip()
    d["user_roles"] = [ln.strip()[2:].strip()
                       for ln in s["USER ROLES"].splitlines() if ln.strip().startswith("- ")]
    env = s["ENVIRONMENT & MODES"]
    d["env_payments"] = "- Payments:" in env
    d["env_ai"] = "- AI:" in env
    d["seed_data"] = s["SEED DATA"].strip()
    return d


def render_ready_prompt(d):
    """Assemble the ready_to_use_prompt from structured fields + master template."""
    P = []
    P.append(f"{d['role_line']}, building a production-grade full-stack app scaffold with "
             "local run support and deployment readiness. Build the complete application now. "
             "Do not ask any questions — every detail below is already decided.")
    P += ["", "STANDARD", C["STANDARD"], ""]
    P += ["APP",
          f"Name: {d['app_name']}",
          f"Type: {d['title']} ({d['domain']})",
          f"Target users: {d['target_users']}.",
          f"Business goal: {str(d['business_goal']).rstrip('.')}.", ""]
    P += ["BRAND & DESIGN", f"{d['brand_design']} {C['BRAND_TAIL']}", ""]
    P += ["TECH STACK", C["TECH STACK"], ""]
    P += ["PAGES / SCREENS"]
    P += [f"{n}. {pg}" for n, pg in enumerate(d["required_pages"], 1)]
    P += ["", "NAVIGATION", C["NAVIGATION"], ""]
    P += ["USER ROLES"] + [f"- {r}" for r in d["user_roles"]] + [""]
    P += ["CORE FEATURES"] + [f"- {ft}" for ft in d["required_features"]] + [""]
    P += ["DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)"]
    P += [f"- {m['name']}: {', '.join(m['fields'])}" for m in d["database_models"]]
    P += [C["DB_TAIL"], ""]
    P += ["BACKEND / API LOGIC"] + [f"- {b}" for b in d["backend_logic"][:-3]]
    P += [C["BACKEND_TAIL"], ""]
    env = ["ENVIRONMENT & MODES", C["ENV_HEAD"]]
    if d.get("env_payments"): env.append(C["ENV_PAY"])
    if d.get("env_ai"): env.append(C["ENV_AI"])
    env.append(C["ENV_NOTIF"]); env.append("")
    P += env
    P += ["SEED DATA", d["seed_data"], ""]
    P += ["UX REQUIREMENTS", C["UX REQUIREMENTS"], ""]
    P += ["SECURITY", C["SECURITY"], ""]
    P += ["TESTING", C["TESTING"], ""]
    P += ["DEPLOYMENT", C["DEPLOYMENT"], ""]
    P += ["DELIVERABLES", C["DELIVERABLES"], ""]
    P += ["ACCEPTANCE CHECKLIST — the app must pass all of these", C["ACCEPTANCE"]]
    return "\n".join(P).rstrip()


# --------------------------------------------------------------------------- #
# Canonical YAML output                                                       #
# --------------------------------------------------------------------------- #
FIELD_ORDER = ["prompt_id", "title", "slug", "category", "domain", "app_name", "app_type",
    "difficulty", "best_for", "target_user", "target_users", "role_line", "business_goal",
    "production_standard", "brand_design", "recommended_tools", "tech_stack",
    "files_to_generate", "required_pages", "required_features", "database_models",
    "backend_logic", "user_roles", "env_payments", "env_ai", "seed_data",
    "security_requirements", "testing_requirements", "deployment_requirements",
    "acceptance_checklist", "ready_to_use_prompt"]


class _Dumper(yaml.SafeDumper):
    pass


def _str_rep(dumper, data):
    if "\n" in data:
        return dumper.represent_scalar("tag:yaml.org,2002:str", data, style="|")
    return dumper.represent_scalar("tag:yaml.org,2002:str", data)


_Dumper.add_representer(str, _str_rep)


def dump_yaml(d):
    ordered = {k: d[k] for k in FIELD_ORDER if k in d}
    for k in d:  # keep any unexpected keys at the end so nothing is silently dropped
        if k not in ordered:
            ordered[k] = d[k]
    return yaml.dump(ordered, Dumper=_Dumper, sort_keys=False, allow_unicode=True,
                     default_flow_style=False, width=10 ** 9)


# --------------------------------------------------------------------------- #
# Markdown rendering                                                          #
# --------------------------------------------------------------------------- #
def _bullets(items):
    return "\n".join(f"- {i}" for i in items)


def _numbered(items):
    return "\n".join(f"{n}. {i}" for n, i in enumerate(items, 1))


def _render_tech(ts):
    if not isinstance(ts, dict):
        return str(ts)
    labels = {"frontend": "Frontend", "backend": "Backend", "auth": "Auth",
              "validation": "Validation", "deployment": "Deployment"}
    lines = []
    for key, label in labels.items():
        val = ts.get(key)
        if isinstance(val, list):
            lines.append(f"- **{label}:** " + ", ".join(val))
        elif val:
            lines.append(f"- **{label}:** {val}")
    for mk, ml in (("local_mode", "Local mode"), ("production_mode", "Production mode")):
        mode = ts.get(mk)
        if isinstance(mode, dict):
            state = "enabled" if mode.get("enabled") else "disabled"
            lines.append(f"\n**{ml}** ({state})")
            for note in mode.get("notes", []) or []:
                lines.append(f"- {note}")
    return "\n".join(lines)


def _render_models(models):
    out = []
    for m in models:
        out.append(f"### {m.get('name', 'Model')}")
        if m.get("fields"):
            out.append("**Fields:** " + ", ".join(f"`{f}`" for f in m["fields"]))
        if m.get("relationships"):
            out.append("\n**Relationships:**")
            out.append(_bullets(m["relationships"]))
        out.append("")
    return "\n".join(out).rstrip()


def render_md(d):
    md = [f"# {d.get('app_name') or d.get('title', 'App')}\n"]
    if d.get("business_goal"):
        md.append(f"> {d['business_goal']}\n")
    rows = [("Prompt ID", d.get("prompt_id")), ("Title", d.get("title")),
            ("Slug", d.get("slug")), ("Category", d.get("category")),
            ("Domain", d.get("domain")), ("App type", d.get("app_type")),
            ("Difficulty", d.get("difficulty")), ("Target user", d.get("target_user"))]
    if d.get("recommended_tools"):
        rows.append(("Recommended tools", ", ".join(d["recommended_tools"])))
    md.append("| Field | Value |")
    md.append("|---|---|")
    for k, v in rows:
        if v:
            md.append(f"| **{k}** | {v} |")
    md.append("")
    if d.get("best_for"):
        md.append(f"**Best for:** {d['best_for']}\n")
    if d.get("production_standard"):
        md.append(f"**Production standard:** {d['production_standard']}\n")
    sections = [
        ("Tech stack", lambda: _render_tech(d.get("tech_stack"))),
        ("Files to generate", lambda: _bullets(d.get("files_to_generate", []))),
        ("Required pages", lambda: _numbered(d.get("required_pages", []))),
        ("Required features", lambda: _bullets(d.get("required_features", []))),
        ("Database models", lambda: _render_models(d.get("database_models", []))),
        ("Backend logic", lambda: _bullets(d.get("backend_logic", []))),
        ("Security requirements", lambda: _bullets(d.get("security_requirements", []))),
        ("Testing requirements", lambda: _bullets(d.get("testing_requirements", []))),
        ("Deployment requirements", lambda: _bullets(d.get("deployment_requirements", []))),
    ]
    for title, fn in sections:
        body = fn()
        if body and body.strip():
            md.append(f"## {title}\n")
            md.append(body + "\n")
    if d.get("acceptance_checklist"):
        md.append("## Acceptance checklist\n")
        md.append("\n".join(f"- [ ] {c}" for c in d["acceptance_checklist"]) + "\n")
    md.append("## Ready-to-use prompt\n")
    md.append("Copy everything in the block below and paste it into your AI coding tool.\n")
    md.append("```text")
    md.append(d["ready_to_use_prompt"].rstrip())
    md.append("```")
    return "\n".join(md).rstrip() + "\n"


# --------------------------------------------------------------------------- #
# Catalog / index files                                                       #
# --------------------------------------------------------------------------- #
def _cat_sort_key(cat):
    return (CATEGORY_ORDER.index(cat) if cat in CATEGORY_ORDER else len(CATEGORY_ORDER), cat)


def render_catalog(index):
    by_cat = {}
    for it in index:
        by_cat.setdefault(it["category"], []).append(it)
    md = ["# Prompt Catalog (Markdown)\n"]
    md.append(f"Human-readable Markdown versions of all {len(index)} app prompts. "
              "Each file mirrors its `prompts/*.yaml` source and ends with a copy-paste "
              "`Ready-to-use prompt` block. These files are generated — edit the YAML and "
              "run `python3 scripts/build_prompts.py`.\n")
    md.append("Looking for the structured source? See [`../prompts/`](../prompts/) "
              "and [`../PROMPT_INDEX.yaml`](../PROMPT_INDEX.yaml).\n")
    md.append("## By category\n")
    for cat in sorted(by_cat, key=_cat_sort_key):
        items = sorted(by_cat[cat], key=lambda x: x["id"])
        md.append(f"### {cat} ({len(items)})\n")
        md.append("| # | App | Domain | Difficulty | Best for |")
        md.append("|---|---|---|---|---|")
        for it in items:
            md.append(f"| {it['id']} | [{it['title']}]({it['file']}) | {it['domain']} | "
                      f"{it['difficulty']} | {it['best_for']} |")
        md.append("")
    md.append("## Full list\n")
    md.append("| # | App | Category | Difficulty |")
    md.append("|---|---|---|---|")
    for it in sorted(index, key=lambda x: x["id"]):
        md.append(f"| {it['id']} | [{it['title']}]({it['file']}) | {it['category']} | "
                  f"{it['difficulty']} |")
    md.append("")
    return "\n".join(md).rstrip() + "\n"


def render_prompt_index(rows):
    return yaml.dump({"prompts": rows}, Dumper=_Dumper, sort_keys=False,
                     allow_unicode=True, default_flow_style=False, width=10 ** 9)


def render_all_prompts(all_data):
    return yaml.dump({"prompts": all_data}, Dumper=_Dumper, sort_keys=False,
                     allow_unicode=True, default_flow_style=False, width=10 ** 9)


# --------------------------------------------------------------------------- #
def build(check=False):
    os.makedirs(OUT_MD, exist_ok=True)
    files = sorted(glob.glob(os.path.join(SRC, "*.yaml")))
    index, idx_rows, all_data = [], [], []
    changed = []
    unmapped = set()

    for path in files:
        with open(path, encoding="utf-8") as f:
            d = yaml.safe_load(f)
        d = ensure_structured_fields(d)
        d.setdefault("domain", d.get("category"))
        cat = CATEGORY_MAP.get(d["domain"])
        if cat is None:
            unmapped.add(d["domain"]); cat = "Business Operations"
        d["category"] = cat
        d["ready_to_use_prompt"] = render_ready_prompt(d)

        new_yaml = dump_yaml(d)
        old_yaml = open(path, encoding="utf-8").read()
        if new_yaml != old_yaml:
            changed.append(os.path.basename(path))
            if not check:
                open(path, "w", encoding="utf-8").write(new_yaml)

        base = os.path.splitext(os.path.basename(path))[0]
        md = render_md(d)
        md_path = os.path.join(OUT_MD, base + ".md")
        if not os.path.exists(md_path) or open(md_path, encoding="utf-8").read() != md:
            changed.append(base + ".md")
            if not check:
                open(md_path, "w", encoding="utf-8").write(md)

        index.append({"id": d.get("prompt_id", ""), "title": d.get("title", base),
                      "category": d["category"], "domain": d.get("domain", ""),
                      "difficulty": d.get("difficulty", ""), "file": base + ".md",
                      "best_for": d.get("best_for", "")})
        idx_rows.append({"prompt_id": d.get("prompt_id", ""), "title": d.get("title", ""),
                         "filename": f"prompts/{base}.yaml", "category": d["category"],
                         "domain": d.get("domain", ""), "app_type": d.get("app_type", ""),
                         "difficulty": d.get("difficulty", ""), "best_for": d.get("best_for", ""),
                         "recommended_tools": d.get("recommended_tools", [])})
        all_data.append({k: d[k] for k in FIELD_ORDER if k in d})

    if unmapped:
        print("WARNING: unmapped domains (defaulted to Business Operations):", sorted(unmapped))

    derived = [
        (os.path.join(OUT_MD, "README.md"), render_catalog(index)),
        (os.path.join(ROOT, "PROMPT_INDEX.yaml"), render_prompt_index(idx_rows)),
        (os.path.join(ROOT, "ALL_PROMPTS.yaml"), render_all_prompts(all_data)),
    ]
    for fp, content in derived:
        if not os.path.exists(fp) or open(fp, encoding="utf-8").read() != content:
            changed.append(os.path.relpath(fp, ROOT))
            if not check:
                open(fp, "w", encoding="utf-8").write(content)

    if check:
        if changed:
            print(f"OUT OF DATE ({len(changed)}): " + ", ".join(changed[:10]) +
                  (" ..." if len(changed) > 10 else ""))
            return 1
        print("Up to date.")
        return 0
    print(f"Built {len(files)} prompts. Updated {len(changed)} file(s).")
    return 0


if __name__ == "__main__":
    sys.exit(build(check="--check" in sys.argv))
