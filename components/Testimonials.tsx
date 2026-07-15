import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          kicker={testimonials.label}
          title={testimonials.title}
          em={testimonials.titleEm}
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-line md:grid-cols-2">
          {testimonials.items.map((q, i) => (
            <Reveal
              key={i}
              delay={((Math.min(i + 1, 4)) as 1 | 2 | 3 | 4)}
              className="relative bg-card p-11 md:p-14"
            >
              <span className="absolute left-9 top-4 font-display text-[7rem] leading-none text-gold/8">
                &ldquo;
              </span>
              <p className="relative mb-7 font-display text-[1.5rem] font-light italic leading-[1.5] text-cream">
                {q.text}
              </p>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
                {q.attr} <span className="text-gold">· {q.via}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
