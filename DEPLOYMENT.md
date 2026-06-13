# Deployment Guide

Target repository: `jianzhinanhai/pe-power-electronics-learning-microsite`  
Expected Pages URL: `https://jianzhinanhai.github.io/pe-power-electronics-learning-microsite/`

## Recommended update flow

1. Unzip this package.
2. Review `index.html` locally.
3. Replace the repository root `index.html` with this package's `index.html`.
4. Preserve or update the support files as needed:
   - `README.md`
   - `DEPLOYMENT.md`
   - `CODEX_PROMPT.md`
   - `MANIFEST.json`
   - `.nojekyll`
   - `.github/workflows/pages.yml`
   - `scripts/`
5. Commit and push to the GitHub Pages source branch.
6. Wait for Pages deployment to complete.
7. Re-open the Pages URL and run S6 release audit.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## GitHub Pages safety

Do not publish credentials, tokens, SSH keys, personal data, customer-sensitive information, hidden notes, prompts, audit drafts, or internal process instructions.

Use browser-based GitHub CLI authentication when needed:

```bash
gh auth login
```

Do not paste GitHub passwords, personal access tokens, SSH private keys, or 2FA codes into chat.
