# HomeKeep Home Inventory & Warranty Tracker

> Let users catalog household items with photos and receipts, organize them by room and category, track warranty and maintenance dates, and get reminders before warranties expire

| Field | Value |
|---|---|
| **Prompt ID** | 207 |
| **Title** | Home Inventory & Warranty Tracker |
| **Slug** | home-inventory-tracker-app |
| **Category** | Productivity & Personal |
| **Domain** | Home Inventory & Warranties |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Indie developers; homeowners and renters cataloging belongings |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building home inventory, warranty, and belongings-tracking tools for homeowners and renters; distinct from business asset management, insurance-claims platforms, or maintenance-ticketing apps.

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

1. Dashboard (total value, expiring warranties, and recent additions)
2. Inventory list / item grid (filter by room, category, or value)
3. Item detail (photos, receipt, warranty, and purchase info)
4. Item editor (add or edit an item with photo and document upload)
5. Rooms and categories management
6. Warranty and maintenance timeline (expiring soon and upcoming service)
7. Household sharing and member management
8. Auth (sign in / register)
9. Settings and account admin (profile, currency, and reminder lead time)

## Required features

- Item catalog with photos, purchase date, price, brand, serial number, and category
- Room and category organization with filtering and search across the inventory
- Warranty tracking with provider, coverage length, and computed expiration dates
- Receipt and document uploads attached to each item
- Expiring-warranty reminders with a configurable lead time and a mock notification log
- Recurring maintenance scheduling with next-due dates per item
- Total inventory value and per-room value summaries for insurance purposes
- Inventory sharing with household members as editor or viewer

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `currency`, `reminderLeadDays`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Room
**Fields:** `id`, `ownerId`, `name`, `description`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Item
**Fields:** `id`, `ownerId`, `roomId`, `name`, `category`, `brand`, `serialNumber`, `purchaseDate`, `purchasePrice`, `photoUrl`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record
- roomId -> references the related record

### Warranty
**Fields:** `id`, `itemId`, `provider`, `coverageMonths`, `startDate`, `expiresAt`, `notes`, `createdAt`, `updatedAt`

**Relationships:**
- itemId -> references the related record

### Document
**Fields:** `id`, `itemId`, `label`, `fileUrl`, `fileType`, `createdAt`, `updatedAt`

**Relationships:**
- itemId -> references the related record

### MaintenanceTask
**Fields:** `id`, `itemId`, `title`, `dueDate`, `recurrenceMonths`, `isComplete`, `createdAt`, `updatedAt`

**Relationships:**
- itemId -> references the related record

### InventoryShare
**Fields:** `id`, `ownerId`, `userId`, `role`, `invitedAt`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record
- userId -> references the related record

## Backend logic

- Compute total inventory value and per-room value summaries from item purchase prices
- Calculate each warranty's expiration date from its start date and coverage length in months
- Surface warranties expiring within the user's configured lead time and queue mock expiry reminders
- Generate the next maintenance due date for a recurring task when the current one is marked complete
- Filter and search items across rooms and categories
- Invite household members to an inventory as editor or viewer and enforce that role on item and document edits
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
- [ ] Adding an item with a 24-month warranty computes the correct expiration date and lists it under expiring-soon when within the reminder lead time
- [ ] Marking a recurring maintenance task complete generates the next due date at the configured interval
- [ ] An inventory shared as viewer is read-only while an editor can add items and upload documents

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds home inventory and warranty-tracking products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: HomeKeep Home Inventory & Warranty Tracker
Type: Home Inventory & Warranty Tracker (Home Inventory & Warranties)
Target users: homeowners and renters who catalog belongings, track warranties and receipts, and organize items by room, plus household members they invite to view or edit the inventory.
Business goal: Let users catalog household items with photos and receipts, organize them by room and category, track warranty and maintenance dates, and get reminders before warranties expire.

BRAND & DESIGN
Brand style: tidy, reassuring, practical. Colors: deep navy, warm sand, signal orange. A room-by-room item grid of photo cards beside a warranty timeline and an expiring-soon reminders panel. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard (total value, expiring warranties, and recent additions)
2. Inventory list / item grid (filter by room, category, or value)
3. Item detail (photos, receipt, warranty, and purchase info)
4. Item editor (add or edit an item with photo and document upload)
5. Rooms and categories management
6. Warranty and maintenance timeline (expiring soon and upcoming service)
7. Household sharing and member management
8. Auth (sign in / register)
9. Settings and account admin (profile, currency, and reminder lead time)

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Owner — catalog items, manage rooms and the household, and invite members
- Editor — add and edit items, warranties, and documents in shared inventories
- Viewer — view items, warranties, and total value without editing

CORE FEATURES
- Item catalog with photos, purchase date, price, brand, serial number, and category
- Room and category organization with filtering and search across the inventory
- Warranty tracking with provider, coverage length, and computed expiration dates
- Receipt and document uploads attached to each item
- Expiring-warranty reminders with a configurable lead time and a mock notification log
- Recurring maintenance scheduling with next-due dates per item
- Total inventory value and per-room value summaries for insurance purposes
- Inventory sharing with household members as editor or viewer

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, currency, reminderLeadDays, createdAt, updatedAt
- Room: id, ownerId, name, description, createdAt, updatedAt
- Item: id, ownerId, roomId, name, category, brand, serialNumber, purchaseDate, purchasePrice, photoUrl, createdAt, updatedAt
- Warranty: id, itemId, provider, coverageMonths, startDate, expiresAt, notes, createdAt, updatedAt
- Document: id, itemId, label, fileUrl, fileType, createdAt, updatedAt
- MaintenanceTask: id, itemId, title, dueDate, recurrenceMonths, isComplete, createdAt, updatedAt
- InventoryShare: id, ownerId, userId, role, invitedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Compute total inventory value and per-room value summaries from item purchase prices
- Calculate each warranty's expiration date from its start date and coverage length in months
- Surface warranties expiring within the user's configured lead time and queue mock expiry reminders
- Generate the next maintenance due date for a recurring task when the current one is marked complete
- Filter and search items across rooms and categories
- Invite household members to an inventory as editor or viewer and enforce that role on item and document edits
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 6 rooms, ~50 catalogued items with photos and receipts, tracked warranties with computed expiry dates, scheduled maintenance tasks, an inventory shared with 1 editor and 1 viewer, 1 admin and 2 users. Provide a seed script and list the demo login credentials in the README.

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
