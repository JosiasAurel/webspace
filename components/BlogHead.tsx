
import React from "react";
import Title from "./Title";

type Props = {
    title: string
    description: string
}

const BlogHead: React.FC<Props> = ({ title, description }): JSX.Element => {
    return (
        <div>
            <Title>
                {title}
            </Title>
            <p style={{ textAlign: "center", color: "grey" }}><em>{description}</em></p>
        </div>
    )
}

export default BlogHead;