# Codex Prompt: Publish Approved Interactive HTML Page to GitHub Pages

You are helping publish a static interactive HTML information page to GitHub Pages.

## Goal

Publish the approved `index.html` in this package as a GitHub Pages site.

## Project

- Project name: `Power Electronics Learning Microsite`
- Suggested repository: `<OWNER>/pe-power-electronics-learning-microsite`
- Entry file: `index.html`
- Pages source: GitHub Actions workflow unless the user explicitly requests branch-based Pages.
- Visibility: `public GitHub Pages by default unless private Pages access is explicitly configured and verified`

## Required files to preserve

- `index.html`
- `README.md`
- `DEPLOYMENT.md`
- `MANIFEST.json`
- `.nojekyll`
- `.github/workflows/pages.yml`
- `scripts/setup_pages_branch.sh`
- `scripts/setup_pages_branch.ps1`
- `scripts/generate_qr.py`
- `scripts/export_pdf_playwright.js`

## Instructions

1. Inspect the project files.
2. Do not rewrite page content unless necessary for deployment compatibility.
3. Run:

```bash
gh auth status
```

4. If not authenticated, run:

```bash
gh auth login
```

Let the user complete authorization in the browser.

5. Do not ask the user for a GitHub password.
6. Do not ask the user to paste a token into chat.
7. Do not ask for an SSH private key or 2FA code.
8. Initialize git if needed.
9. Create the repository if it does not exist.
10. Commit and push all files.
11. Enable GitHub Pages through the included workflow or the configured Pages settings.
12. Poll deployment status until complete, or report the exact blocking error.
13. Test the Pages URL on desktop and a mobile-width viewport if possible.
14. Return:
    - repository URL
    - Pages URL
    - latest commit hash
    - deployment status
    - build errors, if any
    - remediation steps, if any

## Publication safety

Before pushing, remind the user that GitHub Pages should be treated as public unless private Pages access is explicitly configured and verified. Do not publish credentials, private keys, customer-sensitive information, personal private data, or hidden internal notes.

## Expected output from Codex

```text
Repository URL:
Pages URL:
Latest commit hash:
Deployment status:
Errors:
Remediation:
```
