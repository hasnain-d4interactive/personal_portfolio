import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-primary)] px-6 py-20 text-center shadow-[0_24px_70px_rgba(111,130,150,0.10)]">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--text-soft)]">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-[var(--text-strong)]">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-8 text-[var(--text-muted)]">
        The route may have changed, or the page may not be part of this portfolio yet.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[var(--button-dark)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--button-dark-hover)]"
      >
        Back Home
      </Link>
    </div>
  );
}
