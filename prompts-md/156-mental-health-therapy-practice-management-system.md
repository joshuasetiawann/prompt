# MindLedger Mental Health Therapy Practice Management System

> Let therapists manage clients, run intake and assessments, write structured progress notes and treatment plans, and bill recurring sessions including sliding-scale rates

| Field | Value |
|---|---|
| **Prompt ID** | 156 |
| **Title** | Mental Health Therapy Practice Management System |
| **Slug** | mental-health-therapy-practice-management-system |
| **Category** | Healthcare & Wellness |
| **Domain** | Behavioral Health Practice Management |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Therapist; Practice Administrator |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building practice-management and clinical-documentation tools for solo therapists, counselors, and small behavioral-health group practices.

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

1. Dashboard with today's sessions, unsigned notes, and overdue plan reviews
2. Caseload list with client status and balances
3. Client chart (profile, intake, assessments, notes, treatment plan, billing)
4. Intake and assessment forms (consent capture, PHQ-9, GAD-7)
5. Progress note editor (structured SOAP/DAP with sign and lock)
6. Treatment plan builder (goals, objectives, interventions, review dates)
7. Scheduling calendar with recurring sessions
8. Billing and invoices (sliding-scale rates, recurring charges, mock payment)
9. Auth (sign in / register)
10. Admin: users, fee schedule, sliding-scale rules, and reports

## Required features

- Structured intake workflow with consent capture and standardized assessments (PHQ-9, GAD-7) with auto-scoring
- Progress notes in structured SOAP/DAP formats linked to each session, with sign, lock, and amendment trail
- Treatment plan builder with measurable goals, objectives, interventions, and scheduled review dates
- Recurring session scheduling with appointment status (scheduled, kept, no-show, cancelled)
- Sliding-scale fee schedule that sets a client's session rate by income band
- Recurring session billing that generates an invoice per kept session and records mock payments
- Assessment score trends charted over the course of care
- Caseload dashboard surfacing unsigned notes, upcoming sessions, and overdue plan reviews
- Secure document storage for signed consents and uploaded client records

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Client
**Fields:** `id`, `therapistId`, `fullName`, `dateOfBirth`, `contactEmail`, `status`, `incomeBand`, `slidingScaleRate`, `createdAt`, `updatedAt`

**Relationships:**
- therapistId -> references the related record

### Appointment
**Fields:** `id`, `clientId`, `therapistId`, `startsAt`, `endsAt`, `recurrenceRule`, `status`, `fee`, `createdAt`, `updatedAt`

**Relationships:**
- clientId -> references the related record
- therapistId -> references the related record

### ProgressNote
**Fields:** `id`, `appointmentId`, `clientId`, `therapistId`, `format`, `content`, `signedAt`, `createdAt`, `updatedAt`

**Relationships:**
- appointmentId -> references the related record
- clientId -> references the related record
- therapistId -> references the related record

### Assessment
**Fields:** `id`, `clientId`, `type`, `responsesJson`, `score`, `severity`, `administeredAt`, `createdAt`, `updatedAt`

**Relationships:**
- clientId -> references the related record

### TreatmentPlan
**Fields:** `id`, `clientId`, `therapistId`, `goalsJson`, `interventionsJson`, `reviewDate`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- clientId -> references the related record
- therapistId -> references the related record

### Invoice
**Fields:** `id`, `clientId`, `appointmentId`, `amount`, `status`, `paidAt`, `createdAt`, `updatedAt`

**Relationships:**
- clientId -> references the related record
- appointmentId -> references the related record

## Backend logic

