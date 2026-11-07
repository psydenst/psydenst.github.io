import { getCollection, type CollectionEntry } from 'astro:content';
import { sections } from './data/site';
import { localizePath } from './i18n/utils';
import type { Lang } from './i18n/ui';

export type Post = CollectionEntry<'blog'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const postSlug = (id: string) => id.split('/').pop()!.replace(/\.(md|mdx)$/, '');

export const postPath = (p: Post) => `/blog/${p.data.section}/${postSlug(p.id)}/`;
export const postUrl = (p: Post, lang: Lang) => localizePath(postPath(p), lang);

/** Static paths for /blog/[section] (shared by both locales). */
export function sectionPaths() {
  return sections.map((s) => ({ params: { section: s.slug }, props: { section: s } }));
}

/** Static paths for /blog/[section]/[slug] (shared by both locales). */
export async function postPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({ params: { section: post.data.section, slug: postSlug(post.id) }, props: { post } }));
}

export function readingStats(body: string | undefined) {
  const text = (body ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`\-\[\]()!]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return { words, minutes: Math.max(1, Math.round(words / 220)) };
}
