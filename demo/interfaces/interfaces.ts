/* eslint-disable */
import { strict as assert } from "assert";

// Interfaces provide a way to define the shape of objects or classes. They
// define the contracts that objects must follow, specifying the properties and
// methods that an object must have. Interfaces make it easier to write
// type-safe code by providing a way to ensure that objects are of the correct
// shape before they are used in a program. They also allow for code to be more
// modular and reusable, since objects can be easily swapped out as long as
// they adhere to the interface's contract.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html
interface Area {
	area(): number;
}

interface Perimeter {
	perimeter(): number;
}

class Rectangle implements Area {
	length: number = 1;
	width: number = 1;

	area(): number {
		return this.length * this.width;
	}

	perimeter(): number {
		return 2 * (this.length + this.width);
	}
}

type AreaAndPerimeter = Area & Perimeter;

class Circle implements AreaAndPerimeter {
	radius: number = 4;

	area(): number {
		return Math.PI * this.radius;
	}

	perimeter(): number {
		return 2 * Math.PI * this.radius;
	}
}

const rect = new Rectangle();
rect.area();
rect.perimeter();

const circ = new Circle();

const objectsWithArea: Area[] = [rect, circ];

let iteration = 0;

for (let i = 0; i < objectsWithArea.length; i++) {
	console.log(`for loop iteration: ${iteration++}`, objectsWithArea[i].area());
}

for (let obj of objectsWithArea) {
	console.log(`for of iteration: ${iteration++}`, obj.area());
}

interface CustomerInfo {
	name: string;
}

class Customer implements CustomerInfo {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

//  prefer interface for object types
interface Address {
	street: string;
	city: string;
}

type LocalAddress = {
	street: string;
	city: string;
};

const printAddr = (address: Address) => {
	console.log(`Street name: ${address.street}, City: ${address.city}`);
};

const addr = {
	street: "name",
	city: "sample",
};

printAddr(addr);
