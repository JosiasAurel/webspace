import React from "react";
import Link from "next/link";
import Text from "./Text";

const messages = [
  "Shall we party?",
  "Cheers to another day alive",
  "Uh, Oh!",
  "The weather is calming.",
  "You look pretty UwU",
  "You're doing a good job",
  "Coding is fun!",
  "x ∈ ℝ+",
];

const Footer: React.FC = (): JSX.Element => {
  const [msg, setMsg] = React.useState<string>(messages[0]);

  React.useEffect(() => {
    const idx = Math.floor(Math.random() * messages.length);
    setMsg(messages[idx]);
  }, []);

  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <br />
      <FooterLink
        name="Email"
        link="mailto:hey@josiasw.dev"
        specialName="hey@josiasw.dev"
      />

      <FooterLink
        name="Twitter"
        link="https://twitter.com/JosiasWing"
        specialName="@JosiasWing"
      />

      <FooterLink
        name="GitHub"
        link="https://github.com/JosiasAurel"
        specialName="@JosiasAurel"
      />

      <p>{msg}</p>
    </footer>
  );
};

function FooterLink({ name, link, specialName }): JSX.Element {
  return (
    <span
      style={{
        width: "100%",
        margin: "-1.3em 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text>{name}</Text>
      <hr
        style={{
          width: "inherit",
          margin: "0 0.5em",
          backgroundColor: "grey",
        }}
      />
      <a
        style={{
          color: "grey",
          fontSize: "1.5rem",
        }}
        href={link}
      >
        {specialName}
      </a>
    </span>
  );
}

export default Footer;
