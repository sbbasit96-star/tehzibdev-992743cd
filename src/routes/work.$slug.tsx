import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ProjectVisual } from "@/components/site/project-visual";

export const Route = createFileRoute("/work/$slug")({
  head: ({ loaderData }) => {
    const p = loaderData as (typeof PROJECTS)[number] | undefined;
    if (!p) return { meta: [{ title: "Case study — TehzibDev" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.name} — TehzibDev Case Study` },
        { name: "description", content: p.short },
        { property: "og:title", content: `${p.name} — TehzibDev` },
        { property: "og:description", content: p.short },
      ],
    };
  },
  loader: ({ params }) => {
    const p = PROJECTS.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  notFoundComponent: () => (
    <div className="container-editorial pt-48 pb-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-5xl">Case study not found.</h1>
      <Link to="/work" className="mt-8 inline-flex items-center gap-2 text-sm"><ArrowLeft className="h-4 w-4" /> Back to work</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-editorial pt-48 pb-32">
      <p className="eyebrow">Error</p>
      <h1 className="mt-4 text-3xl">{error.message}</h1>
      <button onClick={reset} className="mt-6 rounded-full border border-border px-5 py-2 text-sm">Try again</button>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const p = Route.useLoaderData() as (typeof PROJECTS)[number];
  const idx = PROJECTS.findIndex((x) => x.slug === p.slug);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <>
      <section className="container-editorial pb-16 pt-36 md:pt-44">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All work
        </Link>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow flex items-center gap-3"><span className="gold-rule" /> {p.category} · {p.year}</p>
            <h1 className="mt-6 text-balance-tight text-5xl md:text-7xl lg:text-8xl">{p.name}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{p.short}</p>
          </div>
          <div className="grid gap-6 border-l border-border pl-8 text-sm md:grid-cols-2 lg:grid-cols-1 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-8">
            <div><p className="eyebrow">Role</p><p className="mt-2">Design & Development</p></div>
            <div><p className="eyebrow">Year</p><p className="mt-2">{p.year}</p></div>
            <div><p className="eyebrow">Category</p><p className="mt-2">{p.category}</p></div>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-24">
        <ProjectVisual project={p} className="aspect-[16/9] w-full animate-mask-in" />
      </section>

      <section className="container-editorial grid gap-16 pb-24 lg:grid-cols-[1fr_2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">Overview</p>
        </div>
        <p className="text-xl leading-relaxed">{p.overview}</p>
      </section>

      <CaseBlock label="Challenge" body={p.challenge} />
      <CaseBlock label="Goals">
        <ul className="space-y-3">
          {p.goals.map((g) => (
            <li key={g} className="flex items-start gap-3 text-xl">
              <span className="mt-3 h-1 w-6" style={{ backgroundColor: "var(--gold)" }} />
              {g}
            </li>
          ))}
        </ul>
      </CaseBlock>
      <CaseBlock label="Discovery" body={p.discovery} />
      <CaseBlock label="Design" body={p.design} />
      <CaseBlock label="Development" body={p.development} />

      <section className="container-editorial grid gap-16 pb-24 lg:grid-cols-[1fr_2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start"><p className="eyebrow">Tech Stack</p></div>
        <ul className="flex flex-wrap gap-2">
          {p.tech.map((t) => (<li key={t} className="rounded-full border border-border px-4 py-2 text-sm">{t}</li>))}
        </ul>
      </section>

      <section className="container-editorial grid gap-16 pb-24 lg:grid-cols-[1fr_2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start"><p className="eyebrow">Features</p></div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {p.features.map((f) => (
            <li key={f} className="rounded-sm border border-border bg-secondary p-5 text-sm">{f}</li>
          ))}
        </ul>
      </section>

      <section className="container-editorial grid gap-16 pb-24 lg:grid-cols-[1fr_2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start"><p className="eyebrow">Result</p></div>
        <div>
          {p.results.map((r) => (
            <p key={r} className="text-xl leading-relaxed text-muted-foreground">{r}</p>
          ))}
        </div>
      </section>

      {/* Responsive views placeholder */}
      <section className="container-editorial pb-24">
        <p className="eyebrow">Responsive Views</p>
        <div className="mt-8 grid gap-6 md:grid-cols-[2fr_1fr_1fr]">
          <ProjectVisual project={p} className="aspect-[16/10] w-full" />
          <div className="rounded-sm border border-border bg-secondary p-6 text-xs text-muted-foreground">
            <p className="eyebrow">Tablet</p>
            <div className="mt-4 aspect-[3/4] rounded-sm border border-border" style={{ backgroundColor: "var(--muted)" }} />
          </div>
          <div className="rounded-sm border border-border bg-secondary p-6 text-xs text-muted-foreground">
            <p className="eyebrow">Mobile</p>
            <div className="mt-4 aspect-[9/16] rounded-sm border border-border" style={{ backgroundColor: "var(--muted)" }} />
          </div>
        </div>
      </section>

      <CaseBlock label="Lessons">
        <p className="text-2xl italic text-foreground" style={{ fontFamily: "var(--font-display)" }}>"{p.lessons}"</p>
      </CaseBlock>

      {/* Nav */}
      <section className="border-t border-border">
        <div className="container-editorial grid gap-6 py-16 md:grid-cols-2">
          <Link to="/work/$slug" params={{ slug: prev.slug }} className="group rounded-sm border border-border p-8 transition hover:border-foreground">
            <p className="eyebrow flex items-center gap-2"><ArrowLeft className="h-3 w-3" /> Previous</p>
            <p className="mt-4 font-display text-3xl">{prev.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{prev.category}</p>
          </Link>
          <Link to="/work/$slug" params={{ slug: next.slug }} className="group rounded-sm border border-border p-8 text-right transition hover:border-foreground">
            <p className="eyebrow flex items-center justify-end gap-2">Next <ArrowRight className="h-3 w-3" /></p>
            <p className="mt-4 font-display text-3xl">{next.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{next.category}</p>
          </Link>
        </div>
      </section>

      <section className="container-editorial py-24 text-center">
        <h2 className="text-balance-tight text-4xl md:text-6xl">Have a project like this in mind?</h2>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm text-background">
          Start a Project <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}

function CaseBlock({ label, body, children }: { label: string; body?: string; children?: React.ReactNode }) {
  return (
    <section className="container-editorial grid gap-16 pb-24 lg:grid-cols-[1fr_2fr]">
      <div className="lg:sticky lg:top-32 lg:self-start"><p className="eyebrow">{label}</p></div>
      <div className="text-xl leading-relaxed text-muted-foreground">
        {body ?? children}
      </div>
    </section>
  );
}
