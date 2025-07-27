import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";

export const metadata = {
  title: "JavaScript Modules (ES6+) - OpenChains Technologies",
  description:
    "Master JavaScript ES6 Modules: Learn export, import, default, named exports, and best practices for organizing and reusing code effectively in modern web development.",
  openGraph: {
    title: "JavaScript Modules (ES6+) - OpenChains Technologies",
    description:
      "Master JavaScript ES6 Modules: Learn export, import, default, named exports, and best practices for organizing and reusing code effectively in modern web development.",
    url: `${baseUrl}/lessons/javascript/modules`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Modules (ES6+) - OpenChains Technologies",
    description:
      "Master JavaScript ES6 Modules: Learn export, import, default, named exports, and best practices for organizing and reusing code effectively in modern web development.",
  },
  keywords: [
    "JavaScript Modules",
    "ES6 Modules",
    "export",
    "import",
    "named exports",
    "default export",
    "module aliasing",
    "module aggregation",
    "JavaScript Tutorial",
    "Code Organization",
    "Code Reusability",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/modules`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: export named
const section1 = `// src/mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export function multiply(a, b) {
  return a * b;
}

// Can also export existing variables/functions later
const PI = 3.14159;
export { PI };
`;

// Code example 2: import named
const section2 = `// src/app.js
import { add, subtract, multiply } from './mathUtils.js'; // Note the .js extension

console.log("2 + 3 =", add(2, 3));         // Output: 2 + 3 = 5
console.log("10 - 4 =", subtract(10, 4));  // Output: 10 - 4 = 6
console.log("5 * 6 =", multiply(5, 6));    // Output: 5 * 6 = 30

// Importing PI separately
import { PI } from './mathUtils.js';
console.log("Value of PI:", PI); // Output: Value of PI: 3.14159

// Importing with aliases
import { add as sum, subtract as diff } from './mathUtils.js';
console.log("Aliased sum:", sum(7, 3));   // Output: Aliased sum: 10
console.log("Aliased diff:", diff(10, 2)); // Output: Aliased diff: 8
`;

// Code example 3: export default
const section3 = `// src/Logger.js
class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(\`[\${this.name}] \${message}\`);
  }

  error(message) {
    console.error(\`ERROR [\${this.name}] \${message}\`);
  }
}

export default Logger; // Only ONE default export per module
`;

// Code example 4: import default
const section4 = `// src/app.js
import MyLogger from './Logger.js'; // No curly braces for default import

const appLogger = new MyLogger('App');
appLogger.log('Application started successfully.'); // Output: [App] Application started successfully.

import UserModule from './User.js'; // Example: importing a default function

const user = UserModule.create('Alice');
console.log(user); // Output: { id: ..., name: 'Alice' }
UserModule.greet(user); // Output: Hello, Alice!
`;

// Code example 5: Combining named and default exports
const section5 = `// src/User.js
export const generateId = () => Math.random().toString(36).substring(2, 9);

class User {
  constructor(name) {
    this.id = generateId();
    this.name = name;
  }
}

export const greetUser = (user) => {
  console.log(\`Hello, \${user.name}!\`);
};

// Exporting an object as default (common pattern for utility modules)
const UserModule = {
  create: (name) => new User(name),
  greet: greetUser,
  getAdminUser: () => new User("Admin")
};

export default UserModule;
`;

// Code example 6: Importing combined exports
const section6 = `// src/app.js
import UserModule, { generateId, greetUser } from './User.js';

console.log("New ID:", generateId()); // Using named import

const newUser = UserModule.create("Bob"); // Using default import
UserModule.greet(newUser);

const adminUser = UserModule.getAdminUser(); // Using default import
greetUser(adminUser); // Using named import
`;

// Code example 7: Wildcard import
const section7 = `// src/app.js
import * as MathOperations from './mathUtils.js'; // Imports all named exports

console.log("Wildcard add:", MathOperations.add(5, 5));
console.log("Wildcard PI:", MathOperations.PI);

// If mathUtils.js also had a default export, it would be accessible via:
// console.log(MathOperations.default);
`;

// Code example 8: Module Aggregation (Re-exporting)
const section8 = `// src/api/index.js (Aggregation module)
export { default as APIClient } from './APIClient.js';
export { fetchUserData, postData } from './dataService.js';
export * from './constants.js'; // Re-export all named exports from constants

// src/api/dataService.js
export function fetchUserData(id) { /* ... */ console.log(\`Fetching user \${id}\`); return { id, name: "Test User" }; }
export function postData(data) { /* ... */ console.log("Posting data:", data); return { success: true }; }

// src/api/constants.js
export const API_BASE_URL = "https://api.example.com";
export const API_KEY = "your-secret-key";

// src/app.js (Consumer)
import { APIClient, fetchUserData, API_BASE_URL } from './api/index.js';

console.log(API_BASE_URL); // "https://api.example.com"
fetchUserData(123); // "Fetching user 123"
const client = new APIClient(); // Assuming APIClient class is defined in APIClient.js
client.sendRequest('/users'); // Example: sending a request via APIClient
`;

export default function JavascriptModulesPage() {
  const page = 10; // Assuming this is the fifth page (index 4) in the JS tutorial

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/DDA0DD/4B0082?text=JavaScript+Modules+(ES6+):+Organize+Your+Code"
              alt="JavaScript Modules Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              JavaScript Modules (ES6+): Organize and Reuse Your Code 📦
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              As your JavaScript applications grow, managing all your code in a
              single file becomes unsustainable. This is where **Modules** come
              in. Introduced officially in ES6 (ECMAScript 2015), JavaScript
              Modules provide a standardized way to break your code into
              smaller, reusable, and self-contained units.
            </p>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Modules help you achieve:
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4! tw:text-left! tw:mx-auto! tw:w-fit!">
                <li>
                  **Better Organization:** Structure your project logically.
                </li>
                <li>**Reusability:** Write code once and use it everywhere.</li>
                <li>
                  **Maintainability:** Easier to find, fix, and update specific
                  parts of your codebase.
                </li>
                <li>
                  **Dependency Management:** Clearly define what a file needs
                  and what it provides.
                </li>
                <li>
                  **Encapsulation:** Variables and functions within a module are
                  private by default, preventing global scope pollution.
                </li>
              </ul>
            </p>
            ---
            {/* How Modules Work Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                The Core Concepts: `export` and `import` 📤📥
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The two fundamental keywords for working with ES6 Modules are
                `export` and `import`.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                `export`: Making Code Available
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `export` keyword is used in a module to make its functions,
                variables, classes, or other values accessible to other modules.
                There are two main types of exports:
              </p>

              <h4 className="tw:text-lg! sm:tw:text-xl! tw:font-semibold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Named Exports
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can export multiple values from a module by placing the
                `export` keyword before their declarations, or by listing them
                in a single `export` statement at the end of the module. When
                importing, you must use the exact names.
              </p>
              <JavascriptViewCode code={section1} indexNumber={0} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In this `mathUtils.js` file, `add`, `subtract`, `multiply`, and
                `PI` are all named exports.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                `import`: Using Exported Code
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `import` keyword is used in a module to bring in functions,
                variables, or classes that have been `exported` from another
                module.
              </p>

              <h4 className="tw:text-lg! sm:tw:text-xl! tw:font-semibold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Importing Named Exports
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                To import named exports, you use curly braces `{}` and specify
                the exact names of the values you want to import. The path to
                the module file is relative and usually requires the file
                extension (e.g., `.js`).
              </p>
              <JavascriptViewCode code={section2} indexNumber={1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                You can also use aliases (`as` keyword) if the imported names
                conflict or you prefer a different name in your current module.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Default Exports Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Default Exports: The Main Export 🌟
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Each module can have at most **one** default export. This is
                typically used for the primary value or functionality that the
                module provides.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                `export default`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You use the `export default` keywords to designate the single
                default export. You don't specify a name after `export default`
                for the exported value itself, as it's the "default" export.
              </p>
              <JavascriptViewCode code={section3} indexNumber={2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Here, `Logger` is the default export.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Importing Default Exports
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When importing a default export, you **do not** use curly
                braces. You can give it any name you like during import, as
                there's only one default export.
              </p>
              <JavascriptViewCode code={section4} indexNumber={3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Notice `MyLogger` and `UserModule` were chosen as import names;
                they don't have to match the original name of the exported
                value.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Combining Exports Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Combining Named and Default Exports 🤝
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                It's very common to have both named and a default export from a
                single module.
              </p>
              <JavascriptViewCode code={section5} indexNumber={4} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In `User.js`, `generateId` and `greetUser` are named exports,
                while `UserModule` (an object containing user-related functions)
                is the default export.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Importing Combined Exports
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                To import both default and named exports from the same module,
                you combine their syntax:
              </p>
              <JavascriptViewCode code={section6} indexNumber={5} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                The default export name comes first, then a comma, followed by
                the named imports in curly braces.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Advanced Module Concepts Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Advanced Module Concepts (For the Curious! 💡)
              </h2>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Wildcard Imports (`import * as name from 'module'`)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can import all named exports from a module as a single
                object using `* as`.
              </p>
              <JavascriptViewCode code={section7} indexNumber={6} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                This is useful when a module exports many things and you want to
                avoid a long list of named imports, or if you want to explicitly
                scope them under a single object.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Module Aggregation (Re-exporting)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can re-export exports from other modules, which is great for
                creating "index" files that expose a public API from multiple
                underlying modules, simplifying imports for consumers.
              </p>
              <JavascriptViewCode code={section8} indexNumber={7} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                This pattern helps create clean and consistent API facades for
                your larger codebases, letting you import related
                functionalities from a single file (e.g., `import{" "}
                {` {(func1, func2)}`} from './utils';` instead of `import{" "}
                {`{func1}{" "}`}
                from './utils/math';` and `import {`{func2}`} from
                './utils/string';`).
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Practical Considerations Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Practical Considerations for ES6 Modules 🛠️
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    File Extensions:
                  </strong>{" "}
                  In browsers, you generally need to include the `.js` (or
                  `.mjs`) file extension in your `import` paths. Node.js's
                  module resolution is more flexible, but explicitly using
                  extensions is often recommended for clarity and
                  cross-environment compatibility.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Browser Usage:
                  </strong>{" "}
                  To use ES6 Modules directly in a browser, you need to add
                  `type="module"` to your {`\`<script>\``} tag:
                  <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:mt-2! tw:text-sm! tw:overflow-x-auto!">
                    <code>{`<script type="module" src="./app.js"></script>`}</code>
                  </pre>
                  This tells the browser to parse the script as a module,
                  enabling `import`/`export`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Build Tools (Webpack, Rollup, Parcel):
                  </strong>{" "}
                  In professional development, especially for complex
                  applications, you'll often use module bundlers like Webpack,
                  Rollup, or Parcel. These tools resolve module paths, transform
                  code for browser compatibility (e.g., Babel for older JS
                  versions), and bundle all your modules into a few optimized
                  files for deployment. This is how you typically use `import`
                  without file extensions in larger projects (e.g., `import
                  {`{" "}`}
                  {`{add}`} from './mathUtils';`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Strict Mode:
                  </strong>{" "}
                  Modules are automatically in strict mode, meaning you don't
                  need `use strict;` at the top of your module files.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Hoisting:
                  </strong>{" "}
                  `import` declarations are "hoisted," meaning they are
                  processed before any code in the module executes. However, the
                  *execution* of the imported module's code happens only when
                  it's needed.
                </li>
              </ul>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Conclusion Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Conclusion: Embrace the Modular Future! 🚀
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                ES6 Modules are a cornerstone of modern JavaScript development.
                They fundamentally change how you structure and think about your
                code, promoting:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  **Readability and Maintainability:** Smaller, focused files
                  are easier to understand and manage.
                </li>
                <li>
                  **Reusability:** Functions and components can be shared across
                  multiple parts of your application or even across different
                  projects.
                </li>
                <li>
                  **Collaboration:** Teams can work on different modules
                  simultaneously with fewer conflicts.
                </li>
                <li>
                  **Performance (with bundlers):** Module bundlers can perform
                  "tree-shaking" (removing unused code) and other optimizations,
                  leading to smaller, faster applications.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                Start integrating modules into your projects. Practice with
                named and default exports, and understand how they fit into the
                broader ecosystem with build tools. This skill is indispensable
                for building robust and scalable JavaScript applications.
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
