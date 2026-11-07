import { defineConfig } from 'astro/config';
import { shikiTheme } from './src/styles/shiki-theme.mjs';

// Default target: GitHub user site https://psydenst.github.io (repo name pending approval).
// If the repo is named `portfolio`, set base: '/portfolio'.
export default defineConfig({
  site: 'https://psydenst.github.io',
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  markdown: {
    shikiConfig: { theme: shikiTheme, wrap: false },
  },
});
