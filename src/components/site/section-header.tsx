import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="eyebrow flex items-center gap-3">
          <span className="gold-rule" /> {eyebrow}
        </p>
      )}
      <Tag className="mt-5 text-balance-tight text-4xl md:text-5xl lg:text-6xl">
        {title}
      </Tag>
      {intro && <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>}
    </div>
  );
}
