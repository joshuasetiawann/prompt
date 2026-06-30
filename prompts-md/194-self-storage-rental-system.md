# StoreSpace Self-Storage Unit Rental & Reservation System

> Let renters compare unit sizes, reserve and pay for a unit, and manage their rental, while managers track occupancy, pricing, and recurring rent

| Field | Value |
|---|---|
| **Prompt ID** | 194 |
| **Title** | Self-Storage Unit Rental & Reservation System |
| **Slug** | self-storage-rental-system |
| **Category** | Booking & Reservations |
| **Domain** | Self-Storage Rentals |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Renter; Facility Manager |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** People needing storage who want to reserve a unit online, and facility managers tracking occupancy and rent.

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

1. Home with facility finder and size guide
2. Unit listings with size, climate, and price filters
3. Unit detail with dimensions, features, and size-comparison visual
4. Reservation and first-month checkout (move-in date, mock payment)
5. Renter dashboard: my units, invoices, and gate access info
6. Rental detail with billing history and move-out request
7. Auth (sign in / sign up / role selection)
8. Manager dashboard: unit inventory and occupancy grid
9. Manager reservations and billing management
10. Admin: facilities, managers, and revenue reports

## Required features

- Unit catalog filtered by size, climate control, floor, and price
- Real-time availability so only vacant units can be reserved
- Online reservation with selectable move-in date and unit hold
- First-month and recurring monthly rent checkout with prorated billing
- Reservation engine that prevents renting the same unit to two renters
- Renter dashboard with invoices, payment history, and gate access code
- Move-out request flow that frees the unit and stops billing
- Manager occupancy grid with vacant, reserved, and occupied unit states

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `phone`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Facility
**Fields:** `id`, `managerId`, `name`, `address`, `accessHours`, `features`, `photos`, `createdAt`, `updatedAt`

**Relationships:**
- managerId -> references the related record

### Unit
**Fields:** `id`, `facilityId`, `label`, `sizeLabel`, `width`, `length`, `climateControlled`, `floor`, `monthlyRate`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- facilityId -> references the related record

### Rental
**Fields:** `id`, `unitId`, `renterId`, `moveInDate`, `moveOutDate`, `monthlyRate`, `gateCode`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- unitId -> references the related record
- renterId -> references the related record

### Invoice
**Fields:** `id`, `rentalId`, `periodStart`, `periodEnd`, `amount`, `dueDate`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- rentalId -> references the related record

### Payment
**Fields:** `id`, `invoiceId`, `amount`, `method`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- invoiceId -> references the related record

## Backend logic

- Unit catalog query filtered by size, climate control, floor, and price with availability flags
- Reservation engine that atomically marks a vacant unit reserved and blocks renting it to a second renter
- Prorated first-month charge calculator based on the selected move-in date
- Recurring monthly invoice generator that issues rent invoices for active rentals
- Checkout that records a Payment, marks the invoice paid, and activates the rental
- Move-out handler that ends the rental, stops future billing, and returns the unit to vacant
- Occupancy report builder computing vacancy and revenue by facility and unit size
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
- [ ] The same unit cannot be reserved or rented to two different renters at once
- [ ] The first-month charge is correctly prorated from the chosen move-in date
- [ ] A move-out request frees the unit and stops generating new rent invoices

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds self-storage rental and reservation systems, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: StoreSpace Self-Storage Unit Rental & Reservation System
Type: Self-Storage Unit Rental & Reservation System (Self-Storage Rentals)
Target users: renters reserving and paying for storage units online and facility managers tracking units, occupancy, and monthly rent.
Business goal: Let renters compare unit sizes, reserve and pay for a unit, and manage their rental, while managers track occupancy, pricing, and recurring rent.

BRAND & DESIGN
Brand style: practical, secure, reassuring. Colors: navy, safety yellow, light grey. Size-comparison unit cards above a facility occupancy grid. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with facility finder and size guide
2. Unit listings with size, climate, and price filters
3. Unit detail with dimensions, features, and size-comparison visual
4. Reservation and first-month checkout (move-in date, mock payment)
5. Renter dashboard: my units, invoices, and gate access info
6. Rental detail with billing history and move-out request
7. Auth (sign in / sign up / role selection)
8. Manager dashboard: unit inventory and occupancy grid
9. Manager reservations and billing management
10. Admin: facilities, managers, and revenue reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Renter — browse units, reserve, pay rent, manage their rental
- Facility Manager — manage units, pricing, reservations, and occupancy
- Admin — oversee facilities, managers, and platform reports

CORE FEATURES
- Unit catalog filtered by size, climate control, floor, and price
- Real-time availability so only vacant units can be reserved
- Online reservation with selectable move-in date and unit hold
- First-month and recurring monthly rent checkout with prorated billing
- Reservation engine that prevents renting the same unit to two renters
- Renter dashboard with invoices, payment history, and gate access code
- Move-out request flow that frees the unit and stops billing
- Manager occupancy grid with vacant, reserved, and occupied unit states

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, phone, role, createdAt, updatedAt
- Facility: id, managerId, name, address, accessHours, features, photos, createdAt, updatedAt
- Unit: id, facilityId, label, sizeLabel, width, length, climateControlled, floor, monthlyRate, status, createdAt, updatedAt
- Rental: id, unitId, renterId, moveInDate, moveOutDate, monthlyRate, gateCode, status, createdAt, updatedAt
- Invoice: id, rentalId, periodStart, periodEnd, amount, dueDate, status, createdAt, updatedAt
- Payment: id, invoiceId, amount, method, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Unit catalog query filtered by size, climate control, floor, and price with availability flags
- Reservation engine that atomically marks a vacant unit reserved and blocks renting it to a second renter
- Prorated first-month charge calculator based on the selected move-in date
- Recurring monthly invoice generator that issues rent invoices for active rentals
- Checkout that records a Payment, marks the invoice paid, and activates the rental
- Move-out handler that ends the rental, stops future billing, and returns the unit to vacant
- Occupancy report builder computing vacancy and revenue by facility and unit size
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 3 facilities with ~60 units, 12 active rentals, ~40 invoices across paid and due states, 1 admin, 2 facility managers, and 5 renters. Provide a seed script and list the demo login credentials in the README.

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
