/* eslint-disable */
import { strict as assert } from "assert";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
const add = 1 + 1;
assert.equal(add, 2);

const sub = 1 - 1;
assert.equal(sub, 0);

const mul = 3 * 3;
assert.equal(mul, 9);

const div = 10 / 5;
assert.equal(div, 2);

const inf = 1 / 0;
assert.equal(inf, Infinity);

const nan = 0 / 0;
assert(isNaN(nan));

const mod = 10 % 3;
assert.equal(mod, 1);

const neg = -mod;
assert.equal(neg, -1);

const neg2 = -neg;
assert.equal(-neg, 1);

const expo = 2 ** 3;
assert.equal(expo, 8);

const abs = Math.abs(-5);
assert.equal(abs, 5);

const pi = Math.PI;
assert.equal(pi, 3.14)