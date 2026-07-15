"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { booking, contact } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";

/* Editorial underline fields: no boxes, just a drawn baseline. */
const fieldClass =
  "w-full border-0 border-b border-line-strong bg-transparent px-0 py-3 text-[1.05rem] font-normal text-ink outline-none transition-colors duration-300 placeholder:text-mute/80 focus:border-accent";

const labelClass =
  "mb-1.5 block text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-mute";

export default function Booking() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: if a bot filled the hidden field, silently drop.
    const botField = form.elements.namedItem("botcheck") as HTMLInputElement | null;
    if (botField?.checked) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const data = new FormData(form);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please try WhatsApp.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Connection issue. Please reach out on WhatsApp instead.");
    }
  }

  return (
    <section id="booking" className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
        {/* Left: context */}
        <div className="flex flex-col justify-center px-6 py-20 md:px-12 md:py-32">
          <Reveal>
            <span className="kicker">{booking.eyebrow}</span>
            <h2 className="mt-6 font-display text-[clamp(2.3rem,4.5vw,3.8rem)] leading-[1.05] text-ink">
              {booking.title} <em className="italic text-accent">{booking.titleEm}</em>
            </h2>
            <p className="copy mt-6 max-w-md">{booking.sub}</p>

            <div className="mt-11 space-y-0">
              {booking.details.map((d, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 border-t border-line py-4 last:border-b"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                  <p className="text-[1rem] leading-7 text-ink-soft">
                    <strong className="font-semibold text-ink">{d.strong}</strong>
                    {d.rest}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <div className="border-t border-line px-6 py-20 md:border-l md:border-t-0 md:px-14 md:py-32">
          {status === "success" ? (
            <div className="flex min-h-[420px] flex-col items-start justify-center">
              <span
                className="mb-8 h-20 w-16 rounded-t-full border border-accent"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 40%, rgba(160,90,31,0.14), transparent 70%)",
                }}
              />
              <p className="font-display text-[2rem] leading-tight text-ink">
                Your request has been received.
              </p>
              <p className="mt-4 text-[0.9rem] leading-7 text-mute">
                Shan will be in touch shortly to confirm your session, usually
                within a few hours.
              </p>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-accent"
              >
                Or message on WhatsApp now &rarr;
              </a>
            </div>
          ) : (
            <>
              <p className="mb-10 text-[0.85rem] tracking-wide text-mute">
                All fields marked with an asterisk are required.
              </p>
              <form onSubmit={handleSubmit} noValidate>
                {/* Web3Forms config */}
                <input type="hidden" name="access_key" value={contact.web3formsKey} />
                <input
                  type="hidden"
                  name="subject"
                  value="New Booking Request, Nova Style Lounge"
                />
                <input type="hidden" name="from_name" value="Nova Style Lounge Website" />

                <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="name">
                      Your name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Full name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+94 XX XXX XXXX"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label className={labelClass} htmlFor="preferred">
                    Preferred date and time *
                  </label>
                  <input
                    id="preferred"
                    name="preferred_date_time"
                    type="text"
                    required
                    placeholder="e.g. Friday evening, or 20 July after 7pm"
                    className={fieldClass}
                  />
                </div>

                <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="service">
                      Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className={`${fieldClass} appearance-none`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {booking.serviceOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="location">
                      Location preference
                    </label>
                    <select
                      id="location"
                      name="location"
                      defaultValue=""
                      className={`${fieldClass} appearance-none`}
                    >
                      <option value="" disabled>
                        Select location
                      </option>
                      {booking.locationOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-8">
                  <label className={labelClass} htmlFor="message">
                    Anything Shan should know? (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Hair concerns, preferences, occasion"
                    className={`${fieldClass} resize-y`}
                  />
                </div>

                {/* Honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-10 w-full bg-ink py-[1.1rem] text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60 md:w-auto md:px-14"
                >
                  {status === "sending" ? "Sending..." : "Send my request"}
                </button>

                {status === "error" && (
                  <p className="mt-4 text-[0.8rem] leading-6 text-accent">
                    {errorMsg}{" "}
                    <a
                      href={contact.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      Message on WhatsApp
                    </a>
                    .
                  </p>
                )}

                <p className="mt-6 max-w-md text-[0.88rem] italic leading-6 text-mute">
                  {booking.formNote}
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
