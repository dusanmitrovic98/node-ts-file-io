import fs from "fs";

export function readFile(filePath: string): string {
  return fs.readFileSync(filePath, "utf8");
}

export function writeFile(filePath: string, content: string): void {
  fs.writeFileSync(filePath, content);
}
