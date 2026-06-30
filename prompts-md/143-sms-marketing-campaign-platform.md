# TextWave SMS Marketing Campaign Platform

> Let teams grow opt-in subscriber lists, send broadcast and scheduled drip text campaigns, track link clicks, and handle inbound replies with consent and compliance controls

| Field | Value |
|---|---|
| **Prompt ID** | 143 |
| **Title** | SMS Marketing Campaign Platform |
| **Slug** | sms-marketing-campaign-platform |
| **Category** | Marketing & Lead Gen |
| **Domain** | SMS & Text Marketing |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Retail marketer; Campaign coordinator |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building SMS marketing software for retailers and local businesses that want compliant, high-engagement text campaigns separate from email.

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

1. Dashboard with subscriber growth, recent campaigns, and reply inbox summary
2. Subscriber lists and contacts with consent status and CSV import
3. Opt-in keyword and web signup form manager
4. Campaign composer with segment, message body, and segment/character counter
5. Drip campaign builder with steps and delays
6. Campaigns list with schedule and delivery status
7. Two-way inbound reply inbox with conversation threads
8. Link click and campaign analytics
9. Auth (sign in / register)
10. Admin: sending numbers, compliance settings, and team

## Required features

- Opt-in subscriber list management with consent status, source, and CSV import
- Keyword and web-form opt-in capture (e.g., text JOIN) with an auto-reply
- Broadcast campaign sending to a list or segment with message segment/character counting
- Scheduled and drip campaigns with steps and configurable delays
- Link shortening with per-campaign click tracking (mock in local mode)
- Two-way messaging with an inbound reply inbox and conversation threads
- Opt-out handling (STOP keyword) with a suppression list and consent log
- Quiet-hours and throughput controls for compliant sending
- Per-campaign analytics for delivery, clicks, replies, and opt-outs

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### SubscriberList
**Fields:** `id`, `name`, `description`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Subscriber
**Fields:** `id`, `listId`, `phoneE164`, `name`, `consentStatus`, `optInSource`, `optInAt`, `optOutAt`, `createdAt`, `updatedAt`

**Relationships:**
- listId -> references the related record

### Campaign
**Fields:** `id`, `listId`, `name`, `type`, `body`, `steps`, `status`, `scheduledAt`, `sentAt`, `createdAt`, `updatedAt`

**Relationships:**
- listId -> references the related record

### Message
**Fields:** `id`, `campaignId`, `subscriberId`, `direction`, `body`, `status`, `segments`, `sentAt`, `createdAt`, `updatedAt`

**Relationships:**
- campaignId -> references the related record
- subscriberId -> references the related record

### ShortLink
**Fields:** `id`, `campaignId`, `slug`, `destinationUrl`, `clickCount`, `createdAt`, `updatedAt`

**Relationships:**
- campaignId -> references the related record

### Keyword
**Fields:** `id`, `listId`, `keyword`, `action`, `replyBody`, `createdAt`, `updatedAt`

**Relationships:**
- listId -> references the related record

## Backend logic

- Capture opt-ins from keywords or web forms, record consent and source, and send an auto-reply
- Queue and mock-send broadcast and drip campaigns to a list or segment, splitting long bodies into message segments
- Shorten campaign links and record clicks through a redirect service
- Receive inbound replies, thread them by subscriber, and process STOP and HELP keywords
- Maintain a suppression list and enforce consent and quiet-hours before any send
- Advance drip subscribers through steps on their configured delays
- Aggregate per-campaign delivery, click, reply, and opt-out metrics
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
- [ ] Sending a campaign respects consent and the suppression list so opted-out subscribers receive no messages
- [ ] An inbound STOP reply opts the subscriber out and adds them to the suppression list, while other replies thread in the reply inbox
- [ ] Clicking a shortened campaign link is tracked and rolls up into the campaign's click metrics

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds SMS and text marketing products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: TextWave SMS Marketing Campaign Platform
Type: SMS Marketing Campaign Platform (SMS & Text Marketing)
Target users: retail marketers who grow opt-in subscriber lists and send compliant text campaigns and campaign coordinators who schedule drips and handle inbound replies.
Business goal: Let teams grow opt-in subscriber lists, send broadcast and scheduled drip text campaigns, track link clicks, and handle inbound replies with consent and compliance controls.

BRAND & DESIGN
Brand style: punchy, immediate, mobile-first. Colors: vivid green, charcoal, bright white. A campaign composer with a live phone preview, a message segment counter, and a two-way reply inbox. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with subscriber growth, recent campaigns, and reply inbox summary
2. Subscriber lists and contacts with consent status and CSV import
3. Opt-in keyword and web signup form manager
4. Campaign composer with segment, message body, and segment/character counter
5. Drip campaign builder with steps and delays
6. Campaigns list with schedule and delivery status
7. Two-way inbound reply inbox with conversation threads
8. Link click and campaign analytics
9. Auth (sign in / register)
10. Admin: sending numbers, compliance settings, and team

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Retail Marketer — manage subscriber lists, send campaigns, and review analytics
- Campaign Coordinator — schedule drips, handle inbound replies, and manage keywords
- Compliance Reviewer — manage consent, opt-outs, and quiet-hours settings
- Admin — manage sending numbers, team, and compliance settings

CORE FEATURES
- Opt-in subscriber list management with consent status, source, and CSV import
- Keyword and web-form opt-in capture (e.g., text JOIN) with an auto-reply
- Broadcast campaign sending to a list or segment with message segment/character counting
- Scheduled and drip campaigns with steps and configurable delays
- Link shortening with per-campaign click tracking (mock in local mode)
- Two-way messaging with an inbound reply inbox and conversation threads
- Opt-out handling (STOP keyword) with a suppression list and consent log
- Quiet-hours and throughput controls for compliant sending
- Per-campaign analytics for delivery, clicks, replies, and opt-outs

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- SubscriberList: id, name, description, createdAt, updatedAt
- Subscriber: id, listId, phoneE164, name, consentStatus, optInSource, optInAt, optOutAt, createdAt, updatedAt
- Campaign: id, listId, name, type, body, steps, status, scheduledAt, sentAt, createdAt, updatedAt
- Message: id, campaignId, subscriberId, direction, body, status, segments, sentAt, createdAt, updatedAt
- ShortLink: id, campaignId, slug, destinationUrl, clickCount, createdAt, updatedAt
- Keyword: id, listId, keyword, action, replyBody, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Capture opt-ins from keywords or web forms, record consent and source, and send an auto-reply
- Queue and mock-send broadcast and drip campaigns to a list or segment, splitting long bodies into message segments
- Shorten campaign links and record clicks through a redirect service
- Receive inbound replies, thread them by subscriber, and process STOP and HELP keywords
- Maintain a suppression list and enforce consent and quiet-hours before any send
- Advance drip subscribers through steps on their configured delays
- Aggregate per-campaign delivery, click, reply, and opt-out metrics
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 2 subscriber lists with ~200 opt-in contacts and consent records, opt-in keywords, broadcast and drip campaigns across draft/scheduled/sent states, shortened links with simulated clicks, sample inbound replies and opt-outs, 1 admin and 2 marketers. Provide a seed script and list the demo login credentials in the README.

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
