import { Reveal } from "../components/Reveal";
import { projects, type Project } from "../content/projects";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section
      id="projects"
      className={`container ${styles.section}`}
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="kicker">
        Projects
      </h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Reveal delay={index * 80} key={project.id}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  // With a live demo there are two destinations, so the card holds two links
  // instead of being one big link (links can't be nested).
  if (project.url && project.demoUrl) {
    return (
      <div className={`${styles.card} ${styles.withLinks}`}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.links}>
          <a className={styles.link} href={project.demoUrl} target="_blank" rel="noreferrer">
            Live demo ↗
          </a>
          <a className={styles.link} href={project.url} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    );
  }

  if (project.url) {
    return (
      <a className={styles.card} href={project.url} target="_blank" rel="noreferrer">
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <span className={styles.link}>View on GitHub ↗</span>
      </a>
    );
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <span className={styles.status}>In progress</span>
    </div>
  );
}
