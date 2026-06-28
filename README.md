# 100 Production-Grade App Prompts (YAML)

A premium pack of 100 production-grade app-builder prompts, each stored as an individual, valid YAML file, for building real full-stack app scaffolds with AI coding tools. Prompts 1-50 cover core booking, commerce, SaaS, and AI tools; prompts 51-100 (Volume 2) expand into 50 new, non-overlapping verticals.

## What this product is
Each YAML file describes one complete application and contains a copy-paste `ready_to_use_prompt`. The standard is a **production-grade full-stack app scaffold with local run support and deployment readiness**: the generated app runs locally on seed data with mock modes, and is structured for deployment with security, testing, and real-service integration guidance.

## What is inside
- `prompts/` — 100 individual `.yaml` prompt files (one app each), numbered 01-100
- `prompts-md/` — the same 100 prompts as human-readable Markdown, plus a category catalog (`prompts-md/README.md`)
- `ALL_PROMPTS.yaml` — every prompt in one YAML file
- `PROMPT_INDEX.yaml` — a machine-readable index of all 100 prompts
- `README.md`, `HOW_TO_USE.md`, `PRODUCT_DESCRIPTION.md`
- `CUSTOMER_READINESS_CHECKLIST.md`, `PRODUCTION_READINESS_GUIDE.md`
- `DEPLOYMENT_GUIDE.md`, `SECURITY_AND_COMPLIANCE_NOTES.md`
- `LICENSE_AND_USAGE.md`, `QA_REPORT.md`, `UPDATE_LOG.md`
- `DUPLICATE_CHECK_REPORT.md` — how Volume 2 stays distinct from the first 50

## Who it is for
Freelancers and agencies building client app scaffolds, founders validating an idea, and developers who want a strong, security-aware starting point across 100 different app ideas.

## Why the prompts are in YAML
YAML keeps every prompt structured and machine-readable: fields like pages, features, database models, security, and the copy-paste `ready_to_use_prompt` are easy to scan, diff, and feed into tooling — far cleaner than loose Markdown.

## How to use
Open any file in `prompts/`, copy the `ready_to_use_prompt` value, and paste it into Claude Code, Cursor, Replit, Bolt, Lovable, or v0. Prefer reading? Browse [`prompts-md/`](prompts-md/) for the same prompts rendered as Markdown and copy from the **Ready-to-use prompt** block. See `HOW_TO_USE.md` for the full workflow.

The Markdown in `prompts-md/` is generated from the YAML source — regenerate it any time with `python3 scripts/yaml_to_md.py`.

## Recommended tools
Claude Code, Cursor, Replit, Bolt, Lovable, v0.

## Honest standard
These are **production-grade scaffolds**, not guaranteed-live deployments. Each app runs locally on seed data with mock payment/notification/AI modes and no paid keys. Going live still requires your own credentials, real provider setup, a real database with migrations, and a security review.

## Important limitations
Mock modes simulate payments, notifications, and AI locally. Real integrations, compliance, and production hardening are your responsibility and are documented in the guides included.
