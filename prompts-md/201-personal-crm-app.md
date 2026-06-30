# KeepInTouch Personal CRM & Relationship Manager

> Help individuals remember the people who matter by logging interactions, setting keep-in-touch reminders, and grouping contacts so no relationship goes cold

| Field | Value |
|---|---|
| **Prompt ID** | 201 |
| **Title** | Personal CRM & Relationship Manager |
| **Slug** | personal-crm-app |
| **Category** | Productivity & Personal |
| **Domain** | Personal Relationship Management |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Indie developers; networkers, freelancers, and busy professionals |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building a private relationship manager for individuals who want to nurture personal and professional contacts; distinct from sales CRMs, plain address books, or team pipeline tools.

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

1. Dashboard with the daily 'who to reach out to' queue and upcoming reminders
2. Contacts list with search, filters, and group segments
3. Contact detail with interaction timeline and relationship-strength badge
4. Add / edit contact form with custom fields and important dates
5. Interaction log timeline across all contacts
6. Reminders and follow-ups calendar with snooze
7. Groups and tags manager
8. Settings (profile and keep-in-touch defaults)
9. Admin console (users and workspace activity)
10. Auth (sign in / register)

## Required features

- Contact profiles with custom fields, company, birthday, and a 'how we met' note
- Interaction logging for calls, meetings, and messages with a per-contact timeline
- Keep-in-touch cadences that surface a daily 'who to reach out to' queue
- Reminders and follow-ups with a calendar, snooze, and completion
- Relationship-strength scoring based on recency and frequency of contact
- Groups and tags to segment contacts into family, work, and network
- Full-text search across contacts, notes, and interactions
- Birthday and important-date tracking with upcoming-date reminders
- CSV import and export of contacts with duplicate detection

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Contact
**Fields:** `id`, `ownerId`, `fullName`, `email`, `phone`, `company`, `howWeMet`, `birthday`, `cadenceDays`, `lastContactedAt`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Interaction
**Fields:** `id`, `contactId`, `ownerId`, `type`, `note`, `occurredAt`, `createdAt`, `updatedAt`

**Relationships:**
- contactId -> references the related record
- ownerId -> references the related record

### Reminder
**Fields:** `id`, `contactId`, `ownerId`, `dueDate`, `message`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- contactId -> references the related record
- ownerId -> references the related record

### Group
**Fields:** `id`, `ownerId`, `name`, `color`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### ContactGroup
**Fields:** `id`, `contactId`, `groupId`, `createdAt`, `updatedAt`

**Relationships:**
- contactId -> references the related record
- groupId -> references the related record

### ImportantDate
**Fields:** `id`, `contactId`, `ownerId`, `label`, `date`, `recurring`, `createdAt`, `updatedAt`

**Relationships:**
- contactId -> references the related record
- ownerId -> references the related record

## Backend logic

- Compute the daily 'who to reach out to' queue from each contact's cadence and lastContactedAt
- Log an interaction, then update the contact's lastContactedAt and recompute its relationship-strength score
- Generate a keep-in-touch reminder when a contact's cadence elapses without contact
- Calculate relationship-strength scores from interaction recency and frequency
- Surface upcoming birthdays and important dates within a configurable window
- Import contacts from a CSV file, deduplicating against existing records by email
- Snooze or complete a reminder and reschedule the next follow-up
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
- [ ] Logging an interaction with a contact updates their lastContactedAt and removes them from today's reach-out queue until their cadence elapses again
- [ ] A contact whose cadence has elapsed appears in the 'who to reach out to' queue and generates a keep-in-touch reminder
- [ ] Importing a CSV row whose email matches an existing contact merges into that contact instead of creating a duplicate

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds personal-productivity apps, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: KeepInTouch Personal CRM & Relationship Manager
Type: Personal CRM & Relationship Manager (Personal Relationship Management)
Target users: individuals such as freelancers, founders, and busy professionals who want to stay in touch with personal and professional contacts, plus an admin who manages the workspace.
Business goal: Help individuals remember the people who matter by logging interactions, setting keep-in-touch reminders, and grouping contacts so no relationship goes cold.

BRAND & DESIGN
Brand style: warm, personable, organized. Colors: warm sand, deep teal, coral accent. A contact-centric dashboard with a 'who to reach out to' queue beside interaction timelines and relationship-strength badges. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with the daily 'who to reach out to' queue and upcoming reminders
2. Contacts list with search, filters, and group segments
3. Contact detail with interaction timeline and relationship-strength badge
4. Add / edit contact form with custom fields and important dates
5. Interaction log timeline across all contacts
6. Reminders and follow-ups calendar with snooze
7. Groups and tags manager
8. Settings (profile and keep-in-touch defaults)
9. Admin console (users and workspace activity)
10. Auth (sign in / register)

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- User — manage their own contacts, log interactions, and set keep-in-touch reminders
- Admin — manage all users, review workspace activity, and configure reminder defaults

CORE FEATURES
- Contact profiles with custom fields, company, birthday, and a 'how we met' note
- Interaction logging for calls, meetings, and messages with a per-contact timeline
- Keep-in-touch cadences that surface a daily 'who to reach out to' queue
- Reminders and follow-ups with a calendar, snooze, and completion
- Relationship-strength scoring based on recency and frequency of contact
- Groups and tags to segment contacts into family, work, and network
- Full-text search across contacts, notes, and interactions
- Birthday and important-date tracking with upcoming-date reminders
- CSV import and export of contacts with duplicate detection

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Contact: id, ownerId, fullName, email, phone, company, howWeMet, birthday, cadenceDays, lastContactedAt, createdAt, updatedAt
- Interaction: id, contactId, ownerId, type, note, occurredAt, createdAt, updatedAt
- Reminder: id, contactId, ownerId, dueDate, message, status, createdAt, updatedAt
- Group: id, ownerId, name, color, createdAt, updatedAt
- ContactGroup: id, contactId, groupId, createdAt, updatedAt
- ImportantDate: id, contactId, ownerId, label, date, recurring, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Compute the daily 'who to reach out to' queue from each contact's cadence and lastContactedAt
- Log an interaction, then update the contact's lastContactedAt and recompute its relationship-strength score
- Generate a keep-in-touch reminder when a contact's cadence elapses without contact
- Calculate relationship-strength scores from interaction recency and frequency
- Surface upcoming birthdays and important dates within a configurable window
- Import contacts from a CSV file, deduplicating against existing records by email
- Snooze or complete a reminder and reschedule the next follow-up
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 30 contacts across 5 groups, ~80 logged interactions, sample reminders and important dates, 1 admin and 2 users. Provide a seed script and list the demo login credentials in the README.

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
