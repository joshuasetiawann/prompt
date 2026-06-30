# ClauseGuard AI Contract Review & Risk Analysis System

> Upload contracts, extract and score risky clauses, and suggest safer redlines

| Field | Value |
|---|---|
| **Prompt ID** | 197 |
| **Title** | AI Contract Review & Risk Analysis System |
| **Slug** | ai-contract-review-system |
| **Category** | AI Apps |
| **Domain** | Contract Review & Risk Analysis |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Reviewer; Legal Admin; Admin |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building AI contract-review tools for legal teams, procurement, and startup founders.

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

1. Auth (sign in / sign up)
2. Dashboard with contracts overview and risk summary
3. Upload and import contract
4. Contract review workspace with clause-by-clause flags
5. Risk summary report
6. Clause library
7. Playbook and policy settings
8. Review history and audit trail
9. Settings
10. Admin console (users and review activity)

## Required features

- Contract upload and text parsing
- Clause extraction and classification by type
- Per-clause risk scoring with rationale
- Suggested safer redlines and rewrites
- Clause-library matching against standard templates
- Playbook policy checks with violation flags
- Exportable risk summary report
- Side-by-side comparison of original and suggested wording
- Audit trail of accept, edit, and reject decisions

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `organization`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Contract
**Fields:** `id`, `userId`, `title`, `fileName`, `contractType`, `status`, `overallRiskScore`, `parties`, `effectiveDate`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### Clause
**Fields:** `id`, `contractId`, `clauseType`, `text`, `position`, `riskLevel`, `riskScore`, `rationale`, `createdAt`, `updatedAt`

**Relationships:**
- contractId -> references the related record

### Suggestion
**Fields:** `id`, `clauseId`, `userId`, `suggestedText`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- clauseId -> references the related record
- userId -> references the related record

### PlaybookRule
**Fields:** `id`, `userId`, `name`, `clauseType`, `condition`, `severity`, `guidance`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### ClauseTemplate
**Fields:** `id`, `userId`, `clauseType`, `title`, `standardText`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### ReviewLog
**Fields:** `id`, `contractId`, `userId`, `action`, `detail`, `createdAt`, `updatedAt`

**Relationships:**
- contractId -> references the related record
- userId -> references the related record

## Backend logic

- Contract text extraction and segmentation of uploaded files into individual clauses
- Clause classification and risk scoring that calls an AI provider behind one interface to label clause type, assign a risk level, and explain the rationale
- Redline suggestion generation that proposes safer wording per flagged clause via the AI interface
- Playbook rule evaluation that checks each contract against configured policy rules and flags violations
- Clause-library matching that compares contract clauses against standard templates and highlights deviations
- Risk summary aggregation that rolls clause scores into an overall contract risk score and exportable report
- Review-decision logging that records accept, edit, and reject actions to the audit trail
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
- [ ] Clause classification, risk scoring, and redline suggestions run in offline mock mode with deterministic output and no paid API keys
- [ ] Uploading a contract produces segmented clauses each with a risk level, score, and rationale
- [ ] Accepting or editing a suggestion is recorded in the contract's audit trail

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds AI contract-review platforms, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: ClauseGuard AI Contract Review & Risk Analysis System
Type: AI Contract Review & Risk Analysis System (Contract Review & Risk Analysis)
Target users: legal reviewers analyzing contracts and admins managing clause libraries and risk policies.
Business goal: Upload contracts, extract and score risky clauses, and suggest safer redlines.

BRAND & DESIGN
Brand style: precise, trustworthy, professional. Colors: navy, slate, amber accent. Two-pane review workspace with the contract text on the left and a risk-flagged clause panel on the right. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Auth (sign in / sign up)
2. Dashboard with contracts overview and risk summary
3. Upload and import contract
4. Contract review workspace with clause-by-clause flags
5. Risk summary report
6. Clause library
7. Playbook and policy settings
8. Review history and audit trail
9. Settings
10. Admin console (users and review activity)

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Reviewer — upload contracts, review flagged risks, and accept or edit suggestions
- Legal Admin — manage clause libraries, risk playbooks, and standard templates
- Admin — manage users and monitor review activity

CORE FEATURES
- Contract upload and text parsing
- Clause extraction and classification by type
- Per-clause risk scoring with rationale
- Suggested safer redlines and rewrites
- Clause-library matching against standard templates
- Playbook policy checks with violation flags
- Exportable risk summary report
- Side-by-side comparison of original and suggested wording
- Audit trail of accept, edit, and reject decisions

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, organization, createdAt, updatedAt
- Contract: id, userId, title, fileName, contractType, status, overallRiskScore, parties, effectiveDate, createdAt, updatedAt
- Clause: id, contractId, clauseType, text, position, riskLevel, riskScore, rationale, createdAt, updatedAt
- Suggestion: id, clauseId, userId, suggestedText, status, createdAt, updatedAt
- PlaybookRule: id, userId, name, clauseType, condition, severity, guidance, createdAt, updatedAt
- ClauseTemplate: id, userId, clauseType, title, standardText, createdAt, updatedAt
- ReviewLog: id, contractId, userId, action, detail, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Contract text extraction and segmentation of uploaded files into individual clauses
- Clause classification and risk scoring that calls an AI provider behind one interface to label clause type, assign a risk level, and explain the rationale
- Redline suggestion generation that proposes safer wording per flagged clause via the AI interface
- Playbook rule evaluation that checks each contract against configured policy rules and flags violations
- Clause-library matching that compares contract clauses against standard templates and highlights deviations
- Risk summary aggregation that rolls clause scores into an overall contract risk score and exportable report
- Review-decision logging that records accept, edit, and reject actions to the audit trail
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- AI: implement a deterministic, offline mock AI provider behind one interface; switch to a real model (OpenAI/Anthropic) via an env var, defaulting to mock so it runs with no keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 5 sample contracts, ~30 extracted clauses, a starter clause library and playbook rules, 1 admin, 1 legal admin and 2 reviewers. Provide a seed script and list the demo login credentials in the README.

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
