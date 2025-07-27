import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";

export const metadata = {
  title: "JavaScript Events - OpenChains Technologies",
  description:
    "Dive into JavaScript Events! Learn how to make your web pages truly interactive by responding to user actions and browser events.",
  openGraph: {
    title: "JavaScript Events - OpenChains Technologies",
    description:
      "Dive into JavaScript Events! Learn how to make your web pages truly interactive by responding to user actions and browser events.",
    url: `${baseUrl}/lessons/javascript/events`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Events - OpenChains Technologies",
    description:
      "Dive into JavaScript Events! Learn how to make your web pages truly interactive by responding to user actions and browser events.",
  },
  keywords: [
    "JavaScript Events",
    "DOM Events",
    "Event Handling",
    "Event Listeners",
    "Event Object",
    "Event Delegation",
    "Bubbling",
    "Capturing",
    "User Interaction",
    "Web Development",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/events`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Inline Event Handler (Discouraged)
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inline Event Example</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Inline Event Handler</h1>
    <button onclick="alert('Button clicked using inline JS!');">Click Me (Inline)</button>
</body>
</html>
`;

// Code example 2: Internal Event Handler
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal Event Example</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        button { padding: 10px 20px; font-size: 16px; cursor: pointer; margin-top: 20px; }
        #message { margin-top: 20px; font-size: 1.2em; color: #333; }
    </style>
</head>
<body>
    <h1>Internal Event Handler</h1>
    <p id="message">This message will change.</p>
    <button id="changeButton">Change Message</button>

    <script>
        // Get a reference to the button element
        const myButton = document.getElementById('changeButton');
        const displayMessage = document.getElementById('message');

        // Define a function to handle the click event
        function handleButtonClick() {
            displayMessage.textContent = 'Message changed by internal script!';
            console.log('Button was clicked!');
        }

        // Attach the event handler to the button's click event
        myButton.onclick = handleButtonClick; // Using onclick property
    </script>
</body>
</html>
`;

// Code example 3: External Event Listener (script3.js)
const section3 = `// script3.js

// Function to handle button clicks
function handleExternalButtonClick() {
    const externalMessage = document.getElementById('externalMessage');
    if (externalMessage) {
        externalMessage.textContent = 'External script changed this message!';
        externalMessage.style.color = 'blue';
    }
    console.log('Button clicked from external script!');
}

// Function to show coordinates on mouse move
function showCoords(event) {
    const coordsDisplay = document.getElementById('coordsDisplay');
    if (coordsDisplay) {
        coordsDisplay.textContent = \`Mouse X: \${event.clientX}, Mouse Y: \${event.clientY}\`;
    }
}

// Function to log key presses
function logKeyPress(event) {
    console.log(\`Key pressed: \${event.key}, Key Code: \${event.keyCode}\`);
}

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    const externalButton = document.getElementById('externalButton');
    if (externalButton) {
        // Using addEventListener for better practice
        externalButton.addEventListener('click', handleExternalButtonClick);
    }

    const mouseMoveArea = document.getElementById('mouseMoveArea');
    if (mouseMoveArea) {
        mouseMoveArea.addEventListener('mousemove', showCoords);
    }

    document.addEventListener('keydown', logKeyPress);
});

console.log('External script loaded and event listeners are ready!');
`;

// Code example 4: HTML for External Event Listener
const section4 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External Event Listener Example</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        button { padding: 10px 20px; font-size: 16px; cursor: pointer; margin-top: 20px; }
        #externalMessage { margin-top: 20px; font-size: 1.2em; color: #333; }
        #mouseMoveArea { 
            width: 80%; 
            height: 100px; 
            border: 2px dashed #ccc; 
            margin: 20px auto; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            background-color: #f9f9f9;
        }
    </style>
    <script src="script3.js" defer></script> 
</head>
<body>
    <h1>External Event Listener</h1>
    <p id="externalMessage">Click the button to see changes from an external script.</p>
    <button id="externalButton">Click Me (External)</button>

    <div id="mouseMoveArea">
        <p>Move your mouse over this box!</p>
        <p id="coordsDisplay"></p>
    </div>

    <h2>Try typing something! (Check your browser's console)</h2>
</body>
</html>
`;

// Code example 5: Event Object
const section5 = `// JavaScript for event object example
document.getElementById('eventButton').addEventListener('click', function(event) {
    console.log('Event Type:', event.type); // e.g., 'click'
    console.log('Target Element:', event.target); // The element that triggered the event
    console.log('Mouse X Coordinate:', event.clientX); // X coordinate of the mouse pointer
    console.log('Mouse Y Coordinate:', event.clientY); // Y coordinate of the mouse pointer
    console.log('Shift Key Pressed:', event.shiftKey); // true if Shift key was down
    event.preventDefault(); // Prevents default action (e.g., submitting a form)
    console.log('Default action prevented!');
});

document.getElementById('linkExample').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior (navigating to a new page)
    alert('Link click prevented! You would not be redirected.');
});
`;

// Code example 6: HTML for Event Object
const section6 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Object Example</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        button { padding: 10px 20px; font-size: 16px; cursor: pointer; margin-top: 20px; }
        a { font-size: 1.1em; color: #007bff; text-decoration: underline; cursor: pointer; }
    </style>
    <script src="event-object-script3.js" defer></script>
</head>
<body>
    <h1>Exploring the Event Object</h1>
    <button id="eventButton">Click Me to See Event Info</button>
    <p><a href="https://www.google.com" id="linkExample">Click this link (will not navigate)</a></p>
    <p>Open your browser's developer console (F12) to see the event details.</p>
</body>
</html>
`;

// Code example 7: Event Bubbling
const section7 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Bubbling Example</title>
    <style>
        body * {
            border: 1px solid #ccc;
            padding: 20px;
            margin: 10px;
        }
        .grandparent { background-color: #f0f8ff; }
        .parent { background-color: #e0ffff; }
        .child { background-color: #f5f5dc; }
    </style>
</head>
<body>
    <h1>Event Bubbling</h1>
    <div class="grandparent">
        Grandparent
        <div class="parent">
            Parent
            <div class="child">
                Child
            </div>
        </div>
    </div>

    <script>
        const grandparent = document.querySelector('.grandparent');
        const parent = document.querySelector('.parent');
        const child = document.querySelector('.child');

        grandparent.addEventListener('click', function() {
            console.log('Grandparent clicked (Bubbling)');
        });

        parent.addEventListener('click', function() {
            console.log('Parent clicked (Bubbling)');
        });

        child.addEventListener('click', function() {
            console.log('Child clicked (Bubbling)');
        });
    </script>
</body>
</html>
`;

// Code example 8: Event Capturing
const section8 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Capturing Example</title>
    <style>
        body * {
            border: 1px solid #ccc;
            padding: 20px;
            margin: 10px;
        }
        .grandparent { background-color: #f0f8ff; }
        .parent { background-color: #e0ffff; }
        .child { background-color: #f5f5dc; }
    </style>
</head>
<body>
    <h1>Event Capturing</h1>
    <div class="grandparent">
        Grandparent
        <div class="parent">
            Parent
            <div class="child">
                Child
            </div>
        </div>
    </div>

    <script>
        const grandparent = document.querySelector('.grandparent');
        const parent = document.querySelector('.parent');
        const child = document.querySelector('.child');

        // The third argument 'true' indicates capturing phase
        grandparent.addEventListener('click', function() {
            console.log('Grandparent clicked (Capturing)');
        }, true); 

        parent.addEventListener('click', function() {
            console.log('Parent clicked (Capturing)');
        }, true);

        child.addEventListener('click', function() {
            console.log('Child clicked (Capturing)');
        }, true);
    </script>
</body>
</html>
`;

// Code example 9: Stopping Propagation
const section9 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopping Event Propagation</title>
    <style>
        body * {
            border: 1px solid #ccc;
            padding: 20px;
            margin: 10px;
        }
        .outer { background-color: #ffe0e0; }
        .inner { background-color: #e0ffe0; }
    </style>
</head>
<body>
    <h1>Stopping Event Propagation</h1>
    <div class="outer">
        Outer Div
        <button class="inner" id="stopButton">Click Me (Stop Propagation)</button>
    </div>

    <script>
        const outerDiv = document.querySelector('.outer');
        const stopButton = document.getElementById('stopButton');

        outerDiv.addEventListener('click', function() {
            console.log('Outer Div was clicked!');
        });

        stopButton.addEventListener('click', function(event) {
            console.log('Button was clicked!');
            event.stopPropagation(); // Stop the event from bubbling up to parent elements
            console.log('Event propagation stopped!');
        });
    </script>
</body>
</html>
`;

// Code example 10: Event Delegation
const section10 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Delegation Example</title>
    <style>
        #myList {
            list-style: none;
            padding: 0;
            width: 200px;
            margin: 20px auto;
            border: 1px solid #ddd;
        }
        #myList li {
            background-color: #f9f9f9;
            padding: 10px;
            margin-bottom: 5px;
            cursor: pointer;
            border-radius: 4px;
        }
        #myList li:hover {
            background-color: #e9e9e9;
        }
        button {
            padding: 8px 15px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>Event Delegation</h1>
    <ul id="myList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
    <button id="addItemBtn">Add New Item</button>

    <script>
        const myList = document.getElementById('myList');
        const addItemBtn = document.getElementById('addItemBtn');
        let itemCount = 4;

        // Use event delegation on the parent <ul> element
        myList.addEventListener('click', function(event) {
            // Check if the clicked element is an <li>
            if (event.target.tagName === 'LI') {
                console.log('Clicked item:', event.target.textContent);
                event.target.style.backgroundColor = '#d4edda'; // Highlight clicked item
            }
        });

        addItemBtn.addEventListener('click', function() {
            itemCount++;
            const newItem = document.createElement('li');
            newItem.textContent = 'Item ' + itemCount;
            myList.appendChild(newItem);
            console.log('New item added!');
        });
    </script>
</body>
</html>
`;

export default function JavascriptEventsPage() {
  const page = 8; // This is the second page (index 1) in the JavaScript tutorial series

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/D1E7DD/0F5132?text=JavaScript+Events:+Making+Websites+Dynamic"
              alt="JavaScript Events Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              JavaScript Events: Bringing Your Web Pages to Life with
              Interaction! 🎉
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              You've learned the basics of JavaScript syntax and how to include
              it in your HTML. Now, get ready to make your web pages truly
              dynamic and responsive to user actions with{" "}
              <strong>JavaScript Events</strong>!
            </p>

            {/* What are Events? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                What Exactly Are JavaScript Events? 👂
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                In the context of web browsers, an <strong>event</strong> is an
                action or occurrence that happens in the browser, which the
                browser tells you about so your code can react to it. These
                events can be triggered by the user (like clicking a button,
                typing into a field, or moving the mouse), or by the browser
                itself (like a page loading, an image finishing loading, or an
                error occurring).
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Think of it like this: your web page is constantly "listening"
                for things to happen. When an event occurs, it "fires," and you
                can write JavaScript code to "handle" that event.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    User-initiated Events:
                  </strong>
                  <ul>
                    <li>
                      <strong>Mouse Events:</strong> `click`, `mouseover`,
                      `mouseout`, `mousedown`, `mouseup`, `mousemove`
                    </li>
                    <li>
                      <strong>Keyboard Events:</strong> `keydown`, `keyup`,
                      `keypress`
                    </li>
                    <li>
                      <strong>Form Events:</strong> `submit`, `change`, `focus`,
                      `blur`
                    </li>
                    <li>
                      <strong>Touch Events:</strong> (for mobile devices)
                      `touchstart`, `touchend`, `touchmove`
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Browser-initiated Events:
                  </strong>
                  <ul>
                    <li>`load` (when an entire page or element has loaded)</li>
                    <li>
                      `DOMContentLoaded` (when the HTML document has been fully
                      loaded and parsed)
                    </li>
                    <li>`resize` (when the browser window is resized)</li>
                    <li>`scroll` (when the user scrolls)</li>
                    <li>`error` (when an error occurs)</li>
                  </ul>
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Event Handling: How to Respond to Events */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Event Handling: Making Your Code React ✍️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                To respond to an event, you attach an{" "}
                <strong>event handler</strong> (a JavaScript function) to an
                HTML element. When the event occurs on that element, your event
                handler function will be executed. There are several ways to do
                this:
              </p>

              {/* Method 1: Inline Event Handlers */}
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. Inline Event Handlers (HTML Event Attributes)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This method involves embedding JavaScript code directly into
                HTML attributes like `onclick`, `onmouseover`, etc. While simple
                for very basic actions, it's generally{" "}
                <strong>discouraged</strong> for anything beyond trivial use
                because it mixes JavaScript directly into your HTML, making your
                code harder to read, maintain, and debug.
              </p>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                <strong>Considerations:</strong>
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Pros:
                  </strong>{" "}
                  Easiest for quick, one-off tests.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Cons:
                  </strong>{" "}
                  Violates the principle of{" "}
                  <a href="#" className="tw:text-blue-500! tw:underline!">
                    Separation of Concerns
                  </a>{" "}
                  (mixing HTML and JS). Leads to unmaintainable code, especially
                  for complex interactions or multiple elements.
                </li>
              </ul>

              {/* Method 2: Traditional DOM Event Handlers */}
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. Traditional DOM Event Handlers (Using Properties)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can assign an event handler function directly to an
                element's event property (e.g., `element.onclick`,
                `element.onmouseover`). This is an improvement over inline
                handlers as it keeps JavaScript out of your HTML.
              </p>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                <strong>Considerations:</strong>
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Pros:
                  </strong>{" "}
                  Better separation of concerns than inline. Relatively simple
                  to understand.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Cons:
                  </strong>{" "}
                  A major limitation is that you can only attach{" "}
                  <strong>one</strong> event handler of a specific type to an
                  element. If you assign another function to `element.onclick`,
                  it will overwrite the previous one. This is why it's generally
                  not the preferred method for complex applications.
                </li>
              </ul>

              {/* Method 3: Event Listeners (The Modern & Recommended Way!) */}
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                3. Event Listeners (`addEventListener()` - The Best Practice!)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `addEventListener()` method is the most powerful and
                flexible way to handle events in JavaScript. It allows you to
                attach multiple event handlers of the same type to a single
                element without overwriting previous ones. It also gives you
                more control over the event flow (bubbling vs. capturing, which
                we'll discuss next).
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The syntax is:
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                  element.addEventListener(event, function, useCapture);
                </code>
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:pl-4!">
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    event
                  </code>
                  : A string specifying the name of the event (e.g., `"click"`,
                  `"mouseover"`, `"keydown"`). Do NOT use "on" prefix (like
                  "onclick").
                </li>
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    function
                  </code>
                  : The event handler function to be executed when the event
                  occurs.
                </li>
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    useCapture
                  </code>
                  : An optional boolean value. Default is `false` (meaning the
                  event propagates in the bubbling phase). If `true`, the event
                  propagates in the capturing phase. (More on this shortly!)
                </li>
              </ul>

              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-bold! tw:mb-2!">
                Let's see an example using an external JavaScript file
                (`script3.js`) for better organization:
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-bold! tw:mb-2!">
                First, the content of `script3.js`:
              </p>
              <JavascriptViewCode code={section3} indexNumber={1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:font-bold! tw:mb-2!">
                And the corresponding HTML file:
              </p>
              <CodeReviewPager code={section4} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                <strong>Considerations:</strong>
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Pros:
                  </strong>
                  <span className="tw:font-bold!">
                    Industry standard and best practice!
                  </span>{" "}
                  Allows multiple event handlers per element, provides control
                  over event phases (bubbling/capturing), and can easily remove
                  event listeners using `removeEventListener()`. Cleaner
                  separation of concerns, especially when using external
                  scripts.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Cons:
                  </strong>{" "}
                  Slightly more verbose than inline or traditional handlers, but
                  the benefits far outweigh this.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* The Event Object */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                The Event Object: Details About What Happened ℹ️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When an event occurs, the browser automatically creates an{" "}
                <strong>Event Object</strong> and passes it as the first
                argument to your event handler function. This object contains a
                wealth of information about the event that just happened.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Commonly used properties and methods of the Event Object
                include:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    event.type
                  </code>
                  : The type of event that occurred (e.g., `"click"`,
                  `"mousemove"`).
                </li>
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    event.target
                  </code>
                  : The DOM element that triggered the event.
                </li>
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    event.currentTarget
                  </code>
                  : The DOM element to which the event listener was attached.
                  (This can be different from `event.target` in event
                  bubbling/capturing).
                </li>
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    event.preventDefault()
                  </code>
                  : A method that stops the browser's default action for a given
                  event. For example, stopping a link from navigating or a form
                  from submitting.
                </li>
                <li>
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    event.stopPropagation()
                  </code>
                  : A method that prevents the event from "bubbling up" (or
                  "capturing down") to parent (or child) elements.
                </li>
                <li>
                  For mouse events:{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    event.clientX
                  </code>
                  ,{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    event.clientY
                  </code>{" "}
                  (mouse coordinates relative to the viewport).
                </li>
                <li>
                  For keyboard events:{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    event.key
                  </code>{" "}
                  (the key pressed),{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                    event.keyCode
                  </code>{" "}
                  (numeric code of the key).
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-bold! tw:mb-2!">
                Example of using the Event Object and `preventDefault()`:
              </p>
              <JavascriptViewCode code={section5} indexNumber={2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:font-bold! tw:mb-2!">
                HTML for the above example:
              </p>
              <CodeReviewPager code={section6} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Try clicking the button and the link in the example above. Open
                your browser's console to see the details of the click event.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Event Flow: Bubbling and Capturing */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Event Flow: Bubbling and Capturing 🌊
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When an event occurs on an element (e.g., a click on a button
                inside a `div`), it doesn't just happen on that one element. The
                event travels through the DOM tree in a specific order,
                involving two phases:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Capturing Phase (Trickling Down):
                  </strong>
                  The event starts from the `window` object, then trickles down
                  through the ancestor elements to the target element.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Target Phase:
                  </strong>
                  The event reaches the actual element that triggered it.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Bubbling Phase (Bubbling Up):
                  </strong>
                  The event then bubbles up from the target element back up
                  through its ancestors to the `window` object. This is the
                  default phase for most event listeners.
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Event Bubbling (Default Behavior)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                By default, `addEventListener()` uses the bubbling phase. This
                means if you click on a child element, the event will first fire
                on the child, then bubble up and fire on its parent, then its
                grandparent, and so on, unless stopped.
              </p>
              <CodeReviewPager code={section7} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Try clicking on the "Child" div in the example above and observe
                the console output. You'll see "Child clicked (Bubbling)", then
                "Parent clicked (Bubbling)", then "Grandparent clicked
                (Bubbling)".
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Event Capturing
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can explicitly tell `addEventListener()` to listen for the
                event during the capturing phase by setting the third argument
                to `true`. In this case, the event handler will fire as the
                event trickles down from the `window` to the target element.
              </p>
              <CodeReviewPager code={section8} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Now, click on the "Child" div again. With capturing enabled, the
                console output will be "Grandparent clicked (Capturing)", then
                "Parent clicked (Capturing)", then "Child clicked (Capturing)".
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Stopping Event Propagation (`event.stopPropagation()`)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Sometimes, you might want an event to only fire on the element
                it was directly triggered on, and not affect its ancestors (or
                descendants, in capturing). The `event.stopPropagation()` method
                prevents the event from continuing its journey through the DOM
                tree.
              </p>
              <CodeReviewPager code={section9} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In this example, click the "Click Me (Stop Propagation)" button.
                You'll see "Button was clicked!" and "Event propagation
                stopped!", but "Outer Div was clicked!" will not appear in the
                console because `stopPropagation()` stopped the event from
                bubbling up to the `outerDiv`.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Event Delegation */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Event Delegation: Efficient Event Handling 🎯
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Imagine you have a list of 100 items, and you want to react when
                any of them are clicked. Attaching 100 individual event
                listeners to each list item would be inefficient and could
                impact performance. This is where{" "}
                <strong>Event Delegation</strong> comes in.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Instead of attaching listeners to individual child elements, you
                attach a single event listener to a common parent element. When
                an event occurs on a child, it bubbles up to the parent, and you
                can then determine which child element actually triggered the
                event using `event.target`.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                <strong>Benefits of Event Delegation:</strong>
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Improved Performance:
                  </strong>{" "}
                  Fewer event listeners mean less memory consumption and faster
                  rendering.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Dynamic Elements:
                  </strong>{" "}
                  It automatically handles events for elements that are added to
                  the DOM after the initial page load (e.g., items added to a
                  list dynamically), without needing to attach new listeners to
                  them.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Simpler Code:
                  </strong>{" "}
                  Centralizes event handling logic.
                </li>
              </ul>
              <CodeReviewPager code={section10} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In this example, click on any list item. The single event
                listener on the `ul` element (the parent) catches the clicks for
                all `li` elements, even those added dynamically by the "Add New
                Item" button. This demonstrates the power and efficiency of
                event delegation.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Common Events Cheat Sheet */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Common JavaScript Events Cheat Sheet 📝
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Here's a quick reference for some of the most frequently used
                events:
              </p>
              <div className="tw:overflow-x-auto!">
                <table className="tw:min-w-full! tw:table-auto! tw:border-collapse! tw:border! tw:border-gray-300! tw:mb-6!">
                  <thead>
                    <tr className="tw:bg-gray-100!">
                      <th className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2! tw:text-left! tw:font-semibold! tw:text-gray-700!">
                        Event Type
                      </th>
                      <th className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2! tw:text-left! tw:font-semibold! tw:text-gray-700!">
                        Description
                      </th>
                      <th className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2! tw:text-left! tw:font-semibold! tw:text-gray-700!">
                        Element Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        <code className="tw:font-mono! tw:text-sm!">click</code>
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        User clicks an element.
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        All HTML elements
                      </td>
                    </tr>
                    <tr className="tw:bg-gray-50!">
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        <code className="tw:font-mono! tw:text-sm!">
                          dblclick
                        </code>
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        User double-clicks an element.
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        All HTML elements
                      </td>
                    </tr>
                    <tr>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        <code className="tw:font-mono! tw:text-sm!">
                          mouseover
                        </code>
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        Mouse pointer moves over an element.
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        All HTML elements
                      </td>
                    </tr>
                    <tr className="tw:bg-gray-50!">
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        <code className="tw:font-mono! tw:text-sm!">
                          mouseout
                        </code>
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        Mouse pointer moves out of an element.
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        All HTML elements
                      </td>
                    </tr>
                    <tr>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        <code className="tw:font-mono! tw:text-sm!">
                          mousemove
                        </code>
                      </td>
                      <td className=" tw:border-300! tw:px-4! tw:py-2!">
                        Mouse pointer moves while over an element.
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        All HTML elements
                      </td>
                    </tr>
                    <tr className="tw:bg-gray-50!">
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        <code className="tw:font-mono! tw:text-sm!">
                          keydown
                        </code>
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        User presses a key.
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        `document`, input fields
                      </td>
                    </tr>
                    <tr>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        <code className="tw:font-mono! tw:text-sm!">keyup</code>
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        User releases a key.
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        `document`, input fields
                      </td>
                    </tr>
                    <tr className="tw:bg-gray-50!">
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        <code className="tw:font-mono! tw:text-sm!">
                          change
                        </code>
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        Value of an input element changes (e.g., text, checkbox,
                        select).
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        `input`, `select`, `textarea`
                      </td>
                    </tr>
                    <tr>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        <code className="tw:font-mono! tw:text-sm!">
                          submit
                        </code>
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        User attempts to submit a form.
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        `form`
                      </td>
                    </tr>
                    <tr className="tw:bg-gray-50!">
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        <code className="tw:font-mono! tw:text-sm!">load</code>
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        An entire page, image, or other resource has finished
                        loading.
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        `window`, `img`, etc.
                      </td>
                    </tr>
                    <tr>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        <code className="tw:font-mono! tw:text-sm!">
                          DOMContentLoaded
                        </code>
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        The HTML document has been completely loaded and parsed
                        (without waiting for stylesheets, images, and subframes
                        to finish loading).
                      </td>
                      <td className="tw:border! tw:border-gray-300! tw:px-4! tw:py-2!">
                        `document`
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                This is just a small selection! There are many more events
                available for various interactions.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Key Takeaways: Mastering Events! ✨
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  Events are how JavaScript interacts with user actions and
                  browser occurrences.
                </li>
                <li>
                  Always prefer{" "}
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `addEventListener()`
                  </strong>{" "}
                  for attaching event handlers due to its flexibility and power.
                </li>
                <li>
                  Understand the{" "}
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Event Object
                  </strong>{" "}
                  to get detailed information about the event and control its
                  behavior (`preventDefault()`, `stopPropagation()`).
                </li>
                <li>
                  Grasp the concepts of{" "}
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Bubbling
                  </strong>{" "}
                  (default) and{" "}
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Capturing
                  </strong>{" "}
                  to control when your event handlers fire.
                </li>
                <li>
                  Utilize{" "}
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Event Delegation
                  </strong>{" "}
                  for efficient handling of events on dynamic or numerous
                  elements.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:font-semibold!">
                By understanding and effectively using JavaScript events, you
                unlock the ability to create highly interactive, engaging, and
                professional web experiences. Keep experimenting with different
                events and see what you can build!
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
