"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Momentum (delayed) smooth scrolling via Lenis.
 *
 * Intentionally NOT gated behind prefers-reduced-motion: the client asked
 * for the smooth feel to stay on even when Windows is in "best performance"
 * mode (which flips the browser into reduced-motion). We only soften the
 * duration a touch on coarse/touch pointers where native momentum is better.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    const lenis = new Lenis({
      duration: coarse ? 0.9 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Intercept in-page anchor links so they glide, offset for the fixed nav.
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -72, duration: 1.2 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
