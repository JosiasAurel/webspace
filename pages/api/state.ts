import { NextApiRequest, NextApiResponse } from "next";
import { Deta } from "deta";

const deta = Deta(process.env.NEXT_PUBLIC_DETA_PROJECT_KEY);
const state = deta.Base("state");

export default async function sendState(req: NextApiRequest, res) {
    try {
        let currentItem = await state.get("fr9jxrywtl8j");
        
        res.json({currentItem});
        
    } catch (err) {
        res.json({error: err});
    }
}