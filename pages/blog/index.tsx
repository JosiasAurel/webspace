import React from "react";
import PostCard from "../../components/PostCard";
import { readdirSync } from "fs";

type Props = {
    posts: Post[]
}
const ThoughtsPage: React.FC<Props> = ({ posts }): JSX.Element => {
    console.log(posts);
    return (
        <div>
            <div style={{
                margin: "1em"
            }}>
                <h2>Blog & Thoughts 📝</h2>
                <p>A collection of my thoughts, ideas and learnings. Juicy & instructive information.</p>
            </div>
            <div style={{
                width: "90vw"
            }}>
                <div style={{
                    borderLeft: "solid 4px dotted grey"
                }}>
                    {posts.map((post, idx) => {
                        return (
                            <PostCard
                                key={idx}
                                date={post.date}
                                title={post.title}
                                url={`/${post.name.split(".")[0]}`}
                                description={post.description}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {

    let files = readdirSync("./pages/blog/");

    files = files.filter(file => file !== "index.tsx");

    const articles_ = files.map(async file => {
        const { title, description, date } = await require(`./${file}`);
        const article: Post = { title, description, date, name: file };
        return article;
    });

    const articles = await Promise.all(articles_);

    return {
        props: {
            posts: articles
        }
    }
}

export default ThoughtsPage;