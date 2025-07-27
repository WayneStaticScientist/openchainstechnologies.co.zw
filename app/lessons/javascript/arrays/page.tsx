import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";

export const metadata = {
  title:
    "JavaScript Arrays: Creation, Manipulation, & Methods - OpenChains Technologies",
  description:
    "Master JavaScript arrays: learn how to create, access, modify, add/remove elements, and use essential array methods like push, pop, shift, unshift, splice, slice, map, filter, reduce, forEach, and more.",
  openGraph: {
    title:
      "JavaScript Arrays: Creation, Manipulation, & Methods - OpenChains Technologies",
    description:
      "Master JavaScript arrays: learn how to create, access, modify, add/remove elements, and use essential array methods like push, pop, shift, unshift, splice, slice, map, filter, reduce, forEach, and more.",
    url: `${baseUrl}/lessons/javascript/arrays`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JavaScript Arrays: Creation, Manipulation, & Methods - OpenChains Technologies",
    description:
      "Master JavaScript arrays: learn how to create, access, modify, add/remove elements, and use essential array methods like push, pop, shift, unshift, splice, slice, map, filter, reduce, forEach, and more.",
  },
  keywords: [
    "JavaScript arrays",
    "array basics",
    "create array",
    "access array elements",
    "modify array",
    "add to array",
    "remove from array",
    "array methods",
    "push array",
    "pop array",
    "shift unshift",
    "splice array",
    "slice array",
    "indexOf array",
    "includes array",
    "forEach array",
    "map array",
    "filter array",
    "reduce array",
    "sort array",
    "concat arrays",
    "spread operator arrays",
    "array iteration",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/arrays`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Array Creation and Access
const section1 = `// 1. Array Literal (Most common and recommended)
const fruits = ["apple", "banana", "cherry"];
console.log("Fruits array:", fruits); // Output: ["apple", "banana", "cherry"]
console.log("Type of fruits:", typeof fruits); // Output: object (arrays are special objects)
console.log("Is fruits an array?", Array.isArray(fruits)); // Output: true

// 2. Using new Array() constructor (Less common, potential pitfalls)
const numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers array:", numbers); // Output: [1, 2, 3, 4, 5]

const emptyArray = new Array();
console.log("Empty array:", emptyArray); // Output: []

// CAUTION: If new Array() receives a single number, it creates an empty array of that length
const fiveEmptySlots = new Array(5);
console.log("Five empty slots:", fiveEmptySlots); // Output: [empty × 5]
console.log("Length of fiveEmptySlots:", fiveEmptySlots.length); // Output: 5

// Accessing elements by index
console.log("First fruit:", fruits[0]); // Output: apple (index 0)
console.log("Second fruit:", fruits[1]); // Output: banana
console.log("Last fruit:", fruits[fruits.length - 1]); // Output: cherry

// Accessing non-existent index (returns undefined)
console.log("Fruit at index 5:", fruits[5]); // Output: undefined

// Arrays can hold mixed data types
const mixedData = ["text", 123, true, null, { name: "Alice" }, [1, 2]];
console.log("Mixed data array:", mixedData);
console.log("Accessing object in mixedData:", mixedData[4].name); // Output: Alice
`;

// Code example 2: Modifying Array Elements
const section2 = `const colors = ["red", "green", "blue", "yellow"];
console.log("Original colors:", colors); // Output: ["red", "green", "blue", "yellow"]

// Modify an element using its index
colors[1] = "emerald";
console.log("Colors after modification:", colors); // Output: ["red", "emerald", "blue", "yellow"]

// Add a new element by assigning to a new index
colors[4] = "purple";
console.log("Colors after adding at index 4:", colors); // Output: ["red", "emerald", "blue", "yellow", "purple"]
console.log("New length:", colors.length); // Output: 5

// If you skip indices, empty slots are created (sparse arrays)
colors[7] = "black";
console.log("Colors after skipping indices:", colors); // Output: ["red", "emerald", "blue", "yellow", "purple", empty × 2, "black"]
console.log("New length (including empty slots):", colors.length); // Output: 8
console.log("Value at empty slot:", colors[5]); // Output: undefined
`;

// Code example 3: Adding/Removing Elements (Mutating Methods)
const section3 = `const tasks = ["clean room", "buy groceries", "pay bills"];
console.log("Initial tasks:", tasks); // Output: ["clean room", "buy groceries", "pay bills"]

// 1. push(): Add to the end
let newLengthPush = tasks.push("walk dog");
console.log("After push (walk dog):", tasks); // Output: ["clean room", "buy groceries", "pay bills", "walk dog"]
console.log("New length after push:", newLengthPush); // Output: 4

tasks.push("read book", "exercise"); // Can add multiple
console.log("After push (multiple):", tasks); // Output: ["clean room", "buy groceries", "pay bills", "walk dog", "read book", "exercise"]

// 2. pop(): Remove from the end
let removedTaskPop = tasks.pop();
console.log("After pop:", tasks); // Output: ["clean room", "buy groceries", "pay bills", "walk dog", "read book"]
console.log("Removed task (pop):", removedTaskPop); // Output: exercise

// 3. unshift(): Add to the beginning
let newLengthUnshift = tasks.unshift("wake up early");
console.log("After unshift (wake up early):", tasks); // Output: ["wake up early", "clean room", "buy groceries", "pay bills", "walk dog", "read book"]
console.log("New length after unshift:", newLengthUnshift); // Output: 6

// 4. shift(): Remove from the beginning
let removedTaskShift = tasks.shift();
console.log("After shift:", tasks); // Output: ["clean room", "buy groceries", "pay bills", "walk dog", "read book"]
console.log("Removed task (shift):", removedTaskShift); // Output: wake up early
`;

// Code example 4: splice() vs. slice() - Crucial Difference!
const section4 = `const colors = ["red", "green", "blue", "yellow", "purple"];
console.log("Original array:", colors); // Output: ["red", "green", "blue", "yellow", "purple"]

// 1. splice() - MODIFIES the original array
// splice(startIndex, deleteCount, item1, item2, ...)

// Delete 1 element from index 2
let removedSplice1 = colors.splice(2, 1); // Removes "blue"
console.log("After splice(2, 1):", colors); // Output: ["red", "green", "yellow", "purple"]
console.log("Removed by splice(2, 1):", removedSplice1); // Output: ["blue"]

// Add 2 elements at index 1 (without deleting any)
let removedSplice2 = colors.splice(1, 0, "orange", "pink");
console.log("After splice(1, 0, 'orange', 'pink'):", colors); // Output: ["red", "orange", "pink", "green", "yellow", "purple"]
console.log("Removed by splice(1, 0...):", removedSplice2); // Output: [] (nothing removed)

// Replace 1 element at index 3 with 2 new elements
let removedSplice3 = colors.splice(3, 1, "cyan", "magenta"); // Removes "green"
console.log("After splice(3, 1, 'cyan', 'magenta'):", colors); // Output: ["red", "orange", "pink", "cyan", "magenta", "yellow", "purple"]
console.log("Removed by splice(3, 1...):", removedSplice3); // Output: ["green"]

// 2. slice() - DOES NOT MODIFY the original array (returns a NEW array)
// slice(startIndex, endIndex (exclusive))

const animals = ["cat", "dog", "elephant", "fox", "giraffe"];
console.log("\\nOriginal animals:", animals); // Output: ["cat", "dog", "elephant", "fox", "giraffe"]

// Get elements from index 1 up to (but not including) index 4
let slicedAnimals1 = animals.slice(1, 4);
console.log("Sliced (1, 4):", slicedAnimals1); // Output: ["dog", "elephant", "fox"]
console.log("Original after slice:", animals); // Output: ["cat", "dog", "elephant", "fox", "giraffe"] (unmodified!)

// Get elements from index 2 to the end
let slicedAnimals2 = animals.slice(2);
console.log("Sliced (2):", slicedAnimals2); // Output: ["elephant", "fox", "giraffe"]

// Get a copy of the entire array
let slicedAnimalsCopy = animals.slice();
console.log("Sliced (copy):", slicedAnimalsCopy); // Output: ["cat", "dog", "elephant", "fox", "giraffe"]
console.log("Is it the same array object?", slicedAnimalsCopy === animals); // Output: false (it's a new array)

// Using negative indices with slice (counts from end)
let slicedAnimalsNegative = animals.slice(-3, -1); // From 3rd last to 2nd last (exclusive)
console.log("Sliced (-3, -1):", slicedAnimalsNegative); // Output: ["elephant", "fox"]
`;

// Code example 5: Searching and Checking
const section5 = `const fruits = ["apple", "banana", "cherry", "apple", "grape"];
console.log("Fruits array:", fruits);

// 1. indexOf(): Returns the first index of an element, or -1 if not found
console.log("Index of 'banana':", fruits.indexOf("banana")); // Output: 1
console.log("Index of 'apple' (first occurrence):", fruits.indexOf("apple")); // Output: 0
console.log("Index of 'orange':", fruits.indexOf("orange")); // Output: -1

// indexOf() with startIndex
console.log("Index of 'apple' starting from index 1:", fruits.indexOf("apple", 1)); // Output: 3

// 2. lastIndexOf(): Returns the last index of an element, or -1 if not found
console.log("Last index of 'apple':", fruits.lastIndexOf("apple")); // Output: 3

// 3. includes() (ES6): Checks if an element exists, returns true or false
console.log("Does array include 'cherry'?", fruits.includes("cherry")); // Output: true
console.log("Does array include 'mango'?", fruits.includes("mango")); // Output: false

// includes() with startIndex
console.log("Does array include 'banana' from index 2?", fruits.includes("banana", 2)); // Output: false

// 4. find() (ES6): Returns the first element that satisfies a test function
const numbers = [10, 25, 30, 45, 50];
const foundNumber = numbers.find(num => num > 30);
console.log("First number > 30:", foundNumber); // Output: 45

const noMatch = numbers.find(num => num > 100);
console.log("First number > 100:", noMatch); // Output: undefined

// 5. findIndex() (ES6): Returns the index of the first element that satisfies a test function
const foundIndex = numbers.findIndex(num => num % 2 === 0); // Find first even number
console.log("Index of first even number:", foundIndex); // Output: 0 (for 10)

const noIndexMatch = numbers.findIndex(num => num > 100);
console.log("Index of first number > 100:", noIndexMatch); // Output: -1
`;

// Code example 6: Iteration Methods
const section6 = `const groceries = ["milk", "bread", "eggs", "butter"];

// 1. forEach() - Executes a provided function once for each array element
console.log("--- forEach() ---");
groceries.forEach(function(item, index) {
  console.log(\`\${index + 1}. \${item}\`);
});
// Output:
// 1. milk
// 2. bread
// 3. eggs
// 4. butter

// Using an arrow function for forEach (common)
console.log("\\n--- forEach() with Arrow Function ---");
groceries.forEach(item => console.log(item.toUpperCase()));
// Output: MILK, BREAD, EGGS, BUTTER

// 2. map() - Creates a NEW array by calling a provided function on every element
console.log("\\n--- map() ---");
const upperCaseGroceries = groceries.map(item => item.toUpperCase());
console.log("Original array:", groceries);         // Output: ["milk", "bread", "eggs", "butter"] (unmodified)
console.log("Upper case array:", upperCaseGroceries); // Output: ["MILK", "BREAD", "EGGS", "BUTTER"]

const prices = [10, 20, 30];
const pricesWithTax = prices.map(price => price * 1.15); // Add 15% tax
console.log("Prices with tax:", pricesWithTax); // Output: [11.5, 23, 34.5]

// 3. filter() - Creates a NEW array with all elements that pass the test implemented by the provided function
console.log("\\n--- filter() ---");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Original numbers:", numbers); // Output: [1, 2, ..., 10] (unmodified)
console.log("Even numbers:", evenNumbers); // Output: [2, 4, 6, 8, 10]

const longWords = ["apple", "banana", "kiwi", "grapefruit"];
const wordsOver5Chars = longWords.filter(word => word.length > 5);
console.log("Words over 5 chars:", wordsOver5Chars); // Output: ["banana", "grapefruit"]

// 4. reduce() - Executes a reducer function on each element of the array, resulting in a single output value
console.log("\\n--- reduce() ---");
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 0 is initial accumulator value
console.log("Sum of numbers:", sum); // Output: 55 (1+2+...+10)

const maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
console.log("Max number:", maxNumber); // Output: 10

const product = prices.reduce((acc, current) => acc * current, 1); // Initial value 1 for product
console.log("Product of prices:", product); // Output: 6000 (10*20*30)

// Reduce to count occurrences of items
const fruitsCount = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const fruitCountsMap = fruitsCount.reduce((obj, fruit) => {
  obj[fruit] = (obj[fruit] || 0) + 1;
  return obj;
}, {});
console.log("Fruit counts:", fruitCountsMap); // Output: { apple: 3, banana: 2, cherry: 1 }

// 5. some() - Checks if at least one element in the array passes the test
console.log("\\n--- some() ---");
const hasEven = numbers.some(num => num % 2 === 0);
console.log("Does numbers array have any even numbers?", hasEven); // Output: true

const hasNegative = numbers.some(num => num < 0);
console.log("Does numbers array have any negative numbers?", hasNegative); // Output: false

// 6. every() - Checks if all elements in the array pass the test
console.log("\\n--- every() ---");
const allEven = numbers.every(num => num % 2 === 0);
console.log("Are all numbers even?", allEven); // Output: false

const allPositive = numbers.every(num => num > 0);
console.log("Are all numbers positive?", allPositive); // Output: true
`;

// Code example 7: Other Useful Array Methods
const section7 = `const arr1 = ["a", "b"];
const arr2 = ["c", "d"];
const arr3 = ["e", "f"];

// 1. concat() - Joins two or more arrays, returns a NEW array
console.log("--- concat() ---");
const combinedArray = arr1.concat(arr2, arr3);
console.log("Combined array:", combinedArray); // Output: ["a", "b", "c", "d", "e", "f"]
console.log("Original arr1 after concat:", arr1); // Output: ["a", "b"] (unmodified)

// Using Spread Operator for concatenating (Modern & common alternative)
const combinedWithSpread = [...arr1, ...arr2, ...arr3];
console.log("Combined with Spread:", combinedWithSpread); // Output: ["a", "b", "c", "d", "e", "f"]

// 2. join() - Joins all elements into a string, separated by a specified separator
console.log("\\n--- join() ---");
const words = ["Hello", "World", "JavaScript"];
const sentence = words.join(" ");
console.log("Joined with space:", sentence); // Output: "Hello World JavaScript"

const csvData = [10, 20, 30];
console.log("Joined with comma:", csvData.join(",")); // Output: "10,20,30"

// 3. reverse() - Reverses the order of elements IN PLACE (modifies original array)
console.log("\\n--- reverse() ---");
const numbersToReverse = [1, 2, 3, 4, 5];
console.log("Original:", numbersToReverse); // Output: [1, 2, 3, 4, 5]
numbersToReverse.reverse();
console.log("Reversed (original modified):", numbersToReverse); // Output: [5, 4, 3, 2, 1]

// 4. sort() - Sorts the elements of an array IN PLACE (modifies original array)
// By default, it sorts alphabetically (strings)
console.log("\\n--- sort() ---");
const unsortedStrings = ["banana", "apple", "cherry"];
unsortedStrings.sort();
console.log("Sorted strings:", unsortedStrings); // Output: ["apple", "banana", "cherry"]

// For numbers, you need a compare function!
const unsortedNumbers = [1, 10, 2, 20, 5];
// Default sort for numbers (treats them as strings)
unsortedNumbers.sort();
console.log("Incorrectly sorted numbers (default):", unsortedNumbers); // Output: [1, 10, 2, 20, 5] (likely 1, 10, 2, 20, 5 due to string conversion)

// Correct numeric sort (ascending)
unsortedNumbers.sort((a, b) => a - b);
console.log("Correctly sorted numbers (ascending):", unsortedNumbers); // Output: [1, 2, 5, 10, 20]

// Correct numeric sort (descending)
unsortedNumbers.sort((a, b) => b - a);
console.log("Correctly sorted numbers (descending):", unsortedNumbers); // Output: [20, 10, 5, 2, 1]

// 5. flat() (ES2019) - Creates a new array with all sub-array elements concatenated into it recursively up to a specified depth
console.log("\\n--- flat() ---");
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log("Nested array:", nestedArray);

const flatOnce = nestedArray.flat();
console.log("Flat (default 1 depth):", flatOnce); // Output: [1, 2, 3, 4, [5, 6]]

const flatAll = nestedArray.flat(Infinity); // Flat to all depths
console.log("Flat (all depths):", flatAll); // Output: [1, 2, 3, 4, 5, 6]
`;

export default function JavascriptArraysPage() {
  const page = 5; // This is the sixth page in the JavaScript tutorial series

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/CCEEFF/006699?text=JavaScript+Arrays:+Organizing+Your+Data"
              alt="JavaScript Arrays Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              JavaScript Arrays: Organizing Collections of Data! 📚
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              So far, you've learned about individual pieces of data (variables,
              data types) and how to put them to work (operators, control flow,
              functions). But what if you have a **list** of related items? What
              if you need to store multiple names, numbers, or objects? This is
              where **Arrays** come in. Arrays are fundamental to working with
              collections of data in JavaScript.
            </p>
            ---
            {/* What are Arrays? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                What are Arrays? Ordered Lists of Everything! 📦
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                An **array** is a special type of JavaScript **object** used to
                store an ordered collection of values. These values can be of
                any data type (numbers, strings, booleans, objects, even other
                arrays!), and they are stored in a contiguous manner, meaning
                they have a defined order.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  **Ordered Collection:** Elements in an array maintain their
                  order.
                </li>
                <li>
                  **Indexed Access:** Each element in an array has a numeric
                  **index**, starting from `0`. This is how you access
                  individual elements.
                </li>
                <li>
                  **Dynamic Size:** Arrays in JavaScript are dynamic; they can
                  grow and shrink as needed.
                </li>
                <li>
                  **Heterogeneous:** An array can contain elements of different
                  data types.
                </li>
                <li>
                  **Objects Underneath:** Technically, arrays are objects. The
                  `typeof` operator will return `"object"` for an array. Use
                  `Array.isArray()` to reliably check if a variable is an array.
                </li>
              </ul>
            </section>
            ---
            {/* Creating and Accessing Arrays */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-blue-400! tw:pb-2!">
                Creating & Accessing Arrays: Your First Collections 🏗️
              </h2>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. Creating Arrays
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                There are two primary ways to create arrays:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    Array Literal (`[]`):
                  </strong>{" "}
                  This is the most common, concise, and recommended way. You
                  simply list the elements inside square brackets, separated by
                  commas.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `new Array()` Constructor:
                  </strong>{" "}
                  Less common. Can be used with `new Array(element1, element2,
                  ...)` or `new Array(length)` to create an array with a
                  specified number of empty slots. Be careful with the single
                  number argument, as it creates empty slots, not an array
                  containing that number.
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. Accessing Elements (Zero-Based Indexing)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                To get a specific element from an array, you use its **index**
                inside square brackets `[]`. Remember, array indices always
                start from `0`.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>`arrayName[0]` gives you the first element.</li>
                <li>
                  `arrayName[arrayName.length - 1]` gives you the last element
                  (useful since `.length` is always one more than the highest
                  index).
                </li>
                <li>
                  Accessing an index that doesn't exist will return `undefined`.
                </li>
              </ul>
              <JavascriptViewCode code={section1} indexNumber={0} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                3. Modifying Elements
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can change an element in an array by simply assigning a new
                value to a specific index. You can also add new elements by
                assigning to an index outside the current range, which will
                automatically expand the array and potentially create "empty
                slots" (called sparse arrays) if you skip indices.
              </p>
              <JavascriptViewCode code={section2} indexNumber={1} />
            </section>
            ---
            {/* Adding and Removing Elements (Mutating Methods) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-green-400! tw:pb-2!">
                Adding & Removing Elements: Changing Your Collections
                Dynamically ↔️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                JavaScript provides several built-in array methods to add or
                remove elements. These methods **mutate** (change) the original
                array.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `push(element1, ...)`:
                  </strong>{" "}
                  Adds one or more elements to the **end** of an array and
                  returns the new length.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `pop()`:
                  </strong>{" "}
                  Removes the **last** element from an array and returns that
                  removed element.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `unshift(element1, ...)`:
                  </strong>{" "}
                  Adds one or more elements to the **beginning** of an array and
                  returns the new length.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `shift()`:
                  </strong>{" "}
                  Removes the **first** element from an array and returns that
                  removed element.
                </li>
              </ul>
              <JavascriptViewCode code={section3} indexNumber={2} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                `splice()` vs. `slice()`: A Crucial Distinction! ✂️
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These two methods are often confused because of their similar
                names, but they serve very different purposes:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `splice()` (Mutating):
                  </strong>{" "}
                  The Swiss Army knife of array modification! It changes the
                  contents of an array by removing or replacing existing
                  elements and/or adding new elements **in place**. It returns
                  an array containing the deleted elements (if any).
                  <br />
                  **Syntax:** `array.splice(startIndex, deleteCount, item1,
                  item2, ...)`
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>
                      `startIndex`: The index at which to start changing the
                      array.
                    </li>
                    <li>
                      `deleteCount`: The number of elements to remove from
                      `startIndex`. If `0`, no elements are removed.
                    </li>
                    <li>
                      `item1, item2, ...`: Optional. The elements to add to the
                      array, starting at `startIndex`.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `slice()` (Non-Mutating):
                  </strong>{" "}
                  Extracts a portion of an array and returns a **new array**.
                  The original array remains unchanged.
                  <br />
                  **Syntax:** `array.slice(startIndex, endIndex)`
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>
                      `startIndex`: The index at which to begin extraction.
                      (Optional, defaults to 0).
                    </li>
                    <li>
                      `endIndex`: The index *before* which to end extraction
                      (exclusive). (Optional, defaults to `array.length`).
                    </li>
                    <li>Negative indices count from the end of the array.</li>
                  </ul>
                </li>
              </ul>
              <JavascriptViewCode code={section4} indexNumber={3} />
            </section>
            ---
            {/* Searching and Checking Arrays */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Searching & Checking Arrays: Finding What You Need 🔍
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These methods help you check for the presence of elements or
                find their positions.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `indexOf(element, startIndex)`:
                  </strong>{" "}
                  Returns the first index at which a given `element` can be
                  found in the array, or `-1` if it is not present.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `lastIndexOf(element, startIndex)`:
                  </strong>{" "}
                  Similar to `indexOf`, but searches from the end of the array
                  backwards and returns the last index.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `includes(element, startIndex)` (ES6):
                  </strong>{" "}
                  A simpler way to check for existence. Returns `true` if an
                  array contains the specified `element`, and `false` otherwise.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `find(callbackFunction)` (ES6):
                  </strong>{" "}
                  Returns the **first element** in the array that satisfies the
                  provided testing `callbackFunction`. If no elements satisfy
                  the test, `undefined` is returned.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `findIndex(callbackFunction)` (ES6):
                  </strong>{" "}
                  Returns the **index** of the first element in the array that
                  satisfies the provided testing `callbackFunction`. Otherwise,
                  it returns `-1`.
                </li>
              </ul>
              <JavascriptViewCode code={section5} indexNumber={4} />
            </section>
            ---
            {/* Iteration Methods (Higher-Order Functions) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-green-400! tw:pb-2!">
                Iteration Methods: Processing Array Elements Efficiently 🔄
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These are some of the most powerful and frequently used array
                methods. They are **higher-order functions** because they take a
                callback function as an argument, allowing you to perform
                operations on each element without writing explicit `for` loops.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `forEach(callbackFunction)`:
                  </strong>{" "}
                  Executes a provided `callbackFunction` once for each array
                  element. It's for performing side effects (like logging), not
                  for creating new arrays or modifying the original. Does not
                  return a new array.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `map(callbackFunction)`:
                  </strong>{" "}
                  Creates a **new array** populated with the results of calling
                  a provided `callbackFunction` on every element in the calling
                  array. The original array remains unchanged. Ideal for
                  transforming elements.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `filter(callbackFunction)`:
                  </strong>{" "}
                  Creates a **new array** with all elements that pass the test
                  implemented by the provided `callbackFunction`. The original
                  array remains unchanged. Ideal for selecting a subset of
                  elements.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `reduce(callbackFunction, initialValue)`:
                  </strong>{" "}
                  Executes a `reducer` `callbackFunction` on each element of the
                  array, resulting in a single output value. It's incredibly
                  versatile for summing, counting, flattening, or transforming
                  an array into a single value or object.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `some(callbackFunction)`:
                  </strong>{" "}
                  Tests whether at least one element in the array passes the
                  test implemented by the provided `callbackFunction`. Returns
                  `true` if it finds one, `false` otherwise.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `every(callbackFunction)`:
                  </strong>{" "}
                  Tests whether all elements in the array pass the test
                  implemented by the provided `callbackFunction`. Returns `true`
                  if all pass, `false` otherwise.
                </li>
              </ul>
              <JavascriptViewCode code={section6} indexNumber={5} />
            </section>
            ---
            {/* Other Useful Array Methods */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-orange-400! tw:pb-2!">
                Other Useful Array Methods 🛠️
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-gray-600!">
                    `concat(array1, array2, ...)`:
                  </strong>{" "}
                  Used to merge two or more arrays. This method does not change
                  the existing arrays, but instead returns a **new array**.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-gray-600!">
                    `join(separator)`:
                  </strong>{" "}
                  Joins all elements of an array into a string. The `separator`
                  (optional, defaults to comma) is placed between each element.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-gray-600!">
                    `reverse()`:
                  </strong>{" "}
                  Reverses the order of the elements in an array **in place**
                  (mutates the original array).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-gray-600!">
                    `sort(compareFunction)`:
                  </strong>{" "}
                  Sorts the elements of an array **in place** and returns the
                  sorted array. By default, it sorts elements as strings. For
                  numeric sorting, you *must* provide a `compareFunction`.
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>For ascending numeric sort: `(a, b) {"=>"} a - b`</li>
                    <li>For descending numeric sort: `(a, b) {"=>"} b - a`</li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-gray-600!">
                    `flat(depth)` (ES2019):
                  </strong>{" "}
                  Creates a **new array** with all sub-array elements
                  concatenated into it recursively up to the specified `depth`.
                  Useful for handling nested arrays. `Infinity` can be used for
                  `depth` to flatten all levels.
                </li>
              </ul>
              <JavascriptViewCode code={section7} indexNumber={6} />
            </section>
            ---
            {/* What's Next? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-gray-400! tw:pb-2!">
                What's Next? Understanding Objects: The Heart of JavaScript! ❤️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You've now mastered the art of working with arrays, from basic
                creation and access to powerful manipulation and iteration
                methods. Arrays are indispensable for managing lists of data in
                JavaScript applications.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                Next up, we'll dive into **Objects**, which allow you to group
                related data and functionality together using key-value pairs.
                This will enable you to model more complex, real-world entities
                in your code. Are you ready to explore how JavaScript stores
                structured data?
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
