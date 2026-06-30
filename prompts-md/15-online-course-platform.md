# LearnLoop Online Course Platform

> Let creators build courses and students enroll, progress through lessons, and complete quizzes

| Field | Value |
|---|---|
| **Prompt ID** | 15 |
| **Title** | Online Course Platform |
| **Slug** | online-course-platform |
| **Category** | Education & Learning |
| **Domain** | Education & E-learning |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Student; Instructor; Admin |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building course platforms for educators, coaches, and training businesses.

**Production standard:** Production-grade scaffold with local development support, deployment readiness, security guidance, test guidance, and real-service integration readiness

## Tech stack

- **Frontend:** Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Next.js Server Actions or API Routes, Prisma ORM, PostgreSQL for production, SQLite for local development
- **Auth:** Auth.js or secure email/password authentication
- **Validation:** Zod, React Hook Form
- **Deployment:** Vercel-ready, Docker-ready

**Local mode** (enabled)
- App must run locally without paid API keys
- Use mock payment mode when payment is needed
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

1. Home with featured courses
2. Course catalog with filters
3. Course detail (curriculum, instructor, enroll)
4. Checkout (mock payment) or free enrollment
5. Lesson player (video player area, content, mark complete)
6. Quiz screen
7. Student dashboard: enrolled courses and progress
8. Auth
9. Instructor dashboard: courses, modules, lessons
10. Admin: users and course oversight

## Required features

- Courses with modules and lessons
- Enrollment (free or mock paid)
- Lesson completion and percentage progress
- Quizzes with scoring
- Certificate-on-completion concept
- Instructor course builder (CRUD)
- Admin oversight and reports
- Reviews/ratings per course

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Course
**Fields:** `id`, `instructorId`, `title`, `description`, `price`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- instructorId -> references the related record

### Module
**Fields:** `id`, `courseId`, `title`, `sortOrder`, `createdAt`, `updatedAt`

**Relationships:**
- courseId -> references the related record

### Lesson
**Fields:** `id`, `moduleId`, `title`, `contentType`, `content`, `sortOrder`, `createdAt`, `updatedAt`

**Relationships:**
- moduleId -> references the related record

### Enrollment
**Fields:** `id`, `courseId`, `studentId`, `progress`, `createdAt`, `updatedAt`

**Relationships:**
- courseId -> references the related record
- studentId -> references the related record

### LessonProgress
**Fields:** `id`, `enrollmentId`, `lessonId`, `completed`, `createdAt`, `updatedAt`

**Relationships:**
- enrollmentId -> references the related record
- lessonId -> references the related record

### Quiz
**Fields:** `id`, `lessonId`, `questions`, `createdAt`, `updatedAt`

**Relationships:**
- lessonId -> references the related record

### QuizAttempt
**Fields:** `id`, `quizId`, `studentId`, `score`, `createdAt`, `updatedAt`

**Relationships:**
- quizId -> references the related record
- studentId -> references the related record

### Payment
**Fields:** `id`, `enrollmentId`, `amount`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- enrollmentId -> references the related record

## Backend logic

- Enrollment (free/mock paid) and access control to lessons
- Progress tracking per lesson and overall percentage
- Quiz scoring and attempt storage
- Instructor course/module/lesson CRUD
- Admin oversight and reporting
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
- [ ] Only enrolled students can open a course's lessons
- [ ] Marking lessons complete updates overall progress
- [ ] Quiz submissions produce a stored score

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds learning management systems, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: LearnLoop Online Course Platform
Type: Online Course Platform (Education & E-learning)
Target users: course creators publishing courses and students learning and tracking progress.
Business goal: Let creators build courses and students enroll, progress through lessons, and complete quizzes.

BRAND & DESIGN
Brand style: focused, encouraging, modern education. Colors: indigo, white, soft green accent. Clean, modern, clean course pages, a distraction-free lesson view, and clear progress indicators. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with featured courses
2. Course catalog with filters
3. Course detail (curriculum, instructor, enroll)
4. Checkout (mock payment) or free enrollment
5. Lesson player (video player area, content, mark complete)
6. Quiz screen
7. Student dashboard: enrolled courses and progress
8. Auth
9. Instructor dashboard: courses, modules, lessons
10. Admin: users and course oversight

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Student — enroll, learn, take quizzes
- Instructor — create and manage courses
- Admin — oversee users and courses

CORE FEATURES
- Courses with modules and lessons
- Enrollment (free or mock paid)
- Lesson completion and percentage progress
- Quizzes with scoring
- Certificate-on-completion concept
- Instructor course builder (CRUD)
- Admin oversight and reports
- Reviews/ratings per course

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Course: id, instructorId, title, description, price, status, createdAt, updatedAt
- Module: id, courseId, title, sortOrder, createdAt, updatedAt
- Lesson: id, moduleId, title, contentType, content, sortOrder, createdAt, updatedAt
- Enrollment: id, courseId, studentId, progress, createdAt, updatedAt
- LessonProgress: id, enrollmentId, lessonId, completed, createdAt, updatedAt
- Quiz: id, lessonId, questions, createdAt, updatedAt
- QuizAttempt: id, quizId, studentId, score, createdAt, updatedAt
- Payment: id, enrollmentId, amount, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Enrollment (free/mock paid) and access control to lessons
- Progress tracking per lesson and overall percentage
- Quiz scoring and attempt storage
- Instructor course/module/lesson CRUD
- Admin oversight and reporting
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 3 courses with modules, lessons, and quizzes, enrolled students with progress, 1 admin, 1 instructor, 2 students. Provide a seed script and list the demo login credentials in the README.

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
