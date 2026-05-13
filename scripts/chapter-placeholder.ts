import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

async function generateChapters(count: number, outputDir: string) {
  await mkdir(outputDir, { recursive: true });

  for (let i = 1; i <= count; i++) {
    const fileName = `chapter${i}.html`;
    const filePath = join(outputDir, fileName);

    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Chapter ${i}</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Chapter ${i}</h1>
    <p>Placeholder</p>
    <a href="index.html">Back</a>
  </body>
</html>
`;

    await writeFile(filePath, html, "utf8");
  }

  console.log(`Generated ${count} files in ${outputDir}`);
}

const countArg = Number(process.argv[2] ?? 21);
const count = Number.isInteger(countArg) && countArg > 0 ? countArg : 1;

const bookDir = "how-to-read-a-book"
const outputDir = join(process.cwd(), "..", bookDir, "src");

generateChapters(count, outputDir).catch((error) => {
  console.error(error);
  process.exit(1);
});