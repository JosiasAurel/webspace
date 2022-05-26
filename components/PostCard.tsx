
import React from "react";
import Link from "next/link";

import styles from "../styles/components.module.css";

type Props = {
    title: string
    url: string
    description: string
    date: string
}

const PostCard: React.FC<Props> = ({
    title,
    url,
    description,
    date
}): JSX.Element => {
    return (
        <div className={styles.postCard}>
            <p> {date} </p>
            <Link href={`/blog/${url}`}>
                <a>
                    {title}
                </a>
            </Link>
            <p>
                {
                    description ? description : "---"
                }
            </p>
        </div>
    )
}

export default PostCard;