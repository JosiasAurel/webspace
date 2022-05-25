
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import { twitterUrl } from "../utils/constants";
import styles from "../styles/index.module.css";

// test notion integration
import { notion } from "../utils/notion";

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
                <h2> Josias Aurel - <em><a href={twitterUrl}>@JosiasWing</a></em> </h2>
                <p>
                    Hi 👋,
                    17 years old Cameroonian builder.
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
    const data = await res.json();

    const articles = [];
    const pages = await notion.databases.query({
        database_id: "4fa54ad81dc445c1ac1b89c634fdfc57",
    });

    pages.results.forEach(async page => {
        const article = await notion.blocks.retrieve({
            block_id: page.id
        });

        const content = await notion.blocks.children.list({
            block_id: article.id
        });

        content.results.forEach(async item => {
            const item_ = await notion.blocks.children.list({
                block_id: item.id
            });
            console.log(item_);
        });
    });

    return {
        props: {
            data
        }
    }
}

export default Index;