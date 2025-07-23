import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { Html } from "next/document";
import { HtmlChapterFootMap } from "@/utils/chapters-html";

// Code example 1: Element Selector
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Selector Example</title>
    <style>
        p {
            color: #27ae60; /* Green */
            font-family: 'Verdana', sans-serif;
            text-align: justify;
        }

        h1 {
            color: #2980b9; /* Blue */
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>Welcome to Element Selectors!</h1>
    <p>This is the first paragraph. It will be styled according to the 'p' element selector.</p>
    <p>And this is the second paragraph, also styled by the same element selector.</p>
    <div>
        <p>Even this paragraph inside a div will be selected by the 'p' element selector.</p>
    </div>
</body>
</html>`;

// Code example 2: Class Selector
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-initial-scale=1.0">
    <title>Class Selector Example</title>
    <style>
        .primary-text {
            color: #8e44ad; /* Purple */
            font-size: 18px;
        }

        .alert-box {
            background-color: #f39c12; /* Orange */
            border: 1px solid #d35400;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            color: white;
        }

        .small-text {
            font-size: 14px;
            font-style: italic;
        }
    </style>
</head>
<body>
    <h1 class="primary-text">Understanding Class Selectors</h1>
    <p class="primary-text">This paragraph shares the 'primary-text' style with the heading.</p>
    <div class="alert-box">
        <p>This is an important alert message. It uses the 'alert-box' class.</p>
        <p class="small-text">Note: Information here is critical.</p>
    </div>
    <p>This paragraph has no class and remains unstyled by the class rules.</p>
</body>
</html>`;

// Code example 3: ID Selector
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ID Selector Example</title>
    <style>
        #main-title {
            color: #c0392b; /* Dark Red */
            font-size: 36px;
            text-align: center;
            margin-top: 30px;
        }

        #intro-paragraph {
            background-color: #ecf0f1; /* Light Gray */
            padding: 20px;
            border-left: 5px solid #2c3e50; /* Dark Blue */
            margin-bottom: 20px;
        }

        /* Note: IDs should be unique, but for demonstration, showing a conflicting rule */
        p {
            color: green; /* This will be overridden by #intro-paragraph's specificity */
        }
    </style>
</head>
<body>
    <h1 id="main-title">The Power of ID Selectors</h1>
    <p id="intro-paragraph">
        This is a unique introductory paragraph with a distinct ID. It will receive very specific styling.
    </p>
    <p>
        This is another paragraph. It does not have an ID, so it will be styled by more general rules.
    </p>
    <div id="sidebar">
        <p>
            This paragraph is inside a sidebar div. While the div has an ID, this paragraph itself does not.
        </p>
    </div>
</body>
</html>`;

export default function CssBasicSelectorsPage() {
  const page = 14; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/D4EDDA/155724?text=Basic+CSS+Selectors"
              alt="Basic CSS Selectors Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Getting Started with Basic CSS Selectors 🎯
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              To style your HTML, you first need to tell CSS *which* elements to
              style. This is where **basic selectors** come in. They are your
              fundamental tools for picking out elements on your page. Let's
              learn how to use them!
            </p>

            {/* Introduction to Basic Selectors */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                The ABCs of Targeting HTML Elements
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                In CSS, a{" "}
                <strong className="tw:font-semibold! tw:text-teal-600!">
                  selector
                </strong>{" "}
                is the part of a CSS rule-set that selects the HTML elements you
                want to style. There are several types of selectors, but we'll
                start with the most common and foundational ones: **Element,
                Class, and ID selectors**. Understanding these is crucial for
                effective styling.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed!">
                Think of your HTML document as a large family. You might want to
                style "all children" (element selector), "all siblings with red
                hair" (class selector), or "Uncle Bob" (ID selector).
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Element Selector Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. Element (Type) Selector 🏷️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The{" "}
                <strong className="tw:font-semibold! tw:text-indigo-600!">
                  element selector
                </strong>{" "}
                (also known as the type selector) targets all instances of a
                specific HTML tag. It's the simplest and broadest way to select
                elements.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Syntax:** Just use the name of the HTML tag.
                <br />
                Example: `p {/* styles */}` will apply styles to all {`<p>`}{" "}
                tags.
              </p>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                As you can see, both paragraphs and even the paragraph inside
                the {`<div>`} are styled with green text and Verdana font
                because the `p` element selector targets all {`<p>`} elements on
                the page. Similarly, all `h1` elements get blue, underlined
                text.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Class Selector Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Class Selector 🧑‍🤝‍🧑
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The{" "}
                <strong className="tw:font-semibold! tw:text-indigo-600!">
                  class selector
                </strong>{" "}
                targets all elements that have a specific `class` attribute.
                Classes are incredibly versatile because you can apply the same
                class to multiple HTML elements, and a single HTML element can
                have multiple classes!
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Syntax:** Start with a period (`.`) followed by the class
                name.
                <br />
                Example: `.my-class {/* styles */}` will apply styles to
                elements like {`<p class="my-class">`} or{" "}
                {`<div class="my-class">`}.
              </p>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Notice how both the {`<h1>`} and the first {`<p>`} receive
                purple text and a larger font size due to the `.primary-text`
                class. The {`<div>`} and the paragraph inside it get the orange
                alert box styling from `.alert-box`. Also, a paragraph inside
                the alert box can *also* have the `.small-text` class,
                demonstrating multiple classes on one element.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* ID Selector Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. ID Selector 🆔
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The{" "}
                <strong className="tw:font-semibold! tw:text-indigo-600!">
                  ID selector
                </strong>{" "}
                targets a single, unique HTML element that has a specific `id`
                attribute. An `id` should be used only once per page. It's for
                styling a very specific, singular element.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Syntax:** Start with a hash (`#`) followed by the ID name.
                <br />
                Example: `#unique-element {/* styles */}` will apply styles to{" "}
                {`<div id="unique-element">`}.
              </p>
              <CodeReviewPager code={section3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Here, the {`<h1>`} with `id="main-title"` is styled with large,
                red, centered text. The first paragraph with
                `id="intro-paragraph"` gets a light gray background and a dark
                blue left border. Even though there's a general `p` rule for
                green text, the ID's higher specificity ensures its styles apply
                to `#intro-paragraph`.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Key Takeaways */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Key Takeaways on Basic Selectors
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Element Selectors
                  </strong>{" "}
                  are broad, affecting all instances of a tag.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Class Selectors
                  </strong>{" "}
                  are reusable and flexible, for applying styles to multiple
                  elements or multiple styles to one element. They're widely
                  used.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    ID Selectors
                  </strong>{" "}
                  are for unique, one-of-a-kind elements. Use them sparingly as
                  classes often provide more flexibility.
                </li>
                <li className="tw:leading-relaxed!">
                  Remember the **specificity rules** from the previous lesson:
                  IDs are more specific than classes, which are more specific
                  than elements.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                With these basic selectors under your belt, you can already
                start to bring your web designs to life! Practice using each one
                to get a feel for how they influence your HTML elements.
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
