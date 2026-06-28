# GlowBook Beauty Salon Booking App

> Let clients book a service with a chosen stylist and let the salon manage staff schedules and bookings

| Field | Value |
|---|---|
| **Prompt ID** | 07 |
| **Title** | Beauty Salon Booking App |
| **Slug** | beauty-salon-booking-app |
| **Category** | Booking & Reservation |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Client; Stylist; Admin/Owner |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building booking systems for salons, spas, and barbershops with multiple staff.

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

1. Home with featured services
2. Service menu by category
3. Choose stylist and time slot
4. Booking form (client details, notes)
5. Confirmation
6. Client dashboard: appointments, reschedule/cancel, favorites
7. Auth
8. Admin: services, stylists, and schedules
9. Admin: bookings calendar and reports

## Required features

- Service catalog with duration and price
- Stylist selection with availability and conflict prevention
- Deposit (mock) for select services
- Booking status lifecycle and reminders concept
- Reschedule and cancellation window
- Stylist schedule view
- Admin reports: bookings and revenue by service and stylist

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Service
**Fields:** `id`, `categoryId`, `name`, `durationMin`, `price`, `createdAt`, `updatedAt`

**Relationships:**
- categoryId -> references the related record

### Stylist
**Fields:** `id`, `userId`, `name`, `workingHours`, `services`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### Client
**Fields:** `id`, `userId`, `fullName`, `phone`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### Booking
**Fields:** `id`, `serviceId`, `stylistId`, `clientId`, `startTime`, `status`, `depositPaid`, `createdAt`, `updatedAt`

**Relationships:**
- serviceId -> references the related record
- stylistId -> references the related record
- clientId -> references the related record

### Payment
**Fields:** `id`, `bookingId`, `amount`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- bookingId -> references the related record

## Backend logic

- Slot generation per stylist and service duration
- Conflict-free booking with optional mock deposit
- Reschedule/cancel within policy
- Admin and stylist schedule management
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
- [ ] Stylists only show times they actually work and are free
- [ ] Deposit services record a mock payment on booking
- [ ] Each stylist sees only their own schedule

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds booking apps for salons and spas, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: GlowBook Beauty Salon Booking App
Type: Beauty Salon Booking App (Booking & Reservation)
Target users: salon and spa clients booking treatments and salon staff managing stylists and bookings.
Business goal: Let clients book a service with a chosen stylist and let the salon manage staff schedules and bookings.

BRAND & DESIGN
Brand style: elegant, soft, beauty-focused. Colors: blush pink, charcoal, warm white. Clean, modern, refined cards, service imagery, and an easy stylist + time picker. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with featured services
2. Service menu by category
3. Choose stylist and time slot
4. Booking form (client details, notes)
5. Confirmation
6. Client dashboard: appointments, reschedule/cancel, favorites
7. Auth
8. Admin: services, stylists, and schedules
9. Admin: bookings calendar and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Client — book and manage appointments
- Stylist — view own schedule
- Admin/Owner — manage services, stylists, schedules, and bookings

CORE FEATURES
- Service catalog with duration and price
- Stylist selection with availability and conflict prevention
- Deposit (mock) for select services
- Booking status lifecycle and reminders concept
- Reschedule and cancellation window
- Stylist schedule view
- Admin reports: bookings and revenue by service and stylist

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Service: id, categoryId, name, durationMin, price, createdAt, updatedAt
- Stylist: id, userId, name, workingHours, services, createdAt, updatedAt
- Client: id, userId, fullName, phone, createdAt, updatedAt
- Booking: id, serviceId, stylistId, clientId, startTime, status, depositPaid, createdAt, updatedAt
- Payment: id, bookingId, amount, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Slot generation per stylist and service duration
- Conflict-free booking with optional mock deposit
- Reschedule/cancel within policy
- Admin and stylist schedule management
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 3 stylists, ~12 services across categories, sample bookings, 1 admin, 1 stylist, 2 clients. Provide a seed script and list the demo login credentials in the README.

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
