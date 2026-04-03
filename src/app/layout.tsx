import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/content/site";
import { absoluteUrl, getBaseUrl } from "@/lib/site";

import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const bodyFont = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  image: absoluteUrl(siteConfig.portraitSrc),
  jobTitle: siteConfig.role,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rawalpindi",
    addressCountry: "Pakistan",
  },
  sameAs: siteConfig.socialLinks.map((item) => item.href),
  knowsAbout: [
    "Laravel",
    "React",
    "Vue.js",
    "Next.js",
    "Python",
    "SaaS product development",
    "AI-assisted software delivery",
  ],
  description: siteConfig.intro,
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: `Ahmed Hasnain · Full-Stack Software Developer`,
    template: `%s · Ahmed Hasnain`,
  },
  description: siteConfig.intro,
  keywords: [
    "Ahmed Hasnain",
    "Ahmed Hasnain software developer",
    "Ahmed Hasnain full-stack developer",
    "Ahmed Hasnain Laravel developer",
    "Ahmed Hasnain React developer",
    "Ahmed Hasnain Vue developer",
    "Ahmed Hasnain Next.js developer",
    "Ahmed Hasnain Python developer",
    "Ahmed Hasnain portfolio",
  ],
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: "Ahmed Hasnain · Full-Stack Software Developer",
    description: siteConfig.intro,
    url: siteConfig.siteUrl,
    siteName: "Ahmed Hasnain Portfolio",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Ahmed Hasnain portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Hasnain · Full-Stack Software Developer",
    description: siteConfig.intro,
    images: [absoluteUrl("/opengraph-image")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[#fcf6f1] text-[#2b211d] antialiased">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,168,120,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(247,210,176,0.26),_transparent_26%),linear-gradient(180deg,#fffdf9_0%,#fcf6f1_48%,#f8efe8_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(166,120,95,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(166,120,95,0.08)_1px,transparent_1px)] bg-[size:128px_128px] opacity-[0.16]" />
          <div className="pointer-events-none absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[#f7d6b5]/50 blur-3xl" />
          <div className="pointer-events-none absolute right-[-8rem] top-[24rem] h-80 w-80 rounded-full bg-[#ffd4a9]/45 blur-3xl" />
          <SiteHeader />
          <main className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-5 py-8 md:px-8 md:py-12">
            {children}
          </main>
          <SiteFooter />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
      </body>
    </html>
  );
}
