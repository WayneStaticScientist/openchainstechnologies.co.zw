import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";

export const metadata = {
  title: "JavaScript Operators and Expressions - OpenChains Technologies",
  description:
    "Master JavaScript operators: arithmetic, assignment, comparison, logical, and more. Learn how to combine them to form expressions and control program flow.",
  openGraph: {
    title: "JavaScript Operators and Expressions - OpenChains Technologies",
    description:
      "Master JavaScript operators: arithmetic, assignment, comparison, logical, and more. Learn how to combine them to form expressions and control program flow.",
    url: `${baseUrl}/lessons/javascript/operators-expressions`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Operators and Expressions - OpenChains Technologies",
    description:
      "Master JavaScript operators: arithmetic, assignment, comparison, logical, and more. Learn how to combine them to form expressions and control program flow.",
  },
  keywords: [
    "JavaScript operators",
    "arithmetic operators",
    "assignment operators",
    "comparison operators",
    "logical operators",
    "unary operators",
    "ternary operator",
    "bitwise operators",
    "typeof operator",
    "instanceof operator",
    "operator precedence",
    "expressions",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/operators-expressions`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Arithmetic Operators
const section1 = `let a = 10;
let b = 5;

console.log("Addition (a + b):", a + b);     // Output: 15
console.log("Subtraction (a - b):", a - b);  // Output: 5
console.log("Multiplication (a * b):", a * b); // Output: 50
console.log("Division (a / b):", a / b);     // Output: 2
console.log("Modulus (a % b):", a % b);     // Output: 0 (remainder of 10 / 5)
console.log("Exponentiation (a ** 2):", a ** 2); // Output: 100 (10 squared)

let x = 7;
console.log("Increment (++x):", ++x); // Output: 8 (x becomes 8, then evaluated)
console.log("x after prefix increment:", x); // Output: 8

let y = 7;
console.log("Increment (y++):", y++); // Output: 7 (y evaluated, then becomes 8)
console.log("y after postfix increment:", y); // Output: 8

let z = 10;
console.log("Decrement (--z):", --z); // Output: 9 (z becomes 9, then evaluated)

let w = 10;
console.log("Decrement (w--):", w--); // Output: 10 (w evaluated, then becomes 9)
`;

// Code example 2: Assignment Operators
const section2 = `let value = 10;
console.log("Initial value:", value); // Output: 10

value += 5; // Equivalent to: value = value + 5;
console.log("After += 5:", value); // Output: 15

value -= 3; // Equivalent to: value = value - 3;
console.log("After -= 3:", value); // Output: 12

value *= 2; // Equivalent to: value = value * 2;
console.log("After *= 2:", value); // Output: 24

value /= 4; // Equivalent to: value = value / 4;
console.log("After /= 4:", value); // Output: 6

value %= 5; // Equivalent to: value = value % 5;
console.log("After %= 5:", value); // Output: 1

value **= 3; // Equivalent to: value = value ** 3;
console.log("After **= 3:", value); // Output: 1 (1 to the power of 3)
`;

// Code example 3: Comparison Operators
const section3 = `let num1 = 10;
let num2 = 20;
let strNum = "10";

console.log("Loose Equality (num1 == strNum):", num1 == strNum);   // Output: true (coerces "10" to 10)
console.log("Strict Equality (num1 === strNum):", num1 === strNum); // Output: false (different types)

console.log("Loose Inequality (num1 != strNum):", num1 != strNum);   // Output: false
console.log("Strict Inequality (num1 !== strNum):", num1 !== strNum); // Output: true

console.log("Greater Than (num2 > num1):", num2 > num1); // Output: true
console.log("Less Than (num1 < num2):", num1 < num2);   // Output: true

console.log("Greater Than or Equal (num1 >= 10):", num1 >= 10); // Output: true
console.log("Less Than or Equal (num2 <= 20):", num2 <= 20);   // Output: true
`;

// Code example 4: Logical Operators
const section4 = `let isLoggedin = true;
let isAdmin = false;
let hasPermission = true;
let age = 25;

// Logical AND (&&)
console.log("isLoggedin && hasPermission:", isLoggedin && hasPermission); // Output: true (both true)
console.log("isLoggedin && isAdmin:", isLoggedin && isAdmin);         // Output: false (isAdmin is false)

// Logical OR (||)
console.log("isAdmin || hasPermission:", isAdmin || hasPermission);   // Output: true (hasPermission is true)
console.log("isAdmin || false:", isAdmin || false);               // Output: false (both false)

// Logical NOT (!)
console.log("!isLoggedin:", !isLoggedin); // Output: false
console.log("!isAdmin:", !isAdmin);     // Output: true

// Short-circuiting with && and ||
let defaultName = "";
let userName = "Alice";
let finalName = userName || defaultName || "Guest"; // If userName is truthy, use it, else defaultName, else "Guest"
console.log("Final Name:", finalName); // Output: Alice

let userRole = isAdmin && "Admin User"; // If isAdmin is false, it short-circuits and result is false
console.log("User Role:", userRole); // Output: false

let activeUser = isLoggedin && "User is active";
console.log("Active User:", activeUser); // Output: "User is active"

// Nullish Coalescing Operator (??) - ES2020
let userSetting = null;
let defaultSetting = "Dark Mode";
let chosenSetting = userSetting ?? defaultSetting;
console.log("Chosen Setting (nullish):", chosenSetting); // Output: Dark Mode

let emptyString = ""; // Empty string is falsy, but not nullish
let valueOrDefault = emptyString ?? "Default";
console.log("Value or Default (empty string):", valueOrDefault); // Output: ""

let zeroValue = 0; // Zero is falsy, but not nullish
let quantity = zeroValue ?? 1;
console.log("Quantity (zero value):", quantity); // Output: 0
`;

// Code example 5: Ternary (Conditional) Operator
const section5 = `let userAge = 18;
let canVote = (userAge >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can vote:", canVote); // Output: Yes, can vote

let currentHour = 10;
let greeting = (currentHour < 12) ? "Good Morning" : "Good Afternoon";
console.log("Greeting:", greeting); // Output: Good Morning
`;

// Code example 6: Type Operators
const section6 = `// typeof operator
let variable1 = 123;
let variable2 = "Hello";
let variable3 = true;
let variable4 = { name: "John" };
let variable5 = [1, 2, 3];
let variable6 = function() {};
let variable7 = null;
let variable8 = undefined;

console.log("typeof 123:", typeof variable1);      // Output: number
console.log("typeof 'Hello':", typeof variable2);    // Output: string
console.log("typeof true:", typeof variable3);       // Output: boolean
console.log("typeof {}:", typeof variable4);         // Output: object
console.log("typeof []:", typeof variable5);         // Output: object (arrays are objects)
console.log("typeof function():", typeof variable6);  // Output: function
console.log("typeof null:", typeof variable7);       // Output: object (the infamous quirk)
console.log("typeof undefined:", typeof variable8);  // Output: undefined

// instanceof operator
class Car {}
class Motorcycle {}

let myCar = new Car();
let myMotorcycle = new Motorcycle();
let myObject = {};
let myArray = [];

console.log("myCar instanceof Car:", myCar instanceof Car);       // Output: true
console.log("myMotorcycle instanceof Car:", myMotorcycle instanceof Car); // Output: false
console.log("myArray instanceof Array:", myArray instanceof Array);   // Output: true
console.log("myObject instanceof Object:", myObject instanceof Object); // Output: true
console.log("myArray instanceof Object:", myArray instanceof Object);   // Output: true (Arrays inherit from Object)
`;

// Code example 7: Operator Precedence
const section7 = `let result1 = 10 + 5 * 2;    // Multiplication has higher precedence
console.log("10 + 5 * 2 =", result1); // Output: 20 (5 * 2 = 10, then 10 + 10)

let result2 = (10 + 5) * 2; // Parentheses change precedence
console.log("(10 + 5) * 2 =", result2); // Output: 30 (10 + 5 = 15, then 15 * 2)

let result3 = 20 / 4 - 2; // Division has higher precedence than subtraction
console.log("20 / 4 - 2 =", result3); // Output: 3 (20 / 4 = 5, then 5 - 2)

let result4 = 2 ** 3 * 2; // Exponentiation has higher precedence than multiplication
console.log("2 ** 3 * 2 =", result4); // Output: 16 (2 ** 3 = 8, then 8 * 2)

let result5 = 10 > 5 && 8 < 12; // Comparison operators have higher precedence than logical AND
console.log("10 > 5 && 8 < 12 =", result5); // Output: true (true && true)

let result6 = false || true && false; // && has higher precedence than ||
console.log("false || true && false =", result6); // Output: false (true && false = false, then false || false)

let result7 = (false || true) && false; // Parentheses change precedence
console.log("(false || true) && false =", result7); // Output: false (false || true = true, then true && false)
`;

export default function JavascriptOperatorsExpressionsPage() {
  const page = 2; // This is the third page in the JavaScript tutorial series

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/D1E7DD/0F5132?text=JavaScript+Operators+and+Expressions"
              alt="JavaScript Operators and Expressions Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              JavaScript Operators & Expressions: Making Your Code Act! 🛠️
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Now that you understand **variables** (our data containers) and
              **data types** (the kinds of data they hold), it's time to learn
              how to manipulate that data. This is where **operators** come in.
              Operators are special symbols that perform operations on one or
              more values (called **operands**) and produce a result. When
              operators and operands are combined, they form **expressions**.
            </p>
            ---
            {/* What are Operators? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                What Are Operators? Your Code's Action Verbs! 💫
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                In JavaScript, operators are used to assign values, compare
                values, perform arithmetic computations, and perform logical
                operations. They are the building blocks that allow you to
                create dynamic and interactive programs.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Types of Operators in JavaScript
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                JavaScript offers a wide range of operators, which can be
                broadly categorized into several types:
              </p>

              <h4 className="tw:text-lg! sm:tw:text-xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. Arithmetic Operators
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These are used to perform mathematical calculations.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `+` (Addition):
                  </strong>{" "}
                  Adds two numbers or concatenates strings.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `-` (Subtraction):
                  </strong>{" "}
                  Subtracts the right operand from the left operand.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `*` (Multiplication):
                  </strong>{" "}
                  Multiplies two numbers.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `/` (Division):
                  </strong>{" "}
                  Divides the left operand by the right operand.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `%` (Modulus/Remainder):
                  </strong>{" "}
                  Returns the remainder of a division.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `**` (Exponentiation - ES2016):
                  </strong>{" "}
                  Raises the first operand to the power of the second operand.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `++` (Increment):
                  </strong>{" "}
                  Increments the value of a variable by 1.
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>
                      **Prefix `(++x)`:** Increments the value *then* uses it.
                    </li>
                    <li>
                      **Postfix `(x++)`:** Uses the value *then* increments it.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `--` (Decrement):
                  </strong>{" "}
                  Decrements the value of a variable by 1.
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>
                      **Prefix `(--x)`:** Decrements the value *then* uses it.
                    </li>
                    <li>
                      **Postfix `(x--)`:** Uses the value *then* decrements it.
                    </li>
                  </ul>
                </li>
              </ul>
              <JavascriptViewCode code={section1} indexNumber={0} />

              <h4 className="tw:text-lg! sm:tw:text-xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. Assignment Operators
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These operators are used to assign values to variables. The most
                basic is the simple assignment operator (`=`). Compound
                assignment operators combine an arithmetic operation with an
                assignment.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `=` (Assignment):
                  </strong>{" "}
                  Assigns the value of the right operand to the left operand.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `+=` (Add and assign):
                  </strong>{" "}
                  `x += y` is equivalent to `x = x + y`.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `-=` (Subtract and assign):
                  </strong>{" "}
                  `x -= y` is equivalent to `x = x - y`.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `*=` (Multiply and assign):
                  </strong>{" "}
                  `x *= y` is equivalent to `x = x * y`.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `/=` (Divide and assign):
                  </strong>{" "}
                  `x /= y` is equivalent to `x = x / y`.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `%=` (Modulus and assign):
                  </strong>{" "}
                  `x %= y` is equivalent to `x = x % y`.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `**=` (Exponentiate and assign):
                  </strong>{" "}
                  `x **= y` is equivalent to `x = x ** y`.
                </li>
              </ul>
              <JavascriptViewCode code={section2} indexNumber={1} />

              <h4 className="tw:text-lg! sm:tw:text-xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                3. Comparison Operators
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These operators compare two operands and return a `Boolean`
                value (`true` or `false`) based on the comparison.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `==` (Loose Equality):
                  </strong>{" "}
                  Compares values for equality, performing type coercion if
                  necessary.{" "}
                  <strong className="tw:font-bold! tw:text-red-700!">
                    Avoid this in most cases!
                  </strong>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `===` (Strict Equality):
                  </strong>{" "}
                  Compares values for equality and also checks if they are of
                  the same type.{" "}
                  <strong className="tw:font-bold! tw:text-green-700!">
                    Always prefer this!
                  </strong>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `!=` (Loose Inequality):
                  </strong>{" "}
                  Returns `true` if operands are not equal, with type coercion.{" "}
                  <strong className="tw:font-bold! tw:text-red-700!">
                    Avoid!
                  </strong>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `!==` (Strict Inequality):
                  </strong>{" "}
                  Returns `true` if operands are not equal or not of the same
                  type.{" "}
                  <strong className="tw:font-bold! tw:text-green-700!">
                    Always prefer!
                  </strong>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `{">"}` (Greater Than):
                  </strong>{" "}
                  Returns `true` if the left operand is greater than the right.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `{"<"}` (Less Than):
                  </strong>{" "}
                  Returns `true` if the left operand is less than the right.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `{">="}` (Greater Than or Equal To):
                  </strong>{" "}
                  Returns `true` if the left operand is greater than or equal to
                  the right.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `{"<="}` (Less Than or Equal To):
                  </strong>{" "}
                  Returns `true` if the left operand is less than or equal to
                  the right.
                </li>
              </ul>
              <p className=" tw:leading-relaxed! tw:mb-4! tw:font-bold! tw:text-indigo-700!">
                Reminder about Type Coercion:
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-6!">
                As discussed in the previous chapter, JavaScript's loose
                equality (`==`) and inequality (`!=`) operators can lead to
                unexpected results due to **type coercion**. They try to convert
                operands to a common type before comparison. Strict equality
                (`===`) and strict inequality (`!==`) prevent this, ensuring
                robust comparisons.
              </p>
              <JavascriptViewCode code={section3} indexNumber={2} />

              <h4 className="tw:text-lg! sm:tw:text-xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                4. Logical Operators
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These operators are used to combine or modify boolean
                expressions. They are fundamental for controlling program flow
                (e.g., `if` statements).
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&&` (Logical AND):
                  </strong>{" "}
                  Returns `true` if *both* operands are `true`. Otherwise, it
                  returns `false`. It performs "short-circuiting": if the first
                  operand is `false`, it doesn't evaluate the second.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `||` (Logical OR):
                  </strong>{" "}
                  Returns `true` if *at least one* operand is `true`. Otherwise,
                  it returns `false`. It also short-circuits: if the first
                  operand is `true`, it doesn't evaluate the second.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `!` (Logical NOT):
                  </strong>{" "}
                  Inverts the boolean value of its operand. If `true` becomes
                  `false`, `false` becomes `true`. It's a unary operator
                  (operates on one operand).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `??` (Nullish Coalescing Operator - ES2020):
                  </strong>{" "}
                  Returns the right-hand operand when the left-hand operand is
                  `null` or `undefined`. Unlike `||`, it does *not* treat other
                  "falsy" values (like `0` or `''`) as nullish. This is useful
                  for providing default values.
                </li>
              </ul>
              <JavascriptViewCode code={section4} indexNumber={3} />

              <h4 className="tw:text-lg! sm:tw:text-xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                5. Ternary (Conditional) Operator
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is a shorthand for an `if-else` statement. It's the only
                JavaScript operator that takes three operands.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  **Syntax:** `condition ? expressionIfTrue : expressionIfFalse`
                </li>
                <li>
                  If the `condition` is `true`, `expressionIfTrue` is executed.
                </li>
                <li>
                  If the `condition` is `false`, `expressionIfFalse` is
                  executed.
                </li>
              </ul>
              <JavascriptViewCode code={section5} indexNumber={4} />

              <h4 className="tw:text-lg! sm:tw:text-xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                6. Type Operators
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These operators are used to determine the type of a variable or
                an object.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `typeof` (Unary):
                  </strong>{" "}
                  Returns a string indicating the data type of its operand.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `instanceof` (Binary):
                  </strong>{" "}
                  Returns `true` if an object is an instance of a specified
                  object type (or class), `false` otherwise.
                </li>
              </ul>
              <JavascriptViewCode code={section6} indexNumber={5} />

              <h4 className="tw:text-lg! sm:tw:text-xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Other Important Operators (Brief Mention)
              </h4>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `delete` (Unary):
                  </strong>{" "}
                  Deletes a property from an object.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `in` (Binary):
                  </strong>{" "}
                  Returns `true` if the specified property is in the specified
                  object.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Comma Operator (`,`):
                  </strong>{" "}
                  Evaluates each of its operands (from left to right) and
                  returns the value of the last operand. (Less common in
                  everyday code, but seen in `for` loops).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Bitwise Operators:
                  </strong>{" "}
                  (
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    `&`
                  </code>
                  ,{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    `|`
                  </code>
                  ,{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    `^`
                  </code>
                  ,{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    `~`
                  </code>
                  ,{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    `{"<<"}`
                  </code>
                  ,{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    `{">>"}`
                  </code>
                  ,{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    `{">>>"}`
                  </code>
                  ) Perform operations on the binary representation of numbers.
                  These are for more advanced use cases.
                </li>
              </ul>
            </section>
            ---
            {/* What are Expressions? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                What Are Expressions? The Building Blocks of Values 🧱
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                An **expression** in JavaScript is any valid unit of code that
                resolves to a value. This means that after the code is
                evaluated, it produces a single result. Expressions can be
                simple or complex.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  **Literals:** A direct value (e.g., `10`, `"hello"`, `true`).
                </li>
                <li>
                  **Variables:** A variable name that resolves to its stored
                  value (e.g., `myNumber`).
                </li>
                <li>
                  **Combinations:** Operators acting on literals or variables
                  (e.g., `a + b`, `isLoggedIn && isAdmin`, `{"age >= 18"}`).
                </li>
                <li>
                  **Function Calls:** A function call that returns a value
                  (e.g., `Math.random()`, `greet("Alice")`).
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Every example we've seen so far, from `10 + 5` to `num1 ===
                strNum`, is an expression. When an expression is followed by a
                semicolon (`;`), it becomes a **statement**.
              </p>
            </section>
            ---
            {/* Operator Precedence and Associativity Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Operator Precedence & Associativity: Order of Operations 🔄
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Just like in mathematics, JavaScript has rules that dictate the
                order in which operators in an expression are evaluated. This is
                called **operator precedence**. When operators have the same
                precedence, **associativity** (left-to-right or right-to-left)
                determines the order.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Precedence:
                  </strong>{" "}
                  Operators with higher precedence are evaluated before
                  operators with lower precedence. For example, multiplication
                  (`*`) and division (`/`) have higher precedence than addition
                  (`+`) and subtraction (`-`).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Associativity:
                  </strong>{" "}
                  When operators have the same precedence, associativity
                  determines the grouping. Most operators in JavaScript are
                  left-to-right associative (e.g., `a - b - c` is `(a - b) -
                  c`), but some, like assignment (`=`) and exponentiation
                  (`**`), are right-to-left.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Parentheses (`()`):
                  </strong>{" "}
                  You can always use parentheses to explicitly control the order
                  of operations, forcing a certain part of an expression to be
                  evaluated first. It's good practice to use them for clarity,
                  even if the default precedence would yield the same result.
                </li>
              </ul>
              <p className=" tw:leading-relaxed! tw:mb-4! tw:font-bold! tw:text-indigo-700!">
                Common Precedence Order (highest to lowest, simplified):
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>Parentheses `()`</li>
                <li>Postfix Increment/Decrement `x++`, `x--`</li>
                <li>Prefix Increment/Decrement `++x`, `--x`</li>
                <li>Logical NOT `!`</li>
                <li>Exponentiation `**`</li>
                <li>Multiplication `*`, Division `/`, Modulus `%`</li>
                <li>Addition `+`, Subtraction `-`</li>
                <li>
                  Comparison Operators `{"<"}`, `{"<="}`, `{">"}`, `{">="}`
                </li>
                <li>Equality Operators `==`, `!=`, `===`, `!==`</li>
                <li>Logical AND `&&`</li>
                <li>Logical OR `||`</li>
                <li>Nullish Coalescing `??`</li>
                <li>Assignment Operators `=`, `+=`, `-=`, etc.</li>
              </ul>
              <JavascriptViewCode code={section7} indexNumber={6} />
            </section>
            ---
            {/* What's Next? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Onward to Control Flow: Making Decisions! 🚦
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You now have a comprehensive understanding of JavaScript
                operators and how they combine to form expressions. This is the
                bedrock for creating any meaningful logic in your programs. You
                can perform calculations, make assignments, compare values, and
                combine logical conditions.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                In the next chapter, we'll put these expressions to practical
                use as we dive into **Control Flow**. This will teach you how to
                make your programs smart, allowing them to make decisions and
                execute different blocks of code based on certain conditions.
                Get ready to add intelligence to your web pages!
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
