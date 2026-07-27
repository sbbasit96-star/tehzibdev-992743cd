import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AmbientField } from "@/components/site/ambient-field";
import { ProjectVisual } from "@/components/site/project-visual";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — TehzibDev" },
      { name: "description", content: "Selected projects and case studies — a mix of live builds and demonstration work across business, professional, e-commerce, and landing pages." },
      { property: "og:title", content: "Work — TehzibDev" },
      { property: "og:description", content: "Editorial case studies across business, portfolio, landing, and e-commerce projects." },
      { property: "og:url", content: "https://tehzibdev.lovable.app/work" },
    ],
    links: [{ rel: "canonical", href: "https://tehzibdev.lovable.app/work" }],
  }),
  component: Work,
});

function Work() {
  const [filter, setFilter] = useState<typeof PROJECT_CATEGORIES[number]>("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientField />
        <div className="container-editorial relative pb-16 pt-40 md:pt-48">
          <p className="eyebrow flex items-center gap-3"><span className="gold-rule" /> Selected Work</p>
          <h1 className="mt-8 max-w-5xl text-balance-tight text-5xl md:text-7xl lg:text-8xl">
            A working portfolio.<br />
            <span className="italic" style={{ color: "var(--gold)" }}>Live builds</span> & concept projects.
          </h1>
          <p className="mt-8 max-w-2xl text-muted-foreground">
            Every project below is either a shipped build or a labelled concept study. Nothing here pretends to be a
            real client engagement it isn't.
          </p>
        </div>
      </section>

      <section className="container-editorial pb-32">
        <div className="sticky top-20 z-20 -mx-4 mb-10 flex gap-2 overflow-x-auto border-b border-border bg-background/85 px-4 py-4 backdrop-blur md:mx-0 md:px-0">
          {PROJECT_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={[
                "whitespace-nowrap rounded-full border px-4 py-2 text-sm transition",
                filter === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
              ].join(" ")}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-12">
          {filtered.map((p, i) => {
            const layouts = [
              "md:col-span-8 md:mt-0",
              "md:col-span-4 md:mt-24",
              "md:col-span-5",
              "md:col-span-7 md:mt-24",
              "md:col-span-6",
              "md:col-span-6 md:mt-16",
            ];
            const aspect = i % 3 === 0 ? "aspect-[16/11]" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]";
            return (
              <Link
                key={p.slug}
                to="/work/$slug"
                params={{ slug: p.slug }}
                className={`group block ${layouts[i % layouts.length]}`}
              >
                <ProjectVisual project={p} className={`${aspect} w-full transition duration-700 group-hover:scale-[1.01]`} />
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow">{p.category} · {p.year}</p>
                    <h2 className="mt-2 text-2xl md:text-3xl">{p.name}</h2>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">{p.short}</p>
                  </div>
                  <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
