import { defineConfig } from 'astro/config';
import { astrodarkTheme, peachpuffTheme, shikiTheme } from './src/styles/shiki-theme.mjs';

const linkedin = 'https://www.linkedin.com/in/pedrosydenstricker/';

export default defineConfig({
  site: 'https://psydenst.github.io',
  output: 'static',
  trailingSlash: 'ignore',
  redirects: {
    '/portfolio': linkedin,
    '/pt/portfolio': linkedin,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  markdown: {
    shikiConfig: {
      themes: { nvim: shikiTheme, astrodark: astrodarkTheme, peachpuff: peachpuffTheme },
      defaultColor: 'nvim',
      wrap: false,
    },
  },
});
