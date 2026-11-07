import type { Lang } from '../i18n/ui';

type Theme = { name: string; planet: string; label: Record<Lang, string>; color: string };

/**
 * Colorschemes, drawn as planets in the header orrery (innermost orbit first).
 * `color` is the page background, used for the theme-color meta tag.
 * The default (`nvim`) is the only one without a `data-theme` attribute.
 */
export const themes = [
  { name: 'vim', planet: 'mercury', label: { en: 'Mercury', pt: 'Mercúrio' }, color: '#000000' },
  { name: 'peachpuff', planet: 'venus', label: { en: 'Venus', pt: 'Vênus' }, color: '#ffdab9' },
  { name: 'nvim', planet: 'earth', label: { en: 'Earth', pt: 'Terra' }, color: '#07090f' },
  { name: 'rose-pine-moon', planet: 'mars', label: { en: 'Mars', pt: 'Marte' }, color: '#232136' },
  { name: 'kanagawa-lotus', planet: 'saturn', label: { en: 'Saturn', pt: 'Saturno' }, color: '#f2ecbc' },
  { name: 'elflord', planet: 'uranus', label: { en: 'Uranus', pt: 'Urano' }, color: '#000000' },
  { name: 'astrodark', planet: 'neptune', label: { en: 'Neptune', pt: 'Netuno' }, color: '#1a1d23' },
] as const satisfies readonly Theme[];

export const defaultTheme = 'nvim';
