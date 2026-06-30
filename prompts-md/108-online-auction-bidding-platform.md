# BidArena Online Auction & Bidding Platform

> Let sellers list lots with reserve prices and timed windows and let bidders place proxy bids in real time, with automatic winner selection, invoicing, and payment

| Field | Value |
|---|---|
| **Prompt ID** | 108 |
| **Title** | Online Auction & Bidding Platform |
| **Slug** | online-auction-bidding-platform |
| **Category** | E-commerce & Retail |
| **Domain** | Auctions & Bidding |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Seller listing and managing lots; Bidder placing bids and paying for wins |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building auction sites for collectibles, estate sales, charity events, or niche goods where price is set by competitive bidding rather than a fixed listing.

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

1. Home with featured and ending-soon auctions
2. Auction catalog with category, status, and price filters
3. Lot detail with live countdown, bid history, and proxy bid form
4. Bidder account: active bids, watchlist, and won lots
5. Won-lot checkout with invoice and mock payment
6. Auth (sign in / register)
7. Seller: create and manage lots (reserve, timing, photos)
8. Seller: auction dashboard (bids, sales, payouts)
9. Admin: users, categories, and dispute management
10. Admin: reports (GMV, sell-through, fees)

## Required features

- Timed auctions with start/end windows and live countdown
- Proxy (automatic) bidding up to a bidder's maximum with incremental outbidding
- Reserve price enforcement and minimum bid increments
- Real-time bid updates and outbid notifications
- Watchlist and full bid history per bidder
- Anti-sniping auction extension when bids land near the close
- Automatic winner selection at close and invoice generation
- Won-lot checkout with mock payment and seller payout accounting
- Seller and admin reports on bids, sell-through, and fees

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Category
**Fields:** `id`, `name`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Lot
**Fields:** `id`, `sellerId`, `categoryId`, `title`, `description`, `photos`, `startingBid`, `reservePrice`, `bidIncrement`, `startsAt`, `endsAt`, `status`, `currentBid`, `winnerId`, `createdAt`, `updatedAt`

**Relationships:**
- sellerId -> references the related record
- categoryId -> references the related record
- winnerId -> references the related record

### Bid
**Fields:** `id`, `lotId`, `bidderId`, `amount`, `maxProxyAmount`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- lotId -> references the related record
- bidderId -> references the related record

### WatchlistEntry
**Fields:** `id`, `lotId`, `userId`, `createdAt`, `updatedAt`

**Relationships:**
- lotId -> references the related record
- userId -> references the related record

### Invoice
**Fields:** `id`, `lotId`, `winnerId`, `amount`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- lotId -> references the related record
- winnerId -> references the related record

### Payment
**Fields:** `id`, `invoiceId`, `amount`, `status`, `method`, `createdAt`, `updatedAt`

**Relationships:**
- invoiceId -> references the related record

## Backend logic

- Place a bid by validating it against the current high bid, the increment, and the auction window
- Resolve proxy bids by auto-incrementing the winning bid up to each bidder's maximum
- Enforce the reserve price and mark a lot unsold if the reserve is not met at close
- Extend the auction end time when a bid lands inside the anti-sniping window
- Close auctions on schedule, select the highest valid bidder, and generate the invoice
- Record mock payment on a won lot and update invoice and payout status
- Aggregate bids, sell-through rate, and fees for seller and admin reports
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
- [ ] Proxy bidding auto-outbids competitors only by the increment and never above the bidder's maximum
- [ ] A lot that closes below its reserve price is marked unsold and generates no invoice
- [ ] A bid inside the anti-sniping window extends the auction end time and closing issues an invoice to the winner

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds online auction and bidding products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: BidArena Online Auction & Bidding Platform
Type: Online Auction & Bidding Platform (Auctions & Bidding)
Target users: sellers listing lots with reserve prices and timed windows and bidders placing proxy bids in real time and paying for wins.
Business goal: Let sellers list lots with reserve prices and timed windows and let bidders place proxy bids in real time, with automatic winner selection, invoicing, and payment.

BRAND & DESIGN
Brand style: lively, competitive, premium. Colors: deep charcoal, gold, ivory. A lot detail page with a live countdown, current high bid, and a real-time bid ticker. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with featured and ending-soon auctions
2. Auction catalog with category, status, and price filters
3. Lot detail with live countdown, bid history, and proxy bid form
4. Bidder account: active bids, watchlist, and won lots
5. Won-lot checkout with invoice and mock payment
6. Auth (sign in / register)
7. Seller: create and manage lots (reserve, timing, photos)
8. Seller: auction dashboard (bids, sales, payouts)
9. Admin: users, categories, and dispute management
10. Admin: reports (GMV, sell-through, fees)

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Bidder — browse lots, place proxy bids, and pay for wins
- Seller — list lots, set reserves and timing, and manage auctions
- Admin — manage users, categories, disputes, and reports

CORE FEATURES
- Timed auctions with start/end windows and live countdown
- Proxy (automatic) bidding up to a bidder's maximum with incremental outbidding
- Reserve price enforcement and minimum bid increments
- Real-time bid updates and outbid notifications
- Watchlist and full bid history per bidder
- Anti-sniping auction extension when bids land near the close
- Automatic winner selection at close and invoice generation
- Won-lot checkout with mock payment and seller payout accounting
- Seller and admin reports on bids, sell-through, and fees

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Category: id, name, createdAt, updatedAt
- Lot: id, sellerId, categoryId, title, description, photos, startingBid, reservePrice, bidIncrement, startsAt, endsAt, status, currentBid, winnerId, createdAt, updatedAt
- Bid: id, lotId, bidderId, amount, maxProxyAmount, status, createdAt, updatedAt
- WatchlistEntry: id, lotId, userId, createdAt, updatedAt
- Invoice: id, lotId, winnerId, amount, status, createdAt, updatedAt
- Payment: id, invoiceId, amount, status, method, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Place a bid by validating it against the current high bid, the increment, and the auction window
- Resolve proxy bids by auto-incrementing the winning bid up to each bidder's maximum
- Enforce the reserve price and mark a lot unsold if the reserve is not met at close
- Extend the auction end time when a bid lands inside the anti-sniping window
- Close auctions on schedule, select the highest valid bidder, and generate the invoice
- Record mock payment on a won lot and update invoice and payout status
- Aggregate bids, sell-through rate, and fees for seller and admin reports
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 5 categories, ~20 lots across live, scheduled, and closed states with reserves and bid increments, sample proxy bids and a few won lots with invoices, 1 admin, 2 sellers, and 4 bidders. Provide a seed script and list the demo login credentials in the README.

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
