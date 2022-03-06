
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { TWITTER_PROFILE_IMAGE, twitterUrl } from "../utils/constants";
import styles from "../styles/index.module.css";

type Props = {
    data: any
}

const Index: React.FC<Props> = (props): JSX.Element => {
    // console.log(props);
    return (
        <div className={styles.homePage}>
            <Header mode={props.data.currentItem.state} />
            <main className={styles.profile}>
                <img src={TWITTER_PROFILE_IMAGE} alt="Josias Aurel" />
                <h2> Josias Aurel - <em><a href={twitterUrl}>@JosiasWing</a></em> </h2>
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

export async function getStaticProps(ctx) {
    // console.log(ctx);
    const res = await fetch("http://josiasw.dev/api/state");
    // const data = await res.json();

    const data = {
        currentItem: {
            key: "",
            state: "hyper"
        }
    }
    // console.log(data);

    return {
        props: {
            data
        }
    }
}
export default Index;