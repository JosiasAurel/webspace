import React from "react";
import Link from "next/link";
import styles from "../styles/components.module.css";

const Header: React.FC = (): JSX.Element => {

    const [state, setState] = React.useState<string>("");

    React.useEffect(() => {
        fetch("/api/state")
            .then(res => res.json())
            .then(value => setState(value));
    });

    return (
        <header className={styles.header}>
            <Link href="/">
                <h2>Josias Aurel {state === "hyper" ? "⚡" : ""}</h2>
            </Link>
            <nav>
                <Link href="/lab">
                    <a>Lab🧪</a>
                </Link>
                <Link href="/thoughts">
                    <a>Thoughts 🧠</a>
                </Link>
                <Link href="/essays">
                    <a>Playground🎮</a>
                </Link>
            </nav>
        </header>
    )
}

export default Header;