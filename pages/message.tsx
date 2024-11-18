import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function MessagePage() {
    const baseButtonText = "Send";
    const [message, setMessage] = useState("");
    const [buttonText, setButtonText] = useState(baseButtonText);
    // const { width, height } = useWindowSize();
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [displayConfetti, setDisplayConfetti] = useState(false);
    const [opacity, setOpacity] = useState(1.0);

    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, []);

    async function sendMessage(event) {
        event.preventDefault();
    
        let counter = 0;
        const loadInterval = setInterval(() => {
            counter = (counter + 1) % 4;
            setButtonText(baseButtonText + new Array(counter).fill(".").join(""));
        }, 200);
        fetch("/api/message", {
            method: "POST",
            body: JSON.stringify({
                message
            })
        }).then(response => response.json())
            .then(data => {
                clearInterval(loadInterval);
                setButtonText(baseButtonText);
                setDisplayConfetti(true)

                setInterval(() => {
                    // setOpacity(opacity - 0.1);
                }, 500);

                setTimeout(() => setDisplayConfetti(false), 5000);
               
            });

    }

    return (
    <div>
            <div>
        <h2 style={{ textAlign: "center" }}> Send an anonymous message to Josias</h2>
        <form className="anon-message" onSubmit={sendMessage}>
            <input name="" placeholder="Type your message in here..."
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                />
            <button type="submit">
                    {buttonText}
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                </button>
        </form>
        </div>

                {displayConfetti ? 
                <Confetti
                    width={width}
                    height={height}
                />
                : ""
            }
    </div>
    )
}
