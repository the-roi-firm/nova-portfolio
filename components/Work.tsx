import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { work, contact } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading kicker={work.label} title={work.title} em={work.titleEm} />
          <Reveal className="max-w-sm text-[0.88rem] leading-8 text-muted">
            {work.intro}
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-2.5 md:grid-cols-4">
          {work.items.map((item, i) => (
            <Reveal
              key={item.src}
              delay={((Math.min(i + 1, 4)) as 1 | 2 | 3 | 4)}
              className="group relative overflow-hidden bg-card"
            >
              <div className="relative aspect-[4/5] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={`${item.name} grooming by Shan at Nova Style Lounge Kandy`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-line transition-all duration-500 group-hover:ring-line-strong" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-line-strong px-9 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-warm transition-all duration-300 hover:border-gold hover:bg-gold/8"
          >
            {work.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
