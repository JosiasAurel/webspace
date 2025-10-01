import { NextResponse } from 'next/server';
import { listPosts } from '../../lib/content';

export const revalidate = 60;

export async function GET() {
  const posts = await listPosts();
  const site = process.env.SITE_URL || 'https://example.com';
  const items = posts.map(p => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${site}/post/${p.slug}</link>
      <guid>${site}/post/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.description || ''}]]></description>
    </item>
  `).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Webspace – RSS</title>
      <link>${site}</link>
      <description>Minimal blog feed</description>
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  });
}
