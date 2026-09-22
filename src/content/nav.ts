export interface NavLink {
  label: string;
  href: string;
}

// Section ids match the headings added in later build steps
// (experience, skills, projects, work, contact).
export const navLinks: NavLink[] = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Work with me", href: "#work" },
  { label: "Contact", href: "#contact" },
];
