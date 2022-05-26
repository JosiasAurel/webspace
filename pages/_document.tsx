
import { Head, NextScript, Main, Html } from "next/document";

export default function ThisDocument() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <script async src="https://cdn.splitbee.io/sb.js"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}