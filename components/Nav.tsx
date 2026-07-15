"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/content";

/**
 * Theme-aware navigation. Transparent over the dark hero; once the page
 * scrolls into the light editorial body it inverts to a paper bar with
 * ink text. The mobile menu is a full-screen night overlay.
 */
export default function Nav() {
  const [onLight, setOnLight] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const threshold = () => (hero ? hero.offsetHeight - 90 : 480);
    const onScroll = () => setOnLight(window.scrollY > threshold());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkTone = onLight
    ? "text-ink-soft hover:text-ink"
    : "text-cream/70 hover:text-cream";
  const ruleTone = onLight ? "bg-accent" : "bg-gold";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        onLight
          ? "border-b border-line bg-paper/90 py-3.5 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-12"
        aria-label="Main"
      >
        <a href="#top" aria-label="Nova Style Lounge, home" className="relative z-10">
          <Logo
            height={onLight ? 36 : 44}
            tone={open ? "dark" : onLight ? "light" : "dark"}
            className="transition-all duration-500"
          />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${linkTone}`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${ruleTone}`}
              />
            </a>
          ))}
          <a
            href="#booking"
            className={`px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
              onLight
                ? "bg-ink text-paper hover:bg-accent"
                : "bg-cream text-night hover:bg-gold"
            }`}
          >
            Request
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-px w-6 transition-all duration-300 ${
                open
                  ? `bg-cream ${i === 0 ? "translate-y-[7px] rotate-45" : ""} ${
                      i === 1 ? "opacity-0" : ""
                    } ${i === 2 ? "-translate-y-[7px] -rotate-45" : ""}`
                  : onLight
                    ? "bg-ink"
                    : "bg-cream"
              }`}
            />
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-0 flex flex-col items-center justify-center gap-7 bg-night transition-all duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {nav.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="font-display text-4xl text-cream transition-all duration-500"
            style={{
              transform: open ? "translateY(0)" : "translateY(24px)",
              opacity: open ? 1 : 0,
              transitionDelay: `${i * 60}ms`,
            }}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#booking"
          onClick={() => setOpen(false)}
          className="mt-5 bg-cream px-9 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-night"
          style={{
            transform: open ? "translateY(0)" : "translateY(24px)",
            opacity: open ? 1 : 0,
            transitionDelay: `${nav.length * 60}ms`,
            transitionDuration: "500ms",
          }}
        >
          Request an appointment
        </a>
      </div>
    </header>
  );
}
