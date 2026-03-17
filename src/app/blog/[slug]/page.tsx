import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import Link from "next/link";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <Link
          href="/blog"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          &larr; Back to blog
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-muted">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
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
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                [rehypePrettyCode, { theme: "github-dark-dimmed" }],
              ],
            },
          }}
        />
      </div>

      <nav className="mt-16 flex justify-between border-t border-border pt-8">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="group text-sm text-muted transition-colors hover:text-accent"
          >
            <span className="block text-xs uppercase tracking-wide">
              Previous
            </span>
            <span className="mt-1 block font-medium text-foreground group-hover:text-accent">
              {prevPost.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group text-right text-sm text-muted transition-colors hover:text-accent"
          >
            <span className="block text-xs uppercase tracking-wide">Next</span>
            <span className="mt-1 block font-medium text-foreground group-hover:text-accent">
              {nextPost.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}
