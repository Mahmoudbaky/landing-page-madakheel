"use server";

import { createClient } from "contentful";
import { BlogPost } from "../types";

const { NEXT_PUBLIC_CONTENTFUL_SPACE_ID, NEXT_PUBLIC_CONTENTFUL_API_KEY } =
  process.env;

const client = createClient({
  space: `${NEXT_PUBLIC_CONTENTFUL_SPACE_ID}` || "",
  accessToken: `${NEXT_PUBLIC_CONTENTFUL_API_KEY}` || "",
});

export async function getAllBlogPosts() {
  // console.log(NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
  const response = await client.getEntries<BlogPost>({
    content_type: "blog",
    order: ["-sys.createdAt"],
    // "fields.publish": true, // Only fetch published posts
  });

  return response.items;
}

export async function getBlogPostById(id: string) {
  try {
    const response = await client.getEntry<BlogPost>(id);
    return response;
  } catch (error) {
    return null;
  }
}
