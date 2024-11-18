import { useState } from "react";
import JSConfetti from "js-confetti";

export default function MessagePage() {
    const jsConfetti = new JSConfetti();
    const baseButtonText = "Send";
    const [message, setMessage] = useState("");
    const [buttonText, setButtonText] = useState(baseButtonText);

    async function sendMessage(event) {
        event.preventDefault();
    
        let counter = 0;
        const loadInterval = setInterval(() => {
            counter = (counter + 1) % 4;
            setButtonText(baseButtonText + new Array(counter).fill(".").join(""));
        });
        fetch("/api/message", {
            method: "POST",
            body: JSON.stringify({
                message
            })
        }).then(response => response.json())
            .then(data => {
                clearInterval(loadInterval);
                setButtonText(baseButtonText);
                jsConfetti.addConfetti({
                    confettiRadius: 6
                });
            }, 200);

    }

    return (
    <div>
            <div>
        <h2 style={{ textAlign: "center" }}> Send an anonymous message to Josias</h2>
        <form class="anon-message" onSubmit={sendMessage}>
            <input name="" placeholder="Type your message in here..."
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                />
            <button type="submit">
                    {buttonText}
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                </button>
        </form>
        </div>
    </div>
    )
}
