import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Box Model - OpenChains Technologies",
  description:
    "Learn the CSS Box Model, a fundamental concept in web design. Understand content, padding, border, and margin to create precise layouts.",
  openGraph: {
    type: "website",
    url: `${baseUrl}/lessons/html/box-model`,
    title: "CSS Box Model - OpenChains Technologies",
    description:
      "Learn the CSS Box Model, a fundamental concept in web design. Understand content, padding, border, and margin to create precise layouts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Box Model - OpenChains Technologies",
    description:
      "Learn the CSS Box Model, a fundamental concept in web design. Understand content, padding, border, and margin to create precise layouts.",
  },
  keywords: [
    "CSS Box Model",
    "web design",
    "content",
    "padding",
    "border",
    "margin",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/html/box-model`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Basic Box Model Components (Content, Padding, Border, Margin)
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Box Model</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }

        .box {
            background-color: #e0f2f7; /* Light Cyan */
            color: #263238; /* Dark Grey */
            text-align: center;
            font-size: 1.2em;
            margin-bottom: 30px; /* Space between boxes */
        }

        .content-only {
            width: 200px; /* Explicit width */
            height: 100px; /* Explicit height */
            background-color: #c8e6c9; /* Light Green */
            border: 1px dashed #4caf50; /* Light green border */
            padding: 10px; /* No padding here to focus on content */
        }

        .padded-box {
            width: 200px;
            height: 100px;
            padding: 20px; /* Adds 20px padding on all sides */
            background-color: #ffe0b2; /* Light Orange */
            border: 5px solid #ff9800; /* Orange border */
        }

        .bordered-box {
            width: 200px;
            height: 100px;
            padding: 10px;
            border: 10px solid #f44336; /* Red border, all sides */
            background-color: #ffcdd2; /* Light Red */
        }

        .margined-box {
            width: 200px;
            height: 100px;
            padding: 10px;
            border: 3px solid #673ab7; /* Purple border */
            margin: 40px; /* Adds 40px margin on all sides */
            background-color: #d1c4e9; /* Light Purple */
        }

        .specific-sides {
            width: 200px;
            height: 100px;
            background-color: #bbdefb; /* Light Blue */
            border: 2px solid #2196f3;
            padding-top: 5px;
            padding-right: 10px;
            padding-bottom: 15px;
            padding-left: 20px;
            margin-top: 10px;
            margin-right: 20px;
            margin-bottom: 30px;
            margin-left: 40px;
        }

        .shorthand-box {
            width: 200px;
            height: 100px;
            background-color: #c5cae9; /* Indigo Light */
            /* Padding: top right bottom left */
            padding: 10px 20px 30px 40px;
            /* Margin: top right bottom left */
            margin: 5px 10px 15px 20px;
            border: 5px dashed #3f51b5; /* Indigo */
        }
    </style>
</head>
<body>
    <h1>The CSS Box Model: Core Concepts</h1>

    <p>Every HTML element is a rectangular box. The Box Model describes how its dimensions are calculated.</p>

    <h2>Content Box</h2>
    <div class="box content-only">
        Content Area (200x100px)
    </div>
    <p>This box's visible area is defined solely by its \`width\` and \`height\` properties.</p>

    <h2>Padding Box</h2>
    <div class="box padded-box">
        Padding (20px all sides)
    </div>
    <p>Padding is space between the content and the border. It adds to the total size.</p>

    <h2>Border Box</h2>
    <div class="box bordered-box">
        Border (10px all sides)
    </div>
    <p>The border surrounds the padding (and content). It also adds to the total size.</p>

    <h2>Margin Box</h2>
    <div class="box margined-box">
        Margin (40px all sides)
    </div>
    <p>Margin is the transparent space *outside* the border, separating this box from others. It does NOT add to the element's background or clickable area.</p>

    <h2>Applying to Specific Sides & Shorthands</h2>
    <div class="box specific-sides">
        Specific Sides (Padding & Margin)
    </div>
    <p>You can apply padding/margin to individual sides (e.g., \`padding-top\`) or use shorthand properties.</p>

    <div class="box shorthand-box">
        Shorthand (Padding & Margin)
    </div>
    <p>Shorthands (like \`padding: 10px 20px 30px 40px;\`) allow compact declarations.</p>
</body>
</html>`;

// Code example 2: box-sizing property
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box Sizing</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }

        .container {
            width: 500px;
            margin: 0 auto 30px auto;
            border: 2px dashed #607d8b; /* Blue Grey */
            padding: 10px;
            background-color: #eceff1;
            text-align: center;
        }

        .box {
            float: left; /* To place them side-by-side */
            width: 200px;
            height: 100px;
            padding: 20px;
            border: 5px solid black;
            margin: 10px;
            background-color: #a7d9ee; /* Light blue */
            box-sizing: content-box; /* Default */
            color: #333;
            text-align: center;
            line-height: 100px; /* Vertically center text */
            font-size: 1.1em;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
        }

        .content-box-example {
            box-sizing: content-box; /* Explicitly set to default */
            background-color: #ffe0b2; /* Light orange */
        }

        .border-box-example {
            box-sizing: border-box; /* Crucial for modern layouts */
            background-color: #d4edda; /* Light green */
        }

        .clearfix::after {
            content: "";
            display: table;
            clear: both;
        }
    </style>
