# LedgerChase Accounts Receivable & Collections Dashboard

> Let AR teams track open invoices by aging bucket, automate dunning reminder sequences, log promise-to-pay and dispute notes, and forecast cash collection across a customer portfolio

| Field | Value |
|---|---|
| **Prompt ID** | 184 |
| **Title** | Accounts Receivable & Collections Dashboard |
| **Slug** | accounts-receivable-collections-dashboard |
| **Category** | Finance, Legal & HR |
| **Domain** | Accounts Receivable & Collections |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | AR specialists and credit controllers; Finance managers reviewing aging |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building AR collections and dunning tools for finance teams, distinct from an invoice generator that only creates documents.

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

1. AR dashboard (aging summary, total AR, DSO, and cash forecast)
2. Aging report by bucket with drill-down by customer
3. Customer portfolio list with balance and risk rating
4. Customer detail (open invoices, payment history, and activities)
5. Invoice detail with payments and dunning timeline
6. Collections worklist (prioritized overdue invoices to action)
7. Dunning sequence builder and settings
8. Promise-to-pay and dispute log
9. Auth (sign in / register)
10. Admin: users, sequences, and reminder templates

## Required features

- Open-invoice tracking with automatic aging-bucket classification (current, 1-30, 31-60, 61-90, 90+)
- Aging report with drill-down by customer and bucket
- Automated dunning sequences with escalating, scheduled reminders per overdue invoice
- Payment recording that updates invoice balance and status
- Promise-to-pay logging with broken-promise detection when the date passes unpaid
- Dispute notes that pause dunning on an invoice until resolved
- Prioritized collections worklist for AR specialists
- Cash-collection forecast across the customer portfolio
- Portfolio KPIs: total AR, DSO, overdue amount, and collection rate

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Customer
**Fields:** `id`, `name`, `email`, `creditLimit`, `paymentTermsDays`, `riskRating`, `balanceDue`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Invoice
**Fields:** `id`, `customerId`, `invoiceNumber`, `issueDate`, `dueDate`, `amount`, `balanceDue`, `agingBucket`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- customerId -> references the related record

### Payment
**Fields:** `id`, `invoiceId`, `amount`, `method`, `reference`, `receivedAt`, `createdAt`, `updatedAt`

**Relationships:**
- invoiceId -> references the related record

### DunningSequence
**Fields:** `id`, `name`, `steps`, `active`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### DunningReminder
**Fields:** `id`, `invoiceId`, `sequenceId`, `stepNumber`, `channel`, `scheduledFor`, `sentAt`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- invoiceId -> references the related record
- sequenceId -> references the related record

### CollectionActivity
**Fields:** `id`, `customerId`, `invoiceId`, `userId`, `type`, `note`, `promiseAmount`, `promiseDate`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- customerId -> references the related record
- invoiceId -> references the related record
- userId -> references the related record

## Backend logic

- Compute invoice aging buckets from due dates and remaining balances
- Run automated dunning sequences that schedule and send escalating reminders per overdue invoice
- Record payments against invoices and update balance due and status
- Log promise-to-pay commitments and flag broken promises when the date passes unpaid
- Track disputes that pause dunning on an invoice until resolved
- Forecast expected cash collection by weighting open balances by promise dates and customer risk
- Roll up portfolio metrics: total AR, DSO, overdue amount, and collection rate
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
- [ ] Invoices are classified into the correct aging buckets from their due dates and remaining balances
- [ ] An overdue invoice advances through its dunning sequence, logging each scheduled reminder, and pauses when a dispute is opened
- [ ] Logging a promise-to-pay updates the cash forecast, and a passed unpaid promise is flagged as broken

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds accounts receivable and collections products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: LedgerChase Accounts Receivable & Collections Dashboard
Type: Accounts Receivable & Collections Dashboard (Accounts Receivable & Collections)
Target users: AR specialists and credit controllers who chase open invoices and finance managers who review aging and cash forecasts.
Business goal: Let AR teams track open invoices by aging bucket, automate dunning reminder sequences, log promise-to-pay and dispute notes, and forecast cash collection across a customer portfolio.

BRAND & DESIGN
Brand style: focused, data-dense, finance-grade. Colors: deep teal, amber alert, clean white. An aging-bucket dashboard with a cash-forecast chart beside a prioritized collections worklist and customer activity timeline. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. AR dashboard (aging summary, total AR, DSO, and cash forecast)
2. Aging report by bucket with drill-down by customer
3. Customer portfolio list with balance and risk rating
4. Customer detail (open invoices, payment history, and activities)
5. Invoice detail with payments and dunning timeline
6. Collections worklist (prioritized overdue invoices to action)
7. Dunning sequence builder and settings
8. Promise-to-pay and dispute log
9. Auth (sign in / register)
10. Admin: users, sequences, and reminder templates

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- AR Specialist / Credit Controller — work the collections list, chase invoices, and log activities
- Finance Manager — review aging, cash forecasts, and portfolio KPIs
- Admin — manage users, dunning sequences, and reminder templates

CORE FEATURES
- Open-invoice tracking with automatic aging-bucket classification (current, 1-30, 31-60, 61-90, 90+)
- Aging report with drill-down by customer and bucket
- Automated dunning sequences with escalating, scheduled reminders per overdue invoice
- Payment recording that updates invoice balance and status
- Promise-to-pay logging with broken-promise detection when the date passes unpaid
- Dispute notes that pause dunning on an invoice until resolved
- Prioritized collections worklist for AR specialists
- Cash-collection forecast across the customer portfolio
- Portfolio KPIs: total AR, DSO, overdue amount, and collection rate

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Customer: id, name, email, creditLimit, paymentTermsDays, riskRating, balanceDue, createdAt, updatedAt
- Invoice: id, customerId, invoiceNumber, issueDate, dueDate, amount, balanceDue, agingBucket, status, createdAt, updatedAt
- Payment: id, invoiceId, amount, method, reference, receivedAt, createdAt, updatedAt
- DunningSequence: id, name, steps, active, createdAt, updatedAt
- DunningReminder: id, invoiceId, sequenceId, stepNumber, channel, scheduledFor, sentAt, status, createdAt, updatedAt
- CollectionActivity: id, customerId, invoiceId, userId, type, note, promiseAmount, promiseDate, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Compute invoice aging buckets from due dates and remaining balances
- Run automated dunning sequences that schedule and send escalating reminders per overdue invoice
- Record payments against invoices and update balance due and status
- Log promise-to-pay commitments and flag broken promises when the date passes unpaid
- Track disputes that pause dunning on an invoice until resolved
- Forecast expected cash collection by weighting open balances by promise dates and customer risk
- Roll up portfolio metrics: total AR, DSO, overdue amount, and collection rate
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~15 customers with payment terms and risk ratings, ~60 invoices spread across current and overdue aging buckets, recorded partial and full payments, active dunning sequences with sent reminders, promise-to-pay and dispute activities, and demo logins for 1 admin, 2 AR specialists, and 1 finance manager. Provide a seed script and list the demo login credentials in the README.

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
