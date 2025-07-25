import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Floats and Clearing",
  description:
    "Learn how to use CSS floats and clearing techniques to control layout and content flow in web design.",
  openGraph: {
    title: "CSS Floats and Clearing",
    description:
      "Learn how to use CSS floats and clearing techniques to control layout and content flow in web design.",
    url: `${baseUrl}/lessons/html/floats-clearing`,
    siteName: "Openchains Technologies",
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/floats-clearing`,
  },
  keywords: [
    "CSS Floats",
    "CSS Clearing",
    "Web Design",
    "Layout Techniques",
    "HTML Lessons",
    "Openchains Technologies",
  ],
  metadataBase: new URL(baseUrl),
};
// Code example 1: Basic Floats
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Floats: Basic Usage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f0f2f5;
            color: #333;
        }

        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
        }

        .section-container {
            border: 2px dashed #999;
            padding: 20px;
            margin-bottom: 40px;
            background-color: #ffffff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            min-height: 150px; /* Ensure some height for containers */
            display: flow-root; /* Modern clearfix alternative for containers with floats */
        }

        .float-box {
            width: 150px;
            height: 100px;
            background-color: #8e44ad; /* Purple */
            color: white;
            text-align: center;
            line-height: 100px;
            font-weight: bold;
            margin: 10px; /* Add some margin */
        }

        .float-left {
            float: left; /* Floats to the left */
            margin-right: 20px; /* Space between box and text */
            background-color: #28a745; /* Green */
        }

        .float-right {
            float: right; /* Floats to the right */
            margin-left: 20px; /* Space between box and text */
            background-color: #3498db; /* Blue */
        }

        .text-content {
            line-height: 1.6;
            margin-bottom: 10px;
        }

    </style>
</head>
<body>
    <h1>CSS Floats: Pushing Elements Aside</h1>

    <div class="section-container">
        <h2>\`float: left;\`</h2>
        <div class="float-box float-left">Float Left</div>
        <p class="text-content">This paragraph contains a block of text that demonstrates the effect of a \`float: left;\` element. The floated box is taken out of the normal document flow and pushed to the left. The text content then wraps around it, filling the space next to the floated element. This is the primary modern use case for floats: text wrapping around images or other small content blocks, similar to how images are positioned in newspaper layouts.</p>
        <p class="text-content">Observe how the text flows around the "Float Left" box. If there were more floated boxes, they would try to sit next to this one, or drop below if no horizontal space remains. Floats essentially "push" other content away.</p>
    </div>

    <div class="section-container">
        <h2>\`float: right;\`</h2>
        <div class="float-box float-right">Float Right</div>
        <p class="text-content">This paragraph shows an element with \`float: right;\`. The floated box is pushed to the right side of its container, and the surrounding text wraps around its left side. This creates a different visual arrangement compared to \`float: left;\`, allowing for flexible content presentation.</p>
        <p class="text-content">The effect is similar to \`float: left;\` but mirrored. The floated element occupies space on one side, and subsequent inline or inline-block content flows into the remaining horizontal space on the other side. This is powerful for specific layout compositions.</p>
    </div>

    <div class="section-container">
        <h2>\`float: none;\` (Default)</h2>
        <div class="float-box">Float None (Default)</div>
        <p class="text-content">This box has \`float: none;\`, which is the default behavior. It means the element will participate in the normal document flow and will not be pushed to the left or right, nor will content wrap around it. It behaves as a standard block-level element, taking up its own line and full width (if not specified).</p>
        <p class="text-content">This is how elements naturally behave without any floating applied. They stack vertically if they are block-level, or sit inline if they are inline-level.</p>
    </div>
</body>
</html>`;

// Code example 2: Clearing Floats
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Clearing Floats</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f0f2f5;
            color: #333;
        }

        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
        }

        .container {
            border: 2px dashed #999;
            padding: 20px;
            margin-bottom: 40px;
            background-color: #ffffff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .float-box {
            width: 150px;
            height: 100px;
            background-color: #f39c12; /* Orange */
            color: white;
            text-align: center;
            line-height: 100px;
            font-weight: bold;
            margin: 10px;
            float: left; /* All these boxes will float left */
        }

        .no-clearfix-container {
            background-color: #ffe0b2; /* Light orange */
        }

        .clearfix-method-1-container {
            background-color: #d4edda; /* Light green */
            overflow: auto; /* Method 1: The 'overflow' clearfix */
        }

        .clearfix-method-2-container {
            background-color: #cce7ff; /* Light blue */
        }

        /* Method 2: The 'clearfix' hack using ::after pseudo-element */
        .clearfix-method-2-container::after {
            content: "";
            display: table; /* Use table display for better cross-browser compatibility */
            clear: both; /* Clears both left and right floats */
        }

        .clear-element {
            /* This element will be forced below any floats */
            background-color: #c0392b; /* Red */
            color: white;
            padding: 15px;
            text-align: center;
            margin-top: 20px;
        }

        .clear-left {
            clear: left; /* Will clear only left floats */
        }

        .clear-right {
            clear: right; /* Will clear only right floats */
        }

        .clear-both {
            clear: both; /* Will clear both left and right floats */
        }

    </style>
