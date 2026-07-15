import Reveal from "./Reveal";
import { tourist } from "@/lib/content";

/** The one full-color moment on the page: a cognac band for visitors. */
export default function Tourist() {
  return (
    <section className="bg-accent px-6 py-24 text-paper md:px-12 md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 md:grid-cols-2 md:gap-24">
        <Reveal>
          <span className="inline-block border border-paper/40 px-5 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.3em]">
            {tourist.badge}
          </span>
          <h2 className="mt-7 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.04]">
            {tourist.title} <em className="italic text-paper/80">{tourist.titleEm}</em>
          </h2>
          <p className="mt-6 max-w-lg text-[0.9rem] leading-8 text-paper/75">
            {tourist.text}
          </p>
        </Reveal>

        <Reveal delay={2} className="md:justify-self-end">
          <a
            href="#booking"
            className="inline-block bg-paper px-9 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
          >
            {tourist.cta}
          </a>
          <p className="mt-6 max-w-xs text-[0.8rem] leading-7 text-paper/70">
            {tourist.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