- Score standardized assessments (PHQ-9, GAD-7) on submission and classify severity bands
- Generate recurring appointments from a recurrence rule and track per-session status (kept, no-show, cancelled)
- Resolve each client's session fee from the sliding-scale fee schedule based on income band
- Generate an invoice per kept session, record mock payments, and update the client balance
- Lock and sign progress notes, preventing edits after signing while keeping a dated amendment trail
- Surface caseload alerts for unsigned notes, overdue treatment-plan reviews, and upcoming sessions
- Chart assessment score trends across a course of care per client
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
- [ ] Submitting a PHQ-9 or GAD-7 assessment computes the correct total score and severity band and adds a point to the client's trend chart
- [ ] A signed progress note becomes read-only and any change is recorded as a dated amendment rather than overwriting the original
- [ ] A client's session fee follows their sliding-scale income band and each recurring kept session generates a matching invoice

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds behavioral-health practice management products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: MindLedger Mental Health Therapy Practice Management System
Type: Mental Health Therapy Practice Management System (Behavioral Health Practice Management)
Target users: therapists who manage their caseload, clinical documentation, and billing and practice administrators who oversee scheduling, intake, and payments across the practice.
Business goal: Let therapists manage clients, run intake and assessments, write structured progress notes and treatment plans, and bill recurring sessions including sliding-scale rates.

BRAND & DESIGN
Brand style: calm, trustworthy, clinical. Colors: soft teal, warm sand, slate grey. A two-pane client workspace with a session timeline on the left and structured note and treatment-plan editors on the right. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with today's sessions, unsigned notes, and overdue plan reviews
2. Caseload list with client status and balances
3. Client chart (profile, intake, assessments, notes, treatment plan, billing)
4. Intake and assessment forms (consent capture, PHQ-9, GAD-7)
5. Progress note editor (structured SOAP/DAP with sign and lock)
6. Treatment plan builder (goals, objectives, interventions, review dates)
7. Scheduling calendar with recurring sessions
8. Billing and invoices (sliding-scale rates, recurring charges, mock payment)
9. Auth (sign in / register)
10. Admin: users, fee schedule, sliding-scale rules, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Therapist — manage caseload, run intake and assessments, write progress notes and treatment plans, and conduct sessions
- Practice Administrator — manage clients, scheduling, billing, sliding-scale rates, and practice reports
- Client — complete intake forms and assessments and view upcoming appointments

CORE FEATURES
- Structured intake workflow with consent capture and standardized assessments (PHQ-9, GAD-7) with auto-scoring
- Progress notes in structured SOAP/DAP formats linked to each session, with sign, lock, and amendment trail
- Treatment plan builder with measurable goals, objectives, interventions, and scheduled review dates
- Recurring session scheduling with appointment status (scheduled, kept, no-show, cancelled)
- Sliding-scale fee schedule that sets a client's session rate by income band
- Recurring session billing that generates an invoice per kept session and records mock payments
- Assessment score trends charted over the course of care
- Caseload dashboard surfacing unsigned notes, upcoming sessions, and overdue plan reviews
- Secure document storage for signed consents and uploaded client records

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Client: id, therapistId, fullName, dateOfBirth, contactEmail, status, incomeBand, slidingScaleRate, createdAt, updatedAt
- Appointment: id, clientId, therapistId, startsAt, endsAt, recurrenceRule, status, fee, createdAt, updatedAt
- ProgressNote: id, appointmentId, clientId, therapistId, format, content, signedAt, createdAt, updatedAt
- Assessment: id, clientId, type, responsesJson, score, severity, administeredAt, createdAt, updatedAt
- TreatmentPlan: id, clientId, therapistId, goalsJson, interventionsJson, reviewDate, status, createdAt, updatedAt
- Invoice: id, clientId, appointmentId, amount, status, paidAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Score standardized assessments (PHQ-9, GAD-7) on submission and classify severity bands
- Generate recurring appointments from a recurrence rule and track per-session status (kept, no-show, cancelled)
- Resolve each client's session fee from the sliding-scale fee schedule based on income band
- Generate an invoice per kept session, record mock payments, and update the client balance
- Lock and sign progress notes, preventing edits after signing while keeping a dated amendment trail
- Surface caseload alerts for unsigned notes, overdue treatment-plan reviews, and upcoming sessions
- Chart assessment score trends across a course of care per client
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 group practice with 3 therapists and 1 administrator, ~12 clients across active and discharged states with intake forms and sliding-scale rates, ~60 appointments across kept, no-show, and cancelled states, scored PHQ-9 and GAD-7 assessments, signed progress notes, treatment plans, generated invoices, and demo logins for 1 admin, 3 therapists, and 2 clients. Provide a seed script and list the demo login credentials in the README.

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
