import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";

export const metadata = {
  title:
    "JavaScript Error Handling - try...catch, throw, finally, Custom Errors - OpenChains Technologies",
  description:
    "Master JavaScript Error Handling: Learn try...catch, throw, finally, custom error classes, and handling errors in Promises and async/await for robust applications.",
  openGraph: {
    title:
      "JavaScript Error Handling - try...catch, throw, finally, Custom Errors - OpenChains Technologies",
    description:
      "Master JavaScript Error Handling: Learn try...catch, throw, finally, custom error classes, and handling errors in Promises and async/await for robust applications.",
    url: `${baseUrl}/lessons/javascript/error-handling`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JavaScript Error Handling - try...catch, throw, finally, Custom Errors - OpenChains Technologies",
    description:
      "Master JavaScript Error Handling: Learn try...catch, throw, finally, custom error classes, and handling errors in Promises and async/await for robust applications.",
  },
  keywords: [
    "JavaScript Error Handling",
    "try catch",
    "throw",
    "finally",
    "Error Object",
    "TypeError",
    "ReferenceError",
    "Custom Errors",
    "Error Class",
    "Promise Error Handling",
    "async await error handling",
    "unhandled promise rejection",
    "error logging",
    "JavaScript Tutorial",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/error-handling`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Basic try...catch...finally
const section1 = `function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed!"); // Throw a custom error
    }
    const result = a / b;
    console.log("Result of division:", result);
    return result;
  } catch (error) {
    console.error("An error occurred:", error.message);
    // Optionally re-throw or return a default value
    return null; // Return null to indicate failure
  } finally {
    console.log("Division operation attempted."); // This always executes
  }
}

console.log("--- Test 1: Successful Division ---");
divide(10, 2);
// Output:
// Result of division: 5
// Division operation attempted.

console.log("--- Test 2: Division by Zero ---");
divide(10, 0);
// Output:
// An error occurred: Division by zero is not allowed!
// Division operation attempted.

console.log("--- Test 3: Non-numeric input (built-in error) ---");
function processInput(input) {
  try {
    const num = Number(input);
    if (isNaN(num)) {
      throw new TypeError("Input must be a valid number.");
    }
    divide(10, num);
  } catch (error) {
    console.error("Error in processInput:", error.name, ":", error.message);
  } finally {
    console.log("Input processing finished.");
  }
}

processInput("hello");
// Output:
// Error in processInput: TypeError : Input must be a valid number.
// Input processing finished.
`;

// Code example 2: The Error Object and Common Error Types
const section2 = `// ReferenceError: trying to use an undeclared variable
try {
  console.log(undeclaredVariable);
} catch (error) {
  console.error("ReferenceError:", error.name, error.message);
  // error.stack provides a call stack for debugging
  // console.error(error.stack);
}
// Output: ReferenceError: undeclaredVariable is not defined


// TypeError: performing an operation on an inappropriate type
try {
  let num = 10;
  num.toUpperCase(); // numbers don't have toUpperCase()
} catch (error) {
  console.error("TypeError:", error.name, error.message);
}
// Output: TypeError: num.toUpperCase is not a function


// SyntaxError: (Usually caught at parse time, not runtime, but demonstrates)
// Note: This won't be caught by try...catch if it's a parse-time error
// eval('let x =;'); // This would throw a SyntaxError at runtime if inside eval()
// try {
//   eval('const obj = { prop: "value" '); // Missing closing brace
// } catch (error) {
//   console.error("SyntaxError (runtime via eval):", error.name, error.message);
// }


// RangeError: a number is outside an allowable range
try {
  const arr = new Array(1000000000000000); // Too large array size
} catch (error) {
  console.error("RangeError:", error.name, error.message);
}
// Output: RangeError: Invalid array length


// URIError: an invalid URI is passed to encodeURI() or decodeURI()
try {
  decodeURIComponent('%'); // Malformed URI sequence
} catch (error) {
  console.error("URIError:", error.name, error.message);
}
// Output: URIError: URI malformed


