/**
 * Build script: scans guides/*.json (excluding manifest.json), reads metadata.title
 * and metadata.order from each, and writes guides/manifest.json for the static page to fetch.
 * Entries are sorted by metadata.order (ascending); guides without order appear last, sorted by filename.
 * Run from repo root: node scripts/build-guides-manifest.js
 */

const fs = require('fs');
const path = require('path');

const GUIDES_DIR = path.join(__dirname, '..', 'guides');
const MANIFEST_PATH = path.join(GUIDES_DIR, 'manifest.json');
const MANIFEST_FILENAME = 'manifest.json';

function filenameToLabel(filename) {
  const base = path.basename(filename, '.json');
  return base
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildManifest() {
  const files = fs.readdirSync(GUIDES_DIR);
  const jsonFiles = files.filter(
    (f) => f.endsWith('.json') && f !== MANIFEST_FILENAME
  );

  const entries = [];
  for (const file of jsonFiles) {
    const filePath = path.join(GUIDES_DIR, file);
    let label;
    let order = Infinity;
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(content);
      label =
        data.metadata && typeof data.metadata.title === 'string'
          ? data.metadata.title
          : filenameToLabel(file);
      const o = data.metadata && data.metadata.order;
      if (typeof o === 'number' && !Number.isNaN(o)) order = o;
    } catch (err) {
      console.warn(`Warning: could not read ${file}, using filename as label`);
      label = filenameToLabel(file);
    }
    entries.push({
      value: `guides/${file}`,
      label,
      order,
      file,
    });
  }

  entries.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return a.file.localeCompare(b.file);
  });

  const output = entries.map(({ value, label }) => ({ value, label }));

  fs.writeFileSync(
    MANIFEST_PATH,
    JSON.stringify(output, null, 2),
    'utf8'
  );
  console.log(`Wrote ${output.length} guide(s) to ${MANIFEST_PATH}`);
}

buildManifest();
