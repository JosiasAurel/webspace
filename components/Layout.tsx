
import React from "react";

const Layout: React.FC = (props): JSX.Element => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            {props.children}
        </div>
    )
}

export default Layout;