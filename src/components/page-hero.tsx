type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(140deg,rgba(15,23,42,0.95),rgba(9,14,27,0.86)),radial-gradient(circle_at_top_left,rgba(14,165,233,0.3),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.24),transparent_30%)] px-6 py-12 shadow-[0_24px_100px_rgba(2,6,23,0.5)] md:px-10 md:py-16">
      <div className="max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          {description}
        </p>
        {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
      </div>
    </section>
  );
}
