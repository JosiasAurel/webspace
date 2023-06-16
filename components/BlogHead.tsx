import React from "react";
import Text from "./Text";
import styles from "../styles/components.module.css";
import Head from "next/head";
import Nav from "./Header";

type Props = {
  title: string;
  description: string;
  date: string;
};

const BlogHead: React.FC<Props> = ({
  title,
  description,
  date,
}): JSX.Element => {
  const [url, setUrl] = React.useState<string>("");

  React.useEffect(() => {
    setUrl(location.href);
    console.log(url);
  }, [url]);

  const ogImage = `https://josiasaurel.vercel.app/api/og?msg=${title
    .split(" ")
    .join("%20")}`;

  return (
    <div className={styles.blogHead}>
      {/* affect head from this component */}
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />

        <meta property="og:url" content={url} />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:image" content={ogImage} />
      </Head>
      <Nav />
      <h1>{title}</h1>
      <Text>
        <em
          style={{ textDecoration: "none", color: "grey", fontStyle: "normal" }}
        >
          {description}
        </em>
      </Text>
    </div>
  );
};

export default BlogHead;
