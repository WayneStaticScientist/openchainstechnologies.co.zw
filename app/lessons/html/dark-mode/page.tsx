import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Box Model - OpenChains Technologies",
  description:
    "Learn about the CSS Box Model, a fundamental concept in web design that defines how elements are structured and styled.",
  keywords: "CSS, Box Model, Web Design, OpenChains Technologies",
  openGraph: {
    title: "CSS Box Model - OpenChains Technologies",
    description:
      "Learn about the CSS Box Model, a fundamental concept in web design that defines how elements are structured and styled.",
    url: `${baseUrl}/lessons/html/dark-mode`,
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Box Model - OpenChains Technologies",
    description:
      "Learn about the CSS Box Model, a fundamental concept in web design that defines how elements are structured and styled.",
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/dark-mode`,
  },
  metadataBase: new URL(baseUrl),
};
// Code Example 1: Simple CSS-only Toggle (using checkbox hack)
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Dark Mode Toggle</title>
    <style>
        :root {
            /* Light Mode Variables */
            --bg-color-light: #f8f9fa;
            --text-color-light: #212529;
            --primary-color-light: #007bff;
            --card-bg-light: #ffffff;
            --card-border-light: #e0e0e0;
        }

        /* Dark Mode Variables */
        html.dark-mode { /* Target the class added to the HTML tag */
            --bg-color-dark: #2c3e50; /* Dark blue-grey */
            --text-color-dark: #ecf0f1; /* Light grey */
            --primary-color-dark: #9ad0ec; /* Lighter blue */
            --card-bg-dark: #34495e; /* Slightly darker blue-grey */
            --card-border-dark: #49637e;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease, color 0.3s ease;

            /* Apply colors based on current mode */
            background-color: var(--bg-color-light);
            color: var(--text-color-light);
        }

        html.dark-mode body {
            background-color: var(--bg-color-dark);
            color: var(--text-color-dark);
        }

        h1, h2 {
            color: var(--primary-color-light);
            margin-bottom: 20px;
        }

        html.dark-mode h1,
        html.dark-mode h2 {
            color: var(--primary-color-dark);
        }

        .card {
            background-color: var(--card-bg-light);
            border: 1px solid var(--card-border-light);
            padding: 20px;
            margin: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: left;
            transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        html.dark-mode .card {
            background-color: var(--card-bg-dark);
            border: 1px solid var(--card-border-dark);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        /* --- Dark Mode Toggle Styles (Checkbox Hack) --- */
        .theme-switch {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
        }

        .theme-switch input[type="checkbox"] {
            display: none; /* Hide the actual checkbox */
        }

        .theme-switch label {
            width: 60px;
            height: 30px;
            background-color: #ccc;
            border-radius: 15px;
            position: relative;
            cursor: pointer;
            display: block;
            transition: background-color 0.3s;
        }

        .theme-switch label::after {
            content: '';
            width: 26px;
            height: 26px;
            background-color: #fff;
            border-radius: 50%;
            position: absolute;
            top: 2px;
            left: 2px;
            transition: transform 0.3s, background-color 0.3s;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .theme-switch input[type="checkbox"]:checked + label {
            background-color: #6a6a6a; /* Darker background when checked */
        }

        .theme-switch input[type="checkbox"]:checked + label::after {
            transform: translateX(30px); /* Move slider to right when checked */
            background-color: #eee; /* Lighter slider for dark mode */
        }

        /* Apply dark mode styles when checkbox is checked */
        .theme-switch input[type="checkbox"]:checked ~ .content-wrapper html {
            /* This targets the HTML tag if .content-wrapper wraps everything */
            /* For this simple example, we'll just use body which is direct child */
        }

        /* IMPORTANT: This specific setup relies on JS to add/remove the class.
           For a pure CSS checkbox hack, you'd structure it differently (e.g.,
           checkbox is a sibling/ancestor of the elements it affects).
           This example shows how CSS variables are applied once the class is on HTML.
           For a real "checkbox hack" without JS, the checkbox needs to be a sibling
           or parent to the elements whose styles it controls, and you'd use
           ~ (general sibling combinator) or + (adjacent sibling combinator).
           The provided HTML includes a small script for demonstration. */
    </style>
</head>
<body>
    <div class="theme-switch">
        <input type="checkbox" id="darkModeToggle">
        <label for="darkModeToggle"></label>
    </div>

    <h1>Welcome to My Website!</h1>
    <p>This is some main content. Observe how the colors change.</p>

    <div class="card">
        <h2>Card Title One</h2>
        <p>This is a card with some specific styling that changes in dark mode.</p>
        <p>It includes its own background and border colors.</p>
    </div>

    <div class="card">
        <h2>Card Title Two</h2>
        <p>Another example card to demonstrate different elements reacting to the theme switch.</p>
    </div>

    <script>
        document.getElementById('darkModeToggle').addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });

        // Apply saved theme on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark-mode');
            document.getElementById('darkModeToggle').checked = true;
        }
    </script>
</body>
</html>`;

// Code Example 2: prefers-color-scheme Media Query
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>prefers-color-scheme</title>
    <style>
        :root {
            /* Default Light Mode Variables */
            --bg-color: #f8f9fa;
            --text-color: #212529;
            --primary-color: #007bff;
            --card-bg: #ffffff;
            --card-border: #e0e0e0;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease, color 0.3s ease;

            background-color: var(--bg-color);
            color: var(--text-color);
        }

        h1, h2 {
            color: var(--primary-color);
            margin-bottom: 20px;
        }

        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--card-border);
            padding: 20px;
            margin: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: left;
            transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        /* --- Dark Mode using prefers-color-scheme --- */
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-color: #2c3e50;
                --text-color: #ecf0f1;
                --primary-color: #9ad0ec;
                --card-bg: #34495e;
                --card-border: #49637e;
            }

            /* You can also directly apply styles without variables if preferred,
               but variables make it cleaner and easier to manage. */
            /*
            body {
                background-color: #2c3e50;
                color: #ecf0f1;
            }
            h1, h2 {
                color: #9ad0ec;
            }
            .card {
                background-color: #34495e;
                border-color: #49637e;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            }
            */
        }
    </style>
