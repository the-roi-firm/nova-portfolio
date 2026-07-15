import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { pillars } from "@/lib/content";

export default function Pillars() {
  return (
    <section className="border-t border-line bg-paper px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading kicker={pillars.label} title={pillars.title} em={pillars.titleEm} />

        <div className="mt-20 grid gap-14 md:grid-cols-3 md:gap-10">
          {pillars.items.map((p, i) => (
            <Reveal
              key={p.num}
              delay={((i + 1) as 1 | 2 | 3)}
              className="group border-t border-line-strong pt-8"
            >
              <span className="font-display text-[4.5rem] font-light leading-none text-accent/25 transition-colors duration-500 group-hover:text-accent">
                {p.num}
              </span>
              <h3 className="mb-4 mt-6 font-display text-[1.7rem] leading-tight text-ink">
                {p.title}
              </h3>
              <p className="max-w-sm text-[0.9rem] leading-8 text-mute">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
