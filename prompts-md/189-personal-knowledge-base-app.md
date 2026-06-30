# MindVault Personal Knowledge Base App

> Let users capture notes with bidirectional links, daily notes, nested tags, and full-text search, and share notebooks with collaborators invited as viewers or editors

| Field | Value |
|---|---|
| **Prompt ID** | 189 |
| **Title** | Personal Knowledge Base App |
| **Slug** | personal-knowledge-base-app |
| **Category** | Productivity & Personal |
| **Domain** | Personal Knowledge Management |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Indie developers; Knowledge workers and students |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building note-taking or 'second brain' tools for knowledge workers, students, and researchers; distinct from team document management or SOP portals.

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

1. Dashboard / today's daily note with recent and linked notes
2. Note editor (markdown with [[wiki-links]] and a backlinks panel)
3. Daily notes calendar and timeline
4. Notebook view (notes within a notebook)
5. Graph view of linked notes
6. Nested tag browser
7. Full-text search across notes
8. Notebook sharing and collaborator management
9. Auth (sign in / register)
10. Settings (profile and preferences)
11. Trash / recently deleted page listing soft-deleted notes with restore and permanent-delete actions.
12. Note revision history page that lists past revisions, diffs two versions, and restores an earlier one.

## Required features

- Markdown note editor with [[wiki-style]] bidirectional links and a backlinks panel
- Automatic daily notes with a date-based calendar and timeline
- Nested tags with a hierarchical tag browser
- Full-text search across note titles and bodies
- Interactive graph view of notes connected by their links
- Notebooks that group notes and can be shared
- Notebook sharing by invite with viewer or editor roles
- Link autocomplete and automatic creation of linked-but-empty notes
- Per-note revision history
- Export a single note, a notebook, or the entire vault to a downloadable Markdown ZIP that preserves [[wiki-links]] and #tags so users own their data.
- Soft-delete notes into a Trash view with one-click restore and a permanent-delete option, so accidental deletions are recoverable.
- An 'unlinked mentions' panel that surfaces notes referencing a note's title in plain text and lets you convert each into a real [[wiki-link]].

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Notebook
**Fields:** `id`, `ownerId`, `title`, `description`, `isDailyJournal`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Note
**Fields:** `id`, `notebookId`, `ownerId`, `title`, `body`, `noteDate`, `deletedAt`, `createdAt`, `updatedAt`

**Relationships:**
- notebookId -> references the related record
- ownerId -> references the related record

### NoteLink
**Fields:** `id`, `sourceNoteId`, `targetNoteId`, `createdAt`, `updatedAt`

**Relationships:**
- sourceNoteId -> references the related record
- targetNoteId -> references the related record

### Tag
**Fields:** `id`, `ownerId`, `name`, `parentId`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record
- parentId -> references the related record

### NoteTag
**Fields:** `id`, `noteId`, `tagId`, `createdAt`, `updatedAt`

**Relationships:**
- noteId -> references the related record
- tagId -> references the related record

### NotebookShare
**Fields:** `id`, `notebookId`, `userId`, `role`, `invitedAt`, `createdAt`, `updatedAt`

**Relationships:**
- notebookId -> references the related record
- userId -> references the related record

### NoteRevision
**Fields:** `id`, `noteId`, `authorId`, `title`, `body`, `revisionNumber`, `createdAt`, `updatedAt`

**Relationships:**
- noteId -> references the related record
- authorId -> references the related record

## Backend logic

- Parse [[wiki-links]] in note bodies and maintain forward-link and backlink records
- Create or open the daily note for a given date automatically
- Resolve nested tags into a hierarchy and filter notes by a tag and its descendants
- Run full-text search across note titles and bodies scoped to accessible notebooks
- Build the note graph from link records for the graph view
- Invite collaborators to a notebook as viewer or editor and enforce that role on note access
- Record a note revision on each save for history
- Generate a Markdown export bundle (ZIP, one file per note) for a note, notebook, or full vault, preserving wiki-link syntax and tag annotations.
- Scan accessible note bodies for plain-text occurrences of a target note's title and return them as unlinked mentions.
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
- [ ] Typing a [[wiki-link]] in one note creates a backlink that appears on the target note
- [ ] A notebook shared as viewer is read-only for that collaborator while an editor can modify its notes
- [ ] Full-text search returns matching notes and respects which notebooks the current user can access
- [ ] Exporting a notebook downloads a ZIP whose Markdown files contain the original [[wiki-links]] and #tags, one file per note.
- [ ] Deleting a note moves it to Trash and removes it from search, the graph, and backlinks; restoring it brings the note back with its links and tags intact.

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds personal knowledge management products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: MindVault Personal Knowledge Base App
Type: Personal Knowledge Base App (Personal Knowledge Management)
Target users: knowledge workers and students who capture notes in a personal second brain and collaborators they invite to shared notebooks as viewers or editors.
Business goal: Let users capture notes with bidirectional links, daily notes, nested tags, and full-text search, and share notebooks with collaborators invited as viewers or editors.

