import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['AI', 'Web Dev', 'Automation', 'Data Viz', 'VR']),
    technologies: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    accentColor: z.string().default('#6366f1'),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects: projectsCollection,
};
