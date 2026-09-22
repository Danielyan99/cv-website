import { Reveal } from "../components/Reveal";
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
        {projects.map((project, index) => (
          <Reveal delay={index * 80} key={project.id}>
            {project.url ? (
              <a className={styles.card} href={project.url} target="_blank" rel="noreferrer">
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <span className={styles.link}>View on GitHub ↗</span>
              </a>
            ) : (
              <div className={styles.card}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <span className={styles.status}>In progress</span>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
