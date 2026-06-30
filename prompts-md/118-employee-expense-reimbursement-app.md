# ClaimWise Employee Expense Reimbursement System

> Let employees submit expense reports with receipts and mileage, let managers approve against policy, and let finance batch reimbursements while reconciling corporate-card spend

| Field | Value |
|---|---|
| **Prompt ID** | 118 |
| **Title** | Employee Expense Reimbursement System |
| **Slug** | employee-expense-reimbursement-app |
| **Category** | Business Operations |
| **Domain** | Expense Management |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Finance and AP teams; Employees and approving managers |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building expense-report and reimbursement tools for SMBs and distributed teams (distinct from outbound invoicing or generic approvals).

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

1. Dashboard with my reports, pending approvals, and reimbursement status
2. New expense report with line items, receipts, and mileage
3. My expense reports list with status filters
4. Report detail with policy flags and approval trail
5. Manager approval queue
6. Finance reimbursement batches
7. Corporate-card reconciliation (match transactions to expenses)
8. Auth (sign in / register)
9. Admin: expense policies and categories
10. Reports: spend by category, department, and period

## Required features

- Expense reports grouping multiple line items with category, amount, and receipt upload
- Mileage entries with rate-based reimbursement calculation
- Policy checks that flag over-limit, missing-receipt, or likely-duplicate expenses
- Manager approval workflow with approve, reject, and request-changes
- Finance reimbursement batching of approved reports for payout
- Corporate-card transaction import and matching to submitted expenses
- Multi-currency entry with conversion to the company base currency
- Spend reporting by category, department, employee, and period

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `managerId`, `department`, `createdAt`, `updatedAt`

**Relationships:**
- managerId -> references the related record

### ExpensePolicy
**Fields:** `id`, `category`, `perItemLimit`, `dailyLimit`, `receiptRequiredAbove`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### ExpenseReport
**Fields:** `id`, `employeeId`, `batchId`, `title`, `status`, `totalAmount`, `currency`, `submittedAt`, `createdAt`, `updatedAt`

**Relationships:**
- employeeId -> references the related record
- batchId -> references the related record

### ExpenseItem
**Fields:** `id`, `reportId`, `category`, `description`, `amount`, `currency`, `expenseDate`, `receiptUrl`, `mileageDistance`, `policyFlag`, `createdAt`, `updatedAt`

**Relationships:**
- reportId -> references the related record

### Approval
**Fields:** `id`, `reportId`, `approverId`, `decision`, `comment`, `decidedAt`, `createdAt`, `updatedAt`

**Relationships:**
- reportId -> references the related record
- approverId -> references the related record

### ReimbursementBatch
**Fields:** `id`, `status`, `totalAmount`, `processedById`, `paidAt`, `createdAt`, `updatedAt`

**Relationships:**
- processedById -> references the related record

### CardTransaction
**Fields:** `id`, `cardholderId`, `merchant`, `amount`, `currency`, `transactionDate`, `matchedItemId`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- cardholderId -> references the related record
- matchedItemId -> references the related record

## Backend logic

- Calculate report totals from line items and convert foreign-currency amounts to the base currency
- Compute mileage reimbursement from distance and the configured per-mile/km rate
- Run policy checks on each line item flagging over-limit, missing-receipt, and likely-duplicate expenses
- Route submitted reports to the employee's manager and record approve, reject, or request-changes decisions
- Batch approved reports for reimbursement and mark them paid when the batch is processed
- Import corporate-card transactions and match them to expense items, flagging unmatched spend
- Aggregate spend reports by category, department, employee, and period
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
- [ ] A line item above its category limit or missing a required receipt is flagged before manager approval
- [ ] Mileage entries reimburse at the configured rate and roll into the report total
- [ ] A processed reimbursement batch marks its included reports as paid and a card transaction matches to at most one expense item

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds expense management products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: ClaimWise Employee Expense Reimbursement System
Type: Employee Expense Reimbursement System (Expense Management)
Target users: employees who submit expense reports with receipts and mileage and managers and finance teams who approve and reimburse them.
Business goal: Let employees submit expense reports with receipts and mileage, let managers approve against policy, and let finance batch reimbursements while reconciling corporate-card spend.

BRAND & DESIGN
Brand style: clean, reassuring, efficient. Colors: indigo, mint, white. A report builder with receipt thumbnails, a policy-flag sidebar, and a finance reimbursement batch queue. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with my reports, pending approvals, and reimbursement status
2. New expense report with line items, receipts, and mileage
3. My expense reports list with status filters
4. Report detail with policy flags and approval trail
5. Manager approval queue
6. Finance reimbursement batches
7. Corporate-card reconciliation (match transactions to expenses)
8. Auth (sign in / register)
9. Admin: expense policies and categories
10. Reports: spend by category, department, and period

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Employee — submit expense reports with receipts and mileage
- Manager — review and approve or reject team expense reports against policy
- Finance — batch approved claims for reimbursement and reconcile corporate-card spend
- Admin — manage expense policies, categories, and reports

CORE FEATURES
- Expense reports grouping multiple line items with category, amount, and receipt upload
- Mileage entries with rate-based reimbursement calculation
- Policy checks that flag over-limit, missing-receipt, or likely-duplicate expenses
- Manager approval workflow with approve, reject, and request-changes
- Finance reimbursement batching of approved reports for payout
- Corporate-card transaction import and matching to submitted expenses
- Multi-currency entry with conversion to the company base currency
- Spend reporting by category, department, employee, and period

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, managerId, department, createdAt, updatedAt
- ExpensePolicy: id, category, perItemLimit, dailyLimit, receiptRequiredAbove, createdAt, updatedAt
- ExpenseReport: id, employeeId, batchId, title, status, totalAmount, currency, submittedAt, createdAt, updatedAt
- ExpenseItem: id, reportId, category, description, amount, currency, expenseDate, receiptUrl, mileageDistance, policyFlag, createdAt, updatedAt
- Approval: id, reportId, approverId, decision, comment, decidedAt, createdAt, updatedAt
- ReimbursementBatch: id, status, totalAmount, processedById, paidAt, createdAt, updatedAt
- CardTransaction: id, cardholderId, merchant, amount, currency, transactionDate, matchedItemId, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Calculate report totals from line items and convert foreign-currency amounts to the base currency
- Compute mileage reimbursement from distance and the configured per-mile/km rate
- Run policy checks on each line item flagging over-limit, missing-receipt, and likely-duplicate expenses
- Route submitted reports to the employee's manager and record approve, reject, or request-changes decisions
- Batch approved reports for reimbursement and mark them paid when the batch is processed
- Import corporate-card transactions and match them to expense items, flagging unmatched spend
- Aggregate spend reports by category, department, employee, and period
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 6 expense categories with policy limits, ~15 expense reports across draft, submitted, approved, rejected, and reimbursed states with receipts and mileage, a reimbursement batch, imported corporate-card transactions with matched and unmatched rows, 1 admin, 2 managers, 1 finance user, and 4 employees. Provide a seed script and list the demo login credentials in the README.

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
