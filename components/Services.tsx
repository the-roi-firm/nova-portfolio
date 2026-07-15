import Reveal from "./Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-surface px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-[320px_1fr] md:gap-24">
        {/* Sticky intro */}
        <div className="md:sticky md:top-32 md:self-start">
          <Reveal>
            <span className="kicker">{services.label}</span>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] text-cream">
              {services.title} <em className="italic text-warm">{services.titleEm}</em>
            </h2>
            <p className="mt-6 max-w-sm text-[0.9rem] leading-8 text-muted">
              {services.intro}
            </p>
            <a
              href="#booking"
              className="mt-9 inline-block border border-line-strong px-8 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-warm transition-all duration-300 hover:border-gold hover:bg-gold/8"
            >
              {services.cta}
            </a>
          </Reveal>
        </div>

        {/* Service list */}
        <div>
          {services.items.map((s, i) => (
            <Reveal
              key={s.name}
              className="group grid grid-cols-[auto_1fr] gap-6 border-b border-line py-9 first:pt-0 md:gap-10"
            >
              <span className="font-display text-lg text-gold/40 transition-colors duration-300 group-hover:text-gold">
                {s.no}
              </span>
              <div>
                <p className="mb-2.5 text-[0.8rem] italic tracking-wide text-gold">
                  {s.tagline}
                </p>
                <h3 className="mb-3 font-display text-[1.7rem] leading-tight text-cream transition-colors duration-300 group-hover:text-warm">
                  {s.name}
                </h3>
                <p className="max-w-xl text-[0.88rem] leading-8 text-muted">
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
