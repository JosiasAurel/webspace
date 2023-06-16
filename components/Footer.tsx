import React from "react";
import Link from "next/link";
import Text from "./Text";

const messages = [
  "Shall we party?",
  "Cheers to another day alive!",
  "Uh, Oh!",
  "The weather is calming.",
  "You look pretty UwU",
  "You're doing a good job👍",
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
      <div>
        <a href="mailto:hey@josiasw.dev">Email</a>
        <a href="https://twitter.com/JosiasWing">Twitter</a>
        <a href="https://github.com/JosiasAurel">GitHub</a>
      </div>
    <p style={{ fontFamily: "Kalam"}}>{msg}</p>
    </footer>
  );
};

export default Footer;