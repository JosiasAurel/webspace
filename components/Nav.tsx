import React from "react";
import Link from "next/link";

const Nav: React.FC = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <h2>NDJA</h2>
      </Link>
      <span>
        <a>projects</a>
        <a>writing</a>
      </span>
    </nav>
  );
};

export default Nav;
