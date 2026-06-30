# ReadStack Reading List & Bookmark Manager

> Help people capture links to read later, organize them into folders and tags, and actually finish their reading by tracking progress, highlights, and reading time

| Field | Value |
|---|---|
| **Prompt ID** | 204 |
| **Title** | Reading List & Bookmark Manager |
| **Slug** | reading-list-bookmark-app |
| **Category** | Productivity & Personal |
| **Domain** | Reading & Bookmarks |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Indie developers; readers and researchers who save articles and links |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building a personal read-it-later and bookmark organizer for individuals who save articles, videos, and links; distinct from team knowledge bases, social bookmarking networks, or the browser bookmark bar.

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

1. Library of all saved items with status and type filters
2. Add bookmark by URL with auto-fetched metadata preview
3. Reader view (distraction-free article with highlights and notes)
4. Folders and collections browser
5. Tags browser
6. Reading queue (prioritized 'to read' list)
7. Highlights and notes collection
8. Stats and reading-habits dashboard
9. Settings (profile, import/export, and admin user management)
10. Auth (sign in / register)

## Required features

- Save bookmarks by URL with automatically fetched title, description, favicon, and cover image
- Reading-status workflow (unread, reading, archived) with a prioritized reading queue
- Folders and collections plus tags to organize saved items
- Distraction-free reader view that extracts the article's main content
- Highlights and inline notes on saved articles
- Full-text search across titles, descriptions, tags, and notes
- Reading stats: items saved versus read, reading streaks, and time estimates
- Estimated reading time computed from article length
- Import and export of bookmarks via HTML/CSV plus a save-this-link bookmarklet

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Bookmark
**Fields:** `id`, `ownerId`, `folderId`, `url`, `title`, `description`, `coverImageUrl`, `faviconUrl`, `status`, `estimatedMinutes`, `readAt`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record
- folderId -> references the related record

### Folder
**Fields:** `id`, `ownerId`, `parentId`, `name`, `color`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record
- parentId -> references the related record

### Tag
**Fields:** `id`, `ownerId`, `name`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### BookmarkTag
**Fields:** `id`, `bookmarkId`, `tagId`, `createdAt`, `updatedAt`

**Relationships:**
- bookmarkId -> references the related record
- tagId -> references the related record

### Highlight
**Fields:** `id`, `bookmarkId`, `ownerId`, `quotedText`, `note`, `createdAt`, `updatedAt`

**Relationships:**
- bookmarkId -> references the related record
- ownerId -> references the related record

### ReadingProgress
**Fields:** `id`, `bookmarkId`, `ownerId`, `percentRead`, `lastReadAt`, `createdAt`, `updatedAt`

**Relationships:**
- bookmarkId -> references the related record
- ownerId -> references the related record

## Backend logic

- Fetch and parse Open Graph metadata from a submitted URL to populate title, description, favicon, and cover image
- Extract the article's main content for the distraction-free reader view
- Compute estimated reading time from the extracted article word count
- Transition a bookmark's reading status and record readAt when it is archived
- Build the prioritized reading queue from status, date saved, and estimated time
- Run full-text search across titles, descriptions, tags, and highlight notes
- Import bookmarks from an HTML/CSV file and export the library, deduplicating by URL
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
- [ ] Saving a URL auto-fetches its title, description, and cover image and files it into the reading queue as unread
- [ ] Marking a bookmark as read sets its readAt timestamp and moves it out of the reading queue into the archive
- [ ] Estimated reading time is calculated from the extracted article length and shown on each card

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds personal-productivity apps, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: ReadStack Reading List & Bookmark Manager
Type: Reading List & Bookmark Manager (Reading & Bookmarks)
Target users: individuals who save articles, videos, and links to read later, organize them with folders and tags, and track what they have read, plus an admin who manages the workspace.
Business goal: Help people capture links to read later, organize them into folders and tags, and actually finish their reading by tracking progress, highlights, and reading time.

BRAND & DESIGN
Brand style: clean, literary, focused. Colors: paper white, ink navy, amber highlight. A card-and-list library with a folder sidebar, status filters, and a distraction-free reader view. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Library of all saved items with status and type filters
2. Add bookmark by URL with auto-fetched metadata preview
3. Reader view (distraction-free article with highlights and notes)
4. Folders and collections browser
5. Tags browser
6. Reading queue (prioritized 'to read' list)
7. Highlights and notes collection
8. Stats and reading-habits dashboard
9. Settings (profile, import/export, and admin user management)
10. Auth (sign in / register)

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- User — save and organize bookmarks, track reading status, and add highlights and notes
- Admin — manage users, review workspace activity, and configure default folders and tags

CORE FEATURES
- Save bookmarks by URL with automatically fetched title, description, favicon, and cover image
- Reading-status workflow (unread, reading, archived) with a prioritized reading queue
- Folders and collections plus tags to organize saved items
- Distraction-free reader view that extracts the article's main content
- Highlights and inline notes on saved articles
- Full-text search across titles, descriptions, tags, and notes
- Reading stats: items saved versus read, reading streaks, and time estimates
- Estimated reading time computed from article length
- Import and export of bookmarks via HTML/CSV plus a save-this-link bookmarklet

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Bookmark: id, ownerId, folderId, url, title, description, coverImageUrl, faviconUrl, status, estimatedMinutes, readAt, createdAt, updatedAt
- Folder: id, ownerId, parentId, name, color, createdAt, updatedAt
- Tag: id, ownerId, name, createdAt, updatedAt
- BookmarkTag: id, bookmarkId, tagId, createdAt, updatedAt
- Highlight: id, bookmarkId, ownerId, quotedText, note, createdAt, updatedAt
- ReadingProgress: id, bookmarkId, ownerId, percentRead, lastReadAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Fetch and parse Open Graph metadata from a submitted URL to populate title, description, favicon, and cover image
- Extract the article's main content for the distraction-free reader view
- Compute estimated reading time from the extracted article word count
- Transition a bookmark's reading status and record readAt when it is archived
- Build the prioritized reading queue from status, date saved, and estimated time
- Run full-text search across titles, descriptions, tags, and highlight notes
- Import bookmarks from an HTML/CSV file and export the library, deduplicating by URL
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~50 bookmarks across 6 folders and assorted tags, sample highlights and reading progress, mixed unread/reading/archived statuses, 1 admin and 2 users. Provide a seed script and list the demo login credentials in the README.

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
