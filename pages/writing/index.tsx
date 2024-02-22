import React from "react";
import Post, { LocalPost } from "../../components/Post";
import type { LocalPost as LocalPostType } from "../../components/Post";
import { sourcedWritings } from "../../writing/sourced";

import { readdirSync } from "fs";

type Props = {
  articles: LocalPostType[];
};

const HomePage: React.FC<Props> = ({ articles }) => {
  console.log("articles = ", articles);
  return (
    <div>
      <span style={{ maxHeight: "5px" }}>
        <h2
          style={{
            fontSize: "2rem",
          }}
        >
          Writing — articles, thoughts or essays.
        </h2>
      </span>
      <div>
        {articles
          .sort((a, b) => b.num - a.num)
          .map((article) => (
            <LocalPost
              {...article}
              name={article.name.split(".")[0]}
            />
          ))}

        {sourcedWritings.map((writing) => (
          <>
 <Post
            key={writing.title + writing.link}
            link={writing.link}
            title={writing.title}
            views={writing.views}
            host={writing.host}
          />
          </>
        ))}
      </div>

      <br />
      <br />
      <div></div>
    </div>
  );
};

export async function getStaticProps() {
  let files = readdirSync("./content");
  console.log("Files = ", files);

  files = files.filter(
    (file) => file !== "index.tsx" && file !== "template.mdx"
  );

  const articles_ = files.map(async (file) => {
    const { meta } = await import(`../../content/${file}`);
    const article: LocalPostType = {...meta, name: file}; 
    return article;
  });

  const articles = await Promise.all(articles_);

  return {
    props: {
      articles,
    },
  };
}

export default HomePage;
