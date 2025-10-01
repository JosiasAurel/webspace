import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { listPosts } from '../lib/content';
import fs from 'node:fs/promises';
import path from 'node:path';
import Image from 'next/image';

export const revalidate = 60;

export default async function HomePage() {
  const posts = await listPosts();
  const indexPath = path.join(process.cwd(), 'index.html');
  let personal: string | null = null;
  try {
    const html = await fs.readFile(indexPath, 'utf8');
    const match = html.match(/<body>[\s\S]*?(?=<h1>\s*Writing\s*<\/h1>)/i);
    personal = match ? match[0].replace(/<\/?body[^>]*>/gi, '') : null;
    if (personal) personal = personal.replace(/<h1[\s\S]*?<\/h1>/i, '');
  } catch {}

  return (
    <div>
      <section className="stack">
        <h1 className="visually-hidden">Josias</h1>
        <div style={{margin:'0.5rem 0 1rem'}}>
          <Image src="/bocci-profile.webp" alt="Josias" width={150} height={150} className="avatar" />
        </div>
        {personal ? (
          <div className="intro-copy" dangerouslySetInnerHTML={{ __html: personal }} />
        ) : (
          <div className="intro-copy">
            <p>I'm Josias — a generalist who enjoys building simple tools and small, joyful web things.</p>
            <p>You can reach me at <a href="mailto:hey@josiasw.dev">hey@josiasw.dev</a>.</p>
          </div>
        )}

        <h2 id="writing" className="section-title">Writing</h2>
        <ul className="post-list">
          {posts.map((p) => (
            <li className="post-item" key={p.slug}>
              <div className="post-main">
                <Link className="post-link" href={`/post/${p.slug}`}>
                  <span className="post-title">{p.title}</span>
                  <span className="link-arrow" aria-hidden>
                    <ArrowRight size={16} />
                  </span>
                </Link>
                {p.description && (
                  <div className="post-desc muted">{p.description}</div>
                )}
              </div>
              {p.date && <time className="post-date muted">{p.date}</time>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
