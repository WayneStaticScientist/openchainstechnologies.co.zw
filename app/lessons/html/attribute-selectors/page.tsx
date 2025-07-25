import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Attribute Selectors - OpenChains Technologies",
  description:
    "Learn how to use CSS attribute selectors to style HTML elements based on their attributes. A comprehensive guide with examples.",
  openGraph: {
    type: "website",
    url: `${baseUrl}/lessons/html/attribute-selectors`,
    title: "CSS Attribute Selectors - OpenChains Technologies",
    description:
      "Learn how to use CSS attribute selectors to style HTML elements based on their attributes. A comprehensive guide with examples.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Attribute Selectors - OpenChains Technologies",
    description:
      "Learn how to use CSS attribute selectors to style HTML elements based on their attributes. A comprehensive guide with examples.",
  },
  keywords: [
    "CSS attribute selectors",
    "HTML styling",
    "web development",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/html/attribute-selectors`,
  },
  metadataBase: new URL(baseUrl),
};
// Code example 1: Simple Attribute Selector
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Attribute Selector</title>
    <style>
        /* Selects all elements with a 'title' attribute */
        [title] {
            border: 2px solid #3498db; /* Blue */
            padding: 5px;
            border-radius: 4px;
        }

        /* Selects all input elements with a 'type' attribute */
        input[type] {
            background-color: #ecf0f1; /* Light Gray */
            padding: 8px;
            border: 1px solid #ccc;
        }

        /* Selects all <img> elements with an 'alt' attribute */
        img[alt] {
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
    </style>
</head>
<body>
    <h1>Simple Attribute Selectors</h1>

    <p title="This is a paragraph title">
        This paragraph has a title attribute.
    </p>

    <div>
        <span title="A span with a title">
            This span also has a title.
        </span>
    </div>

    <form>
        <label>Text Input:</label>
        <input type="text" placeholder="Enter text">
        <br><br>
        <label>Number Input:</label>
        <input type="number" value="123">
        <br><br>
        <label>No Type (not selected):</label>
        <input data-info="some data">
    </form>

    <img src="https://placehold.co/100x100" alt="A placeholder image">
    <img src="https://placehold.co/100x100"> </body>
</html>`;

// Code example 2: Attribute Value Selectors
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attribute Value Selectors</title>
    <style>
        /* Selects elements where 'type' attribute is EXACTLY 'submit' */
        input[type="submit"] {
            background-color: #2ecc71; /* Green */
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        /* Selects elements where 'target' attribute is EXACTLY '_blank' */
        a[target="_blank"] {
            color: #e74c3c; /* Red */
            font-weight: bold;
            text-decoration: none;
        }

        /* Selects elements where 'data-status' attribute is EXACTLY 'active' */
        [data-status="active"] {
            border: 2px solid green;
            padding: 5px;
            background-color: #e8f5e9; /* Light Green */
        }
    </style>
</head>
<body>
    <h1>Attribute Value Selectors</h1>

    <form>
        <input type="text" value="Hello">
        <input type="password" value="secret">
        <input type="submit" value="Send Form">
        <input type="reset" value="Clear Form">
    </form>

    <p><a href="https://example.com" target="_blank">Visit Example (opens in new tab)</a></p>
    <p><a href="https://another.com">Visit Another (same tab)</a></p>

    <div data-status="active">
        This item is currently active.
    </div>
    <span data-status="inactive">
        This item is inactive.
    </span>
    <p data-type="message" data-status="active">
        This paragraph is also active.
    </p>
</body>
</html>`;

// Code example 3: Partial Attribute Value Selectors
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Partial Attribute Value Selectors</title>
    <style>
        /* [attribute~="value"] - Contains a specific word */
        [class~="button"] {
            background-color: #3498db; /* Blue */
            color: white;
            padding: 8px 12px;
            border-radius: 3px;
            text-decoration: none;
            display: inline-block;
        }

        /* [attribute^="value"] - Starts with */
        [href^="https://"] {
            color: #27ae60; /* Green */
            font-weight: bold;
        }

        /* [attribute$="value"] - Ends with */
        [src$=".png"] {
            border: 3px dashed #e74c3c; /* Red */
        }

        /* [attribute*="value"] - Contains anywhere */
        [alt*="flower"] {
            box-shadow: 0 0 10px #8e44ad; /* Purple shadow */
        }

        /* [attribute|="value"] - Starts with 'value' or 'value-' */
        [lang|="en"] {
            border-left: 5px solid #f1c40f; /* Yellow */
            padding-left: 10px;
        }
    </style>
</head>
<body>
    <h1>Partial Attribute Value Selectors</h1>

    <a href="#" class="button primary-button">Primary Button</a>
    <a href="#" class="btn secondary-button">Secondary Button (not selected by .button)</a>

    <p>
        <a href="https://www.example.com">Secure Link (HTTPS)</a><br>
        <a href="http://insecure.com">Insecure Link (HTTP)</a><br>
        <a href="/about-us">Relative Link</a>
    </p>

    <img src="images/logo.png" alt="Company Logo">
    <img src="icons/close.svg" alt="Close Icon">
    <img src="assets/bg.jpg" alt="Background Image">

    <img src="pictures/rose.png" alt="Beautiful red flower">
    <img src="pictures/tulip.jpg" alt="A yellow tulip">

    <div lang="en-US">
        This content is in US English.
    </div>
    <p lang="en">
        This paragraph is in general English.
    </p>
    <span lang="fr">
        Ceci est en français.
    </span>
    <p lang="en-GB">
        This is British English.
    </p>
</body>
</html>`;

export default function CssAttributeSelectorsPage() {
  const page = 16; // Adjust page number as necessary for your HtmlChapterFootMap
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/FADBD8/7B241C?text=CSS+Attribute+Selectors"
              alt="CSS Attribute Selectors Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Attribute Selectors: Styling Based on HTML Attributes 🏷️
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Beyond just element names, classes, or IDs, CSS gives you the
              power to select and style elements based on their HTML
              **attributes** and even the **values** of those attributes. This
              is incredibly versatile for dynamic styling!
            </p>

            {/* Introduction to Attribute Selectors */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                What Are Attribute Selectors?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                HTML elements often have{" "}
                <strong className="tw:font-semibold! tw:text-teal-600!">
                  attributes
                </strong>{" "}
                that provide additional information, like `href` for links,
                `src` for images, `type` for inputs, or custom `data-*`
                attributes. **Attribute selectors** allow you to target elements
                based on:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:space-y-2! tw:pl-4!">
                <li>The mere presence of an attribute.</li>
                <li>The exact value of an attribute.</li>
                <li>
                  Partial matches of an attribute's value (e.g., starts with,
                  ends with, contains).
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed!">
                They are enclosed in square brackets `[]`. This provides a
                powerful way to style elements without relying solely on classes
                or IDs, especially when dealing with form elements, links, or
                dynamic content.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 1. Simple Attribute Selector: `[attribute]` */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. Simple Presence: `[attribute]` 👀
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is the most basic attribute selector. It selects any HTML
                element that **has a specific attribute**, regardless of its
                value.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Syntax:** `[attribute_name] {/* styles */}`
                <br />
                Example: `[title] {/* styles */}` will apply styles to any
                element that has a `title` attribute.
              </p>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In this example, any element with a `title` attribute (the
                paragraph and the span) gets a blue border. All `input` elements
                that have a `type` attribute get a light gray background. Notice
                the second {`<img>`} element doesn't have an `alt` attribute, so
                it doesn't get the box-shadow.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Attribute Exact Value Selector: `[attribute="value"]` */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Exact Value: `[attribute="value"]` 💯
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This selector targets elements where a specific attribute has an
                **exact, matching value**. The value is case-sensitive.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Syntax:** `[attribute_name="value"] {/* styles */}`
                <br />
                Example: `input[type="submit"] {/* styles */}` will only style{" "}
                {`<input>`} elements whose `type` attribute is *exactly*
                "submit".
              </p>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Here, only the submit button is styled with a green background.
                The reset button is unaffected. Similarly, only the link that
                opens in a new tab (`target="_blank"`) gets the bold red
                styling. This is perfect for differentiating specific elements
                based on their precise functionality or state.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Partial Attribute Value Selectors */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. Partial Value Matching: Flexible Targeting ✨
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These are the most flexible attribute selectors, allowing you to
                match attribute values based on various patterns:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600;">
                    `[attribute~="value"]` (Contains Word):
                  </strong>
                  Selects elements where the attribute's value contains a
                  specified word (space-separated). Useful for multiple classes.
                  <br />
                  Example: `[class~="button"]` matches{" "}
                  {`<a class="nav button">`} but not {`<a class="mybutton">`}.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600;">
                    `[attribute^="value"]` (Starts With):
                  </strong>
                  Selects elements where the attribute's value starts with a
                  specified string.
                  <br />
                  Example: `[href^="https://"]` matches links starting with
                  "https://".
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600;">
                    `[attribute$="value"]` (Ends With):
                  </strong>
                  Selects elements where the attribute's value ends with a
                  specified string.
                  <br />
                  Example: `[src$=".png"]` matches image files ending with
                  ".png".
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600;">
                    `[attribute*="value"]` (Contains Anywhere):
                  </strong>
                  Selects elements where the attribute's value contains a
                  specified string anywhere within it.
                  <br />
                  Example: `[alt*="flower"]` matches `alt` texts like "red
                  flower" or "flower garden".
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600;">
                    `[attribute|="value"]` (Starts with 'value-' or exactly
                    'value'):
                  </strong>
                  Selects elements where the attribute's value is exactly a
                  specified string, or starts with that string followed by a
                  hyphen (`-`). Often used for language codes (e.g.,
                  `lang="en-US"` or `lang="en"`).
                  <br />
                  Example: `[lang|="en"]` matches `lang="en"` and
                  `lang="en-GB"`.
                </li>
              </ul>
              <CodeReviewPager code={section3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                This example showcases the versatility. Notice how
                `[class~="button"]` only styles the `primary-button` because
                "button" is a full word in its class list, but not `btn` or
                `mybutton`. `[href^="https://"]` correctly picks out the secure
                link. `[src$=".png"]` only borders PNG images. `[alt*="flower"]`
                highlights images whose alt text includes "flower". And
                `[lang|="en"]` styles both `lang="en"` and
                `lang="en-US"`/`en-GB`.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Best Practices & Considerations */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Best Practices & Power-Ups
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  **Combine with other selectors:** Attribute selectors can be
                  combined with element, class, or ID selectors for even greater
                  precision (e.g., `a[target="_blank"].external-link`).
                </li>
                <li className="tw:leading-relaxed!">
                  **Custom Data Attributes (`data-*`):** A common and powerful
                  use case is to create custom HTML `data-*` attributes for
                  styling. This keeps your HTML semantic and your CSS focused on
                  presentation.
                  <br />
                  Example: {`<button data-theme="dark">`} styled by
                  `[data-theme="dark"]`.
                </li>
                <li className="tw:leading-relaxed!">
                  **Accessibility (A11y):** Attribute selectors are great for
                  styling based on ARIA attributes (e.g.,
                  `[aria-hidden="true"]`).
                </li>
                <li className="tw:leading-relaxed!">
                  **Performance:** While generally good, complex partial
                  attribute matching on very large DOMs *can* have a slight
                  performance impact compared to classes/IDs. For most web
                  pages, this is negligible.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                Attribute selectors offer incredible flexibility, allowing you
                to style elements precisely based on their underlying data and
                structure. They are an essential tool in any CSS developer's
                toolkit!
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
