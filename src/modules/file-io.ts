import fs from "fs";export function readFile(filePath: string): string {  return fs.readFileSync(filePath, "utf8");}export function readFileLines(  filePath: string,  start?: number,  end?: number): string[] {  const fileContent = fs.readFileSync(filePath, "utf8");  const lines = fileContent.split("\n");  if (start !== undefined && end !== undefined) {    return lines.slice(start - 1, end);  } else if (start !== undefined && end == undefined) {    return lines.slice(start - 1, lines.length);  }  return lines;}export function writeFile(filePath: string, content: string): void {  fs.writeFileSync(filePath, content);}export async function writeFileAsync(  filePath: string,  content: string