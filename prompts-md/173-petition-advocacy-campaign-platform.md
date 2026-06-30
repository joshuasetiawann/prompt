# Groundswell Petition & Advocacy Campaign Platform

> Let organizers launch petitions and campaigns, collect verified signatures toward public goals, send supporter updates, and generate templated letters to elected representatives

| Field | Value |
|---|---|
| **Prompt ID** | 173 |
| **Title** | Petition & Advocacy Campaign Platform |
| **Slug** | petition-advocacy-campaign-platform |
| **Category** | Community, Civic & Nonprofit |
| **Domain** | Advocacy & Petitions |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Campaign organizers; supporters and signatories |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building campaigning tools for advocacy groups, unions, and grassroots organizers.

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

1. Home with featured and trending campaigns
2. Campaign detail (story, signature-goal thermometer, and sign form)
3. Sign and share flow (verify, sign, and share to social or email)
4. Letter-to-representative composer (templated message with lookup by address)
5. Organizer dashboard (campaign performance and signature growth)
6. Campaign builder (story, goal, targets, and letter template)
7. Supporter updates composer and history
8. Supporter account: signed campaigns and sent letters
9. Auth (sign in / register)
10. Admin: campaigns, organizers, moderation, and reports

## Required features

- Campaign builder with story, signature goal, targets, and a letter template
- Public petition signing with email verification to confirm signatures
- Signature-goal thermometer with milestone tracking and goal escalation
- Duplicate-signature prevention per verified email and campaign
- Share flow generating social and email share links with referral attribution
- Templated letter generation to elected representatives with personalization fields
- Supporter update broadcasts (mock email) to a campaign's signers
- Organizer analytics for signatures over time and top referrers

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Campaign
**Fields:** `id`, `organizerId`, `title`, `story`, `goalCount`, `signatureCount`, `status`, `slug`, `createdAt`, `updatedAt`

**Relationships:**
- organizerId -> references the related record

### Signature
**Fields:** `id`, `campaignId`, `signerEmail`, `signerName`, `verified`, `referralCode`, `createdAt`, `updatedAt`

**Relationships:**
- campaignId -> references the related record

### Representative
**Fields:** `id`, `name`, `office`, `level`, `email`, `district`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### LetterTemplate
**Fields:** `id`, `campaignId`, `subject`, `body`, `createdAt`, `updatedAt`

**Relationships:**
- campaignId -> references the related record

### LetterSubmission
**Fields:** `id`, `campaignId`, `signatureId`, `representativeId`, `renderedBody`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- campaignId -> references the related record
- signatureId -> references the related record
- representativeId -> references the related record

### CampaignUpdate
**Fields:** `id`, `campaignId`, `authorId`, `subject`, `body`, `sentAt`, `recipientCount`, `createdAt`, `updatedAt`

**Relationships:**
- campaignId -> references the related record
- authorId -> references the related record

## Backend logic

- Publish campaigns with a signature goal, targets, and a letter template
- Accept petition signatures and confirm them through email verification
- Prevent duplicate signatures per verified email and campaign and update the live tally
- Track goal progress, fire milestone events, and escalate the goal when reached
- Generate share links with referral codes and attribute incoming signatures
- Render templated letters to matched representatives with the signer's personalization
- Broadcast supporter updates as mock emails to a campaign's verified signers
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
- [ ] A signature is only counted after email verification, and the same verified email cannot sign the same campaign twice
- [ ] The signature-goal thermometer reflects the live verified count and fires a milestone when the goal is reached
- [ ] A templated letter renders with the signer's personalization fields and is addressed to the representative matched for their district

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds advocacy and petition products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: Groundswell Petition & Advocacy Campaign Platform
Type: Petition & Advocacy Campaign Platform (Advocacy & Petitions)
Target users: organizers who launch petitions and advocacy campaigns and supporters who sign, share, and contact their representatives.
Business goal: Let organizers launch petitions and campaigns, collect verified signatures toward public goals, send supporter updates, and generate templated letters to elected representatives.

BRAND & DESIGN
Brand style: bold, grassroots, hopeful. Colors: rally crimson, clean white, optimistic teal. A campaign page with a big signature-goal thermometer above a one-tap sign-and-share form. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with featured and trending campaigns
2. Campaign detail (story, signature-goal thermometer, and sign form)
3. Sign and share flow (verify, sign, and share to social or email)
4. Letter-to-representative composer (templated message with lookup by address)
5. Organizer dashboard (campaign performance and signature growth)
6. Campaign builder (story, goal, targets, and letter template)
7. Supporter updates composer and history
8. Supporter account: signed campaigns and sent letters
9. Auth (sign in / register)
10. Admin: campaigns, organizers, moderation, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Organizer — launch campaigns, set signature goals, send updates, and build letter templates
- Supporter — sign petitions, share campaigns, and send letters to representatives
- Admin — manage campaigns, organizers, moderation, and reports

CORE FEATURES
- Campaign builder with story, signature goal, targets, and a letter template
- Public petition signing with email verification to confirm signatures
- Signature-goal thermometer with milestone tracking and goal escalation
- Duplicate-signature prevention per verified email and campaign
- Share flow generating social and email share links with referral attribution
- Templated letter generation to elected representatives with personalization fields
- Supporter update broadcasts (mock email) to a campaign's signers
- Organizer analytics for signatures over time and top referrers

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Campaign: id, organizerId, title, story, goalCount, signatureCount, status, slug, createdAt, updatedAt
- Signature: id, campaignId, signerEmail, signerName, verified, referralCode, createdAt, updatedAt
- Representative: id, name, office, level, email, district, createdAt, updatedAt
- LetterTemplate: id, campaignId, subject, body, createdAt, updatedAt
- LetterSubmission: id, campaignId, signatureId, representativeId, renderedBody, status, createdAt, updatedAt
- CampaignUpdate: id, campaignId, authorId, subject, body, sentAt, recipientCount, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Publish campaigns with a signature goal, targets, and a letter template
- Accept petition signatures and confirm them through email verification
- Prevent duplicate signatures per verified email and campaign and update the live tally
- Track goal progress, fire milestone events, and escalate the goal when reached
- Generate share links with referral codes and attribute incoming signatures
- Render templated letters to matched representatives with the signer's personalization
- Broadcast supporter updates as mock emails to a campaign's verified signers
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~8 advocacy campaigns across draft, active, and won statuses with signature goals and thermometers, ~120 signatures with email verification and referral codes, a directory of representatives, letter templates and sent letter submissions, supporter update broadcasts, and demo logins for 1 admin, 2 organizers, and 3 supporters. Provide a seed script and list the demo login credentials in the README.

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