// EvalError: (Rarely used, related to eval() function errors)
// This error is almost never thrown in modern JavaScript engines.
`;

// Code example 3: Throwing Custom Errors with Classes
const section3 = `// Define a custom error class by extending the built-in Error
class ValidationError extends Error {
  constructor(message, field) {
    super(message); // Call the parent Error constructor
    this.name = "ValidationError"; // Set a specific name for the error
    this.field = field; // Add custom property
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
  }
}

function submitForm(formData) {
  if (!formData.username || formData.username.length < 3) {
    throw new ValidationError("Username is required and must be at least 3 characters long.", "username");
  }
  if (!formData.email || !formData.email.includes('@')) {
    throw new ValidationError("Invalid email format.", "email");
  }
  console.log("Form data is valid:", formData);
  return true;
}

function fetchData(url) {
  // Simulate an API call failure
  const isOnline = Math.random() > 0.5; // Simulate network status
  if (!isOnline) {
    throw new NetworkError("Failed to fetch data: Network unavailable.", 503);
  }
  if (!url.startsWith("http")) {
      throw new Error("Invalid URL format."); // Generic error for non-network issues
  }
  console.log(\`Fetching data from \${url}\`);
  return { data: "Some data" }; // Simulate successful data
}


// Usage of custom errors
try {
  submitForm({ username: "Jo", email: "john@example.com" });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(\`Validation Error in field '\${error.field}': \${error.message}\`);
  } else {
    console.error("An unexpected error occurred during form submission:", error.message);
  }
}
// Output: Validation Error in field 'username': Username is required and must be at least 3 characters long.


try {
  fetchData("https://api.example.com/data");
} catch (error) {
  if (error instanceof NetworkError) {
    console.error(\`Network Error (\${error.statusCode}): \${error.message}\`);
  } else if (error instanceof Error) {
    console.error(\`Generic Error: \${error.message}\`);
  } else {
    console.error("Unknown error:", error);
  }
}
// Output varies based on random network status
// e.g., Network Error (503): Failed to fetch data: Network unavailable.
// or Fetching data from https://api.example.com/data
`;

// Code example 4: Error Handling with Promises and Async/Await
const section4 = `// --- Promise Error Handling ---

function asyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an async operation that might fail
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Async operation completed successfully!");
      } else {
        reject(new Error("Async operation failed!"));
      }
    }, 1000);
  });
}

// Using .then().catch()
console.log("--- Promise Error Handling (.then().catch()) ---");
asyncOperation()
  .then(data => {
    console.log("Promise Success:", data);
  })
  .catch(error => {
    console.error("Promise Error (.catch):", error.message);
  });
// Output: (after 1s) Promise Success: ... OR Promise Error (.catch): ...


// --- Async/Await Error Handling ---

async function performAsyncTasks() {
  console.log("--- Async/Await Error Handling (try...catch) ---");
  try {
    const result1 = await asyncOperation(); // Wait for the first operation
    console.log("Async/Await Result 1:", result1);

    const result2 = await asyncOperation(); // Wait for the second operation
    console.log("Async/Await Result 2:", result2);

    // This line will only execute if both awaited operations succeed
    console.log("All async tasks completed!");
  } catch (error) {
    // If any 'await'ed promise rejects, the catch block is executed
    console.error("Async/Await Error (try...catch):", error.message);
  } finally {
    console.log("Async/Await tasks finished attempting.");
  }
}

performAsyncTasks();
// Output: (after 1s or 2s, depending on failures)
// Async/Await Result 1: ...
// Async/Await Result 2: ...
// All async tasks completed!
// OR
// Async/Await Error (try...catch): Async operation failed!
// Async/Await tasks finished attempting.


// --- Unhandled Promise Rejections (important!) ---
// If you don't catch a promise rejection, it will result in an "Unhandled Promise Rejection"
// and often a global error in Node.js or a browser warning/error.
// Example of unhandled:
new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("This promise is intentionally unhandled!"));
  }, 500);
});
// You would typically see:
// (node:xxxxx) UnhandledPromiseRejectionWarning: Error: This promise is intentionally unhandled!
// or in browser console:
// Uncaught (in promise) Error: This promise is intentionally unhandled!

// Global handlers (for debugging/logging, not replacing specific catches):
// Node.js:
// process.on('unhandledRejection', (reason, promise) => {
//   console.error('Caught Unhandled Rejection (Node.js):', reason.message);
// });

// Browser:
// window.addEventListener('unhandledrejection', (event) => {
//   console.error('Caught Unhandled Rejection (Browser):', event.reason.message);
//   // Prevent default console error
//   event.preventDefault();
// });
`;

export default function JavascriptErrorHandlingPage() {
  const page = 12; // Assuming this is the seventh page (index 6) in the JS tutorial

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/FFD700/8B0000?text=JavaScript+Error+Handling:+Building+Robust+Apps"
              alt="JavaScript Error Handling Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              JavaScript Error Handling: Building Robust Applications 🚧
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Even the best code can encounter unexpected issues. Users might
              provide invalid input, a network request might fail, or an
              external API might return an unexpected response. This is where
              **Error Handling** becomes critical. It's the process of
              anticipating, detecting, and gracefully responding to errors that
              occur during the execution of your program.
            </p>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Effective error handling prevents your application from crashing,
              provides meaningful feedback to users, and helps developers debug
              issues more efficiently.
            </p>
            ---
            {/* Basic Error Handling Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                1. The `try...catch...finally` Statement: Your First Line of
                Defense 🛡️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `try...catch...finally` statement is the primary mechanism
                for handling synchronous errors in JavaScript.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `try` block:
                  </strong>{" "}
                  Contains the code that might throw an error. If an error
                  occurs here, execution immediately jumps to the `catch` block.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `catch (error)` block:
                  </strong>{" "}
                  Contains the code to be executed if an error occurs in the
                  `try` block. The `error` parameter (often named `err` or `e`)
                  contains information about the error that occurred.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `finally` block (optional):
                  </strong>{" "}
                  Contains code that will always be executed, regardless of
                  whether an error occurred or was caught. It's typically used
                  for cleanup operations (e.g., closing file connections,
                  releasing resources).
                </li>
              </ul>
              <JavascriptViewCode code={section1} indexNumber={0} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                The `throw` statement is used to create and throw an error
                manually. This is useful when you detect a problem in your code
                that prevents it from proceeding correctly.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* The Error Object Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                2. The `Error` Object and Common Error Types ℹ️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When an error occurs, JavaScript creates an `Error` object (or
                an object that inherits from `Error`). This object contains
                useful information about the error.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `error.name`:
                  </strong>{" "}
                  A string representing the type of error (e.g.,
                  `'ReferenceError'`, `'TypeError'`, `'RangeError'`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `error.message`:
                  </strong>{" "}
                  A human-readable string describing the error.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `error.stack` (non-standard but widely used):
                  </strong>{" "}
                  A string representing the call stack at the moment the error
                  was thrown, very useful for debugging.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Common built-in error types include:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `ReferenceError`:
                  </strong>{" "}
                  Occurs when you try to access a variable that hasn't been
                  declared.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `TypeError`:
                  </strong>{" "}
                  Occurs when an operation is performed on a value that is not
                  of the expected type.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `SyntaxError`:
                  </strong>{" "}
                  Occurs when there's an error in the grammar of the JavaScript
                  code (usually caught by the parser before execution).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `RangeError`:
                  </strong>{" "}
                  Occurs when a numeric variable or parameter is outside its
                  valid range.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `URIError`:
                  </strong>{" "}
                  Occurs when invalid parameters are passed to URI functions
                  like `encodeURI()` or `decodeURIComponent()`.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `EvalError`:
                  </strong>{" "}
                  Very rare in modern JS; related to errors with `eval()`.
                </li>
              </ul>
              <JavascriptViewCode code={section2} indexNumber={1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Understanding these common error types helps you pinpoint issues
                more quickly.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Custom Errors Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                3. Throwing Custom Errors with Classes: Tailored Feedback 🎨
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While built-in error types cover many scenarios, it's often
                beneficial to create your own custom error types for specific
                application-level problems. This improves readability, allows
                for more precise error handling (e.g., catching only specific
                types of errors), and provides richer error information.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can create custom error classes by `extending` the built-in
                `Error` class.
              </p>
              <JavascriptViewCode code={section3} indexNumber={2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Custom errors allow you to add specific properties (like `field`
                or `statusCode`) that are relevant to your application's domain,
                making error handling logic more intelligent and targeted. Using
                `instanceof` allows you to check the type of error and handle it
                accordingly.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Asynchronous Error Handling Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                4. Error Handling with Promises and `async/await` ⏱️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Synchronous `try...catch` only works for errors that occur
                immediately within its block. It *does not* catch errors from
                asynchronous operations that complete later (e.g., `setTimeout`,
                network requests, Promises). For asynchronous code, especially
                with Promises, you need specific error handling mechanisms.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Promises: `.catch()`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When using Promises, the `.catch()` method is the standard way
                to handle rejections (errors).
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                `async/await`: `try...catch` (revisited!)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The beauty of `async/await` is that it allows you to use
                familiar `try...catch` blocks to handle errors from asynchronous
                operations, making asynchronous code look and feel more like
                synchronous code. When an `await`ed Promise rejects, it throws
                an error that can be caught by the surrounding `try...catch`.
              </p>
              <JavascriptViewCode code={section4} indexNumber={3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                <strong className="tw:font-semibold! tw:text-red-600!">
                  Unhandled Promise Rejections:
                </strong>{" "}
                It's critical to always catch Promise rejections. If a Promise
                rejects and there's no `.catch()` handler (or `try...catch` in
                an `async` function) in its chain, it will result in an
                "unhandled promise rejection," which can lead to uncaught errors
                in your application (often causing crashes or unexpected
                behavior). Modern browsers and Node.js often provide warnings or
                terminate the process in such cases.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Best Practices Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                5. Error Handling Best Practices ✨
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600;">
                    Be Specific with Catches:
                  </strong>{" "}
                  Use `instanceof` with custom errors to handle different types
                  of errors differently.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600;">
                    Don't Swallow Errors:
                  </strong>{" "}
                  Avoid empty `catch` blocks. Even if you can't recover, at
                  least log the error to the console or to an error tracking
                  service.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600;">
                    Fail Fast, Fail Loudly:
                  </strong>{" "}
                  Throw errors as soon as you detect an invalid state. This
                  makes debugging easier.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600;">
                    Centralized Error Logging:
                  </strong>{" "}
                  In larger applications, set up a global error handler (e.g.,
                  `window.onerror` for browsers,
                  `process.on('uncaughtException')` and
                  `process.on('unhandledRejection')` for Node.js) to catch
                  otherwise unhandled errors and report them.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600;">
                    User Feedback:
                  </strong>{" "}
                  For user-facing applications, translate technical errors into
                  user-friendly messages.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600;">
                    Resource Cleanup with `finally`:
                  </strong>{" "}
                  Always use `finally` for cleanup code that must execute
                  regardless of success or failure.
                </li>
              </ul>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Conclusion Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Conclusion: Write Resilient Code! ✅
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Error handling is not just about preventing crashes; it's about
                making your applications more predictable, reliable, and
                user-friendly. By understanding `try...catch`, the `Error`
                object, custom errors, and how to handle asynchronous errors
                with Promises and `async/await`, you're well-equipped to build
                robust JavaScript applications that can gracefully recover from
                unexpected situations.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                Practice anticipating potential errors in your code and
                implementing appropriate handling strategies. This proactive
                approach will save you countless hours of debugging and lead to
                a much better user experience.
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
