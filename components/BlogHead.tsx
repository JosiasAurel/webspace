
import React from "react";
import Title from "./Title";
import Text from "./Text";
import styles from "../styles/components.module.css";

type Props = {
    title: string
    description: string
    date: string
}

const BlogHead: React.FC<Props> = ({ title, description, date }): JSX.Element => {
    return (
        <div className={styles.blogHead}>
            <Title>
                {title}
            </Title>
            <Text><em>{description}</em></Text>
            <p>{date}</p>
        </div>
    )
}

export default BlogHead;