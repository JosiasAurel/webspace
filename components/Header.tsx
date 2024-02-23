import React from "react";
import Link from "next/link";

const Nav: React.FC = (): JSX.Element => {
  return (
    <header>
      <Link style={{ textDecoration: "none", color: "black"}} href="/">
        <h2>Birb!</h2>
      </Link>
      <nav>
        <Link href="/writing">Writing</Link>
        <a href="https://twitter.com/JosiasWing">Twitter</a>
        <a href="https://github.com/JosiasAurel">GitHub</a>
        <a href="mailto:ndjosiasaurel@gmail.com">Email</a>
      </nav>
    </header>
  );
};

export default Nav;
