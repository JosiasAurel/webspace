import React from "react";
import styles from "../styles/index.module.css"
import Project from "../components/Project";
import { projects } from "../constants/projects";

const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <main>
        <div className={styles.headIntro}>
          <img src="/josias.jpg" alt="" />
          <div className={styles.introText}>
            <h2>Hello 👋, Josias here!</h2>
            <br />
            <p>
              I spend a disproportionate amount of time on my computer coding, reading psychology articles, creating digital art, watching anime or computing the {(1 / (8.1 * 10e9)).toPrecision(3)} probability of you reading this page.
              <br />
              <br />
              I'm the nerdy adventurous type always following my curiosity.
              <br />
              <br />
              I'm a full-time Hack Club HQ member working on a variety of projects across hardware, AI, game dev and web dev.
            </p>
          </div>
        </div>
        <p>
          At Hack Club, I work on engineering projects across game dev, web dev, systems and machine learning with an <a href="https://hackclub.com/team/">incredible team</a>. Most of our work in Open Source under <a href="https://github.com/hackclub">github.com/hackclub</a>.
          <br />
          <br />
          On the side, I'm currently building a plaform for creative exploration called <a href="https://play.withdoodle.app/">Doodle</a> and an e-commerce platform called <b>Baskket</b>.
          <br />
          <br />
          Before joining Hack Club HQ full-time, I worked on a variety of projects such as <a href="https://sinerider.com/">SineRider </a>, organised a hackathon in my local town called <a href="https://ticsummit.org/">TiC Summit</a>, and worked as a software engineer at a local e-commerce startup developing administrative type software.
          <br />
          <br />
          I graduated high-school in 2022 and yet to go to college. After graduating high-school, I joined <a href="https://www.open-dreams.org/">Open Dreams</a> where I got to meet a community of incredibly talented people and curious people.
          <br />
          <br />
        </p>

        <div>
          <h2>Projects</h2>
          <div className={styles.projects}>
            {projects.map((project, key) => (
              <Project key={key} {...project} />
            ))}
          </div>
        </div>
        <p>Find more of my projects on my <a href="https://github.com/JosiasAurel">GitHub profile</a>.</p>

        <div className={styles.sign}>
          <img src="/sign.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
