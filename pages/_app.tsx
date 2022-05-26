
import React from "react";
import "../styles/global.css";
import "../styles/github-syntax.css";
import { AppProps } from "next/app";
import Header from "../components/Header";
import Title from "../components/Title";
import P from "../components/Text";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";

const components = {
    h1: Title,
    p: P
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
            <MDXProvider components={components}>
                {!isHome ?
                    <div className="blogStyle">
                        <div className="blogContent">
                            <Component {...propsWithTheme} />
                        </div>
                    </div>
                    :
                    <div style={{
                        margin: "2.5em 0",
                    }}>
                        <Component {...propsWithTheme} />
                    </div>
                }
            </MDXProvider>

        </div>
    );
}

export default JosiasAurelDev;