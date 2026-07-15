"use client";

import { useEffect, useRef, useState } from "react";
import { hero } from "@/lib/content";

const ticker = [
  "By appointment only",
  "Kandy, Sri Lanka",
  "Handled personally by Shan",
  "Limited sessions weekly",
  "At the lounge or your hotel",
];

function TickerRun() {
  return (
    <span className="flex shrink-0 items-center">
      {ticker.map((t) => (
        <span key={t} className="flex items-center">
          <span className="px-7 text-[0.8rem] uppercase tracking-[0.28em] text-cream/75">
            {t}
          </span>
          <span className="h-1 w-1 rotate-45 bg-gold/60" aria-hidden="true" />
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-night"
      aria-label="Nova Style Lounge, private grooming in Kandy"
    >
      {/* Photographic background with layered grading */}
      <div
        ref={bgRef}
        className="absolute inset-0 origin-center bg-cover bg-center will-change-transform"
        style={{ backgroundImage: "url('/images/hero-interior.jpg')" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 72% 40%, rgba(180,120,45,0.15) 0%, transparent 55%), linear-gradient(180deg, rgba(16,13,9,0.6) 0%, rgba(16,13,9,0.15) 32%, rgba(16,13,9,0.75) 74%, rgba(16,13,9,0.97) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-12 md:pb-20">
        <p
          className="mb-7 text-[0.82rem] font-semibold uppercase tracking-[0.28em] text-gold transition-all duration-1000"
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
              className={`line-mask text-[clamp(3.4rem,10vw,8rem)] leading-[0.96] ${
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

        <div className="mt-10 flex flex-col gap-9 md:flex-row md:items-end md:justify-between">
          <p
            className="max-w-lg text-[1.15rem] leading-[1.75] text-cream/85 transition-all duration-1000"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(14px)",
              transitionDelay: "0.6s",
            }}
          >
            {hero.sub}
          </p>

          <div
            className="flex flex-wrap items-center gap-4 transition-all duration-1000"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(14px)",
              transitionDelay: "0.75s",
            }}
          >
            <a
              href="#booking"
              className="bg-cream px-9 py-4.5 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-night transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#shan"
              className="border border-line-dark-strong px-9 py-4.5 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-warm transition-all duration-300 hover:border-gold hover:bg-gold/10"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      {/* Marquee ticker along the fold */}
      <div className="marquee relative border-t border-line-dark py-4">
        <div className="marquee-track">
          <TickerRun />
          <TickerRun />
        </div>
      </div>
    </section>
  );
}
