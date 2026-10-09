# GRAIL landing page

Static landing page for GRAIL, intended for GitHub Pages at https://mamund.github.io/grail-site/.

## Preview locally

Open `index.html` in a browser, or serve this directory with:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000/.

## Publish

1. Create public GitHub repository `mamund/grail-site`.
2. Add these files at the repository root and push to `main`.
3. In **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then save.
4. Wait for the deployment to finish and visit https://mamund.github.io/grail-site/.

## Before publishing

- Confirm the final documentation and example URLs; the initial version links to `grail-public` as a safe placeholder.
- Review the provisional architecture diagram for conceptual accuracy.
- Replace the provisional geometric favicon with the final GRAIL identity when available.

## Link destinations

- Runtime, source, documentation: https://github.com/mamund/grail-release
- Examples: https://github.com/mamund/grail-public
- npm: https://www.npmjs.com/package/@mamund/grail
