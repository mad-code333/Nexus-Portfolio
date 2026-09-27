export function NexusSpellMark({
  className = "",
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1450 300"
      className={className}
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : "Nexus"}
      fill="currentColor"
    >
      {/* N */}
      <polygon points="20,36 90,36 90,150 200,36 270,36 270,264 200,264 200,150 90,264 20,264" />
      {/* E */}
      <path d="M320 36 H540 L500 98 H390 V130 H490 L455 182 H390 V214 H520 L480 264 H320 Z" />
      {/* X */}
      <polygon points="580,36 650,36 730,130 810,36 880,36 775,150 880,264 810,264 730,170 650,264 580,264 685,150" />
      {/* U */}
      <path d="M930 36 H1000 V155 C1000 198 1025 228 1060 228 C1095 228 1120 198 1120 155 V36 H1190 V155 C1190 238 1135 284 1060 284 C985 284 930 238 930 155 Z" />
      {/* S */}
      <path d="M40 88 C40 55 68 32 110 32 C148 32 176 50 190 82 L140 108 C134 90 124 80 110 80 C98 80 92 86 92 98 C92 110 100 116 128 126 L154 136 C198 154 224 180 224 220 C224 266 184 294 124 294 C74 294 40 272 24 232 L76 200 C84 222 100 238 124 238 C142 238 154 228 154 210 C154 192 142 182 114 172 L88 162 C46 146 20 124 20 88 Z" transform="translate(1210,0)" />
    </svg>
  );
}
