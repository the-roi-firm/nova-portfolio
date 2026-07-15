/**
 * Nova wordmark: an archway (nodding to a lounge doorway) beside the
 * NOVA / STYLE LOUNGE lockup. Pure SVG so it stays crisp at any size.
 */
export default function Logo({
  className = "",
  height = 44,
}: {
  className?: string;
  height?: number;
}) {
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
        stroke="#c9a552"
        strokeWidth="1.1"
      />
      <path
        d="M 9.5,42 L 9.5,18 A 9.5,9.5 0 0,1 28.5,18 L 28.5,42"
        fill="none"
        stroke="#c9a552"
        strokeWidth="0.65"
        opacity="0.5"
      />
      <line x1="1" y1="42" x2="37" y2="42" stroke="#c9a552" strokeWidth="0.5" opacity="0.25" />
      <rect
        x="17.5"
        y="40"
        width="4"
        height="4"
        transform="rotate(45 19.5 42)"
        fill="#c9a552"
        opacity="0.65"
      />
      <line x1="48" y1="10" x2="48" y2="36" stroke="#c9a552" strokeWidth="0.5" opacity="0.25" />
      <text
        x="60"
        y="30"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="19"
        fontWeight="400"
        fill="#f2ece0"
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
        fill="#c9a552"
        letterSpacing="3.6"
      >
        STYLE LOUNGE
      </text>
    </svg>
  );
}
