import React from "react";
import Project from "../components/Project";
import styles from "../styles/index.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../utils/constants";

const ProjectsPage: React.FC = (): JSX.Element => {
    return (
        <div className={styles.labProjectPage}>
            <Header />
            <div className={styles.projectsCn}>
                {projects.map((project, idx) => {
                    return (
                        <Project
                            name={project.name}
                            url={project.url}
                            description={project.description}
                            state={project.state}
                        />
                    );
                })}
            </div>
            <Footer />
        </div>
    )
}



export default ProjectsPage;