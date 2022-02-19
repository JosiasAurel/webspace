
import React from "react";

import { Renderer } from "../utils/render";
import { TWITTER_PROFILE_IMAGE, twitterUrl } from "../utils/constants";
import styles from "../styles/index.module.css";
import { readFileSync } from "fs";
type Props = {
    content: string
}

const Index: React.FC<Props> = ({ content }): JSX.Element => {
    return (
        <div className={styles.homePage}>
            <main className={styles.profile}>
                <img src={TWITTER_PROFILE_IMAGE} alt="Josias Aurel" />
                <h2> Josias Aurel - <em><a href={twitterUrl}>@JosiasWing⚡</a></em> </h2>
                <p>
                    Hi 👋,
                    16 years old Cameroonian builder.
                    <br />
                    I love to build little tools, run experiments or just hack around.
                    <br />
                    You can find some of my projects in <a href="/lab">josiasw.dev/lab</a>
                    <br />
                </p>
                <p> <a href="https://github.com/JosiasAurel">GitHub</a> <a href="mailto:josias@josiasw.dev">josias@josiasw.dev</a> <a href={twitterUrl}>Twitter</a> .</p>
            </main>

            {/*  <div dangerouslySetInnerHTML={{ __html: content }}>
            </div> */}
        </div>
    )
}

export async function getServerSideProps() {
    const renderer = new Renderer("markdown");

    const content = readFileSync(`${process.cwd()}/utils/sample.md`).toString();

    const renderedOutput: string = renderer.compile(String.raw({ raw: content }));
    return {
        props: {
            content: renderedOutput
        }
    }
}
export default Index;