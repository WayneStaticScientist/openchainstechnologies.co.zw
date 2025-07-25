import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { Html } from "next/document";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "Styling Texts and Fonts: Giving Your Words Personality 📝",
  description:
    "Explore the art of styling texts and fonts in HTML to enhance your web content.",
  keywords: ["HTML", "CSS", "text styling", "fonts", "web design"],
  openGraph: {
    title: "Styling Texts and Fonts: Giving Your Words Personality 📝",
    description:
      "Explore the art of styling texts and fonts in HTML to enhance your web content.",
    url: `${baseUrl}/lessons/html/text-fonts`,
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/text-fonts`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Basic Text Styling Properties
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Text Styling</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 20px;
            background-color: #f8f8f8;
            color: #333;
        }

        h1 {
            color: #2c3e50; /* Dark Blue */
            text-align: center;
            text-decoration: underline wavy #3498db;
            text-transform: uppercase;
            letter-spacing: 2px;
            word-spacing: 5px;
            margin-bottom: 30px;
        }

        .paragraph-1 {
            color: #e74c3c; /* Red */
            text-align: left;
            text-decoration: line-through;
            line-height: 1.8; /* Looser line spacing */
            text-indent: 50px; /* Indent first line */
            margin-bottom: 20px;
        }

        .paragraph-2 {
            color: #27ae60; /* Green */
            text-align: right;
            text-decoration: overline;
            text-transform: capitalize; /* Capitalize first letter of each word */
            line-height: 1.2; /* Tighter line spacing */
            word-spacing: 8px; /* More space between words */
            margin-bottom: 20px;
        }

        .paragraph-3 {
            color: #8e44ad; /* Purple */
            text-align: justify; /* Distribute text evenly */
            text-decoration: none; /* No decoration */
            text-transform: lowercase;
            letter-spacing: 1px;
            margin-bottom: 20px;
        }

        .no-wrap-text {
            width: 200px;
            border: 1px solid #ccc;
            white-space: nowrap; /* Prevents text from wrapping */
            overflow: hidden; /* Hides overflowing content */
            text-overflow: ellipsis; /* Adds "..." for overflow */
            margin-top: 30px;
            padding: 10px;
        }

        .underline-on-hover {
            color: #007bff;
            text-decoration: none; /* Default no underline */
            transition: text-decoration 0.3s ease; /* Smooth transition */
            cursor: pointer;
        }

        .underline-on-hover:hover {
            text-decoration: underline; /* Underline on hover */
        }
    </style>
</head>
<body>
    <h1>Text Styling Essentials</h1>

    <p class="paragraph-1">
        This paragraph demonstrates \`color\`, \`text-align: left\`, \`text-decoration: line-through\`,
        \`line-height: 1.8\`, and \`text-indent: 50px\`. Notice how the first line is indented
        and the text is crossed out, while lines are spaced further apart.
    </p>

    <p class="paragraph-2">
        This paragraph is aligned to the right, has an overline, and each word starts with a capital letter.
        The word spacing is also increased, creating more gaps between words.
    </p>

    <p class="paragraph-3">
        THIS PARAGRAPH IS JUSTIFIED, HAS NO TEXT DECORATION, AND ALL LETTERS ARE IN LOWERCASE.
        LETTER SPACING IS ALSO SLIGHTLY INCREASED.
    </p>

    <h2>Advanced Text Properties</h2>
    <div class="no-wrap-text">
        This is a very long line of text that should demonstrate how \`white-space\`, \`overflow\`, and \`text-overflow\` work together to manage overflow.
    </div>
    <p>
        The above div uses \`white-space: nowrap\`, \`overflow: hidden\`, and \`text-overflow: ellipsis\`
        to prevent text from wrapping and instead show an ellipsis when it overflows.
    </p>

    <p>
        Hover over this text: <span class="underline-on-hover">Styled on Hover Link</span>
    </p>
</body>
</html>`;

// Code example 2: Font Styling Properties
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Styling</title>
    <style>
        body {
            margin: 20px;
            background-color: #f8f8f8;
            color: #333;
        }

        h1 {
            font-family: 'Georgia', serif; /* Serif font */
            font-size: 2.8em; /* Large heading */
            font-weight: bold;
            color: #34495e; /* Dark Grey Blue */
            text-align: center;
            margin-bottom: 30px;
        }

        .font-example-1 {
            font-family: 'Verdana', sans-serif; /* Sans-serif font */
            font-size: 16px;
            font-weight: normal; /* Default weight */
            font-style: normal;
            margin-bottom: 15px;
        }

        .font-example-2 {
            font-family: 'Courier New', monospace; /* Monospace font */
            font-size: 0.9em; /* Smaller relative size */
            font-weight: bold; /* Bold weight */
            font-style: italic; /* Italic style */
            margin-bottom: 15px;
            color: #27ae60;
        }

        .font-example-3 {
            font-family: 'Times New Roman', serif;
            font-size: 20px; /* Specific pixel size */
            font-weight: lighter; /* Lighter than normal */
            font-style: oblique; /* Slanted, but not necessarily italic font face */
            margin-bottom: 15px;
            color: #e74c3c;
        }

        .font-shorthand {
            /* font: font-style font-variant font-weight font-size/line-height font-family */
            font: italic bold 1.2em/1.5 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
            color: #8e44ad;
            border: 1px dashed #8e44ad;
            padding: 10px;
            margin-top: 20px;
        }

        .initial-example {
            font-size: initial; /* Resets to browser default font size */
            font-weight: initial; /* Resets to browser default font weight */
            color: #6c757d;
        }
    </style>
</head>
<body>
    <h1>Font Styling in CSS</h1>

    <p class="font-example-1">
        This text uses 'Verdana' (a sans-serif font), normal size (16px), and normal weight.
        Sans-serif fonts are generally good for body text online due to their clean lines.
    </p>

    <p class="font-example-2">
        This is 'Courier New' (a monospace font), which is smaller, bold, and italic.
        Monospace fonts are often used for code snippets or technical content.
    </p>

    <p class="font-example-3">
        This text is styled with 'Times New Roman' (a serif font), 20px size, and a lighter weight.
        Serif fonts are traditional and often used for headings or print.
    </p>

    <h2>Font Shorthand Property</h2>
    <p class="font-shorthand">
        This paragraph demonstrates the \`font\` shorthand property, combining multiple font-related properties into one declaration. It's concise but requires careful ordering.
    </p>

    <h2>Resetting Font Styles</h2>
    <p class="initial-example">
        This text demonstrates using \`initial\` keyword to reset font styles to their browser defaults.
    </p>
</body>
</html>`;

// Code example 3: Importing Custom Fonts (@font-face and Google Fonts)
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Fonts</title>
    <style>
        /*
         * 1. Importing a custom font using @font-face
         * Ensure your font files (.woff2, .woff, .ttf, etc.) are correctly linked.
         * For this example, imagine 'MyCustomFont.woff2' is in a 'fonts' folder.
         */
        @font-face {
            font-family: 'Rubik Regular';
            src: url('fonts/Rubik-Regular.woff2') format('woff2'),
                 url('fonts/Rubik-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap; /* Tells browser how to display text while font is loading */
        }

        @font-face {
            font-family: 'Rubik'; /* Can be the same family name for different weights/styles */
            src: url('fonts/Rubik-Bold.woff2') format('woff2'),
                 url('fonts/Rubik-Bold.woff') format('woff');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
        }

        /*
         * 2. Importing a Google Font
         * Go to fonts.google.com, select your desired fonts, and copy the <link> or @import code.
         * For this example, we'll use 'Roboto' and 'Open Sans'.
         */
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

        body {
            font-family: Arial, sans-serif; /* Fallback */
            margin: 20px;
            background-color: #f8f8f8;
            color: #333;
        }

        h1 {
            font-family: 'Rubik', sans-serif; /* Using our custom font */
            font-weight: bold;
            font-size: 3em;
            color: #34495e;
            text-align: center;
            margin-bottom: 30px;
        }

        .custom-font-paragraph {
            font-family: 'Rubik Regular', sans-serif; /* Using our custom font */
            font-size: 1.1em;
            color: #2c3e50;
            line-height: 1.6;
            margin-bottom: 25px;
            border-left: 5px solid #6c5ce7; /* Example styling */
            padding-left: 15px;
        }

        .google-font-roboto {
            font-family: 'Roboto', sans-serif; /* Using Google Font */
            font-size: 1.2em;
            font-weight: 300; /* Light weight from Roboto */
            color: #27ae60;
            margin-bottom: 25px;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }

        .google-font-open-sans {
            font-family: 'Open Sans', sans-serif; /* Using Google Font */
            font-size: 1em;
            font-weight: 600; /* Semi-bold weight from Open Sans */
            font-style: italic;
            color: #e74c3c;
            margin-bottom: 25px;
        }

        p {
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <h1>Applying Custom Fonts</h1>

    <p>
        This page demonstrates how to incorporate custom fonts into your web projects using either
        the <code>@font-face</code> rule or by linking popular services like Google Fonts.
    </p>

    <p class="custom-font-paragraph">
        This paragraph should be displayed in 'Rubik Regular' if the font files are correctly linked and loaded.
        The \`@font-face\` rule gives you full control over how your self-hosted fonts are used.
    </p>

    <p class="google-font-roboto">
        This text uses 'Roboto' from Google Fonts, specifically a light weight.
        Google Fonts provides a vast library of open-source fonts for free.
    </p>

    <p class="google-font-open-sans">
        This is an example of 'Open Sans' from Google Fonts, styled as italic and semi-bold.
        Always include fallback fonts (like sans-serif) in case the custom font fails to load.
    </p>

    <p>
        Check the Network tab in your browser's developer tools to see if the font files are loading.
    </p>
</body>
</html>`;

export default function CssTextFontsPage() {
  const page = 21; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/CFD8DC/455A64?text=Styling+Texts+and+Fonts+in+CSS"
              alt="CSS Text and Font Styling Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Styling Texts and Fonts: Giving Your Words Personality 📝
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Typography is a cornerstone of web design. How your text looks
              impacts readability, aesthetics, and overall user experience. CSS
              provides a rich set of properties to control every aspect of your
              text, from its color and alignment to its font family, size, and
              weight.
            </p>

            {/* 1. Basic Text Styling Properties */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. Basic Text Styling Properties
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These properties allow you to control the fundamental visual
                aspects of your text content.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `color`
                  </strong>
                  : Sets the color of the text. Can be a named color, hex code,
                  RGB, HSL, etc.
                  <br />
                  Example: `color: #3498db;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `text-align`
                  </strong>
                  : Aligns the text within its block element. Values: `left`,
                  `right`, `center`, `justify`.
                  <br />
                  Example: `text-align: center;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `text-decoration`
                  </strong>
                  : Adds or removes lines to text. Values: `none`, `underline`,
                  `overline`, `line-through`. Can also set color and style
                  (e.g., `underline wavy red`).
                  <br />
                  Example: `text-decoration: underline;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `text-transform`
                  </strong>
                  : Controls capitalization of text. Values: `none`,
                  `uppercase`, `lowercase`, `capitalize`.
                  <br />
                  Example: `text-transform: uppercase;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `text-indent`
                  </strong>
                  : Indents the first line of text in a block. Can be a length
                  or percentage.
                  <br />
                  Example: `text-indent: 30px;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `letter-spacing`
                  </strong>
                  : Controls the spacing between characters (letters).
                  <br />
                  Example: `letter-spacing: 1px;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `word-spacing`
                  </strong>
                  : Controls the spacing between words.
                  <br />
                  Example: `word-spacing: 5px;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `line-height`
                  </strong>
                  : Sets the height of a line of text, affecting vertical
                  spacing between lines. Can be a number (multiplier), length,
                  or percentage.
                  <br />
                  Example: `line-height: 1.5;` (1.5 times the font size)
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `white-space`
                  </strong>
                  : Controls how whitespace inside an element is handled. Useful
                  for preventing text wrapping (`nowrap`) or preserving it
                  (`pre`).
                  <br />
                  Example: `white-space: nowrap;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `text-overflow`
                  </strong>
                  : How overflowing content that is not displayed is signaled to
                  the user. Usually used with `overflow: hidden` and
                  `white-space: nowrap`. Value: `ellipsis`, `clip`.
                  <br />
                  Example: `text-overflow: ellipsis;`
                </li>
              </ul>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Experiment with these properties in the example to see their
                immediate effects. Notice how `text-align: justify` attempts to
                create an even left and right edge for the text block. Also, pay
                attention to the `white-space` and `text-overflow` properties
                which are vital for managing long strings of text in confined
                spaces.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Font Styling Properties */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Font Styling Properties
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                These properties control the visual appearance of the font
                itself.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `font-family`
                  </strong>
                  : Specifies the font to be used. It's best practice to provide
                  a "font stack" (a comma-separated list of font names) with
                  generic family fallbacks (e.g., `serif`, `sans-serif`,
                  `monospace`) in case the preferred font isn't available on the
                  user's system.
                  <br />
                  Example: `font-family: 'Helvetica Neue', Arial, sans-serif;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `font-size`
                  </strong>
                  : Sets the size of the font. Can be in `px` (absolute), `em`
                  (relative to parent's font size), `rem` (relative to root html
                  font size), `vw`/`vh` (viewport units), or keywords like
                  `medium`, `large`.
                  <br />
                  Example: `font-size: 16px;` or `font-size: 1.2em;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `font-weight`
                  </strong>
                  : Sets the thickness (boldness) of characters. Values:
                  `normal`, `bold`, `lighter`, `bolder`, or numeric values from
                  `100` to `900` (in multiples of 100, if supported by the
                  font).
                  <br />
                  Example: `font-weight: bold;` or `font-weight: 700;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `font-style`
                  </strong>
                  : Sets the style of the font. Values: `normal`, `italic` (uses
                  the italic version of the font if available), `oblique`
                  (slants characters without using a specific italic font file).
                  <br />
                  Example: `font-style: italic;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `font` (Shorthand)
                  </strong>
                  : A powerful shorthand property that combines `font-style`,
                  `font-variant`, `font-weight`, `font-size`, `line-height`, and
                  `font-family` into one declaration. The order is specific:
                  `font-style font-variant font-weight font-size/line-height
                  font-family`.
                  <br />
                  Example: `font: italic bold 16px/1.5 'Arial', sans-serif;`
                </li>
              </ul>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                Observe how different `font-family` choices dramatically change
                the appearance and feel of the text. Pay attention to
                `font-size` units (`px` vs `em` vs `rem`) and understand their
                implications for responsiveness. The `font` shorthand is
                convenient but requires memorizing the correct order.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Importing Custom Fonts */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. Importing Custom Fonts
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While system fonts are readily available, custom fonts allow for
                unique branding and design. There are two primary ways to
                include them:
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3!">
                Using `@font-face` (Self-Hosting Fonts)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `@font-face` CSS at-rule allows you to define custom fonts
                to be loaded. You'll need the font files (e.g., `.woff`,
                `.woff2`, `.ttf`, `.otf`) hosted on your server.
              </p>
              <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-3! tw:overflow-x-auto!">
                {`@font-face {
  font-family: 'YourCustomFontName'; /* Name you'll use in font-family property */
  src: url('/path/to/yourfont.woff2') format('woff2'),
       url('/path/to/yourfont.woff') format('woff'); /* Provide multiple formats for browser compatibility */
  font-weight: normal; /* Define weight if this file is for normal weight */
  font-style: normal;  /* Define style if this file is for normal style */
  font-display: swap;  /* Best practice for performance/UX */
}`}
              </pre>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4! tw:mt-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `font-family`
                  </strong>
                  : The name you give your font to refer to it later in
                  `font-family` properties.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `src`
                  </strong>
                  : Specifies the path(s) to the font files. Provide multiple
                  `format()` hints for browser compatibility. `woff2` is
                  generally preferred for modern browsers due to better
                  compression.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `font-weight` / `font-style`
                  </strong>
                  : Crucial for mapping specific font files to their
                  corresponding weights/styles. For example, you might have
                  `MyFont-Bold.woff2` and define `font-weight: bold;` for that
                  specific `@font-face` rule.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-teal-600!">
                    `font-display`
                  </strong>
                  : Controls how font loading affects the display of text.
                  `swap` is a good balance: text is shown immediately using a
                  fallback font, and then swapped to the custom font once
                  loaded.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-6!">
                Using Google Fonts (or other Font Services)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Services like Google Fonts simplify custom font usage. You
                select fonts from their library, and they provide a{" "}
                {`\`<link>\``} tag (for HTML) or an `@import` rule (for CSS) to
                include the fonts directly from their servers.
              </p>
              <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-3! tw:overflow-x-auto!">
                {`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">`}
              </pre>
              <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-3! tw:overflow-x-auto!">
                {`/* At the top of your CSS file */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');`}
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                After importing, you can simply use the font-family name
                provided by Google Fonts in your CSS:
                <br />
                `font-family: 'Roboto', sans-serif;`
              </p>
              <CodeReviewPager code={section3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **To make the `@font-face` example work:** You would need to
                download the 'Rubik' font files (e.g., from Google Fonts or
                another source) and place them in a `fonts/` directory relative
                to your HTML file, as indicated in the `src` URL. For the Google
                Fonts part, the `@import` rule handles the loading
                automatically.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Crafting Readable and Expressive Content
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Mastering CSS text and font properties is essential for creating
                aesthetically pleasing and highly readable web content.
                Thoughtful typography enhances the user experience and
                reinforces your brand's identity.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-6!">
                Best Practices for Typography:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  **Prioritize Readability:** Choose font sizes and line heights
                  that make your content easy to consume. Generally, `16px` or
                  `1em` is a good starting point for body text.
                </li>
                <li className="tw:leading-relaxed!">
                  **Use Fallback Fonts:** Always include generic font families
                  (e.g., `sans-serif`, `serif`) in your `font-family` stack to
                  ensure text is displayed, even if custom fonts fail to load.
                </li>
                <li className="tw:leading-relaxed!">
                  **Limit Font Variety:** Stick to 1-3 font families per project
                  to maintain visual consistency and avoid performance overhead.
                </li>
                <li className="tw:leading-relaxed!">
                  **Consider Performance:** Custom fonts add to page load time.
                  Optimize them by serving only necessary weights/styles, using
                  `woff2` format, and applying `font-display: swap;`.
                </li>
                <li className="tw:leading-relaxed!">
                  **Test Across Devices:** Ensure your typography looks good and
                  remains readable on various screen sizes and resolutions.
                </li>
              </ul>
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
