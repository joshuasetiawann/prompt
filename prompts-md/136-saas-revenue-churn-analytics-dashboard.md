# MetricVault SaaS Revenue & Churn Analytics Dashboard

> Let subscription businesses ingest plan, subscription, and invoice data to compute MRR/ARR movements, churn, expansion, cohort retention, and LTV, with segment drill-downs and target tracking

| Field | Value |
|---|---|
| **Prompt ID** | 136 |
| **Title** | SaaS Revenue & Churn Analytics Dashboard |
| **Slug** | saas-revenue-churn-analytics-dashboard |
| **Category** | Analytics & Dashboards |
| **Domain** | SaaS Metrics & Subscription Analytics |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | SaaS founder / RevOps analyst; Finance lead |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building revenue-analytics tooling for subscription businesses, and SaaS founders or RevOps teams who want self-hosted metrics instead of a third-party billing analytics suite.

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

1. Overview dashboard with MRR, ARR, net movement, and churn KPIs
2. MRR movement breakdown with a new/expansion/contraction/churn/reactivation waterfall
3. Churn & retention analysis with logo and revenue churn and net revenue retention
4. Cohort retention matrix grouped by customer signup month
5. Customers list with segment filters and per-customer revenue drill-down
6. Plans & subscriptions overview
7. Targets vs actuals tracking with variance
8. Data ingestion: import plans, subscriptions, and invoices
9. Auth (sign in / register)
10. Admin: users, segments, and report exports

## Required features

- MRR and ARR computation with a monthly movement waterfall (new, expansion, contraction, churn, reactivation)
- Logo and revenue churn rates plus net revenue retention by period
- Cohort retention matrix grouped by customer signup month
- Customer lifetime value (LTV) calculation from average revenue and churn
- Segment filters with drill-down from any metric to the underlying customers
- Plan, subscription, and invoice ingestion via import with normalization
- Target setting per metric with target-vs-actual tracking and variance flags
- Exportable, board-ready report snapshots (CSV/PDF)
- KPI overview with period-over-period comparison

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Plan
**Fields:** `id`, `name`, `interval`, `amount`, `currency`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Customer
**Fields:** `id`, `externalId`, `name`, `segment`, `signupDate`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- externalId -> references the related record

### Subscription
**Fields:** `id`, `customerId`, `planId`, `status`, `mrr`, `startedAt`, `canceledAt`, `createdAt`, `updatedAt`

**Relationships:**
- customerId -> references the related record
- planId -> references the related record

### SubscriptionEvent
**Fields:** `id`, `subscriptionId`, `type`, `mrrDelta`, `effectiveAt`, `createdAt`, `updatedAt`

**Relationships:**
- subscriptionId -> references the related record

### Invoice
**Fields:** `id`, `customerId`, `subscriptionId`, `amount`, `status`, `periodStart`, `periodEnd`, `paidAt`, `createdAt`, `updatedAt`

**Relationships:**
- customerId -> references the related record
- subscriptionId -> references the related record

### Target
**Fields:** `id`, `metric`, `period`, `targetValue`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

## Backend logic

- Ingest plan, subscription, and invoice records and normalize them into customers, subscriptions, and movement events
- Compute monthly MRR/ARR with a new, expansion, contraction, churn, and reactivation movement breakdown from subscription events
- Calculate logo and revenue churn rates and net revenue retention per period
- Build cohort retention matrices by customer signup month from subscription activity
- Compute customer lifetime value (LTV) from average revenue per account and churn rate
- Track each metric against its configured target and flag variance
- Generate exportable, board-ready report snapshots filtered by segment and period
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
- [ ] MRR for a period equals prior MRR plus new and expansion minus contraction and churn, and the movement waterfall reconciles
- [ ] Cohort retention and LTV recompute correctly when the segment filter changes
- [ ] A board report can be filtered by segment and date range and exported to CSV

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds subscription-metrics and revenue-analytics products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: MetricVault SaaS Revenue & Churn Analytics Dashboard
Type: SaaS Revenue & Churn Analytics Dashboard (SaaS Metrics & Subscription Analytics)
Target users: SaaS founders and RevOps analysts who track subscription metrics and a finance lead who reviews revenue movements and targets.
Business goal: Let subscription businesses ingest plan, subscription, and invoice data to compute MRR/ARR movements, churn, expansion, cohort retention, and LTV, with segment drill-downs and target tracking.

BRAND & DESIGN
Brand style: data-dense, financial, polished. Colors: deep navy, emerald, slate grey. A KPI overview with an MRR movement waterfall and a cohort retention heatmap. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Overview dashboard with MRR, ARR, net movement, and churn KPIs
2. MRR movement breakdown with a new/expansion/contraction/churn/reactivation waterfall
3. Churn & retention analysis with logo and revenue churn and net revenue retention
4. Cohort retention matrix grouped by customer signup month
5. Customers list with segment filters and per-customer revenue drill-down
6. Plans & subscriptions overview
7. Targets vs actuals tracking with variance
8. Data ingestion: import plans, subscriptions, and invoices
9. Auth (sign in / register)
10. Admin: users, segments, and report exports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Admin — manage data sources, segments, targets, and users
- RevOps Analyst — analyze MRR movements, churn, cohorts, and LTV with segment drill-downs
- Finance Lead — review revenue movements, targets vs actuals, and board reports

CORE FEATURES
- MRR and ARR computation with a monthly movement waterfall (new, expansion, contraction, churn, reactivation)
- Logo and revenue churn rates plus net revenue retention by period
- Cohort retention matrix grouped by customer signup month
- Customer lifetime value (LTV) calculation from average revenue and churn
- Segment filters with drill-down from any metric to the underlying customers
- Plan, subscription, and invoice ingestion via import with normalization
- Target setting per metric with target-vs-actual tracking and variance flags
- Exportable, board-ready report snapshots (CSV/PDF)
- KPI overview with period-over-period comparison

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Plan: id, name, interval, amount, currency, status, createdAt, updatedAt
- Customer: id, externalId, name, segment, signupDate, status, createdAt, updatedAt
- Subscription: id, customerId, planId, status, mrr, startedAt, canceledAt, createdAt, updatedAt
- SubscriptionEvent: id, subscriptionId, type, mrrDelta, effectiveAt, createdAt, updatedAt
- Invoice: id, customerId, subscriptionId, amount, status, periodStart, periodEnd, paidAt, createdAt, updatedAt
- Target: id, metric, period, targetValue, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Ingest plan, subscription, and invoice records and normalize them into customers, subscriptions, and movement events
- Compute monthly MRR/ARR with a new, expansion, contraction, churn, and reactivation movement breakdown from subscription events
- Calculate logo and revenue churn rates and net revenue retention per period
- Build cohort retention matrices by customer signup month from subscription activity
- Compute customer lifetime value (LTV) from average revenue per account and churn rate
- Track each metric against its configured target and flag variance
- Generate exportable, board-ready report snapshots filtered by segment and period
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 4 plans, ~60 customers across segments, active and churned subscriptions with new/expansion/contraction/churn events, ~12 months of invoices, MRR/ARR targets, 1 admin, 1 finance lead, and 2 analysts. Provide a seed script and list the demo login credentials in the README.

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
