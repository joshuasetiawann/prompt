# How to Use This YAML Prompt Pack

## Choose a prompt
Open `PROMPT_INDEX.yaml` (or browse `prompts/`) and pick the app you want by `prompt_id`, `title`, or `category`.

## Open a YAML file
Open the matching file in `prompts/`, e.g. `prompts/01-hotel-booking-app.yaml`. The structured fields describe the app; the `ready_to_use_prompt` field holds the full prompt.

## Copy the ready_to_use_prompt field
Copy the entire text under `ready_to_use_prompt:` (the block after the `|`). That is the customer-facing, copy-paste prompt.

## Paste into your AI coding tool
- **Claude / Cursor / Replit:** paste the prompt and let it scaffold the project, then run it.
- **Lovable / Bolt / v0:** paste the prompt as your first message to get a live, working build you can iterate on.

## Run the generated app locally
Follow the README the tool generates. For these prompts the flow is usually:
1. `npm install`
2. `npx prisma migrate dev` (creates the local database)
3. `npm run seed` or `npx prisma db seed` (loads demo data)
4. `npm run dev` (starts the app); open the local URL and log in with the demo credentials.

## Connect real API keys
Copy `.env.example` to `.env`, then fill in real values to move from mock mode to live providers (database, payments, email/SMS, AI). See `PRODUCTION_READINESS_GUIDE.md`.

## Deploy
Use `DEPLOYMENT_GUIDE.md` for Vercel or Docker, a PostgreSQL database, environment variables, migrations, the build command, and a post-deployment smoke test.

## Ask the AI to fix errors
If a step fails, paste the exact error back into the tool and ask it to fix it, then re-run the failing command.
