# FreshFold Laundry Pickup & Delivery App

Let customers schedule pickup and delivery for laundry services and let staff manage orders and routes

A production-grade full-stack **scaffold** generated from prompt `57` — *Laundry Pickup & Delivery App* (On-Demand Logistics).
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
npm --workspace @app/57-laundry-pickup-delivery-app run db:generate
# 2. create the local SQLite database
npm --workspace @app/57-laundry-pickup-delivery-app run db:push
# 3. load demo data
npm --workspace @app/57-laundry-pickup-delivery-app run seed
# 4. start the dev server  ->  http://localhost:3157
npm --workspace @app/57-laundry-pickup-delivery-app run dev
```

Or, inside this app folder: `npm run setup && npm run dev`.

## Demo logins
| Role  | Email            | Password   |
|-------|------------------|------------|
| Admin | admin@demo.test  | demo1234   |
| User  | user@demo.test   | demo1234   |

## Screens
- Home with services and order CTA
- Services and pricing (wash, dry-clean, fold)
- Order: items, pickup slot, delivery slot, address
- Checkout (mock payment)
- Order status tracking
- Customer dashboard: orders and addresses
- Auth
- Driver view: assigned pickups/deliveries with status
- Admin: orders, drivers, and pricing

## Deployment
- `docker build -t laundry-pickup-delivery-app .` then run with a `DATABASE_URL` env var, **or** deploy to Vercel with a managed PostgreSQL database.
- Set `DATABASE_URL` to PostgreSQL, run `prisma migrate deploy`, then `prisma db seed` (optional).
- Swap mock payment/notification for real providers via the variables in `.env.example`.

_Screenshots of this build live in `./screenshots`._
