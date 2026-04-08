import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
  visual?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  visual,
}: PageHeroProps) {
  return (
    <section className="reeni-shell relative overflow-hidden px-6 py-12 md:px-10 md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(253,196,72,0.18),_transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.45),transparent)]" />
      <div
        className={[
          "relative z-10 grid gap-10 md:gap-14",
          visual ? "lg:grid-cols-[1.05fr_0.95fr] lg:items-center" : "",
        ].join(" ")}
      >
        <Reveal className="max-w-3xl">
          <p className="reeni-eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold text-[var(--text-strong)] md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg">
            {description}
          </p>
          {actions ? <div className="mt-9 flex flex-wrap gap-4">{actions}</div> : null}
        </Reveal>
        {visual ? <Reveal delay={120} className="relative z-10">{visual}</Reveal> : null}
      </div>
    </section>
  );
}
