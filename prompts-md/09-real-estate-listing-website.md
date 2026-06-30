# Estatly Real Estate Listing Website

> Let visitors search and view properties and submit inquiries, and let agents manage listings and leads

| Field | Value |
|---|---|
| **Prompt ID** | 09 |
| **Title** | Real Estate Listing Website |
| **Slug** | real-estate-listing-website |
| **Category** | E-commerce & Retail |
| **Domain** | Marketplace & Listings |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Visitor/Buyer; Agent/Admin |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Freelancers and agencies building listing sites for real estate agents and brokerages.

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

1. Home with search and featured listings
2. Listings with filters (price, type, bedrooms, location) and sort
3. Property detail (gallery, specs, description, map area, inquiry form)
4. Saved/favorite listings
5. Inquiry confirmation
6. Agent dashboard: manage listings
7. Agent dashboard: leads inbox
8. Auth

## Required features

- Multi-filter search and sorting
- Property detail with image gallery and key specs
- Save favorites (per account)
- Inquiry form creating a lead tied to a property and agent
- Agent listing CRUD with photos and status (active/sold/rented)
- Leads inbox with status (new, contacted, closed)
- Schedule property viewings/tours with an agent and track their status
- Submit and track purchase/rental offers on a listing
- Saved searches and agent reviews per account
- Reports: views and leads per listing concept

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Property
**Fields:** `id`, `agentId`, `title`, `type`, `price`, `bedrooms`, `bathrooms`, `area`, `location`, `description`, `photos`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- agentId -> references the related record

### Favorite
**Fields:** `id`, `userId`, `propertyId`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record
- propertyId -> references the related record

### Lead
**Fields:** `id`, `propertyId`, `agentId`, `name`, `email`, `phone`, `message`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- propertyId -> references the related record
- agentId -> references the related record

### Viewing
**Fields:** `id`, `propertyId`, `userId`, `agentId`, `scheduledFor`, `status`, `notes`, `createdAt`, `updatedAt`

**Relationships:**
- propertyId -> references the related record
- userId -> references the related record
- agentId -> references the related record

### Offer
**Fields:** `id`, `propertyId`, `userId`, `amount`, `status`, `message`, `createdAt`, `updatedAt`

**Relationships:**
- propertyId -> references the related record
- userId -> references the related record

### Review
**Fields:** `id`, `agentId`, `userId`, `rating`, `comment`, `createdAt`, `updatedAt`

**Relationships:**
- agentId -> references the related record
- userId -> references the related record

### SavedSearch
**Fields:** `id`, `userId`, `name`, `location`, `type`, `minPrice`, `maxPrice`, `bedrooms`, `isActive`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

## Backend logic

- Filtered and sorted property search
- Favorite toggle per user
- Inquiry creating a lead for the listing's agent
- Agent CRUD for listings and lead status updates
- Viewing scheduling with agent confirmation and status updates
- Offer submission with agent review and accept/decline handling
- Save searches and capture agent reviews per user
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
- [ ] Filters and sorting narrow results correctly
- [ ] Submitting an inquiry creates a lead in the right agent's inbox
- [ ] Sold/rented listings are clearly marked

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds property listing and lead-capture sites, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: Estatly Real Estate Listing Website
Type: Real Estate Listing Website (Marketplace & Listings)
Target users: property buyers and renters searching listings, and agents managing listings and leads.
Business goal: Let visitors search and view properties and submit inquiries, and let agents manage listings and leads.

BRAND & DESIGN
Brand style: premium, trustworthy, property-focused. Colors: deep blue, white, gold accent. Clean, modern, photo-forward listing cards, strong filters, and clean detail pages. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with search and featured listings
2. Listings with filters (price, type, bedrooms, location) and sort
3. Property detail (gallery, specs, description, map area, inquiry form)
4. Saved/favorite listings
5. Inquiry confirmation
6. Agent dashboard: manage listings
7. Agent dashboard: leads inbox
8. Auth

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Visitor/Buyer — search, save, and inquire
- Agent/Admin — manage listings and respond to leads

CORE FEATURES
- Multi-filter search and sorting
- Property detail with image gallery and key specs
- Save favorites (per account)
- Inquiry form creating a lead tied to a property and agent
- Agent listing CRUD with photos and status (active/sold/rented)
- Leads inbox with status (new, contacted, closed)
- Schedule property viewings/tours with an agent and track their status
- Submit and track purchase/rental offers on a listing
- Saved searches and agent reviews per account
- Reports: views and leads per listing concept

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Property: id, agentId, title, type, price, bedrooms, bathrooms, area, location, description, photos, status, createdAt, updatedAt
- Favorite: id, userId, propertyId, createdAt, updatedAt
- Lead: id, propertyId, agentId, name, email, phone, message, status, createdAt, updatedAt
- Viewing: id, propertyId, userId, agentId, scheduledFor, status, notes, createdAt, updatedAt
- Offer: id, propertyId, userId, amount, status, message, createdAt, updatedAt
- Review: id, agentId, userId, rating, comment, createdAt, updatedAt
- SavedSearch: id, userId, name, location, type, minPrice, maxPrice, bedrooms, isActive, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Filtered and sorted property search
- Favorite toggle per user
- Inquiry creating a lead for the listing's agent
- Agent CRUD for listings and lead status updates
- Viewing scheduling with agent confirmation and status updates
- Offer submission with agent review and accept/decline handling
- Save searches and capture agent reviews per user
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~15 properties with photos and specs, sample favorites and leads, 1 admin/agent and 2 buyers. Provide a seed script and list the demo login credentials in the README.

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
