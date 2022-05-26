
import { Head, NextScript, Main, Html } from "next/document";
import Header from "../components/Header";

export default function ThisDocument() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}