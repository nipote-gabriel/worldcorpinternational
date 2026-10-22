# WorldCorp International

Static site, deployed on Vercel from `main`. No build step.

- Pages: `index.html`, `about.html`, `centres.html`, `stories.html`, `article.html`, `publications.html`, `events.html`, `join.html`, `404.html`
- Content (Centres, stories, reports, affiliated organizations, links): `js/wc-data.js`
- Shared header, menu, dialogs and footer: `js/wc-layout.js`
- Rendering and interactions: `js/wc.js`
- Styles: `css/wc.css` (Inter Tight is self-hosted in `assets/fonts`, OFL)
- Stories and reports open at `article.html?s=<slug>`; add new ones to `WC.stories` or `WC.reports`.

## Local preview
```
python3 -m http.server 8080
```
