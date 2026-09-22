export interface Role {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  current: boolean;
  /** Shown by default in the timeline, before "Show details" is used. */
  headline: string[];
  /** Full CV bullet list, shown when the role card is expanded. */
  details: string[];
  tech: string[];
}

export const experience: Role[] = [
  {
    id: "softconstruct",
    title: "Senior Software Engineer",
    company: "SoftConstruct",
    dateRange: "09/2022 – Present",
    current: true,
    headline: [
      "Real-time WebSocket performance for a gaming platform with 100,000+ daily users",
      "Shared design-system components and the autoplay logic used by 7–8 game modules",
      "Designed our Claude Code agent workflow: I plan and review, the agent drafts",
    ],
    details: [
      "Build front-end features for online games and the shared lobby, on a platform with 100,000+ daily users, in a 10-person React team inside a 30-person engineering team.",
      "Fixed performance problems and memory leaks in the lobby's live table data (real-time statistics over WebSocket subscriptions).",
      "Built reusable design-system components (buttons, typography, localized text) and a custom slider used across several product features.",
      "Built shared autoplay logic reused in 7–8 game modules, removing duplicated business logic.",
      "Review code and mentor mid-level developers on features and complex debugging.",
      "Designed a Claude Code agent workflow (Jira task creation, GitLab integration, review support, edge-case analysis before coding). A new game's delivery went from about 4 weeks to about 1 week, once the workflow was set up.",
    ],
    tech: ["React", "TypeScript", "Redux Toolkit", "WebSocket", "SCSS"],
  },
  {
    id: "esterox",
    title: "Front-End Developer",
    company: "Esterox LLC",
    dateRange: "04/2021 – 09/2022",
    current: false,
    headline: [
      "Intern to full-time, on production projects",
      "Products for clients in Sweden and the US: house-planning, e-learning and analytics",
    ],
    details: [
      "Started as an intern and moved to a full-time role on production projects.",
      "iPlanner (Sweden): built the front-end with React and Next.js, for a platform where customers design a house and negotiate changes with a construction company.",
      "Learning platform (USA): built student-side features (video lessons, progress tracking) with React and Recoil, and fixed production bugs.",
      "Hotel advertising analytics panel (USA): built charts, reports and an admin panel with Vue, Vuex and Google Charts, full-stack for about 5 months, using Firebase (Firestore, Storage).",
      "Worked directly with clients in Sweden and the US across time zones. Mentored a junior developer.",
    ],
    tech: ["Next.js", "Vue", "Recoil", "Firebase"],
  },
];
