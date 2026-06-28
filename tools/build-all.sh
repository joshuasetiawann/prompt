#!/usr/bin/env bash
# Build, seed, screenshot and commit every app (or a range). One commit per project.
# Usage: bash tools/build-all.sh [START] [END]   (defaults 1..50)
set -uo pipefail
ROOT="/mnt/storage/VSCode/50-production-grade-app-prompts-yaml"
cd "$ROOT"
START="${1:-1}"; END="${2:-50}"
PROG="$ROOT/tools/.run/progress.log"
mkdir -p "$ROOT/tools/.run"

for n in $(seq "$START" "$END"); do
  ID="$(printf '%02d' "$n")"
  APPFILE="$(ls prompts | grep "^${ID}-" | head -1)"
  [ -z "$APPFILE" ] && continue
  SLUG="${APPFILE%.yaml}"
  APPDIR="apps/$SLUG"

  echo "──────── [$ID] $SLUG ────────"
  bash tools/run-app.sh "$n" 2>&1 | sed "s/^/[$ID] /"
  SHOTS=$(ls "$ROOT/$APPDIR/screenshots" 2>/dev/null | wc -l | tr -d ' ')

  # title from prompt
  TITLE="$(grep -m1 '^title:' "prompts/$APPFILE" | sed 's/^title:[[:space:]]*//')"
  KIND="$(node -e "import('./tools/lib/spec.mjs').then(m=>{const s=m.loadSpec('prompts/$APPFILE',$((n-1)));console.log(s.kind)})" 2>/dev/null)"

  git add "$APPDIR" 2>/dev/null
  if git diff --cached --quiet; then
    echo "[$ID] nothing to commit"
  else
    git commit -q -m "Build app $ID: $TITLE

Runnable ${KIND:-app} scaffold generated from prompt $ID ($SLUG).
Next.js + Prisma (SQLite) + Tailwind, seeded demo data, $SHOTS screenshots.

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
    echo "[$ID] committed ($SHOTS shots) -> $(git rev-parse --short HEAD)"
  fi
  echo "$ID	$SLUG	shots=$SHOTS	$(git rev-parse --short HEAD)" >> "$PROG"
done
echo "DONE range $START..$END"
