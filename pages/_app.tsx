import React from "react";
import { AppProps } from "next/app";
import "../styles/global.css";
import "../styles/github-syntax.css";
import Automata from "../components/Automata";
import Footer from "../components/Footer";

const JosiasWDevApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="app">
      <div>
        <Component {...pageProps} />
        <Footer />
      </div>
      <Automata />
    </div>
  );
};

export default JosiasWDevApp;
