import Reveal from "./Reveal";
import { manifesto } from "@/lib/content";

export default function Manifesto() {
  return (
    <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-[300px_1fr] md:gap-32">
        <Reveal>
          <span className="kicker">{manifesto.label}</span>
          <p className="copy mt-7">{manifesto.aside}</p>
        </Reveal>

        <div>
          {manifesto.lines.map((line, i) => (
            <Reveal
              key={i}
              delay={((i + 1) as 1 | 2 | 3)}
              className="mb-7 font-display text-[clamp(1.7rem,3.2vw,2.8rem)] font-light leading-[1.35] text-ink last:mb-0"
            >
              {line}
            </Reveal>
          ))}
          <Reveal delay={4} className="mt-9 text-[0.98rem] italic tracking-wide text-mute">
            {manifesto.note}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
