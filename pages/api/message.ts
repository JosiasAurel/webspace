import type { NextApiRequest } from "next";

export default async function sendMessage(req, res) {
	if (req.method != "POST") res.json({ message: "Please send a POST request "});

	const { message } = JSON.parse(req.body);

	// console.log("got message", typeof req.body);


	console.log(process.env.PUSHOVER_USER, process.env.PUSHOVER_TOKEN);

	try {
	const response = await fetch("https://api.pushover.net/1/messages.json", {
		method: "POST",
		headers: {
				"Content-Type": "application/json"
			},
		body: JSON.stringify({
			user: process.env.PUSHOVER_USER,
			token: process.env.PUSHOVER_TOKEN,
			message
		})
	})
		const data = await response.json();
		console.log("message sent", data);
		res.json({ ok: true });
	} catch (err) {
		console.log("failed ", err);
		res.status(500).json({ ok: false, message: err });
	}

}
