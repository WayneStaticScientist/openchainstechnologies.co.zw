import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import JavascriptViewCode from "@/components/tutorials/js-view";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import { baseUrl } from "@/utils/globals";

export const metadata = {
  title:
    "Advanced JavaScript Topics: Closures, 'this', and Prototypes - OpenChains Technologies",
  description:
    "Deep dive into advanced JavaScript concepts: understand Closures, the dynamic nature of the 'this' keyword, and JavaScript's foundational Prototypal Inheritance model.",
  openGraph: {
    title:
      "Advanced JavaScript Topics: Closures, 'this', and Prototypes - OpenChains Technologies",
    description:
      "Deep dive into advanced JavaScript concepts: understand Closures, the dynamic nature of the 'this' keyword, and JavaScript's foundational Prototypal Inheritance model.",
    url: `${baseUrl}/lessons/javascript/advanced-topics-closures-this-prototypes`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Advanced JavaScript Topics: Closures, 'this', and Prototypes - OpenChains Technologies",
    description:
      "Deep dive into advanced JavaScript concepts: understand Closures, the dynamic nature of the 'this' keyword, and JavaScript's foundational Prototypal Inheritance model.",
  },
  keywords: [
    "JavaScript Closures",
    "JavaScript this keyword",
    "JavaScript Prototypes",
    "Prototypal Inheritance",
    "Lexical Scoping",
    "Call Apply Bind",
    "Arrow Functions this",
    "Constructor Function",
    "Object.create",
    "Factory Functions",
    "Data Privacy JavaScript",
    "Currying JavaScript",
    "Higher-Order Functions",
    "JavaScript Interview Questions",
    "Advanced JavaScript Tutorial",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/advanced-topics-closures-this-prototypes`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Closures - Basic Example
const section1 = `function createGreeter(greeting) {
  // 'greeting' is part of the lexical environment of 'greet'
  return function greet(name) {
    console.log(\`\${greeting}, \${name}!\`);
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");
const sayGoodbye = createGreeter("Goodbye");

sayHello("Alice");    // Output: Hello, Alice!
sayHi("Bob");       // Output: Hi, Bob!
sayGoodbye("Charlie"); // Output: Goodbye, Charlie!

// The inner function 'greet' "remembers" the 'greeting' variable
// from its outer scope even after 'createGreeter' has finished executing.
// This is a closure!
`;

// Code example 2: Closures - Data Privacy/Encapsulation
const section2 = `function createCounter() {
  let count = 0; // This variable is private to the closure

  return {
    increment: function() {
      count++;
      console.log("Count:", count);
    },
    decrement: function() {
      count--;
      console.log("Count:", count);
    },
    getCount: function() {
      return count;
    }
  };
}

const counter1 = createCounter();
const counter2 = createCounter(); // Each counter has its own 'count' variable

counter1.increment(); // Output: Count: 1
counter1.increment(); // Output: Count: 2
counter2.increment(); // Output: Count: 1 (independent from counter1)
console.log("Counter 1 current count:", counter1.getCount()); // Output: Counter 1 current count: 2
console.log("Counter 2 current count:", counter2.getCount()); // Output: Counter 2 current count: 1

// console.log(counter1.count); // Undefined - 'count' is not directly accessible
`;

// Code example 3: 'this' - Default Binding
const section3 = `// Case 1: Global context (non-strict mode browser)
// console.log(this === window); // Output: true (in browser)
// console.log(this); // Refers to the global object (window in browser, global in Node.js)

// Case 2: Function call (non-strict mode)
function showThis() {
  console.log("Value of 'this' inside showThis:", this);
}
showThis(); // Output: Value of 'this' inside showThis: Window (in browser) / global (in Node.js)

// Case 3: Strict mode
function showThisStrict() {
  "use strict";
  console.log("Value of 'this' inside showThisStrict (strict mode):", this);
}
showThisStrict(); // Output: Value of 'this' inside showThisStrict (strict mode): undefined
`;

// Code example 4: 'this' - Implicit Binding
const section4 = `const user = {
  name: "Alice",
  greet: function() {
    console.log(\`Hello, my name is \${this.name}\`);
  },
  address: {
    city: "New York",
    showCity: function() {
      console.log(\`I live in \${this.city}\`);
    }
  }
};

user.greet();          // Output: Hello, my name is Alice (this is 'user' object)
user.address.showCity(); // Output: I live in New York (this is 'address' object)

// Losing 'this' context with implicit binding
const greetFunction = user.greet;
greetFunction(); // Output: Hello, my name is undefined (this is global object/undefined in strict mode)

// Common pitfall: Callback functions
const button = {
  text: 'Click Me',
  onClick: function() {
    console.log(\`Button \${this.text} clicked!\`);
  }
};

// If this were a real DOM event listener:
// buttonElement.addEventListener('click', button.onClick);
// In a real event listener, 'this' would usually be the buttonElement itself, NOT the 'button' object.
// This is because the event listener *implicitly binds* 'this' to the element it's attached to.
// To fix this, you'd use .bind() or an arrow function (see explicit binding/arrow functions).
`;

// Code example 5: 'this' - Explicit Binding (call, apply, bind)
const section5 = `function introduce(age, occupation) {
  console.log(\`My name is \${this.name}, I am \${age} years old and I am a \${occupation}.\`);
}

const person1 = { name: "Bob" };
const person2 = { name: "Carol" };

// .call(): calls the function immediately with 'this' set to the first argument
// and subsequent arguments passed individually.
introduce.call(person1, 30, "Engineer"); // Output: My name is Bob, I am 30 years old and I am a Engineer.

// .apply(): calls the function immediately with 'this' set to the first argument
// and subsequent arguments passed as an array.
introduce.apply(person2, [25, "Designer"]); // Output: My name is Carol, I am 25 years old and I am a Designer.

// .bind(): returns a *new function* with 'this' permanently bound to the first argument.
// It does NOT call the function immediately.
const introduceAlice = introduce.bind({ name: "Alice" }, 35);
introduceAlice("Doctor"); // Output: My name is Alice, I am 35 years old and I am a Doctor.

const introduceAliceEngineer = introduce.bind({ name: "Alice" }, 35, "Engineer");
introduceAliceEngineer(); // Output: My name is Alice, I am 35 years old and I am a Engineer.
`;

// Code example 6: 'this' - New Binding & Arrow Functions
const section6 = `// New Binding (with constructor functions or classes)
function Person(name) {
  this.name = name;
  console.log("Value of 'this' in Person constructor:", this);
}
const p1 = new Person("Dave"); // 'this' is the new object 'p1'
// Output: Value of 'this' in Person constructor: Person { name: 'Dave' }

class Animal {
  constructor(type) {
    this.type = type;
    console.log("Value of 'this' in Animal constructor:", this);
  }
}
const cat = new Animal("Cat"); // 'this' is the new object 'cat'
// Output: Value of 'this' in Animal constructor: Animal { type: 'Cat' }


// Arrow Functions and 'this' (Lexical 'this')
// Arrow functions do NOT have their own 'this'.
// They inherit 'this' from the enclosing (lexical) scope.
const obj = {
  value: 42,
  // Regular function: 'this' depends on how it's called
  regularMethod: function() {
    console.log("Regular Method 'this.value':", this.value);
    setTimeout(function() {
      // 'this' here is window/global (default binding), NOT obj
      console.log("setTimeout (regular function) 'this.value':", this.value);
    }, 100);
  },
  // Arrow function: 'this' is inherited from 'obj'
  arrowMethod: function() { // This outer function is a regular method to give 'this' a context
    console.log("Arrow Method 'this.value':", this.value);
    setTimeout(() => {
      // 'this' here is 'obj' because arrow function inherits it from 'arrowMethod's lexical scope
      console.log("setTimeout (arrow function) 'this.value':", this.value);
    }, 100);
  }
};

obj.regularMethod();
// Output:
// Regular Method 'this.value': 42
// (after 100ms) setTimeout (regular function) 'this.value': undefined (or window.value)

obj.arrowMethod();
// Output:
// Arrow Method 'this.value': 42
// (after 100ms) setTimeout (arrow function) 'this.value': 42

// Important: Arrow functions cannot be used as constructors.
// const MyArrowClass = () => {};
// new MyArrowClass(); // Throws TypeError: MyArrowClass is not a constructor
`;

// Code example 7: Prototypes - Basic Object Creation & [[Prototype]]
const section7 = `const animal = {
  isAlive: true,
  eat() {
    console.log(\`\${this.name} is eating...\`);
  }
};

// Create a new object that inherits from 'animal'
const dog = Object.create(animal);
dog.name = "Buddy";
dog.bark = function() {
  console.log(\`\${this.name} says Woof!\`);
};

console.log(dog.isAlive); // Output: true (inherited from animal)
dog.eat();               // Output: Buddy is eating... (inherited method, 'this' refers to dog)
dog.bark();              // Output: Buddy says Woof! (dog's own method)

// Check the prototype chain
console.log(dog.__proto__ === animal); // Output: true (Non-standard but widely supported)
console.log(Object.getPrototypeOf(dog) === animal); // Output: true (Standard way)
console.log(animal.__proto__ === Object.prototype); // Output: true
console.log(Object.prototype.__proto__); // Output: null (End of the prototype chain)

// Properties are looked up on the prototype chain
animal.isVegetarian = false;
console.log(dog.isVegetarian); // Output: false (dog now inherits this)

dog.isAlive = false; // This creates an OWN property on 'dog', it does not modify 'animal'
console.log(dog.isAlive);    // Output: false
console.log(animal.isAlive); // Output: true (animal's property is unchanged)
`;

// Code example 8: Prototypes - Constructor Functions & Classes
const section8 = `// Using a Constructor Function (pre-ES6 way of defining "classes")
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

// Add methods to the prototype
Dog.prototype.bark = function() {
  console.log(\`\${this.name} (\${this.breed}) says Woof!\`);
};

Dog.prototype.isFriendly = true; // Add a property to the prototype

const myDog = new Dog("Max", "Golden Retriever");
const yourDog = new Dog("Lucy", "Beagle");

myDog.bark(); // Output: Max (Golden Retriever) says Woof!
yourDog.bark(); // Output: Lucy (Beagle) says Woof!

console.log(myDog.isFriendly); // Output: true
console.log(yourDog.isFriendly); // Output: true
console.log(myDog.__proto__ === Dog.prototype); // Output: true
console.log(myDog.hasOwnProperty('name')); // Output: true (own property)
console.log(myDog.hasOwnProperty('bark')); // Output: false (inherited from prototype)


// How ES6 Classes relate to Prototypes (Syntactic Sugar)
class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() { // This method is automatically added to Cat.prototype
    console.log(\`\${this.name} says Meow!\`);
  }
}

const myCat = new Cat("Whiskers");
myCat.meow(); // Output: Whiskers says Meow!
console.log(myCat.__proto__ === Cat.prototype); // Output: true
console.log(Cat.prototype.meow); // Output: [Function: meow]
`;

export default function JavascriptAdvancedTopicsPage() {
  const page = 13; // Assuming this is the eighth page (index 7) in the JS tutorial

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0BBE4/957DAD?text=Advanced+JavaScript:+Closures,'this',Prototypes"
              alt="Advanced JavaScript Topics: Closures, 'this', and Prototypes"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Advanced JavaScript: Closures, `this`, & Prototypes ✨
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              You've mastered the fundamentals and even delved into modern ES6
              features like Modules and Classes. Now, it's time to peel back the
              layers and understand some of JavaScript's most powerful, yet
              often misunderstood, core concepts: **Closures**, the enigmatic
              **`this` keyword**, and the foundational **Prototypal
              Inheritance** model.
            </p>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              These topics are crucial for writing robust, efficient, and truly
              "JavaScript-idiomatic" code. They are also frequent subjects in
              technical interviews. Let's dive deep!
            </p>
            ---
            {/* Closures Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                1. Closures: Remembering the Environment 🧠
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A **closure** is the combination of a function and the lexical
                environment within which that function was declared. In simpler
                terms, a closure allows an inner function to access variables
                from its outer (enclosing) function's scope, even after the
                outer function has finished executing.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is possible because JavaScript functions "remember" the
                environment in which they were created.
              </p>
              <JavascriptViewCode code={section1} indexNumber={0} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In the example above, `greet` is a closure. It "closes over" the
                `greeting` variable from `createGreeter`'s scope. Even after
                `createGreeter` returns, `sayHello`, `sayHi`, and `sayGoodbye`
                retain access to their respective `greeting` values.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Practical Uses of Closures:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600;">
                    Data Privacy/Encapsulation:
                  </strong>{" "}
                  Creating private variables that can only be accessed or
                  modified through privileged methods exposed by the closure.
                  This is a common pattern for creating "private" state in
                  JavaScript before private class fields became standard.
                  <JavascriptViewCode code={section2} indexNumber={1} />
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-2!">
                    Each call to `createCounter()` creates a new `count`
                    variable that is unique to that counter instance, accessible
                    only through `increment`, `decrement`, and `getCount`.
                  </p>
                </li>
                <li className="tw:leading-relaxed;">
                  <strong className="tw:font-semibold! tw:text-green-600;">
                    Currying & Partial Application:
                  </strong>{" "}
                  Functions that return other functions, progressively
                  collecting arguments.
                </li>
                <li className="tw:leading-relaxed;">
                  <strong className="tw:font-semibold! tw:text-green-600;">
                    Module Pattern:
                  </strong>{" "}
                  A common way to create self-contained modules with private
                  state, before ES6 Modules were introduced.
                </li>
                <li className="tw:leading-relaxed;">
                  <strong className="tw:font-semibold! tw:text-green-600;">
                    Event Handlers & Callbacks:
                  </strong>{" "}
                  When a callback function needs to access variables from the
                  outer scope where it was defined.
                </li>
              </ul>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* 'this' Keyword Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                2. The `this` Keyword: Context is King 👑
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `this` keyword in JavaScript is one of the most confusing
                parts of the language, but it's crucial for understanding how
                functions and objects interact. Unlike many other languages,
                `this` is not fixed but changes based on **how a function is
                called**. It refers to the "owner" of the function's execution
                context.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                There are primarily five ways `this` can be bound:
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                a) Default Binding
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When a function is called as a standalone function (not as a
                method of an object, not with `new`, `call`, `apply`, or
                `bind`), `this` defaults to the **global object** (e.g.,
                `window` in browsers, `global` in Node.js) in non-strict mode.
                In **strict mode**, `this` will be `undefined`.
              </p>
              <JavascriptViewCode code={section3} indexNumber={2} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                b) Implicit Binding
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When a function is called as a method of an object (using dot
                notation, e.g., `object.method()`), `this` refers to the
                **object that owns the method**.
              </p>
              <JavascriptViewCode code={section4} indexNumber={3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Common Pitfall:** `this` can be "lost" when a method is
                extracted from an object and called separately, or passed as a
                callback. In such cases, it reverts to default binding.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                c) Explicit Binding (`.call()`, `.apply()`, `.bind()`)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can explicitly set the value of `this` using these methods,
                which are available on all functions (`Function.prototype`):
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `.call(thisArg, arg1, arg2, ...)`:
                  </strong>{" "}
                  Calls the function immediately, with `this` set to `thisArg`
                  and arguments passed individually.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `.apply(thisArg, [argsArray])`:
                  </strong>{" "}
                  Calls the function immediately, with `this` set to `thisArg`
                  and arguments passed as an array.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `.bind(thisArg, arg1, arg2, ...)`:
                  </strong>{" "}
                  Returns a *new function* with `this` permanently bound to
                  `thisArg`. It does not execute the function immediately.
                </li>
              </ul>
              <JavascriptViewCode code={section5} indexNumber={4} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                d) `new` Binding
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When a function is called with the `new` keyword (as a
                constructor function or with an ES6 Class), `this` refers to the
                **newly created instance** of the object.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                e) Arrow Functions ({"`=>`"})
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Arrow functions do **not** have their own `this` binding.
                Instead, they inherit `this` from the **enclosing (lexical)
                scope** at the time they are defined. This makes them very
                predictable and often simplifies `this` management, especially
                in callbacks.
              </p>
              <JavascriptViewCode code={section6} indexNumber={5} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Rule of Thumb for `this`:**
                <ol className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:space-y-1!">
                  <li>
                    Is the function an arrow function? `this` is lexically
                    inherited.
                  </li>
                  <li>
                    Is the function called with `new`? `this` is the new object.
                  </li>
                  <li>
                    Is the function called with `call()`, `apply()`, or
                    `bind()`? `this` is explicitly set.
                  </li>
                  <li>
                    Is the function called as a method of an object
                    (`object.method()`)? `this` is the object.
                  </li>
                  <li>
                    Otherwise (standalone function call)? `this` is `undefined`
                    (strict mode) or global object (non-strict mode).
                  </li>
                </ol>
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Prototypes Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                3. Prototypes: The Foundation of Inheritance 🧬
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Unlike class-based languages, JavaScript uses a **prototypal
                inheritance** model. Every object in JavaScript has an internal
                property called `[[Prototype]]` (exposed via `__proto__` in most
                browsers/Node.js for convenience, or accessed with
                `Object.getPrototypeOf()`), which points to another object. This
                "prototype object" is where the object inherits properties and
                methods from.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When you try to access a property or method on an object,
                JavaScript first looks for it directly on that object. If it
                doesn't find it, it then looks at the object's `[[Prototype]]`,
                then that prototype's `[[Prototype]]`, and so on, up the
                **prototype chain**, until it finds the property or reaches the
                end (`null`).
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                a) Creating Objects and Linking Prototypes
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can explicitly create an object with a specific prototype
                using `Object.create()`.
              </p>
              <JavascriptViewCode code={section7} indexNumber={6} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In this example, `dog` inherits `isAlive` and `eat()` from
                `animal`. When `dog.isAlive = false;` is executed, it doesn't
                change `animal.isAlive`; instead, it creates a *new, own*
                property `isAlive` directly on the `dog` object. This is called
                **property shadowing**.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                b) Prototypes with Constructor Functions and ES6 Classes
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Before ES6 classes, constructor functions were the primary way
                to create multiple objects with shared behavior. All functions
                in JavaScript have a `prototype` property, which is the object
                that will serve as the `[[Prototype]]` for instances created
                with `new`.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **ES6 `class` syntax is essentially "syntactic sugar" over
                prototypal inheritance.** This means that when you define
                methods in a class, they are automatically added to the
                `Class.prototype` object.
              </p>
              <JavascriptViewCode code={section8} indexNumber={7} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                This prototype-based inheritance model is what allows for
                efficient memory usage (methods are defined once on the
                prototype, not duplicated for every instance) and flexible
                object composition.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Conclusion Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Conclusion: Master These Concepts, Master JavaScript! 🚀
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Understanding Closures, the `this` keyword, and Prototypes will
                elevate your JavaScript skills significantly.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  **Closures** empower you to create private state and powerful
                  functional patterns.
                </li>
                <li>
                  Mastering **`this`** allows you to correctly predict and
                  control execution context, crucial for object-oriented
                  patterns and callbacks.
                </li>
                <li>
                  Deep knowledge of **Prototypes** reveals the true nature of
                  JavaScript's object model, making inheritance and object
                  creation transparent.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                These concepts are interconnected and frequently appear in
                advanced JavaScript patterns and library implementations.
                Practice them, experiment with the code examples, and don't be
                afraid to revisit them multiple times until they click. They are
                the keys to unlocking JavaScript's full potential!
              </p>
              <PageNavigationButtons
                prev={{
                  title: JavascriptChapterFootMap[page - 1]
                    ? JavascriptChapterFootMap[page - 1].title
                    : "Previous Chapter",
                  path: JavascriptChapterFootMap[page - 1]
                    ? JavascriptChapterFootMap[page - 1].path
                    : "#",
                }}
                next={{
                  title: JavascriptChapterFootMap[page + 1]
                    ? JavascriptChapterFootMap[page + 1].title
                    : "Next Chapter",
                  path: JavascriptChapterFootMap[page + 1]
                    ? JavascriptChapterFootMap[page + 1].path
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
