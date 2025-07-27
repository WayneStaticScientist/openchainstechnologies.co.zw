import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";

export const metadata = {
  title:
    "JavaScript Objects: Deep Dive into Key-Value Pairs - OpenChains Technologies",
  description:
    "Master JavaScript objects: learn to create, access, modify, and iterate over objects. Understand methods, 'this' keyword, object constructors, prototypes, inheritance, and advanced object features.",
  openGraph: {
    title:
      "JavaScript Objects: Deep Dive into Key-Value Pairs - OpenChains Technologies",
    description:
      "Master JavaScript objects: learn to create, access, modify, and iterate over objects. Understand methods, 'this' keyword, object constructors, prototypes, inheritance, and advanced object features.",
    url: `${baseUrl}/lessons/javascript/objects`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JavaScript Objects: Deep Dive into Key-Value Pairs - OpenChains Technologies",
    description:
      "Master JavaScript objects: learn to create, access, modify, and iterate over objects. Understand methods, 'this' keyword, object constructors, prototypes, inheritance, and advanced object features.",
  },
  keywords: [
    "JavaScript objects",
    "object basics",
    "create object",
    "access object properties",
    "object methods",
    "this keyword JavaScript",
    "object constructor",
    "prototype inheritance",
    "Object.create",
    "Object.keys",
    "Object.values",
    "Object.entries",
    "destructuring objects",
    "spread operator objects",
    "JSON JavaScript",
    "pass by reference objects",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/objects`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Object Creation and Access
const section1 = `// 1. Object Literal (Most common and recommended)
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "hiking", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};
console.log("Person object:", person);

// 2. Using new Object() constructor (Less common)
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2022;
console.log("Car object:", car);

// Accessing properties (Dot Notation)
console.log("Person's first name:", person.firstName); // Output: John
console.log("Car model:", car.model); // Output: Camry

// Accessing properties (Bracket Notation) - useful for dynamic keys or keys with special characters
console.log("Person's last name:", person["lastName"]); // Output: Doe
let propName = "age";
console.log("Person's age (dynamic):", person[propName]); // Output: 30

// Accessing nested properties
console.log("Person's city:", person.address.city); // Output: Anytown
console.log("First hobby:", person.hobbies[0]); // Output: reading

// Non-existent properties return undefined
console.log("Person's email:", person.email); // Output: undefined
`;

// Code example 2: Modifying and Adding/Deleting Properties
const section2 = `const product = {
  name: "Laptop",
  price: 1200,
  inStock: true
};
console.log("Initial product:", product);

// Modifying an existing property
product.price = 1150;
console.log("Product price after modification:", product.price); // Output: 1150

// Adding a new property
product.brand = "Dell";
console.log("Product after adding brand:", product);
// Output: { name: "Laptop", price: 1150, inStock: true, brand: "Dell" }

product["category"] = "Electronics"; // Using bracket notation for a new property
console.log("Product after adding category:", product);

// Deleting a property
delete product.inStock;
console.log("Product after deleting inStock:", product);
// Output: { name: "Laptop", price: 1150, brand: "Dell", category: "Electronics" }

// Attempting to delete a non-existent property returns true, no error
console.log("Delete non-existent property:", delete product.weight); // Output: true
console.log("Product after deleting non-existent:", product); // Object remains unchanged
`;

// Code example 3: Object Methods and 'this'
const section3 = `const user = {
  firstName: "Jane",
  lastName: "Smith",
  age: 28,
  // A method is a function stored as a property
  greet: function() {
    // 'this' refers to the object (user) that called the method
    console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
  },
  getBirthYear: function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  },
  // Shorthand method syntax (ES6)
  introduce() {
    console.log(\`I am \${this.firstName} \${this.lastName}, and I am \${this.age} years old.\`);
  }
};

user.greet(); // Output: Hello, my name is Jane Smith.
console.log("User's approximate birth year:", user.getBirthYear()); // Output: (current year - 28)

user.introduce(); // Output: I am Jane Smith, and I am 28 years old.

// The value of 'this' depends on HOW the function is called:
const greetFunc = user.greet;
// greetFunc(); // In non-strict mode: 'this' refers to the global object (window). In strict mode: 'this' is undefined. Leads to error!

// Correct way to bind 'this' when extracting a method:
const boundGreet = user.greet.bind(user);
boundGreet(); // Output: Hello, my name is Jane Smith.

// Arrow functions and 'this': Arrow functions do NOT have their own 'this'.
// They inherit 'this' from their surrounding lexical scope.
const anotherUser = {
  name: "Bob",
  sayNameRegular: function() {
    console.log("Regular function 'this.name':", this.name);
  },
  sayNameArrow: () => {
    // 'this' here refers to the 'this' of the surrounding scope (e.g., global object)
    console.log("Arrow function 'this.name':", this.name);
  }
};

anotherUser.sayNameRegular(); // Output: Regular function 'this.name': Bob
anotherUser.sayNameArrow();   // Output: Arrow function 'this.name': (undefined or global 'name' if exists)

// Example where arrow function 'this' is useful (e.g., in a class method, or nested callbacks)
const timer = {
  message: "Hello from timer!",
  start: function() {
    // 'this' here refers to 'timer'
    setTimeout(() => {
      // 'this' inside arrow function refers to 'timer' (lexical 'this')
      console.log(this.message);
    }, 1000);
  }
};
timer.start(); // Output (after 1 second): Hello from timer!
`;

// Code example 4: Object Iteration
const section4 = `const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
  published: 1937
};

console.log("--- Iterating with for...in ---");
for (let key in book) {
  // Check if the property belongs directly to the object (not inherited)
  if (book.hasOwnProperty(key)) {
    console.log(\`\${key}: \${book[key]}\`);
  }
}
// Output:
// title: The Hobbit
// author: J.R.R. Tolkien
// pages: 310
// published: 1937

console.log("\\n--- Using Object.keys() ---");
const keys = Object.keys(book); // Returns an array of property names
console.log("Keys:", keys); // Output: ["title", "author", "pages", "published"]
keys.forEach(key => {
  console.log(\`\${key}: \${book[key]}\`);
});

console.log("\\n--- Using Object.values() ---");
const values = Object.values(book); // Returns an array of property values
console.log("Values:", values); // Output: ["The Hobbit", "J.R.R. Tolkien", 310, 1937]
values.forEach(value => {
  console.log(value);
});

console.log("\\n--- Using Object.entries() (most versatile) ---");
const entries = Object.entries(book); // Returns an array of [key, value] pairs
console.log("Entries:", entries);
// Output: [ ["title", "The Hobbit"], ["author", "J.R.R. Tolkien"], ... ]
entries.forEach(([key, value]) => { // Using array destructuring
  console.log(\`\${key} => \${value}\`);
});

// For-of loop with Object.entries()
console.log("\\n--- For-of loop with Object.entries() ---");
for (const [key, value] of Object.entries(book)) {
  console.log(\`Key: \${key}, Value: \${value}\`);
}
`;

// Code example 5: Object Copying (Shallow vs. Deep)
const section5 = `// Primitive values are copied by value
let a = 10;
let b = a;
b = 20;
console.log("a:", a, "b:", b); // Output: a: 10 b: 20

// Objects are copied by reference (Shallow Copy)
let originalObj = {
  value: 10,
  nested: {
    data: "Hello"
  }
};
let copiedObj = originalObj; // 'copiedObj' now points to the SAME object in memory

copiedObj.value = 20; // Modifies the originalObj as well
console.log("originalObj.value:", originalObj.value); // Output: 20
console.log("copiedObj.value:", copiedObj.value);     // Output: 20

copiedObj.nested.data = "Changed!"; // Modifies the originalObj's nested object as well
console.log("originalObj.nested.data:", originalObj.nested.data); // Output: Changed!

// Creating a SHALLOW COPY (different top-level object, but nested objects are still references)
// 1. Using Spread Operator (...) (ES6)
let shallowCopySpread = { ...originalObj };
shallowCopySpread.value = 30; // Changes only shallowCopySpread's value
console.log("\\n--- Shallow Copy (Spread) ---");
console.log("originalObj.value:", originalObj.value); // Output: 20 (still from before)
console.log("shallowCopySpread.value:", shallowCopySpread.value); // Output: 30

shallowCopySpread.nested.data = "Changed by shallow copy!"; // STILL modifies originalObj's nested object
console.log("originalObj.nested.data:", originalObj.nested.data);     // Output: Changed by shallow copy!
console.log("shallowCopySpread.nested.data:", shallowCopySpread.nested.data); // Output: Changed by shallow copy!

// 2. Using Object.assign()
let shallowCopyAssign = Object.assign({}, originalObj);
shallowCopyAssign.value = 40;
console.log("\\n--- Shallow Copy (Object.assign) ---");
console.log("originalObj.value:", originalObj.value);       // Output: 20 (still from before)
console.log("shallowCopyAssign.value:", shallowCopyAssign.value); // Output: 40

// Deep Copy (for objects with nested objects/arrays)
// The simplest (but not safest for all cases) way for simple objects without functions/special types is JSON parsing
let deepCopyJson = JSON.parse(JSON.stringify(originalObj));
deepCopyJson.nested.data = "Changed by deep copy!"; // Changes ONLY deepCopyJson
console.log("\\n--- Deep Copy (JSON) ---");
console.log("originalObj.nested.data:", originalObj.nested.data); // Output: Changed by shallow copy! (still from previous mutation)
console.log("deepCopyJson.nested.data:", deepCopyJson.nested.data); // Output: Changed by deep copy!

// Note: JSON.parse(JSON.stringify()) has limitations:
// - Does not copy functions, Dates, RegExps, Maps, Sets, etc.
// - Will turn 'undefined' into 'null' or omit the property.
// For robust deep copying, consider libraries like Lodash's _.cloneDeep().
`;

// Code example 6: Object Constructors and 'new' Keyword
const section6 = `// Object Constructor Function (pre-ES6 class syntax)
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.greet = function() {
    console.log(\`Hello, my name is \${this.firstName} \${this.lastName}.\`);
  };
}

// Using the 'new' keyword to create instances
const person1 = new Person("Alice", "Wonderland", 25);
const person2 = new Person("Bob", "The Builder", 40);

console.log("Person 1:", person1);
console.log("Person 2:", person2);

person1.greet(); // Output: Hello, my name is Alice Wonderland.
person2.greet(); // Output: Hello, my name is Bob The Builder.

console.log(person1.firstName); // Output: Alice
console.log(person2.age);       // Output: 40

// What happens without 'new'?
const person3 = Person("Charlie", "Chaplin", 60);
// console.log(person3); // Output: undefined (because 'Person' doesn't explicitly return anything)
// console.log(window.firstName); // In browsers, 'this' would refer to 'window' (global object),
//                               // polluting the global scope. In strict mode, 'this' would be undefined.
// This is why 'new' is crucial for constructor functions.
`;

// Code example 7: Prototypes and Prototype Chain
const section7 = `// Constructor function
function Animal(name) {
  this.name = name;
  this.isAlive = true;
}

// Adding a method to the prototype
// This method is shared by ALL instances created with the Animal constructor,
// saving memory and allowing dynamic updates.
Animal.prototype.speak = function() {
  console.log(\`\${this.name} makes a sound.\`);
};

Animal.prototype.eat = function() {
  console.log(\`\${this.name} is eating.\`);
};

const dog = new Animal("Buddy");
const cat = new Animal("Whiskers");

dog.speak(); // Output: Buddy makes a sound.
cat.speak(); // Output: Whiskers makes a sound.

console.log("dog.eat() == ", dog.eat());

// Accessing prototype properties/methods
console.log("dog.hasOwnProperty('name'):", dog.hasOwnProperty('name'));       // Output: true (direct property)
console.log("dog.hasOwnProperty('speak'):", dog.hasOwnProperty('speak'));     // Output: false (inherited from prototype)
console.log("dog.__proto__ === Animal.prototype:", dog.__proto__ === Animal.prototype); // Output: true

// Prototype chain in action
function Dog(name, breed) {
  Animal.call(this, name); // Call Animal constructor to inherit properties
  this.breed = breed;
}

// Inherit methods from Animal's prototype
// Important: Must be done BEFORE adding methods to Dog.prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Correctly set the constructor reference

// Add a specific method for Dog
Dog.prototype.bark = function() {
  console.log(\`\${this.name} (\${this.breed}) barks loudly!\`);
};

const myDog = new Dog("Max", "Golden Retriever");
myDog.speak(); // Inherited from Animal.prototype: Max makes a sound.
myDog.bark();  // Specific to Dog.prototype: Max (Golden Retriever) barks loudly!
console.log("myDog.name:", myDog.name);     // Output: Max
console.log("myDog.breed:", myDog.breed);   // Output: Golden Retriever
console.log("myDog instanceof Dog:", myDog instanceof Dog);         // Output: true
console.log("myDog instanceof Animal:", myDog instanceof Animal);     // Output: true
console.log("myDog instanceof Object:", myDog instanceof Object);     // Output: true
`;

// Code example 8: ES6 Classes (Syntactic Sugar for Prototypes)
const section8 = `// Class Declaration
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Method (automatically added to prototype)
  start() {
    console.log(\`The \${this.make} \${this.model} starts.\`);
  }

  // Getter (looks like a property, behaves like a method)
  get description() {
    return \`This is a \${this.make} \${this.model}.\`;
  }
}

const myCar = new Vehicle("Honda", "Civic");
console.log("My Car:", myCar);
myCar.start(); // Output: The Honda Civic starts.
console.log(myCar.description); // Output: This is a Honda Civic.

// Class Inheritance using 'extends' and 'super'
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model); // Calls the parent (Vehicle) constructor
    this.year = year;
  }

  drive() {
    console.log(\`The \${this.year} \${this.make} \${this.model} is driving.\`);
  }

  // Override parent method
  start() {
    super.start(); // Call parent's start method
    console.log("Engine roars!");
  }

  // Static method (belongs to the class itself, not instances)
  static honk() {
    console.log("Honk! Honk!");
  }
}

const electricCar = new Car("Tesla", "Model 3", 2024);
electricCar.start(); // Output: The Tesla Model 3 starts. \n Engine roars!
electricCar.drive(); // Output: The 2024 Tesla Model 3 is driving.

// Accessing static method
Car.honk(); // Output: Honk! Honk!
// myCar.honk(); // Error: myCar.honk is not a function

console.log("electricCar instanceof Car:", electricCar instanceof Car);       // true
console.log("electricCar instanceof Vehicle:", electricCar instanceof Vehicle); // true
console.log("electricCar instanceof Object:", electricCar instanceof Object); // true
`;

// Code example 9: Destructuring Objects and Spread Syntax
const section9 = `const userProfile = {
  name: "Sarah",
  age: 29,
  city: "London",
  occupation: "Developer",
  contact: {
    email: "sarah@example.com",
    phone: "123-456-7890"
  },
  skills: ["JavaScript", "React", "Node.js"]
};

// Object Destructuring - Extracting properties into variables
const { name, age } = userProfile;
console.log("Destructured name:", name); // Output: Sarah
console.log("Destructured age:", age);   // Output: 29

// Destructuring with different variable names
const { city: userCity, occupation } = userProfile;
console.log("User city:", userCity);     // Output: London
console.log("Occupation:", occupation); // Output: Developer

// Destructuring nested objects
const { contact: { email, phone } } = userProfile;
console.log("User email:", email); // Output: sarah@example.com
console.log("User phone:", phone); // Output: 123-456-7890

// Destructuring with default values
const { country = "Unknown", age: userAge = 0 } = userProfile;
console.log("Country:", country); // Output: Unknown (since 'country' doesn't exist in userProfile)
console.log("User Age (with default):", userAge); // Output: 29 (age exists, so default is ignored)

// Rest property in object destructuring (collects remaining properties)
const { name: userName, age: userProfileAge, ...restOfProfile } = userProfile;
console.log("\\nRest of Profile:", restOfProfile);
// Output: { city: "London", occupation: "Developer", contact: { ... }, skills: [...] }

// Spread Syntax (...) with Objects - Copying and Merging
console.log("\\n--- Spread Syntax with Objects ---");

// Shallow copy of an object
const copiedProfile = { ...userProfile };
copiedProfile.name = "Alice";
console.log("Original profile name:", userProfile.name); // Output: Sarah
console.log("Copied profile name:", copiedProfile.name);   // Output: Alice

// Merging objects
const additionalInfo = {
  isEmployed: true,
  salary: 80000
};
const mergedProfile = { ...userProfile, ...additionalInfo, city: "Paris" }; // 'city' will be overwritten
console.log("Merged Profile:", mergedProfile);
/* Output:
{
  name: "Sarah",
  age: 29,
  city: "Paris", // Overwritten
  occupation: "Developer",
  contact: { email: "sarah@example.com", phone: "123-456-7890" },
  skills: ["JavaScript", "React", "Node.js"],
  isEmployed: true,
  salary: 80000
}
*/
`;

// Code example 10: JSON (JavaScript Object Notation)
const section10 = `// JavaScript Object
const productData = {
  id: 101,
  name: "Wireless Headphones",
  price: 150.99,
  colors: ["black", "white", "red"],
  details: {
    brand: "AudioPro",
    warrantyYears: 1
  },
  available: true,
  manufactureDate: new Date() // Date objects are not directly convertible to JSON standard
};
console.log("Original JS Object:", productData);

// Converting a JavaScript Object to a JSON String (Serialization)
const jsonString = JSON.stringify(productData, null, 2); // null for replacer, 2 for pretty print indentation
console.log("\\nJSON String (productData):");
console.log(jsonString);
/* Output will look like this (Date will be a string):
{
  "id": 101,
  "name": "Wireless Headphones",
  "price": 150.99,
  "colors": [
    "black",
    "white",
    "red"
  ],
  "details": {
    "brand": "AudioPro",
    "warrantyYears": 1
  },
  "available": true,
  "manufactureDate": "2025-07-26T08:00:00.000Z" // Your current date/time
}
*/

// Converting a JSON String back to a JavaScript Object (Deserialization)
const receivedJsonString = \`
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
\`;

const todoObject = JSON.parse(receivedJsonString);
console.log("\\nParsed JS Object (from JSON string):", todoObject);
console.log("Todo title:", todoObject.title);     // Output: delectus aut autem
console.log("Todo completed:", todoObject.completed); // Output: false

// Handling invalid JSON
try {
  const invalidJson = "{name: 'Alice',}"; // Missing quotes around key, trailing comma
  JSON.parse(invalidJson);
} catch (error) {
  console.log("\\nError parsing invalid JSON:", error.message); // Output: Error parsing invalid JSON: Unexpected token N in JSON at position 1
}
`;

export default function JavascriptObjectsPage() {
  const page = 6; // This is the seventh page in the JavaScript tutorial series

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/FFDDCC/884400?text=JavaScript+Objects:+Structured+Data"
              alt="JavaScript Objects Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              JavaScript Objects: The Heart of Structured Data! ❤️‍🔥
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              You've mastered individual pieces of data, collections of ordered
              data (arrays), and reusable code blocks (functions). Now, it's
              time to put it all together with **Objects**. Objects are
              fundamental to JavaScript and allow you to group related data and
              functionality into single, coherent entities. They are the
              backbone of almost everything in JavaScript, enabling you to model
              real-world things and build complex applications.
            </p>
            ---
            {/* What are Objects? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                What are Objects? Key-Value Powerhouses! 🔑
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                In JavaScript, an **object** is a standalone entity, with
                properties and type. Think of it as a container that holds data
                (called **properties**) and actions it can perform (called
                **methods**).
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  **Collection of Properties:** Objects store data in `key:
                  value` pairs.
                </li>
                <li>
                  **Keys (or Property Names):** These are usually strings (or
                  symbols) that uniquely identify a piece of data within the
                  object.
                </li>
                <li>
                  **Values:** Can be any JavaScript data type: numbers, strings,
                  booleans, arrays, other objects, or even functions.
                </li>
                <li>
                  **Methods:** When a property's value is a function, it's
                  called a **method**. Methods define the behavior of an object.
                </li>
                <li>
                  **Unordered (Generally):** While some engines might preserve
                  order for integer keys, JavaScript objects traditionally do
                  not guarantee the order of their properties. However, for
                  string keys, insertion order is generally preserved in modern
                  JS engines.
                </li>
              </ul>
              <div
                className="tw:bg-yellow-50! tw:border-l-4! tw:border-yellow-500! tw:text-yellow-700! tw:p-4! tw:rounded! tw:mb-6!"
                role="alert"
              >
                <p className="tw:font-bold!">
                  Everything is an Object (Almost)!
                </p>
                <p>
                  In JavaScript, most things you encounter are objects or behave
                  like objects. Arrays are objects, functions are objects, and
                  even primitive values (like strings, numbers, booleans) have
                  object wrappers that allow you to call methods on them (e.g.,
                  `"hello".toUpperCase()`).
                </p>
              </div>
            </section>
            ---
            {/* Creating and Accessing Objects */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-blue-400! tw:pb-2!">
                Creating & Accessing Objects: Your First Structured Data 🏗️
              </h2>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. Creating Objects
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                There are several ways to create objects, but the **object
                literal** is by far the most common and readable.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    Object Literal (`{`{}`}`):
                  </strong>{" "}
                  The easiest and most direct way. You define properties and
                  their values directly inside curly braces.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `new Object()` Constructor:
                  </strong>{" "}
                  Less common in modern JavaScript. You create an empty object
                  and then add properties.
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. Accessing Properties
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can access an object's properties using two main syntaxes:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    Dot Notation (`.`):
                  </strong>{" "}
                  The most common and preferred way when the property name is a
                  valid JavaScript identifier (no spaces, special characters, or
                  starting with a number). `object.propertyName`
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    Bracket Notation (`[]`):
                  </strong>{" "}
                  Used when property names are dynamic (stored in a variable) or
                  contain special characters, spaces, or start with a number.
                  `object["propertyName"]`
                </li>
              </ul>
              <JavascriptViewCode code={section1} indexNumber={0} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                3. Modifying, Adding, and Deleting Properties
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Objects are mutable, meaning their properties can be changed,
                added, or removed after creation.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  **Modifying:** Assign a new value to an existing property
                  using either dot or bracket notation.
                </li>
                <li>
                  **Adding:** Assign a value to a new property name. If the
                  property doesn't exist, it will be created.
                </li>
                <li>
                  **Deleting:** Use the `delete` operator to remove a property
                  from an object.
                </li>
              </ul>
              <JavascriptViewCode code={section2} indexNumber={1} />
            </section>
            ---
            {/* Object Methods and 'this' */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-green-400! tw:pb-2!">
                Object Methods & The `this` Keyword: Object Behavior 🎭
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When a function is stored as a property of an object, it's
                called a **method**. Methods define what an object can *do*.
                Inside a method, the special keyword `this` is used to refer to
                the object that the method belongs to.
              </p>
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Understanding `this` (Context Matters!)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The value of `this` is one of the most confusing aspects of
                JavaScript for beginners. Its value is determined by *how* the
                function is called, not where it's defined.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  **Method Invocation (`object.method()`):** When a function is
                  called as a method of an object, `this` refers to that object.
                </li>
                <li>
                  **Simple Function Call (`function()`):** In non-strict mode,
                  `this` refers to the global object (`window` in browsers,
                  `undefined` in Node.js modules). In strict mode, `this` is
                  `undefined`.
                </li>
                <li>
                  **Constructor Call (`new Function()`):** When a function is
                  used as a constructor with `new`, `this` refers to the newly
                  created instance.
                </li>
                <li>
                  **Arrow Functions:** Arrow functions do *not* have their own
                  `this` binding. They inherit `this` from their *surrounding
                  lexical scope* (where they were defined). This makes them very
                  predictable and useful for callbacks.
                </li>
              </ul>
              <JavascriptViewCode code={section3} indexNumber={2} />
            </section>
            ---
            {/* Object Iteration */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-orange-400! tw:pb-2!">
                Object Iteration: Looping Through Properties 🔄
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Unlike arrays, objects don't have direct numeric indices for
                iteration. However, JavaScript provides several ways to loop
                through an object's properties.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `for...in` Loop:
                  </strong>{" "}
                  Iterates over the enumerable property names (keys) of an
                  object. It's important to use `hasOwnProperty()` to avoid
                  iterating over inherited properties from the prototype chain.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `Object.keys()` (ES5):
                  </strong>{" "}
                  Returns an array of a given object's own enumerable
                  string-keyed property names. You can then use array methods
                  like `forEach` or a `for...of` loop.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `Object.values()` (ES2017):
                  </strong>{" "}
                  Returns an array of a given object's own enumerable
                  string-keyed property values.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `Object.entries()` (ES2017):
                  </strong>{" "}
                  Returns an array of a given object's own enumerable
                  string-keyed `[key, value]` pairs. This is often the most
                  versatile for iteration as it gives you both.
                </li>
              </ul>
              <JavascriptViewCode code={section4} indexNumber={3} />
            </section>
            ---
            {/* Object Copying (Shallow vs. Deep) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-red-400! tw:pb-2!">
                Object Copying: Shallow vs. Deep (Reference vs. Value) 📦
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is a critical concept in JavaScript. Unlike primitive data
                types (numbers, strings, booleans) which are copied by value,
                objects are copied by **reference**. This means when you assign
                one object to another variable, both variables point to the same
                object in memory.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Reference Copy:
                  </strong>{" "}
                  Simple assignment (`let newObj = oldObj;`) creates a
                  reference. Changes to `newObj` will affect `oldObj` and
                  vice-versa.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Shallow Copy:
                  </strong>{" "}
                  Creates a new object, but if the original object contains
                  nested objects or arrays, those nested structures are still
                  copied by reference. Changes to nested structures will affect
                  both the original and the shallow copy. Common methods:
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>Spread operator (`{`{ ...originalObject }`}`) (ES6)</li>
                    <li>`Object.assign({}, originalObject)`</li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Deep Copy:
                  </strong>{" "}
                  Creates a completely independent copy of the original object,
                  including all nested objects and arrays. Changes to the deep
                  copy will not affect the original. A common (though limited)
                  technique is `JSON.parse(JSON.stringify(originalObject))`. For
                  complex objects (with functions, Dates, etc.), you'll often
                  need a dedicated deep-cloning library.
                </li>
              </ul>
              <JavascriptViewCode code={section5} indexNumber={4} />
            </section>
            ---
            {/* Object Constructors and Prototypes */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Object Constructors & Prototypes: Blueprints for Objects 🏭
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When you need to create multiple objects of the same "type"
                (e.g., many users, many cars), it becomes tedious to write
                object literals for each. This is where constructors and
                prototypes come in, providing a way to define blueprints for
                objects.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. Constructor Functions (Old Way)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A constructor function is a regular JavaScript function that's
                used with the `new` keyword to create new objects (instances).
                Inside a constructor, `this` refers to the newly created
                instance. By convention, constructor functions are named with an
                initial capital letter.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. Prototypes and Prototype Chain
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Every JavaScript object has a special internal property called
                `[[Prototype]]` (or `__proto__` in some environments, though
                `__proto__` is deprecated). This prototype is either `null` or
                refers to another object, which is its **prototype**. When you
                try to access a property or method on an object, and that
                property/method isn't found on the object itself, JavaScript
                looks up the **prototype chain** (recursively checking the
                object's prototype, then that prototype's prototype, and so on)
                until it finds the property or reaches the end of the chain
                (`null`).
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  Methods and properties shared by all instances of a
                  constructor are typically added to the constructor's
                  `prototype` object (e.g., `Person.prototype.greet = function(){" "}
                  {`{ ... }`};`). This saves memory compared to adding them
                  directly inside the constructor.
                </li>
                <li>
                  This is how JavaScript achieves **inheritance**
                  (prototype-based inheritance).
                </li>
              </ul>
              <JavascriptViewCode code={section6} indexNumber={5} />
              <JavascriptViewCode code={section7} indexNumber={6} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                3. ES6 Classes (Modern Way - Syntactic Sugar) 🍰
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Introduced in ES6, `class` syntax provides a cleaner, more
                familiar object-oriented syntax for creating constructor
                functions and managing prototypes. It's important to understand
                that `class` syntax is largely "syntactic sugar" over
                JavaScript's existing prototype-based inheritance model; it
                doesn't introduce true class-based inheritance like in Java or
                C++.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `constructor` method:
                  </strong>{" "}
                  A special method for creating and initializing an object
                  created with a class.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `extends` keyword:
                  </strong>{" "}
                  Used for class inheritance, allowing a class to inherit from
                  another class.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `super()`:
                  </strong>{" "}
                  Used in subclasses to call the constructor of the parent
                  class.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `static` methods:
                  </strong>{" "}
                  Methods that belong to the class itself, not to instances of
                  the class.
                </li>
              </ul>
              <JavascriptViewCode code={section8} indexNumber={7} />
            </section>
            ---
            {/* Advanced Object Features */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-green-400! tw:pb-2!">
                Advanced Object Features (ES6+) ✨
              </h2>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. Object Destructuring
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Object destructuring is a powerful ES6 feature that allows you
                to extract properties from objects and bind them to variables in
                a concise way.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>Makes code cleaner when extracting multiple properties.</li>
                <li>
                  Can rename extracted variables (`{`{ originalName: newName }`}
                  `).
                </li>
                <li>Can extract nested properties.</li>
                <li>
                  Can provide default values for properties that might not
                  exist.
                </li>
                <li>
                  The **rest property** (`...rest`) can collect remaining
                  properties into a new object.
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. Spread Syntax (`...`) with Objects
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Similar to how it works with arrays, the spread syntax (`...`)
                can be used to easily copy object properties or merge multiple
                objects into a new one. Remember, it creates a **shallow copy**.
              </p>
              <JavascriptViewCode code={section9} indexNumber={8} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                3. JSON (JavaScript Object Notation) 🌐
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                JSON is a lightweight data-interchange format. It is a text
                format that is completely language independent but uses
                conventions that are familiar to programmers of the C-family of
                languages, including C, C++, C#, Java, JavaScript, Perl, Python,
                and many others.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  **Data Format:** JSON is a string representation of data.
                </li>
                <li>
                  **`JSON.stringify()`:** Converts a JavaScript object or value
                  to a JSON string. Useful for sending data to a server or
                  storing it.
                </li>
                <li>
                  **`JSON.parse()`:** Parses a JSON string, constructing the
                  JavaScript value or object described by the string. Useful for
                  receiving data from a server.
                </li>
                <li>
                  **Strict Syntax:** JSON has a very strict syntax. Keys *must*
                  be double-quoted strings, and trailing commas are not allowed.
                </li>
              </ul>
              <JavascriptViewCode code={section10} indexNumber={9} />
            </section>
            ---
            {/* What's Next? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-gray-400! tw:pb-2!">
                What's Next? Understanding the DOM & Events: Making Webpages
                Interactive! 🚀
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Congratulations! You've just explored the powerful world of
                JavaScript Objects, from their basic structure to advanced
                concepts like prototypes and classes. Objects are fundamental to
                almost every aspect of JavaScript programming, allowing you to
                model complex data and build robust applications.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                Now that you have a strong grasp of core JavaScript, it's time
                to apply this knowledge to the web! In the next chapter, we'll
                dive into the **Document Object Model (DOM)** and **Events**,
                which are how JavaScript interacts with and manipulates HTML and
                CSS to create dynamic and interactive webpages. Get ready to
                bring your web projects to life!
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
