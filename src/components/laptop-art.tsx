const orbit = [
  { icon: "lock", x: 168, y: 28 },
  { icon: "bolt", x: 262, y: 58 },
  { icon: "cloud", x: 78, y: 78 },
  { icon: "globe", x: 292, y: 128 },
  { icon: "gear", x: 64, y: 168 },
  { icon: "sync", x: 286, y: 196 },
];

function MiniIcon({ name }: { name: string }) {
  if (name === "lock") {
    return (
      <g fill="none" stroke="#e07a32" strokeWidth="1.6">
        <rect x="-5" y="-1" width="10" height="8" rx="1.4" />
        <path d="M-3  -1 V-4 a3 3 0 0 1 6 0 V-1" />
      </g>
    );
  }
  if (name === "bolt") {
    return <path d="M1-7  -4 1h4l-1 6 6-9H2Z" fill="#e07a32" />;
  }
  if (name === "cloud") {
    return <path d="M-6 2a4 4 0 0 1 1-7 5 5 0 0 1 9 2 3.5 3.5 0 0 1 1 7Z" fill="#e07a32" />;
  }
  if (name === "globe") {
    return (
      <g fill="none" stroke="#e07a32" strokeWidth="1.5">
        <circle r="6" />
        <ellipse rx="3" ry="6" />
        <path d="M-6 0h12" />
      </g>
    );
  }
  if (name === "gear") {
    return (
      <g fill="none" stroke="#e07a32" strokeWidth="1.5">
        <circle r="2.4" />
        <path d="M0-6.5v2.2M0 4.3v2.2M-6.5 0h2.2M4.3 0h2.2M-4.6-4.6l1.6 1.6M3 3l1.6 1.6M4.6-4.6 3-3M-3 3l-1.6 1.6" />
      </g>
    );
  }
  return (
    <g fill="none" stroke="#e07a32" strokeWidth="1.5" strokeLinecap="round">
      <path d="M-2-5a6 6 0 1 1-3 3" />
      <path d="M-6-2v-4h4" />
    </g>
  );
}

export function LaptopArt() {
  return (
    <svg viewBox="0 0 420 320" className="h-auto w-full max-w-[460px]" role="img" aria-label="Laptop surrounded by product icons">
      <ellipse cx="210" cy="168" rx="150" ry="120" fill="#f0a13a" />
      <ellipse cx="210" cy="176" rx="118" ry="92" fill="#f6b24e" />
      <path d="M168 70c70-36 150-8 168 18" fill="none" stroke="#f6c27a" strokeWidth="2" strokeDasharray="4 6" opacity="0.9" />
      {orbit.map((item) => (
        <g key={item.icon} transform={`translate(${item.x} ${item.y})`}>
          <circle r="18" fill="#fff" stroke="#f0a04a" strokeWidth="1.4" />
          <MiniIcon name={item.icon} />
        </g>
      ))}
      <ellipse cx="210" cy="268" rx="150" ry="16" fill="#e0893a" />
      <rect x="118" y="118" width="184" height="118" rx="8" fill="#f7f1ea" />
      <rect x="128" y="128" width="164" height="96" rx="4" fill="#fffaf6" />
      <rect x="146" y="146" width="128" height="8" rx="4" fill="#f0b07a" />
      <rect x="146" y="162" width="104" height="8" rx="4" fill="#f6d3b0" />
      <rect x="146" y="178" width="116" height="8" rx="4" fill="#f6d3b0" />
      <rect x="146" y="194" width="72" height="8" rx="4" fill="#f3c49a" />
      <path d="M96 240h228l18 22H78Z" fill="#d9d3cc" />
    </svg>
  );
}
