# ResuMint AI Resume Builder App

> Help users build a polished resume with AI-suggested phrasing and export it

| Field | Value |
|---|---|
| **Prompt ID** | 33 |
| **Title** | AI Resume Builder App |
| **Slug** | ai-resume-builder-app |
| **Category** | AI Apps |
| **Domain** | AI Tools |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | User; Admin |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building resume or document builders for job seekers and career sites.

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
- Use mock AI mode when no AI provider key is set

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
2. Dashboard: my resumes
3. Resume editor (sections: profile, experience, education, skills) with live preview
4. AI suggestions panel (improve bullet, summarize)
5. Template picker
6. Cover letters (linked to a resume)
7. Job application tracker
8. Export (PDF concept) and preview
9. Settings
10. Usage view

## Required features

- Guided resume sections with validation
- AI bullet/summary suggestions (mock) the user can accept
- Live preview with switchable templates
- Multiple saved resumes per user
- Export/printable view (PDF concept)
- Template gallery with featured and categorized layouts
- Cover letter companion generated from a resume (mock AI)
- Job application tracker linking resumes to roles with status
- Export history per resume
- Usage/limit concept for AI suggestions
- Admin usage overview

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Resume
**Fields:** `id`, `userId`, `title`, `templateId`, `sections`, `updatedAt`, `createdAt`

**Relationships:**
- userId -> references the related record
- templateId -> references the related record

### Suggestion
**Fields:** `id`, `resumeId`, `sectionRef`, `input`, `output`, `accepted`, `createdAt`, `updatedAt`

**Relationships:**
- resumeId -> references the related record

### UsageCredit
**Fields:** `id`, `userId`, `period`, `used`, `limit`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### ResumeTemplate
**Fields:** `id`, `name`, `description`, `category`, `layout`, `colorScheme`, `isFeatured`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone catalog model — resumes pick a layout via Resume.templateId

### CoverLetter
**Fields:** `id`, `userId`, `resumeId`, `title`, `content`, `tone`, `isArchived`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record
- resumeId -> references the related record

### JobApplication
**Fields:** `id`, `userId`, `resumeId`, `company`, `jobTitle`, `status`, `appliedDate`, `notes`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record
- resumeId -> references the related record

### ResumeExport
**Fields:** `id`, `resumeId`, `userId`, `fileType`, `status`, `fileName`, `createdAt`, `updatedAt`

**Relationships:**
- resumeId -> references the related record
- userId -> references the related record

## Backend logic

- Mock AI suggestions for bullets and summaries
- Resume CRUD with structured sections
- Template switching affecting preview only
- Template gallery CRUD (featured/categorized layouts)
- Cover letter CRUD linked to a resume with mock AI drafting
- Job application tracking with status updates linked to resumes
- Export history logging per resume
- Credit deduction for AI suggestions
- Admin usage aggregation
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
- [ ] AI suggestions return improved phrasing and can be accepted into the resume (mock)
- [ ] Switching templates re-renders the same data cleanly
- [ ] Multiple resumes save and reopen correctly

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds AI-assisted resume and document builders, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: ResuMint AI Resume Builder App
Type: AI Resume Builder App (AI Tools)
Target users: job seekers building resumes and admins overseeing usage.
Business goal: Help users build a polished resume with AI-suggested phrasing and export it.

BRAND & DESIGN
Brand style: professional, confident, career-focused. Colors: navy, teal accent, white. Clean, modern, split editor and live preview with template switching. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Auth
2. Dashboard: my resumes
3. Resume editor (sections: profile, experience, education, skills) with live preview
4. AI suggestions panel (improve bullet, summarize)
5. Template picker
6. Cover letters (linked to a resume)
7. Job application tracker
8. Export (PDF concept) and preview
9. Settings
10. Usage view

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- User — build and manage resumes
- Admin — oversee usage and users

CORE FEATURES
- Guided resume sections with validation
- AI bullet/summary suggestions (mock) the user can accept
- Live preview with switchable templates
- Multiple saved resumes per user
- Export/printable view (PDF concept)
- Template gallery with featured and categorized layouts
- Cover letter companion generated from a resume (mock AI)
- Job application tracker linking resumes to roles with status
- Export history per resume
- Usage/limit concept for AI suggestions
- Admin usage overview

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Resume: id, userId, title, templateId, sections, updatedAt, createdAt
- Suggestion: id, resumeId, sectionRef, input, output, accepted, createdAt, updatedAt
- UsageCredit: id, userId, period, used, limit, createdAt, updatedAt
- ResumeTemplate: id, name, description, category, layout, colorScheme, isFeatured, createdAt, updatedAt
- CoverLetter: id, userId, resumeId, title, content, tone, isArchived, createdAt, updatedAt
- JobApplication: id, userId, resumeId, company, jobTitle, status, appliedDate, notes, createdAt, updatedAt
- ResumeExport: id, resumeId, userId, fileType, status, fileName, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Mock AI suggestions for bullets and summaries
- Resume CRUD with structured sections
- Template switching affecting preview only
- Template gallery CRUD (featured/categorized layouts)
- Cover letter CRUD linked to a resume with mock AI drafting
- Job application tracking with status updates linked to resumes
- Export history logging per resume
- Credit deduction for AI suggestions
- Admin usage aggregation
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- AI: implement a deterministic, offline mock AI provider behind one interface; switch to a real model (OpenAI/Anthropic) via an env var, defaulting to mock so it runs with no keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: sample resumes, templates, AI suggestion examples, 1 admin and 2 users. Provide a seed script and list the demo login credentials in the README.

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
