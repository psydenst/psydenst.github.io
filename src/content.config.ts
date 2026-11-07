import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { sectionSlugs } from './data/site';
import { locales } from './i18n/ui';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    section: z.enum(sectionSlugs),
    lang: z.enum(locales).default('en'),
    tags: z.array(z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'tags are lowercase-hyphenated slugs')).default([]),
    description: z.string(),
    /** Site-relative path to a cover image, e.g. /blog/<slug>/cover.jpg */
    cover: z.string().optional(),
    /** `contain` shows the whole image (book covers, tall diagrams) over a blurred copy of itself. */
    coverFit: z.enum(['cover', 'contain']).default('cover'),
    /** URL of the original publication, when the text first appeared elsewhere. */
    source: z.string().url().optional(),
    sourceName: z.string().optional(),
    /** Override the computed reading time (minutes). */
    readingTime: z.number().int().positive().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
