import React from "react";
import Link from "next/link";
import styles from "../styles/components.module.css";

const Header: React.FC = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <h2>Josias Aurel ⚡</h2>
            <nav>
                <Link href="/lab">
                    <a>lab🧪</a>
                </Link>
                <Link href="/blog">
                    <a>Blog✍️</a>
                </Link>
                <Link href="/essays">
                    <a>Essays📝</a>
                </Link>
            </nav>
        </header>
    )
}

export default Header;