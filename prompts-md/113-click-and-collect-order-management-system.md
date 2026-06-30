# CollectPoint Click & Collect Order Management System

> Let shoppers buy online, choose a store and pickup slot, and collect their order while associates pick, stage, and verify each order at the counter

| Field | Value |
|---|---|
| **Prompt ID** | 113 |
| **Title** | Click & Collect (BOPIS) Order Management System |
| **Slug** | click-and-collect-order-management-system |
| **Category** | E-commerce & Retail |
| **Domain** | Omnichannel Fulfillment & Click-and-Collect |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Shopper reserving and collecting an order; Store associate picking and handing off orders |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building buy-online-pickup-in-store fulfillment for multi-location retailers bridging their web store and physical shops.

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

1. Home with store locator and product highlights
2. Product catalog with per-store availability
3. Product detail with store stock and pickup eligibility
4. Cart and store/slot selection (choose location and pickup time)
5. Checkout with mock payment and pickup confirmation
6. Shopper: my pickups with status and pickup code
7. Auth (sign up / log in)
8. Associate: pick list and staging queue board
9. Associate: pickup counter / handoff verification console
10. Manager: store slots, capacity, and pickup performance dashboard

## Required features

- Per-store inventory and pickup-eligible product catalog
- Store locator with availability and pickup slot selection
- Reserved pickup time slots with per-slot capacity limits
- Order state machine: placed, picking, staged, ready, collected, canceled
- Associate pick list with item-by-item picking and short-pick handling
- Staging location assignment and ready-for-pickup notifications (logged)
- Pickup verification at the counter via pickup code
- Mock payment and order confirmation
- Store capacity and pickup performance dashboard (on-time rate, wait times)

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Store
**Fields:** `id`, `name`, `address`, `openingHours`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### StoreInventory
**Fields:** `id`, `storeId`, `productId`, `sku`, `name`, `price`, `stock`, `pickupEligible`, `createdAt`, `updatedAt`

**Relationships:**
- storeId -> references the related record
- productId -> references the related record

### PickupSlot
**Fields:** `id`, `storeId`, `date`, `startTime`, `endTime`, `capacity`, `booked`, `createdAt`, `updatedAt`

**Relationships:**
- storeId -> references the related record

### Order
**Fields:** `id`, `shopperId`, `storeId`, `slotId`, `status`, `pickupCode`, `stagingLocation`, `total`, `createdAt`, `updatedAt`

**Relationships:**
- shopperId -> references the related record
- storeId -> references the related record
- slotId -> references the related record

### OrderItem
**Fields:** `id`, `orderId`, `inventoryId`, `qty`, `pickedQty`, `lineTotal`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- orderId -> references the related record
- inventoryId -> references the related record

### Payment
**Fields:** `id`, `orderId`, `amount`, `method`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- orderId -> references the related record

## Backend logic

- Compute per-store product availability and pickup eligibility from store inventory
- Reserve a pickup slot at checkout enforcing per-slot capacity, decrement store inventory, and create the order with a unique pickup code inside a transaction
- Drive the order state machine through picking, staging, ready, collected, and canceled
- Generate associate pick lists and handle short-picks and item-level cancellations
- Send (log) a ready-for-pickup notification when an order is staged
- Verify pickup at the counter against the pickup code and mark the order collected
- Aggregate pickup performance: on-time rate, average wait, and slot utilization
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
- [ ] Booking a pickup slot decrements its remaining capacity and a full slot cannot be selected
- [ ] An order moves through picking, staging, and ready, and a ready notification is logged
- [ ] Pickup is only completed when the correct pickup code is verified at the counter

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds omnichannel buy-online-pickup-in-store fulfillment products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: CollectPoint Click & Collect Order Management System
Type: Click & Collect (BOPIS) Order Management System (Omnichannel Fulfillment & Click-and-Collect)
Target users: shoppers buying online and reserving a store pickup slot and store associates picking, staging, and handing off orders at the counter.
Business goal: Let shoppers buy online, choose a store and pickup slot, and collect their order while associates pick, stage, and verify each order at the counter.

BRAND & DESIGN
Brand style: efficient, retail, dependable. Colors: signal orange, slate, white. A split layout pairing a customer pickup-slot picker with a staff pick-and-stage queue board. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with store locator and product highlights
2. Product catalog with per-store availability
3. Product detail with store stock and pickup eligibility
4. Cart and store/slot selection (choose location and pickup time)
5. Checkout with mock payment and pickup confirmation
6. Shopper: my pickups with status and pickup code
7. Auth (sign up / log in)
8. Associate: pick list and staging queue board
9. Associate: pickup counter / handoff verification console
10. Manager: store slots, capacity, and pickup performance dashboard

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Shopper — buy online, choose a store and pickup slot, and collect orders
- Store Associate — pick, stage, and verify orders and hand off at the counter
- Store Manager — manage store capacity, slots, and pickup performance

CORE FEATURES
- Per-store inventory and pickup-eligible product catalog
- Store locator with availability and pickup slot selection
- Reserved pickup time slots with per-slot capacity limits
- Order state machine: placed, picking, staged, ready, collected, canceled
- Associate pick list with item-by-item picking and short-pick handling
- Staging location assignment and ready-for-pickup notifications (logged)
- Pickup verification at the counter via pickup code
- Mock payment and order confirmation
- Store capacity and pickup performance dashboard (on-time rate, wait times)

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Store: id, name, address, openingHours, status, createdAt, updatedAt
- StoreInventory: id, storeId, productId, sku, name, price, stock, pickupEligible, createdAt, updatedAt
- PickupSlot: id, storeId, date, startTime, endTime, capacity, booked, createdAt, updatedAt
- Order: id, shopperId, storeId, slotId, status, pickupCode, stagingLocation, total, createdAt, updatedAt
- OrderItem: id, orderId, inventoryId, qty, pickedQty, lineTotal, status, createdAt, updatedAt
- Payment: id, orderId, amount, method, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Compute per-store product availability and pickup eligibility from store inventory
- Reserve a pickup slot at checkout enforcing per-slot capacity, decrement store inventory, and create the order with a unique pickup code inside a transaction
- Drive the order state machine through picking, staging, ready, collected, and canceled
- Generate associate pick lists and handle short-picks and item-level cancellations
- Send (log) a ready-for-pickup notification when an order is staged
- Verify pickup at the counter against the pickup code and mark the order collected
- Aggregate pickup performance: on-time rate, average wait, and slot utilization
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 3 stores with per-store inventory of ~25 products, daily pickup slots with capacities, sample orders spread across picking, staged, ready, and collected states, 1 manager, 2 associates, and 3 shoppers. Provide a seed script and list the demo login credentials in the README.

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
