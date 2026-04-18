import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogCard } from "@/components/blog-card";
import { Icon } from "@/components/icon";
import { MarkdownContent } from "@/components/markdown-content";
import { Reveal } from "@/components/reveal";
import {
  formatBlogDate,
  getBlogCoverImage,
  getPublishedPostBySlug,
  listPublishedPosts,
  type BlogPost,
} from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    return {};
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`),
    },
    openGraph: {
      title: `${title} · Ahmed Hasnain`,
      description,
      url: absoluteUrl(`/blog/${post.slug}`),
      type: "article",
      publishedTime: post.publishedAt ?? undefined,
      images: [
        {
          url: post.coverImageUrl || absoluteUrl("/opengraph-image"),
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · Ahmed Hasnain`,
      description,
      images: [post.coverImageUrl || absoluteUrl("/opengraph-image")],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts: BlogPost[] = (
    await listPublishedPosts({ limit: 3, excludeSlug: post.slug })
  ).slice(0, 2);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image: post.coverImageUrl ? [post.coverImageUrl] : [absoluteUrl("/opengraph-image")],
    author: {
      "@type": "Person",
      name: "Ahmed Hasnain",
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Person",
      name: "Ahmed Hasnain",
      url: absoluteUrl("/"),
    },
  };

  return (
    <div className="space-y-20 md:space-y-28">
      <section className="reeni-shell relative overflow-hidden px-6 py-12 md:px-10 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(253,196,72,0.18),_transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.45),transparent)]" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <Reveal className="max-w-3xl">
            <p className="reeni-eyebrow text-sm">Blog Post</p>
            <h1 className="mt-5 text-5xl font-bold text-[var(--text-strong)] md:text-6xl lg:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg">
              {post.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[var(--text-soft)]">
              <span>{formatBlogDate(post.publishedAt)}</span>
              <span className="size-1 rounded-full bg-[var(--accent)]" />
              <span>{post.readingTimeMinutes} min read</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4 shadow-[var(--shadow-soft)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getBlogCoverImage(post)}
              alt={post.title}
              className="h-[320px] w-full rounded-[1.5rem] object-cover md:h-[440px]"
            />
          </Reveal>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <Reveal className="reeni-shell p-8 md:p-10">
          <MarkdownContent content={post.contentMarkdown} />
        </Reveal>

        <Reveal delay={100} className="space-y-5">
          <aside className="reeni-shell p-6">
            <p className="reeni-eyebrow text-sm">Article Details</p>
            <div className="mt-5 space-y-4 text-sm text-[var(--text-muted)]">
              <div>
                <p className="font-medium text-[var(--text-strong)]">Published</p>
                <p className="mt-1">{formatBlogDate(post.publishedAt)}</p>
              </div>
              <div>
                <p className="font-medium text-[var(--text-strong)]">Reading Time</p>
                <p className="mt-1">{post.readingTimeMinutes} min</p>
              </div>
              <div>
                <p className="font-medium text-[var(--text-strong)]">Tags</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <aside className="reeni-shell p-6">
            <p className="reeni-eyebrow text-sm">Keep Reading</p>
            <div className="mt-5 space-y-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-medium text-[var(--text-strong)] transition hover:bg-[var(--surface-primary)]"
              >
                Back to Blog
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--text-strong)] transition hover:bg-[var(--accent-hover)]"
              >
                Get In Touch
                <Icon name="arrow-right" className="size-4" />
              </Link>
            </div>
          </aside>
        </Reveal>
      </section>

      {relatedPosts.length ? (
        <section className="space-y-10">
          <Reveal>
            <h2 className="text-center text-[3rem] font-bold text-[var(--text-strong)] md:text-[3.6rem]">
              More Writing
            </h2>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-2">
            {relatedPosts.map((relatedPost: BlogPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
