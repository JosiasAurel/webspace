import React from "react";
import Text from "../components/Text";
import Nav from "../components/Header";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div>
      <Nav />

      <main className="index-main">
        <img src="/josias.png" alt="josias" />
        <div>
          <h2>Hey 👋,</h2>
          <p>
            I'm <strong>Josias Aurel,</strong>
            a curiosity-driven <u>hacker</u> from Cameroon.
            Ever since I wrote my fist RPG game in windows batch script, 
            I've done a bit of coding from writing a simple OS kernel and small games to building full-stack web applications
            and machine learning models.
          </p>
        </div>
      </main>
     <Text>
        I'm that guy who likes taking apart things and and building random projects <i>just because it's fun</i> — and to quench my insatiable curiosity.
        <br />
        Proudly vibin' at <a href="https://hackclub.com/">HackClub</a>
      </Text>

      

      <Text>
        Throughout my journey, I mostly worked solo on a few side projects such as <a href="https://linksbook.vercel.app/">LinksBook</a> (now terminated).   
        I also worked at a local startup for about four months (Nov, 2022 - Feb 2023) where we built an online e-commerce marketplace similar to Amazon.
      </Text> 

      <Text>
        These days I'm mostly working on <a href="https://lingua.josiasw.dev/">Linguana</a> — a project that aims
        at creating an accessible learning platform for learning Cameroons's local languages — and <a href="https://tinker.quest/">Doodle (or Tinker Quest?)</a> — an interactive learning environment
        that makes it easier for the curious mind to explore/experiment ideas quickly. 
      </Text>

<Text>
        I take pride in the work I do and value aesthetically pleasing software experiences. I also like to take on interesting challenges, if you've any, please shoot me an email at <a href="mailto:hey@josiasw.dev">hey@josiasw.dev</a> and I'll reply, promise.
      </Text>


      <Text>If you catch me somewhere, don't be shy, come say hi.</Text>
    </div>
  );
};

export default HomePage;
