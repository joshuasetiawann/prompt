# FlowSpot Fitness Class & Studio Schedule Booking App

> Let members browse the class schedule and book with credit packs or memberships, join waitlists, and check in, while studio owners manage classes, instructors, and capacity

| Field | Value |
|---|---|
| **Prompt ID** | 105 |
| **Title** | Fitness Class & Studio Schedule Booking App |
| **Slug** | fitness-class-booking-app |
| **Category** | Booking & Reservations |
| **Domain** | Fitness Class Scheduling |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Freelance developers; Studio owners |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building class-booking platforms for boutique fitness studios and dance schools

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

1. Home with featured classes and today's schedule
2. Weekly class schedule grid with spots-left
3. Class detail with instructor and capacity
4. Booking confirmation with credit or membership
5. Credit packs and membership plans with mock-payment checkout
6. Member account: upcoming classes, waitlists, and credit balance
7. Auth (sign in / register)
8. Instructor: class roster and attendance check-in
9. Owner: schedule and instructor management
10. Owner: bookings, attendance, and revenue reports

## Required features

- Weekly class schedule with per-class capacity and live spots-left
- Booking with credit packs or an active membership, decrementing balance
- Automatic waitlist with promotion when a spot opens
- Membership plans and credit-pack purchases with mock payment
- Cancellation with studio cutoff that refunds credits or frees the spot
- Instructor rosters with attendance check-in and no-show tracking
- Recurring class scheduling across the week
- Owner management of classes, instructors, capacities, and credits
- Attendance and revenue reporting by class, instructor, and plan

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `creditBalance`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### ClassType
**Fields:** `id`, `name`, `description`, `durationMinutes`, `capacity`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### ClassSession
**Fields:** `id`, `classTypeId`, `instructorId`, `startTime`, `capacity`, `bookedCount`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- classTypeId -> references the related record
- instructorId -> references the related record

### Membership
**Fields:** `id`, `userId`, `plan`, `creditsPerCycle`, `status`, `startsAt`, `expiresAt`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### Booking
**Fields:** `id`, `sessionId`, `userId`, `status`, `checkedInAt`, `creditsUsed`, `createdAt`, `updatedAt`

**Relationships:**
- sessionId -> references the related record
- userId -> references the related record

### WaitlistEntry
**Fields:** `id`, `sessionId`, `userId`, `position`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- sessionId -> references the related record
- userId -> references the related record

### Payment
**Fields:** `id`, `userId`, `amount`, `type`, `status`, `method`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

## Backend logic

- Generate the weekly schedule by expanding recurring class definitions into sessions
- Book a class by decrementing credits or validating an active membership and capacity
- Add members to a waitlist when full and auto-promote the next entry when a spot frees
- Apply cancellation cutoff rules to refund credits or release the booked spot
- Record attendance check-in and flag no-shows on the session roster
- Deduct and top up member credit balances on bookings and pack purchases
- Aggregate attendance and revenue by class, instructor, and plan
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
- [ ] Booking a full class places the member on the waitlist instead of overbooking
- [ ] Cancelling a booking auto-promotes the first waitlisted member and notifies them
- [ ] Booking decrements credits or validates membership, and cancellation refunds correctly

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds fitness class scheduling products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: FlowSpot Fitness Class & Studio Schedule Booking App
Type: Fitness Class & Studio Schedule Booking App (Fitness Class Scheduling)
Target users: members booking classes with credits or memberships and studio owners managing schedules, instructors, and check-ins.
Business goal: Let members browse the class schedule and book with credit packs or memberships, join waitlists, and check in, while studio owners manage classes, instructors, and capacity.

BRAND & DESIGN
Brand style: vibrant, motivating, clean. Colors: coral, deep teal, off-white. A weekly schedule grid of class cards showing time, instructor, and spots-left. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with featured classes and today's schedule
2. Weekly class schedule grid with spots-left
3. Class detail with instructor and capacity
4. Booking confirmation with credit or membership
5. Credit packs and membership plans with mock-payment checkout
6. Member account: upcoming classes, waitlists, and credit balance
7. Auth (sign in / register)
8. Instructor: class roster and attendance check-in
9. Owner: schedule and instructor management
10. Owner: bookings, attendance, and revenue reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Member — browse the schedule, book classes, and join waitlists
- Instructor — view rosters and check in attendees
- Studio Owner — manage classes, schedules, instructors, and capacity
- Admin — manage studios, plans, credit packs, and reports

CORE FEATURES
- Weekly class schedule with per-class capacity and live spots-left
- Booking with credit packs or an active membership, decrementing balance
- Automatic waitlist with promotion when a spot opens
- Membership plans and credit-pack purchases with mock payment
- Cancellation with studio cutoff that refunds credits or frees the spot
- Instructor rosters with attendance check-in and no-show tracking
- Recurring class scheduling across the week
- Owner management of classes, instructors, capacities, and credits
- Attendance and revenue reporting by class, instructor, and plan

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, creditBalance, createdAt, updatedAt
- ClassType: id, name, description, durationMinutes, capacity, createdAt, updatedAt
- ClassSession: id, classTypeId, instructorId, startTime, capacity, bookedCount, status, createdAt, updatedAt
- Membership: id, userId, plan, creditsPerCycle, status, startsAt, expiresAt, createdAt, updatedAt
- Booking: id, sessionId, userId, status, checkedInAt, creditsUsed, createdAt, updatedAt
- WaitlistEntry: id, sessionId, userId, position, status, createdAt, updatedAt
- Payment: id, userId, amount, type, status, method, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Generate the weekly schedule by expanding recurring class definitions into sessions
- Book a class by decrementing credits or validating an active membership and capacity
- Add members to a waitlist when full and auto-promote the next entry when a spot frees
- Apply cancellation cutoff rules to refund credits or release the booked spot
- Record attendance check-in and flag no-shows on the session roster
- Deduct and top up member credit balances on bookings and pack purchases
- Aggregate attendance and revenue by class, instructor, and plan
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 studio with ~6 class types (yoga, pilates, spin), recurring weekly sessions, 3 instructors, 2 membership plans and 2 credit packs, sample bookings and a full class with a waitlist, 1 admin, 1 owner, and 4 members. Provide a seed script and list the demo login credentials in the README.

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
