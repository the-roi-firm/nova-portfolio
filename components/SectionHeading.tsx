import Reveal from "./Reveal";

/**
 * Editorial section header: small kicker with drawn rule, then a large
 * serif title with the emphasised fragment in italic. `tone` matches the
 * band it sits on.
 */
export default function SectionHeading({
  kicker,
  title,
  em,
  tone = "light",
  className = "",
}: {
  kicker: string;
  title: string;
  em?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal className={`flex flex-col items-start gap-5 ${className}`}>
      <span className={tone === "dark" ? "kicker kicker-dark" : "kicker"}>
        {kicker}
      </span>
      <h2
        className={`font-display text-[clamp(2.3rem,5vw,4rem)] leading-[1.02] ${
          tone === "dark" ? "text-cream" : "text-ink"
        }`}
      >
        {title}
        {em ? (
          <em className={`italic ${tone === "dark" ? "text-warm" : "text-accent"}`}>
            {" "}
            {em}
          </em>
        ) : null}
      </h2>
    </Reveal>
  );
}
