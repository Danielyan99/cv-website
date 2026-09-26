import styles from "./ProjectPreview.module.css";

/**
 * Small drawn versions of each app, in the site's own colours. Decorative only
 * (the card text says everything), so they are hidden from screen readers.
 * Drawings instead of screenshots: sharp at any size, tiny, and never out of date
 * with the dark theme.
 */
export function ProjectPreview({ kind }: { kind: "scoreboard" | "ledger" }) {
  return (
    <div className={styles.frame} aria-hidden="true">
      {kind === "scoreboard" ? <Scoreboard /> : <Ledger />}
    </div>
  );
}

const MATCHES = [
  { home: "ARS", away: "CHE", score: "2 – 1", minute: "67'", live: true },
  { home: "LIV", away: "MCI", score: "1 – 1", minute: "HT", live: false },
  { home: "RMA", away: "BAR", score: "0 – 0", minute: "12'", live: true },
];

function Scoreboard() {
  return (
    <svg viewBox="0 0 320 150" className={styles.svg}>
      {MATCHES.map((m, i) => {
        const y = 14 + i * 36;
        return (
          <g key={m.home} className={i === 0 ? styles.flash : undefined}>
            <rect x="14" y={y} width="292" height="28" rx="6" className={styles.row} />
            <circle cx="28" cy={y + 14} r="3" className={m.live ? styles.live : styles.idle} />
            <text x="40" y={y + 18} className={styles.team}>{m.home}</text>
            <text x="160" y={y + 18} className={styles.score} textAnchor="middle">{m.score}</text>
            <text x="292" y={y + 18} className={styles.team} textAnchor="end">{m.away}</text>
            <text x="92" y={y + 18} className={styles.meta}>{m.minute}</text>
          </g>
        );
      })}
      <rect x="14" y="122" width="150" height="18" rx="4" className={styles.chip} />
      <text x="22" y="134.5" className={styles.mono}>match:patch · 248 B</text>
    </svg>
  );
}

const BARS = [
  { width: 150, className: "c1" },
  { width: 92, className: "c2" },
  { width: 64, className: "c3" },
  { width: 40, className: "c4" },
] as const;

function Ledger() {
  return (
    <svg viewBox="0 0 320 150" className={styles.svg}>
      <text x="14" y="22" className={styles.meta}>Who categorized what</text>
      {/* 87% rules / 13% AI, split by a 2px gap */}
      <rect x="14" y="30" width="251" height="8" rx="4" className={styles.rules} />
      <rect x="267" y="30" width="39" height="8" rx="4" className={styles.ai} />
      <text x="14" y="54" className={styles.mono}>rules 87%</text>
      <text x="306" y="54" className={styles.mono} textAnchor="end">AI 13%</text>

      {BARS.map((bar, i) => (
        <rect
          key={bar.className}
          x="14"
          y={68 + i * 14}
          width={bar.width}
          height="8"
          rx="3"
          className={styles[bar.className]}
        />
      ))}

      <rect x="182" y="68" width="124" height="50" rx="6" className={styles.row} />
      <text x="192" y="86" className={styles.aiLabel}>AI · Gemini</text>
      <text x="192" y="102" className={styles.meta}>“DDS indicates</text>
      <text x="192" y="113" className={styles.meta}>a dentist.”</text>

      <rect x="14" y="126" width="118" height="16" rx="4" className={styles.chip} />
      <text x="22" y="137.5" className={styles.mono}>1 LLM call</text>
    </svg>
  );
}
