import type { Project } from "@/data/projects";

// Abstract SVG visual per project — no stock imagery.
export function ProjectVisual({ project, className = "" }: { project: Project; className?: string }) {
  const seed = project.slug.length;
  return (
    <div
      className={"relative overflow-hidden rounded-sm " + className}
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      <svg viewBox="0 0 600 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`bg-${project.slug}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="var(--ink)" />
            <stop offset="1" stopColor="var(--charcoal)" />
          </linearGradient>
          <radialGradient id={`glow-${project.slug}`}>
            <stop offset="0" stopColor={project.accent} stopOpacity="0.55" />
            <stop offset="1" stopColor={project.accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="400" fill={`url(#bg-${project.slug})`} />
        <circle cx={120 + seed * 8} cy="180" r="180" fill={`url(#glow-${project.slug})`} />
        {/* Browser chrome */}
        <g transform="translate(60,70)">
          <rect width="480" height="270" rx="10" fill="rgba(245,245,245,0.04)" stroke="rgba(245,245,245,0.15)" />
          <circle cx="18" cy="18" r="4" fill="rgba(245,245,245,0.25)" />
          <circle cx="34" cy="18" r="4" fill="rgba(245,245,245,0.18)" />
          <circle cx="50" cy="18" r="4" fill="rgba(245,245,245,0.18)" />
          <rect x="70" y="10" width="180" height="16" rx="8" fill="rgba(245,245,245,0.06)" />
          {/* layout blocks */}
          <rect x="24" y="60" width="200" height="10" rx="2" fill="rgba(245,245,245,0.6)" />
          <rect x="24" y="80" width="140" height="6" rx="2" fill="rgba(245,245,245,0.25)" />
          <rect x="24" y="120" width="90" height="90" rx="4" fill={project.accent} opacity="0.85" />
          <rect x="124" y="120" width="150" height="42" rx="4" fill="rgba(245,245,245,0.12)" />
          <rect x="124" y="168" width="150" height="42" rx="4" fill="rgba(245,245,245,0.08)" />
          <rect x="284" y="120" width="170" height="90" rx="4" fill="rgba(245,245,245,0.06)" />
          <rect x="24" y="230" width="430" height="6" rx="2" fill="rgba(245,245,245,0.12)" />
          <rect x="24" y="244" width="330" height="6" rx="2" fill="rgba(245,245,245,0.09)" />
        </g>
        <text x="60" y="378" fontFamily="Inter" fontSize="10" letterSpacing="4" fill="rgba(245,245,245,0.4)">
          {project.category.toUpperCase()} · {project.year}
        </text>
      </svg>
    </div>
  );
}
