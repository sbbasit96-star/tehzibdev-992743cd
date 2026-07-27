import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { AmbientField } from "@/components/site/ambient-field";
import { ProjectVisual } from "@/components/site/project-visual";
import { PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TehzibDev — Websites impossible to ignore" },
      { name: "description", content: "Independent web studio building premium, editorial websites for local businesses, professionals, and ambitious startups." },
      { property: "og:title", content: "TehzibDev — Websites impossible to ignore" },
      { property: "og:description", content: "Editorial, conversion-first websites built by an independent studio." },
      { property: "og:url", content: "https://tehzibdev.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://tehzibdev.lovable.app/" }],
  }),
  component: Home,
});

const CAPABILITIES = [
  "Editorial Design",
  "Conversion Strategy",
  "Performance Engineering",
  "SEO Foundations",
  "Motion & Interaction",
  "Accessibility",
];

const PROCESS = [
  { n: "01", t: "Discover", d: "We dig into your business, your customers, and the outcome you actually need — not the deliverable you think you want." },
  { n: "02", t: "Plan", d: "A clear scope, sitemap, and content model. Nothing vague, nothing to interpret later." },
  { n: "03", t: "Design", d: "An editorial-quality visual system built to fit your brand, not a template's." },
  { n: "04", t: "Develop", d: "Fast, accessible, and built to last. Modern stack, clean code, honest performance." },
  { n: "05", t: "Launch", d: "A calm rollout, a proper handover, and support so nothing breaks the week after." },
];

const TESTIMONIALS = [
  { quote: "Placeholder space reserved for a genuine client quote. Real testimonials will appear as projects go live.", name: "Verified client name", role: "Founder, upcoming brand" },
  { quote: "This section is intentionally honest — we don't ship fabricated praise. New quotes drop in as projects ship.", name: "Verified client name", role: "Director, professional services" },
];