</head>
<body>
    <h1>The \`box-sizing\` Property</h1>

    <p>The \`box-sizing\` property controls how an element's total width and height are calculated.</p>

    <div class="container clearfix">
        <h2>\`box-sizing: content-box;\` (Default)</h2>
        <div class="box content-box-example">
            Content Box
            <br>(Width = Content + Padding + Border)
        </div>
        <div class="box content-box-example">
            Width: 200px<br>Padding: 20px<br>Border: 5px<br>
            Total Width: 200 + (2*20) + (2*5) = 250px
        </div>
    </div>

    <div class="container clearfix">
        <h2>\`box-sizing: border-box;\`</h2>
        <div class="box border-box-example">
            Border Box
            <br>(Width = Content - Padding - Border)
        </div>
        <div class="box border-box-example">
            Width: 200px<br>Padding: 20px<br>Border: 5px<br>
            Total Width: 200px (Content adapts)
        </div>
    </div>

    <p style="margin-top: 30px;">
        **Inspect these elements in your browser's developer tools!** You'll clearly see how the actual computed width changes with \`box-sizing\`. Notice how the \`border-box\` elements perfectly align and fit within their container even with padding and borders.
    </p>
</body>
</html>`;

export default function CssBoxModelPage() {
  const page = 20; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E3F2FD/1565C0?text=CSS+Box+Model+Explained"
              alt="CSS Box Model Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              The CSS Box Model: The Foundation of Layout 📦
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Every single HTML element on a webpage, whether it's a heading, a
              paragraph, an image, or a div, is treated by the browser as a
              rectangular box. The **CSS Box Model** is a fundamental concept
              that describes how these boxes are structured and how their
              dimensions are calculated, including content, padding, borders,
              and margins.
            </p>

            {/* Introduction to Box Model */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Understanding the Box Model Components
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The CSS Box Model is composed of four main layers, stacked on
                top of each other, from the innermost to the outermost:
              </p>
              <ol className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Content Box:
                  </strong>
                  This is the innermost area, where your actual content (text,
                  images, video, etc.) resides. Its dimensions are determined by
                  the `width` and `height` properties you set.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Padding Box:
                  </strong>
                  This transparent area surrounds the content. It creates space
                  *between the content and the border*. Padding is controlled by
                  `padding` properties (e.g., `padding-top`, `padding-bottom`,
                  or `padding` shorthand). The background color of the element
                  extends to cover the padding area.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Border Box:
                  </strong>
                  This is the line that goes around the padding and content.
                  It's defined by `border` properties (e.g., `border-width`,
                  `border-style`, `border-color`, or `border` shorthand).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Margin Box:
                  </strong>
                  This transparent area is *outside the border*. It creates
                  space *between the element and other elements* on the page.
                  Margins are controlled by `margin` properties (e.g.,
                  `margin-left`, `margin-right`, or `margin` shorthand). The
                  background color of the element does NOT extend into the
                  margin area.
                </li>
              </ol>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                Understanding these layers is crucial for controlling spacing,
                alignment, and the overall layout of your webpage.
              </p>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Experiment with the first example:**
                <br />
                Open your browser's developer tools (usually F12 or right-click
                -{`>`} Inspect Element). Select one of the boxes and look at the
                "Computed" tab or the Box Model diagram. You'll see a visual
                representation of its content, padding, border, and margin
                values. Try changing the `width`, `padding`, `border`, and
                `margin` values in the CSS to see how the box's overall size and
                position are affected.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. The `box-sizing` Property: The Game Changer */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. The `box-sizing` Property: The Game Changer 📏
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The default behavior of the CSS Box Model (what we just
                described) can sometimes be counter-intuitive. When you set a
                `width` and `height` on an element, its `padding` and `border`
                are *added* to those dimensions, making the element larger than
                its specified `width`/`height`. This can make complex layouts
                difficult to manage, especially when using percentages.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is where the `box-sizing` property comes in. It allows you
                to change how the total width and height of an element are
                calculated.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `box-sizing: content-box;` (Default):
                  </strong>
                  This is the traditional, default behavior. The `width` and
                  `height` properties refer to the content box only. Padding and
                  border are added *on top* of the specified width/height.
                  <br />
                  **Total Width = `width` + `padding` (left + right) + `border`
                  (left + right)**
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `box-sizing: border-box;` (Recommended):
                  </strong>
                  This is the modern, more intuitive behavior. The `width` and
                  `height` properties include padding and border. The content
                  area shrinks to accommodate them. This makes it much easier to
                  size elements accurately.
                  <br />
                  **Total Width = `width` (which now includes padding and
                  border)**
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                It's a common best practice to include a "reset" at the top of
                your CSS to apply `box-sizing: border-box;` globally for all
                elements:
                <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-3! tw:overflow-x-auto!">
                  {`*, *::before, *::after {
  box-sizing: border-box;
}`}
                </pre>
                This ensures consistent and predictable sizing behavior across
                your entire project.
              </p>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Observe the `box-sizing` example carefully:**
                <br />
                Notice how the two `content-box` elements (even though they have
                the same `width`, `padding`, and `border` as the `border-box`
                elements) actually take up more space and potentially overflow
                their container. The `border-box` elements, however, perfectly
                fit because their `width` property already accounts for the
                padding and border. Use developer tools to confirm their
                computed widths!
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Master the Box, Master the Layout
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                The CSS Box Model is the bedrock of web layout. A thorough
                understanding of its components and the `box-sizing` property is
                absolutely essential for creating precise, responsive, and
                predictable designs.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                Spend time experimenting with these concepts in your browser's
                developer tools. Visualizing the boxes will solidify your
                understanding and make future layout challenges much easier to
                solve!
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
