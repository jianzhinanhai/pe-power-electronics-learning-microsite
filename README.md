# Power Electronics Learning Microsite

This is a deployment test package / release-candidate package for the existing GitHub Pages site.

## Current workflow status

- Workflow stage: S6 No-Go -> S2 fix / real-browser deployment test
- Package type: Full deployment test package, not final PDF/archive
- Target repository: `jianzhinanhai/pe-power-electronics-learning-microsite`
- Target Pages URL: https://jianzhinanhai.github.io/pe-power-electronics-learning-microsite/
- Entrypoint: `index.html`

## Important boundary

The uploaded `index.html` has been preserved as the page entry file for deployment testing.

Static inspection found:

- HTML size: 31,999,388 bytes
- `<img src>` total: 24
- embedded `data:image` images: 8
- remote image URLs: 16
- product image elements using `product-img`: 16

The current file still contains 16 remote product image URLs. This package intentionally preserves them because the user requested a full package for Codex deployment and real browser testing.

## Local preview

From this folder:

```bash
python3 preview_server.py
```

Then open the printed local URL in a browser.

## Security note

GitHub Pages should be treated as public unless private Pages access has been explicitly configured and verified. Do not publish credentials, tokens, private keys, customer-sensitive data, or hidden internal notes.
