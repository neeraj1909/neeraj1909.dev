# Neeraj Singh — portfolio site

This repository contains the static source for the portfolio currently published at [neeraj1909.dev](https://neeraj1909.dev). The older [neeraj1909.github.io](https://neeraj1909.github.io/) remains a separate site with its own source repository.

## Source files

- `index.html` — home page and most portfolio copy.
- `projects/index.html` and `research/index.html` — project and research pages.
- `styles.css` — shared layout, typography, and responsive styling.
- `assets/og-preview.png` — social preview image served by the site. `og-preview.svg` is the editable vector artwork used to make it.
- `favicon.svg` — browser icon. The prior résumé copy remains local under `resume/` but is excluded from the public build pending verification of an updated version.
- `build.mjs` — copies the site inputs into `dist/`.
- `sitemap.xml` — lists the three canonical public pages; `robots.txt` points crawlers to it.
- `.openai/hosting.json` — Sites project identity and static output configuration (`dist`). Keep the existing project ID when updating this Site.

Edit the source HTML and CSS, not the generated `dist/` copy. Update page titles, descriptions, canonical links, and Open Graph/Twitter metadata in each page's `<head>` when changing page content or its share preview.

## Build and preview

Requires Node.js and npm. From this directory:

```sh
npm run build
python3 -m http.server 4173 --directory dist
```

Open <http://localhost:4173/>. The build removes and recreates `dist/`, copying the home page, `projects/`, `research/`, shared stylesheet, favicon, `assets/`, `sitemap.xml`, and `robots.txt`; it does not copy the local résumé source. Stop the preview server with Ctrl+C.

Google describes a sitemap as a discovery and crawling hint; it does not guarantee that Google will crawl or index the listed URLs ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)).

## Release

The Sites manifest targets the static `dist/` output. For a hosted update, follow the connected Sites workflow: push the intended source revision, save a version from that exact revision, then deploy the saved version. A successful Sites deployment reports the production URL. Local building and previewing do not publish changes. The legacy site is maintained separately.
