import React from "react";
import Text from "../../components/Text";
import Nav from "../../components/Nav";
import Post from "../../components/Post";
import { sourcedWritings } from "../../writing/sourced";

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
        {sourcedWritings.map(writing => (
          <Post
            key={writing.title + writing.link}
            link={writing.link}
            title={writing.title}
            views={writing.views}
            host={writing.host}
          />
        ))}
      </div>

      <br />
      <br />
      <div></div>
    </div>
  );
};

export default HomePage;
