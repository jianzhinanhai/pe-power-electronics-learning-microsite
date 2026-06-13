#!/usr/bin/env bash
set -euo pipefail

echo "This script is a helper for local GitHub Pages setup."
echo "Use gh auth login for browser-based authorization; do not paste secrets into chat."

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is not installed. Install gh or use the GitHub web UI."
  exit 1
fi

gh auth status || gh auth login
echo "Authenticated. Continue with repo-specific git commands from DEPLOYMENT.md."
