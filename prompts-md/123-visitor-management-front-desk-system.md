# DeskPass Visitor Management & Front Desk System

> Let visitors pre-register or sign in at reception, accept NDAs, receive a printable badge, and notify their host automatically, with a live on-site roster for evacuations

| Field | Value |
|---|---|
| **Prompt ID** | 123 |
| **Title** | Visitor Management & Front Desk System |
| **Slug** | visitor-management-front-desk-system |
| **Category** | Business Operations |
| **Domain** | Workplace & Front Desk |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Front-desk and reception staff; Office and security managers |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building front-desk and visitor check-in systems for offices and secure facilities.

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

1. Kiosk sign-in flow for visitor self check-in
2. Pre-registration and invite page
3. Reception dashboard with today's expected and on-site visitors
4. Live on-site roster for evacuation headcount
5. Badge preview and print
6. Visitor detail and visit history
7. NDA and agreement management
8. Auth (staff sign in)
9. Admin: sites, badge templates, and agreements
10. Reports: visit volume and durations

## Required features

- Visitor self-service kiosk sign-in with host selection and photo capture
- Host pre-registration and invite with arrival instructions
- NDA and agreement acceptance with signature capture and stored record
- Printable visitor badge generation from a configurable template
- Automatic host notification on visitor arrival
- Check-out flow with reminders for visits left open past expected duration
- Live on-site roster for evacuation headcount per site
- Watchlist and denied-entry flagging at sign-in
- Reports on visit volume, peak times, and average duration

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Site
**Fields:** `id`, `name`, `address`, `evacuationContact`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Visitor
**Fields:** `id`, `fullName`, `company`, `email`, `phone`, `photoUrl`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Visit
**Fields:** `id`, `visitorId`, `hostId`, `siteId`, `purpose`, `expectedAt`, `checkInAt`, `checkOutAt`, `status`, `badgeNumber`, `createdAt`, `updatedAt`

**Relationships:**
- visitorId -> references the related record
- hostId -> references the related record
- siteId -> references the related record

### Agreement
**Fields:** `id`, `siteId`, `title`, `body`, `version`, `active`, `createdAt`, `updatedAt`

**Relationships:**
- siteId -> references the related record

### AgreementAcceptance
**Fields:** `id`, `visitId`, `agreementId`, `signatureUrl`, `acceptedAt`, `createdAt`, `updatedAt`

**Relationships:**
- visitId -> references the related record
- agreementId -> references the related record

### Notification
**Fields:** `id`, `visitId`, `hostId`, `channel`, `status`, `sentAt`, `createdAt`, `updatedAt`

**Relationships:**
- visitId -> references the related record
- hostId -> references the related record

## Backend logic

- Create a visit from a kiosk sign-in or a host pre-registration and assign a badge number
- Require and record acceptance of the site's active agreements before completing sign-in
- Send the assigned host a notification when their visitor checks in
- Check visitors out and flag visits left open past their expected duration
- Match sign-in details against a watchlist and block denied entries
- Maintain a live on-site roster of currently checked-in visitors per site
- Aggregate visit volume, peak times, and average duration for reports
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
- [ ] A visitor cannot complete sign-in without accepting the site's active agreement
- [ ] Checking a visitor in sends a notification to the selected host and adds them to the live on-site roster
- [ ] Checking a visitor out removes them from the on-site roster and records the visit duration

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds workplace and front-desk products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: DeskPass Visitor Management & Front Desk System
Type: Visitor Management & Front Desk System (Workplace & Front Desk)
Target users: visitors who pre-register or sign in at reception and front-desk staff who issue badges while office managers monitor the live on-site roster.
Business goal: Let visitors pre-register or sign in at reception, accept NDAs, receive a printable badge, and notify their host automatically, with a live on-site roster for evacuations.

BRAND & DESIGN
Brand style: welcoming, crisp, professional. Colors: navy, soft white, fresh green. A full-screen kiosk sign-in flow paired with a live on-site visitor roster board. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Kiosk sign-in flow for visitor self check-in
2. Pre-registration and invite page
3. Reception dashboard with today's expected and on-site visitors
4. Live on-site roster for evacuation headcount
5. Badge preview and print
6. Visitor detail and visit history
7. NDA and agreement management
8. Auth (staff sign in)
9. Admin: sites, badge templates, and agreements
10. Reports: visit volume and durations

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Visitor — pre-register, sign in, accept agreements, and receive a badge
- Receptionist — manage check-ins, print badges, and check visitors out
- Host / Employee — receive arrival notifications and pre-register guests
- Admin — configure sites, agreements, badge templates, and reports

CORE FEATURES
- Visitor self-service kiosk sign-in with host selection and photo capture
- Host pre-registration and invite with arrival instructions
- NDA and agreement acceptance with signature capture and stored record
- Printable visitor badge generation from a configurable template
- Automatic host notification on visitor arrival
- Check-out flow with reminders for visits left open past expected duration
- Live on-site roster for evacuation headcount per site
- Watchlist and denied-entry flagging at sign-in
- Reports on visit volume, peak times, and average duration

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Site: id, name, address, evacuationContact, createdAt, updatedAt
- Visitor: id, fullName, company, email, phone, photoUrl, createdAt, updatedAt
- Visit: id, visitorId, hostId, siteId, purpose, expectedAt, checkInAt, checkOutAt, status, badgeNumber, createdAt, updatedAt
- Agreement: id, siteId, title, body, version, active, createdAt, updatedAt
- AgreementAcceptance: id, visitId, agreementId, signatureUrl, acceptedAt, createdAt, updatedAt
- Notification: id, visitId, hostId, channel, status, sentAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Create a visit from a kiosk sign-in or a host pre-registration and assign a badge number
- Require and record acceptance of the site's active agreements before completing sign-in
- Send the assigned host a notification when their visitor checks in
- Check visitors out and flag visits left open past their expected duration
- Match sign-in details against a watchlist and block denied entries
- Maintain a live on-site roster of currently checked-in visitors per site
- Aggregate visit volume, peak times, and average duration for reports
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 2 sites, ~8 host employees, sample visitors with visit history, an active NDA with acceptances, expected and on-site visits, a watchlist entry, 1 admin, and 2 receptionists. Provide a seed script and list the demo login credentials in the README.

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
