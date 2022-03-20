
import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

import { Renderer } from "../../utils/render";
import Image from "next/image";

type Props = {
    postHold: PostHolder
}

const BlogPage: React.FC<Props> = ({ postHold }): JSX.Element => {
    const [renderedContent, setRenderedContent] = React.useState<string>("");
    const renderer = new Renderer("markdown");

    React.useEffect(() => {
        console.log(postHold);
        if (postHold.status) {
            setRenderedContent(
                renderer.render(postHold.post.content)
            );
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
                <div>

                </div>
                <div dangerouslySetInnerHTML={{
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

    console.log(postHold);
    return {
        props: {
            postHold
        }
    }
}

export default BlogPage;