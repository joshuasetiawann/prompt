# RehabRx Physical Therapy Exercise Prescription Portal

> Let clinicians prescribe home exercise programs from a video library, track patient adherence, and log pain and range-of-motion outcomes across a course of care

| Field | Value |
|---|---|
| **Prompt ID** | 157 |
| **Title** | Physical Therapy Exercise Prescription Portal |
| **Slug** | physical-therapy-exercise-prescription-portal |
| **Category** | Healthcare & Wellness |
| **Domain** | Rehabilitation & Physical Therapy |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Physical Therapist; Rehab Patient |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building home-exercise and outcome-tracking tools for physical therapy, sports rehab, and occupational therapy clinics.

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

1. Clinician dashboard with active caseload, adherence alerts, and outcome trends
2. Exercise video library with search and filters by body region and equipment
3. Program builder (assemble exercises, set sets, reps, hold time, and frequency)
4. Patient profile and plan of care (diagnosis, program, outcomes)
5. Patient home program view with embedded demo videos and completion check-off
6. Outcome logging (pain scale and range-of-motion entry)
7. Adherence and outcomes dashboard (completion rate, pain and ROM trends)
8. Therapist-patient messaging and check-ins
9. Auth (sign in / register)
10. Admin: clinicians, exercise library management, and reports

## Required features

- Searchable exercise-video library filterable by body region, equipment, and difficulty
- Drag-to-order program builder setting sets, reps, hold time, and weekly frequency per exercise
- Patient home program with embedded demo videos and per-exercise completion check-off
- Adherence tracking that computes completion rate against the prescribed schedule
- Pain (0-10) and range-of-motion logging with per-joint measurements
- Outcome trend charts for pain and range-of-motion across the course of care
- Program templates per common diagnosis (ACL, rotator cuff) for quick prescription
- Therapist alerts for low adherence and spikes in reported pain
- Secure messaging and check-ins between therapist and patient

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Exercise
**Fields:** `id`, `name`, `bodyRegion`, `equipment`, `difficulty`, `videoUrl`, `instructions`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Patient
**Fields:** `id`, `therapistId`, `fullName`, `diagnosis`, `planOfCareStart`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- therapistId -> references the related record

### Program
**Fields:** `id`, `patientId`, `therapistId`, `name`, `status`, `startDate`, `endDate`, `createdAt`, `updatedAt`

**Relationships:**
- patientId -> references the related record
- therapistId -> references the related record

### ProgramExercise
**Fields:** `id`, `programId`, `exerciseId`, `sets`, `reps`, `holdSeconds`, `frequencyPerWeek`, `orderIndex`, `createdAt`, `updatedAt`

**Relationships:**
- programId -> references the related record
- exerciseId -> references the related record

### ExerciseLog
**Fields:** `id`, `programExerciseId`, `patientId`, `completedAt`, `painLevel`, `notes`, `createdAt`, `updatedAt`

**Relationships:**
- programExerciseId -> references the related record
- patientId -> references the related record

### OutcomeMeasure
**Fields:** `id`, `patientId`, `type`, `joint`, `value`, `recordedAt`, `createdAt`, `updatedAt`

**Relationships:**
- patientId -> references the related record

## Backend logic

- Assemble and order a program from library exercises with per-exercise sets, reps, hold time, and frequency
- Compute adherence as completed versus prescribed exercise instances over each week of care
- Record per-exercise completion logs with a pain rating from the patient home view
- Capture pain and range-of-motion outcome measures and chart their trends over the course of care
- Instantiate a program from a diagnosis template, copying its exercises and dosages
- Raise therapist alerts when weekly adherence drops below a threshold or reported pain spikes
- Manage therapist-patient check-in messages tied to the active plan of care
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
- [ ] Marking prescribed exercises complete updates the patient's weekly adherence percentage on the therapist dashboard
- [ ] Logging pain and range-of-motion values adds points to the patient's outcome trend charts across the course of care
- [ ] Instantiating a diagnosis template copies its exercises and dosages into a new editable program

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds rehabilitation and physical therapy products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: RehabRx Physical Therapy Exercise Prescription Portal
Type: Physical Therapy Exercise Prescription Portal (Rehabilitation & Physical Therapy)
Target users: physical therapists who prescribe home exercise programs and track outcomes and rehab patients who follow their programs and log pain and range-of-motion results.
Business goal: Let clinicians prescribe home exercise programs from a video library, track patient adherence, and log pain and range-of-motion outcomes across a course of care.

BRAND & DESIGN
Brand style: energetic, supportive, clinical. Colors: kinetic blue, lime green, off-white. A program builder with a searchable exercise-video library on the left and a drag-to-order prescription plan on the right. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Clinician dashboard with active caseload, adherence alerts, and outcome trends
2. Exercise video library with search and filters by body region and equipment
3. Program builder (assemble exercises, set sets, reps, hold time, and frequency)
4. Patient profile and plan of care (diagnosis, program, outcomes)
5. Patient home program view with embedded demo videos and completion check-off
6. Outcome logging (pain scale and range-of-motion entry)
7. Adherence and outcomes dashboard (completion rate, pain and ROM trends)
8. Therapist-patient messaging and check-ins
9. Auth (sign in / register)
10. Admin: clinicians, exercise library management, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Physical Therapist — build exercise programs, set sets, reps, and frequency, and review adherence and outcomes
- Rehab Patient — follow the prescribed program, mark exercises complete, and log pain and range-of-motion
- Clinic Admin — manage clinicians, the exercise-video library, and clinic reports

CORE FEATURES
- Searchable exercise-video library filterable by body region, equipment, and difficulty
- Drag-to-order program builder setting sets, reps, hold time, and weekly frequency per exercise
- Patient home program with embedded demo videos and per-exercise completion check-off
- Adherence tracking that computes completion rate against the prescribed schedule
- Pain (0-10) and range-of-motion logging with per-joint measurements
- Outcome trend charts for pain and range-of-motion across the course of care
- Program templates per common diagnosis (ACL, rotator cuff) for quick prescription
- Therapist alerts for low adherence and spikes in reported pain
- Secure messaging and check-ins between therapist and patient

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Exercise: id, name, bodyRegion, equipment, difficulty, videoUrl, instructions, createdAt, updatedAt
- Patient: id, therapistId, fullName, diagnosis, planOfCareStart, status, createdAt, updatedAt
- Program: id, patientId, therapistId, name, status, startDate, endDate, createdAt, updatedAt
- ProgramExercise: id, programId, exerciseId, sets, reps, holdSeconds, frequencyPerWeek, orderIndex, createdAt, updatedAt
- ExerciseLog: id, programExerciseId, patientId, completedAt, painLevel, notes, createdAt, updatedAt
- OutcomeMeasure: id, patientId, type, joint, value, recordedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Assemble and order a program from library exercises with per-exercise sets, reps, hold time, and frequency
- Compute adherence as completed versus prescribed exercise instances over each week of care
- Record per-exercise completion logs with a pain rating from the patient home view
- Capture pain and range-of-motion outcome measures and chart their trends over the course of care
- Instantiate a program from a diagnosis template, copying its exercises and dosages
- Raise therapist alerts when weekly adherence drops below a threshold or reported pain spikes
- Manage therapist-patient check-in messages tied to the active plan of care
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 clinic with 2 physical therapists, an exercise-video library of ~40 exercises across body regions, ~10 patients with diagnoses and active plans of care, prescribed programs with sets, reps, and frequency, ~80 exercise completion logs, pain and range-of-motion outcome entries, and demo logins for 1 admin, 2 therapists, and 3 patients. Provide a seed script and list the demo login credentials in the README.

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