</head>
<body>
    <h1>Adaptive Theme using \`prefers-color-scheme\`</h1>
    <p>
        Your operating system's theme preference dictates the colors here.
        Try changing your system's light/dark mode setting!
    </p>

    <div class="card">
        <h2>System Preference Card 1</h2>
        <p>This card automatically adapts to your OS theme setting without any user interaction.</p>
    </div>

    <div class="card">
        <h2>System Preference Card 2</h2>
        <p>A seamless way to provide a comfortable viewing experience based on user's preference.</p>
    </div>
</body>
</html>`;

// Code Example 3: Combined Approach (Toggle + System Preference)
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combined Dark Mode</title>
    <style>
        /* Base Variables (fallback/default for light mode) */
        :root {
            --bg-color: #f8f9fa;
            --text-color: #212529;
            --primary-color: #007bff;
            --card-bg: #ffffff;
            --card-border: #e0e0e0;
        }

        /* Dark Mode Variables */
        html.dark-mode,
        @media (prefers-color-scheme: dark) { /* Apply these if dark-mode class is present OR system is dark */
            :root {
                --bg-color: #2c3e50;
                --text-color: #ecf0f1;
                --primary-color: #9ad0ec;
                --card-bg: #34495e;
                --card-border: #49637e;
            }
        }

        /* OVERRIDE: If light-mode class is explicitly set, use light variables */
        html.light-mode {
            --bg-color: #f8f9fa;
            --text-color: #212529;
            --primary-color: #007bff;
            --card-bg: #ffffff;
            --card-border: #e0e0e0;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease, color 0.3s ease;

            background-color: var(--bg-color);
            color: var(--text-color);
        }

        h1, h2 {
            color: var(--primary-color);
            margin-bottom: 20px;
        }

        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--card-border);
            padding: 20px;
            margin: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: left;
            transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        /* Toggle Button Styles (re-using from Example 1) */
        .theme-switch {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
        }

        .theme-switch button {
            background-color: var(--primary-color);
            color: var(--text-color);
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .theme-switch button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
    </style>
</head>
<body>
    <div class="theme-switch">
        <button id="themeToggle">Toggle Theme</button>
    </div>

    <h1>Combined Dark Mode Strategy</h1>
    <p>
        This page respects your system preference initially, but also provides a manual toggle to override it.
    </p>

    <div class="card">
        <h2>Dynamic Card 1</h2>
        <p>Try changing your system theme or clicking the toggle button!</p>
    </div>

    <div class="card">
        <h2>Dynamic Card 2</h2>
        <p>The manual override is stored in your browser's local storage.</p>
    </div>

    <script>
        const themeToggleBtn = document.getElementById('themeToggle');
        const htmlElement = document.documentElement;
        const localStorageKey = 'user-theme';

        // Function to set the theme
        function setTheme(theme) {
            if (theme === 'dark') {
                htmlElement.classList.add('dark-mode');
                htmlElement.classList.remove('light-mode'); // Ensure light-mode is removed
            } else {
                htmlElement.classList.add('light-mode');
                htmlElement.classList.remove('dark-mode'); // Ensure dark-mode is removed
            }
            localStorage.setItem(localStorageKey, theme);
        }

        // Function to get the preferred theme
        function getPreferredTheme() {
            const savedTheme = localStorage.getItem(localStorageKey);
            if (savedTheme) {
                return savedTheme; // User has a saved preference
            }

            // Check system preference if no saved preference
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        // Apply theme on initial load
        document.addEventListener('DOMContentLoaded', () => {
            setTheme(getPreferredTheme());
        });

        // Listen for toggle button click
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.classList.contains('dark-mode') ? 'dark' : 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });

        // Listen for changes in system preference (only if no user override)
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only update if the user hasn't explicitly set a theme via the toggle
            if (!localStorage.getItem(localStorageKey)) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    </script>
