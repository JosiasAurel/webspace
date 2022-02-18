
import React from "react";

import { Renderer } from "../utils/render";

import { readFileSync } from "fs";
type Props = {
    content: string
}

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

    const content = readFileSync(`${process.cwd()}/utils/sample.md`).toString();

    const renderedOutput: string = renderer.compile(String.raw({ raw: content }));
    return {
        props: {
            content: renderedOutput
        }
    }
}
export default Index;