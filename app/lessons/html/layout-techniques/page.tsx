import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Layout Techniques",
  description:
    "Learn essential CSS layout techniques including the box model, display properties, positioning, Flexbox, and Grid.",
  openGraph: {
    title: "CSS Layout Techniques",
    description:
      "Learn essential CSS layout techniques including the box model, display properties, positioning, Flexbox, and Grid.",
    url: `${baseUrl}/lessons/html/layout-techniques`,
    siteName: "Openchains Technologies",
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/layout-techniques`,
  },
  keyword: [
    "CSS Layout Techniques",
    "Box Model",
    "Display Properties",
    "Positioning",
    "Flexbox",
    "Grid Layout",
    "Responsive Design",
    "Web Development",
    "HTML and CSS",
    "Web Design Principles",
  ],
  metadataBase: new URL(baseUrl),
};
// Code example 1: Basic Display & Position Properties
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Layout Properties</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f8f8f8;
            color: #333;
            min-height: 1200px; /* To enable scrolling for fixed/sticky */
        }

        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
        }

        .container {
            border: 1px dashed #ccc;
            padding: 15px;
            margin-bottom: 30px;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .item {
            padding: 10px;
            margin: 5px;
            background-color: #e0f2f7;
            border: 1px solid #a7d9eb;
            text-align: center;
        }

        /* --- Display Properties --- */
        .display-inline-block .item {
            display: inline-block; /* Allows side-by-side with width/height */
            width: 100px;
            height: 50px;
            background-color: #d4edda;
            border-color: #28a745;
        }

        .display-block .item {
            display: block; /* Takes full width, forces new line */
            width: 120px; /* Width is respected */
            background-color: #ffe0b2;
            border-color: #ff9800;
        }

        .display-inline .item {
            display: inline; /* Only takes content width, ignores width/height */
            padding: 5px; /* Padding works */
            margin: 5px 10px; /* Horizontal margin works, vertical doesn't push */
            background-color: #e6e6fa;
            border-color: #9370db;
        }

        /* --- Position Properties --- */
        .position-relative-container {
            position: relative; /* Establishes a positioning context for children */
            height: 200px;
            background-color: #fbecec;
            border: 2px dashed #e74c3c;
            overflow: hidden; /* To see absolute element clipped if it goes outside */
        }

        .position-absolute-item {
            position: absolute; /* Positions relative to nearest positioned ancestor */
            top: 20px;
            left: 50px;
            background-color: #2ecc71;
            color: white;
            padding: 10px;
            border-radius: 5px;
            z-index: 10; /* Controls stacking order */
        }

        .position-fixed-item {
            position: fixed; /* Positions relative to the viewport */
            top: 10px;
            right: 10px;
            background-color: #3498db;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            z-index: 100;
        }

        .position-sticky-item {
            position: sticky; /* Sticks at a certain point when scrolling */
            top: 0; /* Sticks when its top edge touches the viewport's top */
            background-color: #f1c40f;
            color: #333;
            padding: 15px;
            border-bottom: 2px solid #e67e22;
            text-align: center;
            font-weight: bold;
            z-index: 50;
            margin-top: 50px; /* Space to scroll before it sticks */
        }

        /* --- Float & Clear --- */
        .float-container {
            overflow: auto; /* Clearfix hack for floats */
            background-color: #f5f5f5;
            padding: 15px;
            border: 1px solid #ccc;
            margin-bottom: 20px;
        }

        .floated-image {
            float: left; /* Floats to the left, text wraps around */
            margin-right: 15px;
            margin-bottom: 10px;
            width: 100px;
            height: 100px;
            background-color: #9b59b6;
            color: white;
            line-height: 100px;
            text-align: center;
            font-size: 0.9em;
        }

        .clear-both-div {
            clear: both; /* Prevents element from floating next to previous floats */
            background-color: #a2d2ff;
            padding: 10px;
            margin-top: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Basic CSS Layout Properties</h1>

    <h2>Display Property</h2>
    <h3>Display: inline-block</h3>
    <div class="container display-inline-block">
        <div class="item">Item 1</div><div class="item">Item 2</div><div class="item">Item 3</div>
    </div>

    <h3>Display: block</h3>
    <div class="container display-block">
        <div class="item">Item A</div>
        <div class="item">Item B</div>
    </div>

    <h3>Display: inline</h3>
    <div class="container display-inline">
        <span class="item">Item X</span>
        <span class="item">Item Y</span>
        <span class="item">Item Z</span>
    </div>

    <h2>Position Property</h2>
    <h3>Position: static (default)</h3>
    <div class="container">
        <div class="item">Static Item (default positioning)</div>
    </div>

    <h3>Position: relative & absolute</h3>
    <div class="position-relative-container">
        <div class="item">Relative Container</div>
        <div class="position-absolute-item">Absolute Item (relative to parent)</div>
    </div>

    <h3>Position: fixed (Scroll to see effect)</h3>
    <div class="position-fixed-item">Fixed Item</div>
    <p>Scroll down to see the fixed item stay in place.</p>
    <p>Lots of content here to enable scrolling...</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur, exercitationem magni doloremque, dolor eligendi, architecto deleniti assumenda natus officiis cumque. Inventore non sapiente dolorum quos ut, consectetur aperiam error.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur, exercitationem magni doloremque, dolor eligendi, architecto deleniti assumenda natus officiis cumque. Inventore non sapiente dolorum quos ut, consectetur aperiam error.</p>

    <h3>Position: sticky (Scroll to see effect)</h3>
    <div class="position-sticky-item">Sticky Header (sticks at top: 0)</div>
    <p>More content to demonstrate sticky behavior...</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur, exercitationem magni doloremque, dolor eligendi, architecto deleniti assumenda natus officiis cumque. Inventore non sapiente dolorum quos ut, consectetur aperiam error.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur, exercitationem magni doloremque, dolor eligendi, architecto deleniti assumenda natus officiis cumque. Inventore non sapiente dolorum quos ut, consectetur aperiam error.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur, exercitationem magni doloremque, dolor eligendi, architecto deleniti assumenda natus officiis cumque. Inventore non sapiente dolorum quos ut, consectetur aperiam error.</p>

    <h2>Floats & Clear (Older Layout Method - primarily for text wrapping now)</h2>
    <div class="float-container">
        <div class="floated-image">Floated Image</div>
        <p>This paragraph contains text that will wrap around the floated image. Floats were historically used for entire page layouts, but they often led to complex "clearfix" issues and unpredictable behavior, especially with responsive designs. Modern CSS layout methods like Flexbox and Grid are far superior for structuring complex page layouts. However, floats remain useful for their original purpose: making text flow around images or other small content blocks.</p>
    </div>
    <div class="clear-both-div">This div uses \`clear: both;\` to ensure it appears below any floated elements.</div>

    <p style="text-align: center; margin-top: 50px; color: #555;">
        These basic properties are foundational, but for complex layouts, Flexbox and Grid are preferred.
    </p>
</body>
</html>`;

// Code example 2: Flexbox Layout
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Flexbox Layout</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f8f8f8;
            color: #333;
        }

        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
        }

        .flex-container {
            display: flex; /* Makes it a flex container */
            border: 2px solid #3498db;
            padding: 10px;
            margin-bottom: 30px;
            min-height: 150px;
            background-color: #ecf0f1;
        }

        .flex-item {
            background-color: #9b59b6;
            color: white;
            padding: 20px;
            margin: 5px;
            text-align: center;
            font-weight: bold;
        }

        /* --- Flex Container Properties --- */

        /* flex-direction */
        .flex-row {
            flex-direction: row; /* Default: items laid out in a row */
        }
        .flex-column {
            flex-direction: column; /* Items laid out in a column */
        }
        .flex-row-reverse {
            flex-direction: row-reverse; /* Items in a row, but in reverse order */
        }

        /* justify-content (alignment along the main axis) */
        .justify-start { justify-content: flex-start; /* Default */ }
        .justify-end { justify-content: flex-end; }
        .justify-center { justify-content: center; }
        .justify-space-between { justify-content: space-between; }
        .justify-space-around { justify-content: space-around; }
        .justify-space-evenly { justify-content: space-evenly; }

        /* align-items (alignment along the cross axis) */
        .align-start { align-items: flex-start; }
        .align-end { align-items: flex-end; }
        .align-center { align-items: center; }
        .align-stretch { align-items: stretch; /* Default, fills container if no height set */ }
        .align-baseline { align-items: baseline; }

        /* flex-wrap */
        .flex-wrap {
            flex-wrap: wrap; /* Allows items to wrap to next line */
            height: auto; /* Allow height to adjust */
        }
        .flex-nowrap {
            flex-wrap: nowrap; /* Default: forces all items onto one line */
            overflow-x: auto; /* Add scroll if items overflow */
        }

        /* --- Flex Item Properties --- */

        /* flex (flex-grow, flex-shrink, flex-basis) */
        .flex-item-grow-1 { flex-grow: 1; } /* Item grows to take available space */
        .flex-item-shrink-0 { flex-shrink: 0; } /* Item won't shrink below its content size */
        .flex-item-basis-150px { flex-basis: 150px; } /* Initial size */

        .flex-item-order-1 { order: 1; background-color: #27ae60; }
        .flex-item-order-2 { order: 2; background-color: #f39c12; }
        .flex-item-order-neg1 { order: -1; background-color: #e74c3c; } /* Appears first */

        /* align-self (overrides align-items for individual item) */
        .flex-item-align-self-end { align-self: flex-end; background-color: #1abc9c; }
        .flex-item-align-self-center { align-self: center; background-color: #34495e; }
    </style>
</head>
<body>
    <h1>CSS Flexbox Layout: One-Dimensional Control</h1>
    <p>Flexbox is ideal for aligning items in a single row or column. It's great for navigation bars, card layouts, and distributing space.</p>

    <h2>Flex Container Properties</h2>

    <h3>flex-direction: row (default)</h3>
    <div class="flex-container flex-row">
        <div class="flex-item">1</div><div class="flex-item">2</div><div class="flex-item">3</div>
    </div>

    <h3>flex-direction: column</h3>
    <div class="flex-container flex-column">
        <div class="flex-item">A</div><div class="flex-item">B</div><div class="flex-item">C</div>
    </div>

    <h3>justify-content: center</h3>
    <div class="flex-container justify-center">
        <div class="flex-item">1</div><div class="flex-item">2</div><div class="flex-item">3</div>
    </div>

    <h3>justify-content: space-between</h3>
    <div class="flex-container justify-space-between">
        <div class="flex-item">1</div><div class="flex-item">2</div><div class="flex-item">3</div>
    </div>

    <h3>align-items: center</h3>
    <div class="flex-container align-center" style="height: 180px;">
        <div class="flex-item">Tall Item</div><div class="flex-item">Short</div><div class="flex-item">Medium Item</div>
    </div>

    <h3>flex-wrap: wrap</h3>
    <div class="flex-container flex-wrap" style="width: 300px;">
        <div class="flex-item">1</div><div class="flex-item">2</div><div class="flex-item">3</div><div class="flex-item">4</div><div class="flex-item">5</div><div class="flex-item">6</div>
    </div>

    <h2>Flex Item Properties</h2>

    <h3>flex-grow (item takes available space)</h3>
    <div class="flex-container">
        <div class="flex-item">Fixed</div>
        <div class="flex-item flex-item-grow-1">Grow 1</div>
        <div class="flex-item">Fixed</div>
    </div>

    <h3>order (rearranges visual order)</h3>
    <div class="flex-container">
        <div class="flex-item flex-item-order-2">Item 1 (Order 2)</div>
        <div class="flex-item flex-item-order-1">Item 2 (Order 1)</div>
        <div class="flex-item flex-item-order-neg1">Item 3 (Order -1)</div>
    </div>

    <h3>align-self (individual cross-axis alignment)</h3>
    <div class="flex-container align-items-start" style="height: 200px;">
        <div class="flex-item">Default Start</div>
        <div class="flex-item flex-item-align-self-end">Align Self End</div>
        <div class="flex-item flex-item-align-self-center">Align Self Center</div>
    </div>

    <p style="text-align: center; margin-top: 50px; color: #555;">
        Flexbox is incredibly powerful for distributing space and aligning content along a single axis.
    </p>
</body>
</html>`;

// Code example 3: CSS Grid Layout
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid Layout</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f8f8f8;
            color: #333;
        }

        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
        }

        .grid-container {
            display: grid; /* Makes it a grid container */
            border: 2px solid #28a745;
            padding: 10px;
            margin-bottom: 30px;
            background-color: #e6faed;
            gap: 10px; /* Space between grid items */
        }

        .grid-item {
            background-color: #2ecc71;
            color: white;
            padding: 20px;
            text-align: center;
            font-weight: bold;
            border-radius: 5px;
        }

        /* --- Grid Container Properties --- */

        /* grid-template-columns & grid-template-rows */
        .grid-basic-columns {
            grid-template-columns: 100px 1fr 200px; /* Fixed, flexible, fixed */
            grid-template-rows: auto auto; /* Rows adapt to content */
        }
        .grid-repeat-columns {
            grid-template-columns: repeat(3, 1fr); /* Three equal columns */
        }
        .grid-minmax-columns {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Responsive columns */
        }
        .grid-template-areas-example {
            grid-template-columns: 1fr 3fr 1fr;
            grid-template-rows: auto 1fr auto;
            grid-template-areas:
                "header header header"
                "nav    main   aside"
                "footer footer footer";
        }
        .grid-area-header { grid-area: header; background-color: #34495e; }
        .grid-area-nav { grid-area: nav; background-color: #1abc9c; }
        .grid-area-main { grid-area: main; background-color: #3498db; }
        .grid-area-aside { grid-area: aside; background-color: #9b59b6; }
        .grid-area-footer { grid-area: footer; background-color: #c0392b; }

        /* gap */
        .grid-gap-example {
            grid-template-columns: 1fr 1fr;
            gap: 20px; /* Gaps between rows and columns */
        }
        .grid-row-column-gap {
            grid-template-columns: 1fr 1fr;
            row-gap: 5px;
            column-gap: 25px;
        }

        /* --- Grid Item Properties --- */

        /* grid-column & grid-row */
        .grid-item-span-2-columns {
            grid-column: span 2; /* Item spans 2 columns */
            background-color: #f1c40f;
        }
        .grid-item-span-2-rows {
            grid-row: span 2; /* Item spans 2 rows */
            background-color: #e67e22;
        }
        .grid-item-start-col-2 {
            grid-column-start: 2; /* Starts at column line 2 */
            grid-column-end: 4; /* Ends at column line 4 */
            background-color: #c0392b;
        }
        .grid-item-start-row-1 {
            grid-row-start: 1;
            grid-row-end: 3;
            background-color: #8e44ad;
        }
    </style>
</head>
<body>
    <h1>CSS Grid Layout: Two-Dimensional Power</h1>
    <p>CSS Grid is perfect for complex, two-dimensional page layouts, defining both rows and columns at once.</p>

    <h2>Grid Container Properties</h2>

    <h3>Basic Columns & Rows (Fixed, Flexible)</h3>
    <div class="grid-container grid-basic-columns">
        <div class="grid-item">100px</div>
        <div class="grid-item">1fr</div>
        <div class="grid-item">200px</div>
        <div class="grid-item">Item 4</div>
        <div class="grid-item">Item 5</div>
        <div class="grid-item">Item 6</div>
    </div>

    <h3>Repeat & \`fr\` Unit (Equal Columns)</h3>
    <div class="grid-container grid-repeat-columns">
        <div class="grid-item">1fr</div>
        <div class="grid-item">1fr</div>
        <div class="grid-item">1fr</div>
        <div class="grid-item">Item 4</div>
        <div class="grid-item">Item 5</div>
        <div class="grid-item">Item 6</div>
    </div>

    <h3>\`minmax\` & \`auto-fit\` (Responsive Grid)</h3>
    <div class="grid-container grid-minmax-columns">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
        <div class="grid-item">Item 4</div>
        <div class="grid-item">Item 5</div>
        <div class="grid-item">Item 6</div>
    </div>

    <h3>\`grid-template-areas\` (Semantic Layout)</h3>
    <div class="grid-container grid-template-areas-example">
        <div class="grid-item grid-area-header">Header</div>
        <div class="grid-item grid-area-nav">Navigation</div>
        <div class="grid-item grid-area-main">Main Content Area</div>
        <div class="grid-item grid-area-aside">Sidebar</div>
        <div class="grid-item grid-area-footer">Footer</div>
    </div>

    <h3>Gap (Space between items)</h3>
    <div class="grid-container grid-gap-example">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
    </div>

    <h2>Grid Item Properties</h2>

    <h3>Spanning Columns & Rows</h3>
    <div class="grid-container" style="grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 100px);">
        <div class="grid-item">Item 1</div>
        <div class="grid-item grid-item-span-2-columns">Span 2 Cols</div>
        <div class="grid-item">Item 3</div>
        <div class="grid-item grid-item-span-2-rows">Span 2 Rows</div>
        <div class="grid-item">Item 5</div>
        <div class="grid-item">Item 6</div>
    </div>

    <h3>Starting & Ending at Grid Lines</h3>
    <div class="grid-container" style="grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(2, 80px);">
        <div class="grid-item">Item 1</div>
        <div class="grid-item grid-item-start-col-2">Starts Col 2, Ends Col 4</div>
        <div class="grid-item">Item 3</div>
        <div class="grid-item">Item 4</div>
        <div class="grid-item grid-item-start-row-1">Starts Row 1, Ends Row 3 (covers 2 rows)</div>
        <div class="grid-item">Item 6</div>
        <div class="grid-item">Item 7</div>
    </div>

    <p style="text-align: center; margin-top: 50px; color: #555;">
        CSS Grid provides unparalleled control over two-dimensional layouts, making responsive design easier.
    </p>
</body>
</html>`;

export default function CssLayoutPage() {
  const page = 23; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/CCD9EB/3F51B5?text=CSS+Layout+Techniques"
              alt="CSS Layout Techniques Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Layout Techniques: Structuring Your Web Pages 🧱
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              CSS layout techniques are fundamental to web design. They dictate
              how elements are arranged and positioned on a page, forming the
              visual structure and hierarchy of your content. Understanding
              these methods is key to building responsive, intuitive, and
              aesthetically pleasing websites.
            </p>

            {/* 1. The Box Model (Quick Recap) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. The Box Model: The Foundation of All Layouts
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Before diving into layout methods, a quick reminder of the CSS
                Box Model is essential, as every HTML element is a rectangular
                box.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Content:
                  </strong>{" "}
                  The actual content (text, images, etc.) of the element.
                  Controlled by `width` and `height`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Padding:
                  </strong>{" "}
                  Transparent space around the content, inside the border. Adds
                  space between content and border. Controlled by `padding`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Border:
                  </strong>{" "}
                  A visible line separating the padding from the margin.
                  Controlled by `border-width`, `border-style`, `border-color`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Margin:
                  </strong>{" "}
                  Transparent space around the border, outside the border. Adds
                  space between elements. Controlled by `margin`.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Understanding how these layers contribute to an element's total
                space on the page is crucial for positioning. Remember
                `box-sizing: border-box;` for more intuitive sizing
                calculations.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Basic Layout Properties */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Basic Layout Properties
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These properties have been around for a long time and still have
                their uses, especially for fine-tuning or specific effects.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-6!">
                The `display` Property
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `display` property is fundamental; it defines how an element
                behaves in the document flow.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `block`
                  </strong>
                  : Elements like {`<div>`}, {`<p>`}, {`<h1>`} are block-level
                  by default. They take up the full available width and force a
                  new line after them. `width`, `height`, `padding`, `margin`
                  (all sides) are fully respected.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `inline`
                  </strong>
                  : Elements like {`<span>`}, {`<a>`}, {`<strong>`} are inline
                  by default. They only take up as much width as their content
                  needs, and do not force a new line. `width` and `height`
                  properties are ignored. Vertical `padding` and `margin` are
                  ignored by other elements in the flow, though horizontal
                  padding/margin apply.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `inline-block`
                  </strong>
                  : A hybrid. It behaves like an `inline` element (allows other
                  elements to sit next to it) but respects `width` and `height`
                  like a `block` element. Great for creating grid-like
                  structures before Flexbox/Grid.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `none`
                  </strong>
                  : Hides the element completely. It takes up no space in the
                  document flow.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-6!">
                The `position` Property
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `position` property controls how an element is positioned on
                the page relative to other elements, its parent, or the
                viewport. It works in conjunction with `top`, `right`, `bottom`,
                `left`.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `static` (Default)
                  </strong>
                  : Elements are positioned according to the normal flow of the
                  document. `top`, `right`, `bottom`, `left`, `z-index` have no
                  effect.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `relative`
                  </strong>
                  : The element is positioned relative to its normal position.
                  Using `top`, `right`, `bottom`, `left` will shift it from its
                  default location, but its original space remains reserved in
                  the document flow. Crucially, a relatively positioned element
                  creates a "positioning context" for its absolutely positioned
                  children.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `absolute`
                  </strong>
                  : The element is removed from the normal document flow and
                  positioned relative to its *nearest positioned ancestor* (an
                  ancestor with `position: relative`, `absolute`, `fixed`, or
                  `sticky`). If no such ancestor exists, it's relative to the
                  initial containing block (usually the `html` element). It
                  takes up no space in the flow.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `fixed`
                  </strong>
                  : The element is removed from the normal document flow and
                  positioned relative to the *viewport*. It stays in the same
                  place even when the page is scrolled. Useful for navigation
                  bars or "back to top" buttons.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `sticky`
                  </strong>
                  : A hybrid of `relative` and `fixed`. The element behaves as
                  `relative` until it reaches a specified offset from the
                  viewport (e.g., `top: 0`), at which point it becomes `fixed`
                  until its parent container is out of view. Great for section
                  headers that stick to the top.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `z-index`
                  </strong>
                  : Controls the stacking order of positioned elements. Elements
                  with a higher `z-index` value are stacked in front of elements
                  with a lower value. Only works on positioned elements
                  (`relative`, `absolute`, `fixed`, `sticky`).
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-6!">
                `float` and `clear` (Historical Layout Tools)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Historically, `float` was the primary method for creating
                multi-column layouts. While largely superseded by Flexbox and
                Grid for main page layouts, `float` remains useful for wrapping
                text around images.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `float`
                  </strong>
                  : Takes an element out of the normal flow and pushes it to the
                  left or right of its container, allowing other content to wrap
                  around it. Values: `left`, `right`, `none`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `clear`
                  </strong>
                  : Prevents an element from being positioned next to floated
                  elements. Values: `left`, `right`, `both`, `none`. Often used
                  with `overflow: auto;` or a pseudo-element (
                  {`::after { content: ""; display: table; clear: both; }`}) on
                  the parent to "clear" the floats.
                </li>
              </ul>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                These basic properties are foundational for understanding how
                elements interact, but for structuring complex page sections,
                modern CSS Layouts are far more intuitive and powerful.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Modern Layout Techniques */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. Modern CSS Layout Techniques
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Flexbox and Grid are the cornerstones of modern CSS layout,
                providing robust and flexible ways to arrange content.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-6!">
                CSS Flexbox (Flexible Box Layout)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Flexbox is a one-dimensional layout system.** It excels at
                distributing space among items along a single axis (either a row
                or a column) and aligning them. It's perfect for navigation
                bars, spacing elements in a line, or responsive card layouts.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Flex Container (`display: flex;` or `display: inline-flex;`)
                  </strong>
                  : The parent element that contains the flex items. All flex
                  properties applied to the container affect its direct children
                  (flex items).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Flex Items
                  </strong>
                  : The direct children of the flex container.
                </li>
              </ul>
              <h4 className="tw:text-lg! tw:font-semibold! tw:text-green-700! tw:mb-2!">
                Key Container Properties:
              </h4>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:space-y-1! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `flex-direction`
                  </strong>
                  : Defines the main axis (row or column) along which flex items
                  are placed. Values: `row` (default), `column`, `row-reverse`,
                  `column-reverse`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `justify-content`
                  </strong>
                  : Aligns items along the **main axis**. Values: `flex-start`,
                  `flex-end`, `center`, `space-between`, `space-around`,
                  `space-evenly`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `align-items`
                  </strong>
                  : Aligns items along the **cross axis** (perpendicular to main
                  axis). Values: `flex-start`, `flex-end`, `center`, `stretch`
                  (default), `baseline`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `flex-wrap`
                  </strong>
                  : Controls whether flex items are forced onto a single line or
                  can wrap onto multiple lines. Values: `nowrap` (default),
                  `wrap`, `wrap-reverse`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `gap` (or `row-gap`, `column-gap`)
                  </strong>
                  : Sets the space between flex items.
                </li>
              </ul>
              <h4 className="tw:text-lg! tw:font-semibold! tw:text-green-700! tw:mb-2!">
                Key Item Properties:
              </h4>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:space-y-1! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `flex` (Shorthand for `flex-grow`, `flex-shrink`,
                    `flex-basis`)
                  </strong>
                  : Controls how a flex item grows, shrinks, and its initial
                  size.
                  <br />
                  Example: `flex: 1;` (grows/shrinks equally), `flex: 0 0
                  100px;` (fixed size 100px, won't grow/shrink).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `order`
                  </strong>
                  : Controls the visual order of a flex item within the
                  container, overriding its source order. Values are integers
                  (default `0`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `align-self`
                  </strong>
                  : Overrides the `align-items` property for an individual flex
                  item.
                </li>
              </ul>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Flexbox is incredibly versatile for arranging elements
                efficiently in a row or column, and it's highly responsive by
                nature.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-6!">
                CSS Grid Layout
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **CSS Grid is a two-dimensional layout system.** It allows you
                to define both rows and columns simultaneously, giving you
                powerful control over complex page structures. It's ideal for
                main page layouts, dashboards, and gallery grids.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Grid Container (`display: grid;` or `display: inline-grid;`)
                  </strong>
                  : The parent element that contains the grid items. Grid
                  properties applied to the container define the grid structure.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Grid Items
                  </strong>
                  : The direct children of the grid container, placed within the
                  grid cells.
                </li>
              </ul>
              <h4 className="tw:text-lg! tw:font-semibold! tw:text-red-700! tw:mb-2!">
                Key Container Properties:
              </h4>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:space-y-1! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `grid-template-columns` / `grid-template-rows`
                  </strong>
                  : Defines the number, size, and names of the grid's
                  columns/rows. Uses length units, percentages, `fr` (fractional
                  units for remaining space), `auto`, `minmax()`, `repeat()`.
                  <br />
                  Example: `grid-template-columns: 1fr 2fr 1fr;` (three
                  columns), `grid-template-rows: auto 200px;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `gap` (or `row-gap`, `column-gap`)
                  </strong>
                  : Sets the space between grid cells.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `grid-template-areas`
                  </strong>
                  : Defines a visual structure of the grid by referencing named
                  grid areas. Powerful for semantic layouts.
                  <br />
                  Example: `grid-template-areas: "header header" "nav main";`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `justify-items` / `align-items`
                  </strong>
                  : Aligns grid items within their cells along the row (justify)
                  or column (align) axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `justify-content` / `align-content`
                  </strong>
                  : Aligns the entire grid within the grid container if there's
                  extra space.
                </li>
              </ul>
              <h4 className="tw:text-lg! tw:font-semibold! tw:text-red-700! tw:mb-2!">
                Key Item Properties:
              </h4>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-4! tw:space-y-1! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `grid-column` / `grid-row` (Shorthand)
                  </strong>
                  : Specifies the starting and ending grid lines an item
                  occupies. Can use line numbers or `span` keyword.
                  <br />
                  Example: `grid-column: 1 / 3;` (from line 1 to line 3),
                  `grid-column: span 2;` (spans 2 columns).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `grid-area`
                  </strong>
                  : Assigns an item to a named grid area defined by
                  `grid-template-areas`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `justify-self` / `align-self`
                  </strong>
                  : Aligns an individual grid item within its own cell,
                  overriding the container's `justify-items`/`align-items`.
                </li>
              </ul>
              <CodeReviewPager code={section3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                CSS Grid truly shines when you need precise control over both
                rows and columns, making it the go-to for overall page layouts.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 4. Responsiveness in Layouts */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                4. Responsiveness in Layouts
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Creating layouts that adapt to different screen sizes (desktops,
                tablets, phones) is called responsive web design.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Media Queries (`@media`)
                  </strong>
                  : The primary tool for applying different styles based on
                  screen width, height, device orientation, etc.
                  <br />
                  Example: `@media (max-width: 768px){" "}
                  {/* styles for screens up to 768px wide */}`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Flexbox and Grid's Intrinsic Responsiveness:
                  </strong>
                  <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mt-2! tw:pl-4!">
                    <li className="tw:leading-relaxed!">
                      Flexbox's `flex-wrap: wrap;` naturally creates multi-row
                      layouts for small screens. `flex-grow` and `flex-shrink`
                      handle space distribution gracefully.
                    </li>
                    <li className="tw:leading-relaxed!">
                      Grid's `minmax()` and `repeat(auto-fit, ...)` functions,
                      combined with `fr` units, allow for highly adaptive column
                      structures without explicit media queries for every
                      breakpoint.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                By combining Flexbox, Grid, and Media Queries, you can build
                incredibly robust and flexible layouts that look great on any
                device.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Building Robust and Responsive Interfaces
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                CSS layout techniques have evolved significantly, moving from
                older, sometimes brittle methods like floats to powerful,
                intuitive systems like Flexbox and Grid.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  Use{" "}
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Grid
                  </strong>{" "}
                  for defining the overall 2D structure of your page (header,
                  sidebar, main content, footer).
                </li>
                <li className="tw:leading-relaxed!">
                  Use{" "}
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Flexbox
                  </strong>{" "}
                  for distributing and aligning items within a section (e.g.,
                  items in a navigation bar, a row of cards, form elements).
                </li>
                <li className="tw:leading-relaxed!">
                  Remember{" "}
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `display`
                  </strong>{" "}
                  and{" "}
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `position`
                  </strong>{" "}
                  for basic element behavior and specific overlaps/offsets.
                </li>
                <li className="tw:leading-relaxed!">
                  Always test your layouts across different screen sizes using
                  browser developer tools.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Practice is key to mastering these. Experiment with the
                properties in your browser's developer tools and build small
                components using each technique.
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
