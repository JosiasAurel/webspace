
import React from "react";
import "../styles/global.css";
import "../styles/github-syntax.css";
import { AppProps } from "next/app";
import Header from "../components/Header";
import Title from "../components/Title";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";

const components = {
    h1: Title
};

const JosiasAurelDev: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();
    const [theme, setTheme] = React.useState<string>("light");
    const [isHome, setIsHome] = React.useState<boolean>(true);
    React.useEffect(() => {
        if (router.pathname !== "/") {
            setIsHome(false);
        } else setIsHome(true);
    }, []);
    const propsWithTheme = { ...pageProps, theme };
    return (
        <div className={theme === "dark" ? "dark" : ""}>
            <Header atHome={isHome} theme={theme} changeTheme={setTheme} />
            <div className={!isHome ? "blogStyle" : ""} style={{
                margin: "2.5em 0",
            }}>
                <MDXProvider components={components}>
                    <Component {...propsWithTheme} />
                </MDXProvider>
            </div>
        </div>
    );
}

export default JosiasAurelDev;