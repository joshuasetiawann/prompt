# GradeRunner Coding Assignment Autograder Platform

> Let instructors define coding assignments with hidden test cases and rubrics, accept student code submissions that run against the tests in a sandbox, and return auto-scored feedback plus manual review and plagiarism flags

| Field | Value |
|---|---|
| **Prompt ID** | 149 |
| **Title** | Coding Assignment Autograder Platform |
| **Slug** | coding-assignment-autograder-platform |
| **Category** | Education & Learning |
| **Domain** | Programming Education |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Programming instructors and teaching assistants; Students submitting code |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building submission-and-grading infrastructure for coding bootcamps, CS courses, and programming instructors (distinct from a content course platform).

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

1. Dashboard (role-aware: my assignments, submissions to review, or my grades)
2. Assignment list and detail with instructions and deadline
3. Assignment authoring (starter code, visible and hidden tests, rubric, language)
4. Code submission with in-browser editor or file upload
5. Submission result with per-test breakdown and feedback
6. Manual review queue with rubric scoring
7. Plagiarism / similarity report
8. Gradebook by assignment and student
9. Auth (sign in / register)
10. Admin: courses, enrollment, and runner settings

## Required features

- Assignment authoring with starter code, visible and hidden test cases, and a rubric
- Sandboxed execution of submitted code against test suites with time and memory limits
- Auto-scoring from test results weighted by each test and the rubric
- Per-test feedback with pass/fail, output diff, and partial credit
- Submission deadlines, attempt limits, and late penalties
- Manual review queue for TAs to override or adjust scores
- Similarity detection across submissions with plagiarism flagging
- Gradebook aggregating auto and manual scores per student
- Resubmission history with a best-or-last score policy

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Course
**Fields:** `id`, `name`, `term`, `instructorId`, `createdAt`, `updatedAt`

**Relationships:**
- instructorId -> references the related record

### Enrollment
**Fields:** `id`, `courseId`, `userId`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- courseId -> references the related record
- userId -> references the related record

### Assignment
**Fields:** `id`, `courseId`, `title`, `instructions`, `language`, `starterCode`, `dueAt`, `maxAttempts`, `latePenalty`, `createdAt`, `updatedAt`

**Relationships:**
- courseId -> references the related record

### TestCase
**Fields:** `id`, `assignmentId`, `name`, `input`, `expectedOutput`, `weight`, `isHidden`, `createdAt`, `updatedAt`

**Relationships:**
- assignmentId -> references the related record

### Submission
**Fields:** `id`, `assignmentId`, `studentId`, `code`, `status`, `autoScore`, `manualScore`, `attemptNumber`, `similarityFlag`, `createdAt`, `updatedAt`

**Relationships:**
- assignmentId -> references the related record
- studentId -> references the related record

### TestResult
**Fields:** `id`, `submissionId`, `testCaseId`, `passed`, `actualOutput`, `runtimeMs`, `createdAt`, `updatedAt`

**Relationships:**
- submissionId -> references the related record
- testCaseId -> references the related record

## Backend logic

- Execute submitted code in a sandbox against visible and hidden tests with time and memory limits
- Compute an auto score from test results weighted by each test and the rubric
- Enforce deadlines, attempt limits, and late penalties at submission time
- Record per-test results with output diffs for student feedback
- Run similarity comparison across submissions and flag likely plagiarism
- Queue flagged or low-confidence submissions for TA manual review and score override
- Aggregate auto and manual scores into the gradebook per student and assignment
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
- [ ] A submission runs against hidden tests in the sandbox and returns a rubric-weighted auto score
- [ ] Hidden test cases and other students' code are never exposed in the student submission view
- [ ] Flagged similar submissions appear in the TA review queue and a manual score overrides the auto score

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds programming education products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: GradeRunner Coding Assignment Autograder Platform
Type: Coding Assignment Autograder Platform (Programming Education)
Target users: instructors and teaching assistants who define coding assignments with hidden tests and rubrics and students who submit code and receive auto-scored feedback.
Business goal: Let instructors define coding assignments with hidden test cases and rubrics, accept student code submissions that run against the tests in a sandbox, and return auto-scored feedback plus manual review and plagiarism flags.

BRAND & DESIGN
Brand style: technical, focused, dark-mode-friendly. Colors: charcoal, electric green, white. A submission view with a code pane, a test-results panel, and a rubric scorecard. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard (role-aware: my assignments, submissions to review, or my grades)
2. Assignment list and detail with instructions and deadline
3. Assignment authoring (starter code, visible and hidden tests, rubric, language)
4. Code submission with in-browser editor or file upload
5. Submission result with per-test breakdown and feedback
6. Manual review queue with rubric scoring
7. Plagiarism / similarity report
8. Gradebook by assignment and student
9. Auth (sign in / register)
10. Admin: courses, enrollment, and runner settings

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Instructor — create assignments, hidden tests, and rubrics and finalize grades
- Teaching Assistant — run manual review and adjust scores on flagged submissions
- Student — submit code, view auto-scored feedback, and track grades

CORE FEATURES
- Assignment authoring with starter code, visible and hidden test cases, and a rubric
- Sandboxed execution of submitted code against test suites with time and memory limits
- Auto-scoring from test results weighted by each test and the rubric
- Per-test feedback with pass/fail, output diff, and partial credit
- Submission deadlines, attempt limits, and late penalties
- Manual review queue for TAs to override or adjust scores
- Similarity detection across submissions with plagiarism flagging
- Gradebook aggregating auto and manual scores per student
- Resubmission history with a best-or-last score policy

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Course: id, name, term, instructorId, createdAt, updatedAt
- Enrollment: id, courseId, userId, role, createdAt, updatedAt
- Assignment: id, courseId, title, instructions, language, starterCode, dueAt, maxAttempts, latePenalty, createdAt, updatedAt
- TestCase: id, assignmentId, name, input, expectedOutput, weight, isHidden, createdAt, updatedAt
- Submission: id, assignmentId, studentId, code, status, autoScore, manualScore, attemptNumber, similarityFlag, createdAt, updatedAt
- TestResult: id, submissionId, testCaseId, passed, actualOutput, runtimeMs, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Execute submitted code in a sandbox against visible and hidden tests with time and memory limits
- Compute an auto score from test results weighted by each test and the rubric
- Enforce deadlines, attempt limits, and late penalties at submission time
- Record per-test results with output diffs for student feedback
- Run similarity comparison across submissions and flag likely plagiarism
- Queue flagged or low-confidence submissions for TA manual review and score override
- Aggregate auto and manual scores into the gradebook per student and assignment
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 course with enrolled students, ~5 assignments in Python and JavaScript with visible and hidden test cases and rubrics, sample submissions with auto-scored per-test results, a flagged similar pair, 1 admin, 1 instructor, 1 TA, and 4 students. Provide a seed script and list the demo login credentials in the README.

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
