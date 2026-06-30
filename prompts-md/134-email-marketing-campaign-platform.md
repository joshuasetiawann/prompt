# Mailforge Email Marketing Campaign Platform

> Let teams build subscriber lists, segment audiences with rules, design and send campaigns, and run drip automations with open, click, and unsubscribe analytics

| Field | Value |
|---|---|
| **Prompt ID** | 134 |
| **Title** | Email Marketing Campaign Platform |
| **Slug** | email-marketing-campaign-platform |
| **Category** | Marketing & Lead Gen |
| **Domain** | Email Marketing & Automation |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Marketing manager; Newsletter creator |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers and agencies building a Mailchimp-style email tool for small businesses and newsletter creators who want to own their list and sending.

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

1. Dashboard with recent campaigns and audience growth
2. Subscriber lists and contacts with CSV import
3. Segment builder with rules and live count preview
4. Campaign list and campaign detail
5. Email designer with drag-and-drop blocks
6. Automation builder for drip sequences with triggers and delays
7. Campaign analytics with opens, clicks, unsubscribes, and bounces
8. Public subscription preferences and unsubscribe page
9. Auth (sign in / register)
10. Admin: team, sending settings, and templates
11. Public hosted signup-form landing page (capture form plus the double opt-in confirmation result screen)
12. Subscriber detail page with an engagement timeline of that contact's opens, clicks, sends, and unsubscribe events

## Required features

- Subscriber list management with CSV import and double opt-in handling
- Rule-based segmentation on fields and behavior with a live count preview
- Drag-and-drop email designer with reusable blocks and saved templates
- Campaign scheduling and mock sending to a target list or segment
- Drip automation builder with triggers, delays, and conditional branches
- Open tracking via pixel and click tracking via wrapped links (mock in local mode)
- Unsubscribe handling with a public preferences page and suppression list
- Per-campaign analytics for open rate, click rate, unsubscribe rate, and bounces
- A/B subject-line testing on a sample before the full send
- Hosted, embeddable subscriber signup form that captures new contacts into a list and runs them through double opt-in confirmation before they become subscribed
- CSV export of a list or saved segment, plus a downloadable per-campaign analytics report (opens, clicks, unsubscribes, bounces)

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### ContactList
**Fields:** `id`, `name`, `description`, `defaultFromName`, `defaultFromEmail`, `doubleOptInEnabled`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Subscriber
**Fields:** `id`, `listId`, `email`, `name`, `status`, `source`, `subscribedAt`, `tags`, `attributes`, `country`, `lastOpenedAt`, `lastClickedAt`, `confirmToken`, `confirmedAt`, `createdAt`, `updatedAt`

**Relationships:**
- listId -> references the related record

### Segment
**Fields:** `id`, `listId`, `name`, `rules`, `createdAt`, `updatedAt`

**Relationships:**
- listId -> references the related record

### Campaign
**Fields:** `id`, `listId`, `segmentId`, `name`, `subject`, `fromName`, `htmlContent`, `status`, `scheduledAt`, `sentAt`, `fromEmail`, `replyToEmail`, `abTestEnabled`, `subjectVariantB`, `abSamplePercent`, `abWinnerVariant`, `createdAt`, `updatedAt`

**Relationships:**
- listId -> references the related record
- segmentId -> references the related record

### Automation
**Fields:** `id`, `listId`, `name`, `triggerType`, `steps`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- listId -> references the related record

### EmailEvent
**Fields:** `id`, `campaignId`, `automationId`, `subscriberId`, `type`, `linkUrl`, `occurredAt`, `createdAt`, `updatedAt`

**Relationships:**
- campaignId -> references the related record
- automationId -> references the related record
- subscriberId -> references the related record

### Template
**Fields:** `id`, `createdById`, `name`, `description`, `category`, `htmlContent`, `blocks`, `thumbnailUrl`, `isShared`, `createdAt`, `updatedAt`

**Relationships:**
- createdById -> references the related record

## Backend logic

- Import subscribers into a list with deduplication and double opt-in status
- Evaluate segment rules against subscriber fields and behavior to produce a live audience count
- Render a campaign from email-designer blocks and queue a mock send to the target list or segment
- Track opens via pixel and clicks via wrapped links, recording email events per subscriber
- Run drip automations by advancing subscribers through steps on triggers and delays
- Process unsubscribes through the preferences page and maintain a suppression list
- Aggregate per-campaign open, click, unsubscribe, and bounce rates for analytics
- Handle public signup-form submissions: create a pending subscriber, issue a double opt-in confirmation token, and only mark them subscribed when the confirmation link is followed
- Run an A/B subject-line test by sending each variant to a sample slice, selecting the higher open-rate subject after a test window, and sending the winner to the remaining audience
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
- [ ] A segment's live count updates as its rules change, and a campaign sends only to the matching audience
- [ ] Mock sends generate open, click, and unsubscribe events that roll up into per-campaign open, click, and unsubscribe rates
- [ ] Unsubscribing through the public preferences page adds the contact to the suppression list and excludes them from future sends
- [ ] An A/B subject-line test sends variants to a sample of the audience, picks the higher open-rate subject, and sends only the winning subject to the remaining recipients
- [ ] A public signup-form submission creates a pending subscriber that becomes 'subscribed' only after the double opt-in confirmation link is followed, recording the list and source

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds email marketing and automation products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: Mailforge Email Marketing Campaign Platform
Type: Email Marketing Campaign Platform (Email Marketing & Automation)
Target users: marketing managers who build segmented lists and run campaigns and newsletter creators who design emails and automate drip sequences.
Business goal: Let teams build subscriber lists, segment audiences with rules, design and send campaigns, and run drip automations with open, click, and unsubscribe analytics.

