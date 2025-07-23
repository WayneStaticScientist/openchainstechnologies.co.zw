import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { Html } from "next/document";
import { HtmlChapterFootMap } from "@/utils/chapters-html";

// Code example 1: Element, Class, ID Selectors
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Selectors Example</title>
    <style>
        /* Element Selector */
        p {
            color: #3498db; /* Blue */
            font-size: 16px;
        }

        /* Class Selector */
        .highlight {
            background-color: #f1c40f; /* Yellow */
            font-weight: bold;
            padding: 2px 5px;
            border-radius: 3px;
        }

        /* ID Selector */
        #unique-heading {
            color: #e74c3c; /* Red */
            text-align: center;
            font-size: 28px;
            border-bottom: 2px solid #e74c3c;
            padding-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1 id="unique-heading">Understanding Basic Selectors</h1>
    <p>This is a standard paragraph styled by an <span class="highlight">element selector</span>.</p>
    <p class="highlight">This entire paragraph is highlighted using a class selector.</p>
    <p>Another paragraph. Note how only the specific parts get <span class="highlight">the highlight class</span>.</p>
</body>
</html>`;

// Code example 2: Combinator Selectors
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combinator Selectors Example</title>
    <style>
        /* Descendant Selector: Selects all <p> elements inside a <div> */
        div p {
            background-color: #ecf0f1; /* Light Gray */
            padding: 10px;
            margin-bottom: 10px;
        }

        /* Child Selector: Selects direct child <p> elements of a <div> */
        div > p {
            border-left: 5px solid #2ecc71; /* Green */
        }

        /* Adjacent Sibling Selector: Selects a <p> element immediately preceded by an <h1> */
        h1 + p {
            font-style: italic;
            color: #8e44ad; /* Purple */
        }

        /* General Sibling Selector: Selects all <p> elements that are siblings of an <h1> */
        h1 ~ p {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>Combinator Selectors in Action</h1>
    <p>This paragraph is an adjacent sibling to the h1. It also has the general sibling underline.</p>
    <div>
        <p>This is a direct child paragraph of the div.</p>
        <span>
            <p>This paragraph is a descendant of the div, but NOT a direct child.</p>
        </span>
        <p>Another direct child paragraph.</p>
    </div>
    <p>This paragraph is a general sibling to the h1 (but not adjacent).</p>
</body>
</html>`;

// Code example 3: Specificity Demonstration
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Specificity Example</title>
    <style>
        /* Rule 1: Element Selector (0,0,0,1) */
        p {
            color: blue;
        }

        /* Rule 2: Class Selector (0,0,1,0) */
        .my-paragraph {
            color: green;
        }

        /* Rule 3: ID Selector (0,1,0,0) */
        #unique-paragraph {
            color: red;
        }

        /* Rule 4: Inline Style (1,0,0,0) - Applied directly in HTML */

        /* Rule 5: More specific element selector (0,0,0,2) */
        div p {
            font-size: 20px;
        }

        /* Rule 6: Even more specific combination (0,0,1,1) */
        div .my-paragraph {
            background-color: yellow;
        }

        /* Rule 7: !important (highest specificity, but avoid!) */
        /* #unique-paragraph { color: orange !important; } */
    </style>
</head>
<body>
    <h1>CSS Specificity in Action</h1>

    <div class="container">
        <p id="unique-paragraph" class="my-paragraph" style="color: purple;">
            This paragraph has an ID, a class, and an inline style. What color will it be? (Purple due to inline)
        </p>

        <p class="my-paragraph">
            This paragraph has a class and an element style. What color will it be? (Green due to class)
        </p>

        <p>
            This is a basic paragraph. What color will it be? (Blue due to element selector)
        </p>
    </div>

    <div class="another-container">
        <p class="my-paragraph">
            This paragraph is inside a div and has a class. It will get font-size 20px and background yellow.
        </p>
    </div>

