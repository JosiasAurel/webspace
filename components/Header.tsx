import React from "react";
import Link from "next/link";

const Nav: React.FC = (): JSX.Element => {
  return (
    <header>
      <h2>Home</h2> 
      <nav>
        <Link href="/projects">
          Projects
        </Link>
        <Link href="/writing">
          Writing
        </Link>
      </nav>
    </header> 
  );
};

export default Nav;
