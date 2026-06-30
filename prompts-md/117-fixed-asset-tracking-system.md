# AssetTrace Fixed Asset & Equipment Tracking System

> Track company-owned assets through their full lifecycle covering assignment, check-out and check-in, maintenance, depreciation, and periodic audit reconciliation

| Field | Value |
|---|---|
| **Prompt ID** | 117 |
| **Title** | Fixed Asset & Equipment Tracking System |
| **Slug** | fixed-asset-tracking-system |
| **Category** | Business Operations |
| **Domain** | Asset & Equipment Management |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | IT asset managers; Operations and facilities staff |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building IT-asset and equipment-tracking tools for offices, schools, and operations teams (distinct from sellable-stock inventory).

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

1. Dashboard with asset counts, due maintenance, and audit status
2. Asset register with category, location, and status filters
3. Asset detail with lifecycle timeline and QR tag
4. Register/edit asset
5. Check-out / check-in assignment screen
6. Maintenance schedule and service work log
7. Depreciation and book-value schedule
8. Audit cycle: scan and reconcile
9. Auth (sign in / register)
10. Admin: categories, depreciation rules, and reports

## Required features

- Asset register with categories, serial numbers, locations, and QR/barcode tags
- Assignment and check-out/check-in with custody history per asset
- Maintenance scheduling with recurring intervals and a service work log
- Straight-line depreciation with book-value calculation over useful life
- Audit cycles with expected-vs-scanned reconciliation and missing-asset flags
- Status lifecycle: in-stock, assigned, in-repair, retired, and disposed
- Warranty and purchase-cost tracking with disposal records
- Asset and depreciation reports by category, location, and assignee

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `department`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### AssetCategory
**Fields:** `id`, `name`, `depreciationMethod`, `usefulLifeMonths`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Asset
**Fields:** `id`, `categoryId`, `assignedToId`, `tag`, `serialNumber`, `name`, `location`, `status`, `purchaseCost`, `salvageValue`, `purchaseDate`, `warrantyEnd`, `createdAt`, `updatedAt`

**Relationships:**
- categoryId -> references the related record
- assignedToId -> references the related record

### Assignment
**Fields:** `id`, `assetId`, `userId`, `checkedOutAt`, `dueDate`, `checkedInAt`, `condition`, `createdAt`, `updatedAt`

**Relationships:**
- assetId -> references the related record
- userId -> references the related record

### MaintenanceRecord
**Fields:** `id`, `assetId`, `type`, `scheduledDate`, `completedDate`, `cost`, `notes`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- assetId -> references the related record

### AuditCycle
**Fields:** `id`, `name`, `location`, `status`, `startedAt`, `completedAt`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### AuditEntry
**Fields:** `id`, `auditCycleId`, `assetId`, `expected`, `scanned`, `status`, `note`, `createdAt`, `updatedAt`

**Relationships:**
- auditCycleId -> references the related record
- assetId -> references the related record

## Backend logic

- Generate a unique asset tag and QR/barcode value when an asset is registered
- Process check-out and check-in, updating asset status and appending to its custody history
- Schedule recurring maintenance and surface assets whose next service is due or overdue
- Compute straight-line depreciation and current book value from purchase cost, salvage value, and category useful life
- Run an audit cycle by listing expected assets for a location and reconciling scanned entries to flag missing or misplaced items
- Transition assets through lifecycle states and record disposal with a reason and date
- Aggregate asset value, depreciation, and utilization reports by category, location, and assignee
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
- [ ] Checking an asset out sets it to assigned and checking it back in records the return with condition and timestamp
- [ ] Book value reflects straight-line depreciation based on purchase cost, salvage value, and useful life
- [ ] An audit cycle flags assets that are expected at a location but not scanned as missing

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds asset and equipment management products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: AssetTrace Fixed Asset & Equipment Tracking System
Type: Fixed Asset & Equipment Tracking System (Asset & Equipment Management)
Target users: IT asset managers who register and assign equipment and operations staff who check items in and out and run physical audits.
Business goal: Track company-owned assets through their full lifecycle covering assignment, check-out and check-in, maintenance, depreciation, and periodic audit reconciliation.

BRAND & DESIGN
Brand style: structured, dependable, utilitarian. Colors: steel blue, amber, off-white. An asset register table with QR-tagged detail cards and a per-asset lifecycle timeline. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with asset counts, due maintenance, and audit status
2. Asset register with category, location, and status filters
3. Asset detail with lifecycle timeline and QR tag
4. Register/edit asset
5. Check-out / check-in assignment screen
6. Maintenance schedule and service work log
7. Depreciation and book-value schedule
8. Audit cycle: scan and reconcile
9. Auth (sign in / register)
10. Admin: categories, depreciation rules, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Employee — view assigned assets and request equipment
- Asset Manager — register assets, assign them, and schedule maintenance
- Auditor — run audit cycles and reconcile physical counts
- Admin — manage categories, depreciation rules, and reports

CORE FEATURES
- Asset register with categories, serial numbers, locations, and QR/barcode tags
- Assignment and check-out/check-in with custody history per asset
- Maintenance scheduling with recurring intervals and a service work log
- Straight-line depreciation with book-value calculation over useful life
- Audit cycles with expected-vs-scanned reconciliation and missing-asset flags
- Status lifecycle: in-stock, assigned, in-repair, retired, and disposed
- Warranty and purchase-cost tracking with disposal records
- Asset and depreciation reports by category, location, and assignee

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, department, createdAt, updatedAt
- AssetCategory: id, name, depreciationMethod, usefulLifeMonths, createdAt, updatedAt
- Asset: id, categoryId, assignedToId, tag, serialNumber, name, location, status, purchaseCost, salvageValue, purchaseDate, warrantyEnd, createdAt, updatedAt
- Assignment: id, assetId, userId, checkedOutAt, dueDate, checkedInAt, condition, createdAt, updatedAt
- MaintenanceRecord: id, assetId, type, scheduledDate, completedDate, cost, notes, status, createdAt, updatedAt
- AuditCycle: id, name, location, status, startedAt, completedAt, createdAt, updatedAt
- AuditEntry: id, auditCycleId, assetId, expected, scanned, status, note, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Generate a unique asset tag and QR/barcode value when an asset is registered
- Process check-out and check-in, updating asset status and appending to its custody history
- Schedule recurring maintenance and surface assets whose next service is due or overdue
- Compute straight-line depreciation and current book value from purchase cost, salvage value, and category useful life
- Run an audit cycle by listing expected assets for a location and reconciling scanned entries to flag missing or misplaced items
- Transition assets through lifecycle states and record disposal with a reason and date
- Aggregate asset value, depreciation, and utilization reports by category, location, and assignee
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 5 asset categories, ~40 assets across laptops, monitors, and tools with QR tags and varied statuses, active and historical assignments, scheduled and completed maintenance records, one open audit cycle with reconciliation entries, 1 admin, 1 asset manager, 1 auditor, and 3 employees. Provide a seed script and list the demo login credentials in the README.

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
