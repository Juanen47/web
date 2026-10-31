// Genera los PDF del CV a partir de la página /cv/ ya construida (dist/).
// Uso: npm run build && npm run cv:pdf
// Necesita Playwright con Chromium (no es dependencia del proyecto para no
// cargar el build de Cloudflare Pages): `npm i -g playwright && npx playwright install chromium`.
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { extname, join, normalize } from 'node:path';

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  console.error('Falta Playwright: npm i -g playwright && npx playwright install chromium');
  process.exit(1);
}

const root = new URL('../dist/', import.meta.url).pathname;
const types = { '.html': 'text/html', '.css': 'text/css', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon' };

const server = createServer(async (req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (path.endsWith('/')) path += 'index.html';
  try {
    const body = await readFile(join(root, path));
    res.writeHead(200, { 'Content-Type': types[extname(path)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;

const out = new URL('../public/cv/', import.meta.url).pathname;
await mkdir(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
for (const [route, file] of [['/cv/', 'juan-enrique-lopez-cv.pdf'], ['/en/cv/', 'juan-enrique-lopez-cv-en.pdf']]) {
  await page.goto(base + route, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: join(out, file), format: 'A4', preferCSSPageSize: true, printBackground: true, tagged: true, outline: true });
  console.log('PDF:', join('public/cv', file));
}
await browser.close();
server.close();
