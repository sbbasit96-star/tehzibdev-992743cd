import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "tehzib_intro_v1";
const PHRASE = "tehzibdev portfolio";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "searching" | "leaving">("typing");
  const timers = useRef<number[]>([]);

  useEffect(() => {
    setMounted(true);
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {}
    setVisible(true);

    if (prefersReducedMotion()) {
      const t = window.setTimeout(() => finish(), 400);
      timers.current.push(t);
      return () => timers.current.forEach(clearTimeout);
    }

    let i = 0;
    const tick = () => {
      i += 1;
      setTyped(PHRASE.slice(0, i));
      if (i < PHRASE.length) {
        timers.current.push(window.setTimeout(tick, 55 + Math.random() * 45));
      } else {
        timers.current.push(window.setTimeout(() => setPhase("searching"), 380));
        timers.current.push(window.setTimeout(() => setPhase("leaving"), 1250));
        timers.current.push(window.setTimeout(finish, 1850));
      }
    };
    timers.current.push(window.setTimeout(tick, 350));
    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = () => {
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Intro"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-700"
      style={{
        backgroundColor: "var(--ink)",
        color: "var(--bone)",
        opacity: phase === "leaving" ? 0 : 1,
        clipPath: phase === "leaving" ? "inset(50% 0 50% 0)" : "inset(0 0 0 0)",
      }}
    >
      <button
        onClick={finish}
        className="absolute right-6 top-6 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-widest opacity-70 transition hover:opacity-100"
      >
        Skip intro
      </button>

      <div className="w-full max-w-xl px-6">
        <p className="mb-6 text-center text-[10px] uppercase tracking-[0.35em] opacity-50">
          tehzibdev · portfolio
        </p>
        <div
          className="flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-5 py-4 shadow-2xl backdrop-blur"
        >
          <div className="grid h-6 w-6 place-items-center rounded-full" style={{ backgroundColor: "var(--gold)" }}>
            <span className="text-[10px] font-bold" style={{ color: "var(--ink)" }}>T</span>
          </div>
          <div className="min-w-0 flex-1 font-mono text-base md:text-lg">
            <span>{typed}</span>
            <span
              aria-hidden
              className="ml-0.5 inline-block h-[1em] w-[2px] align-[-2px]"
              style={{
                backgroundColor: "var(--gold)",
                animation: "caret-blink 0.9s steps(1) infinite",
              }}
            />
          </div>
          <div className="text-xs opacity-50">{phase === "searching" ? "loading…" : ""}</div>
        </div>

        <div className="mt-6 h-px w-full overflow-hidden bg-white/10">
          <div
            className="h-full transition-[width] duration-[1200ms] ease-out"
            style={{
              width: phase === "typing" ? "10%" : phase === "searching" ? "72%" : "100%",
              backgroundColor: "var(--gold)",
            }}
          />
        </div>
        <p className="mt-4 text-center text-xs opacity-40">Preparing the studio…</p>
      </div>
    </div>
  );
}
