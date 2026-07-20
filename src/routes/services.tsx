import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/section-header";
import { AmbientField } from "@/components/site/ambient-field";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — TehzibDev" },
      { name: "description", content: "Business websites, portfolios, landing pages, e-commerce, redesigns, and performance work — built to grow your business." },
      { property: "og:title", content: "Services — TehzibDev" },
      { property: "og:description", content: "Websites and web experiences built for conversion, credibility, and speed." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  { t: "Business Websites", d: "For established local businesses and independent operators who want to look as credible online as they are in person. Clear message, honest photography, structured content, and a site your team can actually update.", deliverables: ["Sitemap & strategy", "Design system", "Editable content model", "SEO foundations"] },
  { t: "Portfolio Websites", d: "For photographers, designers, architects, consultants, writers — anyone whose work should be the loudest thing on the page. Editorial layouts, thoughtful typography, fast media.", deliverables: ["Project templates", "Reel & gallery treatments", "Inquiry flow", "Case study system"] },
  { t: "Landing Pages", d: "One page, one message, one job — convert visitors into leads or customers. Ideal for launches, campaigns, and paid traffic where every scroll matters.", deliverables: ["Message architecture", "A/B ready structure", "Sticky mobile CTA", "Analytics wiring"] },
  { t: "E-commerce Websites", d: "Storefronts that treat products like objects worth caring about. Considered PDPs, honest photography, and a checkout that gets out of the way.", deliverables: ["Product templates", "Cart & checkout", "Collections & drops", "Payments & shipping"] },
  { t: "Website Redesign", d: "For sites that stopped reflecting the business three years ago. We keep what works, replace what doesn't, and move you to a stack that won't feel dated next year.", deliverables: ["Audit & inventory", "Content migration", "Redesign & rebuild", "Redirect map & handover"] },
  { t: "Responsive Development", d: "Every breakpoint designed on purpose — not just scaled down from desktop. Mobile-first when it matters, desktop-first when it doesn't, both when it should.", deliverables: ["Design for 3+ breakpoints", "Touch-first interactions", "Type & spacing scales", "Cross-device QA"] },
  { t: "Performance Optimization", d: "Fast under real conditions — real phones, real networks. Everything that ships is measured, and nothing ships that regresses core metrics.", deliverables: ["Lighthouse & CWV audit", "Image & font strategy", "Bundle & route tuning", "Ongoing monitoring"] },
  { t: "SEO-Friendly Development", d: "Structured, semantic, discoverable from day one. Not a plugin bolted on later — the foundation the site is built on.", deliverables: ["Semantic HTML", "Metadata & schema", "Sitemaps & robots", "Analytics setup"] },
];

function Services() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientField />
        <div className="container-editorial relative pb-16 pt-40 md:pt-48">
          <p className="eyebrow flex items-center gap-3"><span className="gold-rule" /> Services</p>
          <h1 className="mt-8 max-w-5xl text-balance-tight text-5xl md:text-7xl lg:text-8xl">
            Everything you need<br />
            to look <span className="italic" style={{ color: "var(--gold)" }}>credible</span>,<br />
            move fast, and grow.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
            Every engagement is scoped, priced, and delivered by the same person who designs and builds it — no
            handoffs, no diluted vision.
          </p>
        </div>
      </section>

      <section className="container-editorial pb-32">
        <div className="grid gap-px overflow-hidden border border-border" style={{ backgroundColor: "var(--border)" }}>
          {SERVICES.map((s, i) => (
            <article key={s.t} className="group grid gap-8 bg-background p-8 transition hover:bg-secondary md:grid-cols-[auto_1fr_1.2fr] md:gap-16 md:p-12">
              <p className="font-display text-4xl text-[color:var(--gold-muted)] transition group-hover:text-[color:var(--gold)] md:text-6xl">{String(i + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="text-3xl md:text-4xl">{s.t}</h2>
                <p className="mt-5 max-w-md text-muted-foreground">{s.d}</p>
              </div>
              <div>
                <p className="eyebrow">What's included</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <span className="mt-2 h-1 w-1 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-border pt-16 md:flex-row md:items-end">
          <SectionHeader eyebrow="Next step" title={<>Not sure which service fits? Let's talk about the outcome.</>} />
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm text-background">
            Start a Project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
