
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import { twitterUrl } from "../utils/constants";
import styles from "../styles/index.module.css";

type Props = {
    data: any
}

const Index: React.FC<Props> = (props): JSX.Element => {
    //console.log(props);
    return (
        <div className={styles.homePage}>
            <Header />
            <main className={styles.profile}>
                <Profile name="Josias" imagePath="/josias.jpg" />
                <h2> Hi 👋🏽, I'm Josias Aurel</h2>
                <p>
                    👨🏽‍💻 I'm self-taught programmer.
                    <br />
                    ⚒️ I like building tools or run little experiments on my computer.
                    <br />
                    🧑🏽‍🎓 I'm currently in my last year in high school.
                    <br />
                    🏠 I currently live in Cameroon.
                    <br />
                    🌱 I like how beautiful nature is 🏵️
                </p>
                <p> <a href="https://github.com/JosiasAurel">GitHub</a> <a href="mailto:josias@josiasw.dev">josias@josiasw.dev</a> <a href={twitterUrl}>Twitter</a> .</p>
            </main>

            <Footer />
        </div>
    )
}

export default Index;