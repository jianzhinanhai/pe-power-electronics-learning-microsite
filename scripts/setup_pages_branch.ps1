$ErrorActionPreference = "Stop"

Write-Host "Checking required files..."
$required = @(
  "index.html",
  "README.md",
  "DEPLOYMENT.md",
  "CODEX_PROMPT.md",
  "MANIFEST.json",
  ".nojekyll",
  ".github/workflows/pages.yml"
)

foreach ($file in $required) {
  if (!(Test-Path $file)) {
    throw "Missing required file: $file"
  }
}

Write-Host "Package looks ready for GitHub Pages publishing."
Write-Host "Use: gh auth login"
Write-Host "Then create/push a repository and enable Pages via GitHub Actions."
