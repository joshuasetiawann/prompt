# VeriFlow KYC & AML Customer Onboarding Platform

> Let regulated businesses onboard customers through tiered KYC, collect identity documents, run mock sanctions and PEP screening, assign risk scores, and route flagged cases through a compliance review and approval queue with full audit logging

| Field | Value |
|---|---|
| **Prompt ID** | 185 |
| **Title** | KYC & AML Customer Onboarding Platform |
| **Slug** | kyc-aml-onboarding-platform |
| **Category** | Finance, Legal & HR |
| **Domain** | Identity Verification & Compliance |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Compliance analysts and onboarding officers; Customers completing verification |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building onboarding and due-diligence flows for fintechs, banks, and regulated marketplaces.

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

1. Customer onboarding wizard (tiered: profile, documents, and review)
2. Document upload and per-document verification status
3. Onboarding status tracker for the applicant
4. Compliance dashboard (pipeline by stage, flagged cases, and SLA)
5. Case review queue filtered by risk, status, and screening result
6. Case detail (profile, documents, screening hits, risk score, and decision)
7. Screening results and watchlist match explorer
8. Audit log viewer
9. Auth (sign in / register)
10. Admin: KYC tiers, screening lists, risk rules, and users

## Required features

- Tiered KYC flows that scale required documents and checks by customer tier
- Identity document upload with per-document verification status
- Mock sanctions, PEP, and adverse-media screening with stored match results
- Risk scoring that combines screening hits, country, and customer attributes into a level
- Automated routing: clear low-risk to approval, hits or high-risk to the review queue
- Compliance case review with approve, reject, and request-more-information decisions
- Customer-facing onboarding status tracker
- Configurable KYC tiers, screening lists, and risk rules
- Full immutable audit logging of every document, screening, and decision

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Applicant
**Fields:** `id`, `userId`, `fullName`, `dateOfBirth`, `nationality`, `address`, `kycTier`, `riskScore`, `riskLevel`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### IdentityDocument
**Fields:** `id`, `applicantId`, `docType`, `fileUrl`, `status`, `verifiedAt`, `createdAt`, `updatedAt`

**Relationships:**
- applicantId -> references the related record

### ScreeningResult
**Fields:** `id`, `applicantId`, `screeningType`, `matchStatus`, `matchDetailsJson`, `score`, `screenedAt`, `createdAt`, `updatedAt`

**Relationships:**
- applicantId -> references the related record

### RiskAssessment
**Fields:** `id`, `applicantId`, `factorsJson`, `riskScore`, `riskLevel`, `tier`, `assessedAt`, `createdAt`, `updatedAt`

**Relationships:**
- applicantId -> references the related record

### CaseReview
**Fields:** `id`, `applicantId`, `assigneeId`, `status`, `decision`, `notes`, `decidedAt`, `createdAt`, `updatedAt`

**Relationships:**
- applicantId -> references the related record
- assigneeId -> references the related record

### AuditLog
**Fields:** `id`, `actorId`, `applicantId`, `action`, `detailsJson`, `occurredAt`, `createdAt`, `updatedAt`

**Relationships:**
- actorId -> references the related record
- applicantId -> references the related record

## Backend logic

- Onboard applicants through tiered KYC requirements that determine which documents and checks are needed
- Collect and verify identity documents with per-document status tracking
- Run mock sanctions, PEP, and adverse-media screening and store match results
- Compute a risk score and level from screening hits, country, and applicant attributes
- Auto-route clear low-risk applicants to approval and flag matches or high risk into the review queue
- Let compliance analysts review flagged cases and approve, reject, or request more information
- Write an immutable audit log for every document, screening, decision, and status change
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
- [ ] A higher KYC tier requires more documents and checks before an application can be submitted
- [ ] Screening produces clear, potential, and confirmed matches, and a potential or confirmed match routes the case into the review queue instead of auto-approval
- [ ] Every document upload, screening run, and approval or rejection decision is recorded in an immutable, filterable audit log

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds identity verification and compliance products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: VeriFlow KYC & AML Customer Onboarding Platform
Type: KYC & AML Customer Onboarding Platform (Identity Verification & Compliance)
Target users: compliance analysts and onboarding officers who review flagged cases and customers who complete tiered identity verification.
Business goal: Let regulated businesses onboard customers through tiered KYC, collect identity documents, run mock sanctions and PEP screening, assign risk scores, and route flagged cases through a compliance review and approval queue with full audit logging.

BRAND & DESIGN
Brand style: secure, precise, regulated. Colors: deep midnight blue, verification green, alert amber. A case-review queue with risk-score badges beside an applicant detail panel showing documents, screening hits, and an audit timeline. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Customer onboarding wizard (tiered: profile, documents, and review)
2. Document upload and per-document verification status
3. Onboarding status tracker for the applicant
4. Compliance dashboard (pipeline by stage, flagged cases, and SLA)
5. Case review queue filtered by risk, status, and screening result
6. Case detail (profile, documents, screening hits, risk score, and decision)
7. Screening results and watchlist match explorer
8. Audit log viewer
9. Auth (sign in / register)
10. Admin: KYC tiers, screening lists, risk rules, and users

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Compliance Analyst — review flagged cases and screening hits and approve or reject applications
- Onboarding Officer — manage applications, verify documents, and progress cases
- Customer/Applicant — complete tiered verification and upload identity documents
- Admin — configure KYC tiers, screening lists, risk rules, and users

CORE FEATURES
- Tiered KYC flows that scale required documents and checks by customer tier
- Identity document upload with per-document verification status
- Mock sanctions, PEP, and adverse-media screening with stored match results
- Risk scoring that combines screening hits, country, and customer attributes into a level
- Automated routing: clear low-risk to approval, hits or high-risk to the review queue
- Compliance case review with approve, reject, and request-more-information decisions
- Customer-facing onboarding status tracker
- Configurable KYC tiers, screening lists, and risk rules
- Full immutable audit logging of every document, screening, and decision

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Applicant: id, userId, fullName, dateOfBirth, nationality, address, kycTier, riskScore, riskLevel, status, createdAt, updatedAt
- IdentityDocument: id, applicantId, docType, fileUrl, status, verifiedAt, createdAt, updatedAt
- ScreeningResult: id, applicantId, screeningType, matchStatus, matchDetailsJson, score, screenedAt, createdAt, updatedAt
- RiskAssessment: id, applicantId, factorsJson, riskScore, riskLevel, tier, assessedAt, createdAt, updatedAt
- CaseReview: id, applicantId, assigneeId, status, decision, notes, decidedAt, createdAt, updatedAt
- AuditLog: id, actorId, applicantId, action, detailsJson, occurredAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Onboard applicants through tiered KYC requirements that determine which documents and checks are needed
- Collect and verify identity documents with per-document status tracking
- Run mock sanctions, PEP, and adverse-media screening and store match results
- Compute a risk score and level from screening hits, country, and applicant attributes
- Auto-route clear low-risk applicants to approval and flag matches or high risk into the review queue
- Let compliance analysts review flagged cases and approve, reject, or request more information
- Write an immutable audit log for every document, screening, decision, and status change
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~25 applicants across KYC tiers and stages (draft, screening, review, approved, rejected), uploaded identity documents with verification statuses, mock sanctions/PEP/adverse-media screening results with clear and potential matches, computed risk scores and levels, flagged cases in the review queue, audit-log entries, and demo logins for 1 admin, 2 compliance analysts, and 2 applicants. Provide a seed script and list the demo login credentials in the README.

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
