export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js (Vuex)",
      "Redux Toolkit",
      "React Query",
      "Recoil",
      "SCSS",
      "Bootstrap",
    ],
  },
  {
    label: "Backend & data",
    items: ["Node.js", "NestJS", "MongoDB", "Firebase", "REST", "GraphQL"],
  },
  {
    label: "Testing",
    items: ["Vitest", "React Testing Library", "Playwright", "MSW"],
  },
  {
    label: "AI workflow",
    items: ["Claude Code", "Jira automation", "GitLab automation"],
  },
  {
    label: "Build & delivery",
    items: ["Webpack", "Git", "CI/CD (GitHub Actions)"],
  },
];
