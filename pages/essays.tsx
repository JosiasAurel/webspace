import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
const EssaysPage: React.FC = (props: any): JSX.Element => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <Header mode={props.data.currentItem.state} />
            <h1>Coming Soon.</h1>
            <Footer />
        </div>
    )
}

export async function getStaticProps(ctx) {
    // console.log(ctx);
    const res = await fetch("http://josiasw.dev/api/state");
    // const data = await res.json();

    const data = {
        currentItem: {
            key: "",
            state: "hyper"
        }
    }

    return {
        props: {
            data
        }
    }
}

export default EssaysPage;