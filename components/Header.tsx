import React from "react";
import Link from "next/link";
import styles from "../styles/components.module.css";

type Props = {
    theme: string,
    changeTheme: Function,
    atHome: boolean
}
const Header: React.FC<Props> = ({ theme, changeTheme, atHome }): JSX.Element => {
    return (
        <header className={styles.header}>
            <nav>
                <h2>{!atHome ? (
                    <Link href="/">
                        <svg viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </Link>
                ) : ""}</h2>
                <button onClick={() => {
                    if (theme === "light") {
                        changeTheme("dark");
                    } else changeTheme("light");
                }} className={styles.colorSwitch}>
                    <img src={theme === "light" ? "/moon.svg" : "/sun.svg"} alt="moon" />
                </button>
            </nav>
        </header >
    )
}

export default Header;