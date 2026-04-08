type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={["max-w-3xl", align === "center" ? "mx-auto text-center" : ""].join(" ")}>
      <p className="reeni-eyebrow">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-bold text-[var(--text-strong)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[var(--text-muted)] md:text-[1.05rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
