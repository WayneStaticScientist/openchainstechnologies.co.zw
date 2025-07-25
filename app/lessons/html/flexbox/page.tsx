import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "Flexbox Basics: Container Properties",
  description:
    "Learn the core properties of Flexbox containers, including display, direction, and wrapping.",
  openGraph: {
    title: "Flexbox Basics: Container Properties",
    description:
      "Learn the core properties of Flexbox containers, including display, direction, and wrapping.",
    url: `${baseUrl}/lessons/html/flexbox`,
    siteName: "Openchains Technologies",
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/flexbox`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Display Flex, Flex Direction, Flex Wrap
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Basics: Container Properties</title>
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

        .flex-container {
            border: 2px dashed #999;
            padding: 15px;
            margin-bottom: 30px;
            background-color: #ffffff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            min-height: 100px; /* To visualize container */

            /* Core Flexbox properties */
            display: flex; /* Makes this a flex container */
        }

        .flex-item {
            width: 80px;
            height: 80px;
            background-color: #3498db; /* Blue */
            color: white;
            text-align: center;
            line-height: 80px; /* Vertically center text */
            font-weight: bold;
            margin: 5px; /* Spacing between items */
            border-radius: 5px;
            flex-shrink: 0; /* Prevent items from shrinking by default in these examples */
        }

        /* --- display: flex; / display: inline-flex; --- */
        .inline-flex-example {
            display: inline-flex; /* Behaves like an inline element */
            border-color: #27ae60;
            width: fit-content; /* Shrink to fit content */
        }
        .block-flex-example {
             display: flex; /* Behaves like a block element */
             border-color: #e74c3c;
             width: 100%; /* Default block behavior */
        }


        /* --- flex-direction --- */
        .flex-direction-row {
            flex-direction: row; /* Default: items go left to right */
            border-color: #8e44ad;
        }
        .flex-direction-row-reverse {
            flex-direction: row-reverse; /* Items go right to left */
            background-color: #f8f0fc;
            border-color: #6c5ce7;
        }
        .flex-direction-column {
            flex-direction: column; /* Items go top to bottom */
            height: 250px; /* Give container height for column */
            align-items: flex-start; /* Adjust alignment for column layout */
            border-color: #e67e22;
        }
        .flex-direction-column-reverse {
            flex-direction: column-reverse; /* Items go bottom to top */
            height: 250px;
            align-items: flex-end; /* Adjust alignment for column layout */
            background-color: #fff3e0;
            border-color: #f39c12;
        }


        /* --- flex-wrap --- */
        .flex-wrap-nowrap {
            flex-wrap: nowrap; /* Default: items stay on one line, may overflow */
            border-color: #1abc9c;
            width: 300px; /* Make container small to force overflow */
            overflow: hidden; /* Hide overflow for demonstration */
        }
        .flex-wrap-wrap {
            flex-wrap: wrap; /* Items wrap to the next line */
            border-color: #2ecc71;
            width: 300px; /* Make container small to force wrapping */
            height: auto; /* Allow height to expand */
        }
        .flex-wrap-wrap-reverse {
            flex-wrap: wrap-reverse; /* Items wrap to the previous line */
            border-color: #9b59b6;
            width: 300px;
            height: auto;
            background-color: #fce4ec;
        }

        /* Specific item styles for examples */
        .flex-direction-column .flex-item,
        .flex-direction-column-reverse .flex-item {
            width: 100px; /* Make items wider for column layout */
            height: 50px; /* Make items shorter for column layout */
            line-height: 50px;
        }

        .flex-wrap-nowrap .flex-item,
        .flex-wrap-wrap .flex-item,
        .flex-wrap-wrap-reverse .flex-item {
            flex-shrink: 1; /* Allow shrinking in wrap examples */
            width: 90px;
        }
    </style>
</head>
<body>
    <h1>Flexbox Layout: The Container Properties</h1>

    <div class="section-container block-flex-example">
        <h2>\`display: flex;\` (Block-level Flex Container)</h2>
        <p style="position: absolute; top: -9999px; left: -9999px;">This container behaves like a block element, taking up full width by default.</p>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
    </div>
    <div class="section-container inline-flex-example">
        <h2>\`display: inline-flex;\` (Inline-level Flex Container)</h2>
        <p style="position: absolute; top: -9999px; left: -9999px;">This container behaves like an inline element, only taking up content width, allowing other inline elements (or other inline-flex containers) next to it.</p>
        <div class="flex-item">A</div>
        <div class="flex-item">B</div>
        <div class="flex-item">C</div>
    </div>
    <p>This paragraph comes after the \`inline-flex\` container, demonstrating its inline behavior.</p>

    <div class="section-container flex-direction-row">
        <h2>\`flex-direction: row;\` (Default)</h2>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
    </div>

    <div class="section-container flex-direction-row-reverse">
        <h2>\`flex-direction: row-reverse;\`</h2>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
    </div>

    <div class="section-container flex-direction-column">
        <h2>\`flex-direction: column;\`</h2>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
    </div>

    <div class="section-container flex-direction-column-reverse">
        <h2>\`flex-direction: column-reverse;\`</h2>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
    </div>

    <div class="section-container flex-wrap-nowrap">
        <h2>\`flex-wrap: nowrap;\` (Default - container width 300px)</h2>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
    </div>

    <div class="section-container flex-wrap-wrap">
        <h2>\`flex-wrap: wrap;\` (Container width 300px)</h2>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
    </div>

    <div class="section-container flex-wrap-wrap-reverse">
        <h2>\`flex-wrap: wrap-reverse;\` (Container width 300px)</h2>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
    </div>

    <div class="section-container" style="flex-flow: row wrap; border-color: #6a0572;">
        <h2>\`flex-flow: row wrap;\` (Shorthand for direction & wrap)</h2>
        <div class="flex-item">A</div>
        <div class="flex-item">B</div>
        <div class="flex-item">C</div>
        <div class="flex-item">D</div>
        <div class="flex-item">E</div>
    </div>
</body>
</html>`;

// Code example 2: Justify Content, Align Items, Align Content
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Alignment: Container Properties</title>
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

        .flex-container {
            border: 2px dashed #999;
            padding: 15px;
            margin-bottom: 30px;
            background-color: #ffffff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            min-height: 120px; /* To visualize container height */
            display: flex;
            margin-bottom: 50px;
        }

        .flex-item {
            width: 80px;
            height: 80px;
            background-color: #3498db; /* Blue */
            color: white;
            text-align: center;
            line-height: 80px;
            font-weight: bold;
            margin: 5px;
            border-radius: 5px;
            flex-shrink: 0;
            opacity: 0.9;
        }

        /* --- justify-content --- */
        .justify-content-start { justify-content: flex-start; border-color: #2ecc71; }
        .justify-content-end { justify-content: flex-end; background-color: #f4f8f4; border-color: #27ae60;}
        .justify-content-center { justify-content: center; border-color: #e74c3c; }
        .justify-content-between { justify-content: space-between; background-color: #fbecec; border-color: #c0392b; }
        .justify-content-around { justify-content: space-around; border-color: #8e44ad; }
        .justify-content-evenly { justify-content: space-evenly; background-color: #f8f0fc; border-color: #6c5ce7; }

        /* --- align-items --- */
        .align-items-container {
            height: 200px; /* Give height to see alignment */
            align-items: stretch; /* Default for demonstration */
            border-color: #f1c40f;
            background-color: #fffde7;
        }
        .align-items-item-tall {
            height: 120px; /* Make one item taller */
            line-height: 120px;
            background-color: #e67e22;
        }
        .align-items-item-short {
            height: 60px; /* Make one item shorter */
            line-height: 60px;
            background-color: #f39c12;
        }

        .align-items-start { align-items: flex-start; }
        .align-items-end { align-items: flex-end; }
        .align-items-center { align-items: center; }
        .align-items-baseline { align-items: baseline; } /* Needs varying font sizes to see effect */
        .align-items-baseline .flex-item { font-size: 1.2em; }
        .align-items-baseline .flex-item:nth-child(2) { font-size: 1.8em; height: 90px; line-height: 90px;}
        .align-items-baseline .flex-item:nth-child(3) { font-size: 0.8em; }

        /* --- align-content --- */
        .align-content-container {
            height: 300px; /* Must have extra space on cross axis */
            flex-wrap: wrap; /* Must wrap for align-content to work */
            width: 250px; /* Force wrapping with small width */
            border-color: #34495e;
            background-color: #ecf0f1;
            align-content: stretch; /* Default for demonstration */
        }
        .align-content-item {
            width: 100px;
            height: 60px;
            line-height: 60px;
            background-color: #95a5a6;
            margin: 5px;
        }

        .align-content-start { align-content: flex-start; }
        .align-content-end { align-content: flex-end; }
        .align-content-center { align-content: center; }
        .align-content-between { align-content: space-between; }
        .align-content-around { align-content: space-around; }
        .align-content-evenly { align-content: space-evenly; }

    </style>
</head>
<body>
    <h1>Flexbox Layout: Alignment Properties (Container)</h1>

    <h2>\`justify-content\` (Main Axis Distribution)</h2>
    <div class="flex-container justify-content-start">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
    </div>
    <div class="flex-container justify-content-end">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
    </div>
    <div class="flex-container justify-content-center">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
    </div>
    <div class="flex-container justify-content-between">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
    </div>
    <div class="flex-container justify-content-around">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
    </div>
    <div class="flex-container justify-content-evenly">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
    </div>

    <h2>\`align-items\` (Cross Axis Alignment - Single Line)</h2>
    <div class="flex-container align-items-container align-items-stretch">
        <div class="flex-item">1</div>
        <div class="flex-item align-items-item-tall">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item align-items-item-short">4</div>
    </div>
    <div class="flex-container align-items-container align-items-flex-start">
        <div class="flex-item">1</div>
        <div class="flex-item align-items-item-tall">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item align-items-item-short">4</div>
    </div>
    <div class="flex-container align-items-container align-items-flex-end">
        <div class="flex-item">1</div>
        <div class="flex-item align-items-item-tall">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item align-items-item-short">4</div>
    </div>
    <div class="flex-container align-items-container align-items-center">
        <div class="flex-item">1</div>
        <div class="flex-item align-items-item-tall">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item align-items-item-short">4</div>
    </div>
    <div class="flex-container align-items-container align-items-baseline">
        <div class="flex-item">Txt 1</div>
        <div class="flex-item">TXT 2</div>
        <div class="flex-item">txt 3</div>
    </div>

    <h2>\`align-content\` (Cross Axis Distribution - Multiple Lines)</h2>
    <p>NOTE: This only works with \`flex-wrap: wrap;\` and when there's extra space on the cross axis (i.e., the container is taller than necessary for the wrapped items).</p>
    <div class="flex-container align-content-container align-content-stretch">
        <div class="align-content-item">A</div>
        <div class="align-content-item">B</div>
        <div class="align-content-item">C</div>
        <div class="align-content-item">D</div>
        <div class="align-content-item">E</div>
        <div class="align-content-item">F</div>
    </div>
    <div class="flex-container align-content-container align-content-flex-start">
        <div class="align-content-item">A</div>
        <div class="align-content-item">B</div>
        <div class="align-content-item">C</div>
        <div class="align-content-item">D</div>
        <div class="align-content-item">E</div>
        <div class="align-content-item">F</div>
    </div>
    <div class="flex-container align-content-container align-content-flex-end">
        <div class="align-content-item">A</div>
        <div class="align-content-item">B</div>
        <div class="align-content-item">C</div>
        <div class="align-content-item">D</div>
        <div class="align-content-item">E</div>
        <div class="align-content-item">F</div>
    </div>
    <div class="flex-container align-content-container align-content-center">
        <div class="align-content-item">A</div>
        <div class="align-content-item">B</div>
        <div class="align-content-item">C</div>
        <div class="align-content-item">D</div>
        <div class="align-content-item">E</div>
        <div class="align-content-item">F</div>
    </div>
    <div class="flex-container align-content-container align-content-space-between">
        <div class="align-content-item">A</div>
        <div class="align-content-item">B</div>
        <div class="align-content-item">C</div>
        <div class="align-content-item">D</div>
        <div class="align-content-item">E</div>
        <div class="align-content-item">F</div>
    </div>
    <div class="flex-container align-content-container align-content-space-around">
        <div class="align-content-item">A</div>
        <div class="align-content-item">B</div>
        <div class="align-content-item">C</div>
        <div class="align-content-item">D</div>
        <div class="align-content-item">E</div>
        <div class="align-content-item">F</div>
    </div>
    <div class="flex-container align-content-container align-content-space-evenly">
        <div class="align-content-item">A</div>
        <div class="align-content-item">B</div>
        <div class="align-content-item">C</div>
        <div class="align-content-item">D</div>
        <div class="align-content-item">E</div>
        <div class="align-content-item">F</div>
    </div>
</body>
</html>`;

// Code example 3: Flex Item Properties
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox: Item Properties</title>
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

        .flex-container {
            border: 2px dashed #999;
            padding: 15px;
            margin-bottom: 30px;
            background-color: #ffffff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            display: flex;
            min-height: 100px;
        }

        .flex-item {
            width: 80px;
            height: 80px;
            background-color: #3498db; /* Blue */
            color: white;
            text-align: center;
            line-height: 80px;
            font-weight: bold;
            margin: 5px;
            border-radius: 5px;
            opacity: 0.9;
        }

        /* --- order --- */
        .order-container .flex-item:nth-child(1) { order: 3; background-color: #e74c3c; } /* Red */
        .order-container .flex-item:nth-child(2) { order: 1; background-color: #2ecc71; } /* Green */
        .order-container .flex-item:nth-child(3) { order: 4; background-color: #f1c40f; } /* Yellow */
        .order-container .flex-item:nth-child(4) { order: 2; background-color: #8e44ad; } /* Purple */

        /* --- flex-grow --- */
        .grow-container {
            width: 500px; /* Give ample space */
            border-color: #1abc9c;
        }
        .grow-container .flex-item:nth-child(1) { flex-grow: 1; background-color: #27ae60; } /* Takes 1 part of remaining space */
        .grow-container .flex-item:nth-child(2) { flex-grow: 2; background-color: #3498db; } /* Takes 2 parts of remaining space */
        .grow-container .flex-item:nth-child(3) { flex-grow: 1; background-color: #27ae60; }
        .grow-container .flex-item { width: 60px; } /* Smaller initial width */

        /* --- flex-shrink --- */
        .shrink-container {
            width: 200px; /* Force shrinking */
            border-color: #e67e22;
        }
        .shrink-container .flex-item { width: 100px; } /* Initial width makes them overflow */
        .shrink-container .flex-item:nth-child(1) { flex-shrink: 0; background-color: #c0392b; } /* Will not shrink */
        .shrink-container .flex-item:nth-child(2) { flex-shrink: 1; background-color: #e74c3c; } /* Default shrink */
        .shrink-container .flex-item:nth-child(3) { flex-shrink: 2; background-color: #f39c12; } /* Shrinks twice as much as default */

        /* --- flex-basis --- */
        .basis-container {
            width: 600px;
            border-color: #9b59b6;
        }
        .basis-container .flex-item:nth-child(1) { flex-basis: 150px; background-color: #6c5ce7; }
        .basis-container .flex-item:nth-child(2) { flex-basis: 20%; background-color: #8e44ad; }
        .basis-container .flex-item:nth-child(3) { flex-basis: content; background-color: #a2d2ff; width: auto; } /* Auto width needed for content basis */
        .basis-container .flex-item:nth-child(3)::before { content: "Longer "; }

        /* --- flex shorthand --- */
        .flex-shorthand-container {
            width: 500px;
            border-color: #34495e;
        }
        .flex-shorthand-container .flex-item:nth-child(1) { flex: 1; background-color: #95a5a6; } /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
        .flex-shorthand-container .flex-item:nth-child(2) { flex: 2 1 100px; background-color: #2c3e50; } /* grow: 2, shrink: 1, basis: 100px */
        .flex-shorthand-container .flex-item:nth-child(3) { flex: none; background-color: #7f8c8d; } /* grow: 0, shrink: 0, basis: auto (fixed size) */
        .flex-shorthand-container .flex-item { width: auto; } /* Ensure flex can control size */

        /* --- align-self --- */
        .align-self-container {
            height: 250px;
            align-items: center; /* Default for all items */
            border-color: #f39c12;
            background-color: #fffde7;
        }
        .align-self-container .flex-item:nth-child(1) { align-self: flex-start; background-color: #e67e22; }
        .align-self-container .flex-item:nth-child(2) { align-self: flex-end; background-color: #d35400; }
        .align-self-container .flex-item:nth-child(3) { align-self: stretch; height: auto; background-color: #e67e22; } /* Needs height: auto */
        .align-self-container .flex-item:nth-child(4) { align-self: baseline; background-color: #f39c12; font-size: 1.5em; line-height: 80px;}

    </style>
</head>
<body>
    <h1>Flexbox Layout: The Item Properties</h1>

    <h2>\`order\` (Reordering Items)</h2>
    <div class="flex-container order-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
        <div class="flex-item">Item 4</div>
    </div>

    <h2>\`flex-grow\` (How Items Grow)</h2>
    <div class="flex-container grow-container">
        <div class="flex-item">Grow 1</div>
        <div class="flex-item">Grow 2</div>
        <div class="flex-item">Grow 3</div>
    </div>

    <h2>\`flex-shrink\` (How Items Shrink)</h2>
    <div class="flex-container shrink-container">
        <div class="flex-item">Shrink 0</div>
        <div class="flex-item">Shrink 1</div>
        <div class="flex-item">Shrink 2</div>
    </div>

    <h2>\`flex-basis\` (Initial Size of Item)</h2>
    <div class="flex-container basis-container">
        <div class="flex-item">Basis 150px</div>
        <div class="flex-item">Basis 20%</div>
        <div class="flex-item">Basis content</div>
        <div class="flex-item">Basis auto</div>
    </div>

    <h2>\`flex\` (Shorthand: grow, shrink, basis)</h2>
    <div class="flex-container flex-shorthand-container">
        <div class="flex-item">flex: 1;</div>
        <div class="flex-item">flex: 2 1 100px;</div>
        <div class="flex-item">flex: none;</div>
        <div class="flex-item">flex: auto;</div>
    </div>

    <h2>\`align-self\` (Individual Item Cross-Axis Alignment)</h2>
    <div class="flex-container align-self-container">
        <div class="flex-item">Item A</div>
        <div class="flex-item">Item B</div>
        <div class="flex-item">Item C</div>
        <div class="flex-item">Item D</div>
    </div>
</body>
</html>`;

export default function CssFlexboxPage() {
  const page = 27; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/EAF2F8/346DA4?text=CSS+Flexbox+Layout"
              alt="CSS Flexbox Layout Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Deep Dive into CSS Flexbox: Mastering One-Dimensional Layouts 🚀
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Flexbox, or the Flexible Box Module, is a CSS3 layout module that
              provides an efficient way to lay out, align, and distribute space
              among items in a container, even when their size is unknown or
              dynamic. It's designed for **one-dimensional layouts** – meaning
              elements are arranged primarily in a single row OR a single
              column.
            </p>

            {/* 1. Introduction to Flexbox */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. The Core Concept: Flex Container & Flex Items
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Flexbox operates on a simple principle: you define a **Flex
                Container**, and its direct children become **Flex Items**. All
                the magic happens through properties applied to either the
                container or the items.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Key Terminology:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Main Axis:
                  </strong>{" "}
                  The primary axis along which flex items are laid out. It's
                  defined by `flex-direction` (e.g., horizontal for `row`,
                  vertical for `column`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Cross Axis:
                  </strong>{" "}
                  The axis perpendicular to the main axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Main Start/End:
                  </strong>{" "}
                  The beginning and end of the main axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Cross Start/End:
                  </strong>{" "}
                  The beginning and end of the cross axis.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Flex Container Properties */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Properties for the Flex Container (Parent Element)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These properties define the flex formatting context and control
                how flex items are laid out and aligned within it.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                `display: flex;` | `display: inline-flex;`
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `flex`
                  </strong>
                  : Establishes a block-level flex container. This is the most
                  common use. The container itself takes up the full width
                  available (like a `div`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `inline-flex`
                  </strong>
                  : Establishes an inline-level flex container. The container
                  itself will only take up as much width as its content,
                  allowing other elements to sit beside it (like a `span`).
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **This is the FIRST step to using Flexbox.** Without one of
                these values on the parent, its children will not become flex
                items.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `flex-direction` (Sets the Main Axis)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This defines the direction (and thus the main axis) in which
                flex items are placed in the flex container.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `row` (default)
                  </strong>
                  : Items are laid out horizontally from left to right. Main
                  axis is horizontal.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `row-reverse`
                  </strong>
                  : Items are laid out horizontally from right to left.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `column`
                  </strong>
                  : Items are laid out vertically from top to bottom. Main axis
                  is vertical.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `column-reverse`
                  </strong>
                  : Items are laid out vertically from bottom to top.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `flex-wrap` (Controls Wrapping)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                By default, flex items try to fit onto one line. This property
                changes that behavior.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `nowrap` (default)
                  </strong>
                  : All flex items will be on one line, potentially overflowing
                  the container.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `wrap`
                  </strong>
                  : Flex items will wrap onto multiple lines if there isn't
                  enough space. New lines flow in the same direction as the main
                  axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `wrap-reverse`
                  </strong>
                  : Items wrap onto multiple lines, but new lines flow in the
                  opposite direction of the cross axis.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `flex-flow` (Shorthand for `flex-direction` and `flex-wrap`)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is a convenient shorthand. For example, `flex-flow: row
                wrap;` is equivalent to setting both `flex-direction: row;` and
                `flex-wrap: wrap;`.
              </p>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2.1. Alignment & Distribution (Container Properties)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These properties control how flex items are aligned and
                distributed along both the main and cross axes.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `justify-content` (Aligns items along the Main Axis)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Distributes space between and around flex items along the **main
                axis**. It controls how leftover space is handled.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `flex-start` (default)
                  </strong>
                  : Items are packed towards the start of the main axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `flex-end`
                  </strong>
                  : Items are packed towards the end of the main axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `center`
                  </strong>
                  : Items are centered along the main axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `space-between`
                  </strong>
                  : Items are evenly distributed; first item is at the start,
                  last item at the end.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `space-around`
                  </strong>
                  : Items are evenly distributed with equal space around them.
                  Note that this means the space at the ends is half the space
                  between items.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `space-evenly`
                  </strong>
                  : Items are distributed so that the spacing between any two
                  items (and the space to the edges) is equal.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `align-items` (Aligns items along the Cross Axis - per line)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Aligns flex items along the **cross axis** *within each line*.
                This is especially noticeable when flex items have different
                heights (in `row` direction) or widths (in `column` direction),
                and the container has extra space on the cross axis.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `stretch` (default)
                  </strong>
                  : Items are stretched to fill the container along the cross
                  axis (respecting `min-height`/`max-height`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `flex-start`
                  </strong>
                  : Items are aligned to the start of the cross axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `flex-end`
                  </strong>
                  : Items are aligned to the end of the cross axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `center`
                  </strong>
                  : Items are centered along the cross axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `baseline`
                  </strong>
                  : Items are aligned such that their baselines (of text
                  content) align.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `align-content` (Aligns Flex Lines along the Cross Axis)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This property controls the alignment of **flex lines** (not
                individual items) when there is extra space in the cross axis
                and `flex-wrap` is set to `wrap` or `wrap-reverse`. It's similar
                to `justify-content` but for the cross axis.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Requires Wrapping:
                  </strong>{" "}
                  This property only has an effect if the container has multiple
                  lines (`flex-wrap: wrap;`) and there's available space on the
                  cross axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `stretch` (default)
                  </strong>
                  : Lines stretch to take up the remaining space.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `flex-start`
                  </strong>
                  : Lines are packed towards the start of the cross axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `flex-end`
                  </strong>
                  : Lines are packed towards the end of the cross axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `center`
                  </strong>
                  : Lines are centered along the cross axis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `space-between`
                  </strong>
                  : Lines are evenly distributed; the first line is at the
                  start, the last line at the end.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `space-around`
                  </strong>
                  : Lines are evenly distributed with equal space around them.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `space-evenly`
                  </strong>
                  : Lines are distributed so that the spacing between any two
                  lines (and the space to the edges) is equal.
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Flex Item Properties */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. Properties for the Flex Items (Child Elements)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These properties are applied directly to the children of the
                flex container and control their individual behavior.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `order` (Reordering Items)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                By default, flex items are laid out in the source order (their
                order in the HTML). The `order` property allows you to change
                this visual order without changing the HTML structure.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Value:
                  </strong>{" "}
                  An {`<integer>`} (e.g., `0`, `1`, `-1`). Default value is `0`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Behavior:
                  </strong>{" "}
                  Items are laid out according to their `order` value, from
                  lowest to highest. If items have the same `order` value, they
                  maintain their source order among themselves.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `flex-grow` (How Items Grow)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This property specifies how much a flex item will grow relative
                to the rest of the flex items *when there is positive free
                space* in the flex container.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Value:
                  </strong>{" "}
                  A non-negative number (unitless). Default is `0`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Behavior:
                  </strong>{" "}
                  If all items have `flex-grow: 1;`, they will equally share the
                  remaining space. If one item has `flex-grow: 2;` and others
                  `flex-grow: 1;`, it will take twice as much of the remaining
                  space as the others.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `flex-shrink` (How Items Shrink)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This property specifies how much a flex item will shrink
                relative to the rest of the flex items *when there is negative
                free space* (i.e., items are overflowing the container).
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Value:
                  </strong>{" "}
                  A non-negative number (unitless). Default is `1`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Behavior:
                  </strong>{" "}
                  `flex-shrink: 0;` will prevent an item from shrinking at all,
                  potentially causing overflow. A higher value means it will
                  shrink more aggressively than others.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `flex-basis` (Initial Size)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This property defines the initial size of a flex item *before*
                any remaining space is distributed. It's like setting an item's
                `width` or `height` along the main axis, but specifically for
                flex layout.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Value:
                  </strong>{" "}
                  A length (`px`, `em`, `%`, etc.) or keyword (`auto`,
                  `content`). Default is `auto`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `auto` (default):
                  </strong>{" "}
                  The item's size is based on its `width`/`height` property, or
                  its content size if `width`/`height` isn't set.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `content`:
                  </strong>{" "}
                  The item's size is based on its content (like `min-content` or
                  `max-content`).
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `flex` (Shorthand for `flex-grow`, `flex-shrink`, and
                `flex-basis`)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is the most common and recommended way to set `flex-grow`,
                `flex-shrink`, and `flex-basis` as a single property.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Syntax:
                  </strong>{" "}
                  `flex: {`<grow>`} {`<shrink>`} {`<basis>`};`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Common values:
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>
                      <code className="tw:font-mono! tw:bg-gray-200! tw:px-1! tw:rounded!">
                        flex: 1;
                      </code>{" "}
                      (Shorthand for `1 1 0%`) - Item can grow and shrink, and
                      its base size is 0, so it will fill available space.
                    </li>
                    <li>
                      <code className="tw:font-mono! tw:bg-gray-200! tw:px-1! tw:rounded!">
                        flex: auto;
                      </code>{" "}
                      (Shorthand for `1 1 auto`) - Item can grow and shrink, and
                      its base size is its content size.
                    </li>
                    <li>
                      <code className="tw:font-mono! tw:bg-gray-200! tw:px-1! tw:rounded!">
                        flex: none;
                      </code>{" "}
                      (Shorthand for `0 0 auto`) - Item is inflexible (cannot
                      grow or shrink), its size is its content size.
                    </li>
                  </ul>
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                `align-self` (Individual Item Cross-Axis Alignment)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This property allows you to override the `align-items` property
                for **individual flex items**.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Value:
                  </strong>{" "}
                  `auto` (default - inherits from `align-items`), `flex-start`,
                  `flex-end`, `center`, `baseline`, `stretch`. (Same values as
                  `align-items`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Use Case:
                  </strong>{" "}
                  If you want most items to be centered, but one item needs to
                  be at the top, you'd use `align-items: center;` on the
                  container and `align-self: flex-start;` on that specific item.
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
                Centering Anything (Horizontally & Vertically)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                One of Flexbox's most beloved features is its simplicity for
                perfect centering.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                .center-container{" "}
                {`{
    display: flex;
    justify-content: center; /* Centers horizontally */
    align-items: center;     /* Centers vertically */
    height: 100vh; /* Example: full viewport height */
}`}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Responsive Navigation Bar
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Flexbox makes responsive navbars a breeze.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                .navbar{" "}
                {`{
    display: flex;
    justify-content: space-around; /* Distribute links evenly */
    align-items: center; /* Vertically center links */
    flex-wrap: wrap; /* Allow links to wrap on small screens */
}`}
                .nav-item{" "}
                {`{
    padding: 10px 15px;
    flex-grow: 1; /* Allow items to grow to fill space */
    text-align: center;
}`}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Flexbox vs. CSS Grid: When to Use Which?
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Flexbox: One-Dimensional Layout (Content-Out)
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>Best for arranging items in a single row or column.</li>
                    <li>
                      Ideal for components like navigation menus, form elements,
                      distributing items within a section.
                    </li>
                    <li>
                      Focuses on the distribution of items *within* the space.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    CSS Grid: Two-Dimensional Layout (Layout-In)
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-2!">
                    <li>
                      Designed for structuring entire pages or large sections
                      into rows AND columns simultaneously.
                    </li>
                    <li>
                      Perfect for defining overall page structure, complex
                      dashboards, image galleries with specific layouts.
                    </li>
                    <li>
                      Focuses on defining the *grid itself* and then placing
                      items into it.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                They are not mutually exclusive! You can use Grid for your main
                page layout and Flexbox to arrange items *within* a grid cell.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Your Go-To for Responsive Components
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Flexbox is an indispensable tool for modern CSS layouts. Its
                ability to align, distribute, and reorder content in one
                dimension makes it perfect for components that need to be
                flexible and responsive. Master these properties, and you'll
                find building complex UIs much more intuitive and less reliant
                on hacks or complicated math.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Practice is key! Experiment with different values and
                combinations to truly grasp how Flexbox manipulates your
                elements.
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
