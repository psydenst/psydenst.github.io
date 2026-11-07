import { defineConfig } from 'astro/config';

// Default target: GitHub user site https://psydenst.github.io (repo name pending approval).
// If the repo is named `portfolio`, set base: '/portfolio'.
export default defineConfig({
  site: 'https://psydenst.github.io',
  output: 'static',
  trailingSlash: 'ignore',
});
