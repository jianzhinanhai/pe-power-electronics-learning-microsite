Write-Host "This script is a helper for local GitHub Pages setup."
Write-Host "Use gh auth login for browser-based authorization; do not paste secrets into chat."

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  Write-Error "GitHub CLI (gh) is not installed. Install gh or use the GitHub web UI."
  exit 1
}

gh auth status
if ($LASTEXITCODE -ne 0) {
  gh auth login
}

Write-Host "Authenticated. Continue with repo-specific git commands from DEPLOYMENT.md."
