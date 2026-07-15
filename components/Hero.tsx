"use client";

import { useEffect, useRef, useState } from "react";
import { hero } from "@/lib/content";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // trigger the intro on first paint
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (bgRef.current && y < window.innerHeight) {
          // gentle parallax drift + scale
          bgRef.current.style.transform = `scale(1.06) translateY(${y * 0.12}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const lines = [hero.line1, hero.line2, hero.line3];

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-20 pt-32 md:px-12 md:pb-28"
      aria-label="Nova Style Lounge, private grooming in Kandy"
    >
      {/* Photographic background with layered dark grading */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 origin-center bg-cover bg-center will-change-transform"
        style={{ backgroundImage: "url('/images/hero-interior.jpg')" }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 72% 40%, rgba(180,120,45,0.16) 0%, transparent 55%), linear-gradient(180deg, rgba(10,7,4,0.55) 0%, rgba(10,7,4,0.15) 32%, rgba(10,7,4,0.72) 72%, rgba(10,7,4,1) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px]">
        <p
          className="eyebrow mb-7 transition-all duration-1000"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(14px)",
          }}
        >
          {hero.eyebrow}
        </p>

        <h1 className="font-display text-cream">
          {lines.map((line, i) => (
            <span
              key={line}
              className={`line-mask text-[clamp(3.2rem,9vw,7rem)] leading-[0.98] ${
                mounted ? "is-in" : ""
              }`}
            >
              <span
                style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
                className={i === 2 ? "italic text-warm" : ""}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p
          className="mt-8 max-w-md text-[0.98rem] leading-8 text-muted transition-all duration-1000"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(14px)",
            transitionDelay: "0.6s",
          }}
        >
          {hero.sub}
        </p>

        <div
          className="mt-11 flex flex-wrap items-center gap-4 transition-all duration-1000"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(14px)",
            transitionDelay: "0.75s",
          }}
        >
          <a
            href="#booking"
            className="group relative overflow-hidden bg-gold px-9 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-bg transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="relative z-10">{hero.primaryCta}</span>
            <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-gold-soft transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
          </a>
          <a
            href="#shan"
            className="border border-line-strong px-9 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-warm transition-all duration-300 hover:border-gold hover:bg-gold/8"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-8 right-6 hidden flex-col items-center gap-3 md:right-12 md:flex">
        <span
          className="text-[0.6rem] uppercase tracking-[0.3em] text-faint"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <span className="h-14 w-px animate-[scrollcue_2.2s_ease-in-out_infinite] bg-gradient-to-b from-gold to-transparent" />
      </div>

      <style>{`
        @keyframes scrollcue {
          0%, 100% { height: 3.5rem; opacity: 1; }
          50% { height: 1.75rem; opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}
