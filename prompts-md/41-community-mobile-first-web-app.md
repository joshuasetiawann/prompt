# Hangout Community Mobile-First Web App

> Let members post in a feed, join groups, attend events, and connect via profiles, optimized for mobile

| Field | Value |
|---|---|
| **Prompt ID** | 41 |
| **Title** | Community Mobile-First Web App |
| **Slug** | community-mobile-first-web-app |
| **Category** | Community & Social |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Member; Admin/Moderator |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building mobile-first community or social apps for groups and local networks.

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

1. Auth/onboarding
2. Feed (posts, likes, comments)
3. Groups list and group detail
4. Events list and event detail (RSVP)
5. Create post
6. Profile and edit profile
7. Notifications
8. Admin/moderation (lightweight)

## Required features

- Mobile-first feed with posts, likes, and comments
- Groups members can join, with group feeds
- Events with RSVP and attendee lists
- Profiles with bio and activity
- In-app notifications concept (likes, comments, RSVPs)
- Bottom-tab navigation and app-like interactions
- Lightweight moderation tools

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Profile
**Fields:** `id`, `userId`, `bio`, `avatar`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### Group
**Fields:** `id`, `name`, `description`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### GroupMember
**Fields:** `id`, `groupId`, `userId`, `createdAt`, `updatedAt`

**Relationships:**
- groupId -> references the related record
- userId -> references the related record

### Post
**Fields:** `id`, `authorId`, `groupId`, `body`, `createdAt`, `updatedAt`

**Relationships:**
- authorId -> references the related record
- groupId -> references the related record

### Comment
**Fields:** `id`, `postId`, `authorId`, `body`, `createdAt`, `updatedAt`

**Relationships:**
- postId -> references the related record
- authorId -> references the related record

### Reaction
**Fields:** `id`, `postId`, `userId`, `type`, `createdAt`, `updatedAt`

**Relationships:**
- postId -> references the related record
- userId -> references the related record

### Event
**Fields:** `id`, `groupId`, `title`, `datetime`, `location`, `createdAt`, `updatedAt`

**Relationships:**
- groupId -> references the related record

### RSVP
**Fields:** `id`, `eventId`, `userId`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- eventId -> references the related record
- userId -> references the related record

### Notification
**Fields:** `id`, `userId`, `type`, `refId`, `read`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record
- refId -> references the related record

## Backend logic

- Feed creation with comments and reactions
- Group join/leave and group-scoped feeds
- Event RSVP and attendee aggregation
- Notification generation on interactions
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
- [ ] The layout feels app-like and works well at mobile width
- [ ] RSVPs update attendee counts and the user's events
- [ ] Notifications appear for likes, comments, and RSVPs

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds mobile-first social and community web apps, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: Hangout Community Mobile-First Web App
Type: Community Mobile-First Web App (Community & Social)
Target users: members of a local or interest-based community connecting on mobile.
Business goal: Let members post in a feed, join groups, attend events, and connect via profiles, optimized for mobile.

BRAND & DESIGN
Brand style: friendly, lively, community-first. Colors: coral, white, deep teal accent. Clean, modern, app-like mobile layout with a bottom tab bar and thumb-friendly controls. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Auth/onboarding
2. Feed (posts, likes, comments)
3. Groups list and group detail
4. Events list and event detail (RSVP)
5. Create post
6. Profile and edit profile
7. Notifications
8. Admin/moderation (lightweight)

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Member — post, join groups, RSVP, connect
- Admin/Moderator — manage groups, events, and moderate content

CORE FEATURES
- Mobile-first feed with posts, likes, and comments
- Groups members can join, with group feeds
- Events with RSVP and attendee lists
- Profiles with bio and activity
- In-app notifications concept (likes, comments, RSVPs)
- Bottom-tab navigation and app-like interactions
- Lightweight moderation tools

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Profile: id, userId, bio, avatar, createdAt, updatedAt
- Group: id, name, description, createdAt, updatedAt
- GroupMember: id, groupId, userId, createdAt, updatedAt
- Post: id, authorId, groupId, body, createdAt, updatedAt
- Comment: id, postId, authorId, body, createdAt, updatedAt
- Reaction: id, postId, userId, type, createdAt, updatedAt
- Event: id, groupId, title, datetime, location, createdAt, updatedAt
- RSVP: id, eventId, userId, status, createdAt, updatedAt
- Notification: id, userId, type, refId, read, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Feed creation with comments and reactions
- Group join/leave and group-scoped feeds
- Event RSVP and attendee aggregation
- Notification generation on interactions
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~20 members, several groups, posts/comments/reactions, upcoming events with RSVPs, notifications, 1 admin and 2 members. Provide a seed script and list the demo login credentials in the README.

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
