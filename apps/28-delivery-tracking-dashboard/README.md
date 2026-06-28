# TrackR Delivery Tracking Dashboard

Manage shipments through statuses, assign drivers, and provide a public tracking page

A production-grade full-stack **scaffold** generated from prompt `28` — *Delivery Tracking Dashboard* (Analytics & Dashboards).
It runs end-to-end locally on seeded demo data with mock payment/notification modes and **no paid API keys**.

> This is a scaffold, not a finished product. Going live still needs your own credentials, a production database, real provider setup, and a security review. See `.env.example`.

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS + a shared component engine (`@scaffold/engine`)
- Prisma ORM (SQLite locally, PostgreSQL-ready for production)
- Zod validation, cookie-based demo auth, mock payments & notifications

## Run locally
From the **repo root** (dependencies are installed once for the whole workspace):

```bash
# 1. generate the Prisma client for this app
npm --workspace @app/28-delivery-tracking-dashboard run db:generate
# 2. create the local SQLite database
npm --workspace @app/28-delivery-tracking-dashboard run db:push
# 3. load demo data
npm --workspace @app/28-delivery-tracking-dashboard run seed
# 4. start the dev server  ->  http://localhost:3128
npm --workspace @app/28-delivery-tracking-dashboard run dev
```

Or, inside this app folder: `npm run setup && npm run dev`.

## Demo logins
| Role  | Email            | Password   |
|-------|------------------|------------|
| Admin | admin@demo.test  | demo1234   |
| User  | user@demo.test   | demo1234   |

## Screens
- Auth
- Dispatch dashboard (active deliveries, by status)
- Shipment detail (status timeline, driver, recipient)
- Create/assign shipment
- Drivers list and driver workload
- Driver view: my deliveries with status update
- Public tracking page (by tracking number)
- Customers directory
- Routes and stops
- Reports

## Deployment
- `docker build -t delivery-tracking-dashboard .` then run with a `DATABASE_URL` env var, **or** deploy to Vercel with a managed PostgreSQL database.
- Set `DATABASE_URL` to PostgreSQL, run `prisma migrate deploy`, then `prisma db seed` (optional).
- Swap mock payment/notification for real providers via the variables in `.env.example`.

_Screenshots of this build live in `./screenshots`._
