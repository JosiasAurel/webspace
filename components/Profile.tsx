
import React from "react";

import styles from "../styles/components.module.css";

type Props = {
    name: string
    imagePath: string
};

const Profile: React.FC<Props> = ({ name, imagePath }) => {
    return (
        <img className={styles.profile} src={imagePath} alt={name} />
    )
}

export default Profile;