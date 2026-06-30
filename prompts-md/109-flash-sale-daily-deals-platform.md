# BlitzMart Flash Sale & Daily Deals Platform

> Let merchants schedule time-boxed flash sales and daily deals with countdown timers, capped inventory, and per-customer limits, and let shoppers buy before the deal sells out or expires

| Field | Value |
|---|---|
| **Prompt ID** | 109 |
| **Title** | Flash Sale & Daily Deals Platform |
| **Slug** | flash-sale-daily-deals-platform |
| **Category** | E-commerce & Retail |
| **Domain** | Deals & Flash Commerce |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Merchant scheduling deals and stock caps; Shopper buying within the deal window |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building deal-of-the-day or flash-sale sites for retailers that drive urgency through limited-time, limited-quantity offers.

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

1. Home with today's live deals and countdowns
2. Upcoming deals calendar / schedule
3. Deal detail with countdown, stock-remaining bar, and buy box
4. Cart honoring per-customer purchase limits
5. Checkout with deal-price lock and mock payment
6. Customer account: orders and deal history
7. Auth (sign in / register)
8. Merchant: schedule and manage deals (window, discount, caps, limits)
9. Merchant: live deal monitor (sold, remaining, revenue)
10. Admin: featured deals, merchants, and reports

## Required features

- Scheduled flash sales and daily deals with start/end windows
- Live countdown timers with automatic activation and expiry of deals
- Capped deal inventory with a real-time stock-remaining indicator
- Per-customer purchase limits enforced across cart and checkout
- Deal-price lock that applies only inside the active window
- Sold-out and expired handling that closes the buy box
- Notify-me waitlist for upcoming and sold-out deals
- Merchant deal scheduling with discount, cap, and limit configuration
- Live deal monitor and reports on units sold, revenue, and sell-through

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Product
**Fields:** `id`, `merchantId`, `name`, `description`, `photos`, `regularPrice`, `createdAt`, `updatedAt`

**Relationships:**
- merchantId -> references the related record

### Deal
**Fields:** `id`, `productId`, `merchantId`, `dealPrice`, `startsAt`, `endsAt`, `stockCap`, `soldCount`, `perCustomerLimit`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- productId -> references the related record
- merchantId -> references the related record

### Order
**Fields:** `id`, `customerId`, `total`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- customerId -> references the related record

### OrderItem
**Fields:** `id`, `orderId`, `dealId`, `qty`, `lineTotal`, `createdAt`, `updatedAt`

**Relationships:**
- orderId -> references the related record
- dealId -> references the related record

### NotifyRequest
**Fields:** `id`, `dealId`, `userId`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- dealId -> references the related record
- userId -> references the related record

### Payment
**Fields:** `id`, `orderId`, `amount`, `status`, `method`, `createdAt`, `updatedAt`

**Relationships:**
- orderId -> references the related record

## Backend logic

- Activate and expire deals automatically based on their start and end windows
- Reserve and decrement capped deal stock atomically to prevent overselling
- Enforce per-customer purchase limits across the cart and the customer's prior orders
- Apply the deal price only when the order is placed inside the active window
- Close the buy box and mark deals sold out or expired in real time
- Queue notify-me requests and alert subscribers when a deal goes live
- Aggregate units sold, revenue, and sell-through for merchant and admin reports
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
- [ ] A deal cannot be purchased before it starts or after it expires
- [ ] Capped deal inventory cannot be oversold under concurrent purchases
- [ ] Per-customer purchase limits block buying more than the allowed quantity

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds flash sale and daily deals products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: BlitzMart Flash Sale & Daily Deals Platform
Type: Flash Sale & Daily Deals Platform (Deals & Flash Commerce)
Target users: merchants scheduling time-boxed deals with stock caps and per-customer limits and shoppers buying before a deal sells out or expires.
Business goal: Let merchants schedule time-boxed flash sales and daily deals with countdown timers, capped inventory, and per-customer limits, and let shoppers buy before the deal sells out or expires.

BRAND & DESIGN
Brand style: urgent, bold, energetic. Colors: crimson, jet black, bright yellow. A deals grid of cards with live countdown timers and stock-remaining bars. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with today's live deals and countdowns
2. Upcoming deals calendar / schedule
3. Deal detail with countdown, stock-remaining bar, and buy box
4. Cart honoring per-customer purchase limits
5. Checkout with deal-price lock and mock payment
6. Customer account: orders and deal history
7. Auth (sign in / register)
8. Merchant: schedule and manage deals (window, discount, caps, limits)
9. Merchant: live deal monitor (sold, remaining, revenue)
10. Admin: featured deals, merchants, and reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Shopper — browse live deals and buy within the window
- Merchant — schedule deals and set discounts, stock caps, and limits
- Admin — manage merchants, featured deals, and reports

CORE FEATURES
- Scheduled flash sales and daily deals with start/end windows
- Live countdown timers with automatic activation and expiry of deals
- Capped deal inventory with a real-time stock-remaining indicator
- Per-customer purchase limits enforced across cart and checkout
- Deal-price lock that applies only inside the active window
- Sold-out and expired handling that closes the buy box
- Notify-me waitlist for upcoming and sold-out deals
- Merchant deal scheduling with discount, cap, and limit configuration
- Live deal monitor and reports on units sold, revenue, and sell-through

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Product: id, merchantId, name, description, photos, regularPrice, createdAt, updatedAt
- Deal: id, productId, merchantId, dealPrice, startsAt, endsAt, stockCap, soldCount, perCustomerLimit, status, createdAt, updatedAt
- Order: id, customerId, total, status, createdAt, updatedAt
- OrderItem: id, orderId, dealId, qty, lineTotal, createdAt, updatedAt
- NotifyRequest: id, dealId, userId, status, createdAt, updatedAt
- Payment: id, orderId, amount, status, method, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Activate and expire deals automatically based on their start and end windows
- Reserve and decrement capped deal stock atomically to prevent overselling
- Enforce per-customer purchase limits across the cart and the customer's prior orders
- Apply the deal price only when the order is placed inside the active window
- Close the buy box and mark deals sold out or expired in real time
- Queue notify-me requests and alert subscribers when a deal goes live
- Aggregate units sold, revenue, and sell-through for merchant and admin reports
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 3 merchants, ~15 products, a mix of live, upcoming, and expired deals with stock caps and per-customer limits, sample orders, a sold-out deal with notify-me requests, 1 admin, and 4 shoppers. Provide a seed script and list the demo login credentials in the README.

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
