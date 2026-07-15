"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { work, contact } from "@/lib/content";

/**
 * The lookbook. A horizontal scroll strip with snap points; arrows on
 * desktop, natural swipe on touch. Cards bleed off the right edge to
 * invite the scroll.
 */
export default function Work() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function updateEnds() {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 24);
    setAtEnd(el.scrollLeft > el.scrollWidth - el.clientWidth - 24);
  }

  function nudge(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 520), behavior: "smooth" });
  }

  return (
    <section id="work" className="overflow-hidden border-t border-line bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading kicker={work.label} title={work.title} em={work.titleEm} />
          <Reveal className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => nudge(-1)}
              disabled={atStart}
              aria-label="Previous"
              className="flex h-12 w-12 items-center justify-center border border-line-strong text-ink transition-all duration-300 hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              disabled={atEnd}
              aria-label="Next"
              className="flex h-12 w-12 items-center justify-center border border-line-strong text-ink transition-all duration-300 hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
            >
              &rarr;
            </button>
          </Reveal>
        </div>
        <Reveal className="copy mt-5 max-w-md">{work.intro}</Reveal>
      </div>

      {/* Horizontal strip; padding keeps first card aligned with the grid */}
      <div
        ref={trackRef}
        onScroll={updateEnds}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:px-12"
        style={{
          paddingLeft: "max(1.5rem, calc((100vw - 1440px) / 2 + 3rem))",
        }}
      >
        {work.items.map((item) => (
          <figure
            key={item.src}
            className="group relative w-[72vw] shrink-0 snap-start overflow-hidden bg-paper-2 sm:w-[46vw] md:w-[380px]"
          >
            <div className="relative aspect-[4/5] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={`${item.name} grooming by Shan at Nova Style Lounge Kandy`}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-line" />
            </div>
            <figcaption className="flex items-baseline justify-between py-4">
              <span className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-accent">
                {item.label}
              </span>
              <span className="font-display text-xl italic text-ink">{item.name}</span>
            </figcaption>
          </figure>
        ))}
        {/* trailing spacer so the last card can snap clear of the edge */}
        <span className="w-6 shrink-0 md:w-12" aria-hidden="true" />
      </div>

      <div className="mx-auto mt-8 max-w-[1440px] px-6 md:px-12">
        <a
          href={contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-accent"
        >
          {work.cta}
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  );
}
