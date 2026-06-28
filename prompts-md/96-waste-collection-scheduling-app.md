# BinCycle Waste Collection Scheduling App

> Publish collection schedules, handle special-pickup requests, manage routes, and update residents

| Field | Value |
|---|---|
| **Prompt ID** | 96 |
| **Title** | Waste Collection Scheduling App |
| **Slug** | waste-collection-scheduling-app |
| **Category** | Municipal & Scheduling |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Resident; Driver; Operator/Admin |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building collection scheduling and routing apps for municipalities or haulers.

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

1. Home and my collection schedule
2. Schedule by zone/day
3. Request a special pickup
4. Resident dashboard: schedule and requests
5. Auth
6. Operator: zones, schedules, and routes
7. Driver: today's route and pickups
8. Special pickup queue
9. Admin: users and reports

## Required features

- Collection schedules by zone and waste type
- Special pickup requests with status
- Routes assigning stops to drivers
- Driver pickup completion updates
- Resident reminders (logged notifications)
- Reports: completed pickups and requests
- Role-scoped access

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Zone
**Fields:** `id`, `name`, `collectionDay`, `wasteType`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Household
**Fields:** `id`, `userId`, `zoneId`, `address`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record
- zoneId -> references the related record

### SpecialPickup
**Fields:** `id`, `householdId`, `type`, `requestedDate`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- householdId -> references the related record

### Route
**Fields:** `id`, `zoneId`, `driverId`, `date`, `createdAt`, `updatedAt`

**Relationships:**
- zoneId -> references the related record
- driverId -> references the related record

### Stop
**Fields:** `id`, `routeId`, `householdId`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- routeId -> references the related record
- householdId -> references the related record

## Backend logic

- Schedule lookup by zone and household
- Special pickup requests and status
- Route building and stop completion
- Resident reminders (logged)
- Reporting on pickups and requests
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
- [ ] Residents see the correct schedule for their zone
- [ ] Special pickup requests move through statuses
- [ ] Drivers mark stops complete on their route

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds municipal collection scheduling and routing apps, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: BinCycle Waste Collection Scheduling App
Type: Waste Collection Scheduling App (Municipal & Scheduling)
Target users: residents tracking collection days and operators and drivers managing routes and pickups.
Business goal: Publish collection schedules, handle special-pickup requests, manage routes, and update residents.

BRAND & DESIGN
Brand style: civic, clean, practical. Colors: green, slate, white. Clean, modern, schedule calendar and a route/pickup board. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home and my collection schedule
2. Schedule by zone/day
3. Request a special pickup
4. Resident dashboard: schedule and requests
5. Auth
6. Operator: zones, schedules, and routes
7. Driver: today's route and pickups
8. Special pickup queue
9. Admin: users and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Resident — view schedule and request special pickups
- Driver — work assigned route and mark pickups
- Operator/Admin — manage zones, schedules, and routes

CORE FEATURES
- Collection schedules by zone and waste type
- Special pickup requests with status
- Routes assigning stops to drivers
- Driver pickup completion updates
- Resident reminders (logged notifications)
- Reports: completed pickups and requests
- Role-scoped access

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Zone: id, name, collectionDay, wasteType, createdAt, updatedAt
- Household: id, userId, zoneId, address, createdAt, updatedAt
- SpecialPickup: id, householdId, type, requestedDate, status, createdAt, updatedAt
- Route: id, zoneId, driverId, date, createdAt, updatedAt
- Stop: id, routeId, householdId, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Schedule lookup by zone and household
- Special pickup requests and status
- Route building and stop completion
- Resident reminders (logged)
- Reporting on pickups and requests
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~4 zones with schedules, households, special pickups, routes and stops, 1 admin, 1 driver, 2 residents. Provide a seed script and list the demo login credentials in the README.

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
