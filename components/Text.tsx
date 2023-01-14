import React from "react";

const Text = (props) => {
  return (
    <p style={{ fontFamily: "EB Garamond", fontSize: "1.5rem" }}>
      {" "}
      {props.children}{" "}
    </p>
  );
};

export default Text;
