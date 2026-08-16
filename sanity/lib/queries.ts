import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc){
  _id, title, "slug": slug.current, excerpt, coverImage, publishedAt, author
}`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, excerpt, coverImage, publishedAt, author, body
}`;

export const slugsQuery = groq`*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;
