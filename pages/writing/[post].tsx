import React from "react";
import { NextPageContext } from "next";
import BlogHead from "../../components/BlogHead";
import dynamic from "next/dynamic";


const Post = ({ meta, post }) => {
    const Content  = dynamic(() => import(`../../content/${post}.mdx`))

    return (
       <div className="post-content">
        <BlogHead {...meta} />
        <Content />
       </div> 
    )
}

Post.getInitialProps =  async (ctx: NextPageContext) => {
    const { post } = ctx.query;
    const { default: Content, meta } = await import(`../../content/${post}.mdx`);
    return {
        meta,
        post
    }
}

export default Post;