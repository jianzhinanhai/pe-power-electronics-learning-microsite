# Power Electronics Learning Microsite

This deployment package contains an approved single-page interactive HTML learning microsite.

## Entry point

Open `index.html` in a browser.

## Content boundary

- Source HTML was provided by the user in the uploaded ZIP archive.
- The user confirmed the HTML content and functionality before S4 packaging.
- This package does not independently verify every factual statement, company entry, image source, or external URL in the HTML.
- The page contains remote/public URLs as embedded by the approved source HTML. Those resources may depend on third-party availability and policies.
- Before publishing to GitHub Pages, review the page for confidential, client-sensitive, personal, or restricted information.

## Package contents

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

From this folder, run one of the following:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

or open `index.html` directly in a browser.

## Publication safety

GitHub Pages is normally suitable for public pages. Do not publish credentials, tokens, private keys, customer-sensitive material, private personal information, or hidden internal notes.

## Generated

- Package generated at: `2026-06-13T12:18:23+08:00`
- Source archive: `pe_power_electronics_learning_microsite_v3_2_s4_fixed_selfcontained.zip`
- Source HTML: `pe_power_electronics_learning_microsite_v3_2_s4_fixed_selfcontained.html`
- Source SHA-256: `4bdc7bcc2adcc75f4c67932a5ccbcef67a1d1caf21023ad1d4818917f4ee2609`
- Packaged `index.html` SHA-256: `4ce0bed7b0be57b95711c2b066f8a4fdb2d94e431b1a21cedd8fd73839d07a5e`
