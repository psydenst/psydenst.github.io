export const site = {
  lang: 'en',
  name: 'psydenst',
  handle: 'psydenst',
  title: 'psydenst: portfolio and blog',
  description:
    'Portfolio and blog of psydenst: software development, DevOps, cybersecurity, digital privacy, and technology and society.',
  github: 'https://github.com/psydenst',
  nymAuthor: 'https://nym.com/pt/blog/author/pedro-sydenstricker',
};

export const sections = [
  { slug: 'technical-studies', label: 'Technical studies', blurb: 'Study notes and technical investigations.' },
  { slug: 'fichamentos', label: 'Fichamentos', blurb: 'Structured reading notes.' },
  { slug: 'comments', label: 'Comments', blurb: 'Short texts and reactions.' },
  { slug: 'articles', label: 'Articles', blurb: 'Longer, finished pieces.' },
] as const;

export type SectionSlug = (typeof sections)[number]['slug'];
export const sectionSlugs = sections.map((s) => s.slug) as [SectionSlug, ...SectionSlug[]];
export const sectionLabel = (slug: string) => sections.find((s) => s.slug === slug)?.label ?? slug;

export const suggestedTags = ['42-rncp7', 'cybersecurity', 'devops', 'privacy', 'technology-and-society'];

export const formatDate = (d: Date | string) =>
  new Date(d).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
