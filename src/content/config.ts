import { defineCollection, z } from "astro:content";

const texts = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    type: z.string(),
    // Transform string to Date object
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroSmImage: z.string().optional(),
    pubDate: z.coerce.date(),
    editDate: z.coerce.date(),
    edition: z.string().optional(),
    related: z.array(z.string()).optional(),
    color: z.string().optional(),
    featured: z.boolean().optional(),
    // icons: z.array(z.string()).optional(),
  }),
});

const writers = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    photo: z.string(),
    description: z.string(),
    lifeSpan: z.string().optional(),
    color: z.string().optional(),
    phrases: z.array(
         z.object({
           text: z.string(),
           source: z.string(),
         }),
        ).optional(),
  }),
});

export const collections = { texts, writers };
