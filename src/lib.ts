import { getCollection, type CollectionEntry } from 'astro:content';
import { sections } from './data/site';
import { localizePath } from './i18n/utils';
import type { Lang } from './i18n/ui';

export type Post = CollectionEntry<'blog'>;

let cache: Post[] | null = null;
async function allPosts(): Promise<Post[]> {
  if (!cache) {
    const posts = await getCollection('blog', ({ data }) => !data.draft);
    cache = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  }
  return cache;
}

export const postSlug = (id: string) => id.split('/').pop()!.replace(/\.(md|mdx)$/, '');

/**
 * Posts to show for a language: those written in it, plus posts in the other
 * language that have no translation (same section + slug) in this one.
 */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await allPosts();
  const key = (p: Post) => `${p.data.section}/${postSlug(p.id)}`;
  const own = new Set(posts.filter((p) => p.data.lang === lang).map(key));
  return posts.filter((p) => p.data.lang === lang || !own.has(key(p)));
}

export const postPath = (p: Post) => `/blog/${p.data.section}/${postSlug(p.id)}/`;
export const postUrl = (p: Post, lang: Lang) => localizePath(postPath(p), lang);

/** Static paths for /blog/[section] (shared by both locales). */
export function sectionPaths() {
  return sections.map((s) => ({ params: { section: s.slug }, props: { section: s } }));
}

/** Static paths for /blog/[section]/[slug] for one locale. */
export function postPathsFor(lang: Lang) {
  return async () => {
    const posts = await getPosts(lang);
    return posts.map((post) => ({ params: { section: post.data.section, slug: postSlug(post.id) }, props: { post } }));
  };
}

export type Topic = { tag: string; count: number };

/** Tags used by the posts shown in a language, most used first. */
export async function getTopics(lang: Lang): Promise<Topic[]> {
  const counts = new Map<string, number>();
  for (const p of await getPosts(lang)) for (const tag of p.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  return [...counts]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export const tagPath = (tag: string) => `/blog/tags/${tag}/`;

/** Static paths for /blog/tags/[tag] for one locale. */
export function tagPathsFor(lang: Lang) {
  return async () => (await getTopics(lang)).map(({ tag }) => ({ params: { tag }, props: { tag } }));
}

export function readingStats(post: Post) {
  const text = (post.body ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`\-\[\]()!|]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return { words, minutes: post.data.readingTime ?? Math.max(1, Math.round(words / 220)) };
}
