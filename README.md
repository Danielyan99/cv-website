# CV Website

Personal CV and portfolio site of Narek Danielyan, senior front-end engineer.

**Live:** https://danielyan99.github.io/cv-website/

## Stack

- React 19 + TypeScript, built with Vite
- Vitest + React Testing Library for unit/component tests
- Playwright for end-to-end tests (run in CI — see below)
- Deployed to GitHub Pages via GitHub Actions on every push to `main`

## Development

```bash
npm install
npm run dev      # local dev server
npm run test     # unit/component tests
npm run lint     # oxlint
npm run build    # production build to dist/
```

End-to-end tests (`npm run test:e2e`) need Playwright's browser binaries
(`npx playwright install chromium`) and run against a production build via
`vite preview`. They run automatically in CI; a large binary download makes
them unreliable in some sandboxed local environments.

## Analytics

Visits and key clicks are tracked with [Umami Cloud](https://umami.is):
cookie-free, so no consent banner. Code: `src/lib/analytics.ts`.

- **Setup:** set the repo variable `UMAMI_WEBSITE_ID` (Settings → Secrets and
  variables → Actions → Variables). Without it, nothing is loaded.
- Only counts on `danielyan99.github.io`, never in dev, preview or CI.
- Events: `cv_download`, `email_click`, `social_click`, `project_click`,
  `experience_expand`, `section_view` (each with properties, see
  `AnalyticsEvents`). Calls are no-ops when Umami is blocked.

### Tracking links

Send each company its own link, then check Umami's UTM report:

```
https://danielyan99.github.io/cv-website/?utm_source=<company>&utm_medium=application&utm_campaign=<role>
```

Example: `?utm_source=bairesdev&utm_medium=application&utm_campaign=react-dev`

To keep your own visits out of the stats, follow Umami's "Exclude my own
visits" guide in each browser you use.

## Structure

- `src/content/` — CV text and data, kept separate from markup
- `src/sections/` — one file per page section (Hero, Experience, Skills, …)
- `src/components/` — shared UI (Header, Footer, Reveal, ScrollProgressBar)
- `src/hooks/` — small reusable hooks (reduced motion, scroll-in-view, count-up)
- `e2e/` — Playwright specs
- `public/resume.pdf` — the downloadable CV, generated from the same approved text as this site
