# InternBridge Student Internship & Placement Management System

> Let students match to approved internship postings, route applications and offers, and track on-placement logbooks, supervisor evaluations, and faculty sign-off toward credit completion

| Field | Value |
|---|---|
| **Prompt ID** | 147 |
| **Title** | Student Internship & Placement Management System |
| **Slug** | student-internship-placement-system |
| **Category** | Education & Learning |
| **Domain** | Internships & Work Placement |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Placement coordinators and faculty advisors; Students and host-employer supervisors |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building placement-office software for universities, vocational programs, and career centers coordinating students, employers, and academic supervisors.

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

1. Dashboard (role-aware: my applications, my placements, or pending approvals)
2. Posting catalog with field, location, term, and paid/unpaid filters
3. Posting detail with eligibility and apply action
4. Application tracker with pipeline stages and offers
5. Employer directory and approval queue
6. Placement detail with logbook, hours, and supervisor evaluation
7. Logbook entry form and weekly hours timeline
8. Faculty credit sign-off review
9. Auth (sign in / register)
10. Admin: users, employers, postings, and reports

## Required features

- Approved-only posting catalog with eligibility-based application
- Employer and posting approval workflow handled by coordinators
- Application pipeline from applied through interview, offer, and acceptance
- Offer issuance with student accept and decline
- On-placement logbook with weekly hours and activity entries
- Supervisor evaluation forms scored against competencies
- Faculty sign-off gating credit completion on hours and a submitted evaluation
- Placement progress tracking toward required hours and milestones
- Reports on placement rates, hours logged, and outstanding sign-offs

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `program`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Employer
**Fields:** `id`, `name`, `contactName`, `contactEmail`, `industry`, `approvalStatus`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Posting
**Fields:** `id`, `employerId`, `title`, `description`, `field`, `location`, `isPaid`, `slots`, `term`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- employerId -> references the related record

### Application
**Fields:** `id`, `postingId`, `studentId`, `stage`, `coverNote`, `offerStatus`, `createdAt`, `updatedAt`

**Relationships:**
- postingId -> references the related record
- studentId -> references the related record

### Placement
**Fields:** `id`, `applicationId`, `studentId`, `supervisorId`, `facultyAdvisorId`, `requiredHours`, `status`, `signOffStatus`, `createdAt`, `updatedAt`

**Relationships:**
- applicationId -> references the related record
- studentId -> references the related record
- supervisorId -> references the related record
- facultyAdvisorId -> references the related record

### LogbookEntry
**Fields:** `id`, `placementId`, `weekOf`, `hours`, `activities`, `approvedBySupervisor`, `createdAt`, `updatedAt`

**Relationships:**
- placementId -> references the related record

### Evaluation
**Fields:** `id`, `placementId`, `evaluatorId`, `competencyScores`, `comments`, `submittedAt`, `createdAt`, `updatedAt`

**Relationships:**
- placementId -> references the related record
- evaluatorId -> references the related record

## Backend logic

- Approve employers and postings and publish only approved postings to the catalog
- Check student eligibility against posting requirements before accepting an application
- Advance applications through the pipeline stages and issue or withdraw offers
- Record student accept or decline and create a placement on acceptance
- Accumulate logged hours per placement and validate them against required hours
- Collect supervisor evaluations scored against defined competencies
- Gate faculty credit sign-off on completed required hours and a submitted evaluation
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
- [ ] Only coordinator-approved postings appear in the student catalog and accept applications
- [ ] Accepting an offer creates a placement and a declined offer reopens the posting slot
- [ ] Faculty credit sign-off is blocked until required hours are met and an evaluation is submitted

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds internship and work placement products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: InternBridge Student Internship & Placement Management System
Type: Student Internship & Placement Management System (Internships & Work Placement)
Target users: students applying to approved internship postings whose employer supervisors evaluate them and placement coordinators and faculty advisors who route applications and sign off on credit.
Business goal: Let students match to approved internship postings, route applications and offers, and track on-placement logbooks, supervisor evaluations, and faculty sign-off toward credit completion.

BRAND & DESIGN
Brand style: professional, supportive, structured. Colors: navy, sky blue, warm grey. A placement pipeline board with posting cards, application stages, and a logbook timeline. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard (role-aware: my applications, my placements, or pending approvals)
2. Posting catalog with field, location, term, and paid/unpaid filters
3. Posting detail with eligibility and apply action
4. Application tracker with pipeline stages and offers
5. Employer directory and approval queue
6. Placement detail with logbook, hours, and supervisor evaluation
7. Logbook entry form and weekly hours timeline
8. Faculty credit sign-off review
9. Auth (sign in / register)
10. Admin: users, employers, postings, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Student — browse approved postings, apply, log hours, and track placement progress
- Host-Employer Supervisor — post roles, review applicants, and submit evaluations
- Placement Coordinator — approve employers and postings and route applications and offers
- Faculty Advisor — monitor placements and sign off on credit completion

CORE FEATURES
- Approved-only posting catalog with eligibility-based application
- Employer and posting approval workflow handled by coordinators
- Application pipeline from applied through interview, offer, and acceptance
- Offer issuance with student accept and decline
- On-placement logbook with weekly hours and activity entries
- Supervisor evaluation forms scored against competencies
- Faculty sign-off gating credit completion on hours and a submitted evaluation
- Placement progress tracking toward required hours and milestones
- Reports on placement rates, hours logged, and outstanding sign-offs

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, program, createdAt, updatedAt
- Employer: id, name, contactName, contactEmail, industry, approvalStatus, createdAt, updatedAt
- Posting: id, employerId, title, description, field, location, isPaid, slots, term, status, createdAt, updatedAt
- Application: id, postingId, studentId, stage, coverNote, offerStatus, createdAt, updatedAt
- Placement: id, applicationId, studentId, supervisorId, facultyAdvisorId, requiredHours, status, signOffStatus, createdAt, updatedAt
- LogbookEntry: id, placementId, weekOf, hours, activities, approvedBySupervisor, createdAt, updatedAt
- Evaluation: id, placementId, evaluatorId, competencyScores, comments, submittedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Approve employers and postings and publish only approved postings to the catalog
- Check student eligibility against posting requirements before accepting an application
- Advance applications through the pipeline stages and issue or withdraw offers
- Record student accept or decline and create a placement on acceptance
- Accumulate logged hours per placement and validate them against required hours
- Collect supervisor evaluations scored against defined competencies
- Gate faculty credit sign-off on completed required hours and a submitted evaluation
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~8 approved employers, ~15 postings across fields, sample applications in mixed stages, 5 active placements with logbook entries and supervisor evaluations, 1 admin, 1 coordinator, 2 faculty advisors, 4 students, and 3 supervisors. Provide a seed script and list the demo login credentials in the README.

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