</head>
<body>
    <h1>CSS Clearing Floats: Containing & Controlling Layout</h1>
    <p style="text-align: center; margin-bottom: 20px;">
        When elements are floated, they are taken out of the normal document flow. This can cause their parent containers to collapse and subsequent elements to flow incorrectly. Clearing addresses these issues.
    </p>

    <h2>The Problem: Collapsing Parent Container</h2>
    <div class="container no-clearfix-container">
        <h3>Container without Clearfix</h3>
        <div class="float-box">Float Box 1</div>
        <div class="float-box">Float Box 2</div>
        <p>This text is placed after the floated boxes. Notice how the border of the parent container (.no-clearfix-container) doesn't enclose the floated boxes. Floated elements are taken out of the normal flow, so their parent doesn't "see" them to determine its height.</p>
    </div>

    <h2>Solution 1: \`overflow\` Clearfix Hack</h2>
    <div class="container clearfix-method-1-container">
        <h3>Container with \`overflow: auto;\`</h3>
        <div class="float-box">Float Box A</div>
        <div class="float-box">Float Box B</div>
        <p>By setting \`overflow: auto;\` (or \`hidden;\`) on the parent, a new Block Formatting Context (BFC) is created. This BFC will contain its floated children, causing the parent to expand to enclose them. This is a common and simple clearfix method.</p>
    </div>

    <h2>Solution 2: \`::after\` Clearfix Hack</h2>
    <div class="container clearfix-method-2-container">
        <h3>Container with \`::after\` Clearfix</h3>
        <div class="float-box">Float Box X</div>
        <div class="float-box">Float Box Y</div>
        <p>This is a widely used and robust method. A pseudo-element (\`::after\`) is added to the container, and \`clear: both;\` is applied to it. This forces the container to extend below all floats, thus containing them properly. This method doesn't hide overflowing content like \`overflow: hidden;\` might.</p>
    </div>

    <h2>Using \`clear\` Property on Sibling Elements</h2>
    <div class="container">
        <h3>Clearing Specific Sides</h3>
        <div class="float-box">Float Box Left</div>
        <div class="float-box" style="float: right; background-color: #3498db;">Float Box Right</div>
        <div class="clear-element clear-left">This clears \`left\` floats.</div>
        <div class="clear-element clear-right">This clears \`right\` floats.</div>
        <div class="clear-element clear-both">This clears \`both\` floats.</div>
        <p>The \`clear\` property on an element forces it to move below any floated elements to its \`left\`, \`right\`, or \`both\` sides. This is useful when you want a specific element to always appear below all previously floated items, regardless of horizontal space.</p>
    </div>

    <p style="text-align: center; margin-top: 50px; color: #555;">
        While modern layouts prefer Flexbox and Grid, understanding floats and clearing is essential for historical context and specific text-wrapping scenarios.
    </p>
</body>
</html>`;

