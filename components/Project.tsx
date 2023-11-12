import React from "react";
import styles from "../styles/components.module.css";

type Props = {
  name: string;
  link: string;
  source?: string;
  shortDescription: string;
  description: string;
  image: string,
};

const Project: React.FC<Props> = ({
  name,
  link,
  source,
  shortDescription,
  description,
  image
}): JSX.Element => {
  return (
    <div
      className={styles.projectCard}
    >
      <img src={image} alt={name} />
      <h3 style={{ fontWeight: "bolder" }}>
        {name} · {shortDescription}
      </h3>
      <p>{description}</p>
      <p style={{ fontSize: "1.2rem" }}>
        <a href={link}>Try it</a> – <a href={source}>Code</a>
      </p>
    </div>
  );
};

export default Project;
