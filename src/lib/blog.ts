import "server-only";

import { queryDatabase, isDatabaseConfigured } from "@/lib/db";

export type BlogPostStatus = "draft" | "published";

type BlogPostRow = {
  id: number;
  external_id: string | null;
  slug: string;
  title: string;
  excerpt: string | null;
  content_markdown: string;
  cover_image_url: string | null;
  tags: string[];
  status: BlogPostStatus;
  published_at: Date | string | null;
  seo_title: string | null;
  seo_description: string | null;
  reading_time_minutes: number | null;
  created_at: Date | string;
  updated_at: Date | string;
};

export type BlogPost = {
  id: number;
  externalId: string | null;
  slug: string;
  title: string;
  excerpt: string;
  contentMarkdown: string;
  coverImageUrl: string | null;
  tags: string[];
  status: BlogPostStatus;
  publishedAt: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  readingTimeMinutes: number;
  createdAt: string;
  updatedAt: string;
};

export type BlogPostUpsertInput = {
  externalId?: string | null;
  slug: string;
  title: string;
  excerpt?: string | null;
  contentMarkdown: string;
  coverImageUrl?: string | null;
  tags?: string[];
  status?: BlogPostStatus;
  publishedAt?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  readingTimeMinutes?: number | null;
};

type ListPublishedPostsOptions = {
  limit?: number;
  excludeSlug?: string;
};

function toIsoString(value: Date | string | null) {
  if (!value) {
    return null;
  }

  if (typeof value === "string") {
    return value;
  }

  return value.toISOString();
}

function stripMarkdown(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/[#>*_~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function estimateReadingTime(markdown: string) {
  const wordCount = stripMarkdown(markdown).split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(wordCount / 220));
}

function deriveExcerpt(excerpt: string | null | undefined, markdown: string) {
  if (excerpt?.trim()) {
    return excerpt.trim();
  }

  return `${stripMarkdown(markdown).slice(0, 156).trim()}...`;
}

function normalizeTags(tags: string[] | undefined) {
  if (!tags?.length) {
    return [];
  }

  return Array.from(
    new Set(
      tags
        .map((tag) => tag.trim())
        .filter(Boolean),
    ),
  );
}

function normalizePublishedAt(status: BlogPostStatus, publishedAt?: string | null) {
  if (publishedAt) {
    return publishedAt;
  }

  return status === "published" ? new Date().toISOString() : null;
}

function mapBlogPost(row: BlogPostRow): BlogPost {
  return {
    id: row.id,
    externalId: row.external_id,
    slug: row.slug,
    title: row.title,
    excerpt: deriveExcerpt(row.excerpt, row.content_markdown),
    contentMarkdown: row.content_markdown,
    coverImageUrl: row.cover_image_url,
    tags: row.tags ?? [],
    status: row.status,
    publishedAt: toIsoString(row.published_at),
    seoTitle: row.seo_title,
    seoDescription: row.seo_description,
    readingTimeMinutes: row.reading_time_minutes ?? estimateReadingTime(row.content_markdown),
    createdAt: toIsoString(row.created_at) ?? new Date().toISOString(),
    updatedAt: toIsoString(row.updated_at) ?? new Date().toISOString(),
  };
}

