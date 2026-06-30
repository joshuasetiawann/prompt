# FairwayTime Golf Tee Time Reservation System

> Let golfers book tee times for a foursome with cart and caddie add-ons at member or guest green fees, and let course managers run the tee sheet, holds, and cancellations

| Field | Value |
|---|---|
| **Prompt ID** | 102 |
| **Title** | Golf Tee Time Reservation System |
| **Slug** | golf-tee-time-reservation-system |
| **Category** | Booking & Reservations |
| **Domain** | Golf & Tee Time Booking |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Freelance developers; Golf course managers |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building tee-time and pro-shop booking tools for golf courses and country clubs

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

1. Home with course overview and today's availability
2. Tee sheet by date with interactive timed rows
3. Tee time booking with group size, players, add-ons, and mock payment
4. Foursome grouping and player details
5. Green fee and add-on pricing page
6. Golfer account: upcoming and past tee times
7. Auth (sign in / register)
8. Manager: tee sheet management and weather holds
9. Manager: bookings, occupancy, and revenue reports
10. Admin: courses, fees, and member management

## Required features

- Daily tee sheet with configurable interval slots and foursome grouping
- Member vs. guest green fee pricing applied per player in a group
- Cart and caddie add-ons with per-round pricing
- Member booking windows that open earlier than guest booking
- Weather-driven slot holds that block booking and auto-release
- Cancellation with course cutoff rules and refund handling
- Mock payment and tee-time confirmation with a printable receipt
- Manager tee-sheet blocking for events, shotguns, and maintenance
- Occupancy and revenue reporting by day, fee type, and add-on

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `handicap`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Course
**Fields:** `id`, `ownerId`, `name`, `holes`, `teeInterval`, `openingHours`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Membership
**Fields:** `id`, `userId`, `tier`, `status`, `startsAt`, `expiresAt`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### TeeTime
**Fields:** `id`, `courseId`, `slotTime`, `maxPlayers`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- courseId -> references the related record

### Booking
**Fields:** `id`, `teeTimeId`, `bookerId`, `groupSize`, `players`, `addOns`, `totalPrice`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- teeTimeId -> references the related record
- bookerId -> references the related record

### SlotHold
**Fields:** `id`, `courseId`, `slotTime`, `reason`, `releaseAt`, `createdAt`, `updatedAt`

**Relationships:**
- courseId -> references the related record

### Payment
**Fields:** `id`, `bookingId`, `amount`, `status`, `method`, `createdAt`, `updatedAt`

**Relationships:**
- bookingId -> references the related record

## Backend logic

- Generate the daily tee sheet from the course interval and opening hours
- Reserve a tee time for a group while enforcing max players and preventing double-booking
- Compute total green fees per player by member or guest type plus cart and caddie add-ons
- Enforce member booking windows so members can reserve before guests
- Place and auto-release weather holds that block affected tee times
- Apply cancellation cutoff rules and compute refunds
- Aggregate occupancy and revenue by day, fee type, and add-on
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
- [ ] A tee time cannot be booked beyond its maximum players or double-booked
- [ ] Green fees total correctly when a group mixes member and guest players with add-ons
- [ ] A weather hold blocks affected tee times and auto-releases at its release time

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds golf and tee time booking products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: FairwayTime Golf Tee Time Reservation System
Type: Golf Tee Time Reservation System (Golf & Tee Time Booking)
Target users: golfers reserving tee times for their group and course managers running the tee sheet and pro shop.
Business goal: Let golfers book tee times for a foursome with cart and caddie add-ons at member or guest green fees, and let course managers run the tee sheet, holds, and cancellations.

BRAND & DESIGN
Brand style: refined, classic, premium. Colors: fairway green, cream, navy. A daily tee sheet with timed rows, foursome slots, and member-vs-guest fee chips. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with course overview and today's availability
2. Tee sheet by date with interactive timed rows
3. Tee time booking with group size, players, add-ons, and mock payment
4. Foursome grouping and player details
5. Green fee and add-on pricing page
6. Golfer account: upcoming and past tee times
7. Auth (sign in / register)
8. Manager: tee sheet management and weather holds
9. Manager: bookings, occupancy, and revenue reports
10. Admin: courses, fees, and member management

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Golfer — book tee times, build a group, and add cart or caddie
- Member — reserve at member green fees within member booking windows
- Course Manager — manage the tee sheet, holds, and cancellations
- Admin — manage courses, fees, members, and reports

CORE FEATURES
- Daily tee sheet with configurable interval slots and foursome grouping
- Member vs. guest green fee pricing applied per player in a group
- Cart and caddie add-ons with per-round pricing
- Member booking windows that open earlier than guest booking
- Weather-driven slot holds that block booking and auto-release
- Cancellation with course cutoff rules and refund handling
- Mock payment and tee-time confirmation with a printable receipt
- Manager tee-sheet blocking for events, shotguns, and maintenance
- Occupancy and revenue reporting by day, fee type, and add-on

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, handicap, createdAt, updatedAt
- Course: id, ownerId, name, holes, teeInterval, openingHours, createdAt, updatedAt
- Membership: id, userId, tier, status, startsAt, expiresAt, createdAt, updatedAt
- TeeTime: id, courseId, slotTime, maxPlayers, status, createdAt, updatedAt
- Booking: id, teeTimeId, bookerId, groupSize, players, addOns, totalPrice, status, createdAt, updatedAt
- SlotHold: id, courseId, slotTime, reason, releaseAt, createdAt, updatedAt
- Payment: id, bookingId, amount, status, method, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Generate the daily tee sheet from the course interval and opening hours
- Reserve a tee time for a group while enforcing max players and preventing double-booking
- Compute total green fees per player by member or guest type plus cart and caddie add-ons
- Enforce member booking windows so members can reserve before guests
- Place and auto-release weather holds that block affected tee times
- Apply cancellation cutoff rules and compute refunds
- Aggregate occupancy and revenue by day, fee type, and add-on
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 course with an 18-hole tee sheet at 10-minute intervals, member and guest green fees, cart and caddie add-ons, sample foursome bookings, a weather hold, 2 membership tiers, 1 admin, 1 manager, and 3 golfers. Provide a seed script and list the demo login credentials in the README.

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
