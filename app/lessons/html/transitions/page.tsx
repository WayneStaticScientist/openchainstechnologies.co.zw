import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
const title = "Css Transitions Tutorial";
const description =
  "Transitions animations and styles in css tutorials right here on openchains technologies | learn ";
const canonicalUrl = `${baseUrl}/lessons/html/transitions`;
export const metadata = {
  title,
  description,
  keywords: "transitions , styling , modern web design , styles",
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
// Code Example 1: Basic Transitions and Properties
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transitions Tutorial</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f0f2f5;
            color: #333;
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        h1, h2, h3 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 25px;
        }

        .container {
            max-width: 900px;
            width: 100%;
            margin: 0 auto 40px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            border: 2px dashed #3498db;
            box-sizing: border-box;
        }

        /* --- Basic Transition Example --- */
        .simple-box {
            width: 100px;
            height: 100px;
            background-color: #3498db;
            margin: 30px auto;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);

            /* The transition property is applied to the default state */
            transition: background-color 0.5s ease; /* Transition 'background-color' over 0.5s with 'ease' timing */
        }

        .simple-box:hover {
            background-color: #e74c3c; /* New state on hover */
        }

        /* --- Individual Transition Properties Demo --- */
        .property-demo-box {
            width: 120px;
            height: 120px;
            background-color: #2ecc71;
            margin: 20px auto;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);

            /* Defining each transition property explicitly */
            transition-property: transform, background-color, box-shadow;
            transition-duration: 0.4s, 0.6s, 0.4s; /* Different durations for each property */
            transition-timing-function: ease-in-out, linear, ease-out; /* Different timing functions */
            transition-delay: 0s, 0.2s, 0s; /* Background color change delays by 0.2s */
        }

        .property-demo-box:hover {
            transform: scale(1.2) rotate(15deg);
            background-color: #f1c40f;
            box-shadow: 0 8px 15px rgba(0,0,0,0.3);
        }

        /* --- Timing Functions Demo --- */
        .timing-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin-top: 40px;
        }
        .timing-item {
            width: 100px;
            height: 100px;
            background-color: #9b59b6;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            font-size: 0.9em;
            cursor: pointer;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);

            transition: transform 0.8s; /* All items transition their transform over 0.8s */
        }
        .timing-item:hover {
            transform: translateY(-20px) scale(1.1); /* Lift and grow on hover */
            background-color: #e74c3c;
        }

        /* Assign specific timing functions */
        .timing-item.ease { transition-timing-function: ease; }
        .timing-item.linear { transition-timing-function: linear; }
        .timing-item.ease-in { transition-timing-function: ease-in; }
        .timing-item.ease-out { transition-timing-function: ease-out; }
        .timing-item.ease-in-out { transition-timing-function: ease-in-out; }
        .timing-item.cubic-bezier { transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Custom springy effect */ }
        .timing-item.steps { transition-timing-function: steps(5, end); } /* 5 discrete steps */

    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Transitions: Smoothly Changing Styles</h1>
        <p>CSS Transitions provide a way to animate changes in CSS property values, making them happen gradually over a duration rather than instantly. This creates a much more fluid and engaging user experience.</p>

        <h2>The Problem (and Solution)</h2>
        <p>Without transitions, when a CSS property changes (e.g., on hover), the visual change is abrupt:</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw-font-mono! tw:mb-4! tw:mt-2!">
