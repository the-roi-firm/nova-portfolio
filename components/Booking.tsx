"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { booking, contact } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full border border-line bg-card px-4 py-3.5 text-[0.9rem] font-light text-cream outline-none transition-colors duration-300 placeholder:text-faint focus:border-gold focus:bg-card-2";

const labelClass =
  "mb-2.5 block text-[0.66rem] font-medium uppercase tracking-[0.2em] text-muted";

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
    <section id="booking" className="grid bg-bg md:grid-cols-2">
      {/* Left: context */}
      <div
        className="flex flex-col justify-center px-6 py-20 md:px-16 md:py-28"
        style={{
          background:
            "radial-gradient(90% 70% at 25% 55%, rgba(120,80,25,0.16), transparent 70%), var(--color-surface)",
        }}
      >
        <Reveal>
          <p className="eyebrow mb-6">{booking.eyebrow}</p>
          <h2 className="font-display text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.12] text-cream">
            {booking.title} <em className="italic text-warm">{booking.titleEm}</em>
          </h2>
          <p className="mt-6 max-w-md text-[0.9rem] leading-8 text-muted">
            {booking.sub}
          </p>

          <div className="mt-10 space-y-5">
            {booking.details.map((d, i) => (
              <div key={i} className="flex items-start gap-3.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <p className="text-[0.85rem] leading-7 text-muted">
                  <strong className="font-medium text-warm">{d.strong}</strong>
                  {d.rest}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Right: form */}
      <div className="border-t border-line bg-surface px-6 py-20 md:border-l md:border-t-0 md:px-16 md:py-28">
        {status === "success" ? (
          <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
            <span
              className="mb-8 h-20 w-16 rounded-t-full border border-gold"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 40%, rgba(201,165,82,0.18), transparent 70%)",
              }}
            />
            <p className="mb-4 font-display text-3xl text-cream">
              Your request has been received.
            </p>
            <p className="text-[0.9rem] leading-7 text-muted">
              Shan will be in touch shortly to confirm your session,
              <br />
              usually within a few hours.
            </p>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-gold"
            >
              Or message on WhatsApp now &rarr;
            </a>
          </div>
        ) : (
          <>
            <p className="mb-8 text-[0.72rem] tracking-wide text-muted">
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

              <div className="grid gap-5 md:grid-cols-2">
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
                    className={inputClass}
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
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className={labelClass} htmlFor="preferred">
                  Preferred date and time *
                </label>
                <input
                  id="preferred"
                  name="preferred_date_time"
                  type="text"
                  required
                  placeholder="e.g. Friday evening, or 20 July after 7pm"
                  className={inputClass}
                />
              </div>

              <div className="mt-5">
                <label className={labelClass} htmlFor="service">
                  Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className={`${inputClass} appearance-none`}
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

              <div className="mt-5">
                <label className={labelClass} htmlFor="location">
                  Location preference
                </label>
                <select
                  id="location"
                  name="location"
                  defaultValue=""
                  className={`${inputClass} appearance-none`}
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

              <div className="mt-5">
                <label className={labelClass} htmlFor="message">
                  Anything Shan should know? (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Hair concerns, preferences, occasion"
                  className={`${inputClass} resize-y`}
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
                className="mt-7 w-full bg-gold py-4 text-[0.72rem] font-semibold uppercase tracking-[0.25em] text-bg transition-all duration-300 hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Send my request"}
              </button>

              {status === "error" && (
                <p className="mt-4 text-[0.8rem] leading-6 text-warm">
                  {errorMsg}{" "}
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline underline-offset-2"
                  >
                    Message on WhatsApp
                  </a>
                  .
                </p>
              )}

              <p className="mt-5 text-[0.75rem] italic leading-6 text-muted">
                {booking.formNote}
              </p>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
