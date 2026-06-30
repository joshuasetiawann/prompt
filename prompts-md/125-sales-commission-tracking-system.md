# CommissionFlow Sales Commission Tracking System

> Let sales ops define commission plans and quotas, calculate rep payouts from closed deals, handle disputes and adjustments, and produce approved commission statements for payroll

| Field | Value |
|---|---|
| **Prompt ID** | 125 |
| **Title** | Sales Commission Tracking System |
| **Slug** | sales-commission-tracking-system |
| **Category** | Business Operations |
| **Domain** | Sales Compensation |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Sales operations and finance; Sales reps and managers |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building sales-compensation tools that sit alongside, but are distinct from, a CRM or pipeline app.

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

1. Dashboard with attainment, projected payout, and pending approvals
2. Commission plan builder with tiers, rates, quotas, and accelerators
3. Deals import and management feeding commissions
4. Per-rep commission statement
5. Disputes and adjustments queue
6. Statement approval workflow
7. Payroll export
8. Auth (sign in / register)
9. Admin: users, plan assignments, and quotas
10. Reports: attainment and payout by team and period

## Required features

- Commission plan builder with tiered rates, quotas, accelerators, and caps
- Plan assignment to reps with per-period quotas
- Deal import and management as the basis for commission calculation
- Automatic payout calculation from closed deals against the assigned plan
- Quota attainment tracking with accelerator and cap application
- Dispute filing and adjustment workflow with an audit trail
- Statement generation, review, and approval per period
- Approved payroll export
- Reports on attainment, payout, and cost by team and period

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### CommissionPlan
**Fields:** `id`, `name`, `tiers`, `baseRate`, `accelerator`, `cap`, `period`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### PlanAssignment
**Fields:** `id`, `planId`, `repId`, `quota`, `effectiveFrom`, `effectiveTo`, `createdAt`, `updatedAt`

**Relationships:**
- planId -> references the related record
- repId -> references the related record

### Deal
**Fields:** `id`, `repId`, `accountName`, `amount`, `closedAt`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- repId -> references the related record

### Commission
**Fields:** `id`, `dealId`, `repId`, `planId`, `period`, `baseAmount`, `acceleratedAmount`, `payoutAmount`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- dealId -> references the related record
- repId -> references the related record
- planId -> references the related record

### Adjustment
**Fields:** `id`, `commissionId`, `repId`, `type`, `amount`, `reason`, `status`, `resolvedById`, `createdAt`, `updatedAt`

**Relationships:**
- commissionId -> references the related record
- repId -> references the related record
- resolvedById -> references the related record

### Statement
**Fields:** `id`, `repId`, `period`, `totalPayout`, `status`, `approvedById`, `approvedAt`, `exportedAt`, `createdAt`, `updatedAt`

**Relationships:**
- repId -> references the related record
- approvedById -> references the related record

## Backend logic

- Calculate per-deal commission from the rep's assigned plan tiers, rates, and accelerators
- Track quota attainment per rep and period and apply accelerators and caps
- Recalculate payouts when deals, plans, or assignments change
- Process disputes and adjustments and re-derive the affected statement totals with an audit trail
- Generate per-rep commission statements per period and route them for approval
- Lock approved statements and produce a payroll export
- Aggregate attainment, payout, and cost by team and period for reports
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
- [ ] A closed deal generates a commission calculated from the rep's assigned plan tiers and accelerators
- [ ] An approved adjustment recalculates the affected rep's statement total
- [ ] A statement cannot be exported to payroll until it is approved

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds sales-compensation products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: CommissionFlow Sales Commission Tracking System
Type: Sales Commission Tracking System (Sales Compensation)
Target users: sales-ops and finance teams who define commission plans and approve payouts and sales reps who track earnings and raise disputes.
Business goal: Let sales ops define commission plans and quotas, calculate rep payouts from closed deals, handle disputes and adjustments, and produce approved commission statements for payroll.

BRAND & DESIGN
Brand style: precise, financial, confidence-inspiring. Colors: deep indigo, mint green, cool grey. A plan-rule builder beside a per-rep payout statement with an attainment progress bar. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with attainment, projected payout, and pending approvals
2. Commission plan builder with tiers, rates, quotas, and accelerators
3. Deals import and management feeding commissions
4. Per-rep commission statement
5. Disputes and adjustments queue
6. Statement approval workflow
7. Payroll export
8. Auth (sign in / register)
9. Admin: users, plan assignments, and quotas
10. Reports: attainment and payout by team and period

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Sales Ops / Finance — build plans, run calculations, and approve statements
- Sales Manager — view team attainment and resolve disputes
- Sales Rep — track deals, earnings, and raise disputes
- Admin — manage users, plan templates, and payroll exports

CORE FEATURES
- Commission plan builder with tiered rates, quotas, accelerators, and caps
- Plan assignment to reps with per-period quotas
- Deal import and management as the basis for commission calculation
- Automatic payout calculation from closed deals against the assigned plan
- Quota attainment tracking with accelerator and cap application
- Dispute filing and adjustment workflow with an audit trail
- Statement generation, review, and approval per period
- Approved payroll export
- Reports on attainment, payout, and cost by team and period

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- CommissionPlan: id, name, tiers, baseRate, accelerator, cap, period, status, createdAt, updatedAt
- PlanAssignment: id, planId, repId, quota, effectiveFrom, effectiveTo, createdAt, updatedAt
- Deal: id, repId, accountName, amount, closedAt, status, createdAt, updatedAt
- Commission: id, dealId, repId, planId, period, baseAmount, acceleratedAmount, payoutAmount, status, createdAt, updatedAt
- Adjustment: id, commissionId, repId, type, amount, reason, status, resolvedById, createdAt, updatedAt
- Statement: id, repId, period, totalPayout, status, approvedById, approvedAt, exportedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Calculate per-deal commission from the rep's assigned plan tiers, rates, and accelerators
- Track quota attainment per rep and period and apply accelerators and caps
- Recalculate payouts when deals, plans, or assignments change
- Process disputes and adjustments and re-derive the affected statement totals with an audit trail
- Generate per-rep commission statements per period and route them for approval
- Lock approved statements and produce a payroll export
- Aggregate attainment, payout, and cost by team and period for reports
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~3 commission plans with tiers and accelerators, ~10 reps with quota assignments, sample closed deals, calculated commissions, open disputes and adjustments, approved and pending statements, 1 admin, 2 sales-ops users, and several reps. Provide a seed script and list the demo login credentials in the README.

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
