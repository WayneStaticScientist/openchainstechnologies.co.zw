import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "Media Queries Deep Dive",
  description:
    "Explore the depths of CSS Media Queries, from basic syntax to advanced features like prefers-color-scheme and container queries. Learn how to create responsive designs that adapt to any device or user preference.",
  keywords: [
    "CSS Media Queries",
    "Responsive Web Design",
    "Mobile-First Design",
    "CSS Syntax",
    "Media Features",
    "Media Types",
    "Logical Operators",
  ],
  openGraph: {
    title: "Media Queries Deep Dive",
    description:
      "Explore the depths of CSS Media Queries, from basic syntax to advanced features like prefers-color-scheme and container queries. Learn how to create responsive designs that adapt to any device or user preference.",
    url: `${baseUrl}/lessons/html/media-queries`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/media-queries`,
  },
  metadataBase: new URL(baseUrl),
};
// Code Example 1: Basic Media Query Syntax & Mobile-First
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Queries: The Basics & Mobile-First</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f0f2f5;
            color: #333;
            line-height: 1.6;
        }

        h1, h2, h3 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 25px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            border: 2px dashed #3498db;
            margin-bottom: 40px;
        }

        /* --- Mobile-First Base Styles (Default for small screens) --- */
        .header {
            background-color: #e74c3c; /* Red for mobile */
            color: white;
            padding: 15px;
            text-align: center;
            font-size: 1.2em;
            margin-bottom: 20px;
        }

        .navigation ul {
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: center;
        }
        .navigation li {
            background-color: #f1c40f;
            margin-bottom: 10px;
            padding: 10px 0;
            border-radius: 5px;
        }
        .navigation a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
            display: block; /* Make the whole area clickable */
        }

        .main-grid {
            display: flex; /* Default to single column using flexbox */
            flex-direction: column;
            gap: 20px;
        }
        .grid-item {
            background-color: #ecf0f1;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
        }

        /* --- Media Queries: Adapting for Larger Screens (Mobile-First) --- */

        /* Small Tablets / Large Phones (min-width: 600px) */
        @media screen and (min-width: 600px) {
            .header {
                background-color: #2ecc71; /* Green for medium screens */
                font-size: 1.5em;
            }
            .navigation ul {
                display: flex; /* Horizontal navigation */
                justify-content: space-around;
            }
            .navigation li {
                flex: 1; /* Distribute space evenly */
                margin-bottom: 0; /* Remove vertical margin */
                margin-right: 10px; /* Add horizontal margin */
            }
            .navigation li:last-child {
                margin-right: 0;
            }
            .main-grid {
                flex-direction: row; /* Two columns */
                flex-wrap: wrap; /* Allow wrapping */
                justify-content: space-between;
            }
            .grid-item {
                flex: 1 1 calc(50% - 10px); /* Two items per row, with gap */
                max-width: calc(50% - 10px);
            }
        }

        /* Desktops / Larger Tablets (min-width: 992px) */
        @media screen and (min-width: 992px) {
            .header {
                background-color: #3498db; /* Blue for large screens */
                font-size: 2em;
            }
            .main-grid {
                display: grid; /* Switch to CSS Grid for more control */
                grid-template-columns: repeat(3, 1fr); /* Three equal columns */
                gap: 30px;
            }
            .grid-item {
                flex: unset; /* Remove flex properties */
                max-width: unset; /* Remove max-width */
            }
        }

        /* Landscape Orientation (for devices up to 767px wide) */
        @media screen and (max-width: 767px) and (orientation: landscape) {
            .header {
                padding: 10px; /* Smaller header in landscape mobile */
                font-size: 1em;
            }
            .navigation ul {
                display: flex; /* Even mobile nav can go horizontal in landscape */
                flex-wrap: wrap;
                justify-content: center;
            }
            .navigation li {
                width: calc(50% - 10px); /* Two columns for nav items */
                margin-bottom: 5px;
            }
            .main-grid {
                grid-template-columns: repeat(2, 1fr); /* Two columns for content */
            }
        }

        /* Print Styles */
        @media print {
            body {
                font-family: 'Times New Roman', serif;
                color: #000;
                background-color: #fff;
            }
            .header, .navigation, .container {
                border: none;
                box-shadow: none;
                margin: 0;
                padding: 0;
                background-color: transparent;
            }
            .header {
                color: #000;
                font-size: 1.5em;
            }
            .navigation, .grid-item:nth-child(even) { /* Hide even grid items on print */
                display: none;
            }
            .main-grid {
                display: block; /* Stack content for print */
            }
            .grid-item {
                border: 1px solid #ccc;
                margin-bottom: 10px;
                page-break-inside: avoid; /* Prevent breaking across pages */
            }
            a::after { /* Add URL after links for print */
                content: " (" attr(href) ")";
                font-size: 0.8em;
            }
        }

    </style>
</head>
<body>
    <div class="header">
        Welcome to Our Responsive Site!
    </div>

    <div class="container">
        <h1>Understanding CSS Media Queries</h1>
        <p>Media queries are essential for creating responsive web designs that adapt to various screen sizes, resolutions, and orientations. Resize your browser window or use your browser's developer tools (responsive mode) to see the changes!</p>

        <h2>Navigation Example</h2>
        <nav class="navigation">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <h2>Content Grid Example</h2>
        <div class="main-grid">
            <div class="grid-item">
                <h3>Section A</h3>
                <p>This is the content for section A. On small screens, these sections stack vertically. On medium screens, they might go to two columns, and on large screens, three columns.</p>
            </div>
            <div class="grid-item">
                <h3>Section B</h3>
                <p>More content here. We're demonstrating how the layout changes with different breakpoints using media queries.</p>
            </div>
            <div class="grid-item">
                <h3>Section C</h3>
                <p>Even more content! Pay attention to the background color of the header which also changes based on the screen width.</p>
            </div>
            <div class="grid-item">
                <h3>Section D</h3>
                <p>Final piece of content to fill out our grid. This responsive behavior is controlled purely by CSS Media Queries.</p>
            </div>
        </div>
    </div>
</body>
</html>`;

// Code Example 2: Advanced Media Query Features & Edge Cases
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Media Queries</title>
    <style>
        :root {
            --text-color: #333;
            --bg-color: #f0f2f5;
            --box-bg-color: #ffffff;
            --primary-highlight: #3498db;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
        }

        h1, h2, h3 {
            color: var(--primary-highlight);
            text-align: center;
            margin-bottom: 25px;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            background-color: var(--box-bg-color);
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            margin-bottom: 40px;
        }

        .feature-box {
            border: 2px solid var(--primary-highlight);
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
            background-color: #ecf0f1;
            text-align: center;
        }

        /* --- 1. prefers-color-scheme (Dark Mode) --- */
        /* Default (Light Mode) */
        .color-scheme-info::before {
            content: "Current theme: Light Mode";
            color: #2c3e50;
        }

        @media (prefers-color-scheme: dark) {
            :root {
                --text-color: #ecf0f1;
                --bg-color: #2c3e50;
                --box-bg-color: #34495e;
                --primary-highlight: #9b59b6;
            }
            .color-scheme-info::before {
                content: "Current theme: Dark Mode";
                color: #9b59b6;
            }
        }

        /* --- 2. prefers-reduced-motion (Accessibility) --- */
        .animated-box {
            width: 100px;
            height: 100px;
            background-color: #f1c40f;
            margin: 20px auto;
            border-radius: 10px;
            animation: bounce 2s infinite alternate;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #333;
            font-weight: bold;
        }

        @keyframes bounce {
            from { transform: translateY(0); }
            to { transform: translateY(-20px); }
        }

        @media (prefers-reduced-motion: reduce) {
            .animated-box {
                animation: none; /* Disable animation */
                background-color: #bdc3c7; /* Change color when motion is reduced */
            }
            .animated-box::after {
                content: " (Motion Reduced)";
                display: block;
                font-size: 0.8em;
            }
        }

        /* --- 3. hover & pointer (Input Capabilities) --- */
        .hover-pointer-info {
            background-color: #d1e7dd;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
        }
        .hover-pointer-info span {
            font-weight: bold;
            color: #2ecc71;
        }

        @media (hover: hover) and (pointer: fine) {
            /* Styles for devices with a precise pointer (mouse) and hover capability */
            .hover-pointer-info span {
                color: #3498db;
            }
            .hover-pointer-info::before {
                content: "You are likely using a mouse/trackpad (fine pointer, hover available).";
            }
        }

        @media (hover: none) and (pointer: coarse) {
            /* Styles for devices with a coarse pointer (finger/touchscreen) and no hover */
            .hover-pointer-info span {
                color: #e67e22;
            }
            .hover-pointer-info::before {
                content: "You are likely using a touchscreen (coarse pointer, no hover available).";
            }
        }

        /* --- 4. Range Contexts (Media Queries Level 4) --- */
        .range-example-box {
            background-color: #9b59b6;
            color: white;
            padding: 15px;
            margin: 20px auto;
            width: 80%;
            text-align: center;
            border-radius: 5px;
        }
        .range-example-box::before {
            content: "Default width state";
        }

        /* Old way: @media screen and (min-width: 400px) and (max-width: 800px) { ... } */
        /* New way: */
        @media (400px <= width < 800px) {
             .range-example-box {
                background-color: #e67e22; /* Orange for medium range */
             }
             .range-example-box::before {
                content: "Width between 400px and 800px (exclusive of 800px)";
            }
        }

        @media (width >= 800px) {
            .range-example-box {
                background-color: #2ecc71; /* Green for large screens */
            }
            .range-example-box::before {
                content: "Width 800px or wider";
            }
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>Advanced Media Query Features</h1>
        <p>Beyond basic width and height, media queries offer powerful ways to adapt your site based on user preferences and device capabilities.</p>

        <h2 class="color-scheme-info">1. \`prefers-color-scheme\` (Dark Mode/Light Mode)</h2>
        <p>This media feature allows you to style your site based on the user's operating system or browser's preferred color scheme setting (dark or light mode).</p>
        <p><strong>How to test:</strong> Change your operating system's theme (e.g., in Windows: Settings > Personalization > Colors > Choose your mode; in macOS: System Settings > Appearance).</p>

        <h2>2. \`prefers-reduced-motion\` (Accessibility)</h2>
        <p>Respect user preferences for reduced motion, which is crucial for users with vestibular disorders or who simply prefer less visual distraction.</p>
        <p>Below is an animated box. If you have "reduce motion" enabled in your OS settings, the animation will stop and the box's color will change.</p>
        <div class="animated-box">Animated!</div>
        <p><strong>How to test:</strong> (Windows) Settings > Accessibility > Visual effects > Animation effects; (macOS) System Settings > Accessibility > Display > Reduce motion.</p>

        <h2>3. \`hover\` and \`pointer\` (Input Capabilities)</h2>
        <p>These media features allow you to detect the primary input mechanism of the user and whether it supports hovering. Useful for optimizing touch vs. mouse interfaces.</p>
        <div class="hover-pointer-info">
            <span></span>
        </div>
        <p><strong>How to test:</strong> Switch between a desktop browser (with mouse) and a mobile device (touchscreen).</p>

        <h2>4. Range Contexts (Level 4 Media Queries Syntax)</h2>
        <p>A more concise and readable way to write min/max ranges in media queries. This is part of Media Queries Level 4 and offers cleaner syntax.</p>
        <div class="range-example-box"></div>
        <p><strong>How to test:</strong> Resize your browser window. The text inside the box will change based on its width using this new syntax.</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
/* Old Syntax: */
@media screen and (min-width: 400px) and (max-width: 799px) { ... }

/* New (Level 4) Syntax: */
@media (400px <= width < 800px) { ... }
        </pre>
        <p>Note: The new syntax uses standard mathematical comparison operators. \`min-width\` is equivalent to \`>=\` and \`max-width\` is equivalent to \`<=\`. When you want \`max-width\` to be exclusive (e.g., up to, but not including, 800px), you use \`<\`.</p>

        <h2>Future: Container Queries (\`@container\`)</h2>
        <p>While not covered in depth here due to evolving browser support, CSS Container Queries (\`@container\`) are the next big leap. They allow elements to respond to the size of their *parent container* (rather than the entire viewport), enabling truly component-level responsiveness. Keep an eye on them!</p>
    </div>
</body>
</html>`;

export default function MediaQueriesTutorial() {
  const page = 30; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/AFD8B9/3B7D45?text=CSS+Media+Queries+Deep+Dive"
              alt="CSS Media Queries Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Deep Dive into CSS Media Queries 📊
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Media Queries are the heart of Responsive Web Design. They allow
              you to apply specific CSS styles based on the characteristics of
              the device or viewport accessing your website. Think of them as
              CSS's "if-then" statements.
            </p>

            {/* 1. Introduction & Recap */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. Introduction & Why Media Queries?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                In our previous Responsive Web Design tutorial, we touched upon
                the fundamental role of Media Queries. Now, we'll explore them
                in much greater detail. Their primary purpose is to enable your
                website to adapt its layout, styling, and even content
                presentation to different viewing environments.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                The Problem They Solve:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  A fixed-width layout looks great on a desktop but overflows or
                  requires excessive zooming on a smartphone.
                </li>
                <li className="tw:leading-relaxed!">
                  A complex navigation menu might be perfect for a mouse but
                  unusable on a touchscreen.
                </li>
                <li className="tw:leading-relaxed!">
                  Users might prefer a dark theme, or have settings for reduced
                  motion for accessibility.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Media Queries provide the mechanism to write CSS that responds
                to these scenarios, providing a tailored user experience.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Essential Pre-requisite: The {`<meta name="viewport">`} Tag
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Before any media query can function correctly on mobile devices,
                you **must** include the viewport meta tag in your HTML's{" "}
                {`<head>`}:
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                &lt;meta name="viewport" content="width=device-width,
                initial-scale=1.0"&gt;
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This tag instructs the browser to set the viewport width to the
                device's actual width and to set the initial zoom level to 1.0.
                Without it, mobile browsers might render your page as if it were
                on a desktop, then scale it down, preventing your media queries
                from triggering correctly.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Basic Syntax & Components (Deep Dive) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Basic Syntax & Components: The Building Blocks
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A media query starts with the `@media` at-rule, followed by an
                optional media type and then one or more media features,
                combined with logical operators.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                @media &lt;media-type&gt; [and &lt;media-feature&gt;] [and
                &lt;media-feature&gt;...] {/* CSS rules here */}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Media Types: Defining the Device Category
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These specify which broad category of device the styles should
                apply to.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `all` (default):
                  </strong>{" "}
                  Applies to all devices. If you omit the media type, `all` is
                  assumed.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `screen`:
                  </strong>{" "}
                  For screens, typically color computer screens, tablets, and
                  smartphones. This is by far the most common type used for
                  responsive web design.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    @media screen and (min-width: 768px){" "}
                    {/* styles for screens 768px wide or wider */}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `print`:
                  </strong>{" "}
                  For paged material, typically printers. Essential for making
                  your web pages print-friendly.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`@media print {
    body { font-size: 12pt; color: black; }
    nav, footer { display: none; } /* Hide non-essential elements for print */
}`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `speech`:
                  </strong>{" "}
                  For speech synthesizers (e.g., screen readers).
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Logical Operators: Combining Conditions
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can combine multiple media features to create more specific
                conditions.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `and`:
                  </strong>{" "}
                  Combines multiple media features. All conditions must be true
                  for the styles to apply.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`@media screen and (min-width: 768px) and (orientation: landscape) {
    /* Styles for screens wider than 768px AND in landscape mode */
}`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `,` (comma, acts as `or`):
                  </strong>{" "}
                  Applies styles if *any* of the conditions are true.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`@media screen and (max-width: 600px), print {
    /* Styles for screens smaller than 600px OR for print */
}`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `not`:
                  </strong>{" "}
                  Negates the entire media query.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`@media not screen and (min-width: 1200px) {
    /* Styles for anything NOT a screen wider than 1200px (i.e., print, speech, or screens <= 1200px) */
}`}
                  </pre>
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Media Features: The Conditions You Test For
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These are the actual properties of the device or viewport that
                you query.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `width`, `height`:
                  </strong>{" "}
                  The width/height of the viewport. Usually combined with `min-`
                  or `max-`.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`@media (max-width: 767px) { /* for devices up to 767px wide */ }
@media (min-width: 768px) { /* for devices 768px wide and up */ }`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `orientation`:
                  </strong>{" "}
                  Checks if the device is in `portrait` (height {`>`} width) or
                  `landscape` (width {`>`} height) mode.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`@media (orientation: landscape) { /* styles for landscape mode */ }`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `resolution`:
                  </strong>{" "}
                  Checks the pixel density (e.g., for Retina displays). `dppx`
                  (dots per pixel) is common.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`@media (min-resolution: 2dppx) { /* styles for high-resolution screens */ }`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `aspect-ratio`:
                  </strong>{" "}
                  Checks the width-to-height ratio of the viewport.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`@media (min-aspect-ratio: 16/9) { /* for wider screens like widescreen monitors */ }`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `prefers-color-scheme`:
                  </strong>{" "}
                  Detects if the user has requested a light or dark interface.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`@media (prefers-color-scheme: dark) { /* dark mode styles */ }`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `prefers-reduced-motion`:
                  </strong>{" "}
                  Detects if the user prefers minimal motion on the page
                  (accessibility).
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`@media (prefers-reduced-motion: reduce) { /* disable animations */ }`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `hover`:
                  </strong>{" "}
                  Detects if the primary input mechanism can hover over elements
                  (e.g., mouse vs. touchscreen). Values: `none`, `hover`.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`@media (hover: hover) { /* styles for devices with hover capability */ }`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `pointer`:
                  </strong>{" "}
                  Detects the accuracy of the primary input mechanism. Values:
                  `none`, `coarse` (touchscreen), `fine` (mouse/stylus).
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`@media (pointer: coarse) { /* styles for touch devices */ }`}
                  </pre>
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Breakpoints: Strategy and Best Practices */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. Breakpoints: Strategy and Best Practices
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A breakpoint is the point at which your website's layout
                changes. Choosing effective breakpoints is key to a robust
                responsive design.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Content-Based Breakpoints (The Golden Rule)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Instead of setting breakpoints at arbitrary device widths (e.g.,
                `768px` because that's an iPad), you should define breakpoints
                based on **when your content or layout starts to look bad or
                break.**
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:italic! tw:font-semibold!">
                Start with your content, then narrow your browser window. When
                the layout becomes cramped, unreadable, or awkward, *that's*
                where you should introduce a breakpoint and adjust your styles.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Mobile-First vs. Desktop-First (Revisited with Media Queries)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is a critical philosophy in RWD that dictates how you
                structure your CSS with media queries.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Mobile-First (Recommended):
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>
                      You write your base CSS for the smallest screen (mobile)
                      first.
                    </li>
                    <li>
                      You then use `min-width` media queries to progressively
                      *add* or *enhance* styles for larger screens.
                    </li>
                    <li>
                      **Example:**
                      <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                        {`/* Base styles for mobile (0px - 599px) */
.my-element {
    width: 100%;
    font-size: 1rem;
}
/* Styles for tablets and up (600px and wider) */
@media (min-width: 600px) {
    .my-element {
        width: 50%; /* Adjust for wider screens */
        font-size: 1.2rem;
    }
}
/* Styles for desktops and up (992px and wider) */
@media (min-width: 992px) {
    .my-element {
        width: 33%; /* Adjust for even wider screens */
        font-size: 1.5rem;
    }
}
 `}{" "}
                      </pre>
                    </li>
                    <li>
                      **Benefits:** Better performance on mobile (less CSS to
                      load initially), forces thoughtful content prioritization,
                      aligns with progressive enhancement.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Desktop-First:
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>
                      You write your base CSS for large screens (desktop) first.
                    </li>
                    <li>
                      You then use `max-width` media queries to *override*
                      styles for smaller screens.
                    </li>
                    <li>
                      **Example:**
                      <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                        {`/* Base styles for desktop (default) */
.my-element {
    width: 33%;
    font-size: 1.5rem;
}
/* Styles for tablets and smaller (up to 991px wide) */
@media (max-width: 991px) {
    .my-element {
        width: 50%; /* Override for smaller screens */
        font-size: 1.2rem;
    }
}
/* Styles for mobile and smaller (up to 599px wide) */
@media (max-width: 599px) {
    .my-element {
        width: 100%; /* Override for even smaller screens */
        font-size: 1rem;
    }
}`}
                      </pre>
                    </li>
                    <li>
                      **Cons:** Can lead to more complex and heavier CSS for
                      mobile as it has to load desktop styles and then override
                      them.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 4. Advanced Media Query Concepts */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                4. Advanced Media Query Concepts
              </h2>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Range Contexts (Media Queries Level 4 Syntax)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The traditional `min-width`/`max-width` syntax can sometimes be
                verbose for ranges. Media Queries Level 4 introduced a more
                concise and intuitive syntax using comparison operators.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`/* Old way: */
@media screen and (min-width: 768px) and (max-width: 1024px) { ... }

/* New (Level 4) way: */
@media (768px <= width <= 1024px) { ... } /* Width between 768px and 1024px (inclusive) */

@media (width < 600px) { /* Equivalent to max-width: 599px */ }
@media (width >= 1200px) { /* Equivalent to min-width: 1200px */ }`}
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This syntax is increasingly supported and offers improved
                readability, especially for complex ranges.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Using CSS Custom Properties (Variables) with Media Queries
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Combining CSS variables with media queries is incredibly
                powerful for managing design tokens that change responsively
                (e.g., colors, font sizes, spacing).
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`:root {
    --heading-color: #2c3e50;
    --base-font-size: 16px;
    --padding-unit: 1rem;
}

h1 {
    color: var(--heading-color);
    font-size: calc(var(--base-font-size) * 2.5);
    padding: var(--padding-unit);
}

@media (min-width: 768px) {
    :root {
        --heading-color: #3498db; /* Change color on larger screens */
        --base-font-size: 18px; /* Slightly larger base font */
        --padding-unit: 1.5rem; /* More padding */
    }
}
  `}{" "}
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You define your variables in the `:root` pseudo-class (or any
                other selector) and then redefine them inside media queries. Any
                element using these variables will automatically update.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Fluid Typography with `clamp()` and Viewport Units
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While not strictly a media query, `clamp()` is often used *in
                conjunction with* or *as an alternative to* complex media query
                chains for responsive text. It defines a minimum, preferred, and
                maximum value.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`h1 {
    /* min: 2rem, preferred: 5vw, max: 4rem */
    font-size: clamp(2rem, 5vw, 4rem);
}`}
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This ensures your text scales with the viewport (`5vw`) but
                never becomes too small (`2rem`) or too large (`4rem`), reducing
                the need for multiple font-size media queries.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                The Future: Container Queries (`@container`)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A significant evolution beyond traditional media queries.
                Instead of responding to the *viewport* size, container queries
                allow elements to respond to the size of their *parent
                container*. This is incredibly powerful for component-based
                design, where a component should look different depending on
                where it's placed on the page, not just the overall screen size.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.card-wrapper {
    container-type: inline-size; /* Define this element as a container query context */
}