function Home() {
  const featured = PROJECTS.slice(0, 4);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <AmbientField />
        <div className="container-editorial relative pb-24 pt-40 md:pt-48 lg:pb-32">
          <p className="eyebrow flex items-center gap-3 animate-reveal-up">
            <span className="gold-rule" /> Independent Web Studio · Est. 2024
          </p>
          <h1 className="mt-8 text-balance-tight text-5xl md:text-7xl lg:text-[7.5rem] animate-reveal-up" style={{ animationDelay: "0.1s" }}>
            Websites that make
            <br />
            <span className="italic" style={{ fontFamily: "var(--font-display)" }}>businesses</span>{" "}
            <span style={{ color: "var(--gold)" }}>impossible</span>
            <br />
            to ignore.
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground animate-reveal-up" style={{ animationDelay: "0.2s" }}>
              I'm <span className="text-foreground">Tehzib</span> — an independent developer building editorial,
              performance-first websites for local businesses, professionals, startups, and small-to-medium teams
              who are done blending in.
            </p>
            <div className="flex flex-wrap gap-3 animate-reveal-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition hover:bg-charcoal">
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-sm transition hover:border-foreground">
                Explore My Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Meta strip */}
          <div className="mt-24 grid gap-6 border-t border-border pt-8 text-sm text-muted-foreground md:grid-cols-4">
            <div><span className="text-foreground">Available</span> · Booking projects for Q3 2026</div>
            <div><span className="text-foreground">Based</span> · Karachi, working worldwide</div>
            <div><span className="text-foreground">Focus</span> · Editorial · Conversion · Performance</div>
            <div><span className="text-foreground">Response</span> · Within 24 hours</div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES MARQUEE */}
      <section className="border-y border-border py-6">
        <div className="container-editorial flex flex-wrap items-center gap-x-10 gap-y-3">
          <span className="eyebrow">Capabilities</span>
          {CAPABILITIES.map((c) => (
            <span key={c} className="font-display text-lg md:text-2xl">
              {c}
              <span className="ml-10 text-[color:var(--gold)]">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-editorial py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeader eyebrow="About" title={<>A studio of one, obsessed with the details.</>} />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              TehzibDev is an independent practice. That means no account managers, no handoffs, no diluted
              vision — you work directly with the person designing and building your site.
            </p>
            <p className="text-foreground">
              I care about typography the way other developers care about frameworks. I care about your
              conversion rate the way other designers care about awards. Both matter. Neither works without
              the other.
            </p>
            <p>
              Every site I ship is built on the same foundation: a clear message, an honest visual system,
              and code that stays fast in year three.
            </p>
            <Link to="/about" className="group inline-flex items-center gap-2 pt-4 text-sm text-foreground">
              <span className="border-b border-foreground pb-1">Read the full story</span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="border-t border-border bg-[color:var(--ink)] py-24 text-[color:var(--bone)] md:py-32">
        <div className="container-editorial">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeader
              eyebrow="Services"
              title={<>Built for the way<br/>modern businesses grow.</>}
            />
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm transition hover:border-white">
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/10 md:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
            {[
              { t: "Business Websites", d: "Credibility-first sites for local & established businesses." },
              { t: "Portfolio Websites", d: "For professionals whose work should speak louder." },
              { t: "Landing Pages", d: "Single-page campaigns engineered to convert." },
              { t: "E-commerce", d: "Considered storefronts for brands with intent." },
              { t: "Website Redesign", d: "For sites that stopped reflecting the business years ago." },
              { t: "Responsive Development", d: "Every breakpoint designed, not just resized." },
              { t: "Performance", d: "Sub-second loads. Real users on real networks." },
              { t: "SEO-Ready Builds", d: "Structured, semantic, discoverable from day one." },
            ].map((s, i) => (
              <div key={s.t} className="group relative bg-[color:var(--ink)] p-8 transition hover:bg-[color:var(--charcoal)]">
                <span className="eyebrow" style={{ color: "rgba(245,245,245,0.4)" }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{s.d}</p>
                <span className="mt-6 inline-block h-px w-0 bg-[color:var(--gold)] transition-all duration-500 group-hover:w-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="container-editorial py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader eyebrow="Selected Work" title={<>Recent builds &<br/>concept projects.</>} intro="A short selection of live and demonstration projects. Full case studies are available for each." />
          <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition hover:border-foreground">
            View all work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-6">
          {featured.map((p, i) => {
            const span =
              i === 0 ? "md:col-span-4 md:row-span-2" :
              i === 1 ? "md:col-span-2" :
              i === 2 ? "md:col-span-2" :
              "md:col-span-3";
            const aspect = i === 0 ? "aspect-[16/11]" : i === 3 ? "aspect-[16/10]" : "aspect-[4/3]";
            return (
              <Link
                key={p.slug}
                to="/work/$slug"
                params={{ slug: p.slug }}
                className={`group relative block ${span}`}
              >
                <ProjectVisual project={p} className={`${aspect} w-full transition duration-700 group-hover:scale-[1.01]`} />
                <div className="mt-4 flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow">{p.category} · {p.year}</p>
                    <h3 className="mt-2 text-2xl">{p.name}</h3>
                    <p className="mt-1 max-w-md text-sm text-muted-foreground">{p.short}</p>
                  </div>
                  <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeader eyebrow="Process" title={<>Five steps.<br/>No mystery.</>} intro="Every engagement follows the same rhythm — so you always know where we are and what's next." />
          <div className="mt-16 grid gap-px overflow-hidden border border-border md:grid-cols-5" style={{ backgroundColor: "var(--border)" }}>
            {PROCESS.map((step) => (
              <div key={step.n} className="group relative bg-background p-8 transition hover:bg-secondary">
                <p className="font-display text-5xl text-[color:var(--gold-muted)] transition group-hover:text-[color:var(--gold)]">{step.n}</p>
                <h3 className="mt-6 text-xl">{step.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border bg-secondary py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeader eyebrow="Words" title={<>Testimonial placeholders,<br/>honest by design.</>} intro="These slots are reserved for verified client quotes. As projects go live, real words will replace these — no fabricated praise." />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="rounded-sm border border-border bg-background p-10">
                <span className="font-display text-5xl leading-none text-[color:var(--gold)]">"</span>
                <blockquote className="mt-4 font-display text-2xl leading-snug">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-4 text-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-xs text-muted-foreground">TBD</span>
                  <div>
                    <p className="text-foreground">{t.name}</p>
                    <p className="text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/testimonials" className="text-sm text-foreground"><span className="border-b border-foreground pb-1">Read the testimonials page</span></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-editorial py-32 md:py-40">
        <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="text-balance-tight text-5xl md:text-7xl lg:text-8xl">
            Let's build something<br />
            <span className="italic" style={{ color: "var(--gold)" }}>worth clicking on.</span>
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-5 text-base text-background transition hover:bg-charcoal"
          >
            Start a Project
            <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
