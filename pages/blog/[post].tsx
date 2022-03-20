
import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Renderer } from "../../utils/render";
const BlogPage: React.FC = (): JSX.Element => {

    const rendered = new Renderer("markdown");

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <Header />

            <Footer />
        </div>
    )
}

export async function getServerSideProps(ctx) {

    const postURI = ctx.query.post;
    // console.log(ctx);
    const baseURL = process.env.reqBase;

    const response = await fetch(`${baseURL}/api/getPost`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            postURI
        })
    });
    const post = await response.json();

    return {
        props: {
            post
        }
    }
}

export default BlogPage;