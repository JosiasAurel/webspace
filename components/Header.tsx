import React from "react";
import Link from "next/link";

const Nav: React.FC = (): JSX.Element => {
  return (
    <header>
      <Link href="/" style={{ textDecoration: "none" }}>
        <p style={{ margin: "0.5em 0", fontFamily: "Kalam", color: "black" }}>
          Josias
        </p>
      </Link>
      <nav>
        <Link href="/projects">Projects</Link>
        <Link href="/writing">Writing</Link>
      </nav>
    </header>
  );
};

export default Nav;
