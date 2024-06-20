import { readFileSync } from "fs";

const args = process.argv.slice(2);

const args2 = process.argv.slice(2, 3);

console.log(args);

console.log("--");

console.log(args2);

const filename = args[0];
const searchString = args[1];

const contents = readFileSync(filename, "utf8");

const lines = contents.split("\n");

/* for (let i = 0; i < lines.length; i++) {
	if (lines[i].includes(searchString)) {
		console.log(lines[i]);
	}
} */

for (const line of lines) {
	if (line.includes(searchString)) {
		console.log(line);
	}
}

const letters = ["ts-node", "app/grep/grep.ts", "app/grep/grep.ts", "console"].slice(2, 3);



console.log(letters);
