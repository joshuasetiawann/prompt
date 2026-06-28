# FitTrack Fitness Tracker App

> Let users build routines, log workouts, and see progress charts and goals

| Field | Value |
|---|---|
| **Prompt ID** | 43 |
| **Title** | Fitness Tracker App |
| **Slug** | fitness-tracker-app |
| **Category** | Productivity & Personal |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | User; Admin |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building workout trackers for individuals or coaching clients.

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

1. Auth
2. Dashboard (this week, streak, recent workouts)
3. Workouts log and workout detail
4. Exercise library
5. Routines (build and start)
6. Progress charts (volume, PRs)
7. Goals
8. Settings

## Required features

- Exercise library with categories
- Routines as ordered exercises with target sets/reps
- Workout logging (sets, reps, weight) per session
- Progress charts: volume over time and personal records
- Goals with progress
- Streaks and weekly summary
- Personal data scoped per user

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Exercise
**Fields:** `id`, `name`, `muscleGroup`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Routine
**Fields:** `id`, `userId`, `name`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### RoutineItem
**Fields:** `id`, `routineId`, `exerciseId`, `targetSets`, `targetReps`, `createdAt`, `updatedAt`

**Relationships:**
- routineId -> references the related record
- exerciseId -> references the related record

### Workout
**Fields:** `id`, `userId`, `date`, `routineId`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record
- routineId -> references the related record

### SetLog
**Fields:** `id`, `workoutId`, `exerciseId`, `setNumber`, `reps`, `weight`, `createdAt`, `updatedAt`

**Relationships:**
- workoutId -> references the related record
- exerciseId -> references the related record

### Goal
**Fields:** `id`, `userId`, `metric`, `target`, `progress`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

## Backend logic

- Workout logging with set-by-set entries
- Progress aggregation (volume, PRs) per exercise
- Routine building and starting a workout from a routine
- Goal progress calculation
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
- [ ] Logging sets updates progress charts and PRs
- [ ] Starting a routine pre-fills the workout's exercises
- [ ] All data is scoped to the logged-in user

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds fitness and workout-tracking apps, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: FitTrack Fitness Tracker App
Type: Fitness Tracker App (Productivity & Personal)
Target users: people tracking their training and progress over time.
Business goal: Let users build routines, log workouts, and see progress charts and goals.

BRAND & DESIGN
Brand style: energetic, clean, motivating. Colors: lime, slate, white. Clean, modern, quick logging flow and clear progress charts. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Auth
2. Dashboard (this week, streak, recent workouts)
3. Workouts log and workout detail
4. Exercise library
5. Routines (build and start)
6. Progress charts (volume, PRs)
7. Goals
8. Settings

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- User — log workouts, build routines, track progress
- Admin — manage the exercise library (optional)

CORE FEATURES
- Exercise library with categories
- Routines as ordered exercises with target sets/reps
- Workout logging (sets, reps, weight) per session
- Progress charts: volume over time and personal records
- Goals with progress
- Streaks and weekly summary
- Personal data scoped per user

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Exercise: id, name, muscleGroup, createdAt, updatedAt
- Routine: id, userId, name, createdAt, updatedAt
- RoutineItem: id, routineId, exerciseId, targetSets, targetReps, createdAt, updatedAt
- Workout: id, userId, date, routineId, createdAt, updatedAt
- SetLog: id, workoutId, exerciseId, setNumber, reps, weight, createdAt, updatedAt
- Goal: id, userId, metric, target, progress, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Workout logging with set-by-set entries
- Progress aggregation (volume, PRs) per exercise
- Routine building and starting a workout from a routine
- Goal progress calculation
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: exercise library, 2 routines, several logged workouts over weeks, goals, 1 user (and 1 admin). Provide a seed script and list the demo login credentials in the README.

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
