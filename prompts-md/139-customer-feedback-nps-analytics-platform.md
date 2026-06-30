# VoxLoop Customer Feedback & NPS Analytics Platform

> Let teams collect NPS, CSAT, and CES feedback, dashboard score trends and themes across segments, and close the loop on detractor feedback through a routed follow-up workflow

| Field | Value |
|---|---|
| **Prompt ID** | 139 |
| **Title** | Customer Feedback & NPS Analytics Platform |
| **Slug** | customer-feedback-nps-analytics-platform |
| **Category** | Analytics & Dashboards |
| **Domain** | Customer Experience Analytics |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | CX / product manager; Customer success lead |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building experience-analytics tools for product and CX teams, and businesses that want to run and analyze their own surveys instead of paying per-seat for an NPS SaaS.

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

1. Surveys list and survey builder with NPS, CSAT, and CES question types
2. Survey distribution & settings via shareable link, embed, and email
3. Public survey response page
4. Responses inbox with scores and comments
5. Score dashboards: NPS, CSAT, and CES trends with promoter/passive/detractor breakdown
6. Themes & tags analysis with comment tagging
7. Segment comparison view
8. Closed-loop follow-up board to route, assign, and resolve detractors
9. Auth (sign in / register)
10. Admin: surveys, segments, users, and routing rules

## Required features

- Survey builder supporting NPS, CSAT, and CES question types
- Multi-channel distribution via shareable link, embed, and email with respondent tracking
- Automatic score classification (promoter/passive/detractor for NPS, satisfaction tiers for CSAT/CES)
- Score-trend dashboards with period-over-period NPS, CSAT, and CES
- Theme tagging of open-text comments with tag-based breakdowns
- Segment comparison of scores across customer attributes
- Closed-loop follow-up workflow routing detractor responses to an owner through to resolution
- Response-level drill-down from any score to the underlying comment
- Survey response-rate and completion tracking

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Survey
**Fields:** `id`, `name`, `type`, `questions`, `status`, `ownerId`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Distribution
**Fields:** `id`, `surveyId`, `channel`, `audienceSegment`, `sentAt`, `createdAt`, `updatedAt`

**Relationships:**
- surveyId -> references the related record

### Response
**Fields:** `id`, `surveyId`, `distributionId`, `respondentRef`, `segment`, `score`, `scoreType`, `classification`, `comment`, `submittedAt`, `createdAt`, `updatedAt`

**Relationships:**
- surveyId -> references the related record
- distributionId -> references the related record

### Theme
**Fields:** `id`, `name`, `color`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### ResponseTheme
**Fields:** `id`, `responseId`, `themeId`, `createdAt`, `updatedAt`

**Relationships:**
- responseId -> references the related record
- themeId -> references the related record

### FollowUp
**Fields:** `id`, `responseId`, `ownerId`, `status`, `priority`, `notes`, `resolvedAt`, `createdAt`, `updatedAt`

**Relationships:**
- responseId -> references the related record
- ownerId -> references the related record

## Backend logic

- Build and version surveys with NPS, CSAT, and CES question types
- Distribute surveys across link, embed, and email channels and capture responses
- Classify each response (promoter/passive/detractor or satisfaction tier) and compute NPS, CSAT, and CES scores
- Aggregate score trends and breakdowns over time and across segments
- Tag open-text comments with themes and compute theme frequency
- Route detractor responses into closed-loop follow-ups and track them to resolution
- Compute response and completion rates per distribution
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
- [ ] NPS is computed as percent promoters minus percent detractors and matches the dashboard for a filtered segment
- [ ] A detractor response automatically creates a closed-loop follow-up that cannot be marked resolved without a resolution note
- [ ] Tagging a comment with a theme updates the theme breakdown counts

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds voice-of-customer and experience-analytics products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: VoxLoop Customer Feedback & NPS Analytics Platform
Type: Customer Feedback & NPS Analytics Platform (Customer Experience Analytics)
Target users: CX and product managers who build surveys and analyze scores and a customer success lead who closes the loop with detractors.
Business goal: Let teams collect NPS, CSAT, and CES feedback, dashboard score trends and themes across segments, and close the loop on detractor feedback through a routed follow-up workflow.

BRAND & DESIGN
Brand style: friendly, insightful, customer-centric. Colors: teal, warm amber, cloud white. A score dashboard with a promoter/detractor bar and a closed-loop follow-up board. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Surveys list and survey builder with NPS, CSAT, and CES question types
2. Survey distribution & settings via shareable link, embed, and email
3. Public survey response page
4. Responses inbox with scores and comments
5. Score dashboards: NPS, CSAT, and CES trends with promoter/passive/detractor breakdown
6. Themes & tags analysis with comment tagging
7. Segment comparison view
8. Closed-loop follow-up board to route, assign, and resolve detractors
9. Auth (sign in / register)
10. Admin: surveys, segments, users, and routing rules

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Admin — manage surveys, users, segments, and follow-up routing rules
- CX/Product Manager — build surveys and analyze scores, themes, and segments
- Success Agent — own and resolve closed-loop follow-ups with detractors

CORE FEATURES
- Survey builder supporting NPS, CSAT, and CES question types
- Multi-channel distribution via shareable link, embed, and email with respondent tracking
- Automatic score classification (promoter/passive/detractor for NPS, satisfaction tiers for CSAT/CES)
- Score-trend dashboards with period-over-period NPS, CSAT, and CES
- Theme tagging of open-text comments with tag-based breakdowns
- Segment comparison of scores across customer attributes
- Closed-loop follow-up workflow routing detractor responses to an owner through to resolution
- Response-level drill-down from any score to the underlying comment
- Survey response-rate and completion tracking

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Survey: id, name, type, questions, status, ownerId, createdAt, updatedAt
- Distribution: id, surveyId, channel, audienceSegment, sentAt, createdAt, updatedAt
- Response: id, surveyId, distributionId, respondentRef, segment, score, scoreType, classification, comment, submittedAt, createdAt, updatedAt
- Theme: id, name, color, createdAt, updatedAt
- ResponseTheme: id, responseId, themeId, createdAt, updatedAt
- FollowUp: id, responseId, ownerId, status, priority, notes, resolvedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Build and version surveys with NPS, CSAT, and CES question types
- Distribute surveys across link, embed, and email channels and capture responses
- Classify each response (promoter/passive/detractor or satisfaction tier) and compute NPS, CSAT, and CES scores
- Aggregate score trends and breakdowns over time and across segments
- Tag open-text comments with themes and compute theme frequency
- Route detractor responses into closed-loop follow-ups and track them to resolution
- Compute response and completion rates per distribution
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~4 surveys across NPS, CSAT, and CES, ~120 responses spanning promoters, passives, and detractors with comments, a theme tag set, segment attributes, open and resolved follow-ups, 1 admin, 1 CX manager, and 2 success agents. Provide a seed script and list the demo login credentials in the README.

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
