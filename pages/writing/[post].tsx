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

export async function getStaticPaths() {
  const { readdirSync } = require("node:fs");
  const files = readdirSync(process.cwd() + "/content/");

  const paths = files.map(filename => "/writing/" + filename.slice(0, -4))

  return {
    paths: paths,
    fallback: false
  } 
}

export const getStaticProps =  async (ctx: any) => {
    console.log("context", ctx);
    const { post } = ctx.params;
    const { default: Content, meta } = await import(`../../content/${post}.mdx`);

    return {
      props: {
        meta, post
      }
    }
}

export default Post;
