import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { getProjectBySlug, projects } from "@/content/site";

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

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-24">
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
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
              >
                {link.label}
              </a>
            ))}
          </>
        }
      />

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
            Product Overview
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Context before implementation.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            {project.productOverview}
          </p>
          <p className="mt-5 text-base leading-8 text-slate-400">{project.summary}</p>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-4">
          <Image
            src={project.media.src}
            alt={project.media.alt}
            width={1400}
            height={900}
            className="h-auto w-full rounded-[1.5rem] border border-white/10"
          />
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
            Contribution Areas
          </p>
          <div className="mt-6 space-y-4">
            {project.contributions.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 px-5 py-4 text-sm leading-7 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
            Feature Focus
          </p>
          <div className="mt-6 space-y-4">
            {project.featureHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-sky-400/20 bg-sky-400/10 px-5 py-4 text-sm leading-7 text-sky-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
            Stack
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
            Safe Impact Framing
          </p>
          <div className="mt-6 space-y-4">
            {project.safeImpactStatements.map((statement) => (
              <div
                key={statement}
                className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 px-5 py-4 text-sm leading-7 text-slate-300"
              >
                {statement}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
        >
          Back to Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
