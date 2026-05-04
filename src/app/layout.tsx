import type { Metadata } from "next";
import { Rajdhani, Rubik } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/content/site";
import { absoluteUrl, getBaseUrl } from "@/lib/site";

import "./globals.css";

const headingFont = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const bodyFont = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const GTM_ID = "GTM-5L3ZVP65";

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
  verification: {
    google: "FgYgJNhyrhmB-6Zv2dVqJ7X_FxsM-fxEM7NnflV-HO0",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/icon", sizes: "512x512", type: "image/png" },
      { url: siteConfig.faviconSrc, type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
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
      <body className="min-h-full bg-[var(--background)] text-[var(--text-strong)] antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),transparent)]" />
          <div className="pointer-events-none absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[var(--accent-soft)] blur-3xl" />
          <div className="pointer-events-none absolute right-[-8rem] top-[24rem] h-80 w-80 rounded-full bg-[rgba(20,20,20,0.035)] blur-3xl" />
          <SiteHeader />
          <main className="relative z-10 mx-auto w-full max-w-[1320px] flex-1 px-5 py-8 md:px-8 md:py-12 xl:px-12">
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
