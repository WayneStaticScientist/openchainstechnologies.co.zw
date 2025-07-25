import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Positioning: Precise Element Placement & Layering",
  description:
    "Master CSS positioning techniques for precise element placement and layering.",
  keywords: ["CSS", "positioning", "layout", "web design"],
  openGraph: {
    title: "CSS Positioning: Precise Element Placement & Layering",
    description:
      "Master CSS positioning techniques for precise element placement and layering.",
    url: `${baseUrl}/lessons/html/positioning`,
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/positioning`,
  },
  metadataBase: new URL(baseUrl),
};
// Code example 1: Static, Relative, Absolute
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Positioning: Static, Relative, Absolute</title>
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
            min-height: 100px; /* Ensure some height for containers */
        }

        .box {
            width: 120px;
            height: 70px;
            background-color: #a2d2ff;
            border: 1px solid #3498db;
            color: #333;
            text-align: center;
            line-height: 70px; /* Vertically center text */
            font-weight: bold;
            margin: 10px; /* Default margin for visual separation */
        }

        /* --- position: static (Default) --- */
        .static-container .box {
            /* display: block; is implicitly applied to div, position: static is default */
            background-color: #d4edda;
            border-color: #28a745;
        }

        /* --- position: relative --- */
        .relative-container {
            background-color: #fbecec;
            border-color: #e74c3c;
            min-height: 180px; /* Make container taller to show relative shift */
        }
        .relative-box {
            position: relative; /* Shifted from its normal position */
            top: 20px;
            left: 30px;
            background-color: #ffd1b3;
            border-color: #ff5722;
        }

        /* --- position: absolute --- */
        .absolute-parent-static {
            /* This parent is static (default), so absolute child will position relative to <body> */
            background-color: #e0f2f7;
            border-color: #00bcd4;
            position: static; /* Explicitly static for clarity */
            height: 150px;
            margin-bottom: 100px; /* Add space below to see absolute effect */
        }
        .absolute-child-no-positioned-parent {
            position: absolute; /* Relative to <body> (or <html>) */
            top: 50px;
            left: 10px;
            background-color: #c39bd3;
            border-color: #8e44ad;
            color: white;
            z-index: 10;
        }

        .absolute-parent-relative {
            position: relative; /* This parent is now a positioning context */
            background-color: #e0f2f7;
            border-color: #00bcd4;
            height: 250px;
            margin-bottom: 10px;
            overflow: hidden; /* To show if absolute child goes out */
        }
        .absolute-child-with-positioned-parent {
            position: absolute; /* Relative to its nearest *positioned* ancestor */
            bottom: 20px;
            right: 20px;
            background-color: #6c5ce7;
            border-color: #4834d4;
            color: white;
            z-index: 10;
        }
    </style>
</head>
<body>
    <h1>CSS Positioning: Static, Relative, Absolute</h1>

    <div class="section-container static-container">
        <h2>\`position: static;\` (Default)</h2>
        <p>Elements with \`position: static;\` are placed in the normal document flow. \`top\`, \`right\`, \`bottom\`, \`left\`, and \`z-index\` properties have NO effect.</p>
        <div class="box">Static Box 1</div>
        <div class="box">Static Box 2</div>
        <div class="box">Static Box 3</div>
    </div>

    <div class="section-container relative-container">
        <h2>\`position: relative;\`</h2>
        <p>Elements with \`position: relative;\` are positioned relative to their <strong>normal position</strong>. The space they originally occupied in the document flow is <strong>preserved</strong>.</p>
        <div class="box">Normal Box</div>
        <div class="box relative-box">Relative Box (Shifted)</div>
        <div class="box">Another Normal Box</div>
        <p>Notice how "Relative Box" is shifted, but the "Another Normal Box" still flows as if "Relative Box" was in its original spot.</p>
    </div>

    <div class="section-container absolute-parent-static">
        <h2>\`position: absolute;\` (Parent \`static\`)</h2>
        <p>When an absolute element's parent is \`static\` (the default), it positions itself relative to the <strong>initial containing block (usually the \`body\`/\`html\` element)</strong>.</p>
        <div class="box absolute-child-no-positioned-parent">Absolute Box (Relative to Body)</div>
        <p>Other content ignores the absolute box. This text flows as if the absolute box isn't there in the flow. Scroll up to see the absolute box positioned relative to the top-left of the viewport (or body).</p>
    </div>

    <div class="section-container absolute-parent-relative">
        <h2>\`position: absolute;\` (Parent \`relative\`)</h2>
        <p>When an absolute element's nearest ancestor has a \`position\` value other than \`static\` (e.g., \`relative\`, \`absolute\`, \`fixed\`, \`sticky\`), it positions itself relative to that <strong>positioned ancestor</strong>. This parent is \`position: relative;\`.</p>
        <div class="box absolute-child-with-positioned-parent">Absolute Box (Relative to Parent)</div>
        <p>This text is part of the parent container. The absolute box is positioned within this container. Try changing \`bottom\` and \`right\` values to see its movement confined to this \`absolute-parent-relative\` container.</p>
    </div>
</body>
</html>`;

// Code example 2: Fixed, Sticky, Z-index
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Positioning: Fixed, Sticky, Z-index</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0; /* Reset default body margin */
            padding-top: 70px; /* Space for fixed header */
            padding-bottom: 60px; /* Space for fixed footer */
            background-color: #f0f2f5;
            color: #333;
            min-height: 200vh; /* Make content long enough to scroll */
        }

        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
            padding-top: 20px;
        }

        .content-section {
            padding: 30px;
            margin-bottom: 30px;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        /* --- position: fixed --- */
        .fixed-header {
            position: fixed; /* Stays fixed relative to the viewport */
            top: 0;
            left: 0;
            width: 100%;
            background-color: #2c3e50;
            color: white;
            padding: 15px 20px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            z-index: 1000; /* Ensure it's on top */
        }
        .fixed-footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #3498db;
            color: white;
            padding: 10px 20px;
            text-align: center;
            box-shadow: 0 -4px 8px rgba(0,0,0,0.2);
            z-index: 1000;
        }

        /* --- position: sticky --- */
        .sticky-container {
            height: 400px; /* Container with scrollable content */
            overflow-y: auto; /* Enable scrolling within this container */
            border: 2px solid #27ae60;
            background-color: #e8f8f5;
            padding: 10px;
            margin-top: 50px;
            margin-bottom: 50px;
        }
        .sticky-header {
            position: sticky; /* Sticks within its parent container */
            top: 0; /* Sticks when its top edge touches the viewport's top */
            background-color: #f1c40f;
            color: #333;
            padding: 15px;
            border-bottom: 2px solid #e67e22;
            text-align: center;
            font-weight: bold;
            z-index: 10; /* Ensure it's above normal content within its container */
        }
        .sticky-content {
            height: 600px; /* More content to make sticky container scrollable */
            padding: 20px;
            background-color: #ecf0f1;
            margin-top: 10px;
        }

        /* --- z-index --- */
        .z-index-example {
            position: relative; /* Container for z-index demonstration */
            height: 200px;
            background-color: #fce4ec;
            border: 2px dashed #e91e63;
            margin-top: 50px;
        }

        .z-box {
            width: 100px;
            height: 100px;
            position: absolute; /* z-index only works on positioned elements */
            top: 50px;
            left: 50px;
            text-align: center;
            line-height: 100px;
            font-weight: bold;
            color: white;
            border: 2px solid white;
        }

        .z-box-1 {
            background-color: #4CAF50; /* Green */
            z-index: 1;
        }

        .z-box-2 {
            background-color: #2196F3; /* Blue */
            left: 80px;
            top: 80px;
            z-index: 2; /* This will be on top */
        }

        .z-box-3 {
            background-color: #F44336; /* Red */
            left: 110px;
            top: 110px;
            z-index: 0; /* This will be behind box 1 and 2 */
        }
    </style>
