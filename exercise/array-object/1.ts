// A student management system requires functionality to add and remove student
// enrollments for various sections (classes). Each student has a list of
// enrollments which may have sections added or removed at any time.
//
// The faculty also needs the ability to determine how many sections any given
// student is enrolled in.
//
// Sections consist only of a section name, for example "Computer Science".
//
// Perform the following steps and add assertions to confirm that your program
// behaves as expected:
//
// 1. Add a section titled "CompSci" for `alice`
// 2. Add a section titled "Networking" for `alice`
// 3. Remove a section titled "CompSci" from `alice`
// 4. Assert that alice's enrollments consist of only "Networking"
// 5. Add a section titled "Networking" for `bob`
// 6. Assert that bob's enrollments consist of "Algorithms" and "Networking"
// 7. Assert that bob's total enrollment count is equal to 2
//
// Tips:
//
// - Create an `addSection` function to add an enrollment for a student.
// - Create a `removeSection` function to remove an enrollment from a student.
// - Create a `totalEnrollments` function to calculate the number of
//   sections a student is enrolled in.

import { strict as assert } from "assert";

type Section = string;

interface Student {
	name: string;
	enrollments: Section[];
}

const alice = {
	name: "Alice",
	enrollments: [],
};

const bob = {
	name: "Bob",
	enrollments: ["Algorithms"],
};

const addSection = (student: Student, section: Section): void => {
	if (!student.enrollments.includes(section)) {
		student.enrollments.push(section);
	} else {
		console.log(`${student.name} is already enrolled in ${section}`);
	}
};

const removeSection = (student: Student, section: Section): void => {
	student.enrollments = student.enrollments.filter((enrollment) => enrollment !== section);
};

const totalEnrollments = (student: Student): number => student.enrollments.length;

// 1.
addSection(alice, "CompSci");
assert.deepEqual(alice.enrollments, ["CompSci"]);

// 2.
addSection(alice, "Networking");
assert.deepEqual(alice.enrollments, ["CompSci", "Networking"]);

// 3.
removeSection(alice, "CompSci");

// 4.
assert.deepEqual(alice.enrollments, ["Networking"]);

// 5.
addSection(bob, "Networking");

// 6.
assert.deepEqual(bob.enrollments, ["Algorithms", "Networking"]);

// 7.
assert.deepEqual(totalEnrollments(bob), 2);

// git fetch origin solutions:solutions to check solutions.

let fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1, 3);
console.log(fruits);
