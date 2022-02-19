import { NextApiRequest, NextApiResponse } from "next";


export default async function sendTime(req: NextApiRequest, res) {
    console.log(req);
    try {
        const currentDate: string = new Date().toDateString();

        await res.unstable_revalidate("/time");
        console.log(currentDate);
        await res.json({ date: currentDate });
    } catch(err) {
        await res.json({date: "Failed"});
    }
    return;
}