import type { Lang } from '../i18n/ui';

export const site = {
  name: 'psydenst',
  handle: 'psydenst',
  github: 'https://github.com/psydenst',
  nymAuthor: {
    en: 'https://nym.com/blog/author/pedro-sydenstricker',
    pt: 'https://nym.com/pt/blog/author/pedro-sydenstricker',
  } satisfies Record<Lang, string>,
};

export const sections = [
  {
    slug: 'technical-studies',
    label: { en: 'Technical studies', pt: 'Estudos técnicos' },
    blurb: { en: 'Study notes and technical investigations.', pt: 'Notas de estudo e investigações técnicas.' },
  },
  {
    slug: 'fichamentos',
    label: { en: 'Reading notes', pt: 'Fichamentos' },
    blurb: { en: 'Structured notes on books and papers.', pt: 'Fichas de leitura estruturadas.' },
  },
  {
    slug: 'comments',
    label: { en: 'Comments', pt: 'Comentários' },
    blurb: { en: 'Short texts and reactions.', pt: 'Textos curtos e reações.' },
  },
  {
    slug: 'articles',
    label: { en: 'Articles', pt: 'Artigos' },
    blurb: { en: 'Longer, finished pieces.', pt: 'Textos mais longos e acabados.' },
  },
] as const;

export type Section = (typeof sections)[number];
export type SectionSlug = Section['slug'];
export const sectionSlugs = sections.map((s) => s.slug) as [SectionSlug, ...SectionSlug[]];
export const getSection = (slug: string) => sections.find((s) => s.slug === slug);
export const sectionLabel = (slug: string, lang: Lang) => getSection(slug)?.label[lang] ?? slug;

export const suggestedTags = ['42-rncp7', 'cybersecurity', 'devops', 'privacy', 'technology-and-society'];
