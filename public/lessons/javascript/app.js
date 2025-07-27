// src/app.js
import { add, subtract, multiply } from "./mathUtils.js"; // Note the .js extension

console.log("2 + 3 =", add(2, 3)); // Output: 2 + 3 = 5
console.log("10 - 4 =", subtract(10, 4)); // Output: 10 - 4 = 6
console.log("5 * 6 =", multiply(5, 6)); // Output: 5 * 6 = 30

// Importing PI separately
import { PI } from "./mathUtils.js";
console.log("Value of PI:", PI); // Output: Value of PI: 3.14159

// Importing with aliases
import { add as sum, subtract as diff } from "./mathUtils.js";
console.log("Aliased sum:", sum(7, 3)); // Output: Aliased sum: 10
console.log("Aliased diff:", diff(10, 2)); // Output: Aliased diff: 8
