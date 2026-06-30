# BenefitBridge Employee Benefits & Open Enrollment Portal

> Let HR configure benefit plans and enrollment windows while employees compare options, add dependents, elect coverage, and upload documents, with eligibility rules, life-event changes, and carrier-ready exports

| Field | Value |
|---|---|
| **Prompt ID** | 182 |
| **Title** | Employee Benefits & Open Enrollment Portal |
| **Slug** | employee-benefits-enrollment-portal |
| **Category** | Finance, Legal & HR |
| **Domain** | Benefits Administration |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | HR/benefits administrators and brokers; Employees enrolling in plans |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building benefits-administration portals for employers and brokers.

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

1. Employee benefits home with current coverage and open enrollment windows
2. Plan comparison (side-by-side plans, tiers, premiums, and per-paycheck costs)
3. Enrollment wizard (select plans, add dependents, review costs, and confirm)
4. Dependents management with secure document uploads
5. Life-event reporting and special enrollment
6. My coverage summary and confirmation statement
7. HR: plan and enrollment-window configuration
8. HR: enrollment review queue and approvals
9. HR: carrier exports and eligibility reports
10. Auth (sign in / register)

## Required features

- Configurable benefit plans across medical, dental, vision, life, and retirement with tiers and premiums
- Enrollment windows by type (open enrollment, new-hire, and life-event) with open and close dates
- Side-by-side plan comparison with per-paycheck employee and employer cost estimates
- Guided enrollment wizard with dependent selection and coverage review
- Dependent management with secure document upload for birth and marriage certificates
- Eligibility rules that filter which plans and tiers an employee can elect
- Qualifying life-event changes that trigger special enrollment windows
- HR enrollment review and approval queue
- Carrier-ready export files of elected coverage and covered dependents

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `hireDate`, `employmentStatus`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### BenefitPlan
**Fields:** `id`, `carrierName`, `planType`, `planName`, `coverageDetails`, `monthlyPremium`, `employerContribution`, `eligibilityRules`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### EnrollmentWindow
**Fields:** `id`, `name`, `windowType`, `startsAt`, `endsAt`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Dependent
**Fields:** `id`, `employeeId`, `firstName`, `lastName`, `relationship`, `dateOfBirth`, `ssnLast4`, `documentsJson`, `createdAt`, `updatedAt`

**Relationships:**
- employeeId -> references the related record

### Enrollment
**Fields:** `id`, `employeeId`, `windowId`, `status`, `effectiveDate`, `submittedAt`, `reviewerId`, `createdAt`, `updatedAt`

**Relationships:**
- employeeId -> references the related record
- windowId -> references the related record
- reviewerId -> references the related record

### ElectionItem
**Fields:** `id`, `enrollmentId`, `planId`, `coverageTier`, `coveredDependentIds`, `employeeCost`, `employerCost`, `createdAt`, `updatedAt`

**Relationships:**
- enrollmentId -> references the related record
- planId -> references the related record

### LifeEvent
**Fields:** `id`, `employeeId`, `eventType`, `eventDate`, `status`, `documentsJson`, `windowId`, `createdAt`, `updatedAt`

**Relationships:**
- employeeId -> references the related record
- windowId -> references the related record

## Backend logic

- Configure benefit plans with tiers, premiums, employer contributions, and eligibility rules
- Open and close enrollment windows by type and enforce per-employee enrollment deadlines
- Evaluate plan eligibility for an employee and surface only eligible plans and tiers
- Calculate per-paycheck employee and employer costs from elections and coverage tier
- Validate an enrollment for required documents and dependent data and move it through draft, submitted, and approved
- Process qualifying life events that open a special enrollment window and adjust coverage
- Generate carrier-ready enrollment exports of elected coverage and covered dependents per carrier
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
- [ ] An employee sees only eligible plans and tiers, and the enrollment wizard recomputes per-paycheck employee and employer costs as elections change
- [ ] Reporting a qualifying life event opens a special enrollment window and lets the employee adjust coverage outside open enrollment
- [ ] A submitted enrollment moves through HR approval and is included in a carrier-ready export of elected coverage and covered dependents

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds benefits administration products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: BenefitBridge Employee Benefits & Open Enrollment Portal
Type: Employee Benefits & Open Enrollment Portal (Benefits Administration)
Target users: HR and benefits administrators who configure plans and enrollment windows and employees who compare options, add dependents, and elect coverage.
Business goal: Let HR configure benefit plans and enrollment windows while employees compare options, add dependents, elect coverage, and upload documents, with eligibility rules, life-event changes, and carrier-ready exports.

