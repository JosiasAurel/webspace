import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostCard from "../../components/PostCard";

type Props = {
    posts: Post[]
}
const ThoughtsPage: React.FC<Props> = ({ posts }): JSX.Element => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <Header />

            <div>
                <h2>Thoughts 🧠</h2>
                <p>A collection of my thoughts and ideas. Juicy & instructive information.</p>
            </div>
            <div style={{
                width: "90vw"
            }}>
                <div style={{
                    marginLeft: "solid 4px dotted grey"
                }}>
                    {posts.map(post => {
                        return (
                            <PostCard
                                title={post.title}
                                url={post.url}
                                description={post.description}
                            />
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(ctx) {
    // console.log(ctx);
    const baseURL = process.env.reqBase;
    const res = await fetch(`${baseURL}/api/fetchPosts`);
    const posts = await res.json();

    console.log(posts);
    return {
        props: {
            posts: posts.posts
        }
    }
}

export default ThoughtsPage;