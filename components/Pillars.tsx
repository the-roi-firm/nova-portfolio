import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { pillars } from "@/lib/content";

function Arch({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative block h-[110px] w-20 rounded-t-full border border-line-strong transition-colors duration-500 ${className}`}
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, rgba(201,165,82,0.12), transparent 70%)",
      }}
    >
      <span className="absolute inset-x-3 bottom-0 top-4 rounded-t-full border border-gold/12" />
    </span>
  );
}

export default function Pillars() {
  return (
    <section className="px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          kicker={pillars.label}
          title={pillars.title}
          em={pillars.titleEm}
        />
        <div className="mt-16 grid gap-px overflow-hidden border border-line md:grid-cols-3">
          {pillars.items.map((p, i) => (
            <Reveal
              key={p.num}
              delay={((i + 1) as 1 | 2 | 3)}
              className="group relative bg-card p-11 transition-colors duration-500 hover:bg-card-2"
            >
              <span className="absolute right-7 top-6 font-display text-6xl font-light leading-none text-gold/8">
                {p.num}
              </span>
              <Arch className="mb-9 group-hover:border-gold" />
              <h3 className="mb-4 font-display text-2xl leading-tight text-cream">
                {p.title}
              </h3>
              <p className="text-[0.88rem] leading-8 text-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
