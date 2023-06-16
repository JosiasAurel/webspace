import React from "react";
import Link from "next/link";

const Nav: React.FC = (): JSX.Element => {
  return (
    <header>
      <Link href="/" style={{ textDecoration: "none" }}>
        <h2 style={{ fontFamily: "Kalam" }}>
          You home?
        </h2>
      </Link>
      <nav>
        <Link href="/projects">Projects</Link>
        <Link href="/writing">Writing</Link>
      </nav>
    </header>
  );
};

export default Nav;
