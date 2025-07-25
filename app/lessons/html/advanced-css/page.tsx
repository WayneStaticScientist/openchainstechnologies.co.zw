import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "Advanced CSS - OpenChains Technologies",
  description:
    "Explore advanced CSS techniques including custom properties, filters, blend modes, and grid layout. Enhance your web design skills with OpenChains Technologies.",
  openGraph: {
    type: "website",
    url: `${baseUrl}/lessons/html/advanced-css`,
    title: "Advanced CSS - OpenChains Technologies",
    description:
      "Explore advanced CSS techniques including custom properties, filters, blend modes, and grid layout. Enhance your web design skills with OpenChains Technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced CSS - OpenChains Technologies",
    description:
      "Explore advanced CSS techniques including custom properties, filters, blend modes, and grid layout. Enhance your web design skills with OpenChains Technologies.",
  },
  keywords: [
    "advanced CSS",
    "CSS custom properties",
    "CSS filters",
    "CSS blend modes",
    "CSS grid layout",
    "web design",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/html/advanced-css`,
  },
  metadataBase: new URL(baseUrl),
};
// Code Example 1: Custom Properties, Filters & Blend Modes
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced CSS: Variables, Filters, Blend Modes</title>
    <style>
        :root {
            /* CSS Custom Properties (Variables) */
            --primary-color: #3498db;
            --secondary-color: #2ecc71;
            --text-color: #333;
            --bg-color: #f0f2f5;
            --card-bg: #ffffff;
            --border-radius: 8px;
            --spacing-medium: 20px;
            --box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: var(--spacing-medium);
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        h1, h2, h3 {
            color: var(--primary-color);
            text-align: center;
            margin-bottom: var(--spacing-medium);
        }

        .container {
            max-width: 900px;
            width: 100%;
            margin: 0 auto 40px auto;
            padding: var(--spacing-medium);
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            border: 2px dashed var(--secondary-color);
            box-sizing: border-box;
        }

        /* --- Custom Properties Demo --- */
        .themed-box {
            width: 200px;
            padding: 15px;
            margin: 20px auto;
            background-color: var(--primary-color);
            color: white;
            border-radius: var(--border-radius);
            text-align: center;
            font-weight: bold;
            box-shadow: var(--box-shadow);
        }

        .themed-box.secondary {
            background-color: var(--secondary-color);
        }

        .themed-button {
            background-color: var(--primary-color);
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1em;
            margin-top: 10px;
            transition: background-color 0.3s ease;
        }
        .themed-button:hover {
            background-color: var(--secondary-color);
        }

        /* Override a variable within a specific scope */
        .section-with-override {
            --primary-color: #e74c3c; /* Local override */
            border-color: var(--primary-color); /* Uses local override */
            padding: 15px;
            margin-top: 20px;
            border-radius: var(--border-radius);
            border: 2px solid;
        }

        /* --- CSS Filters Demo --- */
        .image-gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
        }

        .filter-item {
            position: relative;
            width: 200px;
            height: 150px;
            overflow: hidden;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            transition: all 0.3s ease-in-out;
            cursor: pointer;
        }

        .filter-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: filter 0.5s ease;
        }

        .filter-item span {
            position: absolute;
            bottom: 10px;
            left: 10px;
            color: white;
            background-color: rgba(0,0,0,0.5);
            padding: 5px 8px;
            border-radius: 4px;
            font-size: 0.9em;
            font-weight: bold;
        }

        .filter-item:nth-child(1) img { filter: none; } /* Original */
        .filter-item:nth-child(2) img { filter: blur(3px); }
        .filter-item:nth-child(3) img { filter: grayscale(100%); }
        .filter-item:nth-child(4) img { filter: sepia(100%); }
        .filter-item:nth-child(5) img { filter: contrast(150%) brightness(120%); }
        .filter-item:nth-child(6) img { filter: hue-rotate(90deg) saturate(200%); }
        .filter-item:nth-child(7) img { filter: invert(100%); }
        .filter-item:nth-child(8) img { filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.5)); }
        .filter-item:nth-child(9) img { filter: blur(1px) grayscale(50%) hue-rotate(180deg); } /* Multiple */

        /* Hover effects */
        .filter-item:hover img { filter: none !important; transform: scale(1.05); }

        /* --- CSS Blend Modes Demo --- */
        .blend-mode-gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
        }

        .blend-item {
            width: 200px;
            height: 150px;
            background-image: url('https://placehold.co/200x150/8e44ad/ffffff?text=Background');
            background-size: cover;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            position: relative;
            overflow: hidden;
        }

        .blend-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(52, 152, 219, 0.7); /* A semi-transparent blue */
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            font-size: 1.1em;
            text-shadow: 0 0 5px rgba(0,0,0,0.5);
            transition: opacity 0.3s ease;
        }

        /* Apply blend modes to the overlay (mix-blend-mode) */
        .blend-item:nth-child(1) .blend-overlay { mix-blend-mode: normal; } /* Default */
        .blend-item:nth-child(2) .blend-overlay { mix-blend-mode: multiply; }
        .blend-item:nth-child(3) .blend-overlay { mix-blend-mode: screen; }
        .blend-item:nth-child(4) .blend-overlay { mix-blend-mode: overlay; }
        .blend-item:nth-child(5) .blend-overlay { mix-blend-mode: darken; }
        .blend-item:nth-child(6) .blend-overlay { mix-blend-mode: lighten; }
        .blend-item:nth-child(7) .blend-overlay { mix-blend-mode: difference; }
        .blend-item:nth-child(8) .blend-overlay { mix-blend-mode: hard-light; }

        .blend-item:hover .blend-overlay { opacity: 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Advanced CSS Topics: Styling with Precision & Power</h1>
        <p class="tw-text-center">Let's explore some CSS features that give you incredible control over styling, reusability, and visual effects.</p>

        <h2>1. CSS Custom Properties (Variables)</h2>
        <p>CSS Custom Properties, often called CSS Variables, allow you to define reusable values throughout your stylesheets. They are incredibly powerful for maintaining consistency, reducing redundancy, and enabling easier theming or dynamic styling.</p>
        <p>You define them with a double-hyphen prefix (<code>--my-variable-name</code>) and use them with the <code>var()</code> function.</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
:root { /* Global scope */
    --primary-color: #3498db;
    --spacing-medium: 20px;
}

.my-element {
    background-color: var(--primary-color);
    padding: var(--spacing-medium);
}
        </pre>
        <h3>Scope and Fallbacks:</h3>
        <p>Variables are scoped like normal CSS. Defining them on <code>:root</code> makes them globally available. You can also define them on specific elements, which will override global values for that element and its children. You can also provide fallback values if a variable isn't defined: <code>var(--non-existent-var, default-value);</code></p>

        <div class="themed-box">Primary Themed Box</div>
        <div class="themed-box secondary">Secondary Themed Box</div>
        <button class="themed-button">Themed Button</button>
        <div class="section-with-override">
            This section has its own --primary-color variable for its border!
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            Check the <code>:root</code> and <code>.section-with-override</code> in the CSS to see how variables are defined and overridden.
        </p>

        <hr class="tw:my-8! tw:border-gray-300!" />

        <h2>2. CSS Filters</h2>
        <p>The <code>filter</code> CSS property applies graphical effects like blur, grayscale, hue-rotate, or drop-shadow to an element. It's often used for images, but can be applied to any HTML element.</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
img { filter: grayscale(100%); }
.blurred-element { filter: blur(5px); }
        </pre>
        <p>You can apply multiple filters by separating them with a space.</p>
        <p class="tw-text-center tw-mt-4 tw-mb-2"><strong>Hover over the images to see their original state!</strong></p>
        <div class="image-gallery">
            <div class="filter-item"><img src="https://placehold.co/200x150/d35400/ffffff?text=Original" alt="Original"><span>None</span></div>
            <div class="filter-item"><img src="https://placehold.co/200x150/d35400/ffffff?text=Blur" alt="Blur"><span>blur(3px)</span></div>
            <div class="filter-item"><img src="https://placehold.co/200x150/d35400/ffffff?text=Grayscale" alt="Grayscale"><span>grayscale(100%)</span></div>
            <div class="filter-item"><img src="https://placehold.co/200x150/d35400/ffffff?text=Sepia" alt="Sepia"><span>sepia(100%)</span></div>
            <div class="filter-item"><img src="https://placehold.co/200x150/d35400/ffffff?text=Contrast" alt="Contrast"><span>contrast(150%)</span></div>
            <div class="filter-item"><img src="https://placehold.co/200x150/d35400/ffffff?text=Hue-Rotate" alt="Hue-Rotate"><span>hue-rotate(90deg)</span></div>
            <div class="filter-item"><img src="https://placehold.co/200x150/d35400/ffffff?text=Invert" alt="Invert"><span>invert(100%)</span></div>
            <div class="filter-item"><img src="https://placehold.co/200x150/d35400/ffffff?text=Drop-Shadow" alt="Drop-Shadow"><span>drop-shadow()</span></div>
            <div class="filter-item"><img src="https://placehold.co/200x150/d35400/ffffff?text=Multiple" alt="Multiple"><span>Multiple Filters</span></div>
        </div>

        <hr class="tw:my-8! tw:border-gray-300!" />

        <h2>3. CSS Blend Modes</h2>
        <p>CSS Blend Modes define how an element's content should blend with the content of its direct backdrop. They are similar to blend modes found in graphic design software (Photoshop, GIMP).</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>mix-blend-mode</code>: Blends the *entire element* (content, background, border) with the elements behind it.</li>
            <li class="tw:leading-relaxed!"><code>background-blend-mode</code>: Blends multiple background images within a single element.</li>
        </ul>
        <pre class="tw-bg-gray-100! tw-p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.overlay { mix-blend-mode: multiply; }
        </pre>
        <p class="tw-text-center tw-mt-4 tw-mb-2">
            <strong>Hover over the boxes to remove the blue overlay and see the background image.</strong>
        </p>
        <div class="blend-mode-gallery">
            <div class="blend-item"><div class="blend-overlay">Normal</div></div>
            <div class="blend-item"><div class="blend-overlay">Multiply</div></div>
            <div class="blend-item"><div class="blend-overlay">Screen</div></div>
            <div class="blend-item"><div class="blend-overlay">Overlay</div></div>
            <div class="blend-item"><div class="blend-overlay">Darken</div></div>
            <div class="blend-item"><div class="blend-overlay">Lighten</div></div>
            <div class="blend-item"><div class="blend-overlay">Difference</div></div>
            <div class="blend-item"><div class="blend-overlay">Hard Light</div></div>
        </div>
    </div>
</body>
</html>`;

// Code Example 2: CSS Grid Layout (Basics & Positioning)
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced CSS: Grid Layout Basics</title>
    <style>
        :root {
            --primary-color: #3498db;
            --secondary-color: #2ecc71;
            --text-color: #333;
            --bg-color: #f0f2f5;
            --card-bg: #ffffff;
            --border-radius: 8px;
            --spacing-medium: 20px;
            --box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: var(--spacing-medium);
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        h1, h2, h3 {
            color: var(--primary-color);
            text-align: center;
            margin-bottom: var(--spacing-medium);
        }

        .container {
            max-width: 900px;
            width: 100%;
            margin: 0 auto 40px auto;
            padding: var(--spacing-medium);
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            border: 2px dashed var(--secondary-color);
            box-sizing: border-box;
        }

        /* --- Grid Layout Basic Styling --- */
        .grid-container {
            display: grid; /* Makes the element a Grid Container */
            background-color: #ecf0f1;
            padding: 10px;
            border-radius: var(--border-radius);
            margin-bottom: 30px;
            min-height: 200px; /* To visualize rows */
            box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
        }

        .grid-item {
            background-color: var(--primary-color);
            color: white;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        /* --- Grid Example 1: Basic Columns & Rows --- */
        .grid-ex1 {
            grid-template-columns: 100px 200px 1fr; /* 3 columns: fixed, fixed, remaining space */
            grid-template-rows: 50px 100px; /* 2 rows: fixed, fixed */
            gap: 10px; /* Space between grid items */
        }

        /* --- Grid Example 2: Fractional Units (fr) & Naming Lines --- */
        .grid-ex2 {
            grid-template-columns: 1fr 2fr 1fr; /* Three columns, middle is twice as wide */
            grid-template-rows: 70px 1fr 50px; /* Header, flexible content, footer */
            gap: 8px;
        }
        /* Naming lines: grid-template-columns: [col1-start] 1fr [col2-start] 2fr [col3-start] 1fr [col-end]; */

        /* --- Grid Example 3: Explicit Item Placement --- */
        .grid-ex3 {
            grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
            grid-template-rows: repeat(2, 100px); /* 2 equal rows */
            gap: 15px;
        }

        .item-a {
            background-color: #e74c3c;
            grid-column-start: 1; /* Starts at line 1 */
            grid-column-end: 3;   /* Ends before line 3 (spans 1 and 2) */
            /* Shorthand: grid-column: 1 / 3; */
        }
        .item-b {
            background-color: #9b59b6;
            grid-row-start: 1;
            grid-row-end: 3;
            /* Shorthand: grid-row: 1 / 3; */
        }
        .item-c {
            background-color: #f1c40f;
            grid-column: 2 / span 2; /* Starts at line 2, spans 2 columns */
            grid-row: 2;
        }

        /* --- Grid Example 4: Grid Areas --- */
        .grid-ex4 {
            grid-template-columns: 1fr 3fr 1fr;
            grid-template-rows: auto 1fr auto;
            gap: 10px;
            grid-template-areas:
                "header header header"
                "nav    main   aside"
                "footer footer footer";
        }

        .header { background-color: #c0392b; grid-area: header; }
        .nav { background-color: #27ae60; grid-area: nav; }
        .main { background-color: #3498db; grid-area: main; }
        .aside { background-color: #e67e22; grid-area: aside; }
        .footer { background-color: #8e44ad; grid-area: footer; }

    </style>
</head>
<body>
    <div class="container">
        <h1>Advanced CSS: Grid Layout - The 2D Powerhouse</h1>
        <p class="tw-text-center">CSS Grid Layout is a powerful 2-dimensional layout system for the web. It allows you to design complex responsive web layouts more easily and consistently than ever before.</p>
        <p class="tw-text-center tw-font-bold">Think of Grid as a spreadsheet for your webpage!</p>

        <h2>Grid vs. Flexbox:</h2>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><strong class="tw:font-semibold! tw:text-blue-600!">Flexbox:</strong> Primarily for 1-dimensional layouts (a row OR a column). Great for distributing space along an axis.</li>
            <li class="tw:leading-relaxed!"><strong class="tw:font-semibold! tw:text-green-600!">Grid:</strong> For 2-dimensional layouts (rows AND columns simultaneously). Excellent for overall page structure or complex component layouts.</li>
        </ul>

        <h2>1. The Grid Container (\`display: grid\`)</h2>
        <p>To start using Grid, you apply <code>display: grid;</code> to the parent element, making it a grid container. Its direct children become grid items.</p>

        <h2>2. Defining Columns and Rows</h2>
        <p>Use <code>grid-template-columns</code> and <code>grid-template-rows</code> to define the explicit structure of your grid.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><strong>Fixed Units:</strong> \`px\`, \`em\`, \`rem\`, \`%.</li>
            <li class="tw:leading-relaxed!"><strong class="tw:font-semibold! tw:text-purple-600!">Fractional Unit (\`fr\`):</strong> Represents a fraction of the available space. \`1fr\` means 1 part of the available space. \`2fr\` means 2 parts.</li>
            <li class="tw:leading-relaxed!"><code>gap</code> (or \`grid-gap\` - legacy): Defines the space between grid tracks.</li>
        </ul>
        <pre class="tw-bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.grid-container {
    display: grid;
    grid-template-columns: 100px 1fr 20%; /* Fixed, flexible, percentage */
    grid-template-rows: 50px auto;        /* Fixed, auto-sized */
    gap: 15px;
}
        </pre>
        <h3>Example: Basic Grid Definition</h3>
        <div class="grid-container grid-ex1">
            <div class="grid-item">100px</div>
            <div class="grid-item">200px</div>
            <div class="grid-item">1fr</div>
            <div class="grid-item">Item 4</div>
            <div class="grid-item">Item 5</div>
            <div class="grid-item">Item 6</div>
        </div>

        <h3>Example: Using \`fr\` Units</h3>
        <div class="grid-container grid-ex2">
            <div class="grid-item">Header (70px)</div>
            <div class="grid-item">Content 1</div>
            <div class="grid-item">Content 2</div>
            <div class="grid-item">Main Content (1fr)</div>
            <div class="grid-item">Sidebar</div>
            <div class="grid-item">Another Sidebar</div>
            <div class="grid-item">Footer (50px)</div>
            <div class="grid-item">Item 8</div>
            <div class="grid-item">Item 9</div>
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            Notice how the <code>1fr</code> row takes up the remaining height, and columns adjust proportionally.
        </p>

        <h2>3. Placing Grid Items (\`grid-column\`, \`grid-row\`, \`grid-area\`)</h2>
        <p>You can explicitly place grid items using grid line numbers or named grid areas.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>grid-column-start</code> / <code>grid-column-end</code></li>
            <li class="tw:leading-relaxed!"><code>grid-row-start</code> / <code>grid-row-end</code></li>
            <li class="tw:leading-relaxed!">Shorthands: <code>grid-column: start / end;</code>, <code>grid-row: start / end;</code></li>
            <li class="tw:leading-relaxed!"><code>span X</code>: Span X number of tracks. Example: \`grid-column: 1 / span 2;\`</li>
        </ul>
        <h3>Example: Item Placement by Line Numbers</h3>
        <div class="grid-container grid-ex3">
            <div class="grid-item item-a">Item A (Col 1-3)</div>
            <div class="grid-item item-b">Item B (Row 1-3)</div>
            <div class="grid-item item-c">Item C (Col 2-4, Row 2)</div>
            <div class="grid-item">Item D</div>
            <div class="grid-item">Item E</div>
            <div class="grid-item">Item F</div>
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            Open DevTools and inspect the grid to see the lines and how items span across them.
        </p>

        <h2>4. Defining Grid Areas (\`grid-template-areas\`)</h2>
        <p>For more readable and maintainable complex layouts, you can name grid areas within your container and then assign items to these areas.</p>
        <pre class="tw-bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.grid-container {
    grid-template-areas:
        "header header header"
        "nav    main   aside"
        "footer footer footer";
}
.header { grid-area: header; }
        </pre>
        <h3>Example: Layout with Named Grid Areas</h3>
        <div class="grid-container grid-ex4">
            <div class="grid-item header">Header</div>
            <div class="grid-item nav">Navigation</div>
            <div class="grid-item main">Main Content</div>
            <div class="grid-item aside">Sidebar</div>
            <div class="grid-item footer">Footer</div>
        </div>
        <p class="tw-text-center tw-text-xl tw-text-gray-700 tw-font-bold tw-mt-8">
            These examples cover the core of Grid layout. Next, we'll see more advanced features!
        </p>
    </div>
</body>
</html>`;

// Code Example 3: CSS Grid Layout (Advanced)
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced CSS: Grid Layout Advanced</title>
    <style>
        :root {
            --primary-color: #3498db;
            --secondary-color: #2ecc71;
            --text-color: #333;
            --bg-color: #f0f2f5;
            --card-bg: #ffffff;
            --border-radius: 8px;
            --spacing-medium: 20px;
            --box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: var(--spacing-medium);
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        h1, h2, h3 {
            color: var(--primary-color);
            text-align: center;
            margin-bottom: var(--spacing-medium);
        }

        .container {
            max-width: 900px;
            width: 100%;
            margin: 0 auto 40px auto;
            padding: var(--spacing-medium);
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            border: 2px dashed var(--primary-color);
            box-sizing: border-box;
        }

        /* --- Grid Layout Basic Styling --- */
        .grid-container {
            display: grid;
            background-color: #ecf0f1;
            padding: 10px;
            border-radius: var(--border-radius);
            margin-bottom: 30px;
            min-height: 200px;
            box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
        }

        .grid-item {
            background-color: var(--secondary-color);
            color: white;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .grid-item:nth-child(odd) {
            background-color: var(--primary-color);
        }

        /* --- Grid Example 5: repeat(), minmax(), auto-fit/auto-fill --- */
        .grid-ex5 {
            /* Responsive grid: auto-fit columns that are at least 150px, but no more than 1fr */
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
        }

        /* --- Grid Example 6: Alignment Properties --- */
        .grid-ex6 {
            grid-template-columns: repeat(3, 100px); /* Fixed width columns */
            grid-template-rows: repeat(2, 80px); /* Fixed height rows */
            gap: 10px;
            border: 2px solid #e74c3c;
            height: 300px; /* Make container taller than content for alignment */

            /* Align grid items *within* their cells (default stretch) */
            justify-items: center; /* Horizontally center content in cells */
            align-items: end;    /* Vertically align content to bottom of cells */

            /* Align the *entire grid* within the container (if there's free space) */
            justify-content: space-around; /* Distribute horizontal space around grid */
            align-content: center;       /* Vertically center the grid tracks */
        }
        .grid-ex6 .grid-item {
            background-color: #9b59b6;
            color: white;
            font-size: 0.9em;
            padding: 5px; /* Smaller padding to see alignment better */
        }
        .grid-ex6 .grid-item:nth-child(odd) {
             background-color: #f1c40f;
             color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Advanced CSS: Grid Layout - Responsive Techniques & Alignment</h1>
        <p class="tw-text-center">Now, let's explore Grid's powerful features for creating truly responsive and precisely aligned layouts.</p>

        <h2>5. Responsive Grid with \`repeat()\`, \`minmax()\`, \`auto-fit\`/\`auto-fill\`</h2>
        <p>These functions are essential for creating grids that adapt beautifully to different screen sizes without manual media queries for every breakpoint.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>repeat(count, track-list)</code>: Repeats a column/row definition. Example: \`repeat(3, 1fr)\` is same as \`1fr 1fr 1fr\`.</li>
            <li class="tw:leading-relaxed!"><code>minmax(min, max)</code>: Defines a size range for a track. The track will be at least \`min\` and at most \`max\`.</li>
            <li class="tw:leading-relaxed!"><strong class="tw:font-semibold! tw:text-blue-600!">\`auto-fill\` vs \`auto-fit\` (with \`repeat\`):</strong> These keywords are used as the \`count\` in \`repeat()\`:
                <ul>
                    <li><code>auto-fill</code>: Creates as many columns as can fit, even if empty. Will leave empty tracks if there aren't enough items.</li>
                    <li><code>auto-fit</code>: Creates as many columns as can fit, but *collapses empty tracks*. This is often preferred as it makes items expand to fill available space when fewer items are present.</li>
                </ul>
            </li>
        </ul>
        <pre class="tw-bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.responsive-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}
        </pre>
        <h3>Example: Responsive Auto-Fit Grid</h3>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            <strong>Resize your browser window to see how the columns adjust!</strong>
        </p>
        <div class="grid-container grid-ex5">
            <div class="grid-item">Item 1</div>
            <div class="grid-item">Item 2</div>
            <div class="grid-item">Item 3</div>
            <div class="grid-item">Item 4</div>
            <div class="grid-item">Item 5</div>
            <div class="grid-item">A Longer Item 6</div>
            <div class="grid-item">Item 7</div>
            <div class="grid-item">Item 8</div>
        </div>

        <h2>6. Alignment Properties in Grid</h2>
        <p>Grid has powerful alignment properties similar to Flexbox, but they apply to both axes (row and column) within the grid container.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li><strong>For Grid Items (align content *within* their cell):</strong>
                <ul>
                    <li><code>justify-items</code>: Aligns items along the *inline* (row) axis. (e.g., \`start\`, \`end\`, \`center\`, \`stretch\` - default)</li>
                    <li><code>align-items</code>: Aligns items along the *block* (column) axis. (e.g., \`start\`, \`end\`, \`center\`, \`stretch\` - default)</li>
                    <li>Shorthand: <code>place-items: align-items justify-items;</code></li>
                </ul>
            </li>
            <li><strong>For Grid Tracks (align the *entire grid* if there's extra space):</strong>
                <ul>
                    <li><code>justify-content</code>: Aligns grid tracks along the *inline* (row) axis. (e.g., \`start\`, \`end\`, \`center\`, \`space-around\`, \`space-between\`, \`space-evenly\`)</li>
                    <li><code>align-content</code>: Aligns grid tracks along the *block* (column) axis. (e.g., \`start\`, \`end\`, \`center\`, \`space-around\`, \`space-between\`, \`space-evenly\`)</li>
                    <li>Shorthand: <code>place-content: align-content justify-content;</code></li>
                </ul>
            </li>
        </ul>
        <h3>Example: Item and Track Alignment</h3>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            Notice how individual items are aligned (center, end) and how the entire grid is aligned (space-around, center).
        </p>
        <div class="grid-container grid-ex6">
            <div class="grid-item">Item 1</div>
            <div class="grid-item">Item 2</div>
            <div class="grid-item">Item 3</div>
            <div class="grid-item">Item 4</div>
            <div class="grid-item">Item 5</div>
            <div class="grid-item">Item 6</div>
        </div>
    </div>
</body>
</html>`;

// Code Example 4: Custom Shapes, Advanced Media Queries, Container Queries
const section4 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced CSS: Shapes, Advanced Media & Container Queries</title>
    <style>
        :root {
            --primary-color: #3498db;
            --secondary-color: #2ecc71;
            --text-color: #333;
            --bg-color: #f0f2f5;
            --card-bg: #ffffff;
            --border-radius: 8px;
            --spacing-medium: 20px;
            --box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: var(--spacing-medium);
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        h1, h2, h3 {
            color: var(--primary-color);
            text-align: center;
            margin-bottom: var(--spacing-medium);
        }

        .container {
            max-width: 900px;
            width: 100%;
            margin: 0 auto 40px auto;
            padding: var(--spacing-medium);
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            border: 2px dashed var(--secondary-color);
            box-sizing: border-box;
        }

        /* --- CSS Custom Shapes Demo (clip-path) --- */
        .shape-gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
        }

        .shape-box {
            width: 200px;
            height: 150px;
            background-color: #e74c3c;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            font-size: 1.1em;
            box-shadow: var(--box-shadow);
            overflow: hidden; /* Important for clipping */
            transition: background-color 0.3s ease;
        }

        .shape-box:hover {
            background-color: #2ecc71;
        }

        .shape-box.circle { clip-path: circle(50%); }
        .shape-box.polygon { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); } /* Diamond */
        .shape-box.inset { clip-path: inset(10% 20% 10% 20% round 15px); }
        .shape-box.star {
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }

        /* --- CSS Custom Shapes Demo (shape-outside) --- */
        .text-wrap-example {
            display: flex;
            align-items: flex-start;
            margin-top: 40px;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: var(--border-radius);
            line-height: 1.8;
        }

        .text-wrap-image {
            float: left; /* Required for shape-outside */
            width: 120px;
            height: 120px;
            background-color: #8e44ad;
            margin-right: 20px; /* Space between image and text */
            shape-margin: 15px; /* Adds space around the shape */
            transition: background-color 0.3s ease;
        }
        .text-wrap-image.circle {
            border-radius: 50%;
            shape-outside: circle(50%);
        }
        .text-wrap-image.polygon {
            clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%); /* House shape */
            shape-outside: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%);
            background-color: #e67e22;
        }
        .text-wrap-image:hover {
            background-color: #c0392b;
        }

        /* Clear floats after the example */
        .text-wrap-example::after {
            content: "";
            display: block;
            clear: both;
        }

        /* --- Advanced Media Queries --- */
        .mq-box {
            width: 250px;
            height: 100px;
            background-color: var(--primary-color);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px auto;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }

        /* Example: prefers-color-scheme */
        @media (prefers-color-scheme: dark) {
            body {
                background-color: #2c3e50;
                color: #ecf0f1;
            }
            .container {
                background-color: #34495e;
                box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            }
            h1, h2, h3 { color: #8e44ad; }
            .mq-box { background-color: #8e44ad; }
        }

        /* Example: orientation */
        @media (orientation: landscape) {
            .mq-box.orientation-display {
                background-color: #27ae60;
            }
        }
        @media (orientation: portrait) {
            .mq-box.orientation-display {
                background-color: #e74c3c;
            }
        }

        /* Example: prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
            .shape-box, .text-wrap-image {
                transition: none !important;
            }
        }

        /* --- Container Queries --- */
        /* Define a container for demonstration */
        .card-container {
            container-type: inline-size; /* Define a container context based on inline size */
            container-name: my-card;     /* Optional: Name the container for specificity */
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 40px;
            padding: 20px;
            background-color: #ecf0f1;
            border-radius: var(--border-radius);
        }

        .product-card {
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 15px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .product-card img {
            max-width: 100%;
            height: auto;
            border-radius: 4px;
        }
        .product-card h4 {
            margin: 0;
            color: var(--primary-color);
            font-size: 1.3em;
        }
        .product-card p {
            font-size: 0.9em;
            color: #555;
            flex-grow: 1; /* Allow description to grow */
        }
        .product-card .price {
            font-weight: bold;
            color: #e74c3c;
            font-size: 1.2em;
        }
        .product-card button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .product-card button:hover {
            background-color: var(--secondary-color);
        }

        /* Container Queries applied to .product-card *within* .card-container */
        @container my-card (min-width: 450px) { /* When 'my-card' container is at least 450px wide */
            .product-card {
                flex-direction: row; /* Change to horizontal layout */
                text-align: left;
                align-items: center;
            }
            .product-card img {
                max-width: 100px; /* Smaller image */
                margin-right: 15px;
            }
            .product-card .details {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
            }
            .product-card h4 {
                font-size: 1.4em;
            }
        }

        @container my-card (max-width: 300px) { /* When 'my-card' container is at most 300px wide */
            .product-card h4 {
                font-size: 1.1em; /* Smaller font for title */
            }
            .product-card p {
                font-size: 0.8em; /* Smaller font for description */
            }
            .product-card button {
                padding: 6px 10px; /* Smaller button */
                font-size: 0.85em;
            }
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>Advanced CSS: Custom Shapes, Media & Container Queries</h1>
        <p class="tw-text-center">Let's explore some modern CSS features for creating unique visual designs and highly adaptable responsive components.</p>

        <h2>7. CSS Custom Shapes (\`clip-path\` & \`shape-outside\`)</h2>
        <p>CSS provides properties to define non-rectangular shapes for elements, affecting either their visible area or how text flows around them.</p>

        <h3>\`clip-path\`: Defining Visible Regions</h3>
        <p>The <code>clip-path</code> property creates a clipping region that determines what part of an element is visible. Anything outside the region is clipped (hidden).</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><strong>Basic Shapes:</strong> \`circle()\`, \`polygon()\`, \`inset()\`, \`ellipse()\`.</li>
            <li class="tw:leading-relaxed!"><strong class="tw:font-semibold! tw:text-green-600!"><code>polygon()</code>:</strong> Define a series of X Y coordinates to draw any complex polygon.</li>
            <li class="tw:leading-relaxed!"><a href="https://bennettfeely.com/clippy/" target="_blank" class="tw:text-blue-500 hover:tw-underline">Clippy</a> is an excellent online tool to generate \`clip-path\` values.</li>
        </ul>
        <pre class="tw-bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.diamond-shape {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
        </pre>
        <p class="tw-text-center tw-mt-4 tw-mb-2"><strong>Hover over these boxes to see a color change!</strong></p>
        <div class="shape-gallery">
            <div class="shape-box circle">Circle</div>
            <div class="shape-box polygon">Diamond</div>
            <div class="shape-box inset">Inset</div>
            <div class="shape-box star">Star</div>
        </div>

        <h3>\`shape-outside\`: Text Wrapping Around Custom Shapes</h3>
        <p>The <code>shape-outside</code> property allows content (like text) to flow around a custom shape, rather than just a rectangular bounding box. This property only works on floated elements.</p>
        <ul class="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!">Requires the element to be \`float: left;\` or \`float: right;\`.</li>
            <li class="tw:leading-relaxed!">Uses the same shape functions as \`clip-path\`.</li>
            <li class="tw:leading-relaxed!"><code>shape-margin</code>: Adds a margin around the defined shape.</li>
        </ul>
        <pre class="tw-bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.my-floated-image {
    float: left;
    shape-outside: circle(50%);
    shape-margin: 10px;
}
        </pre>
        <p class="tw-text-center tw-mt-4 tw-mb-2"><strong>Hover over the shapes below!</strong></p>
        <div class="text-wrap-example">
            <div class="text-wrap-image circle"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="text-wrap-example">
            <div class="text-wrap-image polygon"></div>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <hr class="tw:my-8! tw:border-gray-300!" />

        <h2>8. Advanced Media Queries</h2>
        <p>Beyond \`min-width\` and \`max-width\`, media queries offer powerful ways to adapt your design based on user preferences and device capabilities.</p>
        <ul class="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>(orientation: landscape/portrait)</code>: For device orientation.</li>
            <li class="tw:leading-relaxed!"><code>(resolution: Xdpi/Xdpcm)</code>: For high-DPI (Retina) screens.</li>
            <li class="tw:leading-relaxed!"><strong class="tw:font-semibold! tw:text-blue-600!">\`prefers-color-scheme\` (light/dark):</strong> Adapts your site based on user's OS dark mode preference.</li>
            <li class="tw:leading-relaxed!"><strong class="tw:font-semibold! tw:text-blue-600!">\`prefers-reduced-motion\` (no-preference/reduce):</strong> Adapts based on user's preference for reduced animations.</li>
            <li class="tw:leading-relaxed!"><code>(hover: hover/none)</code>: Detects if the primary input can hover (e.g., mouse vs. touch).</li>
            <li class="tw:leading-relaxed!"><code>(pointer: fine/coarse/none)</code>: Detects precision of primary pointing device.</li>
        </ul>
        <pre class="tw-bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
@media (prefers-color-scheme: dark) {
    body { background-color: #333; color: white; }
}
@media (orientation: landscape) {
    .element { flex-direction: row; }
}
        </pre>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            <strong>Try these:</strong>
            <ul class="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4! tw:inline-block! tw:text-left!">
                <li>Switch your OS to Dark Mode and refresh.</li>
                <li>Rotate your mobile device or resize your browser to change orientation.</li>
                <li>Toggle "Reduce motion" in your OS accessibility settings.</li>
            </ul>
        </p>
        <div class="mq-box orientation-display">Orientation Test</div>

        <hr class="tw:my-8! tw:border-gray-300!" />

        <h2>9. Container Queries (\`@container\`)</h2>
        <p class="tw-text-red-600 tw-font-bold">
            **New & Revolutionary!** Container Queries allow a component (or "container") to adapt its styles based on its own width, rather than the entire viewport's width. This is a game-changer for building truly modular and responsive components.
        </p>
        <ul class="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><strong class="tw:font-semibold! tw:text-green-600!">Define a Container:</strong> Apply \`container-type\` (e.g., \`inline-size\` for width-based queries) and optionally \`container-name\` to a parent element.</li>
            <li class="tw:leading-relaxed!"><strong class="tw:font-semibold! tw:text-green-600!">Query the Container:</strong> Use \`@container (min-width: Xpx) { ... }\` inside your CSS, targeting children of the defined container.</li>
        </ul>
        <pre class="tw-bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.parent-element {
    container-type: inline-size;
    container-name: my-component;
}

@container my-component (min-width: 400px) {
    .child-element {
        font-size: 1.2em;
    }
}
        </pre>
        <h3>Example: Responsive Product Cards with Container Queries</h3>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            <strong>Resize the entire browser window to see how the card layout changes based on the *space available to the card itself*, not just the viewport!</strong> The cards will become horizontal when their container is wide enough.
        </p>
        <div class="card-container">
            <div class="product-card">
                <img src="https://placehold.co/150x100/3498db/ffffff?text=Product+A" alt="Product A">
                <div class="details">
                    <h4>Stylish Widget Pro</h4>
                    <p>A high-performance widget for all your daily needs. Very durable.</p>
                    <div class="price">$29.99</div>
                    <button>Add to Cart</button>
                </div>
            </div>
            <div class="product-card">
                <img src="https://placehold.co/150x100/2ecc71/ffffff?text=Product+B" alt="Product B">
                <div class="details">
                    <h4>Super Gadget Mini</h4>
                    <p>Compact and efficient, perfect for on-the-go productivity.</p>
                    <div class="price">$49.99</div>
                    <button>Add to Cart</button>
                </div>
            </div>
            <div class="product-card">
                <img src="https://placehold.co/150x100/e74c3c/ffffff?text=Product+C" alt="Product C">
                <div class="details">
                    <h4>Ultimate Gear Max</h4>
                    <p>Unleash unparalleled performance with our top-tier gear.</p>
                    <div class="price">$99.99</div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;

export default function AdvancedCSSTutorial() {
  const page = 35; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/6090B0/E0F0FF?text=Advanced+CSS:+Mastering+Modern+Techniques"
              alt="Advanced CSS"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Advanced CSS: Master Modern Styling Techniques 🚀
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Ready to push your CSS skills further? This tutorial delves into
              powerful, modern CSS features that enable more robust,
              maintainable, and visually rich web designs.
            </p>

            {/* 1. CSS Custom Properties (Variables) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. CSS Custom Properties (Variables)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Forget Sass variables for a moment! Native CSS Custom Properties
                (often just called CSS Variables) allow you to define reusable
                values directly in your CSS. They're incredibly useful for:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Consistency:
                  </strong>{" "}
                  Define your brand colors, spacing, or fonts once.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Maintainability:
                  </strong>{" "}
                  Change a value in one place, and it updates everywhere.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Theming:
                  </strong>{" "}
                  Easily switch between light/dark modes or different color
                  schemes by overriding a few variables.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Dynamic Styling:
                  </strong>{" "}
                  They can be manipulated with JavaScript, opening up
                  possibilities for user-controlled themes.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-green-600;">
                Syntax: Define with `--`, Use with `var()`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Define them on the `:root` pseudo-class for global availability,
                or on any element for local scoping.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                {`:root {
    --brand-color: #007bff;
    --spacing-unit: 16px;
}

.button {
    background-color: var(--brand-color);
    padding: var(--spacing-unit);
}

.dark-theme .button {
    --brand-color: #333; /* Override for dark theme */
}`}
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can also provide fallback values: `var(--my-variable,
                default-value);`
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. CSS Filters */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. CSS Filters
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `filter` CSS property applies visual effects to an element,
                like blurring, adjusting color, or adding shadows. It's often
                used for images, but can be applied to any HTML element,
                including text and divs!
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                Common Filter Functions:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">`blur(px)`</li>
                <li className="tw:leading-relaxed!">`grayscale(%)`</li>
                <li className="tw:leading-relaxed!">`sepia(%)`</li>
                <li className="tw:leading-relaxed!">
                  `contrast(%)`, `brightness(%)`, `saturate(%)`
                </li>
                <li className="tw:leading-relaxed!">`hue-rotate(deg)`</li>
                <li className="tw:leading-relaxed!">`invert(%)`</li>
                <li className="tw:leading-relaxed!">
                  `drop-shadow(x y blur spread color)` (similar to `box-shadow`
                  but respects transparency)
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can combine multiple filters by simply listing them with
                spaces.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                {`img { filter: grayscale(100%) blur(2px) contrast(150%); }`}
              </pre>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. CSS Blend Modes */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. CSS Blend Modes
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Inspired by graphic design software, CSS Blend Modes
                (`mix-blend-mode` and `background-blend-mode`) control how the
                colors of one element blend with the colors of the elements
                behind it.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `mix-blend-mode`:
                  </strong>{" "}
                  Blends an entire element (its content, background, borders)
                  with its direct backdrop. Great for artistic effects like
                  knock-out text or tinted overlays.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `background-blend-mode`:
                  </strong>{" "}
                  Applies blending to multiple background images on a single
                  element.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-orange-600;">
                Common Blend Modes:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `multiply`, `screen`, `overlay`, `darken`, `lighten`,
                  `difference`, `exclusion`, `hard-light`, etc.
                </li>
              </ul>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                {`.overlay-text {
    background-color: rgba(255, 0, 0, 0.5);
    mix-blend-mode: multiply; /* Blends with whatever is behind it */
}`}
              </pre>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 4. CSS Grid Layout */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                4. CSS Grid Layout: The 2D Powerhouse
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                If Flexbox is for one-dimensional layouts (rows OR columns),
                **CSS Grid is for two-dimensional layouts** (rows AND columns
                simultaneously). It's designed for overall page layout and
                complex component arrangements.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Core Concepts:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Grid Container:
                  </strong>{" "}
                  The parent element with `display: grid;`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Grid Items:
                  </strong>{" "}
                  Direct children of the grid container.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Grid Lines:
                  </strong>{" "}
                  The horizontal and vertical lines that define the grid
                  structure.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Grid Tracks:
                  </strong>{" "}
                  The space between two grid lines (columns or rows).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Grid Cells:
                  </strong>{" "}
                  The intersection of a grid row and a grid column.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Grid Areas:
                  </strong>{" "}
                  Named rectangular regions within the grid.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                Defining the Grid Structure:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `grid-template-columns`: Defines column sizes and count.
                </li>
                <li className="tw:leading-relaxed!">
                  `grid-template-rows`: Defines row sizes and count.
                </li>
                <li className="tw:leading-relaxed!">
                  `gap` (or `grid-gap`): Space between tracks.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `fr` unit:
                  </strong>{" "}
                  (Fractional Unit) - Represents a fraction of the available
                  space, making flexible grids easy.
                </li>
              </ul>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                {`.my-grid {
    display: grid;
    grid-template-columns: 100px 1fr 2fr; /* 3 columns: fixed, 1 part, 2 parts */
    grid-template-rows: auto 150px;       /* 2 rows: auto-sized, fixed */
    gap: 10px;
}`}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                Placing Items:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `grid-column: start-line / end-line;` (or `span X`)
                </li>
                <li className="tw:leading-relaxed!">
                  `grid-row: start-line / end-line;` (or `span X`)
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `grid-template-areas`:
                  </strong>{" "}
                  Define a visual ASCII-art like map of your layout, then assign
                  items to areas with `grid-area`. This is incredibly readable!
                </li>
              </ul>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                {`.page-layout {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "sidebar content"
        "footer footer";
}
.main-header { grid-area: header; }
.main-content { grid-area: content; }`}
              </pre>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                5. Advanced Grid Techniques: Responsive Grids & Alignment
              </h2>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Responsive Grids with `repeat()`, `minmax()`,
                `auto-fit`/`auto-fill`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This combination is the holy grail for responsive grids without
                endless media queries:
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                {`.responsive-cards {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    /* Creates as many 250px-minimum columns as fit, then stretches them */
}`}
              </pre>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `auto-fit` vs `auto-fill`:
                  </strong>
                  <ul>
                    <li>
                      `auto-fill`: Will always create enough columns to *fill
                      the space*, even if they're empty.
                    </li>
                    <li>
                      `auto-fit`: Will *collapse empty tracks*, allowing items
                      to grow and fill the space when there are fewer items than
                      possible columns. This is usually what you want!
                    </li>
                  </ul>
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                Alignment in Grid
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Grid offers comprehensive alignment controls for both individual
                items within their cells and the entire grid of tracks within
                its container.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    For Grid Items (inside their cell):
                  </strong>
                  <ul>
                    <li>
                      `justify-items` (horizontal): `start`, `end`, `center`,
                      `stretch`
                    </li>
                    <li>
                      `align-items` (vertical): `start`, `end`, `center`,
                      `stretch`
                    </li>
                    <li>
                      Individual item control: `justify-self`, `align-self`
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    For Grid Tracks (the whole grid inside the container):
                  </strong>
                  <ul>
                    <li>
                      `justify-content` (horizontal): `start`, `end`, `center`,
                      `space-around`, `space-between`, `space-evenly`
                    </li>
                    <li>
                      `align-content` (vertical): `start`, `end`, `center`,
                      `space-around`, `space-between`, `space-evenly`
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  Shorthand: `place-items`, `place-content`
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section3} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 6. CSS Custom Shapes */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                6. CSS Custom Shapes: Beyond Rectangles
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Move beyond boring squares and rectangles! CSS offers ways to
                define custom shapes for elements, both for their visible area
                and how text flows around them.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-orange-600;">
                `clip-path`: Control Visibility
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `clip-path` property defines a clipping region that
                determines which part of an element is visible. Anything outside
                this region is hidden.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Basic Shapes:
                  </strong>{" "}
                  `circle()`, `polygon()`, `inset()`, `ellipse()`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `polygon()`:
                  </strong>{" "}
                  Most powerful for custom shapes. You provide a list of X Y
                  coordinates.
                </li>
                <li className="tw:leading-relaxed!">
                  <a
                    href="https://bennettfeely.com/clippy/"
                    target="_blank"
                    className="tw:text-blue-500 hover:tw-underline"
                  >
                    Clippy
                  </a>{" "}
                  is an excellent online tool to generate `clip-path` values.
                </li>
              </ul>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                {`.diamond-div {
    background-color: teal;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}`}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-orange-600;">
                `shape-outside`: Flow Text Around Shapes
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This property makes inline content (like text) flow around a
                custom shape, instead of the default rectangular box.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Requirement:
                  </strong>{" "}
                  The element must be `float: left;` or `float: right;`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Shapes:
                  </strong>{" "}
                  Uses the same shape functions as `clip-path`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `shape-margin`:
                  </strong>{" "}
                  Adds a margin around the defined shape, preventing text from
                  touching it.
                </li>
              </ul>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                {`.circular-image {
    float: left;
    shape-outside: circle(50%);
    shape-margin: 15px;
}`}
              </pre>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 7. Advanced Media Queries */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                7. Advanced Media Queries
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Beyond `min-width` and `max-width`, media queries offer powerful
                ways to adapt your design based on user preferences and device
                capabilities.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Useful Media Features:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `(orientation: landscape/portrait)`: Apply styles based on
                  device orientation.
                </li>
                <li className="tw:leading-relaxed!">
                  `(resolution: Xdpi)`: Target high-DPI (Retina) screens for
                  sharper images.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `prefers-color-scheme` (light/dark):
                  </strong>{" "}
                  Crucial for dark mode implementations. Adapts your site based
                  on the user's OS preference.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `prefers-reduced-motion` (no-preference/reduce):
                  </strong>{" "}
                  Essential accessibility feature. Disable or simplify
                  animations for users sensitive to motion.
                </li>
                <li className="tw:leading-relaxed!">
                  `(hover: hover/none)`: Detect if the primary input can hover
                  (e.g., mouse vs. touch screen).
                </li>
                <li className="tw:leading-relaxed!">
                  `(pointer: fine/coarse/none)`: Detects the precision of the
                  primary pointing device.
                </li>
              </ul>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                {`@media (prefers-color-scheme: dark) {
    body { background-color: #1a1a1a; color: #f0f0f0; }
}

@media (prefers-reduced-motion: reduce) {
    .animated-element { animation: none; transition: none; }
}`}
              </pre>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 8. Container Queries */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                8. Container Queries (`@container`): The Future of Responsive
                Design
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-bold!">
                This is a game-changer! Traditional media queries adapt designs
                based on the *viewport* size. Container Queries allow a
                component to adapt its styles based on the size of its *parent
                container*, not the entire screen.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This enables truly modular, self-responsive components that can
                be dropped anywhere in your layout and adapt intelligently.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-green-600;">
                How they work:
              </h3>
              <ol className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Define a Container Context:
                  </strong>{" "}
                  Apply `container-type` (e.g., `inline-size` for width-based
                  queries) and optionally `container-name` to a parent element.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-2! tw:mt-2!">
                    {`.my-card-wrapper {
    container-type: inline-size;
    container-name: card-container;
}`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Query the Container:
                  </strong>{" "}
                  Use the `@container` rule, targeting children of your defined
                  container.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                    {`@container card-container (min-width: 400px) {
    .my-card-item {
        /* Styles that apply when card-container is >= 400px wide */
        flex-direction: row;
    }
}`}
                  </pre>
                </li>
              </ol>
            </section>

            <CodeReviewPager code={section4} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Your Advanced CSS Toolkit
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                By integrating CSS Custom Properties, Filters, Blend Modes, CSS
                Grid Layout, Custom Shapes, and leveraging Advanced Media
                Queries and the revolutionary Container Queries, you gain
                unparalleled control over your designs.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                These tools enable you to build more robust, maintainable, and
                visually stunning web experiences that adapt intelligently to
                various devices and user preferences. Keep practicing, and happy
                coding!
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
