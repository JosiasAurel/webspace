import React from "react";
import { AppProps } from "next/app";
import "../styles/global.css";
import "../styles/github-syntax.css";
import Footer from "../components/Footer";
import Head from "next/head";
import Nav from "../components/Header";

const JosiasWDevApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    // <div className="app">
      <div>
      <Head>
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <div className="pageContent">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
};

export default JosiasWDevApp;
