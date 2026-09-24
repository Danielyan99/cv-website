export interface Project {
  id: string;
  title: string;
  description: string;
  /** null while the project isn't public yet — the card shows "In progress" instead of a dead link. */
  url: string | null;
  /** Deployed version, when there is one. The card then shows "Live demo" next to the GitHub link. */
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "live-scoreboard",
    title: "Live football scoreboard",
    description:
      "Scores pushed over WebSocket: server-side diffing, versioned patches and a live league table.",
    url: "https://github.com/Danielyan99/live-sports-scoreboard",
    demoUrl: "https://live-sports-scoreboard-seven.vercel.app",
  },
  {
    id: "this-site",
    title: "This website",
    description: "Tests, accessibility and Lighthouse scores in the open.",
    url: "https://github.com/Danielyan99/cv-website",
  },
  {
    id: "ai-workflow",
    title: "AI workflow case study",
    description: "The Claude Code + Jira + GitLab setup, and what it got wrong.",
    url: null,
  },
];
