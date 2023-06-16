import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Nav: React.FC = (): JSX.Element => {
  const router = useRouter();
  console.log(router.basePath);
  return (
    <header>
      <Link href="/" style={{ textDecoration: "none"}}>
        <h2 style={{ fontFamily: "Kalam"}}>{router.basePath.length === 0 ? "You home?" : "Go home"}</h2> 
      </Link>
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
