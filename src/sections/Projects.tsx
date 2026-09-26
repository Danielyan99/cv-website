import { ProjectPreview } from "../components/ProjectPreview";
import { Reveal } from "../components/Reveal";
import { projects, type Project } from "../content/projects";
import styles from "./Projects.module.css";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className={`container ${styles.section}`}
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="kicker">
        Projects
      </h2>
      <div className={styles.featuredGrid}>
        {featured.map((project, index) => (
          <Reveal delay={index * 80} key={project.id}>
            <FeaturedCard project={project} />
          </Reveal>
        ))}
      </div>
      {others.length > 0 && (
        <div className={styles.otherGrid}>
          {others.map((project, index) => (
            <Reveal delay={(featured.length + index) * 80} key={project.id}>
              <CompactCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className={styles.tags} aria-label="Tech stack">
      {tags.map((tag) => (
        <li key={tag} className={styles.chip}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const { featured } = project;
  if (!featured) return null;
  return (
    <article className={`${styles.card} ${styles.featured}`}>
      <ProjectPreview kind={featured.preview} />
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.demoUrl && (
            <span className={styles.liveBadge}>
              <span className={styles.liveDot} aria-hidden="true" />
              Live
            </span>
          )}
        </div>
        <p className={styles.description}>{project.description}</p>
        <dl className={styles.facts}>
          {featured.facts.map((fact) => (
            <div key={fact.value} className={styles.fact}>
              <dt className={styles.factValue}>{fact.value}</dt>
              <dd className={styles.factLabel}>{fact.label}</dd>
            </div>
          ))}
        </dl>
        <Tags tags={project.tags} />
        <div className={styles.actions}>
          {project.demoUrl && (
            <a className={styles.primary} href={project.demoUrl} target="_blank" rel="noreferrer">
              Live demo ↗
            </a>
          )}
          {project.url && (
            <a className={styles.secondary} href={project.url} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <article className={`${styles.card} ${styles.compact}`}>
      <div className={styles.compactText}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
      <Tags tags={project.tags} />
      {project.url ? (
        <a className={styles.secondary} href={project.url} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      ) : (
        <span className={styles.status}>In progress</span>
      )}
    </article>
  );
}
