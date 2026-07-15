import Reveal from "./Reveal";
import { manifesto } from "@/lib/content";

export default function Manifesto() {
  return (
    <section className="bg-surface px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-[300px_1fr] md:gap-28">
        <Reveal>
          <span className="kicker">{manifesto.label}</span>
          <p className="mt-6 text-sm leading-8 text-muted">{manifesto.aside}</p>
        </Reveal>

        <div>
          {manifesto.lines.map((line, i) => (
            <Reveal
              key={i}
              delay={((i + 1) as 1 | 2 | 3)}
              className="mb-6 font-display text-[clamp(1.5rem,2.6vw,2.3rem)] font-light leading-[1.42] text-cream last:mb-0"
            >
              {line}
            </Reveal>
          ))}
          <Reveal
            delay={4}
            className="mt-8 text-[0.82rem] italic tracking-wide text-muted"
          >
            {manifesto.note}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
