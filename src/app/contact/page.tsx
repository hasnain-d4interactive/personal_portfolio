import type { Metadata } from "next";

import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { publicContactMethods, publicSocialLinks, siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Ahmed Hasnain through email, LinkedIn, GitHub, or resume download for product engineering opportunities.",
  path: "/contact",
});

function getContactIcon(label: string): Parameters<typeof Icon>[0]["name"] {
  switch (label) {
    case "Email":
      return "email";
    default:
      return "arrow-right";
  }
}

export default function ContactPage() {
  return (
    <div className="space-y-20 md:space-y-28">
      <PageHero
        eyebrow="Contact Ahmed Hasnain"
        title="Open to product engineering conversations, collaborations, and strong software teams."
        description="The easiest way to reach me is by email or LinkedIn. If you want a quick overview first, my resume is also available directly from this site."
      />

      <section className="reeni-shell p-8 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <Reveal className="space-y-8">
            <SectionHeading
              eyebrow="Get In Touch"
              title="Get ready to create great product work."
              description="I keep communication simple on purpose. Reach out directly by email, LinkedIn, GitHub, or through the professional profiles I actively use."
            />

            <div className="space-y-4">
              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4">
                <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)]">
                  <Icon name="email" className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-[var(--text-soft)]">E-mail</span>
                  <span className="mt-1 block text-lg font-medium text-[var(--text-strong)] break-all">
                    {siteConfig.email}
                  </span>
                </span>
              </a>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)]">
                  <Icon name="location" className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-[var(--text-soft)]">Location</span>
                  <span className="mt-1 block text-lg font-medium text-[var(--text-strong)]">
                    {siteConfig.location}
                  </span>
                </span>
              </div>
            </div>

            <div>
              <p className="reeni-eyebrow text-sm">Social Presence</p>
              <SocialLinks links={publicSocialLinks} className="mt-4" />
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {publicContactMethods.map((method, index) => {
              const external = method.label === "LinkedIn" || method.label === "GitHub";

              return (
                <Reveal
                  key={method.label}
                  delay={index * 60}
                  className={[
                    "rounded-[1.85rem] border p-6 shadow-[var(--shadow-soft)]",
                    index === 0
                      ? "border-[rgba(20,20,20,0.08)] bg-[var(--accent)]"
                      : "border-[var(--border-soft)] bg-[var(--surface-soft)]",
                  ].join(" ")}
                >
                  <a
                    href={method.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="block min-w-0"
                  >
                    <span className="inline-flex size-12 items-center justify-center rounded-full border border-[rgba(20,20,20,0.08)] bg-[rgba(255,255,255,0.66)]">
                      <Icon name={getContactIcon(method.label)} className="size-4" />
                    </span>
                    <p className="mt-5 text-sm uppercase tracking-[0.12em] text-[var(--text-soft)]">
                      {method.label}
                    </p>
                    <h2 className="mt-3 break-all text-[1.5rem] font-bold leading-tight text-[var(--text-strong)]">
                      {method.value}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                      {method.description}
                    </p>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
