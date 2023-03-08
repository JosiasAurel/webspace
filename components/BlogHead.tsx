
import React from "react";
import Text from "./Text";
import styles from "../styles/components.module.css";
import Head from "next/head";

type Props = {
    title: string
    description: string
    date: string
}

const BlogHead: React.FC<Props> = ({ title, description, date }): JSX.Element => {
    const [url, setUrl] = React.useState<string>("");
    React.useEffect(() => {
        setUrl(location.href);
        console.log(url);
    }, [url]);
    return (
        <div className={styles.blogHead}>
            {/* affect head from this component */}
            <Head>
                <meta property="og:url" content={url} />
                <meta property="twitter:url" content={url} />
            </Head>
            <h1>
                {title}
            </h1>
            <Text><em style={{ textDecoration: "none", color: "grey" }}>{description}</em></Text>
            <p>{date}.</p>
        </div>
    )
}

export default BlogHead;
