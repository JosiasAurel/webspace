
import MarkdownIt from "markdown-it";
import katex, { KatexOptions } from "katex";

import { readFileSync } from "fs";

/* types */
type CharacterPartial = {
    type: "md"|"math",
    content: string
}

class Renderer {
    private currentRenderer;
    private katexOptions: KatexOptions;

    /* Holds rendered parts of the document, with labels 
        so they are rendered depending on the block encountered.

        The blocks are stored as an array.
    */
    private partials: string[];

    constructor(renderer: "markdown"|"katex") {
        this.currentRenderer = renderer ? renderer : "markdown";
        this.katexOptions = {
            output: "mathml"
        }

    }

    switchToMarkdown(): void {
        this.currentRenderer = "markdown";
    }

    switchToKatex(): void {
        this.currentRenderer = "katex";
    }

    render(text: string): string {
        if (this.currentRenderer === "markdown") {
            return new MarkdownIt().render(text);
        }
        return katex.renderToString(text, this.katexOptions);
    }

    splitBlocksWithLabels(document: string): void {
        const seps = document.split("\n");
        console.log(seps);
    }

    parse(document: string): void {
        const lineBlocks: string[] = document.split("\n");

        for (let lineIdx: number = 0; lineIdx < lineBlocks.length; lineIdx++) {
            // if it is not a katex math block beginning
            if (lineBlocks[lineIdx].trim() !== "$$") {
                const splittedLine: string[] = lineBlocks[lineIdx].trim().split(" ");
                const linePartial: CharacterPartial[] = [];
                let previousSpecial: boolean = false;

                // make sure we split parts of the line accordingly
                for (let itemIdx: number = 0; itemIdx < splittedLine.length; itemIdx++) {
                    // is the current character on the line is not a $ and there was no previous $
                    // add to the markdown part for rendering
                    if (splittedLine[itemIdx] !== "$" && !previousSpecial) {
                        // add as markdown
                        linePartial.push({type: "md", content: splittedLine[itemIdx]});
                        // if there was a previously encountered $ but current item is not a $
                        // add to the math for rendering
                    } else if (previousSpecial && splittedLine[itemIdx] !== "$") {
                        linePartial.push({type:"math", content: splittedLine[itemIdx]});
                        // if current character is a $ and there was no previous $
                        // now there is and we move to the next character
                    } else if (splittedLine[itemIdx] === "$" && !previousSpecial) {
                        previousSpecial = true;
                        // if there was a previous $ and we encounter another $, we switch back to markdown
                    } else if (splittedLine[itemIdx] === "$" && previousSpecial){
                        previousSpecial = false;
                    }
                }

                // render the line
                const renderedLinePartial: string[] = [];
                linePartial.forEach(item => {
                    if (item.type === "md") {
                        this.switchToMarkdown();
                        renderedLinePartial.push(this.render(item.content));
                    } else if (item.type === "math") {
                        this.switchToKatex();
                        renderedLinePartial.push(this.render(item.content));
                    } else { renderedLinePartial.push(item.content) }
                });

                // add the rendered line to partials above
                this.partials.push(renderedLinePartial.join(" "));
            }
        }
    }
}

const render = new Renderer("markdown");

const content = readFileSync("./sample.md").toString();
const result = render.parse(content);

console.log(result);

export { Renderer };