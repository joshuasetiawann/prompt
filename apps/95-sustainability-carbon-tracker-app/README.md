# CarbonLedger Sustainability / Carbon Tracker App

Log activities with emission factors, visualize footprint over time, set reduction goals, and track offsets

A production-grade full-stack **scaffold** generated from prompt `95` — *Sustainability / Carbon Tracker App* (Sustainability & Tracking).
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
npm --workspace @app/95-sustainability-carbon-tracker-app run db:generate
# 2. create the local SQLite database
npm --workspace @app/95-sustainability-carbon-tracker-app run db:push
# 3. load demo data
npm --workspace @app/95-sustainability-carbon-tracker-app run seed
# 4. start the dev server  ->  http://localhost:3195
npm --workspace @app/95-sustainability-carbon-tracker-app run dev
```

Or, inside this app folder: `npm run setup && npm run dev`.

## Demo logins
| Role  | Email            | Password   |
|-------|------------------|------------|
| Admin | admin@demo.test  | demo1234   |
| User  | user@demo.test   | demo1234   |

## Screens
- Auth
- Dashboard (total footprint, trend, by category)
- Activities log (type, amount, emissions)
- Categories and emission factors
- Goals (reduction targets)
- Offsets
- Reports
- Org/team view (optional)
- Settings

## Deployment
- `docker build -t sustainability-carbon-tracker-app .` then run with a `DATABASE_URL` env var, **or** deploy to Vercel with a managed PostgreSQL database.
- Set `DATABASE_URL` to PostgreSQL, run `prisma migrate deploy`, then `prisma db seed` (optional).
- Swap mock payment/notification for real providers via the variables in `.env.example`.

_Screenshots of this build live in `./screenshots`._
