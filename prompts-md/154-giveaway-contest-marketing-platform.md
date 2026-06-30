# ViralLoop Giveaway & Contest Marketing Platform

> Let brands run viral giveaways with multiple entry methods and referral bonuses, screen out fraud and duplicates, and select winners through a verifiable random draw

| Field | Value |
|---|---|
| **Prompt ID** | 154 |
| **Title** | Giveaway & Contest Marketing Platform |
| **Slug** | giveaway-contest-marketing-platform |
| **Category** | Marketing & Lead Gen |
| **Domain** | Viral Giveaways & Contests |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Brand marketer; Contest entrant |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building giveaway/contest marketing software (Gleam/KingSumo alternative) for brands and creators running list-growth and engagement campaigns.

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

1. Marketing home with featured live giveaways
2. Campaign builder (entry methods, prizes, rules, schedule)
3. Public giveaway entry page with entry methods and live counter
4. Entrant dashboard with my entries and referral link
5. Campaign analytics (entries, referrals, conversion funnel)
6. Winner selection and verification page (random draw and audit log)
7. Fraud and duplicate review queue
8. Auth (sign in / register)
9. Admin: organizations, plans, and platform settings
10. Settings: branding, email, and embed integrations

## Required features

- Campaign builder with multiple weighted entry methods (email signup, social follow, daily visit, referral)
- Bonus referral entries via unique referral links with full attribution tracking
- Live entry counter and real-time leaderboard of top referrers
- Fraud and duplicate detection by email, IP, and device fingerprint with disposable-email blocking
- Verifiable randomized winner selection using a published seed and audit trail
- Winner notification and prize-claim workflow with a claim deadline and reassignment on forfeit
- Embeddable giveaway widget and hosted campaign landing pages
- Campaign analytics with entry-source funnel and referral conversion rates
- Mock email notifications for entry confirmation, referral milestones, and winner alerts

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Organization
**Fields:** `id`, `name`, `ownerId`, `plan`, `logoUrl`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Campaign
**Fields:** `id`, `organizationId`, `title`, `slug`, `prizeDescription`, `status`, `startsAt`, `endsAt`, `winnerCount`, `createdAt`, `updatedAt`

**Relationships:**
- organizationId -> references the related record

### EntryMethod
**Fields:** `id`, `campaignId`, `type`, `label`, `pointValue`, `config`, `createdAt`, `updatedAt`

**Relationships:**
- campaignId -> references the related record

### Entrant
**Fields:** `id`, `campaignId`, `email`, `name`, `referralCode`, `referredById`, `ipAddress`, `deviceFingerprint`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- campaignId -> references the related record
- referredById -> references the related record

### Entry
**Fields:** `id`, `entrantId`, `entryMethodId`, `points`, `verified`, `createdAt`, `updatedAt`

**Relationships:**
- entrantId -> references the related record
- entryMethodId -> references the related record

### Winner
**Fields:** `id`, `campaignId`, `entrantId`, `drawSeed`, `claimStatus`, `claimDeadline`, `createdAt`, `updatedAt`

**Relationships:**
- campaignId -> references the related record
- entrantId -> references the related record

## Backend logic

- Record entries per method with weighted point values and award bonus entries for completed referrals
- Generate unique referral codes and links and attribute downstream entrants to the referring entrant
- Detect duplicate and fraudulent entries by email, IP, and device fingerprint and flag or disqualify them
- Run a verifiable random winner draw weighted by entry points using a published seed, recording an audit trail
- Manage the winner claim workflow with deadlines, reassigning the draw when a winner forfeits
- Aggregate campaign analytics: entries by source, referral conversion, and entries over time
- Send mock notifications for entry confirmations, referral milestones, and winner alerts
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
- [ ] Completing a referral link awards bonus entries to the referrer and attributes the new entrant to them
- [ ] Duplicate entries from the same email, IP, or device are flagged and excluded from the winner draw
- [ ] Running a draw selects winners weighted by entry points and produces a reproducible, auditable result from the published seed

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds viral giveaway and contest marketing products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: ViralLoop Giveaway & Contest Marketing Platform
Type: Giveaway & Contest Marketing Platform (Viral Giveaways & Contests)
Target users: brand marketers who launch giveaways, screen entries, and pick verified winners and contest entrants who join campaigns and earn bonus referral entries.
Business goal: Let brands run viral giveaways with multiple entry methods and referral bonuses, screen out fraud and duplicates, and select winners through a verifiable random draw.

BRAND & DESIGN
Brand style: playful, energetic, trustworthy. Colors: electric purple, lime, white. A campaign builder with a live entry counter, a top-referrer leaderboard, and a confetti-lit winner reveal. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Marketing home with featured live giveaways
2. Campaign builder (entry methods, prizes, rules, schedule)
3. Public giveaway entry page with entry methods and live counter
4. Entrant dashboard with my entries and referral link
5. Campaign analytics (entries, referrals, conversion funnel)
6. Winner selection and verification page (random draw and audit log)
7. Fraud and duplicate review queue
8. Auth (sign in / register)
9. Admin: organizations, plans, and platform settings
10. Settings: branding, email, and embed integrations

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Brand Marketer — create campaigns, configure entry methods, and draw winners
- Contest Entrant — enter giveaways, complete actions, and share referral links
- Admin — manage organizations, plans, and platform-wide fraud rules

CORE FEATURES
- Campaign builder with multiple weighted entry methods (email signup, social follow, daily visit, referral)
- Bonus referral entries via unique referral links with full attribution tracking
- Live entry counter and real-time leaderboard of top referrers
- Fraud and duplicate detection by email, IP, and device fingerprint with disposable-email blocking
- Verifiable randomized winner selection using a published seed and audit trail
- Winner notification and prize-claim workflow with a claim deadline and reassignment on forfeit
- Embeddable giveaway widget and hosted campaign landing pages
- Campaign analytics with entry-source funnel and referral conversion rates
- Mock email notifications for entry confirmation, referral milestones, and winner alerts

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Organization: id, name, ownerId, plan, logoUrl, createdAt, updatedAt
- Campaign: id, organizationId, title, slug, prizeDescription, status, startsAt, endsAt, winnerCount, createdAt, updatedAt
- EntryMethod: id, campaignId, type, label, pointValue, config, createdAt, updatedAt
- Entrant: id, campaignId, email, name, referralCode, referredById, ipAddress, deviceFingerprint, status, createdAt, updatedAt
- Entry: id, entrantId, entryMethodId, points, verified, createdAt, updatedAt
- Winner: id, campaignId, entrantId, drawSeed, claimStatus, claimDeadline, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Record entries per method with weighted point values and award bonus entries for completed referrals
- Generate unique referral codes and links and attribute downstream entrants to the referring entrant
- Detect duplicate and fraudulent entries by email, IP, and device fingerprint and flag or disqualify them
- Run a verifiable random winner draw weighted by entry points using a published seed, recording an audit trail
- Manage the winner claim workflow with deadlines, reassigning the draw when a winner forfeits
- Aggregate campaign analytics: entries by source, referral conversion, and entries over time
- Send mock notifications for entry confirmations, referral milestones, and winner alerts
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 2 organizations, ~6 giveaway campaigns across draft, live, and ended states with multiple weighted entry methods, ~200 entrants with referral chains and some flagged duplicates, drawn winners with claim statuses, 1 admin and 3 brand marketers. Provide a seed script and list the demo login credentials in the README.

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
