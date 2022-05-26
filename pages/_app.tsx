
import React from "react";
import "../styles/global.css";
import { AppProps } from "next/app";
import Header from "../components/Header";


const JosiasAurelDev: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default JosiasAurelDev;