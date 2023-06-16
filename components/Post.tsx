import React from "react";
import Link from "next/link";
import type { SourcedWriting } from "../writing/sourced";

const Post: React.FC<SourcedWriting> = ({ title, link, host, views }) => {
  return (
    <div className="post">
      <a style={{ color: "black" }} href={link}>
        <h1>{title}</h1>
      </a>
      <span>
        <em className="host-name">{host}</em>, Reads: {views}{" "}
      </span>
    </div>
  );
};

export type LocalPost = {
  title: string;
  description: string;
  date: string;
  name: string;
  num: number;
};
const LocalPost: React.FC<LocalPost> = ({ title, description, date, name }) => {
  return (
    <>
    <div className="post">
      <Link style={{ color: "black" }} href={`/writing/${name}`}>
        <h1>{title}</h1>
      </Link>
      <p style={{ color: "grey"}}>{description}</p>
    </div>
    
    </>
  );
};

export { LocalPost };
export default Post;
