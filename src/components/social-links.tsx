import { Icon } from "@/components/icon";
import type { SocialLink } from "@/content/site";

type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
  variant?: "icons" | "pills";
};

function getIconName(label: string): Parameters<typeof Icon>[0]["name"] {
  switch (label) {
    case "LinkedIn":
      return "linkedin";
    case "GitHub":
      return "github";
    case "Facebook":
      return "facebook";
    case "Instagram":
      return "instagram";
    default:
      return "arrow-right";
  }
}

export function SocialLinks({
  links,
  className = "",
  variant = "icons",
}: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`.trim()}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className={
            variant === "icons"
              ? "inline-flex size-[3.25rem] items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] text-[var(--text-strong)] shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(20,20,20,0.18)] hover:bg-[var(--accent)]"
              : "inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-medium text-[var(--text-strong)] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-[rgba(20,20,20,0.18)] hover:bg-[var(--surface-primary)]"
          }
        >
          <Icon name={getIconName(link.label)} className="size-[1.15rem]" />
          {variant === "pills" ? (
            <>
              <span className="shrink-0">{link.label}</span>
              <span className="hidden truncate text-xs text-[var(--text-soft)] sm:inline">
                {link.handle}
              </span>
            </>
          ) : null}
        </a>
      ))}
    </div>
  );
}
