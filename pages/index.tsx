import React from "react";
import Text from "../components/Text";
import Nav from "../components/Nav";

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
        <br />I am fascinated by the engineering behind computer systems and
        Artificial Intelligence. I highly value <em>aesthetically pleasing</em>{" "}
        software solutions.
      </Text>

      <Text>
        At the moment, I personally work on building a digital space that
        enables and encourages playful exploration while learning new concepts
        (mostly regarding physics, computer science and mathematics).
      </Text>

      <Text>
        I graduated high school in the year 2022 and I am in search of further
        educational opportunities.
      </Text>

      <Text>
        In the meantime, I work at a local startup to help build an{" "}
        <a href="https://www.amazon.com/">Amazon</a>
        -like platform to skyrocket the e-commerce space.
        <br />I also contribute to{" "}
        <a href="https://github.com/hackclub/sinerider">sinerider</a>, a game
        about the love of mathematics and graphing.
      </Text>

      <Text>
        If you want to connect, shoot me an email{" "}
        <a href="mailto:hey@josiasw.dev">hey@josiasw.dev</a> or send me a direct
        message over Twitter{" "}
        <a href="https://twitter.com/JosiasWing">@JosiasWing</a>.
        <br />
        You may also find me on GitHub{" "}
        <a href="https://github.com/JosiasAurel">@JosiasAurel</a>
      </Text>
    </div>
  );
};

export default HomePage;
