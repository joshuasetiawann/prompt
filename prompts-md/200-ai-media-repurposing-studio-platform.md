# RemixStudio AI Content Repurposing & Media Studio

> Turn one long-form source into platform-ready clips, posts, and summaries across channels

| Field | Value |
|---|---|
| **Prompt ID** | 200 |
| **Title** | AI Content Repurposing & Media Studio |
| **Slug** | ai-media-repurposing-studio-platform |
| **Category** | AI Apps |
| **Domain** | Content Repurposing & Media AI |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Creator; Editor; Admin |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building content-repurposing studios for creators, marketers, and podcasters.

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

1. Auth (sign in / sign up)
2. Dashboard with recent sources and assets
3. Source library (upload and import)
4. Transcript and clip editor
5. Repurpose studio (generate assets)
6. Asset library and outputs
7. Publishing calendar
8. Brand kit and templates
9. Settings
10. Admin console (brand kits, channels, users)

## Required features

- Source upload and transcription
- AI clip and highlight detection
- Multi-format repurposing (thread, caption, blog, newsletter)
- Platform-specific formatting per channel
- Brand voice and brand-kit application
- Asset editing with version history
- Publishing scheduler on a calendar
- Hashtag and title suggestions
- Batch repurposing of one source into many assets

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### SourceContent
**Fields:** `id`, `userId`, `title`, `type`, `fileName`, `transcript`, `durationSeconds`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### RepurposeJob
**Fields:** `id`, `userId`, `sourceId`, `targetFormat`, `status`, `options`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record
- sourceId -> references the related record

### Asset
**Fields:** `id`, `jobId`, `userId`, `format`, `platform`, `content`, `status`, `scheduledAt`, `createdAt`, `updatedAt`

**Relationships:**
- jobId -> references the related record
- userId -> references the related record

### BrandKit
**Fields:** `id`, `userId`, `name`, `tone`, `colors`, `hashtags`, `isDefault`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### Channel
**Fields:** `id`, `userId`, `platform`, `handle`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### AssetVersion
**Fields:** `id`, `assetId`, `content`, `versionLabel`, `createdAt`, `updatedAt`

**Relationships:**
- assetId -> references the related record

## Backend logic

- Source transcription and segmentation that calls an AI provider behind one interface to produce a timestamped transcript
- Highlight and clip detection that identifies the strongest moments from a transcript via the AI interface
- Multi-format repurposing that generates platform-specific assets such as threads, captions, blog posts, and newsletters from a source
- Brand-kit application that rewrites generated assets to match a saved tone, colors, and hashtags
- Asset versioning that stores edits and lets users revert to a prior version
- Publishing scheduler that places approved assets on a calendar per channel
- Batch repurposing that fans one source out into multiple queued jobs
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
- [ ] Transcription, clip detection, and asset generation run in offline mock mode with deterministic output and no paid API keys
- [ ] Repurposing one source produces multiple platform-specific assets that inherit the selected brand kit's tone
- [ ] Editing an asset creates a new version and the prior version remains restorable

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds content-repurposing media platforms, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: RemixStudio AI Content Repurposing & Media Studio
Type: AI Content Repurposing & Media Studio (Content Repurposing & Media AI)
Target users: creators turning long-form content into clips and posts and editors managing the publishing pipeline.
Business goal: Turn one long-form source into platform-ready clips, posts, and summaries across channels.

BRAND & DESIGN
Brand style: creative, energetic, polished. Colors: magenta, near-black, cyan accent. Media studio layout with a source library, a transcript and clip editor, and a multi-channel output board. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Auth (sign in / sign up)
2. Dashboard with recent sources and assets
3. Source library (upload and import)
4. Transcript and clip editor
5. Repurpose studio (generate assets)
6. Asset library and outputs
7. Publishing calendar
8. Brand kit and templates
9. Settings
10. Admin console (brand kits, channels, users)

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Creator — upload source content and generate repurposed assets
- Editor — refine, approve, and schedule outputs
- Admin — manage brand kits, channels, and users

CORE FEATURES
- Source upload and transcription
- AI clip and highlight detection
- Multi-format repurposing (thread, caption, blog, newsletter)
- Platform-specific formatting per channel
- Brand voice and brand-kit application
- Asset editing with version history
- Publishing scheduler on a calendar
- Hashtag and title suggestions
- Batch repurposing of one source into many assets

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- SourceContent: id, userId, title, type, fileName, transcript, durationSeconds, status, createdAt, updatedAt
- RepurposeJob: id, userId, sourceId, targetFormat, status, options, createdAt, updatedAt
- Asset: id, jobId, userId, format, platform, content, status, scheduledAt, createdAt, updatedAt
- BrandKit: id, userId, name, tone, colors, hashtags, isDefault, createdAt, updatedAt
- Channel: id, userId, platform, handle, status, createdAt, updatedAt
- AssetVersion: id, assetId, content, versionLabel, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Source transcription and segmentation that calls an AI provider behind one interface to produce a timestamped transcript
- Highlight and clip detection that identifies the strongest moments from a transcript via the AI interface
- Multi-format repurposing that generates platform-specific assets such as threads, captions, blog posts, and newsletters from a source
- Brand-kit application that rewrites generated assets to match a saved tone, colors, and hashtags
- Asset versioning that stores edits and lets users revert to a prior version
- Publishing scheduler that places approved assets on a calendar per channel
- Batch repurposing that fans one source out into multiple queued jobs
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- AI: implement a deterministic, offline mock AI provider behind one interface; switch to a real model (OpenAI/Anthropic) via an env var, defaulting to mock so it runs with no keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 4 source items, ~16 repurposed assets, 2 brand kits and sample channels, 1 admin, 1 editor and 2 creators. Provide a seed script and list the demo login credentials in the README.

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
