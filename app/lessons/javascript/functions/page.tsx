import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";

export const metadata = {
  title:
    "JavaScript Functions: Defining, Calling, & Advanced Concepts - OpenChains Technologies",
  description:
    "Master JavaScript functions: learn how to define and call functions, use parameters and return values, understand scope, arrow functions, higher-order functions, and closures.",
  openGraph: {
    title:
      "JavaScript Functions: Defining, Calling, & Advanced Concepts - OpenChains Technologies",
    description:
      "Master JavaScript functions: learn how to define and call functions, use parameters and return values, understand scope, arrow functions, higher-order functions, and closures.",
    url: `${baseUrl}/lessons/javascript/functions`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JavaScript Functions: Defining, Calling, & Advanced Concepts - OpenChains Technologies",
    description:
      "Master JavaScript functions: learn how to define and call functions, use parameters and return values, understand scope, arrow functions, higher-order functions, and closures.",
  },
  keywords: [
    "JavaScript functions",
    "define function",
    "call function",
    "function parameters",
    "return value",
    "function scope",
    "global scope",
    "local scope",
    "function declaration",
    "function expression",
    "arrow functions",
    "callback functions",
    "higher-order functions",
    "closures JavaScript",
    "IIFE",
    "rest parameters",
    "spread operator functions",
    "default parameters",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/functions`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Function Declaration
const section1 = `// Function Declaration
function greetUser() {
  console.log("Hello, welcome to OpenChains!");
}

// Calling the function
greetUser(); // Output: Hello, welcome to OpenChains!

// Function with parameters
function sayHello(name) {
  console.log("Hello, " + name + "!");
}
sayHello("Alice"); // Output: Hello, Alice!
sayHello("Bob");   // Output: Hello, Bob!

// Function with multiple parameters
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log("The sum is:", sum);
}
addNumbers(5, 3);    // Output: The sum is: 8
addNumbers(10, 20);  // Output: The sum is: 30
`;

// Code example 2: Function with return value
const section2 = `// Function returning a value
function multiply(a, b) {
  return a * b; // The function sends this value back
}

let product1 = multiply(4, 5);
console.log("Product 1:", product1); // Output: Product 1: 20

let product2 = multiply(7, 2);
let finalResult = product2 + 10;
console.log("Final Result:", finalResult); // Output: Final Result: 24 (14 + 10)

// Function with early return
function checkAge(age) {
  if (age < 0) {
    return "Invalid age"; // Early exit
  }
  if (age < 18) {
    return "Minor";
  }
  return "Adult"; // Default return
}

console.log("Age 15:", checkAge(15)); // Output: Age 15: Minor
console.log("Age 25:", checkAge(25)); // Output: Age 25: Adult
console.log("Age -5:", checkAge(-5)); // Output: Age -5: Invalid age
`;

// Code example 3: Function Expression
const section3 = `// Function Expression
const calculateArea = function(length, width) {
  return length * width;
};

// Calling the function expression
let area1 = calculateArea(10, 5);
console.log("Area 1:", area1); // Output: Area 1: 50

// Anonymous function expression assigned to a variable
const sayGoodbye = function() {
  console.log("Goodbye!");
};
sayGoodbye(); // Output: Goodbye!

// Named function expression (name only visible within the function itself)
const factorial = function calculateFactorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * calculateFactorial(n - 1); // Recursive call using its own name
};
console.log("Factorial of 5:", factorial(5)); // Output: Factorial of 5: 120
// console.log(calculateFactorial(3)); // Error: calculateFactorial is not defined in this scope
`;

// Code example 4: Arrow Functions
const section4 = `// Basic Arrow Function (short syntax for single expression)
const add = (a, b) => a + b;
console.log("Arrow add(2, 3):", add(2, 3)); // Output: Arrow add(2, 3): 5

