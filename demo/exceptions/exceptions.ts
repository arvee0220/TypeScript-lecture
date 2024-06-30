/* eslint-disable */

// Exceptions are a way to handle errors and unexpected behavior in your code.
// When an exception occurs, it interrupts the normal flow of the program and
// jumps to a predefined error-handling routine. Exceptions can be used to
// catch and handle errors in a way that doesn't crash the program or cause
// unexpected behavior. Exceptions are thrown using the `throw` keyword and
// caught using the `try...catch` statement.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

const divide = (lhs: number, rhs: number): number => {
	return rhs === 0
		? (() => {
				throw new Error("Cannot divide by zero");
		  })()
		: lhs / rhs;
};

const a = divide(10, 5);
console.log(a);

try {
	const b = divide(10, 3);
	console.log(b);
} catch (e) {
	console.error(`Error: ${e}`);
} finally {
	console.log("divided some numbers");
}

const div = (lhs: number, rhs: number): number => {
	try {
		return divide(lhs, rhs);
	} catch (error) {
		console.log("This function is broken");
		throw error;
	}
};

console.log(div(20, 2));