.my-button:hover {
    background-color: red; /* Instant change! */
}
        </pre>
        <p>Transitions solve this by specifying *how* that change should occur:
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.my-button {
    transition: background-color 0.3s ease-in-out; /* Smooth change! */
}
.my-button:hover {
    background-color: red;
}
        </pre>
        </p>

        <h3>Basic Transition Example:</h3>
        <p class="tw-text-center">Hover over the box to see its background color transition smoothly.</p>
        <div class="simple-box">Hover Me</div>

        <h2>Understanding the Core Transition Properties:</h2>
        <p>Transitions are defined using a set of properties, usually on the default state of an element.</p>

        <ul>
            <li><code>transition-property</code>: Which CSS property(s) to animate (<code>background-color</code>, <code>transform</code>, <code>opacity</code>, or <code>all</code>).</li>
            <li><code>transition-duration</code>: How long the transition takes (e.g., <code>0.5s</code>, <code>200ms</code>).</li>
            <li><code>transition-timing-function</code>: The speed curve of the transition (e.g., <code>ease</code>, <code>linear</code>, <code>cubic-bezier()</code>).</li>
            <li><code>transition-delay</code>: When the transition should start (e.g., <code>0.2s</code> delay).</li>
        </ul>

        <h3>Explicit Property Definition Demo:</h3>
        <p class="tw-text-center">Hover over this circle. Notice how different properties transition at different speeds or with a delay.</p>
        <div class="property-demo-box">Multi-Prop</div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            <code>transform</code> and <code>box-shadow</code> change instantly, then <code>background-color</code> changes after a 0.2s delay.
        </p>

        <h3>Mastering <code>transition-timing-function</code>:</h3>
        <p class="tw-text-center">Hover over any of the boxes below to observe how different timing functions affect their movement. Each box also changes color instantly on hover for clarity of movement.</p>
        <div class="timing-grid">
            <div class="timing-item ease">ease</div>
            <div class="timing-item linear">linear</div>
            <div class="timing-item ease-in">ease-in</div>
            <div class="timing-item ease-out">ease-out</div>
            <div class="timing-item ease-in-out">ease-in-out</div>
            <div class="timing-item cubic-bezier">cubic-bezier</div>
            <div class="timing-item steps">steps(5)</div>
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            <code>ease</code>: Default, starts slow, speeds up, ends slow.<br/>
            <code>linear</code>: Constant speed.<br/>
            <code>ease-in</code>: Slow start, then speeds up.<br/>
            <code>ease-out</code>: Starts fast, then slows down.<br/>
            <code>ease-in-out</code>: Slow start, fast middle, slow end.<br/>
            <code>cubic-bezier()</code>: Fully customizable speed curve. Try <a href="https://cubic-bezier.com/" target="_blank" class="tw-text-blue-500 hover:tw-underline">cubic-bezier.com</a>.<br/>
            <code>steps(N, end/start)</code>: Transition in N discrete jumps.
        </p>
    </div>
