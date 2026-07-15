import Reveal from "./Reveal";
import { shan, contact } from "@/lib/content";

/** Night interlude: the page returns to the dark lounge to meet Shan. */
export default function Shan() {
  return (
    <section id="shan" className="grid bg-night md:grid-cols-2" aria-label="About Shan">
      {/* Portrait */}
      <div className="relative min-h-[460px] overflow-hidden md:min-h-[760px]">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/images/shan-portrait.jpg')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 62%, rgba(16,13,9,0.6) 100%), linear-gradient(to bottom, rgba(16,13,9,0.25) 0%, transparent 26%, transparent 76%, rgba(16,13,9,0.6) 100%)",
          }}
        />
        <span className="absolute bottom-8 left-8 text-[0.78rem] uppercase tracking-[0.24em] text-cream/85">
          Shan · Founder and Specialist
        </span>
      </div>

      {/* Copy */}
      <div className="flex flex-col justify-center px-6 py-20 md:px-16 md:py-28">
        <Reveal>
          <span className="kicker kicker-dark">{shan.label}</span>
          <blockquote className="mt-8 font-display text-[clamp(1.9rem,3.4vw,2.8rem)] font-light italic leading-[1.3] text-warm">
            {shan.quote.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </blockquote>
          <div className="mt-9 space-y-5 text-[1.08rem] leading-[1.72] text-cream-soft">
            {shan.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2.5 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-gold"
          >
            {shan.link}
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
