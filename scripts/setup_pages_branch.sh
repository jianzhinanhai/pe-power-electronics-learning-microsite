#!/usr/bin/env bash
set -euo pipefail

echo "Checking required files..."
test -f index.html
test -f README.md
test -f DEPLOYMENT.md
test -f CODEX_PROMPT.md
test -f MANIFEST.json
test -f .nojekyll
test -f .github/workflows/pages.yml

if ! command -v git >/dev/null 2>&1; then
  echo "git is required." >&2
  exit 1
fi

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is recommended for publishing." >&2
fi

echo "Package looks ready for GitHub Pages publishing."
echo "Use: gh auth login"
echo "Then create/push a repository and enable Pages via GitHub Actions."
