import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Short summary", type: "text", rows: 3, description: "One or two sentences shown on the blog listing." }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "publishedAt", title: "Published date", type: "datetime", initialValue: () => new Date().toISOString(), validation: (r) => r.required() }),
    defineField({ name: "author", title: "Author", type: "string", initialValue: "Md. Alimuzzaman" }),
    defineField({ name: "body", title: "Content", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
  ],
  orderings: [{ title: "Newest first", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "coverImage" },
  },
});
