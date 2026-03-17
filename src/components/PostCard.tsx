import Link from "next/link";
import type { Post } from "@/lib/blog";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg border border-border p-5 transition-colors hover:border-accent/50 hover:bg-border/30"
    >
      <div className="flex items-center gap-3 text-sm text-muted">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <span>&middot;</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
        {post.title}
      </h3>
      {post.excerpt && (
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>
      )}
      {post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-border px-2.5 py-0.5 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
