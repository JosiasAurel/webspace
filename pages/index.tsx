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
        <span style={{ display: "inline-block" }}>
          <p style={{ fontStyle: "italic", fontSize: "1.3em" }}>
            {twoDigit(time.hours)}:{twoDigit(time.minutes)}:
            {twoDigit(time.seconds)} {isPm ? "pm" : "am"} <span></span>·
            Yaounde, Cameroon
          </p>
        </span>
        <h2
          style={{
            fontFamily: "EB Garamond",
            fontSize: "2rem",
          }}
        >
          Njouondo Djimi Josias Aurel
        </h2>
        <p style={{ color: "grey" }}>
          crafting <a href="https://doodle.josiasw.dev/" style={{ fontSize: "1.4rem" }}>Doodle</a>
        </p>
      </span>

      <Text>
        I'm just a guy who likes writing code and exploring new technologies and concepts.
        I have a particular itch for trying new things and building random projects that pop in my mind.
        Sometimes they work, other times they don't -- but it's fun regardless.
        <br />
        These days I'm more into systems programming, game dev and artificial intelligence. Game development and machine learning
        particularly attracts me because of the maths. I am not very good, but it's fun to see mathematics in action.
      </Text>

      <Text>
        At the moment, I am working on a platform that encourages playful exploration while learning.
        <br />
        I have always enjoyed learning in a playful or explorative way. Some <a href="https://experiments.josiasw.dev/">not-so-good-experiments</a>.
        <br />
        There are a few more I made while in high school (which I graduated in 2022) but they were never published.
        I craved for more but having to bake a new cake for every new experiment did not sound all that fun to me.
        <br />
        So, I began building <a href="https://doodle.josiasw.dev/">Doodle</a> which I intend to show friends on April 1 (which is my birthday btw UwU).
        This is likely the 5th iteration from scratch which -- as crazy as I am -- I'm trying to hack within a one-month period and share. Let's see how it goes.
      </Text>

      <Text>
        In the meantime, I work part-time [PAUSED] at a local startup to help build an{" "}
        <a href="https://www.amazon.com/">Amazon</a>
        -like platform to sky-rocket the e-commerce space.
        <br />I also contribute to{" "}
        <a href="https://github.com/hackclub/sinerider">sinerider</a>, a game
        about the love of mathematics and graphing.
      </Text>

      <Text>
        View my <Link href="/projects">projects</Link> or enjoy my <Link href="/writing">writing</Link>.
      </Text>

      <Text>
        If you catch me somewhere, don't be shy, come say hi ;)
      </Text>

      <footer style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}>
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
