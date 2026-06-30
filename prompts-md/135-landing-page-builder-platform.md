# Convertly Landing Page Builder & A/B Testing Platform

> Let teams build landing pages from reusable sections, embed lead-capture forms, run A/B split tests across variants, and track per-page conversion analytics

| Field | Value |
|---|---|
| **Prompt ID** | 135 |
| **Title** | Landing Page Builder & A/B Testing Platform |
| **Slug** | landing-page-builder-platform |
| **Category** | Marketing & Lead Gen |
| **Domain** | Conversion Landing Pages |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Growth marketer; Campaign manager |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building a funnel/landing-page builder SaaS for growth teams and agencies that need fast, testable campaign pages without a designer.

**Production standard:** Production-grade scaffold with local development support, deployment readiness, security guidance, test guidance, and real-service integration readiness

## Tech stack

- **Frontend:** Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Next.js Server Actions or API Routes, Prisma ORM, PostgreSQL for production, SQLite for local development
- **Auth:** Auth.js or secure email/password authentication
- **Validation:** Zod, React Hook Form
- **Deployment:** Vercel-ready, Docker-ready

**Local mode** (enabled)
- App must run locally without paid API keys
- Use mock notification log when email/SMS is needed

**Production mode** (enabled)
- .env.example included
- Production database setup (PostgreSQL)
- Deployment guide included
- Real provider integration readiness
- Production security checklist

## Files to generate

- Complete Next.js App Router structure
- Prisma schema and migrations
- Seed script with demo data
- .env.example
- README.md with setup and run commands
- Dockerfile
- docker-compose.yml when useful
- Unit and integration test examples

## Required pages

1. Dashboard with pages, live experiments, and conversion summary
2. Page builder canvas with section library and live preview
3. Page settings for slug, SEO, domain, and publish state
4. A/B experiment setup with variants, traffic split, and goal
5. Experiment results with variant conversion rates and winner indicator
6. Lead inbox with submissions per page and export
7. Published page (public, server-rendered)
8. Templates and section library
9. Auth (sign in / register)
10. Admin: team, domains, and template library

## Required features

- Drag-and-drop page builder with reusable, configurable sections
- Reusable section and full-page template library
- Embedded lead-capture forms with configurable fields stored per page
- Page publishing with custom slug, SEO metadata, and draft/published states
- A/B split testing across variants with a configurable traffic split and goal
- Visitor assignment to a variant with sticky bucketing and view tracking
- Conversion tracking from form submissions or goal events per variant
- Experiment results with per-variant conversion rate and a winner indicator
- Lead submission inbox with CSV export

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### LandingPage
**Fields:** `id`, `ownerId`, `name`, `slug`, `status`, `seoTitle`, `seoDescription`, `publishedAt`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### PageVariant
**Fields:** `id`, `pageId`, `name`, `sections`, `isControl`, `trafficWeight`, `createdAt`, `updatedAt`

**Relationships:**
- pageId -> references the related record

### Experiment
**Fields:** `id`, `pageId`, `name`, `goalType`, `status`, `trafficSplit`, `startedAt`, `endedAt`, `winningVariantId`, `createdAt`, `updatedAt`

**Relationships:**
- pageId -> references the related record
- winningVariantId -> references the related record

### LeadForm
**Fields:** `id`, `pageId`, `name`, `fields`, `createdAt`, `updatedAt`

**Relationships:**
- pageId -> references the related record

### LeadSubmission
**Fields:** `id`, `formId`, `variantId`, `pageId`, `data`, `createdAt`, `updatedAt`

**Relationships:**
- formId -> references the related record
- variantId -> references the related record
- pageId -> references the related record

### VisitorEvent
**Fields:** `id`, `pageId`, `variantId`, `experimentId`, `type`, `sessionId`, `occurredAt`, `createdAt`, `updatedAt`

**Relationships:**
- pageId -> references the related record
- variantId -> references the related record
- experimentId -> references the related record
- sessionId -> references the related record

## Backend logic

- Persist a page's section tree per variant and render the published page server-side from its slug
- Assign each visitor to a variant by the experiment's traffic split with sticky bucketing
- Record visitor view and conversion events against the assigned variant and experiment
- Capture lead-form submissions, validate configured fields, and store them per page and variant
- Compute per-variant conversion rates and flag a leading or winning variant
- Manage publish state and enforce slug uniqueness across draft and published pages
- Export page leads as CSV
- Server-side validation on every mutation with Zod
- Role-based authorization and protected routes for private pages
- Scope every query to the current user/tenant (no cross-user data access)

## Security requirements

- No hardcoded secrets — all secrets via environment variables
- Server-side validation on every mutation
- Role-based access control where roles exist
- Protected routes for all private pages
- Safe file-upload handling where uploads exist
- Rate-limiting guidance for public endpoints
- Audit logs for sensitive actions where relevant

## Testing requirements

- Unit test examples for key business logic
- Integration test examples for important flows where practical
- Manual QA checklist
- Production smoke-test checklist

## Deployment requirements

- Local development commands
- Production build command
- Database migration command
- Seed command
- Vercel deployment notes
- Docker deployment notes
- Post-deployment smoke test

## Acceptance checklist

