
import React from "react";
import Link from "next/link";

type Props = {
    title: string
    url: string
}

const PostCard: React.FC<Props> = ({
    title,
    url
}): JSX.Element => {
    return (
        <Link href={url}>
            <div>
                <h2>
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard;