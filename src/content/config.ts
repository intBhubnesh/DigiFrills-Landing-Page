import { defineCollection, z } from 'astro:content';

// defining a collection for the blogs using defineCollection()
const blog = defineCollection({
    type: "content",
	// Type-check frontmatter using a schema
    // zod validation is used in the schema to validate the the values
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		category: z.string(),
		author: z.object({
			name: z.string(),
			title: z.string(),
			image: z.string(),
		}),
	}),
});

const careers = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		remote: z.boolean(),
		type: z.string(),
	}),
});

export const collections = { blog, careers };
