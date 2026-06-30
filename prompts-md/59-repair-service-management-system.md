# FixItPro Repair Service Management System

> Capture repair requests, schedule technicians with parts, track jobs, and invoice on completion

| Field | Value |
|---|---|
| **Prompt ID** | 59 |
| **Title** | Repair Service Management System |
| **Slug** | repair-service-management-system |
| **Category** | Logistics & Field Service |
| **Domain** | Field Service Management |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Customer; Technician; Admin/Dispatcher |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building field-service tools for repair shops and on-site technicians.

**Production standard:** Production-grade scaffold with local development support, deployment readiness, security guidance, test guidance, and real-service integration readiness

## Tech stack

- **Frontend:** Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Next.js Server Actions or API Routes, Prisma ORM, PostgreSQL for production, SQLite for local development
- **Auth:** Auth.js or secure email/password authentication
- **Validation:** Zod, React Hook Form
- **Deployment:** Vercel-ready, Docker-ready

**Local mode** (enabled)
- App must run locally without paid API keys
- Use mock payment mode when payment is needed
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

1. Home and request a repair
2. Customer: my repair requests and status
3. Dispatcher dashboard (jobs by status, technician load)
4. Job detail (diagnosis, parts, labor, status)
5. Technicians and schedule
6. Parts inventory
7. Invoices (mock payment)
8. Auth
9. Admin: services, users, and reports

## Required features

- Repair requests converted into scheduled jobs
- Technician assignment with workload view
- Parts inventory consumed by jobs with low-stock flags
- Job status: requested, scheduled, in progress, completed, invoiced
- Labor and parts totals into a mock invoice
- Status visible to the customer
- Reports: jobs, revenue, and technician utilization

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Service
**Fields:** `id`, `name`, `baseLaborRate`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### RepairRequest
**Fields:** `id`, `customerId`, `deviceOrItem`, `issue`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- customerId -> references the related record

### Job
**Fields:** `id`, `requestId`, `technicianId`, `status`, `scheduledFor`, `createdAt`, `updatedAt`

**Relationships:**
- requestId -> references the related record
- technicianId -> references the related record

### Part
**Fields:** `id`, `name`, `stock`, `price`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### JobPart
**Fields:** `id`, `jobId`, `partId`, `qty`, `createdAt`, `updatedAt`

**Relationships:**
- jobId -> references the related record
- partId -> references the related record

### Invoice
**Fields:** `id`, `jobId`, `laborTotal`, `partsTotal`, `total`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- jobId -> references the related record

### Payment
**Fields:** `id`, `invoiceId`, `amount`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- invoiceId -> references the related record

## Backend logic

- Request-to-job scheduling with technician assignment
- Parts consumption updating stock with low-stock flags
- Invoice totals from labor and parts
- Mock payment recording
- Reporting on jobs and utilization
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
- [ ] Consuming parts on a job decrements stock
- [ ] Job totals combine labor and parts correctly
- [ ] Customers see their job status without seeing others

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds field-service and repair management software, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: FixItPro Repair Service Management System
Type: Repair Service Management System (Field Service Management)
Target users: customers requesting repairs and dispatchers, technicians, and admins managing jobs.
Business goal: Capture repair requests, schedule technicians with parts, track jobs, and invoice on completion.

BRAND & DESIGN
Brand style: capable, practical, service-grade. Colors: amber, slate, white. Clean, modern, dispatch-style job board with clear status and parts. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home and request a repair
2. Customer: my repair requests and status
3. Dispatcher dashboard (jobs by status, technician load)
4. Job detail (diagnosis, parts, labor, status)
5. Technicians and schedule
6. Parts inventory
7. Invoices (mock payment)
8. Auth
9. Admin: services, users, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Customer — request repairs and track jobs
- Technician — update assigned jobs, parts, and notes
- Admin/Dispatcher — schedule, manage parts, and invoice

CORE FEATURES
- Repair requests converted into scheduled jobs
- Technician assignment with workload view
- Parts inventory consumed by jobs with low-stock flags
- Job status: requested, scheduled, in progress, completed, invoiced
- Labor and parts totals into a mock invoice
- Status visible to the customer
- Reports: jobs, revenue, and technician utilization

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Service: id, name, baseLaborRate, createdAt, updatedAt
- RepairRequest: id, customerId, deviceOrItem, issue, status, createdAt, updatedAt
- Job: id, requestId, technicianId, status, scheduledFor, createdAt, updatedAt
- Part: id, name, stock, price, createdAt, updatedAt
- JobPart: id, jobId, partId, qty, createdAt, updatedAt
- Invoice: id, jobId, laborTotal, partsTotal, total, status, createdAt, updatedAt
- Payment: id, invoiceId, amount, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Request-to-job scheduling with technician assignment
- Parts consumption updating stock with low-stock flags
- Invoice totals from labor and parts
- Mock payment recording
- Reporting on jobs and utilization
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~6 services, sample requests and jobs, parts inventory, invoices, 1 admin, 2 technicians, 2 customers. Provide a seed script and list the demo login credentials in the README.

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
