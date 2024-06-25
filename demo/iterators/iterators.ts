/* eslint-disable */

// Iterators offer a way to traverse the elements of a collection one by one.
// The purpose of iterators is to provide a standard way for accessing and
// iterating over collections, such as arrays or maps, in a language-agnostic
// way. Using iterators, you can iterate over collections in a loop without
// having to worry about the underlying implementation of the collection.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html

const abc = ["a", "b", "c"];

for (let i = 0; i < abc.length; i++) {
	console.log(`For loop`, abc[i]);
}

// iterator for arrays
for (const letter of abc) {
	console.log(`For of`, letter);
}

const nums = {
	one: 1,
	two: 2,
	three: 3,
};

let property: keyof typeof nums;

for (property in nums) {
	console.log(property, nums[property]);
}

nums["letter"] = "a"; //NaN

for (property in nums) {
	const answer = nums[property] * 2;
	console.log(answer);
}
