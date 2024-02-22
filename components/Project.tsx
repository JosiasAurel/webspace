import React from "react";
import styles from "../styles/components.module.css";

type Props = {
  name: string;
  link: string;
  source?: string;
  workType: string;
  description: string;
  image: string,
};

const Project: React.FC<Props> = ({
  name,
  link,
  source,
  workType,
  description,
  image
}): JSX.Element => {
  return (
    <a className={styles.projectLink} href={link} style={{ textDecoration: "none", border: "solid 0.5px grey", margin: "0.2em", borderRadius: "8px" }}>
      <div
        className={styles.projectCard}
      >
        <img src={image} alt={name} />
        <h3>
          {name} · {workType}
        </h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Project;
