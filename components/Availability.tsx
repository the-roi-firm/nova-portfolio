import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { availability } from "@/lib/content";

export default function Availability() {
  return (
    <section id="availability" className="border-t border-line bg-paper px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          kicker={availability.label}
          title={availability.title}
          em={availability.titleEm}
        />

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-0">
          {availability.cards.map((card, i) => (
            <Reveal
              key={card.tag}
              delay={((i + 1) as 1 | 2)}
              className={`border-t border-line-strong pt-9 md:pr-14 ${
                i === 1 ? "md:border-l md:border-t md:pl-14" : ""
              }`}
            >
              <div className="flex items-baseline justify-between gap-6">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-accent">
                  {card.tag}
                </p>
                <span className="font-display text-xl italic text-mute">
                  {card.slots} slots
                </span>
              </div>
              <h3 className="mt-7 font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.05] text-ink">
                {card.days}
              </h3>
              <p className="mt-3 font-display text-[1.5rem] italic text-accent">
                {card.time}
              </p>
              <p className="copy mt-6 max-w-md">{card.location}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 max-w-3xl">
          <p className="border-l-2 border-accent pl-8 font-display text-[1.5rem] italic leading-relaxed text-ink">
            {availability.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
