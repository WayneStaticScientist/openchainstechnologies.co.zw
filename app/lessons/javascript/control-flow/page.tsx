import React from "react";
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";

export const metadata = {
  title:
    "JavaScript Control Flow: Conditionals and Loops - OpenChains Technologies",
  description:
    "Master JavaScript control flow with detailed explanations of if/else, switch, for, while, do-while, for...in, for...of, and advanced loop techniques. Learn to make your code intelligent and efficient.",
  openGraph: {
    title:
      "JavaScript Control Flow: Conditionals and Loops - OpenChains Technologies",
    description:
      "Master JavaScript control flow with detailed explanations of if/else, switch, for, while, do-while, for...in, for...of, and advanced loop techniques. Learn to make your code intelligent and efficient.",
    url: `${baseUrl}/lessons/javascript/control-flow`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JavaScript Control Flow: Conditionals and Loops - OpenChains Technologies",
    description:
      "Master JavaScript control flow with detailed explanations of if/else, switch, for, while, do-while, for...in, for...of, and advanced loop techniques. Learn to make your code intelligent and efficient.",
  },
  keywords: [
    "JavaScript control flow",
    "JavaScript conditionals",
    "if else statement JavaScript",
    "switch statement JavaScript",
    "JavaScript loops",
    "for loop JavaScript",
    "while loop JavaScript",
    "do while loop JavaScript",
    "for...in loop",
    "for...of loop",
    "loop control statements",
    "break continue JavaScript",
    "nested loops",
    "ternary operator",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/control-flow`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: if, else if, else
const section1 = `let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("It's a pleasant day.");
} else {
  console.log("It's a bit chilly.");
}
// Output for temperature = 25: It's a pleasant day.

let isRaining = true;
if (isRaining) {
  console.log("Remember your umbrella!");
}

let score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// Output for score = 75: Grade: C
`;

// Code example 2: Ternary Operator
const section2 = `let age = 20;
let legalStatus = (age >= 18) ? "Adult" : "Minor";
console.log("Legal status:", legalStatus); // Output: Legal status: Adult

let isMember = false;
let discount = isMember ? 0.10 : 0.05; // 10% discount for members, 5% for non-members
console.log("Discount:", discount); // Output: Discount: 0.05

let userRole = "admin";
let accessLevel = (userRole === "admin") ? "Full Access" :
                  (userRole === "editor") ? "Edit Only" :
                  "Read Only";
console.log("Access Level:", accessLevel); // Output: Access Level: Full Access
`;

// Code example 3: switch Statement
const section3 = `let dayOfWeek = "Wednesday";
let activity;

switch (dayOfWeek) {
  case "Monday":
    activity = "Start of the work week.";
    break;
  case "Tuesday":
  case "Wednesday": // Fall-through for Tuesday and Wednesday
    activity = "Mid-week tasks.";
    break;
  case "Thursday":
    activity = "Almost there!";
    break;
  case "Friday":
    activity = "Weekend is near!";
    break;
  case "Saturday":
  case "Sunday":
    activity = "Relax and enjoy!";
    break;
  default:
    activity = "Unknown day.";
}
console.log(dayOfWeek + ": " + activity); // Output: Wednesday: Mid-week tasks.

let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("It's a red or green fruit.");
    // No break here, so it will fall through to the next case
  case "banana":
    console.log("It's a yellow fruit.");
    break; // This break prevents further fall-through
  case "orange":
    console.log("It's an orange citrus fruit.");
    break;
  default:
    console.log("Unknown fruit.");
}
// Output for fruit = "apple":
// It's a red or green fruit.
// It's a yellow fruit.
`;

// Code example 4: for Loop
const section4 = `// Basic for loop: Counting from 0 to 4
console.log("--- Basic for loop ---");
for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}
// Output: 0, 1, 2, 3, 4

// Looping through an array
console.log("\\n--- Looping through an array ---");
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}
// Output: Fruit: apple, Fruit: banana, Fruit: cherry

// Looping backwards
console.log("\\n--- Looping backwards ---");
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}
// Output: 5, 4, 3, 2, 1

// Omitting parts of the for loop (be careful!)
console.log("\\n--- Omitting parts (infinite loop potential) ---");
let j = 0;
for (; j < 3; j++) { // Initialization omitted
  console.log("J value:", j);
}
// Output: 0, 1, 2

