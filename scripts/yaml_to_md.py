#!/usr/bin/env python3
"""Convert each YAML app prompt into a clean, readable Markdown file.

Reads every file in prompts/*.yaml and writes a matching prompts-md/*.md,
then builds prompts-md/README.md as a catalog grouped by category.
"""
import os
import glob
import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "prompts")
OUT = os.path.join(ROOT, "prompts-md")


def bullets(items):
    return "\n".join(f"- {i}" for i in items)


def numbered(items):
    return "\n".join(f"{n}. {i}" for n, i in enumerate(items, 1))


def render_tech_stack(ts):
    if not isinstance(ts, dict):
        return str(ts)
    labels = {
        "frontend": "Frontend",
        "backend": "Backend",
        "auth": "Auth",
        "validation": "Validation",
        "deployment": "Deployment",
    }
    lines = []
    for key, label in labels.items():
        val = ts.get(key)
        if isinstance(val, list):
            lines.append(f"- **{label}:** " + ", ".join(val))
        elif val:
            lines.append(f"- **{label}:** {val}")
    for mode_key, mode_label in (("local_mode", "Local mode"),
                                 ("production_mode", "Production mode")):
        mode = ts.get(mode_key)
        if isinstance(mode, dict):
            enabled = mode.get("enabled")
            state = "enabled" if enabled else "disabled"
            lines.append(f"\n**{mode_label}** ({state})")
            for note in mode.get("notes", []) or []:
                lines.append(f"- {note}")
    return "\n".join(lines)


def render_models(models):
    out = []
    for m in models:
        out.append(f"### {m.get('name', 'Model')}")
        fields = m.get("fields", []) or []
        if fields:
            out.append("**Fields:** " + ", ".join(f"`{f}`" for f in fields))
        rels = m.get("relationships", []) or []
        if rels:
            out.append("\n**Relationships:**")
            out.append(bullets(rels))
        out.append("")
    return "\n".join(out).rstrip()


def render(data):
    app_name = data.get("app_name") or data.get("title", "App")
    md = []
    md.append(f"# {app_name}\n")

    goal = data.get("business_goal")
    if goal:
        md.append(f"> {goal}\n")

    # Metadata table
    rows = [
        ("Prompt ID", data.get("prompt_id")),
        ("Title", data.get("title")),
        ("Slug", data.get("slug")),
        ("Category", data.get("category")),
        ("App type", data.get("app_type")),
        ("Difficulty", data.get("difficulty")),
        ("Target user", data.get("target_user")),
    ]
    tools = data.get("recommended_tools")
    if tools:
        rows.append(("Recommended tools", ", ".join(tools)))
    md.append("| Field | Value |")
    md.append("|---|---|")
    for k, v in rows:
        if v:
            md.append(f"| **{k}** | {v} |")
    md.append("")

    if data.get("best_for"):
        md.append(f"**Best for:** {data['best_for']}\n")
    if data.get("production_standard"):
        md.append(f"**Production standard:** {data['production_standard']}\n")

    sections = [
        ("Tech stack", lambda: render_tech_stack(data.get("tech_stack"))),
        ("Files to generate", lambda: bullets(data.get("files_to_generate", []))),
        ("Required pages", lambda: numbered(data.get("required_pages", []))),
        ("Required features", lambda: bullets(data.get("required_features", []))),
        ("Database models", lambda: render_models(data.get("database_models", []))),
        ("Backend logic", lambda: bullets(data.get("backend_logic", []))),
        ("Security requirements", lambda: bullets(data.get("security_requirements", []))),
        ("Testing requirements", lambda: bullets(data.get("testing_requirements", []))),
        ("Deployment requirements", lambda: bullets(data.get("deployment_requirements", []))),
    ]
    for title, fn in sections:
        body = fn()
        if body and body.strip():
            md.append(f"## {title}\n")
            md.append(body + "\n")

    checklist = data.get("acceptance_checklist", [])
    if checklist:
        md.append("## Acceptance checklist\n")
        md.append("\n".join(f"- [ ] {c}" for c in checklist) + "\n")

    prompt = data.get("ready_to_use_prompt")
    if prompt:
        md.append("## Ready-to-use prompt\n")
        md.append("Copy everything in the block below and paste it into your AI coding tool.\n")
        md.append("```text")
        md.append(prompt.rstrip())
        md.append("```")

    return "\n".join(md).rstrip() + "\n"


def main():
    os.makedirs(OUT, exist_ok=True)
    files = sorted(glob.glob(os.path.join(SRC, "*.yaml")))
    index = []
    for path in files:
        with open(path, encoding="utf-8") as f:
            data = yaml.safe_load(f)
        base = os.path.splitext(os.path.basename(path))[0]
        out_path = os.path.join(OUT, base + ".md")
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(render(data))
        index.append({
            "id": data.get("prompt_id", ""),
            "title": data.get("title", base),
            "category": data.get("category", "Uncategorized"),
            "difficulty": data.get("difficulty", ""),
            "file": base + ".md",
            "best_for": data.get("best_for", ""),
        })
    write_catalog(index)
    print(f"Wrote {len(files)} markdown prompt files + catalog to {OUT}")


def write_catalog(index):
    by_cat = {}
    for item in index:
        by_cat.setdefault(item["category"], []).append(item)

    md = []
    md.append("# Prompt Catalog (Markdown)\n")
    md.append(f"Human-readable Markdown versions of all {len(index)} app prompts. "
              "Each file mirrors its `prompts/*.yaml` source and ends with a copy-paste "
              "`Ready-to-use prompt` block.\n")
    md.append("Looking for the structured source? See [`../prompts/`](../prompts/) "
              "and [`../PROMPT_INDEX.yaml`](../PROMPT_INDEX.yaml).\n")

    md.append("## By category\n")
    for cat in sorted(by_cat):
        items = sorted(by_cat[cat], key=lambda x: x["id"])
        md.append(f"### {cat}\n")
        md.append("| # | App | Difficulty | Best for |")
        md.append("|---|---|---|---|")
        for it in items:
            md.append(f"| {it['id']} | [{it['title']}]({it['file']}) | "
                      f"{it['difficulty']} | {it['best_for']} |")
        md.append("")

    md.append("## Full list\n")
    md.append("| # | App | Category | Difficulty |")
    md.append("|---|---|---|---|")
    for it in sorted(index, key=lambda x: x["id"]):
        md.append(f"| {it['id']} | [{it['title']}]({it['file']}) | "
                  f"{it['category']} | {it['difficulty']} |")
    md.append("")

    with open(os.path.join(OUT, "README.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(md).rstrip() + "\n")


if __name__ == "__main__":
    main()
