import React from "react";
import Link from "next/link";

const Nav: React.FC = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <h2 style={{ fontFamily: "EB Garamond", color: "black" }}>NDJA</h2>
      </Link>
      <span
        style={{
          width: "60%",
        }}
      >
        <Link href="/projects">
          <p style={{ fontFamily: "EB Garamond" }}>projects</p>
        </Link>
        <Link href="/writing">
          <p style={{ fontFamily: "EB Garamond" }}>writing</p>
        </Link>
        <a href="https://scrapbook.hackclub.com/JosiasAurel">
          <p style={{ fontFamily: "EB Garamond" }}>scrapbook</p>
        </a>
      </span>
    </nav>
  );
};

export default Nav;
