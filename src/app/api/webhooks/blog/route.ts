import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

import { deleteBlogPost, upsertBlogPost, type BlogPostStatus } from "@/lib/blog";
import { isDatabaseConfigured } from "@/lib/db";

type WebhookPayload =
  | {
      action: "upsert";
      post: {
        externalId?: string;
        slug: string;
        title: string;
        excerpt?: string;
        contentMarkdown: string;
        coverImageUrl?: string;
        tags?: string[];
        status?: BlogPostStatus;
        publishedAt?: string | null;
        seoTitle?: string;
        seoDescription?: string;
        readingTimeMinutes?: number;
      };
    }
  | {
      action: "delete";
      post?: {
        externalId?: string;
        slug?: string;
      };
      externalId?: string;
      slug?: string;
    };

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(request: NextRequest) {
  const secret = process.env.BLOG_WEBHOOK_SECRET;
  const authorization = request.headers.get("authorization");
  const expectedHeader = secret ? `Bearer ${secret}` : null;

  if (!secret || authorization !== expectedHeader) {
    return unauthorized();
  }

  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: "DATABASE_URL is not configured." }, { status: 500 });
  }

  let payload: WebhookPayload;

  try {
    payload = (await request.json()) as WebhookPayload;
  } catch {
    return badRequest("Invalid JSON payload.");
  }

  try {
    if (payload.action === "upsert") {
      if (!payload.post?.slug?.trim()) {
        return badRequest("A post slug is required.");
      }

      if (!payload.post?.title?.trim()) {
        return badRequest("A post title is required.");
      }

      if (!payload.post?.contentMarkdown?.trim()) {
        return badRequest("Post contentMarkdown is required.");
      }

      const post = await upsertBlogPost(payload.post);

      revalidatePath("/");
      revalidatePath("/blog");
      revalidatePath(`/blog/${post.slug}`);

      return NextResponse.json({
        ok: true,
        action: "upsert",
        post: {
          slug: post.slug,
          status: post.status,
        },
      });
    }

    if (payload.action === "delete") {
      const deletedPost = await deleteBlogPost({
        externalId: payload.post?.externalId ?? payload.externalId ?? null,
        slug: payload.post?.slug ?? payload.slug ?? null,
      });

      if (!deletedPost) {
        return NextResponse.json({ ok: true, action: "delete", deleted: false });
      }

      revalidatePath("/");
      revalidatePath("/blog");
      revalidatePath(`/blog/${deletedPost.slug}`);

      return NextResponse.json({
        ok: true,
        action: "delete",
        deleted: true,
        slug: deletedPost.slug,
      });
    }

    return badRequest("Unsupported action.");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected server error.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
