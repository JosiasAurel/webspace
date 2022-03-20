import React from "react";
import Link from "next/link";
import styles from "../styles/components.module.css";

const Header: React.FC = (): JSX.Element => {

    return (
        <header className={styles.header}>
            <Link href="/">
                <h2>Josias Aurel ⚡</h2>
            </Link>
            <nav>
                <Link href="/lab">
                    <a>Lab🧪</a>
                </Link>
                <Link href="/thoughts">
                    <a>Thoughts 🧠</a>
                </Link>
                <Link href="/playground">
                    <a>Playground🎮</a>
                </Link>
            </nav>
        </header>
    )
}

export default Header;