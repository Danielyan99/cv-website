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

## Structure

- `src/content/` — CV text and data, kept separate from markup
- `src/sections/` — one file per page section (Hero, Experience, Skills, …)
- `src/components/` — shared UI (Header, Footer, Reveal, ScrollProgressBar)
- `src/hooks/` — small reusable hooks (reduced motion, scroll-in-view, count-up)
- `e2e/` — Playwright specs
- `public/resume.pdf` — the downloadable CV, generated from the same approved text as this site
