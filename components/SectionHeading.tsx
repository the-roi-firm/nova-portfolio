import Reveal from "./Reveal";

/**
 * Editorial section header: small gold kicker, then a large serif title
 * where the emphasised fragment is set in warm italic.
 */
export default function SectionHeading({
  kicker,
  title,
  em,
  align = "left",
  className = "",
}: {
  kicker: string;
  title: string;
  em?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={`flex flex-col gap-5 ${
        align === "center" ? "items-center text-center" : "items-start"
      } ${className}`}
    >
      <span className="kicker">{kicker}</span>
      <h2 className="font-display text-[clamp(2.1rem,4.5vw,3.6rem)] leading-[1.05] text-cream">
        {title}
        {em ? <em className="italic text-warm"> {em}</em> : null}
      </h2>
    </Reveal>
  );
}
