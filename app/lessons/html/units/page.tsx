import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
const title = "Css Units Tutorial";
const description =
  "Responsive web design using css units [px,cm,in,vw,vh,dpi,dp,rem,em] | openchains technologies ";
const canonicalUrl = `${baseUrl}/lessons/html/units`;
export const metadata = {
  title,
  description,
  keywords:
    "css units , rem , em , inches , pixels , responsive web design , styling , modern web design , styles",
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
// Code Example 1: Absolute Length Units
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Units: Absolute Lengths</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f7f6;
            color: #333;
        }

        h1 {
            text-align: center;
            color: #3498db;
            margin-bottom: 30px;
        }

        .unit-container {
            border: 2px dashed #999;
            padding: 15px;
            margin-bottom: 30px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .unit-example {
            text-align: center;
            padding: 10px;
            margin: 10px auto;
            border-radius: 5px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box; /* Include padding/border in width */
        }

        /* PX Example */
        .px-example {
            width: 200px; /* Fixed width */
            height: 80px;
            font-size: 18px; /* Fixed font size */
            background-color: #e74c3c;
            border: 2px solid #c0392b;
        }

        /* PT Example */
        .pt-example {
            width: 150px;
            height: 60px;
            font-size: 14pt; /* 14 points */
            background-color: #2ecc71;
            border: 1pt solid #27ae60;
        }

        /* CM Example */
        .cm-example {
            width: 4cm; /* 4 centimeters */
            height: 2cm;
            font-size: 0.7cm;
            background-color: #9b59b6;
            border: 0.1cm solid #8e44ad;
        }

        .note {
            text-align: center;
            font-size: 0.9em;
            color: #555;
            margin-top: 30px;
            padding: 15px;
            background-color: #f0f0f0;
            border-left: 5px solid #3498db;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="unit-container">
        <h2>\`px\` (Pixels)</h2>
        <div class="unit-example px-example">
            Width: 200px, Font: 18px
        </div>
        <p>
            The most common absolute unit. 1px is a constant size, regardless of screen resolution or user's zoom level. Use for borders, shadows, or when exact, unscalable values are needed.
        </p>
    </div>

    <div class="unit-container">
        <h2>\`pt\` (Points)</h2>
        <div class="unit-example pt-example">
            Font: 14pt
        </div>
        <p>
            A traditional print unit (1pt = 1/72 inch). Rarely used for screen displays due to its physical nature, but might appear in print stylesheets.
        </p>
    </div>

    <div class="unit-container">
        <h2>\`cm\`, \`mm\`, \`in\` (Centimeters, Millimeters, Inches)</h2>
        <div class="unit-example cm-example">
            Width: 4cm
        </div>
        <p>
            Physical world units. Almost exclusively for print media. Their appearance can be inconsistent across digital screens due to varying pixel densities and actual physical screen sizes.
        </p>
    </div>

    <div class="note">
        <strong>Important Note:</strong> While precise, absolute units can hinder responsiveness and accessibility. For text and fluid layouts, relative units are almost always preferred. Try changing your browser's default font size or zooming in/out to observe how these elements behave (or rather, <em>don't</em> behave).
    </div>
</body>
</html>`;

// Code Example 2: Relative Length Units
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Units: Relative Lengths</title>
    <style>
        /* Define a base font size on the root HTML element */
        html {
            font-size: 16px; /* This is the base for rem units (default browser size) */
        }

        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f7f6;
            color: #333;
            line-height: 1.6;
        }

        h1 {
            text-align: center;
            color: #3498db;
            margin-bottom: 30px;
        }

        .unit-container {
            border: 2px dashed #999;
            padding: 15px;
            margin-bottom: 30px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .unit-example {
            text-align: center;
            padding: 10px;
            margin: 10px auto;
            border-radius: 5px;
            color: #333;
            background-color: #f0f0f0;
            border: 1px solid #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        }

        /* EM Example */
        .em-parent {
            font-size: 20px; /* Parent's font size */
            padding: 20px;
            border: 1px solid #666;
            margin-bottom: 20px;
        }
        .em-child {
            font-size: 1.2em; /* 1.2 * 20px = 24px */
            padding: 1em;    /* 1 * 24px = 24px (relative to its own font-size) */
            background-color: #ffe0b2;
            margin-top: 15px;
        }

        /* REM Example */
        .rem-example {
            font-size: 1.5rem; /* 1.5 * 16px (root html) = 24px */
            padding: 1rem;    /* 1 * 16px (root html) = 16px */
            background-color: #c8e6c9;
        }

        /* Viewport Units */
        .viewport-text {
            font-size: 6vw; /* 6% of viewport width */
            background-color: #f7cac9;
            color: #c0392b;
            padding: 10px;
            margin-bottom: 20px;
            text-align: center;
        }
        .viewport-section {
            background-color: #e0f2f7;
            min-height: 40vh; /* Minimum height of 40% of viewport height */
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5vw;
            color: #3498db;
            margin-bottom: 20px;
        }
        .vmin-example {
            width: 80vmin; /* 80% of the smaller viewport dimension */
            height: 20vmin;
            background-color: #dbe9fa;
            font-size: 3vmin;
            color: #2980b9;
        }
        .vmax-example {
            width: 80vmax; /* 80% of the larger viewport dimension */
            height: 20vmax;
            background-color: #fce8a6;
            font-size: 3vmax;
            color: #f39c12;
            margin-top: 20px;
        }


        /* Percentage Example */
        .percentage-parent {
            width: 90%; /* 90% of body width */
            margin: 0 auto 20px auto;
            border: 2px dashed #aaddff;
            padding: 20px;
        }
        .percentage-child {
            width: 50%; /* 50% of parent's width */
            padding: 5%; /* 5% of parent's width (for all sides!) */
            font-size: 120%; /* 120% of parent's font size */
            background-color: #f0f8ff;
        }

        .note {
            text-align: center;
            font-size: 0.9em;
            color: #555;
            margin-top: 30px;
            padding: 15px;
            background-color: #e8f5e9;
            border-left: 5px solid #2ecc71;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="unit-container">
        <h2>\`em\` (Relative to Parent's \`font-size\` or Element's \`font-size\`)</h2>
        <div class="em-parent unit-example">
            Parent Element (font-size: 20px)
            <div class="em-child unit-example">
                Child Element (font-size: 1.2em, padding: 1em)
            </div>
        </div>
        <p>
            Scales relative to the font-size of its direct parent (for font-size property) or its own computed font-size (for other properties like padding, margin). Be cautious with nesting as values compound.
        </p>
    </div>

    <div class="unit-container">
        <h2>\`rem\` (Relative to Root HTML \`font-size\`)</h2>
        <div class="rem-example unit-example">
            Font: 1.5rem, Padding: 1rem
        </div>
        <p>
            The \`rem\` unit always refers to the font-size set on the \`<html>\` (root) element. This provides a consistent and predictable base for scaling your entire layout, making it ideal for overall typography and spacing in a design system.
        </p>
    </div>

    <div class="unit-container">
        <h2>Viewport Units (\`vw\`, \`vh\`, \`vmin\`, \`vmax\`)</h2>
        <div class="viewport-text">
            This text is 6vw!
        </div>
        <div class="viewport-section">
            This section is 40vh tall!
        </div>
        <div class="vmin-example unit-example">
            I'm 80vmin wide/tall.
        </div>
        <div class="vmax-example unit-example">
            I'm 80vmax wide/tall.
        </div>
        <p>
            These units (\`vw\` for width, \`vh\` for height) are percentages of the viewport dimensions. \`vmin\` refers to the smaller of \`vw\` or \`vh\`, while \`vmax\` refers to the larger. Perfect for elements that need to fluidly scale with the browser window.
        </p>
    </div>

    <div class="unit-container">
        <h2>\`%\` (Percentage)</h2>
        <div class="percentage-parent unit-example">
            Parent (width: 90% of body)
            <div class="percentage-child unit-example">
                Child (width: 50% of parent, padding: 5% of parent's width)
            </div>
        </div>
        <p>
            A common relative unit, but its reference point varies. For \`width\` and \`height\`, it's typically the parent's corresponding dimension. For \`padding\` and \`margin\` (both horizontal and vertical), it's always relative to the parent's <em>width</em>. For \`font-size\`, it's relative to the parent's \`font-size\`.
        </p>
    </div>

    <div class="note">
        <strong>Best Practice Tip:</strong> For new projects, favoring \`rem\` for typography and spacing, and \`vw\`/\`vh\` for truly fluid elements, will give you the most robust and accessible responsive designs. Use \`px\` sparingly for things like borders, and \`em\` cautiously within components.
        Try resizing your browser window and changing your browser's default font size to see how these units react!
    </div>
</body>
</html>`;

// Code Example 3: Other Important Units
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Units: Other Types</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f7f6;
            color: #333;
            text-align: center;
        }

        h1 {
            color: #3498db;
            margin-bottom: 30px;
        }

        .unit-container {
            border: 2px dashed #999;
            padding: 15px;
            margin-bottom: 30px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .box {
            width: 120px;
            height: 120px;
            margin: 20px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.1rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        /* --- Angle Units --- */
        .angle-example {
            background-color: #e74c3c;
            transition: transform 0.5s ease-in-out; /* Smooth transition */
        }
        .angle-example.deg { transform: rotate(45deg); }
        .angle-example.rad { transform: rotate(0.785rad); /* Approx 45 degrees */ }
        .angle-example.grad { transform: rotate(50grad); /* Approx 45 degrees */ }
        .angle-example.turn { transform: rotate(0.125turn); /* 1/8 of a turn = 45 degrees */ }

        .angle-buttons button {
            background-color: #f39c12;
            color: white;
            border: none;
            padding: 8px 15px;
            margin: 5px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .angle-buttons button:hover {
            background-color: #e67e22;
        }

        /* --- Time Units --- */
        .time-example {
            background-color: #2ecc71;
            transition: background-color 0.5s ease-in-out, border-radius 1s ease-out; /* Different durations */
        }
        .time-example:hover {
            background-color: #1abc9c;
            border-radius: 50%;
        }

        /* --- Resolution Units (Media Query Example) --- */
        .resolution-info {
            margin-top: 20px;
            padding: 15px;
            background-color: #f0f0f0;
            border-radius: 5px;
            font-size: 0.95rem;
            width: 80%;
            text-align: left;
        }

        /* Styles for High-DPI / Retina Displays */
        @media screen and (min-resolution: 1.5dppx),
               screen and (min-resolution: 144dpi) { /* Fallback for older browsers */
            .resolution-info {
                background-color: #d4edda; /* Lighter green */
                border: 1px solid #28a745;
                color: #28a745;
            }
            .resolution-info::before {
                content: "✨ High-Resolution Display Detected!";
                font-weight: bold;
                display: block;
                margin-bottom: 5px;
            }
        }

        /* Styles for Standard-DPI Displays */
        @media screen and (max-resolution: 1.49dppx),
               screen and (max-resolution: 143dpi) {
            .resolution-info {
                background-color: #f8d7da; /* Lighter red */
                border: 1px solid #dc3545;
                color: #dc3545;
            }
            .resolution-info::before {
                content: "🖥️ Standard-Resolution Display Detected.";
                font-weight: bold;
                display: block;
                margin-bottom: 5px;
            }
        }

        .note {
            text-align: center;
            font-size: 0.9em;
            color: #555;
            margin-top: 30px;
            padding: 15px;
            background-color: #e0eaff;
            border-left: 5px solid #6c72e2;
            border-radius: 5px;
        }
    </style>
    <script>
        // JS for angle unit examples to toggle classes
        function setAngleRotation(unit) {
            const angleBox = document.getElementById('angleBox');
            angleBox.className = 'box angle-example ' + unit;
        }
    </script>
</head>
<body>
    <div class="unit-container">
        <h2>Angle Units (\`deg\`, \`rad\`, \`grad\`, \`turn\`)</h2>
        <div id="angleBox" class="box angle-example deg">
            Rotate Me!
        </div>
        <div class="angle-buttons">
            <button onclick="setAngleRotation('deg')">45deg</button>
            <button onclick="setAngleRotation('rad')">0.785rad</button>
            <button onclick="setAngleRotation('grad')">50grad</button>
            <button onclick="setAngleRotation('turn')">0.125turn</button>
        </div>
        <p>
            Used with properties like \`transform: rotate()\`, \`linear-gradient()\`, \`conic-gradient()\`. They specify rotational values. Click buttons to see different units for 45-degree rotation.
        </p>
    </div>

    <div class="unit-container">
        <h2>Time Units (\`s\`, \`ms\`)</h2>
        <div class="box time-example">
            Hover to Animate!
        </div>
        <p>
            Essential for controlling the duration of CSS transitions and animations. \`s\` for seconds, \`ms\` for milliseconds. Hover over the box to see its transformation durations.
        </p>
    </div>

    <div class="unit-container">
        <h2>Resolution Units (\`dppx\`, \`dpi\`, \`dpcm\`)</h2>
        <div class="resolution-info">
            This section uses media queries with resolution units to identify your screen's pixel density.
        </div>
        <p>
            Primarily used in media queries to deliver optimized content (e.g., higher-resolution images) or styles based on the device's pixel density (like "Retina" displays).
        </p>
    </div>

    <div class="note">
        <strong>Experiment:</strong> The best way to grasp these units is to play with them! Open your browser's developer tools, inspect the elements, and try changing the unit values directly to see their immediate impact.
    </div>
</body>
</html>`;

export default function CssUnitsTutorial() {
  // Assuming a page number for placement in your HtmlChapterFootMap
  const page = 37; // Adjust this based on your actual chapter map

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/3498db/ffffff?text=CSS+Units+Explained"
              alt="CSS Units"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Units Tutorial 📏
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              CSS Units define the size or dimension of a CSS property.
              Mastering them is crucial for creating responsive, accessible, and
              well-designed web layouts. They fall into a few key categories,
              each with distinct advantages.
            </p>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 1. Absolute Length Units */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. Absolute Length Units (Fixed & Precise)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Absolute units are fixed and resolve to a specific physical
                size. This means their calculated value is the same regardless
                of the screen size, resolution, or user's browser settings.
                While precise, they are generally less suitable for flexible web
                design.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-red-600;">
                Key Concepts & Common Units:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Fixed Size:
                  </strong>{" "}
                  1 unit equals the same physical measurement everywhere.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Lack of Responsiveness:
                  </strong>{" "}
                  They don't scale with the user's viewport or preferences,
                  which can lead to accessibility issues or layout problems on
                  different devices.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!important;">
                    `px` (Pixels):
                  </strong>{" "}
                  The most common. Best for borders, shadows, or non-scalable
                  elements where precision is key. Avoid for font sizes or
                  flexible layouts.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!important;">
                    `pt` (Points), `cm` (Centimeters), `mm` (Millimeters), `in`
                    (Inches):
                  </strong>{" "}
                  Primarily for print media. Rarely used for screen displays due
                  to physical variability.
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Relative Length Units */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Relative Length Units (Scalable & Flexible)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Relative units are the cornerstone of responsive web design.
                They define a length relative to another length property, such
                as the font size of the parent, the root element's font size, or
                the size of the viewport. This inherent flexibility allows
                elements to scale proportionally and adapt to various screen
                sizes and user preferences.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-green-600;">
                Key Concepts & Common Units:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Scalable:
                  </strong>{" "}
                  Values adjust dynamically based on their reference point.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Responsiveness & Accessibility:
                  </strong>{" "}
                  Crucial for layouts that work on diverse devices and cater to
                  users' needs.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!important;">
                    `em`:
                  </strong>{" "}
                  Relative to the **parent's `font-size`** (for `font-size`
                  property) or **element's own `font-size`** (for others like
                  `padding`). Can compound.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!important;">
                    `rem` (Root `em`):
                  </strong>{" "}
                  Relative to the **root {`<html>`} element's `font-size`**.
                  Best practice for typography and general spacing for
                  consistent, predictable scaling.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!important;">
                    `vw` (Viewport Width), `vh` (Viewport Height):
                  </strong>{" "}
                  Percentages of the viewport's width/height. Ideal for fluid
                  elements that must scale with the browser window.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!important;">
                    `vmin`, `vmax`:
                  </strong>{" "}
                  1% of the smaller/larger dimension of the viewport. Useful for
                  maintaining visibility or maximizing size in specific
                  scenarios.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!important;">
                    `%` (Percentage):
                  </strong>{" "}
                  Relative to the **parent element's corresponding property**.
                  Reference point varies by property (e.g., `padding` % is
                  relative to parent's *width*).
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Other Important Units */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. Other Important Units
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Beyond length, CSS offers other unit types crucial for angles,
                time, and resolution, enabling animations, transformations, and
                media query targeting.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                Key Concepts & Common Units:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Angle Units (`deg`, `rad`, `grad`, `turn`):
                  </strong>{" "}
                  For rotations (`transform: rotate()`), and gradients. `deg`
                  and `turn` are most common.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Time Units (`s`, `ms`):
                  </strong>{" "}
                  For controlling the duration of CSS transitions
                  (`transition-duration`) and animations (`animation-duration`,
                  `animation-delay`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Resolution Units (`dppx`, `dpi`, `dpcm`):
                  </strong>{" "}
                  Used primarily in media queries (`@media screen and
                  (min-resolution: 2dppx)`) to target devices with specific
                  pixel densities (e.g., high-DPI "Retina" displays).
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section3} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Choosing the Right Unit
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                The choice of CSS unit significantly impacts the responsiveness,
                accessibility, and maintainability of your website.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    For most typography, spacing, and component sizing, prefer
                    `rem` units.
                  </strong>{" "}
                  They provide a consistent base relative to the user's
                  preferred font size, which is excellent for accessibility and
                  overall scalability.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Use `em` when a size should be explicitly relative to its
                    *parent's* font size, or for internal padding/margins within
                    a specific component.
                  </strong>{" "}
                  Be mindful of compounding effects.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Utilize `vw` and `vh` for truly fluid elements that must
                    scale with the viewport.
                  </strong>{" "}
                  They are great for large headings or elements designed to fill
                  specific percentages of the screen.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Reserve `px` for precise, non-scalable elements
                  </strong>{" "}
                  like borders or shadows where you absolutely need a fixed
                  dimension and scalability is not desired.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Percentages (`%`) are powerful but require careful
                    understanding of their context
                  </strong>
                  , as their calculation depends on the parent property or
                  containing block.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                By thoughtfully selecting the appropriate CSS units, you can
                build robust, adaptable, and user-friendly web experiences.
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
