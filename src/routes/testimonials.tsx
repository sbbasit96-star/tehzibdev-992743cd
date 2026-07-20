import { createFileRoute } from "@tanstack/react-router";
import { AmbientField } from "@/components/site/ambient-field";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — TehzibDev" },
      { name: "description", content: "Words from the people I've worked with. Real quotes only — placeholders until projects go live." },
      { property: "og:title", content: "Testimonials — TehzibDev" },
      { property: "og:description", content: "Honest testimonial page — no fabricated praise." },
    ],
  }),
  component: Testimonials,
});

// Reserved slots — real content will be added as projects go live.
const SLOTS = Array.from({ length: 6 });

function Testimonials() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientField />
        <div className="container-editorial relative pb-16 pt-40 md:pt-48">
          <p className="eyebrow flex items-center gap-3"><span className="gold-rule" /> Testimonials</p>
          <h1 className="mt-8 max-w-4xl text-balance-tight text-5xl md:text-7xl lg:text-8xl">
            No fabricated praise.<br />
            <span className="italic" style={{ color: "var(--gold)" }}>Only real words</span>, once they're earned.
          </h1>
          <p className="mt-8 max-w-2xl text-muted-foreground">
            This page will fill up as projects ship. Until then, the slots below stay honest — reserved for verified
            client quotes with real names, real roles, and real context.
          </p>
        </div>
      </section>

      <section className="container-editorial pb-32">
        <div className="grid gap-6 md:grid-cols-2">
          {SLOTS.map((_, i) => (
            <figure key={i} className="relative overflow-hidden rounded-sm border border-dashed border-border bg-secondary/50 p-10">
              <span className="font-display text-5xl leading-none text-[color:var(--gold-muted)]">"</span>
              <blockquote className="mt-4 font-display text-xl leading-snug text-muted-foreground">
                Reserved for a genuine client quote. Once this project publishes with the client's approval, their words
                will replace this placeholder.
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 text-sm">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-xs text-muted-foreground">—</span>
                <div>
                  <p className="text-foreground">Client name pending</p>
                  <p className="text-muted-foreground">Role & company · {String(i + 1).padStart(2, "0")}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
