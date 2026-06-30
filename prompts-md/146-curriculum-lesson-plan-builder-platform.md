# PlanForge Curriculum & Lesson Plan Builder

> Let teachers assemble standards-aligned units and lesson plans from a reusable objective and resource library, map coverage across a term, and route plans through department-head review and approval

| Field | Value |
|---|---|
| **Prompt ID** | 146 |
| **Title** | Curriculum & Lesson Plan Builder |
| **Slug** | curriculum-lesson-plan-builder-platform |
| **Category** | Education & Learning |
| **Domain** | Curriculum Planning |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Teachers and curriculum coordinators; Department heads and reviewers |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building planning tools for schools and teaching departments that want consistent, standards-mapped lesson plans instead of scattered documents.

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

1. Dashboard with my plans, pending reviews, and coverage gaps
2. Standards library browser by subject and grade level
3. Objective & resource library with reusable, taggable items
4. Unit builder with sequenced lessons and standards mapping
5. Lesson plan editor with objectives, activities, materials, and assessment
6. Term coverage map (standards vs. units matrix)
7. Review queue and approval workflow
8. My plans with version history and status
9. Auth (sign in / register)
10. Admin: subjects, terms, standard sets, and users

## Required features

- Reusable library of learning objectives and teaching resources
- Standards alignment by tagging objectives and lessons to standard codes
- Unit builder that sequences lessons and rolls up covered standards
- Lesson plan editor with objectives, activities, materials, and assessments
- Term coverage map showing standard coverage and gaps across units
- Department-head review workflow with request-changes and approval
- Plan version history across draft, submitted, approved, and published states
- Clone-and-reuse of existing units and lessons into a new term
- Printable export of approved lesson plans (mock PDF)

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `department`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Standard
**Fields:** `id`, `code`, `framework`, `subject`, `gradeLevel`, `description`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Objective
**Fields:** `id`, `ownerId`, `title`, `description`, `subject`, `standardIds`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Resource
**Fields:** `id`, `ownerId`, `title`, `type`, `url`, `subject`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Unit
**Fields:** `id`, `ownerId`, `term`, `subject`, `gradeLevel`, `title`, `sequence`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### LessonPlan
**Fields:** `id`, `unitId`, `authorId`, `title`, `objectiveIds`, `resourceIds`, `activities`, `assessment`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- unitId -> references the related record
- authorId -> references the related record

### Review
**Fields:** `id`, `lessonPlanId`, `reviewerId`, `decision`, `comments`, `reviewedAt`, `createdAt`, `updatedAt`

**Relationships:**
- lessonPlanId -> references the related record
- reviewerId -> references the related record

## Backend logic

- Map objectives and lessons to standards and aggregate covered standards per unit
- Compute term coverage and gaps by comparing required standards against unit coverage
- Assemble a lesson plan from selected objectives and resources in the library
- Route a submitted plan to the department head and advance its review state
- Apply review decisions (approve or request changes) and record reviewer comments
- Clone an existing unit or lesson into a new term with remapped references
- Generate a printable export of an approved lesson plan (mock PDF)
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
- [ ] Tagging a lesson to standards updates the unit's covered-standards rollup and the term coverage map
- [ ] A submitted plan appears in the department head's review queue and an approval changes its status
- [ ] The coverage map highlights standards with no covering unit as gaps

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds curriculum planning products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: PlanForge Curriculum & Lesson Plan Builder
Type: Curriculum & Lesson Plan Builder (Curriculum Planning)
Target users: teachers and curriculum coordinators who build standards-aligned units and lesson plans and department heads who review and approve them.
Business goal: Let teachers assemble standards-aligned units and lesson plans from a reusable objective and resource library, map coverage across a term, and route plans through department-head review and approval.

BRAND & DESIGN
Brand style: scholarly, organized, calm. Colors: deep indigo, chalk white, sage. A unit board with standards-tagged lesson cards and a term coverage matrix. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with my plans, pending reviews, and coverage gaps
2. Standards library browser by subject and grade level
3. Objective & resource library with reusable, taggable items
4. Unit builder with sequenced lessons and standards mapping
5. Lesson plan editor with objectives, activities, materials, and assessment
6. Term coverage map (standards vs. units matrix)
7. Review queue and approval workflow
8. My plans with version history and status
9. Auth (sign in / register)
10. Admin: subjects, terms, standard sets, and users

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Teacher — build units and lesson plans from the objective and resource library and submit them for review
- Curriculum Coordinator — manage standards, objectives, resources, and term coverage maps
- Department Head — review submitted plans, request changes, and approve them
- Admin — manage users, subjects, terms, and standard sets

CORE FEATURES
- Reusable library of learning objectives and teaching resources
- Standards alignment by tagging objectives and lessons to standard codes
- Unit builder that sequences lessons and rolls up covered standards
- Lesson plan editor with objectives, activities, materials, and assessments
- Term coverage map showing standard coverage and gaps across units
- Department-head review workflow with request-changes and approval
- Plan version history across draft, submitted, approved, and published states
- Clone-and-reuse of existing units and lessons into a new term
- Printable export of approved lesson plans (mock PDF)

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, department, createdAt, updatedAt
- Standard: id, code, framework, subject, gradeLevel, description, createdAt, updatedAt
- Objective: id, ownerId, title, description, subject, standardIds, createdAt, updatedAt
- Resource: id, ownerId, title, type, url, subject, createdAt, updatedAt
- Unit: id, ownerId, term, subject, gradeLevel, title, sequence, status, createdAt, updatedAt
- LessonPlan: id, unitId, authorId, title, objectiveIds, resourceIds, activities, assessment, status, createdAt, updatedAt
- Review: id, lessonPlanId, reviewerId, decision, comments, reviewedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Map objectives and lessons to standards and aggregate covered standards per unit
- Compute term coverage and gaps by comparing required standards against unit coverage
- Assemble a lesson plan from selected objectives and resources in the library
- Route a submitted plan to the department head and advance its review state
- Apply review decisions (approve or request changes) and record reviewer comments
- Clone an existing unit or lesson into a new term with remapped references
- Generate a printable export of an approved lesson plan (mock PDF)
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 2 subjects across 2 grade levels, ~40 standards, a reusable library of objectives and resources, 5 units with sequenced lesson plans in draft, submitted, and approved states, 1 admin, 1 department head, and 3 teachers. Provide a seed script and list the demo login credentials in the README.

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
