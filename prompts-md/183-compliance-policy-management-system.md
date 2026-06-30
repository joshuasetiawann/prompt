# ControlHub Compliance & Policy Management System

> Let compliance teams map regulatory requirements to internal controls, publish policies for employee attestation, schedule control tests and evidence collection, and maintain a risk register with audit-ready trails

| Field | Value |
|---|---|
| **Prompt ID** | 183 |
| **Title** | Compliance & Policy Management System |
| **Slug** | compliance-policy-management-system |
| **Category** | Finance, Legal & HR |
| **Domain** | Governance, Risk & Compliance |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Compliance and risk officers; Employees attesting to policies |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building GRC tooling for compliance officers in regulated mid-market firms, distinct from a generic approval workflow.

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

1. Compliance dashboard (control health, attestations due, and open risks)
2. Requirements library mapped to frameworks with control coverage
3. Controls register with owners, frequency, and last test result
4. Policies library with versioning and attestation campaigns
5. My attestations (read and acknowledge assigned policies)
6. Control testing calendar and evidence collection workspace
7. Risk register with inherent and residual scoring and treatment plans
8. Audit trail and exportable evidence packets
9. Auth (sign in / register)
10. Admin: users, frameworks, and system settings

## Required features

- Requirements library across frameworks with clause references
- Many-to-many mapping of requirements to internal controls with coverage-gap detection
- Policy publishing with version history and effective and review dates
- Attestation campaigns assigning policies to employee groups with due dates and reminders
- Employee attestation flow that records acknowledgment with a timestamp
- Control test scheduling by frequency with evidence upload and pass/fail results
- Risk register with inherent and residual scoring derived from likelihood and impact
- Compliance dashboard summarizing control health, attestation completion, and open risks
- Immutable audit trail and exportable, audit-ready evidence packets

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `department`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Requirement
**Fields:** `id`, `framework`, `clauseRef`, `title`, `description`, `riskCategory`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Control
**Fields:** `id`, `name`, `description`, `ownerId`, `frequency`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### ControlTest
**Fields:** `id`, `controlId`, `scheduledFor`, `status`, `result`, `evidenceUrl`, `testerId`, `completedAt`, `createdAt`, `updatedAt`

**Relationships:**
- controlId -> references the related record
- testerId -> references the related record

### Policy
**Fields:** `id`, `title`, `version`, `body`, `ownerId`, `status`, `effectiveDate`, `reviewDate`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Attestation
**Fields:** `id`, `policyId`, `userId`, `status`, `dueDate`, `attestedAt`, `createdAt`, `updatedAt`

**Relationships:**
- policyId -> references the related record
- userId -> references the related record

### Risk
**Fields:** `id`, `title`, `description`, `ownerId`, `likelihood`, `impact`, `inherentScore`, `residualScore`, `treatmentPlan`, `linkedControlId`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record
- linkedControlId -> references the related record

## Backend logic

- Map regulatory requirements to one or more internal controls (many-to-many) and surface coverage gaps where a requirement has no control
- Publish policies with version history and assign attestation campaigns to employee groups with due dates
- Record employee attestations and report attestation completion per policy
- Schedule recurring control tests by frequency and collect evidence with pass/fail results
- Maintain a risk register with inherent and residual scores computed from likelihood and impact
- Surface a compliance dashboard of control health, attestation status, and open risks
- Write an immutable audit trail for policy changes, attestations, control tests, and risk updates and export evidence packets
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
- [ ] Mapping requirements to controls surfaces coverage gaps where a requirement has no satisfying control
- [ ] An attestation campaign assigns a published policy to employees and records each acknowledgment with a timestamp in the audit trail
- [ ] A scheduled control test captures evidence and a pass/fail result, and the risk register computes residual scores from likelihood and impact

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds governance, risk, and compliance products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: ControlHub Compliance & Policy Management System
Type: Compliance & Policy Management System (Governance, Risk & Compliance)
Target users: compliance and risk officers who map requirements to controls and run attestations and employees who read and attest to published policies.
Business goal: Let compliance teams map regulatory requirements to internal controls, publish policies for employee attestation, schedule control tests and evidence collection, and maintain a risk register with audit-ready trails.

BRAND & DESIGN
Brand style: authoritative, structured, audit-ready. Colors: deep navy, steel grey, compliance green. A control-health dashboard with status tiles beside a risk-register heat map and a policy attestation tracker. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Compliance dashboard (control health, attestations due, and open risks)
2. Requirements library mapped to frameworks with control coverage
3. Controls register with owners, frequency, and last test result
4. Policies library with versioning and attestation campaigns
5. My attestations (read and acknowledge assigned policies)
6. Control testing calendar and evidence collection workspace
7. Risk register with inherent and residual scoring and treatment plans
8. Audit trail and exportable evidence packets
9. Auth (sign in / register)
10. Admin: users, frameworks, and system settings

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Compliance Officer — map requirements to controls, publish policies, and run attestation campaigns
- Risk Officer — maintain the risk register and review control test results
- Employee — read and attest to assigned policies
- Admin — manage users, frameworks, and system settings

CORE FEATURES
- Requirements library across frameworks with clause references
- Many-to-many mapping of requirements to internal controls with coverage-gap detection
- Policy publishing with version history and effective and review dates
- Attestation campaigns assigning policies to employee groups with due dates and reminders
- Employee attestation flow that records acknowledgment with a timestamp
- Control test scheduling by frequency with evidence upload and pass/fail results
- Risk register with inherent and residual scoring derived from likelihood and impact
- Compliance dashboard summarizing control health, attestation completion, and open risks
- Immutable audit trail and exportable, audit-ready evidence packets

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, department, createdAt, updatedAt
- Requirement: id, framework, clauseRef, title, description, riskCategory, createdAt, updatedAt
- Control: id, name, description, ownerId, frequency, status, createdAt, updatedAt
- ControlTest: id, controlId, scheduledFor, status, result, evidenceUrl, testerId, completedAt, createdAt, updatedAt
- Policy: id, title, version, body, ownerId, status, effectiveDate, reviewDate, createdAt, updatedAt
- Attestation: id, policyId, userId, status, dueDate, attestedAt, createdAt, updatedAt
- Risk: id, title, description, ownerId, likelihood, impact, inherentScore, residualScore, treatmentPlan, linkedControlId, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Map regulatory requirements to one or more internal controls (many-to-many) and surface coverage gaps where a requirement has no control
- Publish policies with version history and assign attestation campaigns to employee groups with due dates
- Record employee attestations and report attestation completion per policy
- Schedule recurring control tests by frequency and collect evidence with pass/fail results
- Maintain a risk register with inherent and residual scores computed from likelihood and impact
- Surface a compliance dashboard of control health, attestation status, and open risks
- Write an immutable audit trail for policy changes, attestations, control tests, and risk updates and export evidence packets
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 2 frameworks with ~20 requirements mapped to ~15 internal controls, several published policies with version history and an active attestation campaign, scheduled control tests with collected evidence and pass/fail results, a risk register with inherent and residual scores, audit-trail entries, and demo logins for 1 compliance officer, 1 risk officer, and 3 employees. Provide a seed script and list the demo login credentials in the README.

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
