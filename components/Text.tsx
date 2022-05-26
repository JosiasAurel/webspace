
import React from "react";

type Props = {
    children: React.ReactNode
}

const P: React.FC<Props> = ({ children }) => <p style={{
    fontSize: "1.2em",
    textAlign: "center"
}}>{children}</p>;

export default P;