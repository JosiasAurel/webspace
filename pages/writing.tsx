import React from "react";
import Text from "../components/Text";
import Nav from "../components/Nav";
import Project from "../components/Project";

const HomePage: React.FC = () => {
  return (
    <div>
      <Nav />
      <span style={{ maxHeight: "5px" }}>
        <h2
          style={{
            fontFamily: "EB Garamond",
            fontSize: "2rem",
          }}
        >
          Writing
        </h2>
      </span>
      <div>
        <h1
          style={{
            fontFamily: "EB Garamond",
            fontSize: "4rem",
          }}
        >
          Soon!
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
