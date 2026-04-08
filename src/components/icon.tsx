type IconName =
  | "linkedin"
  | "github"
  | "facebook"
  | "instagram"
  | "phone"
  | "email"
  | "location"
  | "arrow-right"
  | "menu";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "size-5" }: IconProps) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path {...shared} d="M7 9v8" />
          <path {...shared} d="M11 17v-4.5a2.5 2.5 0 0 1 5 0V17" />
          <path {...shared} d="M3 9v8" />
          <circle cx="5" cy="5.5" r="1.1" fill="currentColor" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            {...shared}
            d="M9 18c-4 1.2-4-2.2-5.5-2.6M14.5 20v-3.1a3.3 3.3 0 0 0-.9-2.4c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.8 1.4a13 13 0 0 0-6.9 0C4.9.6 3.7 1 3.7 1A4.8 4.8 0 0 0 3.6 4.6 5.2 5.2 0 0 0 2.2 8.2c0 5.2 3.1 6.4 6.1 6.7a3.3 3.3 0 0 0-.9 2.4V20"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path {...shared} d="M14 8h2V4.5h-2.5A3.5 3.5 0 0 0 10 8v2H8v3.5h2V20h4v-6.5h2.3L17 10h-3V8a1 1 0 0 1 1-1Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect {...shared} x="4" y="4" width="16" height="16" rx="5" />
          <circle {...shared} cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            {...shared}
            d="M6.8 4.5h2.7l1.1 4.4-2 1.7a14 14 0 0 0 4.8 4.8l1.7-2 4.4 1.1v2.7a1.8 1.8 0 0 1-2 1.8A15.7 15.7 0 0 1 5 6.5a1.8 1.8 0 0 1 1.8-2Z"
          />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect {...shared} x="3.5" y="5.5" width="17" height="13" rx="2.5" />
          <path {...shared} d="m5.5 8 6.5 5 6.5-5" />
        </svg>
      );
    case "location":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            {...shared}
            d="M12 20s5.5-5.5 5.5-10a5.5 5.5 0 1 0-11 0c0 4.5 5.5 10 5.5 10Z"
          />
          <circle {...shared} cx="12" cy="10" r="1.8" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path {...shared} d="M5 12h14" />
          <path {...shared} d="m13 6 6 6-6 6" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path {...shared} d="M5 8h14" />
          <path {...shared} d="M5 12h14" />
          <path {...shared} d="M5 16h14" />
        </svg>
      );
    default:
      return null;
  }
}
