/* eslint-disable */

// A `while` loop executes the body while (as long as) some boolean expression
// is `true`. It is your responsibility to manage when and how the loop exits.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

let i = 1;

// Will cause the app to crash since the value of i is not being incremented
while (i <= 5) {
	console.log(`${i}`);
	// Missing increment i += 1
}
