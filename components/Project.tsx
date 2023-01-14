import React from "react";
import Text from "./Text";

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
    <div>
      <h3>
        {name} · {shortDescription}
      </h3>
      <Text>{description}</Text>
      <p style={{ fontSize: "1.2rem" }}>
        <a href={link}>Try it</a> – <a href={source}>GitHub</a>
      </p>
    </div>
  );
};

export default Project;
