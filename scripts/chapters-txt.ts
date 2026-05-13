import { mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

async function generateChapters(outputDir: string) {
  await mkdir(outputDir, { recursive: true });

  const entries = await readdir(join(outputDir, "src"), { withFileTypes: true });
  console.log(entries)
  const htmlFiles = entries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".html"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  await writeFile(join(outputDir, "chapters.txt"), htmlFiles.join("\n"), "utf8");
}

const countArg = Number(process.argv[2] ?? 21);
const count = Number.isInteger(countArg) && countArg > 0 ? countArg : 1;

const bookDir = "how-to-read-a-book"
const outputDir = join(process.cwd(), "..", bookDir);

generateChapters(outputDir).catch((error) => {
  console.error(error);
  process.exit(1);
});