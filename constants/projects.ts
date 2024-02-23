export type WorkType = "Personal" | "Contributor" | "Work"

export type Project = {
  name: string
  link: string
  source: string
  workType: WorkType
  description: string
  image: string
}

export const projects: Array<Project> = [

{
    name: "Sprig",
    link: "sprig.hackclub.com",
    source: "#",
    workType: "Work",
    description: "The game console where every player is a creator. Draw, make music, and craft games in our web-based editor. Build an original game and we'll ship you a Sprig kit!",
    image: "https://sprig.hackclub.com/stories-tiny/sprig-front.jpeg"
  },
{
    name: "Scrapbook",
    link: "scrapbook.hackclub.com",
    source: "#",
    workType: "Work",
    description: "A daily diary of what Hack Clubbers are learning & making every day.",
    image: "/scrapbook.jpg"
  },  {
    name: "Digital Art",
    link: "#",
    source: "#",
    workType: "Personal",
    description:
      "I like to create digital art using maths. This art was created on an 80x60 grid by manipulating the x and y axes as well as using time and positivity as parameters.",
    image: "/marth.png"
  },  
{
    name: "sudoku solver",
    link: "https://github.com/JosiasAurel/sudoku-solver",
    source: "https://github.com/JosiasAurel/sudoku-solver",
    workType: "Personal",
    description:
      "A fast and efficient sudoku solver written in Zig. This sudoku solver performs zero memory allocations and uses backtracking to solve sudoku games.",
    image: "/sudokus.jpg"
  },
  {
    name: "c-md-parser",
    link: "https://github.com/JosiasAurel/c-md-parser",
    source: "https://github.com/JosiasAurel/c-md-parser",
    workType:"Personal",
    description:
      "A basic markdown to html converter written in pure C. It can also be compiled to WebAssembly and ran in a web browser. It supports only headings, blockquotes, lists, strikethrough, italic and bold text.",
    image: "cmdparser.jpg"
  },
  {
    name: "SineRider",
    link: "https://sinerider.com/",
    source: "https://github.com/hackclub/sinerider",
    workType: "Contributor",
    description:
      "SineRider immerses you into the beauty of mathematics, along with a love story. A special game that recalls the playful side of you, reminding us that we can learn a lot from mathematics and ourselves by just playing a great game.",
    image: "sinerider.jpg"
  },

  {
    name: "Buffer",
    link: "https://buffered.josiasw.dev/",
    source: "https://github.com/JosiasAurel/buffer",
    workType: "Personal",
    description:
      "Buffer is a tool that allows me to share text and links across devices. I built it because I found myself sharing short text between my phone and computer a lot.",
    image: "buffered.jpg"
  },
  {
    name: "LinksBook [discontinued]",
    link: "https://linksbook.vercel.app/",
    source: "https://github.com/JosiasAurel/linksbook",
    workType: "Personal",
    description:
      "A full-featured bookmark manager written. The project was built over a period of two months so that I could manage my articles (save, read, write summaries, remind myself via email etc) but was later turned into a product that I stopped maintaining.",
    image: "linksbook.jpg"
  },
];
