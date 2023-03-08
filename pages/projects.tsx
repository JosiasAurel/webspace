import React from "react";
import Text from "../components/Text";
import Nav from "../components/Nav";
import Project from "../components/Project";

type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

const projects = [
  {
    name: "dg",
    link: "https://github.com/JosiasAurel/dg",
    source: "https://github.com/JosiasAurel/dg",
    shortDescription: "A dictionary CLI written in Rust",
    description:
      "A CLI tool that outputs definitions. It keeps a local copy of every query you make, making it very fast if you query the same word more than once.",
  },
  {
    name: "mirage",
    link: "https://github.com/JosiasAurel/mirage",
    source: "https://github.com/JosiasAurel/mirage",
    shortDescription: "An image processing CLI",
    description:
      "mirage can blur, grayscale, invert, rotate, brighten, crop and generate a julia fractal or visual representation of a random polar equation.",
  },
  {
    name: "c-md-parser",
    link: "https://github.com/JosiasAurel/c-md-parser",
    source: "https://github.com/JosiasAurel/c-md-parser",
    shortDescription: "A markdown to html converter",
    description:
      "A basic markdown to html converter written in pure C. It can also be compiled to WebAssembly and ran in a web browser. It supports only headings, blockquotes, lists, strikethrough, italic and bold text only.",
  },

  {
    name: "Buffer",
    link: "https://buffered.josiasw.dev/",
    source: "https://github.com/JosiasAurel/buffer",
    shortDescription: "A tool to share short text and links across devices.",
    description:
      "Buffer is a tool that allows me to share text and links across devices. I built it because I found myself sharing short text between my phone and computer a lot. That did not only happen while I was studying or working but also when I was away. I decided to build this app to help me do so no matter where I am. It ended up being useful to some classmates and friends and it got regular visits everyday (averagely ~18 distinct users).",
  },
  {
    name: "LinksBook [discontinued]",
    link: "https://linksbook.vercel.app/",
    source: "https://github.com/JosiasAurel/linksbook",
    shortDescription: "A full-featured bookmark manager",
    description:
      "A full-featured bookmark manager written in Typescript, React, Next.js on the client and Typescript, Node.js, Python, GraphQL and FastAPI on the server. It uses deta.sh as cloud provider and some other APIs like SendGrid for emails. The project was built over a period of two months so that I could manage my articles (save, read, write summaries, remind myself via email etc) but was later turned into a product that I stopped maintaining.",
  },
];

const HomePage: React.FC = () => {
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
          Projects
        </h2>
      </span>
      <div>
        {projects.map((project, key) => (
          <Project key={key} {...project} />
        ))}
      </div>

      <Text>
        More on my <a href="https://github.com/JosiasAurel">GitHub</a> profile.
      </Text>
    </div>
  );
};

export default HomePage;
