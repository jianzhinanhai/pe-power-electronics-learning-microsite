# Deployment Instructions

## Target

- Repository: `jianzhinanhai/pe-power-electronics-learning-microsite`
- Pages URL: https://jianzhinanhai.github.io/pe-power-electronics-learning-microsite/
- Entrypoint: `index.html`

## Recommended Codex flow

1. Unzip this package.
2. Open the folder in Codex / local environment.
3. Read `CODEX_PROMPT.md`.
4. Use GitHub CLI authentication only through browser-based `gh auth login` if needed.
5. Replace the existing site files with this package content.
6. Commit and push.
7. Wait for GitHub Pages deployment.
8. Run a real-browser audit on desktop and mobile viewport.

## Required post-deploy evidence

Codex should produce an evidence pack:

- `live.html`
- `desktop-1440.png`
- `mobile-390.png`
- `network-status.json`
- `console.log`
- `live-vs-local-diff.txt`
- `release-audit.json`

## Do not

- Do not ask the user for GitHub password, token, SSH private key, or 2FA code in chat.
- Do not rewrite page content unless required for deployment compatibility.
- Do not proceed to final PDF/archive until release audit is Go or accepted Conditional Go.