</body>
</html>`;

// Code Example 2: Shorthand and Triggers
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transitions: Shorthand & Triggers</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f0f2f5;
            color: #333;
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        h1, h2, h3 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 25px;
        }

        .container {
            max-width: 900px;
            width: 100%;
            margin: 0 auto 40px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            border: 2px dashed #2ecc71;
            box-sizing: border-box;
        }

        /* --- Shorthand Property Demo --- */
        .shorthand-button {
            padding: 12px 25px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1em;
            cursor: pointer;
            outline: none;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            margin: 20px auto;
            display: block; /* To center it */

            /* Shorthand for a single property */
            transition: background-color 0.3s ease-out;
        }
        .shorthand-button:hover {
            background-color: #2980b9;
        }
        .shorthand-button:active {
            transform: translateY(1px);
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            /* Note: transform and box-shadow will jump if not also defined in the transition */
        }


        /* Shorthand for multiple properties */
        .shorthand-multi-button {
            padding: 12px 25px;
            background-color: #e67e22;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1em;
            cursor: pointer;
            outline: none;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            margin: 20px auto;
            display: block; /* To center it */

            /* Multiple properties in shorthand, separated by comma */
            transition: background-color 0.3s ease,
                        transform 0.2s ease-out,
                        box-shadow 0.3s ease;
        }
        .shorthand-multi-button:hover {
            background-color: #d35400;
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.25);
        }
        .shorthand-multi-button:active {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        /* --- Triggering Transitions with Class Toggling (JS) --- */
        .js-toggle-box {
            width: 150px;
            height: 150px;
            background-color: #9b59b6;
            margin: 30px auto;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            font-size: 1.1em;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            cursor: pointer;

            /* Properties to transition */
            transition: all 0.5s ease-in-out; /* Transition all animatable properties */
        }

        .js-toggle-box.active { /* This class is toggled by JS */
            width: 200px;
            height: 100px;
            background-color: #2c3e50;
            transform: rotate(360deg);
            border-radius: 50%;
        }

        .toggle-button {
            padding: 10px 20px;
            background-color: #34495e;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        /* --- Form Input Focus Example --- */
        .form-example {
            margin-top: 40px;
            text-align: center;
        }
        .form-example input[type="text"] {
            padding: 10px 15px;
            border: 2px solid #ccc;
            border-radius: 5px;
            font-size: 1em;
            outline: none;
            width: 80%;
            max-width: 300px;

            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .form-example input[type="text"]:focus {
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3); /* Soft blue glow */
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const toggleBox = document.getElementById('jsToggleBox');
            const toggleButton = document.getElementById('jsToggleButton');

            if (toggleBox && toggleButton) {
                toggleButton.addEventListener('click', () => {
                    toggleBox.classList.toggle('active');
                });
            }
        });
    </script>
</head>
<body>
    <div class="container">
        <h1>CSS Transitions: Shorthand & Triggers</h1>
        <p>While the individual transition properties offer fine-grained control, the <code>transition</code> shorthand is the most common way to define transitions due to its conciseness.</p>

        <h2>The <code>transition</code> Shorthand Property:</h2>
        <p>The shorthand property allows you to define <code>transition-property</code>, <code>transition-duration</code>, <code>transition-timing-function</code>, and <code>transition-delay</code> in a single line. The order is important, especially for duration and delay.</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
/* For a single property transition */
transition: &lt;property&gt; &lt;duration&gt; &lt;timing-function&gt; &lt;delay&gt;;

/* For multiple properties, separated by commas */
transition: &lt;prop1&gt; &lt;dur1&gt; &lt;time1&gt; &lt;delay1&gt;,
            &lt;prop2&gt; &lt;dur2&gt; &lt;time2&gt; &lt;delay2&gt;;
        </pre>
        <p class="tw-font-bold tw-text-orange-600">Note: If only two time values are provided, the first is <code>duration</code> and the second is <code>delay</code>.</p>

        <h3>Shorthand Button Demos:</h3>
        <p class="tw-text-center">Hover over these buttons to see transitions defined using the shorthand.</p>
        <button class="shorthand-button">Single Prop Shorthand</button>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">This button only transitions its background color.</p>

        <button class="shorthand-multi-button">Multi-Prop Shorthand</button>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">This button transitions its background, transform, and box-shadow.</p>

        <h2>How Transitions Are Triggered:</h2>
        <p>For a transition to occur, a CSS property's value must change. This change can be initiated by various events or actions.</p>

        <h3>1. Pseudo-Classes (Most Common UI Trigger):</h3>
        <p>These are the workhorses for interactive UI elements. When a user interacts with an element, its state changes, triggering the transition.</p>
        <ul>
            <li><code>:hover</code>: When the mouse pointer is over an element.</li>
            <li><code>:focus</code>: When an element receives focus (e.g., clicking on an input field).</li>
            <li><code>:active</code>: When an element is being activated by the user (e.g., holding down a mouse button on a link).</li>
            <li><code>:checked</code>: For radio buttons or checkboxes.</li>
            <li><code>:target</code>: For an element whose ID matches the URL fragment.</li>
        </ul>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">The buttons and input field in this tutorial demonstrate \`hover\`, \`active\`, and \`focus\` transitions.</p>

        <h3>2. Class Toggling via JavaScript:</h3>
        <p>For more complex interactions or when you need to trigger a transition from a non-CSS event, JavaScript is used to add or remove a class that defines the new state.</p>
        <div class="js-toggle-box" id="jsToggleBox">
            Click to Toggle
        </div>
        <button class="toggle-button" id="jsToggleButton">Toggle State</button>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            Click the button above. JavaScript adds/removes the \`active\` class, and CSS transitions the changes.
        </p>

        <h3>3. Dynamic CSS Changes (Less Common for Transitions):</h3>
        <p>You can also change an element's inline style directly via JavaScript (e.g., \`element.style.width = '200px'\`). If a \`transition\` is defined for that property, it will animate.</p>

        <h2>Practical Example: Form Input Focus:</h2>
        <p class="tw-text-center">Click on the input field below to see a common transition effect.</p>
        <div class="form-example">
            <input type="text" placeholder="Type something here..." />
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            The border color and shadow smoothly change when the input field gains focus (\`:focus\` pseudo-class).
        </p>
    </div>
</body>
</html>`;

