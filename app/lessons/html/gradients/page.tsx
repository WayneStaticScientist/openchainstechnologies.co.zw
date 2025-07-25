import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Floats and Clearing",
  description:
    "Learn how to use CSS floats and clearing techniques to control layout and content flow in web design.",
  openGraph: {
    title: "CSS Floats and Clearing",
    description:
      "Learn how to use CSS floats and clearing techniques to control layout and content flow in web design.",
    url: `${baseUrl}/lessons/html/floats-clearing`,
    siteName: "Openchains Technologies",
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/floats-clearing`,
  },
  keywords: [
    "CSS Floats",
    "Clearing Techniques",
    "Web Design Layout",
    "Responsive Design",
    "HTML Lessons",
    "Openchains Technologies",
  ],
  metadataBase: new URL(baseUrl),
};
// Code Example 1: Linear Gradients
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear Gradients</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f7f6;
            color: #333;
            text-align: center;
        }

        h2 {
            color: #3498db;
            margin-bottom: 20px;
        }

        .gradient-container {
            width: 90%;
            max-width: 600px;
            height: 150px;
            border: 2px dashed #999;
            margin: 30px auto;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
            overflow: hidden; /* Ensure gradient stays within bounds */
        }

        .gradient-label {
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 0.9rem;
            color: white;
        }

        /* --- Linear Gradients Examples --- */

        /* Basic vertical */
        .linear-basic {
            background: linear-gradient(#e74c3c, #f39c12); /* Red to Orange (top to bottom) */
        }

        /* With direction to right */
        .linear-to-right {
            background: linear-gradient(to right, #2ecc71, #1abc9c); /* Green to Teal (left to right) */
        }

        /* With diagonal direction (bottom right) */
        .linear-diagonal {
            background: linear-gradient(to bottom right, #9b59b6, #8e44ad); /* Purple to Dark Purple */
        }

        /* With angle */
        .linear-angle {
            background: linear-gradient(45deg, #3498db, #2980b9); /* Blue to Dark Blue at 45 degrees */
        }

        /* With color stops */
        .linear-stops {
            background: linear-gradient(to right, #e74c3c 0%, #f39c12 50%, #2ecc71 100%); /* Red -> Orange (at 50%) -> Green */
        }

        /* Hard stops (stripes) */
        .linear-stripes {
            background: linear-gradient(to right,
                #e74c3c 0%, #e74c3c 33%, /* Red band */
                #2ecc71 33%, #2ecc71 66%, /* Green band */
                #3498db 66%, #3498db 100% /* Blue band */
            );
        }

        /* Transparency */
        .linear-transparent {
            background: linear-gradient(to right,
                rgba(52, 152, 219, 1), /* Solid blue */
                rgba(52, 152, 219, 0) /* Transparent blue */
            );
        }
    </style>
</head>
<body>
    <h2>Linear Gradients: Smooth Color Transitions</h2>

    <div class="gradient-container linear-basic">
        <span class="gradient-label">Red to Orange (default: top to bottom)</span>
    </div>

    <div class="gradient-container linear-to-right">
        <span class="gradient-label">Green to Teal (to right)</span>
    </div>

    <div class="gradient-container linear-diagonal">
        <span class="gradient-label">Purple to Dark Purple (to bottom right)</span>
    </div>

    <div class="gradient-container linear-angle">
        <span class="gradient-label">Blue to Dark Blue (45deg)</span>
    </div>

    <div class="gradient-container linear-stops">
        <span class="gradient-label">Red 0%, Orange 50%, Green 100%</span>
    </div>

    <div class="gradient-container linear-stripes">
        <span class="gradient-label">Hard Stops (Red, Green, Blue stripes)</span>
    </div>

    <div class="gradient-container linear-transparent">
        <span class="gradient-label">Transparent Fade (Blue to Transparent)</span>
    </div>
</body>
</html>`;

// Code Example 2: Radial Gradients
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Radial Gradients</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f7f6;
            color: #333;
            text-align: center;
        }

        h2 {
            color: #3498db;
            margin-bottom: 20px;
        }

        .gradient-container {
            width: 90%;
            max-width: 600px;
            height: 150px;
            border: 2px dashed #999;
            margin: 30px auto;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
            overflow: hidden;
        }

        .gradient-label {
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 0.9rem;
            color: white;
        }

        /* --- Radial Gradients Examples --- */

        /* Basic circular */
        .radial-basic {
            background: radial-gradient(#e74c3c, #f39c12); /* Red to Orange (center to edge) */
        }

        /* Elliptical (default for non-circular containers) */
        .radial-elliptical {
            background: radial-gradient(#2ecc71, #1abc9c); /* Green to Teal */
            border-radius: 0; /* Make it a square to show elliptical default */
        }

        /* Circle shape explicitly */
        .radial-circle {
            background: radial-gradient(circle, #9b59b6, #8e44ad); /* Purple to Dark Purple */
        }

        /* Sizing: closest-corner */
        .radial-closest-corner {
            background: radial-gradient(closest-corner at 20% 20%, #3498db, #2980b9); /* Blue to Dark Blue */
            border-radius: 0;
        }

        /* Sizing: farthest-side */
        .radial-farthest-side {
            background: radial-gradient(farthest-side at 50% 50%, #f1c40f, #e67e22); /* Yellow to Orange */
            border-radius: 0;
        }

        /* With color stops */
        .radial-stops {
            background: radial-gradient(circle, #e74c3c 0%, #f39c12 50%, #2ecc71 100%); /* Red -> Orange (at 50%) -> Green */
        }

        /* Concentric circles (hard stops) */
        .radial-concentric {
            background: radial-gradient(circle,
                #e74c3c 0%, #e74c3c 20%, /* Red center */
                #2ecc71 20%, #2ecc71 40%, /* Green ring */
                #3498db 40%, #3498db 60% /* Blue ring */
            );
        }
    </style>
</head>
<body>
    <h2>Radial Gradients: Circular/Elliptical Transitions</h2>

    <div class="gradient-container radial-basic">
        <span class="gradient-label">Red to Orange (default: center to edge)</span>
    </div>

    <div class="gradient-container radial-elliptical">
        <span class="gradient-label">Green to Teal (default elliptical in rectangle)</span>
    </div>

    <div class="gradient-container radial-circle">
        <span class="gradient-label">Purple to Dark Purple (explicit 'circle')</span>
    </div>

    <div class="gradient-container radial-closest-corner">
        <span class="gradient-label">'closest-corner' from 20% 20%</span>
    </div>

    <div class="gradient-container radial-farthest-side">
        <span class="gradient-label">'farthest-side' from center</span>
    </div>

    <div class="gradient-container radial-stops">
        <span class="gradient-label">Red 0%, Orange 50%, Green 100%</span>
    </div>

    <div class="gradient-container radial-concentric">
        <span class="gradient-label">Concentric Circles (Hard Stops)</span>
    </div>
</body>
</html>`;

// Code Example 3: Conic Gradients and Advanced Techniques
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conic Gradients & Advanced</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f7f6;
            color: #333;
            text-align: center;
        }

        h2 {
            color: #3498db;
            margin-bottom: 20px;
        }

        .gradient-container {
            width: 90%;
            max-width: 600px;
            height: 150px;
            border: 2px dashed #999;
            margin: 30px auto;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
            overflow: hidden;
        }

        .gradient-container.large-height {
            height: 250px; /* For repeating gradients */
        }

        .gradient-label {
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 0.9rem;
            color: white;
            z-index: 1; /* Ensure label is on top */
        }

        /* --- Conic Gradients Examples --- */
        .conic-basic {
            background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
            border-radius: 50%; /* Make it circular for better effect */
        }

        .conic-from-angle {
            background: conic-gradient(from 90deg, #e74c3c, #f39c12, #2ecc71);
            border-radius: 50%;
        }

        .conic-at-position {
            background: conic-gradient(at 20% 30%, #3498db, #2980b9, #1abc9c);
            border-radius: 50%;
        }

        .conic-pie-chart {
            background: conic-gradient(
                #e74c3c 0% 25%,    /* Red slice (25%) */
                #2ecc71 25% 50%,    /* Green slice (25%) */
                #f1c40f 50% 75%,    /* Yellow slice (25%) */
                #3498db 75% 100%    /* Blue slice (25%) */
            );
            border-radius: 50%;
        }

        /* --- Repeating Gradients --- */
        .repeating-linear {
            background: repeating-linear-gradient(45deg,
                #e74c3c, #e74c3c 10px,
                #2ecc71 10px, #2ecc71 20px
            );
        }

        .repeating-radial {
            background: repeating-radial-gradient(circle,
                #3498db, #3498db 10px,
                #f39c12 10px, #f39c12 20px
            );
        }

        .repeating-conic {
            background: repeating-conic-gradient(
                #9b59b6 0% 10%,
                #8e44ad 10% 20%
            );
            border-radius: 50%;
        }

        /* --- Multiple Backgrounds (Stacking Gradients) --- */
        .multiple-gradients {
            background:
                linear-gradient(to right, rgba(255,0,0,0.5), transparent), /* Semi-transparent red from left */
                linear-gradient(to top, rgba(0,0,255,0.5), transparent), /* Semi-transparent blue from bottom */
                #f1c40f; /* Solid yellow fallback/base */
            border-radius: 0;
            color: black;
        }

        /* --- Mixing with background-image --- */
        .gradient-image-overlay {
            background:
                linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0)), /* Dark overlay at bottom */
                url('https://placehold.co/600x300/cccccc/000000?text=Your+Image+Here') center/cover no-repeat;
            color: white;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
        }
    </style>
</head>
<body>
    <h2>Conic Gradients: Pie-like Transitions</h2>

    <div class="gradient-container conic-basic">
        <span class="gradient-label">Full spectrum (rainbow)</span>
    </div>

    <div class="gradient-container conic-from-angle">
        <span class="gradient-label">'from 90deg' (starts from right)</span>
    </div>

    <div class="gradient-container conic-at-position">
        <span class="gradient-label">'at 20% 30%' (origin)</span>
    </div>

    <div class="gradient-container conic-pie-chart">
        <span class="gradient-label">Pie Chart Effect (Hard Stops)</span>
    </div>

    <h2>Repeating Gradients</h2>

    <div class="gradient-container large-height repeating-linear">
        <span class="gradient-label">Repeating Linear (Stripes)</span>
    </div>

    <div class="gradient-container large-height repeating-radial">
        <span class="gradient-label">Repeating Radial (Circles)</span>
    </div>

    <div class="gradient-container large-height repeating-conic">
        <span class="gradient-label">Repeating Conic (Wedges)</span>
    </div>

    <h2>Advanced: Multiple Gradients & Overlays</h2>

    <div class="gradient-container multiple-gradients">
        <span class="gradient-label">Multiple Gradients Stacked</span>
    </div>

    <div class="gradient-container gradient-image-overlay">
        <span class="gradient-label">Gradient Overlay on Image</span>
    </div>
</body>
</html>`;

export default function CssGradientsTutorial() {
  const page = 39; // Placeholder page number for chapter navigation

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/2ecc71/ffffff?text=CSS+Gradients"
              alt="CSS Gradients"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Gradients: Creating Smooth Color Blends 🎨
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              CSS Gradients allow you to create smooth transitions between two
              or more colors. They're incredibly versatile for backgrounds,
              buttons, and decorative elements, often replacing images for a
              lighter, more flexible, and scalable design.
            </p>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 1. Linear Gradients */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. Linear Gradients (`linear-gradient()`)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A linear gradient transitions colors along a straight line.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Syntax & Parameters:
              </h3>
              <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:text-sm! tw:font-mono! tw:overflow-x-auto! tw:mb-4!">
                `linear-gradient([direction | angle], color-stop1, color-stop2,
                ...)`
              </pre>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Direction/Angle (Optional):
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:space-y-1!">
                    <li>
                      Keywords: `to top`, `to bottom` (default), `to left`, `to
                      right`, `to top left`, `to bottom right`, etc.
                    </li>
                    <li>
                      Angle: A numeric value with an angle unit (e.g., `45deg`,
                      `90deg`, `1turn`). `0deg` is `to top`, `90deg` is `to
                      right`.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Color Stops (Required):
                  </strong>{" "}
                  At least two colors. Each color can optionally have a stop
                  position (e.g., `red`, `blue 50%`, `green`).
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:space-y-1!">
                    <li>Positions can be percentages or length units.</li>
                    <li>
                      If no position is specified, colors are evenly
                      distributed.
                    </li>
                    <li>
                      Hard stops (stripes) are created by giving consecutive
                      color stops the same position (e.g., `red 0%, red 50%,
                      blue 50%, blue 100%`).
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:mt-6!">
                Experiment with directions, angles, and color stops below:
              </p>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Radial Gradients */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Radial Gradients (`radial-gradient()`)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A radial gradient transitions colors outward from a central
                point.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-green-600;">
                Syntax & Parameters:
              </h3>
              <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:text-sm! tw:font-mono! tw:overflow-x-auto! tw:mb-4!">
                `radial-gradient([shape || size] [at position], color-stop1,
                color-stop2, ...)`
              </pre>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Shape (Optional):
                  </strong>{" "}
                  `circle` or `ellipse` (default for non-circular containers).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Size (Optional):
                  </strong>{" "}
                  Determines how the gradient ends relative to the container.
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-4! tw:space-y-1!">
                    <li>
                      Keywords: `closest-side`, `farthest-side` (default),
                      `closest-corner`, `farthest-corner`.
                    </li>
                    <li>
                      Length/Percentage: Specify radius for `circle` or x/y
                      radii for `ellipse`.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Position (`at` keyword, Optional):
                  </strong>{" "}
                  Where the center of the gradient is. Default is `center`.
                  (e.g., `at top left`, `at 20% 30%`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Color Stops (Required):
                  </strong>{" "}
                  Same as linear gradients.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:mt-6!">
                Explore different shapes, sizes, and positions:
              </p>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. Conic Gradients and Advanced Techniques */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. Conic Gradients (`conic-gradient()`) & Advanced Techniques
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Conic gradients rotate colors around a central point, creating
                "pie-like" transitions.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                Conic Gradient Syntax:
              </h3>
              <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:text-sm! tw:font-mono! tw:overflow-x-auto! tw:mb-4!">
                `conic-gradient([from angle] [at position], color-stop1,
                color-stop2, ...)`
              </pre>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `from angle` (Optional):
                  </strong>{" "}
                  Sets the starting angle of the gradient. Default is `0deg`
                  (top center).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `at position` (Optional):
                  </strong>{" "}
                  Sets the center of the gradient. Default is `center`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Color Stops (Required):
                  </strong>{" "}
                  Can be angles or percentages. You can define ranges (e.g.,
                  `red 0% 25%`).
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:mb-3! tw:mt-4! tw:text-purple-600!">
                Advanced Techniques:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!important;">
                    Repeating Gradients (`repeating-linear-gradient()`,
                    `repeating-radial-gradient()`,
                    `repeating-conic-gradient()`):
                  </strong>{" "}
                  Create patterns by automatically repeating the gradient. You
                  define the length of one cycle, and it repeats.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!important;">
                    Multiple Backgrounds (Stacking Gradients):
                  </strong>{" "}
                  You can apply multiple gradients (and images) to a single
                  element by comma-separating them in the `background` property.
                  The first listed gradient is on top, and subsequent ones are
                  layered underneath.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!important;">
                    Gradient Overlays:
                  </strong>{" "}
                  Combine gradients with `background-image` for effects like
                  dark overlays on images, color washes, or subtle textures.
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section3} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Gradients for Rich Visuals
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                CSS gradients are a powerful tool in your web design arsenal.
                They enable you to create stunning visual effects that are:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Lightweight:
                  </strong>{" "}
                  No image files to download, reducing page load times.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Scalable:
                  </strong>{" "}
                  Resolution-independent, they look great on any screen density.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Flexible:
                  </strong>{" "}
                  Easily tweakable with CSS, no need to open image editors.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Experiment with different color combinations, directions, and
                stop positions to create unique and engaging designs!
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