export default function CssFloatsClearPage() {
  const page = 26; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/F2F5F8/507E9C?text=CSS+Floats+and+Clearing"
              alt="CSS Floats and Clearing Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Floats and Clearing: Understanding Content Flow 🖼️
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              In the early days of CSS, `float` was the primary technique for
              creating multi-column layouts. While largely replaced by Flexbox
              and Grid for main layout structures, `float` still has a valuable
              role in text wrapping, and its counterpart, `clear`, is essential
              for controlling its effects.
            </p>

            {/* 1. What are Floats? */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. What are Floats?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `float` property positions an element to the left or right
                of its containing block, allowing inline content (like text) to
                wrap around it. Think of it like images in a newspaper column.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Characteristics:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Out of Flow:
                  </strong>{" "}
                  When an element is floated, it is taken out of the normal
                  document flow. This means its parent element will no longer
                  "see" it to calculate its height, which can lead to layout
                  issues (more on this with clearing).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Content Wraps:
                  </strong>{" "}
                  Sibling inline content (like text) will flow around the
                  floated element.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Block-like Behavior:
                  </strong>{" "}
                  A floated element automatically becomes a block-level element,
                  meaning `width`, `height`, `padding`, and `margin` are fully
                  respected, regardless of its original `display` type.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Values:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `left`
                  </strong>
                  : Floats the element to the left.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `right`
                  </strong>
                  : Floats the element to the right.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `none` (Default)
                  </strong>
                  : The element does not float, and its position is determined
                  by the normal flow.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Modern Use Case:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Today, the most common and appropriate use of `float` is to make
                text wrap around images, as seen in magazines or news articles.
                For complex grid-based layouts, **Flexbox** and **CSS Grid** are
                the preferred and more robust solutions.
              </p>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. The Problem with Floats: Collapsing Parents */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. The Problem with Floats: Collapsing Parents
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Because floated elements are taken out of the normal document
                flow, their parent container often "collapses" (its height is
                calculated as if the floated children don't exist). This can
                lead to:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Overlapping Content:
                  </strong>{" "}
                  Content after the parent might flow incorrectly, appearing
                  "under" the floats.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Background/Border Issues:
                  </strong>{" "}
                  The parent's background or border might not extend to enclose
                  the floated children.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is where **clearing** comes in.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Clearing Floats with `clear` */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. Clearing Floats with `clear`
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `clear` property on an element indicates that no floated
                elements are allowed on its specified side(s). This effectively
                pushes the element down below any preceding floats.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Values:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `left`
                  </strong>
                  : Forces the element to move below any preceding `float:
                  left;` elements.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `right`
                  </strong>
                  : Forces the element to move below any preceding `float:
                  right;` elements.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `both`
                  </strong>
                  : Forces the element to move below any preceding floats on
                  either the left or right side. This is the most common value.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `none` (Default)
                  </strong>
                  : Allows floats on either side.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                The Clearfix Hack (Common Solutions):
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                To make a parent container enclose its floated children, we use
                "clearfix" methods. These typically involve applying a `clear`
                property to something *inside* or *after* the floats, which then
                forces the parent to expand.
              </p>
              <h4 className="tw:text-lg! tw:font-semibold! tw:text-gray-700! tw:mb-2! tw:mt-4!">
                Method 1: `overflow: auto;` or `overflow: hidden;` on the Parent
              </h4>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:space-y-1! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  By setting `overflow: auto;` (or `hidden;`) on the **parent
                  container** of the floats, you establish a new{" "}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw:text-blue-600! tw:underline!"
                  >
                    Block Formatting Context (BFC)
                  </a>
                  .
                </li>
                <li className="tw:leading-relaxed!">
                  A BFC will contain all its floated children, thus preventing
                  the parent from collapsing.
                </li>
                <li className="tw:leading-relaxed!">
                  **Pros:** Simple, clean code.
                </li>
                <li className="tw:leading-relaxed!">
                  **Cons:** `overflow: hidden;` can unexpectedly clip content
                  that truly overflows, and `overflow: auto;` might introduce
                  unwanted scrollbars.
                </li>
              </ul>
              <h4 className="tw:text-lg! tw:font-semibold! tw:text-gray-700! tw:mb-2! tw:mt-4!">
                Method 2: The `::after` Pseudo-element Clearfix
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is arguably the most common and robust modern clearfix
                method:
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                .parent-container::after{" "}
                {`{
    content: "";
    display: table; /* Ensures it acts like a block and clears properly */
    clear: both;
}`}
              </pre>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:space-y-1! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  A pseudo-element is added after the floated content *inside*
                  the parent.
                </li>
                <li className="tw:leading-relaxed!">
                  <code className="tw:font-mono! tw:bg-gray-200! tw:px-1! tw:rounded!">
                    display: table;
                  </code>{" "}
                  makes it behave like a table cell, and `clear: both;` forces
                  it below all floats within the parent, effectively expanding
                  the parent.
                </li>
                <li className="tw:leading-relaxed!">
                  **Pros:** Very reliable, doesn't hide overflowing content,
                  widely supported.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Modern Alternative: `display: flow-root;`
                  </strong>{" "}
                  You might also see `display: flow-root;` on the parent. This
                  is a newer, simpler way to create a BFC and contain floats
                  without resorting to pseudo-elements or potentially
                  problematic `overflow` values. It's the most straightforward
                  "clearfix" if browser support isn't a concern for very old
                  browsers.
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Historical Context and Specific Use
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                While `float` was historically crucial for complex layouts, its
                primary role today is for simpler tasks like wrapping text
                around images. When you do use `float`, remember that you'll
                almost certainly need to apply a **clearfix** method to the
                parent container to prevent it from collapsing and ensure proper
                layout.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                For any multi-column or grid-based layout needs, always reach
                for **Flexbox** or **CSS Grid** first. They are specifically
                designed for these complex tasks and are much more robust,
                predictable, and easier to manage, especially in responsive
                designs.
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
