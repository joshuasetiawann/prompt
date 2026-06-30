# TankRoute Bulk Fuel & Propane Delivery Route Management System

> Let distributors track tank levels and usage, auto-schedule deliveries before run-out, build sequenced driver manifests, and bill customers on metered delivered volume

| Field | Value |
|---|---|
| **Prompt ID** | 188 |
| **Title** | Bulk Fuel & Propane Delivery Route Management System |
| **Slug** | bulk-fuel-delivery-route-management-system |
| **Category** | Logistics & Field Service |
| **Domain** | Bulk Fuel Delivery & Route Management |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Operations Dispatcher; Delivery Driver; Account Customer |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building delivery operations tools for fuel, propane, heating-oil, and bulk-liquid distributors (distinct from municipal waste routing).

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

1. Dashboard (low-tank alerts, today's routes, deliveries due)
2. Tank monitor (levels, usage trends, projected run-out)
3. Delivery scheduling (auto-suggested stops by projected run-out)
4. Route builder (assign stops to a driver and sequence the manifest)
5. Driver manifest (ordered stops with addresses and target volumes)
6. Delivery recording (metered start/end reading and delivered volume)
7. Customer portal (tanks, delivery history, invoices)
8. Billing and metered invoices
9. Auth (sign in / register)
10. Admin: tanks, products, trucks, and pricing

## Required features

- Tank-level and usage tracking with projected run-out dates per tank
- Automatic delivery scheduling that flags tanks before they run out
- Route building that assigns stops to a driver and sequences the manifest
- Driver manifest listing ordered stops with addresses and target fill volumes
- Metered delivery recording from start and end meter readings
- Metered billing from delivered volume and per-product pricing
- Customer portal exposing tank levels, deliveries, and invoices per account
- Delivery status lifecycle from scheduled through dispatched, delivered, and billed
- Low-tank and overdue-delivery alerts (mock notification log)

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Account
**Fields:** `id`, `name`, `contactEmail`, `contactPhone`, `billingAddress`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Tank
**Fields:** `id`, `accountId`, `productType`, `capacityGallons`, `currentLevel`, `dailyUsageRate`, `reorderThreshold`, `projectedEmptyDate`, `createdAt`, `updatedAt`

**Relationships:**
- accountId -> references the related record

### Route
**Fields:** `id`, `driverId`, `scheduledDate`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- driverId -> references the related record

### DeliveryStop
**Fields:** `id`, `routeId`, `tankId`, `sequence`, `targetVolume`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- routeId -> references the related record
- tankId -> references the related record

### Delivery
**Fields:** `id`, `stopId`, `meterStart`, `meterEnd`, `deliveredVolume`, `deliveredAt`, `createdAt`, `updatedAt`

**Relationships:**
- stopId -> references the related record

### Invoice
**Fields:** `id`, `deliveryId`, `accountId`, `volume`, `unitPrice`, `total`, `paymentStatus`, `createdAt`, `updatedAt`

**Relationships:**
- deliveryId -> references the related record
- accountId -> references the related record

## Backend logic

- Track tank levels from recorded deliveries and daily usage to project run-out dates
- Auto-schedule delivery stops for tanks approaching their reorder threshold or projected empty date
- Build routes by assigning stops to a driver and ordering the manifest sequence
- Record metered deliveries from start and end meter readings to compute delivered volume
- Update a tank's current level after each recorded delivery
- Generate metered invoices from delivered volume and per-product unit pricing
- Emit low-tank and overdue-delivery alerts to the mock notification log
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
- [ ] A tank below its reorder threshold is auto-flagged and added as a suggested delivery stop
- [ ] Recording a metered delivery updates the tank's current level and computes delivered volume from the meter readings
- [ ] A delivered stop generates an invoice whose total equals delivered volume times the product unit price

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds bulk fuel and propane delivery operations products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: TankRoute Bulk Fuel & Propane Delivery Route Management System
Type: Bulk Fuel & Propane Delivery Route Management System (Bulk Fuel Delivery & Route Management)
Target users: operations dispatchers who schedule deliveries and sequence driver routes and delivery drivers who run manifests and record metered drops in the field.
Business goal: Let distributors track tank levels and usage, auto-schedule deliveries before run-out, build sequenced driver manifests, and bill customers on metered delivered volume.

BRAND & DESIGN
Brand style: industrial, dependable, efficient. Colors: propane blue, hazard orange, steel grey. A tank-level monitor beside a sequenced route manifest and a metered delivery ticket. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard (low-tank alerts, today's routes, deliveries due)
2. Tank monitor (levels, usage trends, projected run-out)
3. Delivery scheduling (auto-suggested stops by projected run-out)
4. Route builder (assign stops to a driver and sequence the manifest)
5. Driver manifest (ordered stops with addresses and target volumes)
6. Delivery recording (metered start/end reading and delivered volume)
7. Customer portal (tanks, delivery history, invoices)
8. Billing and metered invoices
9. Auth (sign in / register)
10. Admin: tanks, products, trucks, and pricing

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Operations Dispatcher — schedule deliveries, build routes, and sequence stops
- Delivery Driver — run the manifest and record metered deliveries in the field
- Account Customer — view tank levels, deliveries, and metered invoices
- Admin — manage tanks, products, trucks, and pricing

CORE FEATURES
- Tank-level and usage tracking with projected run-out dates per tank
- Automatic delivery scheduling that flags tanks before they run out
- Route building that assigns stops to a driver and sequences the manifest
- Driver manifest listing ordered stops with addresses and target fill volumes
- Metered delivery recording from start and end meter readings
- Metered billing from delivered volume and per-product pricing
- Customer portal exposing tank levels, deliveries, and invoices per account
- Delivery status lifecycle from scheduled through dispatched, delivered, and billed
- Low-tank and overdue-delivery alerts (mock notification log)

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Account: id, name, contactEmail, contactPhone, billingAddress, createdAt, updatedAt
- Tank: id, accountId, productType, capacityGallons, currentLevel, dailyUsageRate, reorderThreshold, projectedEmptyDate, createdAt, updatedAt
- Route: id, driverId, scheduledDate, status, createdAt, updatedAt
- DeliveryStop: id, routeId, tankId, sequence, targetVolume, status, createdAt, updatedAt
- Delivery: id, stopId, meterStart, meterEnd, deliveredVolume, deliveredAt, createdAt, updatedAt
- Invoice: id, deliveryId, accountId, volume, unitPrice, total, paymentStatus, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Track tank levels from recorded deliveries and daily usage to project run-out dates
- Auto-schedule delivery stops for tanks approaching their reorder threshold or projected empty date
- Build routes by assigning stops to a driver and ordering the manifest sequence
- Record metered deliveries from start and end meter readings to compute delivered volume
- Update a tank's current level after each recorded delivery
- Generate metered invoices from delivered volume and per-product unit pricing
- Emit low-tank and overdue-delivery alerts to the mock notification log
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~6 accounts with tanks at varying levels and usage rates, fuel and propane products with pricing, ~5 routes with sequenced delivery stops across scheduled, dispatched, and delivered statuses, metered deliveries and invoices, several low-tank alerts, 1 admin, 2 dispatchers, 3 drivers, and 3 account customers. Provide a seed script and list the demo login credentials in the README.

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
