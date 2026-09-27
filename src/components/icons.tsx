type IconProps = { className?: string };

export function TargetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2.5v3.2M12 18.3v3.2M2.5 12h3.2M18.3 12h3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 20l1.2-4.2L15.6 5.4a1.8 1.8 0 0 1 2.5 0l.5.5a1.8 1.8 0 0 1 0 2.5L8.2 18.8 4 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13.8 7.2l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function RocketIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M14.2 4.2c2.6.3 4.6 1.6 5.6 5.6-2.2 1.6-4.6 2.2-7.4 2.2-1.4 2.8-2.2 5-2.6 7.2-1.6-.8-3.4-2.6-4.2-4.2 2.2-.4 4.4-1.2 7.2-2.6 0-2.8.6-5.2 2.2-7.4-.3-.3-.6-.6-.8-.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="15.2" cy="8.8" r="1.1" fill="currentColor" />
      <path d="M8 14.5 5.2 17.2M9.2 18.8 6.6 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M8.5 7.5 4 12l4.5 4.5M15.5 7.5 20 12l-4.5 4.5M13.2 6.5l-2.4 11"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="7.5" y="3" width="9" height="18" rx="2.2" stroke="currentColor" strokeWidth="1.65" />
      <path d="M10.5 5.5h3M11 18.5h2" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
    </svg>
  );
}

export function MonitorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="4.5" width="18" height="12" rx="1.8" stroke="currentColor" strokeWidth="1.65" />
      <path d="M8.5 20h7M12 16.5V20" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3.2 13.55 9.1 19.5 10.6 13.55 12.1 12 18 10.45 12.1 4.5 10.6 10.45 9.1 12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
      <path
        d="M18.2 15.2 18.85 17.15 20.8 17.8l-1.95.65L18.2 20.4l-.65-1.95L15.6 17.8l1.95-.65.65-1.95Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrainIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M9.2 5.2a2.6 2.6 0 0 1 2.8-2 2.6 2.6 0 0 1 2.8 2c1.4.2 2.5 1.4 2.5 2.9 0 .5-.1 1-.4 1.4 1 .6 1.6 1.7 1.6 2.9 0 1.4-.8 2.6-2 3.2v1.6c0 1.3-1 2.3-2.3 2.3h-.6c-.4 1-1.4 1.7-2.6 1.7s-2.2-.7-2.6-1.7h-.6c-1.3 0-2.3-1-2.3-2.3v-1.6c-1.2-.6-2-1.8-2-3.2 0-1.2.6-2.3 1.6-2.9-.3-.4-.4-.9-.4-1.4 0-1.5 1.1-2.7 2.5-2.9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 4.2v14.2M9.2 9.2c.7.4 1.5.6 2.8.6s2.1-.2 2.8-.6M9.5 13c.8.4 1.6.6 2.5.6s1.7-.2 2.5-.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M8 16 16 8M9 8h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.2 18.5c1.2-2.3 3.2-3.4 5.8-3.4s4.6 1.1 5.8 3.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export type ServiceIconName = "code" | "phone" | "monitor" | "spark" | "brain";

export function ServiceGlyph({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  switch (name) {
    case "code":
      return <CodeIcon className={className} />;
    case "phone":
      return <PhoneIcon className={className} />;
    case "monitor":
      return <MonitorIcon className={className} />;
    case "brain":
      return <BrainIcon className={className} />;
    case "spark":
    default:
      return <SparkIcon className={className} />;
  }
}
