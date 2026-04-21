import { createHmac, timingSafeEqual } from "node:crypto";

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

type ContentPenPingPayload = {
  event: "ping";
  created_at?: string;
  data?: {
    message?: string;
    workspace_id?: string;
    endpoint_id?: string;
  };
};

type ContentPenBlogPost = {
  id: string;
  slug: string;
  title: string;
  topic?: string | null;
  keyword?: string | null;
  outline?: string | null;
  language?: string | null;
  created_at?: string | null;
  meta_title?: string | null;
  updated_at?: string | null;
  word_count?: number | null;
  article_size?: string | null;
  html_content?: string | null;
  markdown_content?: string | null;
  meta_description?: string | null;
  featured_image_alt?: string | null;
  featured_image_url?: string | null;
  secondary_keywords?: string[] | string | null;
};

type ContentPenEventPayload = {
  data?: {
    blog_post?: ContentPenBlogPost;
  };
  meta?: {
    event_type?: string;
    timestamp?: string;
  };
};

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

function isLogOnlyModeEnabled() {
  return process.env.BLOG_WEBHOOK_LOG_ONLY === "true";
}

function getContentPenSigningSecret() {
  return process.env.CONTENTPEN_WEBHOOK_SIGNING_SECRET?.trim() || null;
}

function parseStandardWebhookSecret(secret: string) {
  const normalizedSecret = secret.startsWith("whsec_") ? secret.slice("whsec_".length) : secret;

  return Buffer.from(normalizedSecret, "base64");
}

function parseContentPenSigningSecret(secret: string) {
  return secret.startsWith("whsec_") ? secret.slice("whsec_".length) : secret;
}

function verifyStandardWebhookSignature(
  rawBody: string,
  messageId: string,
  timestamp: string,
  signatureHeader: string,
  secret: string,
) {
  const timestampSeconds = Number(timestamp);

  if (!Number.isFinite(timestampSeconds)) {
    return false;
  }

  const ageInSeconds = Math.abs(Math.floor(Date.now() / 1000) - timestampSeconds);

  if (ageInSeconds > 300) {
    return false;
  }

  const signingSecret = parseStandardWebhookSecret(secret);

  if (!signingSecret.length) {
    return false;
  }

  const signedContent = `${messageId}.${timestamp}.${rawBody}`;
  const expectedDigest = createHmac("sha256", signingSecret).update(signedContent).digest("base64");
  const expectedBuffer = Buffer.from(expectedDigest);

  const signatures = signatureHeader
    .split(" ")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => entry.split(",", 2))
    .filter(([version, digest]) => version === "v1" && Boolean(digest))
    .map(([, digest]) => Buffer.from(digest));

  return signatures.some((signature) => {
    if (signature.length !== expectedBuffer.length) {
      return false;
    }

    return timingSafeEqual(signature, expectedBuffer);
  });
}

function verifyContentPenSignature(rawBody: string, signatureHeader: string, secret: string) {
  const parts = Object.fromEntries(
    signatureHeader
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => part.split("=", 2)),
  );

  const timestamp = parts.t;
  const signature = parts.v1;

  if (!timestamp || !signature) {
    return false;
  }

  const timestampSeconds = Number(timestamp);

  if (!Number.isFinite(timestampSeconds)) {
    return false;
  }

  const ageInSeconds = Math.abs(Math.floor(Date.now() / 1000) - timestampSeconds);

  if (ageInSeconds > 300) {
    return false;
  }

  const expectedDigest = createHmac("sha256", parseContentPenSigningSecret(secret))
    .update(`${timestamp}.${rawBody}`)
    .digest("hex");
  const expectedBuffer = Buffer.from(expectedDigest);
  const signatureBuffer = Buffer.from(signature);

  if (signatureBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(signatureBuffer, expectedBuffer);
}

