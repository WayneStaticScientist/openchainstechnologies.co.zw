import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";

export const metadata = {
  title: "Asynchronous JavaScript - OpenChains Technologies",
  description:
    "Master Asynchronous JavaScript! A comprehensive guide from Callbacks to Promises and the modern Async/Await, demystifying non-blocking operations for dynamic web applications.",
  openGraph: {
    title: "Asynchronous JavaScript - OpenChains Technologies",
    description:
      "Master Asynchronous JavaScript! A comprehensive guide from Callbacks to Promises and the modern Async/Await, demystifying non-blocking operations for dynamic web applications.",
    url: `${baseUrl}/lessons/javascript/asynchronous`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asynchronous JavaScript - OpenChains Technologies",
    description:
      "Master Asynchronous JavaScript! A comprehensive guide from Callbacks to Promises and the modern Async/Await, demystifying non-blocking operations for dynamic web applications.",
  },
  keywords: [
    "Asynchronous JavaScript",
    "Callbacks",
    "Promises",
    "Async/Await",
    "Event Loop",
    "Non-blocking",
    "Web APIs",
    "Concurrency",
    "JavaScript Tutorial",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/asynchronous`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Synchronous vs Asynchronous
const section1 = `console.log("Start synchronous task");

// Synchronous blocking operation (imagine heavy computation)
for (let i = 0; i < 1000000000; i++) {
  // This loop blocks the main thread
}
console.log("Synchronous task finished");

console.log("Start asynchronous task");

// Asynchronous operation (e.g., setTimeout simulates network request)
setTimeout(() => {
  console.log("Asynchronous task (setTimeout) finished after 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("End of script (synchronous code continues)");
`;

// Code example 2: Callback Hell
const section2 = `function getUser(userId, callback) {
  setTimeout(() => {
    console.log(\`Fetching user \${userId}...\`);
    const user = { id: userId, name: \`User \${userId}\` };
    callback(user);
  }, 1000);
}

function getUserPosts(user, callback) {
  setTimeout(() => {
    console.log(\`Fetching posts for \${user.name}...\`);
    const posts = [\`Post 1 by \${user.name}\`, \`Post 2 by \${user.name}\`];
    callback(posts);
  }, 1000);
}

function displayData(user, posts) {
  console.log(\`--- Displaying Data ---\`);
  console.log(\`User: \${user.name}\`);
  console.log(\`Posts: \${posts.join(', ')}\`);
  console.log(\`---------------------\`);
}

// Callback Hell example
getUser(1, (user) => {
  getUserPosts(user, (posts) => {
    displayData(user, posts);
    // Imagine more nested calls here for comments, likes, etc.
    // getCommentsForPost(posts[0], (comments) => {
    //   getLikesForComment(comments[0], (likes) => {
    //     // ... and so on
    //   });
    // });
  });
});

console.log("Initiating data fetch...");
`;

// Code example 3: Simple Promise Example
const section3 = `function fetchData() {
  return new Promise((resolve, reject) => {
    const success = true; // Simulate a successful or failed operation

    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!"); // Operation completed successfully
      } else {
        reject("Failed to fetch data."); // Operation failed
      }
    }, 2000);
  });
}

console.log("Starting data fetch...");

fetchData()
  .then((message) => {
    console.log("Success:", message); // This runs if the promise resolves
  })
  .catch((error) => {
    console.error("Error:", error); // This runs if the promise rejects
  })
  .finally(() => {
    console.log("Fetch attempt completed (regardless of success/failure)."); // This always runs
  });

console.log("Request sent. Continuing with other tasks...");
`;

// Code example 4: Chaining Promises
const section4 = `function getUserPromise(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(\`Fetching user \${userId} (Promise)...\`);
      resolve({ id: userId, name: \`User \${userId}\` });
    }, 1000);
  });
}

function getUserPostsPromise(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(\`Fetching posts for \${user.name} (Promise)...\`);
      resolve([\`Post A by \${user.name}\`, \`Post B by \${user.name}\`]);
    }, 1000);
  });
}

function getPostCommentsPromise(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(\`Fetching comments for "\${post}" (Promise)...\`);
            resolve([\`Comment 1 on "\${post}"\`, \`Comment 2 on "\${post}"\`]);
        }, 1000);
    });
}

console.log("Starting promise chain...");

getUserPromise(101)
  .then((user) => {
    console.log("User fetched:", user.name);
    return getUserPostsPromise(user); // Return a new promise
  })
  .then((posts) => {
    console.log("Posts fetched:", posts);
    // Let's fetch comments for the first post
    if (posts.length > 0) {
        return getPostCommentsPromise(posts[0]); // Chain another promise
    } else {
        return Promise.resolve([]); // No posts, resolve with empty array
    }
  })
  .then((comments) => {
    console.log("Comments fetched:", comments);
    console.log("All data successfully retrieved via promise chain!");
  })
  .catch((error) => {
    console.error("An error occurred in the promise chain:", error);
  });

console.log("Promise chain initiated. UI remains responsive.");
`;

// Code example 5: Promise.all() and Promise.race()
const section5 = `function taskOne() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task One Completed");
      resolve("Result 1");
    }, 3000); // Takes 3 seconds
  });
}

function taskTwo() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task Two Completed");
      resolve("Result 2");
    }, 1000); // Takes 1 second
  });
}

function taskThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task Three (Error) Completed");
      reject("Error 3: Something went wrong"); // This task rejects
    }, 2000); // Takes 2 seconds
  });
}

console.log("--- Promise.all() Example ---");
Promise.all([taskOne(), taskTwo()])
  .then(results => {
    console.log("All promises resolved:", results); // ["Result 1", "Result 2"]
  })
  .catch(error => {
    console.error("One of the promises rejected (Promise.all):", error);
  });

console.log("--- Promise.all() with a failing promise ---");
Promise.all([taskOne(), taskThree()]) // taskThree will reject
  .then(results => {
    console.log("This will not be logged:", results);
  })
  .catch(error => {
    console.error("Caught error from a failing promise (Promise.all):", error); // Catches "Error 3"
  });

console.log("\\n--- Promise.race() Example ---");
Promise.race([taskOne(), taskTwo()])
  .then(result => {
    console.log("First promise to resolve/reject:", result); // "Result 2" (Task Two is faster)
  })
  .catch(error => {
    console.error("First promise to reject (Promise.race):", error);
  });

console.log("\\n--- Promise.race() with an error winning ---");
Promise.race([taskOne(), taskThree()]) // taskThree will reject first
  .then(result => {
    console.log("This will not be logged (error won):", result);
  })
  .catch(error => {
    console.error("First promise to reject (Promise.race):", error); // Catches "Error 3"
  });
`;

// Code example 6: Async/Await Basic Example
const section6 = `function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Resolved after 2 seconds');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('Calling async function...');
  const result = await resolveAfter2Seconds(); // Pause execution until promise resolves
  console.log(result); // Logs "Resolved after 2 seconds"
  console.log('Async function finished.');
}

console.log('Synchronous code before async call.');
asyncCall();
console.log('Synchronous code after async call (continues immediately).');
`;

// Code example 7: Async/Await Error Handling
const section7 = `function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false; // Simulate failure
      if (success) {
        resolve("Data received!");
      } else {
        reject("Network error: Failed to fetch.");
      }
    }, 1500);
  });
}

async function handleDataFetch() {
  try {
    console.log("Attempting to fetch data...");
    const data = await fetchDataWithError(); // await for potential error
    console.log("Success:", data);
  } catch (error) {
    console.error("Error in handleDataFetch:", error); // Catches the rejected promise
  } finally {
    console.log("Fetch operation concluded.");
  }
}

console.log("Before calling handleDataFetch.");
handleDataFetch();
console.log("After calling handleDataFetch (non-blocking).");
`;

// Code example 8: Real-world Async/Await with Fetch API
const section8 = `// This code requires a browser environment or a Node.js environment with node-fetch installed.
// For browser, you can directly run this in your browser's console or an HTML file.

async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);

    if (!response.ok) { // Check if the request was successful (status code 200-299)
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const userData = await response.json(); // Parse the JSON response
    console.log(\`User \${userId} data:\`, userData);
    return userData;
  } catch (error) {
    console.error(\`Failed to fetch user \${userId}:\`, error);
    // You might want to return a default value or re-throw the error
    return null; 
  }
}

async function fetchPostsForUser(userId) {
    try {
        const response = await fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${userId}\`);

        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const posts = await response.json();
        console.log(\`Posts for user \${userId}:\`, posts.map(p => p.title));
        return posts;
    } catch (error) {
        console.error(\`Failed to fetch posts for user \${userId}:\`, error);
        return [];
    }
}

// Chaining async/await calls
async function getUserDetailsAndPosts(userId) {
    console.log(\`Fetching details for user \${userId}...\`);
    const user = await fetchUserData(userId); // Wait for user data

    if (user) {
        await fetchPostsForUser(user.id); // Wait for posts
        console.log(\`Finished fetching all data for user \${userId}.\`);
    } else {
        console.log(\`Could not fetch details for user \${userId}.\`);
    }
}

// Example calls
getUserDetailsAndPosts(1); // Valid user
// getUserDetailsAndPosts(999); // Invalid user to see error handling

console.log("Application started. UI is responsive during API calls.");
`;

export default function JavascriptAsynchronousPage() {
  const page = 9; // Assuming this is the third page (index 2) in the JS tutorial

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/FFE4E1/8B0000?text=Asynchronous+JavaScript:+Mastering+Concurrency"
              alt="Asynchronous JavaScript Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Asynchronous JavaScript: Keeping the Web Responsive ⏱️
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              In modern web development, you often need to perform tasks that
              take time – like fetching data from a server, reading a file, or
              waiting for a timer. If JavaScript were purely synchronous, your
              entire web page would freeze until these long-running operations
              completed. This is where <strong>Asynchronous JavaScript</strong>{" "}
              comes to the rescue!
            </p>

            {/* Synchronous vs. Asynchronous */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Synchronous vs. Asynchronous: A Fundamental Difference 🔄
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Before we dive into the mechanisms, let's clarify the
                difference:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Synchronous (Blocking) Code:
                  </strong>
                  Code that executes line by line, in sequence. Each operation
                  must complete before the next one starts. If a synchronous
                  operation takes a long time, it "blocks" the main thread,
                  making your UI unresponsive.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Asynchronous (Non-Blocking) Code:
                  </strong>
                  Code that can start an operation and then allow other code to
                  run in the meantime. The long-running operation will complete
                  later, and notify you when it's done. This prevents the UI
                  from freezing and provides a much smoother user experience.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                JavaScript is inherently <strong>single-threaded</strong>,
                meaning it has only one "main thread" of execution. To achieve
                asynchronous behavior without blocking this single thread,
                JavaScript relies on external mechanisms like the browser's Web
                APIs (for `setTimeout`, `fetch`, etc.) and the Event Loop.
              </p>
              <JavascriptViewCode code={section1} indexNumber={0} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Run this code in your browser's console. You'll notice "End of
                script (synchronous code continues)" appears immediately after
                "Synchronous task finished", even though the "Asynchronous task"
                takes 2 seconds to complete. This demonstrates that the
                `setTimeout` function does not block the main thread.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Callbacks */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Callbacks: The Traditional Way 📞
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A <strong>callback function</strong> is a function passed as an
                argument to another function, which is then invoked inside the
                outer function to complete some kind of routine or action.
                Callbacks have been the foundational way to handle asynchronous
                operations in JavaScript for a long time.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Common examples you've likely seen already:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>`setTimeout(callbackFunction, delay)`</li>
                <li>`addEventListener('click', callbackFunction)`</li>
                <li>
                  `Array.prototype.map(callbackFunction)` (though this is
                  synchronous)
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While callbacks are essential, they can lead to a problem known
                as <strong>"Callback Hell"</strong> or the "Pyramid of Doom"
                when dealing with multiple nested asynchronous operations.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Callback Hell Example:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Consider a scenario where you need to fetch a user, then their
                posts, then comments for a specific post, and so on. Using only
                callbacks, this quickly becomes deeply nested and hard to
                read/maintain.
              </p>
              <JavascriptViewCode code={section2} indexNumber={1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                As you can see, the code indents further and further, making it
                difficult to follow the flow of execution and manage errors.
                This is the primary reason why newer asynchronous patterns
                emerged.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Promises */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Promises: A Better Way to Handle Asynchronous Operations 💪
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A <strong>Promise</strong> is an object that represents the
                eventual completion (or failure) of an asynchronous operation
                and its resulting value. It's a placeholder for a value that is
                not yet known but will be in the future.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Promises can be in one of three states:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Pending:
                  </strong>{" "}
                  The initial state; neither fulfilled nor rejected. The
                  asynchronous operation is still in progress.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Fulfilled (Resolved):
                  </strong>{" "}
                  The operation completed successfully, and the promise now has
                  a resulting value.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Rejected:
                  </strong>{" "}
                  The operation failed, and the promise has a reason for the
                  failure (an error).
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Once a promise is fulfilled or rejected, it is said to be{" "}
                <strong>settled</strong> and its state cannot change.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Creating and Consuming Promises: `new Promise()`, `.then()`,
                `.catch()`, `.finally()`
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:pl-4!">
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    new Promise((resolve, reject) {"=>"} &#123; ... &#125;)
                  </code>
                  : Used to create a new promise. The executor function takes
                  two arguments: `resolve` (a function to call if the operation
                  succeeds) and `reject` (a function to call if the operation
                  fails).
                </li>
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    .then(onFulfilled, onRejected)
                  </code>
                  : Used to handle the successful completion (`onFulfilled`) or
                  rejection (`onRejected`) of a promise. The `onFulfilled`
                  callback receives the resolved value.
                </li>
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    .catch(onRejected)
                  </code>
                  : A shorthand for `.then(null, onRejected)`. Specifically used
                  to handle errors/rejections. It's good practice to always
                  include a `.catch()` block.
                </li>
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    .finally(onFinally)
                  </code>
                  : A method that executes a callback function regardless of
                  whether the promise was fulfilled or rejected. Useful for
                  cleanup tasks.
                </li>
              </ul>
              <JavascriptViewCode code={section3} indexNumber={2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Experiment with changing `const success = true;` to `false` in
                the example to see the `.catch()` block in action.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Promise Chaining: Solving Callback Hell
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                One of the biggest advantages of promises is their ability to be
                chained. When a `.then()` callback returns another promise, the
                next `.then()` in the chain will wait for that new promise to
                resolve. This allows you to sequence asynchronous operations in
                a flat, readable way, avoiding callback hell.
              </p>
              <JavascriptViewCode code={section4} indexNumber={3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Notice how the code flows linearly, even though each step is
                asynchronous. If any promise in the chain rejects, the execution
                jumps directly to the nearest `.catch()` block, providing robust
                error handling.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                `Promise.all()` and `Promise.race()`: Handling Multiple Promises
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:pl-4!">
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    Promise.all(iterable)
                  </code>
                  : Takes an iterable (like an array) of promises as input. It
                  returns a single Promise that resolves when all of the input
                  promises have resolved, or rejects if any of the input
                  promises reject. The resolved value is an array of the
                  resolved values of the input promises, in the same order.
                </li>
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    Promise.race(iterable)
                  </code>
                  : Also takes an iterable of promises. It returns a single
                  Promise that resolves or rejects as soon as one of the input
                  promises resolves or rejects, with the value or reason from
                  that promise. It's a "first one wins" scenario.
                </li>
              </ul>
              <JavascriptViewCode code={section5} indexNumber={4} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                `Promise.all()` is great for fetching multiple pieces of data
                concurrently where all of them are required. `Promise.race()` is
                useful for scenarios like timeouts or fetching data from
                multiple sources and taking the fastest one.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Async/Await */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Async/Await: The Modern Asynchronous Syntax ✨
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Introduced in ES2017 (ES8), `async` and `await` are syntactic
                sugar built on top of Promises. They allow you to write
                asynchronous code that looks and behaves more like synchronous
                code, making it incredibly easy to read and reason about,
                especially with complex sequences of operations.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                The `async` Keyword
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:pl-4!">
                <li>
                  The `async` keyword is used to declare an asynchronous
                  function.
                </li>
                <li>
                  An `async` function always returns a Promise, implicitly. If
                  it returns a non-Promise value, JavaScript automatically wraps
                  it in a resolved Promise. If it throws an error, it returns a
                  rejected Promise.
                </li>
              </ul>
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                The `await` Keyword
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:pl-4!">
                <li>
                  The `await` keyword can only be used inside an `async`
                  function.
                </li>
                <li>
                  It literally "waits" for a Promise to settle (either resolve
                  or reject) before continuing the execution of the `async`
                  function.
                </li>
                <li>
                  If the Promise resolves, `await` returns its resolved value.
                </li>
                <li>
                  If the Promise rejects, `await` throws an error, which can be
                  caught using a standard `try...catch` block.
                </li>
              </ul>
              <JavascriptViewCode code={section6} indexNumber={5} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Notice how `asyncCall()` pauses at `await` until
                `resolveAfter2Seconds()` completes, yet the code outside
                `asyncCall()` continues to run without blocking. This is the
                magic of `async/await`.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Error Handling with `async/await` (`try...catch`)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Because `await` throws an error when a promise rejects, you can
                use the familiar `try...catch` statement to handle errors in
                `async` functions, just like with synchronous code. This makes
                error handling significantly more intuitive than with `.catch()`
                blocks in long promise chains.
              </p>
              <JavascriptViewCode code={section7} indexNumber={6} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                This pattern makes handling errors in complex asynchronous flows
                much cleaner and more readable.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Real-World Example: Fetching Data with `async/await`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Let's put it all together with a common real-world scenario:
                fetching data from a web API using the `fetch` API, which is
                Promise-based and pairs perfectly with `async/await`. We'll use
                a public API called JSONPlaceholder for dummy data.
              </p>
              <JavascriptViewCode code={section8} indexNumber={7} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                This example clearly shows how `async/await` simplifies complex
                asynchronous workflows into a sequence that's easy to read and
                debug, even with multiple API calls and error handling.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* The JavaScript Event Loop (Advanced) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Understanding the Event Loop: How Asynchronous JavaScript Works
                Under the Hood 🧠 (Advanced)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While `callbacks`, `promises`, and `async/await` provide the
                syntax for asynchronous programming, the actual mechanism that
                makes it non-blocking is the <strong>Event Loop</strong>. This
                is a crucial concept for a deeper understanding of JavaScript's
                concurrency model.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                JavaScript's runtime environment (like a browser or Node.js)
                consists of:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    Call Stack:
                  </strong>{" "}
                  Where JavaScript code is executed (synchronous operations).
                  Functions are pushed onto the stack when called and popped off
                  when they return.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    Web APIs (Browser) / C++ APIs (Node.js):
                  </strong>{" "}
                  Provided by the environment, not JavaScript itself. These
                  handle asynchronous tasks like `setTimeout`, DOM events,
                  `fetch` requests, etc.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    Callback Queue (or Task Queue):
                  </strong>{" "}
                  Where messages/callbacks from Web APIs are pushed when their
                  asynchronous tasks are completed.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    Microtask Queue:
                  </strong>{" "}
                  A higher-priority queue specifically for Promise callbacks
                  (`.then()`, `.catch()`, `.finally()`, `await`).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    Event Loop:
                  </strong>{" "}
                  The continuous process that monitors the Call Stack and the
                  queues. When the Call Stack is empty (meaning no synchronous
                  code is running), the Event Loop takes the first item from the
                  Microtask Queue (if any) and pushes it onto the Call Stack for
                  execution. If the Microtask Queue is empty, it then takes the
                  first item from the Callback Queue and pushes it onto the Call
                  Stack.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The key takeaway is:{" "}
                <strong>
                  JavaScript executes synchronous code first. Only when the Call
                  Stack is empty will the Event Loop start pulling tasks from
                  the queues. Microtasks (Promises) are always prioritized over
                  macrotasks (like `setTimeout` callbacks) in the Callback
                  Queue.
                </strong>
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This model ensures that even though JavaScript is
                single-threaded, it can perform non-blocking I/O operations and
                maintain a responsive user interface.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Conclusion: Your Asynchronous Journey Continues! 🚀
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Understanding asynchronous JavaScript is fundamental for
                building modern, high-performance web applications. You've now
                learned about:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  The difference between synchronous and asynchronous code.
                </li>
                <li>The limitations of Callbacks (Callback Hell).</li>
                <li>
                  The power of Promises for managing async operations and
                  chaining.
                </li>
                <li>
                  The elegance and readability of `async/await` for simplifying
                  promise-based code.
                </li>
                <li>A glimpse into the underlying Event Loop mechanism.</li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                As you continue your JavaScript journey, you'll encounter
                asynchronous patterns constantly, especially when dealing with
                APIs, user interactions, and timers. Practice these concepts
                regularly by building small projects that involve data fetching
                or delayed actions. Happy coding!
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
