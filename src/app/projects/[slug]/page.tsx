import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { getProjectBySlug, projects } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    title: project.name,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-20 md:space-y-28">
      <PageHero
        eyebrow="Case Study"
        title={project.name}
        description={project.tagline}
        actions={
          <>
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 text-base font-medium text-[var(--text-strong)] transition hover:bg-[var(--accent-hover)]"
              >
                {link.label}
                <Icon name="arrow-right" className="size-4" />
              </a>
            ))}
          </>
        }
      />

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="reeni-shell p-8">
          <p className="reeni-eyebrow text-sm">Product Overview</p>
          <h2 className="mt-4 text-[3rem] font-bold text-[var(--text-strong)] md:text-[3.5rem]">
            Context before implementation.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">
            {project.productOverview}
          </p>
          <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">{project.summary}</p>
        </Reveal>

        <Reveal delay={120} className="reeni-shell overflow-hidden p-5">
          <Image
            src={project.media.src}
            alt={project.media.alt}
            width={1400}
            height={900}
            className="h-auto w-full rounded-[1.75rem] object-cover"
          />
        </Reveal>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <Reveal className="reeni-shell p-8">
          <p className="reeni-eyebrow text-sm">Contribution Areas</p>
          <div className="mt-6 space-y-4">
            {project.contributions.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] px-5 py-4 text-base leading-8 text-[var(--text-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="rounded-[2rem] border border-[rgba(20,20,20,0.08)] bg-[var(--accent)] p-8 shadow-[var(--shadow-card)]">
          <p className="reeni-eyebrow text-sm text-[var(--text-strong)]">Feature Focus</p>
          <div className="mt-6 space-y-4">
            {project.featureHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[rgba(20,20,20,0.08)] bg-[rgba(255,255,255,0.58)] px-5 py-4 text-base leading-8 text-[var(--text-strong)]"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="reeni-shell p-8">
          <p className="reeni-eyebrow text-sm">Stack</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--text-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="reeni-shell p-8">
          <p className="reeni-eyebrow text-sm">Safe Impact Framing</p>
          <div className="mt-6 space-y-4">
            {project.safeImpactStatements.map((statement) => (
              <div
                key={statement}
                className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] px-5 py-4 text-base leading-8 text-[var(--text-muted)]"
              >
                {statement}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-6 py-4 text-base font-medium text-[var(--text-strong)] transition hover:bg-[var(--surface-primary)]"
        >
          Back to Projects
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-4 text-base font-medium text-[var(--text-strong)] transition hover:bg-[var(--accent-hover)]"
        >
          Get In Touch
          <Icon name="arrow-right" className="size-4" />
        </Link>
      </section>
    </div>
  );
}
