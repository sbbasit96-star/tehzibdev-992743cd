import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border bg-[color:var(--ink)] text-[color:var(--bone)]">
      <div className="container-editorial py-20">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="eyebrow" style={{ color: "rgba(245,245,245,0.5)" }}>Studio</p>
            <h2 className="mt-4 text-balance-tight text-4xl md:text-5xl">
              Have a project in mind?
              <br />
              <span style={{ color: "var(--gold)" }}>Let's talk.</span>
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-white"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <FooterCol title="Navigate" links={[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/work", label: "Work" },
          ]} />
          <FooterCol title="Studio" links={[
            { to: "/testimonials", label: "Testimonials" },
            { to: "/contact", label: "Contact" },
            { to: "/privacy", label: "Privacy" },
            { to: "/terms", label: "Terms" },
          ]} />
          <div className="space-y-3 text-sm opacity-80">
            <p className="eyebrow" style={{ color: "rgba(245,245,245,0.5)" }}>Contact</p>
            <a href="mailto:hello@tehzibdev.com" className="block hover:text-white">hello@tehzibdev.com</a>
            <p className="opacity-60">Working remotely worldwide.</p>
            <div className="flex gap-4 pt-3 text-xs uppercase tracking-widest">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">GitHub</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs opacity-60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} TehzibDev. All rights reserved.</p>
          <p>Designed & built with care in Karachi & the cloud.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="eyebrow" style={{ color: "rgba(245,245,245,0.5)" }}>{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="opacity-80 transition hover:opacity-100 hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
