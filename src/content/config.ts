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
    pubDate: z.coerce.date(),
    editDate: z.coerce.date(),
    edition: z.string().optional(),
    related: z.array(z.string()).optional(),
    color: z.string().optional(),
    // icons: z.array(z.string()).optional(),
  }),
});

export const collections = { texts };
