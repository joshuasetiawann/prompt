#!/usr/bin/env bash
# Post-build verification sweep: per-app screenshot count + dev-log error scan.
# Usage: bash tools/.run/verify.sh [START] [END]   (default 1..100)
set -uo pipefail
ROOT="/mnt/storage/VSCode/50-production-grade-app-prompts-yaml"
cd "$ROOT"
START="${1:-1}"; END="${2:-100}"
SUSPECT=0; TOTAL=0
printf "%-4s %-46s %-7s %-7s %s\n" "ID" "slug" "shots" "errs" "status"
printf '%.0s-' {1..90}; echo
for n in $(seq "$START" "$END"); do
  ID="$(printf '%02d' "$n")"
  APP="$(ls apps 2>/dev/null | grep "^${ID}-" | head -1)"
  [ -z "$APP" ] && { printf "%-4s %-46s %-7s %-7s %s\n" "$ID" "(missing dir)" "-" "-" "NO-DIR"; SUSPECT=$((SUSPECT+1)); continue; }
  TOTAL=$((TOTAL+1))
  SHOTS=$(ls "apps/$APP/screenshots" 2>/dev/null | grep -c '\.png$'); SHOTS=${SHOTS:-0}
  LOG="tools/.run/dev-${ID}.log"
  ERRS=$(grep -cE "Module not found|⨯|Error:|Failed to compile|Unhandled" "$LOG" 2>/dev/null); ERRS=${ERRS:-0}
  STATUS="ok"
  if [ "${SHOTS:-0}" -lt 5 ]; then STATUS="LOW-SHOTS"; SUSPECT=$((SUSPECT+1));
  elif [ "${ERRS:-0}" -gt 0 ]; then STATUS="DEV-ERRORS"; SUSPECT=$((SUSPECT+1)); fi
  printf "%-4s %-46s %-7s %-7s %s\n" "$ID" "$APP" "${SHOTS:-0}" "${ERRS:-0}" "$STATUS"
done
printf '%.0s-' {1..90}; echo
echo "Apps checked: $TOTAL   Suspects (low shots / dev errors / missing): $SUSPECT"