@container (min-width: 400px) {
    .card {
        flex-direction: row; /* Card changes to row layout if its wrapper is 400px wide */
    }
}`}
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While still gaining broader adoption, `container-type` and
                `@container` are the next big thing in responsive design. Keep
                an eye on browser support!
              </p>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 5. Debugging and Testing Media Queries */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                5. Debugging and Testing Media Queries
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Testing is paramount. Here's how to effectively check your media
                queries:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Browser Developer Tools (Responsive Mode):
                  </strong>{" "}
                  Every modern browser has this.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>
                      **Chrome:** Right-click {`->`} Inspect {`->`} Click the
                      "Toggle device toolbar" icon (looks like a phone and
                      tablet). You can drag the handles, enter specific
                      dimensions, and select common device presets.
                    </li>
                    <li>
                      **Firefox:** Right-click {`->`} Inspect Element {`->`}{" "}
                      Click "Responsive Design Mode" icon (looks like a screen
                      with a mobile phone in front).
                    </li>
                  </ul>
                  This allows you to see exactly when your breakpoints trigger
                  and inspect the applied CSS.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Resize Your Browser Window:
                  </strong>{" "}
                  The simplest way. Dragging the browser window wider and
                  narrower will trigger your `width`/`height` media queries.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Test on Real Devices:
                  </strong>{" "}
                  Always test on actual smartphones and tablets. Emulators are
                  good, but real devices reveal subtle differences in rendering,
                  touch interactions, and performance.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Mastering Adaptability
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Media Queries are the indispensable tools that bring responsive
                web design to life. By mastering their syntax, understanding the
                different types and features, and adopting a mobile-first,
                content-driven approach to breakpoints, you gain incredible
                power to control how your designs adapt across the vast and
                ever-changing digital landscape.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Practice, experiment, and constantly test your designs across
                different conditions. The more comfortable you become with media
                queries, the more flexible and user-friendly your websites will
                be.
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
