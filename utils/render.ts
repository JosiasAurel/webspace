
const MarkdownIt = require("markdown-it");
import katex from "katex";
import { KatexOptions } from "katex";

/* types */
type ObjectPartial = {
    type: "md"|"math"
    content: string
    displayMode?: boolean
}

type ParserOutput = {
    getHTMLOutput: Function
}

class Renderer {
    private currentRenderer;
    private katexOptions: KatexOptions;

    /* Holds rendered parts of the document, with labels 
        so they are rendered depending on the block encountered.

        The blocks are stored as an array.
    */
    private partials: string[];

    constructor(renderer?: "markdown"|"katex") {
        this.currentRenderer = renderer ? renderer : "markdown";
        this.katexOptions = {
            output: "mathml"
        }
        this.partials = [];
    }

    switchToMarkdown(): void {
        this.currentRenderer = "markdown";
    }

    switchToKatex(): void {
        this.currentRenderer = "katex";
    }

    render(text: string): string {
        if (this.currentRenderer === "markdown") {
            const md = new MarkdownIt();
            return md.render(text);
        }
        return katex.renderToString(text, this.katexOptions);
    }

    compile(document: string): string {
        const lineBlocks: string[] = document.split("\n");
        const katexBlock: string[] = [];
        let isKatexMathBlock: boolean = false;
        for (let lineIdx: number = 0; lineIdx < lineBlocks.length; lineIdx++) {
            // if it is not a katex math block beginning
            if (lineBlocks[lineIdx].trim() !== "$$" && !isKatexMathBlock) {
                const splittedLine: string[] = lineBlocks[lineIdx].trim().split(" ");
                const linePartial: ObjectPartial[] = [];
                let previousSpecial: boolean = false;

                // make sure we split parts of the line accordingly
                for (let itemIdx: number = 0; itemIdx < splittedLine.length; itemIdx++) {
                    // is the current character on the line is not a $ and there was no previous $
                    // add to the markdown part for rendering
                    if (splittedLine[itemIdx] !== "$" && !previousSpecial) {
                        // add as markdown
                        if (linePartial.length > 0) {
                            linePartial[linePartial.length - 1].content = linePartial[linePartial.length - 1].content + " "+ splittedLine[itemIdx];
                        } else {
                            linePartial.push({type: "md", content: splittedLine[itemIdx]});
                        }
                        // linePartial.push({type: "md", content: splittedLine[itemIdx]});
                        // if there was a previously encountered $ but current item is not a $
                        // add to the math for rendering
                    } else if (previousSpecial && splittedLine[itemIdx] !== "$") {
                        if (linePartial[linePartial.length - 1].type === "math") {
                            linePartial[linePartial.length - 1].content = linePartial[linePartial.length - 1].content + " " + splittedLine[itemIdx];
                        } else {
                            linePartial.push({type:"math", content: splittedLine[itemIdx], displayMode: false});
                        }
                        // console.log(splittedLine[itemIdx]);
                        // if current character is a $ and there was no previous $
                        // now there is and we move to the next character
                    } else if (splittedLine[itemIdx] === "$" && !previousSpecial) {
                        previousSpecial = true;
                        // if there was a previous $ and we encounter another $, we switch back to markdown
                    } else if (splittedLine[itemIdx] === "$" && previousSpecial){
                        linePartial.push({type: "md", content: ""});
                        previousSpecial = false;
                    }
                }

                // render the line
                const renderedLinePartial: string[] = [];
                linePartial.forEach((item: ObjectPartial) => {
                    if (item.type === "md") {
                        this.switchToMarkdown();
                        const renderedMd: string = this.render(item.content);
                        renderedLinePartial.push(renderedMd);
                    } else if (item.type === "math") {
                        this.switchToKatex();
                        this.katexOptions.displayMode = item.displayMode;
                        const renderedMath: string = this.render(item.content);
                        renderedLinePartial.push(renderedMath);
                    }
                });

                // add the rendered line to partials above
                if (renderedLinePartial[0].trim() !== "") {
                    const inlineBlock = `<span style="display: flex;align-items: center;">
                        ${renderedLinePartial.join(" ")} </span>`;
                    this.partials.push(inlineBlock);
                } else {};
            } else if (lineBlocks[lineIdx].trim() === "$$" && !isKatexMathBlock) {
                isKatexMathBlock = true;
            } else if (lineBlocks[lineIdx].trim() !== "$$" && isKatexMathBlock) {
                // add the line to katex math block
                katexBlock.push(lineBlocks[lineIdx]);
            } else if (lineBlocks[lineIdx].trim() === "$$" && isKatexMathBlock) {
                isKatexMathBlock = false;
                // add the rendered line to partials
                this.katexOptions.displayMode = true;
                this.switchToKatex();
                this.partials.push(this.render(katexBlock.join("")));
            } else {
                throw new Error("Parsing Error");
            }

        
        }

        this.partials.push(`
            <style>
            .katex {
                margin: 0 4px;
            }
            </style>
        `);
        return this.partials.join(" ");
    }
}
/* 
const render = new Renderer("markdown");

const content = readFileSync("./sample.md").toString();
const result = render.compile(content);

console.log(result); */

export {
    Renderer
};