import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const BlogPage: React.FC = (props: any): JSX.Element => {
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

export default BlogPage;