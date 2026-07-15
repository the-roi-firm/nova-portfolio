import { nav, contact, footer } from "@/lib/content";

const connect = [
  { label: "Instagram", href: contact.instagram },
  { label: "TikTok", href: contact.tiktok },
  { label: "WhatsApp", href: contact.whatsappHref },
  { label: "Google", href: contact.google },
];

/** Night footer, opened by an oversized serif wordmark. */
export default function Footer() {
  return (
    <footer className="bg-night px-6 pb-12 pt-20 text-cream md:px-12">
      <div className="mx-auto max-w-[1440px]">
        {/* Oversized wordmark */}
        <p
          aria-hidden="true"
          className="font-display select-none text-[clamp(4.5rem,17vw,15rem)] leading-[0.85] tracking-[0.04em] text-cream/95"
        >
          NOVA
        </p>
        <p className="mt-3 text-[0.66rem] uppercase tracking-[0.4em] text-gold">
          Style Lounge · Kandy
        </p>

        <div className="mt-16 grid gap-12 border-t border-line-dark pt-12 md:grid-cols-3 md:gap-16">
          <div>
            <p className="max-w-xs text-[0.82rem] italic leading-7 text-cream/50">
              {footer.tagline.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </div>

          <div>
            <p className="mb-6 text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Navigate
            </p>
            <div className="flex flex-col gap-3.5">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[0.85rem] text-cream/55 transition-colors duration-300 hover:text-cream"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#booking"
                className="text-[0.85rem] text-cream/55 transition-colors duration-300 hover:text-cream"
              >
                Request an appointment
              </a>
            </div>
          </div>

          <div>
            <p className="mb-6 text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Connect
            </p>
            <div className="flex flex-col gap-3.5">
              {connect.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.85rem] text-cream/55 transition-colors duration-300 hover:text-cream"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-line-dark pt-7 md:flex-row md:items-center">
          <p className="text-[0.72rem] tracking-wide text-cream/35">
            &copy; {new Date().getFullYear()} {footer.copyright}
          </p>
          <div className="flex gap-6">
            {connect.slice(0, 3).map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.66rem] uppercase tracking-[0.25em] text-cream/45 transition-colors duration-300 hover:text-gold"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
