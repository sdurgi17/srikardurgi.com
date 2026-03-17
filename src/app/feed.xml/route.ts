import RSS from "rss";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();

  const feed = new RSS({
    title: "Srikar Durgi",
    description:
      "Backend-heavy software consultant. Writing about systems, technology, and engineering.",
    site_url: "https://srikardurgi.com",
    feed_url: "https://srikardurgi.com/feed.xml",
    language: "en",
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `https://srikardurgi.com/blog/${post.slug}`,
      date: new Date(post.date),
      categories: post.tags,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
