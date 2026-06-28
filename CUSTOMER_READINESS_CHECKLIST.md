# Customer Readiness Checklist

## What the buyer gets
- 100 individual YAML prompt files (`prompts/01-...` through `prompts/100-...`), one complete app each
- `ALL_PROMPTS.yaml` and `PROMPT_INDEX.yaml` covering all 100
- Full supporting docs: how-to, product description, production-readiness, deployment, security, license, QA report, update log, and a duplicate-check report

## What each prompt is designed to produce
A **production-grade full-stack app scaffold with local run support and deployment readiness** — a Next.js + TypeScript + Tailwind + Prisma app with authentication and roles where needed, real pages and working forms, server- and client-side validation, loading/empty/error/success states, seed data, tests, Docker, and deployment notes.

## Production-grade scaffold expectations
The generated app installs, runs locally on seed data, builds, and migrates. It is structured — not yet hardened — for production.

## Local development expectations
Runs fully offline on seed data with mock payment, notification, and AI modes. No paid API keys required.

## Real provider requirements
To go live you supply your own: database (PostgreSQL), payment gateway, email/SMS provider, AI provider (where relevant), domain, hosting, and SSL. Each prompt and the guides describe where these plug in.

## Payment / email / SMS / AI / deployment / security notes
Mock modes are the local default. Real integrations are documented as swap-in points behind environment variables. Security, deployment, and compliance guidance are included as separate guides.

## Honest bottom line
You are buying 100 high-quality, structured starting points that save days of setup each — not 100 finished, launch-ready products. Final production readiness depends on your own setup and review.
