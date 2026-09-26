export const hero = {
  eyebrow: "Yerevan, Armenia · UTC+4 · full overlap with US Eastern and EU afternoons",
  titleLine1: "Senior front-end engineer",
  titleLine2: "building real-time React interfaces",
  summary:
    "5 years in React and TypeScript. I work on a gaming platform with 100,000+ daily users, and I designed the Claude Code workflow our team ships with.",
  availability: "Open to full-time, part-time, freelance and contract remote work.",
};

export interface Stat {
  value: string;
  label: string;
  /** Present only for stats worth animating as a count-up on scroll-in. */
  countTo?: number;
  suffix?: string;
}

export const stats: Stat[] = [
  { value: "5", label: "years in React and TypeScript", countTo: 5 },
  {
    value: "100k+",
    label: "daily users on my platform",
    countTo: 100,
    suffix: "k+",
  },
  { value: "AI-first", label: "daily workflow with Claude Code agents" },
];
