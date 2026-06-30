# Caliber 360 Performance Review & OKR Platform

> Let HR run structured review cycles with self, manager, peer, and upward feedback, tie ratings to OKRs and competencies, and give calibration dashboards and exportable review packets

| Field | Value |
|---|---|
| **Prompt ID** | 181 |
| **Title** | 360 Performance Review & OKR Platform |
| **Slug** | performance-review-okr-platform |
| **Category** | Finance, Legal & HR |
| **Domain** | Performance Management |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | HR/People Ops and managers; Employees completing reviews and goals |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building dedicated performance and goal-setting tools, separate from a general HR records system.

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

1. Dashboard with active cycle status, my open tasks, and team completion
2. Review cycles list and cycle setup (windows, participants, and templates)
3. My reviews: self-assessment and assigned feedback to complete
4. Feedback form (competency ratings, OKR-linked questions, and comments)
5. OKR workspace: objectives and key results with progress
6. Reviewee 360 report aggregating feedback across self, manager, peer, and upward
7. Calibration dashboard with rating distributions across managers and teams
8. Review packets: generate, preview, and export per employee
9. Auth (sign in / register)
10. Admin: users, competency framework, templates, and reports

## Required features

- Structured review cycles with configurable self, manager, peer, and upward feedback windows
- Reviewer nomination with manager approval and per-subject reviewer sets
- Competency framework with leveled rating scales tied to feedback questions
- OKR objectives with weighted key results and automatic progress roll-up
- Linkage of ratings to OKRs and competencies in the final 360 report
- Calibration dashboard with rating distributions and cross-manager comparison
- Calibrated final ratings with manager justification notes
- Exportable, printable review packets per employee per cycle
- Automated reminders and completion tracking for outstanding feedback requests

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `managerId`, `team`, `createdAt`, `updatedAt`

**Relationships:**
- managerId -> references the related record

### ReviewCycle
**Fields:** `id`, `name`, `selfWindowStart`, `selfWindowEnd`, `feedbackWindowEnd`, `calibrationDeadline`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Objective
**Fields:** `id`, `ownerId`, `cycleId`, `title`, `description`, `weight`, `progress`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record
- cycleId -> references the related record

### KeyResult
**Fields:** `id`, `objectiveId`, `title`, `unit`, `targetValue`, `currentValue`, `progress`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- objectiveId -> references the related record

### FeedbackRequest
**Fields:** `id`, `cycleId`, `subjectId`, `reviewerId`, `relationship`, `status`, `dueDate`, `createdAt`, `updatedAt`

**Relationships:**
- cycleId -> references the related record
- subjectId -> references the related record
- reviewerId -> references the related record

### FeedbackResponse
**Fields:** `id`, `requestId`, `competencyScores`, `answersJson`, `overallRating`, `submittedAt`, `createdAt`, `updatedAt`

**Relationships:**
- requestId -> references the related record

### ReviewSummary
**Fields:** `id`, `cycleId`, `subjectId`, `managerId`, `aggregateRating`, `calibratedRating`, `justification`, `packetUrl`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- cycleId -> references the related record
- subjectId -> references the related record
- managerId -> references the related record

## Backend logic

- Create a review cycle and generate self, manager, peer, and upward feedback requests for each participant
- Let employees nominate peers and have managers approve the reviewer set per subject
- Collect feedback responses with competency scores and an overall rating, locking them once submitted
- Track OKR objectives and roll up weighted key-result progress into objective and cycle completion
- Aggregate all feedback ratings per subject into a 360 report tied to their OKRs and competencies
- Apply a calibrated final rating per subject with manager justification and generate an exportable review packet
- Send and track reminder notifications for outstanding feedback requests before the cycle deadline
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
- [ ] Launching a cycle generates self, manager, peer, and upward feedback requests for every participant and tracks completion
- [ ] Submitted feedback locks and rolls up into a 360 report that ties ratings to the employee's OKRs and competencies
- [ ] The calibration dashboard shows rating distributions across managers, and a calibrated final rating produces an exportable review packet

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds performance management products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: Caliber 360 Performance Review & OKR Platform
Type: 360 Performance Review & OKR Platform (Performance Management)
Target users: HR and People Ops admins who configure review cycles and run calibration and managers and employees who complete reviews and set goals.
Business goal: Let HR run structured review cycles with self, manager, peer, and upward feedback, tie ratings to OKRs and competencies, and give calibration dashboards and exportable review packets.

BRAND & DESIGN
Brand style: focused, structured, professional. Colors: deep slate, signal teal, warm grey. A cycle-status dashboard with completion progress rings beside a calibration grid of rating distributions. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with active cycle status, my open tasks, and team completion
2. Review cycles list and cycle setup (windows, participants, and templates)
3. My reviews: self-assessment and assigned feedback to complete
4. Feedback form (competency ratings, OKR-linked questions, and comments)
5. OKR workspace: objectives and key results with progress
6. Reviewee 360 report aggregating feedback across self, manager, peer, and upward
7. Calibration dashboard with rating distributions across managers and teams
8. Review packets: generate, preview, and export per employee
9. Auth (sign in / register)
10. Admin: users, competency framework, templates, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- HR/People Ops Admin — configure cycles and competencies, run calibration, and export review packets
- Manager — review direct reports, approve reviewer sets, and set calibrated final ratings
- Employee — complete self-assessment, give peer and upward feedback, and manage OKRs
- Admin — manage users, templates, and platform settings

CORE FEATURES
- Structured review cycles with configurable self, manager, peer, and upward feedback windows
- Reviewer nomination with manager approval and per-subject reviewer sets
- Competency framework with leveled rating scales tied to feedback questions
- OKR objectives with weighted key results and automatic progress roll-up
- Linkage of ratings to OKRs and competencies in the final 360 report
- Calibration dashboard with rating distributions and cross-manager comparison
- Calibrated final ratings with manager justification notes
- Exportable, printable review packets per employee per cycle
- Automated reminders and completion tracking for outstanding feedback requests

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, managerId, team, createdAt, updatedAt
- ReviewCycle: id, name, selfWindowStart, selfWindowEnd, feedbackWindowEnd, calibrationDeadline, status, createdAt, updatedAt
- Objective: id, ownerId, cycleId, title, description, weight, progress, status, createdAt, updatedAt
- KeyResult: id, objectiveId, title, unit, targetValue, currentValue, progress, status, createdAt, updatedAt
- FeedbackRequest: id, cycleId, subjectId, reviewerId, relationship, status, dueDate, createdAt, updatedAt
- FeedbackResponse: id, requestId, competencyScores, answersJson, overallRating, submittedAt, createdAt, updatedAt
- ReviewSummary: id, cycleId, subjectId, managerId, aggregateRating, calibratedRating, justification, packetUrl, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Create a review cycle and generate self, manager, peer, and upward feedback requests for each participant
- Let employees nominate peers and have managers approve the reviewer set per subject
- Collect feedback responses with competency scores and an overall rating, locking them once submitted
- Track OKR objectives and roll up weighted key-result progress into objective and cycle completion
- Aggregate all feedback ratings per subject into a 360 report tied to their OKRs and competencies
- Apply a calibrated final rating per subject with manager justification and generate an exportable review packet
- Send and track reminder notifications for outstanding feedback requests before the cycle deadline
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 active review cycle plus 1 closed cycle, ~12 employees across 3 teams with managers, self/manager/peer/upward feedback requests in mixed completion states, a competency framework, OKRs with key-result progress, calibrated ratings and a sample review packet, and demo logins for 1 HR admin, 2 managers, and 3 employees. Provide a seed script and list the demo login credentials in the README.

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
