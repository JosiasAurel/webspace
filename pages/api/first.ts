
import {
    NextApiRequest,
    NextApiResponse
} from "next";
import { Deta } from "deta";

const deta = Deta(process.env.NEXT_PUBLIC_DETA_PROJECT_KEY);

const posts = deta.Base("posts");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const item = posts.put({
            title: "Hello World",
            publishDate: new Date().toDateString(),
            content: "Hello World",
            views: 1,
            url: "hello-world",
            description: "Just testing the stuff..."
        } as Post);

        return res.json({
            status: true,
            item
        });
    } catch(err) {
        return res.json({
            status: false
        })
    }
}