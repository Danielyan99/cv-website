import { Reveal } from "../components/Reveal";
import { hero, stats, type Stat } from "../content/hero";
import { useCountUp } from "../hooks/useCountUp";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { assetUrl } from "../lib/assetUrl";
import styles from "./Hero.module.css";

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <Reveal delay={delay}>
      {(revealed) => (
        <div className={styles.stat}>
          <StatValue stat={stat} active={revealed} animate={!reducedMotion} />
          <p className={styles.statLabel}>{stat.label}</p>
        </div>
      )}
    </Reveal>
  );
}

function StatValue({ stat, active, animate }: { stat: Stat; active: boolean; animate: boolean }) {
  const count = useCountUp(stat.countTo ?? 0, active, animate);
  const display = stat.countTo != null ? `${count}${stat.suffix ?? ""}` : stat.value;
  return <p className={styles.statValue}>{display}</p>;
}

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
        <a href={assetUrl("resume.pdf")} className={styles.buttonPrimary}>
          Download CV
        </a>
        <a href="#contact" className={styles.buttonSecondary}>
          Contact me
        </a>
      </div>
      <div className={styles.stats}>
        {stats.map((stat, index) => (
          <StatCard stat={stat} delay={index * 80} key={stat.label} />
        ))}
      </div>
    </section>
  );
}
