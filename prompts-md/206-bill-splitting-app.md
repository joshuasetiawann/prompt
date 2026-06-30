# SplitMate Bill Splitting & Shared Expenses App

> Let users create groups, log shared expenses with flexible splits, see real-time balances of who owes whom, and record settle-up payments

| Field | Value |
|---|---|
| **Prompt ID** | 206 |
| **Title** | Bill Splitting & Shared Expenses App |
| **Slug** | bill-splitting-app |
| **Category** | Productivity & Personal |
| **Domain** | Shared Expenses & Settle-Up |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Indie developers; roommates, travel groups, and friends sharing costs |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building shared-expense and settle-up tools for roommates, trips, and friend groups; distinct from personal budgeting, subscription tracking, or business invoicing apps.

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

1. Dashboard (net balance across all groups and recent activity)
2. Groups list (every group the user belongs to)
3. Group detail (shared expense ledger)
4. Add / edit expense (payer, participants, and split method)
5. Balances and settle-up suggestions (per group)
6. Record settle-up payment
7. Group members and invitations management
8. Auth (sign in / register)
9. Settings and account admin (profile and default currency)

## Required features

- Group creation with invited members and a shared expense ledger
- Expense entry with a single payer and multiple participants using equal, exact-amount, or percentage split methods
- Real-time per-member balance calculation of who owes whom within each group
- Simplified settle-up suggestions that minimize the number of payments needed to clear balances
- Settle-up payment recording that logs a transfer between two members and updates balances
- Multi-currency expenses with a configurable per-group default currency
- Per-group activity feed of added expenses, edits, and recorded settlements
- Cross-group dashboard summarizing the user's total amount owed and owed to them

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `defaultCurrency`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Group
**Fields:** `id`, `ownerId`, `name`, `description`, `defaultCurrency`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### GroupMember
**Fields:** `id`, `groupId`, `userId`, `role`, `joinedAt`, `createdAt`, `updatedAt`

**Relationships:**
- groupId -> references the related record
- userId -> references the related record

### Expense
**Fields:** `id`, `groupId`, `payerId`, `description`, `amount`, `currency`, `splitMethod`, `expenseDate`, `createdAt`, `updatedAt`

**Relationships:**
- groupId -> references the related record
- payerId -> references the related record

### ExpenseShare
**Fields:** `id`, `expenseId`, `userId`, `shareAmount`, `createdAt`, `updatedAt`

**Relationships:**
- expenseId -> references the related record
- userId -> references the related record

### Settlement
**Fields:** `id`, `groupId`, `fromUserId`, `toUserId`, `amount`, `currency`, `settledAt`, `createdAt`, `updatedAt`

**Relationships:**
- groupId -> references the related record
- fromUserId -> references the related record
- toUserId -> references the related record

### ActivityEntry
**Fields:** `id`, `groupId`, `actorId`, `type`, `summary`, `createdAt`, `updatedAt`

**Relationships:**
- groupId -> references the related record
- actorId -> references the related record

## Backend logic

- Split an expense across its participants by the chosen method (equal, exact amounts, or percentages) and persist each participant's share
- Compute each member's net balance within a group by summing what they paid minus their share of all expenses and applying recorded settlements
- Generate simplified settle-up suggestions that minimize the number of transactions needed to bring all group balances to zero
- Record a settle-up payment between two members and update their balances without any real payment gateway
- Aggregate a user's balances across all their groups into a single net owed and owed-to figure for the dashboard
- Append an activity entry whenever an expense is added or edited or a settlement is recorded
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
- [ ] Adding an expense paid by one member and split equally among three updates each member's net balance correctly
- [ ] Settle-up suggestions reduce all group balances to zero in the minimum number of payments
- [ ] Recording a settlement between two members adjusts both balances and appears in the group activity feed

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds shared-expense and settle-up products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: SplitMate Bill Splitting & Shared Expenses App
Type: Bill Splitting & Shared Expenses App (Shared Expenses & Settle-Up)
Target users: roommates, travel groups, and friends who share expenses in groups, track who owes whom, and settle up, plus members they invite to those groups.
Business goal: Let users create groups, log shared expenses with flexible splits, see real-time balances of who owes whom, and record settle-up payments.

BRAND & DESIGN
Brand style: friendly, fair, transparent. Colors: trust teal, slate gray, soft amber. A group ledger of expense rows beside a balances panel showing who owes whom and simplified settle-up suggestions. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard (net balance across all groups and recent activity)
2. Groups list (every group the user belongs to)
3. Group detail (shared expense ledger)
4. Add / edit expense (payer, participants, and split method)
5. Balances and settle-up suggestions (per group)
6. Record settle-up payment
7. Group members and invitations management
8. Auth (sign in / register)
9. Settings and account admin (profile and default currency)

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Group Admin — create groups, invite members, edit group settings, and manage any expense
- Member — add and edit their own expenses, view balances, and record settle-ups
- Viewer — read-only access to a group's expenses and balances

CORE FEATURES
- Group creation with invited members and a shared expense ledger
- Expense entry with a single payer and multiple participants using equal, exact-amount, or percentage split methods
- Real-time per-member balance calculation of who owes whom within each group
- Simplified settle-up suggestions that minimize the number of payments needed to clear balances
- Settle-up payment recording that logs a transfer between two members and updates balances
- Multi-currency expenses with a configurable per-group default currency
- Per-group activity feed of added expenses, edits, and recorded settlements
- Cross-group dashboard summarizing the user's total amount owed and owed to them

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, defaultCurrency, createdAt, updatedAt
- Group: id, ownerId, name, description, defaultCurrency, createdAt, updatedAt
- GroupMember: id, groupId, userId, role, joinedAt, createdAt, updatedAt
- Expense: id, groupId, payerId, description, amount, currency, splitMethod, expenseDate, createdAt, updatedAt
- ExpenseShare: id, expenseId, userId, shareAmount, createdAt, updatedAt
- Settlement: id, groupId, fromUserId, toUserId, amount, currency, settledAt, createdAt, updatedAt
- ActivityEntry: id, groupId, actorId, type, summary, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Split an expense across its participants by the chosen method (equal, exact amounts, or percentages) and persist each participant's share
- Compute each member's net balance within a group by summing what they paid minus their share of all expenses and applying recorded settlements
- Generate simplified settle-up suggestions that minimize the number of transactions needed to bring all group balances to zero
- Record a settle-up payment between two members and update their balances without any real payment gateway
- Aggregate a user's balances across all their groups into a single net owed and owed-to figure for the dashboard
- Append an activity entry whenever an expense is added or edited or a settlement is recorded
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 4 groups, ~30 shared expenses with mixed split methods, recorded settlements, computed per-member balances, 1 admin and 3 members. Provide a seed script and list the demo login credentials in the README.

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
