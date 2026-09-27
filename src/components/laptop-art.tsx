const orbit = [
  { icon: "gear" as const, x: 48, y: 148 },
  { icon: "cloud" as const, x: 88, y: 72 },
  { icon: "lock" as const, x: 168, y: 28 },
  { icon: "bolt" as const, x: 252, y: 28 },
  { icon: "globe" as const, x: 332, y: 72 },
  { icon: "swap" as const, x: 372, y: 148 },
];

function MiniIcon({ name }: { name: (typeof orbit)[number]["icon"] }) {
  if (name === "gear") {
    return (
      <g fill="none" stroke="#e0893a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle r="2.4" />
        <path d="M0-7.2v1.8M0 5.4v1.8M-7.2 0h1.8M5.4 0h1.8M-5.1-5.1  -3.8-3.8M3.8 3.8l1.3 1.3M5.1-5.1 3.8-3.8M-3.8 3.8l-1.3 1.3" />
        <circle r="5.2" />
      </g>
    );
  }
  if (name === "lock") {
    return (
      <g fill="none" stroke="#e0893a" strokeWidth="1.7">
        <rect x="-4.5" y="-0.5" width="9" height="7.5" rx="1.3" />
        <path d="M-2.6-0.5V-3.2a2.6 2.6 0 0 1 5.2 0V-0.5" />
      </g>
    );
  }
  if (name === "bolt") {
    return <path d="M1.2-6.5-3.5 1.2h3.6l-1 6.2 6.2-9.4H2.2Z" fill="#e0893a" />;
  }
  if (name === "cloud") {
    return <path d="M-5.5 2.2a3.6 3.6 0 0 1 .8-6.4 4.6 4.6 0 0 1 8.4 1.8 3.2 3.2 0 0 1 .8 6.4Z" fill="#e0893a" />;
  }
  if (name === "globe") {
    return (
      <g fill="none" stroke="#e0893a" strokeWidth="1.55">
        <circle r="6.2" />
        <ellipse rx="2.6" ry="6.2" />
        <path d="M-6.2 0h12.4M-5.2-3h10.4M-5.2 3h10.4" strokeLinecap="round" />
      </g>
    );
  }
  return (
    <g fill="none" stroke="#e0893a" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
      <path d="M-6.2-2.2h8.4l-2.2-2.2M2.2 2.2h-8.4l2.2 2.2" />
    </g>
  );
}

export function LaptopArt() {
  return (
    <svg viewBox="0 0 420 300" className="h-auto w-full max-w-[420px]" role="img" aria-label="Product workspace illustration">
      <defs>
        <radialGradient id="services-glow" cx="50%" cy="55%" r="58%">
          <stop offset="0%" stopColor="#ffd27a" />
          <stop offset="40%" stopColor="#f0a13a" />
          <stop offset="75%" stopColor="#c45a7a" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#8b3a8a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="services-base" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e0893a" />
          <stop offset="55%" stopColor="#d45a7a" />
          <stop offset="100%" stopColor="#8b4aac" />
        </linearGradient>
      </defs>

      <ellipse cx="210" cy="178" rx="168" ry="128" fill="url(#services-glow)" />
      <ellipse cx="210" cy="188" rx="120" ry="92" fill="#f6b24e" opacity="0.7" />

      <path
        d="M48 148 C78 28, 342 28, 372 148"
        fill="none"
        stroke="#fff"
        strokeWidth="1.4"
        strokeDasharray="2.5 6"
        opacity="0.85"
      />

      {orbit.map((item) => (
        <g key={item.icon} transform={`translate(${item.x} ${item.y})`}>
          <circle r="19" fill="#fff" />
          <MiniIcon name={item.icon} />
        </g>
      ))}

      <rect x="118" y="118" width="184" height="118" rx="10" fill="#fff" />
      <rect x="130" y="130" width="160" height="88" rx="4" fill="#fff8f0" />
      <rect x="146" y="148" width="128" height="6" rx="3" fill="#f0a13a" opacity="0.85" />
      <rect x="146" y="164" width="104" height="6" rx="3" fill="#f0a13a" opacity="0.7" />
      <rect x="146" y="180" width="116" height="6" rx="3" fill="#f0a13a" opacity="0.55" />
      <rect x="146" y="196" width="72" height="6" rx="3" fill="#f0a13a" opacity="0.4" />

      <path d="M150 236h120l18 18H132Z" fill="#fff" />
      <ellipse cx="210" cy="268" rx="148" ry="12" fill="url(#services-base)" />
    </svg>
  );
}
