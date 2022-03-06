import React from "react";
import Link from "next/link";
import styles from "../styles/components.module.css";

type Props = {
    mode: "hyper" | "normal"
}
const Header: React.FC<Props> = ({ mode }): JSX.Element => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <h2>Josias Aurel {mode === "hyper" ? "⚡" : ""}</h2>
            </Link>
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