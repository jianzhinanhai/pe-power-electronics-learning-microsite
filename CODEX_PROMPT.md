# Codex Prompt: Update Existing GitHub Pages Site

You are updating an existing static GitHub Pages microsite.

## Repository

`jianzhinanhai/pe-power-electronics-learning-microsite`

## Goal

Publish the approved `index.html` from this package to the existing GitHub Pages site:

`https://jianzhinanhai.github.io/pe-power-electronics-learning-microsite/`

## Package contents

The package should contain:

- `index.html`
- `README.md`
- `DEPLOYMENT.md`
- `CODEX_PROMPT.md`
- `MANIFEST.json`
- `.nojekyll`
- `.github/workflows/pages.yml`
- `scripts/`

## Task

1. Inspect the package files.
2. Inspect the existing repository.
3. Replace the repository root `index.html` with the package `index.html`.
4. Preserve existing repository settings unless a deployment fix is required.
5. Add or update `.nojekyll`, README, deployment docs, manifest, workflow, and scripts only where appropriate.
6. Do not rewrite page content unless required for deployment compatibility.
7. Confirm the page source does not include visible process notes, audit comments, prompts, revision instructions, or internal workflow text.
8. Commit with a clear message, for example:

   `Update microsite System View and clean learner-facing copy`

9. Push to the deployment branch.
10. Check GitHub Pages deployment status.
11. After deployment, open the Pages URL and run a basic smoke test:
    - page loads successfully;
    - desktop layout renders;
    - mobile viewport does not hide the main navigation/search controls behind horizontal scrolling;
    - System View is text-only and does not show cropped icon thumbnails;
    - scenario architecture images remain present;
    - product images remain present;
    - no process/audit/instructional production text is visible.

## Security rules

- Do not ask the user for GitHub password.
- Do not ask the user to paste a token in chat.
- Do not ask for SSH private key or 2FA code.
- Use `gh auth login` for browser-based authorization if authentication is needed.
- Treat GitHub Pages as public unless private Pages access has been explicitly configured and verified.
- Do not publish credentials, tokens, private keys, customer-sensitive information, personal data, hidden notes, prompts, audit drafts, or internal process instructions.

## Return format

Return:

- Repository URL
- Pages URL
- Latest commit hash
- Deployment status
- Build errors, if any
- Remediation steps, if any
