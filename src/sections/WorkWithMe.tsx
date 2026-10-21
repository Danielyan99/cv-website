import { Reveal } from "../components/Reveal";
import { profile } from "../content/profile";
import { services } from "../content/services";
import { useTrackSectionView } from "../hooks/useTrackSectionView";
import { track } from "../lib/analytics";
import styles from "./WorkWithMe.module.css";

export function WorkWithMe() {
  const sectionRef = useTrackSectionView<HTMLElement>("work_with_me");

  return (
    <section
      ref={sectionRef}
      id="work"
      className={`container ${styles.section}`}
      aria-labelledby="work-heading"
    >
      <h2 id="work-heading" className="kicker">
        Work with me
      </h2>
      <Reveal>
        <div className={styles.card}>
          <p className={styles.intro}>
            A small number of freelance and contract projects, alongside full-time work.
          </p>
          <div className={styles.services}>
            {services.map((service) => (
              <div key={service.title}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
          <a
            className={styles.button}
            href={`mailto:${profile.email}?subject=${encodeURIComponent("Let's work together")}`}
            onClick={() => track("email_click", { location: "work_with_me" })}
          >
            Book a call
          </a>
        </div>
      </Reveal>
    </section>
  );
}
