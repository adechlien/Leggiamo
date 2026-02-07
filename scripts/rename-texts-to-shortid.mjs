import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const TEXTS_DIR = path.join(process.cwd(), "src", "content", "texts");

// 16 bytes => 22 chars base64url (sin padding). Muy robusto.
function makeShortId() {
  return crypto.randomBytes(16).toString("base64url");
}

function isShortIdFilename(name) {
  // 22 chars base64url + .md
  return /^[A-Za-z0-9_-]{22}\.md$/.test(name);
}

function ensureIdFrontmatter(markdown, id) {
  const fm = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);

  if (!fm) {
    return `---\nid: "${id}"\n---\n\n${markdown}`;
  }

  const fmBody = fm[1];
  if (/^id:\s*/m.test(fmBody)) return markdown;

  const newBody = `id: "${id}"\n${fmBody}`;
  return markdown.replace(fm[0], `---\n${newBody}\n---\n`);
}

async function main() {
  const entries = await fs.readdir(TEXTS_DIR, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name);

  if (!files.length) {
    console.log("No .md files found in", TEXTS_DIR);
    return;
  }

  const used = new Set(
    files
      .filter(isShortIdFilename)
      .map((f) => f.replace(/\.md$/, ""))
  );

  for (const filename of files) {
    if (isShortIdFilename(filename)) continue; // ya está ok

    const full = path.join(TEXTS_DIR, filename);
    const original = await fs.readFile(full, "utf8");

    let id;
    do id = makeShortId();
    while (used.has(id));
    used.add(id);

    const updated = ensureIdFrontmatter(original, id);
    await fs.writeFile(full, updated, "utf8");

    const newName = `${id}.md`;
    await fs.rename(full, path.join(TEXTS_DIR, newName));

    console.log(`${filename} -> ${newName}`);
  }

  console.log("\nDone. Commit & push.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
