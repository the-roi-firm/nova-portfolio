"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  /** amount of element visible before it triggers */
  threshold?: number;
};

/**
 * Fade + rise on scroll. Uses IntersectionObserver, reveals once,
 * and respects prefers-reduced-motion (CSS handles the instant case).
 */
export default function Reveal({
  children,
  as,
  className = "",
  delay,
  threshold = 0.16,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown, threshold]);

  const delayClass = delay ? ` reveal-delay-${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? " is-in" : ""}${delayClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
