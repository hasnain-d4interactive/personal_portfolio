import type { Metadata } from "next";
import Link from "next/link";

import { BlogCard } from "@/components/blog-card";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  formatBlogDate,
  getBlogCoverImage,
  listPublishedPosts,
  type BlogPost,
} from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Blog posts by Ahmed Hasnain on SaaS engineering, AI-assisted delivery, product workflows, Laravel, React, Next.js, and modern software execution.",
  path: "/blog",
});

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await listPublishedPosts();
  const featuredPost: BlogPost | undefined = posts[0];
  const remainingPosts: BlogPost[] = posts.slice(1);

  return (
    <div className="space-y-20 md:space-y-28">
      <PageHero
        eyebrow="Blog"
        title="Writing on SaaS delivery, AI workflows, and practical engineering."
        description="This blog is where I share product-facing engineering lessons, workflow notes, and real-world perspectives from building and supporting production software."
      />

      {featuredPost ? (
        <section className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Featured Article"
              title="The latest writing, presented with the same clean portfolio rhythm."
              description="Recent posts are surfaced as editorial cards so the blog feels like part of the portfolio, not a separate product."
            />
          </Reveal>
          <Reveal delay={100} className="reeni-shell overflow-hidden p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="overflow-hidden rounded-[1.9rem] border border-[var(--border-soft)] bg-[var(--surface-soft)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getBlogCoverImage(featuredPost)}
                  alt={featuredPost.title}
                  className="h-[320px] w-full object-cover md:h-[420px]"
                />
              </div>

              <div>
                <p className="reeni-eyebrow text-sm">Latest Post</p>
                <h2 className="mt-4 text-[3rem] font-bold text-[var(--text-strong)] md:text-[3.6rem]">
                  {featuredPost.title}
                </h2>
                <p className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[var(--text-soft)]">
                  <span>{formatBlogDate(featuredPost.publishedAt)}</span>
                  <span className="size-1 rounded-full bg-[var(--accent)]" />
                  <span>{featuredPost.readingTimeMinutes} min read</span>
                </p>
                <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 text-base font-medium text-[var(--text-strong)] transition hover:bg-[var(--accent-hover)]"
                >
                  Read Featured Post
                  <Icon name="arrow-right" className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      ) : (
        <section className="reeni-shell p-8 md:p-10">
          <Reveal>
            <SectionHeading
              eyebrow="No Posts Yet"
              title="The blog is wired and ready for your first published article."
              description="Once a post is marked as published in Neon or sent through the webhook, it will appear here automatically."
            />
          </Reveal>
        </section>
      )}

      {remainingPosts.length ? (
        <section className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="All Articles"
              title="A clean reading index that stays consistent with the rest of the site."
              description="Each entry is styled with the same card language, spacing, and rounded visual system used across the portfolio."
              align="center"
            />
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-2">
            {remainingPosts.map((post: BlogPost) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
