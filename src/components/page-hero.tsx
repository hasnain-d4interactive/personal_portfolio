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
    <section className="relative overflow-hidden rounded-[2.2rem] border border-[#ead8cb] bg-[linear-gradient(140deg,#fffdf9,#fff7ef_36%,#fff1e6_100%)] px-6 py-10 shadow-[0_30px_80px_rgba(171,122,95,0.12)] md:px-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,181,126,0.22),_transparent_28%),radial-gradient(circle_at_80%_15%,_rgba(247,221,198,0.85),_transparent_35%)]" />
      <div
        className={[
          "relative z-10 grid gap-10",
          visual ? "lg:grid-cols-[1.1fr_0.9fr] lg:items-center" : "",
        ].join(" ")}
      >
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#a16d53]">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#2d211d] md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#6e5649] md:text-lg">
            {description}
          </p>
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
        {visual ? <div className="relative z-10">{visual}</div> : null}
      </div>
    </section>
  );
}