BRAND & DESIGN
Brand style: friendly, energetic, modern. Colors: electric coral #FF5A45, ink navy #0E1B2E, off-white cream #FBF7F1, with mint #14B17F and amber #E89324 status accents. Signature layout: a split campaign workspace pairing a drag-and-drop email canvas with a live segment-count sidebar and rounded analytics KPI cards; pair Plus Jakarta Sans for headings/UI with IBM Plex Mono for stats, rates, and counts. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with recent campaigns and audience growth
2. Subscriber lists and contacts with CSV import
3. Segment builder with rules and live count preview
4. Campaign list and campaign detail
5. Email designer with drag-and-drop blocks
6. Automation builder for drip sequences with triggers and delays
7. Campaign analytics with opens, clicks, unsubscribes, and bounces
8. Public subscription preferences and unsubscribe page
9. Auth (sign in / register)
10. Admin: team, sending settings, and templates
11. Public hosted signup-form landing page (capture form plus the double opt-in confirmation result screen)
12. Subscriber detail page with an engagement timeline of that contact's opens, clicks, sends, and unsubscribe events

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Marketing Manager — manage subscriber lists, segments, campaigns, and automations
- Newsletter Creator — design email content and schedule campaign sends
- Analyst — review open, click, and unsubscribe analytics
- Admin — manage team members, sending settings, and the template library

CORE FEATURES
- Subscriber list management with CSV import and double opt-in handling
- Rule-based segmentation on fields and behavior with a live count preview
- Drag-and-drop email designer with reusable blocks and saved templates
- Campaign scheduling and mock sending to a target list or segment
- Drip automation builder with triggers, delays, and conditional branches
- Open tracking via pixel and click tracking via wrapped links (mock in local mode)
- Unsubscribe handling with a public preferences page and suppression list
- Per-campaign analytics for open rate, click rate, unsubscribe rate, and bounces
- A/B subject-line testing on a sample before the full send
- Hosted, embeddable subscriber signup form that captures new contacts into a list and runs them through double opt-in confirmation before they become subscribed
- CSV export of a list or saved segment, plus a downloadable per-campaign analytics report (opens, clicks, unsubscribes, bounces)

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- ContactList: id, name, description, defaultFromName, defaultFromEmail, doubleOptInEnabled, createdAt, updatedAt
- Subscriber: id, listId, email, name, status, source, subscribedAt, tags, attributes, country, lastOpenedAt, lastClickedAt, confirmToken, confirmedAt, createdAt, updatedAt
- Segment: id, listId, name, rules, createdAt, updatedAt
- Campaign: id, listId, segmentId, name, subject, fromName, htmlContent, status, scheduledAt, sentAt, fromEmail, replyToEmail, abTestEnabled, subjectVariantB, abSamplePercent, abWinnerVariant, createdAt, updatedAt
- Automation: id, listId, name, triggerType, steps, status, createdAt, updatedAt
- EmailEvent: id, campaignId, automationId, subscriberId, type, linkUrl, occurredAt, createdAt, updatedAt
- Template: id, createdById, name, description, category, htmlContent, blocks, thumbnailUrl, isShared, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Import subscribers into a list with deduplication and double opt-in status
- Evaluate segment rules against subscriber fields and behavior to produce a live audience count
- Render a campaign from email-designer blocks and queue a mock send to the target list or segment
- Track opens via pixel and clicks via wrapped links, recording email events per subscriber
- Run drip automations by advancing subscribers through steps on triggers and delays
- Process unsubscribes through the preferences page and maintain a suppression list
- Aggregate per-campaign open, click, unsubscribe, and bounce rates for analytics
- Handle public signup-form submissions: create a pending subscriber, issue a double opt-in confirmation token, and only mark them subscribed when the confirmation link is followed
- Run an A/B subject-line test by sending each variant to a sample slice, selecting the higher open-rate subject after a test window, and sending the winner to the remaining audience
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 3 contact lists with ~300 subscribers, a few segments with rules, sample campaigns in draft, scheduled, and sent states, a drip automation, simulated open/click/unsubscribe events, 1 admin and 2 marketers. Provide a seed script and list the demo login credentials in the README.

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
