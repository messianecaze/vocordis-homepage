"use client";
import { useState } from "react";

/* The Purpose Pattern drawn as a tree (from Messiane's sketch, Oct 2026).
   Navy roots and trunk = Core Desires (three roots for the three desires).
   Gold branches and blossoms = Modes of Self-Gift.
   Burgundy wind, rain and soil = Optimal Environments: conditions around
   the tree that exist without it. Layers live in /public/tree/. */

type Part = "desires" | "modes" | "env";

const items: { part: Part; where: string; title: string; text: string; note?: string }[] = [
  { part: "desires", where: "The roots and trunk", title: "Core Desires", text: "The fundamental drives woven into who you are", note: "They require no justification." },
  { part: "modes", where: "The branches and blossoms", title: "Modes of Self-Gift", text: "The characteristic ways you give yourself to others" },
  { part: "env", where: "The wind, rain and soil", title: "Optimal Environments", text: "The conditions in which you naturally flourish" },
];

function Icon({ part }: { part: Part }) {
  if (part === "desires")
    return (
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <path d="M15 3 L15 15 M15 15 C21 16 22 21 25 27 M15 15 C10 17 8 22 5 27 M15 15 L15 28" stroke="var(--navy)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </svg>
    );
  if (part === "modes")
    return (
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <path d="M8 28 C10 20 12 15 18 10" stroke="var(--gold)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        {[[20, 5.4], [24.4, 8.6], [22.7, 13.8], [17.3, 13.8], [15.6, 8.6]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.6" fill="var(--gold-light)" />
        ))}
        <circle cx="20" cy="9.6" r="2.2" fill="var(--gold)" />
      </svg>
    );
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
      <path d="M3 10 q5 -5 10 0 t10 0" stroke="var(--burgundy)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <circle cx="7" cy="22" r="2.6" fill="var(--burgundy)" />
      <circle cx="15" cy="25" r="2.6" fill="var(--burgundy)" />
      <circle cx="23" cy="21" r="2.6" fill="var(--burgundy)" />
    </svg>
  );
}

export function PurposeTree() {
  const [focus, setFocus] = useState<Part | null>(null);
  const dim = (p: Part) => (focus && focus !== p ? " is-dim" : "");

  return (
    <div className="ptree">
      <div
        className="ptree-art"
        role="img"
        aria-label="A tree: its navy roots and trunk are Core Desires, its gold branches and blossoms are Modes of Self-Gift, and the wind, rain and soil around it are Optimal Environments"
      >
        <img className={`ptree-layer${dim("env")}`} src="/tree/environments.svg" alt="" />
        <img className="ptree-layer" src="/tree/ground.svg" alt="" />
        <img className={`ptree-layer${dim("desires")}`} src="/tree/desires.svg" alt="" />
        <img className={`ptree-layer${dim("modes")}`} src="/tree/branches.svg" alt="" />
        <img className={`ptree-layer${dim("modes")}`} src="/tree/modes.svg" alt="" />
      </div>

      <ul className="ptree-legend">
        {items.map((it) => (
          <li key={it.part}>
            <button
              type="button"
              className="ptree-item"
              data-active={focus === it.part}
              aria-pressed={focus === it.part}
              onClick={() => setFocus(focus === it.part ? null : it.part)}
              onMouseEnter={() => setFocus(it.part)}
              onMouseLeave={() => setFocus(null)}
              onFocus={() => setFocus(it.part)}
              onBlur={() => setFocus(null)}
            >
              <span className="ptree-icon"><Icon part={it.part} /></span>
              <span>
                <span className="ptree-where">{it.where}</span>
                <span className="ptree-title">{it.title}</span>
                <span className="ptree-text">{it.text}</span>
                {it.note && <span className="ptree-text ptree-note">{it.note}</span>}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
