import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-[2rem] border border-[#ead8cb] bg-white px-6 py-20 text-center shadow-[0_24px_70px_rgba(171,122,95,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a16d53]">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-[#2d211d]">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-8 text-[#6e5649]">
        The route may have changed, or the page may not be part of this portfolio yet.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[#382923] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5a3b30]"
      >
        Back Home
      </Link>
    </div>
  );
}
