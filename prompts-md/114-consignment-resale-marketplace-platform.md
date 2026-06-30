# ReWorn Consignment & Resale Marketplace Platform

> Let consignors submit items for intake and track payouts while staff price, approve, and list goods and the platform splits sale proceeds with automated consignor payouts

| Field | Value |
|---|---|
| **Prompt ID** | 114 |
| **Title** | Consignment & Resale Marketplace Platform |
| **Slug** | consignment-resale-marketplace-platform |
| **Category** | E-commerce & Retail |
| **Domain** | Consignment & Resale |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Consignor submitting items and tracking payouts; Shop staff curating, pricing, and listing inventory |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building consignment shops and curated resale stores for thrift, vintage, and pre-owned goods where the store controls intake and pricing.

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

1. Home / curated storefront with featured resale items
2. Shop catalog with category, brand, size, and condition filters
3. Item detail with photos, condition, and provenance
4. Cart and checkout with mock payment
5. Consignor: submit items for intake (photos, details, asking price)
6. Consignor: dashboard of submissions, status, sales, and payouts
7. Auth (sign up / log in)
8. Staff: intake review and pricing/approval queue
9. Staff: listing and inventory management
10. Admin: commission splits, payouts, and reports

## Required features

- Consignor item intake submission with photos, condition, and requested price
- Staff intake review queue to approve, price, reject, or counter
- Approved items published as listings to the resale storefront
- Filterable curated storefront (category, brand, size, condition) with cart and checkout
- Configurable commission split per consignor or item with proceeds calculation
- Automated consignor payout accrual on each sale
- Payout requests and disbursement tracking (mock payouts)
- Item lifecycle states: submitted, approved, listed, sold, returned, expired
- Consignor and admin dashboards for sales, proceeds, and payouts

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### ConsignmentItem
**Fields:** `id`, `consignorId`, `title`, `brand`, `category`, `size`, `condition`, `description`, `photos`, `requestedPrice`, `listPrice`, `commissionRate`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- consignorId -> references the related record

### Listing
**Fields:** `id`, `itemId`, `price`, `status`, `listedAt`, `soldAt`, `createdAt`, `updatedAt`

**Relationships:**
- itemId -> references the related record

### Order
**Fields:** `id`, `buyerId`, `total`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- buyerId -> references the related record

### OrderItem
**Fields:** `id`, `orderId`, `listingId`, `price`, `consignorShare`, `storeShare`, `createdAt`, `updatedAt`

**Relationships:**
- orderId -> references the related record
- listingId -> references the related record

### Payout
**Fields:** `id`, `consignorId`, `amount`, `status`, `method`, `requestedAt`, `paidAt`, `createdAt`, `updatedAt`

**Relationships:**
- consignorId -> references the related record

### Payment
**Fields:** `id`, `orderId`, `amount`, `method`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- orderId -> references the related record

## Backend logic

- Accept consignor intake submissions and queue them for staff review
- Approve, price, set commission, and publish an approved item as a storefront listing
- Sell a listing at checkout, mark it sold, and prevent double-selling inside a transaction
- Split each sale into consignor and store shares using the item's commission rate and accrue payout balances
- Process payout requests and track disbursement status (mock payouts)
- Advance item lifecycle states and expire unsold items past their consignment window
- Aggregate sales, proceeds, and payout reports for staff and consignors
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
- [ ] An approved and priced item appears as a listing on the storefront
- [ ] Selling an item splits proceeds into consignor and store shares using its commission rate
- [ ] A consignor's payout balance accrues from sold items and a payout request updates its status

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds consignment and resale marketplace products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: ReWorn Consignment & Resale Marketplace Platform
Type: Consignment & Resale Marketplace Platform (Consignment & Resale)
Target users: consignors submitting items and tracking payouts and shop staff curating, pricing, and listing approved goods for resale.
Business goal: Let consignors submit items for intake and track payouts while staff price, approve, and list goods and the platform splits sale proceeds with automated consignor payouts.

BRAND & DESIGN
Brand style: curated, sustainable, boutique. Colors: sage green, cream, charcoal. An intake-and-curation workspace alongside a gallery-style resale storefront. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home / curated storefront with featured resale items
2. Shop catalog with category, brand, size, and condition filters
3. Item detail with photos, condition, and provenance
4. Cart and checkout with mock payment
5. Consignor: submit items for intake (photos, details, asking price)
6. Consignor: dashboard of submissions, status, sales, and payouts
7. Auth (sign up / log in)
8. Staff: intake review and pricing/approval queue
9. Staff: listing and inventory management
10. Admin: commission splits, payouts, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Consignor — submit items and track approval status, sales, and payouts
- Shop Staff — review intake, price, approve, and list items
- Buyer — browse and purchase curated resale items
- Admin — manage commission splits, payouts, and reports

CORE FEATURES
- Consignor item intake submission with photos, condition, and requested price
- Staff intake review queue to approve, price, reject, or counter
- Approved items published as listings to the resale storefront
- Filterable curated storefront (category, brand, size, condition) with cart and checkout
- Configurable commission split per consignor or item with proceeds calculation
- Automated consignor payout accrual on each sale
- Payout requests and disbursement tracking (mock payouts)
- Item lifecycle states: submitted, approved, listed, sold, returned, expired
- Consignor and admin dashboards for sales, proceeds, and payouts

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- ConsignmentItem: id, consignorId, title, brand, category, size, condition, description, photos, requestedPrice, listPrice, commissionRate, status, createdAt, updatedAt
- Listing: id, itemId, price, status, listedAt, soldAt, createdAt, updatedAt
- Order: id, buyerId, total, status, createdAt, updatedAt
- OrderItem: id, orderId, listingId, price, consignorShare, storeShare, createdAt, updatedAt
- Payout: id, consignorId, amount, status, method, requestedAt, paidAt, createdAt, updatedAt
- Payment: id, orderId, amount, method, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Accept consignor intake submissions and queue them for staff review
- Approve, price, set commission, and publish an approved item as a storefront listing
- Sell a listing at checkout, mark it sold, and prevent double-selling inside a transaction
- Split each sale into consignor and store shares using the item's commission rate and accrue payout balances
- Process payout requests and track disbursement status (mock payouts)
- Advance item lifecycle states and expire unsold items past their consignment window
- Aggregate sales, proceeds, and payout reports for staff and consignors
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~6 consignors, ~40 consignment items across submitted, approved, listed, and sold states, per-item commission splits, sample buyer orders, accrued and paid payouts, 1 admin, 2 staff, and 3 buyers. Provide a seed script and list the demo login credentials in the README.

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