// Arrow function with multiple statements (requires curly braces and 'return')
const getGreeting = (name) => {
  const hour = new Date().getHours();
  let timeOfDay;
  if (hour < 12) {
    timeOfDay = "Good Morning";
  } else {
    timeOfDay = "Good Afternoon";
  }
  return \`\${timeOfDay}, \${name}!\`;
};
console.log("Arrow getGreeting('Jane'):", getGreeting("Jane")); // Output: Good Morning/Afternoon, Jane!

// Arrow function with no parameters (requires empty parentheses)
const logTime = () => {
  console.log("Current time:", new Date().toLocaleTimeString());
};
logTime(); // Output: Current time: (current time)

// Arrow function with a single parameter (parentheses are optional)
const square = num => num * num;
console.log("Arrow square(4):", square(4)); // Output: Arrow square(4): 16

// Arrow function and 'this' (important difference!)
// In a regular function, 'this' depends on how the function is called.
// In an arrow function, 'this' is lexically bound (it retains the 'this' value of its surrounding code).
const person = {
  name: "Alice",
  greetRegular: function() {
    console.log("Regular 'this.name':", this.name); // 'this' refers to 'person'
  },
  greetArrow: () => {
    console.log("Arrow 'this.name':", this.name); // 'this' refers to the global object (window/undefined in strict mode)
  }
};
person.greetRegular(); // Output: Regular 'this.name': Alice
person.greetArrow();   // Output: Arrow 'this.name': (empty or undefined in Node.js, window in browser)
`;

// Code example 5: Function Parameters (Default, Rest, Spread)
const section5 = `// Default Parameters (ES6)
function sayHi(name = "Guest", greeting = "Hello") {
  console.log(\`\${greeting}, \${name}!\`);
}
sayHi("John");            // Output: Hello, John!
sayHi();                  // Output: Hello, Guest!
sayHi("Sarah", "Hi");     // Output: Hi, Sarah!

// Rest Parameters (ES6) - collects arguments into an array
function sumAll(...numbers) {
  console.log("Numbers received:", numbers); // numbers is an array
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum 1, 2, 3:", sumAll(1, 2, 3));         // Output: Sum 1, 2, 3: 6
console.log("Sum 10, 20, 30, 40:", sumAll(10, 20, 30, 40)); // Output: Sum 10, 20, 30, 40: 100
console.log("Sum (no args):", sumAll());              // Output: Sum (no args): 0

// Spread Operator (...) with function calls - expands an array into individual arguments
function displayColors(c1, c2, c3) {
  console.log(\`Colors: \${c1}, \${c2}, \${c3}\`);
}
const myColors = ["red", "green", "blue"];
displayColors(...myColors); // Output: Colors: red, green, blue

const moreNumbers = [5, 6, 7];
console.log("Sum 1, 2, 3, then 5, 6, 7:", sumAll(1, 2, 3, ...moreNumbers)); // Combines fixed args with spread
`;

// Code example 6: Scope (Global vs. Local)
const section6 = `// Global Scope
let globalVar = "I am a global variable";

function showScope() {
  // Local Scope of showScope()
  let localVar = "I am a local variable";
  console.log(globalVar); // Can access globalVar
  console.log(localVar);  // Can access localVar

  if (true) {
    // Block Scope (ES6: let, const)
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); // Can access blockVar
    // var functionVar = "I am function-scoped (bad practice inside blocks)"; // Avoid 'var' in blocks
  }
  // console.log(blockVar); // Error: blockVar is not defined (outside its block)
  // console.log(functionVar); // 'var' would be accessible here, demonstrating function scope (if used)
}

showScope();

console.log(globalVar);   // Can access globalVar
// console.log(localVar);  // Error: localVar is not defined (outside showScope())

// Variable shadowing (local variable shadows global)
let name = "Global John";
function printName() {
  let name = "Local Alice"; // This 'name' shadows the global 'name'
  console.log("Inside function:", name); // Output: Inside function: Local Alice
}
printName();
console.log("Outside function:", name); // Output: Outside function: Global John
`;

// Code example 7: Higher-Order Functions (Callbacks)
const section7 = `// Higher-Order Function: Takes a function as an argument
function operateOnNumbers(num1, num2, operation) {
  console.log(\`Performing \${operation.name || 'anonymous'} operation...\`);
  return operation(num1, num2);
}

// Callback Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log("Add 10, 5:", operateOnNumbers(10, 5, add));     // Output: Add 10, 5: 15
console.log("Subtract 10, 5:", operateOnNumbers(10, 5, subtract)); // Output: Subtract 10, 5: 5

// Using an anonymous function as a callback
let result = operateOnNumbers(20, 4, function(a, b) {
  return a / b;
});
console.log("Divide 20, 4:", result); // Output: Divide 20, 4: 5

// Using an arrow function as a callback
result = operateOnNumbers(3, 3, (a, b) => a * b);
console.log("Multiply 3, 3:", result); // Output: Multiply 3, 3: 9

// Higher-Order Function: Returns a function
function createMultiplier(factor) {
  return function(number) { // This is the inner function (closure!)
    return number * factor;
  };
}

const multiplyBy5 = createMultiplier(5);
const multiplyBy10 = createMultiplier(10);

console.log("5 * 7 =", multiplyBy5(7));   // Output: 5 * 7 = 35
console.log("10 * 7 =", multiplyBy10(7)); // Output: 10 * 7 = 70
`;

// Code example 8: Closures
const section8 = `// Closure Example 1: Counter
function createCounter() {
  let count = 0; // 'count' is defined in the outer function's scope

  return function() { // The inner function (closure)
    count++; // It 'remembers' and can access/modify 'count'
    return count;
  };
}

const counter1 = createCounter();
console.log("Counter 1:", counter1()); // Output: Counter 1: 1
console.log("Counter 1:", counter1()); // Output: Counter 1: 2

const counter2 = createCounter(); // Creates a new, independent 'count'
console.log("Counter 2:", counter2()); // Output: Counter 2: 1
console.log("Counter 1:", counter1()); // Output: Counter 1: 3 (counter1's count is independent)

// Closure Example 2: Private Variables
function createPerson(name) {
  let _name = name; // Private variable (by convention)
  let _age = 0;     // Private variable

  return {
    getName: function() {
      return _name;
    },
    setAge: function(newAge) {
      if (newAge > 0) {
        _age = newAge;
      }
    },
    getAge: function() {
      return _age;
    },
    greet: function() {
      console.log(\`Hello, my name is \${_name} and I am \${_age} years old.\`);
    }
  };
}

const person1 = createPerson("Alice");
console.log("Person 1 Name:", person1.getName()); // Output: Person 1 Name: Alice
person1.setAge(30);
console.log("Person 1 Age:", person1.getAge());   // Output: Person 1 Age: 30
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// Trying to access _name directly won't work:
// console.log(person1._name); // Output: undefined
`;

// Code example 9: Immediately Invoked Function Expressions (IIFEs)
const section9 = `// Basic IIFE
(function() {
  console.log("This function runs immediately!");
})(); // Output: This function runs immediately!

// IIFE with parameters
(function(message) {
  console.log(message);
})("Hello from an IIFE!"); // Output: Hello from an IIFE!

// IIFE returning a value
const resultOfIIFE = (function() {
  const secret = "Super secret data!";
  return secret.length;
})();
console.log("Length of secret from IIFE:", resultOfIIFE); // Output: Length of secret from IIFE: 18

// IIFE for creating private scope (common pattern before ES6 modules)
const app = (function() {
  let privateData = "This is private data"; // Only accessible within this IIFE

  function privateFunction() {
    console.log("This is a private function.");
  }

  return { // Public interface
    publicMethod: function() {
      console.log("Public method accessing private data:", privateData);
      privateFunction();
    },
    publicVariable: "This is public data"
  };
})();

app.publicMethod(); // Output: Public method accessing private data: This is private data
                    // Output: This is a private function.
console.log(app.publicVariable); // Output: This is public data
// console.log(app.privateData); // Undefined: privateData is not exposed
`;

export default function JavascriptFunctionsPage() {
  const page = 4; // This is the fifth page in the JavaScript tutorial series

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/D0F0C0/336633?text=JavaScript+Functions:+The+Building+Blocks"
              alt="JavaScript Functions Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              JavaScript Functions: Building Reusable Blocks of Code! 🧱🚀
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              You've learned to store data (variables), understand its types,
              manipulate it (operators), and make your code smart with decisions
              and repetitions (control flow). Now, it's time to learn how to
              **organize your code** and make it **reusable** and **modular**.
              This is where **functions** come in. Functions are fundamental to
              writing clean, efficient, and maintainable JavaScript.
            </p>
            ---
            {/* What are Functions? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                What are Functions? Your Code's Mini-Programs! 🤖
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A **function** in JavaScript is a block of code designed to
                perform a particular task. Think of it as a mini-program within
                your larger program. It takes some input (called
                **parameters**), processes it, and sometimes returns an output
                (a **return value**).
              </p>
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Why Use Functions? The Benefits Are Huge!
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Reusability (DRY Principle):
                  </strong>{" "}
                  Write code once and use it many times. Avoid repeating
                  yourself (Don't Repeat Yourself - DRY).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Modularity & Organization:
                  </strong>{" "}
                  Break down complex problems into smaller, manageable chunks.
                  Makes your code easier to understand and debug.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Readability:
                  </strong>{" "}
                  Give meaningful names to blocks of code, making your program's
                  purpose clearer.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Maintainability:
                  </strong>{" "}
                  If a task needs to change, you only update the code in one
                  place (the function definition).
                </li>
              </ul>
            </section>
            ---
            {/* Defining and Calling Functions */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-blue-400! tw:pb-2!">
                Defining & Calling Functions: The Basics ⚙️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                There are several ways to define functions in JavaScript. We'll
                start with the most common.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. Function Declarations (Named Functions)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is the most straightforward way to define a function. You
                use the `function` keyword, followed by the function's **name**,
                parentheses `()`, and then curly braces `{}` containing the
                function's code.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    Syntax:
                  </strong>{" "}
                  `function functionName(parameter1, parameter2, ...){" "}
                  {/* code to execute */}`
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    Hoisting:
                  </strong>{" "}
                  Function declarations are "hoisted," meaning they can be
                  called before they are defined in the code. JavaScript moves
                  them to the top of their scope during compilation.
                </li>
              </ul>
              <div
                className="tw:bg-yellow-50! tw:border-l-4! tw:border-yellow-500! tw:text-yellow-700! tw:p-4! tw:rounded! tw:mb-6!"
                role="alert"
              >
                <p className="tw:font-bold!">Calling a Function</p>
                <p>
                  To execute the code inside a function, you **call** or
                  **invoke** it by using its name followed by parentheses `()`.
                  If the function expects parameters, you pass values (called
                  **arguments**) inside the parentheses.
                </p>
              </div>
              <JavascriptViewCode code={section1} indexNumber={0} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. Return Values: Getting Output from Functions 📤
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Functions don't just perform actions; they can also produce a
                result. The `return` statement is used to send a value back from
                the function to the place where it was called.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  When JavaScript encounters a `return` statement, the function
                  immediately stops executing, and the specified value is sent
                  back.
                </li>
                <li>
                  If a function doesn't explicitly `return` a value, it
                  implicitly returns `undefined`.
                </li>
              </ul>
              <JavascriptViewCode code={section2} indexNumber={1} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                3. Function Expressions (Anonymous & Named)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A function expression defines a function inside an expression.
                This often means assigning a function (which can be anonymous,
                i.e., without a name) to a variable.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Anonymous Function Expression:
                  </strong>{" "}
                  `const myFunc = function() {`{ ... }`};` (Most common). The
                  function itself doesn't have a name, but the variable holding
                  it does.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Named Function Expression:
                  </strong>{" "}
                  `const myFunc = function funcName() {`{ ... }`};`. The
                  function has a name, but it's usually only accessible *within*
                  the function itself (useful for recursion or debugging).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    No Hoisting:
                  </strong>{" "}
                  Function expressions are *not* hoisted like declarations. You
                  can only call them *after* they have been defined in the code.
                </li>
              </ul>
              <JavascriptViewCode code={section3} indexNumber={2} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                4. Arrow Functions (ES6 - Concise & Modern) ➡️
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Introduced in ECMAScript 2015 (ES6), arrow functions provide a
                shorter syntax for writing functions. They are often preferred
                for their conciseness, especially for simple functions.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Syntax:
                  </strong>{" "}
                  `(parameter1, parameter2) {`=>`} {/* function body */}`
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Concise Body:
                  </strong>{" "}
                  If the function body has only one expression, you can omit the
                  curly braces and the `return` keyword (the expression's result
                  is implicitly returned).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    No `this` Binding:
                  </strong>{" "}
                  A key difference: arrow functions do not have their own `this`
                  context. They inherit `this` from the surrounding (lexical)
                  scope. This is very important when working with objects and
                  event handlers.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    No `arguments` Object:
                  </strong>{" "}
                  Arrow functions don't have their own `arguments` object.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Not Hoisted:
                  </strong>{" "}
                  Like function expressions, arrow functions are not hoisted.
                </li>
              </ul>
              <JavascriptViewCode code={section4} indexNumber={3} />
            </section>
            ---
            {/* Advanced Parameter Handling */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-green-400! tw:pb-2!">
                Advanced Parameter Handling (ES6+) 📦
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Modern JavaScript provides powerful features for working with
                function parameters.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. Default Parameters
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Allows you to specify a default value for a parameter if no
                argument (or `undefined`) is passed for that parameter when the
                function is called.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Syntax:
                  </strong>{" "}
                  `functionName(param1 = defaultValue1, param2 = defaultValue2)`
                </li>
                <li>
                  Makes your functions more robust by handling cases where
                  arguments might be missing.
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. Rest Parameters (`...`)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The rest parameter syntax allows a function to accept an
                indefinite number of arguments as an array.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Syntax:
                  </strong>{" "}
                  `functionName(...theArgs)`
                </li>
                <li>
                  `theArgs` will be an actual **array**, making it easy to
                  iterate over and manipulate.
                </li>
                <li>
                  Must be the **last** parameter in the function definition.
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                3. Spread Operator (`...`) - Don't Confuse with Rest!
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While it uses the same `...` syntax, the **spread operator**
                does the opposite of rest parameters: it expands an iterable
                (like an array) into individual elements. When used in a
                function call, it "spreads" the array elements as separate
                arguments.
              </p>
              <JavascriptViewCode code={section5} indexNumber={4} />
            </section>
            ---
            {/* Function Scope */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-red-400! tw:pb-2!">
                Function Scope: Where Variables Live 🏠
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Understanding **scope** is crucial for knowing where variables
                are accessible in your code. In JavaScript, functions create
                their own scope.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Global Scope:
                  </strong>{" "}
                  Variables declared outside any function or block are in the
                  global scope. They can be accessed from anywhere in your code.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Function (Local) Scope:
                  </strong>{" "}
                  Variables declared *inside* a function (using `var`, `let`, or
                  `const`) are local to that function. They cannot be accessed
                  from outside the function. Parameters also exist within
                  function scope.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Block Scope (ES6 `let` & `const`):
                  </strong>{" "}
                  Variables declared with `let` or `const` inside a block (like
                  an `if` statement or a `for` loop) are only accessible within
                  that block. `var` does *not* have block scope.
                </li>
              </ul>
              <div
                className="tw:bg-yellow-50! tw:border-l-4! tw:border-yellow-500! tw:text-yellow-700! tw:p-4! tw:rounded! tw:mb-6!"
                role="alert"
              >
                <p className="tw:font-bold!">
                  Lexical Scoping (Static Scoping)
                </p>
                <p>
                  JavaScript uses **lexical scoping**. This means that the scope
                  of a variable is determined by *where it is defined* in the
                  code, not where it is called. This concept is fundamental to
                  understanding closures.
                </p>
              </div>
              <JavascriptViewCode code={section6} indexNumber={5} />
            </section>
            ---
            {/* Higher-Order Functions & Callbacks */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-green-400! tw:pb-2!">
                Higher-Order Functions & Callbacks: Functions as First-Class
                Citizens 🥇
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                In JavaScript, functions are "first-class citizens." This means
                they can be treated like any other value:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>Assigned to variables.</li>
                <li>Passed as arguments to other functions.</li>
                <li>Returned as values from other functions.</li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. Higher-Order Functions
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A **higher-order function** is a function that either:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  Takes one or more functions as arguments (e.g.,
                  `Array.prototype.map()`, `setTimeout()`).
                </li>
                <li>Returns a function as its result.</li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. Callback Functions
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A **callback function** is a function passed into another
                function as an argument, which is then invoked inside the outer
                function to complete some kind of routine or action. Callbacks
                are fundamental for asynchronous operations (like fetching data
                from a server or handling user clicks).
              </p>
              <JavascriptViewCode code={section7} indexNumber={6} />
            </section>
            ---
            {/* Closures */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-orange-400! tw:pb-2!">
                Closures: The Power of Lexical Scope 🔒
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is a more advanced but incredibly powerful concept. A
                **closure** is the combination of a function and the lexical
                environment within which that function was declared. In simpler
                terms, a closure gives you access to an outer function's scope
                from an inner function, even after the outer function has
                finished executing.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  When an inner function is returned from an outer function, the
                  inner function "remembers" the environment (variables) in
                  which it was created.
                </li>
                <li>
                  This allows you to create private variables and implement
                  patterns like memoization and functional programming
                  techniques.
                </li>
              </ul>
              <JavascriptViewCode code={section8} indexNumber={7} />
            </section>
            ---
            {/* Immediately Invoked Function Expressions (IIFEs) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Immediately Invoked Function Expressions (IIFEs) 🚀
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                An **IIFE** (pronounced "iffy") is a JavaScript function that
                runs as soon as it is defined. It's a design pattern often used
                to create a private scope for variables, preventing them from
                polluting the global scope.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Syntax:
                  </strong>{" "}
                  `(function() {/* code */})();` or `(() {`=>`} {/* code */}
                  )();` (using arrow function). The wrapping parentheses `()`
                  around the function definition make it an expression, and the
                  final `()` immediately executes it.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Key Use Case:
                  </strong>{" "}
                  Creating a private scope for variables, which helps avoid name
                  collisions in the global scope (especially useful in older
                  JavaScript or when combining multiple scripts).
                </li>
              </ul>
              <JavascriptViewCode code={section9} indexNumber={8} />
            </section>
            ---
            {/* What's Next? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-gray-400! tw:pb-2!">
                What's Next? Understanding Objects: The Heart of JavaScript! ❤️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You've now gained a solid understanding of functions – how to
                define them, pass data to them, get data back, and even delve
                into advanced concepts like scope and closures. This knowledge
                is crucial for writing organized, efficient, and powerful
                JavaScript code.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                In the next chapter, we'll explore **Arrays**
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
