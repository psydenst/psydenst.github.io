import { defaultLang, locales, ui, type Lang, type UiKey } from './ui';

export const isLang = (v: unknown): v is Lang => typeof v === 'string' && (locales as readonly string[]).includes(v);

/** Language of the current page, derived from the first URL segment. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return isLang(first) ? first : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Prefix a site-relative path with the locale segment (none for the default locale). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** Strip the locale prefix from a pathname, returning the canonical route. */
export function stripLang(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  const path = isLang(first) ? `/${rest.join('/')}` : pathname;
  return path.replace(/\/+$/, '') || '/';
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'pt' : 'en');

export const localeTag = (lang: Lang) => (lang === 'pt' ? 'pt-BR' : 'en-US');

export const formatDate = (d: Date | string, lang: Lang) =>
  new Date(d).toLocaleDateString(localeTag(lang), { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
