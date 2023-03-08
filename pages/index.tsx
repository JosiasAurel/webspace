import React from "react";
import Text from "../components/Text";
import Nav from "../components/Nav";
import Link from "next/link";

type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

const twoDigit = (item: number): string =>
  item < 10 ? "0" + item.toString() : item.toString();

const HomePage: React.FC = () => {
  let isPm = false;
  const [time, setTime] = React.useState<Time>(getTime());

  function getTime(): Time {
    const date = new Date();
    const hours = date.getUTCHours() + 1;
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    isPm = !(hours <= 12);

    return {
      hours: hours <= 12 ? hours : hours - 12,
      minutes,
      seconds,
    };
  }
  React.useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, []);

  return (
    <div>
      <Nav />
      <span style={{ maxHeight: "5px" }}>
        <h2
          style={{
            fontFamily: "EB Garamond",
            fontSize: "2rem",
          }}
        >
          Josias Aurel
        </h2>
        <p style={{ fontStyle: "italic", fontSize: "1.3em" }}>
          {twoDigit(time.hours)}:{twoDigit(time.minutes)}:
          {twoDigit(time.seconds)} {isPm ? "pm" : "am"} <span></span>· Yaounde,
          Cameroon
        </p>

        <p style={{ color: "grey" }}>
          crafting{" "}
          <a href="https://doodle.josiasw.dev/" style={{ fontSize: "1.4rem" }}>
            Doodle
          </a>
        </p>
      </span>

      <Text>
        I'm that guy who likes taking apart that thing and exploring those
        rabbit holes – sometimes building random stuff because it's fun.
        <br />
        Vibin' at <a href="https://hackclub.com/">HackClub</a>
      </Text>

      <Text>
        I'm a passion driven software [craftsman?] who is enthusiastic about AI
        and game development. Also a 2022 high school graduate.
      </Text>

      <Text>
        Professionally, I'm a full-stack web developer working part-time
        [PAUSED] at a local startup to help build an{" "}
        <a href="https://www.amazon.com/">Amazon</a>
        -like platform to sky-rocket the e-commerce space.
        <br />
        <br />I also contribute to{" "}
        <a href="https://github.com/hackclub/sinerider">sinerider</a>, a game
        that teaches graphing in a playful way.
      </Text>

      <Text>
        View my <Link href="/projects">projects</Link> or enjoy my{" "}
        <Link href="/writing">writing</Link>.
      </Text>

      <Text>If you catch me somewhere, don't be shy, come say hi ;)</Text>

      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text>
          <a href="mailto:hey@josiasw.dev">Email</a>
        </Text>
        <Text>
          <a href="https://twitter.com/JosiasWing">Twitter</a>
        </Text>
        <Text>
          <a href="https://github.com/JosiasAurel">GitHub</a>
        </Text>
      </footer>
    </div>
  );
};

export default HomePage;
