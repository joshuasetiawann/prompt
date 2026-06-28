# Congregate Community Organization Portal

> Give a community organization one place for members, events, groups, announcements, and volunteering

| Field | Value |
|---|---|
| **Prompt ID** | 63 |
| **Title** | Community Organization Portal |
| **Slug** | community-organization-portal |
| **Category** | Community & Organizations |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Member; Admin/Leader |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building portals for community organizations, congregations, clubs, and associations.

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
2. Member dashboard (upcoming events, announcements)
3. Events list and event detail (RSVP)
4. Groups and group detail
5. Announcements
6. Volunteer signups
7. Giving (mock) and history
8. Member directory
9. Admin: members, events, groups, and content

## Required features

- Member directory and profiles
- Events with RSVP and attendance
- Groups members can join with group pages
- Announcements (org- and group-level)
- Volunteer opportunities and signups
- Optional giving (mock) with history
- Role-scoped admin management

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Member
**Fields:** `id`, `userId`, `joinedAt`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### Group
**Fields:** `id`, `name`, `description`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### GroupMember
**Fields:** `id`, `groupId`, `memberId`, `createdAt`, `updatedAt`

**Relationships:**
- groupId -> references the related record
- memberId -> references the related record

### Event
**Fields:** `id`, `groupId`, `title`, `datetime`, `location`, `createdAt`, `updatedAt`

**Relationships:**
- groupId -> references the related record

### RSVP
**Fields:** `id`, `eventId`, `memberId`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- eventId -> references the related record
- memberId -> references the related record

### Announcement
**Fields:** `id`, `scope`, `groupId`, `title`, `body`, `createdAt`, `updatedAt`

**Relationships:**
- groupId -> references the related record

### VolunteerSlot
**Fields:** `id`, `eventId`, `role`, `capacity`, `createdAt`, `updatedAt`

**Relationships:**
- eventId -> references the related record

### Signup
**Fields:** `id`, `volunteerSlotId`, `memberId`, `createdAt`, `updatedAt`

**Relationships:**
- volunteerSlotId -> references the related record
- memberId -> references the related record

## Backend logic

- Event RSVP and attendance aggregation
- Group membership and group feeds
- Announcement distribution by scope
- Volunteer signups with capacity
- Admin management of members and content
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
- [ ] RSVPs update event attendance counts
- [ ] Volunteer slots stop at capacity
- [ ] Members see announcements relevant to their groups

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds membership and engagement portals for community organizations, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: Congregate Community Organization Portal
Type: Community Organization Portal (Community & Organizations)
Target users: organization admins and members coordinating events, groups, and communications.
Business goal: Give a community organization one place for members, events, groups, announcements, and volunteering.

BRAND & DESIGN
Brand style: warm, welcoming, community-first. Colors: indigo, amber accent, white. Clean, modern, friendly portal with events, groups, and announcements. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Auth
2. Member dashboard (upcoming events, announcements)
3. Events list and event detail (RSVP)
4. Groups and group detail
5. Announcements
6. Volunteer signups
7. Giving (mock) and history
8. Member directory
9. Admin: members, events, groups, and content

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Member — RSVP, join groups, volunteer, give
- Admin/Leader — manage members, events, groups, and announcements

CORE FEATURES
- Member directory and profiles
- Events with RSVP and attendance
- Groups members can join with group pages
- Announcements (org- and group-level)
- Volunteer opportunities and signups
- Optional giving (mock) with history
- Role-scoped admin management

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Member: id, userId, joinedAt, createdAt, updatedAt
- Group: id, name, description, createdAt, updatedAt
- GroupMember: id, groupId, memberId, createdAt, updatedAt
- Event: id, groupId, title, datetime, location, createdAt, updatedAt
- RSVP: id, eventId, memberId, status, createdAt, updatedAt
- Announcement: id, scope, groupId, title, body, createdAt, updatedAt
- VolunteerSlot: id, eventId, role, capacity, createdAt, updatedAt
- Signup: id, volunteerSlotId, memberId, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Event RSVP and attendance aggregation
- Group membership and group feeds
- Announcement distribution by scope
- Volunteer signups with capacity
- Admin management of members and content
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~20 members, several groups and events with RSVPs, announcements, volunteer slots, 1 admin and 2 members. Provide a seed script and list the demo login credentials in the README.

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
