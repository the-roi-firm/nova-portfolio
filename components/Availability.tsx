import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { availability } from "@/lib/content";

export default function Availability() {
  return (
    <section id="availability" className="bg-surface px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          kicker={availability.label}
          title={availability.title}
          em={availability.titleEm}
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-line md:grid-cols-2">
          {availability.cards.map((card, i) => (
            <Reveal
              key={card.tag}
              delay={((i + 1) as 1 | 2)}
              className="relative overflow-hidden bg-card p-11 md:p-14"
            >
              <span className="absolute right-9 top-8 font-display text-[3.4rem] font-light leading-none text-gold/10">
                {card.slots}
              </span>
              <p className="mb-6 text-[0.66rem] font-medium uppercase tracking-[0.3em] text-gold">
                {card.tag}
              </p>
              <h3 className="mb-4 font-display text-[2.4rem] leading-tight text-cream">
                {card.days}
              </h3>
              <p className="mb-6 font-display text-xl italic text-warm">{card.time}</p>
              <p className="max-w-sm text-[0.85rem] leading-8 text-muted">
                {card.location}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 border-l-2 border-gold bg-gold/6 px-10 py-9 font-display text-[1.2rem] italic leading-relaxed text-warm">
          {availability.note}
        </Reveal>
      </div>
    </section>
  );
}
