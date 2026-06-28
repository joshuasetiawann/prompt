# Production Readiness Guide

## Environment variables
Copy `.env.example` to `.env` and set every value. Never commit real secrets. Keep separate values for development and production.

## Production database setup
Use PostgreSQL in production. Create the database, set `DATABASE_URL`, run `npx prisma migrate deploy`, then seed only what production needs.

## Payment provider setup
Replace mock payment with a real gateway (e.g. Stripe). Add the secret/publishable keys to env, implement and verify webhooks, and test with the provider's test mode before going live.

## Email/SMS provider setup
Replace mock notification logs with a real provider (e.g. an email API or SMS gateway). Add credentials to env and verify deliverability.

## AI provider setup
Switch the mock AI provider to a real model (OpenAI/Anthropic) via the documented env var. Set usage limits and monitor cost.

## Domain and hosting
Point a domain at your host (e.g. Vercel or a Docker host). Configure environment variables in the host dashboard.

## SSL
Serve over HTTPS. Managed hosts provide certificates automatically; for self-hosting, terminate TLS at your proxy.

## Backups
Schedule automated database backups and test a restore.

## Monitoring
Add error tracking and uptime/performance monitoring, and alert on failures.

## Security review
Before launch, review auth, access control, validation, rate limiting, and dependency vulnerabilities. See `SECURITY_AND_COMPLIANCE_NOTES.md`.

## Legal/compliance reminders
Add a privacy policy and terms of service. For apps handling health, finance, or personal data, confirm the legal requirements for your region before launch.
