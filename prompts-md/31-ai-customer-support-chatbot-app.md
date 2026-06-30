# SupportGenie AI Customer Support Chatbot App

> Answer customer questions from a knowledge base via chat, with history and admin management

| Field | Value |
|---|---|
| **Prompt ID** | 31 |
| **Title** | AI Customer Support Chatbot App |
| **Slug** | ai-customer-support-chatbot-app |
| **Category** | AI Apps |
| **Domain** | AI Tools |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Advanced |
| **Target user** | Customer; Admin |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building support bots for businesses that want a self-hosted, KB-driven assistant.

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
- Use mock AI mode when no AI provider key is set

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

1. Auth
2. Chat interface (customer-facing widget + full page)
3. Conversation history
4. Knowledge base browser
5. Admin: knowledge base management (articles)
6. Admin: conversations and monitoring
7. Settings (tone, fallback message)
8. Usage/limits view

## Required features

- Chat that retrieves relevant knowledge-base articles to answer (mock AI)
- Conversation history per session/user
- Knowledge base CRUD with categories
- Canned/fallback responses when no match
- Usage/limit concept per period
- Admin monitoring of conversations and unanswered questions
- Settings for tone and fallback

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Article
**Fields:** `id`, `categoryId`, `title`, `body`, `createdAt`, `updatedAt`

**Relationships:**
- categoryId -> references the related record

### Conversation
**Fields:** `id`, `userId`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### Message
**Fields:** `id`, `conversationId`, `role`, `content`, `createdAt`, `updatedAt`

**Relationships:**
- conversationId -> references the related record

### UsageCounter
**Fields:** `id`, `userId`, `period`, `count`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### Setting
**Fields:** `id`, `key`, `value`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

## Backend logic

- Mock AI answer that retrieves and summarizes matching articles, with a fallback
- Conversation and message persistence
- Knowledge base CRUD
- Usage counting against limits
- Admin monitoring and unanswered-question surfacing
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
- [ ] Asking about a covered topic returns a relevant, sourced-from-KB answer (mock)
- [ ] Unmatched questions return the fallback and are flagged for admin
- [ ] The app runs fully offline with the mock AI provider

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds AI support and chatbot applications, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: SupportGenie AI Customer Support Chatbot App
Type: AI Customer Support Chatbot App (AI Tools)
Target users: businesses deploying a support bot and admins managing the knowledge base and conversations.
Business goal: Answer customer questions from a knowledge base via chat, with history and admin management.

BRAND & DESIGN
Brand style: helpful, modern, trustworthy AI. Colors: blue, white, soft accent. Clean, modern, clean chat widget, conversation list, and a simple knowledge-base editor. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Auth
2. Chat interface (customer-facing widget + full page)
3. Conversation history
4. Knowledge base browser
5. Admin: knowledge base management (articles)
6. Admin: conversations and monitoring
7. Settings (tone, fallback message)
8. Usage/limits view

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Customer — chat and get answers
- Admin — manage knowledge base, view conversations, monitor usage

CORE FEATURES
- Chat that retrieves relevant knowledge-base articles to answer (mock AI)
- Conversation history per session/user
- Knowledge base CRUD with categories
- Canned/fallback responses when no match
- Usage/limit concept per period
- Admin monitoring of conversations and unanswered questions
- Settings for tone and fallback

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Article: id, categoryId, title, body, createdAt, updatedAt
- Conversation: id, userId, createdAt, updatedAt
- Message: id, conversationId, role, content, createdAt, updatedAt
- UsageCounter: id, userId, period, count, createdAt, updatedAt
- Setting: id, key, value, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Mock AI answer that retrieves and summarizes matching articles, with a fallback
- Conversation and message persistence
- Knowledge base CRUD
- Usage counting against limits
- Admin monitoring and unanswered-question surfacing
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- AI: implement a deterministic, offline mock AI provider behind one interface; switch to a real model (OpenAI/Anthropic) via an env var, defaulting to mock so it runs with no keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: ~20 KB articles across categories, sample conversations, usage data, 1 admin and 2 users. Provide a seed script and list the demo login credentials in the README.

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
