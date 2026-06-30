# Maternia Prenatal & Maternity Care Tracking Portal

> Let expecting parents track pregnancy milestones, appointments, and symptom logs while OB providers manage visit schedules, test results, and birth plans

| Field | Value |
|---|---|
| **Prompt ID** | 163 |
| **Title** | Prenatal & Maternity Care Tracking Portal |
| **Slug** | prenatal-maternity-care-tracking-portal |
| **Category** | Healthcare & Wellness |
| **Domain** | Maternity & Prenatal Care |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | OB Provider; Expecting Parent |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building prenatal-tracking and patient-engagement portals for OB-GYN clinics and maternity programs.

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

1. Parent dashboard with current pregnancy week and next appointment
2. Week-by-week pregnancy timeline and milestones
3. Appointments with schedule, upcoming, and history views
4. Symptom and vitals log with trend charts
5. Test results viewer
6. Birth plan builder and viewer
7. Auth (sign in / register)
8. Provider: patient panel and visit dashboard
9. Provider: visit notes and test result entry
10. Admin: providers, patients, and schedule templates

## Required features

- Due-date and gestational-age calculation driving a week-by-week timeline
- Pregnancy milestone tracking with trimester-based guidance cards
- Appointment scheduling against provider availability and visit types
- Symptom and vitals logging (weight, blood pressure, fetal movement) with trend charts
- Test and lab result recording by providers and secure viewing by parents
- Collaborative birth plan builder with preferences and provider review
- Visit notes tied to each appointment with shared summaries
- Risk alert flags when logged vitals fall outside safe ranges
- Appointment and milestone reminders via mock notifications

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `phone`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Pregnancy
**Fields:** `id`, `patientId`, `providerId`, `lastMenstrualPeriod`, `dueDate`, `status`, `riskLevel`, `createdAt`, `updatedAt`

**Relationships:**
- patientId -> references the related record
- providerId -> references the related record

### Appointment
**Fields:** `id`, `pregnancyId`, `providerId`, `type`, `scheduledAt`, `status`, `notes`, `createdAt`, `updatedAt`

**Relationships:**
- pregnancyId -> references the related record
- providerId -> references the related record

### SymptomLog
**Fields:** `id`, `pregnancyId`, `weekNumber`, `weight`, `bloodPressure`, `symptoms`, `fetalMovement`, `loggedAt`, `createdAt`, `updatedAt`

**Relationships:**
- pregnancyId -> references the related record

### TestResult
**Fields:** `id`, `pregnancyId`, `recordedById`, `testName`, `value`, `referenceRange`, `flag`, `resultDate`, `createdAt`, `updatedAt`

**Relationships:**
- pregnancyId -> references the related record
- recordedById -> references the related record

### BirthPlan
**Fields:** `id`, `pregnancyId`, `preferences`, `status`, `providerReviewedById`, `createdAt`, `updatedAt`

**Relationships:**
- pregnancyId -> references the related record
- providerReviewedById -> references the related record

### Milestone
**Fields:** `id`, `pregnancyId`, `week`, `title`, `description`, `completed`, `createdAt`, `updatedAt`

**Relationships:**
- pregnancyId -> references the related record

## Backend logic

- Calculate the due date and current gestational week from the last menstrual period and drive the timeline
- Generate trimester milestones for a pregnancy and mark them complete as the weeks progress
- Schedule appointments against provider availability and prevent double-booking
- Evaluate logged vitals against safe ranges and raise risk alerts to the provider
- Record and release test results so providers enter them and parents view them securely
- Manage the birth plan workflow from draft through provider review and finalization
- Send mock appointment reminders and milestone notifications
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
- [ ] Current gestational week and due date are computed correctly from the last menstrual period
- [ ] Vitals logged outside safe ranges raise a risk alert visible to the provider
- [ ] Test results entered by a provider become viewable to the correct parent only

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds maternity and prenatal care products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: Maternia Prenatal & Maternity Care Tracking Portal
Type: Prenatal & Maternity Care Tracking Portal (Maternity & Prenatal Care)
Target users: expecting parents tracking pregnancy milestones, appointments, and symptoms and OB providers managing visit schedules, test results, and birth plans.
Business goal: Let expecting parents track pregnancy milestones, appointments, and symptom logs while OB providers manage visit schedules, test results, and birth plans.

BRAND & DESIGN
Brand style: gentle, modern, reassuring. Colors: blush pink, soft lavender, warm white. A week-by-week pregnancy timeline with milestone cards and a clean provider visit dashboard. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Parent dashboard with current pregnancy week and next appointment
2. Week-by-week pregnancy timeline and milestones
3. Appointments with schedule, upcoming, and history views
4. Symptom and vitals log with trend charts
5. Test results viewer
6. Birth plan builder and viewer
7. Auth (sign in / register)
8. Provider: patient panel and visit dashboard
9. Provider: visit notes and test result entry
10. Admin: providers, patients, and schedule templates

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Expecting Parent — track milestones, log symptoms and vitals, view appointments, and review results
- OB Provider — manage visit schedules, record test results, and build birth plans
- Clinic Admin — manage providers, patients, and appointment templates

CORE FEATURES
- Due-date and gestational-age calculation driving a week-by-week timeline
- Pregnancy milestone tracking with trimester-based guidance cards
- Appointment scheduling against provider availability and visit types
- Symptom and vitals logging (weight, blood pressure, fetal movement) with trend charts
- Test and lab result recording by providers and secure viewing by parents
- Collaborative birth plan builder with preferences and provider review
- Visit notes tied to each appointment with shared summaries
- Risk alert flags when logged vitals fall outside safe ranges
- Appointment and milestone reminders via mock notifications

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, phone, createdAt, updatedAt
- Pregnancy: id, patientId, providerId, lastMenstrualPeriod, dueDate, status, riskLevel, createdAt, updatedAt
- Appointment: id, pregnancyId, providerId, type, scheduledAt, status, notes, createdAt, updatedAt
- SymptomLog: id, pregnancyId, weekNumber, weight, bloodPressure, symptoms, fetalMovement, loggedAt, createdAt, updatedAt
- TestResult: id, pregnancyId, recordedById, testName, value, referenceRange, flag, resultDate, createdAt, updatedAt
- BirthPlan: id, pregnancyId, preferences, status, providerReviewedById, createdAt, updatedAt
- Milestone: id, pregnancyId, week, title, description, completed, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Calculate the due date and current gestational week from the last menstrual period and drive the timeline
- Generate trimester milestones for a pregnancy and mark them complete as the weeks progress
- Schedule appointments against provider availability and prevent double-booking
- Evaluate logged vitals against safe ranges and raise risk alerts to the provider
- Record and release test results so providers enter them and parents view them securely
- Manage the birth plan workflow from draft through provider review and finalization
- Send mock appointment reminders and milestone notifications
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 2 OB providers, ~6 pregnancies at different gestational weeks, scheduled and past appointments, symptom and vitals logs, sample test results with one flagged value, draft and finalized birth plans, 1 admin, and 6 expecting parents. Provide a seed script and list the demo login credentials in the README.

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
