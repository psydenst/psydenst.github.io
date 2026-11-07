# psydenst.github.io

Personal portfolio and blog of **psydenst**. Static site built with [Astro](https://astro.build), dark mode only, bilingual (English default, Portuguese at `/pt/`). The hero artwork lives in `public/artwork/hero.webp`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

Requires Node 22+ (CI uses Node 24).

## Routes

Every route exists in English (no prefix) and Portuguese (`/pt/...`). The EN/PT switch in the header links to the same page in the other language.

| Path | Page |
|---|---|
| `/` · `/pt/` | Home |
| `/about` | About |
| `/portfolio` | Portfolio (data: `src/data/portfolio.ts`) |
| `/blog` | All posts, with section filter |
| `/blog/technical-studies`, `/blog/fichamentos`, `/blog/comments`, `/blog/articles` | Section pages |
| `/blog/<section>/<slug>/` | A post |
| `/publications` | Nym articles (data: `src/data/publications.ts`) |

## Structure

- `src/pages/` – thin route files for both locales; they render the shared views in `src/views/`.
- `src/i18n/ui.ts` – all UI strings, per language. `src/i18n/utils.ts` – `getLangFromUrl`, `useTranslations`, `localizePath`, `formatDate`.
- `src/data/site.ts` – blog sections (labels in both languages), GitHub and Nym links.
- `src/styles/` – `tokens.css` (palette from the painting), `global.css`, `layout.css`, and `nvim.css` (the blog reader theme). `shiki-theme.mjs` is the code-highlighting palette.

## Blog reader theme

Blog pages (`/blog/**`) switch to a Neovim-flavoured dark theme (`<html data-theme="nvim">`): tabline and statusline, blinking cursor in titles, outline sidebar on posts, code blocks with a line-number gutter and a Tokyo Night-style palette (`src/styles/shiki-theme.mjs`). Everything else uses the portfolio theme.

## Add a blog post

Create a Markdown file in `src/content/blog/` (subfolders are fine). The file name becomes the slug. Posts are listed in both language versions of the site; `lang` marks the language the text is written in.

```markdown
---
title: "My post"
date: 2026-11-07
section: technical-studies   # technical-studies | fichamentos | comments | articles
lang: en                     # en | pt (language of the text)
tags: [devops, privacy]
description: "One-line summary shown in lists and meta tags."
draft: false                 # true hides it from the build
---

Body in Markdown.
```

Suggested tags: `42-rncp7`, `cybersecurity`, `devops`, `privacy`, `technology-and-society`.
Sections are defined in `src/data/site.ts`; the schema is in `src/content.config.ts`. Empty sections show "No texts in this section yet."

`src/content/blog/technical-studies/hello-world.md` is a starter post kept as `draft: true`; set it to `false` to see the reader theme, or delete it.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds on every push to `main` and deploys `dist/` with GitHub Pages Actions. In the repository, set **Settings → Pages → Source: GitHub Actions**. `astro.config.mjs` sets `site: 'https://psydenst.github.io'`; no custom domain. If the repo is ever not named `psydenst.github.io`, add a matching `base` in the config.

## Content constraints

- Nym publications are **outbound links only**: title, date, a one-line teaser, and a "Read on Nym" link, each in EN and PT. Never scrape, copy, or republish Nym article bodies in this repo.
- If a Nym URL later 404s, keep the card; do not invent a replacement.
- Do not publish 42 graded project solutions, secrets, or contact details not supplied by the owner.
