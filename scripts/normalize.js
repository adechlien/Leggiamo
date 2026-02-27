import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "src/content/texts");

// 🔒 SOLO letras y números minúsculos
function cleanSlug(str) {
  return str
    .toLowerCase() // minúsculas
    .normalize("NFD") // separa acentos
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/[^a-z0-9]/g, ""); // elimina TODO excepto letras y números
}

function renameFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      renameFiles(fullPath);
      return;
    }

    // Solo textos
    if (!file.endsWith(".md") && !file.endsWith(".mdx")) return;

    const ext = path.extname(file);
    const name = path.basename(file, ext);

    const newSlug = cleanSlug(name);

    // Evita nombres vacíos (muy importante)
    if (!newSlug) {
      console.warn(`⚠️ Archivo ignorado (slug vacío): ${file}`);
      return;
    }

    const newName = `${newSlug}${ext}`;
    const newPath = path.join(dir, newName);

    if (file !== newName) {
      console.log(`Renombrando: ${file} → ${newName}`);
      fs.renameSync(fullPath, newPath);
    }
  });
}

renameFiles(CONTENT_DIR);
console.log("✅ Slugs limpiados: solo letras y números minúsculos");