- [ ] App installs successfully
- [ ] App runs locally with seed data
- [ ] App builds successfully
- [ ] Database migrates successfully
- [ ] Seed data loads successfully
- [ ] All navigation works
- [ ] Forms validate on client and server
- [ ] Protected routes are protected
- [ ] Role permissions work
- [ ] Admin pages work where included
- [ ] Mock mode works without paid keys
- [ ] Real provider setup is documented
- [ ] No unresolved template tokens or dummy filler remains
- [ ] No dead buttons or dead links remain
- [ ] Responsive layout works
- [ ] README setup steps are complete
- [ ] Production deployment steps are documented
- [ ] A published page renders server-side from its slug and serves a variant according to the experiment's traffic split
- [ ] Visitors are stickily bucketed to one variant, and views and conversions roll up into per-variant conversion rates with a winner indicator
- [ ] Submitting an embedded lead form stores the lead against the correct page and variant and appears in the exportable lead inbox

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds conversion landing-page and experimentation products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: Convertly Landing Page Builder & A/B Testing Platform
Type: Landing Page Builder & A/B Testing Platform (Conversion Landing Pages)
Target users: growth marketers who build and split-test landing pages and campaign managers who track conversions and capture leads.
Business goal: Let teams build landing pages from reusable sections, embed lead-capture forms, run A/B split tests across variants, and track per-page conversion analytics.

BRAND & DESIGN
Brand style: bold, conversion-focused, crisp. Colors: vivid violet, jet black, bright lime. A drag-and-drop page canvas with a section-library sidebar, a live preview, and a variant A/B comparison panel. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with pages, live experiments, and conversion summary
2. Page builder canvas with section library and live preview
3. Page settings for slug, SEO, domain, and publish state
4. A/B experiment setup with variants, traffic split, and goal
5. Experiment results with variant conversion rates and winner indicator
6. Lead inbox with submissions per page and export
7. Published page (public, server-rendered)
8. Templates and section library
9. Auth (sign in / register)
10. Admin: team, domains, and template library

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Growth Marketer — build pages, configure variants, and run experiments
- Campaign Manager — manage campaigns, review conversions, and export leads
- Editor — edit page content and sections without publishing
- Admin — manage team, domains, and the section/template library

CORE FEATURES
- Drag-and-drop page builder with reusable, configurable sections
- Reusable section and full-page template library
- Embedded lead-capture forms with configurable fields stored per page
- Page publishing with custom slug, SEO metadata, and draft/published states
- A/B split testing across variants with a configurable traffic split and goal
- Visitor assignment to a variant with sticky bucketing and view tracking
- Conversion tracking from form submissions or goal events per variant
- Experiment results with per-variant conversion rate and a winner indicator
- Lead submission inbox with CSV export

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- LandingPage: id, ownerId, name, slug, status, seoTitle, seoDescription, publishedAt, createdAt, updatedAt
- PageVariant: id, pageId, name, sections, isControl, trafficWeight, createdAt, updatedAt
- Experiment: id, pageId, name, goalType, status, trafficSplit, startedAt, endedAt, winningVariantId, createdAt, updatedAt
- LeadForm: id, pageId, name, fields, createdAt, updatedAt
- LeadSubmission: id, formId, variantId, pageId, data, createdAt, updatedAt
- VisitorEvent: id, pageId, variantId, experimentId, type, sessionId, occurredAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Persist a page's section tree per variant and render the published page server-side from its slug
- Assign each visitor to a variant by the experiment's traffic split with sticky bucketing
- Record visitor view and conversion events against the assigned variant and experiment
- Capture lead-form submissions, validate configured fields, and store them per page and variant
- Compute per-variant conversion rates and flag a leading or winning variant
- Manage publish state and enforce slug uniqueness across draft and published pages
- Export page leads as CSV
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~5 landing pages with reusable sections, a running A/B experiment with two variants and a traffic split, embedded lead forms, simulated visitor views and conversions, sample lead submissions, 1 admin and 2 marketers. Provide a seed script and list the demo login credentials in the README.

UX REQUIREMENTS
- Every data view has loading, empty, error, and success states.
- All forms validate on client and server with inline messages and clear success/error feedback.
- Realistic, human copywriting throughout — no dummy filler text.

SECURITY
- Keep all secrets in environment variables (never in code). Apply role-based access control where roles exist, protect private routes, handle any file uploads safely, add rate-limiting guidance for public endpoints, and write audit logs for sensitive actions where relevant.

TESTING
- Include unit test examples for the core logic and integration test examples for the most important flows, plus a manual QA checklist and a production smoke-test checklist.

DEPLOYMENT
- Include a Dockerfile (and docker-compose where useful), the production build and database-migration commands, Vercel deployment notes, and a post-deployment smoke test.

DELIVERABLES
- Create every file needed to run locally and to deploy: the full Next.js App Router structure, the Prisma schema and migrations, a seed script, .env.example, a README with exact copy-paste setup commands (install, prisma generate and migrate, seed, dev), a Dockerfile, and test examples.
- Build only real, working screens: functional navigation, working forms, no dead buttons, no unfinished screens, no dummy filler, no leftover task comments, and no unresolved template tokens.

ACCEPTANCE CHECKLIST — the app must pass all of these
- Installs and runs locally with the documented commands, on seed data, with no paid keys.
- Builds successfully and migrates the database successfully.
- Every page renders and is reachable from the navigation.
- Forms validate on client and server; protected routes are protected; role permissions work.
- Admin pages work where included; mock modes work without paid keys; real-provider setup is documented.
- Loading, empty, error, and success states are present; responsive layout works.
- No unresolved template tokens or dummy filler remains; no dead buttons or dead links remain.
- README setup steps and production deployment steps are complete.
```
