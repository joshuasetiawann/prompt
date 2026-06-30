# VendorGuard Vendor Management & Compliance Portal

> Onboard and qualify vendors, store their contracts and compliance documents, track renewal and expiry deadlines, and score ongoing supplier performance

| Field | Value |
|---|---|
| **Prompt ID** | 119 |
| **Title** | Vendor Management & Compliance Portal |
| **Slug** | vendor-management-compliance-portal |
| **Category** | Business Operations |
| **Domain** | Vendor & Supplier Management |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Vendor and procurement managers; Compliance officers |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building vendor-lifecycle and supplier-compliance tools for procurement and operations teams (distinct from a buyer ordering portal).

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

1. Dashboard with onboarding pipeline, expiring documents, and risk flags
2. Vendor directory with category, status, and risk filters
3. Vendor profile with documents, contracts, and scorecard
4. Vendor onboarding application (multi-step)
5. Document review and verification queue
6. Compliance/expiry calendar with renewal reminders
7. Performance review and scorecard entry
8. Vendor portal: upload and update documents (vendor-facing)
9. Auth (sign in / register)
10. Admin: document types, qualification rules, and reports

## Required features

- Multi-step vendor onboarding with required-field and document gating
- Document vault for contracts, certifications, insurance, and tax forms with versions
- Expiry tracking with renewal reminders and automatic non-compliant flagging
- Verification workflow where compliance staff approve or reject uploaded documents
- Qualification status driven by document completeness and validity
- Periodic performance scorecards across quality, delivery, and responsiveness
- Risk rating combining compliance gaps and performance scores
- Vendor self-service portal to update details and re-upload expiring documents
- Compliance and performance reports by category and risk tier

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `vendorId`, `createdAt`, `updatedAt`

**Relationships:**
- vendorId -> references the related record

### Vendor
**Fields:** `id`, `name`, `category`, `contactEmail`, `status`, `qualificationStatus`, `riskRating`, `onboardedAt`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### DocumentType
**Fields:** `id`, `name`, `category`, `requiresExpiry`, `requiredForQualification`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### ComplianceDocument
**Fields:** `id`, `vendorId`, `documentTypeId`, `fileUrl`, `issueDate`, `expiryDate`, `verificationStatus`, `verifiedById`, `createdAt`, `updatedAt`

**Relationships:**
- vendorId -> references the related record
- documentTypeId -> references the related record
- verifiedById -> references the related record

### OnboardingApplication
**Fields:** `id`, `vendorId`, `step`, `status`, `submittedAt`, `reviewedById`, `createdAt`, `updatedAt`

**Relationships:**
- vendorId -> references the related record
- reviewedById -> references the related record

### PerformanceReview
**Fields:** `id`, `vendorId`, `reviewerId`, `period`, `qualityScore`, `deliveryScore`, `responsivenessScore`, `overallScore`, `comment`, `createdAt`, `updatedAt`

**Relationships:**
- vendorId -> references the related record
- reviewerId -> references the related record

### Contract
**Fields:** `id`, `vendorId`, `title`, `fileUrl`, `startDate`, `endDate`, `value`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- vendorId -> references the related record

## Backend logic

- Advance vendors through onboarding steps, gating completion on required fields and mandatory documents
- Verify uploaded documents and recompute the vendor's qualification status from document validity and completeness
- Track document expiry dates, surface upcoming renewals, and auto-flag vendors as non-compliant when documents lapse
- Capture periodic performance reviews and compute a weighted overall supplier score
- Derive a vendor risk rating by combining compliance gaps with recent performance scores
- Send renewal reminders for documents and contracts approaching their expiry windows
- Aggregate compliance and performance reports by vendor category and risk tier
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
- [ ] A vendor missing a required document or holding an expired certification cannot reach qualified status
- [ ] A document past its expiry date flags its vendor as non-compliant and appears on the renewal calendar
- [ ] Submitting a performance review recomputes the vendor's overall score and risk rating

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds vendor and supplier management products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: VendorGuard Vendor Management & Compliance Portal
Type: Vendor Management & Compliance Portal (Vendor & Supplier Management)
Target users: procurement managers who onboard and qualify vendors and compliance officers who track certifications, insurance, and supplier performance.
Business goal: Onboard and qualify vendors, store their contracts and compliance documents, track renewal and expiry deadlines, and score ongoing supplier performance.

BRAND & DESIGN
Brand style: professional, trustworthy, organized. Colors: deep green, slate, white. A vendor scorecard layout with a compliance-document tracker and a color-coded expiry calendar. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with onboarding pipeline, expiring documents, and risk flags
2. Vendor directory with category, status, and risk filters
3. Vendor profile with documents, contracts, and scorecard
4. Vendor onboarding application (multi-step)
5. Document review and verification queue
6. Compliance/expiry calendar with renewal reminders
7. Performance review and scorecard entry
8. Vendor portal: upload and update documents (vendor-facing)
9. Auth (sign in / register)
10. Admin: document types, qualification rules, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Vendor — complete onboarding and upload compliance documents
- Vendor Manager — review applications, qualify vendors, and score performance
- Compliance Officer — verify certifications and insurance and track expiries
- Admin — manage document types, qualification rules, and reports

CORE FEATURES
- Multi-step vendor onboarding with required-field and document gating
- Document vault for contracts, certifications, insurance, and tax forms with versions
- Expiry tracking with renewal reminders and automatic non-compliant flagging
- Verification workflow where compliance staff approve or reject uploaded documents
- Qualification status driven by document completeness and validity
- Periodic performance scorecards across quality, delivery, and responsiveness
- Risk rating combining compliance gaps and performance scores
- Vendor self-service portal to update details and re-upload expiring documents
- Compliance and performance reports by category and risk tier

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, vendorId, createdAt, updatedAt
- Vendor: id, name, category, contactEmail, status, qualificationStatus, riskRating, onboardedAt, createdAt, updatedAt
- DocumentType: id, name, category, requiresExpiry, requiredForQualification, createdAt, updatedAt
- ComplianceDocument: id, vendorId, documentTypeId, fileUrl, issueDate, expiryDate, verificationStatus, verifiedById, createdAt, updatedAt
- OnboardingApplication: id, vendorId, step, status, submittedAt, reviewedById, createdAt, updatedAt
- PerformanceReview: id, vendorId, reviewerId, period, qualityScore, deliveryScore, responsivenessScore, overallScore, comment, createdAt, updatedAt
- Contract: id, vendorId, title, fileUrl, startDate, endDate, value, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Advance vendors through onboarding steps, gating completion on required fields and mandatory documents
- Verify uploaded documents and recompute the vendor's qualification status from document validity and completeness
- Track document expiry dates, surface upcoming renewals, and auto-flag vendors as non-compliant when documents lapse
- Capture periodic performance reviews and compute a weighted overall supplier score
- Derive a vendor risk rating by combining compliance gaps with recent performance scores
- Send renewal reminders for documents and contracts approaching their expiry windows
- Aggregate compliance and performance reports by vendor category and risk tier
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~12 vendors across categories and onboarding stages, document types for insurance, certifications, and tax forms, compliance documents in valid, expiring, and expired states, sample contracts, periodic performance scorecards, 1 admin, 1 vendor manager, 1 compliance officer, and 3 vendor users. Provide a seed script and list the demo login credentials in the README.

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