</body>
</html>`;

export default function CssSelectorsSpecificityPage() {
  const page = 13; // Assuming this is the third page in the tutorial series

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/F0F8FF/000080?text=CSS+Selectors+and+Specificity"
              alt="CSS Selectors and Specificity"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Mastering CSS: Selectors and Specificity
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Now that you know how to add CSS, let's learn the fundamental
              tools that allow you to precisely target HTML elements and control
              which styles apply when multiple rules conflict. Get ready to
              fine-tune your designs!
            </p>

            {/* Introduction to Selectors */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                What Are CSS Selectors?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                CSS{" "}
                <strong className="tw:font-semibold! tw:text-teal-600!">
                  selectors
                </strong>{" "}
                are patterns used to select the HTML elements you want to style.
                Without selectors, your CSS wouldn't know which part of your
                webpage to apply its rules to. Think of them as precise
                addresses for your HTML elements.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                There are many types of selectors, ranging from general (like
                selecting all paragraphs) to very specific (like selecting a
                single element with a unique ID). Mastering them is key to
                writing efficient and maintainable CSS.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Common Selectors Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Essential CSS Selectors You'll Use Daily
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Let's dive into the most frequently used selectors with a
                practical example.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Element, Class, and ID Selectors
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Element (Type) Selector:
                  </strong>{" "}
                  Selects all instances of a given HTML element (e.g., `p`,
                  `h1`, `div`).
                  <br />
                  Example: `p {/* styles */}`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Class Selector:
                  </strong>{" "}
                  Selects all elements with a specific `class` attribute.
                  Classes are reusable and can be applied to multiple elements.
                  Starts with a dot (`.`).
                  <br />
                  Example: `.my-class {/* styles */}`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    ID Selector:
                  </strong>{" "}
                  Selects a single element with a unique `id` attribute. IDs
                  must be unique within an HTML document. Starts with a hash
                  (`#`).
                  <br />
                  Example: `#my-id {/* styles */}`
                </li>
              </ul>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Observe how the `h1` with the `id="unique-heading"` gets a
                specific red style, while paragraphs with `class="highlight"`
                get a yellow background. The general `p` selector applies a blue
                color to all paragraphs, but more specific rules override it.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Combinator Selectors Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Diving Deeper: Combinator Selectors
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Combinator selectors explain the relationship between two or
                more selectors. They allow for even more precise targeting based
                on an element's position relative to others in the HTML
                structure.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Descendant Selector (Space):
                  </strong>{" "}
                  Selects elements that are descendants (children,
                  grandchildren, etc.) of another element.
                  <br />
                  Example: `div p {/* styles */}` (selects all {`<p>`} inside
                  any {`<div>`})
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Child Selector ({`>`}):
                  </strong>{" "}
                  Selects elements that are direct children of another element.
                  <br />
                  Example: `ul {`>`} li {/* styles */}` (selects only direct{" "}
                  {`<li>`} children of a {`<ul>`})
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Adjacent Sibling Selector (`+`):
                  </strong>{" "}
                  Selects an element that is immediately preceded by another
                  specific element, and both share the same parent.
                  <br />
                  Example: `h1 + p {/* styles */}` (selects a {`<p>`}{" "}
                  immediately after an {`<h1>`})
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    General Sibling Selector (`~`):
                  </strong>
                  {"L"}
                  Selects all elements that are siblings of a specified element
                  (share the same parent) and come after it.
                  <br />
                  Example: `h1 ~ p {/* styles */}` (selects all {`<p>`} siblings
                  after an {`<h1>`})
                </li>
              </ul>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Notice how `div {`>`} p` only affects the direct child
                paragraphs, while `div p` also applies to the paragraph nested
                inside the {`<span>`}. Also, see the difference between `h1 + p`
                (only the first paragraph after `h1`) and `h1 ~ p` (all
                paragraphs after `h1`).
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Understanding Specificity Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                CSS Specificity: The Tie-Breaker 🏆
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                What happens when multiple CSS rules try to style the same HTML
                element? CSS has a set of rules to determine which style takes
                precedence. This is called{" "}
                <strong className="tw:font-semibold! tw:text-red-600!">
                  Specificity
                </strong>
                .
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Specificity is a calculated weight that determines which CSS
                declaration is most relevant to an element and thus will be
                applied. It's like a scoring system for your selectors. When
                rules conflict, the rule with higher specificity wins.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-bold!">
                Specificity is calculated based on four categories, roughly in
                descending order of importance:
              </p>
              <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Inline Styles: (1,0,0,0)
                  </strong>{" "}
                  Styles applied directly to an HTML element's `style`
                  attribute. These have the highest specificity (excluding
                  `!important`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    IDs: (0,1,0,0)
                  </strong>{" "}
                  Each ID selector adds 1 to the specificity score.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Classes, Attributes, Pseudo-classes: (0,0,1,0)
                  </strong>{" "}
                  Each class selector, attribute selector (`[type="text"]`), or
                  pseudo-class (`:hover`, `:focus`) adds 1 to the score.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Elements and Pseudo-elements: (0,0,0,1)
                  </strong>{" "}
                  Each element selector (`p`, `div`) or pseudo-element
                  (`::before`, `::after`) adds 1 to the score.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:italic!">
                **Example Calculation:**
                <br /> `h1` &rarr; (0,0,0,1)
                <br /> `.my-class` &rarr; (0,0,1,0)
                <br /> `#my-id` &rarr; (0,1,0,0)
                <br /> `div p` &rarr; (0,0,0,2)
                <br /> `div .my-class` &rarr; (0,0,1,1)
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-6!">
                When comparing specificity, you go from left to right (inline
                &rarr; IDs &rarr; Classes &rarr; Elements). The first category
                where one selector has a higher number wins. If scores are
                equal, the last rule declared in your CSS (or the most recently
                loaded stylesheet) wins.
              </p>

              <CodeReviewPager code={section3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In this example, despite multiple rules attempting to style the
                paragraphs, the one with higher specificity wins. The inline
                style is the most specific, followed by the ID, then the class,
                and finally the element selector. The combined selectors (`div
                p` and `div .my-paragraph`) also demonstrate how specificity
                builds up.
              </p>

              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                Understanding selectors and specificity is crucial for writing
                robust and predictable CSS. It empowers you to control your
                designs with precision and troubleshoot styling conflicts
                effectively.
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
