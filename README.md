# psydenst.github.io

Personal blog of **psydenst**. Static site built with [Astro](https://astro.build), dark by default with a light mode, bilingual (English default, Portuguese at `/pt/`). The hero artwork lives in `public/artwork/hero.webp`.

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
| `/portfolio` | Redirects to LinkedIn (`redirects` in `astro.config.mjs`) |
| `/blog` | All posts, with section filter |
| `/blog/technical-studies`, `/blog/fichamentos`, `/blog/comments`, `/blog/articles` | Section pages ("Reading notes" is the English label of `fichamentos`) |
| `/blog/tags/<tag>/` | Topic page: every post with that tag (e.g. `/blog/tags/privacy/`) |
| `/blog/<section>/<slug>/` | A post |

## Structure

- `src/pages/` – thin route files for both locales; they render the shared views in `src/views/`.
- `src/i18n/ui.ts` – all UI strings, per language. `src/i18n/utils.ts` – `getLangFromUrl`, `useTranslations`, `localizePath`, `formatDate`.
- `src/lib.ts` – post queries (`getPosts`, `postUrl`, static paths, reading time).
- `src/data/site.ts` – blog sections (labels in both languages), GitHub and Nym links.
- `src/styles/` – `tokens.css` (both palettes), `global.css`, `layout.css` (header, hero, footer, theme switch), and `nvim.css` (editor chrome and the article reader). `shiki-theme.mjs` holds the two code-highlighting themes.

## Theme

The whole site uses a Neovim-flavoured look: tabline and statusline on every page, blinking cursor in titles, faint HUD grid. The home hero keeps the painting, faded into the canvas. Posts get an outline sidebar that highlights the current section, `##`-prefixed headings, highlighted bold phrases, responsive tables and video embeds, and code blocks with a line-number gutter.

Three colorschemes, each with a matching code-highlighting theme in `shiki-theme.mjs`:

| Theme | Selector in `tokens.css` | Code theme | Look |
|---|---|---|---|
| `nvim` (default) | `:root` | `shikiTheme` | Tokyo Night-style blue-black, neon cyan accent |
| `astrodark` | `html[data-theme='astrodark']` | `astrodarkTheme` | AstroNvim's default (astrotheme palette): flat `#1a1d23`, blue `#50a4e9` accent |
| `peachpuff` | `html[data-theme='peachpuff']` | `peachpuffTheme` | Vim's peachpuff: peach background, black text, black statusline, red line numbers |

The picker at the far right of the header sets `data-theme` on `<html>` and stores the choice in `localStorage`; an inline script in `Base.astro` applies it before first paint.

## Posts

Posts live in `src/content/blog/<lang>/<section>/<slug>.md`. The file name is the slug; the same slug in `en/` and `pt/` makes the two files translations of each other. A post without a translation is still listed in the other language, with a language badge and an "only available in …" notice.

```markdown
---
title: "My post"
date: 2026-11-07
section: technical-studies   # technical-studies | fichamentos | comments | articles
lang: en                     # en | pt (language of the text)
tags: [devops, privacy]
description: "One-line summary shown in lists and meta tags."
cover: "/blog/my-post/cover.webp"   # optional, file in public/
source: "https://nym.com/blog/..."  # optional: where it was first published
sourceName: "Nym"                   # optional: label for the source link
readingTime: 6                      # optional: overrides the computed minutes
draft: false                        # true hides it from the build
---

Body in Markdown.
```

### Topics (tags)

Tags are the blog's topics. Every tag used by a published post gets its own page at `/blog/tags/<tag>/` in both languages, and a post with several tags appears on each of those pages. The blog index and the home page list the topics with post counts; the section (Articles, Reading notes, …) is kept as a secondary "type" filter. Tags must be lowercase-hyphenated slugs. Labels and one-line descriptions per language live in `topics` in `src/data/site.ts`; a new tag works without an entry there and is labelled with the tag itself.

Current tags: `privacy`, `cybersecurity`, `technology-and-society`, `crypto`, `devops`, `42-rncp7`.
Sections are defined in `src/data/site.ts`; the schema is in `src/content.config.ts`. Empty sections show "No texts in this section yet."

`src/content/blog/en/technical-studies/hello-world.md` is a starter post kept as `draft: true`; set it to `false` to see a code-heavy post, or delete it.

### Articles first published on Nym

`src/content/blog/{en,pt}/articles/` holds the author's articles from the [Nym blog](https://nym.com/blog/author/pedro-sydenstricker), republished in full (text, headings, tables, images, videos, FAQs). Images are in `public/blog/<slug>/`. Each post sets `source` / `sourceName`, which adds an "Originally published on Nym" side note and footer link to the original. Promotional blocks (pricing banners, download buttons) are left out. Links between republished articles point to the local copies; other Nym links stay absolute.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds on every push to `main` and deploys `dist/` with GitHub Pages Actions. In the repository, set **Settings → Pages → Source: GitHub Actions**. `astro.config.mjs` sets `site: 'https://psydenst.github.io'`; no custom domain. If the repo is ever not named `psydenst.github.io`, add a matching `base` in the config.

## Content constraints

- Republished articles always keep their `source` link to the original publication.
- Do not publish 42 graded project solutions, secrets, or contact details not supplied by the owner.
