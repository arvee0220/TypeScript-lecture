import { concat, div, failedString, slowString } from "./strings";

it('should say "Hello, world!"', () => {
	expect(concat("Hello,", " world!")).toEqual("Hello, world!");
});
