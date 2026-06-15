# emirtarik.github.io

Personal website of **Emir Tarık Dakın** — economist and data scientist based in Paris,
working in econometrics, applied statistics, and machine learning.

Live at **[emirtarik.github.io](https://emirtarik.github.io/)**.

## Overview

The site is a static, hand-written HTML/CSS website served directly from this
repository via GitHub Pages. There is no build step required to view or deploy it.

- **`index.html`** — landing page with education, experience, projects & research, skills, and contact.
- **`courses.html`** — teaching page linking to course materials.
- **`style.css`** — site-wide styles.
- **`public/`** — static assets:
  - `content/` — CV (`Dakin_CV.pdf`) and profile image.
  - `courses/` — teaching materials (`applied_metrics`, `introductory_econ`, `python_and_machine_learning`).
  - icons, favicon, `manifest.json`, `robots.txt`.

## Local preview

No tooling is needed — open `index.html` directly in a browser, or serve the folder
with any static server, for example:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

The site is hosted on GitHub Pages and deploys automatically from the default branch.
Push to `main` and the changes go live at [emirtarik.github.io](https://emirtarik.github.io/).

## License

Site content (text, CV, and images) © Emir Tarık Dakın. Third-party course materials
remain the property of their respective owners.
