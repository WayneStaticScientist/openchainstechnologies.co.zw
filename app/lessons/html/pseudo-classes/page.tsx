import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";

export const metadata = {
  title: "CSS Pseudo-classes: Styling Based on State & Position",
  description:
    "Explore CSS pseudo-classes for styling elements based on their state and position.",
  keywords: ["CSS", "pseudo-classes", "styling", "web design"],
  openGraph: {
    title: "CSS Pseudo-classes: Styling Based on State & Position",
    description:
      "Explore CSS pseudo-classes for styling elements based on their state and position.",
    url: `${baseUrl}/lessons/html/pseudo-classes`,
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/pseudo-classes`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: User Action Pseudo-classes (:hover, :active, :focus, :visited, :link)
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Action Pseudo-classes</title>
    <style>
        /* Styling for all links (unvisited) */
        a:link {
            color: #3498db; /* Blue */
            text-decoration: none;
            transition: color 0.3s ease; /* Smooth transition */
        }

        /* Styling for visited links */
        a:visited {
            color: #8e44ad; /* Purple */
        }

        /* Styling when mouse hovers over a link or button */
        a:hover, button:hover {
            color: #2ecc71; /* Green */
            text-decoration: underline;
            cursor: pointer;
        }

        /* Styling when a link or button is being clicked */
        a:active, button:active {
            color: #e74c3c; /* Red */
            transform: translateY(1px); /* Slight press effect */
        }

        /* Styling when an input or button is focused (tabbed to or clicked) */
        input:focus, button:focus {
            outline: 2px solid #f1c40f; /* Yellow outline */
            box-shadow: 0 0 5px rgba(241, 196, 15, 0.5);
        }

        button {
            background-color: #34495e; /* Dark Gray */
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>User Action Pseudo-classes</h1>

    <p>
        <a href="https://www.google.com" target="_blank">Google.com (Link & Visited)</a>
    </p>
    <p>
        <a href="#">Local Link (Hover & Active)</a>
    </p>

    <br>

    <input type="text" placeholder="Type something here (Focus)">
    <br><br>
    <button>Click Me! (Hover, Active, Focus)</button>

    <p style="margin-top: 20px;">
        <em>Try hovering over, clicking, and tabbing through the elements to see the styles change!</em>
    </p>
</body>
</html>`;

// Code example 2: Structural Pseudo-classes (:first-child, :last-child, :nth-child, :only-child)
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Structural Pseudo-classes</title>
    <style>
        .container li {
            background-color: #f8f9fa;
            padding: 8px;
            margin-bottom: 5px;
            border: 1px solid #dee2e6;
        }

        /* Selects the first <li> element that is the first child of its parent */
        .container li:first-child {
            background-color: #d4edda; /* Light Green */
            font-weight: bold;
            color: #155724;
        }

        /* Selects the last <p> element that is the last child of its parent */
        .article p:last-child {
            background-color: #ffeeba; /* Light Yellow */
            font-style: italic;
            border-bottom: 3px solid #ffc107;
        }

        /* Selects every 3rd <li> element (1-based index) */
        .container li:nth-child(3n) {
            border-right: 4px solid #007bff; /* Blue */
        }

        /* Selects every odd-numbered <li> element */
        .container li:nth-child(odd) {
            color: #6c757d; /* Gray text */
        }

        /* Selects every even-numbered <li> element */
        .container li:nth-child(even) {
            background-color: #e2e6ea; /* Darker Gray background */
        }

        /* Selects a <div> that is the only child of its parent */
        .parent-box div:only-child {
            background-color: #e0f2f7; /* Light Cyan */
            border: 2px dashed #00bcd4;
            padding: 15px;
            text-align: center;
        }

        /* Selects any <p> element that is the only child of its type */
        .solo-container p:only-of-type {
            color: #c0392b; /* Dark Red */
            font-size: 1.2em;
        }
    </style>
</head>
<body>
    <h1>Structural Pseudo-classes</h1>

    <h2>Shopping List</h2>
    <ul class="container">
        <li>Milk</li>
        <li>Eggs</li>
        <li>Bread</li>
        <li>Cheese</li>
        <li>Fruit</li>
        <li>Vegetables</li>
        <li>Water</li>
    </ul>

    <h2>Article Content</h2>
    <div class="article">
        <h3>Introduction</h3>
        <p>This is the first paragraph of the article.</p>
        <p>This is the second paragraph.</p>
        <span>A non-paragraph element.</span>
        <p>This is the last paragraph.</p>
    </div>

    <h2>Only Child Example</h2>
    <div class="parent-box">
        <div>I am the only child of my parent.</div>
    </div>
    <div class="parent-box">
        <div>Child 1</div>
        <span>Child 2</span>
    </div>

    <h2>Only Of Type Example</h2>
    <div class="solo-container">
        <p>I am the only paragraph here, so I am selected by :only-of-type.</p>
        <span>I am a span.</span>
    </div>
    <div class="solo-container">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p> </div>
</body>
</html>`;

// Code example 3: Other Useful Pseudo-classes (:not, :empty, :checked, :disabled, :enabled)
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Other Useful Pseudo-classes</title>
    <style>
        /* :not() - Selects all <p> elements that DO NOT have the class 'special' */
        p:not(.special) {
            color: #333; /* Dark gray */
            border-left: 3px solid #ccc;
            padding-left: 10px;
        }

        /* :empty - Selects elements that have no children (not even text) */
        div:empty {
            height: 20px;
            background-color: #f2dede; /* Light Red */
            border: 1px dashed #a94442;
            margin-bottom: 10px;
        }

        /* :checked - Selects checked radio buttons or checkboxes */
        input[type="checkbox"]:checked + label {
            font-weight: bold;
            color: #28a745; /* Green */
        }

        input[type="radio"]:checked + label {
            font-style: italic;
            color: #007bff; /* Blue */
        }

        /* :enabled - Selects enabled input fields */
        input:enabled {
            border: 1px solid #28a745; /* Green border */
            background-color: #e8f5e9;
        }

        /* :disabled - Selects disabled input fields */
        input:disabled {
            background-color: #f8f9fa; /* Light Gray */
            color: #6c757d;
            cursor: not-allowed;
            opacity: 0.7;
        }
    </style>
</head>
<body>
    <h1>Other Useful Pseudo-classes</h1>

    <h2>:not() Example</h2>
    <p>This is a regular paragraph.</p>
    <p class="special">This paragraph is special.</p>
    <p>Another regular paragraph.</p>

    <h2>:empty Example</h2>
    <div>
        </div>
    <div>
        <p>This div has content.</p>
    </div>
    <span>
        </span>

    <h2>:checked Example</h2>
    <input type="checkbox" id="option1" name="options" value="1">
    <label for="option1">Option 1</label>
    <br>
    <input type="checkbox" id="option2" name="options" value="2">
    <label for="option2">Option 2</label>
    <br><br>

    <input type="radio" id="radio1" name="gender" value="male">
    <label for="radio1">Male</label>
    <input type="radio" id="radio2" name="gender" value="female">
    <label for="radio2">Female</label>

    <h2>:enabled / :disabled Example</h2>
    <input type="text" value="Enabled Input">
    <br><br>
    <input type="text" value="Disabled Input" disabled>
    <br><br>
    <button disabled>Disabled Button</button>
</body>
</html>`;

export default function CssPseudoClassesPage() {
  const page = 17; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/C5E1A5/33691E?text=CSS+Pseudo-classes+Deep+Dive"
              alt="CSS Pseudo-classes Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Pseudo-classes: Styling Based on State & Position 🧙
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              CSS **pseudo-classes** allow you to style an element not just by
              its name, class, or ID, but also based on its *state* (like
              whether it's hovered over or checked) or its *position* within the
              HTML structure. They add a whole new layer of dynamic styling!
            </p>

            {/* Introduction to Pseudo-classes */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                What are Pseudo-classes?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A{" "}
                <strong className="tw:font-semibold! tw:text-teal-600!">
                  pseudo-class
                </strong>{" "}
                is a keyword added to a selector that specifies a special state
                of the selected element(s). They begin with a single colon
                (`:`).
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                They are incredibly powerful because they let you apply styles
                based on:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:space-y-2! tw:pl-4!">
                <li>
                  **User interaction:** (e.g., hovering over an element,
                  clicking it, focusing on an input field).
                </li>
                <li>
                  **Element's state:** (e.g., whether a checkbox is checked, if
                  an input is disabled).
                </li>
                <li>
                  **Element's position/order:** (e.g., the first item in a list,
                  every odd row in a table).
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed!">
                Let's explore the most common and useful pseudo-classes.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 1. User Action / UI State Pseudo-classes */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. User Action & UI State Pseudo-classes 🖱️⌨️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These pseudo-classes respond directly to how a user interacts
                with an element or its current state in the UI.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `:hover`
                  </strong>
                  : Applies styles when the user's mouse pointer is over an
                  element. Great for interactive effects.
                  <br />
                  Example: {`a:hover { color: green; }`}
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `:active`
                  </strong>
                  : Applies styles when an element is being activated by the
                  user (e.g., clicked down on a button, a link being held).
                  <br />
                  Example: {`button:active { transform: translateY(1px); }`}
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `:focus`
                  </strong>
                  : Applies styles when an element (usually a form input, link,
                  or button) has received focus, typically from a mouse click or
                  keyboard tabbing. Crucial for accessibility.
                  <br />
                  Example: {`input:focus { border-color: blue; }`}
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `:link`
                  </strong>
                  : Applies styles to unvisited {`<a>`} elements.
                  <br />
                  Example: {`a:link { color: blue; }`}
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `:visited`
                  </strong>
                  : Applies styles to {`<a>`} elements that the user has already
                  visited. For privacy reasons, styling is limited.
                  <br />
                  Example: {`a:visited { color: purple; }`}
                </li>
              </ul>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Try interacting with the elements in the example: hover over the
                links and button, click and hold them, and use your Tab key to
                navigate through the input and button to see `:focus` in action.
                Note how `:link` and `:visited` differentiate the visited Google
                link.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Structural Pseudo-classes */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Structural Pseudo-classes 🏗️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These pseudo-classes select elements based on their position or
                order within a group of siblings in the HTML structure.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `:first-child`
                  </strong>
                  : Selects an element that is the first child of its parent.
                  <br />
                  Example: `li:first-child {/* styles */}`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `:last-child`
                  </strong>
                  : Selects an element that is the last child of its parent.
                  <br />
                  Example: `p:last-child {/* styles */}`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `:nth-child(n)`
                  </strong>
                  : Selects elements based on their position among a group of
                  siblings. `n` can be a number, `odd`, `even`, or a formula
                  like `2n+1`. It counts ALL children, regardless of type.
                  <br />
                  Example: `li:nth-child(2n)` (every even list item),
                  `li:nth-child(3)` (the third list item).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `:nth-of-type(n)`
                  </strong>
                  : Similar to `:nth-child(n)`, but it only counts siblings of
                  the *same element type*.
                  <br />
                  Example: `p:nth-of-type(2)` (the second paragraph among its
                  siblings).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `:first-of-type`
                  </strong>
                  : Selects the first element of its type among a group of
                  siblings.
                  <br />
                  Example: `p:first-of-type {/* styles */}`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `:last-of-type`
                  </strong>
                  : Selects the last element of its type among a group of
                  siblings.
                  <br />
                  Example: `span:last-of-type {/* styles */}`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `:only-child`
                  </strong>
                  : Selects an element that is the *only child* of its parent.
                  <br />
                  Example: `div:only-child {/* styles */}`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `:only-of-type`
                  </strong>
                  : Selects an element that is the *only one of its type* among
                  its siblings. (There might be other element types, but only
                  one of this specific type).
                  <br />
                  Example: `p:only-of-type {/* styles */}`
                </li>
              </ul>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Observe the "Shopping List" where `li:first-child` and
                `li:nth-child(odd/even/3n)` create distinct patterns. In
                "Article Content", `p:last-child` correctly selects only the
                final paragraph, ignoring the {`<span>`} in between. The "Only
                Child" and "Only Of Type" examples highlight the subtle but
                important differences between these two.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Other Useful Pseudo-classes */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. Other Versatile Pseudo-classes ➕
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A few more powerful pseudo-classes that don't fit neatly into
                the above categories but are incredibly useful.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `:not(selector)`
                  </strong>
                  : The negation pseudo-class. It selects elements that *do not
                  match* the provided selector.
                  <br />
                  Example: `p:not(.intro)` (selects all paragraphs except those
                  with class `intro`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `:empty`
                  </strong>
                  : Selects elements that have no children, not even text nodes
                  or comments.
                  <br />
                  Example: {`div:empty { display: none; }`} (hides empty divs).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `:checked`
                  </strong>
                  : Selects radio buttons or checkboxes that are currently
                  checked.
                  <br />
                  Example:{" "}
                  {`input[type="checkbox"]:checked + label { font-weight: bold; }`}
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `:disabled`
                  </strong>
                  : Selects disabled form elements (inputs, buttons, select).
                  <br />
                  Example: {`input:disabled { background-color: #eee; }`}
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `:enabled`
                  </strong>
                  : Selects enabled form elements.
                  <br />
                  Example: {`input:enabled { border-color: green; }`}
                </li>
              </ul>
              <CodeReviewPager code={section3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In this final example, `:not(.special)` clearly excludes the
                "special" paragraph. Empty {`<div>`} and {`<span>`} elements are
                given a visual indicator by `:empty`. Clicking the checkboxes or
                radio buttons changes the style of their associated labels using
                `:checked`. Finally, the enabled and disabled input fields are
                visually distinct due to `:enabled` and `:disabled`.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Unlocking Dynamic Styling
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Pseudo-classes are incredibly powerful because they allow you to
                apply styles based on states and relationships that aren't
                explicitly defined by static HTML attributes. They make your UI
                more interactive, accessible, and visually organized without
                cluttering your HTML with excessive classes.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                Master these, and you'll have an immense amount of control over
                your web page's appearance!
              </p>
              <PageNavigationButtons
                next={{
                  title: HtmlChapterFootMap[page + 1]
                    ? HtmlChapterFootMap[page + 1].title
                    : "Next Chapter",
                  path: HtmlChapterFootMap[page + 1]
                    ? HtmlChapterFootMap[page + 1].path
                    : "#",
                }}
                prev={{
                  title: HtmlChapterFootMap[page - 1]
                    ? HtmlChapterFootMap[page - 1].title
                    : "Previous Chapter",
                  path: HtmlChapterFootMap[page - 1]
                    ? HtmlChapterFootMap[page - 1].path
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