function splitKeywords(value: string | string[] | null | undefined) {
  if (!value) {
    return [] as string[];
  }

  if (Array.isArray(value)) {
    return value.map((item) => item.trim()).filter(Boolean);
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function mapContentPenTags(post: ContentPenBlogPost) {
  return Array.from(
    new Set([
      ...splitKeywords(post.keyword),
      ...splitKeywords(post.secondary_keywords),
      ...(post.topic?.trim() ? [post.topic.trim()] : []),
    ]),
  );
}

function mapContentPenPayloadToUpsert(payload: ContentPenEventPayload) {
  const blogPost = payload.data?.blog_post;
  const eventType = payload.meta?.event_type;

  if (!blogPost) {
    throw new Error("ContentPen payload is missing data.blog_post.");
  }

  if (eventType !== "blog_post.generation_completed") {
    return null;
  }

  const content = blogPost.markdown_content?.trim() || blogPost.html_content?.trim() || "";

  if (!content) {
    throw new Error("ContentPen payload is missing markdown_content and html_content.");
  }

  return {
    externalId: blogPost.id,
    slug: blogPost.slug,
    title: blogPost.title,
    excerpt: blogPost.meta_description?.trim() || null,
    contentMarkdown: content,
    coverImageUrl: blogPost.featured_image_url?.trim() || null,
    tags: mapContentPenTags(blogPost),
    status: "published" as BlogPostStatus,
    publishedAt: blogPost.updated_at || blogPost.created_at || payload.meta?.timestamp || null,
    seoTitle: blogPost.meta_title?.trim() || blogPost.title,
    seoDescription: blogPost.meta_description?.trim() || null,
    readingTimeMinutes:
      typeof blogPost.word_count === "number" && blogPost.word_count > 0
        ? Math.max(1, Math.ceil(blogPost.word_count / 220))
        : null,
  };
}

export async function POST(request: NextRequest) {
  const isLogOnlyMode = isLogOnlyModeEnabled();
  const legacySecret = process.env.BLOG_WEBHOOK_SECRET;
  const signingSecret = getContentPenSigningSecret();
  const authorization = request.headers.get("authorization");
  const querySecret = request.nextUrl.searchParams.get("secret");
  const expectedHeader = legacySecret ? `Bearer ${legacySecret}` : null;
  const webhookId = request.headers.get("webhook-id");
  const webhookTimestamp = request.headers.get("webhook-timestamp");
  const webhookSignature = request.headers.get("webhook-signature");
  const contentPenEvent = request.headers.get("x-contentpen-event");
  const contentPenSignature = request.headers.get("x-contentpen-signature");
  const contentPenDeliveryId = request.headers.get("x-contentpen-delivery-id");

  const rawBody = await request.text();

  const hasStandardWebhookHeaders = Boolean(webhookId && webhookTimestamp && webhookSignature);
  const hasValidStandardSignature = Boolean(
    signingSecret &&
      webhookId &&
      webhookTimestamp &&
      webhookSignature &&
      verifyStandardWebhookSignature(
        rawBody,
        webhookId,
        webhookTimestamp,
        webhookSignature,
        signingSecret,
      ),
  );
  const hasValidContentPenSignature = Boolean(
    signingSecret &&
      contentPenSignature &&
      verifyContentPenSignature(rawBody, contentPenSignature, signingSecret),
  );

  const hasValidLegacySecret = Boolean(
    legacySecret && (authorization === expectedHeader || querySecret === legacySecret),
  );
  const isAuthorized =
    hasValidStandardSignature ||
    hasValidContentPenSignature ||
    hasValidLegacySecret ||
    (!signingSecret && !legacySecret && isLogOnlyMode);

  if (!isAuthorized) {
    return NextResponse.json(
      {
        error: "Unauthorized",
        hasStandardWebhookHeaders,
        hasContentPenSignature: Boolean(contentPenSignature),
      },
      { status: 401 },
    );
  }

  let payload: WebhookPayload | ContentPenPingPayload | ContentPenEventPayload;

  try {
    payload = JSON.parse(rawBody) as WebhookPayload | ContentPenPingPayload | ContentPenEventPayload;
  } catch {
    return badRequest("Invalid JSON payload.");
  }

  const derivedAction =
    "action" in payload
      ? payload.action
      : "meta" in payload && payload.meta?.event_type === "blog_post.generation_completed"
        ? "upsert"
        : null;

  if (isLogOnlyMode) {
    console.log(
      "[blog webhook] received payload",
      JSON.stringify(
        {
          action: derivedAction,
          event: "event" in payload ? payload.event : contentPenEvent,
          verified:
            hasValidContentPenSignature
              ? "contentpen-signature"
              : hasValidStandardSignature
                ? "standard-webhook-signature"
                : hasValidLegacySecret
                  ? "legacy-secret"
                  : "none",
          webhookId,
          webhookTimestamp,
          hasWebhookSignature: Boolean(webhookSignature),
          contentPenDeliveryId,
          userAgent: request.headers.get("user-agent"),
          contentType: request.headers.get("content-type"),
          payload,
        },
        null,
        2,
      ),
    );

    return NextResponse.json({
      ok: true,
      debug: true,
      message: "Webhook received in log-only mode. No database changes were made.",
      action: derivedAction,
      event: "event" in payload ? payload.event : contentPenEvent,
      verified:
        hasValidContentPenSignature
          ? "contentpen-signature"
          : hasValidStandardSignature
            ? "standard-webhook-signature"
            : hasValidLegacySecret
              ? "legacy-secret"
              : "none",
    });
  }

  if ("event" in payload && payload.event === "ping") {
    return NextResponse.json({ ok: true, event: "ping" });
  }

  if ("meta" in payload && payload.meta?.event_type === "blog_post.generation_failed") {
    return NextResponse.json({
      ok: true,
      event: payload.meta.event_type,
      skipped: true,
      message: "Generation failed event received. No post was created.",
    });
  }

  const blogPayload =
    "action" in payload
      ? payload
      : "meta" in payload && payload.meta?.event_type
        ? {
            action: "upsert" as const,
            post: mapContentPenPayloadToUpsert(payload),
          }
        : null;

  if (!blogPayload?.post) {
    return badRequest("Unsupported payload.");
  }

  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: "DATABASE_URL is not configured." }, { status: 500 });
  }

  try {
    if (blogPayload.action === "upsert") {
      if (!blogPayload.post?.slug?.trim()) {
        return badRequest("A post slug is required.");
      }

      if (!blogPayload.post?.title?.trim()) {
        return badRequest("A post title is required.");
      }

      if (!blogPayload.post?.contentMarkdown?.trim()) {
        return badRequest("Post contentMarkdown is required.");
      }

      const post = await upsertBlogPost(blogPayload.post);

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

    if (blogPayload.action === "delete") {
      const deletedPost = await deleteBlogPost({
        externalId: blogPayload.post?.externalId ?? blogPayload.externalId ?? null,
        slug: blogPayload.post?.slug ?? blogPayload.slug ?? null,
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
