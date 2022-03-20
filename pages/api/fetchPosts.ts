

import { NextApiRequest, NextApiResponse } from "next";

import { Deta } from "deta";

const deta = Deta(process.env.NEXT_PUBLIC_DETA_PROJECT_KEY);

const posts = deta.Base("posts");

export default async function fetchPostsHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const fetchedPosts = await (await posts.fetch()).items as Post[];
        return res.json({
            status: true,
            posts: fetchedPosts
        });
    } catch (error: any) {
        res.json({
            status: false
        });
    }

}