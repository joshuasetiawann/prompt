# AuditFlow Quality Audit & Inspection Management System

> Let quality teams schedule and run inspections from digital checklists, log non-conformances with photos, and drive corrective and preventive actions through to verified closure

| Field | Value |
|---|---|
| **Prompt ID** | 121 |
| **Title** | Quality Audit & Inspection Management System |
| **Slug** | quality-audit-inspection-system |
| **Category** | Business Operations |
| **Domain** | Quality & Compliance |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Quality managers and auditors; Floor supervisors and inspectors |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building QA, inspection, and CAPA tools for manufacturing, food service, and facilities operators.

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

1. Dashboard with upcoming inspections and open non-conformances
2. Checklist template builder with sections, weighted items, and scoring
3. Inspection schedule and calendar
4. Inspection runner with per-item pass/fail/NA, notes, and photo capture
5. Non-conformance log with severity, photos, and linked items
6. CAPA board to assign, track, and verify action closure
7. Reports: pass rates, recurring findings, and overdue actions
8. Auth (sign in / register)
9. Admin: sites, users, and template library
10. Inspection report detail view

## Required features

- Drag-and-drop checklist template builder with weighted scoring and pass/fail thresholds
- Inspection scheduling with recurrence and assignment to inspectors and sites
- Mobile-friendly inspection runner with per-item pass/fail/NA, notes, and photo capture
- Automatic inspection scoring and pass/fail determination from item weights
- Non-conformance logging with severity, photos, and link to the failed checklist item
- CAPA workflow with assigned owners, due dates, and verified closure sign-off
- Recurring-finding detection across inspections and sites
- Signed-off inspection report generation on completion
- Reports on pass rates, open CAPAs, and overdue actions with export

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Site
**Fields:** `id`, `name`, `location`, `type`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### ChecklistTemplate
**Fields:** `id`, `name`, `category`, `sections`, `passThreshold`, `version`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Inspection
**Fields:** `id`, `templateId`, `siteId`, `inspectorId`, `scheduledFor`, `status`, `score`, `result`, `createdAt`, `updatedAt`

**Relationships:**
- templateId -> references the related record
- siteId -> references the related record
- inspectorId -> references the related record

### InspectionResponse
**Fields:** `id`, `inspectionId`, `itemLabel`, `response`, `weight`, `notes`, `photoUrls`, `createdAt`, `updatedAt`

**Relationships:**
- inspectionId -> references the related record

### NonConformance
**Fields:** `id`, `inspectionId`, `responseId`, `severity`, `description`, `photoUrls`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- inspectionId -> references the related record
- responseId -> references the related record

### CapaAction
**Fields:** `id`, `nonConformanceId`, `ownerId`, `actionType`, `description`, `dueDate`, `status`, `verifiedById`, `verifiedAt`, `createdAt`, `updatedAt`

**Relationships:**
- nonConformanceId -> references the related record
- ownerId -> references the related record
- verifiedById -> references the related record

## Backend logic

- Generate scheduled inspections from templates using recurrence rules and inspector assignment
- Score a completed inspection from weighted item responses and apply the template pass/fail threshold
- Create non-conformances automatically from failed checklist items with a severity level
- Drive CAPA actions through assigned, in-progress, and verified-closure states with due-date tracking
- Detect recurring findings by matching non-conformances across inspections and sites
- Generate a signed-off inspection report snapshot on completion
- Aggregate pass rates, open CAPA counts, and overdue actions for reports
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
- [ ] A completed inspection is scored from item weights and correctly marked pass or fail against the template threshold
- [ ] A failed checklist item creates a linked non-conformance that opens a CAPA action
- [ ] A CAPA action cannot reach closed status until an authorized verifier signs it off

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds quality and compliance products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: AuditFlow Quality Audit & Inspection Management System
Type: Quality Audit & Inspection Management System (Quality & Compliance)
Target users: quality managers who design checklists and drive corrective actions and floor inspectors who run scheduled inspections and log findings on a tablet.
Business goal: Let quality teams schedule and run inspections from digital checklists, log non-conformances with photos, and drive corrective and preventive actions through to verified closure.

BRAND & DESIGN
Brand style: precise, industrial, trustworthy. Colors: steel blue, slate grey, signal amber. A checklist-driven inspection runner with a pass/fail scoring panel and a CAPA tracking board. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with upcoming inspections and open non-conformances
2. Checklist template builder with sections, weighted items, and scoring
3. Inspection schedule and calendar
4. Inspection runner with per-item pass/fail/NA, notes, and photo capture
5. Non-conformance log with severity, photos, and linked items
6. CAPA board to assign, track, and verify action closure
7. Reports: pass rates, recurring findings, and overdue actions
8. Auth (sign in / register)
9. Admin: sites, users, and template library
10. Inspection report detail view

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Quality Manager — design checklists, schedule audits, and review CAPAs
- Inspector — run scheduled inspections and log non-conformances with photos
- Action Owner — complete assigned corrective and preventive actions
- Admin — manage sites, users, and the template library

CORE FEATURES
- Drag-and-drop checklist template builder with weighted scoring and pass/fail thresholds
- Inspection scheduling with recurrence and assignment to inspectors and sites
- Mobile-friendly inspection runner with per-item pass/fail/NA, notes, and photo capture
- Automatic inspection scoring and pass/fail determination from item weights
- Non-conformance logging with severity, photos, and link to the failed checklist item
- CAPA workflow with assigned owners, due dates, and verified closure sign-off
- Recurring-finding detection across inspections and sites
- Signed-off inspection report generation on completion
- Reports on pass rates, open CAPAs, and overdue actions with export

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Site: id, name, location, type, createdAt, updatedAt
- ChecklistTemplate: id, name, category, sections, passThreshold, version, status, createdAt, updatedAt
- Inspection: id, templateId, siteId, inspectorId, scheduledFor, status, score, result, createdAt, updatedAt
- InspectionResponse: id, inspectionId, itemLabel, response, weight, notes, photoUrls, createdAt, updatedAt
- NonConformance: id, inspectionId, responseId, severity, description, photoUrls, status, createdAt, updatedAt
- CapaAction: id, nonConformanceId, ownerId, actionType, description, dueDate, status, verifiedById, verifiedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Generate scheduled inspections from templates using recurrence rules and inspector assignment
- Score a completed inspection from weighted item responses and apply the template pass/fail threshold
- Create non-conformances automatically from failed checklist items with a severity level
- Drive CAPA actions through assigned, in-progress, and verified-closure states with due-date tracking
- Detect recurring findings by matching non-conformances across inspections and sites
- Generate a signed-off inspection report snapshot on completion
- Aggregate pass rates, open CAPA counts, and overdue actions for reports
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 3 sites, ~5 checklist templates with weighted items, scheduled and completed inspections, sample non-conformances with photos, open and verified CAPAs, 1 admin, 2 quality managers, and 3 inspectors. Provide a seed script and list the demo login credentials in the README.

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
