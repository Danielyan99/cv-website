export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: "Front-end build",
    description: "React and TypeScript, from design to production.",
  },
  {
    title: "Performance rescue",
    description: "Your app is slow or leaks memory. I find out why.",
  },
  {
    title: "Design-system work",
    description: "Shared components your team can reuse.",
  },
];
