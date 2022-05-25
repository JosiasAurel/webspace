
import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_BLOG_INTEGRATION_KEY
});

export {
    notion
};