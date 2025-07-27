import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider"; // Assuming CssBoxHightLight is not needed for JS intro
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";

export const metadata = {
  title: "Introduction to JavaScript - OpenChains Technologies",
  description:
    "Embark on your JavaScript journey! Learn what JavaScript is, why it's essential for web development, and how to get started with basic syntax and execution.",
  openGraph: {
    title: "Introduction to JavaScript - OpenChains Technologies",
    description:
      "Embark on your JavaScript journey! Learn what JavaScript is, why it's essential for web development, and how to get started with basic syntax and execution.",
    url: `${baseUrl}/lessons/javascript/introduction`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Introduction to JavaScript - OpenChains Technologies",
    description:
      "Embark on your JavaScript journey! Learn what JavaScript is, why it's essential for web development, and how to get started with basic syntax and execution.",
  },
  keywords: [
    "JavaScript",
    "JS",
    "Web Development",
    "Programming Language",
    "Client-Side Scripting",
    "OpenChains Technologies",
    "Introduction to JavaScript",
    "What is JavaScript",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/introduction`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Basic Console Output
const section1 = `// This is a single-line comment in JavaScript

/*
This is a multi-line comment
It can span across several lines
*/

console.log("Hello, JavaScript!"); // Prints "Hello, JavaScript!" to the console
console.log(123 + 456); // Performs a calculation and prints the result
`;

// Code example 2: Embedding JavaScript (Internal Script)
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal JavaScript Example</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Welcome to JavaScript!</h1>
    <p id="greeting">Click the button below:</p>
    <button onclick="changeGreeting()">Change Greeting</button>

    <script>
        // This JavaScript code is embedded directly in the HTML
        function changeGreeting() {
            const greetingElement = document.getElementById("greeting");
            greetingElement.textContent = "Hello from Internal JavaScript!";
            alert("Greeting changed!"); // A simple pop-up alert
        }
    </script>
</body>
</html>
`;

// Code example 3: External JavaScript (JS content only for display)
const section3 = `// script.js
console.log("External JavaScript file loaded successfully!");

function showExternalMessage() {
    alert("This message comes from an external JavaScript file!");
    const heading = document.querySelector('h1');
    if (heading) {
        heading.style.color = 'blue';
    }
}

// You can add more complex logic here
const currentDate = new Date();
console.log("Current date and time:", currentDate);
`;

// Code example 4: HTML linked to external JS
const section4 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External JavaScript Example</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        button { padding: 10px 20px; font-size: 16px; cursor: pointer; margin-top: 20px;}
    </style>
    <script src="script.js" defer></script> 
</head>
<body>
    <h1>Using External JavaScript</h1>
    <p>This page demonstrates linking to a separate .js file.</p>
    <button onclick="showExternalMessage()">Trigger External JS</button>
</body>
</html>
`;

export default function JavascriptIntroPage() {
  const page = 0; // This is the first page in the JavaScript tutorial series

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=JavaScript:+The+Language+of+the+Web"
              alt="JavaScript Introduction Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Introduction to JavaScript: Bringing the Web to Life! 🚀
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              You've mastered HTML for structure and CSS for styling. Now, get
              ready for the exciting part: making your web pages interactive and
              dynamic with JavaScript! It's the engine that powers modern web
              experiences.
            </p>

            {/* What is JavaScript? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                What Exactly *Is* JavaScript? 💻
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                <strong className="tw:font-semibold! tw:text-blue-600!">
                  JavaScript (JS)
                </strong>{" "}
                is a lightweight, interpreted, or just-in-time compiled
                programming language with first-class functions. While it is
                most well-known as the scripting language for Web pages, it's
                also used in many non-browser environments.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Think of it this way:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    HTML
                  </strong>{" "}
                  gives your page its{" "}
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    structure
                  </strong>{" "}
                  (the nouns and verbs).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    CSS
                  </strong>{" "}
                  gives your page its{" "}
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    style
                  </strong>{" "}
                  (the colors, fonts, layout, etc.).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    JavaScript
                  </strong>{" "}
                  gives your page its{" "}
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    interactivity and behavior
                  </strong>{" "}
                  (what happens when you click a button, how data is fetched,
                  animations, etc.).
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed!">
                Originally, JavaScript was created at Netscape specifically for
                adding small dynamic features to web pages. Today, it has
                evolved into a powerful, full-fledged programming language
                capable of building complex web applications (frontend and
                backend), mobile apps, desktop apps, and even controlling
                hardware!
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Why Learn JavaScript? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Why is JavaScript Indispensable for Web Development? 🤔
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                JavaScript is the cornerstone of modern web development for
                several compelling reasons:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Client-Side Functionality:
                  </strong>{" "}
                  It enables interactive elements directly in the user's browser
                  without needing to send data back and forth to a server. This
                  means faster, more responsive user interfaces (UIs). Examples
                  include form validation, dynamic content updates, image
                  sliders, and interactive maps.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Universal Adoption:
                  </strong>{" "}
                  Every modern web browser has a JavaScript engine built-in.
                  This means your JavaScript code runs everywhere without
                  special plugins, making it the de-facto language for web
                  interactivity.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Versatility (Full-Stack Potential):
                  </strong>{" "}
                  With Node.js, JavaScript moved from being solely a client-side
                  language to a server-side language. This allows developers to
                  build entire applications (frontend and backend) using a
                  single language, streamlining development workflows.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Rich Ecosystem:
                  </strong>{" "}
                  JavaScript boasts a massive ecosystem of frameworks and
                  libraries (React, Angular, Vue.js for frontend; Express.js for
                  backend) that accelerate development and provide robust
                  solutions for almost any task.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Community Support:
                  </strong>{" "}
                  Due to its popularity, JavaScript has an enormous and active
                  developer community. This means abundant resources, tutorials,
                  and support are readily available when you encounter
                  challenges.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Basic JavaScript Syntax Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Getting Started: Basic JavaScript Syntax 🧩
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Before diving into complex logic, let's understand the very
                basics of how JavaScript code looks and works.
              </p>
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Comments: Explaining Your Code
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Comments are crucial for making your code readable and
                understandable, both for yourself and others. The JavaScript
                engine ignores them.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    Single-line comments:
                  </strong>{" "}
                  Start with `//`. Everything after `//` on the same line is a
                  comment.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    Multi-line comments:
                  </strong>{" "}
                  Start with `/*` and end with `*/`. Anything between them is a
                  comment.
                </li>
              </ul>
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Statements: The Instructions
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A JavaScript program is a series of{" "}
                <strong className="tw:font-semibold! tw:text-teal-600!">
                  statements
                </strong>
                . Each statement is an instruction for the computer to perform.
                Statements are typically terminated by a semicolon (`;`). While
                semicolons are technically optional in many cases due to
                JavaScript's Automatic Semicolon Insertion (ASI), it's a best
                practice to use them for clarity and to prevent unexpected bugs.
              </p>
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                `console.log()`: Your First Output
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                One of the most fundamental functions you'll use constantly is{" "}
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                  console.log()
                </code>
                . This function outputs messages to the browser's developer
                console (or your terminal if using Node.js). It's incredibly
                useful for debugging and understanding what your code is doing.
              </p>
              <JavascriptViewCode code={section1} indexNumber={0} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                To see this in action, open your browser's developer tools
                (usually by pressing F12 or right-clicking and selecting
                "Inspect" or "Inspect Element"), navigate to the "Console" tab,
                and paste these lines of code. You'll see the output directly
                there!
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* How to Include JavaScript in HTML: Three Ways */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                How to Link JavaScript to Your HTML 🔗
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Just like CSS, there are multiple ways to include JavaScript in
                your HTML documents. While all methods work, some are preferred
                for better code organization and maintainability.
              </p>

              {/* Method 1: Inline JavaScript */}
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. Inline JavaScript (Discouraged for most cases)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can embed small snippets of JavaScript directly within HTML
                attributes, especially for event handlers (e.g.,{" "}
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                  onclick
                </code>
                ,{" "}
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                  onmouseover
                </code>
                ).
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Example Usage:** Often seen for very simple, immediate
                actions.
              </p>
              <CodeReviewPager
                code={`<button onclick="alert('Hello from inline JS!');">Click Me</button>`}
              />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Notes:**
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Pros:
                  </strong>{" "}
                  Quick for very simple, single-use interactions.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Cons:
                  </strong>{" "}
                  <span className="tw:font-bold!">Strongly discouraged</span>{" "}
                  for anything more than trivial use. It mixes structure (HTML)
                  with behavior (JavaScript), making code messy, hard to read,
                  debug, and maintain. Avoid this in professional development.
                </li>
              </ul>

              {/* Method 2: Internal JavaScript */}
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. Internal JavaScript
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can embed JavaScript code directly within your HTML document
                using the
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                  {" <script> "}
                </code>
                tag. This tag can be placed in either the
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                  {" <head> "}
                </code>
                or
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                  {" <body> "}
                </code>{" "}
                section of your HTML.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Placement Considerations:**
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    In
                    <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                      {" <head> "}
                    </code>
                    :
                  </strong>{" "}
                  Scripts here are loaded and executed before the HTML body
                  content. If your script tries to manipulate HTML elements that
                  haven't been loaded yet, it might fail. You'd need to wrap
                  your code in an event listener (like `DOMContentLoaded`) to
                  ensure the HTML is ready.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    At the end of
                    <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                      {" <body> "}
                    </code>
                    (before
                    <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                      {" </body> "}
                    </code>
                    tag):
                  </strong>{" "}
                  This is a common practice. The HTML content above the script
                  will have already been parsed and rendered, so your JavaScript
                  can safely access and manipulate it.
                </li>
              </ul>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Notes:**
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Pros:
                  </strong>{" "}
                  Useful for single HTML pages where the script is specific to
                  that page and not reused elsewhere. Easier to manage than
                  inline styles for a single page.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Cons:
                  </strong>{" "}
                  Still mixes JavaScript with HTML. Not efficient for websites
                  with multiple pages that share common JavaScript code, as
                  you'd have to duplicate the script on each page.
                </li>
              </ul>

              {/* Method 3: External JavaScript (The Recommended Method!) */}
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                3. External JavaScript (The Industry Standard!)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The most robust and recommended way to include JavaScript is by
                using an{" "}
                <strong className="tw:font-semibold! tw:text-purple-600!">
                  external JavaScript file
                </strong>
                . You create a separate file (e.g., `script.js`, `main.js`)
                containing all your JavaScript code and link it to your HTML
                document using the{" "}
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                  {" <script> "}
                </code>
                tag with a `src` attribute.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-bold! tw:mb-2!">
                First, let's see the content of a typical external JavaScript
                file (`script.js`):
              </p>
              <JavascriptViewCode code={section3} indexNumber={1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:font-bold! tw:mb-2!">
                Now, how we link this JavaScript file to our HTML document:
              </p>
              <CodeReviewPager code={section4} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                The line{" "}
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                  {'<script src="script.js" defer></script>'}
                </code>{" "}
                in the
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                  {" <head> "}
                </code>
                (or at the end of{" "}
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                  {" <body> "}
                </code>
                ) links the external script.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Important Attributes for
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                  {" <script> "}
                </code>
                Tag:**
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `defer` attribute:
                  </strong>{" "}
                  (Recommended) When placed in the `head` with `defer`, the
                  script will download in parallel with HTML parsing and execute
                  only after the HTML document has been fully parsed. This is
                  ideal because it doesn't block HTML rendering and ensures the
                  DOM is ready for your script to interact with.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `async` attribute:
                  </strong>{" "}
                  (For independent scripts) The script will download in parallel
                  with HTML parsing, but will execute as soon as it's
                  downloaded, potentially before the HTML is fully parsed. Use
                  this for scripts that are independent of other scripts or the
                  DOM, like analytics.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Notes:**
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Pros:
                  </strong>{" "}
                  <span className="tw:font-bold!">Best practice!</span> Clearly
                  separates concerns (HTML for structure, CSS for style, JS for
                  behavior). Makes code highly organized, reusable, and easy to
                  maintain. Improves page load times as browsers can cache
                  external JS files.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Cons:
                  </strong>{" "}
                  Requires an extra HTTP request to fetch the script file
                  (though caching mitigates this).
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* What's Next? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                What's Next? Your JavaScript Journey Begins! 🚀
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Now that you have a foundational understanding of what
                JavaScript is and how to include it in your web pages, you're
                ready to dive deeper into its core concepts.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                In the upcoming lessons, we'll explore:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Variables:
                  </strong>{" "}
                  How to store and manage data.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Data Types:
                  </strong>{" "}
                  The different kinds of information JavaScript can work with.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Operators:
                  </strong>{" "}
                  Performing calculations and comparisons.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Control Flow:
                  </strong>{" "}
                  Making decisions and repeating actions in your code.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Functions:
                  </strong>{" "}
                  Organizing your code into reusable blocks.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:font-semibold!">
                Get ready to code! The best way to learn JavaScript is by
                writing it. Experiment with the examples, try changing values,
                and see what happens. Happy coding!
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
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
