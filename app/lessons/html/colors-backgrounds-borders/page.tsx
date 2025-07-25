import React from "react";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Colors, Backgrounds, & Borders - OpenChains Technologies",
  description:
    "Learn how to use CSS colors, backgrounds, and borders to enhance your web designs. Step-by-step tutorials with code examples.",
  openGraph: {
    type: "website",
    url: `${baseUrl}/lessons/html/colors-backgrounds-borders`,
    title: "CSS Colors, Backgrounds, & Borders - OpenChains Technologies",
    description:
      "Learn how to use CSS colors, backgrounds, and borders to enhance your web designs. Step-by-step tutorials with code examples.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Colors, Backgrounds, & Borders - OpenChains Technologies",
    description:
      "Learn how to use CSS colors, backgrounds, and borders to enhance your web designs. Step-by-step tutorials with code examples.",
  },
  keywords: [
    "CSS colors",
    "CSS backgrounds",
    "CSS borders",
    "web design",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/html/colors-backgrounds-borders`,
  },
  metadataBase: new URL(baseUrl),
};
// Code example 1: Colors (Text Color)
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Colors</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f0f2f5;
        }

        h1 {
            color: #2c3e50; /* Hexadecimal */
            text-align: center;
            margin-bottom: 30px;
        }

        p {
            font-size: 1.1em;
            padding: 10px;
            margin-bottom: 15px;
            border-left: 5px solid; /* Border color will be currentColor */
        }

        .named-color {
            color: steelblue; /* Named color */
            background-color: lightcyan;
        }

        .hex-color {
            color: #e74c3c; /* Hexadecimal */
            background-color: #ffe0b2;
        }

        .rgb-color {
            color: rgb(46, 204, 113); /* RGB */
            background-color: rgb(215, 247, 226);
        }

        .rgba-color {
            color: rgba(155, 89, 182, 0.8); /* RGBA (with alpha transparency) */
            background-color: rgba(230, 200, 240, 0.5); /* 50% transparent background */
        }

        .hsl-color {
            color: hsl(210, 80%, 30%); /* HSL */
            background-color: hsl(210, 80%, 90%);
        }

        .hsla-color {
            color: hsla(0, 100%, 50%, 0.7); /* HSLA (with alpha transparency) */
            background-color: hsla(0, 100%, 90%, 0.4); /* 40% transparent background */
        }

        .current-color-example {
            color: purple; /* Set the base color for this div */
            border: 2px solid; /* border-color will inherit 'purple' */
            padding: 15px;
            margin-top: 20px;
            font-weight: bold;
        }

        .current-color-example span {
            /* This span will also inherit 'purple' color */
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>CSS Colors: Giving Elements Life</h1>

    <p class="named-color">
        This text uses a <code>named color</code> (steelblue). Named colors are easy to read but limited.
    </p>

    <p class="hex-color">
        This text uses a <code>hexadecimal color</code> (#e74c3c). Hex codes are very common and compact.
    </p>

    <p class="rgb-color">
        This text uses an <code>RGB color</code> (rgb(46, 204, 113)). RGB specifies red, green, blue values.
    </p>

    <p class="rgba-color">
        This text uses an <code>RGBA color</code> (rgba(155, 89, 182, 0.8)). The 'A' stands for Alpha (transparency).
        The background is also transparent, allowing the body background to show through.
    </p>

    <p class="hsl-color">
        This text uses an <code>HSL color</code> (hsl(210, 80%, 30%)). HSL stands for Hue, Saturation, Lightness.
    </p>

    <p class="hsla-color">
        This text uses an <code>HSLA color</code> (hsla(0, 100%, 50%, 0.7)). Alpha is added for transparency.
        Notice the difference in transparency compared to the RGBA example.
    </p>

    <div class="current-color-example">
        This div's text color is <span>purple</span>. The border also inherits <code>currentColor</code>, so it's also purple.
    </div>

    <p>
        Always use accessible color combinations with sufficient contrast!
    </p>
</body>
</html>`;

// Code example 2: Backgrounds
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Backgrounds</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f2f5;
            color: #333;
        }

        .section-title {
            text-align: center;
            color: #2c3e50;
            margin: 30px 0;
        }

        .box {
            width: 80%;
            max-width: 600px;
            min-height: 150px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            text-align: center;
            line-height: 1.5;
        }

        .background-color-box {
            background-color: #d4edda; /* Light green */
            color: #155724;
        }

        .background-image-repeat-box {
            background-image: url('https://placehold.co/50x50/F8BBD0/880E4F?text=BG'); /* Small image */
            background-repeat: repeat-x; /* Repeats horizontally */
            color: #4CAF50;
        }

        .background-image-no-repeat-box {
            background-image: url('https://placehold.co/100x100/BBDEFB/1976D2?text=Unique');
            background-repeat: no-repeat; /* Displays only once */
            background-position: center center; /* Centers the image */
            background-color: #e3f2fd;
            color: #2196F3;
        }

        .background-size-cover-box {
            background-image: url('https://picsum.photos/id/10/800/400'); /* Larger image */
            background-repeat: no-repeat;
            background-size: cover; /* Covers the entire element, cropping if necessary */
            background-position: center center;
            color: white; /* Text color for better contrast */
            text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
        }

        .background-size-contain-box {
            background-image: url('https://picsum.photos/id/20/400/800'); /* Taller image */
            background-repeat: no-repeat;
            background-size: contain; /* Scales down to fit, maintaining aspect ratio */
            background-position: right bottom;
            background-color: #fff3e0;
            color: #FF5722;
        }

        .background-attachment-fixed-box {
            height: 250px; /* Make it taller to see effect */
            background-image: url('https://picsum.photos/id/30/1200/800');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            background-attachment: fixed; /* Background stays fixed when scrolling */
            color: white;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
        }

        .background-shorthand-box {
            /* background: color image repeat attachment position / size; */
            background: #fce4ec url('https://placehold.co/30x30/F8BBD0/880E4F?text=S') no-repeat center / 50px auto;
            color: #E91E63;
        }

        .multiple-backgrounds-box {
            background-image:
                url('https://placehold.co/50x50/B2EBF2/00BCD4?text=TopLeft'), /* Layer 1 (top) */
                url('https://placehold.co/50x50/FFCDD2/F44336?text=BottomRight'); /* Layer 2 (bottom) */
            background-repeat: no-repeat, no-repeat;
            background-position: top left, bottom right;
            background-color: #ffffff; /* Last background property is color */
            padding: 50px; /* To make space for backgrounds */
            color: #3F51B5;
        }
    </style>
