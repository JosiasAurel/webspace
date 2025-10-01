# Webspace – Minimal Markdown Blog (Next.js)

- Run: `npm install && npm run dev`
- Content: markdown in `content/*.md`
- Posts: `/post/[slug]`
- Admin: `/admin` (password via `NEXT_PUBLIC_ADMIN_PASSWORD`, defaults to `letmein`)
- Images: upload to `public/images` via admin, use `![](/images/filename.png)`
- RSS: `/rss.xml` (set `SITE_URL` env for absolute links)

Security note: API routes require the admin password via `x-admin-password` header. Do not expose this publicly.
