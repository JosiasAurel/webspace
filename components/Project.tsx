import React from "react";

type Props = {
  name: string;
  link: string;
  source?: string;
  shortDescription: string;
  description: string;
};

const Project: React.FC<Props> = ({
  name,
  link,
  source,
  shortDescription,
  description,
}): JSX.Element => {
  return (
    <div
      className="project-card"
      style={{
        margin: "2em 0",
      }}
    >
      <h3>
        {name} · {shortDescription}
      </h3>
      <p>{description}</p>
      <p style={{ fontSize: "1.2rem" }}>
        <a href={link}>Try it</a> – <a href={source}>GitHub</a>
      </p>
    </div>
  );
};

export default Project;
