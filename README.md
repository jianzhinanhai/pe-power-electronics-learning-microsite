# Power Electronics Learning Microsite

This folder contains the approved static HTML microsite update package for GitHub Pages.

## Entry point

- `index.html`

## Current update

Version: `v3.5`  
Generated at: `2026-06-13T08:37:35Z`

This update applies the user-confirmed **text-only System View** revision:

- removes unsuitable icon/image thumbnails from the home System View;
- keeps the System View as a structured text chain from energy sources to end-use loads;
- preserves scenario architecture images and product images;
- removes learner-facing text that looked like page-generation instructions, audit process notes, or revision requirements.

## Content boundary

Approved learning microsite content. Public page should contain only learner-facing explanatory content; no process notes, audit comments, prompts, revision instructions, or internal workflow text. System View is text-only; user-uploaded icon sheets are not used in this version after review.

Before publishing publicly, review `index.html` for confidential, personal, credential, customer-sensitive, or hidden internal information.

## File structure

```text
.
├── index.html
├── README.md
├── DEPLOYMENT.md
├── CODEX_PROMPT.md
├── MANIFEST.json
├── .nojekyll
├── .github/
│   └── workflows/
│       └── pages.yml
└── scripts/
    ├── setup_pages_branch.sh
    ├── setup_pages_branch.ps1
    ├── generate_qr.py
    └── export_pdf_playwright.js
```

## Local preview

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.
