# Proofly Customer Testimonial & Review Collection Platform

> Let teams request, collect, and moderate text and video testimonials through shareable forms, then publish approved ones as embeddable widgets and a wall-of-love page

| Field | Value |
|---|---|
| **Prompt ID** | 144 |
| **Title** | Customer Testimonial & Review Collection Platform |
| **Slug** | testimonial-collection-platform |
| **Category** | Marketing & Lead Gen |
| **Domain** | Social Proof & Reviews |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Marketing lead; Customer reviewer |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building a social-proof/testimonial tool (Senja/Testimonial.to alternative) for SaaS companies, agencies, and creators that rely on customer proof.

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

1. Dashboard with collection summary, pending moderation, and recent testimonials
2. Collection forms list and form builder (prompts, text/video options, branding)
3. Public testimonial submission page (text or video, server-rendered)
4. Request invitations to send and track collection requests
5. Testimonials inbox with moderation (approve, reject, edit, tag)
6. Widget builder (layout, theme, selected testimonials, embed code)
7. Wall-of-love page (public, server-rendered) and its settings
8. Analytics: submissions, approval rate, and widget views
9. Auth (sign in / register)
10. Admin: team, branding, and embed/domain settings

## Required features

- Customizable collection forms with custom prompts and text or video submission
- Shareable public submission link per form with branding and a thank-you step
- Video and image testimonial upload with safe file handling (mock storage locally)
- Request invitations sent to customers with tokenized links and response tracking
- Moderation workflow across pending, approved, and rejected with editing and tagging
- Star ratings and structured customer attribution (name, title, company)
- Embeddable widgets (grid, carousel, single) generated from approved testimonials
- Public wall-of-love page assembled from selected approved testimonials
- Analytics for submissions, approval rate, and widget/wall views

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### CollectionForm
**Fields:** `id`, `ownerId`, `name`, `slug`, `prompts`, `allowText`, `allowVideo`, `thankYouMessage`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Testimonial
**Fields:** `id`, `formId`, `customerName`, `customerTitle`, `customerCompany`, `type`, `textContent`, `videoUrl`, `rating`, `status`, `submittedAt`, `approvedAt`, `createdAt`, `updatedAt`

**Relationships:**
- formId -> references the related record

### RequestInvite
**Fields:** `id`, `formId`, `recipientEmail`, `recipientName`, `token`, `status`, `sentAt`, `respondedAt`, `createdAt`, `updatedAt`

**Relationships:**
- formId -> references the related record

### Widget
**Fields:** `id`, `ownerId`, `name`, `type`, `theme`, `testimonialIds`, `embedKey`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### WallPage
**Fields:** `id`, `ownerId`, `slug`, `title`, `theme`, `testimonialIds`, `isPublic`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Tag
**Fields:** `id`, `ownerId`, `name`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

## Backend logic

- Render a public submission form from its slug and accept text or video testimonials with safe upload handling
- Send tokenized collection-request invitations and track their response status
- Move testimonials through a moderation lifecycle of pending, approved, and rejected with editing and tagging
- Assemble embeddable widgets and the wall-of-love page from selected approved testimonials only
- Serve embed code and a public widget/wall endpoint that returns only approved content
- Aggregate submission counts, approval rate, and widget/wall view analytics
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
- [ ] A customer submits a testimonial through a form's public link and it appears in the moderation inbox as pending
- [ ] Only approved testimonials appear in embeddable widgets and on the public wall-of-love page
- [ ] A request invitation link opens the correct form and is marked as responded after submission

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds social-proof and testimonial-collection products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: Proofly Customer Testimonial & Review Collection Platform
Type: Customer Testimonial & Review Collection Platform (Social Proof & Reviews)
Target users: marketing leads who request and moderate testimonials and embed social proof and customers who submit text or video reviews through shareable forms.
Business goal: Let teams request, collect, and moderate text and video testimonials through shareable forms, then publish approved ones as embeddable widgets and a wall-of-love page.

BRAND & DESIGN
Brand style: warm, credible, polished. Colors: soft coral, deep plum, cream white. A testimonials moderation board with submission cards, a widget preview pane, and a wall-of-love grid. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard with collection summary, pending moderation, and recent testimonials
2. Collection forms list and form builder (prompts, text/video options, branding)
3. Public testimonial submission page (text or video, server-rendered)
4. Request invitations to send and track collection requests
5. Testimonials inbox with moderation (approve, reject, edit, tag)
6. Widget builder (layout, theme, selected testimonials, embed code)
7. Wall-of-love page (public, server-rendered) and its settings
8. Analytics: submissions, approval rate, and widget views
9. Auth (sign in / register)
10. Admin: team, branding, and embed/domain settings

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Marketing Lead — create collection forms, moderate testimonials, and publish widgets
- Customer Reviewer — submit text or video testimonials through a shared link
- Editor — edit and tag testimonials without changing publish settings
- Admin — manage team, branding, and embed/domain settings

CORE FEATURES
- Customizable collection forms with custom prompts and text or video submission
- Shareable public submission link per form with branding and a thank-you step
- Video and image testimonial upload with safe file handling (mock storage locally)
- Request invitations sent to customers with tokenized links and response tracking
- Moderation workflow across pending, approved, and rejected with editing and tagging
- Star ratings and structured customer attribution (name, title, company)
- Embeddable widgets (grid, carousel, single) generated from approved testimonials
- Public wall-of-love page assembled from selected approved testimonials
- Analytics for submissions, approval rate, and widget/wall views

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- CollectionForm: id, ownerId, name, slug, prompts, allowText, allowVideo, thankYouMessage, status, createdAt, updatedAt
- Testimonial: id, formId, customerName, customerTitle, customerCompany, type, textContent, videoUrl, rating, status, submittedAt, approvedAt, createdAt, updatedAt
- RequestInvite: id, formId, recipientEmail, recipientName, token, status, sentAt, respondedAt, createdAt, updatedAt
- Widget: id, ownerId, name, type, theme, testimonialIds, embedKey, createdAt, updatedAt
- WallPage: id, ownerId, slug, title, theme, testimonialIds, isPublic, createdAt, updatedAt
- Tag: id, ownerId, name, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Render a public submission form from its slug and accept text or video testimonials with safe upload handling
- Send tokenized collection-request invitations and track their response status
- Move testimonials through a moderation lifecycle of pending, approved, and rejected with editing and tagging
- Assemble embeddable widgets and the wall-of-love page from selected approved testimonials only
- Serve embed code and a public widget/wall endpoint that returns only approved content
- Aggregate submission counts, approval rate, and widget/wall view analytics
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~3 collection forms, ~40 testimonials (text and video) across pending/approved/rejected states, sample request invitations, two embeddable widgets, a published wall-of-love page, simulated widget views, 1 admin and 2 marketers. Provide a seed script and list the demo login credentials in the README.

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
