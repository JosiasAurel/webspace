
import React from "react";
import Head from "next/head";
import { twitterUrl, work } from "../utils/constants";
import styles from "../styles/index.module.css";

type Props = any;

const Index: React.FC<Props> = (props): JSX.Element => {
    //console.log(props);
    return (
        <div className={styles.homePage}>
            <Head>

                <title>Josias Aurel</title>
                <meta name="title" content="Josias Aurel" />
                <meta name="description" content="" />


                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://josiasaurel.github.io/" />
                <meta property="og:title" content="Josias Aurel" />
                <meta property="og:description" content="17 y/o self-taught developer. I love building little tools, experiments, or just tinkering around on my computer. Math could be fun and emojis are cool 🏵️" />
                <meta property="og:image" content="https://og-gen.josiasaurel.github.io/Josias%20Aurel%20-%20Developer%F0%9F%8C%B1.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fraw.githubusercontent.com%2FJosiasAurel%2FJosiasAurel%2Fmaster%2Fjosias.jpg&widths=350&heights=350" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://josiasaurel.github.io/" />
                <meta property="twitter:title" content="Josias Aurel" />
                <meta property="twitter:description" content="17 y/o self-taught developer. I love building little tools, experiments, or just tinkering around on my computer. Math could be fun and emojis are cool 🏵️" />
                <meta property="twitter:image" content="https://og-gen.josiasaurel.github.io/Josias%20Aurel%20-%20Developer%F0%9F%8C%B1.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fraw.githubusercontent.com%2FJosiasAurel%2FJosiasAurel%2Fmaster%2Fjosias.jpg&widths=350&heights=350" />
                <title>Josias Aurel</title>
            </Head>
            <main>
                <div className={styles.profile}>
                    <h2> Hi 👋🏽, I'm Josias Aurel</h2>
                    <p>
                        Writing code is a medium I use to express my ideas and creativity. I like to undertake challenges and learn new things.
                        <br />
                        When I am not writing code, I am probably reading, writing or hanging out with friends. 
                        <br />
                        <br />
                        At the moment, I am finding my way in the machine learning field. 
                        <br />
                        I also appreciate game development—I may write one or two games now and then.
                        <br />
                        On the technical side, I know how to code fluently in Python, TypeScript/JavaScript. 
                        <br />
                        I am currently learning systems programming 
                        and writing WebAssembly programs
                        using Rust and C/C++.
                    </p>
                </div>
                <span>
                    <a href="https://github.com/JosiasAurel">
                        <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </a>
                    <a href={twitterUrl}>
                        <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </a>
                    <a href="mailto:ndjosiasaurel@gmail.com">
                        <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 9L12 12.5L17 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>

                    </a>
                </span>

                <div className={styles.experience}>
                    <h2>fun 🌱</h2>
                    <div>
                        {work.map(item => {
                            return (
                                <span key={item.name}>
                                    <a target="_blank" href={item.url}>{item.name}</a> <p> — {item.description}</p>
                                </span>
                            )
                        })}
                    </div>
                </div>
                <p style={{
                    display: "inline-block"
                }}> Find more stuff <a href="https://github.com/JosiasAurel">here</a>.</p>
            </main>
        </div >
    )
}

export default Index;
