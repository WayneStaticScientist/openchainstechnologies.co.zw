import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Blend Modes and Filters - OpenChains Technologies",
  description:
    "Learn how to use CSS blend modes and filters to create stunning visual effects in your web projects.",
  openGraph: {
    type: "website",
    url: `${baseUrl}/lessons/html/blend-modes-filters`,
    title: "CSS Blend Modes and Filters - OpenChains Technologies",
    description:
      "Learn how to use CSS blend modes and filters to create stunning visual effects in your web projects.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Blend Modes and Filters - OpenChains Technologies",
    description:
      "Learn how to use CSS blend modes and filters to create stunning visual effects in your web projects.",
  },
  keywords: [
    "CSS blend modes",
    "CSS filters",
    "web development",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/html/blend-modes-filters`,
  },
  metadataBase: new URL(baseUrl),
};
// Code Example 1: CSS Blend Modes
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Blend Modes</title>
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

        .blend-container {
            width: 90%;
            max-width: 600px;
            height: 250px;
            border: 2px dashed #999;
            margin: 30px auto;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            border-radius: 8px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .base-image {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            /* Placeholder image - replace with your own if needed */
            content: url('https://placehold.co/600x250/cccccc/000000?text=Base+Image');
            z-index: 1;
        }

        .overlay-element {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.5rem;
            color: white;
            z-index: 2;
        }

        .blend-example-mix {
            /* This div contains text that will blend with the image */
        }
        .blend-example-mix .overlay-element {
            background-color: #f39c12; /* Orange overlay */
            mix-blend-mode: multiply; /* Example blend mode */
            color: #333; /* Text color for mix-blend-mode examples */
        }

        .blend-example-background {
            /* This div uses multiple backgrounds */
            background-image:
                linear-gradient(to top, rgba(0, 0, 255, 0.5), transparent), /* Semi-transparent blue overlay */
                url('https://placehold.co/600x250/cccccc/000000?text=Base+Image');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex; /* Ensure content is centered if any */
            align-items: center;
            justify-content: center;
        }
        .blend-example-background .overlay-element {
            background-color: transparent; /* No direct overlay color for this demo */
            color: white; /* Text color for background-blend-mode examples */
        }

        /* Mix Blend Mode Examples */
        .mix-mode-normal .overlay-element { mix-blend-mode: normal; background-color: rgba(255, 0, 0, 0.5); }
        .mix-mode-multiply .overlay-element { mix-blend-mode: multiply; background-color: #e74c3c; }
        .mix-mode-screen .overlay-element { mix-blend-mode: screen; background-color: #3498db; }
        .mix-mode-overlay .overlay-element { mix-blend-mode: overlay; background-color: #2ecc71; }
        .mix-mode-darken .overlay-element { mix-blend-mode: darken; background-color: #9b59b6; }
        .mix-mode-lighten .overlay-element { mix-blend-mode: lighten; background-color: #f1c40f; }
        .mix-mode-difference .overlay-element { mix-blend-mode: difference; background-color: #1abc9c; }
        .mix-mode-exclusion .overlay-element { mix-blend-mode: exclusion; background-color: #e67e22; }
        .mix-mode-hard-light .overlay-element { mix-blend-mode: hard-light; background-color: #34495e; }

        /* Background Blend Mode Examples */
        .bg-mode-normal { background-blend-mode: normal; }
        .bg-mode-multiply { background-blend-mode: multiply; }
        .bg-mode-screen { background-blend-mode: screen; }
        .bg-mode-overlay { background-blend-mode: overlay; }
        .bg-mode-darken { background-blend-mode: darken; }
        .bg-mode-lighten { background-blend-mode: lighten; }
        .bg-mode-difference { background-blend-mode: difference; }
        .bg-mode-exclusion { background-blend-mode: exclusion; }
        .bg-mode-hard-light { background-blend-mode: hard-light; }

        .blend-mode-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 40px;
        }

        .grid-item {
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            background-color: white;
        }

        .grid-item h3 {
            background-color: #eee;
            padding: 10px;
            margin: 0;
            font-size: 1.1rem;
            color: #555;
            border-bottom: 1px solid #ddd;
        }

        .grid-item .blend-container {
            width: 100%; /* Override */
            height: 150px; /* Smaller for grid */
            margin: 0;
            border: none;
            box-shadow: none;
            border-radius: 0;
        }
    </style>
</head>
<body>
    <h2>CSS Blend Modes: Mix It Up!</h2>
    <p>
        CSS Blend Modes allow content from one element (e.g., a color, gradient, or image) to "blend" with the content of the element beneath it.
        There are two main properties: <code>mix-blend-mode</code> and <code>background-blend-mode</code>.
    </p>

    <h3><code>mix-blend-mode</code>: Blending Elements Together</h3>
    <p>
        Applies to an element itself, blending its content with the content of its direct backdrop.
    </p>
    <div class="blend-mode-grid">
        <div class="grid-item mix-mode-normal">
            <h3>Normal (50% Red Overlay)</h3>
            <div class="blend-container">
                <img src="https://placehold.co/600x250/cccccc/000000?text=Base+Image" alt="Base" class="base-image" />
                <div class="overlay-element" style="background-color: rgba(255,0,0,0.5);">Overlay</div>
            </div>
        </div>
        <div class="grid-item mix-mode-multiply">
            <h3>Multiply (Red Overlay)</h3>
            <div class="blend-container">
                <img src="https://placehold.co/600x250/cccccc/000000?text=Base+Image" alt="Base" class="base-image" />
                <div class="overlay-element" style="background-color: #e74c3c;">Overlay</div>
            </div>
        </div>
        <div class="grid-item mix-mode-screen">
            <h3>Screen (Blue Overlay)</h3>
            <div class="blend-container">
                <img src="https://placehold.co/600x250/cccccc/000000?text=Base+Image" alt="Base" class="base-image" />
                <div class="overlay-element" style="background-color: #3498db;">Overlay</div>
            </div>
        </div>
        <div class="grid-item mix-mode-overlay">
            <h3>Overlay (Green Overlay)</h3>
            <div class="blend-container">
                <img src="https://placehold.co/600x250/cccccc/000000?text=Base+Image" alt="Base" class="base-image" />
                <div class="overlay-element" style="background-color: #2ecc71;">Overlay</div>
            </div>
        </div>
        <div class="grid-item mix-mode-darken">
            <h3>Darken (Purple Overlay)</h3>
            <div class="blend-container">
                <img src="https://placehold.co/600x250/cccccc/000000?text=Base+Image" alt="Base" class="base-image" />
                <div class="overlay-element" style="background-color: #9b59b6;">Overlay</div>
            </div>
        </div>
        <div class="grid-item mix-mode-lighten">
            <h3>Lighten (Yellow Overlay)</h3>
            <div class="blend-container">
                <img src="https://placehold.co/600x250/cccccc/000000?text=Base+Image" alt="Base" class="base-image" />
                <div class="overlay-element" style="background-color: #f1c40f;">Overlay</div>
            </div>
        </div>
        <div class="grid-item mix-mode-difference">
            <h3>Difference (Teal Overlay)</h3>
            <div class="blend-container">
                <img src="https://placehold.co/600x250/cccccc/000000?text=Base+Image" alt="Base" class="base-image" />
                <div class="overlay-element" style="background-color: #1abc9c;">Overlay</div>
            </div>
        </div>
        <div class="grid-item mix-mode-exclusion">
            <h3>Exclusion (Orange Overlay)</h3>
            <div class="blend-container">
                <img src="https://placehold.co/600x250/cccccc/000000?text=Base+Image" />
                <div class="overlay-element" style="background-color: #e67e22;">Overlay</div>
            </div>
        </div>
        <div class="grid-item mix-mode-hard-light">
            <h3>Hard Light (Dark Blue Overlay)</h3>
            <div class="blend-container">
                <img src="https://placehold.co/600x250/cccccc/000000?text=Base+Image" alt="Base" class="base-image" />
                <div class="overlay-element" style="background-color: #34495e;">Overlay</div>
            </div>
        </div>
    </div>

    <h3><code>background-blend-mode</code>: Blending Background Layers</h3>
    <p>
        Applies to multiple backgrounds of a single element, blending them with each other and then with the element's background color.
    </p>
    <div class="blend-mode-grid">
        <div class="grid-item bg-mode-normal">
            <h3>Normal (Blue Gradient Overlay)</h3>
            <div class="blend-container blend-example-background">
                <span class="overlay-element">Text</span>
            </div>
        </div>
        <div class="grid-item bg-mode-multiply">
            <h3>Multiply</h3>
            <div class="blend-container bg-mode-multiply blend-example-background">
                <span class="overlay-element">Text</span>
            </div>
        </div>
        <div class="grid-item bg-mode-screen">
            <h3>Screen</h3>
            <div class="blend-container bg-mode-screen blend-example-background">
                <span class="overlay-element">Text</span>
            </div>
        </div>
        <div class="grid-item bg-mode-overlay">
            <h3>Overlay</h3>
            <div class="blend-container bg-mode-overlay blend-example-background">
                <span class="overlay-element">Text</span>
            </div>
        </div>
        <div class="grid-item bg-mode-darken">
            <h3>Darken</h3>
            <div class="blend-container bg-mode-darken blend-example-background">
                <span class="overlay-element">Text</span>
            </div>
        </div>
        <div class="grid-item bg-mode-lighten">
            <h3>Lighten</h3>
            <div class="blend-container bg-mode-lighten blend-example-background">
                <span class="overlay-element">Text</span>
            </div>
        </div>
        <div class="grid-item bg-mode-difference">
            <h3>Difference</h3>
            <div class="blend-container bg-mode-difference blend-example-background">
                <span class="overlay-element">Text</span>
            </div>
        </div>
        <div class="grid-item bg-mode-exclusion">
            <h3>Exclusion</h3>
            <div class="blend-container bg-mode-exclusion blend-example-background">
                <span class="overlay-element">Text</span>
            </div>
        </div>
        <div class="grid-item bg-mode-hard-light">
            <h3>Hard Light</h3>
            <div class="blend-container bg-mode-hard-light blend-example-background">
                <span class="overlay-element">Text</span>
            </div>
        </div>
    </div>
</body>
</html>`;

// Code Example 2: CSS Filter Effects
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Filter Effects</title>
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

        .filter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 40px;
        }

        .filter-item {
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            background-color: white;
            padding-bottom: 10px; /* Space for text */
        }

        .filter-item h3 {
            background-color: #eee;
            padding: 10px;
            margin: 0 0 10px 0;
            font-size: 1.1rem;
            color: #555;
            border-bottom: 1px solid #ddd;
        }

        .filter-box {
            width: 100%;
            height: 150px;
            background-image: url('https://placehold.co/600x300/e74c3c/ffffff?text=Image+Effect'); /* Base image for filters */
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
            transition: filter 0.3s ease; /* Smooth transition for hover effects */
        }

        /* Filter examples */
        .filter-none .filter-box { filter: none; }
        .filter-blur .filter-box { filter: blur(3px); }
        .filter-brightness .filter-box { filter: brightness(1.5); }
        .filter-contrast .filter-box { filter: contrast(200%); }
        .filter-grayscale .filter-box { filter: grayscale(100%); }
        .filter-hue-rotate .filter-box { filter: hue-rotate(90deg); }
        .filter-invert .filter-box { filter: invert(100%); }
        .filter-opacity .filter-box { filter: opacity(0.5); }
        .filter-saturate .filter-box { filter: saturate(200%); }
        .filter-sepia .filter-box { filter: sepia(100%); }
        .filter-drop-shadow .filter-box {
            filter: drop-shadow(5px 5px 8px rgba(0,0,0,0.5));
            background-image: url('https://placehold.co/150x150/e74c3c/ffffff?text=Alpha'); /* Simpler image for shadow */
            background-size: contain;
            background-repeat: no-repeat;
            background-color: transparent; /* So shadow is on page, not on box bg */
            border: 1px solid rgba(0,0,0,0.1); /* To show original bounds */
            width: 150px;
            height: 150px;
            margin: 0 auto; /* Center it */
        }

        /* Multiple filters */
        .filter-multiple .filter-box {
            filter: grayscale(100%) contrast(150%) blur(1px);
        }

        /* Hover effects */
        .filter-hover-grayscale .filter-box:hover { filter: grayscale(0%); }
        .filter-hover-blur .filter-box:hover { filter: blur(0); }
        .filter-hover-brightness .filter-box:hover { filter: brightness(1); }
        .filter-hover-saturate .filter-box:hover { filter: saturate(100%); }
    </style>
