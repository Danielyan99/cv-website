import { Reveal } from "../components/Reveal";
import { profile } from "../content/profile";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section
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
          <a className={styles.email} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </>
      </Reveal>
    </section>
  );
}
