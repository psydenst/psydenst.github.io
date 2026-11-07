import type { Lang } from '../i18n/ui';

export const site = {
  name: 'psydenst',
  handle: 'psydenst',
  github: 'https://github.com/psydenst',
  linkedin: 'https://www.linkedin.com/in/pedrosydenstricker/',
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

/**
 * Topics are the post tags; each tag used by a published post gets a page at /blog/tags/<tag>/.
 * Tags missing here still get a page, labelled with the tag itself.
 */
export const topics: Record<string, { label: Record<Lang, string>; blurb: Record<Lang, string> }> = {
  privacy: {
    label: { en: 'Privacy', pt: 'Privacidade' },
    blurb: { en: 'Surveillance, metadata, and the tools that keep people anonymous.', pt: 'Vigilância, metadados e as ferramentas que mantêm as pessoas anônimas.' },
  },
  cybersecurity: {
    label: { en: 'Cybersecurity', pt: 'Cibersegurança' },
    blurb: { en: 'Attacks, defenses, and how networks break.', pt: 'Ataques, defesas e como as redes quebram.' },
  },
  'technology-and-society': {
    label: { en: 'Technology & society', pt: 'Tecnologia e sociedade' },
    blurb: { en: 'Power, censorship, and decentralization on the internet.', pt: 'Poder, censura e descentralização na internet.' },
  },
  crypto: {
    label: { en: 'Crypto', pt: 'Cripto' },
    blurb: { en: 'Blockchains, private money, and how they work.', pt: 'Blockchains, dinheiro privado e como funcionam.' },
  },
  devops: {
    label: { en: 'DevOps', pt: 'DevOps' },
    blurb: { en: 'Infrastructure as code, Terraform, and running systems in production.', pt: 'Infraestrutura como código, Terraform e sistemas em produção.' },
  },
  '42-rncp7': {
    label: { en: '42 RNCP 7', pt: '42 RNCP 7' },
    blurb: { en: 'Notes from the 42 RNCP level 7 track.', pt: 'Notas da trilha RNCP nível 7 da 42.' },
  },
};
export const topicLabel = (tag: string, lang: Lang) => topics[tag]?.label[lang] ?? tag;
export const topicBlurb = (tag: string, lang: Lang) => topics[tag]?.blurb[lang];

export const suggestedTags = ['42-rncp7', 'crypto', 'cybersecurity', 'devops', 'privacy', 'technology-and-society'];
