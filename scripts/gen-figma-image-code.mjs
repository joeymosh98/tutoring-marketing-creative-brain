import fs from 'node:fs';

const ads = [
  {name: "2A — The Mum at the Gate", kind: "light", file: "2a-school-gate", x: 0, url: "https://36jmmzz2r8ipw93v.public.blob.vercel-storage.com/ads/2a-school-gate.png"},
  {name: "4A — The Mum Who Rang", kind: "dark", file: "4a-mum-rang", x: 1180, url: "https://36jmmzz2r8ipw93v.public.blob.vercel-storage.com/ads/4a-mum-rang.png"},
  {name: "13A — She's Not A Better Mum", kind: "light", file: "13a-kid-laptop-mum", x: 2360, url: "https://36jmmzz2r8ipw93v.public.blob.vercel-storage.com/ads/13a-kid-laptop-mum.png"},
  {name: "14B — Every Mum Has The Same Worry", kind: "dark", file: "14b-kid-headphones-session", x: 3540, url: "https://36jmmzz2r8ipw93v.public.blob.vercel-storage.com/ads/14b-kid-headphones-session.png"},
  {name: "14A — She Already Knows", kind: "light", file: "14a-mum-daughter-report", x: 4720, url: "https://36jmmzz2r8ipw93v.public.blob.vercel-storage.com/ads/14a-mum-daughter-report.png"},
  {name: "13B — Different Thursday", kind: "dark", file: "13b-laptop-session", x: 5900, url: "https://36jmmzz2r8ipw93v.public.blob.vercel-storage.com/ads/13b-laptop-session.png"},
];

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

for (let i = 0; i < ads.length; i++) {
  const a = ads[i];
  const b64 = fs.readFileSync(`/tmp/ads-small/${a.file}.jpg`).toString('base64');
  const phPrefix = a.kind === 'light' ? 'image placeholder — ' : 'bg image placeholder — ';
  const newName = (a.kind === 'light' ? 'image — ' : 'bg image — ') + a.file + '.png';

  const code =
`const B="${b64}";
function d(s){const k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";const m={};for(let i=0;i<64;i++)m[k[i]]=i;const c=s.replace(/=+$/,"");const o=new Uint8Array(Math.floor(c.length*3/4));let p=0;for(let i=0;i<c.length;i+=4){const a=m[c[i]],b=m[c[i+1]],x=m[c[i+2]],y=m[c[i+3]];o[p++]=(a<<2)|(b>>4);if(x!==undefined)o[p++]=((b&15)<<4)|(x>>2);if(y!==undefined)o[p++]=((x&3)<<6)|y;}return o;}
const img=figma.createImage(d(B));
const pg=await figma.getNodeByIdAsync("4555:711");
if(pg&&pg.type==="PAGE")await figma.setCurrentPageAsync(pg);
const adFrame=figma.currentPage.findOne(n=>n.type==="FRAME"&&n.name==="${esc(a.name)}");
if(!adFrame)throw new Error("ad not found");
const ph=adFrame.findOne(n=>n.type==="FRAME"&&n.name.indexOf("${phPrefix}")===0);
if(!ph)throw new Error("ph not found");
for(const c of [...ph.children])if(c.type==="TEXT")c.remove();
if(ph.layoutMode&&ph.layoutMode!=="NONE")ph.layoutMode="NONE";
ph.fills=[{type:"IMAGE",scaleMode:"FILL",imageHash:img.hash}];
ph.name="${newName}";
await figma.loadFontAsync({family:"Inter",style:"Medium"});
const lbl=figma.createText();
lbl.name="blob-url: ${esc(a.name)}";
lbl.fontName={family:"Inter",style:"Medium"};
lbl.fontSize=18;
lbl.characters="${a.url}";
lbl.fills=[{type:"SOLID",color:{r:0.4,g:0.45,b:0.5}}];
figma.currentPage.appendChild(lbl);
lbl.x=${a.x};
lbl.y=1374;`;

  const oneLine = code.replace(/\n/g, ' ');
  fs.writeFileSync(`/tmp/fig-code-${i}.js`, oneLine);
  console.log(`${i}: ${a.name} — ${oneLine.length} chars`);
}
