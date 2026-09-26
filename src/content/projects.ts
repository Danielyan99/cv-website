export interface ProjectFact {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  /** null while the project isn't public yet — the card shows "In progress" instead of a dead link. */
  url: string | null;
  /** Deployed version, when there is one. The card then shows "Live demo" next to the GitHub link. */
  demoUrl?: string;
  /** Main tech, shown as chips. */
  tags: string[];
  /** Featured projects get a large card with a drawn preview and two key facts. */
  featured?: {
    preview: "scoreboard" | "ledger";
    facts: [ProjectFact, ProjectFact];
  };
}

export const projects: Project[] = [
  {
    id: "live-scoreboard",
    title: "Live football scoreboard",
    description:
      "Premier League and La Liga scores pushed over WebSocket. The server diffs every update and sends only what changed.",
    url: "https://github.com/Danielyan99/live-sports-scoreboard",
    demoUrl: "https://live-sports-scoreboard-seven.vercel.app",
    tags: ["NestJS", "Socket.io", "React", "TypeScript", "MongoDB"],
    featured: {
      preview: "scoreboard",
      facts: [
        { value: "~250 B", label: "per live update instead of a full snapshot" },
        { value: "24/7", label: "live: a match simulator runs when no game is on" },
      ],
    },
  },
  {
    id: "bank-expense",
    title: "Bank statement analyzer",
    description:
      "Upload a bank CSV and see where the money went. Rules sort most transactions; an LLM only handles the leftovers.",
    url: "https://github.com/Danielyan99/bank-expense-analyzer",
    demoUrl: "https://bank-expense-analyzer-web.vercel.app",
    tags: ["NestJS", "React", "TypeScript", "Recharts", "Gemini API"],
    featured: {
      preview: "ledger",
      facts: [
        { value: "87%", label: "of the sample sorted by rules, no AI" },
        { value: "1 call", label: "to the LLM per statement, each merchant once" },
      ],
    },
  },
  {
    id: "this-site",
    title: "This website",
    description: "Tests, accessibility and Lighthouse scores in the open.",
    url: "https://github.com/Danielyan99/cv-website",
    tags: ["React", "Vite", "Vitest", "Playwright"],
  },
];
