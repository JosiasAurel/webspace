import React from "react";
import { NextPageContext } from "next";
import BlogHead from "../../components/BlogHead";

const Post = ({ Content, meta }) => {
    console.log("content type = ", typeof <Content />);
    return (
       <>
        <BlogHead {...meta} />
        <Content />
       </> 
    )
}

Post.getInitialProps =  async (ctx: NextPageContext) => {
    const { post } = ctx.query;
    const { default: Content, meta } = await import(`../../content/${post}.mdx`);
    console.log("content = ", Content);
    return {
        Content, 
        meta
    }
}

export default Post;