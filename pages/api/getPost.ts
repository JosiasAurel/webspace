
import { NextApiRequest, NextApiResponse } from "next";

import { Deta } from "deta";

const deta = Deta(process.env.NEXT_PUBLIC_DETA_PROJECT_KEY);

const posts = deta.Base("posts");

export default async function getPostHandler(req: NextApiRequest, res: NextApiResponse) {
    const { postURI } = req.body;
    try {
        const post = await posts.get(postURI);
        return res.json({
            status: true,
            content: post
        });

    } catch(err) {
        return res.json({
            status: false
        });
    }
}