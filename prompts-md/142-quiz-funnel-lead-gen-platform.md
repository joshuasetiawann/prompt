# QuizLeap Quiz Funnel Lead Generation Platform

> Let marketers build branching quiz funnels that capture, score, and segment leads, then route respondents to tailored outcome pages and sync them to downstream CRM lists

| Field | Value |
|---|---|
| **Prompt ID** | 142 |
| **Title** | Quiz Funnel Lead Generation Platform |
| **Slug** | quiz-funnel-lead-gen-platform |
| **Category** | Marketing & Lead Gen |
| **Domain** | Interactive Quiz Funnels |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Demand-gen marketer; Coach/consultant |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building interactive lead-gen quiz tools (LeadQuizzes-style) for marketers, coaches, and agencies that convert cold traffic with personalized funnels.

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

1. Dashboard with quizzes, completion rate, and lead-capture summary
2. Quiz builder with questions, answer options, and branching logic
3. Scoring and segmentation rules editor
4. Outcome pages editor mapping score ranges to outcomes
5. Lead-capture step configuration (fields and placement in the funnel)
6. Lead inbox with scores, segments, and CSV export / CRM sync
7. Quiz analytics with per-question drop-off and conversion rate
8. Public quiz funnel (multi-step, branching, server-rendered)
9. Auth (sign in / register)
10. Admin: team, CRM integrations, and quiz templates

## Required features

- Branching quiz builder with multiple question types and conditional next-step logic
- Per-answer scoring and tag-based segmentation rules
- Lead-capture step with configurable fields placed anywhere in the funnel
- Score-range to outcome mapping with personalized outcome pages
- Public multi-step quiz funnel with progress indicator and back navigation
- Lead scoring and automatic segment assignment on completion
- Funnel analytics with per-question drop-off and completion/conversion rates
- Partial-response capture for abandoned funnels
- Lead export to CSV and mock sync to downstream CRM lists

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Quiz
**Fields:** `id`, `ownerId`, `title`, `slug`, `description`, `status`, `settings`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Question
**Fields:** `id`, `quizId`, `type`, `prompt`, `order`, `branchingRules`, `createdAt`, `updatedAt`

**Relationships:**
- quizId -> references the related record

### AnswerOption
**Fields:** `id`, `questionId`, `label`, `value`, `scoreWeight`, `segmentTag`, `nextQuestionId`, `createdAt`, `updatedAt`

**Relationships:**
- questionId -> references the related record
- nextQuestionId -> references the related record

### Outcome
**Fields:** `id`, `quizId`, `name`, `slug`, `headline`, `content`, `scoreMin`, `scoreMax`, `ctaUrl`, `createdAt`, `updatedAt`

**Relationships:**
- quizId -> references the related record

### Response
**Fields:** `id`, `quizId`, `leadId`, `sessionId`, `answers`, `score`, `completedAt`, `createdAt`, `updatedAt`

**Relationships:**
- quizId -> references the related record
- leadId -> references the related record
- sessionId -> references the related record

### Lead
**Fields:** `id`, `quizId`, `email`, `name`, `score`, `segment`, `outcomeId`, `syncedAt`, `capturedAt`, `createdAt`, `updatedAt`

**Relationships:**
- quizId -> references the related record
- outcomeId -> references the related record

## Backend logic

- Serve the quiz funnel step-by-step, resolving the next question from branching and answer rules
- Persist responses per session and support partial-response capture for abandoned funnels
- Compute a lead score from answer weights and assign a segment on completion
- Map a completed quiz's score to the matching outcome and route the respondent to its page
- Capture lead contact details at the configured step and attach them to the response
- Push captured leads to a mock downstream CRM list and support CSV export
- Aggregate per-question drop-off and overall completion and conversion rates
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
- [ ] Answering the public quiz follows branching rules so different answers lead to different next questions and outcomes
- [ ] A completed quiz produces a lead score and segment and routes the respondent to the outcome matching its score range
- [ ] Captured leads appear in the lead inbox with their score and segment and can be exported or synced to a CRM list

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds interactive quiz funnel and lead-generation products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: QuizLeap Quiz Funnel Lead Generation Platform
Type: Quiz Funnel Lead Generation Platform (Interactive Quiz Funnels)
Target users: demand-gen marketers who build branching quiz funnels to capture and score leads and coaches who route respondents to personalized outcome pages.
Business goal: Let marketers build branching quiz funnels that capture, score, and segment leads, then route respondents to tailored outcome pages and sync them to downstream CRM lists.

BRAND & DESIGN
Brand style: playful, conversational, vibrant. Colors: sunshine yellow, deep teal, warm white. A step-by-step quiz canvas with a branching-logic map, a scoring rules panel, and an outcome preview. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with quizzes, completion rate, and lead-capture summary
2. Quiz builder with questions, answer options, and branching logic
3. Scoring and segmentation rules editor
4. Outcome pages editor mapping score ranges to outcomes
5. Lead-capture step configuration (fields and placement in the funnel)
6. Lead inbox with scores, segments, and CSV export / CRM sync
7. Quiz analytics with per-question drop-off and conversion rate
8. Public quiz funnel (multi-step, branching, server-rendered)
9. Auth (sign in / register)
10. Admin: team, CRM integrations, and quiz templates

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Demand-gen Marketer — build quiz funnels, scoring, and outcomes and review captured leads
- Coach/Consultant — create personalized quizzes and route respondents to tailored outcomes
- Analyst — review funnel drop-off and conversion analytics
- Admin — manage team, CRM integrations, and quiz templates

CORE FEATURES
- Branching quiz builder with multiple question types and conditional next-step logic
- Per-answer scoring and tag-based segmentation rules
- Lead-capture step with configurable fields placed anywhere in the funnel
- Score-range to outcome mapping with personalized outcome pages
- Public multi-step quiz funnel with progress indicator and back navigation
- Lead scoring and automatic segment assignment on completion
- Funnel analytics with per-question drop-off and completion/conversion rates
- Partial-response capture for abandoned funnels
- Lead export to CSV and mock sync to downstream CRM lists

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Quiz: id, ownerId, title, slug, description, status, settings, createdAt, updatedAt
- Question: id, quizId, type, prompt, order, branchingRules, createdAt, updatedAt
- AnswerOption: id, questionId, label, value, scoreWeight, segmentTag, nextQuestionId, createdAt, updatedAt
- Outcome: id, quizId, name, slug, headline, content, scoreMin, scoreMax, ctaUrl, createdAt, updatedAt
- Response: id, quizId, leadId, sessionId, answers, score, completedAt, createdAt, updatedAt
- Lead: id, quizId, email, name, score, segment, outcomeId, syncedAt, capturedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Serve the quiz funnel step-by-step, resolving the next question from branching and answer rules
- Persist responses per session and support partial-response capture for abandoned funnels
- Compute a lead score from answer weights and assign a segment on completion
- Map a completed quiz's score to the matching outcome and route the respondent to its page
- Capture lead contact details at the configured step and attach them to the response
- Push captured leads to a mock downstream CRM list and support CSV export
- Aggregate per-question drop-off and overall completion and conversion rates
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~4 quiz funnels with branching questions, scoring and segment rules, outcome pages by score range, ~120 simulated responses and captured leads across segments, a mock CRM list, 1 admin and 2 marketers. Provide a seed script and list the demo login credentials in the README.

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
