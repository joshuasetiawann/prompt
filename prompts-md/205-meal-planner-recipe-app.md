# PlatePlan Meal Planner & Recipe Organizer

> Let users save recipes, plan weekly meals on a calendar, auto-generate consolidated shopping lists, and share plans with household members as editors or viewers

| Field | Value |
|---|---|
| **Prompt ID** | 205 |
| **Title** | Meal Planner & Recipe Organizer |
| **Slug** | meal-planner-recipe-app |
| **Category** | Productivity & Personal |
| **Domain** | Meal Planning & Recipes |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Indie developers; home cooks and meal-prep planners |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building meal-planning or recipe-organizer tools for home cooks and households; distinct from grocery-delivery, restaurant POS, or nutrition-coaching apps.

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

1. Dashboard / this week's meal plan with upcoming meals and quick recipe access
2. Recipe library (browse, search, and filter recipes)
3. Recipe detail / cook mode with scaled ingredients and ordered steps
4. Recipe editor (create or edit ingredients, steps, servings, times, and tags)
5. Weekly meal planner calendar (assign recipes to breakfast, lunch, and dinner slots)
6. Shopping list (auto-consolidated and grouped by grocery aisle)
7. Household sharing and member management
8. Auth (sign in / register)
9. Settings and account admin (profile, dietary preferences, and preferred units)

## Required features

- Recipe editor capturing ingredients with quantities and units, ordered steps, servings, prep and cook time, and tags
- Recipe detail with a cook mode and on-the-fly scaling to a target serving count
- Weekly meal planner calendar that assigns recipes to breakfast, lunch, and dinner slots per day
- Auto-generated shopping list that aggregates ingredients across the planned week and merges duplicates by name and unit
- Shopping list grouped by grocery aisle with persisted check-off state
- Full-text recipe search and filtering by ingredient, cuisine, tag, or total time
- Meal plan sharing with household members as editor or viewer
- Recipe import that parses pasted recipe text into structured ingredients and ordered steps

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `dietaryPreferences`, `preferredUnits`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Recipe
**Fields:** `id`, `ownerId`, `title`, `description`, `servings`, `prepMinutes`, `cookMinutes`, `cuisine`, `instructions`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### Ingredient
**Fields:** `id`, `recipeId`, `name`, `quantity`, `unit`, `aisle`, `createdAt`, `updatedAt`

**Relationships:**
- recipeId -> references the related record

### MealPlan
**Fields:** `id`, `ownerId`, `title`, `weekStartDate`, `createdAt`, `updatedAt`

**Relationships:**
- ownerId -> references the related record

### PlannedMeal
**Fields:** `id`, `mealPlanId`, `recipeId`, `mealDate`, `mealSlot`, `servings`, `createdAt`, `updatedAt`

**Relationships:**
- mealPlanId -> references the related record
- recipeId -> references the related record

### ShoppingListItem
**Fields:** `id`, `mealPlanId`, `name`, `quantity`, `unit`, `aisle`, `isChecked`, `createdAt`, `updatedAt`

**Relationships:**
- mealPlanId -> references the related record

### MealPlanShare
**Fields:** `id`, `mealPlanId`, `userId`, `role`, `invitedAt`, `createdAt`, `updatedAt`

**Relationships:**
- mealPlanId -> references the related record
- userId -> references the related record

## Backend logic

- Parse pasted recipe text into structured ingredient rows and ordered instruction steps
- Scale a recipe's ingredient quantities from its base servings to a requested serving count
- Generate a shopping list by aggregating ingredients across all planned meals in a meal plan and merging duplicates by name and unit
- Group shopping list items by grocery aisle and recompute the list when planned meals or servings change
- Assign recipes to date and meal-slot positions on the weekly planner and move them between days
- Invite household members to a meal plan as editor or viewer and enforce that role on plan and recipe edits
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
- [ ] Assigning a recipe to a day on the planner and changing its serving count updates the consolidated shopping list quantities accordingly
- [ ] A meal plan shared as viewer is read-only for that collaborator while an editor can add or remove planned meals
- [ ] Importing pasted recipe text produces structured ingredient rows and ordered steps that match the source

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds meal planning and recipe organization products, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: PlatePlan Meal Planner & Recipe Organizer
Type: Meal Planner & Recipe Organizer (Meal Planning & Recipes)
Target users: home cooks and meal-prep planners who save recipes, schedule weekly menus, and build shopping lists, plus household members they invite to shared plans as editors or viewers.
Business goal: Let users save recipes, plan weekly meals on a calendar, auto-generate consolidated shopping lists, and share plans with household members as editors or viewers.

BRAND & DESIGN
Brand style: fresh, appetizing, organized. Colors: basil green, warm cream, tomato red. A weekly calendar grid of meal cards beside a recipe library and an auto-built shopping list panel. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Dashboard / this week's meal plan with upcoming meals and quick recipe access
2. Recipe library (browse, search, and filter recipes)
3. Recipe detail / cook mode with scaled ingredients and ordered steps
4. Recipe editor (create or edit ingredients, steps, servings, times, and tags)
5. Weekly meal planner calendar (assign recipes to breakfast, lunch, and dinner slots)
6. Shopping list (auto-consolidated and grouped by grocery aisle)
7. Household sharing and member management
8. Auth (sign in / register)
9. Settings and account admin (profile, dietary preferences, and preferred units)

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Owner — create recipes and meal plans, manage the household, and invite members
- Editor — edit shared meal plans and the recipes within them
- Viewer — view shared meal plans, recipes, and shopping lists

CORE FEATURES
- Recipe editor capturing ingredients with quantities and units, ordered steps, servings, prep and cook time, and tags
- Recipe detail with a cook mode and on-the-fly scaling to a target serving count
- Weekly meal planner calendar that assigns recipes to breakfast, lunch, and dinner slots per day
- Auto-generated shopping list that aggregates ingredients across the planned week and merges duplicates by name and unit
- Shopping list grouped by grocery aisle with persisted check-off state
- Full-text recipe search and filtering by ingredient, cuisine, tag, or total time
- Meal plan sharing with household members as editor or viewer
- Recipe import that parses pasted recipe text into structured ingredients and ordered steps

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, dietaryPreferences, preferredUnits, createdAt, updatedAt
- Recipe: id, ownerId, title, description, servings, prepMinutes, cookMinutes, cuisine, instructions, createdAt, updatedAt
- Ingredient: id, recipeId, name, quantity, unit, aisle, createdAt, updatedAt
- MealPlan: id, ownerId, title, weekStartDate, createdAt, updatedAt
- PlannedMeal: id, mealPlanId, recipeId, mealDate, mealSlot, servings, createdAt, updatedAt
- ShoppingListItem: id, mealPlanId, name, quantity, unit, aisle, isChecked, createdAt, updatedAt
- MealPlanShare: id, mealPlanId, userId, role, invitedAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Parse pasted recipe text into structured ingredient rows and ordered instruction steps
- Scale a recipe's ingredient quantities from its base servings to a requested serving count
- Generate a shopping list by aggregating ingredients across all planned meals in a meal plan and merging duplicates by name and unit
- Group shopping list items by grocery aisle and recompute the list when planned meals or servings change
- Assign recipes to date and meal-slot positions on the weekly planner and move them between days
- Invite household members to a meal plan as editor or viewer and enforce that role on plan and recipe edits
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 5 weekly meal plans, ~40 recipes with ingredients, an auto-generated shopping list grouped by aisle, a plan shared with 1 editor and 1 viewer, 1 admin and 2 users. Provide a seed script and list the demo login credentials in the README.

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