let k = 0;
for (; k < 3;) { // Increment omitted
  console.log("K value (before increment):", k);
  k++; // Must increment manually or it's infinite
}
// Output: 0, 1, 2
`;

// Code example 5: while Loop
const section5 = `// Basic while loop: Counting to 3
console.log("--- Basic while loop ---");
let count = 0;
while (count < 3) {
  console.log("Count is:", count);
  count++; // Important: increment to avoid infinite loop
}
// Output: Count is: 0, Count is: 1, Count is: 2

// Using while for user input (conceptual)
/*
let userInput = "";
while (userInput !== "quit") {
  userInput = prompt("Enter 'quit' to exit:"); // In a browser environment
  console.log("You entered:", userInput);
}
console.log("Exited loop.");
*/

// Simulating a game retry mechanism
console.log("\\n--- Game Retry Simulation ---");
let lives = 3;
while (lives > 0) {
  console.log("You have " + lives + " lives left.");
  // Simulate game attempt (e.g., if (playerFails) { lives--; })
  lives--; // For demonstration, decrement lives
  if (lives === 0) {
    console.log("Game Over!");
  }
}
// Output: You have 3 lives left., You have 2 lives left., You have 1 lives left., Game Over!
`;

// Code example 6: do...while Loop
const section6 = `// Basic do...while loop: Always executes at least once
console.log("--- Basic do...while loop ---");
let i = 0;
do {
  console.log("Value of i (do-while):", i);
  i++;
} while (i < 3);
// Output: Value of i (do-while): 0, Value of i (do-while): 1, Value of i (do-while): 2

// What if the condition is initially false?
console.log("\\n--- Condition initially false ---");
let x = 5;
do {
  console.log("Value of x (do-while, condition false):", x);
  x++;
} while (x < 5);
// Output: Value of x (do-while, condition false): 5
// The loop body executed once, even though x < 5 was false immediately.
`;

// Code example 7: for...in Loop (Objects)
const section7 = `// Iterating over object properties
console.log("--- for...in with an Object ---");
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// firstName: John
// lastName: Doe
// age: 30
// city: New York

// for...in with an Array (Generally NOT recommended)
console.log("\\n--- for...in with an Array (Caution!) ---");
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log("Index:", index, "Value:", colors[index]);
}
// Output:
// Index: 0 Value: red
// Index: 1 Value: green
// Index: 2 Value: blue
// Note: This iterates over string keys ("0", "1", "2") and can include inherited properties.
`;

// Code example 8: for...of Loop (Iterables - Arrays, Strings, etc.)
const section8 = `// Iterating over array elements (Recommended for arrays)
console.log("--- for...of with an Array ---");
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}
// Output:
// Fruit: apple
// Fruit: banana
// Fruit: cherry

// Iterating over a string (characters)
console.log("\\n--- for...of with a String ---");
const message = "Hello";
for (const char of message) {
  console.log("Character:", char);
}
// Output:
// Character: H
// Character: e
// Character: l
// Character: l
// Character: o

// for...of with a Set (ES6 Set object)
console.log("\\n--- for...of with a Set ---");
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4]);
for (const num of uniqueNumbers) {
  console.log("Unique Number:", num);
}
// Output:
// Unique Number: 1
// Unique Number: 2
// Unique Number: 3
// Unique Number: 4

// for...of with a Map (ES6 Map object)
console.log("\\n--- for...of with a Map ---");
const userRoles = new Map([
  ["Alice", "Admin"],
  ["Bob", "Editor"],
  ["Charlie", "Viewer"]
]);
for (const [name, role] of userRoles) { // Destructuring assignment
  console.log(name + " has role: " + role);
}
// Output:
// Alice has role: Admin
// Bob has role: Editor
// Charlie has role: Viewer
`;

// Code example 9: break and continue
const section9 = `// Using 'break' to exit a loop early
console.log("--- Using 'break' ---");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Reached 5, breaking loop.");
    break; // Exits the loop entirely
  }
  console.log("Current number (break):", i);
}
// Output: 0, 1, 2, 3, 4, Reached 5, breaking loop.

