import { siteConfig } from "@/content/site";

export function getBaseUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return explicit.startsWith("http") ? explicit : `https://${explicit}`;
  }

  return siteConfig.siteUrl;
}

export function absoluteUrl(path = "/") {
  return new URL(path, getBaseUrl()).toString();
}
