import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";

export const metadata = {
  title:
    "JavaScript DOM Manipulation: HTML Interactions - OpenChains Technologies",
  description:
    "Master JavaScript DOM manipulation: Learn to select, modify, create, and delete HTML elements dynamically. Understand events, event delegation, and build interactive web pages from beginner to advanced.",
  openGraph: {
    title:
      "JavaScript DOM Manipulation: HTML Interactions - OpenChains Technologies",
    description:
      "Master JavaScript DOM manipulation: Learn to select, modify, create, and delete HTML elements dynamically. Understand events, event delegation, and build interactive web pages from beginner to advanced.",
    url: `${baseUrl}/lessons/javascript/dom-manipulation`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JavaScript DOM Manipulation: HTML Interactions - OpenChains Technologies",
    description:
      "Master JavaScript DOM manipulation: Learn to select, modify, create, and delete HTML elements dynamically. Understand events, event delegation, and build interactive web pages from beginner to advanced.",
  },
  keywords: [
    "JavaScript DOM",
    "DOM manipulation",
    "HTML interaction JavaScript",
    "Document Object Model",
    "getElementById",
    "querySelector",
    "querySelectorAll",
    "createElement",
    "appendChild",
    "removeChild",
    "innerHTML",
    "textContent",
    "setAttribute",
    "classList",
    "addEventListener",
    "event delegation",
    "JavaScript events",
    "DOM traversal",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/dom-manipulation`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Accessing Elements
const injectedHtml = `<h1 id="main-title">Welcome to DOM Manipulation</h1>
    <p class="intro-paragraph">This is an introduction to DOM.</p>
    <p class="intro-paragraph highlight">Another paragraph.</p>
    <ul>
        <li>Item 1</li>
        <li class="special">Item 2</li>
        <li>Item 3</li>
    </ul>
    <input type="text" name="username" value="JohnDoe">`;
const section1_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Access Examples</title>
</head>
<body>
    ${injectedHtml}
    <script src="script2.js"></script>
</body>
</html>
`;

const section1_js = `// Accessing Elements in script2.js (assuming the HTML above)

// 1. getElementById(): Selects a single element by its unique ID.
const mainTitle = document.getElementById("main-title");
console.log("Main Title Element:", mainTitle);
console.log("Main Title Text:", mainTitle.textContent);

// 2. getElementsByClassName(): Selects multiple elements by their class name. Returns an HTMLCollection (live collection).
const introParagraphs = document.getElementsByClassName("intro-paragraph");
console.log("Intro Paragraphs (HTMLCollection):", introParagraphs);
console.log("First Intro Paragraph:", introParagraphs[0]);

// Loop through HTMLCollection (convert to array for more array methods if needed)
// Array.from(introParagraphs).forEach(p => console.log(p.textContent));

// 3. getElementsByTagName(): Selects multiple elements by their tag name. Returns an HTMLCollection.
const listItems = document.getElementsByTagName("li");
console.log("List Items (HTMLCollection):", listItems);
console.log("Second List Item:", listItems[1].textContent);

// 4. querySelector(): Selects the FIRST element that matches a specified CSS selector.
const firstParagraph = document.querySelector("p"); // Selects the first <p>
console.log("First Paragraph (querySelector):", firstParagraph);

const highlightParagraph = document.querySelector(".intro-paragraph.highlight");
console.log("Highlighted Paragraph:", highlightParagraph);

const specialListItem = document.querySelector("ul li.special");
console.log("Special List Item:", specialListItem.textContent);

// 5. querySelectorAll(): Selects ALL elements that match a specified CSS selector. Returns a NodeList (static collection).
const allParagraphs = document.querySelectorAll("p");
console.log("All Paragraphs (NodeList):", allParagraphs);
allParagraphs.forEach((p, index) => {
  console.log(\`Paragraph \${index}: \${p.textContent}\`);
});

const allListItems = document.querySelectorAll("li");
console.log("All List Items (NodeList):", allListItems);

// Input element
const usernameInput = document.querySelector("input[name='username']");
console.log("Username input value:", usernameInput.value);
`;

// Code example 2: Modifying Elements
const section2_js = `// Assuming we have the 'main-title' element from previous selection
const mainTitle = document.getElementById("main-title");
const firstParagraph = document.querySelector("p");
const highlightParagraph = document.querySelector(".intro-paragraph.highlight");
const usernameInput = document.querySelector("input[name='username']");

// 1. Changing Content
// textContent: Gets or sets the text content of the node and its descendants. (Ignores HTML tags)
mainTitle.textContent = "DOM Manipulation Made Easy!";
console.log("New Main Title Text (textContent):", mainTitle.textContent);

// innerHTML: Gets or sets the HTML content of the element. (Parses HTML tags)
firstParagraph.innerHTML = "This paragraph now has <strong>bold text</strong> and an <em>emphasized part</em>.";
console.log("First Paragraph HTML (innerHTML):", firstParagraph.innerHTML);

// DANGER! Be careful with innerHTML and user input to avoid XSS attacks.
// If you're inserting user-provided text, use textContent to prevent script injection.
let userInput = "<script>alert('You have been hacked!')</script>";
// firstParagraph.innerHTML = userInput; // DANGEROUS!
// firstParagraph.textContent = userInput; // SAFE: displays <script>alert('You have been hacked!')</script> as text

// 2. Changing Attributes
// setAttribute(name, value): Sets the value of an attribute on the specified element.
mainTitle.setAttribute("title", "This is a tooltip for the title");
console.log("Main Title 'title' attribute:", mainTitle.getAttribute("title"));

usernameInput.setAttribute("type", "password"); // Change input type to password
console.log("Username input type changed to password.");

// getAttribute(name): Returns the value of a specified attribute.
const currentType = usernameInput.getAttribute("type");
console.log("Current input type:", currentType); // Output: password

// removeAttribute(name): Removes an attribute from an element.
highlightParagraph.removeAttribute("class"); // Removes 'intro-paragraph highlight' classes
console.log("Highlight paragraph after removing class attribute:", highlightParagraph.className); // Output: ""

// Accessing common attributes directly (convenience properties)
// mainTitle.id = "new-main-heading";
// console.log("Main Title ID after direct access:", mainTitle.id);

// usernameInput.value = "JaneDoe"; // Change input field's value
// console.log("New username input value:", usernameInput.value);

// 3. Changing Styles (Inline Styles)
// element.style.property = "value"; (CSS properties are camelCased)
mainTitle.style.color = "blue";
mainTitle.style.backgroundColor = "#e0e0e0";
mainTitle.style.padding = "10px";

// console.log("Main Title Color:", mainTitle.style.color);

// 4. Managing Classes (Recommended for Styling)
const listElement = document.querySelector("ul");
const specialListItem = document.querySelector("li.special");

// add(className): Adds one or more classes
listElement.classList.add("my-list", "fancy-border");
specialListItem.classList.add("important");

// remove(className): Removes one or more classes
firstParagraph.classList.remove("intro-paragraph");

// toggle(className): Adds a class if it doesn't exist, removes it if it does.
highlightParagraph.classList.toggle("hidden"); // Adds 'hidden'
highlightParagraph.classList.toggle("hidden"); // Removes 'hidden'

// contains(className): Checks if a class exists, returns true/false.
const hasImportant = specialListItem.classList.contains("important");
console.log("Special list item has 'important' class:", hasImportant); // Output: true

console.log("List element classes:", listElement.className);
console.log("Special list item classes:", specialListItem.className);
console.log("First paragraph classes:", firstParagraph.className); // Should be empty now
`;

// Code example 3: Creating and Appending Elements
const section3_js = `// Get a reference to an existing element where we want to add new elements
const body = document.body; // Or document.getElementById('some-container')
const mainTitle = document.getElementById("main-title");
const list = document.querySelector("ul");

// 1. createElement(tagName): Creates a new HTML element node.
const newParagraph = document.createElement("p");
const newDiv = document.createElement("div");
const newListItem = document.createElement("li");

// Add content and attributes to the new elements
newParagraph.textContent = "This paragraph was dynamically created!";
newParagraph.style.color = "purple";
newParagraph.classList.add("dynamic-content");

newDiv.innerHTML = "<h2>I am a new div!</h2><p>With some content inside.</p>";
newDiv.id = "dynamic-div";
newDiv.style.border = "1px solid green";
newDiv.style.padding = "15px";

newListItem.textContent = "Dynamically Added Item";

// 2. appendChild(childElement): Adds a node as the last child of a specified parent node.
body.appendChild(newParagraph); // Adds the new paragraph to the end of the body
list.appendChild(newListItem);  // Adds the new list item to the end of the ul

// 3. insertBefore(newElement, referenceElement): Inserts a node before a reference node as a child of a specified parent node.
const secondParagraph = document.querySelector("p:nth-child(2)"); // Assuming first existing p is main intro
// Insert the new div before the second existing paragraph
body.insertBefore(newDiv, secondParagraph);

// 4. append() (ES6+): Appends nodes or DOMStrings to the end of the parent. More flexible than appendChild.
// It can append multiple arguments, and also accepts strings which append as text nodes.
const newHeader = document.createElement("h3");
newHeader.textContent = "New Section Header";
body.append(newHeader, "This is some new text content directly appended.", document.createElement("hr"));

// 5. prepend() (ES6+): Prepends nodes or DOMStrings to the beginning of the parent.
const firstListItem = document.querySelector("ul li");
const veryFirstListItem = document.createElement("li");
veryFirstListItem.textContent = "VERY First Item (Prepended)";
list.prepend(veryFirstListItem);

// 6. insertAdjacentHTML(position, text): Parses the specified text as HTML and inserts the resulting nodes into the DOM tree at a specified position relative to the element.
// 'beforebegin': Before the element itself.
// 'afterbegin': Just inside the element, before its first child.
// 'beforeend': Just inside the element, after its last child.
// 'afterend': After the element itself.

const existingParagraph = document.querySelector(".intro-paragraph"); // The one that's left
existingParagraph.insertAdjacentHTML("afterend", '<p class="inserted">This was inserted with insertAdjacentHTML!</p>');
mainTitle.insertAdjacentHTML("afterbegin", '<span style="color: grey;">(New Subtitle) </span>');

console.log("Elements added and modified in the DOM.");
`;

// Code example 4: Removing and Replacing Elements
const section4_js = `// Assume elements are present from previous HTML/JS
const list = document.querySelector("ul");
const firstListItem = document.querySelector("li"); // The "VERY First Item (Prepended)" from previous example
const secondListItem = document.querySelector("li:nth-child(2)"); // "Item 1"

// 1. removeChild(childElement): Removes a specified child node from the DOM and returns the removed node.
// You must call it on the parent element.
if (list && firstListItem) {
  list.removeChild(firstListItem);
  console.log("First list item removed using removeChild.");
}

// 2. remove() (ES6+): Removes the element from the DOM. A simpler, more direct way.
// You call it directly on the element to be removed.
if (secondListItem) {
  secondListItem.remove();
  console.log("Second list item removed using remove().");
}

// 3. replaceChild(newChild, oldChild): Replaces a child node with a new node.
// You must call it on the parent element.
const originalParagraph = document.querySelector("p"); // The first one: "This paragraph now has <strong>bold text</strong>..."
const replacementParagraph = document.createElement("p");
replacementParagraph.textContent = "This paragraph has replaced the old one!";
replacementParagraph.style.backgroundColor = "lightgreen";

const bodyElement = document.body;

if (originalParagraph && replacementParagraph) {
  bodyElement.replaceChild(replacementParagraph, originalParagraph);
  console.log("Original paragraph replaced with a new one.");
}

// Practical scenario: Clearing all children
const container = document.getElementById("some-container"); // Imagine a div with id="some-container"
// Example: while (container.firstChild) {
//   container.removeChild(container.firstChild);
// }
// console.log("Container cleared of all children.");
`;

// Code example 5: DOM Traversal (Navigating the Tree)
const section5_js = `// Assume we have the HTML structure from previous examples

// Get a reference element to start traversing from
const specialListItem = document.querySelector("li.special"); // This is "Item 2"
console.log("Starting point (specialListItem):", specialListItem.textContent);

// 1. parentElement / parentNode: Returns the parent element/node of the current node.
const parentOfSpecialItem = specialListItem.parentElement;
console.log("Parent of specialListItem (ul):", parentOfSpecialItem.tagName); // Output: UL

// 2. children: Returns an HTMLCollection of all child *elements* (excluding text and comment nodes).
const ulChildren = parentOfSpecialItem.children;
console.log("Children of ul (HTMLCollection):", ulChildren);
// Can loop through them: for (const child of ulChildren) { console.log(child.textContent); }

// 3. firstElementChild: Returns the first child *element*.
const firstChildOfUl = parentOfSpecialItem.firstElementChild;
console.log("First child of ul:", firstChildOfUl.textContent); // Output: Item 1

// 4. lastElementChild: Returns the last child *element*.
const lastChildOfUl = parentOfSpecialItem.lastElementChild;
console.log("Last child of ul:", lastChildOfUl.textContent); // Output: Dynamically Added Item (if using example 3)

// 5. nextElementSibling: Returns the next sibling *element*.
const nextSiblingOfSpecialItem = specialListItem.nextElementSibling;
console.log("Next sibling of specialListItem:", nextSiblingOfSpecialItem.textContent); // Output: Item 3

// 6. previousElementSibling: Returns the previous sibling *element*.
const prevSiblingOfSpecialItem = specialListItem.previousElementSibling;
console.log("Previous sibling of specialListItem:", prevSiblingOfSpecialItem.textContent); // Output: Item 1

// 7. closest(selector) (ES6+): Returns the closest ancestor of the current element (or the element itself)
// which matches the selectors string.
const nestedSpan = document.createElement("span");
nestedSpan.textContent = "I'm nested";
specialListItem.appendChild(nestedSpan); // Add a span inside 'Item 2'

const closestUl = nestedSpan.closest("ul");
console.log("Closest UL from nested Span:", closestUl.tagName); // Output: UL

const closestBody = nestedSpan.closest("body");
console.log("Closest Body from nested Span:", closestBody.tagName); // Output: BODY

// nodeName / tagName: Returns the name of the node (for elements, same as tag name)
console.log("Special list item's tag name:", specialListItem.tagName); // Output: LI
// nodeType: Returns the node type (1 for element, 3 for text, 8 for comment, 9 for document)
console.log("Special list item's node type:", specialListItem.nodeType); // Output: 1
`;

// Code example 6: Event Handling (Basics)
const section6_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Handling Examples</title>
    <style>
        #myButton { padding: 10px 20px; cursor: pointer; background-color: lightblue; border: none; border-radius: 5px; }
        #myDiv { border: 2px solid grey; padding: 20px; margin-top: 20px; }
        .box { width: 100px; height: 100px; background-color: yellow; margin: 10px; border: 1px solid orange; cursor: pointer; display: inline-block; }
        .hover-box { background-color: lightgreen; }
    </style>
</head>
<body>
    <button id="myButton">Click Me!</button>
    <input type="text" id="myInput" placeholder="Type something...">
    <div id="myDiv">Hover over me!</div>

    <div id="parent-container" style="border: 2px dashed blue; padding: 10px; margin-top: 20px;">
        <div class="box" data-color="red">Red Box</div>
        <div class="box" data-color="blue">Blue Box</div>
        <div class="box" data-color="green">Green Box</div>
    </div>

    <script src="script2.js"></script>
</body>
</html>
`;

const section6_js = `// Get elements
const myButton = document.getElementById("myButton");
const myInput = document.getElementById("myInput");
const myDiv = document.getElementById("myDiv");

// 1. addEventListener(eventType, callbackFunction) - The recommended way
// Click Event
myButton.addEventListener("click", function() {
  alert("Button was clicked!");
  console.log("Button clicked!");
});

// Input Event (fires when the value of an <input>, <select>, or <textarea> element changes)
myInput.addEventListener("input", function(event) {
  // The 'event' object contains details about the event
  console.log("Input value changed:", event.target.value);
  // You can also access the element directly: this.value
});

// Mouseover and Mouseout Events
myDiv.addEventListener("mouseover", function() {
  this.style.backgroundColor = "lightblue";
  this.textContent = "You are hovering!";
});

myDiv.addEventListener("mouseout", function() {
  this.style.backgroundColor = "white";
  this.textContent = "Hover over me!";
});

// 2. removeEventListener(eventType, callbackFunction)
// To remove an event listener, you MUST pass the exact same function reference.
function sayHello() {
  console.log("Hello from a removable listener!");
}

myButton.addEventListener("click", sayHello); // Add the function

// After 3 seconds, remove the 'sayHello' listener
setTimeout(() => {
  myButton.removeEventListener("click", sayHello);
  console.log("The 'sayHello' listener has been removed from the button.");
}, 3000);


// 3. Event Object: Provides information about the event
// When an event listener's callback function is called, it receives an 'event' object as its first argument.
document.addEventListener("mousemove", function(event) {
  // console.log("Mouse X:", event.clientX, "Mouse Y:", event.clientY);
  // console.log("Target element:", event.target);
});

// Prevent Default Behavior
const myLink = document.createElement("a");
myLink.href = "https://www.google.com";
myLink.textContent = "Go to Google (but I'll prevent it)";
document.body.appendChild(myLink);

myLink.addEventListener("click", function(event) {
  event.preventDefault(); // Stops the default action (navigating to Google)
  console.log("Navigation to Google prevented!");
});

// 4. Event Bubbling vs. Capturing (Brief mention)
const grandParent = document.createElement('div');
grandParent.textContent = 'Grandparent';
grandParent.style.border = '2px solid black';
grandParent.style.padding = '10px';
const parent = document.createElement('div');
parent.textContent = 'Parent';
parent.style.border = '2px solid blue';
parent.style.padding = '10px';
const child = document.createElement('div');
child.textContent = 'Child';
child.style.border = '2px solid red';
child.style.padding = '10px';

parent.appendChild(child);
grandParent.appendChild(parent);
document.body.appendChild(grandParent);

grandParent.addEventListener('click', () => console.log('Grandparent clicked!'), false); // Bubbling (default)
parent.addEventListener('click', () => console.log('Parent clicked!'), false);       // Bubbling (default)
child.addEventListener('click', (e) => {
  console.log('Child clicked!');
  // e.stopPropagation(); // Prevents bubbling up to parent/grandparent
}, false); // Bubbling (default)

// When you click 'Child', you'll see: Child clicked! -> Parent clicked! -> Grandparent clicked! (bubbling)
// If you change 'false' to 'true' for the third argument (useCapture):
// grandParent.addEventListener('click', () => console.log('Grandparent captured!'), true);
// parent.addEventListener('click', () => console.log('Parent captured!'), true);
// child.addEventListener('click', () => console.log('Child captured!'), true);
// Clicking 'Child' would then show: Grandparent captured! -> Parent captured! -> Child captured! (capturing)
`;

// Code example 7: Event Delegation (Advanced Event Handling)
const section7_js = `// Event Delegation
// Instead of attaching a listener to each individual box,
// attach one listener to their common parent.

const parentContainer = document.getElementById("parent-container");

parentContainer.addEventListener("click", function(event) {
  // Check if the clicked element (event.target) matches our desired elements (.box)
  if (event.target.classList.contains("box")) {
    const clickedBox = event.target;
    const boxColor = clickedBox.dataset.color; // Access custom data attribute
    console.log(\`You clicked the \${boxColor} box!\`);

    // You can also perform actions based on the click
    clickedBox.style.backgroundColor = "lightgrey";
    clickedBox.textContent = "Clicked!";

    // Optionally, reset after a short delay
    setTimeout(() => {
      clickedBox.style.backgroundColor = boxColor; // Reset to original color (if it matches dataset)
      clickedBox.textContent = \`\${boxColor.charAt(0).toUpperCase() + boxColor.slice(1)} Box\`;
    }, 500);
  }
});

// Benefits of Event Delegation:
// 1. Performance: Fewer event listeners mean less memory consumption.
// 2. Dynamic Content: Automatically handles elements added to the DOM after the listener is set up.
//    (Try adding a new '.box' element dynamically and click it - it will work!)
`;

// Code example 8: Performance Considerations for DOM Manipulation
const section8_js = `// Imagine a large array of data
const data = Array.from({ length: 1000 }, (_, i) => \`Item \${i + 1}\`);
const container = document.createElement("div");
container.id = "performance-container";
document.body.appendChild(container);

// BAD Practice: Modifying DOM inside a loop (causes reflows/repaints for each iteration)
console.time("Bad DOM Loop");
// for (let i = 0; i < data.length; i++) {
//   const p = document.createElement("p");
//   p.textContent = data[i];
//   container.appendChild(p);
// }
console.timeEnd("Bad DOM Loop");

// GOOD Practice 1: Create a Document Fragment (build off-DOM, then append once)
console.time("Good DOM Loop - Document Fragment");
const fragment = document.createDocumentFragment();
for (let i = 0; i < data.length; i++) {
  const p = document.createElement("p");
  p.textContent = data[i];
  fragment.appendChild(p);
}
container.appendChild(fragment); // Append once
console.timeEnd("Good DOM Loop - Document Fragment");

// GOOD Practice 2: Build HTML string and use innerHTML once
// (Caution: Be mindful of XSS when using innerHTML with un-sanitized user input)
console.time("Good DOM Loop - innerHTML");
let htmlString = '';
for (let i = 0; i < data.length; i++) {
  htmlString += \`<p>\${data[i]}</p>\`;
}
// container.innerHTML += htmlString; // Appending, not replacing
// Or, if clearing existing content:
const newContainer = document.createElement("div");
newContainer.id = "performance-container-2";
document.body.appendChild(newContainer);
newContainer.innerHTML = htmlString; // Assign once
console.timeEnd("Good DOM Loop - innerHTML");

// GOOD Practice 3: Debouncing / Throttling for frequent events (e.g., resize, scroll, keyup)
// This limits how often a function runs.

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer); // Clear previous timer
  resizeTimer = setTimeout(() => {
    console.log("Window resized (debounced)!");
    // Perform expensive DOM operations here
  }, 250); // Wait 250ms after last resize event
});

let isThrottled = false;
document.addEventListener('scroll', () => {
  if (!isThrottled) {
    console.log("Scrolled (throttled)!");
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, 100); // Allow function to run at most every 100ms
  }
});

console.log("Check console for performance timings after running these loops.");
`;

export default function JavascriptDomManipulationPage() {
  const page = 7; // This is the eighth page in the JavaScript tutorial series

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/AADDEE/336699?text=JavaScript+DOM+Manipulation:+Bring+Webpages+to+Life"
              alt="JavaScript DOM Manipulation Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              JavaScript DOM Manipulation: Make Your Webpages Dance! 💃🕺
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              You've built a strong foundation in core JavaScript: variables,
              data types, operators, control flow, functions, arrays, and
              objects. Now, it's time to unleash JavaScript's true power on the
              web! This chapter is all about **DOM Manipulation** – how
              JavaScript interacts with HTML and CSS to create dynamic,
              interactive, and responsive web pages. This is where your websites
              truly come alive!
            </p>
            ---
            {/* What is the DOM? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                What is the DOM? Your Webpage's Inner Structure 🏗️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The **DOM (Document Object Model)** is a programming interface
                for web documents. It represents the page so that programs can
                change the document structure, style, and content. The DOM
                represents the document as a tree of nodes, where each node
                represents a part of the document (an element, an attribute,
                text, etc.).
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  **Tree Structure:** Your HTML document is converted into a
                  hierarchical tree structure by the browser. Each HTML tag
                  becomes a "node" in this tree.
                </li>
                <li>
                  **Objects:** Each node in the DOM tree is an object, with
                  properties and methods that JavaScript can access and
                  manipulate.
                </li>
                <li>
                  **Browser API:** The DOM is a browser API (Application
                  Programming Interface) that allows JavaScript to interact with
                  the HTML document.
                </li>
                <li>
                  **`document` Object:** The global `document` object is the
                  entry point to the DOM. It represents the entire HTML page.
                </li>
              </ul>
              <div
                className="tw:bg-blue-50! tw:border-l-4! tw:border-blue-500! tw:text-blue-700! tw:p-4! tw:rounded! tw:mb-6!"
                role="alert"
              >
                <p className="tw:font-bold!">
                  The Relationship between HTML, CSS, and JavaScript
                </p>
                <p>
                  <strong className="tw:font-semibold! tw:text-blue-700!">
                    HTML:
                  </strong>{" "}
                  Provides the **structure** and content of the webpage.
                  <br />
                  <strong className="tw:font-semibold! tw:text-blue-700!">
                    CSS:
                  </strong>{" "}
                  Defines the **presentation** (look and feel) of the webpage.
                  <br />
                  <strong className="tw:font-semibold! tw:text-blue-700!">
                    JavaScript:
                  </strong>{" "}
                  Adds **interactivity** and dynamic behavior by manipulating
                  the DOM.
                </p>
              </div>
            </section>
            ---
            {/* Accessing Elements Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-blue-400! tw:pb-2!">
                Accessing Elements: Finding Your Targets 🎯
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Before you can manipulate elements, you need to select them from
                the DOM. JavaScript provides several methods to do this.
              </p>
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                HTML Structure for Examples
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Let's use this simple HTML structure for the following examples.
                Remember to link your JavaScript file (e.g., `script2.js`) at
                the end of the {`<body>`} tag so the HTML content is loaded
                before JavaScript tries to access it.
              </p>
              <CodeReviewPager code={section1_html} />
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                JavaScript Code to Select Elements
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `document.getElementById('idName')`:
                  </strong>
                  Returns a single element object by its unique `id` attribute.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `document.getElementsByClassName('className')`:
                  </strong>{" "}
                  Returns an `HTMLCollection` of elements with the given `class`
                  name. (Live collection - reflects changes).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `document.getElementsByTagName('tagName')`:
                  </strong>{" "}
                  Returns an `HTMLCollection` of elements with the given tag
                  name (e.g., `'p'`, `'div'`, `'li'`). (Live collection).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `document.querySelector('CSS-selector')` (ES6+):
                  </strong>{" "}
                  Returns the *first* element that matches the specified CSS
                  selector string. This is powerful as it uses standard CSS
                  syntax.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `document.querySelectorAll('CSS-selector')` (ES6+):
                  </strong>{" "}
                  Returns a `NodeList` containing *all* elements that match the
                  specified CSS selector string. (Static collection - does not
                  reflect later DOM changes).
                </li>
              </ul>
              <div
                className="tw:bg-yellow-50! tw:border-l-4! tw:border-yellow-500! tw:text-yellow-700! tw:p-4! tw:rounded! tw:mb-6!"
                role="alert"
              >
                <p className="tw:font-bold!">NodeList vs. HTMLCollection</p>
                <p>
                  `NodeList` (from `querySelectorAll`) is static; it won't
                  update if elements are added/removed. You can use `forEach`
                  directly on it.
                  <br />
                  `HTMLCollection` (from `getElementsBy...`) is live; it updates
                  automatically. You usually need to convert it to an array
                  (`Array.from(collection)`) to use `forEach` or other array
                  methods. For most modern work,
                  `querySelector`/`querySelectorAll` are preferred.
                </p>
              </div>
              <JavascriptViewCode
                code={section1_js}
                indexNumber={1}
                htmlInjection={injectedHtml}
              />
            </section>
            ---
            {/* Modifying Elements Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-green-400! tw:pb-2!">
                Modifying Elements: Changing Content, Attributes, & Styles 🎨
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Once you've selected an element, you can change its content,
                attributes, and visual appearance.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Changing Content:
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>
                      `element.textContent`: Gets or sets the text content.
                      Ignores HTML tags. Safe for user-provided text.
                    </li>
                    <li>
                      `element.innerHTML`: Gets or sets the HTML content. Parses
                      HTML tags. Use with caution, especially with user input
                      (risk of XSS attacks).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Changing Attributes:
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>
                      `element.setAttribute('name', 'value')`: Sets the value of
                      an attribute.
                    </li>
                    <li>
                      `element.getAttribute('name')`: Retrieves the value of an
                      attribute.
                    </li>
                    <li>
                      `element.removeAttribute('name')`: Removes an attribute.
                    </li>
                    <li>
                      Direct access: For common attributes (like `id`,
                      `className`, `href`, `src`, `value`), you can often use
                      `element.attributeName` (e.g., `myElement.id = 'newId'`).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Changing Styles (Inline):
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>
                      `element.style.propertyName = 'value'`: Sets an inline CSS
                      property. CSS property names become camelCase in
                      JavaScript (e.g., `background-color` becomes
                      `backgroundColor`).
                    </li>
                    <li>
                      <div
                        className="tw:bg-blue-50! tw:border-l-4! tw:border-blue-500! tw:text-blue-700! tw:p-2! tw:rounded! tw:mt-2!"
                        role="alert"
                      >
                        <p className="tw:font-bold!">
                          Best Practice for Styling:
                        </p>
                        <p>
                          While `element.style` works, it adds inline styles
                          which override external CSS and can be hard to manage.
                          For most style changes, it's better to manipulate an
                          element's CSS classes using `classList`.
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Managing Classes (Recommended for Styling):
                  </strong>{" "}
                  The `classList` property provides convenient methods to add,
                  remove, and toggle CSS classes on an element.
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>`element.classList.add('className1', 'className2')`</li>
                    <li>
                      `element.classList.remove('className1', 'className2')`
                    </li>
                    <li>
                      `element.classList.toggle('className')` (adds if not
                      present, removes if present)
                    </li>
                    <li>
                      `element.classList.contains('className')` (checks if a
                      class exists)
                    </li>
                  </ul>
                </li>
              </ul>
              <JavascriptViewCode
                code={section2_js}
                indexNumber={2}
                htmlInjection={injectedHtml}
              />
            </section>
            ---
            {/* Creating and Appending Elements Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-blue-400! tw:pb-2!">
                Creating & Appending Elements: Building on the Fly ➕
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Beyond modifying existing content, you can dynamically create
                new HTML elements and insert them anywhere in your document.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `document.createElement('tagName')`:
                  </strong>{" "}
                  Creates a new HTML element node (e.g., `div`, `p`, `img`). The
                  element is created in memory but not yet in the DOM.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `parentElement.appendChild(childElement)`:
                  </strong>{" "}
                  Appends a node as the very last child of the `parentElement`.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `parentElement.insertBefore(newElement, referenceElement)`:
                  </strong>{" "}
                  Inserts `newElement` immediately before the `referenceElement`
                  within `parentElement`.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `parentElement.append(nodeOrDOMString1, ...)` (ES6+):
                  </strong>{" "}
                  A more flexible alternative to `appendChild`. It can append
                  multiple nodes and even strings (which are converted to text
                  nodes).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `parentElement.prepend(nodeOrDOMString1, ...)` (ES6+):
                  </strong>{" "}
                  Similar to `append`, but adds elements/strings to the
                  *beginning* of the `parentElement`.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `element.insertAdjacentHTML('position', 'htmlString')`:
                  </strong>{" "}
                  Inserts a string of HTML into the DOM at a specified position
                  relative to the `element`. Useful for quickly inserting
                  complex HTML structures.
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>`'beforebegin'`: Before the `element` itself.</li>
                    <li>
                      `'afterbegin'`: Just inside the `element`, before its
                      first child.
                    </li>
                    <li>
                      `'beforeend'`: Just inside the `element`, after its last
                      child.
                    </li>
                    <li>`'afterend'`: After the `element` itself.</li>
                  </ul>
                </li>
              </ul>
              <JavascriptViewCode
                code={section3_js}
                indexNumber={3}
                htmlInjection={injectedHtml}
              />
            </section>
            ---
            {/* Removing and Replacing Elements Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-orange-400! tw:pb-2!">
                Removing & Replacing Elements: Dynamic Updates ♻️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can also remove existing elements or swap them out for new
                ones.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `parentElement.removeChild(childElement)`:
                  </strong>{" "}
                  Removes a specified `childElement` from its `parentElement`.
                  Returns the removed node.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `element.remove()` (ES6+):
                  </strong>{" "}
                  A simpler and more direct way to remove an `element` from the
                  DOM. You call it directly on the element you want to remove.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `parentElement.replaceChild(newChild, oldChild)`:
                  </strong>{" "}
                  Replaces an `oldChild` node with a `newChild` node within the
                  `parentElement`.
                </li>
              </ul>
              <JavascriptViewCode
                code={section4_js}
                indexNumber={4}
                htmlInjection={injectedHtml}
              />
            </section>
            ---
            {/* DOM Traversal Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                DOM Traversal: Navigating the Tree 🌲
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Sometimes you don't have a direct reference to an element, but
                you can find it relative to another element using traversal
                properties.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `element.parentElement` / `element.parentNode`:
                  </strong>{" "}
                  Returns the direct parent element/node. `parentElement` is
                  preferred for elements.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `element.children`:
                  </strong>{" "}
                  Returns an `HTMLCollection` of all direct child *elements*
                  (excluding text nodes, comments).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `element.firstElementChild`:
                  </strong>{" "}
                  Returns the first direct child *element*.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `element.lastElementChild`:
                  </strong>{" "}
                  Returns the last direct child *element*.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `element.nextElementSibling`:
                  </strong>{" "}
                  Returns the next sibling *element* (at the same level in the
                  tree).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `element.previousElementSibling`:
                  </strong>{" "}
                  Returns the previous sibling *element*.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `element.closest('CSS-selector')` (ES6+):
                  </strong>{" "}
                  Returns the closest ancestor of the current element (or the
                  element itself) that matches the CSS selector. Very useful for
                  event delegation.
                </li>
              </ul>
              <JavascriptViewCode
                code={section5_js}
                indexNumber={5}
                htmlInjection={injectedHtml}
              />
            </section>
            ---
            {/* Event Handling Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-green-400! tw:pb-2!">
                Event Handling: Responding to User Actions ⚡
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The DOM isn't just about structure and style; it's also about
                interactivity. **Events** are signals fired by the browser when
                something happens (e.g., a user clicks a button, types in an
                input field, the page loads, an image fails to load, etc.).
                JavaScript allows you to "listen" for these events and execute
                code in response.
              </p>
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                HTML Structure for Events Examples
              </h3>
              <CodeReviewPager code={section6_html} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                JavaScript Event Handling
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `element.addEventListener('eventType', callbackFunction,
                    [useCapture])`:
                  </strong>{" "}
                  The most common and recommended way to handle events.
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>
                      `eventType`: A string representing the type of event
                      (e.g., `'click'`, `'mouseover'`, `'keydown'`, `'submit'`).
                    </li>
                    <li>
                      `callbackFunction`: The function to be executed when the
                      event occurs. It receives an `Event` object as its first
                      argument.
                    </li>
                    <li>
                      `useCapture` (optional, boolean): If `true`, the event is
                      handled in the *capturing* phase (from window down to
                      target). If `false` (default), it's handled in the
                      *bubbling* phase (from target up to window).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `element.removeEventListener('eventType',
                    callbackFunction)`:
                  </strong>{" "}
                  Removes an event listener. The `callbackFunction` reference
                  *must* be the exact same function that was added.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    The `Event` Object:
                  </strong>{" "}
                  When an event fires, a special `Event` object is created and
                  passed to the callback function. It contains useful
                  information about the event:
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>
                      `event.target`: The element that *triggered* the event.
                    </li>
                    <li>
                      `event.currentTarget`: The element the event listener is
                      attached to.
                    </li>
                    <li>`event.type`: The type of event (e.g., "click").</li>
                    <li>
                      `event.preventDefault()`: Stops the default action of an
                      event (e.g., a link navigating, a form submitting).
                    </li>
                    <li>
                      `event.stopPropagation()`: Prevents the event from
                      bubbling up or capturing down the DOM tree.
                    </li>
                  </ul>
                </li>
              </ul>
              <JavascriptViewCode
                code={section6_js}
                indexNumber={7}
                htmlInjection={injectedHtml}
              />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Event Delegation (Advanced) 🚀
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Instead of attaching an event listener to every single element
                in a list (which can be inefficient for many items or
                dynamically added items), you can attach a single listener to a
                common parent element. This technique is called **event
                delegation**.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  The parent listener "catches" events that bubble up from its
                  children.
                </li>
                <li>
                  Inside the parent's event handler, you use `event.target` to
                  determine which specific child element was clicked/interacted
                  with.
                </li>
                <li>
                  **Benefits:** Improved performance (fewer listeners), and
                  automatically works for dynamically added elements.
                </li>
              </ul>
              <JavascriptViewCode
                code={section7_js}
                indexNumber={8}
                htmlInjection={injectedHtml}
              />
            </section>
            ---
            {/* Performance Considerations Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-red-400! tw:pb-2!">
                Performance Considerations for DOM Manipulation ⚡ (Pro Tip)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Manipulating the DOM can be an expensive operation for the
                browser. Each change can trigger "reflows" (recalculating
                element positions and sizes) and "repaints" (redrawing
                elements), which can slow down your page if done inefficiently.
                Here are some tips:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Minimize Direct DOM Access:
                  </strong>{" "}
                  Avoid repeatedly querying the DOM for the same element. Store
                  references in variables.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Batch Updates:
                  </strong>{" "}
                  Instead of making many small changes directly to the live DOM,
                  batch them.
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:mt-1! tw:space-y-1!">
                    <li>
                      **Use `DocumentFragment`:** Create a `DocumentFragment`,
                      build your new elements within it, and then append the
                      entire fragment to the DOM in one go.
                    </li>
                    <li>
                      **Build HTML Strings:** For complex insertions, build an
                      entire HTML string and assign it once to
                      `element.innerHTML`. (Remember XSS caution!)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Event Debouncing/Throttling:
                  </strong>{" "}
                  For frequently firing events (like `scroll`, `resize`,
                  `mousemove`, `keyup`), use debouncing or throttling techniques
                  to limit how often your event handler function executes.
                </li>
              </ul>
              <JavascriptViewCode
                code={section8_js}
                indexNumber={9}
                htmlInjection={injectedHtml}
              />
            </section>
            ---
            {/* What's Next? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-gray-400! tw:pb-2!">
                What's Next? Asynchronous JavaScript: The World of Non-Blocking
                Code! ⏱️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You've taken a massive leap! With your understanding of DOM
                manipulation and event handling, you can now build truly
                interactive web pages. This is the cornerstone of all dynamic
                front-end development.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                However, many web applications need to fetch data from servers
                or perform long-running operations without freezing the user
                interface. This brings us to **Asynchronous JavaScript**. In the
                next chapter, we'll explore how JavaScript handles tasks that
                don't complete immediately, using callbacks, Promises, and
                `async/await`. Get ready to manage time in your code!
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
