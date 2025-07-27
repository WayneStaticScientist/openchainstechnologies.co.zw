import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";

export const metadata = {
  title: "Variables and Data Types in JavaScript - OpenChains Technologies",
  description:
    "Dive deep into JavaScript variables and data types. Learn how to declare and use variables with var, let, and const, and explore primitive and non-primitive data types.",
  openGraph: {
    title: "Variables and Data Types in JavaScript - OpenChains Technologies",
    description:
      "Dive deep into JavaScript variables and data types. Learn how to declare and use variables with var, let, and const, and explore primitive and non-primitive data types.",
    url: `${baseUrl}/lessons/javascript/variables-data-types`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Variables and Data Types in JavaScript - OpenChains Technologies",
    description:
      "Dive deep into JavaScript variables and data types. Learn how to declare and use variables with var, let, and const, and explore primitive and non-primitive data types.",
  },
  keywords: [
    "JavaScript variables",
    "JavaScript data types",
    "var",
    "let",
    "const",
    "primitive data types",
    "non-primitive data types",
    "string",
    "number",
    "boolean",
    "null",
    "undefined",
    "symbol",
    "bigint",
    "object",
    "array",
    "function",
    "type coercion",
    "typeOf operator",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/variables-data-types`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Variable declarations (var, let, const)
const section1 = `// Using 'var' (legacy, function-scoped)
var userName = "Alice";
console.log(userName); // Output: Alice

var userName = "Bob"; // 'var' allows re-declaration in the same scope
console.log(userName); // Output: Bob

if (true) {
  var userAge = 30; // 'var' is function-scoped, accessible outside the block
}
console.log(userAge); // Output: 30 (accessible outside the if block)


// Using 'let' (modern, block-scoped, re-assignable)
let greeting = "Hello";
console.log(greeting); // Output: Hello

greeting = "Hi there!"; // 'let' allows re-assignment
console.log(greeting); // Output: Hi there!

// let greeting = "Hola"; // ERROR! 'let' does not allow re-declaration in the same scope

if (true) {
  let userCity = "New York"; // 'let' is block-scoped
  console.log(userCity); // Output: New York
}
// console.log(userCity); // ERROR! userCity is not defined (not accessible outside the if block)


// Using 'const' (modern, block-scoped, constant)
const PI = 3.14159;
console.log(PI); // Output: 3.14159

// PI = 3.14; // ERROR! Assignment to constant variable.
// const PI = 3.0; // ERROR! 'const' does not allow re-declaration

const userDetails = { name: "Charlie", age: 25 };
console.log(userDetails.name); // Output: Charlie
userDetails.age = 26; // Properties of a 'const' object can be modified
console.log(userDetails.age); // Output: 26

// userDetails = { name: "David", age: 30 }; // ERROR! Reassignment of 'const' object is not allowed
`;

// Code example 2: Primitive Data Types
const section2 = `// String: Textual data
let userName = "Bob Mily"
let message = "Welcome to JavaScript!";
let anotherMessage = 'Its fun to learn.';
let templateLiteral = \`Hello, \${userName}!\`; // Template literals with backticks

console.log(typeof message); // Output: string
console.log(templateLiteral); // Output: Hello, Bob! (assuming userName from previous example)

// Number: Numeric data (integers and floating-point)
let integerNumber = 100;
let floatingPointNumber = 3.14;
let negativeNumber = -50;
let bigNumber = 9007199254740991n; // BigInt for very large integers (note 'n' suffix)

console.log(typeof integerNumber); // Output: number
console.log(typeof floatingPointNumber); // Output: number
console.log(typeof bigNumber); // Output: bigint

// Boolean: Logical values (true or false)
let isStudent = true;
let hasLicense = false;

console.log(typeof isStudent); // Output: boolean

// Undefined: A variable declared but not assigned a value
let undefinedVar;
console.log(undefinedVar); // Output: undefined
console.log(typeof undefinedVar); // Output: undefined

// Null: Intentional absence of any value (a primitive value, but 'typeof' quirk)
let emptyValue = null;
console.log(emptyValue); // Output: null
console.log(typeof emptyValue); // Output: object (a well-known JavaScript quirk/bug)

// Symbol: Unique and immutable identifiers (ES6+)
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // Output: false (Symbols are always unique)
console.log(typeof id1); // Output: symbol
`;

// Code example 3: Non-Primitive Data Types (Objects, Arrays, Functions)
const section3 = `// Object: Collection of key-value pairs
let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};

console.log(person.firstName); // Output: Jane
console.log(person["age"]); // Output: 28
console.log(person.address.city); // Output: Anytown
console.log(typeof person); // Output: object

// Array: Ordered list of values (a special type of object)
let colors = ["red", "green", "blue"];
let mixedArray = [1, "hello", true, { key: "value" }];

console.log(colors[0]); // Output: red (accessing by index)
console.log(colors.length); // Output: 3
colors.push("yellow"); // Modifying an array
console.log(colors); // Output: ["red", "green", "blue", "yellow"]
console.log(typeof colors); // Output: object (arrays are objects in JS)

// Function: Reusable block of code (also a type of object)
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World")); // Output: Hello, World!
console.log(typeof greet); // Output: function

// Function assigned to a variable
const sayGoodbye = function(name) {
  console.log("Goodbye, " + name + "!");
};
sayGoodbye("Alice"); // Output: Goodbye, Alice!
`;

export default function JavascriptVariablesDataTypesPage() {
  const page = 1; // This is the second page in the JavaScript tutorial series

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/D1E7DD/0F5132?text=Variables+and+Data+Types+in+JavaScript"
              alt="JavaScript Variables and Data Types Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Variables & Data Types: Storing and Categorizing Information in
              JavaScript 📦
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              In programming, the ability to store and manipulate information is
              fundamental. This is where **variables** and **data types** come
              into play. Variables act as containers for data, while data types
              define the kind of information those containers can hold.
              Understanding these concepts is crucial for writing dynamic and
              functional JavaScript code.
            </p>
            ---
            {/* What are Variables? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                What Are Variables? The Data Containers 🗃️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                At its core, a **variable** is a named storage location that
                holds a value. Imagine it like a labeled box where you can put
                different items (data). The value inside the box can change over
                time. In JavaScript, you declare a variable before you use it,
                and you can assign data to it.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Variable Declaration: `var`, `let`, and `const`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                JavaScript provides three keywords to declare variables: `var`,
                `let`, and `const`. Each has specific rules regarding its scope,
                re-declaration, and re-assignment. Understanding these
                differences is key to writing robust and predictable code.
              </p>

              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `var` (Legacy - Avoid for new code):
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-2! tw:space-y-1!">
                    <li>
                      **Scope:** `var` is *function-scoped* or
                      *globally-scoped*. This means if you declare a `var`
                      inside a function, it's available throughout that
                      function. If declared outside any function, it's global.
                      It ignores block-level scopes (like `if` statements or
                      `for` loops).
                    </li>
                    <li>
                      **Re-declaration:** You *can* re-declare a `var` variable
                      in the same scope without an error.
                    </li>
                    <li>
                      **Re-assignment:** You *can* re-assign a new value to a
                      `var` variable.
                    </li>
                    <li>
                      **Hoisting:** `var` declarations are "hoisted" to the top
                      of their scope. This means you can use a `var` variable
                      before it's declared in your code, but its value will be
                      `undefined` until the actual declaration line is reached.
                    </li>
                    <li>
                      **Why avoid it?** Its hoisting and loose scoping rules can
                      lead to unexpected behavior and bugs, especially in larger
                      codebases. `let` and `const` were introduced to address
                      these issues.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `let` (Modern - Preferred for mutable variables):
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-2! tw:space-y-1!">
                    <li>
                      **Scope:** `let` is *block-scoped*. This means it's only
                      accessible within the block of code (e.g., inside curly
                      braces `{}`) where it's declared. This provides more
                      predictable behavior.
                    </li>
                    <li>
                      **Re-declaration:** You *cannot* re-declare a `let`
                      variable in the same scope. Doing so will result in a
                      `SyntaxError`.
                    </li>
                    <li>
                      **Re-assignment:** You *can* re-assign a new value to a
                      `let` variable. This makes it suitable for values that are
                      expected to change.
                    </li>
                    <li>
                      **Hoisting:** `let` declarations are also hoisted, but
                      unlike `var`, they are not initialized with `undefined`.
                      Accessing a `let` variable before its declaration results
                      in a `ReferenceError` (this is known as the "Temporal Dead
                      Zone").
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `const` (Modern - Preferred for constant variables):
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-2! tw:space-y-1!">
                    <li>**Scope:** Like `let`, `const` is *block-scoped*.</li>
                    <li>
                      **Re-declaration:** You *cannot* re-declare a `const`
                      variable in the same scope.
                    </li>
                    <li>
                      **Re-assignment:** You *cannot* re-assign a new value to a
                      `const` variable after its initial assignment. It must be
                      initialized at the time of declaration.
                    </li>
                    <li>
                      **Hoisting:** Similar to `let`, `const` declarations are
                      hoisted but are in a Temporal Dead Zone until their
                      declaration.
                    </li>
                    <li>
                      **Important Note (for objects/arrays):** While you can't
                      reassign a `const` variable itself, if the `const`
                      variable holds an object or an array, the *contents* of
                      that object or array *can* still be modified. The `const`
                      keyword only prevents reassignment of the variable
                      identifier itself, not the mutation of its underlying
                      value if that value is a mutable data structure.
                    </li>
                  </ul>
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Choosing the Right Keyword: Best Practices
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                In modern JavaScript development, the general recommendation is:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  Use{" "}
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `const`
                  </strong>{" "}
                  by default. If you know a variable's value won't change,
                  `const` provides immutability and makes your code more
                  predictable and easier to reason about.
                </li>
                <li>
                  Use{" "}
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `let`
                  </strong>{" "}
                  when you anticipate that the variable's value will need to be
                  re-assigned later in your code.
                </li>
                <li>
                  Avoid{" "}
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `var`
                  </strong>{" "}
                  unless you are specifically working with older codebases that
                  rely on its behavior.
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Variable Naming Rules & Conventions
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Just like in any language, there are rules and best practices
                for naming your variables:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  Variable names must start with a letter (`a-z`, `A-Z`),
                  underscore (`_`), or dollar sign (`$`). They cannot start with
                  a number.
                </li>
                <li>
                  After the first character, they can contain letters, numbers,
                  underscores, or dollar signs.
                </li>
                <li>
                  JavaScript variable names are **case-sensitive** (`myVariable`
                  is different from `myvariable`).
                </li>
                <li>
                  You cannot use JavaScript reserved keywords (e.g., `function`,
                  `if`, `for`, `let`, `const`) as variable names.
                </li>
                <li>
                  **Convention (Camel Case):** For multi-word variable names,
                  the standard convention is `camelCase`. The first word is
                  lowercase, and subsequent words start with an uppercase letter
                  (e.g., `firstName`, `totalAmount`, `getUserData`).
                </li>
                <li>
                  **Convention (Constants):** For `const` variables that
                  represent truly unchanging values (like mathematical
                  constants), it's common practice to use `SCREAMING_SNAKE_CASE`
                  (all uppercase with underscores between words), e.g., `const
                  PI = 3.14159;`, `const MAX_ITEMS = 100;`.
                </li>
                <li>
                  Choose **descriptive names** that clearly indicate the purpose
                  of the variable. Avoid single-letter variable names like `x`
                  or `y` unless they are for very short-lived loop counters.
                </li>
              </ul>

              <JavascriptViewCode code={section1} indexNumber={0} />
            </section>
            ---
            {/* Data Types Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                JavaScript Data Types: Categories of Information 📊
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Every value in JavaScript has a specific **data type**.
                JavaScript is a "dynamically typed" language, meaning you don't
                have to explicitly declare the data type of a variable when you
                declare it. The type is determined automatically at runtime
                based on the value it holds. A single variable can even hold
                different types of values over its lifetime, though this is
                generally discouraged for clarity.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                The `typeof` Operator
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can use the built-in `typeof` operator to check the data
                type of a variable or value. It returns a string indicating the
                type.
              </p>
              <JavascriptViewCode
                indexNumber={4}
                code={`console.log(typeof "hello"); // Output: "string"
console.log(typeof 123);   // Output: "number"
let myVar = true;
console.log(typeof myVar); // Output: "boolean"`}
              />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Let's explore the various data types in JavaScript, categorized
                into **Primitive** and **Non-Primitive** (or Reference) types.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Primitive Data Types (Immutable Values)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Primitive data types represent single, simple values. When you
                assign a primitive value to a variable, the variable directly
                holds that value. They are **immutable**, meaning their value
                cannot be changed after creation (though the variable itself can
                be reassigned to a new primitive value).
              </p>

              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `String`
                  </strong>
                  : Represents textual data. Strings are sequences of characters
                  enclosed in single quotes (`'...'`), double quotes (`"..."`),
                  or backticks (
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    `...`
                  </code>
                  ). Backticks allow for{" "}
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    template literals
                  </strong>
                  , which enable embedded expressions and multi-line strings.
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:ml-4! tw:mt-2!">
                    **Example:** `"Hello, World!"`, `'JavaScript'`, `\`My name
                    is ${"{name}"}\``.
                  </p>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `Number`
                  </strong>
                  : Represents both integer and floating-point numbers.
                  JavaScript handles all numbers as floating-point internally.
                  There are also special numeric values like `Infinity`,
                  `-Infinity`, and `NaN` (Not-a-Number).
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:ml-4! tw:mt-2!">
                    **Example:** `10`, `3.14`, `-5`, `1 / 0` (evaluates to
                    `Infinity`), `0 / 0` (evaluates to `NaN`).
                  </p>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `Boolean`
                  </strong>
                  : Represents a logical entity and can only have two values:
                  `true` or `false`. These are fundamental for conditional
                  logic.
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:ml-4! tw:mt-2!">
                    **Example:** `true`, `false`, `10 {">"} 5` (evaluates to
                    `true`).
                  </p>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `Undefined`
                  </strong>
                  : Indicates that a variable has been declared but has not yet
                  been assigned a value. It's the default value for
                  uninitialized variables.
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:ml-4! tw:mt-2!">
                    **Example:** `let myVariable; console.log(myVariable);`
                    (outputs `undefined`).
                  </p>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `Null`
                  </strong>
                  : Represents the intentional absence of any object value or
                  simply "nothing". It's a primitive value.
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:ml-4! tw:mt-2!">
                    **Example:** `let response = null;` (explicitly sets the
                    variable to empty).
                  </p>
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:ml-4! tw:mt-2!">
                    **Important Quirks:** While `null` is a primitive, `typeof
                    null` returns `"object"`. This is a long-standing bug in
                    JavaScript and is important to remember. It doesn't mean
                    `null` is an object, just that the `typeof` operator has
                    this peculiarity.
                  </p>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `Symbol` (ES6+)
                  </strong>
                  : A unique and immutable primitive value that can be used as
                  the key of an object property. Every `Symbol()` call is
                  guaranteed to return a unique Symbol value.
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:ml-4! tw:mt-2!">
                    **Example:** `const id = Symbol('myId');`
                  </p>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `BigInt` (ES11+)
                  </strong>
                  : Represents whole numbers larger than `2^53 - 1` (the maximum
                  safe integer for the `Number` type). A `BigInt` is created by
                  appending `n` to the end of an integer.
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:ml-4! tw:mt-2!">
                    **Example:** `123456789012345678901234567890n`
                  </p>
                </li>
              </ul>

              <JavascriptViewCode code={section2} indexNumber={1} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Non-Primitive (Reference) Data Types (Mutable Values)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Non-primitive data types, also known as **reference types**, are
                more complex. Instead of holding the actual value, variables of
                these types hold a **reference** (memory address) to where the
                actual data is stored in memory. This means that when you copy a
                non-primitive variable, you're copying the reference, not the
                underlying data itself. They are **mutable**, meaning their
                content can be changed after creation.
              </p>

              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `Object`
                  </strong>
                  : The most fundamental non-primitive type. An object is a
                  collection of related data and/or functionality, usually
                  consisting of "key-value" pairs (also known as "properties" or
                  "members").
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:ml-4! tw:mt-2!">
                    **Example:**{" "}
                    <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                      `{`{ name: "John", age: 30 }`}`
                    </code>
                  </p>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `Array`
                  </strong>
                  : A special type of object that represents an ordered list of
                  values. Arrays are indexed by numbers, starting from 0.
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:ml-4! tw:mt-2!">
                    **Example:**{" "}
                    <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                      `[1, 2, 3, "apple"]`
                    </code>
                  </p>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `Function`
                  </strong>
                  : A block of code designed to perform a particular task.
                  Functions are first-class citizens in JavaScript, meaning they
                  can be assigned to variables, passed as arguments, and
                  returned from other functions. Functions are technically a
                  type of object.
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:ml-4! tw:mt-2!">
                    **Example:**{" "}
                    <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                      `function greet() {"{ ... }"}`
                    </code>
                  </p>
                </li>
              </ul>

              <JavascriptViewCode code={section3} indexNumber={2} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Type Coercion (Implicit Type Conversion)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                JavaScript is a loosely typed language, and it often performs
                automatic type conversion, known as **type coercion**. This
                happens when operations involve values of different data types.
                While sometimes convenient, it can lead to unexpected results if
                not understood.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  **Addition (`+`)**: If one operand is a string, the other is
                  converted to a string, and concatenation occurs.
                  <JavascriptViewCode
                    indexNumber={5}
                    code={`console.log("5" + 2); // Output: "52" (string concatenation)
console.log(5 + "2"); // Output: "52"
console.log(5 + 2);   // Output: 7 (numeric addition)`}
                  />
                </li>
                <li>
                  **Other Arithmetic Operators (`-`, `*`, `/`)**: These
                  operators typically try to convert operands to numbers.
                  <JavascriptViewCode
                    indexNumber={6}
                    code={`console.log("10" - 5);  // Output: 5 (string "10" is converted to number 10)
console.log("10" * "5"); // Output: 50
console.log("hello" * 2); // Output: NaN (Not-a-Number)`}
                  />
                </li>
                <li>
                  **Equality Operators (`==` vs `===`)**:
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-2! tw:space-y-1!">
                    <li>
                      <strong className="tw:font-semibold! tw:text-orange-600!">
                        Loose Equality (`==`):
                      </strong>{" "}
                      Performs type coercion before comparing values. This can
                      lead to surprising results.
                      <JavascriptViewCode
                        indexNumber={7}
                        code={`console.log(1 == "1");   // Output: true (number 1 is coerced to string "1")
console.log(0 == false); // Output: true
console.log(null == undefined); // Output: true`}
                      />
                    </li>
                    <li>
                      <strong className="tw:font-semibold! tw:text-green-600!">
                        Strict Equality (`===`):
                      </strong>{" "}
                      Compares both value and type without performing any type
                      coercion. This is generally the **recommended** equality
                      operator for predictable comparisons.
                      <JavascriptViewCode
                        indexNumber={8}
                        code={`console.log(1 === "1");   // Output: false (different types)
console.log(0 === false); // Output: false
console.log(null === undefined); // Output: false`}
                      />
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Always prefer `===` over `==`** to avoid unexpected behavior
                due to type coercion.
              </p>
            </section>
            ---
            {/* What's Next? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Next Steps: Operators & Expressions! ➕➖
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You've now gained a solid understanding of how to store
                information using variables and the different types of data
                JavaScript can handle. This knowledge is foundational for
                everything else you'll do in JavaScript.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                In the next chapter, we'll learn how to actually *do* things
                with these variables and data using **operators and
                expressions**. Get ready to perform calculations, comparisons,
                and logical operations!
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
