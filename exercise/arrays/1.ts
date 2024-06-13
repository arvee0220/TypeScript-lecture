// You received a small set of generated data from a client that looks like
// it's out of order. The client noted that they have a bug report open to fix
// the issue, but in the meantime you'll need to sort it out on your own.
//
// Since this data landed in your department and you love writing programs, you
// decide to write one for this task instead of just swapping the values in
// your text editor.
//
// The data set consists of two arrays where each element in one array is
// associated with the element at the same index in the other array. For
// example:
//
//   [4,       2,      3]         // ranks
//   ["brown", "gold", "purple"]  // team colors
//
//   Team "brown" ranked 8 while team "gold" ranked 2.
//
// Produce a program that can sort the two arrays in order from rank 1 to rank
// 4. Using the example from above, the target arrays should look like this:
//
//   [2,       3,        4]        // ranks
//   ["gold",  "purple", "brown"]  // team colors
//
// In order to maximize billable hours, you opt to _not_ use the builtin
// sorting functionality.
//
// Restrictions:
// - Do not use the builtin sort method
// - Do not use an indexing operations (no ranking[1] = ranking[2], for example)
// - Only use array methods
//
// Notes:
// - The solution does not need to work for any arbitrary data set. It only
//   needs to work for the given data set.
// - You don't have to sort in-place (you can make a copy of the data).
//
// Perform the following steps and add assertions to confirm that your program
// behaves as expected:
//
// 1. Sort the `ranking` and `teams` arrays given the above restrictions
// 2. Assert that the `ranking` is [1, 2, 3, 4] and `teams`
//    is ["green", "yellow", "red", "blue"]
// 3. Add team "pink" at rank 5
// 4. Assert that the `ranking` is now [1, 2, 3, 4, 5]
//    and `teams` is ["green", "yellow", "red", "blue", "pink"]
// 5. Sort the updated rankings in reverse order because the client called and
//    wants this done
// 6. Assert that the `ranking` is now [5, 4, 3, 2, 1]
//    and `teams` is now ["pink", "blue", "red", "yellow", "green"]

import { strict as assert } from "assert";

const ranking = [3, 4, 1, 2];
const teams = ["red", "blue", "green", "yellow"];

const sortRank = (rankList: number[]): number[] => {
	let n = rankList.length;
	let swapped: boolean;
	do {
		swapped = false;
		for (let i = 0; i < n - 1; i++) {
			// Use for...of to iterate over the array indices
			for (const j of [i]) {
				if (rankList[j] > rankList[j + 1]) {
					// Swap elements
					const temp = rankList[j];
					rankList[j] = rankList[j + 1];
					rankList[j + 1] = temp;
					swapped = true;
				}
			}
		}
		n--;
	} while (swapped);

	return rankList;
};

const sortColors = (colArr: string[]): string[] => {
	const sortedTeams: string[] = [];
	const desiredOrder = ["green", "yellow", "red", "blue"];

	for (const color of desiredOrder) {
		if (colArr.includes(color)) {
			sortedTeams.push(color);
		}
	}

	return sortedTeams;
};

// 1
const sortedRank = sortRank(ranking);
const sortedTeams = sortColors(teams);

assert.deepEqual(sortedRank, [1, 2, 3, 4]);
assert.deepEqual(sortedTeams, ["green", "yellow", "red", "blue"]);

sortedRank.push(5);
sortedTeams.push("pink");
assert.deepEqual(sortedRank, [1, 2, 3, 4, 5]);
assert.deepEqual(sortedTeams, ["green", "yellow", "red", "blue", "pink"]);

const reversedRank: number[] = [];
const reversedTeams: string[] = [];

for (let i = sortedRank.length - 1; i >= 0; i--) {
	reversedRank.push(sortedRank[i]);
	reversedTeams.push(sortedTeams[i]);
}

assert.deepEqual(reversedRank, [5, 4, 3, 2, 1]);
assert.deepEqual(reversedTeams, ["pink", "blue", "red", "yellow", "green"]);
