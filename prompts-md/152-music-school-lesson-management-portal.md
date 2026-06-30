# Cadenza Music School Lesson Management Portal

> Let music schools manage recurring private and group lessons, log student practice and repertoire progress, coordinate recital sign-ups and instrument rentals, and bill families on monthly tuition cycles

| Field | Value |
|---|---|
| **Prompt ID** | 152 |
| **Title** | Music School Lesson Management Portal |
| **Slug** | music-school-lesson-management-portal |
| **Category** | Education & Learning |
| **Domain** | Music & Arts Education |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Music school administrators and teachers; Students and parents |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building studio-management tools for music and performing-arts schools that run ongoing lessons rather than one-off bookings.

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

1. Dashboard with this week's lessons, practice streaks, and tuition status
2. Lesson calendar for recurring private and group lessons
3. Lesson detail (attendance, repertoire progress, practice assignment)
4. Student profile (repertoire, practice log, skill level)
5. Recital management and sign-ups
6. Instrument rental management (inventory, assignments, returns)
7. Tuition and billing (monthly cycles, invoices, mock payment)
8. Teacher schedule and roster
9. Auth (sign in / register)
10. Admin: users, programs, pricing, and reports

## Required features

- Recurring private and group lesson scheduling with per-occurrence attendance tracking
- Per-student repertoire and practice logging with assigned pieces and progress notes
- Recital events with student sign-ups, assigned pieces, and program ordering
- Instrument rental inventory with assignments, due dates, and returns
- Monthly tuition cycles generating one invoice per family with mock payment
- Practice streaks and progress summaries for students and parents
- Group lesson rosters with capacity limits
- Make-up lesson and absence handling within recurring schedules

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Student
**Fields:** `id`, `userId`, `parentId`, `instrument`, `skillLevel`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record
- parentId -> references the related record

### Lesson
**Fields:** `id`, `teacherId`, `title`, `type`, `dayOfWeek`, `startTime`, `durationMinutes`, `capacity`, `isRecurring`, `scheduledAt`, `venue`, `createdAt`, `updatedAt`

**Relationships:**
- teacherId -> references the related record

### Enrollment
**Fields:** `id`, `lessonId`, `studentId`, `status`, `pieceTitle`, `orderPosition`, `createdAt`, `updatedAt`

**Relationships:**
- lessonId -> references the related record
- studentId -> references the related record

### PracticeLog
**Fields:** `id`, `studentId`, `pieceTitle`, `minutesPracticed`, `progressNote`, `loggedOn`, `createdAt`, `updatedAt`

**Relationships:**
- studentId -> references the related record

### Rental
**Fields:** `id`, `studentId`, `instrumentName`, `serialNumber`, `dueDate`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- studentId -> references the related record

### Invoice
**Fields:** `id`, `parentId`, `periodMonth`, `amount`, `status`, `dueDate`, `createdAt`, `updatedAt`

**Relationships:**
- parentId -> references the related record

## Backend logic

- Generate recurring lesson occurrences from weekly patterns and track per-occurrence attendance
- Enroll students in private, group, and recital events while enforcing group capacity limits
- Log student practice and repertoire progress and compute practice streaks and summaries
- Manage instrument rentals with assignments, due dates, returns, and overdue flags
- Generate monthly tuition invoices per family and record mock payments against them
- Order recital programs from sign-ups and produce a printable program
- Handle absences and schedule make-up lessons within recurring schedules
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
- [ ] A recurring weekly lesson generates the correct upcoming occurrences and attendance can be marked per occurrence
- [ ] Enrolling students in a group lesson is blocked once the lesson reaches its capacity
- [ ] A monthly billing run produces one tuition invoice per family and recording a mock payment marks it paid

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds studio-management products for music and arts education, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: Cadenza Music School Lesson Management Portal
Type: Music School Lesson Management Portal (Music & Arts Education)
Target users: music school administrators and teachers who run recurring lessons and bill families and students and parents who track practice, recitals, and instrument rentals.
Business goal: Let music schools manage recurring private and group lessons, log student practice and repertoire progress, coordinate recital sign-ups and instrument rentals, and bill families on monthly tuition cycles.

BRAND & DESIGN
Brand style: warm, expressive, polished. Colors: deep burgundy, gold, cream. A weekly lesson calendar with teacher color-coding, a student practice log, and a recital program sidebar. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with this week's lessons, practice streaks, and tuition status
2. Lesson calendar for recurring private and group lessons
3. Lesson detail (attendance, repertoire progress, practice assignment)
4. Student profile (repertoire, practice log, skill level)
5. Recital management and sign-ups
6. Instrument rental management (inventory, assignments, returns)
7. Tuition and billing (monthly cycles, invoices, mock payment)
8. Teacher schedule and roster
9. Auth (sign in / register)
10. Admin: users, programs, pricing, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Administrator — manage teachers, lessons, tuition, and rentals
- Teacher — run lessons, log repertoire progress, and assign practice
- Student / Parent — view schedule, log practice, sign up for recitals, and pay tuition

CORE FEATURES
- Recurring private and group lesson scheduling with per-occurrence attendance tracking
- Per-student repertoire and practice logging with assigned pieces and progress notes
- Recital events with student sign-ups, assigned pieces, and program ordering
- Instrument rental inventory with assignments, due dates, and returns
- Monthly tuition cycles generating one invoice per family with mock payment
- Practice streaks and progress summaries for students and parents
- Group lesson rosters with capacity limits
- Make-up lesson and absence handling within recurring schedules

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Student: id, userId, parentId, instrument, skillLevel, createdAt, updatedAt
- Lesson: id, teacherId, title, type, dayOfWeek, startTime, durationMinutes, capacity, isRecurring, scheduledAt, venue, createdAt, updatedAt
- Enrollment: id, lessonId, studentId, status, pieceTitle, orderPosition, createdAt, updatedAt
- PracticeLog: id, studentId, pieceTitle, minutesPracticed, progressNote, loggedOn, createdAt, updatedAt
- Rental: id, studentId, instrumentName, serialNumber, dueDate, status, createdAt, updatedAt
- Invoice: id, parentId, periodMonth, amount, status, dueDate, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Generate recurring lesson occurrences from weekly patterns and track per-occurrence attendance
- Enroll students in private, group, and recital events while enforcing group capacity limits
- Log student practice and repertoire progress and compute practice streaks and summaries
- Manage instrument rentals with assignments, due dates, returns, and overdue flags
- Generate monthly tuition invoices per family and record mock payments against them
- Order recital programs from sign-ups and produce a printable program
- Handle absences and schedule make-up lessons within recurring schedules
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 music school with 4 teachers and ~12 students linked to parent accounts, recurring private and group lessons with attendance and practice logs, an upcoming recital with sign-ups, active instrument rentals, monthly tuition invoices, and demo logins for 1 admin, 4 teachers, and 6 student/parent accounts. Provide a seed script and list the demo login credentials in the README.

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
