# ShopFloor Manufacturing Production & Work Order System

> Let planners create production work orders from bills of materials, track them across shop-floor stages, consume raw materials, and report output, scrap, and on-time completion

| Field | Value |
|---|---|
| **Prompt ID** | 124 |
| **Title** | Manufacturing Production & Work Order System |
| **Slug** | manufacturing-production-work-order-system |
| **Category** | Business Operations |
| **Domain** | Manufacturing Operations |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Production planners; Shop-floor operators and supervisors |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building lightweight MES/production-control tools for small manufacturers and job shops (distinct from sellable-stock inventory).

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

1. Production dashboard with active work orders and on-time status
2. Bill of materials editor mapping products to components and quantities
3. Work order creation and release
4. Shop-floor board with work orders across stage swimlanes
5. Work order detail with operations, material consumption, and output
6. Material inventory with on-hand levels and consumption history
7. Reports: output, scrap rate, and on-time completion
8. Auth (sign in / register)
9. Admin: products, materials, and work centers
10. Work center and stage management

## Required features

- Bill of materials editor mapping finished products to component materials and quantities
- Work order creation from a BOM with planned quantity and due date
- Shop-floor stage board to advance work orders through routing operations
- Material shortage check against on-hand inventory before release
- Raw-material consumption from inventory per BOM as good output is reported
- Output and scrap reporting per operation with reason codes
- On-time completion tracking against work order due dates
- Work-center load and throughput view
- Reports on output, scrap rate, and on-time completion

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Product
**Fields:** `id`, `sku`, `name`, `type`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### BillOfMaterials
**Fields:** `id`, `productId`, `version`, `components`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- productId -> references the related record

### Material
**Fields:** `id`, `sku`, `name`, `onHandQty`, `unit`, `reorderPoint`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### WorkCenter
**Fields:** `id`, `name`, `stage`, `capacityPerHour`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### WorkOrder
**Fields:** `id`, `productId`, `bomId`, `plannedQty`, `completedQty`, `scrapQty`, `dueDate`, `currentStage`, `status`, `createdAt`, `updatedAt`

**Relationships:**
- productId -> references the related record
- bomId -> references the related record

### ProductionEntry
**Fields:** `id`, `workOrderId`, `workCenterId`, `operatorId`, `goodQty`, `scrapQty`, `scrapReason`, `reportedAt`, `createdAt`, `updatedAt`

**Relationships:**
- workOrderId -> references the related record
- workCenterId -> references the related record
- operatorId -> references the related record

## Backend logic

- Explode a bill of materials to compute the required component quantities for a work order
- Check material on-hand against BOM requirements and block or warn on shortages at release
- Release work orders and reserve the required raw materials
- Advance work orders through routing stages with operator output and scrap entries
- Consume raw materials from inventory per BOM as good output is reported
- Track planned-versus-completed quantity and on-time status against due dates
- Aggregate output, scrap rate, and on-time completion for reports
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
- [ ] Releasing a work order whose BOM exceeds on-hand material is blocked or flagged as a shortage
- [ ] Reporting good output consumes the BOM's component materials and decrements on-hand inventory
- [ ] A work order completed after its due date is reported as late in the on-time report

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds manufacturing operations products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: ShopFloor Manufacturing Production & Work Order System
Type: Manufacturing Production & Work Order System (Manufacturing Operations)
Target users: production planners who release work orders from bills of materials and shop-floor operators who advance them through stages and report output and scrap.
Business goal: Let planners create production work orders from bills of materials, track them across shop-floor stages, consume raw materials, and report output, scrap, and on-time completion.

BRAND & DESIGN
Brand style: rugged, high-contrast, operational. Colors: industrial graphite, hazard yellow, off-white. A shop-floor work-order board with stage swimlanes and a material-consumption panel. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Production dashboard with active work orders and on-time status
2. Bill of materials editor mapping products to components and quantities
3. Work order creation and release
4. Shop-floor board with work orders across stage swimlanes
5. Work order detail with operations, material consumption, and output
6. Material inventory with on-hand levels and consumption history
7. Reports: output, scrap rate, and on-time completion
8. Auth (sign in / register)
9. Admin: products, materials, and work centers
10. Work center and stage management

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Planner — build BOMs, release work orders, and schedule production
- Operator — advance work orders through stages and report output and scrap
- Supervisor — monitor the floor, resolve stalls, and review completion
- Admin — manage products, materials, work centers, and reports

CORE FEATURES
- Bill of materials editor mapping finished products to component materials and quantities
- Work order creation from a BOM with planned quantity and due date
- Shop-floor stage board to advance work orders through routing operations
- Material shortage check against on-hand inventory before release
- Raw-material consumption from inventory per BOM as good output is reported
- Output and scrap reporting per operation with reason codes
- On-time completion tracking against work order due dates
- Work-center load and throughput view
- Reports on output, scrap rate, and on-time completion

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Product: id, sku, name, type, status, createdAt, updatedAt
- BillOfMaterials: id, productId, version, components, status, createdAt, updatedAt
- Material: id, sku, name, onHandQty, unit, reorderPoint, createdAt, updatedAt
- WorkCenter: id, name, stage, capacityPerHour, createdAt, updatedAt
- WorkOrder: id, productId, bomId, plannedQty, completedQty, scrapQty, dueDate, currentStage, status, createdAt, updatedAt
- ProductionEntry: id, workOrderId, workCenterId, operatorId, goodQty, scrapQty, scrapReason, reportedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Explode a bill of materials to compute the required component quantities for a work order
- Check material on-hand against BOM requirements and block or warn on shortages at release
- Release work orders and reserve the required raw materials
- Advance work orders through routing stages with operator output and scrap entries
- Consume raw materials from inventory per BOM as good output is reported
- Track planned-versus-completed quantity and on-time status against due dates
- Aggregate output, scrap rate, and on-time completion for reports
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~8 products with multi-component BOMs, ~15 raw materials with on-hand stock, 4 work centers across stages, released and in-progress work orders, production entries with scrap, 1 admin, 2 planners, and 3 operators. Provide a seed script and list the demo login credentials in the README.

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
