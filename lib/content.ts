import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), 'content');

export async function listPosts(): Promise<Post[]> {
  const entries = await fs.readdir(CONTENT_DIR);
  const mdFiles = entries.filter((f) => f.endsWith('.md'));
  const posts: Post[] = [];
  for (const file of mdFiles) {
    const full = path.join(CONTENT_DIR, file);
    const raw = await fs.readFile(full, 'utf8');
    const { data, content } = matter(raw);
    const slug = file.replace(/\.md$/, '');
    posts.push({
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ''),
      date: String(data.date ?? ''),
      content,
    });
  }
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const file = path.join(CONTENT_DIR, `${slug}.md`);
  try {
    const raw = await fs.readFile(file, 'utf8');
    const { data, content } = matter(raw);
    return {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ''),
      date: String(data.date ?? ''),
      content,
    };
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const entries = await fs.readdir(CONTENT_DIR);
  return entries.filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));
}

export function toAbsoluteImage(src: string): string {
  if (src.startsWith('http')) return src;
  return `/images/${src.replace(/^\/+/, '')}`;
}
