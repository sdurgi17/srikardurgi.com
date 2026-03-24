import { getAllPosts } from "@/lib/blog";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries = posts.map((post) => ({
    url: `https://srikardurgi.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: "https://srikardurgi.com", lastModified: new Date() },
    { url: "https://srikardurgi.com/blog", lastModified: new Date() },
    { url: "https://srikardurgi.com/projects", lastModified: new Date() },
    { url: "https://srikardurgi.com/about", lastModified: new Date() },
    { url: "https://srikardurgi.com/profile", lastModified: new Date() },
    ...blogEntries,
  ];
}
