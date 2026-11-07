# psydenst.github.io

Personal portfolio and blog of **psydenst**. Static site built with [Astro](https://astro.build), dark mode only, English UI. The visual identity comes from the owner's original painting (`public/artwork/hero.webp`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

Requires Node 22+ (CI uses Node 24).

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/portfolio` | Portfolio (data: `src/data/portfolio.ts`) |
| `/blog` | All posts, with section filter |
| `/blog/technical-studies`, `/blog/fichamentos`, `/blog/comments`, `/blog/articles` | Section pages |
| `/blog/<section>/<slug>/` | A post |
| `/publications` | Nym articles (data: `src/data/publications.ts`) |

## Add a blog post

Create a Markdown file in `src/content/blog/` (subfolders are fine). The file name becomes the slug.

```markdown
---
title: "My post"
date: 2026-11-07
section: technical-studies   # technical-studies | fichamentos | comments | articles
tags: [devops, privacy]
description: "One-line summary shown in lists and meta tags."
draft: false                 # true hides it from the build
---

Body in Markdown.
```

Suggested tags: `42-rncp7`, `cybersecurity`, `devops`, `privacy`, `technology-and-society`.
Sections are defined in `src/data/site.ts`; the schema is in `src/content.config.ts`. Empty sections show "No texts in this section yet."

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds on every push to `main` and deploys `dist/` with GitHub Pages Actions. In the repository, set **Settings → Pages → Source: GitHub Actions**. `astro.config.mjs` sets `site: 'https://psydenst.github.io'`; no custom domain. If the repo is ever not named `psydenst.github.io`, add a matching `base` in the config.

## Content constraints

- Nym publications are **outbound links only**: title, date, language, a one-line teaser written from the title, and a "Read on Nym" link. Never scrape, copy, or republish Nym article bodies in this repo.
- If a Nym URL later 404s, keep the card; do not invent a replacement.
- Do not publish 42 graded project solutions, secrets, or contact details not supplied by the owner.
- The painting is the owner's original artwork; it is credited in the footer.
