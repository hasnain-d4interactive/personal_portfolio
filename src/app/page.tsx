import Image from "next/image";
import Link from "next/link";

import { BlogCard } from "@/components/blog-card";
import { Icon } from "@/components/icon";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import {
  experienceEntries,
  focusAreas,
  heroStats,
  projects,
  publicSocialLinks,
  siteConfig,
  skills,
  strengths,
} from "@/content/site";
import { getLatestPublishedPosts, type BlogPost } from "@/lib/blog";

const stackCards = [
  {
    title: "Laravel",
    description: "Production backend features, APIs, operational tooling, and maintainable SaaS workflows.",
  },
  {
    title: "React / Next.js",
    description: "Modern frontend delivery for portfolio, product surfaces, and user-facing feature systems.",
  },
  {
    title: "Python",
    description: "Current product work around AI-assisted workflows, editorial systems, and automation-connected delivery.",
  },
  {
    title: "AI Workflow",
    description: "Claude, Codex, and ChatGPT used properly for research, debugging, implementation support, and faster shipping.",
  },
];

export const dynamic = "force-dynamic";

export default async function Home() {
  const latestPosts = await getLatestPublishedPosts(2);

  return (
    <div className="space-y-20 pb-8 md:space-y-28">
      <section className="relative overflow-hidden px-1 pt-4 md:pt-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="order-2 max-w-2xl lg:order-1">
            <p className="reeni-eyebrow">Full-Stack Developer</p>
            <h1 className="mt-5 text-[4.1rem] font-bold leading-[0.94] text-[var(--text-strong)] sm:text-[5.25rem] md:text-[6.3rem]">
              Ahmed
              <br />
              Hasnain
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-[var(--text-muted)] md:text-[1.12rem]">
              {siteConfig.heroTagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 text-base font-medium text-[var(--text-strong)] transition hover:bg-[var(--accent-hover)]"
              >
                View Portfolio
                <Icon name="arrow-right" className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-7 py-4 text-base font-medium text-[var(--text-strong)] transition hover:border-[rgba(20,20,20,0.18)] hover:bg-[var(--surface-primary)]"
              >
                Contact Me
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <SocialLinks links={publicSocialLinks} />
              <a
                href={siteConfig.resumeHref}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-medium text-[var(--text-strong)] transition hover:bg-[var(--surface-primary)]"
              >
                Resume
                <Icon name="arrow-right" className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={140} className="order-1 lg:order-2">
            <div className="relative mx-auto flex w-full max-w-[620px] justify-center lg:justify-end">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[20rem] w-[20rem] rounded-full border border-[rgba(20,20,20,0.08)] sm:h-[28rem] sm:w-[28rem] md:h-[36rem] md:w-[36rem]" />
                <div className="absolute h-[14rem] w-[14rem] rounded-full border border-[rgba(20,20,20,0.06)] sm:h-[20rem] sm:w-[20rem] md:h-[28rem] md:w-[28rem]" />
                <div className="absolute left-[10%] top-[18%] size-5 rounded-full bg-[var(--accent)] sm:size-7" />
                <div className="absolute bottom-[12%] right-[14%] size-7 rounded-full bg-[var(--accent)] sm:size-9" />
              </div>
              <div className="relative aspect-square w-full max-w-[24rem] overflow-hidden rounded-full border-[3px] border-[var(--accent)] bg-[#101010] shadow-[0_30px_80px_rgba(20,20,20,0.18)] sm:max-w-[31rem] md:max-w-[34rem]">
                <Image
                  src={siteConfig.portraitSrc}
                  alt={siteConfig.portraitAlt}
                  width={800}
                  height={800}
                  priority
                  className="h-full w-full object-cover grayscale"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-1">
        <Reveal className="mx-auto max-w-6xl text-center">
          <h2 className="text-[2.85rem] font-bold leading-[1.12] text-[var(--text-strong)] sm:text-[3.5rem] md:text-[4.55rem]">
            Ahmed Hasnain builds
            <span className="text-[var(--accent)]"> SaaS products</span> with a practical
            <span className="text-[var(--text-soft)]"> full-stack mindset</span>, combining
            product ownership, modern web engineering, and
            <span className="text-[var(--accent)]"> AI-assisted delivery</span>.
          </h2>
        </Reveal>
      </section>

      <section className="reeni-shell overflow-hidden p-8 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="relative">
            <div className="absolute -left-10 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--accent-soft)] blur-2xl md:block" />
            <div className="relative grid gap-5 md:grid-cols-[1.2fr_0.95fr]">
              <div className="rounded-[1.9rem] bg-[var(--surface-soft)] p-8 shadow-[var(--shadow-soft)]">
                <p className="text-[4.8rem] font-bold leading-none text-[var(--text-strong)] md:text-[6rem]">
                  5+
                </p>
                <p className="mt-5 max-w-[12rem] text-[2.35rem] font-bold leading-[1.02] text-[var(--text-strong)]">
                  Years Of Experience
                </p>
              </div>
              <div className="space-y-5">
                {heroStats.slice(0, 2).map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.7rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-6"
                  >
                    <p className="font-heading text-[2.4rem] font-bold leading-none text-[var(--text-strong)]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="About Me"
              title="Boost product engineering outcomes with shipped experience."
              description={siteConfig.summary}
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {strengths.slice(0, 2).map((strength) => (
                <article
                  key={strength.title}
                  className="rounded-[1.7rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-6"
                >
                  <h3 className="text-[2rem] font-bold text-[var(--text-strong)]">
                    {strength.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    {strength.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="space-y-10 px-1">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Work"
            title="Transforming ideas into exceptional product-facing work."
            description="My strongest public portfolio examples come from real SaaS products where UX clarity, reporting, business logic, and production stability all mattered."
            align="center"
          />
        </Reveal>
        <Reveal delay={120} className="flex flex-wrap justify-center gap-3">
          {["All", "SaaS", "Analytics", "AI", "Frontend"].map((item, index) => (
            <span
              key={item}
              className={[
                "rounded-full px-5 py-3 text-sm font-medium",
                index === 0
                  ? "bg-[var(--accent)] text-[var(--text-strong)]"
                  : "border border-[var(--border-soft)] bg-[var(--surface-soft)] text-[var(--text-strong)]",
              ].join(" ")}
            >
              {item}
            </span>
          ))}
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {latestPosts.length ? (
        <section className="space-y-10 px-1">
          <Reveal>
            <SectionHeading
              eyebrow="Latest Writing"
              title="Thoughtful notes from real product work."
              description="The blog extends the portfolio with writing on shipping SaaS features, AI-assisted execution, debugging habits, and decisions made under delivery pressure."
              align="center"
            />
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-2">
            {latestPosts.map((post: BlogPost) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <Reveal delay={120} className="flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 text-base font-medium text-[var(--text-strong)] transition hover:bg-[var(--accent-hover)]"
            >
              View All Articles
              <Icon name="arrow-right" className="size-4" />
            </Link>
          </Reveal>
        </section>
      ) : null}

      <section className="reeni-shell p-8 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <SectionHeading
              eyebrow="My Skill"
              title="Expert areas where I’ve gained real product depth."
              description="My background started in Laravel and Vue.js, expanded into React and Next.js, and now includes Python-connected AI workflow delivery inside active SaaS environments."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {stackCards.map((card, index) => (
              <Reveal
                key={card.title}
                delay={index * 70}
                className="rounded-[1.9rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-7"
              >
                <span className="inline-flex size-16 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white text-[var(--accent)] shadow-[var(--shadow-soft)]">
                  <span className="font-heading text-[1.35rem] font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <h3 className="mt-6 text-[2.1rem] font-bold text-[var(--text-strong)]">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
                  {card.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-10 px-1">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Recent roles that shaped both breadth and product judgment."
            description="These snapshots reflect production SaaS work, healthcare software, ecommerce systems, and the habit of shipping under real delivery pressure."
            align="center"
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {experienceEntries.slice(0, 3).map((entry, index) => (
            <Reveal
              key={`${entry.company}-${entry.role}`}
              delay={index * 90}
              className="reeni-shell p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="reeni-eyebrow text-sm">{entry.company}</p>
                  <h3 className="mt-3 text-[2.1rem] font-bold text-[var(--text-strong)]">
                    {entry.role}
                  </h3>
                </div>
                <span className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--text-strong)]">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-3 text-sm text-[var(--text-soft)]">
                {entry.start} - {entry.end}
              </p>
              <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">{entry.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {entry.stack.slice(0, 3).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--text-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="reeni-shell p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="AI Workflow"
              title="One year of disciplined AI-assisted delivery."
              description={siteConfig.aiWorkflowSummary}
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <Reveal
                key={area}
                delay={index * 60}
                className={[
                  "rounded-[1.7rem] border p-6 text-base leading-8",
                  index === 0
                    ? "border-[rgba(20,20,20,0.1)] bg-[var(--accent)] text-[var(--text-strong)]"
                    : "border-[var(--border-soft)] bg-[var(--surface-soft)] text-[var(--text-muted)]",
                ].join(" ")}
              >
                {area}
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={180} className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[var(--border-soft)] bg-white px-4 py-2 text-sm text-[var(--text-muted)]"
            >
              {skill}
            </span>
          ))}
        </Reveal>
      </section>

      <section className="reeni-shell p-8 md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="reeni-eyebrow">Let&apos;s Build</p>
            <h2 className="mt-4 text-[3.4rem] font-bold text-[var(--text-strong)] md:text-[4.4rem]">
              Looking for Ahmed Hasnain to help ship thoughtful SaaS product work.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">
              I’m most valuable in product teams where engineering quality, delivery
              momentum, and user-facing outcomes all need to move together.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 text-base font-medium text-[var(--text-strong)] transition hover:bg-[var(--accent-hover)]"
            >
              Email Me
              <Icon name="arrow-right" className="size-4" />
            </a>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-7 py-4 text-base font-medium text-[var(--text-strong)] transition hover:bg-[var(--surface-primary)]"
            >
              View Experience
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
