import React from "react";

import styles from "../styles/components.module.css";


const Project: React.FC<Project> = ({ name, url, description, state }): JSX.Element => {
    return (
        <div className={styles.project}>
            <a href={url ? url : "#"}>
                <div>
                    <h2> {name} </h2>
                    <p>
                        {description}
                    </p>
                    <span style={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}>
                        <p style={{
                            color: "white",
                            backgroundColor: "black",
                            padding: "1px"
                        }}> {state} </p>
                    </span>
                </div>
            </a>
        </div>
    )
}

export default Project;