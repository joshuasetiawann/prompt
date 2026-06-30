# ClauseVault Contract Lifecycle Management System

> Maintain a central repository of executed contracts that tracks key dates, obligations, and renewal alerts, with approval routing and e-signature workflow for new agreements

| Field | Value |
|---|---|
| **Prompt ID** | 120 |
| **Title** | Contract Lifecycle Management System |
| **Slug** | contract-lifecycle-management-system |
| **Category** | Business Operations |
| **Domain** | Contract Management |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Legal and contract managers; Operations and procurement leads |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building contract-management (CLM) tools for legal and ops teams (distinct from one-off proposal/contract generators that just create documents).

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

1. Dashboard with expiring contracts, pending approvals, and upcoming obligations
2. Contract repository with type, party, and status filters
3. Contract detail with versions, key dates, obligations, and signature status
4. New contract request and drafting from template
5. Approval routing queue
6. E-signature workflow (mock signing)
7. Obligations and milestones tracker
8. Renewal / expiry alerts calendar
9. Auth (sign in / register)
10. Admin: templates, clause library, and reports

## Required features

- Central repository of executed contracts with parties, type, value, and document versions
- Contract drafting from reusable templates and a clause library
- Approval routing with sequential or parallel reviewers before signing
- Mock e-signature workflow capturing signer order, status, and audit trail
- Key-date tracking for effective, expiry, and notice dates
- Auto-renewal handling with configurable notice-period alerts
- Obligation and milestone tracking with owners and due dates
- Full-text search and filtering across the repository
- Contract status and renewal reports by type, party, and value

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `department`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### ContractTemplate
**Fields:** `id`, `name`, `type`, `body`, `clauseIds`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Contract
**Fields:** `id`, `requesterId`, `ownerId`, `templateId`, `title`, `counterparty`, `type`, `status`, `value`, `effectiveDate`, `expiryDate`, `autoRenew`, `noticePeriodDays`, `createdAt`, `updatedAt`

**Relationships:**
- requesterId -> references the related record
- ownerId -> references the related record
- templateId -> references the related record

### ContractVersion
**Fields:** `id`, `contractId`, `versionNumber`, `fileUrl`, `changeNote`, `createdById`, `createdAt`, `updatedAt`

**Relationships:**
- contractId -> references the related record
- createdById -> references the related record

### Approval
**Fields:** `id`, `contractId`, `approverId`, `step`, `decision`, `comment`, `decidedAt`, `createdAt`, `updatedAt`

**Relationships:**
- contractId -> references the related record
- approverId -> references the related record

### Signature
**Fields:** `id`, `contractId`, `signerName`, `signerEmail`, `order`, `status`, `signedAt`, `createdAt`, `updatedAt`

**Relationships:**
- contractId -> references the related record

### Obligation
**Fields:** `id`, `contractId`, `title`, `ownerId`, `dueDate`, `status`, `completedAt`, `createdAt`, `updatedAt`

**Relationships:**
- contractId -> references the related record
- ownerId -> references the related record

## Backend logic

- Generate a draft contract from a template and clause library and create its initial version
- Route contracts through sequential or parallel approval steps and block signing until all approvals are recorded
- Run a mock e-signature flow enforcing signer order and recording each signature with an audit trail
- Track effective, expiry, and notice dates and compute renewal alerts from the notice period
- Auto-renew or flag expiring contracts based on the auto-renew setting and notice window
- Manage obligations and milestones, surfacing those due or overdue with their owners
- Provide full-text search and aggregate contract reports by type, counterparty, status, and value
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
- [ ] A contract cannot enter the signature stage until all required approvals are recorded
- [ ] An expiring contract with auto-renew off raises a renewal alert within its notice period
- [ ] Completing the signer order marks the contract active and records a full signature audit trail

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds contract lifecycle management products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: ClauseVault Contract Lifecycle Management System
Type: Contract Lifecycle Management System (Contract Management)
Target users: legal and contract managers who maintain the contract repository and operations and procurement leads who request, approve, and sign new agreements.
Business goal: Maintain a central repository of executed contracts that tracks key dates, obligations, and renewal alerts, with approval routing and e-signature workflow for new agreements.

BRAND & DESIGN
Brand style: authoritative, precise, calm. Colors: charcoal, gold, white. A contract repository table with an obligations checklist, a key-dates timeline, and a renewal alert rail. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with expiring contracts, pending approvals, and upcoming obligations
2. Contract repository with type, party, and status filters
3. Contract detail with versions, key dates, obligations, and signature status
4. New contract request and drafting from template
5. Approval routing queue
6. E-signature workflow (mock signing)
7. Obligations and milestones tracker
8. Renewal / expiry alerts calendar
9. Auth (sign in / register)
10. Admin: templates, clause library, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Requester — request new contracts and track their progress
- Contract Manager — draft, route, and manage contracts and obligations
- Approver — review and approve contracts before signature
- Admin — manage templates, clause library, and reports

CORE FEATURES
- Central repository of executed contracts with parties, type, value, and document versions
- Contract drafting from reusable templates and a clause library
- Approval routing with sequential or parallel reviewers before signing
- Mock e-signature workflow capturing signer order, status, and audit trail
- Key-date tracking for effective, expiry, and notice dates
- Auto-renewal handling with configurable notice-period alerts
- Obligation and milestone tracking with owners and due dates
- Full-text search and filtering across the repository
- Contract status and renewal reports by type, party, and value

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, department, createdAt, updatedAt
- ContractTemplate: id, name, type, body, clauseIds, createdAt, updatedAt
- Contract: id, requesterId, ownerId, templateId, title, counterparty, type, status, value, effectiveDate, expiryDate, autoRenew, noticePeriodDays, createdAt, updatedAt
- ContractVersion: id, contractId, versionNumber, fileUrl, changeNote, createdById, createdAt, updatedAt
- Approval: id, contractId, approverId, step, decision, comment, decidedAt, createdAt, updatedAt
- Signature: id, contractId, signerName, signerEmail, order, status, signedAt, createdAt, updatedAt
- Obligation: id, contractId, title, ownerId, dueDate, status, completedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Generate a draft contract from a template and clause library and create its initial version
- Route contracts through sequential or parallel approval steps and block signing until all approvals are recorded
- Run a mock e-signature flow enforcing signer order and recording each signature with an audit trail
- Track effective, expiry, and notice dates and compute renewal alerts from the notice period
- Auto-renew or flag expiring contracts based on the auto-renew setting and notice window
- Manage obligations and milestones, surfacing those due or overdue with their owners
- Provide full-text search and aggregate contract reports by type, counterparty, status, and value
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~15 contracts across draft, in-approval, active, expiring, and renewed states, a few contract templates with a clause library, version histories, approval trails, mock signature records, tracked obligations, 1 admin, 2 contract managers, 1 approver, and 2 requesters. Provide a seed script and list the demo login credentials in the README.

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
