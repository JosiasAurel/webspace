
import React from "react";
import "../styles/global.css";
import { AppProps } from "next/app";
import Header from "../components/Header";


const JosiasAurelDev: React.FC<AppProps> = ({ Component, pageProps }) => {
    const [theme, setTheme] = React.useState<string>("light");
    const propsWithTheme = { ...pageProps, theme };
    return (
        <div className={theme === "dark" ? "dark" : ""}>
            <Header theme={theme} changeTheme={setTheme} />
            <Component {...propsWithTheme} />
        </div>
    );
}

export default JosiasAurelDev;