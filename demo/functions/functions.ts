/* eslint-disable */
import { strict as assert } from "assert";

// Functions are an essential component of programming that help organize code
// and make it more modular. A function is a block of code that can be called
// multiple times throughout a program with different inputs, allowing you to
// reuse code and save time. Functions can perform specific tasks or return
// values, and they can be used to break down complex problems into smaller,
// more manageable pieces. By using functions, you can reduce redundancy,
// improve code readability, and make it easier to maintain and update your
// code.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/functions.html

const sayHello = () => {
	console.log("hello");
};

sayHello();

const sum = (lhs: number, rhs: number): number => {
	return lhs + rhs;
};

const answer = sum(10, 20);
console.log(answer);

const answer2 = sum(answer, 20);
console.log(answer2);

assert.equal(answer2, 50);
