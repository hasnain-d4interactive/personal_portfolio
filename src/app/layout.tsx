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

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: `${siteConfig.name} · ${siteConfig.role}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.intro,
  keywords: [
    "Ahmed Hasnain",
    "software developer",
    "full-stack developer",
    "Laravel developer",
    "React developer",
    "Vue developer",
    "Next.js portfolio",
    "Python developer",
  ],
  openGraph: {
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.intro,
    url: absoluteUrl("/"),
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · ${siteConfig.role}`,
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
      <body className="min-h-full bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_30%),linear-gradient(180deg,#020617_0%,#050816_36%,#030712_100%)] text-slate-100 antialiased">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.08]" />
          <div className="pointer-events-none absolute left-[-12rem] top-28 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="pointer-events-none absolute right-[-10rem] top-[30rem] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <SiteHeader />
          <main className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-6 py-10 md:px-8 md:py-14">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
