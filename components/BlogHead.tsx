import React from "react";
import styles from "../styles/components.module.css";
import Head from "next/head";

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

  const ogImage = `https://josiasw.dev/api/og?msg=${title
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
      <img className={styles.blogHeadImage} src={ogImage} alt="" />
      <h1>{title}
      <br />
      </h1>
       <p>
      ·
      <br />
        <i
          style={{ color: "grey", textAlign: "center" }}
        >
          {description}
        </i></p> 
    </div>
  );
};

export default BlogHead;
