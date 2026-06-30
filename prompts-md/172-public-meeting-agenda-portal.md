# CouncilDesk Public Meeting & Agenda Management Portal

> Let clerks assemble meeting agendas, route public comment, and record motions and roll-call votes while publishing searchable minutes and a decision archive for councils and boards

| Field | Value |
|---|---|
| **Prompt ID** | 172 |
| **Title** | Public Meeting & Agenda Management Portal |
| **Slug** | public-meeting-agenda-portal |
| **Category** | Community, Civic & Nonprofit |
| **Domain** | Civic Governance & Public Meetings |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Municipal clerks and elected board members; residents submitting public comment |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building governance tools for city councils, school boards, and public commissions.

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

1. Home with upcoming meetings and recent decisions
2. Meeting calendar and detail (agenda, packet, and join info)
3. Agenda builder (ordered items, attachments, and recommended actions)
4. Public comment submission and routing (per agenda item)
5. Live meeting console (call items, record motions, and run roll-call votes)
6. Minutes editor and publication
7. Decision archive (searchable motions, votes, and outcomes)
8. Member account: agendas, conflicts, and voting history
9. Auth (sign in / register)
10. Admin: boards, members, meeting templates, and reports

## Required features

- Agenda builder with ordered, reorderable items, attachments, and recommended actions
- Meeting packet assembly that compiles agenda items and documents into one record
- Public comment intake routed to specific agenda items with display and read-time limits
- Motion recording with mover, seconder, and amendments tied to an agenda item
- Roll-call voting that tallies ayes, nays, and abstentions and computes pass/fail by quorum rules
- Conflict-of-interest declarations that recuse a member from a specific item's vote
- Minutes generation from agenda, motions, and vote results with publication
- Searchable decision archive of motions, votes, and outcomes
- Quorum check based on present members before voting opens

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `boardSeat`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Board
**Fields:** `id`, `name`, `type`, `quorumCount`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Meeting
**Fields:** `id`, `boardId`, `title`, `scheduledAt`, `location`, `status`, `minutesPublishedAt`, `createdAt`, `updatedAt`

**Relationships:**
- boardId -> references the related record

### AgendaItem
**Fields:** `id`, `meetingId`, `position`, `title`, `description`, `recommendedAction`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- meetingId -> references the related record

### PublicComment
**Fields:** `id`, `agendaItemId`, `commenterId`, `body`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- agendaItemId -> references the related record
- commenterId -> references the related record

### Motion
**Fields:** `id`, `agendaItemId`, `moverId`, `seconderId`, `text`, `result`, `createdAt`, `updatedAt`

**Relationships:**
- agendaItemId -> references the related record
- moverId -> references the related record
- seconderId -> references the related record

### VoteRecord
**Fields:** `id`, `motionId`, `memberId`, `vote`, `recused`, `createdAt`, `updatedAt`

**Relationships:**
- motionId -> references the related record
- memberId -> references the related record

## Backend logic

- Assemble agendas from ordered items and compile a meeting packet with attachments
- Route submitted public comment to the correct agenda item and enforce display limits
- Open a meeting for voting only when a quorum of present members is met
- Record motions with mover, seconder, and amendments tied to an agenda item
- Capture roll-call votes and compute pass/fail by quorum and majority rules
- Apply conflict-of-interest recusals that exclude a member from an item's vote
- Generate minutes from agenda, motions, and votes and publish to the decision archive
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
- [ ] Voting on a motion cannot open until a quorum of present members is recorded, and the result is computed by the board's quorum and majority rules
- [ ] A member with a declared conflict of interest is recused and their vote is excluded from that item's tally
- [ ] Publishing minutes compiles the agenda, motions, and vote results into a searchable decision archive entry

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds civic governance and public meeting products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: CouncilDesk Public Meeting & Agenda Management Portal
Type: Public Meeting & Agenda Management Portal (Civic Governance & Public Meetings)
Target users: clerks and board members who assemble agendas and record votes and residents who submit public comment on agenda items.
Business goal: Let clerks assemble meeting agendas, route public comment, and record motions and roll-call votes while publishing searchable minutes and a decision archive for councils and boards.

BRAND & DESIGN
Brand style: formal, orderly, civic. Colors: chamber blue, parchment white, brass gold. An ordered agenda outline with drag-to-reorder items beside a roll-call vote panel tallying ayes and nays. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with upcoming meetings and recent decisions
2. Meeting calendar and detail (agenda, packet, and join info)
3. Agenda builder (ordered items, attachments, and recommended actions)
4. Public comment submission and routing (per agenda item)
5. Live meeting console (call items, record motions, and run roll-call votes)
6. Minutes editor and publication
7. Decision archive (searchable motions, votes, and outcomes)
8. Member account: agendas, conflicts, and voting history
9. Auth (sign in / register)
10. Admin: boards, members, meeting templates, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Clerk — build agendas, route public comment, record motions and votes, and publish minutes
- Board Member — review agendas, declare conflicts, and cast roll-call votes
- Resident — view agendas, submit public comment, and search past decisions
- Admin — manage boards, members, meeting templates, and archives

CORE FEATURES
- Agenda builder with ordered, reorderable items, attachments, and recommended actions
- Meeting packet assembly that compiles agenda items and documents into one record
- Public comment intake routed to specific agenda items with display and read-time limits
- Motion recording with mover, seconder, and amendments tied to an agenda item
- Roll-call voting that tallies ayes, nays, and abstentions and computes pass/fail by quorum rules
- Conflict-of-interest declarations that recuse a member from a specific item's vote
- Minutes generation from agenda, motions, and vote results with publication
- Searchable decision archive of motions, votes, and outcomes
- Quorum check based on present members before voting opens

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, boardSeat, createdAt, updatedAt
- Board: id, name, type, quorumCount, createdAt, updatedAt
- Meeting: id, boardId, title, scheduledAt, location, status, minutesPublishedAt, createdAt, updatedAt
- AgendaItem: id, meetingId, position, title, description, recommendedAction, status, createdAt, updatedAt
- PublicComment: id, agendaItemId, commenterId, body, status, createdAt, updatedAt
- Motion: id, agendaItemId, moverId, seconderId, text, result, createdAt, updatedAt
- VoteRecord: id, motionId, memberId, vote, recused, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Assemble agendas from ordered items and compile a meeting packet with attachments
- Route submitted public comment to the correct agenda item and enforce display limits
- Open a meeting for voting only when a quorum of present members is met
- Record motions with mover, seconder, and amendments tied to an agenda item
- Capture roll-call votes and compute pass/fail by quorum and majority rules
- Apply conflict-of-interest recusals that exclude a member from an item's vote
- Generate minutes from agenda, motions, and votes and publish to the decision archive
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 2 boards with quorum rules and seated members, ~6 meetings across draft, scheduled, and completed statuses, agendas with ordered items and attachments, routed public comments, recorded motions with roll-call votes and a recusal, published minutes, a searchable decision archive, and demo logins for 1 admin, 2 clerks, and 3 board members. Provide a seed script and list the demo login credentials in the README.

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
