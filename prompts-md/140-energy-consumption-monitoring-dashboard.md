# WattWatch Energy Consumption Monitoring Dashboard

> Let facilities teams track kWh, demand, and cost across buildings and meters, benchmark usage against baselines and tariffs, and investigate anomaly spikes to attribute and reduce consumption

| Field | Value |
|---|---|
| **Prompt ID** | 140 |
| **Title** | Energy Consumption Monitoring Dashboard |
| **Slug** | energy-consumption-monitoring-dashboard |
| **Category** | Analytics & Dashboards |
| **Domain** | Energy & Utility Monitoring |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Facilities / energy manager; Building operations analyst |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building energy-management dashboards for facilities and property teams, and building or estate managers tracking utility usage and cost across multiple sites.

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

1. Portfolio dashboard with kWh, demand, and cost across buildings
2. Building detail with meters, usage trend, and cost
3. Meter detail with interval readings and demand profile
4. Benchmarks & baselines: actual usage vs baseline and tariff
5. Tariff management with rates and time-of-use periods
6. Anomaly alerts feed
7. Investigation workflow to acknowledge, attribute cause, and resolve
8. Reports on consumption, cost, and savings with export
9. Auth (sign in / register)
10. Admin: buildings, meters, tariffs, and users

## Required features

- Interval meter reading ingestion for kWh and demand across buildings and meters
- Cost calculation from readings using time-of-use tariff rates
- Baseline modeling and benchmarking of actual usage against expected baselines
- Anomaly detection that flags consumption and demand spikes beyond thresholds
- Alert-and-investigation workflow to acknowledge, attribute cause, and resolve
- Portfolio rollups of energy, peak demand, and cost across buildings
- Peak demand tracking with a time-of-use breakdown
- Consumption, cost, and savings-vs-baseline reports with export
- Per-building and per-meter drill-down

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Building
**Fields:** `id`, `name`, `location`, `area`, `baselineKwh`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Meter
**Fields:** `id`, `buildingId`, `tariffId`, `name`, `type`, `unit`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- buildingId -> references the related record
- tariffId -> references the related record

### Reading
**Fields:** `id`, `meterId`, `intervalStart`, `kwh`, `demandKw`, `cost`, `createdAt`, `updatedAt`

**Relationships:**
- meterId -> references the related record

### Tariff
**Fields:** `id`, `name`, `rateStructure`, `currency`, `effectiveFrom`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Anomaly
**Fields:** `id`, `meterId`, `readingId`, `type`, `severity`, `expectedKwh`, `actualKwh`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- meterId -> references the related record
- readingId -> references the related record

### Investigation
**Fields:** `id`, `anomalyId`, `ownerId`, `status`, `rootCause`, `resolutionNotes`, `resolvedAt`, `createdAt`, `updatedAt`

**Relationships:**
- anomalyId -> references the related record
- ownerId -> references the related record

## Backend logic

- Ingest interval meter readings for kWh and demand across buildings and meters
- Compute cost per reading by applying the meter's time-of-use tariff rates
- Model baselines and benchmark actual consumption against expected usage and tariff
- Detect anomaly spikes when consumption or demand exceeds baseline thresholds
- Drive anomalies through an acknowledge, attribute-cause, and resolve investigation workflow
- Roll up energy, peak demand, and cost across meters and buildings for the portfolio
- Aggregate consumption, cost, and savings-vs-baseline for reports
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
- [ ] Reading cost is calculated from the applicable time-of-use tariff and the portfolio cost equals the sum of meter costs
- [ ] A consumption spike beyond the baseline threshold raises an anomaly that opens an investigation
- [ ] An investigation cannot be resolved without a recorded root cause

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds energy-monitoring and facilities-analytics products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: WattWatch Energy Consumption Monitoring Dashboard
Type: Energy Consumption Monitoring Dashboard (Energy & Utility Monitoring)
Target users: facilities and energy managers who track utility usage and cost and a building operations analyst who investigates consumption anomalies.
Business goal: Let facilities teams track kWh, demand, and cost across buildings and meters, benchmark usage against baselines and tariffs, and investigate anomaly spikes to attribute and reduce consumption.

BRAND & DESIGN
Brand style: efficient, sustainable, technical. Colors: forest green, graphite, electric lime. A portfolio dashboard with building usage tiles and an anomaly investigation feed. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Portfolio dashboard with kWh, demand, and cost across buildings
2. Building detail with meters, usage trend, and cost
3. Meter detail with interval readings and demand profile
4. Benchmarks & baselines: actual usage vs baseline and tariff
5. Tariff management with rates and time-of-use periods
6. Anomaly alerts feed
7. Investigation workflow to acknowledge, attribute cause, and resolve
8. Reports on consumption, cost, and savings with export
9. Auth (sign in / register)
10. Admin: buildings, meters, tariffs, and users

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Admin — manage buildings, meters, tariffs, and users
- Energy Manager — monitor usage and cost and set baselines and tariffs
- Operations Analyst — investigate anomalies and attribute consumption

CORE FEATURES
- Interval meter reading ingestion for kWh and demand across buildings and meters
- Cost calculation from readings using time-of-use tariff rates
- Baseline modeling and benchmarking of actual usage against expected baselines
- Anomaly detection that flags consumption and demand spikes beyond thresholds
- Alert-and-investigation workflow to acknowledge, attribute cause, and resolve
- Portfolio rollups of energy, peak demand, and cost across buildings
- Peak demand tracking with a time-of-use breakdown
- Consumption, cost, and savings-vs-baseline reports with export
- Per-building and per-meter drill-down

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Building: id, name, location, area, baselineKwh, createdAt, updatedAt
- Meter: id, buildingId, tariffId, name, type, unit, status, createdAt, updatedAt
- Reading: id, meterId, intervalStart, kwh, demandKw, cost, createdAt, updatedAt
- Tariff: id, name, rateStructure, currency, effectiveFrom, createdAt, updatedAt
- Anomaly: id, meterId, readingId, type, severity, expectedKwh, actualKwh, status, createdAt, updatedAt
- Investigation: id, anomalyId, ownerId, status, rootCause, resolutionNotes, resolvedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Ingest interval meter readings for kWh and demand across buildings and meters
- Compute cost per reading by applying the meter's time-of-use tariff rates
- Model baselines and benchmark actual consumption against expected usage and tariff
- Detect anomaly spikes when consumption or demand exceeds baseline thresholds
- Drive anomalies through an acknowledge, attribute-cause, and resolve investigation workflow
- Roll up energy, peak demand, and cost across meters and buildings for the portfolio
- Aggregate consumption, cost, and savings-vs-baseline for reports
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~4 buildings with multiple meters, several weeks of interval readings for kWh and demand, time-of-use tariffs, flagged anomaly spikes, open and resolved investigations, 1 admin, 1 energy manager, and 1 operations analyst. Provide a seed script and list the demo login credentials in the README.

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