</head>
<body>
    <div class="fixed-header">This is a Fixed Header (Scroll to see me stay!)</div>

    <h1>CSS Positioning: Fixed, Sticky, Z-index</h1>

    <div class="content-section">
        <p>Scroll down to see the fixed header and footer remain in place. Fixed elements are relative to the viewport.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Vivamus at odio et ante eleifend lacinia in in odio. Mauris eu lacus id elit sollicitudin rhoncus. Aliquam erat volutpat. Praesent id lectus nec orci luctus fermentum at vitae nisi. Cras sed felis nec velit congue lacinia. Sed euismod purus in nunc consectetur, a tristique quam convallis.</p>
        <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
    </div>

    <div class="sticky-container">
        <h2>\`position: sticky;\` (Scroll Me!)</h2>
        <div class="sticky-header">Sticky Section Header (Scroll inside this box!)</div>
        <div class="sticky-content">
            <p>This content is inside the sticky container. When you scroll this container, the header above will stick to the top of its *own container's visible area* (which is currently the top of the viewport in this specific example) as long as the container is in view.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officia! Dolor non odit, deleniti quis ipsum at, eius tempora, veritatis dignissimos sequi architecto cupiditate! Magni temporibus iste dolores rem voluptas!</p>
            <p>Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Cras sed felis nec velit congue lacinia. Sed euismod purus in nunc consectetur, a tristique quam convallis.</p>
            <p>Another paragraph to ensure there's enough content for scrolling within the sticky container.</p>
            <p>And more content... Keep scrolling to see the sticky header leave the view when its parent container scrolls away.</p>
            <p>Even more content to push the scrollbar.</p>
            <p>Final line of content.</p>
        </div>
    </div>

    <div class="content-section">
        <p>This is more content below the sticky container, to allow general page scrolling.</p>
        <p>Vivamus at odio et ante eleifend lacinia in in odio. Mauris eu lacus id elit sollicitudin rhoncus. Aliquam erat volutpat. Praesent id lectus nec orci luctus fermentum at vitae nisi. Cras sed felis nec velit congue lacinia. Sed euismod purus in nunc consectetur, a tristique quam convallis.</p>
    </div>

    <div class="z-index-example">
        <h2>\`z-index\` Property</h2>
        <p>Controls the stacking order of <strong>positioned elements</strong>. Higher values appear "on top".</p>
        <div class="z-box z-box-1">Box 1 (z-index: 1)</div>
        <div class="z-box z-box-2">Box 2 (z-index: 2)</div>
        <div class="z-box z-box-3">Box 3 (z-index: 0)</div>
    </div>

    <div class="content-section">
        <p>Final content section to ensure the fixed footer is visible when scrolling to the bottom.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div class="fixed-footer">This is a Fixed Footer (Scroll to see me stay!)</div>
</body>
</html>`;

