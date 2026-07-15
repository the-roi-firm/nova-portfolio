import Reveal from "./Reveal";
import { shan, contact } from "@/lib/content";

export default function Shan() {
  return (
    <section id="shan" className="grid md:grid-cols-2" aria-label="About Shan">
      {/* Portrait */}
      <div className="relative min-h-[440px] overflow-hidden md:min-h-[720px]">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/images/shan-portrait.jpg')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 62%, rgba(10,7,4,0.55) 100%), linear-gradient(to bottom, rgba(10,7,4,0.2) 0%, transparent 26%, transparent 78%, rgba(10,7,4,0.55) 100%)",
          }}
        />
        <span className="absolute bottom-8 left-8 font-display text-sm uppercase tracking-[0.3em] text-cream/70">
          Shan · Founder and Specialist
        </span>
      </div>

      {/* Copy */}
      <div className="flex flex-col justify-center bg-bg px-6 py-20 md:px-16 md:py-24">
        <Reveal>
          <span className="kicker">{shan.label}</span>
          <blockquote className="mt-8 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-light italic leading-[1.35] text-warm">
            {shan.quote.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </blockquote>
          <div className="mt-9 space-y-5 text-[0.9rem] leading-8 text-muted">
            {shan.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-gold"
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
