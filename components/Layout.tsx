
import React from "react";

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            {children}
        </div>
    )
}

export default Layout;