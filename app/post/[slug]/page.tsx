import { getPostBySlug, getAllSlugs } from '../../../lib/content';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import styles from './post.module.css';

export const revalidate = 60;

export default async function PostPage({ params }: { params: { slug: string }}) {
  const post = await getPostBySlug(params.slug);
  if (!post) return <div>Not found</div>;
  return (
    <article className={styles.article}>
      <div style={{marginBottom:'0.75rem'}}>
        <Link href="/" className="icon-link" aria-label="Back to home">
          <ArrowLeft size={18} />
          <span className="visually-hidden">Back to home</span>
        </Link>
      </div>
      <h1>{post.title}</h1>
      <div className="muted" style={{marginBottom:'1rem'}}>{post.date}</div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          rehypeHighlight,
        ] as any}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}
