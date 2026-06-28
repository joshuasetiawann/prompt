# AdmitFlow School Admission Management System

Capture applications with documents, route them through review and interviews, and manage decisions

A production-grade full-stack **scaffold** generated from prompt `81` — *School Admission Management System* (Education Admissions).
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
npm --workspace @app/81-school-admission-management-system run db:generate
# 2. create the local SQLite database
npm --workspace @app/81-school-admission-management-system run db:push
# 3. load demo data
npm --workspace @app/81-school-admission-management-system run seed
# 4. start the dev server  ->  http://localhost:3181
npm --workspace @app/81-school-admission-management-system run dev
```

Or, inside this app folder: `npm run setup && npm run dev`.

## Demo logins
| Role  | Email            | Password   |
|-------|------------------|------------|
| Admin | admin@demo.test  | demo1234   |
| User  | user@demo.test   | demo1234   |

## Screens
- Home and program list
- Applicant: apply, my applications, status
- Application detail (documents, interview, status)
- Application fee (mock payment)
- Staff: applications pipeline and review
- Programs and intakes
- Interviews schedule
- Admin: users, audit log, reports

## Deployment
- `docker build -t school-admission-management-system .` then run with a `DATABASE_URL` env var, **or** deploy to Vercel with a managed PostgreSQL database.
- Set `DATABASE_URL` to PostgreSQL, run `prisma migrate deploy`, then `prisma db seed` (optional).
- Swap mock payment/notification for real providers via the variables in `.env.example`.

_Screenshots of this build live in `./screenshots`._
