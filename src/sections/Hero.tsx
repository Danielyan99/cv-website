import { hero, stats } from "../content/hero";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={`container ${styles.hero}`} aria-label="Introduction">
      <p className={styles.eyebrow}>{hero.eyebrow}</p>
      <h1 className={styles.title}>
        {hero.titleLine1}
        <br />
        <span className={styles.titleMuted}>{hero.titleLine2}</span>
      </h1>
      <p className={styles.summary}>{hero.summary}</p>
      <p className={styles.availability}>{hero.availability}</p>
      <div className={styles.actions}>
        <a href="/resume.pdf" className={styles.buttonPrimary}>
          Download CV
        </a>
        <a href="#contact" className={styles.buttonSecondary}>
          Contact me
        </a>
      </div>
      <div className={styles.stats}>
        {stats.map((stat) => (
          <div className={styles.stat} key={stat.label}>
            <p className={styles.statValue}>{stat.value}</p>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
