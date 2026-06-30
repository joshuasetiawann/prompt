# CareHaven Assisted Living Resident Care System

> Let care staff manage resident profiles, medication administration records, care plans, and incident reports while families follow resident updates through a secure portal

| Field | Value |
|---|---|
| **Prompt ID** | 162 |
| **Title** | Assisted Living Resident Care System |
| **Slug** | assisted-living-resident-care-system |
| **Category** | Healthcare & Wellness |
| **Domain** | Senior Living & Resident Care |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Care Staff; Facility Administrator |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building resident-care and eMAR tools for assisted-living and senior-care facilities.

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

1. Staff dashboard with today's medication rounds and care tasks
2. Resident directory with search and room filters
3. Resident profile with medical history, allergies, contacts, and care plan
4. eMAR medication administration / pass-meds screen
5. Care plan editor with goals and scheduled tasks
6. Incident report form and log
7. Auth (sign in / register)
8. Family portal with resident updates and care notes
9. Admin: residents, staff, and room management
10. Admin: compliance and administration reports

## Required features

- Resident profiles with allergies, diagnoses, emergency contacts, and care level
- eMAR scheduling that generates due medication passes per resident and shift
- Medication administration logging with given, refused, and missed status and reason codes
- Care plans with measurable goals and recurring scheduled care tasks
- Incident reporting with severity, witnesses, follow-up actions, and sign-off
- Family portal with curated read-only updates and care-note visibility controls
- Shift handover summary of outstanding meds, tasks, and open incidents
- Compliance dashboard for missed-med rates and overdue care tasks
- Audit trail on every medication and care record

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `phone`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Resident
**Fields:** `id`, `name`, `dateOfBirth`, `roomNumber`, `careLevel`, `allergies`, `diagnoses`, `emergencyContact`, `admittedAt`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Medication
**Fields:** `id`, `residentId`, `name`, `dosage`, `route`, `schedule`, `prescriber`, `startDate`, `endDate`, `createdAt`, `updatedAt`

**Relationships:**
- residentId -> references the related record

### MedAdministration
**Fields:** `id`, `medicationId`, `residentId`, `administeredById`, `scheduledTime`, `status`, `reasonCode`, `administeredAt`, `notes`, `createdAt`, `updatedAt`

**Relationships:**
- medicationId -> references the related record
- residentId -> references the related record
- administeredById -> references the related record

### CarePlan
**Fields:** `id`, `residentId`, `goal`, `tasks`, `frequency`, `status`, `reviewDate`, `createdAt`, `updatedAt`

**Relationships:**
- residentId -> references the related record

### IncidentReport
**Fields:** `id`, `residentId`, `reportedById`, `type`, `severity`, `description`, `actionsTaken`, `occurredAt`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- residentId -> references the related record
- reportedById -> references the related record

### FamilyLink
**Fields:** `id`, `residentId`, `familyUserId`, `relationship`, `accessLevel`, `createdAt`, `updatedAt`

**Relationships:**
- residentId -> references the related record
- familyUserId -> references the related record

## Backend logic

- Generate scheduled medication passes for each resident from active medication schedules and the current shift
- Record medication administration outcomes (given, refused, missed) with reason codes and timestamps
- Flag overdue or missed medications and surface them on the staff dashboard and compliance report
- Expand care plan tasks by frequency into a daily care task list per resident
- Escalate incident reports by severity and track follow-up actions through to closure
- Resolve family portal visibility so linked relatives see only permitted resident updates
- Compute compliance metrics (missed-med rate, overdue tasks, open incidents) for the admin dashboard
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
- [ ] Due medication passes are generated per resident and shift from active schedules
- [ ] Missed or refused medications are logged with a reason and appear in the compliance report
- [ ] Family members can only view residents they are explicitly linked to

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds senior living and resident care products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: CareHaven Assisted Living Resident Care System
Type: Assisted Living Resident Care System (Senior Living & Resident Care)
Target users: care staff who administer medications and log daily care and facility administrators who manage resident profiles, care plans, and incident reports.
Business goal: Let care staff manage resident profiles, medication administration records, care plans, and incident reports while families follow resident updates through a secure portal.

BRAND & DESIGN
Brand style: warm, trustworthy, accessible. Colors: sage green, cream, deep navy. A resident-centric dashboard with large-tap eMAR cards and a clear daily care timeline. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Staff dashboard with today's medication rounds and care tasks
2. Resident directory with search and room filters
3. Resident profile with medical history, allergies, contacts, and care plan
4. eMAR medication administration / pass-meds screen
5. Care plan editor with goals and scheduled tasks
6. Incident report form and log
7. Auth (sign in / register)
8. Family portal with resident updates and care notes
9. Admin: residents, staff, and room management
10. Admin: compliance and administration reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Care Staff — administer medications, log care tasks, and file incident reports
- Facility Administrator — manage residents, care plans, staff, and compliance reports
- Family Member — view resident updates, care notes, and incidents through a read-only portal

CORE FEATURES
- Resident profiles with allergies, diagnoses, emergency contacts, and care level
- eMAR scheduling that generates due medication passes per resident and shift
- Medication administration logging with given, refused, and missed status and reason codes
- Care plans with measurable goals and recurring scheduled care tasks
- Incident reporting with severity, witnesses, follow-up actions, and sign-off
- Family portal with curated read-only updates and care-note visibility controls
- Shift handover summary of outstanding meds, tasks, and open incidents
- Compliance dashboard for missed-med rates and overdue care tasks
- Audit trail on every medication and care record

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, phone, createdAt, updatedAt
- Resident: id, name, dateOfBirth, roomNumber, careLevel, allergies, diagnoses, emergencyContact, admittedAt, createdAt, updatedAt
- Medication: id, residentId, name, dosage, route, schedule, prescriber, startDate, endDate, createdAt, updatedAt
- MedAdministration: id, medicationId, residentId, administeredById, scheduledTime, status, reasonCode, administeredAt, notes, createdAt, updatedAt
- CarePlan: id, residentId, goal, tasks, frequency, status, reviewDate, createdAt, updatedAt
- IncidentReport: id, residentId, reportedById, type, severity, description, actionsTaken, occurredAt, status, createdAt, updatedAt
- FamilyLink: id, residentId, familyUserId, relationship, accessLevel, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Generate scheduled medication passes for each resident from active medication schedules and the current shift
- Record medication administration outcomes (given, refused, missed) with reason codes and timestamps
- Flag overdue or missed medications and surface them on the staff dashboard and compliance report
- Expand care plan tasks by frequency into a daily care task list per resident
- Escalate incident reports by severity and track follow-up actions through to closure
- Resolve family portal visibility so linked relatives see only permitted resident updates
- Compute compliance metrics (missed-med rate, overdue tasks, open incidents) for the admin dashboard
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 facility with ~15 residents, active medications with eMAR schedules, sample administration records across given/refused/missed, care plans with recurring tasks, a few incident reports, 1 administrator, 4 care staff, and 5 family members. Provide a seed script and list the demo login credentials in the README.

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
