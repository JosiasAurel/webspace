import { NextApiRequest, NextApiResponse } from "next";
import { Deta } from "deta";

const deta = Deta(process.env.NEXT_PUBLIC_DETA_PROJECT_KEY);
const state = deta.Base("state");

export default async function toggleState(req: NextApiRequest, res) {
    try {
        let currentItem = await state.get("fr9jxrywtl8j");
        let item = await state.update({
            state: currentItem.state === "hyper" ? "normal" : "hyper"
        }, "fr9jxrywtl8j");

        await res.unstable_revalidate("/index");
        res.json({revalidated: true});
        
    } catch (err) {
        res.json({error: err});
    }
}