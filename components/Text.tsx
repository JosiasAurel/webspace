import React from "react";

const Text = (props) => {
  return (
    <p style={{ fontFamily: "Inter", fontSize: "larger" }}>
      {" "}
      {props.children}{" "}
    </p>
  );
};

export default Text;
