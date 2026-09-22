export interface Project {
  id: string;
  title: string;
  description: string;
  /** null while the project isn't public yet — the card shows "In progress" instead of a dead link. */
  url: string | null;
}

export const projects: Project[] = [
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
  {
    id: "live-dashboard",
    title: "Live dashboard",
    description: "Real-time charts over WebSocket.",
    url: null,
  },
];
