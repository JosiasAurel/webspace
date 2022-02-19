
import React from "react";

import Footer from "../components/Footer";
import { TWITTER_PROFILE_IMAGE, twitterUrl } from "../utils/constants";
import styles from "../styles/index.module.css";


const Index: React.FC = (): JSX.Element => {
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

            <Footer />
        </div>
    )
}
export default Index;