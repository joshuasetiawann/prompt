# FactoryPulse Manufacturing OEE Analytics Dashboard

> Let manufacturers compute Overall Equipment Effectiveness per machine and shift from availability, performance, and quality, log downtime with reason codes, and review losses and trends

| Field | Value |
|---|---|
| **Prompt ID** | 132 |
| **Title** | Manufacturing OEE Analytics Dashboard |
| **Slug** | manufacturing-oee-analytics-dashboard |
| **Category** | Analytics & Dashboards |
| **Domain** | Manufacturing & OEE Analytics |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Plant / production manager; Machine operator and shift supervisor |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building plant-analytics tools for small and mid-size manufacturers, and operations leads who want OEE and downtime tracking without a heavy MES rollout.

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

1. Plant overview with per-machine OEE and status tiles
2. Machine detail with availability, performance, and quality breakdown and trend
3. Shift OEE dashboard with loss waterfall
4. Production event entry with counts, good/scrap, and run time for operators
5. Downtime log with reason codes and durations
6. Losses analysis with a Pareto of downtime reasons
7. Reports: OEE trends by machine, shift, and reason code with export
8. Supervisor review queue for submitted events and downtime
9. Auth (sign in / register)
10. Admin: machines, shifts, reason codes, and OEE targets

## Required features

- OEE computation from availability, performance, and quality per machine and shift
- Operator production-event logging with planned time, run time, and total and good counts
- Downtime event logging with categorized reason codes and durations
- Availability, performance, and quality breakdown with a per-shift loss waterfall
- Pareto analysis of downtime reasons to surface the top losses
- Supervisor review and approval workflow for submitted events and downtime
- OEE targets per machine with color-coded status against world-class benchmarks
- Trend charts of OEE by machine, shift, and reason code over time
- Report export to CSV for OEE and downtime data

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Machine
**Fields:** `id`, `name`, `lineName`, `idealCycleTime`, `oeeTarget`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Shift
**Fields:** `id`, `name`, `startTime`, `endTime`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### ProductionRun
**Fields:** `id`, `machineId`, `shiftId`, `operatorId`, `plannedTimeMinutes`, `runTimeMinutes`, `totalCount`, `goodCount`, `status`, `recordedAt`, `createdAt`, `updatedAt`

**Relationships:**
- machineId -> references the related record
- shiftId -> references the related record
- operatorId -> references the related record

### DowntimeEvent
**Fields:** `id`, `productionRunId`, `machineId`, `reasonCodeId`, `durationMinutes`, `notes`, `status`, `occurredAt`, `createdAt`, `updatedAt`

**Relationships:**
- productionRunId -> references the related record
- machineId -> references the related record
- reasonCodeId -> references the related record

### ReasonCode
**Fields:** `id`, `code`, `label`, `category`, `plannedStop`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### OeeRecord
**Fields:** `id`, `productionRunId`, `machineId`, `shiftId`, `availability`, `performance`, `quality`, `oee`, `createdAt`, `updatedAt`

**Relationships:**
- productionRunId -> references the related record
- machineId -> references the related record
- shiftId -> references the related record

## Backend logic

- Compute availability, performance, and quality from production-run inputs and the machine ideal cycle time
- Calculate OEE per machine and shift and persist an OEE record for each production run
- Categorize and total downtime by reason code to feed the availability loss and Pareto
- Build the per-shift loss waterfall from availability, performance, and quality losses
- Route submitted production events and downtime through supervisor review and approval
- Evaluate OEE against per-machine targets and color-code status
- Aggregate OEE and downtime trends by machine, shift, and reason code with CSV export
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
- [ ] OEE is computed as availability times performance times quality from production-run inputs and matches a hand-checked example
- [ ] A logged downtime event reduces availability and appears in the reason-code Pareto and shift loss waterfall
- [ ] A submitted production event cannot affect reports until a supervisor approves it in the review queue

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds manufacturing and OEE analytics products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: FactoryPulse Manufacturing OEE Analytics Dashboard
Type: Manufacturing OEE Analytics Dashboard (Manufacturing & OEE Analytics)
Target users: plant managers who track OEE and downtime trends across machines and shifts and operators and shift supervisors who log production events and downtime with reason codes.
Business goal: Let manufacturers compute Overall Equipment Effectiveness per machine and shift from availability, performance, and quality, log downtime with reason codes, and review losses and trends.

BRAND & DESIGN
Brand style: industrial, precise, high-contrast. Colors: graphite, machine yellow, signal red. A plant-floor dashboard with per-machine OEE gauges, a shift loss waterfall, and a downtime reason-code log. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Plant overview with per-machine OEE and status tiles
2. Machine detail with availability, performance, and quality breakdown and trend
3. Shift OEE dashboard with loss waterfall
4. Production event entry with counts, good/scrap, and run time for operators
5. Downtime log with reason codes and durations
6. Losses analysis with a Pareto of downtime reasons
7. Reports: OEE trends by machine, shift, and reason code with export
8. Supervisor review queue for submitted events and downtime
9. Auth (sign in / register)
10. Admin: machines, shifts, reason codes, and OEE targets

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Plant Manager — review OEE, losses, and downtime trends across machines and shifts
- Shift Supervisor — review shift losses, validate downtime, and approve event logs
- Machine Operator — record production counts and log downtime events with reason codes
- Admin — manage machines, shifts, reason codes, and OEE targets

CORE FEATURES
- OEE computation from availability, performance, and quality per machine and shift
- Operator production-event logging with planned time, run time, and total and good counts
- Downtime event logging with categorized reason codes and durations
- Availability, performance, and quality breakdown with a per-shift loss waterfall
- Pareto analysis of downtime reasons to surface the top losses
- Supervisor review and approval workflow for submitted events and downtime
- OEE targets per machine with color-coded status against world-class benchmarks
- Trend charts of OEE by machine, shift, and reason code over time
- Report export to CSV for OEE and downtime data

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Machine: id, name, lineName, idealCycleTime, oeeTarget, status, createdAt, updatedAt
- Shift: id, name, startTime, endTime, createdAt, updatedAt
- ProductionRun: id, machineId, shiftId, operatorId, plannedTimeMinutes, runTimeMinutes, totalCount, goodCount, status, recordedAt, createdAt, updatedAt
- DowntimeEvent: id, productionRunId, machineId, reasonCodeId, durationMinutes, notes, status, occurredAt, createdAt, updatedAt
- ReasonCode: id, code, label, category, plannedStop, createdAt, updatedAt
- OeeRecord: id, productionRunId, machineId, shiftId, availability, performance, quality, oee, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Compute availability, performance, and quality from production-run inputs and the machine ideal cycle time
- Calculate OEE per machine and shift and persist an OEE record for each production run
- Categorize and total downtime by reason code to feed the availability loss and Pareto
- Build the per-shift loss waterfall from availability, performance, and quality losses
- Route submitted production events and downtime through supervisor review and approval
- Evaluate OEE against per-machine targets and color-code status
- Aggregate OEE and downtime trends by machine, shift, and reason code with CSV export
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~6 machines across 2 lines, 3 shifts, a library of downtime reason codes, ~200 production runs with computed OEE records, sample downtime events pending and approved, per-machine OEE targets, 1 admin, 2 supervisors, and 3 operators. Provide a seed script and list the demo login credentials in the README.

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
