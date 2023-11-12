import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div>
      <main className="index-main">
        <div>
          <h2 style={{ fontSize: "2.5em" }}>Hey 👋,</h2>
          <p>
            I'm <strong>Josias Aurel, </strong>a curiosity-driven <u>maker</u>{" "}
            from Cameroon. I'm that guy who likes taking apart things and and building random
        projects <i style={{ fontSize: "larger" }}>just because it's fun</i>.</p>
        </div>
        <img src="/josias.png" alt="josias" />
      </main>
      <p>
        I work as a Gap Software Engineer at <a href="https://hackclub.com/">HackClub</a>
      </p>

      <p>
        Currently interested in programming, digital art, robotics and I like to understand how the world around me works.        
      </p>

      <p>
        I strive to use my skills to create quality applications that positively impacts my community and myself. 
      </p>

      <p>If I'm not coding or writing, I'm probably reading, watching anime or hanging out with friends.</p>

      <p> Checkout some of my <Link href="/projects">projects</Link> or <Link href="/writing"> posts</Link>. </p>
    </div>
  );
};

export default HomePage;
