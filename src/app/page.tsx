import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import {
  experienceEntries,
  focusAreas,
  heroStats,
  projects,
  siteConfig,
  skills,
  strengths,
} from "@/content/site";

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-24">
      <PageHero
        eyebrow="Ahmed Hasnain"
        title={siteConfig.heroTitle}
        description={siteConfig.heroTagline}
        actions={
          <>
            <Link
              href="/projects"
              className="rounded-full bg-[#382923] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5a3b30]"
            >
              View Case Studies
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[#dfc7ba] bg-white px-6 py-3 text-sm font-medium text-[#4b342a] transition hover:bg-[#fff5ee]"
            >
              Contact Me
            </Link>
          </>
        }
        visual={
          <div className="grid gap-6 md:grid-cols-[0.92fr_1.08fr] md:items-end">
            <div className="mx-auto w-full max-w-[260px] md:max-w-none">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#ead6c7] bg-[linear-gradient(180deg,#fff8f2,#fbe8da)] p-3 shadow-[0_28px_80px_rgba(171,122,95,0.18)]">
                <div className="absolute inset-x-6 top-0 h-20 rounded-b-full bg-[#f7d9be]/60 blur-2xl" />
                <Image
                  src={siteConfig.portraitSrc}
                  alt={siteConfig.portraitAlt}
                  width={400}
                  height={400}
                  priority
                  className="relative h-auto w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 rounded-[1.8rem] border border-[#ecd8cb] bg-white/90 p-5 shadow-[0_20px_60px_rgba(171,122,95,0.12)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a16d53]">
                Connect
              </p>
              <SocialLinks links={siteConfig.socialLinks} />
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={siteConfig.phoneHref}
                  className="rounded-full border border-[#e4cabc] bg-[#fff7f1] px-4 py-2 text-sm text-[#5c4034] transition hover:bg-[#fff0e6]"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded-full border border-[#e4cabc] bg-[#fff7f1] px-4 py-2 text-sm text-[#5c4034] transition hover:bg-[#fff0e6]"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        }
      />

      <section className="grid gap-4 md:grid-cols-3">
        {heroStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.8rem] border border-[#ead8cb] bg-white p-6 shadow-[0_20px_50px_rgba(171,122,95,0.08)]"
          >
            <p className="text-3xl font-semibold text-[#2d211d]">{stat.value}</p>
            <p className="mt-2 text-sm leading-7 text-[#7c6357]">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Featured Work"
          title="Product work that shows how I build, not just what I know."
          description="My portfolio is anchored in SaaS products where shipping stable features, improving user workflows, and supporting real business use cases all mattered."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[2rem] border border-[#ead8cb] bg-white p-8 shadow-[0_24px_70px_rgba(171,122,95,0.08)]">
          <SectionHeading
            eyebrow="How I Work"
            title="A practical engineer with product instincts and modern delivery habits."
            description="I like working where clarity, momentum, and technical quality all matter. That includes direct product collaboration and disciplined use of AI to move faster."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="rounded-[1.5rem] border border-[#efe1d6] bg-[#fff9f3] p-5"
              >
                <h3 className="text-lg font-semibold text-[#2d211d]">{strength.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6e5649]">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-[#e4c8b4] bg-[linear-gradient(150deg,#fff8f2,#ffe9d9)] p-8 shadow-[0_24px_70px_rgba(171,122,95,0.12)]">
            <SectionHeading
              eyebrow="AI Workflow"
              title="One year of disciplined AI-assisted delivery."
              description={siteConfig.aiWorkflowSummary}
            />
          </div>

          <div className="rounded-[2rem] border border-[#ead8cb] bg-white p-8 shadow-[0_24px_70px_rgba(171,122,95,0.08)]">
            <SectionHeading
              eyebrow="Stack"
              title="Built on strong web fundamentals."
              description="My background started in Laravel and Vue, expanded into React and Next.js, and now includes Python-connected AI product workflows."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#ead6c8] bg-[#fff7f0] px-4 py-2 text-sm text-[#6b5447]"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-[#f0dfd3] bg-[#fffaf6] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a07a66]">
                Focus Areas
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-[#f9ede3] px-4 py-2 text-sm text-[#6e5649]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#ead8cb] bg-white p-8 shadow-[0_24px_70px_rgba(171,122,95,0.08)]">
        <SectionHeading
          eyebrow="Experience Snapshot"
          title="Recent roles across SaaS, healthcare software, ecommerce, and client delivery."
          description="My experience mixes long-running product work with feature ownership, stakeholder collaboration, and production support."
        />
        <div className="mt-8 space-y-6">
          {experienceEntries.slice(0, 3).map((entry) => (
            <div
              key={`${entry.company}-${entry.role}`}
              className="rounded-[1.5rem] border border-[#efe1d6] bg-[#fff9f4] p-6"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#2d211d]">
                    {entry.role} · {entry.company}
                  </h3>
                  <p className="mt-2 text-sm text-[#6e5649]">{entry.summary}</p>
                </div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#a27f6c]">
                  {entry.start} - {entry.end}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/experience"
            className="inline-flex rounded-full border border-[#dfc7ba] bg-white px-5 py-3 text-sm font-medium text-[#4b342a] transition hover:bg-[#fff5ee]"
          >
            Explore Full Experience
          </Link>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#e3c5af] bg-[linear-gradient(145deg,#fff9f4,#ffeade)] p-8 shadow-[0_28px_80px_rgba(171,122,95,0.14)] md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a16d53]">
              Let&apos;s Build
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2d211d] md:text-4xl">
              Looking for Ahmed Hasnain to help ship thoughtful SaaS product work.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#6e5649]">
              I am most valuable in product teams where engineering quality, user experience,
              and delivery momentum all matter, especially when AI-assisted workflows can be
              used properly to speed up execution.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-full bg-[#382923] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5a3b30]"
            >
              Email Me
            </a>
            <a
              href={siteConfig.resumeHref}
              className="rounded-full border border-[#dfc7ba] bg-white px-6 py-3 text-sm font-medium text-[#4b342a] transition hover:bg-[#fff5ee]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
