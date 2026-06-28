#!/usr/bin/env bash
# Prepare one app (generate code, prisma client, db, seed) then screenshot it.
set -uo pipefail
ID="$(printf '%02d' "$((10#$1))")"
ROOT="/mnt/storage/VSCode/50-production-grade-app-prompts-yaml"
cd "$ROOT"

node tools/generate.mjs "$ID" >/dev/null 2>&1 || { echo "GEN FAIL $ID"; exit 1; }
APP="$(ls apps | grep "^${ID}-" | head -1)"
if [ -z "$APP" ]; then echo "NO APP DIR $ID"; exit 1; fi
cd "$ROOT/apps/$APP"
export DATABASE_URL="file:./dev.db"

# Wipe any stale generated client / build cache so a half-written prisma client
# from a previous interrupted run can't corrupt this build (see app 29 incident).
rm -rf generated .next

mkdir -p "$ROOT/tools/.run"
LOG="$ROOT/tools/.run/prep-$ID.log"
{
  npx prisma generate --schema=prisma/schema.prisma 2>&1
  npx prisma db push --schema=prisma/schema.prisma --skip-generate --accept-data-loss 2>&1
  npx tsx prisma/seed.ts 2>&1
} > "$LOG" 2>&1
SEEDLINE="$(grep -E 'Seed complete|Error|error:' "$LOG" | tail -1)"
echo "[$ID] prep: ${SEEDLINE:-(see $LOG)}"

cd "$ROOT"
node tools/screenshot.mjs "$ID" 2>&1
