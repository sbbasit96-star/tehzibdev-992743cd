import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled
            ? "border-b border-border/60 bg-background/85 backdrop-blur-md py-3"
            : "bg-transparent py-6",
        ].join(" ")}
      >
        <div className="container-editorial flex items-center justify-between gap-6">
          <Link to="/" className="group flex items-center gap-2" aria-label="TehzibDev home">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-foreground/80 font-display text-sm">T</span>
            <span className="font-display text-lg tracking-tight">
              tehzib<span className="text-[color:var(--gold)]">dev</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.slice(1, -1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="group relative text-sm text-foreground/70 transition hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[color:var(--gold)] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition hover:bg-charcoal md:inline-flex"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={[
          "fixed inset-0 z-50 bg-ink text-bone transition-opacity duration-500 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        style={{ backgroundColor: "var(--ink)", color: "var(--bone)" }}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg">tehzib<span style={{ color: "var(--gold)" }}>dev</span></span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-white/20">
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="mt-16 flex flex-col gap-2">
            {NAV_LINKS.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-white/10 py-5"
              >
                <span className="font-display text-4xl tracking-tight">{l.label}</span>
                <span className="text-xs opacity-40">0{i + 1}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-6 pt-10">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-full px-6 py-4 text-sm font-medium"
              style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
            >
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="flex flex-col gap-1 text-sm opacity-70">
              <a href="mailto:hello@tehzibdev.com">hello@tehzibdev.com</a>
              <div className="flex gap-4 pt-2 text-xs uppercase tracking-widest">
                <a href="#">Twitter</a><a href="#">GitHub</a><a href="#">LinkedIn</a><a href="#">Dribbble</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