// Using 'continue' to skip an iteration
console.log("\\n--- Using 'continue' ---");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) { // If i is even
    console.log("Skipping even number:", i);
    continue; // Skips the rest of this iteration, goes to next i
  }
  console.log("Current odd number (continue):", i);
}
// Output:
// Skipping even number: 0
// Current odd number (continue): 1
// Skipping even number: 2
// Current odd number (continue): 3
// Skipping even number: 4
// Current odd number (continue): 5
// Skipping even number: 6
// Current odd number (continue): 7
// Skipping even number: 8
// Current odd number (continue): 9
`;

// Code example 10: Nested Loops
const section10 = `// Printing a multiplication table (2x2)
console.log("--- Nested Loops: Multiplication Table (2x2) ---");
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(\`\${i} * \${j} = \${i * j}\`);
  }
}
// Output:
// 1 * 1 = 1
// 1 * 2 = 2
// 2 * 1 = 2
// 2 * 2 = 4

// Creating a simple grid/pattern
console.log("\\n--- Nested Loops: Simple Grid ---");
const rows = 3;
const cols = 3;
for (let i = 0; i < rows; i++) {
  let rowOutput = "";
  for (let j = 0; j < cols; j++) {
    rowOutput += "(*) "; // Build string for each row
  }
  console.log(rowOutput);
}
// Output:
// (*) (*) (*)
// (*) (*) (*)
// (*) (*) (*)

// Nested loop with break/continue (using labels - advanced)
console.log("\\n--- Nested Loops with Labels (Advanced) ---");
outerLoop: // Label for the outer loop
for (let i = 1; i <= 3; i++) {
  innerLoop: // Label for the inner loop
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      console.log("Breaking inner loop at i=2, j=2");
      break innerLoop; // Exits only the inner loop
    }
    if (i === 3 && j === 1) {
      console.log("Continuing outer loop at i=3, j=1");
      continue outerLoop; // Skips rest of inner loop AND current outer loop iteration
    }
    console.log(\`i: \${i}, j: \${j}\`);
  }
}
// Output:
// i: 1, j: 1
// i: 1, j: 2
// i: 1, j: 3
// i: 2, j: 1
// Breaking inner loop at i=2, j=2
// Continuing outer loop at i=3, j=1
`;

export default function JavascriptControlFlowPage() {
  const page = 3; // This is the fourth page in the JavaScript tutorial series

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/C8A2C8/4B0082?text=JavaScript+Control+Flow:+Conditionals+and+Loops"
              alt="JavaScript Control Flow Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              JavaScript Control Flow: Making Your Code Smart & Repetitive! 🚦🔄
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              You've mastered variables, data types, and operators – the
              fundamental building blocks. Now, it's time to teach your code to
              **think** and **repeat**. **Control flow** statements allow you to
              execute different blocks of code based on conditions
              (**conditionals**) or to execute a block of code multiple times
              (**loops**). This is where your programs become truly dynamic and
              powerful!
            </p>
            ---
            {/* Introduction to Control Flow */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                What is Control Flow? Guiding Your Code's Journey 🗺️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Normally, JavaScript code runs line by line, from top to bottom.
                **Control flow** statements change this default execution order.
                They allow your program to:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  **Make Decisions:** Execute specific code only when certain
                  conditions are met. (Conditionals)
                </li>
                <li>
                  **Repeat Actions:** Execute a block of code repeatedly until a
                  condition is no longer met. (Loops)
                </li>
              </ul>
            </section>
            ---
            {/* Conditionals */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-blue-400! tw:pb-2!">
                Part 1: Conditionals - Making Decisions 🚦
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Conditionals allow your program to choose different paths of
                execution based on whether a condition is `true` or `false`.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. The `if`, `else if`, and `else` Statement (The Most Common)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `if` statement is the most basic control flow statement. It
                executes a block of code if a specified condition is `true`.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `if (condition)`:
                  </strong>{" "}
                  The code inside the `if` block will execute only if the
                  `condition` (an expression that evaluates to `true` or
                  `false`) is `true`.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `else if (anotherCondition)`:
                  </strong>{" "}
                  This is optional and allows you to test multiple conditions.
                  If the first `if` condition is `false`, it checks the `else
                  if` condition. You can have multiple `else if` blocks.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `else`:
                  </strong>{" "}
                  This is also optional and provides a fallback. If none of the
                  `if` or `else if` conditions are `true`, the code inside the
                  `else` block will execute.
                </li>
              </ul>
              <div
                className="tw:bg-yellow-50! tw:border-l-4! tw:border-yellow-500! tw:text-yellow-700! tw:p-4! tw:rounded! tw:mb-6!"
                role="alert"
              >
                <p className="tw:font-bold!">
                  Curly Braces `{}` are important!
                </p>
                <p>
                  Always use curly braces for `if`, `else if`, and `else`
                  blocks, even if there's only one line of code. It prevents
                  errors and makes your code more readable and maintainable.
                </p>
              </div>
              <JavascriptViewCode code={section1} indexNumber={0} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. The Ternary (Conditional) Operator (Concise Decisions)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                We briefly covered this in the operators chapter, but it's
                crucial for conditionals. It's a shorthand for a simple
                `if-else` statement that returns a value.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  **Syntax:** `condition ? expressionIfTrue : expressionIfFalse`
                </li>
                <li>
                  This operator is best for situations where you want to assign
                  a value to a variable based on a simple condition.
                </li>
              </ul>
              <JavascriptViewCode code={section2} indexNumber={1} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                3. The `switch` Statement (Multiple Choices)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `switch` statement is an alternative to a long `if-else if`
                chain when you are checking a single variable against many
                possible discrete values. It's often cleaner and more readable
                for such scenarios.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-rose-600!">
                    `switch (expression)`:
                  </strong>{" "}
                  The `expression` (often a variable) is evaluated once.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-rose-600!">
                    `case value:`:
                  </strong>{" "}
                  JavaScript then looks for the first `case` clause whose
                  `value` matches the result of the `expression`.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-rose-600!">
                    `break;`:
                  </strong>{" "}
                  <strong className="tw:font-bold! tw:text-red-700!">
                    Crucial!
                  </strong>{" "}
                  The `break` keyword exits the `switch` statement. If you omit
                  `break`, execution will "fall through" to the next `case`,
                  which can lead to unexpected behavior (sometimes intentionally
                  used, but often a bug).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-rose-600!">
                    `default:`:
                  </strong>{" "}
                  This is optional and specifies the code to run if no `case`
                  matches the `expression`. It's like the `else` of a `switch`
                  statement.
                </li>
              </ul>
              <JavascriptViewCode code={section3} indexNumber={2} />
            </section>
            ---
            {/* Loops */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-green-400! tw:pb-2!">
                Part 2: Loops - Repeating Actions Efficiently 🔄
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Loops allow you to execute a block of code multiple times
                without writing the same code over and over. This is incredibly
                powerful for tasks like iterating through lists of data,
                performing calculations repeatedly, or generating dynamic
                content.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. The `for` Loop (Known Number of Iterations)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `for` loop is ideal when you know exactly how many times you
                want the loop to run. It has three main parts, separated by
                semicolons, within its parentheses:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `initialization`:
                  </strong>{" "}
                  Executed once before the loop starts. Typically used to
                  declare and initialize a counter variable (e.g., `let i = 0`).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `condition`:
                  </strong>{" "}
                  Evaluated before each iteration. If `true`, the loop body
                  executes. If `false`, the loop terminates.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `increment/decrement`:
                  </strong>{" "}
                  Executed after each iteration of the loop body. Typically
                  updates the counter variable (e.g., `i++`).
                </li>
              </ul>
              <JavascriptViewCode code={section4} indexNumber={3} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. The `while` Loop (Condition-Based Iterations)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `while` loop continues to execute a block of code as long as
                a specified condition remains `true`. It's best when you don't
                know in advance how many times the loop needs to run, but rather
                when it should stop based on a dynamic condition.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `while (condition)`:
                  </strong>{" "}
                  The loop continues as long as this `condition` is `true`.
                </li>
                <li>
                  <strong className="tw:font-bold! tw:text-red-700!">
                    Danger: Infinite Loops!
                  </strong>{" "}
                  If the condition inside a `while` loop never becomes `false`,
                  your program will run forever, potentially freezing the
                  browser or crashing the application. Always ensure that
                  something inside the loop body will eventually change the
                  condition to `false`.
                </li>
              </ul>
              <JavascriptViewCode code={section5} indexNumber={4} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                3. The `do...while` Loop (Guaranteed First Execution)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `do...while` loop is similar to the `while` loop, but with
                one key difference: its block of code is **always executed at
                least once**, because the condition is checked *after* the first
                iteration.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  **Syntax:** `do {/* code to execute */} while (condition);`
                </li>
                <li>
                  Useful when you need to perform an action at least once,
                  regardless of the initial condition, and then repeat it based
                  on that condition.
                </li>
              </ul>
              <JavascriptViewCode code={section6} indexNumber={5} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                4. The `for...in` Loop (Object Property Iteration - Use with
                Caution)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `for...in` loop iterates over the **enumerable properties of
                an object**. For each property, it assigns the property name (as
                a string) to a variable.
              </p>
              <div
                className="tw:bg-red-50! tw:border-l-4! tw:border-red-500! tw:text-red-700! tw:p-4! tw:rounded! tw:mb-6!"
                role="alert"
              >
                <p className="tw:font-bold!">
                  Caution with Arrays and `for...in`!
                </p>
                <p>
                  While `for...in` *can* be used with arrays, it is generally
                  **not recommended** for iterating over array elements. It
                  iterates over *property names* (which for arrays are their
                  string indices like "0", "1", "2") and can also iterate over
                  inherited properties, leading to unexpected results. Use `for`
                  or `for...of` for arrays.
                </p>
              </div>
              <JavascriptViewCode code={section7} indexNumber={6} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                5. The `for...of` Loop (Iterating Over Iterables - Modern &
                Recommended)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Introduced in ES6, the `for...of` loop is the preferred way to
                iterate over **iterable objects** (like Arrays, Strings, Maps,
                Sets, NodeLists, etc.). It iterates over the *values* of the
                iterable, not their property names/indices.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>**Syntax:** `for (variable of iterable)`</li>
                <li>
                  Much cleaner and less prone to errors than `for...in` for
                  arrays and other iterable collections.
                </li>
              </ul>
              <JavascriptViewCode code={section8} indexNumber={7} />
            </section>
            ---
            {/* Loop Control Statements */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Loop Control Statements: Guiding Loop Execution 🚦
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Sometimes you need more fine-grained control over how a loop
                executes. `break` and `continue` keywords provide this.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `break`:
                  </strong>{" "}
                  Immediately terminates the innermost loop (or `switch`
                  statement) and transfers control to the statement immediately
                  following the loop.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `continue`:
                  </strong>{" "}
                  Skips the rest of the current iteration of the innermost loop
                  and proceeds to the next iteration.
                </li>
              </ul>
              <JavascriptViewCode code={section9} indexNumber={8} />
            </section>
            ---
            {/* Advanced Loop Concepts */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-orange-400! tw:pb-2!">
                Advanced Loop Concepts: Nested Loops & Labels 🧩
              </h2>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. Nested Loops
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can place one loop inside another loop. This is called a
                **nested loop**. The inner loop will complete all its iterations
                for *each* iteration of the outer loop.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  Commonly used for working with 2D arrays (matrices),
                  generating grids, or complex patterns.
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. Labels (for `break` and `continue` with Nested Loops -
                Advanced)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                By default, `break` and `continue` only affect the innermost
                loop they are in. If you need to break out of an outer loop or
                continue an outer loop from an inner loop, you can use
                **labels**. A label is an identifier followed by a colon (`:`),
                placed before a loop.
              </p>
              <div
                className="tw:bg-blue-50! tw:border-l-4! tw:border-blue-500! tw:text-blue-700! tw:p-4! tw:rounded! tw:mb-6!"
                role="alert"
              >
                <p className="tw:font-bold!">Use Labels Sparingly!</p>
                <p>
                  While powerful, labeled `break` and `continue` can sometimes
                  make code harder to read and debug. Use them judiciously and
                  only when a clearer alternative (like restructuring your loops
                  or using functions) isn't obvious.
                </p>
              </div>
              <JavascriptViewCode code={section10} indexNumber={9} />
            </section>
            ---
            {/* What's Next? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-green-400! tw:pb-2!">
                What's Next? Functions: Reusable Code Blocks! 🚀
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You've just unlocked the ability to make your JavaScript
                programs incredibly dynamic and efficient using conditionals and
                loops. You can now build programs that respond to different
                situations and handle large amounts of data.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                In the next chapter, we'll learn about **Functions**. Functions
                are blocks of reusable code that perform a specific task,
                allowing you to organize your programs, avoid repetition, and
                build more complex applications. Get ready to write cleaner,
                more modular code!
              </p>
              <PageNavigationButtons
                next={{
                  title: JavascriptChapterFootMap[page + 1]
                    ? JavascriptChapterFootMap[page + 1].title
                    : "Next Chapter",
                  path: JavascriptChapterFootMap[page + 1]
                    ? JavascriptChapterFootMap[page + 1].path
                    : "#",
                }}
                prev={{
                  title: JavascriptChapterFootMap[page - 1]
                    ? JavascriptChapterFootMap[page - 1].title
                    : "Previous Chapter",
                  path: JavascriptChapterFootMap[page - 1]
                    ? JavascriptChapterFootMap[page - 1].path
                    : "#",
                }}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
