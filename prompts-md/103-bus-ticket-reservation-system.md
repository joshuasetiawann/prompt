# RouteHop Intercity Bus Ticket & Seat Reservation System

> Let passengers search routes, pick seats from an interactive map at the right fare class, and receive e-tickets, while operators manage trips, schedules, occupancy, and refunds

| Field | Value |
|---|---|
| **Prompt ID** | 103 |
| **Title** | Intercity Bus Ticket & Seat Reservation System |
| **Slug** | bus-ticket-reservation-system |
| **Category** | Booking & Reservations |
| **Domain** | Bus Travel & Seat Booking |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Freelance developers; Bus operators |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building ticketing systems for intercity bus operators and travel agents

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

1. Home with route search by origin, destination, and date
2. Trip search results with schedules, fares, and seats left
3. Seat map selection with fare classes
4. Boarding and dropping point selection
5. Passenger details and checkout with mock payment
6. E-ticket / booking confirmation
7. Passenger account: bookings and e-tickets
8. Auth (sign in / register)
9. Operator: trips, schedules, and bus seat-layout management
10. Operator: occupancy, sales, and refund dashboard

## Required features

- Route and schedule search by origin, destination, and date
- Interactive seat-map selection with real-time seat availability
- Fare classes (standard, premium, sleeper) with per-class pricing
- Multiple boarding and dropping points per route
- Seat hold during checkout with timed release to prevent double-booking
- E-ticket generation with booking reference and QR code
- Cancellation and refund handling per operator policy
- Operator trip and bus seat-layout management
- Occupancy, sales, and refund dashboard per trip and route

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `phone`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Route
**Fields:** `id`, `operatorId`, `origin`, `destination`, `boardingPoints`, `droppingPoints`, `createdAt`, `updatedAt`

**Relationships:**
- operatorId -> references the related record

### Bus
**Fields:** `id`, `operatorId`, `name`, `seatLayout`, `totalSeats`, `createdAt`, `updatedAt`

**Relationships:**
- operatorId -> references the related record

### Trip
**Fields:** `id`, `routeId`, `busId`, `departureTime`, `arrivalTime`, `fareClasses`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- routeId -> references the related record
- busId -> references the related record

### Booking
**Fields:** `id`, `tripId`, `passengerId`, `boardingPoint`, `droppingPoint`, `fareClass`, `totalPrice`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- tripId -> references the related record
- passengerId -> references the related record

### Seat
**Fields:** `id`, `bookingId`, `tripId`, `seatNumber`, `fareClass`, `passengerName`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- bookingId -> references the related record
- tripId -> references the related record

### Payment
**Fields:** `id`, `bookingId`, `amount`, `status`, `method`, `createdAt`, `updatedAt`

**Relationships:**
- bookingId -> references the related record

## Backend logic

- Search trips by origin, destination, and date with computed seats-left per fare class
- Render seat availability for a trip from booked and held seats over the bus layout
- Hold selected seats during checkout and release them on timeout to prevent double-booking
- Price a booking by fare class, boarding point, and seat count
- Issue an e-ticket with a unique booking reference on successful payment
- Process cancellations and compute refunds per operator policy
- Aggregate occupancy, sales, and refunds per trip and route for the operator dashboard
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
- [ ] A held or booked seat cannot be selected by another passenger
- [ ] Seats-left and the seat map reflect bookings in real time per fare class
- [ ] Cancelling a ticket releases its seats and records the refund

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds bus travel and seat booking products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: RouteHop Intercity Bus Ticket & Seat Reservation System
Type: Intercity Bus Ticket & Seat Reservation System (Bus Travel & Seat Booking)
Target users: passengers searching routes and booking seats and operators managing trips, occupancy, and refunds.
Business goal: Let passengers search routes, pick seats from an interactive map at the right fare class, and receive e-tickets, while operators manage trips, schedules, occupancy, and refunds.

BRAND & DESIGN
Brand style: practical, trustworthy, modern. Colors: transit blue, amber, white. A search-first flow with an interactive bus seat map and color-coded fare classes. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with route search by origin, destination, and date
2. Trip search results with schedules, fares, and seats left
3. Seat map selection with fare classes
4. Boarding and dropping point selection
5. Passenger details and checkout with mock payment
6. E-ticket / booking confirmation
7. Passenger account: bookings and e-tickets
8. Auth (sign in / register)
9. Operator: trips, schedules, and bus seat-layout management
10. Operator: occupancy, sales, and refund dashboard

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Passenger — search routes, select seats, and manage e-tickets
- Travel Agent — book and manage tickets on behalf of passengers
- Operator — manage routes, trips, schedules, and refunds
- Admin — manage operators, buses, boarding points, and reports

CORE FEATURES
- Route and schedule search by origin, destination, and date
- Interactive seat-map selection with real-time seat availability
- Fare classes (standard, premium, sleeper) with per-class pricing
- Multiple boarding and dropping points per route
- Seat hold during checkout with timed release to prevent double-booking
- E-ticket generation with booking reference and QR code
- Cancellation and refund handling per operator policy
- Operator trip and bus seat-layout management
- Occupancy, sales, and refund dashboard per trip and route

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, phone, createdAt, updatedAt
- Route: id, operatorId, origin, destination, boardingPoints, droppingPoints, createdAt, updatedAt
- Bus: id, operatorId, name, seatLayout, totalSeats, createdAt, updatedAt
- Trip: id, routeId, busId, departureTime, arrivalTime, fareClasses, status, createdAt, updatedAt
- Booking: id, tripId, passengerId, boardingPoint, droppingPoint, fareClass, totalPrice, status, createdAt, updatedAt
- Seat: id, bookingId, tripId, seatNumber, fareClass, passengerName, status, createdAt, updatedAt
- Payment: id, bookingId, amount, status, method, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Search trips by origin, destination, and date with computed seats-left per fare class
- Render seat availability for a trip from booked and held seats over the bus layout
- Hold selected seats during checkout and release them on timeout to prevent double-booking
- Price a booking by fare class, boarding point, and seat count
- Issue an e-ticket with a unique booking reference on successful payment
- Process cancellations and compute refunds per operator policy
- Aggregate occupancy, sales, and refunds per trip and route for the operator dashboard
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 2 operators, 5 routes with boarding and dropping points, ~8 buses with seat layouts, scheduled trips with fare classes, sample bookings with assigned seats, a cancellation with refund, 1 admin, 1 operator, and 3 passengers. Provide a seed script and list the demo login credentials in the README.

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
