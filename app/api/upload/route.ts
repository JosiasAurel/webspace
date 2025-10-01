import { NextRequest, NextResponse } from 'next/server';
import { createWriteStream } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get('x-admin-password') || req.headers.get('authorization');
  const token = (auth || '').replace(/^Bearer\s+/i, '');
  const expected = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'letmein';
  return token === expected || auth === expected;
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const formData = await req.formData();
  const file = formData.get('file');
  if (!(file instanceof File)) return NextResponse.json({ error: 'No file' }, { status: 400 });

  const imagesDir = path.join(process.cwd(), 'public', 'images');
  try { await mkdir(imagesDir, { recursive: true }); } catch {}

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const filePath = path.join(imagesDir, file.name.replace(/[^a-zA-Z0-9._-]/g, '_'));

  await new Promise<void>((resolve, reject) => {
    const stream = createWriteStream(filePath);
    stream.on('error', reject);
    stream.on('finish', () => resolve());
    stream.end(buffer);
  });

  const publicPath = `/images/${path.basename(filePath)}`;
  return NextResponse.json({ ok: true, path: publicPath });
}