// Code Example 3: Best Practices
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transitions Best Practices</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f0f2f5;
            color: #333;
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        h1, h2, h3 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 25px;
        }

        .container {
            max-width: 900px;
            width: 100%;
            margin: 0 auto 40px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            border: 2px dashed #9b59b6;
            box-sizing: border-box;
        }

        /* --- Performance Demo: Good vs. Bad Properties --- */
        .performance-box {
            width: 120px;
            height: 120px;
            margin: 30px auto;
            background-color: #3498db;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            font-size: 0.9em;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            cursor: pointer;
            will-change: transform, opacity; /* Hint for browser performance */
            transition: all 0.5s ease-in-out;
        }

        .performance-box.good-props:hover {
            transform: scale(1.1) rotate(5deg) translateY(-10px); /* GPU-accelerated */
            opacity: 0.8; /* GPU-accelerated */
            background-color: #2ecc71; /* Paint, but usually okay with transform/opacity */
        }

        .performance-box.bad-props {
            background-color: #e74c3c;
        }
        .performance-box.bad-props:hover {
            width: 150px; /* Triggers layout */
            height: 150px; /* Triggers layout */
            margin-left: 50px; /* Triggers layout */
            font-size: 1.2em; /* Triggers paint */
            border-radius: 50%; /* Triggers paint */
            background-color: #c0392b;
        }

        /* --- Accessibility: prefers-reduced-motion --- */
        @media (prefers-reduced-motion: reduce) {
            .performance-box {
                transition: none !important; /* Disable all transitions */
                will-change: auto !important; /* Remove the will-change hint */
            }
            .performance-box.bad-props:hover {
                /* Apply the final state instantly for reduced motion */
                width: 150px;
                height: 150px;
                margin-left: 50px;
                font-size: 1.2em;
                border-radius: 50%;
                background-color: #c0392b;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Transitions: Best Practices for Performance & Accessibility</h1>
        <p>While powerful, using transitions effectively requires understanding performance implications and ensuring accessibility for all users.</p>

        <h2>Performance: Animating the Right Properties</h2>
        <p>For the smoothest animations (especially on mobile devices), you want to ensure the browser can animate without forcing expensive "layout" (reflow) or "paint" (repaint) operations on every frame.</p>
        <p class="tw-font-bold tw-text-green-600">
            Goal: Animate properties that trigger "Composite" (GPU-accelerated) operations.
        </p>

        <h3>Good Properties to Animate (GPU-Accelerated):</h3>
        <p>These properties can often be animated directly by the GPU, leading to very smooth 60fps animations:</p>
        <ul>
            <li><code>transform</code> (e.g., <code>translate()</code>, <code>scale()</code>, <code>rotate()</code>, <code>skew()</code>)</li>
            <li><code>opacity</code></li>
        </ul>
        <p class="tw-text-center"><strong>Hover over this box:</strong> Notice how smooth the animation is. It primarily animates \`transform\` and \`opacity\`.</p>
        <div class="performance-box good-props">
            Good Props (GPU)
        </div>

        <h3>Properties to Avoid Animating (Can Trigger Layout/Paint):</h3>
        <p>Animating these properties can force the browser to recalculate the layout of the entire page or repaint elements on every frame, leading to "jank" (stuttering) animations.</p>
        <ul>
            <li><code>width</code>, <code>height</code></li>
            <li><code>margin</code>, <code>padding</code></li>
            <li><code>top</code>, <code>left</code>, <code>bottom</code>, <code>right</code> (unless <code>position: absolute/fixed</code> and only one changes)</li>
            <li><code>font-size</code>, <code>line-height</code></li>
            <li><code>border-radius</code>, <code>box-shadow</code> (can be okay if simple, but complex ones can be expensive)</li>
        </ul>
        <p class="tw-text-center"><strong>Hover over this box:</strong> You might notice it's less smooth, especially on slower devices, as it animates properties that trigger layout and paint.</p>
        <div class="performance-box bad-props">
            Bad Props (CPU)
        </div>

        <h2>The \`will-change\` Property: A Hint for Optimization</h2>
        <p><code>will-change</code> tells the browser what properties you expect to animate on an element. This allows the browser to perform some optimizations ahead of time.
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.my-element {
    will-change: transform, opacity; /* Inform the browser */
}
        </pre>
        <p class="tw-text-red-600 tw-font-bold">
            Caution: Use \`will-change\` sparingly! Overuse can lead to performance *decreases* by consuming too many resources. Apply it only to elements that actually animate.
        </p>

        <h2>Accessibility: Respect \`prefers-reduced-motion\`</h2>
        <p>Users can set a preference in their operating system to reduce or eliminate non-essential animations due to motion sensitivity, cognitive overload, or other reasons. Always honor this preference.</p>
        <p>Use the \`@media (prefers-reduced-motion: reduce)\` media query to disable or simplify your transitions:</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
@media (prefers-reduced-motion: reduce) {
    .my-animated-element {
        transition: none !important; /* Instantly apply changes */
    }
}
        </pre>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            <strong>Test it:</strong> Enable "Reduce motion" in your OS settings (e.g., Windows: Settings > Accessibility > Visual effects > Animation effects; macOS: System Settings > Accessibility > Display > Reduce motion) and refresh this page. The demo boxes should now change instantly.
        </p>

        <h2>General Tips for Transitions:</h2>
        <ul>
            <li><strong>Keep it subtle:</strong> Less is often more. Subtle feedback is usually preferred over flashy animations.</li>
            <li><strong>Consider user intent:</strong> Do transitions help or hinder the user's task?</li>
            <li><strong>Don't rely solely on transitions for information:</strong> Ensure content is accessible even if transitions fail or are disabled.</li>
            <li><strong>Test on real devices:</strong> Emulators are good, but real-world performance on actual devices (especially mobile) is crucial.</li>
        </ul>
    </div>
</body>
</html>`;

export default function CSSTransitionsTutorial() {
  const page = 32; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/C8A2C8/8A3F8A?text=Deep+Dive+into+CSS+Transitions"
              alt="CSS Transitions Deep Dive"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Transitions: Smooth, Elegant State Changes ✨
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              In web design, abrupt changes in visual properties can be jarring.
              CSS Transitions provide a simple yet powerful way to make these
              changes fluid and aesthetically pleasing, enhancing the overall
              user experience.
            </p>

            {/* 1. Introduction: What are CSS Transitions? */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. What are CSS Transitions?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                At its simplest, a CSS Transition allows you to define *how* a
                CSS property should change its value over time, rather than
                instantly. Imagine a button that changes color when hovered
                over. Without a transition, the color swap is immediate. With a
                transition, you can make that color change smoothly fade or
                slide into place.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                They are perfect for animating between two distinct states of an
                element, such as:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  A button's background changing color on `:hover`.
                </li>
                <li className="tw:leading-relaxed!">
                  An image growing slightly when focused.
                </li>
                <li className="tw:leading-relaxed!">
                  A navigation menu sliding open when a class is added via
                  JavaScript.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Transitions make your interfaces feel more interactive,
                responsive, and polished.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. The Core Transition Properties (In Detail) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. The Core `transition` Properties: Your Animation Control
                Panel
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                To define a transition, you apply these properties to the
                element in its *default* state (the state it transitions
                *from*).
              </p>

              <h3 className="tw:text-xl! tw:font-bold!  tw:mb-3! tw:mt-4! tw:text-red-600!">
                `transition-property`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This specifies *which* CSS property or properties will be
                animated. If a property is not listed here, its change will be
                instant.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `all`: (Default) Transitions *all* animatable CSS properties.
                  Convenient but can sometimes be less performant if many
                  properties are changing.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`.element { transition-property: all; }`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  Specific property name(s): List one or more properties,
                  separated by commas. This is generally recommended for better
                  control and potential performance.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`.element { transition-property: background-color; }
.another-element { transition-property: opacity, transform; }`}
                  </pre>
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:mb-3! tw:mt-4! tw:text-red-600!">
                `transition-duration`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This defines how long the transition animation should take to
                complete one full cycle. Without a duration, there is no
                animation.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  Values are in seconds (`s`) or milliseconds (`ms`).
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`.element { transition-duration: 0.5s; } /* half a second */
.element { transition-duration: 300ms; } /* 300 milliseconds */`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  You can specify different durations for multiple properties
                  (matching the order of `transition-property`).
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold!  tw:mb-3! tw:mt-4! tw:text-red-600!">
                `transition-timing-function`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This controls the speed curve of the transition – how it
                accelerates and decelerates over its duration. This
                significantly impacts the "feel" of your animation.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  **Keywords:**
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-1!">
                    <li>
                      `ease` (default): Starts slow, speeds up in the middle,
                      ends slow.
                    </li>
                    <li>`linear`: Constant speed from start to end.</li>
                    <li>`ease-in`: Starts slow, then speeds up.</li>
                    <li>`ease-out`: Starts fast, then slows down.</li>
                    <li>`ease-in-out`: Slow start, fast middle, slow end.</li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed! tw:font-semibold!">
                  `cubic-bezier(x1, y1, x2, y2)`: The most powerful. Allows you
                  to define a custom speed curve by controlling two points on a
                  Bezier curve.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`.element { transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); }`}
                  </pre>
                  <p className="tw:text-sm! tw:text-gray-600! tw:mt-1!">
                    A fantastic visual tool for `cubic-bezier()` is{" "}
                    <a
                      href="https://cubic-bezier.com/"
                      target="_blank"
                      className="tw:text-blue-500 hover:tw-underline"
                    >
                      cubic-bezier.com
                    </a>
                    .
                  </p>
                </li>
                <li className="tw:leading-relaxed! tw:font-semibold!">
                  `steps(integer, [start|end])`: Transitions in a specified
                  number of discrete steps, rather than smoothly. `start` makes
                  the jump at the beginning of each step, `end` (default) at the
                  end.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`.element { transition-timing-function: steps(5, end); }`}
                  </pre>
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold!  tw:mb-3! tw:mt-4! tw:text-red-600!">
                `transition-delay`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This property specifies a delay before the transition animation
                actually begins.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  Values are in seconds (`s`) or milliseconds (`ms`).
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`.element { transition-delay: 0.2s; } /* wait 200ms before starting */`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  Useful for staggering animations or creating a slight pause.
                </li>
              </ul>
              <p className="tw:text-center tw:text-xl tw:text-gray-700 tw:font-bold tw:mt-8">
                See these core properties in action in the examples below!
              </p>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. The `transition` Shorthand Property */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. The `transition` Shorthand Property: Keep it Concise
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Instead of writing out each `transition-` property individually,
                you can use the `transition` shorthand, which is the most common
                way to define transitions.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.element {
    transition: [property] [duration] [timing-function] [delay];
}`}
              </pre>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  **Order matters:** Duration *must* come before delay if both
                  are specified. If only one time value is given, it's assumed
                  to be the duration.
                </li>
                <li className="tw:leading-relaxed! tw:font-semibold!">
                  **Multiple properties:** Separate multiple shorthand
                  declarations with a comma.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mt-2!">
                    {`.button {
    transition: background-color 0.3s ease-in-out,
                transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Different timing/duration for transform */
}`}
                  </pre>
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                How Transitions Are Triggered
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A transition starts when a CSS property value changes. This
                change can be initiated in several ways:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Pseudo-classes:
                  </strong>{" "}
                  This is the most common and simplest way. When a user
                  interacts with an element, its state changes, and the
                  associated styles are applied.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-1!">
                    <li>`:hover`: Mouse cursor is over the element.</li>
                    <li>
                      `:focus`: Element has received focus (e.g., input fields,
                      buttons).
                    </li>
                    <li>
                      `:active`: Element is being activated (e.g., mouse button
                      pressed down).
                    </li>
                    <li>`:checked`: For checkboxes or radio buttons.</li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Class Toggling via JavaScript:
                  </strong>{" "}
                  For more dynamic or complex interactions, you can use
                  JavaScript to add or remove a class on an element. The CSS for
                  that class will define the "new state," and the transition
                  will apply.
                  <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-2!">
                    {`/* CSS */
.my-element { transition: all 0.5s ease; }
.my-element.is-open { width: 300px; opacity: 1; }

/* JavaScript */
const el = document.getElementById('myElement');
el.classList.toggle('is-open'); // This triggers the transition`}
                  </pre>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Direct `style` Property Changes (JavaScript):
                  </strong>{" "}
                  While less common for general transitions, changing
                  `element.style.propertyName` directly via JavaScript will also
                  trigger a transition if one is defined for that property.
                </li>
              </ul>
              <p className="tw:text-center tw:text-xl tw:text-gray-700 tw:font-bold tw:mt-8">
                Explore how the shorthand works and different triggers in the
                code examples!
              </p>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 4. Practical Use Cases and Examples */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                4. Practical Use Cases & Common Scenarios
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Transitions are fundamental for creating modern, interactive web
                interfaces. Here are some ubiquitous applications:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Button & Link Hover Effects:
                  </strong>{" "}
                  Smoothly changing background, border, text color, or a subtle
                  `transform` like `scale()` or `translateY()`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Navigation Underlines/Highlights:
                  </strong>{" "}
                  A sliding underline or a highlight that expands when a
                  navigation link is hovered.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Card Components:
                  </strong>{" "}
                  Adding `box-shadow` to create a "lift" effect, or `transform:
                  scale()` to slightly enlarge a card on hover.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Form Input Focus:
                  </strong>{" "}
                  Changing border color or adding a `box-shadow` glow when an
                  input field is clicked or tabbed into.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Image Overlays:
                  </strong>{" "}
                  Fading in an overlay with text or icons when an image is
                  hovered.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Accordion/Toggle Content:
                  </strong>{" "}
                  Smoothly expanding/collapsing sections (though `height` can
                  cause reflows, `max-height` with `overflow: hidden` is a
                  common trick for this).
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 5. Best Practices & Considerations for Transitions */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                5. Best Practices: Performance & Accessibility
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Smooth, performant transitions are crucial for a great user
                experience. Not all CSS properties animate equally well.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Performance: Choose Your Properties Wisely!
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The browser renders pages through a pipeline (Style {`->`}{" "}
                Layout {`->`} Paint {`->`} Composite). Animating properties that
                only require the "Composite" stage is highly efficient because
                it leverages the GPU.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Favor these for smooth transitions (GPU-accelerated):
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-1!">
                    <li>
                      `transform` (e.g., `translateX()`, `scale()`, `rotate()`)
                    </li>
                    <li>`opacity`</li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    Be cautious animating these (can trigger Layout/Paint,
                    causing "jank"):
                  </strong>
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-1!">
                    <li>`width`, `height`, `margin`, `padding`</li>
                    <li>
                      `top`, `left`, `bottom`, `right` (if not `position:
                      absolute` or `fixed`)
                    </li>
                    <li>`font-size`, `line-height`</li>
                    <li>
                      Complex `box-shadow` or `border-radius` (simple ones are
                      often fine).
                    </li>
                  </ul>
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                The `will-change` Property: A Hint, Not a Command
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                `will-change` hints to the browser about which properties you
                intend to animate. This allows the browser to perform early
                optimizations.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.my-element-that-will-animate {
    will-change: transform, opacity;
}`}
              </pre>
              <p className="tw:text-red-600! tw:font-bold! tw:leading-relaxed! tw:mb-4!">
                **Important:** Use `will-change` sparingly and strategically.
                Overuse can actually degrade performance by consuming too many
                resources unnecessarily. Apply it only to elements that *will*
                animate, and ideally, remove it after the animation is complete
                (if using JavaScript).
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Accessibility: `prefers-reduced-motion`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Many users, especially those with vestibular disorders or ADHD,
                prefer or require minimal motion on websites. Always respect
                this preference using the `prefers-reduced-motion` media query.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`@media (prefers-reduced-motion: reduce) {
    /* Instantly apply changes instead of transitioning */
    .my-animated-element {
        transition: none !important;
    }
}`}
              </pre>
              <p className="tw:text-center tw:text-xl tw:text-gray-700 tw:font-bold tw:mt-8">
                See these performance and accessibility best practices in the
                final code example!
              </p>
            </section>

            <CodeReviewPager code={section3} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Adding Polish with Transitions
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                CSS Transitions are an indispensable tool for crafting modern,
                engaging, and user-friendly web interfaces. They allow you to
                add subtle or pronounced visual feedback to interactions, making
                your designs feel alive and intuitive.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                By understanding the core properties, leveraging the shorthand,
                and prioritizing performance and accessibility, you'll be able
                to create delightful and smooth experiences for all your users.
                Practice is key – experiment with different properties,
                durations, and timing functions to find the perfect "feel" for
                your designs!
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
