import { readFileSync } from "fs";

const args = process.argv.slice(2, 4);

const args2 = process.argv.slice(2);

console.log(args);

console.log("--");

console.log(args2);

const filename = args[0];
const searchString = args[1];

const contents = readFileSync(filename, "utf8");

const lines = contents.split("\n");

console.log(lines);
