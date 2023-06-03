import { readFile, readFileLines, writeFile } from "./modules/file-io.js";

// Example usage
const inputFile = "input.txt";
const outputFile = "output.txt";

// Read input file
const fileContent = readFile(inputFile);
console.log(fileContent);

// Modify content
const modifiedContent = fileContent.toUpperCase();

// Write output file
writeFile(outputFile, modifiedContent);
console.log("Output file created:", outputFile);

let array = readFileLines(inputFile);
console.log(array);

let array2 = readFileLines(inputFile, 1, 5);
console.log(array2);

let array3 = readFileLines(inputFile, 22);
console.log(array3);
