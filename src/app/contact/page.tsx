import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { contactMethods, siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Ahmed Hasnain through phone, email, LinkedIn, Facebook, Instagram, GitHub, or resume download for product engineering opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="space-y-20 md:space-y-24">
      <PageHero
        eyebrow="Contact Ahmed Hasnain"
        title="Open to product engineering conversations, collaborations, and strong software teams."
        description="The easiest way to reach me is by phone, email, or LinkedIn. If you want a quick overview first, my resume is also available directly from this site."
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            target={
              method.label === "LinkedIn" ||
              method.label === "GitHub" ||
              method.label === "Facebook" ||
              method.label === "Instagram"
                ? "_blank"
                : undefined
            }
            rel={
              method.label === "LinkedIn" ||
              method.label === "GitHub" ||
              method.label === "Facebook" ||
              method.label === "Instagram"
                ? "noreferrer"
                : undefined
            }
            className="min-w-0 rounded-[1.75rem] border border-[#ead8cb] bg-white p-5 shadow-[0_18px_44px_rgba(171,122,95,0.08)] transition hover:-translate-y-1 hover:border-[#ddb89d] sm:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a16d53]">
              {method.label}
            </p>
            <h2 className="mt-3 break-all text-lg font-semibold text-[#2d211d] sm:text-xl">
              {method.value}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#6e5649]">{method.description}</p>
          </a>
        ))}
      </section>

      <section className="rounded-[2rem] border border-[#e4c8b4] bg-[linear-gradient(145deg,#fff9f4,#ffe9dd)] p-8 shadow-[0_24px_70px_rgba(171,122,95,0.12)] md:p-10">
        <SectionHeading
          eyebrow="Social Presence"
          title="Find Ahmed Hasnain across the web."
          description="I keep my portfolio focused, but I also make it easy to connect through the social and professional profiles I actively use."
        />
        <SocialLinks links={siteConfig.socialLinks} className="mt-8" />
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={siteConfig.phoneHref}
            className="rounded-full bg-[#382923] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5a3b30]"
          >
            Call Ahmed
          </a>
          <a
            href={siteConfig.resumeHref}
            className="rounded-full border border-[#dfc7ba] bg-white px-6 py-3 text-sm font-medium text-[#4b342a] transition hover:bg-[#fff5ee]"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}
