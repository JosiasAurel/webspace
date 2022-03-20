
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


    return {
        props: {

        }
    }
}

export default BlogPage;