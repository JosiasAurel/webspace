
import React from "react";
import Link from "next/link";

import styles from "../styles/components.module.css";

type Props = {
    title: string
    url: string
    description: string
}

const PostCard: React.FC<Props> = ({
    title,
    url,
    description
}): JSX.Element => {
    return (
        <Link href={`thoughts/${url}`}>
            <div className={styles.postCard}>
                <h2>
                    {title}
                </h2>
                <p>
                    {
                        description ? description : "---"
                    }
                </p>
            </div>
        </Link>
    )
}

export default PostCard;