# LedgerLink Accounting Firm Client Portal

> Streamline document collection, task tracking, messaging, and invoicing between a firm and its clients

| Field | Value |
|---|---|
| **Prompt ID** | 54 |
| **Title** | Accounting Firm Client Portal |
| **Slug** | accounting-firm-client-portal |
| **Category** | Finance, Legal & HR |
| **Domain** | Client Portal & Accounting |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Accountant/Admin; Client |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building client portals for accounting, bookkeeping, and tax firms.

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

1. Auth
2. Firm dashboard (clients, open requests, overdue items)
3. Clients list and client detail
4. Document requests and uploads
5. Tasks per client
6. Invoices and payment status
7. Secure messages
8. Admin: staff and settings
9. Client portal: my documents, tasks, and invoices

## Required features

- Document requests with statuses (requested, uploaded, reviewed)
- Secure document upload (mock storage) per client
- Task assignment and tracking per client
- Invoices with status (sent, paid, overdue)
- Threaded secure messages
- Role-scoped client access
- Reports: outstanding requests and invoices

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### ClientOrg
**Fields:** `id`, `name`, `contactEmail`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Membership
**Fields:** `id`, `clientOrgId`, `userId`, `createdAt`, `updatedAt`

**Relationships:**
- clientOrgId -> references the related record
- userId -> references the related record

### DocRequest
**Fields:** `id`, `clientOrgId`, `title`, `status`, `dueDate`, `createdAt`, `updatedAt`

**Relationships:**
- clientOrgId -> references the related record

### Upload
**Fields:** `id`, `docRequestId`, `fileName`, `uploadedAt`, `createdAt`, `updatedAt`

**Relationships:**
- docRequestId -> references the related record

### Task
**Fields:** `id`, `clientOrgId`, `title`, `status`, `assigneeId`, `createdAt`, `updatedAt`

**Relationships:**
- clientOrgId -> references the related record
- assigneeId -> references the related record

### Invoice
**Fields:** `id`, `clientOrgId`, `number`, `amount`, `status`, `dueDate`, `createdAt`, `updatedAt`

**Relationships:**
- clientOrgId -> references the related record

### Message
**Fields:** `id`, `clientOrgId`, `authorId`, `body`, `createdAt`, `updatedAt`

**Relationships:**
- clientOrgId -> references the related record
- authorId -> references the related record

## Backend logic

- Document-request lifecycle with uploads
- Task assignment and status updates
- Invoice status and overdue detection
- Role-scoped access per client org
- Reporting on outstanding items
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
- [ ] Clients see only their own organization's items
- [ ] Uploading against a request updates its status
- [ ] Overdue invoices and requests are flagged

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds secure client portals for accounting and bookkeeping firms, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: LedgerLink Accounting Firm Client Portal
Type: Accounting Firm Client Portal (Client Portal & Accounting)
Target users: accountants managing client work and business clients submitting documents and paying invoices.
Business goal: Streamline document collection, task tracking, messaging, and invoicing between a firm and its clients.

BRAND & DESIGN
Brand style: trustworthy, clean, finance-grade. Colors: green, slate, white. Clean, modern, organized portal with request lists and clear statuses. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Auth
2. Firm dashboard (clients, open requests, overdue items)
3. Clients list and client detail
4. Document requests and uploads
5. Tasks per client
6. Invoices and payment status
7. Secure messages
8. Admin: staff and settings
9. Client portal: my documents, tasks, and invoices

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Accountant/Admin — manage clients, requests, tasks, invoices
- Client — upload documents, view tasks and invoices

CORE FEATURES
- Document requests with statuses (requested, uploaded, reviewed)
- Secure document upload (mock storage) per client
- Task assignment and tracking per client
- Invoices with status (sent, paid, overdue)
- Threaded secure messages
- Role-scoped client access
- Reports: outstanding requests and invoices

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- ClientOrg: id, name, contactEmail, createdAt, updatedAt
- Membership: id, clientOrgId, userId, createdAt, updatedAt
- DocRequest: id, clientOrgId, title, status, dueDate, createdAt, updatedAt
- Upload: id, docRequestId, fileName, uploadedAt, createdAt, updatedAt
- Task: id, clientOrgId, title, status, assigneeId, createdAt, updatedAt
- Invoice: id, clientOrgId, number, amount, status, dueDate, createdAt, updatedAt
- Message: id, clientOrgId, authorId, body, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Document-request lifecycle with uploads
- Task assignment and status updates
- Invoice status and overdue detection
- Role-scoped access per client org
- Reporting on outstanding items
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~8 client orgs, document requests and uploads, tasks, invoices, messages, 1 admin, 2 accountants, 2 clients. Provide a seed script and list the demo login credentials in the README.

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
