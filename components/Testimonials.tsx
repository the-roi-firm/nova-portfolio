import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/content";

/** Staggered editorial quotes: two columns, the right column offset down. */
export default function Testimonials() {
  return (
    <section className="border-t border-line bg-paper-2 px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          kicker={testimonials.label}
          title={testimonials.title}
          em={testimonials.titleEm}
        />

        <div className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {testimonials.items.map((q, i) => (
            <Reveal
              key={i}
              delay={((Math.min(i + 1, 4)) as 1 | 2 | 3 | 4)}
              className={`border-t border-line-strong pt-8 ${
                i % 2 === 1 ? "md:translate-y-14" : ""
              }`}
            >
              <span className="font-display text-[3.4rem] leading-none text-accent/30">
                &ldquo;
              </span>
              <p className="mt-2 font-display text-[clamp(1.4rem,2.2vw,1.8rem)] font-light italic leading-[1.5] text-ink">
                {q.text}
              </p>
              <p className="mt-6 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-mute">
                {q.attr} <span className="text-accent">· {q.via}</span>
              </p>
            </Reveal>
          ))}
        </div>
        {/* spacer to absorb the offset column on desktop */}
        <div className="hidden md:block md:h-14" />
      </div>
    </section>
  );
}
