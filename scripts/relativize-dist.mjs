import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const distDir = new URL('../dist/', import.meta.url).pathname;

function listHtmlFiles(dir) {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      files.push(...listHtmlFiles(path));
    } else if (entry.endsWith('.html')) {
      files.push(path);
    }
  }

  return files;
}

function prefixFor(htmlPath) {
  const rel = relative(distDir, htmlPath);
  const depth = rel.split(sep).length - 1;
  return depth === 0 ? './' : '../'.repeat(depth);
}

function rewriteLocalUrl(value, prefix) {
  if (value === '/') {
    return prefix;
  }

  const localRoots = ['/_astro/', '/assets/', '/mri/', '/panohead/', '/favicon.svg'];
  if (!localRoots.some((root) => value === root || value.startsWith(root))) {
    return value;
  }

  return prefix + value.slice(1);
}

for (const htmlPath of listHtmlFiles(distDir)) {
  const prefix = prefixFor(htmlPath);
  const html = readFileSync(htmlPath, 'utf8');
  const rewritten = html.replace(
    /\b(href|src|poster)="([^"]+)"/g,
    (_match, attr, value) => `${attr}="${rewriteLocalUrl(value, prefix)}"`,
  );

  writeFileSync(htmlPath, rewritten);
}
