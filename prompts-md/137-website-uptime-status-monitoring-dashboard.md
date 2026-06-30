# PulseWatch Website Uptime & Incident Status Dashboard

> Let teams register HTTP and ping checks, monitor uptime and latency, get alerted on failures, manage incidents through to resolution, and publish a branded public status page

| Field | Value |
|---|---|
| **Prompt ID** | 137 |
| **Title** | Website Uptime & Incident Status Dashboard |
| **Slug** | website-uptime-status-monitoring-dashboard |
| **Category** | Analytics & Dashboards |
| **Domain** | Uptime Monitoring & Status |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | SRE / DevOps engineer; Support and ops manager |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building monitoring and status-page tools for SaaS and agencies, and ops teams that want a self-hosted uptime dashboard with a customer-facing status page.

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

1. Monitors dashboard with uptime percentage and latency sparklines
2. Monitor detail with latency trend, check history, and uptime over time
3. Add/edit check (HTTP/ping) with interval, expected status, and alert rules
4. Incident timeline board across investigating, identified, monitoring, and resolved
5. Incident detail with timestamped updates and a postmortem editor
6. Alerts & notification settings with channels and escalation thresholds
7. Public status page (branded) with component statuses and incident history
8. Status page customization with branding, components, and subscribers
9. Auth (sign in / register)
10. Admin: monitors, team, and notification channels

## Required features

- HTTP and ping check registration with interval, expected status code, and timeout
- Scheduled check execution recording response time, status code, and up/down result
- Uptime percentage and latency trend computation over selectable time windows
- Failure detection with consecutive-failure thresholds and multi-channel alerts
- Incident workflow from investigating to resolved with timestamped status updates
- Postmortem authoring linked to a resolved incident
- Branded public status page with component statuses and incident history
- Status-page subscribers notified when incidents are posted or resolved
- Maintenance windows that suppress alerts during planned work

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Monitor
**Fields:** `id`, `name`, `url`, `type`, `intervalSeconds`, `expectedStatus`, `timeoutMs`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Check
**Fields:** `id`, `monitorId`, `statusCode`, `responseTimeMs`, `result`, `checkedAt`, `createdAt`, `updatedAt`

**Relationships:**
- monitorId -> references the related record

### Incident
**Fields:** `id`, `monitorId`, `title`, `status`, `severity`, `postmortem`, `startedAt`, `resolvedAt`, `createdAt`, `updatedAt`

**Relationships:**
- monitorId -> references the related record

### IncidentUpdate
**Fields:** `id`, `incidentId`, `authorId`, `status`, `message`, `postedAt`, `createdAt`, `updatedAt`

**Relationships:**
- incidentId -> references the related record
- authorId -> references the related record

### AlertRule
**Fields:** `id`, `monitorId`, `channel`, `target`, `failureThreshold`, `enabled`, `createdAt`, `updatedAt`

**Relationships:**
- monitorId -> references the related record

### StatusPage
**Fields:** `id`, `name`, `slug`, `branding`, `componentConfig`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

## Backend logic

- Execute scheduled HTTP/ping checks per monitor interval and record status code, response time, and up/down result
- Compute uptime percentage and latency trends over selectable time windows
- Detect failures via consecutive-failure thresholds and trigger multi-channel alerts
- Open and progress incidents through investigating, identified, monitoring, and resolved states with timestamped updates
- Derive public status-page component health from monitor and incident state
- Suppress alerts during configured maintenance windows
- Notify status-page subscribers when incidents are posted or resolved
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
- [ ] A monitor that returns consecutive failures past its threshold flips to down and fires an alert
- [ ] An incident moves from investigating to resolved with each update timestamped on the public status page
- [ ] With no real notification keys, alerts are written to a mock notification log so the full flow runs locally

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds uptime-monitoring and status-page products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: PulseWatch Website Uptime & Incident Status Dashboard
Type: Website Uptime & Incident Status Dashboard (Uptime Monitoring & Status)
Target users: SRE and DevOps engineers who register checks and run incidents and a support and ops manager who publishes status updates.
Business goal: Let teams register HTTP and ping checks, monitor uptime and latency, get alerted on failures, manage incidents through to resolution, and publish a branded public status page.

BRAND & DESIGN
Brand style: reliable, crisp, operational. Colors: midnight blue, signal green, alert red. A monitors grid with uptime sparklines and an incident timeline board. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Monitors dashboard with uptime percentage and latency sparklines
2. Monitor detail with latency trend, check history, and uptime over time
3. Add/edit check (HTTP/ping) with interval, expected status, and alert rules
4. Incident timeline board across investigating, identified, monitoring, and resolved
5. Incident detail with timestamped updates and a postmortem editor
6. Alerts & notification settings with channels and escalation thresholds
7. Public status page (branded) with component statuses and incident history
8. Status page customization with branding, components, and subscribers
9. Auth (sign in / register)
10. Admin: monitors, team, and notification channels

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Admin — manage monitors, alert rules, team, and the status page
- Engineer — register checks, run incidents, and write postmortems
- Support Manager — post status updates and manage subscriber communications

CORE FEATURES
- HTTP and ping check registration with interval, expected status code, and timeout
- Scheduled check execution recording response time, status code, and up/down result
- Uptime percentage and latency trend computation over selectable time windows
- Failure detection with consecutive-failure thresholds and multi-channel alerts
- Incident workflow from investigating to resolved with timestamped status updates
- Postmortem authoring linked to a resolved incident
- Branded public status page with component statuses and incident history
- Status-page subscribers notified when incidents are posted or resolved
- Maintenance windows that suppress alerts during planned work

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Monitor: id, name, url, type, intervalSeconds, expectedStatus, timeoutMs, status, createdAt, updatedAt
- Check: id, monitorId, statusCode, responseTimeMs, result, checkedAt, createdAt, updatedAt
- Incident: id, monitorId, title, status, severity, postmortem, startedAt, resolvedAt, createdAt, updatedAt
- IncidentUpdate: id, incidentId, authorId, status, message, postedAt, createdAt, updatedAt
- AlertRule: id, monitorId, channel, target, failureThreshold, enabled, createdAt, updatedAt
- StatusPage: id, name, slug, branding, componentConfig, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Execute scheduled HTTP/ping checks per monitor interval and record status code, response time, and up/down result
- Compute uptime percentage and latency trends over selectable time windows
- Detect failures via consecutive-failure thresholds and trigger multi-channel alerts
- Open and progress incidents through investigating, identified, monitoring, and resolved states with timestamped updates
- Derive public status-page component health from monitor and incident state
- Suppress alerts during configured maintenance windows
- Notify status-page subscribers when incidents are posted or resolved
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~8 monitors with mixed HTTP and ping checks, recent check history with latency and downtime, a resolved incident with a timeline and postmortem and one ongoing incident, alert rules across channels, a branded public status page, 1 admin and 2 engineers. Provide a seed script and list the demo login credentials in the README.

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
