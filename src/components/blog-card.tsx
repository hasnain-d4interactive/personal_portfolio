import Link from "next/link";

import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { formatBlogDate, getBlogCoverImage, type BlogPost } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const coverImage = getBlogCoverImage(post);

  return (
    <Reveal>
      <article className="group reeni-shell overflow-hidden transition duration-300 hover:-translate-y-1">
        <div className="p-5">
          <div className="overflow-hidden rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--surface-soft)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={coverImage}
              alt={post.title}
              className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.03] md:h-[300px]"
              loading="lazy"
            />
          </div>
        </div>
        <div className="space-y-5 px-6 pb-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-soft)]">
            <span>{formatBlogDate(post.publishedAt)}</span>
            <span className="size-1 rounded-full bg-[var(--accent)]" />
            <span>{post.readingTimeMinutes} min read</span>
          </div>

          <div>
            <h3 className="text-[2rem] font-bold text-[var(--text-strong)] md:text-[2.25rem]">
              {post.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">{post.excerpt}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-medium text-[var(--text-strong)] transition hover:border-[rgba(20,20,20,0.18)] hover:bg-[var(--accent)]"
          >
            Read Article
            <Icon name="arrow-right" className="size-4" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
