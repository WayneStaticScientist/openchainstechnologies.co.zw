import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
const title = "Html And Css Best practises";
const description =
  "Learn how to write clean code , responsive , google friendly code that shows in search engines ";
const canonicalUrl = `${baseUrl}/lessons/html/workflow-best-practises`;
export const metadata = {
  title,
  description,
  keywords:
    "css best practises , html structure , css designs , responsive web design , styling , modern web design , styles",
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
// Code Example 1: CSS Organization (BEM-like Structure)
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Organization</title>
    <style>
        /* Base Styles (base.css) */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f4f7f6;
            color: #333;
        }

        h1, h2, h3 {
            color: #3498db;
            margin-bottom: 15px;
        }

        a {
            color: #2ecc71;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        /* Layout Styles (layout.css) */
        .container {
            max-width: 960px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            border-radius: 8px;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
            margin-bottom: 20px;
        }

        .main-content {
            display: grid;
            grid-template-columns: 1fr 250px; /* Main content and sidebar */
            gap: 30px;
        }

        .sidebar {
            background-color: #f0f8ff;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #d0e0ff;
        }

        /* Component Styles (components/_button.css, _card.css) */

        /* Button Component (example: .button) */
        .button {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            text-align: center;
            border: none;
            transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .button--primary { /* Modifier for primary button */
            background-color: #3498db;
            color: white;
        }

        .button--primary:hover {
            background-color: #2980b9;
            transform: translateY(-1px);
        }

        .button--secondary { /* Modifier for secondary button */
            background-color: #ccc;
            color: #333;
            border: 1px solid #bbb;
        }

        .button--secondary:hover {
            background-color: #bbb;
            transform: translateY(-1px);
        }

        /* Card Component (example: .card) */
        .card {
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .card__header { /* Element of card */
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 10px;
            color: #2c3e50;
        }

        .card__body { /* Element of card */
            font-size: 0.95rem;
            color: #555;
        }

        .card--featured { /* Modifier for featured card */
            border-color: #2ecc71;
            box-shadow: 0 4px 10px rgba(46, 204, 113, 0.2);
        }

        /* Utility Classes (utilities.css) */
        .u-margin-top-small { /* Utility for margin-top */
            margin-top: 10px !important;
        }
        .u-text-center { /* Utility for text alignment */
            text-align: center !important;
        }

        /* Theme Styles (theme.css) */
        .dark-theme { /* Example of theme override */
            background-color: #2c3e50;
            color: #ecf0f1;
        }
        .dark-theme h1, .dark-theme h2, .dark-theme h3 {
            color: #9ad0ec;
        }
        .dark-theme .card {
            background-color: #34495e;
            border-color: #49637e;
        }
        .dark-theme .button--primary {
            background-color: #9ad0ec;
            color: #2c3e50;
        }
        .dark-theme .button--primary:hover {
            background-color: #79bede;
        }
        .dark-theme .button--secondary {
            background-color: #555;
            color: #eee;
            border-color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>My Awesome Website</h1>
            <nav>
                <a href="#" class="button button--primary">Home</a>
                <a href="#" class="button button--secondary u-margin-top-small">About</a>
            </nav>
        </div>

        <div class="main-content">
            <div>
                <div class="card">
                    <div class="card__header">Welcome Card</div>
                    <div class="card__body">
                        This is a regular card demonstrating the component structure.
                        Each part of the card (header, body) is an element.
                    </div>
                </div>

                <div class="card card--featured">
                    <div class="card__header">Featured Article</div>
                    <div class="card__body">
                        This card uses a modifier to show a featured state, altering its appearance.
                        Notice the green border and shadow.
                    </div>
                </div>

                <p class="u-text-center">
                    This text is centered using a utility class.
                    <button class="button button--primary u-margin-top-small" onclick="document.body.classList.toggle('dark-theme')">Toggle Dark Theme</button>
                </p>
            </div>

            <div class="sidebar">
                <h3>Sidebar</h3>
                <p>Navigation links or other content go here.</p>
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                </ul>
            </div>
        </div>
    </div>
</body>
</html>`;

// Code Example 2: Best Practices - Maintainability & Performance
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Best Practices</title>
    <style>
        /* 1. Use CSS Variables for Theming */
        :root {
            --primary-color: #3498db;
            --secondary-color: #2ecc71;
            --text-color: #333;
            --bg-color: #f4f7f6;
            --card-bg: #ffffff;
            --border-color: #ddd;
            --spacing-unit: 16px; /* Define base spacing */
        }

        body {
            font-family: Arial, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: calc(var(--spacing-unit) * 2); /* Use calc for dynamic spacing */
        }

        h1 {
            color: var(--primary-color);
            margin-bottom: var(--spacing-unit);
        }

        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            padding: var(--spacing-unit);
            margin-bottom: var(--spacing-unit);
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        /* Dark Mode Toggle - for demonstration of variable usage */
        body.dark-mode {
            --primary-color: #9ad0ec;
            --secondary-color: #61b17b;
            --text-color: #ecf0f1;
            --bg-color: #2c3e50;
            --card-bg: #34495e;
            --border-color: #49637e;
        }

        /* 2. Prefer Type Selectors over Class where appropriate */
        /* Bad: .my-button { padding: ... } */
        /* Good: button { padding: ... } - if all buttons look similar initially */
        button {
            background-color: var(--primary-color);
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 5px;
            transition: background-color 0.2s;
        }

        /* 3. Avoid !important (generally) */
        /* Bad: .specific-element { color: red !important; } */
        /* Better: Ensure correct specificity or refactor */
        .modal .modal-title { /* More specific selector */
            color: #e74c3c;
        }

        /* 4. Optimize Selectors (Keep them short, avoid over-qualification) */
        /* Bad: div#main-content > .section-wrapper .article-body p { ... } */
        /* Good: .article-body__paragraph { ... } OR .article p { ... } */
        .footer-text { /* Simple and direct */
            font-size: 0.9em;
            color: #666;
        }

        /* 5. Reduce Redundancy (DRY - Don't Repeat Yourself) */
        /* Use mixins (Sass), utility classes, or CSS variables */
        .text-centered {
            text-align: center;
        }
        .flex-center {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* 6. Use Shorthand Properties */
        /* Instead of:
           margin-top: 10px;
           margin-right: 20px;
           margin-bottom: 10px;
           margin-left: 20px;
        */
        .box {
            margin: 10px 20px; /* Top/Bottom, Left/Right */
            padding: 15px;
            border: 1px solid #ccc; /* Shorthand for border-width, style, color */
            background: #eee url('none') no-repeat center center; /* Shorthand for background properties */
        }

        /* 7. Keep Specificity Low (Component-based approach helps here) */
        /* Good: .button { ... } */
        /* Less good: .nav .button { ... } - harder to reuse button elsewhere */
        .navbar-button { /* A specific button variant for navbar */
             /* Styles specific to a button within a navbar */
        }

        /* 8. Use Descriptive Naming Conventions (like BEM) */
        /* Covered in previous section */

        /* 9. Comment Your Code */
        /* /* A clear comment for complex sections */ */

        /* 10. Consider Preprocessors (Sass/Less) or PostCSS */
        /* (Not demonstrable in pure HTML/CSS, but important for workflow) */
        /* Example: Nesting, Mixins, Functions, Imports */

        /* 11. Linting & Formatting */
        /* (Requires external tools like Stylelint, Prettier) */

        /* 12. Testing (Visual Regression Testing, Browser Testing) */
        /* (Requires external tools) */

        /* 13. Accessibility (Contrast, Focus States) */
        a:focus {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }
        button:focus {
            outline: 2px solid var(--secondary-color);
            outline-offset: 2px;
        }
    </style>
</head>
<body>
    <h1>CSS Best Practices in Action</h1>
    <p>This page demonstrates various best practices for writing clean, maintainable, and performant CSS.</p>

    <div class="card">
        <h2>Card Example</h2>
        <p>This card utilizes CSS variables for its colors and spacing, making it easily adaptable to theme changes.</p>
        <button>Click Me</button>
        <button onclick="document.body.classList.toggle('dark-mode')">Toggle Dark Mode</button>
    </div>

    <div class="box">
        This box demonstrates shorthand properties for margin, padding, border, and background.
    </div>

    <div class="text-centered">
        This text is centered using a utility class.
        <div class="flex-center" style="height: 50px; border: 1px dashed #ccc;">
            <span>I am flex-centered!</span>
        </div>
    </div>

    <p class="footer-text">
        &copy; 2025 My Website. All rights reserved.
    </p>

    <div class="modal">
        <h3 class="modal-title">Modal Title (high specificity)</h3>
        <p>This modal title has specific styling.</p>
    </div>
</body>
</html>`;

// Code Example 3: CSS Workflow (Tools & Process)
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Workflow</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f7f6;
            color: #333;
            line-height: 1.6;
        }

        h1, h2 {
            color: #3498db;
            margin-bottom: 20px;
        }

        .section-box {
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            padding: 20px;
            margin-bottom: 25px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.07);
        }

        .section-box ul {
            list-style: disc;
            padding-left: 20px;
            margin-bottom: 15px;
        }

        .section-box li {
            margin-bottom: 8px;
            color: #555;
        }

        .section-box code {
            background-color: #f0f0f0;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: 'Consolas', monospace;
            color: #c0392b;
        }

        .key-term {
            font-weight: bold;
            color: #2ecc71;
        }
    </style>
</head>
<body>
    <h1>CSS Workflow: From Concept to Deployment</h1>
    <p>A well-defined CSS workflow ensures consistency, scalability, and efficiency in your projects.</p>

    <div class="section-box">
        <h2>1. Planning & Design Phase</h2>
        <ul>
            <li><span class="key-term">Design System / Style Guide:</span> Define colors, typography, spacing, components. Crucial for consistency.</li>
            <li><span class="key-term">Atomic Design Principles:</span> Think in terms of reusable components (atoms, molecules, organisms).</li>
            <li><span class="key-term">Mobile-First Approach:</span> Design for small screens first, then progressively enhance for larger ones.</li>
        </ul>
    </div>

    <div class="section-box">
        <h2>2. Development Phase</h2>
        <ul>
            <li><span class="key-term">Methodology:</span> Adopt a naming convention like BEM (Block Element Modifier), SMACSS, or OOCSS.</li>
            <li><span class="key-term">Folder Structure:</span> Organize CSS files logically (e.g., \`base/\`, \`components/\`, \`layout/\`, \`pages/\`, \`utilities/\`, \`themes/\`).</li>
            <li><span class="key-term">CSS Preprocessors (Sass, Less, Stylus):</span>
                <ul>
                    <li><span class="key-term">Variables:</span> For colors, fonts, spacing.</li>
                    <li><span class="key-term">Nesting:</span> Organize selectors hierarchically.</li>
                    <li><span class="key-term">Mixins:</span> Reusable blocks of CSS.</li>
                    <li><span class="key-term">Partials/Imports:</span> Break CSS into smaller, manageable files.</li>
                </ul>
            </li>
            <li><span class="key-term">PostCSS:</span> Transforms CSS with JavaScript plugins (e.g., Autoprefixer, CSS Modules, Linters).</li>
            <li><span class="key-term">Frameworks (Optional):</span> Bootstrap, Tailwind CSS, Bulma can speed up development but might add bloat.</li>
            <li><span class="key-term">CSS-in-JS (React, Vue):</span> When CSS is written directly in JavaScript components.</li>
        </ul>
    </div>

    <div class="section-box">
        <h2>3. Optimization & Testing Phase</h2>
        <ul>
            <li><span class="key-term">Linting:</span> Tools like <code class="key-term">Stylelint</code> enforce coding standards and catch errors.</li>
            <li><span class="key-term">Formatting:</span> <code class="key-term">Prettier</code> automatically formats your CSS for consistency.</li>
            <li><span class="key-term">Minification:</span> Remove whitespace and comments to reduce file size (e.g., <code class="key-term">cssnano</code>, <code class="key-term">UglifyCSS</code>).</li>
            <li><span class="key-term">Purging/Tree-shaking:</span> Remove unused CSS (e.g., <code class="key-term">PurgeCSS</code>). Essential with utility-first frameworks.</li>
            <li><span class="key-term">Autoprefixing:</span> Automatically add vendor prefixes for browser compatibility (e.g., <code class="key-term">Autoprefixer</code>).</li>
            <li><span class="key-term">Visual Regression Testing:</span> Tools (e.g., <code class="key-term">BackstopJS</code>) compare screenshots to detect unintended visual changes.</li>
            <li><span class="key-term">Browser Compatibility:</span> Test across different browsers and devices.</li>
            <li><span class="key-term">Performance Audits:</span> Use browser DevTools (Lighthouse) to identify CSS-related performance bottlenecks.</li>
        </ul>
    </div>

    <div class="section-box">
        <h2>4. Deployment & Maintenance Phase</h2>
        <ul>
            <li><span class="key-term">Caching:</span> Set appropriate caching headers for CSS files.</li>
            <li><span class="key-term">CDN:</span> Deliver CSS files from a Content Delivery Network for faster load times.</li>
            <li><span class="key-term">Version Control:</span> Use Git for tracking changes and team collaboration.</li>
            <li><span class="key-term">Documentation:</span> Keep your CSS methodology and component usage well-documented.</li>
        </ul>
    </div>
</body>
</html>`;

export default function CssWorkflowBestPracticesTutorial() {
  const page = 42; // Placeholder page number for chapter navigation

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/2ecc71/ffffff?text=CSS+Workflow+%26+Best+Practices"
              alt="CSS Workflow & Best Practices"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Workflow & Best Practices: Building Scalable Stylesheets 🚀
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Writing effective CSS isn't just about knowing properties; it's
              about organizing your code, following conventions, and using tools
              that promote maintainability, scalability, and performance. Let's
              delve into a practical CSS workflow and key best practices.
            </p>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 1. CSS Organization & Methodologies */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. CSS Organization & Methodologies
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Disorganized CSS quickly becomes a nightmare. Adopting a
                structured approach is paramount.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                File Structure:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Break down your main CSS file into smaller, logical partials
                (especially with preprocessors). A common structure:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `base/`:
                  </strong>{" "}
                  Resets, typography, basic HTML element styling.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `layout/`:
                  </strong>{" "}
                  Grid systems, header, footer, sidebar, main content areas.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `components/`:
                  </strong>{" "}
                  Independent, reusable UI components (buttons, cards, forms,
                  navigation). Each component can have its own file.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `pages/`:
                  </strong>{" "}
                  Styles unique to specific pages or sections.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `utilities/`:
                  </strong>{" "}
                  Helper or "atomic" classes (e.g., `.u-text-center`,
                  `.u-margin-small`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `themes/`:
                  </strong>{" "}
                  Dark mode, different color schemes.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `vendors/`:
                  </strong>{" "}
                  Third-party library styles.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Naming Conventions / Methodologies:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Adopting a consistent naming convention helps teams understand
                and scale CSS.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    BEM (Block Element Modifier):
                  </strong>{" "}
                  Highly popular. Naming classes like
                  `block__element--modifier`. Promotes modularity and avoids
                  specificity issues.
                  <pre className="tw:bg-gray-100! tw:p-2! tw:rounded! tw:text-xs! tw:font-mono! tw:overflow-x-auto! tw:my-2!">
                    <code>.card {}</code>
                    <code>.card__header {}</code>
                    <code>.card--featured {}</code>
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    SMACSS (Scalable and Modular Architecture for CSS):
                  </strong>{" "}
                  Categorizes CSS rules into Base, Layout, Module, State, and
                  Theme.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    OOCSS (Object-Oriented CSS):
                  </strong>{" "}
                  Emphasizes separating structure from skin and container from
                  content.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:mt-6! tw:font-semibold!">
                Here's an example demonstrating a BEM-like structure and general
                organization:
              </p>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. CSS Best Practices: Writing Maintainable & Performant Code */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. CSS Best Practices: Writing Maintainable & Performant Code
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Beyond organization, how you write your CSS directly impacts its
                long-term viability.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-green-600;">
                Key Practices:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Use CSS Variables:
                  </strong>{" "}
                  For colors, fonts, spacing, etc. Essential for theming and
                  consistency.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Prefer Type Selectors (where appropriate):
                  </strong>{" "}
                  For base HTML elements (`p`, `h1`, `a`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Avoid `!important`:
                  </strong>{" "}
                  It breaks cascade and makes debugging very difficult. Use it
                  as an absolute last resort.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Optimize Selectors:
                  </strong>{" "}
                  Keep them short and simple. Avoid over-qualifying (e.g.,
                  `div#id .class`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Reduce Redundancy (DRY):
                  </strong>{" "}
                  Use CSS variables, utility classes, or preprocessor mixins.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Use Shorthand Properties:
                  </strong>{" "}
                  `margin: 10px 20px;` instead of four separate properties.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Keep Specificity Low:
                  </strong>{" "}
                  Easier to override and manage. Component-based CSS helps
                  naturally.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Comment Your Code:
                  </strong>{" "}
                  Especially for complex or non-obvious sections.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Accessibility:
                  </strong>{" "}
                  Ensure sufficient color contrast, provide visible focus states
                  for interactive elements.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Performance Considerations:
                  </strong>{" "}
                  Avoid expensive properties (e.g., `box-shadow` on animating
                  elements, large images) where possible, or use them sparingly.
                  Prefer `transform` for animations over `top`/`left`.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:mt-6! tw:font-semibold!">
                Here are some examples of these best practices:
              </p>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. CSS Workflow: Tools & Process */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. CSS Workflow: Tools & Process
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Modern CSS development often involves a suite of tools that
                automate tasks and improve code quality.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                Common Workflow Steps & Tools:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Preprocessors (Sass, Less):
                  </strong>{" "}
                  Extend CSS with features like variables, nesting, mixins, and
                  functions. Require compilation.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    PostCSS:
                  </strong>{" "}
                  A powerful tool that transforms CSS with JavaScript plugins.
                  Key for:
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:space-y-1!">
                    <li>
                      `Autoprefixer`: Adds vendor prefixes (`-webkit-`, `-moz-`)
                      automatically.
                    </li>
                    <li>`cssnano`: Minifies CSS.</li>
                    <li>
                      `PurgeCSS`: Removes unused CSS for smaller file sizes.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Linters (`Stylelint`):
                  </strong>{" "}
                  Enforce coding standards, catch errors, and promote
                  consistency.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Formatters (`Prettier`):
                  </strong>{" "}
                  Automatically format your code to a consistent style.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Build Tools (`Webpack`, `Parcel`, `Vite`):
                  </strong>{" "}
                  Automate the entire process: compiling preprocessors, running
                  PostCSS, bundling, minifying.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Version Control (`Git`):
                  </strong>{" "}
                  Essential for tracking changes, collaboration, and rollbacks.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Browser Developer Tools:
                  </strong>{" "}
                  Indispensable for inspecting styles, debugging layout issues,
                  and testing responsiveness.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Component Libraries / Frameworks:
                  </strong>{" "}
                  (e.g., React component libraries, Tailwind CSS, Bootstrap) can
                  provide ready-made components and utility classes, speeding up
                  development.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Visual Regression Testing:
                  </strong>{" "}
                  (e.g., `BackstopJS`) Tools that compare screenshots of your UI
                  over time to catch unintended visual changes.
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section3} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Crafting Excellent CSS
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                A strong CSS workflow and adherence to best practices transform
                chaotic stylesheets into organized, efficient, and scalable
                codebases. This is critical for:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Maintainability:
                  </strong>{" "}
                  Easy to understand, debug, and update.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Scalability:
                  </strong>{" "}
                  Grows with your project without becoming unwieldy.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Collaboration:
                  </strong>{" "}
                  Multiple developers can work on the same codebase effectively.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Performance:
                  </strong>{" "}
                  Delivers smaller, optimized CSS files to users.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Invest time in setting up a good CSS workflow – it pays
                dividends in the long run for any web project.
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