</head>
<body>
    <h2>CSS Filter Effects: Visual Adjustments</h2>
    <p>
        The <code>filter</code> property applies graphical effects like blur, brightness, contrast, and more to an element. It's a non-destructive way to manipulate visuals.
    </p>

    <h3>Basic Filter Functions</h3>
    <div class="filter-grid">
        <div class="filter-item filter-none">
            <h3>Original</h3>
            <div class="filter-box"></div>
        </div>
        <div class="filter-item filter-blur">
            <h3>blur(3px)</h3>
            <div class="filter-box"></div>
        </div>
        <div class="filter-item filter-brightness">
            <h3>brightness(1.5)</h3>
            <div class="filter-box"></div>
        </div>
        <div class="filter-item filter-contrast">
            <h3>contrast(200%)</h3>
            <div class="filter-box"></div>
        </div>
        <div class="filter-item filter-grayscale">
            <h3>grayscale(100%)</h3>
            <div class="filter-box"></div>
        </div>
        <div class="filter-item filter-hue-rotate">
            <h3>hue-rotate(90deg)</h3>
            <div class="filter-box"></div>
        </div>
        <div class="filter-item filter-invert">
            <h3>invert(100%)</h3>
            <div class="filter-box"></div>
        </div>
        <div class="filter-item filter-opacity">
            <h3>opacity(0.5)</h3>
            <div class="filter-box"></div>
        </div>
        <div class="filter-item filter-saturate">
            <h3>saturate(200%)</h3>
            <div class="filter-box"></div>
        </div>
        <div class="filter-item filter-sepia">
            <h3>sepia(100%)</h3>
            <div class="filter-box"></div>
        </div>
        <div class="filter-item filter-drop-shadow">
            <h3>drop-shadow(5px 5px 8px)</h3>
            <div class="filter-box">Alpha Image</div>
        </div>
        <div class="filter-item filter-multiple">
            <h3>Multiple Filters (GS, Contrast, Blur)</h3>
            <div class="filter-box"></div>
        </div>
    </div>

    <h3>Filter Effects with Transitions (Hover)</h3>
    <p>
        Filters can be animated using CSS transitions for interactive effects.
        Hover over the boxes to see the transition!
    </p>
    <div class="filter-grid">
        <div class="filter-item filter-hover-grayscale">
            <h3>Hover to Grayscale</h3>
            <div class="filter-box" style="filter: grayscale(100%);">Hover Me!</div>
        </div>
        <div class="filter-item filter-hover-blur">
            <h3>Hover to Unblur</h3>
            <div class="filter-box" style="filter: blur(5px);">Hover Me!</div>
        </div>
        <div class="filter-item filter-hover-brightness">
            <h3>Hover to Brighten</h3>
            <div class="filter-box" style="filter: brightness(0.5);">Hover Me!</div>
        </div>
        <div class="filter-item filter-hover-saturate">
            <h3>Hover to Saturate</h3>
            <div class="filter-box" style="filter: saturate(0%);">Hover Me!</div>
        </div>
    </div>
