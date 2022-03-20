
import { NextApiRequest, NextApiResponse } from "next";

import { Deta } from "deta";
import { INSPECT_MAX_BYTES } from "buffer";

const deta = Deta(process.env.NEXT_PUBLIC_DETA_PROJECT_KEY);

const posts = deta.Base("posts");

type Body = {
    postURI: string
}
export default async function getPostHandler(req: NextApiRequest, res: NextApiResponse) {
    const { postURI }: Body = req.body;
    try {
        const fetchedPosts = await (await posts.fetch(
                {
                    url: postURI
                }
            )
        ).items as Post[];

        if (fetchedPosts.length > 0) {
            return res.json({
                status: true,
                post: fetchedPosts[0]
            });
        } else {
            return res.json({
                status: false
            })
        }

    } catch(err) {
        return res.json({
            status: false
        });
    }
}