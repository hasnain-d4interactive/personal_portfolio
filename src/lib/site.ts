const localhost = "http://localhost:3000";

export function getBaseUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return explicit.startsWith("http") ? explicit : `https://${explicit}`;
  }

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) {
    return `https://${production}`;
  }

  const preview = process.env.VERCEL_URL;
  if (preview) {
    return `https://${preview}`;
  }

  return localhost;
}

export function absoluteUrl(path = "/") {
  return new URL(path, getBaseUrl()).toString();
}
