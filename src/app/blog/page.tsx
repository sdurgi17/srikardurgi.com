import { getAllPosts, getAllTags } from "@/lib/blog";
import { PostCard } from "@/components/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on backend engineering, systems design, and technology.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-muted">
        Thoughts on backend engineering, systems design, and technology.
      </p>

      {tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-10 flex flex-col gap-4">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="text-muted">No posts yet. Check back soon!</p>
        )}
      </div>
    </div>
  );
}
