# PulseDesk Contact Center Performance Analytics Dashboard

> Let support managers monitor live queue volume, handle time, first-contact resolution, SLA compliance, and per-agent CSAT, and run a coaching workflow that flags agents and logs performance reviews

| Field | Value |
|---|---|
| **Prompt ID** | 131 |
| **Title** | Contact Center Performance Analytics Dashboard |
| **Slug** | contact-center-performance-dashboard |
| **Category** | Analytics & Dashboards |
| **Domain** | Contact Center Analytics |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Contact center manager / team lead; WFM analyst |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building workforce and performance analytics for support and call-center operations, and contact-center managers who need live SLA and agent metrics in one place.

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

1. Live queue dashboard with real-time volume, longest wait, and SLA tiles
2. Team scorecard grid with handle time, FCR, CSAT, and SLA per team
3. Agent detail with personal metrics and trend charts
4. Shift scorecard with side-by-side shift comparison
5. SLA compliance report with breach drill-down
6. CSAT and survey results explorer
7. Coaching queue with flagged agents
8. Performance review log and review detail
9. Auth (sign in / register)
10. Admin: teams, agents, queues, SLA targets, and CSAT survey config
11. Notifications / alerts center listing SLA-breach and coaching alerts with severity, source link (team, agent, or flag), timestamp, and read/unread filtering.

## Required features

- Live queue view with auto-refresh showing volume, longest wait, and available agents
- KPI computation for average handle time, first-contact resolution, and SLA compliance
- Per-agent and per-team scorecards with targets and color-coded status
- Shift-based aggregation with side-by-side shift comparison
- CSAT capture and rollup from post-contact surveys into agent and team averages
- Automatic flagging of agents who breach metric thresholds into a coaching queue
- Coaching workflow that logs performance reviews with action items and follow-up dates
- SLA breach drill-down to the underlying contacts that missed the threshold
- Report export to CSV for scorecards and SLA reports
- Real-time alerting that pushes SLA-breach and agent-flag events to an in-app notification feed and the mock email/SMS log so the responsible manager or team lead is notified instead of having to watch the board, with read/unread state and an unread badge.
- CSAT verbatim explorer that surfaces the free-text survey comment alongside each score, filterable by score band and queue, so the survey results page shows the 'why' behind the number, not only rollup averages.

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `teamId`, `createdAt`, `updatedAt`

**Relationships:**
- teamId -> references the related record

### Team
**Fields:** `id`, `name`, `managerId`, `slaTargetSeconds`, `csatTarget`, `createdAt`, `updatedAt`

**Relationships:**
- managerId -> references the related record

### Queue
**Fields:** `id`, `name`, `channel`, `slaThresholdSeconds`, `active`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Contact
**Fields:** `id`, `queueId`, `agentId`, `channel`, `waitSeconds`, `handleSeconds`, `resolved`, `firstContactResolution`, `csatScore`, `occurredAt`, `csatComment`, `csatRespondedAt`, `createdAt`, `updatedAt`

**Relationships:**
- queueId -> references the related record
- agentId -> references the related record

### Shift
**Fields:** `id`, `agentId`, `teamId`, `startsAt`, `endsAt`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- agentId -> references the related record
- teamId -> references the related record

### CoachingFlag
**Fields:** `id`, `agentId`, `metric`, `threshold`, `actualValue`, `status`, `raisedAt`, `notifiedAt`, `createdAt`, `updatedAt`

**Relationships:**
- agentId -> references the related record

### PerformanceReview
**Fields:** `id`, `flagId`, `agentId`, `reviewerId`, `summary`, `actionItems`, `followUpDate`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- flagId -> references the related record
- agentId -> references the related record
- reviewerId -> references the related record

### Notification
**Fields:** `id`, `type`, `severity`, `channel`, `title`, `body`, `recipientId`, `teamId`, `agentId`, `flagId`, `read`, `readAt`, `sentAt`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- recipientId -> references the related record
- teamId -> references the related record
- agentId -> references the related record
- flagId -> references the related record

## Backend logic

- Compute live queue metrics (volume, longest wait, available agents) from open contacts with periodic refresh
- Aggregate average handle time, first-contact resolution rate, and SLA compliance per agent, team, and shift
- Roll up CSAT scores from post-contact surveys into agent and team averages
- Evaluate metrics against team targets and auto-raise coaching flags when an agent breaches a threshold
- Drive the coaching workflow by opening a review from a flag, recording action items, and tracking follow-up to closure
- Drill down an SLA breach to the underlying contacts that missed the threshold
- Export scorecard and SLA reports as CSV
- Evaluate SLA and metric breaches against team and queue targets and generate alert notifications for the responsible manager and team lead, writing to the in-app feed and the mock email/SMS log, and deduplicating repeat breaches for the same agent or team within a configurable window.
- Aggregate CSAT verbatim comments by score band, agent, and queue to power the survey explorer alongside the existing numeric rollups.
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
- [ ] Average handle time, first-contact resolution, and SLA compliance recompute correctly when filtered by team, agent, or shift
- [ ] An agent who breaches a metric threshold is automatically flagged into the coaching queue and can be routed into a logged performance review
- [ ] The live queue view refreshes and reflects current volume, longest wait, and available agents
- [ ] When a team's SLA compliance or an agent's handle time, FCR, or CSAT crosses its configured target, a notification record is created for the responsible manager/team lead and appears in the notification center and the mock email/SMS log within one refresh cycle.
- [ ] Opening the CSAT explorer for a contact with a submitted survey shows its verbatim comment and score, and filtering by score band returns only matching survey responses.

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds contact-center performance and workforce analytics products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: PulseDesk Contact Center Performance Analytics Dashboard
Type: Contact Center Performance Analytics Dashboard (Contact Center Analytics)
Target users: contact-center managers who track live queue and SLA metrics across teams and WFM analysts who review shift and agent scorecards and run coaching workflows.
Business goal: Let support managers monitor live queue volume, handle time, first-contact resolution, SLA compliance, and per-agent CSAT, and run a coaching workflow that flags agents and logs performance reviews.