export default function CssPositioningPage() {
  const page = 25; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E6F3F7/2F80B9?text=CSS+Positioning"
              alt="CSS Positioning Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Positioning: Precise Element Placement & Layering 🎯
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              While CSS layout techniques (like Flexbox and Grid) manage the
              overall flow and distribution of elements, the `position` property
              provides a way to control the exact placement of an element
              relative to its normal position, its parent, or the viewport. It
              also enables layering elements with `z-index`.
            </p>

            {/* 1. Introduction to Position */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. Introduction to `position`
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `position` property, used in conjunction with `top`,
                `right`, `bottom`, and `left`, allows you to precisely move an
                element from where it would normally be placed in the document.
                Understanding the different `position` values is key to:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Overlapping elements:
                  </strong>{" "}
                  Creating effects like modals, tooltips, or image overlays.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Fixed elements:
                  </strong>{" "}
                  Keeping headers/footers visible as users scroll.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Sticky elements:
                  </strong>{" "}
                  Making elements stick to the viewport during scrolling.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Positioning children within parents:
                  </strong>{" "}
                  Accurately placing elements within a specific container.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                There are five main values for the `position` property:
                `static`, `relative`, `absolute`, `fixed`, and `sticky`.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. `position: static;` (Default) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. `position: static;` (Default)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is the default positioning for all HTML elements.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Characteristics:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Normal Flow:
                  </strong>{" "}
                  The element renders in its natural position based on the
                  document flow (top-to-bottom, left-to-right).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    No Offset:
                  </strong>{" "}
                  The `top`, `right`, `bottom`, `left`, and `z-index` properties
                  have absolutely no effect on static elements.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Most elements on your page will be `static`. You generally don't
                need to declare `position: static;` unless you are overriding a
                previously set `position` value.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. `position: relative;` */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. `position: relative;`
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                An element with `position: relative;` is positioned relative to
                its *normal position*.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Characteristics:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Offset from Normal:
                  </strong>{" "}
                  You can use `top`, `right`, `bottom`, `left` to shift the
                  element from where it would normally be.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Space Preserved:
                  </strong>{" "}
                  The space the element *would have occupied* in the normal
                  document flow is preserved. Other elements do not "collapse"
                  into its original space.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Positioning Context:
                  </strong>{" "}
                  This is crucial! A `relative` element becomes the
                  **positioning context** for any `absolute` child elements.
                  This means any `absolute` children will be positioned relative
                  to *this* `relative` parent, not the `body` or `html`.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Relative positioning is often used to make small adjustments to
                an element's position without affecting the overall layout, or
                more commonly, to serve as a container for absolutely positioned
                children.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 4. `position: absolute;` */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                4. `position: absolute;`
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                An element with `position: absolute;` is taken completely out of
                the normal document flow.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Characteristics:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Out of Flow:
                  </strong>{" "}
                  It no longer occupies space in the layout. Other elements
                  behave as if it doesn't exist.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Positioned to Ancestor/Viewport:
                  </strong>{" "}
                  It's positioned relative to its *nearest positioned ancestor*
                  (an ancestor with `position: relative`, `absolute`, `fixed`,
                  or `sticky`). If no such ancestor exists, it's positioned
                  relative to the initial containing block (usually the{" "}
                  {`<html>`} or {`<body>`} element's viewport).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Layering:
                  </strong>{" "}
                  Can overlap other elements. `z-index` can control its stacking
                  order.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Common Use Cases:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">Dropdown menus.</li>
                <li className="tw:leading-relaxed!">Tooltips and popovers.</li>
                <li className="tw:leading-relaxed!">
                  Overlays (e.g., image captions, loading spinners).
                </li>
                <li className="tw:leading-relaxed!">
                  Badges or small icons positioned precisely on another element.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                `absolute` positioning offers immense control but can be tricky.
                Always remember to make its parent `position: relative;` (or
                another non-static value) if you want the absolute element to
                stay within that parent.
              </p>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 5. `position: fixed;` */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                5. `position: fixed;`
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                An element with `position: fixed;` is also removed from the
                normal document flow, similar to `absolute`.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Characteristics:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Relative to Viewport:
                  </strong>{" "}
                  It's always positioned relative to the **viewport** (the
                  browser window), even if the page is scrolled.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    No Space:
                  </strong>{" "}
                  It does not occupy space in the document flow.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Always Visible:
                  </strong>{" "}
                  Stays in the same spot on the screen regardless of scrolling.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Common Use Cases:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  Fixed navigation bars (headers/footers).
                </li>
                <li className="tw:leading-relaxed!">"Back to top" buttons.</li>
                <li className="tw:leading-relaxed!">
                  Persistent notification banners.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 6. `position: sticky;` */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                6. `position: sticky;`
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                `position: sticky;` is a hybrid of `relative` and `fixed`. It's
                a newer and very useful addition to CSS.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Characteristics:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Initially Relative:
                  </strong>{" "}
                  It behaves like `position: relative;` in the normal flow.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Becomes Fixed:
                  </strong>{" "}
                  Once its scroll position (relative to its parent or a
                  scrolling ancestor) meets a defined offset (`top`, `right`,
                  `bottom`, or `left`), it "sticks" and behaves like `position:
                  fixed;` relative to the *viewport*.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Unsticks:
                  </strong>{" "}
                  It will unstick and return to `relative` behavior if its
                  parent container scrolls completely out of view.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Requires Scrollable Ancestor:
                  </strong>{" "}
                  For `sticky` to work, the element *must* be within a
                  scrollable container (e.g., `body` or a `div` with `overflow:
                  auto/scroll`).
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Common Use Cases:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  Sticky section headers that stay at the top as you scroll
                  through that section.
                </li>
                <li className="tw:leading-relaxed!">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky_headers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw:text-blue-600! tw:underline!"
                  >
                    Table of contents
                  </a>{" "}
                  or navigation sidebar that sticks.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 7. `z-index` Property */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                7. `z-index` Property
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `z-index` property controls the **stacking order** of
                positioned elements along the "z-axis" (an imaginary axis coming
                out of the screen).
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Key Points:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Only for Positioned Elements:
                  </strong>{" "}
                  `z-index` has no effect on elements with `position: static;`.
                  It only works on elements with `position: relative`,
                  `absolute`, `fixed`, or `sticky`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Higher Value = On Top:
                  </strong>{" "}
                  Elements with a higher `z-index` value will appear in front of
                  (on top of) elements with a lower `z-index` value.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Stacking Contexts:
                  </strong>{" "}
                  `z-index` interacts with the concept of "stacking contexts." A
                  new stacking context is created by any element with a
                  `position` value other than `static` and a `z-index` value
                  other than `auto` (among other things like `opacity` {`<`} 1).
                  Elements within the same stacking context are layered by their
                  `z-index`. Elements in different stacking contexts are layered
                  based on the `z-index` of their respective contexts.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Using `z-index` is essential when you have overlapping elements
                (like dropdowns, modals, or fixed navigation bars) and you need
                to control which element appears on top.
              </p>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Mastering Element Control
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                The CSS `position` property gives you surgical control over
                element placement and layering.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `static`
                  </strong>
                  : The default, normal flow.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `relative`
                  </strong>
                  : Shift from normal position, preserves space, creates
                  positioning context.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `absolute`
                  </strong>
                  : Out of flow, relative to nearest *positioned* ancestor.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `fixed`
                  </strong>
                  : Out of flow, relative to viewport, stays put on scroll.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `sticky`
                  </strong>
                  : Hybrid; relative until a scroll threshold, then fixed.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `z-index`
                  </strong>
                  : Controls stacking of *positioned* elements.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                While powerful, avoid using `absolute` or `fixed` positioning
                for primary page layouts where Flexbox or Grid would be more
                appropriate and maintainable. Use `position` when you need
                fine-grained control over overlaps, specific element placement,
                or elements that need to remain visible during scroll.
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
