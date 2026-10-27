/* Line icons recommended by the Design System (§10 Icons):
   Feather for narrative, Compass for desires; the mark for the report. */

const base = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function FeatherIcon() {
  return (
    <svg {...base}>
      <path d="M20 4c-6 0-11 4-12.5 10L6 20" />
      <path d="M20 4c0 7-4.5 12-11 12" />
      <path d="M8.5 14H14" />
      <path d="M11 9.5h6" />
    </svg>
  );
}

export function CompassIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 13.3 13.3 8.5 15.5 10.7 10.7Z" />
    </svg>
  );
}

export function MarkIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 200 200" aria-hidden="true">
      {[0, 120, 240].map((r) => (
        <path key={r} d="M100 14C113 32 113 53 100 71C87 53 87 32 100 14Z" transform={`rotate(${r} 100 100)`} fill="none" stroke="currentColor" strokeWidth="11" />
      ))}
      <circle cx="148.5" cy="72" r="9" fill="currentColor" />
      <circle cx="51.5" cy="72" r="9" fill="currentColor" />
      <circle cx="100" cy="156" r="9" fill="currentColor" />
      <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="11" />
    </svg>
  );
}

/* The mark reversed for Navy backgrounds (chosen 27 Oct 2026):
   Parchment petals, Gold Light circles, Gold centre. */
export function MarkReversed({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      {[0, 120, 240].map((r) => (
        <path key={r} d="M100 14C113 32 113 53 100 71C87 53 87 32 100 14Z" transform={`rotate(${r} 100 100)`} fill="var(--parchment)" />
      ))}
      <circle cx="148.5" cy="72" r="8.5" fill="var(--gold-light)" />
      <circle cx="51.5" cy="72" r="8.5" fill="var(--gold-light)" />
      <circle cx="100" cy="156" r="8.5" fill="var(--gold-light)" />
      <circle cx="100" cy="100" r="21" fill="var(--gold)" />
      <circle cx="100" cy="100" r="10" fill="var(--gold-light)" />
    </svg>
  );
}
