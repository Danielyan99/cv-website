import { projects } from "../content/projects";
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
        {projects.map((project) =>
          project.url ? (
            <a
              className={styles.card}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              key={project.id}
            >
              <p className={styles.title}>{project.title}</p>
              <p className={styles.description}>{project.description}</p>
              <span className={styles.link}>View on GitHub ↗</span>
            </a>
          ) : (
            <div className={styles.card} key={project.id}>
              <p className={styles.title}>{project.title}</p>
              <p className={styles.description}>{project.description}</p>
              <span className={styles.status}>In progress</span>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
