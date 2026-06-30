# LinkLens Campaign UTM Tracking & Short-Link Dashboard

> Let marketers build branded short links with standardized UTM parameters, redirect and track clicks, and attribute channel-level traffic and conversions across campaigns

| Field | Value |
|---|---|
| **Prompt ID** | 145 |
| **Title** | Campaign UTM Tracking & Short-Link Dashboard |
| **Slug** | campaign-link-tracking-dashboard |
| **Category** | Marketing & Lead Gen |
| **Domain** | Link Tracking & Attribution |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Performance marketer; Marketing analyst |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building a campaign link-tracking and attribution tool for marketing teams that need to standardize UTMs and measure channel performance.

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

1. Dashboard with total clicks, top links, and channel breakdown
2. Short links list with search, filter, and click counts
3. Link builder with destination URL, UTM fields, branded domain, and custom slug
4. UTM template manager with standardized source/medium/campaign presets
5. Link detail with click timeline, referrers, devices, and geography
6. Campaign view grouping links with channel-level attribution
7. Conversions and goal tracking setup
8. Branded domains settings
9. Auth (sign in / register)
10. Admin: team, domains, and workspace settings

## Required features

- Branded short-link generator with custom slugs and a redirect service
- UTM builder with standardized, reusable templates to enforce naming consistency
- Click tracking with referrer, device, and geo capture on redirect
- Per-link analytics with click timeline, top referrers, devices, and locations
- Campaign grouping with channel-level (source/medium) attribution
- Conversion and goal tracking tied to links and campaigns
- QR code generation for any short link
- Bulk link creation and CSV export of link performance
- Branded custom domains for short links (mock verification locally)

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Campaign
**Fields:** `id`, `ownerId`, `name`, `source`, `medium`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### ShortLink
**Fields:** `id`, `ownerId`, `campaignId`, `domainId`, `slug`, `destinationUrl`, `title`, `utmSource`, `utmMedium`, `utmCampaign`, `utmTerm`, `utmContent`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record
- campaignId -> references the related record
- domainId -> references the related record

### ClickEvent
**Fields:** `id`, `linkId`, `visitorId`, `referrer`, `deviceType`, `country`, `ipHash`, `occurredAt`, `createdAt`, `updatedAt`

**Relationships:**
- linkId -> references the related record
- visitorId -> references the related record

### Conversion
**Fields:** `id`, `linkId`, `campaignId`, `type`, `value`, `visitorId`, `occurredAt`, `createdAt`, `updatedAt`

**Relationships:**
- linkId -> references the related record
- campaignId -> references the related record
- visitorId -> references the related record

### UtmTemplate
**Fields:** `id`, `ownerId`, `name`, `source`, `medium`, `campaign`, `term`, `content`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Domain
**Fields:** `id`, `ownerId`, `hostname`, `isVerified`, `isDefault`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

## Backend logic

- Generate a unique short slug, compose the destination URL with UTM parameters, and redirect on visit
- Record a click event with referrer, device, and geo metadata on each redirect
- Apply UTM templates to enforce consistent source, medium, and campaign naming on new links
- Attribute clicks and conversions to their campaign and channel for reporting
- Aggregate per-link and per-campaign click, referrer, device, and geography breakdowns
- Generate QR codes for short links and export link performance as CSV
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
- [ ] Visiting a short link redirects to the destination with the configured UTM parameters appended and records a click with referrer, device, and geo
- [ ] Links group under their campaign so the dashboard shows channel-level (source/medium) click and conversion breakdowns
- [ ] Applying a UTM template enforces consistent source, medium, and campaign values on new links

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds link-tracking and marketing-attribution products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: LinkLens Campaign UTM Tracking & Short-Link Dashboard
Type: Campaign UTM Tracking & Short-Link Dashboard (Link Tracking & Attribution)
Target users: performance marketers who build branded short links with standardized UTMs and marketing analysts who measure channel-level traffic and conversions.
Business goal: Let marketers build branded short links with standardized UTM parameters, redirect and track clicks, and attribute channel-level traffic and conversions across campaigns.

BRAND & DESIGN
Brand style: data-driven, sharp, minimal. Colors: electric blue, graphite, clean white. A links table with sparkline click counts, a UTM builder panel, and a channel attribution chart. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with total clicks, top links, and channel breakdown
2. Short links list with search, filter, and click counts
3. Link builder with destination URL, UTM fields, branded domain, and custom slug
4. UTM template manager with standardized source/medium/campaign presets
5. Link detail with click timeline, referrers, devices, and geography
6. Campaign view grouping links with channel-level attribution
7. Conversions and goal tracking setup
8. Branded domains settings
9. Auth (sign in / register)
10. Admin: team, domains, and workspace settings

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Performance Marketer — create branded links, apply UTM templates, and monitor performance
- Marketing Analyst — group links into campaigns and analyze channel-level attribution
- Admin — manage team, branded domains, and workspace settings

CORE FEATURES
- Branded short-link generator with custom slugs and a redirect service
- UTM builder with standardized, reusable templates to enforce naming consistency
- Click tracking with referrer, device, and geo capture on redirect
- Per-link analytics with click timeline, top referrers, devices, and locations
- Campaign grouping with channel-level (source/medium) attribution
- Conversion and goal tracking tied to links and campaigns
- QR code generation for any short link
- Bulk link creation and CSV export of link performance
- Branded custom domains for short links (mock verification locally)

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Campaign: id, ownerId, name, source, medium, status, createdAt, updatedAt
- ShortLink: id, ownerId, campaignId, domainId, slug, destinationUrl, title, utmSource, utmMedium, utmCampaign, utmTerm, utmContent, createdAt, updatedAt
- ClickEvent: id, linkId, visitorId, referrer, deviceType, country, ipHash, occurredAt, createdAt, updatedAt
- Conversion: id, linkId, campaignId, type, value, visitorId, occurredAt, createdAt, updatedAt
- UtmTemplate: id, ownerId, name, source, medium, campaign, term, content, createdAt, updatedAt
- Domain: id, ownerId, hostname, isVerified, isDefault, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Generate a unique short slug, compose the destination URL with UTM parameters, and redirect on visit
- Record a click event with referrer, device, and geo metadata on each redirect
- Apply UTM templates to enforce consistent source, medium, and campaign naming on new links
- Attribute clicks and conversions to their campaign and channel for reporting
- Aggregate per-link and per-campaign click, referrer, device, and geography breakdowns
- Generate QR codes for short links and export link performance as CSV
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~3 campaigns, ~25 branded short links with standardized UTMs, a couple of UTM templates, ~1,500 simulated click events across channels, devices, and locations, sample conversions, a branded domain, 1 admin and 2 marketers. Provide a seed script and list the demo login credentials in the README.

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
