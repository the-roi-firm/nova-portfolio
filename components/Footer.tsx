import Logo from "./Logo";
import { nav, contact, footer } from "@/lib/content";

const connect = [
  { label: "Instagram", href: contact.instagram },
  { label: "TikTok", href: contact.tiktok },
  { label: "WhatsApp", href: contact.whatsappHref },
  { label: "Google", href: contact.google },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-3 md:gap-16">
        <div>
          <Logo height={40} />
          <p className="mt-6 max-w-xs text-[0.8rem] italic leading-7 text-muted">
            {footer.tagline.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </p>
        </div>

        <div>
          <p className="mb-6 text-[0.66rem] font-medium uppercase tracking-[0.3em] text-gold">
            Navigate
          </p>
          <div className="flex flex-col gap-3.5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.85rem] text-muted transition-colors duration-300 hover:text-cream"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              className="text-[0.85rem] text-muted transition-colors duration-300 hover:text-cream"
            >
              Request an appointment
            </a>
          </div>
        </div>

        <div>
          <p className="mb-6 text-[0.66rem] font-medium uppercase tracking-[0.3em] text-gold">
            Connect
          </p>
          <div className="flex flex-col gap-3.5">
            {connect.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.85rem] text-muted transition-colors duration-300 hover:text-cream"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 border-t border-line pt-8 md:col-span-3 md:flex-row md:items-center">
          <p className="text-[0.72rem] tracking-wide text-faint">
            &copy; {new Date().getFullYear()} {footer.copyright}
          </p>
          <div className="flex gap-6">
            {connect.slice(0, 3).map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.66rem] uppercase tracking-[0.25em] text-muted transition-colors duration-300 hover:text-gold"
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
