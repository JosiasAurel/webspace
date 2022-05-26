import React from "react";
import Link from "next/link";
import styles from "../styles/components.module.css";

type Props = {
    theme: string,
    changeTheme: Function
}
const Header: React.FC<Props> = ({ theme, changeTheme }): JSX.Element => {
    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.circle}>

                </div>
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