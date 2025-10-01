import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Roboto_Mono } from 'next/font/google';
import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

const mono = Roboto_Mono({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Webspace – Minimal Blog',
  description: 'A minimal Next.js blog powered by local markdown content.',
  other: {
    'color-scheme': 'light only',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const dots: React.ReactNode[] = [];

  const footer = React.createElement(
    'footer',
    { style: { maxWidth: 960, margin: '0 auto', padding: '2rem 1rem', color: '#888', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
    React.createElement('div', { style: { display: 'flex', gap: 12, alignItems: 'center' } },
      React.createElement(Link, { href: 'https://github.com/josiasaurel', target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'GitHub' }, React.createElement(Github, { size: 18 })),
      React.createElement(Link, { href: 'https://twitter.com/josiasaurel', target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'Twitter' }, React.createElement(Twitter, { size: 18 })),
    ),
    React.createElement('div', null,
      React.createElement(Link, { href: '/rss.xml', className: 'rss-link' }, 'RSS'),
    ),
  );

  return React.createElement(
    'html',
    { lang: 'en' },
    React.createElement(
      'body',
      { className: `${mono.className}` },
      dots,
      React.createElement('a', { href: '#content', className: 'skip-link' }, 'Skip to content'),
      React.createElement('main', { id: 'content' }, children),
      footer,
    ),
  );
}
