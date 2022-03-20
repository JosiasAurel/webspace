
import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

import { Renderer } from "../../utils/render";

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
            <Header />

            <article style={{
                margin: "2em",
                fontSize: "2em"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    margin: "0 18%"
                }}>
                    <h2> {postHold.post.title} </h2>
                    <span style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        fontSize: "0.7em",
                        width: "100%"
                    }}>
                        <p style={{
                            margin: "0 1em"
                        }}>
                            Published on <em>  {postHold.post.publishDate} </em>
                        </p>
                        <p style={{
                            margin: "0 1em"
                        }}> Views : {postHold.post.views} </p>
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
                <div style={{
                    margin: "0 15%"
                }} dangerouslySetInnerHTML={{
                    __html: renderedContent
                }}>
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