import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postUrls = posts.map((post) => ({
    url: `/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: "/", lastModified: new Date() },
    ...postUrls,
  ];
}