BRAND & DESIGN
Brand style: focused, calm, cerebral. Colors: ink black (#18181F), paper cream (#F7F2E6), soft indigo (#565CD9), warm amber accent (#C4892A). Two-pane markdown editor with a live backlinks panel beside an interactive note graph and nested tag tree; pair Fraunces serif headings with Inter body text and JetBrains Mono for [[wiki-links]] and tags. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard / today's daily note with recent and linked notes
2. Note editor (markdown with [[wiki-links]] and a backlinks panel)
3. Daily notes calendar and timeline
4. Notebook view (notes within a notebook)
5. Graph view of linked notes
6. Nested tag browser
7. Full-text search across notes
8. Notebook sharing and collaborator management
9. Auth (sign in / register)
10. Settings (profile and preferences)
11. Trash / recently deleted page listing soft-deleted notes with restore and permanent-delete actions.
12. Note revision history page that lists past revisions, diffs two versions, and restores an earlier one.

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Owner — create notes and notebooks and invite collaborators
- Editor — edit notes within notebooks shared with them
- Viewer — read notes within notebooks shared with them

CORE FEATURES
- Markdown note editor with [[wiki-style]] bidirectional links and a backlinks panel
- Automatic daily notes with a date-based calendar and timeline
- Nested tags with a hierarchical tag browser
- Full-text search across note titles and bodies
- Interactive graph view of notes connected by their links
- Notebooks that group notes and can be shared
- Notebook sharing by invite with viewer or editor roles
- Link autocomplete and automatic creation of linked-but-empty notes
- Per-note revision history
- Export a single note, a notebook, or the entire vault to a downloadable Markdown ZIP that preserves [[wiki-links]] and #tags so users own their data.
- Soft-delete notes into a Trash view with one-click restore and a permanent-delete option, so accidental deletions are recoverable.
- An 'unlinked mentions' panel that surfaces notes referencing a note's title in plain text and lets you convert each into a real [[wiki-link]].

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, createdAt, updatedAt
- Notebook: id, ownerId, title, description, isDailyJournal, createdAt, updatedAt
- Note: id, notebookId, ownerId, title, body, noteDate, deletedAt, createdAt, updatedAt
- NoteLink: id, sourceNoteId, targetNoteId, createdAt, updatedAt
- Tag: id, ownerId, name, parentId, createdAt, updatedAt
- NoteTag: id, noteId, tagId, createdAt, updatedAt
- NotebookShare: id, notebookId, userId, role, invitedAt, createdAt, updatedAt
- NoteRevision: id, noteId, authorId, title, body, revisionNumber, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Parse [[wiki-links]] in note bodies and maintain forward-link and backlink records
- Create or open the daily note for a given date automatically
- Resolve nested tags into a hierarchy and filter notes by a tag and its descendants
- Run full-text search across note titles and bodies scoped to accessible notebooks
- Build the note graph from link records for the graph view
- Invite collaborators to a notebook as viewer or editor and enforce that role on note access
- Record a note revision on each save for history
- Generate a Markdown export bundle (ZIP, one file per note) for a note, notebook, or full vault, preserving wiki-link syntax and tag annotations.
- Scan accessible note bodies for plain-text occurrences of a target note's title and return them as unlinked mentions.
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 1 owner with ~3 notebooks (including a daily journal), ~40 interlinked notes using [[wiki-links]] with backlinks, a nested tag tree, daily notes across recent dates, a shared notebook with 1 editor and 1 viewer collaborator, and 3 demo users. Provide a seed script and list the demo login credentials in the README.

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
