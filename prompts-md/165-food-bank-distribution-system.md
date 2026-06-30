# PantryPilot Food Bank Inventory & Distribution System

> Let food banks log donations, manage perishable inventory with expiry tracking, register client households with eligibility checks, and schedule distribution appointments across partner pantries

| Field | Value |
|---|---|
| **Prompt ID** | 165 |
| **Title** | Food Bank Inventory & Distribution System |
| **Slug** | food-bank-distribution-system |
| **Category** | Community, Civic & Nonprofit |
| **Domain** | Food Security & Pantry Operations |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Food bank coordinators and pantry volunteers; client households |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building operations tools for food banks, community pantries, and hunger-relief nonprofits.

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

1. Program overview home
2. Donation intake log
3. Inventory board with expiry and category filters
4. Client household registration and eligibility
5. Distribution scheduling calendar
6. Volunteer: appointment check-in and fulfillment
7. Auth (sign in / register)
8. Coordinator: pantry and stock transfer management
9. Admin: eligibility rules and distribution limits
10. Reports: distributions, demand, and waste dashboard

## Required features

- Donation intake logging with donor, category, quantity, and best-before date
- Perishable inventory with lot and expiry tracking and first-expiry-first-out picking
- Expiry alerts and waste recording for spoiled or expired stock
- Client household registration with eligibility checks and proof documents
- Per-household distribution limits (per-visit and monthly) enforced at pickup
- Distribution appointment scheduling across partner pantries with capacity slots
- Volunteer check-in and order fulfillment that decrements inventory by lot
- Stock transfers between the central food bank and partner pantries
- Demand, distribution, and waste reporting dashboard

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `phone`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Pantry
**Fields:** `id`, `name`, `address`, `capacityPerSlot`, `openingHours`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Donation
**Fields:** `id`, `donorName`, `pantryId`, `category`, `description`, `quantity`, `unit`, `bestBeforeDate`, `receivedAt`, `createdAt`, `updatedAt`

**Relationships:**
- pantryId -> references the related record

### InventoryLot
**Fields:** `id`, `pantryId`, `category`, `itemName`, `quantity`, `unit`, `expiryDate`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- pantryId -> references the related record

### Household
**Fields:** `id`, `primaryUserId`, `householdSize`, `address`, `eligibilityStatus`, `verifiedAt`, `monthlyLimit`, `createdAt`, `updatedAt`

**Relationships:**
- primaryUserId -> references the related record

### Distribution
**Fields:** `id`, `householdId`, `pantryId`, `scheduledAt`, `status`, `fulfilledById`, `fulfilledAt`, `createdAt`, `updatedAt`

**Relationships:**
- householdId -> references the related record
- pantryId -> references the related record
- fulfilledById -> references the related record

### DistributionItem
**Fields:** `id`, `distributionId`, `lotId`, `category`, `quantity`, `unit`, `createdAt`, `updatedAt`

**Relationships:**
- distributionId -> references the related record
- lotId -> references the related record

## Backend logic

- Convert logged donations into expiry-dated inventory lots and increment stock by category
- Pick stock first-expiry-first-out and decrement lots when a distribution is fulfilled
- Raise expiry alerts and record waste when lots pass their expiry date
- Run eligibility checks and verification on household registration
- Enforce per-visit and monthly distribution limits per household at booking and pickup
- Schedule distribution appointments against per-slot pantry capacity and prevent overbooking
- Aggregate distribution, demand, and waste metrics across pantries for the reports dashboard
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
- [ ] Fulfilling a distribution decrements inventory lots first-expiry-first-out
- [ ] Households exceeding per-visit or monthly limits are blocked at booking
- [ ] Expired lots trigger alerts and can be recorded as waste, removing them from available stock

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds food security and pantry operations products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: PantryPilot Food Bank Inventory & Distribution System
Type: Food Bank Inventory & Distribution System (Food Security & Pantry Operations)
Target users: client households registering for assistance and booking pickups and food bank coordinators and pantry volunteers logging donations and managing inventory and distributions.
Business goal: Let food banks log donations, manage perishable inventory with expiry tracking, register client households with eligibility checks, and schedule distribution appointments across partner pantries.

BRAND & DESIGN
Brand style: practical, community-driven, clear. Colors: harvest orange, leaf green, warm white. An inventory board with expiry color-coding and a calendar-style distribution scheduler. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Program overview home
2. Donation intake log
3. Inventory board with expiry and category filters
4. Client household registration and eligibility
5. Distribution scheduling calendar
6. Volunteer: appointment check-in and fulfillment
7. Auth (sign in / register)
8. Coordinator: pantry and stock transfer management
9. Admin: eligibility rules and distribution limits
10. Reports: distributions, demand, and waste dashboard

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Coordinator — manage donations, inventory, pantries, and eligibility rules
- Pantry Volunteer — receive stock, fulfill distributions, and check in clients
- Client Household — register, verify eligibility, and book distribution appointments
- Admin — manage users, partner pantries, and reports

CORE FEATURES
- Donation intake logging with donor, category, quantity, and best-before date
- Perishable inventory with lot and expiry tracking and first-expiry-first-out picking
- Expiry alerts and waste recording for spoiled or expired stock
- Client household registration with eligibility checks and proof documents
- Per-household distribution limits (per-visit and monthly) enforced at pickup
- Distribution appointment scheduling across partner pantries with capacity slots
- Volunteer check-in and order fulfillment that decrements inventory by lot
- Stock transfers between the central food bank and partner pantries
- Demand, distribution, and waste reporting dashboard

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, phone, createdAt, updatedAt
- Pantry: id, name, address, capacityPerSlot, openingHours, status, createdAt, updatedAt
- Donation: id, donorName, pantryId, category, description, quantity, unit, bestBeforeDate, receivedAt, createdAt, updatedAt
- InventoryLot: id, pantryId, category, itemName, quantity, unit, expiryDate, status, createdAt, updatedAt
- Household: id, primaryUserId, householdSize, address, eligibilityStatus, verifiedAt, monthlyLimit, createdAt, updatedAt
- Distribution: id, householdId, pantryId, scheduledAt, status, fulfilledById, fulfilledAt, createdAt, updatedAt
- DistributionItem: id, distributionId, lotId, category, quantity, unit, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Convert logged donations into expiry-dated inventory lots and increment stock by category
- Pick stock first-expiry-first-out and decrement lots when a distribution is fulfilled
- Raise expiry alerts and record waste when lots pass their expiry date
- Run eligibility checks and verification on household registration
- Enforce per-visit and monthly distribution limits per household at booking and pickup
- Schedule distribution appointments against per-slot pantry capacity and prevent overbooking
- Aggregate distribution, demand, and waste metrics across pantries for the reports dashboard
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 central food bank with 3 partner pantries, ~40 inventory lots across produce, dairy, and dry goods with varied expiry dates, logged donations, ~15 registered households with eligibility status, scheduled and fulfilled distributions, 1 admin, 2 coordinators, 4 volunteers, and 8 client households. Provide a seed script and list the demo login credentials in the README.

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
