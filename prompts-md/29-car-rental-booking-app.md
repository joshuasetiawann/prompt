# DriveNow Car Rental Booking App

> Let customers book available vehicles by date and let staff manage the fleet and rentals

| Field | Value |
|---|---|
| **Prompt ID** | 29 |
| **Title** | Car Rental Booking App |
| **Slug** | car-rental-booking-app |
| **Category** | Booking & Reservations |
| **Domain** | Booking & Reservation |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Customer; Admin/Staff |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building rental booking sites for car, bike, or equipment rental businesses.

**Production standard:** Production-grade scaffold with local development support, deployment readiness, security guidance, test guidance, and real-service integration readiness

## Tech stack

- **Frontend:** Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Next.js Server Actions or API Routes, Prisma ORM, PostgreSQL for production, SQLite for local development
- **Auth:** Auth.js or secure email/password authentication
- **Validation:** Zod, React Hook Form
- **Deployment:** Vercel-ready, Docker-ready

**Local mode** (enabled)
- App must run locally without paid API keys
- Use mock payment mode when payment is needed
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

1. Home with vehicle search by date and type
2. Vehicle list with filters (type, price, seats, transmission)
3. Vehicle detail (specs, photos, availability)
4. Booking flow (dates, pickup/return, deposit)
5. Confirmation
6. Customer dashboard: rentals, reschedule/cancel
7. Auth
8. Admin: fleet management
9. Admin: bookings calendar and reports
10. Admin: maintenance log and pickup/return locations

## Required features

- Date-range availability per vehicle, conflict-free
- Pickup and return scheduling
- Deposit (mock) and total calculation by days
- Booking status lifecycle and cancellation window
- Fleet management with status (available/maintenance)
- Reports: utilization and revenue per vehicle
- Customer reviews and star ratings per vehicle
- Maintenance logging per location and post-rental damage reports

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Vehicle
**Fields:** `id`, `name`, `type`, `seats`, `transmission`, `pricePerDay`, `photos`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Booking
**Fields:** `id`, `vehicleId`, `customerId`, `pickupDate`, `returnDate`, `status`, `total`, `depositPaid`, `createdAt`, `updatedAt`

**Relationships:**
- vehicleId -> references the related record
- customerId -> references the related record

### Payment
**Fields:** `id`, `bookingId`, `amount`, `type`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- bookingId -> references the related record

### Location
**Fields:** `id`, `name`, `address`, `city`, `phone`, `isActive`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (referenced by MaintenanceLog as a pickup/return branch)

### Review
**Fields:** `id`, `vehicleId`, `customerId`, `rating`, `comment`, `createdAt`, `updatedAt`

**Relationships:**
- vehicleId -> references the related record
- customerId -> references the related record

### MaintenanceLog
**Fields:** `id`, `vehicleId`, `locationId`, `description`, `cost`, `scheduledFor`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- vehicleId -> references the related record
- locationId -> references the related record

### DamageReport
**Fields:** `id`, `bookingId`, `vehicleId`, `description`, `repairCost`, `status`, `reportedAt`, `createdAt`, `updatedAt`

**Relationships:**
- bookingId -> references the related record
- vehicleId -> references the related record

## Backend logic

- Availability per vehicle across a date range
- Transactional booking preventing overlapping rentals
- Mock deposit and total-by-days calculation
- Cancellation enforcing the policy window
- Admin fleet and booking management
- Aggregate vehicle ratings from customer reviews
- Track maintenance schedules per location and log post-rental damage reports
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
- [ ] A vehicle booked for overlapping dates can't be double-booked
- [ ] Total is computed from the number of rental days
- [ ] Maintenance vehicles don't appear as bookable

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds vehicle rental booking platforms, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: DriveNow Car Rental Booking App
Type: Car Rental Booking App (Booking & Reservation)
Target users: customers renting cars and rental staff managing fleet availability and bookings.
Business goal: Let customers book available vehicles by date and let staff manage the fleet and rentals.

BRAND & DESIGN
Brand style: sleek, confident, automotive. Colors: red, charcoal, white. Clean, modern, vehicle cards with specs, clear date pickers, and a simple booking flow. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with vehicle search by date and type
2. Vehicle list with filters (type, price, seats, transmission)
3. Vehicle detail (specs, photos, availability)
4. Booking flow (dates, pickup/return, deposit)
5. Confirmation
6. Customer dashboard: rentals, reschedule/cancel
7. Auth
8. Admin: fleet management
9. Admin: bookings calendar and reports
10. Admin: maintenance log and pickup/return locations

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Customer — search, book, manage rentals
- Admin/Staff — manage fleet, availability, and bookings

CORE FEATURES
- Date-range availability per vehicle, conflict-free
- Pickup and return scheduling
- Deposit (mock) and total calculation by days
- Booking status lifecycle and cancellation window
- Fleet management with status (available/maintenance)
- Reports: utilization and revenue per vehicle
- Customer reviews and star ratings per vehicle
- Maintenance logging per location and post-rental damage reports

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Vehicle: id, name, type, seats, transmission, pricePerDay, photos, status, createdAt, updatedAt
- Booking: id, vehicleId, customerId, pickupDate, returnDate, status, total, depositPaid, createdAt, updatedAt
- Payment: id, bookingId, amount, type, status, createdAt, updatedAt
- Location: id, name, address, city, phone, isActive, createdAt, updatedAt
- Review: id, vehicleId, customerId, rating, comment, createdAt, updatedAt
- MaintenanceLog: id, vehicleId, locationId, description, cost, scheduledFor, status, createdAt, updatedAt
- DamageReport: id, bookingId, vehicleId, description, repairCost, status, reportedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Availability per vehicle across a date range
- Transactional booking preventing overlapping rentals
- Mock deposit and total-by-days calculation
- Cancellation enforcing the policy window
- Admin fleet and booking management
- Aggregate vehicle ratings from customer reviews
- Track maintenance schedules per location and log post-rental damage reports
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~12 vehicles of varied types, sample bookings across dates, 1 admin and 2 customers. Provide a seed script and list the demo login credentials in the README.

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
