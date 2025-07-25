import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Display Property: Understanding Element Flow",
  description:
    "Learn how the CSS display property controls element layout, flow, and visibility. Master block, inline, inline-block, and none to create structured web pages.",
  keywords: [
    "CSS display property",
    "block elements",
    "inline elements",
    "inline-block elements",
    "display none",
    "visibility hidden",
    "CSS layout",
    "web design",
    "web development",
    "HTML and CSS",
    "Openchains",
  ],
  openGraph: {
    title: "CSS Display Property: Understanding Element Flow",
    description:
      "Learn how the CSS display property controls element layout, flow, and visibility. Master block, inline, inline-block, and none to create structured web pages.",
    url: "https://openchains.org/lessons/html/display-property",
    siteName: "Openchains",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Display Property: Understanding Element Flow",
    description:
      "Learn how the CSS display property controls element layout, flow, and visibility. Master block, inline, inline-block, and none to create structured web pages.",
    creator: "@openchainsorg",
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/display-property`,
  },
  metadataBase: new URL(baseUrl),
};
// Code example 1: Block, Inline, Inline-Block
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Display Property Basics</title>
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
            border: 2px dashed #ccc;
            padding: 15px;
            margin-bottom: 30px;
            background-color: #ffffff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            text-align: center; /* For centering inline/inline-block blocks */
        }

        .item {
            padding: 10px;
            margin: 8px; /* Added margin for better visual separation */
            border: 1px solid #ddd;
            text-align: center;
            font-weight: bold;
            color: #444;
            background-color: #e6f7ff; /* Light blue default */
        }

        /* --- display: block --- */
        .block-example .item {
            display: block; /* Explicitly set to block */
            width: 150px; /* Width is respected */
            height: 60px; /* Height is respected */
            background-color: #cce7ff; /* Lighter blue */
            border-color: #007bff;
            margin: 10px auto; /* Auto horizontal margin centers block elements */
        }
        .block-example p {
            background-color: #d4edda;
            border: 1px solid #28a745;
            padding: 5px;
            margin: 10px 0;
        }


        /* --- display: inline --- */
        .inline-example .item {
            display: inline; /* Explicitly set to inline */
            /* width and height will be ignored for inline elements */
            /* vertical margin/padding will NOT affect surrounding elements' layout */
            background-color: #fff3e0; /* Light orange */
            border-color: #ff9800;
            padding: 5px 15px; /* Horizontal padding works */
            margin: 0 10px; /* Horizontal margin works, vertical does not push other lines */
        }
        .inline-example p {
             background-color: #ffe0b2;
             border: 1px solid #FF5722;
             padding: 5px;
             margin: 10px 0;
        }


        /* --- display: inline-block --- */
        .inline-block-example .item {
            display: inline-block; /* Hybrid behavior */
            width: 120px; /* Width is respected */
            height: 80px; /* Height is respected */
            background-color: #e0d9fa; /* Light purple */
            border-color: #8e44ad;
            margin: 10px; /* All margins are respected */
            vertical-align: top; /* Important for baseline alignment issues with inline-block */
        }
        .inline-block-example p {
            background-color: #d7bde2;
            border: 1px solid #8e44ad;
            padding: 5px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>Understanding the CSS \`display\` Property</h1>

    <div class="section-container block-example">
        <h2>\`display: block;\`</h2>
        <p>Block-level elements always start on a new line and take up the full width available. They stack vertically.</p>
        <div class="item">Block Item 1</div>
        <div class="item">Block Item 2</div>
        <p>Notice how each div (which we explicitly set to \`display: block;\`) forces the next one to start on a new line, and how they fill the available horizontal space by default unless a \`width\` is specified. Margins and padding apply to all sides.</p>
    </div>

    <div class="section-container inline-example">
        <h2>\`display: inline;\`</h2>
        <p>Inline elements only take up as much width as necessary for their content. They do NOT start on a new line, allowing other inline elements to sit next to them.</p>
        <span class="item">Inline Item A</span>
        <span class="item">Inline Item B</span>
        <span class="item">Inline Item C with more text</span>
        <p>Notice that \`width\` and \`height\` properties had no effect on these \`span\` elements (which we explicitly set to \`display: inline;\`). Also, vertical padding and margin will push content *around* them, but won't affect the line height for surrounding text.</p>
    </div>

    <div class="section-container inline-block-example">
        <h2>\`display: inline-block;\`</h2>
        <p>Inline-block elements are a hybrid: they allow elements to sit side-by-side (like inline), but you can control their width, height, and all margins/padding (like block).</p>
        <div class="item">Inline-Block 1</div>
        <div class="item">Inline-Block 2</div>
        <div class="item">Inline-Block 3</div>
        <p>These divs are set to \`display: inline-block;\`. They are next to each other, but we successfully applied \`width\`, \`height\`, and all \`margin\` values, which would not work for pure \`inline\` elements.</p>
    </div>

</body>
</html>`;

// Code example 2: Display None vs Visibility Hidden
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display None vs Visibility Hidden</title>
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

        .box-container {
            display: flex; /* Using flex to show side-by-side easily */
            justify-content: center;
            align-items: flex-start;
            border: 2px dashed #999;
            padding: 20px;
            margin-bottom: 30px;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .visible-box, .hidden-box, .none-box {
            width: 150px;
            height: 100px;
            margin: 15px;
            padding: 10px;
            border: 2px solid #3498db;
            background-color: #a2d2ff;
            color: #333;
            text-align: center;
            line-height: 100px; /* Center text vertically */
            font-weight: bold;
            font-size: 1.1em;
        }

        /* --- display: none --- */
        .none-box {
            display: none; /* Completely removes element from flow */
            background-color: #ffcccc; /* This color won't be seen */
        }

        /* --- visibility: hidden --- */
        .hidden-box {
            visibility: hidden; /* Hides content but element still occupies space */
            background-color: #ffe0b2;
            border-color: #e67e22;
        }
    </style>
</head>
<body>
    <h1>\`display: none;\` vs. \`visibility: hidden;\`</h1>
    <p style="text-align: center; margin-bottom: 20px;">
        These two properties both hide an element, but they do so in fundamentally different ways, affecting the page layout.
    </p>

    <div class="box-container">
        <div class="visible-box">Visible Box</div>
        <div class="hidden-box">Visibility Hidden Box</div>
        <div class="none-box">Display None Box</div>
        <div class="visible-box">Another Visible Box</div>
    </div>

    <p style="text-align: center; margin-top: 50px; color: #555;">
        Notice how the "Visibility Hidden Box" still occupies its space, whereas the "Display None Box" is completely gone, and the surrounding elements collapse to fill its former space.
    </p>
</body>
</html>`;

export default function CssDisplayPropertyPage() {
  const page = 24; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/D7E6EE/1F6A8F?text=CSS+Display+Property"
              alt="CSS Display Property Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              The CSS `display` Property: Mastering Element Flow 🌊
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              The `display` property is perhaps the most fundamental CSS
              property for controlling layout. It defines the rendering box type
              of an element, determining how it behaves in the normal document
              flow and how it interacts with its neighbors. Mastering `display`
              is crucial for creating well-structured and predictable web pages.
            </p>

            {/* 1. What is the `display` property? */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. What is the `display` Property?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                In CSS, every HTML element is treated as a box. The `display`
                property determines how this box behaves and whether it's laid
                out as a block, inline, or something else. This directly
                impacts:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    How much space it takes up:
                  </strong>{" "}
                  Does it take the full width available, or just enough for its
                  content?
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Its vertical vs. horizontal flow:
                  </strong>{" "}
                  Does it force new lines, or does it sit alongside other
                  elements?
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    How other CSS properties behave:
                  </strong>{" "}
                  Properties like `width`, `height`, `margin`, `padding` might
                  behave differently depending on the `display` type.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. `display: block;` */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. `display: block;`
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Block-level elements are the workhorses of web page structure.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Characteristics:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  Always starts on a **new line**.
                </li>
                <li className="tw:leading-relaxed!">
                  Takes up the **full width** available to it by default
                  (stretches horizontally).
                </li>
                <li className="tw:leading-relaxed!">
                  **Respects** `width`, `height`, `padding`, and `margin` on all
                  four sides.
                </li>
                <li className="tw:leading-relaxed!">
                  Can contain other block-level elements and inline elements.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Common HTML Elements (Block by Default):
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                {`<div>`}, {`<p>`}, {`<h1>`} to {`<h6>`}, {`<ul>`}, {`<ol>`},{" "}
                {`<li>`}, {`<form>`}, {`<header>`}, {`<footer>`}, {`<section>`},{" "}
                {`<article>`}, {`<aside>`}, {`<nav>`}, etc.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. `display: inline;` */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. `display: inline;`
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Inline-level elements are typically used for smaller pieces of
                content within a line of text.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Characteristics:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  Does **NOT** start on a new line; it sits on the same line as
                  surrounding content.
                </li>
                <li className="tw:leading-relaxed!">
                  Only takes up as much `width` as its **content requires**.
                </li>
                <li className="tw:leading-relaxed!">
                  **Ignores** `width` and `height` properties.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:text-red-600!">
                    Vertical `margin` and `padding` are applied but will NOT
                    affect the layout of surrounding elements.
                  </strong>{" "}
                  Horizontal `margin` and `padding` are respected.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Common HTML Elements (Inline by Default):
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                {`<span>`}, {`<a>`}, {`<strong>`}, {`<em>`}, {`<img>`},{" "}
                {`<input>`}, {`<label>`}, {`<button>`}, {`<br>`}, etc.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 4. `display: inline-block;` */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                4. `display: inline-block;`
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is a fantastic hybrid display type that combines the best
                of `inline` and `block`.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Characteristics:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  Behaves like an `inline` element externally: it **does NOT
                  force a new line**, allowing other elements to sit next to it.
                </li>
                <li className="tw:leading-relaxed!">
                  Behaves like a `block` element internally: it **respects**
                  `width`, `height`, and `padding`/`margin` on all four sides.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                When to use it:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  For navigation items you want side-by-side with
                  padding/margin.
                </li>
                <li className="tw:leading-relaxed!">
                  For simple grid-like layouts (though Flexbox and Grid are
                  generally preferred for complex grids).
                </li>
                <li className="tw:leading-relaxed!">
                  When you need an `inline` element to have a defined `width` or
                  `height`.
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 5. `display: none;` */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                5. `display: none;`
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This value is used to completely hide an element from the page.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Characteristics:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  The element is **completely removed** from the document flow.
                </li>
                <li className="tw:leading-relaxed!">
                  It takes up **no space** on the page.
                </li>
                <li className="tw:leading-relaxed!">
                  It's not rendered, and its children are also not rendered.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `display: none;` vs. `visibility: hidden;`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                It's important to distinguish `display: none;` from `visibility:
                hidden;`.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `display: none;`
                  </strong>
                  : The element is gone. It doesn't affect the layout of other
                  elements. (Think of it as the element never existed).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `visibility: hidden;`
                  </strong>
                  : The element is hidden, but it still occupies its space in
                  the document flow. Other elements behave as if it's still
                  there. (Think of it as an invisible box).
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                When to use `display: none;`:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  For content that should be dynamically shown or hidden (e.g.,
                  a modal dialog that pops up, a dropdown menu).
                </li>
                <li className="tw:leading-relaxed!">
                  When you want an element to truly have no impact on the layout
                  when hidden.
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 6. Modern `display` Values */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                6. Modern `display` Values (Briefly)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Beyond the basics, modern CSS has introduced powerful `display`
                values that enable sophisticated layout techniques:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `display: flex;`
                  </strong>
                  : Transforms an element into a Flex Container, enabling
                  one-dimensional alignment and distribution of its direct
                  children (Flex Items). This is explained in detail in our{" "}
                  <a
                    href="/css/layout-techniques"
                    className="tw:text-blue-600! tw:underline!"
                  >
                    CSS Layout Techniques
                  </a>{" "}
                  lesson.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `display: grid;`
                  </strong>
                  : Transforms an element into a Grid Container, allowing for
                  two-dimensional layout (rows and columns). Also covered in our{" "}
                  <a
                    href="/css/layout-techniques"
                    className="tw:text-blue-600! tw:underline!"
                  >
                    CSS Layout Techniques
                  </a>{" "}
                  lesson.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `display: contents;`
                  </strong>
                  : Makes the container box itself disappear, but its children
                  appear as if they were direct children of the container's
                  parent. Useful for semantic HTML without breaking layout flow
                  (e.g., making a `div` act as if it's not there for a grid).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `display: table;`, `display: table-cell;`
                  </strong>
                  : Mimic the behavior of HTML table elements. While once used
                  for layout (before Flexbox/Grid), they are now mostly used
                  when truly semantically displaying tabular data.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: The Foundation of CSS Layout
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                The `display` property is the bedrock of CSS layout. By
                understanding `block`, `inline`, `inline-block`, and `none`, you
                gain significant control over how elements appear and interact
                on your web page.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Always consider the default `display` value of an HTML element
                and choose the `display` property wisely based on whether you
                need it to take up full width, sit inline, or combine both
                behaviors. For advanced layouts, embrace `display: flex;` and
                `display: grid;` for their power and flexibility.
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
