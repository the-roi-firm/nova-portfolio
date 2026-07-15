/**
 * Nova wordmark: an archway beside the NOVA / STYLE LOUNGE lockup.
 * `tone` switches between the dark-band (cream) and light-band (ink) styles.
 */
export default function Logo({
  className = "",
  height = 44,
  tone = "dark",
}: {
  className?: string;
  height?: number;
  tone?: "dark" | "light";
}) {
  const text = tone === "dark" ? "#f2ecdd" : "#1b1610";
  const arch = tone === "dark" ? "#c9a552" : "#a05a1f";

  return (
    <svg
      viewBox="0 0 168 46"
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M 4,42 L 4,18 A 15,15 0 0,1 34,18 L 34,42"
        fill="none"
        stroke={arch}
        strokeWidth="1.1"
      />
      <path
        d="M 9.5,42 L 9.5,18 A 9.5,9.5 0 0,1 28.5,18 L 28.5,42"
        fill="none"
        stroke={arch}
        strokeWidth="0.65"
        opacity="0.5"
      />
      <line x1="1" y1="42" x2="37" y2="42" stroke={arch} strokeWidth="0.5" opacity="0.25" />
      <rect
        x="17.5"
        y="40"
        width="4"
        height="4"
        transform="rotate(45 19.5 42)"
        fill={arch}
        opacity="0.65"
      />
      <line x1="48" y1="10" x2="48" y2="36" stroke={arch} strokeWidth="0.5" opacity="0.25" />
      <text
        x="60"
        y="30"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="19"
        fontWeight="400"
        fill={text}
        letterSpacing="5"
      >
        NOVA
      </text>
      <text
        x="61"
        y="41"
        fontFamily="var(--font-inter), Arial, sans-serif"
        fontSize="5.2"
        fontWeight="500"
        fill={arch}
        letterSpacing="3.6"
      >
        STYLE LOUNGE
      </text>
    </svg>
  );
}
