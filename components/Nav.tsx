"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-bg/85 py-3.5 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-12"
        aria-label="Main"
      >
        <a href="#top" aria-label="Nova Style Lounge, home" className="relative z-10">
          <Logo height={scrolled ? 38 : 44} className="transition-all duration-500" />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[0.72rem] font-medium uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-cream"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#booking"
            className="border border-line-strong px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:bg-gold/10"
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
          <span
            className={`h-px w-6 bg-cream transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-cream transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-cream transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-0 flex flex-col items-center justify-center gap-8 bg-bg/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {nav.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="font-display text-3xl text-cream transition-transform duration-500"
            style={{
              transform: open ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 60}ms`,
            }}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#booking"
          onClick={() => setOpen(false)}
          className="mt-4 border border-line-strong px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-gold"
        >
          Request an appointment
        </a>
      </div>
    </header>
  );
}
