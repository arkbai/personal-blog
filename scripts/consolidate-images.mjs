import { readFileSync, writeFileSync, readdirSync, copyFileSync, mkdirSync, existsSync } from 'fs';
import { join, relative, dirname, basename, extname } from 'path';
import { createHash } from 'crypto';

// ===== CONFIGURATION =====
const VAULT = process.argv[2] || 'F:/Obsidian files/MyDomain-副本';
const TARGET_DIR = 'A一次元/images';

const IMG_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.bmp', '.ico']);
const SKIP_DIRS = new Set(['.obsidian', '.trash', '.git', 'node_modules']);

// ===== HELPERS =====

function md5File(filePath) {
  return createHash('md5').update(readFileSync(filePath)).digest('hex');
}

function isImageFile(filename) {
  return IMG_EXTS.has(extname(filename).toLowerCase());
}

function* walkDir(dir) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); }
  catch { return; }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkDir(fullPath);
    } else {
      yield fullPath;
    }
  }
}

function encodePath(p) {
  return p.replace(/ /g, '%20').replace(/#/g, '%23').replace(/\?/g, '%3F');
}

// Build extension alternation for regex
const extPattern = [...IMG_EXTS].map(e => e.slice(1)).join('|'); // png|jpg|...

// ===== MAIN =====

console.log('Vault:', VAULT);
console.log('Target:', join(VAULT, TARGET_DIR));
console.log('');

// Step 1: Collect all image files
console.log('=== Step 1: Scanning for image files ===');
const allImages = [];
for (const fullPath of walkDir(VAULT)) {
  if (isImageFile(fullPath)) {
    const relPath = relative(VAULT, fullPath).replace(/\\/g, '/');
    if (relPath.startsWith(TARGET_DIR + '/')) continue;
    allImages.push({ fullPath, relPath, name: basename(fullPath) });
  }
}
console.log('Found ' + allImages.length + ' image files');

// Step 2: Compute hashes
console.log('\n=== Step 2: Computing content hashes ===');
let done = 0;
for (const img of allImages) {
  img.hash = md5File(img.fullPath);
  done++;
  if (done % 50 === 0 || done === allImages.length) {
    console.log('  Hashed ' + done + '/' + allImages.length);
  }
}

// Step 3: Build target filename mapping
console.log('\n=== Step 3: Determining final filenames ===');

const byName = new Map();
for (const img of allImages) {
  if (!byName.has(img.name)) byName.set(img.name, []);
  byName.get(img.name).push(img);
}

// hash -> final filename (for unique content)
const hashToFinal = new Map();
// original relPath -> final filename
const pathToFinal = new Map();
// filename -> final filename (only when all copies are identical)
const nameToFinal = new Map();
const finalNameSet = new Set();

let conflictCount = 0;
for (const [name, images] of byName) {
  const uniqueHashes = [...new Set(images.map(i => i.hash))];

  if (uniqueHashes.length === 1) {
    // All copies are identical
    const finalName = name;
    hashToFinal.set(uniqueHashes[0], finalName);
    finalNameSet.add(finalName);
    nameToFinal.set(name, finalName);
    for (const img of images) {
      pathToFinal.set(img.relPath, finalName);
    }
  } else {
    // Same name, different content — disambiguate with suffixes
    conflictCount++;
    const ext = extname(name);
    const baseName = basename(name, ext);
    let suffixIdx = 0;
    for (const hash of uniqueHashes) {
      let finalName;
      do {
        finalName = suffixIdx === 0 ? name : baseName + '_' + (suffixIdx + 1) + ext;
        suffixIdx++;
      } while (finalNameSet.has(finalName));

      hashToFinal.set(hash, finalName);
      finalNameSet.add(finalName);
      for (const img of images) {
        if (img.hash === hash) {
          pathToFinal.set(img.relPath, finalName);
        }
      }
      console.log('  Conflict: "' + name + '" has ' + uniqueHashes.length +
        ' versions -> "' + finalName + '" (hash: ' + hash.slice(0, 8) + '...)');
    }
  }
}

console.log('Unique images: ' + hashToFinal.size);
console.log('Ambiguous filenames: ' + conflictCount);

// Step 4: Copy images to target
console.log('\n=== Step 4: Copying images ===');
const targetFull = join(VAULT, TARGET_DIR);
if (!existsSync(targetFull)) {
  mkdirSync(targetFull, { recursive: true });
}

const copied = new Set();
let copyCount = 0;
for (const img of allImages) {
  if (copied.has(img.hash)) continue;
  copied.add(img.hash);
  const dest = join(targetFull, hashToFinal.get(img.hash));
  if (!existsSync(dest)) {
    copyFileSync(img.fullPath, dest);
    copyCount++;
  }
}
console.log('Copied ' + copyCount + ' unique images to ' + TARGET_DIR + '/');

// Step 5: Update .md references
console.log('\n=== Step 5: Updating .md files ===');

const mdFiles = [];
for (const fp of walkDir(VAULT)) {
  if (fp.endsWith('.md')) {
    mdFiles.push({ fullPath: fp, relPath: relative(VAULT, fp).replace(/\\/g, '/') });
  }
}
console.log('Found ' + mdFiles.length + ' .md files\n');

// Compile regexes dynamically for the right extensions
const wikiLinkRe = new RegExp(
  '!\\[\\[([^\\]|]+)\\.(' + extPattern + ')(?:\\|([^\\]]*))?\\]\\]', 'gi'
);
const mdImageRe = new RegExp(
  '!\\[([^\\]]*)\\]\\(([^)]+)\\.(' + extPattern + ')\\)', 'gi'
);

let totalMdModified = 0;
let totalReplaced = 0;

for (const mdFile of mdFiles) {
  let content = readFileSync(mdFile.fullPath, 'utf-8');
  let modified = false;
  let count = 0;

  // Compute relative path from THIS .md file's directory to A一次元/images/
  const mdDir = dirname(join(VAULT, mdFile.relPath));
  const makeRelUrl = (finalName) => {
    const abs = join(targetFull, finalName);
    return encodePath(relative(mdDir, abs).replace(/\\/g, '/'));
  };

  const resolveRef = (refPath) => {
    // Decode URL encoding
    let decoded = refPath;
    try { decoded = decodeURIComponent(refPath); } catch {}
    // Normalize backslashes
    decoded = decoded.replace(/\\/g, '/');

    // 1) Try exact vault-relative path match
    if (pathToFinal.has(decoded)) return pathToFinal.get(decoded);

    // 2) Try resolving relative to the .md file's directory
    const mdRelCandidate = relative(VAULT, join(mdDir, decoded)).replace(/\\/g, '/');
    if (pathToFinal.has(mdRelCandidate)) return pathToFinal.get(mdRelCandidate);

    // 3) Try filename-only match (only if unambiguous)
    const name = basename(decoded);
    if (nameToFinal.has(name)) return nameToFinal.get(name);

    // 4) Ambiguous filename — prefer the copy nearest to this .md file
    const candidates = (byName.get(name) || []);
    if (candidates.length > 0) {
      const aPref = candidates.filter(c => c.relPath.startsWith('A一次元/'));
      const chosen = aPref.length > 0 ? aPref[0] : candidates[0];
      return pathToFinal.get(chosen.relPath);
    }

    return null;
  };

  // Replace wiki links: ![[path|size]] → ![](relative/url)
  content = content.replace(wikiLinkRe, (match, pathPart, extPart, size) => {
    const imgPath = pathPart + '.' + extPart;
    const finalName = resolveRef(imgPath);
    if (!finalName) return match;

    const url = makeRelUrl(finalName);
    const alt = (size || '').trim();
    modified = true;
    count++;
    return '![' + alt + '](' + url + ')';
  });

  // Replace markdown images: ![alt](path) → ![alt](relative/url)
  content = content.replace(mdImageRe, (match, alt, pathPart, extPart) => {
    const imgPath = pathPart + '.' + extPart;
    const finalName = resolveRef(imgPath);
    if (!finalName) return match;

    const url = makeRelUrl(finalName);
    modified = true;
    count++;
    return '![' + alt + '](' + url + ')';
  });

  if (modified) {
    writeFileSync(mdFile.fullPath, content, 'utf-8');
    totalMdModified++;
    totalReplaced += count;
    console.log('  ' + mdFile.relPath + ' (' + count + ' refs)');
  }
}

console.log('\n=== Summary ===');
console.log('MD files modified: ' + totalMdModified + '/' + mdFiles.length);
console.log('Total replacements: ' + totalReplaced);
console.log('Unique images in ' + TARGET_DIR + '/: ' + copyCount);
console.log('Done!');
