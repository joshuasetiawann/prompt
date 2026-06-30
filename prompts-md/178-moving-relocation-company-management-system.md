# ReloDesk Moving & Relocation Company Management System

> Handle on-site surveys, volume-based quotes, crew and truck scheduling, item inventory and bill-of-lading generation, and damage claims for moving companies

| Field | Value |
|---|---|
| **Prompt ID** | 178 |
| **Title** | Moving & Relocation Company Management System |
| **Slug** | moving-relocation-company-management-system |
| **Category** | Logistics & Field Service |
| **Domain** | Moving & Relocation Services |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Moving Company Owner; Dispatcher; Crew Lead |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building end-to-end operations tools for moving, relocation, and removalist companies.

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

1. Dashboard (jobs pipeline, today's schedule, open claims)
2. Lead intake and job request
3. On-site survey (room-by-room item inventory and volume)
4. Quote builder (volume-based estimate with rate components)
5. Scheduling calendar (crews and trucks)
6. Job detail and bill-of-lading generation
7. Move-day inventory and condition check (load and unload)
8. Damage claims intake and resolution
9. Auth (sign in / register)
10. Admin: crews, trucks, and rate cards

## Required features

- Lead intake capturing origin, destination, move date, and access details
- On-site survey with room-by-room item inventory and estimated cubic volume
- Volume-based quote estimation from volume, distance, labor, and add-on rates
- Crew and truck scheduling with conflict detection against availability
- Bill-of-lading generation listing inventory items, condition, and terms
- Move-day load and unload inventory checks recording item condition
- Damage claims tied to specific inventory items with a resolution workflow
- Deposit collection on quote acceptance
- Job status pipeline from lead through surveyed, scheduled, completed, and settled

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Job
**Fields:** `id`, `customerName`, `customerEmail`, `customerPhone`, `originAddress`, `destinationAddress`, `moveDate`, `estimatedVolume`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### SurveyItem
**Fields:** `id`, `jobId`, `room`, `name`, `quantity`, `cubicVolume`, `condition`, `createdAt`, `updatedAt`

**Relationships:**
- jobId -> references the related record

### Quote
**Fields:** `id`, `jobId`, `volumeCost`, `laborCost`, `distanceCost`, `addOnsCost`, `total`, `depositAmount`, `depositStatus`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- jobId -> references the related record

### Resource
**Fields:** `id`, `name`, `resourceType`, `capacity`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Assignment
**Fields:** `id`, `jobId`, `resourceId`, `scheduledStart`, `scheduledEnd`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- jobId -> references the related record
- resourceId -> references the related record

### Claim
**Fields:** `id`, `jobId`, `surveyItemId`, `description`, `claimedAmount`, `status`, `resolvedAt`, `createdAt`, `updatedAt`

**Relationships:**
- jobId -> references the related record
- surveyItemId -> references the related record

## Backend logic

- Capture room-by-room survey items and sum estimated cubic volume per job
- Compute a volume-based quote from volume, distance, labor, and add-on rates with a deposit amount
- Schedule crew and truck resources to a job and detect double-booking across overlapping times
- Generate a bill of lading from the job's survey inventory, condition notes, and quote terms
- Record load and unload condition checks against survey items on move day
- Collect a deposit on quote acceptance and advance the job pipeline
- Open damage claims tied to inventory items and move them through a resolution workflow
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
- [ ] A quote total recomputes correctly from survey volume, distance, labor, and add-on rates
- [ ] Scheduling a crew or truck already booked for an overlapping time is rejected as a conflict
- [ ] A bill of lading lists the job's survey inventory with condition, and a damage claim can be filed against a specific inventory item

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds moving and relocation operations products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: ReloDesk Moving & Relocation Company Management System
Type: Moving & Relocation Company Management System (Moving & Relocation Services)
Target users: dispatchers who quote jobs and schedule crews and trucks and crew leads who run on-site surveys and execute moves.
Business goal: Handle on-site surveys, volume-based quotes, crew and truck scheduling, item inventory and bill-of-lading generation, and damage claims for moving companies.

BRAND & DESIGN
Brand style: sturdy, reassuring, organized. Colors: moving-truck red, kraft brown, clean white. A room-by-room survey inventory beside a crew-and-truck scheduling calendar and a volume-based quote estimate. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard (jobs pipeline, today's schedule, open claims)
2. Lead intake and job request
3. On-site survey (room-by-room item inventory and volume)
4. Quote builder (volume-based estimate with rate components)
5. Scheduling calendar (crews and trucks)
6. Job detail and bill-of-lading generation
7. Move-day inventory and condition check (load and unload)
8. Damage claims intake and resolution
9. Auth (sign in / register)
10. Admin: crews, trucks, and rate cards

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Owner — oversee jobs, quotes, scheduling, and claims
- Dispatcher — schedule crews and trucks and confirm bookings
- Crew Lead — run on-site surveys, capture inventory, and generate the bill of lading
- Admin — manage users, resources, and rate cards

CORE FEATURES
- Lead intake capturing origin, destination, move date, and access details
- On-site survey with room-by-room item inventory and estimated cubic volume
- Volume-based quote estimation from volume, distance, labor, and add-on rates
- Crew and truck scheduling with conflict detection against availability
- Bill-of-lading generation listing inventory items, condition, and terms
- Move-day load and unload inventory checks recording item condition
- Damage claims tied to specific inventory items with a resolution workflow
- Deposit collection on quote acceptance
- Job status pipeline from lead through surveyed, scheduled, completed, and settled

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Job: id, customerName, customerEmail, customerPhone, originAddress, destinationAddress, moveDate, estimatedVolume, status, createdAt, updatedAt
- SurveyItem: id, jobId, room, name, quantity, cubicVolume, condition, createdAt, updatedAt
- Quote: id, jobId, volumeCost, laborCost, distanceCost, addOnsCost, total, depositAmount, depositStatus, status, createdAt, updatedAt
- Resource: id, name, resourceType, capacity, status, createdAt, updatedAt
- Assignment: id, jobId, resourceId, scheduledStart, scheduledEnd, status, createdAt, updatedAt
- Claim: id, jobId, surveyItemId, description, claimedAmount, status, resolvedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Capture room-by-room survey items and sum estimated cubic volume per job
- Compute a volume-based quote from volume, distance, labor, and add-on rates with a deposit amount
- Schedule crew and truck resources to a job and detect double-booking across overlapping times
- Generate a bill of lading from the job's survey inventory, condition notes, and quote terms
- Record load and unload condition checks against survey items on move day
- Collect a deposit on quote acceptance and advance the job pipeline
- Open damage claims tied to inventory items and move them through a resolution workflow
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~12 jobs across lead, surveyed, scheduled, completed, and settled statuses, room-by-room survey inventories with volumes, volume-based quotes with deposits, ~6 crew and truck resources, scheduled assignments including one conflict, a couple of damage claims, 1 admin, 1 owner, 1 dispatcher, and 2 crew leads. Provide a seed script and list the demo login credentials in the README.

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
