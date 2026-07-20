export function AmbientField({ variant = "light" }: { variant?: "light" | "dark" }) {
  const gold = "var(--gold)";
  const base = variant === "dark" ? "var(--ink)" : "var(--bone)";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" style={{ backgroundColor: base }}>
      <div
        className="ambient-orb animate-drift"
        style={{ width: 520, height: 520, top: -160, left: -120, background: `radial-gradient(circle, ${gold} 0%, transparent 65%)`, opacity: 0.18 }}
      />
      <div
        className="ambient-orb animate-drift"
        style={{ width: 640, height: 640, bottom: -220, right: -180, background: `radial-gradient(circle, ${gold} 0%, transparent 60%)`, opacity: 0.12, animationDelay: "-6s" }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
