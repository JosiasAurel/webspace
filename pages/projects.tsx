import React from "react";
import Project from "../components/Project";

const projects = [

{
    name: "digital art",
    link: "#",
    source: "#",
    shortDescription: "Digital Math Art",
    description:
      "Digital art created on an 80x60 grid by manipulating the x and y axes as well as using time and positivity as parameters.",
    image: "/marth.png"
  },  
{
    name: "sudoku solver",
    link: "https://github.com/JosiasAurel/sudoku-solver",
    source: "https://github.com/JosiasAurel/sudoku-solver",
    shortDescription: "A brute-force sudoku solver using backtracking",
    description:
      "A fast and efficient sudoku solver written in Zig. This sudoku solver performs zero memory allocations and uses backtracking to solve sudoku games.",
    image: "/sudokus.png"
  },  {
    name: "dg",
    link: "https://github.com/JosiasAurel/dg",
    source: "https://github.com/JosiasAurel/dg",
    shortDescription: "A dictionary CLI written in Rust",
    description:
      "A CLI tool that outputs definitions. It keeps a local copy of every query you make, making it very fast if you query the same word more than once.",
    image: "/dg.png"
  },
  {
    name: "mirage",
    link: "https://github.com/JosiasAurel/mirage",
    source: "https://github.com/JosiasAurel/mirage",
    shortDescription: "An image processing CLI",
    description:
      "mirage can blur, grayscale, invert, rotate, brighten, crop and generate a julia fractal or visual representation of a random polar equation.",
    image: "/mirage.png"
  },
  {
    name: "c-md-parser",
    link: "https://github.com/JosiasAurel/c-md-parser",
    source: "https://github.com/JosiasAurel/c-md-parser",
    shortDescription: "A markdown to html converter",
    description:
      "A basic markdown to html converter written in pure C. It can also be compiled to WebAssembly and ran in a web browser. It supports only headings, blockquotes, lists, strikethrough, italic and bold text.",
    image: "cmdparser.jpg"
  },
  {
    name: "SineRider",
    link: "https://sinerider.com/",
    source: "https://github.com/hackclub/sinerider",
    shortDescription:
      "SineRider is a game about love and graphing, built by a global team of teenagers at Hack Club.",
    description:
      "SineRider is a game that immerses you into the beauty of mathematics, along with a love story. It's a special game that recalls the playful side of you, reminding us that we can learn a lot from mathematics and ourselves by just playing a great game.",
    image: "sinerider.png"
  },

  {
    name: "Buffer",
    link: "https://buffered.josiasw.dev/",
    source: "https://github.com/JosiasAurel/buffer",
    shortDescription: "A tool to share short text and links across devices.",
    description:
      "Buffer is a tool that allows me to share text and links across devices. I built it because I found myself sharing short text between my phone and computer a lot. That did not only happen while I was studying or working but also when I was away. I decided to build this app to help me do so no matter where I am. It ended up being useful to some classmates and friends and it got regular visits everyday (averagely ~18 distinct users).",
    image: "buffered.png"
  },
  {
    name: "LinksBook [discontinued]",
    link: "https://linksbook.vercel.app/",
    source: "https://github.com/JosiasAurel/linksbook",
    shortDescription: "A full-featured bookmark manager",
    description:
      "A full-featured bookmark manager written in Typescript, React, Next.js on the client and Typescript, Node.js, Python, GraphQL and FastAPI on the server. It uses deta.sh as cloud provider and some other APIs like SendGrid for emails. The project was built over a period of two months so that I could manage my articles (save, read, write summaries, remind myself via email etc) but was later turned into a product that I stopped maintaining.",
    image: "linksbook.png"
  },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <span style={{ maxHeight: "5px" }}>
        <h2
          style={{
            fontFamily: "Kalam",
            fontSize: "2.5rem",
            fontWeight: "bolder"
          }}
        >
          Projects — stuff I built, or contributed to.
        </h2>
      </span>
      <div>
        {projects.map((project, key) => (
          <Project key={key} {...project} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
