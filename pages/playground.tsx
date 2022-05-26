
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
const texme = require("texme");

const Playground: React.FC = (): JSX.Element => {
    const content_ = `
    
    # This is a simple markdown document

This simple document, can include math expressions using katex as a partial renderer.

Here is a sample math expression as a proof of concept that it is possible like this one $\int 4x^2 dx$ and it works fine

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

If you see some cool math, then it works YAY🎉


> Something special in here
`;

    const [content, setContent] = React.useState<string>("");
    React.useEffect(() => {
        setContent(texme.render(content_));
    });
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <Header />
            <div>
                <article>
                    {content}
                </article>
                <h1>Coming Soon...</h1>
            </div>
            <Footer />
        </div>
    )
}


export default Playground;