import { navLinks } from "../content/nav";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.row}`}>
        <a href="#top" className={styles.name}>
          Narek Danielyan
        </a>
        <nav aria-label="Section navigation">
          <ul className={styles.nav}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
