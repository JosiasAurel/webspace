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
                        <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 11H14.5H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 7H14.5H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 15V3.6C8 3.26863 8.26863 3 8.6 3H20.4C20.7314 3 21 3.26863 21 3.6V17C21 19.2091 19.2091 21 17 21V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5 15H8H12.4C12.7314 15 13.0031 15.2668 13.0298 15.5971C13.1526 17.1147 13.7812 21 17 21H8H6C4.34315 21 3 19.6569 3 18V17C3 15.8954 3.89543 15 5 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

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