import React from "react";
import type { SourcedWriting } from "../writing/sourced";

const Post: React.FC<SourcedWriting> = ({ title, link, host, views }) => {
    return (
        <div className="post">
            <a href={link}>
                <h1>{title}</h1>
            </a>
            <span><em className="host-name">{host}</em>, {views} reads</span>
        </div>
    )
}

export default Post;