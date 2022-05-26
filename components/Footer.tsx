
import React from "react";
import styles from "../styles/components.module.css";

const Footer: React.FC = (): JSX.Element => {
    const currentYear: number = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <p>&copy; {currentYear} Josias Aurel ⚡ | Happy {new Date().toDateString()} </p>
        </footer>
    )
}

export default Footer;