BRAND & DESIGN
Brand style: operational, data-dense, calm. Colors: midnight navy #08182b, teal #16b5ae and signal green #1fae5a, with amber #e0922b and rose #e1556b for on-target/watch/breaching status on white #ffffff surfaces. Signature layout: a dark live-queue board of monospaced KPI tiles above a color-coded team scorecard grid and an agent coaching panel; pair Space Grotesk headings with Inter body and IBM Plex Mono tabular numerals for metrics. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Live queue dashboard with real-time volume, longest wait, and SLA tiles
2. Team scorecard grid with handle time, FCR, CSAT, and SLA per team
3. Agent detail with personal metrics and trend charts
4. Shift scorecard with side-by-side shift comparison
5. SLA compliance report with breach drill-down
6. CSAT and survey results explorer
7. Coaching queue with flagged agents
8. Performance review log and review detail
9. Auth (sign in / register)
10. Admin: teams, agents, queues, SLA targets, and CSAT survey config
11. Notifications / alerts center listing SLA-breach and coaching alerts with severity, source link (team, agent, or flag), timestamp, and read/unread filtering.

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Contact Center Manager — monitor live queues, review scorecards, and run coaching
- Team Lead — track team SLA and agent metrics and log coaching notes
- WFM Analyst — build reports and analyze shift and queue trends
- Agent — view personal metrics and coaching feedback

CORE FEATURES
- Live queue view with auto-refresh showing volume, longest wait, and available agents
- KPI computation for average handle time, first-contact resolution, and SLA compliance
- Per-agent and per-team scorecards with targets and color-coded status
- Shift-based aggregation with side-by-side shift comparison
- CSAT capture and rollup from post-contact surveys into agent and team averages
- Automatic flagging of agents who breach metric thresholds into a coaching queue
- Coaching workflow that logs performance reviews with action items and follow-up dates
- SLA breach drill-down to the underlying contacts that missed the threshold
- Report export to CSV for scorecards and SLA reports
- Real-time alerting that pushes SLA-breach and agent-flag events to an in-app notification feed and the mock email/SMS log so the responsible manager or team lead is notified instead of having to watch the board, with read/unread state and an unread badge.
- CSAT verbatim explorer that surfaces the free-text survey comment alongside each score, filterable by score band and queue, so the survey results page shows the 'why' behind the number, not only rollup averages.

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, teamId, createdAt, updatedAt
- Team: id, name, managerId, slaTargetSeconds, csatTarget, createdAt, updatedAt
- Queue: id, name, channel, slaThresholdSeconds, active, createdAt, updatedAt
- Contact: id, queueId, agentId, channel, waitSeconds, handleSeconds, resolved, firstContactResolution, csatScore, occurredAt, csatComment, csatRespondedAt, createdAt, updatedAt
- Shift: id, agentId, teamId, startsAt, endsAt, status, createdAt, updatedAt
- CoachingFlag: id, agentId, metric, threshold, actualValue, status, raisedAt, notifiedAt, createdAt, updatedAt
- PerformanceReview: id, flagId, agentId, reviewerId, summary, actionItems, followUpDate, status, createdAt, updatedAt
- Notification: id, type, severity, channel, title, body, recipientId, teamId, agentId, flagId, read, readAt, sentAt, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Compute live queue metrics (volume, longest wait, available agents) from open contacts with periodic refresh
- Aggregate average handle time, first-contact resolution rate, and SLA compliance per agent, team, and shift
- Roll up CSAT scores from post-contact surveys into agent and team averages
- Evaluate metrics against team targets and auto-raise coaching flags when an agent breaches a threshold
- Drive the coaching workflow by opening a review from a flag, recording action items, and tracking follow-up to closure
- Drill down an SLA breach to the underlying contacts that missed the threshold
- Export scorecard and SLA reports as CSV
- Evaluate SLA and metric breaches against team and queue targets and generate alert notifications for the responsible manager and team lead, writing to the in-app feed and the mock email/SMS log, and deduplicating repeat breaches for the same agent or team within a configurable window.
- Aggregate CSAT verbatim comments by score band, agent, and queue to power the survey explorer alongside the existing numeric rollups.
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 4 teams, ~12 agents, 3 queues across voice and chat, ~500 sample contacts with handle times and CSAT scores, recent shifts, several coaching flags and performance reviews, 1 admin, 2 managers, and 1 WFM analyst. Provide a seed script and list the demo login credentials in the README.

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
