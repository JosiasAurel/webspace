
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Playground: React.FC = (): JSX.Element => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <Header />
            <div>
                <h1>Coming Soon...</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Playground;