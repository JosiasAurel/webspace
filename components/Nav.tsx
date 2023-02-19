import React from "react";
import Link from "next/link";

const Nav: React.FC = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <h2 style={{ fontFamily: "EB Garamond", color: "black" }}>NDJA</h2>
      </Link>
      <span style={{
        width: "50%"
      }}>
        <Link href="/projects">
          <p style={{ fontFamily: "EB Garamond" }}>projects</p>
        </Link>
        <Link href="/writing">
          <p style={{ fontFamily: "EB Garamond" }}>writing</p>
        </Link>
      </span>
    </nav>
  );
};

export default Nav;