</body>
</html>`;

export default function CssDarkModeTutorial() {
  const page = 41; // Placeholder page number for chapter navigation

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/34495e/ffffff?text=CSS+Dark+Mode"
              alt="CSS Dark Mode Implementation"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Dark Mode Implementations: Illuminating Your UI 🌙
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Dark mode is more than just a trend; it's a critical feature for
              accessibility, eye comfort in low-light conditions, and battery
              saving on devices with OLED screens. Let's explore different ways
              to implement it using CSS.
            </p>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 1. Basic CSS-Only Toggle (using a class and CSS Variables) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. Simple Dark Mode Toggle (CSS Variables + JS)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The most common approach involves using a JavaScript toggle to
                add/remove a class (e.g., `dark-mode`) to the `html` or `body`
                element. CSS variables then define the colors for each theme,
                making management straightforward.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                How It Works:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    CSS Variables:
                  </strong>{" "}
                  Define a set of custom properties (variables) for your theme's
                  colors (e.g., `--bg-color`, `--text-color`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Default (Light) Theme:
                  </strong>{" "}
                  Set initial values for these variables in the `:root`
                  pseudo-class (which targets the `html` element).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Dark Theme Class:
                  </strong>{" "}
                  Create a rule for a specific class (e.g., `html.dark-mode`)
                  that redefines these CSS variables for the dark theme.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    JavaScript Toggle:
                  </strong>{" "}
                  Use JavaScript to add or remove the `dark-mode` class on the
                  `html` element (or `body`) when a user clicks a button or
                  toggle.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Persistence:
                  </strong>{" "}
                  Optionally, use `localStorage` to remember the user's theme
                  preference across sessions.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:mt-6!">
                This method provides full user control over the theme,
                independent of their system settings.
              </p>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Respecting User Preference with `prefers-color-scheme` */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Respecting User Preference with `@media
                (prefers-color-scheme)`
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Modern browsers offer a media query, `(prefers-color-scheme:
                dark)`, that detects the user's operating system's light or dark
                mode preference. This is an excellent way to provide an adaptive
                experience out-of-the-box without any JavaScript.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-green-600;">
                How It Works:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Default (Light) Styles:
                  </strong>{" "}
                  Define your default (light mode) styles normally, either
                  directly or using CSS variables.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Media Query for Dark Mode:
                  </strong>{" "}
                  Wrap your dark mode specific styles (or variable
                  redefinitions) within the `@media (prefers-color-scheme:
                  dark)` block.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    No JavaScript Needed:
                  </strong>{" "}
                  The browser automatically applies the styles within the media
                  query if the user's system preference is dark.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:mt-6! tw:font-semibold!">
                This is the most user-friendly initial approach as it aligns
                with their OS settings.
              </p>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Combined Approach: System Preference with User Override */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. Combined Strategy: System Preference with User Override
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                For the best user experience, combine both methods. Start by
                respecting the user's system preference, but also provide a
                manual toggle for them to override it if they choose. This
                override should be saved in `localStorage`.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                How It Works:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    CSS Structure:
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:space-y-1!">
                    <li>Define light mode variables as default in `:root`.</li>
                    <li>
                      Define dark mode variables within a combined rule:{" "}
                      {`\`html.dark-mode, @media (prefers-color-scheme: dark) { :root { ... } }\``}
                      . This means if either the class is present OR the system
                      is dark, apply dark styles.
                    </li>
                    <li>
                      Crucially, define light mode variables again under{" "}
                      {`\`html.light-mode { :root { ... } }\``}. This class,
                      when applied, will **override** the `prefers-color-scheme`
                      rule due to CSS specificity.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    JavaScript Logic:
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:space-y-1!">
                    <li>
                      On page load, first check `localStorage` for a user-saved
                      preference.
                    </li>
                    <li>
                      If no preference is saved, use
                      `window.matchMedia('(prefers-color-scheme: dark)')` to
                      detect the system preference.
                    </li>
                    <li>
                      Apply the determined theme by adding either `dark-mode` or
                      `light-mode` class to `html`.
                    </li>
                    <li>
                      When the user toggles the theme, update the `html` class
                      and save the new preference to `localStorage`.
                    </li>
                    <li>
                      Add an event listener for
                      `window.matchMedia('(prefers-color-scheme:
                      dark)').addEventListener('change', ...)` to react to
                      system theme changes *only if the user hasn't set an
                      explicit preference*.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:mt-6! tw:font-semibold!">
                This provides a robust and flexible dark mode solution,
                prioritizing user choice while respecting system defaults.
              </p>
            </section>

            <CodeReviewPager code={section3} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: A Thoughtful Dark Mode Experience
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Implementing dark mode enhances user experience by offering
                visual comfort and personal customization. By using CSS
                variables, media queries, and a touch of JavaScript for
                persistence, you can create a sophisticated and user-friendly
                dark mode for your website.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    CSS Variables (`--variable-name`):
                  </strong>{" "}
                  Centralize your color definitions for easy theme switching.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `@media (prefers-color-scheme: dark)`:
                  </strong>{" "}
                  Respect users' system-wide preferences.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    JavaScript & `localStorage`:`
                  </strong>{" "}
                  Provide a manual toggle and remember user choices.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Transitions:
                  </strong>{" "}
                  Add smooth transitions to color changes for a polished feel.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Choose the strategy that best fits your project's needs, or
                combine them for the most robust solution.
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
