# Deployment Guide

## Vercel deployment
1. Push the repo to GitHub.
2. Import it in Vercel and set environment variables (including `DATABASE_URL`).
3. Set the build command to `next build` and deploy.
4. Run `npx prisma migrate deploy` against the production database.

## Docker deployment
1. Build the image: `docker build -t app .`
2. Run with env vars: `docker run --env-file .env -p 3000:3000 app`
3. Or use `docker-compose up` to run the app and a PostgreSQL service together.

## PostgreSQL setup
Provision a PostgreSQL instance, set `DATABASE_URL`, and apply migrations with `npx prisma migrate deploy`.

## Environment variable setup
Set every variable from `.env.example` in your host's dashboard or compose file. Keep production secrets out of the repo.

## Migration command
`npx prisma migrate deploy` (production) or `npx prisma migrate dev` (local).

## Build command
`next build` then `next start` (or the container's start command).

## Post-deployment smoke test
Sign in with a seeded/admin account, load each main page, submit a key form, confirm protected routes block unauthorized access, and verify mock-vs-real provider behavior.

## Rollback notes
Keep the previous deployment available to re-promote, and ensure migrations are backward-compatible or have a tested down path before deploying.
