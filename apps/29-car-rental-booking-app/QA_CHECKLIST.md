# Manual QA checklist — DriveNow Car Rental Booking App

## Smoke
- [ ] `npm run setup` completes (prisma generate, db push, seed)
- [ ] `npm run dev` boots without errors
- [ ] Home page renders
- [ ] Sign in with admin@demo.test / demo1234 reaches the dashboard
- [ ] Every sidebar item routes to a real page (no dead links)
- [ ] Lists show seeded data; empty/loading/error states exist
- [ ] Create form validates on the client and the server
- [ ] Protected /app routes redirect to /login when signed out
- [ ] Responsive layout works at mobile width

## Production smoke (after deploy)
- [ ] `DATABASE_URL` points to PostgreSQL and migrations are applied
- [ ] No secrets are committed; all secrets come from env vars
- [ ] Mock payment/notification replaced with real providers (if going live)