</body>
</html>`;

export default function CssBlendModesAndFiltersTutorial() {
  const page = 40; // Placeholder page number for chapter navigation

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/1abc9c/ffffff?text=CSS+Blend+Modes+%26+Filters"
              alt="CSS Blend Modes and Filters"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Blend Modes & Filter Effects: Visual Magic ✨
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Unleash powerful visual effects directly in the browser! CSS Blend
              Modes allow elements to interact with their backgrounds like
              Photoshop layers, while Filter Effects apply image-editing
              adjustments dynamically.
            </p>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 1. CSS Blend Modes */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. CSS Blend Modes: Layer Interaction (`mix-blend-mode` &
                `background-blend-mode`)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                CSS blend modes define how an element's content should blend
                with the content of its direct parent/backdrop, or how multiple
                backgrounds within a single element should blend. They work
                similarly to blend modes in graphic design software.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                `mix-blend-mode`: Blending Elements
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This property applies to an element and defines how it blends
                with the content *behind* it (its direct parent and siblings
                that it overlaps). It's great for text effects, overlapping
                shapes, and dynamic overlays.
              </p>
              <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:text-sm! tw:font-mono! tw:overflow-x-auto! tw:mb-4!">
                `mix-blend-mode: normal | multiply | screen | overlay | darken |
                lighten | color-dodge | color-burn | hard-light | soft-light |
                difference | exclusion | hue | saturation | color | luminosity;`
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                `background-blend-mode`: Blending Background Layers
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This property applies to a single element that has multiple
                `background-image` layers. It defines how those background
                layers blend with each other, and then finally with the
                `background-color` of the element.
              </p>
              <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:text-sm! tw:font-mono! tw:overflow-x-auto! tw:mb-4!">
                `background-blend-mode: normal | multiply | screen | overlay |
                darken | lighten | color-dodge | color-burn | hard-light |
                soft-light | difference | exclusion | hue | saturation | color |
                luminosity;`
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                Common Blend Modes Explained (Briefly):
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `normal`:
                  </strong>{" "}
                  Default. No blending.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `multiply`:
                  </strong>{" "}
                  Multiplies the base and blend colors. Darker result.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `screen`:
                  </strong>{" "}
                  Multiplies the inverse of the base and blend colors. Lighter
                  result.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `overlay`:
                  </strong>{" "}
                  Combines `multiply` and `screen`. Dark areas become darker,
                  light areas lighter.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `darken`:
                  </strong>{" "}
                  Selects the darker of the base or blend color.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `lighten`:
                  </strong>{" "}
                  Selects the lighter of the base or blend color.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `difference`:
                  </strong>{" "}
                  Subtracts the darker color from the lighter color. Creates
                  inverted effects.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `hue`, `saturation`, `color`, `luminosity`:
                  </strong>{" "}
                  Transfer specific color components from the blend layer to the
                  base.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:mt-6! tw:font-semibold!">
                See the examples below to understand how different blend modes
                interact with a base image or background.
              </p>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. CSS Filter Effects */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. CSS Filter Effects (`filter` property)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `filter` property applies visual effects to an element, much
                like filters in photo editing software. These effects are
                applied *after* the element's layout and painting are complete,
                so they don't affect the box model or surrounding elements.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-red-600;">
                Common Filter Functions:
              </h3>
              <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:text-sm! tw:font-mono! tw:overflow-x-auto! tw:mb-4!">
                {`filter: <function>() <function>() ...;`}
              </pre>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `blur(radius)`:
                  </strong>{" "}
                  Applies a Gaussian blur. (e.g., `blur(5px)`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `brightness(amount)`:
                  </strong>{" "}
                  Adjusts brightness. `1` is normal. (e.g., `brightness(1.5)`
                  for 150%).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `contrast(amount)`:
                  </strong>{" "}
                  Adjusts contrast. `1` is normal. (e.g., `contrast(200%)`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `grayscale(amount)`:
                  </strong>{" "}
                  Converts to grayscale. `1` (or `100%`) is full grayscale.
                  (e.g., `grayscale(100%)`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `hue-rotate(angle)`:
                  </strong>{" "}
                  Rotates the hues of the element. (e.g., `hue-rotate(90deg)`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `invert(amount)`:
                  </strong>{" "}
                  Inverts colors. `1` (or `100%`) is full inversion. (e.g.,
                  `invert(100%)`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `opacity(amount)`:
                  </strong>{" "}
                  Similar to `opacity` property, but applied as a filter. `1`
                  (or `100%`) is opaque.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `saturate(amount)`:
                  </strong>{" "}
                  Adjusts saturation. `1` is normal. (e.g., `saturate(200%)`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `sepia(amount)`:
                  </strong>{" "}
                  Applies a sepia tone. `1` (or `100%`) is full sepia. (e.g.,
                  `sepia(100%)`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `drop-shadow(h-shadow v-shadow blur spread color)`:
                  </strong>{" "}
                  Applies a shadow to the *alpha mask* of the element, not its
                  bounding box (unlike `box-shadow`). Excellent for irregular
                  shapes.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Multiple Filters:
                  </strong>{" "}
                  You can apply multiple filter functions by separating them
                  with spaces. They are applied in the order they are listed.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:mt-6! tw:font-semibold!">
                Filters are excellent for non-destructive image manipulation and
                can be combined with transitions for interactive hover effects.
              </p>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Dynamic Visual Effects
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                CSS Blend Modes and Filter Effects offer powerful capabilities
                that were once exclusive to graphic design software. By
                leveraging these properties, you can:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Create complex visual overlays and interactions
                  </strong>{" "}
                  directly in the browser.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Apply non-destructive image adjustments
                  </strong>{" "}
                  without altering the original asset.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Reduce reliance on image editors and external assets
                  </strong>{" "}
                  for common visual styles.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Animate visual effects
                  </strong>{" "}
                  using transitions, adding dynamic flair to your UI.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Experiment with different combinations of blend modes and
                filters to achieve unique and captivating visual designs!
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
