import React from "react";
import styles from "../styles/components.module.css";
import { WorkType, Project } from "../constants/projects";

const Project: React.FC<Project> = ({
  name,
  link,
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
          {name} · <span style={{ color: workType === "Personal" ? "#00df3b" : workType === "Contributor" ? "#ffd500" : "#ff0070" }}>{workType}</span>
        </h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Project;
