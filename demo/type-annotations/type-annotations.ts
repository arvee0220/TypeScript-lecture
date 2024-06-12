/* eslint-disable */
import { strict as assert } from "assert";

// Type annotations are used to provide type information for variables,
// functions, and other data structures in a program. By adding type
// annotations, you can specify the expected types of data and prevent errors
// that could occur from using the wrong type. This allows for better code
// reliability, maintainability, and readability.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables

const myName = "Jayson";
const amount: number = 2 + 2;
const hello: string = `Hello ${myName}`;
const powerLevel: bigint = 9000n + 1n;
const yes: boolean = true;

const sum = (n1: number, n2: number): number => {
	const total = n1 + n2;
	return total;
};

// or

type sumFunction = (n1: number, n2: number) => number;

const sum2: sumFunction = (n1, n2) => {
	const total = n1 + n2;
	return total;
};

const addition = sum(sum2(2, 1), 3);

console.log(addition);
