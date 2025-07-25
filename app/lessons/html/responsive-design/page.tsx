import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "Responsive Web Design: Fluid Layouts & Flexible Media",
  description:
    "Learn the fundamentals of responsive web design, including fluid layouts and flexible media.",
  keywords: ["responsive design", "fluid layouts", "flexible media", "CSS"],
  openGraph: {
    title: "Responsive Web Design: Fluid Layouts & Flexible Media",
    description:
      "Learn the fundamentals of responsive web design, including fluid layouts and flexible media.",
    url: `${baseUrl}/lessons/html/responsive-design`,
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/responsive-design`,
  },
  metadataBase: new URL(baseUrl),
};

// Code Example 1: Meta Viewport Tag, Fluid Layouts, Flexible Images
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RWD Basics: Viewport, Fluid Layouts, Flexible Images</title>
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

        .section-container {
            background-color: #ffffff;
            padding: 30px;
            margin-bottom: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        /* --- Fluid Layouts (Percentages, Flexbox, Grid) --- */
        .fluid-layout-container {
            display: flex; /* Using Flexbox for fluidity */
            flex-wrap: wrap; /* Allows items to wrap on smaller screens */
            gap: 20px;
            border: 2px dashed #3498db;
            padding: 20px;
        }
        .fluid-box {
            background-color: #ecf0f1;
            padding: 20px;
            border-radius: 5px;
            flex: 1; /* Allows flex items to grow and shrink */
            min-width: 280px; /* Minimum width before wrapping */
            box-sizing: border-box; /* Include padding/border in width */
            text-align: center;
        }
        @media (min-width: 600px) {
            .fluid-layout-container.grid-example {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Grid for more structured fluidity */
                gap: 20px;
            }
        }
        .fluid-layout-container .grid-box {
            background-color: #9b59b6;
            color: white;
            padding: 30px;
        }

        /* --- Flexible Images and Media --- */
        .media-container {
            text-align: center;
            border: 2px dashed #2ecc71;
            padding: 20px;
        }
        .media-container img {
            max-width: 100%; /* Image will shrink but not grow beyond its original size */
            height: auto; /* Maintain aspect ratio */
            display: block; /* Remove extra space below image */
            margin: 0 auto 20px auto;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        /* Responsive Video Embed (Aspect Ratio Box) */
        .video-wrapper {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio (9 / 16 * 100) */
            height: 0;
            overflow: hidden;
            background-color: #bdc3c7;
            border-radius: 5px;
        }
        .video-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }

        /* Example using srcset/sizes and picture for demonstration */
        .picture-example {
            margin-top: 30px;
            display: flex;
            justify-content: center;
        }
        .picture-example picture {
            display: block;
            max-width: 100%;
        }
        .picture-example img {
            max-width: 100%;
            height: auto;
            display: block;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

    </style>
</head>
<body>
    <h1>Responsive Web Design: The Foundation</h1>

    <div class="section-container">
        <h2>The Essential &lt;meta name="viewport"&gt; Tag</h2>
        <p>This tag tells the browser how to control the page's dimensions and scaling, ensuring it renders at the device's actual width, rather than a desktop viewport scaled down.</p>
        <pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</pre>
        <p><strong>Try it:</strong> Remove the tag from this page's head and refresh on a mobile device or in dev tools' responsive mode. You'll see the difference immediately!</p>
    </div>

    <div class="section-container">
        <h2>Fluid Layouts: Adapting to Space</h2>
        <p>Instead of fixed pixel widths, fluid layouts use relative units like percentages, \`fr\` (fractional units), \`flex-grow\`, \`rem\`, and \`vw\` to ensure elements scale proportionally with the viewport size.</p>

        <h3>Flexbox-based Fluid Layout (Wraps content)</h3>
        <div class="fluid-layout-container">
            <div class="fluid-box">Box 1 (Flex Item)</div>
            <div class="fluid-box">Box 2 (Flex Item)</div>
            <div class="fluid-box">Box 3 (Flex Item)</div>
            <div class="fluid-box">Box 4 (Flex Item)</div>
        </div>
        <p class="tw-text-sm tw-text-gray-500 tw-mt-2 tw-text-center">Resize your browser window to see these boxes wrap.</p>

        <h3>Grid-based Fluid Layout (\`auto-fit, minmax\`)</h3>
        <p>On screens wider than 600px, this section uses CSS Grid for a more structured, automatically fitting layout.</p>
        <div class="fluid-layout-container grid-example">
            <div class="fluid-box grid-box">Grid Item A</div>
            <div class="fluid-box grid-box">Grid Item B</div>
            <div class="fluid-box grid-box">Grid Item C</div>
            <div class="fluid-box grid-box">Grid Item D</div>
            <div class="fluid-box grid-box">Grid Item E</div>
            <div class="fluid-box grid-box">Grid Item F</div>
        </div>
        <p class="tw-text-sm tw-text-gray-500 tw-mt-2 tw-text-center">Above 600px, these are uniform columns. Below, they behave like Flexbox items.</p>
    </div>

    <div class="section-container">
        <h2>Flexible Images and Media</h2>
        <p>Images and videos should also adapt to prevent overflow and maintain their aspect ratios.</p>

        <h3>Basic Image Responsiveness: \`max-width: 100%; height: auto;\`</h3>
        <div class="media-container">
            <img src="https://placehold.co/800x450/3498db/ffffff?text=Responsive+Image" alt="A responsive image example">
            <p>This image will never exceed its container's width, scaling down gracefully.</p>
        </div>

        <h3>Responsive Video Embeds (Aspect Ratio Box)</h3>
        <div class="media-container">
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=f7_e7W7xY_mXp-tO" allowfullscreen></iframe>
            </div>
            <p>The video maintains its 16:9 aspect ratio as the browser resizes.</p>
        </div>

        <h3>Advanced Image Optimization: &lt;img srcset&gt; and &lt;picture&gt; (Conceptual)</h3>
        <p>For even better performance and quality, use <code>srcset</code>/<code>sizes</code> on <code>&lt;img&gt;</code> or the <code>&lt;picture&gt;</code> element to serve different image versions based on resolution or art direction.</p>
        <div class="picture-example">
            <picture>
                <source srcset="https://placehold.co/400x200/e74c3c/ffffff?text=Small+Screen" media="(max-width: 600px)">
                <source srcset="https://placehold.co/800x400/27ae60/ffffff?text=Medium+Screen" media="(max-width: 1200px)">
                <img src="https://placehold.co/1200x600/f39c12/ffffff?text=Large+Screen" alt="Adaptive image example">
            </picture>
        </div>
        <p class="tw-text-sm tw-text-gray-500 tw-mt-2 tw-text-center">Open browser dev tools, switch to responsive mode, and change device widths to see the image source change (may require refresh).</p>
    </div>
</body>
</html>`;

// Code Example 2: Media Queries (Syntax, Mobile-First)
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Web Design: Media Queries</title>
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

        .section-container {
            background-color: #ffffff;
            padding: 30px;
            margin-bottom: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            border: 2px dashed #999;
        }

        /* --- Mobile-First Base Styles (Default for small screens) --- */
        .header {
            background-color: #3498db;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 1.5em;
            margin-bottom: 20px;
        }

        .main-content {
            display: block; /* Default to single column */
            padding: 15px;
        }

        .sidebar {
            background-color: #ecf0f1;
            padding: 15px;
            margin-top: 20px; /* Below main content on mobile */
            border-radius: 5px;
        }

        .card-container {
            display: flex;
            flex-direction: column; /* Stacked on mobile */
            gap: 15px;
        }

        .card {
            background-color: #f1c40f;
            color: #333;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .footer {
            background-color: #34495e;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 0.9em;
            margin-top: 40px;
        }

        /* --- Media Queries: Adapting for Larger Screens (Mobile-First) --- */

        /* Small to Medium Screens (e.g., Tablets, larger phones) */
        @media screen and (min-width: 600px) {
            .header {
                font-size: 2em;
            }

            .main-layout {
                display: flex; /* Activate flexbox for layout */
                gap: 30px;
                padding: 0 20px;
            }

            .main-content {
                flex: 2; /* Main content takes 2 parts */
                order: 1; /* Place main content first */
            }

            .sidebar {
                flex: 1; /* Sidebar takes 1 part */
                margin-top: 0; /* No top margin when beside main content */
                order: 2; /* Place sidebar second */
            }

            .card-container {
                flex-direction: row; /* Cards in a row */
                flex-wrap: wrap; /* Allow wrapping if not enough space */
                justify-content: center;
            }

            .card {
                flex: 1 1 calc(50% - 15px); /* Two cards per row, with gap */
                max-width: calc(50% - 15px);
            }
        }

        /* Large Screens (e.g., Desktops) */
        @media screen and (min-width: 992px) {
            .header {
                font-size: 2.5em;
            }

            .main-layout {
                max-width: 1200px; /* Constrain max width for large screens */
                margin: 0 auto; /* Center the layout */
            }

            .card {
                flex: 1 1 calc(33.333% - 20px); /* Three cards per row, with gap */
                max-width: calc(33.333% - 20px);
            }
        }

        /* Example for specific orientation (e.g., landscape phones) */
        @media screen and (max-width: 767px) and (orientation: landscape) {
            .header {
                padding: 10px; /* Smaller header in landscape mobile */
                font-size: 1.2em;
            }
            .sidebar {
                display: none; /* Hide sidebar to save space */
            }
        }

        /* Example for print media */
        @media print {
            body {
                background-color: white;
                color: black;
                font-size: 12pt;
            }
            .header, .footer, .sidebar {
                display: none; /* Hide non-essential elements for print */
            }
            .card {
                border: 1px solid #ccc;
                page-break-inside: avoid; /* Prevent card from breaking across pages */
            }
        }

    </style>
</head>
<body>
    <div class="header">
        Responsive Design Example
    </div>

    <h1>CSS Media Queries: The Cornerstone of RWD</h1>

    <div class="section-container">
        <h2>What are Media Queries?</h2>
        <p>Media queries allow you to apply CSS styles based on device characteristics (like screen width, height, orientation, resolution, etc.). They let your design adapt to different contexts.</p>
        <p><strong>Syntax:</strong> <code>@media [media type] and ([media feature]) { /* CSS rules */ }</code></p>
        <p>This page uses a **Mobile-First** approach. Resize your browser window to see the layout transform!</p>
    </div>

    <div class="main-layout">
        <div class="main-content section-container">
            <h3>Main Content Area</h3>
            <p>This is the primary content of the page. It will take up more space on larger screens and stack above the sidebar on smaller screens.</p>
            <p>On small screens, the layout is a single column. As you widen the browser, it transitions to a two-column layout (main content + sidebar), and then cards adjust.</p>
        </div>

        <div class="sidebar section-container">
            <h3>Sidebar</h3>
            <p>This sidebar provides supplementary information. It will move below the main content on smaller screens.</p>
        </div>
    </div>

    <div class="section-container">
        <h2>Responsive Cards Section</h2>
        <div class="card-container">
            <div class="card">
                <h4>Card 1</h4>
                <p>Content for Card 1.</p>
            </div>
            <div class="card">
                <h4>Card 2</h4>
                <p>Content for Card 2 that is a bit longer to test wrapping.</p>
            </div>
            <div class="card">
                <h4>Card 3</h4>
                <p>Content for Card 3.</p>
            </div>
            <div class="card">
                <h4>Card 4</h4>
                <p>More content here for Card 4.</p>
            </div>
        </div>
    </div>

    <div class="footer">
        &copy; 2023 Responsive Design Tutorial.
    </div>
</body>
</html>`;

// Code Example 3: Advanced RWD Techniques (rem/em, vw/vh, clamp, CSS Vars)
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Web Design: Advanced Techniques</title>
    <style>
        :root {
            /* Define base font size for rem calculations */
            font-size: 16px; /* Default for most browsers */

            /* CSS Variables for responsive adjustments */
            --primary-color: #3498db;
            --secondary-color: #e74c3c;
            --text-color: #333;
            --heading-font-size: 2.5rem; /* Base for larger screens */
            --body-font-size: 1rem;
            --spacing-unit: 1.5rem;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: var(--spacing-unit);
            background-color: #f0f2f5;
            color: var(--text-color);
            line-height: 1.6;
            font-size: var(--body-font-size); /* Use rem or var */
        }

        h1, h2, h3 {
            color: var(--primary-color);
            text-align: center;
            margin-bottom: var(--spacing-unit);
        }
        h1 {
            font-size: var(--heading-font-size);
            /* Fluid typography with clamp() */
            font-size: clamp(1.8rem, 4vw + 1rem, 3rem);
        }

        .section-container {
            background-color: #ffffff;
            padding: var(--spacing-unit);
            margin-bottom: calc(var(--spacing-unit) * 2);
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            border: 2px dashed #999;
        }

        /* --- REM and EM Units --- */
        .rem-example {
            font-size: 1.25rem; /* 1.25 * 16px = 20px (if root font-size is 16px) */
            background-color: #d1e7dd;
            padding: 1rem;
            margin-bottom: 1rem;
        }
        .em-example {
            font-size: 1.2em; /* 1.2 * 1.25rem = 1.5rem = 24px (relative to parent) */
            background-color: #f8d7da;
            padding: 1em; /* 1 * 1.2em = 1.2em (relative to self's font-size) */
        }

        /* --- Viewport Units (vw, vh, vmin, vmax) --- */
        .hero-section {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 50vh; /* 50% of viewport height */
            padding: 2vw; /* 2% of viewport width */
            margin-bottom: 40px;
        }
        .hero-section h2 {
            font-size: 5vw; /* 5% of viewport width for font size */
            margin: 0 0 1vh 0; /* 1% of viewport height for margin */
            color: white;
        }
        .hero-section p {
            font-size: 2.5vw;
        }
        /* Clamp these to prevent too small/large fonts */
        @media (min-width: 900px) {
            .hero-section h2 {
                font-size: clamp(3rem, 5vw, 6rem);
            }
            .hero-section p {
                font-size: clamp(1rem, 2.5vw, 1.5rem);
            }
        }
        @media (max-width: 400px) {
             .hero-section h2 {
                font-size: 10vmin; /* Smaller of vw/vh, useful for mobile landscape */
            }
            .hero-section p {
                font-size: 5vmin;
            }
        }


        /* --- CSS Custom Properties (Variables) for RWD --- */
        .color-box {
            width: 150px;
            height: 150px;
            background-color: var(--primary-color);
            border-radius: 8px;
            margin: 20px auto;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
        }
        @media (max-width: 768px) {
            :root {
                --primary-color: #27ae60; /* Green on smaller screens */
                --secondary-color: #f39c12; /* Orange on smaller screens */
                --heading-font-size: 1.8rem;
                --body-font-size: 0.9rem;
                --spacing-unit: 1rem;
            }
            .color-box {
                background-color: var(--secondary-color); /* Use secondary color */
            }
        }

    </style>
</head>
<body>
    <h1>Responsive Web Design: Advanced Techniques</h1>

    <div class="section-container hero-section">
        <h2>Hero Section</h2>
        <p>This section uses viewport units (vh, vw) to size its height and text relative to the browser window. Resize to see its effect.</p>
    </div>

    <div class="section-container">
        <h2>\`rem\` and \`em\` Units for Scalable Typography & Spacing</h2>
        <p>Using relative units like <code>rem</code> and <code>em</code> provides better control over scaling fonts and elements across devices, especially when combined with a base font size defined on the root (\`:root\`).</p>
        <div class="rem-example">
            This text is sized using \`rem\` (1.25rem). It's relative to the root (\`<html>\`) font size.
            <div class="em-example">
                This text is sized using \`em\` (1.2em). It's relative to its parent's font size (which is 1.25rem).
                <p style="font-size: 0.8em; margin-top: 0.5em;">This paragraph is 0.8em, relative to its parent's 1.2em.</p>
            </div>
        </div>
        <p><strong>Benefit:</strong> Change the base font size on <code>&lt;html&gt;</code>, and all \`rem\` units scale proportionally. \`em\` units are good for components where spacing or sizing needs to be relative to the component's *own* font size.</p>
    </div>

    <div class="section-container">
        <h2>CSS Custom Properties (Variables) for RWD</h2>
        <p>Variables allow you to define values once and reuse them. This is incredibly powerful for responsive design, as you can change variable values within media queries.</p>
        <div class="color-box">
            Color changes on resize!
        </div>
        <p>The background color and font size for headings/body text are controlled by CSS variables defined in <code>:root</code>. A media query then overrides these variables for smaller screens, demonstrating how you can easily manage responsive styles.</p>
    </div>

    <div class="section-container">
        <h2>\`clamp()\` for Fluid Typography</h2>
        <p>The <code>clamp()</code> CSS function lets you set a preferred value within a range of minimum and maximum values. It's perfect for fluid typography that scales but doesn't get too small or too large.</p>
        <p>Example: <code>font-size: clamp(1rem, 3vw, 2rem);</code></p>
        <p>This means the font size will be at least 1rem, at most 2rem, and will try to be 3vw (3% of viewport width) when within that range.</p>
    </div>

    <div class="section-container">
        <h2>Performance Considerations in RWD</h2>
        <p>Beyond layout, ensuring a responsive site performs well is key. Heavy images, too many web fonts, or complex DOM structures can slow down mobile loading.</p>
        <ul>
            <li><strong>Image Optimization:</strong> Compress images, use modern formats (WebP), implement lazy loading.</li>
            <li><strong>Critical CSS:</strong> Inline essential CSS for above-the-fold content to render quickly.</li>
            <li><strong>Font Loading:</strong> Use <code>font-display: swap;</code> and preload important fonts.</li>
            <li><strong>Minimize Reflows/Repaints:</strong> Avoid animating properties that trigger layout changes where possible.</li>
        </ul>
    </div>
</body>
</html>`;

export default function ResponsiveWebDesignPage() {
  const page = 29; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/AAD8B2/3A7D44?text=Responsive+Web+Design"
              alt="Responsive Web Design Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Mastering Responsive Web Design: Adapting to Every Screen 📱💻
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              In today's multi-device world, a website must look and function
              flawlessly across desktops, laptops, tablets, and smartphones.
              **Responsive Web Design (RWD)** is the approach that makes this
              possible, ensuring an optimal viewing experience for all users,
              regardless of their device's screen size or orientation.
            </p>

            {/* 1. Introduction to RWD */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. What is Responsive Web Design?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                RWD is an approach to web design that aims to provide an optimal
                viewing and interaction experience—easy reading and navigation
                with a minimum of resizing, panning, and scrolling—across a wide
                range of devices (from desktop computer monitors to mobile
                phones).
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Why is it indispensable today?
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Ubiquitous Mobile Usage:
                  </strong>{" "}
                  More than half of all web traffic comes from mobile devices.
                  If your site isn't mobile-friendly, you're missing a massive
                  audience.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Enhanced User Experience:
                  </strong>{" "}
                  A site that adapts provides a better experience, reducing
                  frustration and increasing engagement.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    SEO Benefits:
                  </strong>{" "}
                  Google prioritizes mobile-friendly websites in its search
                  results (mobile-first indexing).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Future-Proofing:
                  </strong>{" "}
                  New devices and screen sizes emerge constantly. RWD helps your
                  site gracefully handle unknown future viewports.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Cost-Effective:
                  </strong>{" "}
                  Maintaining one responsive site is generally more efficient
                  than separate desktop and mobile versions.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                The Three Pillars of RWD:
              </h3>
              <ol className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Fluid Grids:
                  </strong>{" "}
                  Using relative units (percentages, `fr`, `rem`, `vw`) for
                  layouts instead of fixed pixels.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Flexible Images and Media:
                  </strong>{" "}
                  Ensuring images and videos scale proportionally and don't
                  overflow their containers.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Media Queries:
                  </strong>{" "}
                  CSS rules that apply styles conditionally based on device
                  characteristics (e.g., screen width).
                </li>
              </ol>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. The Foundation of RWD */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. The Foundation of Responsive Design
              </h2>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                The Essential `&lt;meta name="viewport"&gt;` Tag
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This tiny but mighty HTML tag is paramount for RWD. Without it,
                mobile browsers will often render the page at a desktop width
                (e.g., 980px) and then scale it down, making text unreadable and
                requiring users to zoom in.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                &lt;meta name="viewport" content="width=device-width,
                initial-scale=1.0"&gt;
              </pre>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `width=device-width`
                  </strong>
                  : Sets the width of the viewport to the width of the device in
                  device-independent pixels. This is crucial for mobile devices.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `initial-scale=1.0`
                  </strong>
                  : Sets the initial zoom level when the page is first loaded.
                  `1.0` means no zoom, showing the page at its natural size.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Fluid Layouts: Relative Units for Adaptability
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A fluid layout means elements within your page resize and
                reposition themselves based on the available viewport space.
                This is achieved by using relative units for sizing instead of
                fixed pixel values.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Percentages (`%`):
                  </strong>{" "}
                  Ideal for widths, paddings, and margins of elements relative
                  to their parent container. E.g., `width: 50%;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Fractional Units (`fr` in Grid):
                  </strong>{" "}
                  In CSS Grid, `fr` units distribute available space
                  proportionally. E.g., `grid-template-columns: 1fr 2fr;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Flexible Growth (`flex-grow` in Flexbox):
                  </strong>{" "}
                  Flex items can grow to fill available space. E.g., `flex: 1;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Viewport Units (`vw`, `vh`, `vmin`, `vmax`):
                  </strong>{" "}
                  `vw` (viewport width) and `vh` (viewport height) are
                  percentages of the viewport dimensions. `1vw` is 1% of the
                  viewport's width. Useful for elements that need to scale with
                  the screen itself.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `rem` and `em` (more on these later):
                  </strong>{" "}
                  Relative font sizes and spacing, usually based on the root
                  font size or parent's font size.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Avoid fixed `px` widths** for major layout components (e.g.,
                `width: 960px;`). These will cause horizontal scrolling on
                smaller screens.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Flexible Images and Media
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Images and other media (like videos) are often fixed-size and
                can easily break a fluid layout by overflowing their containers.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Basic Image Responsiveness:
                  </strong>{" "}
                  The most fundamental rule for images.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`img {
    max-width: 100%;
    height: auto;
    display: block; /* Removes extra space below inline images */
}`}
                  </pre>
                  This ensures images scale down to fit their container but
                  never stretch beyond their original size.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Responsive Video Embeds (Aspect Ratio Boxes):
                  </strong>{" "}
                  Iframes for videos (e.g., YouTube, Vimeo) often have fixed
                  dimensions. An "aspect ratio box" wrapper helps them scale
                  proportionally.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`.video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio (9 / 16 * 100%) */
    height: 0;
    overflow: hidden;
}
.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Advanced Image Optimization (`srcset`, `sizes`,
                    `&lt;picture&gt;`):
                  </strong>{" "}
                  For optimal performance and visual quality, you can serve
                  different image files based on device resolution or screen
                  size, or even for art direction.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>
                      <strong className="tw:font-semibold! tw:text-orange-600!">
                        `srcset` and `sizes` on `&lt;img&gt;`
                      </strong>
                      : Provides the browser with a list of image sources at
                      different resolutions/sizes, letting it pick the most
                      appropriate one.
                    </li>
                    <li>
                      <strong className="tw:font-semibold! tw:text-orange-600!">
                        `&lt;picture&gt;` element
                      </strong>
                      : Allows for "art direction," where you serve entirely
                      different images or crops for different screen
                      sizes/orientations.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. The Cornerstone: CSS Media Queries */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. The Cornerstone: CSS Media Queries
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Media queries are the core mechanism of RWD, allowing you to
                apply specific CSS rules only when certain conditions are met
                (e.g., "if the screen is wider than X pixels, apply these
                styles").
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Media Query Syntax and Structure
              </h3>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                @media [media type] [and | not | ,] ([media feature]){" "}
                {`{
    /* CSS rules to apply when condition is true */
}`}
              </pre>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `@media` rule:
                  </strong>{" "}
                  Starts the media query.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Media Type (Optional, default `all`):
                  </strong>{" "}
                  Specifies the device type the media query applies to. Common
                  types:
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>`all`: For all devices.</li>
                    <li>
                      `screen`: For color computer screens. (Most common for web
                      design)
                    </li>
                    <li>`print`: For printers.</li>
                    <li>`speech`: For screen readers.</li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Logical Operators:
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>
                      `and`: Combines multiple media features. E.g.,
                      `(min-width: 768px) and (orientation: landscape)`.
                    </li>
                    <li>
                      `not`: Negates the entire media query. E.g., `@media not
                      screen {`{ ... }`}`.
                    </li>
                    <li>
                      `,` (comma, acts as `or`): Applies styles if any of the
                      conditions are true. E.g., `@media screen and (max-width:
                      600px), print {`{ ... }`}`.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Media Features (The conditions):
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>
                      `width`, `height`, `min-width`, `max-width`, `min-height`,
                      `max-height`: Dimensions of the viewport. These are the
                      most commonly used for RWD.
                    </li>
                    <li>`orientation`: `portrait` or `landscape`.</li>
                    <li>
                      `resolution`: Pixel density (e.g., `min-resolution: 2dppx`
                      for retina screens).
                    </li>
                    <li>
                      `aspect-ratio`, `min-aspect-ratio`, `max-aspect-ratio`:
                      Aspect ratio of the viewport.
                    </li>
                    <li>
                      `prefers-color-scheme`: `light` or `dark` (for dark mode).
                    </li>
                    <li>And many more!</li>
                  </ul>
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Common Breakpoints: Where to Apply Media Queries
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While common device sizes give a starting point (e.g., 768px for
                tablets, 992px for desktops), the best practice is to use
                **content-based breakpoints**. This means you add a media query
                *only when your content or layout starts to look bad* at a
                certain size, rather than adhering to rigid device dimensions.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Typical (flexible) breakpoints often include:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Small (e.g., `max-width: 575px`):
                  </strong>{" "}
                  Mobile phones.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Medium (e.g., `min-width: 576px` and `max-width: 767px`):
                  </strong>{" "}
                  Larger phones, small tablets.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Large (e.g., `min-width: 768px` and `max-width: 991px`):
                  </strong>{" "}
                  Tablets, small laptops.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Extra Large (e.g., `min-width: 992px`):
                  </strong>{" "}
                  Desktops, large screens.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Mobile-First vs. Desktop-First Approach
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Desktop-First:
                  </strong>{" "}
                  You write CSS for large screens first, then use `max-width`
                  media queries to *override* styles for smaller screens.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`.container { width: 960px; } /* Desktop default */
@media (max-width: 768px) {
    .container { width: 100%; } /* Overrides for smaller screens */
}`}
                  </pre>
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-2! tw:italic! tw:font-semibold!">
                    Con: More CSS overrides needed, can lead to heavier CSS
                    files for mobile, as desktop styles are loaded first.
                  </p>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Mobile-First (Recommended):
                  </strong>{" "}
                  You write base CSS for the smallest screens first, then use
                  `min-width` media queries to *add* or *enhance* styles for
                  progressively larger screens.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`.container { width: 100%; } /* Mobile default */
@media (min-width: 768px) {
    .container { width: 760px; margin: 0 auto; } /* Adds styles for larger screens */
}`}
                  </pre>
                  <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-2! tw:italic! tw:font-semibold!">
                    Pro: Leaner CSS for mobile, better performance on smaller
                    devices, forces you to consider essential content first.
                  </p>
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 4. Advanced RWD Techniques and Concepts */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                4. Advanced RWD Techniques & Concepts
              </h2>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `rem` and `em` Units: The Power of Relative Sizing
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `rem` (root em):
                  </strong>{" "}
                  Relative to the font-size of the root `&lt;html&gt;` element.
                  If `html {`{ font-size: 16px; }`}`, then `1rem` is `16px`,
                  `1.5rem` is `24px`. This is excellent for consistent scaling
                  of typography and spacing throughout your entire site.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `em`:
                  </strong>{" "}
                  Relative to the font-size of the *parent element*. If a parent
                  element has `font-size: 20px`, then `1em` within that element
                  is `20px`. This can lead to compounding issues if not managed
                  carefully (e.g., `font-size: 0.8em;` inside another `0.8em`
                  element). Best for sizing elements *relative to their own font
                  size* (e.g., `padding: 1em;` on a button).
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                By setting a base `font-size` on `&lt;html&gt;` (e.g.,
                `font-size: 62.5%;` which makes `1rem = 10px`), and then using
                `rem` for all other font sizes and responsive lengths, you can
                easily scale your entire design by changing only the root font
                size within media queries.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Viewport Units (`vw`, `vh`, `vmin`, `vmax`)
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `vw` (viewport width):
                  </strong>{" "}
                  1% of the viewport's width.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `vh` (viewport height):
                  </strong>{" "}
                  1% of the viewport's height.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `vmin` (viewport minimum):
                  </strong>{" "}
                  1% of the smaller dimension (width or height).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `vmax` (viewport maximum):
                  </strong>{" "}
                  1% of the larger dimension (width or height).
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Viewport units are great for elements that should always be
                proportional to the screen size, like hero sections, full-bleed
                images, or fluid typography (though combine with `clamp()` for
                robustness).
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Responsive Typography with `clamp()`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `clamp()` CSS function is a game-changer for fluid
                typography. It allows you to set a font size that scales with
                the viewport, but never goes below a minimum or above a maximum
                size.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`h1 {
    font-size: clamp(2rem, 5vw + 1rem, 4rem);
}`}
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This means: `min-size`, `preferred-size`, `max-size`. The font
                size will be `5vw + 1rem` if it falls between `2rem` and `4rem`.
                If `5vw + 1rem` becomes smaller than `2rem`, it's `2rem`. If it
                becomes larger than `4rem`, it's `4rem`. This creates perfectly
                scalable, yet constrained, text.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                CSS Custom Properties (Variables) for RWD
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                CSS variables (`--my-variable: value;`) can be defined globally
                (on `:root`) and then easily overridden within media queries,
                centralizing responsive adjustments.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`:root {
    --primary-color: #3498db;
    --heading-font-size: 2.5rem;
}`}
                {`h1 { color: var(--primary-color); font-size: var(--heading-font-size); }

@media (max-width: 768px) {
    :root {
        --primary-color: #e74c3c; /* Change color for mobile */
        --heading-font-size: 1.8rem; /* Smaller heading for mobile */
    }
}`}
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This keeps your CSS cleaner and makes it easier to manage theme
                or layout changes at different breakpoints.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Performance Considerations in RWD
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A responsive site should also be a fast site, especially on
                mobile networks.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Image Optimization:
                  </strong>{" "}
                  Serve appropriately sized images (`srcset`, `{`<picture>`}`),
                  compress them (WebP is great), and implement lazy loading for
                  images below the fold.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Critical CSS:
                  </strong>{" "}
                  Load only the essential CSS required to render the
                  "above-the-fold" content directly in your HTML `&lt;head&gt;`.
                  Defer loading of non-critical CSS.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Font Optimization:
                  </strong>{" "}
                  Use `font-display: swap;` to prevent invisible text during
                  font loading, and consider preloading important fonts.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Minimize DOM Complexity:
                  </strong>{" "}
                  Simpler HTML structures are easier for browsers to render
                  across devices.
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section3} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 5. Tools and Testing */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                5. Tools and Testing for RWD
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Effective testing is crucial to ensure your responsive design
                works as intended across all viewports.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Browser Developer Tools:
                  </strong>{" "}
                  Most modern browsers (Chrome, Firefox, Edge, Safari) have
                  built-in responsive design modes. This allows you to simulate
                  various device sizes, pixel densities, and even orientations
                  directly in your browser. Look for the "Toggle Device Toolbar"
                  or "Responsive Design Mode" icon.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Google Lighthouse / PageSpeed Insights:
                  </strong>{" "}
                  These tools provide detailed audits on performance,
                  accessibility, SEO, and "best practices" including
                  mobile-friendliness. They offer actionable recommendations to
                  improve your RWD.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Real Device Testing:
                  </strong>{" "}
                  While emulators are good, nothing beats testing on actual
                  physical devices. Different devices, operating systems, and
                  browser versions can reveal subtle issues. Services like
                  BrowserStack or LambdaTest offer cloud-based real device
                  testing.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: An Ongoing Process
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Responsive Web Design isn't a "set it and forget it" task; it's
                an ongoing process of refinement and adaptation. By embracing
                fluid layouts, flexible media, and powerful media queries
                (especially with a mobile-first philosophy), you can create
                websites that are accessible, performant, and delightful for all
                users, regardless of how they access your content.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Remember to always prioritize user experience. A responsive site
                isn't just about shrinking or expanding; it's about providing
                the best possible interaction for each context. Practice these
                techniques, use your browser's dev tools extensively, and happy
                designing!
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
