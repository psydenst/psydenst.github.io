import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { sectionSlugs } from './data/site';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    section: z.enum(sectionSlugs),
    tags: z.array(z.string()).default([]),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
