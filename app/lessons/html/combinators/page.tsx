import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Combinators - OpenChains Technologies",
  description:
    "Learn how to use CSS combinators to select elements based on their relationships in the HTML structure. Master descendant, child, adjacent sibling, and general sibling selectors.",
  openGraph: {
    type: "website",
    url: `${baseUrl}/lessons/html/combinators`,
    title: "CSS Combinators - OpenChains Technologies",
    description:
      "Learn how to use CSS combinators to select elements based on their relationships in the HTML structure. Master descendant, child, adjacent sibling, and general sibling selectors.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Combinators - OpenChains Technologies",
    description:
      "Learn how to use CSS combinators to select elements based on their relationships in the HTML structure. Master descendant, child, adjacent sibling, and general sibling selectors.",
  },
  keywords: [
    "CSS combinators",
    "descendant selector",
    "child selector",
    "adjacent sibling selector",
    "general sibling selector",
    "web development",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/html/combinators`,
  },
  metadataBase: new URL(baseUrl),
};
// Code example 1: Descendant Selector (Space)
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Descendant Selector</title>
    <style>
        /* Selects all <li> elements that are inside (descendants of) any <ul> */
        ul li {
            color: #2c3e50; /* Dark Blue */
            font-style: italic;
            list-style-type: square;
        }

        /* Selects all <p> elements that are inside (descendants of) any <div> */
        div p {
            background-color: #ecf0f1; /* Light Gray */
            padding: 8px;
            border-left: 3px solid #3498db; /* Blue */
            margin-bottom: 5px;
        }

        /* Selects all <a> elements that are inside any <nav> */
        nav a {
            text-decoration: none;
            color: #e67e22; /* Orange */
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Understanding Descendant Selectors</h1>

    <ul>
        <li>List Item One</li>
        <li>List Item Two
            <ul>
                <li>Nested List Item A</li>
                <li>Nested List Item B</li>
            </ul>
        </li>
        <li>List Item Three</li>
    </ul>

    <div>
        <p>This paragraph is directly inside the div.</p>
        <section>
            <p>This paragraph is inside a section, which is inside the div (still a descendant).</p>
        </section>
        <span>
            <p>And this one is even deeper, inside a span inside a section inside a div.</p>
        </span>
    </div>

    <nav>
        <a href="#">Home</a> |
        <a href="#">About Us</a> |
        <a href="#">Contact</a>
    </nav>

    <p>This paragraph is not inside a div, so it won't be affected by \`div p\` .</p>
</body>
</html>`;

// Code example 2: Child Selector (>)
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Child Selector</title>
    <style>
        /* Selects only <li> elements that are DIRECT CHILDREN of a <ul> */
        ul > li {
            color: #27ae60; /* Green */
            font-weight: bold;
            list-style-type: disc;
        }

        /* Selects only <p> elements that are DIRECT CHILDREN of a <div> */
        div > p {
            border: 2px dashed #9b59b6; /* Purple */
            padding: 10px;
            margin-top: 15px;
        }

        /* Selects only <a> elements that are DIRECT CHILDREN of a <nav> */
        nav > a {
            font-size: 1.1em;
            text-transform: uppercase;
        }
    </style>
</head>
<body>
    <h1>Child Selectors in Action</h1>

    <ul>
        <li>Direct Child Item 1</li>
        <li>Direct Child Item 2
            <ul>
                <li>Nested Item A (NOT a direct child of the first ul)</li>
                <li>Nested Item B</li>
            </ul>
        </li>
        <li>Direct Child Item 3</li>
    </ul>

    <div>
        <p>This is a direct child paragraph of the div.</p>
        <span>
            <p>This paragraph is inside a span, so it's NOT a direct child of the div.</p>
        </span>
        <p>Another direct child paragraph.</p>
    </div>

    <nav>
        <a href="#">Home</a> |
        <span><a href="#">About</a></span> | <a href="#">Services</a>
    </nav>

    <p>This paragraph is outside the styled containers.</p>
</body>
</html>`;

// Code example 3: Adjacent Sibling Selector (+)
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adjacent Sibling Selector</title>
    <style>
        /* Selects a <p> element immediately following an <h1> */
        h1 + p {
            color: #c0392b; /* Dark Red */
            font-style: italic;
            font-size: 1.1em;
            margin-top: 5px;
        }

        /* Selects a <div> element immediately following a <p> */
        p + div {
            border: 1px solid #2980b9; /* Blue */
            background-color: #eaf2f8; /* Light Blue */
            padding: 10px;
            margin-top: 10px;
        }

        /* Selects an <h2> immediately following an <hr> */
        hr + h2 {
            text-align: center;
            background-color: #f1c40f; /* Yellow */
            padding: 5px;
        }
    </style>
</head>
<body>
    <h1>Adjacent Sibling Selector Demo</h1>
    <p>This paragraph is the immediate sibling of the h1.</p>
    <p>This paragraph is NOT the immediate sibling of the h1, so it won't be italic.</p>

    <hr>
    <h2>Section Title (immediately after hr)</h2>
    <p>Some content.</p>

    <p>Another paragraph.</p>
    <div>
        This div immediately follows a paragraph.
    </div>
    <section>
        <p>A paragraph inside a section.</p>
    </section>
    <div>
        This div does NOT immediately follow a paragraph.
    </div>
</body>
</html>`;

// Code example 4: General Sibling Selector (~)
const section4 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>General Sibling Selector</title>
    <style>
        /* Selects all <p> elements that are siblings of an <h1> AND come AFTER it */
        h1 ~ p {
            border-left: 4px solid #16a085; /* Teal */
            padding-left: 10px;
            margin-left: 20px;
        }

        /* Selects all <li> elements that are siblings of the first <li> AND come AFTER it */
        .start-item ~ li {
            background-color: #dcedc8; /* Light Green */
        }

        /* Selects all <span> elements that are siblings of a <label> AND come AFTER it */
        label ~ span {
            color: #e74c3c; /* Red */
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>General Sibling Selector Demo</h1>
    <p>This paragraph is the first sibling after the h1.</p>
    <div>This is a div, not a paragraph.</div>
    <p>This paragraph is also a sibling after the h1.</p>
    <h2>Another heading.</h2>
    <p>And this paragraph is also a sibling after the h1, even with other elements in between.</p>

    <ul>
        <li class="start-item">Starting List Item</li>
        <li>Second List Item</li>
        <li>Third List Item</li>
        <span>A span element</span>
        <li>Fourth List Item (still a sibling)</li>
    </ul>

    <form>
        <label>Name:</label>
        <input type="text">
        <span>Error message here!</span>
        <br>
        <label>Email:</label>
        <input type="email">
        <span>Another error.</span>
    </form>
</body>
</html>`;

export default function CssCombinatorsPage() {
  const page = 15; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/C8E6C9/2E7D32?text=CSS+Combinators+Explained"
              alt="CSS Combinators Illustration"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Combinators: Crafting Precise Relationships in Your Styles 🤝
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Beyond selecting single elements, CSS combinators allow you to
              select elements based on their relationships with other elements
              in the HTML document. This unlocks much more powerful and precise
              styling!
            </p>

            {/* Introduction to Combinators */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Why Do We Need Combinators?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You've learned about basic selectors like element, class, and
                ID. While powerful, they sometimes aren't enough when you need
                to target an element based on where it sits in the HTML
                hierarchy, or its proximity to another element. This is where{" "}
                <strong className="tw:font-semibold! tw:text-teal-600!">
                  combinators
                </strong>{" "}
                come into play.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Combinators are simply special characters or spaces that combine
                two or more simple selectors, defining the logical relationship
                between them. They allow you to select elements very precisely
                without needing to add extra classes or IDs to your HTML,
                leading to cleaner code.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed!">
                Think of your HTML document as a family tree. Combinators let
                you say: "Select the children of this parent," "Select the first
                sibling immediately after this one," or "Select all descendants
                of this great-grandparent."
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 1. Descendant Selector (Space) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. Descendant Selector (Space) 🌳
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The{" "}
                <strong className="tw:font-semibold! tw:text-blue-600!">
                  descendant selector
                </strong>
                , represented by a single space between two selectors, selects
                all elements that are descendants of the first element. A
                descendant can be a child, a grandchild, a great-grandchild, and
                so on – any element nested inside another.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Syntax:** `ancestor_selector descendant_selector{" "}
                {/* styles */}`
                <br />
                Example: `div p {/* styles */}` will target *any* {`<p>`} tag
                that is inside *any* {`<div>`} tag, no matter how many levels
                deep.
              </p>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In the example above, notice how `ul li` styles *all* list
                items, including the nested ones. Similarly, `div p` applies
                styles to paragraphs directly inside the {`<div>`} AND those
                nested further inside a {`<section>`} or {`<span>`} within the{" "}
                {`<div>`}. The `nav a` rule targets all links inside the
                navigation.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Child Selector (>) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Child Selector ({`>`}) 👶
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The{" "}
                <strong className="tw:font-semibold! tw:text-green-600!">
                  child selector
                </strong>
                , represented by the greater-than symbol ({`>`}), is more
                specific than the descendant selector. It only selects elements
                that are **direct children** of the first element. It doesn't
                target elements nested deeper within other elements.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Syntax:** `parent_selector {`>`} child_selector {/* styles */}
                `
                <br />
                Example: `ul {`>`} li {/* styles */}` will only target {`<li>`}{" "}
                tags that are immediately inside a {`<ul>`} tag, not those
                nested in another {`<ul>`} within the first.
              </p>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Compare this to the descendant selector example. Here, `ul {`>`}{" "}
                li` only styles the top-level list items (e.g., "Direct Child
                Item 1"), but *not* "Nested Item A" because it's a child of
                another {`<ul>`}, not directly of the main {`<ul>`}. Similarly,
                `div {`>`} p` only affects the paragraphs directly within the{" "}
                {`<div>`}, not the one inside the {`<span>`}.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Adjacent Sibling Selector (+) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. Adjacent Sibling Selector (+) 👋
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The{" "}
                <strong className="tw:font-semibold! tw:text-red-600!">
                  adjacent sibling selector
                </strong>
                , denoted by a plus sign (`+`), selects an element that is
                **immediately preceded** by another specific element. Both
                elements must have the same parent.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Syntax:** `element1 + element2 {/* styles */}`
                <br />
                Example: `h1 + p {/* styles */}` will only style the first{" "}
                {`<p>`} tag that comes immediately after an {`<h1>`} tag, *if*
                they share the same parent.
              </p>
              <CodeReviewPager code={section3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In this demo, only the first paragraph immediately following the{" "}
                {`<h1>`} gets the italic, dark red style. The second paragraph
                (or any other `p` not directly after an `h1` in the same parent)
                is unaffected. Also, notice how `p + div` only targets the `div`
                that directly follows a paragraph, not others.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 4. General Sibling Selector (~) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                4. General Sibling Selector (~) 👥
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The{" "}
                <strong className="tw:font-semibold! tw:text-purple-600!">
                  general sibling selector
                </strong>
                , represented by the tilde symbol (`~`), selects all elements
                that are siblings of a specified element **and come after it**
                in the HTML structure. They must share the same parent, but
                there can be other elements in between.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Syntax:** `element1 ~ element2 {/* styles */}`
                <br />
                Example: `h1 ~ p {/* styles */}` will style *all* {`<p>`} tags
                that appear after an {`<h1>`} tag and share the same parent,
                regardless of what other elements are between them.
              </p>
              <CodeReviewPager code={section4} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Unlike the adjacent sibling, `h1 ~ p` styles *all* paragraphs
                that are siblings to `h1` and appear after it, even if a{" "}
                {`<div>`} or {`<h2>`} is in between. Similarly, `.start-item ~
                li` styles all {`<li>`} siblings after the one with `start-item`
                class.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Summary and Best Practices */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Summary & When to Use Which Combinator
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-gray-800!">
                    Space (Descendant):
                  </strong>
                  Use when you want to style *any* element nested inside
                  another, regardless of depth. Very common and powerful.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-gray-800!">
                    {`>`} (Child):
                  </strong>
                  Use when you need to target *only direct children* of an
                  element. This adds specificity and prevents styles from
                  "leaking" deeper into the DOM.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-gray-800!">
                    + (Adjacent Sibling):
                  </strong>
                  Use for styling an element that immediately follows another
                  specific element, often for spacing or adding a visual
                  separator.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-gray-800! ">
                    ~ (General Sibling):
                  </strong>
                  Use for styling *all* elements that follow a specific element
                  and share the same parent. Useful for creating consistent
                  visual patterns within a section.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                Understanding combinators allows you to write more efficient,
                cleaner, and more precise CSS. Practice these relationships in
                your code to truly grasp their utility and flexibility!
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