</head>
<body>
    <h1 class="section-title">CSS Backgrounds: Adding Visual Depth</h1>

    <div class="box background-color-box">
        <h2>Background Color</h2>
        <p>This box has a simple solid background color.</p>
    </div>

    <div class="box background-image-repeat-box">
        <h2>Background Image (Repeat X)</h2>
        <p>A small image is repeated horizontally across the box.</p>
    </div>

    <div class="box background-image-no-repeat-box">
        <h2>Background Image (No Repeat & Position)</h2>
        <p>A single image centered in the background.</p>
    </div>

    <div class="box background-size-cover-box">
        <h2>Background Size: Cover</h2>
        <p>The image covers the entire background area, cropping if necessary.</p>
        <p>(Scroll if this box is near the top to see \`background-attachment: fixed\` below it.)</p>
    </div>

    <div class="box background-size-contain-box">
        <h2>Background Size: Contain</h2>
        <p>The image scales down to fit within the box, showing the full image.</p>
    </div>

    <div class="box background-attachment-fixed-box">
        <h2>Background Attachment: Fixed (Scroll Down!)</h2>
        <p>This background image remains fixed in the viewport while the content scrolls past it. (Try scrolling the page to see the effect)</p>
    </div>

    <div class="box background-shorthand-box">
        <h2>Background Shorthand</h2>
        <p>All background properties condensed into one declaration for conciseness.</p>
    </div>

    <div class="box multiple-backgrounds-box">
        <h2>Multiple Backgrounds</h2>
        <p>You can layer multiple background images on top of each other, comma-separated.</p>
    </div>

    <p style="text-align: center; margin-top: 40px; color: #555;">
        Experiment with these properties and inspect them in your browser's developer tools!
    </p>
</body>
</html>`;

// Code example 3: Borders
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Borders</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f0f2f5;
            color: #333;
        }

        h1 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
        }

        .box {
            width: 250px;
            height: 100px;
            margin: 20px auto;
            padding: 15px;
            text-align: center;
            line-height: 1.5;
            font-weight: bold;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            color: #333;
        }

        /* Border Width */
        .border-width-example {
            border-style: solid; /* Must have a style for width to be visible */
            border-color: #3498db;
            border-width: 5px; /* All sides 5px */
        }

        .border-individual-widths {
            border-style: solid;
            border-color: #e74c3c;
            border-width: 1px 5px 10px 15px; /* Top Right Bottom Left */
        }

        /* Border Style */
        .border-dashed { border-style: dashed; border-color: #27ae60; border-width: 3px; }
        .border-dotted { border-style: dotted; border-color: #f39c12; border-width: 3px; }
        .border-double { border-style: double; border-color: #8e44ad; border-width: 6px; } /* Needs min 3px for double to show */
        .border-groove { border-style: groove; border-color: #1abc9c; border-width: 8px; }
        .border-ridge { border-style: ridge; border-color: #e67e22; border-width: 8px; }
        .border-inset { border-style: inset; border-color: #c0392b; border-width: 8px; }
        .border-outset { border-style: outset; border-color: #2980b9; border-width: 8px; }
        .border-none { border-style: none; border-width: 5px; border-color: black; } /* Will not show */
        .border-hidden { border-style: hidden; border-width: 5px; border-color: black; } /* Will not show */

        /* Border Color */
        .border-color-example {
            border-width: 4px;
            border-style: solid;
            border-color: #9b59b6; /* Purple */
        }

        .border-individual-colors {
            border-width: 5px;
            border-style: solid;
            border-color: red green blue orange; /* Top Right Bottom Left */
        }

        /* Border Shorthand */
        .border-shorthand {
            border: 3px solid #34495e; /* width style color */
        }

        .border-top-shorthand {
            border-top: 5px dashed #28a745;
            border-bottom: 2px solid #dc3545; /* Example for other sides */
        }

        /* Border Radius */
        .border-radius-example {
            border: 2px solid #007bff;
            border-radius: 10px; /* All corners 10px radius */
        }

        .border-round-circle {
            width: 100px; /* Make it square */
            height: 100px;
            line-height: 100px; /* Center text vertically */
            border: 5px solid #ffc107;
            border-radius: 50%; /* Perfect circle for square elements */
            overflow: hidden; /* Hide overflow if content is larger than circle */
        }

        .border-individual-radius {
            border: 3px solid #6f42c1;
            border-top-left-radius: 20px;
            border-bottom-right-radius: 50px;
            /* Can also use shorthand: border-radius: top-left top-right bottom-right bottom-left; */
            /* border-radius: 20px 0 50px 0; */
        }
    </style>
</head>
<body>
    <h1>CSS Borders: Defining Element Boundaries</h1>

    <h2>Border Width</h2>
    <div class="box border-width-example">
        5px solid border
    </div>
    <div class="box border-individual-widths">
        1px top, 5px right, 10px bottom, 15px left
    </div>

    <h2>Border Style</h2>
    <div class="box border-dashed">Dashed Border</div>
    <div class="box border-dotted">Dotted Border</div>
    <div class="box border-double">Double Border</div>
    <div class="box border-groove">Groove Border</div>
    <div class="box border-ridge">Ridge Border</div>
    <div class="box border-inset">Inset Border</div>
    <div class="box border-outset">Outset Border</div>
    <div class="box border-none">None Border (no visible border)</div>
    <div class="box border-hidden">Hidden Border (same as none)</div>

    <h2>Border Color</h2>
    <div class="box border-color-example">
        Purple border
    </div>
    <div class="box border-individual-colors">
        Different colors for each side
    </div>

    <h2>Border Shorthand</h2>
    <div class="box border-shorthand">
        3px solid #34495e
    </div>
    <div class="box border-top-shorthand">
        Only top and bottom borders
    </div>

    <h2>Border Radius</h2>
    <div class="box border-radius-example">
        Rounded Corners (10px)
    </div>
    <div class="box border-round-circle">
        Circle
    </div>
    <div class="box border-individual-radius">
        Custom Radius
    </div>

    <p style="text-align: center; margin-top: 40px; color: #555;">
        Use developer tools to inspect borders and see how different styles and radii affect elements!
    </p>
</body>
</html>`;

export default function CssColorBackgroundBorderPage() {
  const page = 22; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/D7E6EE/1F6A8F?text=Colors,+Backgrounds,+Borders"
              alt="CSS Colors, Backgrounds, and Borders Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Colors, Backgrounds, & Borders: Visualizing Your Design 🎨
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              These three fundamental CSS property groups allow you to control
              the visual aesthetics of nearly every element on your webpage.
              From text color to intricate background patterns and defined
              boundaries, they are crucial for creating engaging and structured
              layouts.
            </p>

            {/* 1. CSS Colors */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. CSS Colors: Beyond Just Black and White
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `color` property is used to set the foreground color of an
                element's text content. CSS offers several ways to define
                colors:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Named Colors:
                  </strong>{" "}
                  Simple, human-readable names like `red`, `blue`, `green`,
                  `steelblue`, `lightgray`. There are over 140 named colors.
                  <br />
                  Example: `color: tomato;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Hexadecimal (Hex) Colors:
                  </strong>{" "}
                  A 6-digit (or 3-digit shorthand) alphanumeric code
                  representing RGB values. Very common in web development.
                  <br />
                  Example: `#FF0000` (red), `#00CC99`, `#333` (shorthand for
                  `#333333`)
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    RGB (Red, Green, Blue):
                  </strong>{" "}
                  Specifies color using red, green, and blue intensity values
                  from 0 to 255.
                  <br />
                  Example: `rgb(255, 0, 0)` (red), `rgb(52, 152, 219)`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    RGBA (Red, Green, Blue, Alpha):
                  </strong>{" "}
                  Same as RGB, but with an added 'Alpha' value (0 to 1) for
                  transparency. 0 is fully transparent, 1 is fully opaque.
                  <br />
                  Example: `rgba(255, 0, 0, 0.5)` (50% transparent red)
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    HSL (Hue, Saturation, Lightness):
                  </strong>{" "}
                  Defines colors based on hue (0-360 degrees), saturation
                  (0-100%), and lightness (0-100%). Often more intuitive for
                  designers.
                  <br />
                  Example: `hsl(0, 100%, 50%)` (red), `hsl(210, 80%, 30%)`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    HSLA (Hue, Saturation, Lightness, Alpha):
                  </strong>{" "}
                  HSL with an added Alpha value for transparency.
                  <br />
                  Example: `hsla(0, 100%, 50%, 0.7)` (70% opaque red)
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `currentColor` (Keyword):
                  </strong>{" "}
                  Refers to the current value of the `color` property. Useful
                  for making borders, shadows, or background-images (with
                  gradients) automatically match the text color.
                  <br />
                  Example: `border-color: currentColor;`
                </li>
              </ul>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Accessibility Note:** When choosing colors for text and
                backgrounds, always ensure there is sufficient contrast for
                readability, especially for users with visual impairments. Tools
                like WebAIM Contrast Checker can help.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. CSS Backgrounds */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. CSS Backgrounds: Adding Depth and Visual Interest
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Background properties control the background of an element,
                including colors, images, and their behavior.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `background-color`
                  </strong>
                  : Sets the solid background color of an element.
                  <br />
                  Example: `background-color: lightblue;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `background-image`
                  </strong>
                  : Sets one or more background images for an element. Use
                  `url()` to point to an image file. Can also use gradients.
                  <br />
                  Example: `background-image: url('my-pattern.png');`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `background-repeat`
                  </strong>
                  : Defines if/how a background image repeats. Values: `repeat`
                  (default, both x & y), `repeat-x`, `repeat-y`, `no-repeat`.
                  <br />
                  Example: `background-repeat: no-repeat;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `background-position`
                  </strong>
                  : Sets the initial position of each background image. Can be
                  keywords (e.g., `top left`, `center`), percentages, or
                  lengths.
                  <br />
                  Example: `background-position: center center;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `background-size`
                  </strong>
                  : Specifies the size of the background image. Values: `auto`
                  (default), `cover` (scales to cover entire area, crops if
                  needed), `contain` (scales to fit within area, shows entire
                  image), or specific lengths/percentages.
                  <br />
                  Example: `background-size: cover;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `background-attachment`
                  </strong>
                  : Determines whether a background image scrolls with the
                  element or is fixed. Values: `scroll` (default), `fixed`
                  (stays in viewport), `local` (scrolls with element's content).
                  <br />
                  Example: `background-attachment: fixed;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `background` (Shorthand)
                  </strong>
                  : Combines all background properties into one concise
                  declaration. The order is: `background: [background-color]
                  [background-image] [background-repeat] [background-attachment]
                  [background-position] / [background-size];`
                  <br />
                  Example: `background: #f0f0f0 url('image.png') no-repeat
                  center / cover;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Multiple Backgrounds:
                  </strong>{" "}
                  You can apply multiple background images to an element by
                  comma-separating them in `background-image` (and other related
                  properties). The first image listed is on top.
                  <br />
                  Example: `background-image: url('top.png'),
                  url('bottom.png');`
                </li>
              </ul>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Important Note on `background-attachment: fixed;`:** For this
                property to be visibly effective, your page needs to be
                scrollable, and the element with the fixed background should be
                large enough, or you should apply it to the `body` or `html`
                element.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. CSS Borders */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. CSS Borders: Defining Boundaries
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Borders are lines that define the edge of an element, sitting
                between the padding and the margin.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `border-width`
                  </strong>
                  : Sets the thickness of the border. Values: `thin`, `medium`
                  (default), `thick`, or any length unit (e.g., `px`, `em`). Can
                  be set for all sides or individually (e.g., `border-width: 1px
                  2px 3px 4px;` for top, right, bottom, left).
                  <br />
                  Example: `border-width: 2px;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `border-style`
                  </strong>
                  : Defines the appearance of the border. This is a **required
                  property** for a border to be visible. Common values: `solid`,
                  `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`,
                  `outset`, `none`, `hidden`.
                  <br />
                  Example: `border-style: solid;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `border-color`
                  </strong>
                  : Sets the color of the border. Can use any CSS color format.
                  Can be set for all sides or individually.
                  <br />
                  Example: `border-color: #ff5722;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `border` (Shorthand)
                  </strong>
                  : A concise way to set `border-width`, `border-style`, and
                  `border-color` in one declaration. Order is important but
                  flexible: `border: [width] [style] [color];`
                  <br />
                  Example: `border: 1px solid black;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Individual Side Borders:
                  </strong>{" "}
                  You can apply properties to specific sides using `border-top`,
                  `border-right`, `border-bottom`, `border-left`, or
                  `border-top-width`, `border-top-style`, etc.
                  <br />
                  Example: `border-left: 5px solid blue;`
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    `border-radius`
                  </strong>
                  : Creates rounded corners for an element. Accepts length units
                  or percentages. If a single value is given, all corners are
                  rounded equally. Multiple values can specify individual corner
                  radii (top-left, top-right, bottom-right, bottom-left). A
                  value of `50%` on a square element creates a perfect circle.
                  <br />
                  Example: `border-radius: 10px;` or `border-radius: 50%;`
                </li>
              </ul>
              <CodeReviewPager code={section3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Tip:** When using `double`, `groove`, `ridge`, `inset`, or
                `outset` border styles, a `border-width` of at least `3px` (or
                more for `double`) is usually needed for the effect to be
                clearly visible.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Bringing Your Designs to Life
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Colors, backgrounds, and borders are fundamental building blocks
                of visual design in CSS. They allow you to define the
                appearance, mood, and structure of your web elements.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Practice using the different color formats, experiment with
                various background images and their properties, and play around
                with border styles and radii. Your browser's developer tools
                will be invaluable for inspecting and debugging these visual
                styles.
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
