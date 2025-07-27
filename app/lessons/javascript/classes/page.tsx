import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";

export const metadata = {
  title:
    "JavaScript Classes - Object-Oriented Programming - OpenChains Technologies",
  description:
    "Master JavaScript Classes: Learn constructors, methods, inheritance (extends, super), static members, getters/setters, and private fields for robust OOP in JS.",
  openGraph: {
    title:
      "JavaScript Classes - Object-Oriented Programming - OpenChains Technologies",
    description:
      "Master JavaScript Classes: Learn constructors, methods, inheritance (extends, super), static members, getters/setters, and private fields for robust OOP in JS.",
    url: `${baseUrl}/lessons/javascript/classes`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JavaScript Classes - Object-Oriented Programming - OpenChains Technologies",
    description:
      "Master JavaScript Classes: Learn constructors, methods, inheritance (extends, super), static members, getters/setters, and private fields for robust OOP in JS.",
  },
  keywords: [
    "JavaScript Classes",
    "ES6 Classes",
    "Object-Oriented Programming",
    "OOP JavaScript",
    "Constructor",
    "Methods",
    "Inheritance",
    "extends",
    "super",
    "Static Methods",
    "Static Properties",
    "Getters",
    "Setters",
    "Private Fields",
    "Class Fields",
    "Prototypal Inheritance",
    "JavaScript Tutorial",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/classes`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Basic Class Definition and Instantiation
const section1 = `class Car {
  // The constructor method is called automatically when a new object is created.
  constructor(make, model, year) {
    this.make = make;   // Properties (data)
    this.model = model;
    this.year = year;
    this.speed = 0;     // Default speed
  }

  // A method (behavior)
  startEngine() {
    console.log(\`\${this.make} \${this.model}'s engine started.\`);
  }

  accelerate(amount) {
    this.speed += amount;
    console.log(\`\${this.make} \${this.model} accelerated to \${this.speed} km/h.\`);
  }

  brake(amount) {
    this.speed = Math.max(0, this.speed - amount);
    console.log(\`\${this.make} \${this.model} braked. Current speed: \${this.speed} km/h.\`);
  }

  getCarInfo() {
    return \`\${this.year} \${this.make} \${this.model}\`;
  }
}

// Creating instances (objects) of the Car class
const myCar = new Car("Toyota", "Camry", 2020);
const friendsCar = new Car("Honda", "Civic", 2022);

console.log(myCar.getCarInfo());      // Output: 2020 Toyota Camry
myCar.startEngine();                  // Output: Toyota Camry's engine started.
myCar.accelerate(50);                 // Output: Toyota Camry accelerated to 50 km/h.
myCar.brake(20);                      // Output: Toyota Camry braked. Current speed: 30 km/h.

console.log(friendsCar.getCarInfo()); // Output: 2022 Honda Civic
friendsCar.accelerate(80);            // Output: Honda Civic accelerated to 80 km/h.
`;

// Code example 2: Class Inheritance (extends and super)
const section2 = `class Vehicle {
  constructor(brand) {
    this.brand = brand;
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
    console.log(\`The \${this.brand} vehicle is now ON.\`);
  }

  turnOff() {
    this.isOn = false;
    console.log(\`The \${this.brand} vehicle is now OFF.\`);
  }
}

class ElectricCar extends Vehicle { // ElectricCar inherits from Vehicle
  constructor(brand, model, batteryCapacity) {
    super(brand); // Calls the parent (Vehicle) constructor
    this.model = model;
    this.batteryCapacity = batteryCapacity; // New property for ElectricCar
    this.chargeLevel = 100; // Default
  }

  // Override a method from the parent class
  turnOn() {
    console.log(\`Starting electric motor for \${this.brand} \${this.model}.\`);
    super.turnOn(); // Call the parent's turnOn method to reuse its logic
  }

  charge() {
    this.chargeLevel = 100;
    console.log(\`\${this.brand} \${this.model} is fully charged!\`);
  }

  getDetails() {
    return \`\${this.brand} \${this.model} (\${this.batteryCapacity} kWh) - Charge: \${this.chargeLevel}%\`;
  }
}

class GasolineCar extends Vehicle {
    constructor(brand, model, fuelCapacity) {
        super(brand);
        this.model = model;
        this.fuelCapacity = fuelCapacity;
        this.fuelLevel = 100;
    }

    refuel() {
        this.fuelLevel = 100;
        console.log(\`\${this.brand} \${this.model} is refueled.\`);
    }

    // GasolineCar does not override turnOn, so it uses Vehicle's turnOn method
}


const tesla = new ElectricCar("Tesla", "Model 3", 75);
console.log(tesla.getDetails()); // Output: Tesla Model 3 (75 kWh) - Charge: 100%
tesla.turnOn();                  // Output: Starting electric motor for Tesla Model 3.  The Tesla vehicle is now ON.
tesla.charge();                  // Output: Tesla Model 3 is fully charged!

const ford = new GasolineCar("Ford", "Focus", 50);
ford.turnOn();                   // Output: The Ford vehicle is now ON. (Uses Vehicle's turnOn)
ford.refuel();                   // Output: Ford Focus is refueled.
`;

// Code example 3: Static Methods and Properties
const section3 = `class Calculator {
  // Static property
  static PI = 3.14159; // Introduced later in JS (ES2022 / Class Fields)

  // Static method
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  // A non-static method (requires an instance)
  square(num) {
    return num * num;
  }
}

// Accessing static methods and properties directly on the class
console.log("Static Addition:", Calculator.add(10, 5));     // Output: Static Addition: 15
console.log("Static Subtraction:", Calculator.subtract(20, 7)); // Output: Static Subtraction: 13
console.log("Static PI:", Calculator.PI);                   // Output: Static PI: 3.14159

// Cannot call non-static method directly on the class
// console.log(Calculator.square(5)); // Throws TypeError: Calculator.square is not a function

// To use a non-static method, you need an instance
const myCalc = new Calculator();
console.log("Non-static Square:", myCalc.square(7));       // Output: Non-static Square: 49
`;

// Code example 4: Getters and Setters
const section4 = `class User {
  constructor(firstName, lastName) {
    this._firstName = firstName; // Use underscore convention for actual private-like properties
    this._lastName = lastName;
  }

  // Getter for fullName
  get fullName() {
    return \`\${this._firstName} \${this._lastName}\`;
  }

  // Setter for fullName (allows updating first and last name via one property)
  set fullName(newValue) {
    const parts = newValue.split(' ');
    if (parts.length === 2) {
      this._firstName = parts[0];
      this._lastName = parts[1];
    } else {
      console.warn("Please provide full name with first and last name separated by a space.");
    }
  }

  // Getter for firstName
  get firstName() {
    return this._firstName;
  }

  // Setter for firstName (with validation)
  set firstName(value) {
    if (value && typeof value === 'string') {
      this._firstName = value;
    } else {
      console.error("Invalid first name provided.");
    }
  }
}

const user1 = new User("Alice", "Smith");
console.log("User 1 Full Name:", user1.fullName); // Calls the getter - Output: Alice Smith

user1.fullName = "Bob Johnson"; // Calls the setter
console.log("User 1 New Full Name:", user1.fullName); // Output: Bob Johnson

user1.firstName = "Alicia"; // Calls the firstName setter
console.log("User 1 First Name updated:", user1.firstName); // Output: Alicia

user1.fullName = "Charlie"; // Invalid input for setter
// Output: console.warn: Please provide full name with first and last name separated by a space.
console.log("User 1 (after invalid update):", user1.fullName); // Still Bob Johnson
`;

// Code example 5: Public and Private Class Fields (ES2022)
const section5 = `class BankAccount {
  // Public class field (instance property)
  accountType = 'Savings';

  // Private class fields (start with #) - truly private
  #balance;
  #accountNumber;

  constructor(initialBalance, accountNumber) {
    this.#balance = initialBalance;
    this.#accountNumber = accountNumber;
  }

  // Public method
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(\`Deposited \${amount}. New balance: \${this.#balance}\`);
    }
  }

  // Public method
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(\`Withdrew \${amount}. New balance: \${this.#balance}\`);
    } else {
      console.log("Insufficient funds or invalid amount.");
    }
  }

  // Public getter to access private balance (read-only from outside)
  getBalance() {
    return this.#balance;
  }

  // You cannot directly access #accountNumber or #balance from outside the class
  // console.log(myAccount.#balance); // SyntaxError
}

const myAccount = new BankAccount(1000, "123456789");
console.log("Account type:", myAccount.accountType); // Access public field
// console.log(myAccount.#balance); // Error: Private field '#balance' must be declared in an enclosing class

myAccount.deposit(200);   // Output: Deposited 200. New balance: 1200
myAccount.withdraw(500);  // Output: Withdrew 500. New balance: 700
myAccount.withdraw(1000); // Output: Insufficient funds or invalid amount.

console.log("Current balance via public method:", myAccount.getBalance()); // Output: 700
`;

export default function JavascriptClassesPage() {
  const page = 11; // Assuming this is the sixth page (index 5) in the JS tutorial

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/D3D3D3/000080?text=JavaScript+Classes:+The+Blueprints+of+Objects"
              alt="JavaScript Classes Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              JavaScript Classes: The Blueprints of Objects 📐
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              In JavaScript, everything is an object (or can be treated as one).
              **Classes**, introduced in ES6 (ECMAScript 2015), provide a
              cleaner and more structured way to create objects and implement
              object-oriented programming (OOP) patterns, particularly the
              concept of "prototypal inheritance" which JavaScript has always
              used, but now with a more familiar syntax.
            </p>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Think of a class as a **blueprint** or a **template** for creating
              objects. An object created from a class is called an **instance**
              of that class.
            </p>
            ---
            {/* Basic Class Structure Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                1. Basic Class Definition and Instantiation 🏗️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A class definition typically includes:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `class` keyword:
                  </strong>{" "}
                  Used to declare a class, followed by the class name
                  (conventionally capitalized, e.g., `Car`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `constructor()` method:
                  </strong>{" "}
                  A special method for creating and initializing an object
                  created with a class. It's called automatically when you
                  create a new instance using the `new` keyword.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Methods:
                  </strong>{" "}
                  Functions defined inside the class that represent the
                  behaviors or actions an object of that class can perform.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Properties (Instance Properties):
                  </strong>{" "}
                  Data associated with each instance of the class. These are
                  typically set within the `constructor` using
                  `this.propertyName`.
                </li>
              </ul>
              <JavascriptViewCode code={section1} indexNumber={0} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                When you use `new Car(...)`, the `constructor` is called, a new
                object is created, and `this` inside the constructor refers to
                this new object. Methods like `startEngine()` are added to the
                object's prototype, meaning all instances share the same method
                definition, saving memory.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Inheritance Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                2. Class Inheritance: Building on Existing Blueprints 🌳
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Inheritance** is a core OOP concept that allows you to create
                new classes based on existing classes. The new class
                (child/derived class) inherits properties and methods from the
                existing class (parent/base class), and can also add its own
                unique properties and methods, or override inherited ones.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `extends` keyword:
                  </strong>{" "}
                  Used to establish the inheritance relationship. `class
                  ChildClass extends ParentClass {`{ ... }`}`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `super()` keyword:
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:pl-4! tw:mt-2! tw:space-y-1!">
                    <li>
                      In a child class's `constructor`, `super()` must be called
                      **before** `this` is used. It calls the parent class's
                      constructor, initializing the inherited properties.
                    </li>
                    <li>
                      In a child class's method, `super.methodName()` allows you
                      to call a method from the parent class.
                    </li>
                  </ul>
                </li>
              </ul>
              <JavascriptViewCode code={section2} indexNumber={1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Here, `ElectricCar` and `GasolineCar` are specialized types of
                `Vehicle`. They inherit `brand`, `turnOn()`, and `turnOff()`
                from `Vehicle`, and add their own specific functionalities like
                `batteryCapacity`, `charge()`, etc. `ElectricCar` also
                *overrides* `turnOn()` to add specific electric car logic, while
                still calling `super.turnOn()` to reuse the parent's base logic.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Static Members Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                3. Static Methods and Properties: Class-Level Functionality ⚙️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Static methods** and **static properties** belong to the class
                itself, not to any particular instance of the class. This means
                you call them directly on the class name, without creating an
                object. They are useful for utility functions or properties that
                are relevant to the class as a whole, rather than specific
                instances.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `static` keyword:
                  </strong>{" "}
                  Used to declare a static method or property.
                </li>
                <li className="tw:leading-relaxed!">
                  Static methods/properties do not have access to `this`
                  (referring to an instance) inside them, as they are not called
                  on instances.
                </li>
              </ul>
              <JavascriptViewCode code={section3} indexNumber={2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                `Calculator.add()` and `Calculator.PI` are used directly on the
                `Calculator` class. You don't need `new Calculator()` to use
                them. In contrast, `square()` requires an instance
                (`myCalc.square()`).
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Getters and Setters Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                4. Getters and Setters: Controlled Property Access 🛡️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Getters** and **Setters** are special methods that allow you
                to define custom logic when a class property is accessed or
                modified. They look like properties from the outside, but
                internally they are functions. This provides a way to:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    Encapsulate logic:
                  </strong>{" "}
                  Perform calculations, validations, or formatting behind the
                  scenes when a property is read or written.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    Control access:
                  </strong>{" "}
                  You can make properties read-only (only a getter) or
                  write-only (only a setter).
                </li>
                <li className="tw:leading-relaxed!">
                  Improve code readability and maintainability.
                </li>
              </ul>
              <JavascriptViewCode code={section4} indexNumber={3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Notice how `user1.fullName` is accessed and assigned like a
                regular property, but the `get fullName()` and `set fullName()`
                methods are executed in the background. It's common practice to
                use an underscore (e.g., `_firstName`) for the actual internal
                property to distinguish it from the getter/setter.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Public and Private Class Fields Section (Advanced) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                5. Public and Private Class Fields (ES2022 / Advanced) 🔒
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Prior to ES2022, JavaScript didn't have a built-in way to define
                truly private class properties or methods. The underscore
                convention (`_propertyName`) was just a convention. **Class
                fields**, both public and private, address this:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    Public Class Fields:
                  </strong>{" "}
                  Declared directly in the class body (outside the constructor).
                  They become properties on each instance.
                  <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:mt-2! tw:text-sm! tw:overflow-x-auto!">
                    <code>{`class MyClass {
  myPublicField = "hello"; // This is a public class field
}`}</code>
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    Private Class Fields:
                  </strong>{" "}
                  Declared using a `#` prefix. They are truly private and can
                  only be accessed from within the class itself. This provides
                  strong encapsulation.
                  <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:mt-2! tw:text-sm! tw:overflow-x-auto!">
                    <code>{`class MyClass {
  #myPrivateField = "secret"; // This is a private class field

  getSecret() {
    return this.#myPrivateField; // Accessible inside the class
  }
}`}</code>
                  </pre>
                </li>
              </ul>
              <JavascriptViewCode code={section5} indexNumber={4} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                The `BankAccount` example shows how `#balance` and
                `#accountNumber` are truly inaccessible from outside the class,
                enforcing proper data hiding. This is a significant addition for
                robust OOP in JavaScript.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* What Classes Are Under the Hood (Advanced) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                What Classes Are Under the Hood: Prototypal Inheritance Deep
                Dive (Advanced) 🕵️‍♀️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                It's crucial to understand that while `class` syntax looks like
                traditional class-based OOP languages (like Java or C++),
                JavaScript's inheritance model is fundamentally **prototypal
                inheritance**.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                ES6 `class` syntax is essentially **syntactic sugar** over
                JavaScript's existing prototype-based inheritance. This means:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  When you define a method in a class, it's actually added to
                  the class's `prototype` object.
                </li>
                <li className="tw:leading-relaxed!">
                  When you create an instance (`new ClassName()`), that instance
                  gets a link (`[[Prototype]]` or `__proto__`) to the class's
                  prototype.
                </li>
                <li className="tw:leading-relaxed!">
                  When you try to access a method on an instance, JavaScript
                  first looks for it directly on the instance. If not found, it
                  "walks up the prototype chain" to the class's prototype, then
                  the parent class's prototype (if inherited), and so on, until
                  it finds the method or reaches the end of the chain.
                </li>
                <li className="tw:leading-relaxed!">
                  This shared prototype chain is what enables inheritance and
                  memory efficiency (methods are defined once, not duplicated
                  for every instance).
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                While you don't always need to manipulate prototypes directly
                with classes, understanding this underlying mechanism helps
                demystify how inheritance truly works in JavaScript and debug
                complex scenarios.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Conclusion Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Conclusion: Embrace Class-Based Structure! 🎉
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                JavaScript Classes provide a powerful and intuitive way to
                implement object-oriented programming principles. They offer a
                much cleaner syntax than traditional prototype-based approaches
                and are the standard for defining custom types in modern
                JavaScript frameworks and libraries.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You've now covered:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>Defining a class with a `constructor` and methods.</li>
                <li>Creating instances of a class.</li>
                <li>Implementing inheritance using `extends` and `super`.</li>
                <li>
                  Working with `static` methods and properties for class-level
                  functionality.
                </li>
                <li>
                  Using `getters` and `setters` for controlled property access.
                </li>
                <li>
                  The latest features like **public and private class fields**
                  for true encapsulation.
                </li>
                <li>The underlying prototypal nature of JavaScript classes.</li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                Classes are integral to building scalable and maintainable
                applications. Practice creating your own classes, extending
                them, and designing your code in an object-oriented fashion.
                This will greatly enhance your ability to develop complex and
                well-structured JavaScript programs.
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
