"use client";
import { useEffect, useRef, useState } from "react";

/* The VoCordis mark, drawn as the Purpose Pattern.
   Mark anatomy (Design System §4): navy petals = Core Desires,
   gold centre = Modes of Self-Gift, burgundy circles = Optimal Environments. */

type Part = "desires" | "modes" | "environments";

const PETAL = "M100 14C113 32 113 53 100 71C87 53 87 32 100 14Z";
const DOTS = [
  { cx: 148.5, cy: 72 },
  { cx: 51.5, cy: 72 },
  { cx: 100, cy: 156 },
];

export type RosetteItem = { part: Part; title: string; text: string };

export function Rosette({ items }: { items: RosetteItem[] }) {
  const [active, setActive] = useState<Part | null>(null);
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dim = (p: Part) => (active && active !== p ? " is-dim" : "");
  const hover = (p: Part) => ({
    onMouseEnter: () => setActive(p),
    onMouseLeave: () => setActive(null),
    onClick: () => setActive(active === p ? null : p),
  });

  return (
    <div ref={ref} className={`rosette${shown ? " is-shown" : ""}`}>
      <svg className="rosette-svg" viewBox="0 0 200 200" role="img" aria-label="The Purpose Pattern: Core Desires, Modes of Self-Gift and Optimal Environments, drawn as the VoCordis mark">
        <g className={`rosette-part rosette-petals${dim("desires")}`} {...hover("desires")}>
          {[0, 120, 240].map((r) => (
            <path key={r} d={PETAL} transform={`rotate(${r} 100 100)`} fill="var(--navy)" />
          ))}
        </g>
        <g className={`rosette-part rosette-dots${dim("environments")}`} {...hover("environments")}>
          {DOTS.map((d) => (
            <circle key={d.cx + "-" + d.cy} cx={d.cx} cy={d.cy} r="8.5" fill="var(--burgundy)" />
          ))}
        </g>
        <g className={`rosette-part rosette-centre${dim("modes")}`} {...hover("modes")}>
          <circle cx="100" cy="100" r="21" fill="var(--gold)" />
          <circle cx="100" cy="100" r="10" fill="var(--gold-light)" />
        </g>
      </svg>

      <ul className="rosette-legend">
        {items.map((it) => (
          <li key={it.part}>
            <button
              type="button"
              className="rosette-item"
              data-active={active === it.part}
              onMouseEnter={() => setActive(it.part)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(it.part)}
              onBlur={() => setActive(null)}
            >
              <span className={`rosette-key rosette-key--${it.part}`} aria-hidden="true" />
              <span>
                <span className="rosette-item-title">{it.title}</span>
                <span className="rosette-item-text">{it.text}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
