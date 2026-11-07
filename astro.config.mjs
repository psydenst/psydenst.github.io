import { defineConfig } from 'astro/config';
import { astrodarkTheme, elflordTheme, peachpuffTheme, shikiTheme, vimTheme } from './src/styles/shiki-theme.mjs';

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
      themes: {
        nvim: shikiTheme,
        vim: vimTheme,
        peachpuff: peachpuffTheme,
        'rose-pine-moon': 'rose-pine-moon',
        'kanagawa-lotus': 'kanagawa-lotus',
        elflord: elflordTheme,
        astrodark: astrodarkTheme,
      },
      defaultColor: 'nvim',
      wrap: false,
    },
  },
});
