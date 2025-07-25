import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Grid Layout - OpenChains Technologies",
  description:
    "Learn CSS Grid Layout with OpenChains Technologies. Step-by-step tutorials and resources.",
  openGraph: {
    type: "website",
    url: `${baseUrl}/lessons/html/css-grid`,
    title: "CSS Grid Layout - OpenChains Technologies",
    description:
      "Learn CSS Grid Layout with OpenChains Technologies. Step-by-step tutorials and resources.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Grid Layout - OpenChains Technologies",
    description:
      "Learn CSS Grid Layout with OpenChains Technologies. Step-by-step tutorials and resources.",
  },
  keywords: ["CSS Grid Layout", "web development", "OpenChains Technologies"],
  alternates: {
    canonical: `${baseUrl}/lessons/html/css-grid`,
  },
  metadataBase: new URL(baseUrl),
};
// Code example 1: Display Grid, Template Rows/Columns, Areas
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid Basics: Container Properties</title>
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

        .grid-container {
            border: 2px dashed #999;
            padding: 15px;
            margin-bottom: 40px;
            background-color: #ffffff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            min-height: 150px; /* To visualize container height */

            display: grid; /* Makes this a grid container */
        }

        .grid-item {
            background-color: #3498db; /* Blue */
            color: white;
            text-align: center;
            line-height: 80px; /* For vertical centering */
            font-weight: bold;
            border-radius: 5px;
            padding: 10px;
            min-height: 60px; /* Ensure visibility for items */
            display: flex; /* Using flex to easily center text within item */
            justify-content: center;
            align-items: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        /* --- display: grid; / display: inline-grid; --- */
        .inline-grid-example {
            display: inline-grid;
            border-color: #27ae60;
            grid-template-columns: 80px 80px;
            gap: 10px;
            width: fit-content;
        }
        .block-grid-example {
            display: grid;
            border-color: #e74c3c;
            grid-template-columns: 80px 80px;
            gap: 10px;
            width: 100%; /* Default block behavior */
        }

        /* --- grid-template-columns / grid-template-rows --- */
        .fixed-columns-rows {
            grid-template-columns: 100px 150px 1fr; /* Fixed, Fixed, Fluid */
            grid-template-rows: 80px auto; /* Fixed, Auto */
            gap: 10px;
            border-color: #8e44ad;
        }
        .fr-units {
            grid-template-columns: 1fr 2fr 1fr; /* Ratios */
            grid-template-rows: 1fr 1fr;
            gap: 10px;
            height: 200px;
            border-color: #f1c40f;
        }
        .repeat-function {
            grid-template-columns: repeat(3, 100px); /* 3 columns, each 100px */
            grid-template-rows: repeat(2, 50px);
            gap: 10px;
            border-color: #1abc9c;
        }
        .minmax-function {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Responsive columns */
            grid-template-rows: 100px;
            gap: 15px;
            border-color: #2ecc71;
            width: 100%; /* Ensure container has variable width */
        }
        .minmax-function .grid-item {
            height: 100px;
        }

        /* --- grid-template-areas --- */
        .template-areas-example {
            grid-template-columns: 1fr 2fr 1fr;
            grid-template-rows: auto 1fr auto;
            gap: 10px;
            height: 300px; /* Give height to see areas */
            border-color: #e67e22;
        }
        .header-area { grid-area: header; background-color: #c0392b; }
        .nav-area { grid-area: nav; background-color: #d35400; }
        .main-area { grid-area: main; background-color: #f39c12; }
        .aside-area { grid-area: aside; background-color: #e67e22; }
        .footer-area { grid-area: footer; background-color: #c0392b; }

        .template-areas-example {
            grid-template-areas:
                "header header header"
                "nav    main   aside"
                "footer footer footer";
        }
        .template-areas-example .grid-item {
            line-height: normal; /* Adjust for multi-line text */
            padding: 15px;
            height: auto;
        }

        /* --- grid-template shorthand --- */
        .grid-template-shorthand {
            /* Defines 2 rows (80px, 1fr) and 3 columns (auto, 1fr, 100px) and areas */
            grid-template:
                "header header header" 80px
                "nav    main   aside"  1fr
                "footer footer footer" auto
                / auto 1fr 100px; /* Column definitions start after / */
            gap: 10px;
            height: 400px;
            border-color: #9b59b6;
        }
        .grid-template-shorthand .grid-item {
            line-height: normal; padding: 15px; height: auto;
        }
    </style>
</head>
<body>
    <h1>CSS Grid Layout: Defining the Structure (Container)</h1>

    <h2>\`display: grid;\` vs. \`display: inline-grid;\`</h2>
    <p>Block Grid (Takes full width):</p>
    <div class="grid-container block-grid-example">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
    </div>
    <p>Inline Grid (Shrinks to content, allows siblings next to it):</p>
    <div class="grid-container inline-grid-example">
        <div class="grid-item">A</div>
        <div class="grid-item">B</div>
        <div class="grid-item">C</div>
        <div class="grid-item">D</div>
    </div>
    <span style="font-style: italic; color: #555;">This text is next to the inline grid.</span>

    <h2>\`grid-template-columns\` and \`grid-template-rows\`</h2>
    <h3>Fixed and Flexible Units (\`px\`, \`fr\`, \`auto\`)</h3>
    <div class="grid-container fixed-columns-rows">
        <div class="grid-item">Col 1 (100px)</div>
        <div class="grid-item">Col 2 (150px)</div>
        <div class="grid-item">Col 3 (1fr)</div>
        <div class="grid-item">Row 2 Item 1</div>
        <div class="grid-item">Row 2 Item 2</div>
        <div class="grid-item">Row 2 Item 3 (auto height)</div>
    </div>

    <h3>\`fr\` (Fractional Unit) Example</h3>
    <div class="grid-container fr-units">
        <div class="grid-item">1fr</div>
        <div class="grid-item">2fr</div>
        <div class="grid-item">1fr</div>
        <div class="grid-item">R2 C1</div>
        <div class="grid-item">R2 C2</div>
        <div class="grid-item">R2 C3</div>
    </div>

    <h3>\`repeat()\` Function</h3>
    <div class="grid-container repeat-function">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
    </div>

    <h3>\`minmax()\` Function (Responsive Example - resize browser to see effect)</h3>
    <div class="grid-container minmax-function">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
        <div class="grid-item">Item 4</div>
        <div class="grid-item">Item 5</div>
        <div class="grid-item">Item 6</div>
    </div>

    <h2>\`grid-template-areas\` (Layout by Naming Areas)</h2>
    <div class="grid-container template-areas-example">
        <div class="grid-item header-area">Header</div>
        <div class="grid-item nav-area">Navigation</div>
        <div class="grid-item main-area">Main Content<br>This section is defined by the 'main' area.</div>
        <div class="grid-item aside-area">Sidebar</div>
        <div class="grid-item footer-area">Footer</div>
    </div>

    <h2>\`grid-template\` (Shorthand)</h2>
    <p>Combines \`grid-template-rows\`, \`grid-template-columns\`, and \`grid-template-areas\`.</p>
    <div class="grid-container grid-template-shorthand">
        <div class="grid-item header-area">Header (80px)</div>
        <div class="grid-item nav-area">Nav (auto)</div>
        <div class="grid-item main-area">Main (1fr height)</div>
        <div class="grid-item aside-area">Aside (100px width)</div>
        <div class="grid-item footer-area">Footer (auto height)</div>
    </div>
</body>
</html>`;

// Code example 2: Auto Flow, Gaps, Alignment (Container)
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid: Auto Flow, Gaps, Alignment (Container)</title>
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

        .grid-container {
            border: 2px dashed #999;
            padding: 15px;
            margin-bottom: 40px;
            background-color: #ffffff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            min-height: 150px;
            display: grid;
        }

        .grid-item {
            background-color: #3498db; /* Blue */
            color: white;
            text-align: center;
            line-height: 80px;
            font-weight: bold;
            border-radius: 5px;
            padding: 10px;
            min-height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        /* --- grid-auto-flow --- */
        .auto-flow-row {
            grid-template-columns: repeat(3, 100px);
            grid-auto-rows: 70px; /* Defines size of implicitly created rows */
            grid-auto-flow: row; /* Default: fills rows first */
            gap: 10px;
            border-color: #8e44ad;
        }
        .auto-flow-column {
            grid-template-rows: repeat(2, 70px);
            grid-auto-columns: 100px; /* Defines size of implicitly created columns */
            grid-auto-flow: column; /* Fills columns first */
            gap: 10px;
            height: 200px; /* Give height for columns to grow */
            border-color: #f1c40f;
        }
        .auto-flow-dense {
            grid-template-columns: repeat(3, 100px);
            grid-auto-rows: 70px;
            grid-auto-flow: row dense; /* Attempts to fill gaps */
            gap: 10px;
            border-color: #e67e22;
        }
        .auto-flow-dense .item-long {
            grid-column: span 2; /* This item spans 2 columns */
            background-color: #c0392b;
        }

        /* --- gap properties --- */
        .gap-example {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 100px);
            gap: 20px 30px; /* row-gap 20px, column-gap 30px */
            border-color: #2ecc71;
        }
        .row-gap-example {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 100px);
            row-gap: 40px;
            border-color: #1abc9c;
        }
        .column-gap-example {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 100px);
            column-gap: 50px;
            border-color: #27ae60;
        }

        /* --- Alignment (Container) --- */
        .alignment-container {
            grid-template-columns: repeat(3, 80px); /* Smaller grid for alignment visualization */
            grid-template-rows: repeat(2, 80px);
            height: 250px; /* Extra space for content alignment */
            width: 400px; /* Extra space for content alignment */
            border-color: #6a0572;
            gap: 5px;
        }
        .alignment-container .grid-item {
            width: auto; /* Allow items to be sized by grid-template-columns/rows */
            height: auto;
            min-height: 50px;
            min-width: 50px;
            background-color: #9b59b6;
        }

        /* justify-items */
        .justify-items-start { justify-items: start; }
        .justify-items-end { justify-items: end; }
        .justify-items-center { justify-items: center; }
        .justify-items-stretch { justify-items: stretch; } /* Default */

        /* align-items */
        .align-items-start { align-items: start; }
        .align-items-end { align-items: end; }
        .align-items-center { align-items: center; }
        .align-items-stretch { align-items: stretch; } /* Default */

        /* place-items shorthand */
        .place-items-center { place-items: center; } /* both start at center */
        .place-items-start-end { place-items: start end; } /* align-items: start, justify-items: end */

        /* justify-content */
        .justify-content-start { justify-content: start; }
        .justify-content-end { justify-content: end; }
        .justify-content-center { justify-content: center; }
        .justify-content-between { justify-content: space-between; }
        .justify-content-around { justify-content: space-around; }
        .justify-content-evenly { justify-content: space-evenly; }
        .justify-content-end .grid-item { background-color: #f39c12; }

        /* align-content */
        .align-content-start { align-content: start; }
        .align-content-end { align-content: end; }
        .align-content-center { align-content: center; }
        .align-content-between { align-content: space-between; }
        .align-content-around { align-content: space-around; }
        .align-content-evenly { align-content: space-evenly; }
        .align-content-end .grid-item { background-color: #f39c12; }

        /* place-content shorthand */
        .place-content-center { place-content: center; } /* both centered */
        .place-content-start-end { place-content: start end; } /* align-content: start, justify-content: end */
    </style>
</head>
<body>
    <h1>CSS Grid Layout: Auto Flow, Gaps, and Container Alignment</h1>

    <h2>\`grid-auto-flow\` and Implicit Grids</h2>
    <p>How auto-placed items fill the grid when you don't explicitly place them all.</p>
    <h3>\`grid-auto-flow: row;\` (Default)</h3>
    <div class="grid-container auto-flow-row">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7 (Auto)</div>
    </div>
    <h3>\`grid-auto-flow: column;\`</h3>
    <div class="grid-container auto-flow-column">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7 (Auto)</div>
    </div>
    <h3>\`grid-auto-flow: row dense;\` (Fills empty spots)</h3>
    <div class="grid-container auto-flow-dense">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item item-long">3 (Spans 2)</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
    </div>

    <h2>Gap Properties (\`gap\`, \`row-gap\`, \`column-gap\`)</h2>
    <h3>\`gap: 20px 30px;\` (Row gap 20px, Column gap 30px)</h3>
    <div class="grid-container gap-example">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
    </div>
    <h3>\`row-gap: 40px;\`</h3>
    <div class="grid-container row-gap-example">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
    </div>
    <h3>\`column-gap: 50px;\`</h3>
    <div class="grid-container column-gap-example">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
    </div>

    <h2>Alignment Properties (Applied to Container)</h2>
    <p>Here, items have \`min-height\` and \`min-width\` so they don't stretch fully by default.</p>

    <h3>\`justify-items\` (Aligns items along the *row* axis within their *cells*)</h3>
    <div class="grid-container alignment-container justify-items-start">
        <div class="grid-item">Start</div><div class="grid-item">Start</div><div class="grid-item">Start</div>
        <div class="grid-item">Start</div><div class="grid-item">Start</div><div class="grid-item">Start</div>
    </div>
    <div class="grid-container alignment-container justify-items-end">
        <div class="grid-item">End</div><div class="grid-item">End</div><div class="grid-item">End</div>
        <div class="grid-item">End</div><div class="grid-item">End</div><div class="grid-item">End</div>
    </div>
    <div class="grid-container alignment-container justify-items-center">
        <div class="grid-item">Center</div><div class="grid-item">Center</div><div class="grid-item">Center</div>
        <div class="grid-item">Center</div><div class="grid-item">Center</div><div class="grid-item">Center</div>
    </div>

    <h3>\`align-items\` (Aligns items along the *column* axis within their *cells*)</h3>
    <div class="grid-container alignment-container align-items-start">
        <div class="grid-item">Start</div><div class="grid-item">Start</div><div class="grid-item">Start</div>
        <div class="grid-item">Start</div><div class="grid-item">Start</div><div class="grid-item">Start</div>
    </div>
    <div class="grid-container alignment-container align-items-end">
        <div class="grid-item">End</div><div class="grid-item">End</div><div class="grid-item">End</div>
        <div class="grid-item">End</div><div class="grid-item">End</div><div class="grid-item">End</div>
    </div>
    <div class="grid-container alignment-container align-items-center">
        <div class="grid-item">Center</div><div class="grid-item">Center</div><div class="grid-item">Center</div>
        <div class="grid-item">Center</div><div class="grid-item">Center</div><div class="grid-item">Center</div>
    </div>

    <h3>\`place-items\` (Shorthand for \`align-items justify-items\`)</h3>
    <div class="grid-container alignment-container place-items-center">
        <div class="grid-item">Centered</div><div class="grid-item">Centered</div><div class="grid-item">Centered</div>
        <div class="grid-item">Centered</div><div class="grid-item">Centered</div><div class="grid-item">Centered</div>
    </div>
    <div class="grid-container alignment-container place-items-start-end">
        <div class="grid-item">S-E</div><div class="grid-item">S-E</div><div class="grid-item">S-E</div>
        <div class="grid-item">S-E</div><div class="grid-item">S-E</div><div class="grid-item">S-E</div>
    </div>

    <h3>\`justify-content\` (Aligns the *entire grid* along the *row* axis within container)</h3>
    <div class="grid-container alignment-container justify-content-start">
        <div class="grid-item">1</div><div class="grid-item">2</div><div class="grid-item">3</div>
        <div class="grid-item">4</div><div class="grid-item">5</div><div class="grid-item">6</div>
    </div>
    <div class="grid-container alignment-container justify-content-center">
        <div class="grid-item">1</div><div class="grid-item">2</div><div class="grid-item">3</div>
        <div class="grid-item">4</div><div class="grid-item">5</div><div class="grid-item">6</div>
    </div>
    <div class="grid-container alignment-container justify-content-end">
        <div class="grid-item">1</div><div class="grid-item">2</div><div class="grid-item">3</div>
        <div class="grid-item">4</div><div class="grid-item">5</div><div class="grid-item">6</div>
    </div>
    <div class="grid-container alignment-container justify-content-between">
        <div class="grid-item">1</div><div class="grid-item">2</div><div class="grid-item">3</div>
        <div class="grid-item">4</div><div class="grid-item">5</div><div class="grid-item">6</div>
    </div>

    <h3>\`align-content\` (Aligns the *entire grid* along the *column* axis within container)</h3>
    <div class="grid-container alignment-container align-content-start">
        <div class="grid-item">1</div><div class="grid-item">2</div><div class="grid-item">3</div>
        <div class="grid-item">4</div><div class="grid-item">5</div><div class="grid-item">6</div>
    </div>
    <div class="grid-container alignment-container align-content-center">
        <div class="grid-item">1</div><div class="grid-item">2</div><div class="grid-item">3</div>
        <div class="grid-item">4</div><div class="grid-item">5</div><div class="grid-item">6</div>
    </div>
    <div class="grid-container alignment-container align-content-end">
        <div class="grid-item">1</div><div class="grid-item">2</div><div class="grid-item">3</div>
        <div class="grid-item">4</div><div class="grid-item">5</div><div class="grid-item">6</div>
    </div>
    <div class="grid-container alignment-container align-content-space-around">
        <div class="grid-item">1</div><div class="grid-item">2</div><div class="grid-item">3</div>
        <div class="grid-item">4</div><div class="grid-item">5</div><div class="grid-item">6</div>
    </div>

    <h3>\`place-content\` (Shorthand for \`align-content justify-content\`)</h3>
    <div class="grid-container alignment-container place-content-center">
        <div class="grid-item">1</div><div class="grid-item">2</div><div class="grid-item">3</div>
        <div class="grid-item">4</div><div class="grid-item">5</div><div class="grid-item">6</div>
    </div>
    <div class="grid-container alignment-container place-content-start-end">
        <div class="grid-item">1</div><div class="grid-item">2</div><div class="grid-item">3</div>
        <div class="grid-item">4</div><div class="grid-item">5</div><div class="grid-item">6</div>
    </div>
</body>
</html>`;

// Code example 3: Grid Item Placement and Self-Alignment
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid: Item Placement & Self-Alignment</title>
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

        .grid-container {
            border: 2px dashed #999;
            padding: 15px;
            margin-bottom: 40px;
            background-color: #ffffff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            min-height: 200px;
            display: grid;
            grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
            grid-template-rows: repeat(3, 100px); /* 3 equal rows */
            gap: 10px;
        }

        .grid-item {
            background-color: #3498db; /* Blue */
            color: white;
            text-align: center;
            line-height: 80px;
            font-weight: bold;
            border-radius: 5px;
            padding: 10px;
            min-height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        /* --- Line-based Placement --- */
        .line-placement-container {
            border-color: #8e44ad;
        }
        .item-1-2 {
            grid-column-start: 1; /* Starts at line 1 */
            grid-column-end: 3;   /* Ends before line 3 (spans 2 columns) */
            grid-row-start: 1;
            grid-row-end: 2;
            background-color: #e74c3c;
        }
        .item-2-span-2 {
            grid-column: 2 / span 2; /* Starts at line 2, spans 2 columns */
            grid-row: 2 / 3;
            background-color: #2ecc71;
        }
        .item-3-span-all {
            grid-column: 1 / -1; /* Starts at line 1, ends at last line */
            grid-row: 3;
            background-color: #f1c40f;
        }

        /* --- Area-based Placement --- */
        .area-placement-container {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto 1fr auto;
            grid-template-areas:
                "header header header"
                "nav    main   aside"
                "footer footer footer";
            height: 350px;
            border-color: #e67e22;
        }
        .item-header { grid-area: header; background-color: #c0392b; }
        .item-nav { grid-area: nav; background-color: #d35400; }
        .item-main { grid-area: main; background-color: #f39c12; }
        .item-aside { grid-area: aside; background-color: #e67e22; }
        .item-footer { grid-area: footer; background-color: #c0392b; }
        .area-placement-container .grid-item {
            line-height: normal; padding: 15px; height: auto;
        }


        /* --- Self-Alignment (Item) --- */
        .self-alignment-container {
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(2, 100px);
            justify-items: stretch; /* Default for container */
            align-items: stretch;   /* Default for container */
            height: 250px;
            width: 400px;
            border-color: #34495e;
            gap: 5px;
        }
        .self-alignment-container .grid-item {
            width: 70px; /* Give a fixed size to see self-alignment */
            height: 70px;
            background-color: #95a5a6;
        }

        /* justify-self */
        .item-justify-start { justify-self: start; background-color: #7f8c8d; }
        .item-justify-end { justify-self: end; background-color: #7f8c8d; }
        .item-justify-center { justify-self: center; background-color: #7f8c8d; }

        /* align-self */
        .item-align-start { align-self: start; background-color: #2c3e50; }
        .item-align-end { align-self: end; background-color: #2c3e50; }
        .item-align-center { align-self: center; background-color: #2c3e50; }

        /* place-self */
        .item-place-center { place-self: center; background-color: #1a237e; } /* Both centered */
        .item-place-start-end { place-self: start end; background-color: #0d47a1; } /* align-self: start, justify-self: end */

    </style>
</head>
<body>
    <h1>CSS Grid Layout: Item Placement and Self-Alignment</h1>

    <h2>Placing Items by Line Numbers (\`grid-column\`, \`grid-row\`)</h2>
    <div class="grid-container line-placement-container">
        <div class="grid-item item-1-2">Item 1 (C1-C3, R1)</div>
        <div class="grid-item">Auto-placed A</div>
        <div class="grid-item item-2-span-2">Item 2 (C2-C4, R2)</div>
        <div class="grid-item">Auto-placed B</div>
        <div class="grid-item item-3-span-all">Item 3 (C1-C-1, R3)</div>
        <div class="grid-item">Auto-placed C</div>
        <div class="grid-item">Auto-placed D</div>
        <div class="grid-item">Auto-placed E</div>
    </div>

    <h2>Placing Items by Named Areas (\`grid-area\`)</h2>
    <p>This grid uses \`grid-template-areas\` on the container and assigns items to them.</p>
    <div class="grid-container area-placement-container">
        <div class="grid-item item-header">Site Header</div>
        <div class="grid-item item-nav">Main Navigation</div>
        <div class="grid-item item-main">Main Content Area (using grid-area)</div>
        <div class="grid-item item-aside">Right Sidebar</div>
        <div class="grid-item item-footer">Site Footer</div>
    </div>

    <h2>Self-Alignment (\`justify-self\`, \`align-self\`, \`place-self\`)</h2>
    <p>Overrides container's \`justify-items\`/ \`align-items\` for specific items.</p>
    <div class="grid-container self-alignment-container">
        <div class="grid-item item-justify-start">J-Start</div>
        <div class="grid-item item-justify-end">J-End</div>
        <div class="grid-item item-justify-center">J-Center</div>

        <div class="grid-item item-align-start">A-Start</div>
        <div class="grid-item item-align-end">A-End</div>
        <div class="grid-item item-align-center">A-Center</div>

        <div class="grid-item item-place-center">P-Center</div>
        <div class="grid-item item-place-start-end">P-S-E</div>
        <div class="grid-item">Default (Stretch)</div>
    </div>
</body>
</html>`;

export default function CssGridLayoutPage() {
  const page = 28; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/EAF2F8/346DA4?text=CSS+Grid+Layout"
              alt="CSS Grid Layout Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Deep Dive into CSS Grid Layout: Crafting Two-Dimensional
              Structures 📐
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              CSS Grid Layout is a powerful module that brings a true
              **two-dimensional** layout system to the web. Unlike Flexbox,
              which arranges content primarily in a single row OR a single
              column, Grid allows you to define both rows AND columns
              simultaneously, and then precisely place content into these grid
              cells or areas. It's the ideal choice for designing main page
              layouts and complex section structures.
            </p>

            {/* 1. Introduction to Grid */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. The Core Concept: Grid Container & Grid Items
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Similar to Flexbox, Grid works with a parent **Grid Container**
                and its direct children, which become **Grid Items**. You define
                the grid structure on the container, and then you can place or
                flow the items into that structure.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Key Terminology:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Grid Lines:
                  </strong>{" "}
                  The horizontal and vertical dividing lines of the grid. They
                  are numbered from 1, often starting at the left/top edge.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Grid Tracks:
                  </strong>{" "}
                  The space between two adjacent grid lines (i.e., columns or
                  rows).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Grid Cells:
                  </strong>{" "}
                  The smallest unit of the grid, formed by the intersection of a
                  grid row and a grid column.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Grid Areas:
                  </strong>{" "}
                  A named area of the grid that can span multiple cells, useful
                  for organizing complex layouts.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Grid Container Properties */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Properties for the Grid Container (Parent Element)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These properties define the grid itself – its rows, columns, and
                how items are placed within it.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `display: grid;` | `display: inline-grid;`
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `grid`
                  </strong>
                  : Establishes a block-level grid container. Most common.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `inline-grid`
                  </strong>
                  : Establishes an inline-level grid container. The container
                  itself takes up content width.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is the essential first step to create a grid.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Defining Grid Structure: Rows and Columns
              </h3>
              <h4 className="tw:text-lg! tw:font-semibold! tw:text-gray-700! tw:mb-2! tw:mt-4;">
                `grid-template-columns` and `grid-template-rows`
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These properties define the explicit tracks (columns and rows)
                of your grid.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Fixed Units:
                  </strong>{" "}
                  `px`, `em`, `rem`, `vw`, `vh`. E.g., `grid-template-columns:
                  100px 200px;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Percentage Units:
                  </strong>{" "}
                  `%`. E.g., `grid-template-columns: 25% 50% 25%;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `fr` Unit (Fractional Unit):
                  </strong>{" "}
                  Represents a fraction of the available space. Very powerful
                  for fluid layouts. E.g., `grid-template-columns: 1fr 2fr 1fr;`
                  means the second column gets twice as much space as the first
                  and third.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `auto` Keyword:
                  </strong>{" "}
                  Automatically sizes the track based on its content or
                  remaining space. E.g., `grid-template-columns: auto 1fr auto;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `repeat()` Function:
                  </strong>{" "}
                  A shorthand to repeat track listings. E.g., `repeat(3, 100px)`
                  is `100px 100px 100px`.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>
                      <strong className="tw:font-semibold! tw:text-orange-600!">
                        `auto-fit` / `auto-fill` with `minmax()`:
                      </strong>{" "}
                      Crucial for responsive grids. `repeat(auto-fit,
                      minmax(200px, 1fr))` means "create as many columns as can
                      fit, each between 200px and 1fr wide." `auto-fit`
                      collapses empty tracks, `auto-fill` keeps them.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `minmax(min, max)` Function:
                  </strong>{" "}
                  Defines a size range for a track. The track will be at least
                  `min` and at most `max`. E.g., `minmax(100px, 1fr)`.
                </li>
              </ul>

              <h4 className="tw:text-lg! tw:font-semibold! tw:text-gray-700! tw:mb-2! tw:mt-4;">
                `grid-template-areas` (Layout with Named Areas)
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This property allows you to define a layout by referencing the
                names of grid areas that you then assign to grid items. It's
                highly readable and great for overall page structures.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                .grid-container{" "}
                {`{
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header header"
        "nav    main   aside"
        "footer footer footer";
}`}
                .header {`{ grid-area: header; }`} /* item assigned to area */
                .nav {`{ grid-area: nav;    }`}
                .main {`{ grid-area: main;   }`}
              </pre>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    String Literals:
                  </strong>{" "}
                  Each string represents a row. Within a string, names separated
                  by spaces represent columns.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `.` (dot):
                  </strong>{" "}
                  Represents an empty cell.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Repeating Names:
                  </strong>{" "}
                  An item spans multiple cells if its name is repeated (e.g.,
                  `header header header`).
                </li>
              </ul>

              <h4 className="tw:text-lg! tw:font-semibold! tw:text-gray-700! tw:mb-2! tw:mt-4;">
                `grid-template` (Shorthand for all template properties)
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Combines `grid-template-rows`, `grid-template-columns`, and
                `grid-template-areas` in a single declaration.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                .grid-container{" "}
                {`{
    grid-template:
        "header header header" 80px /* Row 1: areas + height */
        "nav    main   aside"  1fr  /* Row 2: areas + height */
        "footer footer footer" auto /* Row 3: areas + height */
        / auto 1fr 100px; /* Column sizes after '/' */
}`}
              </pre>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2.1. Implicit Grid, Gaps, and Alignment (Container Properties)
              </h2>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `grid-auto-flow`, `grid-auto-rows`, `grid-auto-columns`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When you have more grid items than explicitly defined grid
                cells, Grid automatically creates *implicit* tracks to
                accommodate them. These properties control how those implicit
                tracks behave.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `grid-auto-flow` (default: `row`)
                  </strong>
                  : Controls how auto-placed items fill the grid.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>
                      `row`: Fills rows first, then moves to the next implicit
                      row.
                    </li>
                    <li>
                      `column`: Fills columns first, then moves to the next
                      implicit column.
                    </li>
                    <li>
                      `dense`: Tries to fit smaller items into earlier empty
                      spaces, potentially changing the visual order from source
                      order.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `grid-auto-rows` / `grid-auto-columns`
                  </strong>
                  : Defines the size of implicitly created rows or columns.
                  E.g., `grid-auto-rows: 100px;`
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `gap`, `row-gap`, `column-gap` (Spacing between cells)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These properties create gaps (gutters) between grid tracks.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `gap` (shorthand)
                  </strong>
                  : {`gap: <row-gap> <column-gap>;`} (if one value, applies to
                  both). E.g., `gap: 20px;` or `gap: 10px 20px;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `row-gap`
                  </strong>
                  : Space between rows.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `column-gap`
                  </strong>
                  : Space between columns.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:italic! tw:font-bold!">
                Note: These properties were originally `grid-gap`,
                `grid-row-gap`, `grid-column-gap` but were standardized to
                `gap`, `row-gap`, `column-gap` and now apply to Flexbox as well.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Alignment & Justification (Container Properties)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These properties control the alignment of grid items *within
                their cells* and the alignment of the *entire grid* within the
                container.
              </p>
              <h4 className="tw:text-lg! tw:font-semibold! tw:text-gray-700! tw:mb-2! tw:mt-4!">
                Aligning Items within their Cells: `justify-items` &
                `align-items`
              </h4>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `justify-items`
                  </strong>
                  : Aligns grid items along the **inline (row) axis** inside
                  their cells.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>`start`, `end`, `center`, `stretch` (default)</li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `align-items`
                  </strong>
                  : Aligns grid items along the **block (column) axis** inside
                  their cells.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>`start`, `end`, `center`, `stretch` (default)</li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `place-items` (shorthand)
                  </strong>
                  : {`place-items: <align-items> <justify-items>;`} (if one
                  value, applies to both).
                </li>
              </ul>

              <h4 className="tw:text-lg! tw:font-semibold! tw:text-gray-700! tw:mb-2! tw:mt-4!">
                Aligning the Grid within its Container: `justify-content` &
                `align-content`
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These apply when the total size of the grid tracks is *smaller*
                than the grid container's size.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `justify-content`
                  </strong>
                  : Aligns the **entire grid** along the **inline (row) axis**
                  inside the container.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>
                      `start`, `end`, `center`, `space-between`, `space-around`,
                      `space-evenly`
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `align-content`
                  </strong>
                  : Aligns the **entire grid** along the **block (column) axis**
                  inside the container.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>
                      `start`, `end`, `center`, `space-between`, `space-around`,
                      `space-evenly`
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `place-content` (shorthand)
                  </strong>
                  : {`place-content: <align-content> <justify-content>;`} (if
                  one value, applies to both).
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Grid Item Properties */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. Properties for the Grid Items (Child Elements)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These properties are applied directly to the children of the
                grid container and control their placement and individual
                alignment.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Placing Items by Line Numbers
              </h3>
              <h4 className="tw:text-lg! tw:font-semibold! tw:text-gray-700! tw:mb-2! tw:mt-4;">
                `grid-column-start`, `grid-column-end`, `grid-row-start`,
                `grid-row-end`
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These properties allow you to explicitly place an item by
                specifying the grid lines it starts and ends at.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Line Numbers:
                  </strong>{" "}
                  Use positive or negative numbers (negative counts from the
                  end). E.g., `grid-column-start: 1; grid-column-end: 3;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `span` Keyword:
                  </strong>{" "}
                  Specifies how many tracks an item should span. E.g.,
                  `grid-column-end: span 2;` (start line to 2 tracks after).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `grid-column` / `grid-row` (shorthands)
                  </strong>
                  : {`grid-column: <start-line> / <end-line>;`} or{" "}
                  {`grid-column: <start-line> / span <number>;`}.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Placing Items by Named Areas
              </h3>
              <h4 className="tw:text-lg! tw:font-semibold! tw:text-gray-700! tw:mb-2! tw:mt-4;">
                `grid-area`
              </h4>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This property assigns a grid item to a named area previously
                defined with `grid-template-areas` on the container.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Value:
                  </strong>{" "}
                  The name of the grid area. E.g., `grid-area: header;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Shorthand for Line-based:
                  </strong>{" "}
                  It can also be a shorthand for `grid-row-start /
                  grid-column-start / grid-row-end / grid-column-end;`. E.g.,
                  `grid-area: 1 / 2 / 3 / 4;`
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Self-Alignment (`justify-self`, `align-self`, `place-self`)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These properties override the `justify-items` and `align-items`
                settings from the grid container for a specific item.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `justify-self`
                  </strong>
                  : Aligns an individual item along the **inline (row) axis**
                  within its own cell.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `align-self`
                  </strong>
                  : Aligns an individual item along the **block (column) axis**
                  within its own cell.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `place-self` (shorthand)
                  </strong>
                  : {`place-self: <align-self> <justify-self>;`}
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Values:
                  </strong>{" "}
                  `auto` (default), `start`, `end`, `center`, `stretch`.
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section3} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 4. Practical Examples & Best Practices */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                4. Practical Examples & Best Practices
              </h2>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Holy Grail Layout with Grid Areas
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A classic layout often used as a benchmark for layout systems.
                Grid makes it incredibly simple and semantic.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                .page-wrapper{" "}
                {`{
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header header"
        "nav    content sidebar"
        "footer footer footer";
    min-height: 100vh;
}
    header { grid-area: header; }
nav    { grid-area: nav;    }
main   { grid-area: content; }
aside  { grid-area: sidebar; }
footer { grid-area: footer; }`}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Responsive Gallery with `repeat()` and `minmax()`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Create image galleries that adapt to screen size, without media
                queries for column count.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
.gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}`}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Centering with Grid
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Like Flexbox, Grid makes centering trivial.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.center-container {
    display: grid;
    place-items: center; /* Shorthand for align-items: center; justify-items: center; */
    height: 100vh;
}
/* For a single item, or if the grid has only one cell */
.center-container {
    display: grid;
    grid-template-columns: 1fr; /* Or any definition that creates space */
    grid-template-rows: 1fr;
    place-content: center; /* If grid itself needs centering */
    height: 100vh;
}
   `}{" "}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Flexbox vs. CSS Grid: Revisit The Distinction
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Flexbox: One-Dimensional Layout (Content-Out)
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>Arranges items primarily in a single row or column.</li>
                    <li>Best for distributing space *between items*.</li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    CSS Grid: Two-Dimensional Layout (Layout-In)
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>Defines both rows AND columns simultaneously.</li>
                    <li>
                      Best for defining overall page structure and positioning
                      content in explicit areas.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **They complement each other.** Use Grid for the macro layout
                (whole page sections) and Flexbox for the micro layout
                (arranging items within a specific header, footer, or card).
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: The Future of Layout
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                CSS Grid is incredibly powerful and has revolutionized web
                layout. It provides a level of control and flexibility unmatched
                by previous CSS techniques. While it might seem complex at
                first, understanding the core concepts of Grid Container and
                Grid Items, along with line-based and area-based placement, will
                unlock immense potential in your web designs.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Use your browser's developer tools (especially the Grid
                Inspector in Firefox and Chrome) to visualize your grids and
                debug layouts. Practice building different structures, and
                you'll quickly become proficient!
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
