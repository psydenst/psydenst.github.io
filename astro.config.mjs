import { defineConfig } from 'astro/config';
import { peachpuffTheme, shikiTheme } from './src/styles/shiki-theme.mjs';

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
    shikiConfig: { themes: { dark: shikiTheme, light: peachpuffTheme }, defaultColor: 'dark', wrap: false },
  },
});
