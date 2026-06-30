# ShopKart General Online Store

> Let customers browse, add to cart, check out, and track orders, and let the owner manage the store

| Field | Value |
|---|---|
| **Prompt ID** | 11 |
| **Title** | General Online Store |
| **Slug** | general-online-store |
| **Category** | E-commerce & Retail |
| **Domain** | E-commerce |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Customer; Admin/Owner |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Freelancers building stores for small brands and owners wanting a self-hosted shop.

**Production standard:** Production-grade scaffold with local development support, deployment readiness, security guidance, test guidance, and real-service integration readiness

## Tech stack

- **Frontend:** Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Next.js Server Actions or API Routes, Prisma ORM, PostgreSQL for production, SQLite for local development
- **Auth:** Auth.js or secure email/password authentication
- **Validation:** Zod, React Hook Form
- **Deployment:** Vercel-ready, Docker-ready

**Local mode** (enabled)
- App must run locally without paid API keys
- Use mock payment mode when payment is needed
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

1. Home with featured and categories
2. Catalog with search/filter/sort
3. Product detail with variants and gallery
4. Cart
5. Checkout (address, mock payment)
6. Customer account: orders and tracking
7. Order tracking page
8. Auth
9. Admin: product and inventory management
10. Admin: orders and basic reports

## Required features

- Catalog with categories, search, filter, and sort
- Product variants and image gallery
- Persistent cart with quantity edits
- Mock checkout and order creation
- Inventory decrement and out-of-stock handling
- Coupon/discount concept
- Order status and tracking
- Admin CRUD for products and order management with reports

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Category
**Fields:** `id`, `name`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Product
**Fields:** `id`, `categoryId`, `name`, `price`, `photos`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- categoryId -> references the related record

### Variant
**Fields:** `id`, `productId`, `name`, `sku`, `stock`, `priceDelta`, `createdAt`, `updatedAt`

**Relationships:**
- productId -> references the related record

### Cart
**Fields:** `id`, `userId`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### CartItem
**Fields:** `id`, `cartId`, `variantId`, `qty`, `createdAt`, `updatedAt`

**Relationships:**
- cartId -> references the related record
- variantId -> references the related record

### Order
**Fields:** `id`, `userId`, `total`, `status`, `address`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### OrderItem
**Fields:** `id`, `orderId`, `variantId`, `qty`, `lineTotal`, `createdAt`, `updatedAt`

**Relationships:**
- orderId -> references the related record
- variantId -> references the related record

### Coupon
**Fields:** `id`, `code`, `type`, `value`, `active`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Payment
**Fields:** `id`, `orderId`, `amount`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- orderId -> references the related record

## Backend logic

- Catalog query with filters and sort
- Cart and coupon application logic
- Checkout with stock decrement in a transaction
- Order status updates and tracking
- Admin product and order management
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
- [ ] Out-of-stock variants cannot be purchased
- [ ] Coupons apply and recalculate totals correctly
- [ ] Order status updates appear on the tracking page

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds clean, conversion-focused online stores, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: ShopKart General Online Store
Type: General Online Store (E-commerce)
Target users: online shoppers and a store owner managing products, inventory, and orders.
Business goal: Let customers browse, add to cart, check out, and track orders, and let the owner manage the store.

BRAND & DESIGN
Brand style: clean, modern, retail. Colors: blue, white, soft grey. Clean, modern, crisp product grid, clear product pages, and a smooth checkout. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with featured and categories
2. Catalog with search/filter/sort
3. Product detail with variants and gallery
4. Cart
5. Checkout (address, mock payment)
6. Customer account: orders and tracking
7. Order tracking page
8. Auth
9. Admin: product and inventory management
10. Admin: orders and basic reports

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Customer — browse, buy, track
- Admin/Owner — manage products, inventory, and orders

CORE FEATURES
- Catalog with categories, search, filter, and sort
- Product variants and image gallery
- Persistent cart with quantity edits
- Mock checkout and order creation
- Inventory decrement and out-of-stock handling
- Coupon/discount concept
- Order status and tracking
- Admin CRUD for products and order management with reports

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Category: id, name, createdAt, updatedAt
- Product: id, categoryId, name, price, photos, status, createdAt, updatedAt
- Variant: id, productId, name, sku, stock, priceDelta, createdAt, updatedAt
- Cart: id, userId, createdAt, updatedAt
- CartItem: id, cartId, variantId, qty, createdAt, updatedAt
- Order: id, userId, total, status, address, createdAt, updatedAt
- OrderItem: id, orderId, variantId, qty, lineTotal, createdAt, updatedAt
- Coupon: id, code, type, value, active, createdAt, updatedAt
- Payment: id, orderId, amount, status, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Catalog query with filters and sort
- Cart and coupon application logic
- Checkout with stock decrement in a transaction
- Order status updates and tracking
- Admin product and order management
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 5 categories, ~30 products with variants, sample orders, a coupon, 1 admin and 2 customers. Provide a seed script and list the demo login credentials in the README.

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
