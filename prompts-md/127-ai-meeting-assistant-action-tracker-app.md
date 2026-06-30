# ScribeFlow AI Meeting Notes & Action-Item Tracker

> Let teams upload or record meetings, get AI transcripts, summaries, and auto-extracted action items assigned to owners with due dates, and track those items to completion across workspaces

| Field | Value |
|---|---|
| **Prompt ID** | 127 |
| **Title** | AI Meeting Notes & Action-Item Tracker |
| **Slug** | ai-meeting-assistant-action-tracker-app |
| **Category** | AI Apps |
| **Domain** | Meeting Intelligence & Productivity |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Meeting organizer; Team member assigned action items; Workspace admin |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building meeting-intelligence tools for distributed teams and agencies that run many calls; product teams wanting a self-hosted alternative to commercial note-takers.

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

1. Dashboard with recent meetings, my action items, and overdue tasks
2. Upload / record meeting (audio file or live capture)
3. Meeting detail with synced transcript, summary, and extracted action items
4. Action-item tracker board across meetings with owners and due dates
5. My tasks view filtered by status and due date
6. Search across transcripts, summaries, and action items
7. Workspace members and roles
8. Auth (sign in / register)
9. Admin: workspaces, members, and integration settings
10. Settings: notification and processing preferences

## Required features

- Audio upload and in-browser recording with a processing queue and status
- AI transcription producing a speaker-labeled, timestamped transcript
- AI meeting summary with decisions and discussion highlights
- Automatic action-item extraction with suggested owner and due date
- Action items assignable to members and tracked through open, in-progress, and done
- Transcript-to-summary linking so each item references its source moment
- Full-text search across transcripts, summaries, and action items
- Per-workspace data isolation with member roles
- Overdue and upcoming action-item notifications (mock email log)

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Workspace
**Fields:** `id`, `name`, `ownerId`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Membership
**Fields:** `id`, `workspaceId`, `userId`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- workspaceId -> references the related record
- userId -> references the related record

### Meeting
**Fields:** `id`, `workspaceId`, `organizerId`, `title`, `audioUrl`, `durationSeconds`, `status`, `meetingDate`, `createdAt`, `updatedAt`

**Relationships:**
- workspaceId -> references the related record
- organizerId -> references the related record

### Transcript
**Fields:** `id`, `meetingId`, `language`, `segments`, `createdAt`, `updatedAt`

**Relationships:**
- meetingId -> references the related record

### Summary
**Fields:** `id`, `meetingId`, `overview`, `decisions`, `highlights`, `createdAt`, `updatedAt`

**Relationships:**
- meetingId -> references the related record

### ActionItem
**Fields:** `id`, `meetingId`, `assigneeId`, `title`, `dueDate`, `status`, `sourceTimestamp`, `createdAt`, `updatedAt`

**Relationships:**
- meetingId -> references the related record
- assigneeId -> references the related record

## Backend logic

- Accept uploaded or recorded audio, enqueue it, and track processing status through to completion
- Transcribe meeting audio into a speaker-labeled, timestamped transcript via the AI provider
- Generate a structured summary with decisions and highlights from the transcript
- Extract action items from the transcript with a suggested owner, due date, and source timestamp
- Assign action items to workspace members and advance their status to completion
- Provide full-text search across transcripts, summaries, and action items within a workspace
- Send mock notifications for newly assigned, upcoming, and overdue action items
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
- [ ] A processed meeting produces a timestamped transcript, a summary, and at least one extracted action item
- [ ] Extracted action items can be assigned to a member and tracked to done, updating that member's task list
- [ ] With no AI key set, transcription, summary, and extraction use a deterministic mock so the full flow runs locally

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds meeting-intelligence and productivity products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: ScribeFlow AI Meeting Notes & Action-Item Tracker
Type: AI Meeting Notes & Action-Item Tracker (Meeting Intelligence & Productivity)
Target users: meeting organizers who upload recordings and review AI notes and team members who get assigned action items tracked to completion across the workspace.
Business goal: Let teams upload or record meetings, get AI transcripts, summaries, and auto-extracted action items assigned to owners with due dates, and track those items to completion across workspaces.

BRAND & DESIGN
Brand style: smart, calm, productive. Colors: midnight blue, teal, warm white. A meeting timeline with a synced transcript pane, a summary card, and an action-item checklist sidebar. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with recent meetings, my action items, and overdue tasks
2. Upload / record meeting (audio file or live capture)
3. Meeting detail with synced transcript, summary, and extracted action items
4. Action-item tracker board across meetings with owners and due dates
5. My tasks view filtered by status and due date
6. Search across transcripts, summaries, and action items
7. Workspace members and roles
8. Auth (sign in / register)
9. Admin: workspaces, members, and integration settings
10. Settings: notification and processing preferences

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Meeting Organizer — upload or record meetings and review AI notes and action items
- Team Member — view notes and complete assigned action items
- Workspace Admin — manage members, workspaces, and integrations

CORE FEATURES
- Audio upload and in-browser recording with a processing queue and status
- AI transcription producing a speaker-labeled, timestamped transcript
- AI meeting summary with decisions and discussion highlights
- Automatic action-item extraction with suggested owner and due date
- Action items assignable to members and tracked through open, in-progress, and done
- Transcript-to-summary linking so each item references its source moment
- Full-text search across transcripts, summaries, and action items
- Per-workspace data isolation with member roles
- Overdue and upcoming action-item notifications (mock email log)

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Workspace: id, name, ownerId, createdAt, updatedAt
- Membership: id, workspaceId, userId, role, createdAt, updatedAt
- Meeting: id, workspaceId, organizerId, title, audioUrl, durationSeconds, status, meetingDate, createdAt, updatedAt
- Transcript: id, meetingId, language, segments, createdAt, updatedAt
- Summary: id, meetingId, overview, decisions, highlights, createdAt, updatedAt
- ActionItem: id, meetingId, assigneeId, title, dueDate, status, sourceTimestamp, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Accept uploaded or recorded audio, enqueue it, and track processing status through to completion
- Transcribe meeting audio into a speaker-labeled, timestamped transcript via the AI provider
- Generate a structured summary with decisions and highlights from the transcript
- Extract action items from the transcript with a suggested owner, due date, and source timestamp
- Assign action items to workspace members and advance their status to completion
- Provide full-text search across transcripts, summaries, and action items within a workspace
- Send mock notifications for newly assigned, upcoming, and overdue action items
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- AI: implement a deterministic, offline mock AI provider behind one interface; switch to a real model (OpenAI/Anthropic) via an env var, defaulting to mock so it runs with no keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 workspace with members, ~8 meetings with mock transcripts and summaries, auto-extracted action items in open, in-progress, and done states with due dates, 1 admin, 2 organizers, and 3 team members. Provide a seed script and list the demo login credentials in the README.

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
