import { profile } from "../content/profile";
import { track } from "../lib/analytics";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <span>{profile.location}</span>
        <ul className={styles.links}>
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("social_click", { network: "github", location: "footer" })}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("social_click", { network: "linkedin", location: "footer" })}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => track("email_click", { location: "footer" })}
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
