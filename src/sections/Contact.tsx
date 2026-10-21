import { Reveal } from "../components/Reveal";
import { profile } from "../content/profile";
import { useTrackSectionView } from "../hooks/useTrackSectionView";
import { track } from "../lib/analytics";
import styles from "./Contact.module.css";

export function Contact() {
  const sectionRef = useTrackSectionView<HTMLElement>("contact");

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`container ${styles.section}`}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="kicker">
        Contact
      </h2>
      <Reveal>
        <>
          <p className={styles.text}>The fastest way to reach me is email.</p>
          <a
            className={styles.email}
            href={`mailto:${profile.email}`}
            onClick={() => track("email_click", { location: "contact" })}
          >
            {profile.email}
          </a>
        </>
      </Reveal>
    </section>
  );
}
