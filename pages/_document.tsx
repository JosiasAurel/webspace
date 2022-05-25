
import { Head, NextScript, Main, Html } from "next/document";

export default function ThisDocument() {
    return (
        <Html>
            <Head>
                <title>Josias Aurel</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}