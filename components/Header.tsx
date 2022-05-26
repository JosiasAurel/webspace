import React from "react";
import Link from "next/link";
import styles from "../styles/components.module.css";
import { useRouter } from "next/router";

type Props = {
    theme: string,
    changeTheme: Function,
    atHome: boolean
}
const Header: React.FC<Props> = ({ theme, changeTheme, atHome }): JSX.Element => {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <nav>
                <h2>{!atHome ? (
                    <svg onClick={_ => router.back()} width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 6L9 12L15 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) :
                    <Link href="/blog">
                        <a style={{ color: "black", fontWeight: "lighter" }}>articles</a>
                    </Link>
                }</h2>
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