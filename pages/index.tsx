import React from "react";
import styles from "../styles/index.module.css"
import Project from "../components/Project";
import { projects } from "../constants/projects";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <>
    <main>
        <div>
            <h1 className="intro-name">hi, i'm josias</h1>
            <p>I enjoy nerding around with computers and learning new things.</p>
            <p>Besides spending a disproportionate amount of time in front of my computer screen 👨🏽‍💻, I enjoy reading (psychology, science and philosophy among others) 📚, writing ✍🏽, hiking ⛰️ and playing tennis 🎾.</p>
        </div>
        {/* <img src="/josias.jpg" alt="Josias Aurel" /> */}
    </main>

    <hr style={{
      borderTop: "1px solid #fdfdfd"
    }} />

    <div className="description">
        <p>
            I am currently working remotely as a Software Engineer at {" "} 
            <a href="https://hackclub.com/">
            {" "}
                Hack Club HQ 
            {" "}
                <svg width="25" height="25" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="256"
                            height="256">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M128 256C230.4 256 256 230.4 256 128C256 25.6 230.4 0 128 0C25.6 0 0 25.6 0 128C0 230.4 25.6 256 128 256Z"
                                fill="black" />
                        </mask>
                        <g mask="url(#mask0)">
                            <g filter="url(#filter0_ii)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M128 256C230.4 256 256 230.4 256 128C256 25.6 230.4 0 128 0C25.6 0 0 25.6 0 128C0 230.4 25.6 256 128 256Z"
                                    fill="url(#paint0_radial)" />
                            </g>
                            <g filter="url(#filter1_ddii)">
                                <path
                                    d="M115.103 48.3682C115.103 47.1299 113.989 46.1892 112.769 46.3965L81.6652 51.6777C80.7036 51.8409 80 52.6741 80 53.6494V205.085C80 206.189 80.8954 207.085 82 207.085H113.103C114.208 207.085 115.103 206.189 115.103 205.085V148.397C115.103 131.127 124.261 120.429 131.892 120.429C138.76 120.429 140.744 127.307 140.744 137.699V205.085C140.744 206.189 141.639 207.085 142.744 207.085H174C175.105 207.085 176 206.189 176 205.085V132.656C176 109.12 167.148 93.9892 144.102 93.9892C134.852 93.9892 125.825 96.2163 118.633 101.146C117.205 102.125 115.103 101.161 115.103 99.4284V48.3682Z"
                                    fill="white" />
                            </g>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_ii" x="-6" y="-6" width="268" height="268" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="6" dy="6" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="-6" dy="-6" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                            <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                        </filter>
                        <filter id="filter1_ddii" x="64" y="42.3677" width="128" height="192.717"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="12" />
                            <feGaussianBlur stdDeviation="8" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="4" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.125 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="-2" />
                            <feGaussianBlur stdDeviation="3" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.125 0" />
                            <feBlend mode="normal" in2="shape" result="effect3_innerShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="-2" />
                            <feGaussianBlur stdDeviation="3" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0.92549 0 0 0 0 0.215686 0 0 0 0 0.313726 0 0 0 0.5 0" />
                            <feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow" />
                        </filter>
                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="rotate(58.6367) scale(245.935)">
                            <stop stop-color="#FF8C37" />
                            <stop offset="1" stop-color="#EC3750" />
                        </radialGradient>
                        <clipPath id="clip0">
                            <rect width="256" height="256" fill="white" transform="translate(256) rotate(90)" />
                        </clipPath>
                    </defs>
                </svg>
            </a>
            {" "}
            while on a Gap Year. <br/>
            Previously, I worked for four (4) months as a Software Developer at a small e-commerce startup in my local
            town <i>Yaounde, Cameroon</i>. 
            <br />
            I graduated high-school in 2022 and I'm looking forward to major in Computer Science when I get into University.
        </p>
    </div>

    <div className="description">
        <p>
            On the side, I'm currently developing a tool for creative exploration in education called <a href="https://play.withdoodle.app/">Doodle</a>. 
            <br />
            <br />
            Also, I'm prototyping a new e-commerce platform called <b>Baskket</b> with a friend - will hopefully share more about that in the near future.

            <br />
            <br />
            Besides that, I'm trying to get into hardware development and embedded systems while building a drone with a
            friend and contributing to Sprig firmware.
        </p>
    </div>

    <div className="writing-section">
        <h2>Writing</h2>
        <ul>
            <li>
              <Link href="writing/automatic-social-behaviour">
                  Automatic Social Responses 
              </Link>
                <p>Why we demonstrate certain behaviours in certain groups.</p>
            </li>
            <li>
              <Link href="writing/move-slow-deliver">
                Moving Slow
              </Link>
                <p>Move slow, move better.</p>
            </li>
            <li>
              <Link href="writing/msg-to-loved-ones">
                A message to my loved ones
              </Link>
                <p>Just a Friday evening, grateful to have you!</p>
            </li>
        </ul>  
        <p>
          <Link href="/writing">
            Read more here {"->"}
          </Link>
        </p>

        <div>
          <h2>Projects — A few stuff I've worked on</h2>
          <div className={styles.projects}>
            {projects.map((project, key) => (
              <Project key={key} {...project} />
            ))}
          </div>
        </div>
        <p>Find more of my projects over on <a href="https://github.com/JosiasAurel">GitHub</a>.</p>
    </div>
    </>

  );
};

export default HomePage;
