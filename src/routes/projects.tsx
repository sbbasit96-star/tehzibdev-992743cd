import { createFileRoute, Link } from "@tanstack/react-router";
import { ProjectVisual } from "@/components/site/project-visual";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — TehzibDev" },
      { name: "description", content: "An index of every project — a chronological, no-frills list of what I've built." },
      { property: "og:title", content: "Projects Index — TehzibDev" },
      { property: "og:description", content: "Chronological index of every shipped and concept project." },
      { property: "og:url", content: "https://tehzibdev.lovable.app/projects" },
    ],
    links: [{ rel: "canonical", href: "https://tehzibdev.lovable.app/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <section className="container-editorial pb-16 pt-40 md:pt-48">
        <p className="eyebrow flex items-center gap-3"><span className="gold-rule" /> Projects Index</p>
        <h1 className="mt-8 max-w-4xl text-balance-tight text-5xl md:text-7xl">
          Everything, in order.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          A chronological list of shipped and concept work. For a curated selection, see <Link to="/work" className="underline decoration-[color:var(--gold)] underline-offset-4">Work</Link>.
        </p>
      </section>

      <section className="container-editorial pb-32">
        <ul className="divide-y divide-border border-y border-border">
          {PROJECTS.map((p) => (
            <li key={p.slug}>
              <Link to="/work/$slug" params={{ slug: p.slug }} className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-6 md:grid-cols-[80px_2fr_1fr_1fr_auto] md:gap-8 md:py-8">
                <span className="hidden font-mono text-xs text-muted-foreground md:block">{p.year}</span>
                <div className="min-w-0">
                  <p className="font-display text-2xl md:text-4xl">{p.name}</p>
                  <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{p.short}</p>
                </div>
                <p className="hidden text-sm text-muted-foreground md:block">{p.category}</p>
                <div className="hidden md:block">
                  <ProjectVisual project={p} className="aspect-[16/10] w-40 opacity-0 transition group-hover:opacity-100" />
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
