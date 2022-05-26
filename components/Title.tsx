
import React from "react";

type Props = {
    children: React.ReactNode
}

const Title: React.FC<Props> = ({ children }) => <h1 style={{
    fontSize: "2.5em",
    textAlign: "center",
}}>{children}</h1>;

export default Title;