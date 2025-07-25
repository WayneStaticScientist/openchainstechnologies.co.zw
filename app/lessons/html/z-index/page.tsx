import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
const title = "Z-Index";
const description =
  "Learn about z-index html stacking techniques to show explore , Explore z-indexs " +
  baseUrl +
  " ";
const canonicalUrl = `${baseUrl}/lessons/html/z-index`;
export const metadata = {
  title,
  description,
  keywords:
    "css best practises , z-index , floating , html structure , css designs , responsive web design , styling , modern web design , styles",
  openGraph: {
    title,
    description,
    url: canonicalUrl,
  },
  alternates: {
    canonical: canonicalUrl,
  },
  metadataBase: new URL(baseUrl),
};
// Code Example 1: Z-index Basics
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Z-index Basics</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f7f6;
            color: #333;
            position: relative; /* Needed for positioning context for children */
            height: 400px; /* Just for visual space */
        }

        h2 {
            text-align: center;
            color: #3498db;
            margin-bottom: 20px;
        }

        .container {
            position: relative; /* Establishes a stacking context */
            width: 300px;
            height: 200px;
            border: 2px dashed #999;
            margin: 40px auto;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .box {
            width: 120px;
            height: 120px;
            background-color: #e74c3c;
            border: 2px solid #c0392b;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.1rem;
            position: absolute; /* Z-index only works on positioned elements! */
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .box-1 {
            background-color: #3498db;
            left: 40%;
            top: 40%;
            z-index: 1; /* This box will be above box-2 by default due to z-index */
        }

        .box-2 {
            background-color: #2ecc71;
            left: 60%;
            top: 60%;
            z-index: 2; /* This box will be above box-1 */
        }

        .box-3 {
            background-color: #9b59b6;
            left: 50%;
            top: 50%;
            z-index: 0; /* Default stacking order with no z-index specified */
        }

        .box-relative {
            position: relative; /* Also allows z-index */
            top: -20px; /* Offset to show stacking */
            left: -20px; /* Offset to show stacking */
            background-color: #f39c12;
            z-index: 3; /* Should be on top of all others in this context */
        }

        p.explanation {
            text-align: center;
            max-width: 600px;
            margin: 20px auto;
            font-size: 0.95rem;
            color: #555;
        }
    </style>
</head>
<body>
    <h2>Z-index Basics: Layering Elements</h2>
    <div class="container">
        <div class="box box-1">Box 1 (z-index: 1)</div>
        <div class="box box-2">Box 2 (z-index: 2)</div>
        <div class="box box-3">Box 3 (z-index: 0)</div>
    </div>
    <p class="explanation">
        Notice how Box 2 is on top of Box 1, and Box 1 is on top of Box 3, purely due to their \`z-index\` values. Higher values bring elements forward.
    </p>

    <h2 style="margin-top: 60px;">Z-index with \`position: relative\`</h2>
    <div class="container" style="position: relative; overflow: visible;">
        <div class="box box-1" style="left: 45%; top: 45%; z-index: 1;">Box 1 (z-index: 1)</div>
        <div class="box box-relative" style="left: 55%; top: 55%;">Box Relative (z-index: 3)</div>
    </div>
    <p class="explanation">
        Even with \`position: relative\`, \`z-index\` works. The orange "Box Relative" with \`z-index: 3\` is above "Box 1" with \`z-index: 1\`.
    </p>
</body>
</html>`;

// Code Example 2: Stacking Contexts
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Z-index and Stacking Contexts</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f7f6;
            color: #333;
            text-align: center;
        }

        h2 {
            color: #3498db;
            margin-bottom: 20px;
        }

        .parent-container {
            width: 400px;
            height: 300px;
            border: 3px solid #6c72e2;
            margin: 40px auto;
            background-color: #e0eaff;
            position: relative; /* Parent creates a stacking context */
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
            padding: 20px;
        }

        .child-box {
            width: 150px;
            height: 150px;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.1rem;
            border: 2px solid rgba(0,0,0,0.3);
            border-radius: 5px;
        }

        .red-box {
            background-color: #e74c3c;
            top: 20px;
            left: 20px;
            z-index: 10; /* This z-index is relative to its parent's stacking context */
        }

        .green-box {
            background-color: #2ecc71;
            top: 80px;
            left: 80px;
            z-index: 5; /* This z-index is relative to its parent's stacking context */
        }

        .new-stacking-context-parent {
            position: absolute; /* Creates a NEW stacking context */
            width: 200px;
            height: 200px;
            background-color: rgba(255, 255, 255, 0.7); /* Slightly transparent to see through */
            border: 2px dashed #f39c12;
            top: 100px;
            left: 200px;
            z-index: 1; /* This parent's z-index within its own *parent* (the body's context) */
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .blue-box {
            background-color: #3498db;
            width: 100px;
            height: 100px;
            top: 20px;
            left: 20px;
            z-index: 1000; /* This z-index is only relative to its *new stacking context parent* */
        }

        .purple-box {
            background-color: #9b59b6;
            width: 100px;
            height: 100px;
            top: 50px;
            left: 50px;
            z-index: 20; /* This z-index is only relative to its *new stacking context parent* */
        }

        p.explanation {
            max-width: 600px;
            margin: 20px auto;
            font-size: 0.95rem;
            color: #555;
        }
    </style>
</head>
<body>
    <h2>Z-index and Stacking Contexts</h2>
    <p class="explanation">
        Elements within the same stacking context are ordered by their \`z-index\`. A new stacking context acts like a separate "layer" in the overall document.
    </p>

    <div class="parent-container">
        <h3>Main Container (z-index: auto)</h3>
        <div class="child-box red-box">Red (z-index: 10)</div>
        <div class="child-box green-box">Green (z-index: 5)</div>

        <div class="new-stacking-context-parent">
            <h4>New Stacking Context (z-index: 1)</h4>
            <div class="child-box blue-box">Blue (z-index: 1000)</div>
            <div class="child-box purple-box">Purple (z-index: 20)</div>
        </div>
    </div>
    <p class="explanation">
        Notice how the Blue Box (z-index: 1000) is *not* on top of the Red Box (z-index: 10). This is because Blue and Purple are in a *new stacking context* created by their parent. The new context itself (the dashed orange box) has a lower \`z-index\` (1) than the Red Box (10) in the main context.
    </p>
</body>
</html>`;

// Code Example 3: Common Pitfalls & Debugging
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Z-index Pitfalls</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f7f6;
            color: #333;
            text-align: center;
        }

        h2 {
            color: #3498db;
            margin-bottom: 20px;
        }

        .problem-container {
            width: 400px;
            height: 250px;
            border: 2px dashed #999;
            margin: 40px auto;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: relative; /* Needed for positioning context */
            overflow: hidden; /* This can be a problem! */
        }

        .item {
            width: 150px;
            height: 150px;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1rem;
            border-radius: 5px;
            border: 2px solid rgba(0,0,0,0.3);
        }

        /* Problem 1: Z-index on non-positioned elements */
        .non-positioned-item {
            background-color: #f39c12;
            top: 50px;
            left: 50px;
            /* z-index: 10; <--- This will have NO EFFECT */
            /* Removed position:absolute intentionally for demonstration */
        }
        .positioned-item {
            background-color: #2ecc71;
            top: 80px;
            left: 80px;
            position: absolute;
            z-index: 5;
        }

        /* Problem 2: Overflow hidden */
        .overflow-hidden-parent {
            width: 300px;
            height: 150px;
            border: 2px dashed #e74c3c;
            background-color: #ffe0b2;
            margin: 50px auto;
            position: relative; /* Creates stacking context */
            overflow: hidden; /* Hides content that overflows! */
            box-shadow: none; /* Override container shadow for clarity */
        }
        .overflow-item {
            background-color: #9b59b6;
            width: 120px;
            height: 120px;
            top: 80px; /* This will go outside the parent */
            left: 90px;
            position: absolute;
            z-index: 10;
        }

        p.explanation {
            max-width: 600px;
            margin: 20px auto;
            font-size: 0.95rem;
            color: #555;
        }
        .warning {
            color: #c0392b;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h2>Common Z-index Pitfalls</h2>

    <div class="problem-container">
        <h3>Z-index on non-positioned elements</h3>
        <div class="item non-positioned-item">Non-positioned (No z-index effect)</div>
        <div class="item positioned-item">Positioned (z-index: 5)</div>
    </div>
    <p class="explanation">
        The orange box has no \`position\` property applied, so its \`z-index\` (if you were to add it) would have no effect on its stacking order. The green box, being \`position: absolute\`, responds to \`z-index\`.
    </p>

    <h2 style="margin-top: 60px;">\`overflow: hidden\` and Stacking</h2>
    <div class="overflow-hidden-parent">
        <h3>Parent with \`overflow: hidden\`</h3>
        <div class="item overflow-item">Overflowing Item (z-index: 10)</div>
    </div>
    <p class="explanation">
        Even though the purple box has \`z-index: 10\`, its parent has \`overflow: hidden\`. This clips any content that extends outside the parent's boundaries, regardless of \`z-index\`.
    </p>
    <p class="warning">
        Always check the \`position\` of elements and the \`overflow\` property of parent containers when \`z-index\` isn't behaving as expected!
    </p>
</body>
</html>`;

export default function ZIndexTutorial() {
  const page = 38; // Placeholder page number for chapter navigation
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/3498db/ffffff?text=CSS+Z-index+Stacking"
              alt="CSS Z-index"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Z-index: Mastering Stacking Order 📊
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              `z-index` is a powerful CSS property that controls the vertical
              stacking order of positioned elements. Think of it like layers in
              an image editor – elements with a higher `z-index` appear closer
              to the user, overlapping those with lower values.
            </p>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 1. Z-index Basics */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. Z-index Basics: Bringing Elements Forward
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                At its core, `z-index` is simple: elements with a higher
                `z-index` value are displayed in front of elements with a lower
                `z-index` value. However, there's a crucial condition:
                **`z-index` only works on positioned elements.**
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Key Requirements:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Positioned Elements:
                  </strong>{" "}
                  For `z-index` to have any effect, the element must have a
                  `position` value other than `static` (which is the default).
                  This means `position: relative;`, `position: absolute;`,
                  `position: fixed;`, or `position: sticky;`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Numeric Values:
                  </strong>{" "}
                  `z-index` accepts integer values (e.g., `1`, `100`, `-5`).
                  Higher numbers mean "more in front."
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Default Value:
                  </strong>{" "}
                  The default `z-index` for all elements is `auto`. When
                  `z-index` is `auto` or not specified, elements stack in the
                  order they appear in the HTML (later elements on top).
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:mt-6!">
                Let's see how simple `z-index` values affect overlap:
              </p>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Stacking Contexts */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Understanding Stacking Contexts: The Z-index Hierarchy
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is where `z-index` can get tricky. Elements don't just
                stack globally; they stack within their **stacking context**. A
                stacking context is essentially a localized z-axis layer.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-green-600;">
                How Stacking Contexts are Created:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A new stacking context is typically created by:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!important;">
                    `position` other than `static` + `z-index` other than `auto`
                    (e.g., `position: relative; z-index: 1;`).
                  </strong>{" "}
                  This is the most common way.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!important;">
                    `opacity` less than 1.
                  </strong>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!important;">
                    `transform` property (even `transform: none;` if combined
                    with other properties).
                  </strong>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!important;">
                    `filter` property.
                  </strong>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!important;">
                    `will-change` property (set to a value that would create a
                    stacking context).
                  </strong>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!important;">
                    Flexbox items with `z-index` other than `auto`.
                  </strong>{" "}
                  (The flex container itself can create a context).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!important;">
                    Grid items with `z-index` other than `auto`.
                  </strong>{" "}
                  (The grid container itself can create a context).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!important;">
                    And many other properties...
                  </strong>{" "}
                  (e.g., `clip-path`, `mask`, `perspective`, `mix-blend-mode`,
                  `contain: layout / paint`).
                </li>
              </ul>

              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:mt-6!">
                **Key takeaway:** The `z-index` of an element *only* has meaning
                within its own stacking context. An element's `z-index` cannot
                pull it out of its parent's stacking context to be placed above
                an element in a higher-level context, even if its numerical
                `z-index` is much larger.
              </p>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Common Pitfalls & Debugging */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. Common Pitfalls & Debugging Z-index Issues
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                `z-index` issues can be frustrating, but understanding the
                common culprits can save you a lot of time.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-red-600;">
                Typical Problems:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!important;">
                    `z-index` on non-positioned elements:
                  </strong>{" "}
                  As mentioned, this is the #1 reason `z-index` "doesn't work."
                  Always check `position`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!important;">
                    Unintended Stacking Contexts:
                  </strong>{" "}
                  Properties like `opacity` (less than 1), `transform`,
                  `filter`, etc., can implicitly create new stacking contexts.
                  If a parent creates a context, its children's `z-index` values
                  are evaluated *only within that context*.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!important;">
                    `overflow: hidden;` on Parent:
                  </strong>{" "}
                  If a parent element has `overflow: hidden;` (or `scroll`,
                  `auto`), any content that extends beyond its boundaries will
                  be clipped, regardless of its `z-index`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!important;">
                    Conflicting `z-index` values:
                  </strong>{" "}
                  Using very high `z-index` values (e.g., `9999`) across your
                  entire codebase can lead to "z-index wars," making it hard to
                  manage. Try to keep `z-index` values as low as possible and
                  organize them logically within components.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-red-600;">
                Debugging Tips:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!important;">
                    Use Browser Developer Tools:
                  </strong>{" "}
                  The "Layers" panel (in Chrome DevTools, usually under "More
                  tools" {">"} "Layers") can visually show you the stacking
                  order and identify stacking contexts.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!important;">
                    Simplify:
                  </strong>{" "}
                  Temporarily remove other CSS properties that might create
                  stacking contexts (`opacity`, `transform`, etc.) to isolate
                  the `z-index` issue.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!important;">
                    Inspect Parent Elements:
                  </strong>{" "}
                  Always check the `position` and `z-index` of the direct parent
                  and its ancestors.
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section3} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Master the Z-axis
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                While `z-index` might seem straightforward, the concept of
                **stacking contexts** is key to truly mastering element
                layering. Always remember:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `z-index` only works on{" "}
                    <span className="tw:underline!">positioned</span> elements.
                  </strong>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Elements stack within their own{" "}
                    <span className="tw:underline!">stacking context</span>.
                  </strong>{" "}
                  A `z-index` value in one context doesn't directly compare to a
                  `z-index` value in another context.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Keep `z-index` values organized and as low as possible
                  </strong>{" "}
                  to avoid "z-index wars" and make your CSS more maintainable.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Understanding these principles will empower you to create
                complex and visually appealing layered interfaces with
                confidence.
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
