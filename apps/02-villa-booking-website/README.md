# VillaNest Villa Booking Website

Showcase villas, let guests book available dates with a deposit, and let managers handle listings and bookings

A production-grade full-stack **scaffold** generated from prompt `02` — *Villa Booking Website* (Booking & Reservation).
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
npm --workspace @app/02-villa-booking-website run db:generate
# 2. create the local SQLite database
npm --workspace @app/02-villa-booking-website run db:push
# 3. load demo data
npm --workspace @app/02-villa-booking-website run seed
# 4. start the dev server  ->  http://localhost:3102
npm --workspace @app/02-villa-booking-website run dev
```

Or, inside this app folder: `npm run setup && npm run dev`.

## Demo logins
| Role  | Email            | Password   |
|-------|------------------|------------|
| Admin | admin@demo.test  | demo1234   |
| User  | user@demo.test   | demo1234   |

## Screens
- Home with featured villas and search
- Villa list with filters (location, guests, price, amenities)
- Villa detail with photo gallery, amenities, location, and availability calendar
- Booking flow (dates, guests, deposit)
- Confirmation
- Guest dashboard: trips and booking management
- Auth
- Admin: manage villas
- Admin: manage bookings and availability

## Deployment
- `docker build -t villa-booking-website .` then run with a `DATABASE_URL` env var, **or** deploy to Vercel with a managed PostgreSQL database.
- Set `DATABASE_URL` to PostgreSQL, run `prisma migrate deploy`, then `prisma db seed` (optional).
- Swap mock payment/notification for real providers via the variables in `.env.example`.

_Screenshots of this build live in `./screenshots`._
