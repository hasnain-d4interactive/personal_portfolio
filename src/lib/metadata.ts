import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/site";

export function createMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description,
      url: absoluteUrl(path),
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${siteConfig.name}`,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}
