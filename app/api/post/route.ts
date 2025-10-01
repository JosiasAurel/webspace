import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get('x-admin-password') || req.headers.get('authorization');
  const token = (auth || '').replace(/^Bearer\s+/i, '');
  const expected = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'letmein';
  return token === expected || auth === expected;
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { slug, content } = await req.json();
  if (!slug || !content) return NextResponse.json({ error: 'Missing slug or content' }, { status: 400 });
  const file = path.join(process.cwd(), 'content', `${slug}.md`);

  // Minimal frontmatter if absent
  const nowIso = new Date().toISOString().slice(0,10);
  const withFrontmatter = content.startsWith('---') ? content : `---\ntitle: "${slug}"\ndescription: ""\ndate: "${nowIso}"\n---\n\n${content}`;
  await fs.writeFile(file, withFrontmatter, 'utf8');
  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const contentDir = path.join(process.cwd(), 'content');
  const entries = await fs.readdir(contentDir);
  const mdFiles = entries.filter((f) => f.endsWith('.md'));
  const posts = [] as Array<{ slug: string; title: string; date: string }>;
  for (const file of mdFiles) {
    const raw = await fs.readFile(path.join(contentDir, file), 'utf8');
    const { data } = matter(raw);
    const slug = file.replace(/\.md$/, '');
    posts.push({ slug, title: String(data.title ?? slug), date: String(data.date ?? '') });
  }
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return NextResponse.json({ posts });
}

export async function DELETE(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  const file = path.join(process.cwd(), 'content', `${slug}.md`);
  try {
    await fs.unlink(file);
  } catch {}
  return NextResponse.json({ ok: true });
}
