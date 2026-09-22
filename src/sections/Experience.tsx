import { useState } from "react";
import { experience, type Role } from "../content/experience";
import { useInView } from "../hooks/useInView";
import { useReducedMotion } from "../hooks/useReducedMotion";
import styles from "./Experience.module.css";

function RoleCard({ role }: { role: Role }) {
  const [expanded, setExpanded] = useState(false);
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>();
  const revealed = inView || reducedMotion;
  const detailsId = `role-details-${role.id}`;
  const bullets = expanded ? role.details : role.headline;

  return (
    <div ref={ref} className={`${styles.card} ${revealed ? styles.visible : ""}`}>
      <span
        className={`${styles.dot} ${role.current ? styles.dotCurrent : ""}`}
        aria-hidden="true"
      />
      <p className={styles.dates}>{role.dateRange}</p>
      <h3 className={styles.roleTitle}>
        {role.title} <span className={styles.company}>— {role.company}</span>
      </h3>
      <ul className={styles.bullets} id={detailsId}>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className={styles.tech}>
        {role.tech.map((tech) => (
          <span className={styles.chip} key={tech}>
            {tech}
          </span>
        ))}
      </div>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={expanded}
        aria-controls={detailsId}
        onClick={() => setExpanded((value) => !value)}
      >
        {expanded ? "Hide details" : "Show details"}
      </button>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className={`container ${styles.section}`}
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className="kicker">
        Experience
      </h2>
      <div className={styles.timeline}>
        {experience.map((role) => (
          <RoleCard role={role} key={role.id} />
        ))}
      </div>
    </section>
  );
}
