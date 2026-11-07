import { getCollection } from 'astro:content';
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
export const postSlug = (id: string) => id.split('/').pop()!.replace(/\.(md|mdx)$/, '');
export const postUrl = (p: { id: string; data: { section: string } }) => `/blog/${p.data.section}/${postSlug(p.id)}/`;
