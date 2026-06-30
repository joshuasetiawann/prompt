# PestPath Pest Control Route & Treatment Scheduling Platform

> Manage recurring service agreements, route-optimized technician scheduling, on-site treatment and chemical-usage logs, and regulatory compliance reporting for pest control firms

| Field | Value |
|---|---|
| **Prompt ID** | 179 |
| **Title** | Pest Control Route & Treatment Scheduling Platform |
| **Slug** | pest-control-route-scheduling-platform |
| **Category** | Logistics & Field Service |
| **Domain** | Recurring Field Service & Pest Control |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Service Manager; Field Technician; Account Customer |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building recurring, route-based field service tools for pest control and lawn-care companies (distinct from one-off repair dispatch).

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

1. Dashboard (today's routes, due agreements, compliance alerts)
2. Service agreements (recurring plans and frequency)
3. Route planning and optimization (assign stops to technicians)
4. Technician daily route and stop list
5. On-site treatment log (pests, areas, and chemical usage)
6. Chemical and product registry (EPA reg numbers, rates, re-entry intervals)
7. Customer portal: upcoming visits and treatment history
8. Compliance reporting (chemical-usage and treatment records export)
9. Auth (sign in / register)
10. Admin: users, chemicals, and service plans

## Required features

- Recurring service agreements with configurable frequency that auto-generate due visits
- Route planning that assigns visits to technicians and optimizes stop order by location
- Technician daily route view with stop-by-stop check-in and completion
- On-site treatment logging capturing target pests, treated areas, and outcomes
- Chemical-usage logging with EPA registration number, application rate, and quantity used
- Re-entry interval computation flagging unsafe re-entry times after application
- Compliance reporting exporting chemical-usage and treatment records for a date range
- Customer portal showing upcoming visits, treatment history, and service reports
- Automatic generation of the next visit when an agreement's visit is completed

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Customer
**Fields:** `id`, `userId`, `name`, `serviceAddress`, `phone`, `latitude`, `longitude`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### ServiceAgreement
**Fields:** `id`, `customerId`, `planName`, `frequency`, `startDate`, `nextVisitDate`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- customerId -> references the related record

### Visit
**Fields:** `id`, `agreementId`, `technicianId`, `scheduledDate`, `routeSequence`, `status`, `completedAt`, `createdAt`, `updatedAt`

**Relationships:**
- agreementId -> references the related record
- technicianId -> references the related record

### Chemical
**Fields:** `id`, `name`, `epaRegNumber`, `defaultRate`, `reentryHours`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### TreatmentLog
**Fields:** `id`, `visitId`, `targetPests`, `treatedAreas`, `notes`, `createdAt`, `updatedAt`

**Relationships:**
- visitId -> references the related record

### ChemicalApplication
**Fields:** `id`, `treatmentLogId`, `chemicalId`, `applicationRate`, `quantityUsed`, `reentryUntil`, `createdAt`, `updatedAt`

**Relationships:**
- treatmentLogId -> references the related record
- chemicalId -> references the related record

## Backend logic

- Auto-generate due visits from recurring agreements based on frequency and last completion
- Assign visits to technicians and optimize stop order by service-address proximity
- Check technicians in and out of route stops and mark visits completed
- Log on-site treatments with target pests, treated areas, and per-chemical applications
- Record chemical usage with EPA registration number, application rate, and quantity, and compute the re-entry-safe time
- Flag re-entry interval violations and compile compliance reports of chemical usage and treatment records for a date range
- Advance an agreement's next visit date when its current visit is completed
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
- [ ] Completing a recurring agreement's visit auto-generates the next due visit at the agreement's frequency
- [ ] Route optimization orders a technician's daily stops by proximity, and check-in/out updates visit status
- [ ] A chemical application records EPA registration number, rate, and quantity, computes the re-entry-safe time, and appears in the compliance export

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds recurring, route-based field service products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: PestPath Pest Control Route & Treatment Scheduling Platform
Type: Pest Control Route & Treatment Scheduling Platform (Recurring Field Service & Pest Control)
Target users: service managers who manage recurring agreements and route technicians and field technicians who log on-site treatments and chemical usage.
Business goal: Manage recurring service agreements, route-optimized technician scheduling, on-site treatment and chemical-usage logs, and regulatory compliance reporting for pest control firms.

BRAND & DESIGN
Brand style: clean, trustworthy, field-ready. Colors: pest-control green, charcoal, hazard amber. A route-optimized technician map beside a recurring-agreement calendar and an on-site chemical-usage log. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard (today's routes, due agreements, compliance alerts)
2. Service agreements (recurring plans and frequency)
3. Route planning and optimization (assign stops to technicians)
4. Technician daily route and stop list
5. On-site treatment log (pests, areas, and chemical usage)
6. Chemical and product registry (EPA reg numbers, rates, re-entry intervals)
7. Customer portal: upcoming visits and treatment history
8. Compliance reporting (chemical-usage and treatment records export)
9. Auth (sign in / register)
10. Admin: users, chemicals, and service plans

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Service Manager — manage agreements, build routes, and run compliance reports
- Field Technician — view daily routes, log treatments, and record chemical usage
- Account Customer — view upcoming visits, treatment history, and service reports
- Admin — manage users, chemicals, and service plans

CORE FEATURES
- Recurring service agreements with configurable frequency that auto-generate due visits
- Route planning that assigns visits to technicians and optimizes stop order by location
- Technician daily route view with stop-by-stop check-in and completion
- On-site treatment logging capturing target pests, treated areas, and outcomes
- Chemical-usage logging with EPA registration number, application rate, and quantity used
- Re-entry interval computation flagging unsafe re-entry times after application
- Compliance reporting exporting chemical-usage and treatment records for a date range
- Customer portal showing upcoming visits, treatment history, and service reports
- Automatic generation of the next visit when an agreement's visit is completed

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Customer: id, userId, name, serviceAddress, phone, latitude, longitude, createdAt, updatedAt
- ServiceAgreement: id, customerId, planName, frequency, startDate, nextVisitDate, status, createdAt, updatedAt
- Visit: id, agreementId, technicianId, scheduledDate, routeSequence, status, completedAt, createdAt, updatedAt
- Chemical: id, name, epaRegNumber, defaultRate, reentryHours, createdAt, updatedAt
- TreatmentLog: id, visitId, targetPests, treatedAreas, notes, createdAt, updatedAt
- ChemicalApplication: id, treatmentLogId, chemicalId, applicationRate, quantityUsed, reentryUntil, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Auto-generate due visits from recurring agreements based on frequency and last completion
- Assign visits to technicians and optimize stop order by service-address proximity
- Check technicians in and out of route stops and mark visits completed
- Log on-site treatments with target pests, treated areas, and per-chemical applications
- Record chemical usage with EPA registration number, application rate, and quantity, and compute the re-entry-safe time
- Flag re-entry interval violations and compile compliance reports of chemical usage and treatment records for a date range
- Advance an agreement's next visit date when its current visit is completed
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~15 customer accounts with geocoded service addresses, recurring service agreements at weekly, monthly, and quarterly frequencies, auto-generated due visits, ~6 optimized technician routes across several days, completed treatment logs with per-chemical applications, a chemical registry with EPA numbers and re-entry intervals, a compliance export, 1 admin, 1 service manager, 3 field technicians, and 3 account customers. Provide a seed script and list the demo login credentials in the README.

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
