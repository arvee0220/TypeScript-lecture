/* eslint-disable */
import { strict as assert } from "assert";

// Control flow is the order in which statements are executed in a program. It
// allows programmers to control the flow of their code based on certain
// conditions or events. Control flow structures include conditional
// statements, loops, and function calls, which allow for branching and
// repetition of code.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

const answer = 2 + 2;
assert.equal(answer, 4);

if (answer > 4) {
	console.log("> 4");
}

if (answer === 4) {
	console.log("=4");
} else if (answer < 4) {
	console.log("<4");
} else {
	console.log("!4");
}

const hasTheSkills = true;
const day = "Tuesday";
const hoursWorked = 9;
const totalOvertime = 0.5;
const holidaySeason = false;

const approveWork = () => {
	if ((hasTheSkills && (day || (hoursWorked > 8 && totalOvertime < 1))) || holidaySeason) {
	} else {
	}
};

const approveMoreWork = () => {
	if (!hasTheSkills) {
		return;
	}

	if (!hasOvertimeHours(hoursWorked, totalOvertime)) {
		return;
	}

	if (!isBusyDay(day, holidaySeason)) {
	} else {
		return;
	}
};

const isBusyDay = (day: string, holidaySeason: boolean): boolean => {
	return holidaySeason || day === "Tuesday";
};

const hasOvertimeHours = (hoursWorked: number, totalOvertime: number): boolean => {
	const hasHours = hoursWorked > 8 && totalOvertime < 1;
	return hasHours;
};
