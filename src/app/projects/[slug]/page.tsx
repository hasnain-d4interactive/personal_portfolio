import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
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
    <div className="space-y-20 md:space-y-24">
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
                className="rounded-full bg-[#382923] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5a3b30]"
              >
                {link.label}
              </a>
            ))}
          </>
        }
      />

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-[#ead8cb] bg-white p-8 shadow-[0_24px_70px_rgba(171,122,95,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a16d53]">
            Product Overview
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2d211d]">
            Context before implementation.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#6e5649]">
            {project.productOverview}
          </p>
          <p className="mt-5 text-base leading-8 text-[#7e6558]">{project.summary}</p>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-[#ead8cb] bg-white p-4 shadow-[0_24px_70px_rgba(171,122,95,0.08)]">
          <Image
            src={project.media.src}
            alt={project.media.alt}
            width={1400}
            height={900}
            className="h-auto w-full rounded-[1.5rem] border border-[#f1ddd1]"
          />
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-[#ead8cb] bg-white p-8 shadow-[0_24px_70px_rgba(171,122,95,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a16d53]">
            Contribution Areas
          </p>
          <div className="mt-6 space-y-4">
            {project.contributions.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[#efe1d6] bg-[#fff9f4] px-5 py-4 text-sm leading-7 text-[#6e5649]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e4c8b4] bg-[linear-gradient(145deg,#fff8f2,#ffe7d6)] p-8 shadow-[0_24px_70px_rgba(171,122,95,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a16d53]">
            Feature Focus
          </p>
          <div className="mt-6 space-y-4">
            {project.featureHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[#efcfbe] bg-white/75 px-5 py-4 text-sm leading-7 text-[#6a4b3c]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[#ead8cb] bg-white p-8 shadow-[0_24px_70px_rgba(171,122,95,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a16d53]">
            Stack
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#ead6c8] bg-[#fff7f0] px-4 py-2 text-sm text-[#6b5447]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#ead8cb] bg-white p-8 shadow-[0_24px_70px_rgba(171,122,95,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a16d53]">
            Safe Impact Framing
          </p>
          <div className="mt-6 space-y-4">
            {project.safeImpactStatements.map((statement) => (
              <div
                key={statement}
                className="rounded-[1.5rem] border border-[#efe1d6] bg-[#fff9f4] px-5 py-4 text-sm leading-7 text-[#6e5649]"
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
          className="rounded-full border border-[#dfc7ba] bg-white px-5 py-3 text-sm font-medium text-[#4b342a] transition hover:bg-[#fff5ee]"
        >
          Back to Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-full bg-[#382923] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#5a3b30]"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
