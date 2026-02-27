/**
 * Build script: scans topic folders under guides/, then for each topic scans *.json
 * (excluding manifest.json), reads metadata.title and metadata.order, and writes:
 * - guides/topics.json
 * - guides/<topic>/manifest.json
 * Entries are sorted by metadata.order (ascending); guides without order appear last.
 * Run from repo root: node scripts/build-guides-manifest.js
 */

const fs = require('fs');
const path = require('path');

const GUIDES_DIR = path.join(__dirname, '..', 'guides');
const MANIFEST_FILENAME = 'manifest.json';
const TOPICS_FILENAME = 'topics.json';
const TOPICS_PATH = path.join(GUIDES_DIR, TOPICS_FILENAME);

function filenameToLabel(filename) {
  const base = path.basename(filename, '.json');
  return base
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function topicToLabel(topicName) {
  return topicName
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function getTopicDirectories() {
  const entries = fs.readdirSync(GUIDES_DIR, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function buildTopicManifest(topicName) {
  const topicDir = path.join(GUIDES_DIR, topicName);
  const manifestPath = path.join(topicDir, MANIFEST_FILENAME);
  const files = fs.readdirSync(topicDir, { withFileTypes: true });
  const jsonFiles = files
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((f) => f.endsWith('.json') && f !== MANIFEST_FILENAME);

  const entries = [];
  for (const file of jsonFiles) {
    const filePath = path.join(topicDir, file);
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
      value: `guides/${topicName}/${file}`,
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
    manifestPath,
    JSON.stringify(output, null, 2),
    'utf8'
  );
  console.log(`Wrote ${output.length} guide(s) to ${manifestPath}`);
}

function buildTopicsManifest(topicNames) {
  const topics = topicNames.map((topic) => ({
    value: topic,
    label: topicToLabel(topic),
  }));

  fs.writeFileSync(
    TOPICS_PATH,
    JSON.stringify(topics, null, 2),
    'utf8'
  );
  console.log(`Wrote ${topics.length} topic(s) to ${TOPICS_PATH}`);
}

function buildManifests() {
  const topicNames = getTopicDirectories();
  buildTopicsManifest(topicNames);

  for (const topicName of topicNames) {
    buildTopicManifest(topicName);
  }
}

buildManifests();
