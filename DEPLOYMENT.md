# Deployment Guide

## Project

`pe-power-electronics-learning-microsite`

## Local preview

```bash
cd <this-package-folder>
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000/
```

## First-time GitHub Pages publish with Codex

1. Open this package folder in Codex or a local terminal.
2. Read `CODEX_PROMPT.md`.
3. Use GitHub CLI authentication through browser-based authorization only:

```bash
gh auth status
gh auth login
```

4. Do not paste GitHub passwords, tokens, SSH private keys, or 2FA codes into chat.
5. Create or update the repository.
6. Push all files.
7. Enable GitHub Pages using either:
   - GitHub Actions workflow in `.github/workflows/pages.yml`, or
   - repository Pages settings if your organization uses a branch-based setup.
8. Return the repository URL, Pages URL, latest commit hash, and deployment status.

## Suggested repository

```text
<OWNER>/pe-power-electronics-learning-microsite
```

## Pages source

Recommended: GitHub Actions workflow from `.github/workflows/pages.yml`.

## Post-release audit

After publishing, provide the Pages URL and request:

```text
页面已发布，URL 是：<url>。按 Skill 执行发布后审计。
```

## Security reminder

Treat GitHub Pages as public unless private Pages access has been explicitly configured and verified.
