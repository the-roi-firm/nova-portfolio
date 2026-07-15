import Reveal from "./Reveal";
import { tourist } from "@/lib/content";

export default function Tourist() {
  return (
    <section
      className="relative overflow-hidden border-y border-line bg-card px-6 py-28 md:px-12 md:py-32"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(23,18,11,0.94) 0%, rgba(23,18,11,0.7) 55%, rgba(23,18,11,0.4) 100%), url('/images/lounge-detail.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 md:grid-cols-2 md:gap-24">
        <Reveal>
          <span className="inline-block border border-line-strong px-5 py-2 text-[0.64rem] font-medium uppercase tracking-[0.3em] text-gold">
            {tourist.badge}
          </span>
          <h2 className="mt-7 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.06] text-cream">
            {tourist.title} <em className="italic text-warm">{tourist.titleEm}</em>
          </h2>
          <p className="mt-6 max-w-lg text-[0.9rem] leading-8 text-muted">
            {tourist.text}
          </p>
        </Reveal>

        <Reveal delay={2} className="md:justify-self-end">
          <a
            href="#booking"
            className="group relative inline-block overflow-hidden bg-gold px-9 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-bg transition-transform duration-300 hover:-translate-y-0.5"
          >
            {tourist.cta}
          </a>
          <p className="mt-6 text-[0.8rem] leading-7 text-muted">{tourist.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
