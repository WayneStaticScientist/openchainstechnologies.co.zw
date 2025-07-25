import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Pseudo-elements Deep Dive",
  description:
    "Uncover the power of CSS pseudo-elements for advanced styling and design.",
  keywords: ["CSS", "pseudo-elements", "styling", "web design"],
  openGraph: {
    title: "CSS Pseudo-elements Deep Dive",
    description:
      "Uncover the power of CSS pseudo-elements for advanced styling and design.",
    url: `${baseUrl}/lessons/html/pseudo-elements`,
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/pseudo-elements`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: ::before and ::after
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>::before and ::after</title>
    <style>
        .callout::before {
            content: "✨ "; /* Add an emoji before the content */
            font-size: 1.2em;
            margin-right: 5px;
            color: #f1c40f; /* Yellow */
        }

        .callout::after {
            content: " Read More »"; /* Add text after the content */
            font-size: 0.9em;
            color: #3498db; /* Blue */
            margin-left: 5px;
        }

        .highlight::before {
            content: "";
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #2ecc71; /* Green dot */
            margin-right: 8px;
        }

        .quote::before {
            content: "“";
            font-size: 3em;
            color: #95a5a6; /* Silver */
            float: left; /* Make it float to the left */
            line-height: 0.5;
            margin-right: 10px;
            font-family: 'Georgia', serif;
        }

        .quote::after {
            content: "”";
            font-size: 3em;
            color: #95a5a6; /* Silver */
            float: right; /* Make it float to the right */
            line-height: 0.5;
            margin-left: 10px;
            font-family: 'Georgia', serif;
        }

        p {
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <h1>::before and ::after Pseudo-elements</h1>

    <p class="callout">
        This is an important message.
    </p>

    <p class="highlight">
        This text needs extra attention.
    </p>

    <div class="quote">
        <p>
            The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.
        </p>
    </div>

    <p>
        These pseudo-elements are powerful for adding decorative content or styling specific parts without altering HTML.
    </p>
</body>
</html>`;

// Code example 2: ::first-line and ::first-letter
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>::first-line and ::first-letter</title>
    <style>
        .intro-paragraph::first-line {
            font-weight: bold;
            color: #2c3e50; /* Dark Blue */
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .article-text::first-letter {
            font-size: 3em; /* Large first letter */
            color: #c0392b; /* Dark Red */
            font-family: 'Georgia', serif;
            float: left; /* Create a drop cap effect */
            line-height: 1;
            margin-right: 8px;
        }

        p {
            margin-bottom: 20px;
            line-height: 1.6;
            text-align: justify;
        }
    </style>
</head>
<body>
    <h1>::first-line and ::first-letter Pseudo-elements</h1>

    <p class="intro-paragraph">
        Welcome to the world of CSS pseudo-elements. With these powerful tools, you can precisely control the appearance of your text without needing to modify the underlying HTML structure. This paragraph demonstrates how the first line can be uniquely styled.
    </p>

    <p class="article-text">
        Once upon a time, in a land far, far away, lived a developer who loved clean code. They discovered pseudo-elements and their life was never the same. These elements allowed them to achieve stunning visual effects directly through CSS. No more extra spans for styling! This made their markup lean and efficient.
    </p>

    <p>
        Resize your browser window to see how the "first line" styling dynamically adjusts!
    </p>
</body>
</html>`;

// Code example 3: ::selection and ::placeholder
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>::selection and ::placeholder</title>
    <style>
        /* Styles applied when text is selected/highlighted */
        ::selection {
            background-color: #f1c40f; /* Yellow highlight */
            color: #333; /* Dark text */
        }
        ::-moz-selection { /* For Firefox compatibility */
            background-color: #f1c40f;
            color: #333;
        }

        /* Styles for the placeholder text in input fields */
        input::placeholder {
            color: #95a5a6; /* Silver */
            font-style: italic;
            opacity: 1; /* Override default browser opacity if needed */
        }
        /* For older browsers -webkit-input-placeholder */
        ::-webkit-input-placeholder {
            color: #95a5a6;
            font-style: italic;
        }
        /* For older browsers -moz-placeholder */
        ::-moz-placeholder {
            color: #95a5a6;
            font-style: italic;
        }
        /* For older browsers -ms-input-placeholder */
        ::-ms-input-placeholder {
            color: #95a5a6;
            font-style: italic;
        }

        textarea::placeholder {
            color: #27ae60; /* Green */
            font-family: 'Courier New', monospace;
        }

        input, textarea {
            display: block;
            margin-bottom: 15px;
            padding: 10px;
            width: 80%;
            max-width: 400px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>::selection and ::placeholder Pseudo-elements</h1>

    <h2>::selection Example</h2>
    <p>
        Try selecting some of this text with your mouse.
        You'll notice that the default blue selection background
        has been changed to a custom yellow highlight,
        and the text color is dark.
    </p>

    <h2>::placeholder Example</h2>
    <form>
        <input type="text" placeholder="Enter your name here...">
        <input type="email" placeholder="Your email address">
        <textarea placeholder="Leave your comments..."></textarea>
    </form>
</body>
</html>`;

export default function CssPseudoElementsPage() {
  const page = 18; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/D1C4E9/512DA8?text=CSS+Pseudo-elements+Deep+Dive"
              alt="CSS Pseudo-elements Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Pseudo-elements: Styling Imaginary Parts of Elements 👻
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              While pseudo-classes style an element based on its state or
              position, **pseudo-elements** let you style *specific parts* of an
              element, or even insert content, without adding actual HTML. They
              act like "imaginary" elements.
            </p>

            {/* Introduction to Pseudo-elements */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                What are Pseudo-elements?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A{" "}
                <strong className="tw:font-semibold! tw:text-teal-600!">
                  pseudo-element
                </strong>{" "}
                is a keyword preceded by a double colon (`::`) that allows you
                to style a specific part of an element. It's important to note
                the double colon, as this distinguishes them from pseudo-classes
                (which use a single colon `:`). While older browsers might
                support single colon for some pseudo-elements, the double colon
                is the modern and recommended syntax.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                They are used to:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:space-y-2! tw:pl-4!">
                <li>Style the first line or first letter of text.</li>
                <li>Insert content before or after an element's content.</li>
                <li>Style the placeholder text in form fields.</li>
                <li>Change the appearance of text selection.</li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed!">
                They are truly magical for adding subtle (or not-so-subtle)
                visual enhancements without bloating your HTML.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 1. ::before and ::after */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. `::before` and `::after`: Adding Generated Content ➕
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These are arguably the most versatile pseudo-elements. They
                allow you to insert content (which can be text, an image, or
                even a blank space that you then style) **before** or **after**
                the actual content of an element. This "generated content"
                exists only in the CSS rendering, not in the HTML structure.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Key Property:** The `content` property is mandatory for
                `::before` and `::after` to work. If you just want to add a
                shape or icon, set `content: "";`.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `::before`
                  </strong>
                  : Inserts content before the element's actual content.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `::after`
                  </strong>
                  : Inserts content after the element's actual content.
                </li>
              </ul>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                See how the `::before` pseudo-element adds a sparkling emoji to
                the "callout" paragraph, and `::after` adds "Read More »". The
                "highlight" paragraph uses `::before` to add a green circle (a
                common pattern for list markers or indicators). The "quote" div
                uses both `::before` and `::after` to create large, decorative
                quotation marks without any extra HTML tags!
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. ::first-line and ::first-letter */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. `::first-line` and `::first-letter`: Styling Text Segments ✍️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These pseudo-elements allow you to apply styles to specific
                parts of a block of text.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `::first-line`
                  </strong>
                  : Selects the first line of a block-level element. The "first
                  line" is dynamically determined by the width of the element
                  and the font size.
                  <br />
                  Example: {`p::first-line { font-weight: bold; }`}
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `::first-letter`
                  </strong>
                  : Selects the first letter of the first line of a block-level
                  element. Often used for "drop cap" effects.
                  <br />
                  Example: {`p::first-letter { font-size: 2em; }`}
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Important Note for `::first-line` and `::first-letter`:** Only
                a limited set of CSS properties can be applied to these
                pseudo-elements (e.g., font properties, color, background
                properties, text-decoration, vertical-align, text-transform,
                line-height, clear). Not all properties will work as they would
                on regular elements.
              </p>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Resize the browser window in the example! You'll see how the
                styling of the first line (uppercase, bold, dark blue)
                dynamically changes with the width. The `::first-letter` creates
                a classic drop cap effect on the article paragraph, making the
                initial letter large and red.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. ::selection and ::placeholder */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. `::selection` and `::placeholder`: UI Component Styling 🎨
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These pseudo-elements give you control over specific UI
                components that are often handled by the browser's default
                styling.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `::selection`
                  </strong>
                  : Styles the portion of an element's content that is currently
                  selected/highlighted by the user (e.g., when you drag your
                  mouse over text). You can only control `color`,
                  `background-color`, and `text-shadow`.
                  <br />
                  Example: {`::selection { background: yellow; color: black; }`}
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `::placeholder`
                  </strong>
                  : Styles the placeholder text within {`<input>`} and{" "}
                  {`<textarea>`} elements.
                  <br />
                  Example:{" "}
                  {`input::placeholder { color: gray; font-style: italic; }`}
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Vendor Prefixes for `::placeholder`**: Historically, you often
                needed vendor prefixes for `::placeholder` (e.g.,
                `::-webkit-input-placeholder`, `::-moz-placeholder`,
                `::-ms-input-placeholder`). While modern browsers largely
                support `::placeholder` without prefixes, including them ensures
                broader compatibility.
              </p>
              <CodeReviewPager code={section3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In this demo, selecting text will show a yellow background with
                dark text, overriding the browser's default. The placeholder
                text in the input fields will appear in a subtle silver and
                italicized, while the textarea's placeholder is green and
                monospace. This allows for a more cohesive design even in these
                subtle UI elements.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: The Art of Invisible Styling
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Pseudo-elements are incredibly powerful because they allow you
                to create richer, more interactive, and visually appealing
                designs without adding unnecessary HTML markup. They effectively
                allow CSS to "generate" or target parts of the DOM that don't
                explicitly exist as separate tags.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                By mastering pseudo-elements, you can achieve sophisticated
                visual effects, improve typography, and enhance user experience
                with clean and efficient code.
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
