import React from "react";
import CodeReviewPager, {
  CssBoxHightLight,
} from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Box Model - OpenChains Technologies",
  description:
    "Learn about the CSS Box Model, a fundamental concept in web design that defines how elements are structured and styled.",
  openGraph: {
    title: "CSS Box Model - OpenChains Technologies",
    description:
      "Learn about the CSS Box Model, a fundamental concept in web design that defines how elements are structured and styled.",
    url: `${baseUrl}/lessons/html/css-introduction`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Box Model - OpenChains Technologies",
    description:
      "Learn about the CSS Box Model, a fundamental concept in web design that defines how elements are structured and styled.",
  },
  keywords: [
    "CSS Box Model",
    "Web Design",
    "HTML",
    "CSS",
    "Web Development",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/html/css-introduction`,
  },
  metadataBase: new URL(baseUrl),
};
// Code example 1: Inline CSS
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inline CSS Example</title>
</head>
<body>
    <h1 style="color: blue; text-align: center;">Hello from Inline CSS!</h1>
    <p style="font-size: 18px; color: green;">This paragraph has inline styles applied.</p>
</body>
</html>`;

// Code example 2: Internal CSS
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal CSS Example</title>
    <style>
        h1 {
            color: purple;
            text-decoration: underline;
        }
        p {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        .highlight {
            background-color: yellow;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Welcome to Internal CSS!</h1>
    <p>This paragraph uses styles defined in the <span class="highlight">head section</span> of the document.</p>
    <p>Another paragraph with inherited styles.</p>
</body>
</html>`;

// Code example 3: External CSS (CSS content only for display)
const section3 = `/* styles.css */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 20px;
    background-color: #f4f4f4;
}

h1 {
    color: #333;
    border-bottom: 2px solid #5cb85c;
    padding-bottom: 10px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

button {
    background-color: #5cb85c;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #4cae4c;
}`;

// Code example 3: HTML linked to external CSS
const section4 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css"> </head>
<body>
    <div class="container">
        <h1>Exploring External CSS</h1>
        <p>This page is styled using an <strong style="color: #5cb85c;">external stylesheet</strong>, providing a clean separation of concerns.</p>
        <button>Click Me!</button>
    </div>
</body>
</html>`;

export default function CssIntroPage() {
  const page = 12; // Assuming this is the second page in the tutorial series, adjust as needed

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=Styling+the+Web+with+CSS"
              alt="CSS Styling Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Unveiled: Bringing Your HTML to Life with Style 🎨
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              After structuring your webpage with HTML, it's time to make it
              visually appealing! Cascading Style Sheets (CSS) is your magic
              wand for adding colors, fonts, layouts, and animations to your web
              creations. Let's make your website shine!
            </p>

            {/* Introduction Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                What Exactly *Is* CSS?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                If HTML is the **skeleton** of your webpage, then{" "}
                <strong className="tw:font-semibold! tw:text-green-600!">
                  CSS
                </strong>{" "}
                is the **skin, clothes, and makeup**! It's a style sheet
                language used for describing the presentation of a document
                written in HTML. This means it controls how HTML elements are
                displayed on screen, paper, or in other media.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                CSS allows you to separate the **content** (HTML) from the
                **presentation** (CSS), which is a core principle in modern web
                development. This separation makes your code cleaner, easier to
                maintain, and more flexible for responsive designs across
                various devices.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed!">
                With CSS, you can control everything from the simplest
                properties like{" "}
                <strong className="tw:font-semibold! tw:text-purple-600!">
                  colors
                </strong>{" "}
                and{" "}
                <strong className="tw:font-semibold! tw:text-purple-600!">
                  font sizes
                </strong>{" "}
                to complex layouts using{" "}
                <strong className="tw:font-semibold! tw:text-purple-600!">
                  Flexbox
                </strong>{" "}
                and{" "}
                <strong className="tw:font-semibold! tw:text-purple-600!">
                  Grid
                </strong>
                , and even add interactive elements with{" "}
                <strong className="tw:font-semibold! tw:text-purple-600!">
                  transitions
                </strong>{" "}
                and{" "}
                <strong className="tw:font-semibold! tw:text-purple-600!">
                  animations
                </strong>
                .
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Why Learn CSS Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Why is CSS So Important for Web Development? 🤔
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Enhances User Experience:
                  </strong>{" "}
                  A visually appealing website keeps users engaged. CSS makes
                  your site look professional and user-friendly, directly
                  impacting how long visitors stay and interact with your
                  content.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Responsive Design:
                  </strong>{" "}
                  With CSS, you can create designs that adapt seamlessly to
                  different screen sizes (desktops, tablets, phones). This is
                  crucial in today's multi-device world, ensuring your website
                  looks great everywhere.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Efficiency and Maintainability:
                  </strong>{" "}
                  By separating styles from content, you can change the look of
                  an entire website by modifying a single CSS file. This saves
                  immense time and effort compared to updating styles on every
                  individual HTML page.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Branding and Consistency:
                  </strong>{" "}
                  CSS allows you to enforce consistent branding across your
                  website, from colors and fonts to spacing and element
                  positioning. This builds a strong and recognizable online
                  presence.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Accessibility:
                  </strong>{" "}
                  Proper CSS can improve accessibility for users with
                  disabilities, such as by ensuring good color contrast and
                  logical visual hierarchies.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* How CSS Works with HTML: Three Ways to Style */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                How CSS Works with HTML: Three Ways to Style Your Page ✨
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                There are three primary methods to integrate CSS into your HTML
                documents, each with its own use cases. Let's explore them with
                examples.
              </p>

              {/* Method 1: Inline Styles */}
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                1. Inline Styles
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                <strong className="tw:font-semibold! tw:text-teal-600!">
                  Inline styles
                </strong>{" "}
                are applied directly to individual HTML elements using the
                `style` attribute. While quick for small, one-off changes, they
                are generally discouraged for larger projects as they mix
                presentation with content and are difficult to manage.
              </p>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In this example, the `color` and `text-align` properties are
                applied directly to the {`<h1>`} tag, and `font-size` and
                `color` to the {`<p>`} tag.
              </p>

              {/* Method 2: Internal (Embedded) Styles */}
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                2. Internal (Embedded) Styles
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                <strong className="tw:font-semibold! tw:text-teal-600!">
                  Internal styles
                </strong>{" "}
                are defined within the {`<style>`} tags inside the {`<head>`}{" "}
                section of your HTML document. This method is useful for
                single-page applications or when you want specific styles to
                apply only to that particular HTML page. It keeps the CSS
                separate from the HTML `body`, making it more organized than
                inline styles.
              </p>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Here, the {`<style>`} block contains CSS rules that target `h1`
                and `p` elements globally within this HTML document. We also
                introduce a `class` selector (`.highlight`) which allows you to
                apply styles to multiple elements by assigning them the same
                class name.
              </p>

              {/* Method 3: External Stylesheets */}
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                3. External Stylesheets (The Recommended Method!)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The most common and recommended way to add CSS is by using an{" "}
                <strong className="tw:font-semibold! tw:text-teal-600!">
                  external stylesheet
                </strong>
                . This involves creating a separate `.css` file (e.g.,
                `styles.css`) and linking it to your HTML document using the{" "}
                {`<link>`} tag within the {`<head>`} section.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This method offers the best separation of concerns, making your
                code clean, modular, and easy to maintain across multiple pages.
                Changes in the external CSS file instantly reflect across all
                linked HTML pages.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-bold! tw:mb-2!">
                First, let's look at the content of a typical external CSS file
                (`styles.css`):
              </p>
              <CssBoxHightLight code={section3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:font-bold! tw:mb-2!">
                Now, how we link this CSS file to our HTML document:
              </p>
              <CodeReviewPager code={section4} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                The line {`<link rel="stylesheet" href="styles.css">`} inside
                the {`<head>`} tag is what connects our HTML page to the
                external CSS file. The `rel="stylesheet"` attribute specifies
                that the linked document is a stylesheet, and
                `href="styles.css"` points to the location of our CSS file.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Basic CSS Syntax */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Understanding Basic CSS Syntax 🧩
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                At its core, CSS works with **rulesets**. Each ruleset consists
                of a **selector** and a **declaration block**.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Selector:
                  </strong>{" "}
                  This is the HTML element or elements you want to style (e.g.,
                  `h1`, `p`, `.container`, `#myId`).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Declaration Block:
                  </strong>{" "}
                  This contains one or more declarations, enclosed in curly
                  braces (`{}`).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Declaration:
                  </strong>{" "}
                  Each declaration consists of a **property** and a **value**,
                  separated by a colon (`:`), and terminated by a semicolon
                  (`;`).
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                    <li>
                      <strong className="tw:font-medium!">Property:</strong> The
                      specific visual characteristic you want to change (e.g.,
                      `color`, `font-size`, `background-color`).
                    </li>
                    <li>
                      <strong className="tw:font-medium!">Value:</strong> The
                      setting you want to apply to that property (e.g., `blue`,
                      `16px`, `#f4f4f4`).
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:italic!">
                Example:
                <br />
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-sm!">
                  p &#123; <br />
                  &nbsp;&nbsp;color: #333; <br />
                  &nbsp;&nbsp;font-family: sans-serif; <br />
                  &#125;
                </code>
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                With this understanding of CSS, you're now equipped to bring
                vibrant designs to your web projects! Keep experimenting and
                exploring the vast possibilities of styling.
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
