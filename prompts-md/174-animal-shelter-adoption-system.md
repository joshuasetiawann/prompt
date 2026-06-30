# PawHaven Animal Shelter Adoption Management System

> Let shelters manage animal intake and medical records, publish adoptable-animal profiles, screen adoption and foster applications, and coordinate adoption events and follow-ups

| Field | Value |
|---|---|
| **Prompt ID** | 174 |
| **Title** | Animal Shelter Adoption Management System |
| **Slug** | animal-shelter-adoption-system |
| **Category** | Community, Civic & Nonprofit |
| **Domain** | Animal Welfare & Adoption |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Shelter staff and foster coordinators; adopters and foster volunteers |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building management tools for animal shelters, rescues, and humane societies.

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

1. Home with adoptable highlights and upcoming events
2. Adoptable-animal catalog with species, size, age, and status filters
3. Animal profile (photos, story, temperament, and adoption status)
4. Adoption/foster application form
5. Staff dashboard (intake queue, animals in care, and pending applications)
6. Animal intake and medical record workspace (vaccinations, treatments, and notes)
7. Application review and matching (screen, approve, and assign)
8. Adoption events calendar and coordination
9. Auth (sign in / register)
10. Admin: shelters, staff, events, and reports

## Required features

- Animal intake with species, breed, age, and source, generating a kennel record
- Medical record tracking for vaccinations, treatments, spay/neuter, and microchip with next-due dates
- Public adoptable-animal catalog with photos, filters, and live adoption status
- Adoption and foster application intake with a screening questionnaire
- Application review workflow that approves, declines, or waitlists with notes
- Animal-to-adopter/foster matching that updates status and prevents double-placement
- Adoption event scheduling with an animal lineup and attendee coordination
- Post-adoption follow-up scheduling and check-in logging
- Status lifecycle from intake through available, pending, adopted, or fostered

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Animal
**Fields:** `id`, `name`, `species`, `breed`, `sex`, `ageMonths`, `intakeDate`, `status`, `photos`, `story`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### MedicalRecord
**Fields:** `id`, `animalId`, `recordType`, `description`, `vetName`, `performedAt`, `nextDueAt`, `createdAt`, `updatedAt`

**Relationships:**
- animalId -> references the related record

### Application
**Fields:** `id`, `animalId`, `applicantId`, `type`, `status`, `answersJson`, `reviewerId`, `createdAt`, `updatedAt`

**Relationships:**
- animalId -> references the related record
- applicantId -> references the related record
- reviewerId -> references the related record

### Placement
**Fields:** `id`, `animalId`, `adopterId`, `type`, `startDate`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- animalId -> references the related record
- adopterId -> references the related record

### AdoptionEvent
**Fields:** `id`, `name`, `location`, `startsAt`, `capacity`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### FollowUp
**Fields:** `id`, `placementId`, `dueDate`, `status`, `notes`, `completedAt`, `createdAt`, `updatedAt`

**Relationships:**
- placementId -> references the related record

## Backend logic

- Record animal intake and create a kennel record with an initial in-care status
- Track medical records for vaccinations, treatments, and spay/neuter with next-due dates
- Publish available animals to the public catalog and keep adoption status in sync
- Accept adoption and foster applications and route them into the review queue
- Apply review decisions to approve, decline, or waitlist applications with notes
- Match an approved applicant to an animal, create a placement, and prevent double-placement
- Schedule adoption events with an animal lineup and log post-adoption follow-ups
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
- [ ] An animal marked adopted or in a pending placement no longer appears as available in the public catalog and cannot be double-placed
- [ ] Approving an application creates a placement that updates the animal's status and schedules a post-adoption follow-up
- [ ] An animal's medical record shows vaccinations and treatments with next-due dates surfaced to staff

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds animal welfare and adoption products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: PawHaven Animal Shelter Adoption Management System
Type: Animal Shelter Adoption Management System (Animal Welfare & Adoption)
Target users: shelter staff who manage intake, medical records, and applications and adopters and foster volunteers who browse animals and apply.
Business goal: Let shelters manage animal intake and medical records, publish adoptable-animal profiles, screen adoption and foster applications, and coordinate adoption events and follow-ups.

BRAND & DESIGN
Brand style: warm, caring, friendly. Colors: rescue teal, soft cream, hopeful coral. A photo-led grid of adoptable-animal cards with status badges beside a staff intake and medical record panel. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with adoptable highlights and upcoming events
2. Adoptable-animal catalog with species, size, age, and status filters
3. Animal profile (photos, story, temperament, and adoption status)
4. Adoption/foster application form
5. Staff dashboard (intake queue, animals in care, and pending applications)
6. Animal intake and medical record workspace (vaccinations, treatments, and notes)
7. Application review and matching (screen, approve, and assign)
8. Adoption events calendar and coordination
9. Auth (sign in / register)
10. Admin: shelters, staff, events, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Shelter Staff — manage intake, medical records, animal profiles, and applications
- Foster Coordinator — match animals to fosters and track placements
- Adopter/Foster — browse animals, apply to adopt or foster, and follow up
- Admin — manage shelters, staff, events, and reports

CORE FEATURES
- Animal intake with species, breed, age, and source, generating a kennel record
- Medical record tracking for vaccinations, treatments, spay/neuter, and microchip with next-due dates
- Public adoptable-animal catalog with photos, filters, and live adoption status
- Adoption and foster application intake with a screening questionnaire
- Application review workflow that approves, declines, or waitlists with notes
- Animal-to-adopter/foster matching that updates status and prevents double-placement
- Adoption event scheduling with an animal lineup and attendee coordination
- Post-adoption follow-up scheduling and check-in logging
- Status lifecycle from intake through available, pending, adopted, or fostered

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Animal: id, name, species, breed, sex, ageMonths, intakeDate, status, photos, story, createdAt, updatedAt
- MedicalRecord: id, animalId, recordType, description, vetName, performedAt, nextDueAt, createdAt, updatedAt
- Application: id, animalId, applicantId, type, status, answersJson, reviewerId, createdAt, updatedAt
- Placement: id, animalId, adopterId, type, startDate, status, createdAt, updatedAt
- AdoptionEvent: id, name, location, startsAt, capacity, status, createdAt, updatedAt
- FollowUp: id, placementId, dueDate, status, notes, completedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Record animal intake and create a kennel record with an initial in-care status
- Track medical records for vaccinations, treatments, and spay/neuter with next-due dates
- Publish available animals to the public catalog and keep adoption status in sync
- Accept adoption and foster applications and route them into the review queue
- Apply review decisions to approve, decline, or waitlist applications with notes
- Match an approved applicant to an animal, create a placement, and prevent double-placement
- Schedule adoption events with an animal lineup and log post-adoption follow-ups
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 shelter with ~30 animals across species and statuses (in care, available, pending, adopted, fostered), medical records with vaccinations and spay/neuter, ~20 adoption and foster applications in mixed review states, placements with follow-ups, 2 upcoming adoption events with animal lineups, and demo logins for 1 admin, 2 staff, and 3 adopters. Provide a seed script and list the demo login credentials in the README.

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
