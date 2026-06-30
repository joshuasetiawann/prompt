# PartnerLoop Referral & Affiliate Program Platform

> Let program managers create affiliate programs with configurable commission rules, generate unique partner tracking links, attribute conversions, and manage payouts, while partners share links and track clicks, conversions, and earnings

| Field | Value |
|---|---|
| **Prompt ID** | 141 |
| **Title** | Referral & Affiliate Program Platform |
| **Slug** | referral-affiliate-program-platform |
| **Category** | Marketing & Lead Gen |
| **Domain** | Affiliate & Referral Marketing |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Affiliate program manager; Affiliate partner |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building affiliate/referral program software for e-commerce brands and SaaS companies that want partner-driven growth and self-serve partner dashboards.

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

1. Dashboard with program performance: clicks, conversions, and commission owed
2. Programs list and program detail with commission rules and cookie window
3. Partner directory with enrollment status and approval actions
4. Tracking link manager to generate and copy unique partner links
5. Conversions ledger with attribution detail and approval actions
6. Payouts with batch generation and payout status
7. Partner portal: my links, clicks, conversions, and earnings
8. Public partner application / referral signup page
9. Auth (sign in / register)
10. Admin: programs, partners, and payout settings

## Required features

- Affiliate/referral program creation with cookie window and configurable commission rules (flat, percentage, tiered)
- Unique per-partner tracking links with a redirect service that logs every click
- Last-touch conversion attribution to a partner within the program's cookie window
- Commission calculation from program rules with a manual override option
- Conversion approval workflow across pending, approved, rejected, and paid states
- Partner enrollment and approval with a self-serve public application form
- Self-serve partner portal with clicks, conversions, conversion rate, and earnings
- Payout batch generation per period with mock payout processing and status
- Postback/pixel endpoint to record conversions from an external store (mock in local mode)

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### AffiliateProgram
**Fields:** `id`, `ownerId`, `name`, `description`, `cookieWindowDays`, `commissionRules`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Partner
**Fields:** `id`, `programId`, `userId`, `name`, `email`, `status`, `payoutMethod`, `approvedAt`, `createdAt`, `updatedAt`

**Relationships:**
- programId -> references the related record
- userId -> references the related record

### TrackingLink
**Fields:** `id`, `partnerId`, `programId`, `slug`, `destinationUrl`, `clickCount`, `createdAt`, `updatedAt`

**Relationships:**
- partnerId -> references the related record
- programId -> references the related record

### ClickEvent
**Fields:** `id`, `linkId`, `partnerId`, `visitorId`, `referrer`, `ipHash`, `occurredAt`, `createdAt`, `updatedAt`

**Relationships:**
- linkId -> references the related record
- partnerId -> references the related record
- visitorId -> references the related record

### Conversion
**Fields:** `id`, `partnerId`, `programId`, `clickId`, `orderRef`, `orderValue`, `commissionAmount`, `status`, `occurredAt`, `createdAt`, `updatedAt`

**Relationships:**
- partnerId -> references the related record
- programId -> references the related record
- clickId -> references the related record

### Payout
**Fields:** `id`, `partnerId`, `amount`, `period`, `method`, `status`, `paidAt`, `createdAt`, `updatedAt`

**Relationships:**
- partnerId -> references the related record

## Backend logic

- Generate a unique tracking-link slug per partner and program and redirect clicks to the destination while recording a click event
- Attribute a conversion to the last-touch click within the program's cookie window and compute commission from its rules
- Move conversions through pending, approved, rejected, and paid states with optional commission override
- Calculate per-partner earnings and generate payout batches for a period with a mock payout status
- Manage partner enrollment and approval with per-partner status
- Accept conversions from a postback/pixel endpoint and match them to the originating click
- Aggregate per-partner and per-program clicks, conversions, conversion rate, and earnings
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
- [ ] A click on a partner's tracking link is logged and redirects to the destination, and a later conversion is attributed to that partner within the cookie window
- [ ] Commission is computed from the program's rules and a conversion moves correctly through pending, approved, and paid states
- [ ] A partner sees only their own clicks, conversions, and earnings in the partner portal, and a payout batch totals their approved commissions

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds affiliate and referral marketing products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: PartnerLoop Referral & Affiliate Program Platform
Type: Referral & Affiliate Program Platform (Affiliate & Referral Marketing)
Target users: affiliate program managers who configure commission rules, attribute conversions, and run payouts and affiliate partners who share tracking links and track their earnings.
Business goal: Let program managers create affiliate programs with configurable commission rules, generate unique partner tracking links, attribute conversions, and manage payouts, while partners share links and track clicks, conversions, and earnings.

BRAND & DESIGN
Brand style: trustworthy, performance-driven, modern. Colors: deep indigo, mint green, soft white. A partner performance dashboard with link cards, an attribution funnel, and a commission ledger panel. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with program performance: clicks, conversions, and commission owed
2. Programs list and program detail with commission rules and cookie window
3. Partner directory with enrollment status and approval actions
4. Tracking link manager to generate and copy unique partner links
5. Conversions ledger with attribution detail and approval actions
6. Payouts with batch generation and payout status
7. Partner portal: my links, clicks, conversions, and earnings
8. Public partner application / referral signup page
9. Auth (sign in / register)
10. Admin: programs, partners, and payout settings

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Affiliate Program Manager — create programs, set commission rules, attribute conversions, and run payouts
- Affiliate Partner — enroll, generate tracking links, and track clicks, conversions, and earnings
- Finance Reviewer — review and approve conversions and process payout batches
- Admin — manage programs, partners, and payout settings

CORE FEATURES
- Affiliate/referral program creation with cookie window and configurable commission rules (flat, percentage, tiered)
- Unique per-partner tracking links with a redirect service that logs every click
- Last-touch conversion attribution to a partner within the program's cookie window
- Commission calculation from program rules with a manual override option
- Conversion approval workflow across pending, approved, rejected, and paid states
- Partner enrollment and approval with a self-serve public application form
- Self-serve partner portal with clicks, conversions, conversion rate, and earnings
- Payout batch generation per period with mock payout processing and status
- Postback/pixel endpoint to record conversions from an external store (mock in local mode)

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- AffiliateProgram: id, ownerId, name, description, cookieWindowDays, commissionRules, status, createdAt, updatedAt
- Partner: id, programId, userId, name, email, status, payoutMethod, approvedAt, createdAt, updatedAt
- TrackingLink: id, partnerId, programId, slug, destinationUrl, clickCount, createdAt, updatedAt
- ClickEvent: id, linkId, partnerId, visitorId, referrer, ipHash, occurredAt, createdAt, updatedAt
- Conversion: id, partnerId, programId, clickId, orderRef, orderValue, commissionAmount, status, occurredAt, createdAt, updatedAt
- Payout: id, partnerId, amount, period, method, status, paidAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Generate a unique tracking-link slug per partner and program and redirect clicks to the destination while recording a click event
- Attribute a conversion to the last-touch click within the program's cookie window and compute commission from its rules
- Move conversions through pending, approved, rejected, and paid states with optional commission override
- Calculate per-partner earnings and generate payout batches for a period with a mock payout status
- Manage partner enrollment and approval with per-partner status
- Accept conversions from a postback/pixel endpoint and match them to the originating click
- Aggregate per-partner and per-program clicks, conversions, conversion rate, and earnings
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 2 affiliate programs with commission rules and cookie windows, ~8 partners with unique tracking links, simulated clicks and attributed conversions across pending/approved/paid states, a generated payout batch, 1 admin and 2 partners. Provide a seed script and list the demo login credentials in the README.

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
