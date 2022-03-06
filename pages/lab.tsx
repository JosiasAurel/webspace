import React from "react";
import Project from "../components/Project";
import styles from "../styles/index.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../utils/constants";

const ProjectsPage: React.FC = (props: any): JSX.Element => {
    return (
        <div className={styles.labProjectPage}>
            <Header mode={props.data.currentItem.state} />
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

export async function getStaticProps(ctx) {
    // console.log(ctx);
    const res = await fetch("http://josiasw.dev/api/state");
    const data = await res.json();

    // console.log(data);

    return {
        props: {
            data
        }
    }
}

export default ProjectsPage;