import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight">Srikar Durgi</h1>
        <p className="mt-2 text-lg text-muted">Software Consultant</p>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">
          Backend-heavy engineer who builds systems and solves hard problems.
          I jump across technologies as needed — from distributed systems to
          cloud infrastructure to whatever gets the job done.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/blog"
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
          >
            Read the blog
          </Link>
          <Link
            href="/about"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-border/50"
          >
            About me
          </Link>
        </div>
      </section>

      {posts.length > 0 && (
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">
              Latest Posts
            </h2>
            <Link
              href="/blog"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
