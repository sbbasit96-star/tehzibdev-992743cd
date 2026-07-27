import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/section-header";
import { AmbientField } from "@/components/site/ambient-field";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TehzibDev" },
      { name: "description", content: "The person, principles, and process behind TehzibDev — an independent editorial web studio." },
      { property: "og:title", content: "About TehzibDev" },
      { property: "og:description", content: "Independent developer building premium websites for businesses that refuse to blend in." },
      { property: "og:url", content: "https://tehzibdev.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://tehzibdev.lovable.app/about" }],
  }),
  component: About,
});

const PRINCIPLES = [
  { n: "01", t: "Clarity before cleverness", d: "A website that's easy to understand outperforms a website that's clever to look at. Always." },
  { n: "02", t: "Editorial before decorative", d: "Great typography, real hierarchy, generous space. Ornament is optional." },
  { n: "03", t: "Performance is a design choice", d: "Every animation, image, and script earns its weight." },
  { n: "04", t: "Ship things that last", d: "Clean code, honest content models, and a stack you can still work with in year three." },
];

const STACK = ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next / TanStack Start", "Supabase", "Sanity", "Shopify Hydrogen", "Vercel", "Figma"];

function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientField />
        <div className="container-editorial relative pb-20 pt-40 md:pt-48">
          <p className="eyebrow flex items-center gap-3"><span className="gold-rule" /> About</p>
          <h1 className="mt-8 max-w-4xl text-balance-tight text-5xl md:text-7xl lg:text-8xl">
            A studio of one.<br />
            <span className="italic" style={{ color: "var(--gold)" }}>Built on obsession</span> with the details.
          </h1>
        </div>
      </section>

      <section className="container-editorial grid gap-16 pb-24 md:pb-32 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p className="text-foreground">
            Hi — I'm Tehzib. I design and build websites for people who care what their business looks like on the internet.
          </p>
          <p>
            I've spent the last several years in and around web development, moving between design systems, frontend
            engineering, and the tricky bit in the middle where craft meets conversion. TehzibDev is where those
            disciplines meet under one roof.
          </p>
          <p>
            My work is built for local businesses, professionals, and small-to-medium companies that have outgrown a
            template — teams that want a website that reflects the quality of their actual work.
          </p>
          <p>
            No agency layers. No filler features. Just a considered site, built by the person who designed it.
          </p>
          <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm text-background">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <aside className="space-y-8 rounded-sm border border-border bg-secondary p-10">
          <div>
            <p className="eyebrow">Currently</p>
            <p className="mt-3 text-lg">Booking selective projects for the next quarter.</p>
          </div>
          <div>
            <p className="eyebrow">Based</p>
            <p className="mt-3 text-lg">Karachi · working with clients worldwide.</p>
          </div>
          <div>
            <p className="eyebrow">Approach</p>
            <p className="mt-3 text-lg">One project, one point of contact, one obsessed maker.</p>
          </div>
          <div>
            <p className="eyebrow">Toolkit</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {STACK.map((s) => (
                <li key={s} className="rounded-full border border-border px-3 py-1 text-xs">{s}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="border-t border-border py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeader eyebrow="Principles" title={<>What every TehzibDev<br/>site is built on.</>} />
          <div className="mt-16 grid gap-px overflow-hidden border border-border md:grid-cols-2" style={{ backgroundColor: "var(--border)" }}>
            {PRINCIPLES.map((p) => (
              <div key={p.n} className="bg-background p-10">
                <p className="font-display text-5xl text-[color:var(--gold-muted)]">{p.n}</p>
                <h3 className="mt-6 text-2xl">{p.t}</h3>
                <p className="mt-3 text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
