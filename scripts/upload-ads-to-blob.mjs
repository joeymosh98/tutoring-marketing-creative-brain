import { put } from '@vercel/blob';
import fs from 'node:fs';
import path from 'node:path';

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  const env = fs.readFileSync('.env', 'utf8');
  const m = env.match(/BLOB_READ_WRITE_TOKEN="?([^"\n]+)"?/);
  if (m) process.env.BLOB_READ_WRITE_TOKEN = m[1];
}

const files = [
  '2a-school-gate.png',
  '4a-mum-rang.png',
  '13a-kid-laptop-mum.png',
  '14b-kid-headphones-session.png',
  '14a-mum-daughter-report.png',
  '13b-laptop-session.png',
];

const out = {};
for (const f of files) {
  const bytes = fs.readFileSync(path.join('ads/images', f));
  const res = await put(`ads/${f}`, bytes, {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
  out[f] = res.url;
  console.log(f, '→', res.url);
}

fs.writeFileSync('ads-blob-urls.json', JSON.stringify(out, null, 2));
console.log('\nWrote ads-blob-urls.json');
