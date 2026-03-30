import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-white">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
        The route may have changed, or the page may not be part of this portfolio yet.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
      >
        Back Home
      </Link>
    </div>
  );
}
