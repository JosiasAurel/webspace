
import React from "react";

import { Renderer } from "../utils/render";

type Props = {
    content: string
}

const sample: string = `
# This is a simple markdown document

This simple document, can include math expressions using katex as a partial renderer.

Here is a sample math expression as a proof of concept that it is possible 

 $ \\int_2^3 $

$$
\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.
$$

If you see some cool math, then it works YAY🎉

`;
const Index: React.FC<Props> = ({ content }): JSX.Element => {
    return (
        <div>
            <h1>In Progress...</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const renderer = new Renderer("markdown");

    const renderedOutput: string = renderer.compile(String.raw({ raw: sample }));
    return {
        props: {
            content: renderedOutput
        }
    }
}
export default Index;