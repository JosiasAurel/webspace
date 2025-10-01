"use client";

import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';

const PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'letmein';

export default function AdminPanel() {
  const [authed, setAuthed] = useState(false);
  const [slug, setSlug] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [posts, setPosts] = useState<Array<{slug: string; title: string; date: string}>>([]);

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: '',
    autofocus: false,
    onUpdate: ({ editor }) => {
      setValue(editor.getHTML());
    },
  });

  useEffect(() => {
    const k = typeof window !== 'undefined' ? localStorage.getItem('auth-ok') : null;
    if (k === '1') setAuthed(true);
  }, []);

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const pass = String(data.get('password') || '');
    if (pass === PASSWORD) {
      setAuthed(true);
      if (typeof window !== 'undefined') localStorage.setItem('auth-ok', '1');
    } else {
      setMessage('Wrong password');
    }
  };

  const save = async () => {
    setMessage(null);
    const res = await fetch('/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': PASSWORD },
      body: JSON.stringify({ slug, content: value })
    });
    if (!res.ok) {
      setMessage('Save failed');
    } else {
      setMessage('Saved');
      await loadPosts();
    }
  };

  const upload = async (file: File) => {
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: form, headers: { 'x-admin-password': PASSWORD } });
    if (!res.ok) setMessage('Upload failed');
    else {
      const data = await res.json();
      const path = data.path as string;
      if (editor) editor.chain().focus().setImage({ src: path }).run();
      setMessage('Image uploaded');
    }
  };

  const loadPosts = async () => {
    const res = await fetch('/api/post', { headers: { 'x-admin-password': PASSWORD } });
    if (res.ok) {
      const data = await res.json();
      setPosts(data.posts);
    }
  };

  const loadOne = async (s: string) => {
    const res = await fetch(`/post/${s}`);
    if (res.ok) {
      setSlug(s);
      const txt = await res.text();
      // We cannot easily fetch raw markdown via page route; prompt user to edit existing if known.
      // As a simple approach, we just set an empty editor and inform.
      setMessage('Loaded metadata. To edit content, paste markdown or use your local file.');
    }
  };

  useEffect(() => {
    if (authed) { loadPosts(); }
  }, [authed]);

  if (!authed) {
    return (
      <form onSubmit={onLogin} style={{maxWidth:600, margin:'3rem auto', display:'grid', gap:12}}>
        <h1>Admin</h1>
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Enter</button>
        {message && <div className="muted">{message}</div>}
      </form>
    );
  }

  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside className="md:col-span-1 border rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Posts</h3>
            <button className="text-sm text-primary" onClick={()=>{ setSlug(''); editor?.commands.setContent(''); }}>New</button>
          </div>
          <ul className="space-y-1">
            {posts.map(p => (
              <li key={p.slug} className="flex items-center justify-between gap-2">
                <button className="text-left hover:underline" onClick={()=>{ setSlug(p.slug); setMessage(null); }}>
                  <div>{p.title}</div>
                  <div className="text-xs text-neutral-500">{p.date}</div>
                </button>
                <button className="text-xs text-red-600" onClick={async()=>{ await fetch(`/api/post?slug=${encodeURIComponent(p.slug)}`, { method:'DELETE', headers: { 'x-admin-password': PASSWORD } }); await loadPosts(); setMessage('Deleted'); }}>Delete</button>
              </li>
            ))}
          </ul>
        </aside>
        <section className="md:col-span-2 grid gap-3">
          <input className="border rounded px-3 py-2" value={slug} onChange={e=>setSlug(e.target.value)} placeholder="slug (e.g. new-article)" />
          <div className="border rounded-lg">
            <div className="flex items-center gap-2 border-b px-2 py-1 text-sm">
              <button onClick={()=>editor?.chain().focus().toggleBold().run()} className="px-2 py-1 hover:bg-neutral-50 rounded">Bold</button>
              <button onClick={()=>editor?.chain().focus().toggleItalic().run()} className="px-2 py-1 hover:bg-neutral-50 rounded">Italic</button>
              <button onClick={()=>editor?.chain().focus().toggleBulletList().run()} className="px-2 py-1 hover:bg-neutral-50 rounded">List</button>
              <label className="ml-auto text-primary cursor-pointer">Upload image<input className="hidden" type="file" accept="image/*" onChange={e=>{ const f=e.target.files?.[0]; if (f) upload(f); }} /></label>
            </div>
            <EditorContent editor={editor} className="prose max-w-none p-3" />
          </div>
          <div className="flex gap-2">
            <button className="bg-black text-white px-3 py-2 rounded" onClick={save}>Save</button>
          </div>
        </section>
      </div>
      {message && <div className="text-neutral-600">{message}</div>}
    </div>
  );
}
