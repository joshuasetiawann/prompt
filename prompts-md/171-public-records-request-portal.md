# OpenRecords Public Records Request Portal

> Let citizens submit public-records requests and track their status while agency staff triage, assign, meet statutory deadlines, redact, release, and publish a searchable disclosure log

| Field | Value |
|---|---|
| **Prompt ID** | 171 |
| **Title** | Public Records Request Portal |
| **Slug** | public-records-request-portal |
| **Category** | Community, Civic & Nonprofit |
| **Domain** | Government Transparency & Records Requests |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Agency records officers; requesting citizens and journalists |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building transparency and records-request tools for government agencies and public bodies.

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

1. Home with how-to-request guidance and the public disclosure log
2. Request submission form (subject, description, requester type, delivery format)
3. Request tracking page (status, deadline, and messages for the requester)
4. Officer dashboard with intake queue, deadlines, and overdue alerts
5. Request detail (triage, assignment, exemptions, and document handling)
6. Redaction and release workspace (mark exemptions and publish responsive records)
7. Public disclosure log (searchable archive of released requests and documents)
8. Requester account: my requests and downloads
9. Auth (sign in / register)
10. Admin: agencies, fee schedule, exemption codes, and reports

## Required features

- Public request intake with subject, description, requester type, and preferred delivery format
- Triage and assignment routing requests to the responsible department liaison
- Statutory deadline tracking with configurable response windows, extensions, and overdue alerts
- Threaded clarification messaging between officer and requester with private internal notes
- Responsive-document upload with redaction marking against exemption codes
- Fee estimation for copying and search time with mock invoicing
- Release workflow that finalizes documents and notifies the requester
- Searchable public disclosure log of released requests and documents
- Status timeline and audit trail for every request action

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `agencyId`, `createdAt`, `updatedAt`

**Relationships:**
- agencyId -> references the related record

### Agency
**Fields:** `id`, `name`, `jurisdiction`, `responseDays`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Request
**Fields:** `id`, `agencyId`, `requesterId`, `referenceNo`, `subject`, `description`, `requesterType`, `status`, `dueDate`, `createdAt`, `updatedAt`

**Relationships:**
- agencyId -> references the related record
- requesterId -> references the related record

### RequestMessage
**Fields:** `id`, `requestId`, `senderId`, `body`, `internal`, `createdAt`, `updatedAt`

**Relationships:**
- requestId -> references the related record
- senderId -> references the related record

### Document
**Fields:** `id`, `requestId`, `fileName`, `fileUrl`, `redacted`, `exemptionCode`, `released`, `createdAt`, `updatedAt`

**Relationships:**
- requestId -> references the related record

### Exemption
**Fields:** `id`, `code`, `name`, `statuteRef`, `description`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### FeeInvoice
**Fields:** `id`, `requestId`, `searchHours`, `copyPages`, `amount`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- requestId -> references the related record

## Backend logic

- Generate a tracking reference and route new requests into the triage queue
- Assign requests to a department liaison and compute the statutory due date from the agency response window
- Track deadlines, apply extensions, and raise overdue alerts as windows lapse
- Exchange clarification messages between officer and requester while keeping internal notes private
- Attach responsive documents, mark redactions against exemption codes, and gate release
- Estimate fees from search hours and copy pages and record a mock invoice
- Release finalized documents to the requester and publish the request to the disclosure log
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
- [ ] A new request is assigned a tracking reference and a statutory due date computed from the agency response window, and appears as overdue once the window lapses
- [ ] A document cannot be released until redactions are marked against valid exemption codes, and released documents appear in the public disclosure log
- [ ] Internal officer notes are never visible to the requester on the tracking page

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds government transparency and records-request products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: OpenRecords Public Records Request Portal
Type: Public Records Request Portal (Government Transparency & Records Requests)
Target users: citizens and journalists who file public-records requests and agency records officers who triage, track deadlines, and release responsive documents.
Business goal: Let citizens submit public-records requests and track their status while agency staff triage, assign, meet statutory deadlines, redact, release, and publish a searchable disclosure log.

BRAND & DESIGN
Brand style: official, transparent, accessible. Colors: government navy, clean white, signal amber. A request queue with statutory-deadline countdown chips beside a public disclosure log of released records. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with how-to-request guidance and the public disclosure log
2. Request submission form (subject, description, requester type, delivery format)
3. Request tracking page (status, deadline, and messages for the requester)
4. Officer dashboard with intake queue, deadlines, and overdue alerts
5. Request detail (triage, assignment, exemptions, and document handling)
6. Redaction and release workspace (mark exemptions and publish responsive records)
7. Public disclosure log (searchable archive of released requests and documents)
8. Requester account: my requests and downloads
9. Auth (sign in / register)
10. Admin: agencies, fee schedule, exemption codes, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Requester — submit records requests, track status, and download released documents
- Records Officer — triage, assign, set deadlines, manage redaction, and release responses
- Department Liaison — search for responsive records and upload them for review
- Admin — manage agencies, fee schedules, exemptions, and reports

CORE FEATURES
- Public request intake with subject, description, requester type, and preferred delivery format
- Triage and assignment routing requests to the responsible department liaison
- Statutory deadline tracking with configurable response windows, extensions, and overdue alerts
- Threaded clarification messaging between officer and requester with private internal notes
- Responsive-document upload with redaction marking against exemption codes
- Fee estimation for copying and search time with mock invoicing
- Release workflow that finalizes documents and notifies the requester
- Searchable public disclosure log of released requests and documents
- Status timeline and audit trail for every request action

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, agencyId, createdAt, updatedAt
- Agency: id, name, jurisdiction, responseDays, createdAt, updatedAt
- Request: id, agencyId, requesterId, referenceNo, subject, description, requesterType, status, dueDate, createdAt, updatedAt
- RequestMessage: id, requestId, senderId, body, internal, createdAt, updatedAt
- Document: id, requestId, fileName, fileUrl, redacted, exemptionCode, released, createdAt, updatedAt
- Exemption: id, code, name, statuteRef, description, createdAt, updatedAt
- FeeInvoice: id, requestId, searchHours, copyPages, amount, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Generate a tracking reference and route new requests into the triage queue
- Assign requests to a department liaison and compute the statutory due date from the agency response window
- Track deadlines, apply extensions, and raise overdue alerts as windows lapse
- Exchange clarification messages between officer and requester while keeping internal notes private
- Attach responsive documents, mark redactions against exemption codes, and gate release
- Estimate fees from search hours and copy pages and record a mock invoice
- Release finalized documents to the requester and publish the request to the disclosure log
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 agency with a statutory response window, ~30 records requests across triage, in-progress, overdue, and released statuses, clarification message threads, uploaded documents with redactions against exemption codes, sample fee invoices, a populated public disclosure log, and demo logins for 1 admin, 2 records officers, and 3 requesters. Provide a seed script and list the demo login credentials in the README.

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
