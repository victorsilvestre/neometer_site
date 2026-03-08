import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
};

const server = createServer(async (req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (urlPath === '/') {
    urlPath = '/index.html';
  }

  // Try src/ directory first
  const srcPath = join(__dirname, 'src', urlPath);
  let filePath = null;

  try {
    const s = await stat(srcPath);
    if (s.isDirectory()) {
      const indexPath = join(srcPath, 'index.html');
      await stat(indexPath);
      filePath = indexPath;
    } else {
      filePath = srcPath;
    }
  } catch {
    // Try project root
    const rootPath = join(__dirname, urlPath);
    try {
      await stat(rootPath);
      filePath = rootPath;
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found: ' + urlPath);
      return;
    }
  }

  try {
    const data = await readFile(filePath);
    const ext = extname(filePath).toLowerCase();
    const mime = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  } catch (err) {
    res.writeHead(500);
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`✓ Neometer dev server running at http://localhost:${PORT}/`);
});
