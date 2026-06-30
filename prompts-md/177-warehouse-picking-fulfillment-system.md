# PickFlow Warehouse Picking & Fulfillment System

> Cover inbound receiving, putaway to bin locations, wave-based pick lists, and packing and dispatch, with picker task assignment and pick-accuracy tracking

| Field | Value |
|---|---|
| **Prompt ID** | 177 |
| **Title** | Warehouse Picking & Fulfillment System |
| **Slug** | warehouse-picking-fulfillment-system |
| **Category** | Logistics & Field Service |
| **Domain** | Warehouse Operations & Fulfillment |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Warehouse Manager; Picker/Packer; Receiving Clerk |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building warehouse operations or 3PL fulfillment workflow tools (distinct from stock-level inventory control).

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

1. Operations dashboard (inbound, waves, and dispatch status)
2. Inbound receiving (purchase orders and received quantities)
3. Putaway to bin locations
4. Bin location and stock map
5. Wave planning (group demand into pick waves)
6. Pick list execution (guided picks with scan confirmation)
7. Packing and dispatch (cartonize, weigh, and ship)
8. Picker task board and assignment
9. Auth (sign in / register)
10. Admin: users, bins, and accuracy reports

## Required features

- Inbound receiving against purchase orders with received-quantity and discrepancy capture
- Putaway suggesting bin locations and recording stock by bin
- Bin-location map showing stock on hand per bin
- Wave planning that groups open demand into pick waves by zone and priority
- Wave-based pick list generation with optimized pick paths through bins
- Guided pick execution with scan confirmation of bin and SKU
- Pick-accuracy tracking flagging short picks and mispicks per picker
- Packing and dispatch with cartonization, weight capture, and wave dispatch
- Picker task assignment with a real-time task board

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Item
**Fields:** `id`, `sku`, `name`, `description`, `unitOfMeasure`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### BinLocation
**Fields:** `id`, `code`, `zone`, `aisle`, `capacity`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### InboundReceipt
**Fields:** `id`, `purchaseOrderRef`, `supplierName`, `receivedById`, `status`, `receivedAt`, `createdAt`, `updatedAt`

**Relationships:**
- receivedById -> references the related record

### BinStock
**Fields:** `id`, `itemId`, `binLocationId`, `quantity`, `createdAt`, `updatedAt`

**Relationships:**
- itemId -> references the related record
- binLocationId -> references the related record

### Wave
**Fields:** `id`, `status`, `zone`, `priority`, `plannedById`, `packedById`, `releasedAt`, `dispatchedAt`, `createdAt`, `updatedAt`

**Relationships:**
- plannedById -> references the related record
- packedById -> references the related record

### PickTask
**Fields:** `id`, `waveId`, `itemId`, `binLocationId`, `assignedToId`, `requestedQuantity`, `pickedQuantity`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- waveId -> references the related record
- itemId -> references the related record
- binLocationId -> references the related record
- assignedToId -> references the related record

## Backend logic

- Receive inbound shipments against purchase orders and record received versus expected quantities with discrepancies
- Put away received items to bin locations and update bin stock
- Plan waves by grouping open demand into pick lists by zone and priority
- Generate optimized pick paths ordering pick tasks by bin sequence within a wave
- Confirm picks by scanning bin and SKU, decrement bin stock, and record picked versus requested quantity
- Track pick accuracy per picker by flagging short picks and mispicks
- Pack and dispatch a completed wave, advancing wave status and recording dispatch
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
- [ ] Putaway records stock by bin, and confirming a pick decrements the correct bin's stock
- [ ] A pick task's picked-versus-requested quantity drives the picker accuracy report, flagging short picks and mispicks
- [ ] A wave cannot be dispatched until all of its pick tasks are completed

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds warehouse operations and fulfillment products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: PickFlow Warehouse Picking & Fulfillment System
Type: Warehouse Picking & Fulfillment System (Warehouse Operations & Fulfillment)
Target users: warehouse managers who plan waves and assign tasks and pickers and packers who execute pick, pack, and dispatch work.
Business goal: Cover inbound receiving, putaway to bin locations, wave-based pick lists, and packing and dispatch, with picker task assignment and pick-accuracy tracking.

BRAND & DESIGN
Brand style: industrial, efficient, high-contrast. Colors: warehouse yellow, charcoal, signal green. A bin-location grid and wave pick queue beside a picker task board with scan confirmations. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Operations dashboard (inbound, waves, and dispatch status)
2. Inbound receiving (purchase orders and received quantities)
3. Putaway to bin locations
4. Bin location and stock map
5. Wave planning (group demand into pick waves)
6. Pick list execution (guided picks with scan confirmation)
7. Packing and dispatch (cartonize, weigh, and ship)
8. Picker task board and assignment
9. Auth (sign in / register)
10. Admin: users, bins, and accuracy reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Warehouse Manager — plan waves, assign tasks, and monitor accuracy
- Picker/Packer — execute pick lists, confirm scans, and pack orders
- Receiving Clerk — receive inbound shipments and put away to bins
- Admin — manage users, bins, and reports

CORE FEATURES
- Inbound receiving against purchase orders with received-quantity and discrepancy capture
- Putaway suggesting bin locations and recording stock by bin
- Bin-location map showing stock on hand per bin
- Wave planning that groups open demand into pick waves by zone and priority
- Wave-based pick list generation with optimized pick paths through bins
- Guided pick execution with scan confirmation of bin and SKU
- Pick-accuracy tracking flagging short picks and mispicks per picker
- Packing and dispatch with cartonization, weight capture, and wave dispatch
- Picker task assignment with a real-time task board

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Item: id, sku, name, description, unitOfMeasure, createdAt, updatedAt
- BinLocation: id, code, zone, aisle, capacity, createdAt, updatedAt
- InboundReceipt: id, purchaseOrderRef, supplierName, receivedById, status, receivedAt, createdAt, updatedAt
- BinStock: id, itemId, binLocationId, quantity, createdAt, updatedAt
- Wave: id, status, zone, priority, plannedById, packedById, releasedAt, dispatchedAt, createdAt, updatedAt
- PickTask: id, waveId, itemId, binLocationId, assignedToId, requestedQuantity, pickedQuantity, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Receive inbound shipments against purchase orders and record received versus expected quantities with discrepancies
- Put away received items to bin locations and update bin stock
- Plan waves by grouping open demand into pick lists by zone and priority
- Generate optimized pick paths ordering pick tasks by bin sequence within a wave
- Confirm picks by scanning bin and SKU, decrement bin stock, and record picked versus requested quantity
- Track pick accuracy per picker by flagging short picks and mispicks
- Pack and dispatch a completed wave, advancing wave status and recording dispatch
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~40 SKUs across zones, ~25 bin locations with capacities, sample inbound receipts with putaway, current bin stock, ~6 waves across planned, picking, and dispatched statuses, pick tasks with mixed accuracy, 1 admin, 1 warehouse manager, 3 pickers, and 1 receiving clerk. Provide a seed script and list the demo login credentials in the README.

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
