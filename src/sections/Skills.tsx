import { Reveal } from "../components/Reveal";
import { skillGroups } from "../content/skills";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="skills" className={`container ${styles.section}`} aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="kicker">
        Skills
      </h2>
      <div className={styles.groups}>
        {skillGroups.map((group, index) => (
          <Reveal delay={index * 80} key={group.label}>
            <div className={styles.group}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li className={styles.chip} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
