
import { Head, NextScript, Main, Html } from "next/document";
import ThemeContext from "../context/Theme";

export default function ThisDocument() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <ThemeContext.Consumer>
                {value => (
                    <body className={value === "dark" ? "dark" : ""}>
                        <Main />
                        <NextScript />
                    </body>
                )}
            </ThemeContext.Consumer>
        </Html>
    )
}