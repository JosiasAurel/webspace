import React from "react";

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
      <p
        style={{
          fontSize: "1.5em",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "2.5em", color: "#7cf29b"}}>·</span>
        <span style={{ fontSize: "2.5em", color: "#2151ff"}}>·</span>
        <span style={{ fontSize: "2.5em", color: "#ff2e77"}}>·</span>
      </p>
      <p style={{ textAlign: "center", fontSize: "1.2em" }}>Thank you for visiting my space on the internet. | {msg}</p>
    </footer>
  );
};

export default Footer;
