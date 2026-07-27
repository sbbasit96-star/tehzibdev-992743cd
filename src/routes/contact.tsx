import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AmbientField } from "@/components/site/ambient-field";
import { ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TehzibDev" },
      { name: "description", content: "Start a project with TehzibDev. Share your goals, timeline, and budget — get a response within 24 hours." },
      { property: "og:title", content: "Contact TehzibDev" },
      { property: "og:description", content: "Kick off a project or ask a question. Direct email included." },
      { property: "og:url", content: "https://tehzibdev.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://tehzibdev.lovable.app/contact" }],
  }),
  component: Contact,
});

const PROJECT_TYPES = ["Business Website", "Portfolio", "Landing Page", "E-commerce", "Website Redesign", "Other"];
const BUDGETS = ["Under $2k", "$2k–$5k", "$5k–$10k", "$10k–$25k", "$25k+", "Not sure yet"];
const TIMELINES = ["ASAP", "Within 1 month", "1–3 months", "3–6 months", "Flexible"];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) errs.name = "Please add your name.";
    const email = String(data.get("email") ?? "").trim();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errs.email = "Please add a valid email.";
    if (!String(data.get("description") ?? "").trim()) errs.description = "A short description helps a lot.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientField />
        <div className="container-editorial relative pb-16 pt-40 md:pt-48">
          <p className="eyebrow flex items-center gap-3"><span className="gold-rule" /> Contact</p>
          <h1 className="mt-8 max-w-4xl text-balance-tight text-5xl md:text-7xl lg:text-8xl">
            Tell me about<br />
            <span className="italic" style={{ color: "var(--gold)" }}>the project.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Fill in what you know — even rough is fine. I'll reply within 24 hours with next steps, a few questions,
            and whether we're a good fit.
          </p>
        </div>
      </section>

      <section className="container-editorial grid gap-12 pb-32 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-sm border border-border bg-background p-8 md:p-12">
          {submitted ? (
            <SuccessState />
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-8">
              <Row>
                <Field label="Your name" name="name" required error={errors.name} />
                <Field label="Email" name="email" type="email" required error={errors.email} />
              </Row>
              <Row>
                <Field label="Business / Company" name="company" placeholder="Optional" />
                <SelectField label="Project type" name="type" options={PROJECT_TYPES} />
              </Row>
              <Row>
                <SelectField label="Budget range" name="budget" options={BUDGETS} />
                <SelectField label="Timeline" name="timeline" options={TIMELINES} />
              </Row>
              <div>
                <label htmlFor="description" className="eyebrow">Project description</label>
                <textarea
                  id="description"
                  name="description"
                  rows={6}
                  placeholder="What are you building? Who's it for? What does success look like?"
                  className="mt-3 w-full border-b border-border bg-transparent py-3 outline-none focus:border-foreground"
                />
                {errors.description && <p className="mt-2 text-xs text-destructive">{errors.description}</p>}
              </div>
              <div className="flex flex-col-reverse gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
                <p className="text-xs text-muted-foreground">
                  This form runs client-side. Submitting will show a confirmation — for a live inbox, connect an email
                  service later.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition hover:bg-charcoal"
                >
                  Send inquiry <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>

        <aside className="space-y-10">
          <div>
            <p className="eyebrow">Prefer email?</p>
            <a href="mailto:hello@tehzibdev.com" className="mt-3 block font-display text-3xl underline decoration-[color:var(--gold)] underline-offset-8 md:text-4xl">
              hello@tehzibdev.com
            </a>
          </div>
          <div>
            <p className="eyebrow">What happens next</p>
            <ol className="mt-4 space-y-4 text-sm">
              {[
                "You send this form or an email — with as much or as little detail as you have.",
                "I reply within 24 hours with a short set of questions and a call slot if it makes sense.",
                "We do a 30-minute call to align on outcome, scope, and budget.",
                "I send a written proposal — timeline, deliverables, price. No pressure, no follow-up spam.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-xs">{i + 1}</span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow">Elsewhere</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {["Twitter", "GitHub", "LinkedIn", "Dribbble"].map((s) => (
                <a key={s} href="#" className="rounded-full border border-border px-4 py-2 transition hover:border-foreground">{s}</a>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function SuccessState() {
  return (
    <div className="flex min-h-[420px] flex-col items-start justify-center">
      <span className="grid h-14 w-14 place-items-center rounded-full" style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}>
        <Check className="h-6 w-6" />
      </span>
      <h2 className="mt-8 text-4xl md:text-5xl">Message queued.</h2>
      <p className="mt-4 max-w-md text-muted-foreground">
        To be honest — this form is a frontend-only demo, so nothing was actually sent. For a real inbox, wire it up to
        an email service or use the direct email link. Meanwhile, I'll pretend I got it. 🙂
      </p>
      <a href="mailto:hello@tehzibdev.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background">
        Email me directly instead <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-8 md:grid-cols-2">{children}</div>;
}

function Field({ label, name, type = "text", required, placeholder, error }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow">{label}{required && <span style={{ color: "var(--gold)" }}> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent py-3 outline-none placeholder:text-muted-foreground/60 focus:border-foreground"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow">{label}</label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-3 w-full appearance-none border-b border-border bg-transparent py-3 outline-none focus:border-foreground"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
