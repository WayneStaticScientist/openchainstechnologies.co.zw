import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Box Model - OpenChains Technologies",
  description:
    "Learn the CSS Box Model, a fundamental concept in web design. Understand how margin, border, padding, and content interact to create layouts.",
  openGraph: {
    title: "CSS Box Model - OpenChains Technologies",
    description:
      "Learn the CSS Box Model, a fundamental concept in web design. Understand how margin, border, padding, and content interact to create layouts.",
    url: `${baseUrl}/lessons/html/css-variables`,
  },
  twitter: {
    title: "CSS Box Model - OpenChains Technologies",
    description:
      "Learn the CSS Box Model, a fundamental concept in web design. Understand how margin, border, padding, and content interact to create layouts.",
  },
  keywords: [
    "CSS Box Model",
    "Web Design",
    "HTML",
    "CSS",
    "Web Development",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/html/css-variables`,
  },
  metadataBase: new URL(baseUrl),
};
// Code Example 1: Basic Definition and Usage
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Variables Tutorial: Basics</title>
    <style>
        /* 1. Define variables in :root for global access */
        :root {
            --primary-color: #3498db; /* A nice blue */
            --secondary-color: #2ecc71; /* A friendly green */
            --font-stack: Arial, sans-serif;
            --base-font-size: 16px;
            --spacing-unit: 10px;
            --border-radius-md: 8px;
            --box-shadow-light: 0 2px 5px rgba(0,0,0,0.1);
        }

        body {
            font-family: var(--font-stack);
            font-size: var(--base-font-size);
            margin: 0;
            padding: var(--spacing-unit) * 2; /* Using calc for calculations */
            background-color: #f4f7f6;
            color: #333;
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        h1 {
            color: var(--primary-color);
            text-align: center;
            margin-bottom: var(--spacing-unit) * 3;
        }

        .container {
            max-width: 800px;
            width: 100%;
            margin: 0 auto 30px auto;
            padding: var(--spacing-unit) * 3;
            background-color: #fff;
            border-radius: var(--border-radius-md);
            box-shadow: var(--box-shadow-light);
            box-sizing: border-box;
        }

        /* 2. Using variables in elements */
        .card {
            background-color: var(--primary-color);
            color: white;
            padding: var(--spacing-unit) * 2;
            margin: var(--spacing-unit) 0;
            border-radius: var(--border-radius-md);
            text-align: center;
            font-weight: bold;
            box-shadow: var(--box-shadow-light);
            transition: background-color 0.3s ease;
        }

        .card:hover {
            background-color: var(--secondary-color); /* Transitioning between variables */
        }

        .button {
            background-color: var(--secondary-color);
            color: white;
            padding: var(--spacing-unit) 15px;
            border: none;
            border-radius: var(--border-radius-md);
            cursor: pointer;
            font-size: 1em;
            margin-top: var(--spacing-unit) * 2;
            transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .button:hover {
            background-color: var(--primary-color);
            transform: translateY(-2px);
        }

        .text-highlight {
            color: var(--primary-color);
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Custom Properties (Variables) - The Basics</h1>
        <p>CSS Custom Properties, commonly known as CSS Variables, are a powerful feature that allows you to define reusable values directly in your CSS. They make your stylesheets more dynamic, maintainable, and easier to theme.</p>
        <p>Think of them as placeholders for values you use repeatedly, like colors, font sizes, or spacing units.</p>

        <h2>Defining Variables</h2>
        <p>Variables are defined using a double-hyphen prefix: <code class="tw-bg-gray-100! tw-px-1! tw-rounded! tw-font-mono! tw-text-red-500!">--variable-name: value;</code></p>
        <p>To make them globally accessible, define them inside the <code class="tw-bg-gray-100! tw-px-1! tw-rounded! tw-font-mono!"> :root </code> pseudo-class (which targets the highest-level parent element, the <code>&lt;html&gt;</code> tag).</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw-font-mono! tw-mb-4! tw-mt-2!">
:root {
    --primary-color: #3498db;
    --spacing-unit: 10px;
}
        </pre>

        <h2>Using Variables</h2>
        <p>To use a defined variable, you wrap its name in the <code class="tw-bg-gray-100! tw-px-1! tw-rounded! tw-font-mono!">var()</code> function: <code class="tw-bg-gray-100! tw-px-1! tw-rounded! tw-font-mono! tw-text-red-500!">property: var(--variable-name);</code></p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw-font-mono! tw-mb-4! tw-mt-2!">
.my-element {
    background-color: var(--primary-color);
    padding: var(--spacing-unit) * 2; /* Using calc for operations */
}
        </pre>

        <h3>Benefits:</h3>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li><strong class="tw:font-semibold! tw:text-blue-600!">Readability:</strong> Clearer what values represent (e.g., \`--brand-color\` instead of \`#3498db\`).</li>
            <li><strong class="tw:font-semibold! tw:text-blue-600!">Maintainability:</strong> Change a value once in <code>:root</code>, and it updates everywhere it's used.</li>
            <li><strong class="tw:font-semibold! tw:text-blue-600!">Theming:</strong> Easily switch themes (e.g., light/dark mode) by overriding variables.</li>
            <li><strong class="tw:font-semibold! tw:text-blue-600!">Dynamic Styling:</strong> Can be manipulated with JavaScript in real-time.</li>
            <li><strong class="tw:font-semibold! tw:text-blue-600!">Calculations:</strong> Work great with <code>calc()</code> for responsive designs.</li>
        </ul>

        <div class="card">This card uses <span class="text-highlight">--primary-color</span> and <span class="text-highlight">--border-radius-md</span>. Hover to see <span class="text-highlight">--secondary-color</span>!</div>
        <button class="button">Click Me! This button uses <span class="text-highlight">--secondary-color</span>.</button>

        <p class="tw-text-center tw-text-sm tw-text-gray-500 tw-mt-8">
            Inspect the elements with your browser's developer tools to see how the CSS variables are applied and resolved.
        </p>
    </div>
</body>
</html>`;

// Code Example 2: Scoping and Fallback Values
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Variables Tutorial: Scoping & Fallbacks</title>
    <style>
        /* Global variables */
        :root {
            --global-text-color: #333;
            --global-border-color: #ccc;
            --accent-color: #e74c3c; /* Red accent */
            --spacing-unit: 10px;
            --base-font-size: 16px;
        }

        body {
            font-family: Arial, sans-serif;
            font-size: var(--base-font-size);
            margin: 0;
            padding: var(--spacing-unit) * 2;
            background-color: #f9f9f9;
            color: var(--global-text-color);
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        h1 {
            color: var(--accent-color);
            text-align: center;
            margin-bottom: var(--spacing-unit) * 3;
        }

        .container {
            max-width: 800px;
            width: 100%;
            margin: 0 auto 30px auto;
            padding: var(--spacing-unit) * 3;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            border: 1px solid var(--global-border-color);
            box-sizing: border-box;
        }

        .box {
            padding: var(--spacing-unit) * 2;
            margin-bottom: var(--spacing-unit) * 2;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
        }

        /* 1. Global usage */
        .box.global-styled {
            background-color: var(--accent-color);
            color: white;
        }

        /* 2. Local scope: Override global variable for this element and its children */
        .section-with-local-vars {
            --section-bg-color: #dbe9fa; /* Variable defined only within this section */
            --accent-color: #27ae60; /* Override global --accent-color */
            background-color: var(--section-bg-color);
            padding: var(--spacing-unit) * 3;
            border-radius: 8px;
            border: 2px dashed var(--accent-color); /* Uses the local accent color */
            margin-top: var(--spacing-unit) * 4;
            color: var(--global-text-color); /* Still uses global if not overridden */
        }

        .box.local-styled {
            background-color: var(--accent-color); /* Uses the overridden accent-color from parent */
            color: white;
            border: 1px solid var(--global-border-color);
        }

        /* 3. Fallback values */
        .box.fallback-example {
            background-color: var(--non-existent-color, #95a5a6); /* Fallback to grey if --non-existent-color is not found */
            color: white;
            border: 1px solid var(--maybe-border-color, #7f8c8d); /* Fallback to dark grey */
        }

        .no-variable-defined {
             /* This element does NOT define --special-color */
             margin-top: var(--spacing-unit) * 4;
        }

        .no-variable-defined .text-with-fallback {
            color: var(--special-color, var(--accent-color)); /* First fallback to --accent-color, if that fails, use default red */
            font-weight: bold;
        }

        /* Let's define --special-color for another element to show the difference */
        .variable-defined {
            --special-color: #8e44ad; /* Purple */
            margin-top: var(--spacing-unit) * 4;
        }

        .variable-defined .text-with-fallback {
            color: var(--special-color, var(--accent-color)); /* Uses --special-color (purple) */
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Variables: Scoping and Fallback Values</h1>
        <p>Understanding variable scope and how to use fallback values is crucial for building robust and flexible CSS.</p>

        <h2>Variable Scope</h2>
        <p>Like regular CSS properties, custom properties cascade. A variable defined on an element is available to that element and its descendants. Defining them on <code>:root</code> (the <code>&lt;html&gt;</code> element) makes them globally available.</p>
        <p>Child elements can override parent variables, creating a powerful mechanism for theming or component-specific styling.</p>

        <h3>Example: Global Variable Usage</h3>
        <p>This box uses the <code>--accent-color</code> defined in <code>:root</code>.</p>
        <div class="box global-styled">I use the global accent color.</div>

        <h3>Example: Local Variable Override</h3>
        <p>This entire section defines its own <code>--accent-color</code>, which overrides the global one for this section and its children.</p>
        <div class="section-with-local-vars">
            <p>This text is within a section that overrides <code>--accent-color</code> to green. Its border also uses this local variable.</p>
            <div class="box local-styled">I use the local (green) accent color from my parent.</div>
        </div>

        <h2>Fallback Values</h2>
        <p>The <code>var()</code> function allows you to specify a fallback value. If the variable isn't defined, the fallback value will be used instead. This prevents styles from breaking if a variable name is misspelled or not yet defined.</p>
        <p>Syntax: <code class="tw-bg-gray-100! tw-px-1! tw-rounded! tw-font-mono! tw-text-red-500!">var(--variable-name, fallback-value);</code></p>

        <h3>Example: Simple Fallback</h3>
        <p>This box uses a variable that does not exist, so it falls back to a default grey.</p>
        <div class="box fallback-example">
            I use a variable that doesn't exist, so I fall back to grey.
        </div>

        <h3>Example: Chained Fallbacks</h3>
        <p>You can even chain fallbacks: <code>var(--var1, var(--var2, default-value));</code></p>
        <p>Below, one text highlights will use a specific variable, and the other will fall back to a global variable (because its specific variable is not defined).</p>

        <div class="no-variable-defined">
            <p>For this paragraph, <span class="text-with-fallback">--special-color</span> is not defined, so it uses the <span class="text-with-fallback">--accent-color</span> (green) as its fallback.</p>
        </div>

        <div class="variable-defined">
            <p>For this paragraph, <span class="text-with-fallback">--special-color</span> IS defined locally as purple, so it uses that.</p>
        </div>

        <p class="tw-text-center tw-text-sm tw-text-gray-500 tw-mt-8">
            These concepts allow for incredibly flexible and resilient CSS designs.
        </p>
    </div>
</body>
</html>`;

// Code Example 3: JavaScript Interaction & Practical Uses
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Variables Tutorial: JS Interaction & Practical Uses</title>
    <style>
        :root {
            --theme-primary: #3498db;
            --theme-secondary: #2ecc71;
            --theme-text-color: #333;
            --theme-bg-color: #f4f7f6;
            --card-border-color: #eee;
            --card-shadow: 0 4px 10px rgba(0,0,0,0.08);
            --spacing-unit: 15px;
            --card-width: 300px; /* Initial card width */
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: var(--spacing-unit) * 2;
            background-color: var(--theme-bg-color);
            color: var(--theme-text-color);
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            transition: background-color 0.5s ease, color 0.5s ease;
        }

        h1, h2 {
            color: var(--theme-primary);
            text-align: center;
            margin-bottom: var(--spacing-unit) * 2;
        }

        .container {
            max-width: 800px;
            width: 100%;
            margin: 0 auto var(--spacing-unit) * 3 auto;
            padding: var(--spacing-unit) * 2;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: var(--card-shadow);
            border: 1px solid var(--card-border-color);
            box-sizing: border-box;
        }

        /* Theme Switcher */
        .theme-switcher {
            text-align: center;
            margin-bottom: var(--spacing-unit) * 3;
        }
        .theme-switcher button {
            background-color: var(--theme-primary);
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1em;
            margin: 0 5px;
            transition: background-color 0.3s ease;
        }
        .theme-switcher button:hover {
            opacity: 0.9;
        }
        .theme-switcher button.active {
            box-shadow: 0 0 0 3px var(--theme-primary);
            background-color: var(--theme-secondary);
        }

        /* Example Card with dynamic width */
        .dynamic-card-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: var(--spacing-unit) * 3;
            padding: var(--spacing-unit) * 2;
            border: 2px dashed var(--theme-secondary);
            border-radius: 8px;
            background-color: rgba(46, 204, 113, 0.05); /* Light secondary color background */
        }
        .dynamic-card {
            width: var(--card-width); /* Controlled by JS slider */
            background-color: var(--theme-primary);
            color: white;
            padding: var(--spacing-unit) * 2;
            border-radius: var(--border-radius-md);
            text-align: center;
            font-weight: bold;
            box-shadow: var(--card-shadow);
            transition: width 0.3s ease;
        }
        #widthSlider {
            width: 80%;
            margin-top: var(--spacing-unit) * 2;
        }

        /* Practical Use Case: Component-level theming */
        .component-section {
            padding: var(--spacing-unit) * 2;
            border: 1px solid var(--card-border-color);
            border-radius: 8px;
            margin-top: var(--spacing-unit) * 3;
            background-color: #fcfcfc;
        }

        .component-section h3 {
            color: var(--theme-primary); /* Uses global primary */
        }

        .product-card {
            /* Define component-specific variables */
            --product-card-bg: #fff;
            --product-card-border: var(--card-border-color);
            --product-card-title-color: var(--theme-primary);
            --product-card-price-color: var(--accent-color, #e74c3c); /* Fallback to red */

            border: 1px solid var(--product-card-border);
            border-radius: 5px;
            padding: var(--spacing-unit);
            margin: var(--spacing-unit);
            background-color: var(--product-card-bg);
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            display: inline-block; /* For demonstration */
            width: 200px;
            text-align: left;
        }

        .product-card h4 {
            color: var(--product-card-title-color);
            margin-top: 0;
            margin-bottom: var(--spacing-unit) * 0.5;
        }
        .product-card .price {
            color: var(--product-card-price-color);
            font-weight: bold;
            font-size: 1.2em;
            margin-top: var(--spacing-unit) * 0.5;
        }
        .product-card button {
            background-color: var(--product-card-title-color); /* Button uses title color */
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 3px;
            cursor: pointer;
            margin-top: var(--spacing-unit);
            transition: background-color 0.2s ease;
        }
        .product-card button:hover {
            background-color: var(--theme-secondary);
        }

        /* Override product card variables for a "special" card */
        .product-card.special {
            --product-card-bg: #ffe0b2; /* Light orange background */
            --product-card-title-color: #d35400; /* Darker orange title */
            --product-card-price-color: #c0392b; /* Even darker red price */
            border-color: #d35400;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Variables: JavaScript Interaction & Practical Uses</h1>
        <p>Beyond static values, CSS Variables truly shine when combined with JavaScript and applied to real-world scenarios like theming and component design.</p>

        <h2>1. JavaScript Interaction</h2>
        <p>You can read and change CSS variable values using JavaScript. This opens up possibilities for dynamic themes, user-controlled preferences, and more!</p>
        <p>Use <code>element.style.setProperty('--var-name', 'new-value');</code> to set a variable, and <code>getComputedStyle(element).getPropertyValue('--var-name');</code> to read it.</p>

        <div class="theme-switcher">
            <h3>Change Theme:</h3>
            <button id="lightThemeBtn" class="active">Light Theme</button>
            <button id="darkThemeBtn">Dark Theme</button>
        </div>

        <h3>Dynamic Width Slider:</h3>
        <div class="dynamic-card-wrapper">
            <div id="dynamicCard" class="dynamic-card">
                My width changes with the slider!
            </div>
            <input type="range" id="widthSlider" min="150" max="500" value="300">
        </div>

        <h2>2. Practical Use Case: Component-Level Theming & Flexibility</h2>
        <p>Variables excel at creating flexible components. You can define default variables for a component, and then easily override them when that component is used in different contexts.</p>
        <div class="component-section">
            <h3>Featured Products</h3>
            <div class="product-card">
                <h4>Product Alpha</h4>
                <p>A simple, elegant product.</p>
                <div class="price">$19.99</div>
                <button>Buy Now</button>
            </div>
            <div class="product-card special">
                <h4>Product Beta (Special!)</h4>
                <p>An exclusive, limited-edition item.</p>
                <div class="price">$49.99</div>
                <button>Learn More</button>
            </div>
        </div>
    </div>

    <script>
        // --- Theme Switcher Logic ---
        const lightThemeBtn = document.getElementById('lightThemeBtn');
        const darkThemeBtn = document.getElementById('darkThemeBtn');
        const body = document.body;
        const root = document.documentElement; // This is the :root element

        function applyTheme(isDark) {
            if (isDark) {
                root.style.setProperty('--theme-primary', '#8e44ad'); /* Purple */
                root.style.setProperty('--theme-secondary', '#f39c12'); /* Orange */
                root.style.setProperty('--theme-text-color', '#ecf0f1');
                root.style.setProperty('--theme-bg-color', '#2c3e50'); /* Dark blue-grey */
                root.style.setProperty('--card-border-color', '#34495e');
                root.style.setProperty('--card-shadow', '0 4px 15px rgba(0,0,0,0.4)');

                lightThemeBtn.classList.remove('active');
                darkThemeBtn.classList.add('active');
            } else {
                root.style.setProperty('--theme-primary', '#3498db'); /* Blue */
                root.style.setProperty('--theme-secondary', '#2ecc71'); /* Green */
                root.style.setProperty('--theme-text-color', '#333');
                root.style.setProperty('--theme-bg-color', '#f4f7f6');
                root.style.setProperty('--card-border-color', '#eee');
                root.style.setProperty('--card-shadow', '0 4px 10px rgba(0,0,0,0.08)');

                darkThemeBtn.classList.remove('active');
                lightThemeBtn.classList.add('active');
            }
        }

        lightThemeBtn.addEventListener('click', () => applyTheme(false));
        darkThemeBtn.addEventListener('click', () => applyTheme(true));

        // Initial theme based on OS preference (optional)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            applyTheme(true);
        } else {
            applyTheme(false);
        }


        // --- Dynamic Width Slider Logic ---
        const widthSlider = document.getElementById('widthSlider');
        const dynamicCard = document.getElementById('dynamicCard');

        widthSlider.addEventListener('input', (event) => {
            const newWidth = event.target.value + 'px';
            dynamicCard.style.setProperty('--card-width', newWidth);
        });

        // Get initial value to set the card width on load
        dynamicCard.style.setProperty('--card-width', widthSlider.value + 'px');
    </script>
</body>
</html>`;

export default function CssVariablesTutorial() {
  const page = 36; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/3498db/ffffff?text=CSS+Variables:+Custom+Properties"
              alt="CSS Variables"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Custom Properties (Variables) Tutorial 🎨
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              CSS Custom Properties, often simply called CSS Variables, are a
              fundamental feature for writing more efficient, maintainable, and
              dynamic stylesheets. They allow you to define values once and
              reuse them throughout your CSS.
            </p>

            {/* 1. What are CSS Variables and Why Use Them? */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                What are CSS Variables and Why Use Them?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                At their core, CSS variables are custom properties that store a
                specific value. You can then refer to this value in other CSS
                properties. This might sound like preprocessor variables (Sass,
                Less), but critically, CSS variables are **live in the
                browser**. This means:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    They can be inspected and modified in browser DevTools.
                  </strong>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    They respect the cascade and inheritance.
                  </strong>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    They can be manipulated with JavaScript.
                  </strong>
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-green-600;">
                Key Benefits:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Consistency:
                  </strong>{" "}
                  Ensure your brand colors, typography, and spacing are uniform
                  across your site.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Maintainability:
                  </strong>{" "}
                  Update a single variable value, and changes propagate
                  everywhere instantly. No more "find and replace" for every
                  color code!
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Theming:
                  </strong>{" "}
                  Implement light/dark modes or custom user themes with ease by
                  overriding a few variables.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Dynamic Styling:
                  </strong>{" "}
                  Use JavaScript to change variable values in real-time,
                  creating interactive and personalized user experiences.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Readability:
                  </strong>{" "}
                  `--primary-color` is much more descriptive than `#3498db`.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Defining and Using Variables */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Defining and Using Variables
              </h2>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Definition Syntax
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                CSS variables are defined using a double-hyphen (`--`) prefix
                followed by a custom name, and then a colon and its value.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                <span className="tw-text-red-500">:root</span> {"{"}
                <span className="tw-text-green-600">--main-font-color</span>:
                #333;
                <span className="tw-text-green-600">--brand-blue</span>:
                #007bff;
                <span className="tw-text-green-600">--border-thin</span>: 1px
                solid;
                {"}"}
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The most common place to define global variables is within the{" "}
                <code className="tw-bg-gray-100! tw-px-1! tw-rounded! tw-font-mono!">
                  :root
                </code>{" "}
                pseudo-class. This makes the variables available to every
                element in your document.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Usage Syntax (`var()`)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                To use a defined variable, you wrap its name in the{" "}
                <code className="tw-bg-gray-100! tw-px-1! tw-rounded! tw-font-mono!">
                  var()
                </code>{" "}
                function.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                body {"{"}
                color:{" "}
                <span className="tw-text-red-500">var(--main-font-color)</span>;
                {"}"}
                .button {"{"}
                background-color:{" "}
                <span className="tw-text-red-500">var(--brand-blue)</span>;
                border:{" "}
                <span className="tw-text-red-500">var(--border-thin)</span>{" "}
                <span className="tw-text-red-500">var(--brand-blue)</span>;{"}"}
              </pre>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Scope and Fallback Values */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Scope and Fallback Values
              </h2>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Variable Scope (Cascading Behavior)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                CSS variables adhere to the normal cascading rules of CSS. A
                variable defined on an element is available to that element and
                all its children. This allows for powerful local overrides:
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                :root {"{"}
                <span className="tw-text-green-600">--main-color</span>: blue;
                {"}"}
                .my-section {"{"}
                <span className="tw-text-red-500">--main-color</span>: green; /*
                Overrides global for this section */ background-color:
                var(--main-color); /* This will be green */
                {"}"}
                .my-section .child-element {"{"}
                color: var(--main-color); /* This will also be green */
                {"}"}
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is incredibly useful for creating reusable components that
                can be "themed" or adjusted by simply setting a few variables on
                their parent.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Fallback Values
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                What happens if you try to use a variable that isn't defined? By
                default, it would result in an invalid property value. However,
                the `var()` function allows you to specify one or more fallback
                values:
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                /* If --my-custom-color is not found, use red */ color: var(
                <span className="tw-text-red-500">--my-custom-color</span>,
                red); /* Chained fallbacks: Try --color-scheme-dark, then
                --default-dark-color, then black */ background-color: var(
                <span className="tw-text-red-500">--color-scheme-dark</span>,
                var(
                <span className="tw-text-red-500">--default-dark-color</span>,
                black));
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Fallback values make your CSS more resilient and prevent broken
                styles in cases of typos or if a variable is intentionally not
                provided in a specific context.
              </p>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 4. JavaScript Interaction */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                JavaScript Interaction
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Since CSS variables are live in the browser, you can dynamically
                read and change their values using JavaScript. This is
                incredibly powerful for implementing:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    User-controlled themes:
                  </strong>{" "}
                  Let users pick their favorite colors.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Dynamic sizing/spacing:
                  </strong>{" "}
                  Adjust layout properties based on user input or real-time
                  data.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Interactive animations:
                  </strong>{" "}
                  Control animation parameters.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Setting a CSS Variable with JavaScript
              </h3>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                const root = document.documentElement; // Targets the :root
                element root.style.setProperty(
                <span className="tw-text-red-500">'--primary-color'</span>,{" "}
                <span className="tw-text-red-500">'#ff0000'</span>); // Set to
                red const myElement = document.getElementById('myElement');
                myElement.style.setProperty(
                <span className="tw-text-red-500">
                  '--local-bg-color'
                </span>, <span className="tw-text-red-500">'lightgray'</span>);
                // Set locally
              </pre>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Reading a CSS Variable with JavaScript
              </h3>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
                const rootStyles = getComputedStyle(document.documentElement);
                const primaryColor = rootStyles.getPropertyValue(
                <span className="tw-text-red-500">'--primary-color'</span>
                ).trim(); console.log(primaryColor); // Outputs: "#ff0000"
              </pre>
            </section>

            <CodeReviewPager code={section3} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 5. Practical Use Cases & Best Practices */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Practical Use Cases & Best Practices
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Global Styles:
                  </strong>{" "}
                  Define your core design system values (`--color-primary`,
                  `--font-stack-body`, `--space-2x`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Theming:
                  </strong>{" "}
                  Create multiple themes (e.g., light, dark, high-contrast) by
                  overriding a set of variables within a theme class:
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-2! tw:mt-2!">
                    {`.dark-theme {
    --bg-color: #333;
    --text-color: #f0f0f0;
}`}
                  </pre>
                  Then toggle this class on the {`\`<body>\``} or `:root`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Component Customization:
                  </strong>{" "}
                  Design components that accept variables as "props" for their
                  styling:
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-2! tw:mt-2!">
                    {`.card {
    --card-bg: white;
    background: var(--card-bg);
}
.card.featured {
    --card-bg: gold; /* Override for featured cards */
}`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Calculations with `calc()`:
                  </strong>{" "}
                  Variables work seamlessly with `calc()`, allowing for dynamic
                  sizing and spacing:
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-2! tw:mt-2!">
                    {`:root { --base-size: 1rem; }
.large-padding {
    padding: calc(var(--base-size) * 2);
}`}
                  </pre>
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-red-600;">
                Things to Keep in Mind:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    No Arithmetic Outside `calc()`:
                  </strong>{" "}
                  You cannot directly perform arithmetic operations (e.g.,
                  `var(--size) + 10px`) without `calc()`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Variable Names:
                  </strong>{" "}
                  Use descriptive, kebab-case names (e.g.,
                  `--main-header-height`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Browser Support:
                  </strong>{" "}
                  CSS variables are widely supported, but always check
                  (especially for older IE versions, though modern web
                  development rarely targets them).
                </li>
              </ul>
            </section>

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Empower Your CSS
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                CSS Custom Properties are a game-changer for modern web
                development. They bring a level of dynamic power and
                organization to your stylesheets that was previously only
                achievable with preprocessors or complex JavaScript solutions.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                By embracing variables, you'll write more readable,
                maintainable, and flexible CSS, making your development workflow
                smoother and your designs more adaptable.
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
