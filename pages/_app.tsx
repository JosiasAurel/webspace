
import React from "react";
import "../styles/global.css";
import "../styles/github-syntax.css";
import { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import P from "../components/Text";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";

const components = {
    p: P,
    h1: Title,
};

const JosiasAurelDev: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();
    const [theme, setTheme] = React.useState<"dark" | "light">("light");
    const [isHome, setIsHome] = React.useState<boolean>(true);

    React.useEffect(() => {
        if (router.pathname !== "/") {
            setIsHome(false);
        } else setIsHome(true);
    });

    React.useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else document.body.classList.remove("dark");
    }, [theme]);

    // const propsWithTheme = { ...pageProps, theme };
    return (
        <div>
            <Header atHome={isHome} theme={theme} changeTheme={setTheme} />
            <MDXProvider components={components}>
                {!isHome ?
                    <div className="blogStyle">
                        <div className="blogContent">
                            <Component {...pageProps} />
                        </div>
                    </div>
                    :
                    <div style={{
                        margin: "4em 0",
                    }}>
                        <Component {...pageProps} />
                    </div>
                }
            </MDXProvider>
            <Footer />
        </div>
    );
}

export default JosiasAurelDev;