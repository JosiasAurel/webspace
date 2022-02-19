import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
const EssaysPage: React.FC = (): JSX.Element => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <Header />
            <h1>Coming Soon.</h1>
            <Footer />
        </div>
    )
}

export default EssaysPage;