BRAND & DESIGN
Brand style: reassuring, clear, trustworthy. Colors: calm navy, fresh green, soft white. A side-by-side plan comparison layout with per-paycheck cost cards beside a guided enrollment wizard with a progress stepper. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Employee benefits home with current coverage and open enrollment windows
2. Plan comparison (side-by-side plans, tiers, premiums, and per-paycheck costs)
3. Enrollment wizard (select plans, add dependents, review costs, and confirm)
4. Dependents management with secure document uploads
5. Life-event reporting and special enrollment
6. My coverage summary and confirmation statement
7. HR: plan and enrollment-window configuration
8. HR: enrollment review queue and approvals
9. HR: carrier exports and eligibility reports
10. Auth (sign in / register)

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- HR/Benefits Administrator — configure plans and windows, review enrollments, and run carrier exports
- Broker — view plan configuration and enrollment reports across the group
- Employee — compare plans, add dependents, elect coverage, and report life events
- Admin — manage users, carriers, and portal settings

CORE FEATURES
- Configurable benefit plans across medical, dental, vision, life, and retirement with tiers and premiums
- Enrollment windows by type (open enrollment, new-hire, and life-event) with open and close dates
- Side-by-side plan comparison with per-paycheck employee and employer cost estimates
- Guided enrollment wizard with dependent selection and coverage review
- Dependent management with secure document upload for birth and marriage certificates
- Eligibility rules that filter which plans and tiers an employee can elect
- Qualifying life-event changes that trigger special enrollment windows
- HR enrollment review and approval queue
- Carrier-ready export files of elected coverage and covered dependents

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, hireDate, employmentStatus, createdAt, updatedAt
- BenefitPlan: id, carrierName, planType, planName, coverageDetails, monthlyPremium, employerContribution, eligibilityRules, status, createdAt, updatedAt
- EnrollmentWindow: id, name, windowType, startsAt, endsAt, status, createdAt, updatedAt
- Dependent: id, employeeId, firstName, lastName, relationship, dateOfBirth, ssnLast4, documentsJson, createdAt, updatedAt
- Enrollment: id, employeeId, windowId, status, effectiveDate, submittedAt, reviewerId, createdAt, updatedAt
- ElectionItem: id, enrollmentId, planId, coverageTier, coveredDependentIds, employeeCost, employerCost, createdAt, updatedAt
- LifeEvent: id, employeeId, eventType, eventDate, status, documentsJson, windowId, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Configure benefit plans with tiers, premiums, employer contributions, and eligibility rules
- Open and close enrollment windows by type and enforce per-employee enrollment deadlines
- Evaluate plan eligibility for an employee and surface only eligible plans and tiers
- Calculate per-paycheck employee and employer costs from elections and coverage tier
- Validate an enrollment for required documents and dependent data and move it through draft, submitted, and approved
- Process qualifying life events that open a special enrollment window and adjust coverage
- Generate carrier-ready enrollment exports of elected coverage and covered dependents per carrier
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 employer group with an open enrollment window and a new-hire window, ~10 benefit plans across medical, dental, vision, life, and retirement tiers with premiums and eligibility rules, ~12 employees with dependents and mixed enrollment states, a qualifying life event, a sample carrier export, and demo logins for 1 HR admin, 1 broker, and 3 employees. Provide a seed script and list the demo login credentials in the README.

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
