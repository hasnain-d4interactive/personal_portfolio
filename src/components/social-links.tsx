import type { SocialLink } from "@/content/site";

type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
};

export function SocialLinks({ links, className = "" }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`.trim()}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#dccfc6] bg-white px-4 py-2 text-sm font-medium text-[#3d2e28] shadow-[0_12px_30px_rgba(137,92,72,0.08)] transition hover:-translate-y-0.5 hover:border-[#d4a98f] hover:bg-[#fff9f4]"
        >
          <span>{link.label}</span>
          <span className="hidden text-xs text-[#8c6d5f] sm:inline">{link.handle}</span>
        </a>
      ))}
    </div>
  );
}
