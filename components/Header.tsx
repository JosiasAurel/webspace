import React from "react";
import Link from "next/link";
import styles from "../styles/components.module.css";

const Header: React.FC = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.circle}>

                </div>
                <button className={styles.colorSwitch}>
                    <img src="/moon.svg" alt="moon" />
                </button>
            </nav>
        </header >
    )
}

export default Header;