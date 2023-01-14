import React from "react";
import { AppProps } from "next/app";
import "../styles/global.css";

const JosiasWDevApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="app">
      <Component {...pageProps} />
    </div>
  );
};

export default JosiasWDevApp;
