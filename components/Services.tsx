import Reveal from "./Reveal";
import { services } from "@/lib/content";

/**
 * The experiences index. An editorial list where each row grows and
 * shifts on hover, with the row number flipping to the accent.
 */
export default function Services() {
  return (
    <section id="services" className="border-t border-line bg-paper-2 px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-[320px_1fr] md:gap-28">
        {/* Sticky intro */}
        <div className="md:sticky md:top-32 md:self-start">
          <Reveal>
            <span className="kicker">{services.label}</span>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.02] text-ink">
              {services.title} <em className="italic text-accent">{services.titleEm}</em>
            </h2>
            <p className="mt-6 max-w-sm text-[0.9rem] leading-8 text-mute">
              {services.intro}
            </p>
            <a
              href="#booking"
              className="mt-9 inline-block bg-ink px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-accent"
            >
              {services.cta}
            </a>
          </Reveal>
        </div>

        {/* Index list */}
        <div>
          {services.items.map((s) => (
            <Reveal
              key={s.name}
              className="group grid cursor-default grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-line py-10 transition-all duration-500 first:pt-0 hover:border-line-strong md:grid-cols-[4.5rem_1fr] md:gap-8"
            >
              <span className="font-display text-lg text-mute/60 transition-colors duration-300 group-hover:text-accent md:text-xl">
                {s.no}
              </span>
              <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:translate-x-3">
                <h3 className="font-display text-[clamp(1.8rem,3.4vw,2.7rem)] leading-tight text-ink transition-colors duration-300 group-hover:text-accent">
                  {s.name}
                </h3>
                <p className="mt-2 text-[0.8rem] italic tracking-wide text-accent/80">
                  {s.tagline}
                </p>
                <p className="mt-3 max-w-xl text-[0.88rem] leading-8 text-mute">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
