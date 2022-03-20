
import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Head from "next/head";
import { Renderer } from "../../utils/render";

import styles from "../../styles/post.module.css";

type Props = {
    postHold: PostHolder
}

const BlogPage: React.FC<Props> = ({ postHold }): JSX.Element => {
    const [renderedContent, setRenderedContent] = React.useState<string>("");
    const renderer = new Renderer();

    React.useEffect(() => {
        console.log(postHold);
        if (postHold.status) {
            setRenderedContent(
                renderer.compile(postHold.post.content)
            );
            console.log(renderedContent);
        }
    }, []);

    if (!postHold.status) {
        return (
            <Layout>
                <Header />
                <div>
                    <h1 style={{
                        fontSize: "500%",
                        textAlign: "center"
                    }}>
                        😢
                    </h1>
                    <h2>Sorry! I could not find this page.</h2>
                </div>
                <Footer />
            </Layout>
        )
    }

    return (
        <Layout>
            <Head>

                <title>Thought</title>
                <meta name="title" content={postHold.post.title} />
                <meta name="description" content={postHold.post.description} />


                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://josiasw.dev/thoughts/${postHold.post.url}`} />
                <meta property="og:title" content={`Thoughts - ${postHold.post.title}`} />
                <meta property="og:description" content={postHold.post.description} />
                <meta property="og:image" content={`https://og-gen.josiasw.dev/${postHold.post.title}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fraw.githubusercontent.com%2FJosiasAurel%2FJosiasAurel%2Fmaster%2Fjosias.jpg`} />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://josiasw.dev/thoughts/${postHold.post.url}`} />
                <meta property="og:url" content={`https://josiasw.dev/thoughts/${postHold.post.url}`} />
                <meta property="twitter:title" content={`Thoughts - ${postHold.post.title}`} />
                <meta property="twitter:description" content={postHold.post.description} />
                <meta property="twitter:image" content={`https://og-gen.josiasw.dev/${postHold.post.title}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fraw.githubusercontent.com%2FJosiasAurel%2FJosiasAurel%2Fmaster%2Fjosias.jpg`} />
            </Head>
            <Header />

            <article className={styles.article}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    margin: "0 10vw",
                    fontSize: "1.5em",
                    width: "100%"
                }}>
                    <h2 style={{
                        fontSize: "1.5em",
                        textAlign: "center"
                    }}> {postHold.post.title} </h2>
                    <span style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        fontSize: "0.7em",
                        width: "100%"
                    }}>
                        <p style={{
                            margin: "0 1em",
                        }}>
                            Written by Josias Aurel on <em>  {postHold.post.publishDate} </em>
                        </p>
                    </span>
                    <p style={{
                        color: "grey",
                        fontSize: "0.7em",
                        textAlign: "center"
                    }}>
                        <em>
                            <blockquote>
                                {postHold.post.description}
                            </blockquote>
                        </em>
                    </p>
                </div>
                <div>

                </div>
                <div className={styles.post} dangerouslySetInnerHTML={{
                    __html: renderedContent
                }}>
                </div>

                <div className={styles.newsletterCTA}>
                    <em>
                        You can read the original on my newsletter page <a href="https://www.getrevue.co/profile/josiaswing/issues/achieve-anything-you-want-1061194">here</a>
                    </em>
                    <p>You have reached the end of this article. I hope you enjoyed reading it and learned something along the way.
                        <br />
                        If you want more of this to your mailbox, then consider <a href="https://www.getrevue.co/profile/josiaswing">subscribing to my newsletter</a>.
                    </p>
                </div>
            </article>
            <Footer />
        </Layout>
    )
}

export async function getServerSideProps(ctx) {

    const postURI: string = ctx.query.post;
    // console.log(ctx);
    const baseURL = process.env.reqBase;

    const response = await fetch(`${baseURL}/api/getPost`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            postURI: postURI
        })
    });
    const postHold = await response.json() as Post;

    // console.log(postHold);
    return {
        props: {
            postHold
        }
    }
}

export default BlogPage;