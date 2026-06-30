# ScholarGate Scholarship Application Portal

> Let students apply with documents and let reviewers score and award scholarships fairly

| Field | Value |
|---|---|
| **Prompt ID** | 83 |
| **Title** | Scholarship Application Portal |
| **Slug** | scholarship-application-portal |
| **Category** | Education & Learning |
| **Domain** | Education & Scholarships |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Applicant; Reviewer; Admin |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building scholarship or grant application portals.

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

1. Home and scholarship listings
2. Applicant: apply, my applications, status
3. Application detail (essays, documents)
4. Reviewer: assigned applications and scoring
5. Scholarships and eligibility
6. Awards
7. Admin: users, rubrics, audit log
8. Reports

## Required features

- Scholarships with eligibility and deadlines
- Applications with essays and documents (mock storage)
- Reviewer assignment and rubric scoring
- Award decisions and notifications (logged)
- Role-scoped applicant access
- Conflict-free reviewer assignment
- Reports: applications and award outcomes

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Scholarship
**Fields:** `id`, `name`, `amount`, `deadline`, `eligibility`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Application
**Fields:** `id`, `scholarshipId`, `applicantId`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- scholarshipId -> references the related record
- applicantId -> references the related record

### AppDoc
**Fields:** `id`, `applicationId`, `name`, `createdAt`, `updatedAt`

**Relationships:**
- applicationId -> references the related record

### ReviewAssignment
**Fields:** `id`, `applicationId`, `reviewerId`, `createdAt`, `updatedAt`

**Relationships:**
- applicationId -> references the related record
- reviewerId -> references the related record

### Score
**Fields:** `id`, `applicationId`, `reviewerId`, `value`, `notes`, `createdAt`, `updatedAt`

**Relationships:**
- applicationId -> references the related record
- reviewerId -> references the related record

### Award
**Fields:** `id`, `applicationId`, `amount`, `awardedAt`, `createdAt`, `updatedAt`

**Relationships:**
- applicationId -> references the related record

## Backend logic

- Application intake with essays and documents
- Reviewer assignment and rubric scoring
- Average score and ranking
- Award decisions
- Role-scoped access and reporting
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
- [ ] Applicants see only their own applications
- [ ] Reviewers score only their assigned applications
- [ ] Awards attach to the highest-ranked eligible applicants

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds scholarship application and review portals, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: ScholarGate Scholarship Application Portal
Type: Scholarship Application Portal (Education & Scholarships)
Target users: students applying for scholarships and reviewers and admins managing programs and awards.
Business goal: Let students apply with documents and let reviewers score and award scholarships fairly.

BRAND & DESIGN
Brand style: aspirational, fair, academic. Colors: indigo, gold accent, white. Clean, modern, scholarship cards, application forms, and a review queue. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home and scholarship listings
2. Applicant: apply, my applications, status
3. Application detail (essays, documents)
4. Reviewer: assigned applications and scoring
5. Scholarships and eligibility
6. Awards
7. Admin: users, rubrics, audit log
8. Reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Applicant — apply and track status
- Reviewer — score assigned applications
- Admin — manage scholarships, rubrics, and awards

CORE FEATURES
- Scholarships with eligibility and deadlines
- Applications with essays and documents (mock storage)
- Reviewer assignment and rubric scoring
- Award decisions and notifications (logged)
- Role-scoped applicant access
- Conflict-free reviewer assignment
- Reports: applications and award outcomes

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Scholarship: id, name, amount, deadline, eligibility, createdAt, updatedAt
- Application: id, scholarshipId, applicantId, status, createdAt, updatedAt
- AppDoc: id, applicationId, name, createdAt, updatedAt
- ReviewAssignment: id, applicationId, reviewerId, createdAt, updatedAt
- Score: id, applicationId, reviewerId, value, notes, createdAt, updatedAt
- Award: id, applicationId, amount, awardedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Application intake with essays and documents
- Reviewer assignment and rubric scoring
- Average score and ranking
- Award decisions
- Role-scoped access and reporting
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~6 scholarships, ~30 applications, reviewer assignments and scores, awards, 1 admin, 2 reviewers, 3 applicants. Provide a seed script and list the demo login credentials in the README.

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
