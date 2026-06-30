# DeskDrift Workplace Desk & Meeting Room Hoteling Platform

> Let employees find and reserve desks and meeting rooms by floor and time, and let workplace admins manage floor maps, capacity limits, and utilization

| Field | Value |
|---|---|
| **Prompt ID** | 192 |
| **Title** | Workplace Desk & Meeting Room Hoteling Platform |
| **Slug** | workplace-hoteling-platform |
| **Category** | Booking & Reservations |
| **Domain** | Workplace Hoteling |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Employee; Workplace Admin |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Hybrid teams sharing limited desks and meeting rooms, and workplace admins managing floor capacity.

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

1. Home dashboard with today's reservations and quick book
2. Interactive floor-plan map with available and occupied seats
3. Desk and room search with date, floor, and amenity filters
4. Booking flow with time-block selection and recurring options
5. My reservations with check-in and cancel actions
6. Team presence view showing who is in on a given day
7. Auth (sign in / sign up / SSO placeholder)
8. Admin: buildings, floors, and resource management
9. Admin: floor-plan editor and capacity policies
10. Admin: utilization and occupancy reports

## Required features

- Interactive floor-plan map with live desk and room availability by date
- Desk and meeting-room reservations with time-block and full-day options
- Recurring bookings (e.g., every Tuesday and Thursday) with series management
- Per-floor daily capacity caps that block over-subscription
- QR or code-based check-in with auto-release of no-show reservations
- Conflict prevention so a resource cannot be double-booked for overlapping times
- Team presence and neighborhood booking to sit near colleagues
- Utilization and occupancy reporting for admins by floor and day

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `department`, `teamId`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- teamId -> references the related record

### Building
**Fields:** `id`, `name`, `address`, `timezone`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Floor
**Fields:** `id`, `buildingId`, `name`, `level`, `dailyCapacity`, `mapLayout`, `createdAt`, `updatedAt`

**Relationships:**
- buildingId -> references the related record

### Resource
**Fields:** `id`, `floorId`, `name`, `type`, `capacity`, `amenities`, `xPosition`, `yPosition`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- floorId -> references the related record

### Reservation
**Fields:** `id`, `resourceId`, `userId`, `reservationDate`, `startTime`, `endTime`, `status`, `recurrenceId`, `checkedInAt`, `createdAt`, `updatedAt`

**Relationships:**
- resourceId -> references the related record
- userId -> references the related record
- recurrenceId -> references the related record

### Recurrence
**Fields:** `id`, `userId`, `resourceId`, `frequency`, `weekdays`, `startDate`, `endDate`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record
- resourceId -> references the related record

### Team
**Fields:** `id`, `name`, `leadId`, `neighborhoodFloorId`, `createdAt`, `updatedAt`

**Relationships:**
- leadId -> references the related record
- neighborhoodFloorId -> references the related record

## Backend logic

- Availability resolver that computes free desks and rooms per floor for a date and time block
- Overlap-checking reservation engine that prevents double-booking a resource for intersecting time blocks
- Per-floor daily capacity enforcement that rejects bookings once the cap for that date is reached
- Recurring-series expander that creates and manages individual reservations and handles series cancellation
- Check-in handler with a no-show auto-release job that frees reservations not checked in by a grace window
- Team presence aggregation that lists reserved members by date and floor
- Utilization report builder computing occupancy rates by floor, resource type, and day of week
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
- [ ] A desk or room cannot be reserved by two people for overlapping time blocks
- [ ] Bookings are rejected once a floor's daily capacity cap is reached for that date
- [ ] A reservation not checked in within the grace window is auto-released and becomes bookable again

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds workplace desk and room hoteling platforms, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: DeskDrift Workplace Desk & Meeting Room Hoteling Platform
Type: Workplace Desk & Meeting Room Hoteling Platform (Workplace Hoteling)
Target users: employees reserving desks and meeting rooms for the days they come in and workplace admins managing floors, capacity, and policies.
Business goal: Let employees find and reserve desks and meeting rooms by floor and time, and let workplace admins manage floor maps, capacity limits, and utilization.

BRAND & DESIGN
Brand style: crisp, productive, calm. Colors: slate blue, mint accent, clean white. Interactive floor-plan map with bookable seat tiles beside a day-and-time scheduler. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home dashboard with today's reservations and quick book
2. Interactive floor-plan map with available and occupied seats
3. Desk and room search with date, floor, and amenity filters
4. Booking flow with time-block selection and recurring options
5. My reservations with check-in and cancel actions
6. Team presence view showing who is in on a given day
7. Auth (sign in / sign up / SSO placeholder)
8. Admin: buildings, floors, and resource management
9. Admin: floor-plan editor and capacity policies
10. Admin: utilization and occupancy reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Employee — book desks and rooms, view their reservations, check in
- Team Lead — book on behalf of their team and view team presence
- Workplace Admin — manage buildings, floors, resources, and policies

CORE FEATURES
- Interactive floor-plan map with live desk and room availability by date
- Desk and meeting-room reservations with time-block and full-day options
- Recurring bookings (e.g., every Tuesday and Thursday) with series management
- Per-floor daily capacity caps that block over-subscription
- QR or code-based check-in with auto-release of no-show reservations
- Conflict prevention so a resource cannot be double-booked for overlapping times
- Team presence and neighborhood booking to sit near colleagues
- Utilization and occupancy reporting for admins by floor and day

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, department, teamId, role, createdAt, updatedAt
- Building: id, name, address, timezone, createdAt, updatedAt
- Floor: id, buildingId, name, level, dailyCapacity, mapLayout, createdAt, updatedAt
- Resource: id, floorId, name, type, capacity, amenities, xPosition, yPosition, status, createdAt, updatedAt
- Reservation: id, resourceId, userId, reservationDate, startTime, endTime, status, recurrenceId, checkedInAt, createdAt, updatedAt
- Recurrence: id, userId, resourceId, frequency, weekdays, startDate, endDate, createdAt, updatedAt
- Team: id, name, leadId, neighborhoodFloorId, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Availability resolver that computes free desks and rooms per floor for a date and time block
- Overlap-checking reservation engine that prevents double-booking a resource for intersecting time blocks
- Per-floor daily capacity enforcement that rejects bookings once the cap for that date is reached
- Recurring-series expander that creates and manages individual reservations and handles series cancellation
- Check-in handler with a no-show auto-release job that frees reservations not checked in by a grace window
- Team presence aggregation that lists reserved members by date and floor
- Utilization report builder computing occupancy rates by floor, resource type, and day of week
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 2 buildings, 5 floors, ~90 desks and 8 meeting rooms, 40 reservations across past and future dates, 4 recurring series, 1 admin, 2 team leads, and 6 employees. Provide a seed script and list the demo login credentials in the README.

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
