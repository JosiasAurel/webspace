
import MarkdownIt from "markdown-it";
import katex, { KatexOptions } from "katex";

class Renderer {
    private currentRenderer;
    private katexOptions: KatexOptions;
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
}

export { Renderer };