export function formatBlogDate(date: string | null) {
  if (!date) {
    return "Draft";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function getBlogCoverImage(post: BlogPost) {
  return post.coverImageUrl || "/images/about-visual.svg";
}

export async function listPublishedPosts(options: ListPublishedPostsOptions = {}) {
  if (!isDatabaseConfigured()) {
    return [] as BlogPost[];
  }

  const conditions = ["status = 'published'"];
  const params: unknown[] = [];

  if (options.excludeSlug) {
    params.push(options.excludeSlug);
    conditions.push(`slug <> $${params.length}`);
  }

  if (options.limit) {
    params.push(options.limit);
  }

  const limitSql = options.limit ? `limit $${params.length}` : "";
  const result = await queryDatabase<BlogPostRow>(
    `
      select *
      from public.blog_posts
      where ${conditions.join(" and ")}
      order by coalesce(published_at, created_at) desc, created_at desc
      ${limitSql}
    `,
    params,
  );

  return result.rows.map(mapBlogPost);
}

export async function getLatestPublishedPosts(limit = 3) {
  return listPublishedPosts({ limit });
}

export async function getPublishedPostBySlug(slug: string) {
  if (!isDatabaseConfigured()) {
    return null;
  }

  const result = await queryDatabase<BlogPostRow>(
    `
      select *
      from public.blog_posts
      where slug = $1 and status = 'published'
      limit 1
    `,
    [slug],
  );

  return result.rows[0] ? mapBlogPost(result.rows[0]) : null;
}

export async function getPublishedPostSlugs() {
  if (!isDatabaseConfigured()) {
    return [] as string[];
  }

  const result = await queryDatabase<{ slug: string }>(
    `
      select slug
      from public.blog_posts
      where status = 'published'
      order by coalesce(published_at, created_at) desc, created_at desc
    `,
  );

  return result.rows.map((row: { slug: string }) => row.slug);
}

export async function upsertBlogPost(input: BlogPostUpsertInput) {
  const normalizedInput = {
    externalId: input.externalId?.trim() || null,
    slug: input.slug.trim().toLowerCase(),
    title: input.title.trim(),
    excerpt: input.excerpt?.trim() || null,
    contentMarkdown: input.contentMarkdown.trim(),
    coverImageUrl: input.coverImageUrl?.trim() || null,
    tags: normalizeTags(input.tags),
    status: input.status ?? "draft",
    publishedAt: normalizePublishedAt(input.status ?? "draft", input.publishedAt),
    seoTitle: input.seoTitle?.trim() || null,
    seoDescription: input.seoDescription?.trim() || null,
    readingTimeMinutes:
      input.readingTimeMinutes && input.readingTimeMinutes > 0
        ? input.readingTimeMinutes
        : estimateReadingTime(input.contentMarkdown),
  };

  const values = [
    normalizedInput.externalId,
    normalizedInput.slug,
    normalizedInput.title,
    normalizedInput.excerpt,
    normalizedInput.contentMarkdown,
    normalizedInput.coverImageUrl,
    normalizedInput.tags,
    normalizedInput.status,
    normalizedInput.publishedAt,
    normalizedInput.seoTitle,
    normalizedInput.seoDescription,
    normalizedInput.readingTimeMinutes,
  ];

  const result = await queryDatabase<BlogPostRow>(
    normalizedInput.externalId
      ? `
          insert into public.blog_posts (
            external_id,
            slug,
            title,
            excerpt,
            content_markdown,
            cover_image_url,
            tags,
            status,
            published_at,
            seo_title,
            seo_description,
            reading_time_minutes
          )
          values ($1, $2, $3, $4, $5, $6, $7, $8::blog_post_status, $9, $10, $11, $12)
          on conflict (external_id)
          do update set
            slug = excluded.slug,
            title = excluded.title,
            excerpt = excluded.excerpt,
            content_markdown = excluded.content_markdown,
            cover_image_url = excluded.cover_image_url,
            tags = excluded.tags,
            status = excluded.status,
            published_at = excluded.published_at,
            seo_title = excluded.seo_title,
            seo_description = excluded.seo_description,
            reading_time_minutes = excluded.reading_time_minutes
          returning *
        `
      : `
          insert into public.blog_posts (
            external_id,
            slug,
            title,
            excerpt,
            content_markdown,
            cover_image_url,
            tags,
            status,
            published_at,
            seo_title,
            seo_description,
            reading_time_minutes
          )
          values ($1, $2, $3, $4, $5, $6, $7, $8::blog_post_status, $9, $10, $11, $12)
          on conflict (slug)
          do update set
            external_id = excluded.external_id,
            title = excluded.title,
            excerpt = excluded.excerpt,
            content_markdown = excluded.content_markdown,
            cover_image_url = excluded.cover_image_url,
            tags = excluded.tags,
            status = excluded.status,
            published_at = excluded.published_at,
            seo_title = excluded.seo_title,
            seo_description = excluded.seo_description,
            reading_time_minutes = excluded.reading_time_minutes
          returning *
        `,
    values,
  );

  return mapBlogPost(result.rows[0]);
}

export async function deleteBlogPost({
  externalId,
  slug,
}: {
  externalId?: string | null;
  slug?: string | null;
}) {
  const normalizedExternalId = externalId?.trim() || null;
  const normalizedSlug = slug?.trim().toLowerCase() || null;

  if (!normalizedExternalId && !normalizedSlug) {
    throw new Error("A slug or externalId is required to delete a post.");
  }

  const result = await queryDatabase<BlogPostRow>(
    normalizedExternalId
      ? `
          delete from public.blog_posts
          where external_id = $1
          returning *
        `
      : `
          delete from public.blog_posts
          where slug = $1
          returning *
        `,
    [normalizedExternalId ?? normalizedSlug],
  );

  return result.rows[0] ? mapBlogPost(result.rows[0]) : null;
}
