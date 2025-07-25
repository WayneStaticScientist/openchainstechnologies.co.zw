import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
const title = "Css Transitions Animations Tutorial";
const description =
  "Transitions animations and styles in css tutorials right here on openchains technologies | learn ";
const canonicalUrl = `${baseUrl}/lessons/html/transitions-animations`;
export const metadata = {
  title,
  description,
  keywords: "transitions , animations , styling , modern web design , styles",
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
// Code Example 1: CSS Transitions
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
            box-sizing: border-box; /* Include padding/border in element's total width/height */
        }

        .demo-box {
            width: 150px;
            height: 150px;
            background-color: #3498db;
            margin: 30px auto;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            font-size: 1.2em;
            cursor: pointer;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);

            /* --- Transition Properties Applied --- */
            transition-property: background-color, transform, border-radius; /* What properties to transition */
            transition-duration: 0.4s; /* How long the transition takes */
            transition-timing-function: ease-in-out; /* The speed curve */
            transition-delay: 0s; /* When to start the transition */

            /* Shorthand equivalent for the above four: */
            /* transition: background-color 0.4s ease-in-out, transform 0.4s ease-in-out, border-radius 0.4s ease-in-out; */
            /* Or simply: */
            /* transition: all 0.4s ease-in-out; */
        }

        /* State change on hover */
        .demo-box:hover {
            background-color: #e74c3c; /* Change color */
            transform: scale(1.1) rotate(5deg); /* Grow and rotate */
            border-radius: 50%; /* Make it round */
        }

        /* Button Example with Transition */
        .my-button {
            padding: 12px 25px;
            background-color: #2ecc71;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1em;
            cursor: pointer;
            outline: none;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            margin-top: 20px;

            /* Transitioning background and box-shadow */
            transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease-out;
        }

        .my-button:hover {
            background-color: #27ae60;
            box-shadow: 0 6px 12px rgba(0,0,0,0.2);
            transform: translateY(-2px); /* Slight lift */
        }

        .my-button:active {
            background-color: #1abc9c;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            transform: translateY(0); /* Press down effect */
        }

        /* --- Timing Functions Demo --- */
        .timing-demo-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin-top: 40px;
        }
        .timing-box {
            width: 80px;
            height: 80px;
            background-color: #f1c40f;
            border-radius: 5px;
            margin: 5px;
            text-align: center;
            line-height: 80px;
            color: #333;
            font-weight: bold;
            font-size: 0.9em;
            transition: transform 1s; /* All transition over 1s */
        }

        .timing-demo-grid:hover .timing-box {
            transform: translateX(100px); /* Move boxes on container hover */
        }

        /* Apply different timing functions */
        .timing-box.ease { transition-timing-function: ease; }
        .timing-box.linear { transition-timing-function: linear; }
        .timing-box.ease-in { transition-timing-function: ease-in; }
        .timing-box.ease-out { transition-timing-function: ease-out; }
        .timing-box.ease-in-out { transition-timing-function: ease-in-out; }
        .timing-box.cubic-bezier { transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Custom bounce */ }

        /* Multiple Properties Demo */
        .multi-prop-box {
            width: 100px;
            height: 100px;
            background-color: #9b59b6;
            margin: 50px auto;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            cursor: pointer;

            /* Transition multiple properties with different durations/delays */
            transition: background-color 0.5s ease-in,
                        width 0.8s ease-out 0.2s, /* width transitions after 0.2s delay */
                        height 0.8s ease-out 0.2s,
                        transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Springy effect */
        }

        .multi-prop-box:hover {
            background-color: #27ae60;
            width: 200px;
            height: 120px;
            transform: translateY(-10px) scale(1.05);
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Transitions: Smooth State Changes</h1>
        <p>CSS Transitions provide a way to control the speed of animation when a CSS property changes its value. Instead of an abrupt change, the property transitions smoothly over a specified duration.</p>

        <h2>The Core Transition Properties:</h2>
        <ul>
            <li><code>transition-property</code>: Which property to animate (e.g., <code>opacity</code>, <code>width</code>, <code>background-color</code>, or <code>all</code>).</li>
            <li><code>transition-duration</code>: How long the transition takes (e.g., <code>0.5s</code>, <code>200ms</code>).</li>
            <li><code>transition-timing-function</code>: The speed curve of the transition (e.g., <code>ease</code>, <code>linear</code>, <code>ease-in-out</code>, <code>cubic-bezier()</code>).</li>
            <li><code>transition-delay</code>: When the transition should start (e.g., <code>0.2s</code>).</li>
        </ul>
        <p>Or use the <strong>shorthand</strong>: <code>transition: [property] [duration] [timing-function] [delay];</code></p>

        <h3>Hover over this box to see a transition:</h3>
        <div class="demo-box">Hover Me!</div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">This box transitions its background, transform, and border-radius.</p>

        <h3>Interactive Button Transition:</h3>
        <p class="tw-text-center">Click or hover over the button to see its smooth state changes.</p>
        <button class="my-button">Click Me!</button>

        <h3>Understanding <code>transition-timing-function</code>:</h3>
        <p class="tw-text-center">Hover over the gray container below to see how each box moves with a different speed curve.</p>
        <div class="container timing-demo-grid">
            <div class="timing-box ease">ease</div>
            <div class="timing-box linear">linear</div>
            <div class="timing-box ease-in">ease-in</div>
            <div class="timing-box ease-out">ease-out</div>
            <div class="timing-box ease-in-out">ease-in-out</div>
            <div class="timing-box cubic-bezier">cubic-bezier</div>
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            <code>ease</code>: Starts slow, speeds up, ends slow (default).<br/>
            <code>linear</code>: Constant speed.<br/>
            <code>ease-in</code>: Starts slow, then speeds up.<br/>
            <code>ease-out</code>: Starts fast, then slows down.<br/>
            <code>ease-in-out</code>: Slow start, fast middle, slow end.<br/>
            <code>cubic-bezier()</code>: Custom speed curve. Try <a href="https://cubic-bezier.com/" target="_blank" class="tw-text-blue-500 hover:tw-underline">cubic-bezier.com</a>!
        </p>

        <h3>Transitioning Multiple Properties (with different durations/delays):</h3>
        <div class="multi-prop-box">Multi-Property</div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">Hover over this box. Notice how its background changes quickly, while width/height change slower and with a delay.</p>
    </div>
</body>
</html>`;

// Code Example 2: CSS Animations
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations Tutorial</title>
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

        /* --- Keyframes Definition --- */
        @keyframes bounce {
            0% { transform: translateY(0); background-color: #f1c40f; } /* Start state */
            25% { transform: translateY(-20px); } /* Bounce up */
            50% { transform: translateY(0); } /* Fall back down */
            75% { transform: translateY(-10px); } /* Smaller bounce up */
            100% { transform: translateY(0); background-color: #3498db; } /* End state, back to original position, different color */
        }

        @keyframes fadeInOut {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }

        @keyframes rotate3D {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
        }

        /* --- Animation Properties Applied --- */
        .animated-box {
            width: 150px;
            height: 150px;
            background-color: #f1c40f;
            margin: 30px auto;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #333;
            font-weight: bold;
            font-size: 1.2em;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);

            /* Linking to @keyframes and defining animation details */
            animation-name: bounce; /* The name of the @keyframes rule */
            animation-duration: 2s; /* How long one cycle takes */
            animation-timing-function: ease-in-out; /* Speed curve for each cycle */
            animation-delay: 0s; /* Delay before animation starts */
            animation-iteration-count: infinite; /* How many times it repeats (infinite, 3, etc.) */
            animation-direction: alternate; /* Plays forwards then backwards */
            animation-fill-mode: both; /* Applies styles before and after animation */
            animation-play-state: running; /* Can be paused */

            /* Shorthand for the above: */
            /* animation: bounce 2s ease-in-out 0s infinite alternate both running; */
        }

        /* Loading Spinner Example */
        .spinner {
            border: 8px solid #f3f3f3; /* Light grey */
            border-top: 8px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite; /* Spin continuously */
            margin: 40px auto;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Sequential Animation Example */
        .sequential-container {
            display: flex;
            justify-content: center;
            margin-top: 40px;
        }
        .seq-box {
            width: 80px;
            height: 80px;
            background-color: #9b59b6;
            margin: 0 10px;
            border-radius: 5px;
            opacity: 0; /* Start hidden */
            animation: fadeInOut 2s ease-in-out forwards; /* Fade in and out, stay at end state */
            animation-iteration-count: 1;
        }
        .seq-box:nth-child(1) { animation-delay: 0s; }
        .seq-box:nth-child(2) { animation-delay: 0.5s; }
        .seq-box:nth-child(3) { animation-delay: 1s; }

        /* Animation Play State Toggle (JavaScript interaction) */
        .toggle-animation-container {
            text-align: center;
            margin-top: 30px;
        }
        .pause-play-box {
            width: 100px;
            height: 100px;
            background-color: #e67e22;
            margin: 20px auto;
            border-radius: 50%;
            animation: rotate3D 3s linear infinite;
        }
        .pause-play-box.paused {
            animation-play-state: paused;
        }
        .pause-button {
            padding: 10px 20px;
            background-color: #34495e;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }

        /* Prefers Reduced Motion Media Query */
        @media (prefers-reduced-motion: reduce) {
            .animated-box, .spinner, .seq-box, .pause-play-box {
                animation: none !important; /* Disable all animations */
                background-color: #bdc3c7; /* Show a static, neutral state */
            }
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const toggleBtn = document.getElementById('toggleAnimation');
            const box = document.getElementById('pausePlayBox');

            if (toggleBtn && box) {
                toggleBtn.addEventListener('click', () => {
                    if (box.classList.contains('paused')) {
                        box.classList.remove('paused');
                        toggleBtn.textContent = 'Pause Animation';
                    } else {
                        box.classList.add('paused');
                        toggleBtn.textContent = 'Play Animation';
                    }
                });
            }
        });
    </script>
</head>
<body>
    <div class="container">
        <h1>CSS Animations: Complex Multi-Stage Effects</h1>
        <p>CSS Animations allow for more complex, multi-stage, and continuous motion compared to transitions. They are defined using <code>@keyframes</code> rules, which specify styles at different points in the animation sequence.</p>

        <h2>Defining Animation Stages with <code>@keyframes</code>:</h2>
        <p>The <code>@keyframes</code> rule defines the animation's behavior. You specify stages using percentages (<code>0%</code> to <code>100%</code>) or keywords (<code>from</code> for <code>0%</code>, <code>to</code> for <code>100%</code>).</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw-font-mono! tw:mb-4! tw:mt-2!">
@keyframes myBounce {
    0%   { transform: translateY(0px); }
    50%  { transform: translateY(-50px); }
    100% { transform: translateY(0px); }
}
        </pre>

        <h2>The Animation Properties:</h2>
        <ul>
            <li><code>animation-name</code>: Links to the <code>@keyframes</code> rule.</li>
            <li><code>animation-duration</code>: How long one cycle takes.</li>
            <li><code>animation-timing-function</code>: Speed curve for each cycle.</li>
            <li><code>animation-delay</code>: When the animation starts.</li>
            <li><code>animation-iteration-count</code>: How many times to repeat (<code>infinite</code> for endless).</li>
            <li><code>animation-direction</code>: Play direction (<code>normal</code>, <code>reverse</code>, <code>alternate</code>, <code>alternate-reverse</code>).</li>
            <li><code>animation-fill-mode</code>: Styles applied before/after animation (<code>none</code>, <code>forwards</code>, <code>backwards</code>, <code>both</code>).</li>
            <li><code>animation-play-state</code>: Pause/play animation (<code>running</code>, <code>paused</code>).</li>
        </ul>
        <p>Or use the <strong>shorthand</strong>: <code>animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode] [play-state];</code></p>

        <h3>See a "Bounce" Animation:</h3>
        <div class="animated-box">Bounce!</div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">This box uses the <code>bounce</code> animation, repeating infinitely and alternating direction.</p>

        <h3>Common Use Case: Loading Spinner</h3>
        <div class="spinner"></div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">A classic example of a continuous animation.</p>

        <h3>Sequential Animations with <code>animation-delay</code>:</h3>
        <p class="tw-text-center">Watch as these boxes appear one after another.</p>
        <div class="sequential-container">
            <div class="seq-box">1</div>
            <div class="seq-box">2</div>
            <div class="seq-box">3</div>
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">Each box applies the same animation but with a different <code>animation-delay</code>.</p>

        <h3>Controlling Animation with JavaScript (\`animation-play-state\`):</h3>
        <div class="toggle-animation-container">
            <div id="pausePlayBox" class="pause-play-box"></div>
            <button id="toggleAnimation" class="pause-button">Pause Animation</button>
            <p class="tw-text-sm tw-text-gray-500 tw-mt-2">Click the button to pause/play the rotation.</p>
        </div>

        <h2>Accessibility: \`prefers-reduced-motion\`</h2>
        <p>Remember to respect user preferences for reduced motion. Use the <code>@media (prefers-reduced-motion: reduce)</code> query to disable or simplify animations for users who have this setting enabled in their operating system.</p>
        <p class="tw-text-sm tw-text-gray-500"><strong>Try it:</strong> Enable "Reduce motion" in your OS settings (e.g., Windows: Settings > Accessibility > Visual effects > Animation effects; macOS: System Settings > Accessibility > Display > Reduce motion) and refresh this page. All animations should stop.</p>
    </div>
</body>
</html>`;

// Code Example 3: Performance & Best Practices
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animation Best Practices</title>
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

        .animated-element {
            width: 100px;
            height: 100px;
            margin: 30px auto;
            background-color: #3498db;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            font-size: 0.9em;
            border-radius: 5px;
            text-align: center;
            transition: all 0.5s ease-in-out; /* Default transition */
            will-change: transform, opacity; /* Hint to the browser for upcoming changes */
        }

        .animated-element.transform-demo:hover {
            transform: translateX(50px) scale(1.2) rotate(10deg);
            background-color: #2ecc71;
        }

        .animated-element.opacity-demo:hover {
            opacity: 0.5;
            background-color: #e74c3c;
        }

        .animated-element.bad-practice:hover {
            width: 150px; /* Changes layout */
            height: 150px; /* Changes layout */
            margin-left: 100px; /* Changes layout */
            font-size: 1.5em; /* Changes paint */
            background-color: #f39c12; /* Changes paint */
        }

        /* prefers-reduced-motion: Example (repeated for emphasis) */
        @media (prefers-reduced-motion: reduce) {
            .animated-element {
                transition: none !important; /* Disable transitions */
                animation: none !important; /* Disable animations */
                will-change: auto !important; /* Reset will-change */
            }
            .animated-element.bad-practice:hover {
                 /* Apply static changes instantly */
                width: 150px;
                height: 150px;
                margin-left: 100px;
                font-size: 1.5em;
                background-color: #bdc3c7; /* Show a neutral color */
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Performance & Best Practices for CSS Transitions/Animations</h1>
        <p>While CSS transitions and animations are powerful, using them carelessly can lead to performance issues, especially on lower-powered devices. Understanding how browsers render animations is key to making them smooth.</p>

        <h2>The Browser Rendering Pipeline & Performance:</h2>
        <p>When you animate a CSS property, the browser goes through a pipeline:</p>
        <ol>
            <li><strong>Style:</strong> Calculates the final styles for elements.</li>
            <li><strong>Layout (Reflow):</strong> Determines the geometry and position of elements. Changes to properties like <code>width</code>, <code>height</code>, <code>margin</code>, <code>padding</code>, <code>left</code>, <code>top</code> (without <code>position: absolute</code>) often trigger this. This is the most expensive step!</li>
            <li><strong>Paint:</strong> Fills in pixels for elements (colors, images, shadows, text). Changes to <code>background-color</code>, <code>color</code>, <code>box-shadow</code>, <code>border-radius</code> trigger this.</li>
            <li><strong>Composite:</strong> Draws the layers to the screen. Properties like <code>transform</code> and <code>opacity</code> can often be animated in this stage. This is the cheapest and most performant stage because it doesn't affect layout or paint.</li>
        </ol>
        <p class="tw-font-bold tw-text-red-600">Rule of Thumb: Animate properties that trigger Composite (GPU-accelerated) for best performance!</p>

        <h3>Good Practice: Animate \`transform\` and \`opacity\` (GPU-Accelerated)</h3>
        <p>These properties can often be handled directly by the GPU, leading to smoother animations at 60 frames per second (fps), preventing jank (stuttering).</p>

        <h4>Transform Demo: (Hover over to see smooth GPU animation)</h4>
        <div class="animated-element transform-demo">
            Transform (GPU)
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            This box animates <code>transform</code> (move, scale, rotate) and <code>background-color</code> (paint).
            <code>transform</code> is handled efficiently by the GPU.
        </p>

        <h4>Opacity Demo: (Hover over to see smooth GPU animation)</h4>
        <div class="animated-element opacity-demo">
            Opacity (GPU)
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            Animating <code>opacity</code> is also very performant as it often only triggers the Composite stage.
        </p>

        <h3>Bad Practice: Animate Properties that Trigger Layout/Paint (CPU-bound)</h3>
        <p>Animating properties like \`width\`, \`height\`, \`margin\`, \`padding\`, \`top\`, \`left\` (when not \`position: absolute\`), or even font-size can force the browser to recalculate the layout and repaint elements on every frame, leading to janky animations.</p>

        <h4>Layout/Paint Demo: (Hover over to see potentially janky CPU animation)</h4>
        <div class="animated-element bad-practice">
            Layout/Paint (CPU)
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            This box animates <code>width</code>, <code>height</code>, <code>margin-left</code>, and <code>font-size</code>.
            These trigger layout recalculations, which are expensive and can lead to choppiness.
        </p>

        <h2>The \`will-change\` Property: A Hint to the Browser</h2>
        <p><code>will-change</code> allows you to inform the browser ahead of time about which properties you expect to change, allowing it to optimize for those changes before they actually happen. Use sparingly, only on elements that will genuinely animate.</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw-font-mono! tw:mb-4! tw:mt-2!">
.my-animating-element {
    will-change: transform, opacity; /* Tell browser these will change */
}
        </pre>
        <p class="tw-text-sm tw-text-gray-500">
            <strong>Caution:</strong> Don't apply <code>will-change: all;</code> or apply it to too many elements. It can consume system resources if overused.
        </p>

        <h2>Accessibility: Respect \`prefers-reduced-motion\`</h2>
        <p>Always provide a way to disable or simplify animations for users who have a preference for reduced motion set in their operating system. This is a crucial accessibility best practice.</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw-font-mono! tw:mb-4! tw:mt-2!">
@media (prefers-reduced-motion: reduce) {
    .my-animated-element {
        animation: none !important;
        transition: none !important;
    }
}
        </pre>

        <h2>General Tips:</h2>
        <ul>
            <li><strong>Keep it simple:</strong> Don't overdo animations. Subtle effects are often more effective.</li>
            <li><strong>Context matters:</strong> Animations should enhance, not distract.</li>
            <li><strong>Test on real devices:</strong> Especially on older or less powerful mobile devices.</li>
            <li><strong>Use cubic-bezier.com:</strong> For custom timing functions to get the perfect feel.</li>
            <li><strong>Consider JavaScript libraries (e.g., GSAP):</strong> For very complex, choreographed animations, JS libraries offer more control, timeline management, and cross-browser consistency.</li>
        </ul>
    </div>
</body>
</html>`;

export default function CSSTransitionsAnimationsTutorial() {
  const page = 31; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/B2D8AA/4A7D3A?text=CSS+Transitions+and+Animations"
              alt="CSS Transitions and Animations Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Bringing Life to Web: CSS Transitions & Animations ✨
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              CSS Transitions and Animations are powerful tools that allow you
              to create dynamic, engaging, and interactive experiences directly
              in the browser, often without needing JavaScript. They transform
              static web pages into living interfaces.
            </p>

            {/* 1. Introduction */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. What are CSS Transitions & Animations?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                At their core, both transitions and animations enable smooth
                changes to CSS properties over time. However, they serve
                different purposes and offer varying levels of control.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    CSS Transitions:
                  </strong>{" "}
                  Create smooth, short-duration changes between two states
                  (e.g., when a user hovers over a button, or when a class is
                  added/removed via JavaScript). They are simpler to implement
                  and ideal for single, discrete changes.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    CSS Animations:
                  </strong>{" "}
                  Allow for more complex, multi-stage sequences of changes. They
                  can loop, be delayed, change direction, and don't necessarily
                  require a user interaction to start. They are ideal for
                  creating continuous effects, loaders, or orchestrated visual
                  narratives.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Why Use Them?
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Enhanced User Experience (UX):
                  </strong>{" "}
                  Provide visual feedback for user actions, making interfaces
                  feel more intuitive and responsive.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Visual Appeal:
                  </strong>{" "}
                  Add polish, dynamism, and modern aesthetics to your designs.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Performance:
                  </strong>{" "}
                  For many effects, CSS animations are more performant than
                  JavaScript-based alternatives, as browsers can optimize them
                  for hardware acceleration.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Simplification:
                  </strong>{" "}
                  Reduce the need for complex JavaScript code for common UI
                  effects.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. CSS Transitions (Detailed) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. CSS Transitions: Smooth State Changes
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A CSS transition is a gradual change from one property value to
                another. For example, changing a button's background color from
                blue to red on hover, but smoothly over 0.3 seconds instead of
                instantly.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                The Core `transition` Properties:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You define transitions on the element's *default* state (the one
                it transitions *from*).
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `transition-property`:
                  </strong>{" "}
                  Specifies which CSS property or properties should transition.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-1!">
                    <li>
                      `all`: Transitions all animatable properties. (Be
                      cautious; can sometimes be less performant than specific
                      properties).
                    </li>
                    <li>
                      Specific properties: `width`, `height`, `opacity`,
                      `background-color`, `transform`, `box-shadow`, etc.
                      (Comma-separated for multiple properties).
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `transition-duration`:
                  </strong>{" "}
                  Sets how long the transition animation should take to
                  complete.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-1!">
                    <li>
                      Values: `s` (seconds) or `ms` (milliseconds). E.g., `0.5s`
                      or `500ms`.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `transition-timing-function`:
                  </strong>{" "}
                  Describes how the speed of the transition changes over its
                  duration (its acceleration curve).
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-1!">
                    <li>
                      `ease` (default): Slow start, then fast, then slow end.
                    </li>
                    <li>`linear`: Constant speed from start to end.</li>
                    <li>`ease-in`: Slow start, then speeds up.</li>
                    <li>`ease-out`: Starts fast, then slows down.</li>
                    <li>`ease-in-out`: Slow start, fast middle, slow end.</li>
                    <li>
                      `cubic-bezier(n,n,n,n)`: A custom cubic Bezier curve.
                      Gives you full control over the speed curve. Explore{" "}
                      <a
                        href="https://cubic-bezier.com/"
                        target="_blank"
                        className="tw:text-blue-500 hover:tw-underline"
                      >
                        cubic-bezier.com
                      </a>
                      !
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `transition-delay`:
                  </strong>{" "}
                  Defines when the transition will start.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-1!">
                    <li>
                      Values: `s` (seconds) or `ms` (milliseconds). E.g., `0.2s`
                      means the transition will wait 0.2 seconds before
                      starting.
                    </li>
                  </ul>
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                The `transition` Shorthand:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can combine all four properties into a single `transition`
                shorthand property:
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.element {
    transition: [property] [duration] [timing-function] [delay];
}
/* Example: */
.button {
    transition: background-color 0.3s ease-in-out 0.1s;
}`}
              </pre>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Applying Transitions:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Transitions trigger when a CSS property value changes. Common
                triggers include:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Pseudo-classes:
                  </strong>{" "}
                  `:hover`, `:focus`, `:active`, `:checked`, etc. (Most common
                  for UI feedback).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Class Changes:
                  </strong>{" "}
                  Adding or removing a class from an element via JavaScript.
                  This is highly flexible for complex state changes.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Dynamic CSS Updates:
                  </strong>{" "}
                  Changing inline styles directly with JavaScript.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Transitioning Multiple Properties:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can transition multiple properties by separating them with
                commas:
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.element {
    transition: width 0.5s ease-out, background-color 0.3s linear 0.2s;
}`}
              </pre>
              <p className="tw:text-center tw:text-xl tw:text-gray-700 tw:font-bold tw-mt-8">
                Check out the interactive example below to see CSS Transitions
                in action!
              </p>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. CSS Animations (Detailed) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. CSS Animations: Complex Multi-Stage Effects
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                CSS Animations go beyond two-state changes. They allow you to
                define a sequence of styles (keyframes) that the browser
                animates through, giving you much more control over the flow and
                repetition of motion.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Defining Animation Stages with `@keyframes` Rule:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The heart of any CSS animation is the `@keyframes` rule. This is
                where you specify the intermediate steps (or "frames") for the
                animation.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`@keyframes my-animation-name {
    0%   { transform: translateX(0); opacity: 1; }  /* Start of animation */
    50%  { transform: translateX(100px); opacity: 0.5; } /* Mid-point */
    100% { transform: translateX(0); opacity: 1; } /* End of animation */
}`}
              </pre>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `my-animation-name`:
                  </strong>{" "}
                  A custom name you choose to refer to this animation.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Percentages (`0%` to `100%`):
                  </strong>{" "}
                  Define the state of the element at that percentage of the
                  animation's duration. `0%` can also be `from`, and `100%` can
                  be `to`.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                The `animation` Properties:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Once `keyframes` are defined, you apply them to an element using
                `animation` properties.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `animation-name`:
                  </strong>{" "}
                  The name of the `@keyframes` rule to apply.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `animation-duration`:
                  </strong>{" "}
                  How long one full cycle of the animation takes (e.g., `3s`,
                  `1500ms`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `animation-timing-function`:
                  </strong>{" "}
                  The speed curve for each cycle of the animation (same values
                  as `transition-timing-function`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `animation-delay`:
                  </strong>{" "}
                  When the animation should start (e.g., `1s` to start after 1
                  second).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `animation-iteration-count`:
                  </strong>{" "}
                  How many times the animation should play.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-1!">
                    <li>`infinite`: The animation repeats forever.</li>
                    <li>
                      A number (e.g., `3`): The animation plays that many times.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `animation-direction`:
                  </strong>{" "}
                  Defines whether the animation should play forwards, backwards,
                  or alternate.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-1!">
                    <li>`normal` (default): Plays forward each cycle.</li>
                    <li>`reverse`: Plays backward each cycle.</li>
                    <li>
                      `alternate`: Plays forward on the first cycle, then
                      backward on the second, and so on.
                    </li>
                    <li>
                      `alternate-reverse`: Plays backward on the first cycle,
                      then forward on the second, and so on.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `animation-fill-mode`:
                  </strong>{" "}
                  Specifies what styles an element should have before and after
                  the animation plays.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-1!">
                    <li>
                      `none` (default): Styles are removed after animation ends.
                    </li>
                    <li>
                      `forwards`: The element retains the computed values from
                      the last keyframe (100% or `to`).
                    </li>
                    <li>
                      `backwards`: The element applies the styles from the first
                      keyframe (0% or `from`) before the animation starts and
                      during any delay.
                    </li>
                    <li>
                      `both`: Applies `forwards` and `backwards` behavior.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `animation-play-state`:
                  </strong>{" "}
                  Controls whether the animation is `running` or `paused`.
                  Useful for JavaScript interaction.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                The `animation` Shorthand:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                All animation properties can be combined into a single
                `animation` shorthand. The order matters for duration and delay
                (duration comes first).
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.element {
    animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode] [play-state];
}
/* Example: */
.loader {
    animation: spin 1s linear infinite forwards;
}`}
              </pre>
              <p className="tw-text-center tw-text-xl tw-text-gray-700 tw-font-bold tw-mt-8">
                Dive into the live examples below to see various CSS Animations!
              </p>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 4. Comparing Transitions vs. Animations */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                4. Transitions vs. Animations: When to Use Which?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While both create motion, their distinct features make them
                suitable for different scenarios:
              </p>
              <div className="tw:grid tw:grid-cols-1 md:tw:grid-cols-2 tw:gap-8! tw:mb-6!">
                <div>
                  <h3 className="tw:text-xl! tw:font-bold!  tw:mb-3! tw:mt-4! tw:text-blue-600!">
                    CSS Transitions
                  </h3>
                  <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:space-y-2! tw:pl-4!">
                    <li className="tw:leading-relaxed!">
                      <strong>Simpler:</strong> Ideal for one-off, direct state
                      changes.
                    </li>
                    <li className="tw:leading-relaxed!">
                      <strong>Triggered:</strong> Requires an event (hover,
                      focus, class change) to start.
                    </li>
                    <li className="tw:leading-relaxed!">
                      <strong>Two States:</strong> Smoothly interpolates between
                      the "before" and "after" state.
                    </li>
                    <li className="tw:leading-relaxed!">
                      <strong>Use Cases:</strong> Button hover effects, link
                      underlines, simple menu reveals, form input focus effects.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="tw:text-xl! tw:font-bold!  tw:mb-3! tw:mt-4! tw:text-green-600!">
                    CSS Animations
                  </h3>
                  <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:space-y-2! tw:pl-4!">
                    <li className="tw:leading-relaxed!">
                      <strong>More Complex:</strong> Allows for multiple
                      intermediate steps and greater control over timing.
                    </li>
                    <li className="tw:leading-relaxed!">
                      <strong>Self-starting:</strong> Can begin automatically on
                      page load or after a delay, or be triggered.
                    </li>
                    <li className="tw:leading-relaxed!">
                      <strong>Multi-State:</strong> Defined by `@keyframes` with
                      `0%` to `100%` steps.
                    </li>
                    <li className="tw:leading-relaxed!">
                      <strong>Use Cases:</strong> Loading spinners, parallax
                      scrolling effects, character animations, subtle background
                      movements, sequential onboarding animations.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 5. Performance & Best Practices */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                5. Performance & Best Practices
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Smooth animations are crucial for a good user experience.
                Understanding the browser's rendering pipeline helps you write
                performant CSS.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Hardware Acceleration: Animate `transform` and `opacity`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When you animate certain CSS properties, the browser can offload
                the work to the GPU (Graphics Processing Unit), making
                animations buttery smooth (60 frames per second). These
                "GPU-accelerated" properties generally include:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `transform`:
                  </strong>{" "}
                  (e.g., `translate`, `scale`, `rotate`, `skew`). These only
                  affect the element's composite layer, not its layout or paint,
                  making them very efficient.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `opacity`:
                  </strong>{" "}
                  Only affects the element's paint/composite.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Avoid animating properties that trigger layout (reflow) or
                paint (repaint)** on every frame, such as `width`, `height`,
                `margin`, `padding`, `top`, `left` (unless the element is
                `position: fixed` or `absolute`), `font-size`, `box-shadow`,
                `border-radius`. These force the browser to recalculate element
                positions and repaint pixels, which is CPU-intensive and can
                cause "jank" (stuttering).
              </p>
              <p className="tw:text-center tw:text-xl tw:text-gray-700 tw:font-bold tw:mt-8">
                The examples below demonstrate the performance difference!
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                The `will-change` Property: A Performance Hint
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                `will-change` is a CSS property that provides a hint to the
                browser about what kinds of changes you are expecting on an
                element. This allows the browser to make optimizations before
                the element is actually changed.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.my-element-that-will-animate {
    will-change: transform, opacity; /* Hint that these properties will change */
}`}
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Use with caution:** Don't apply `will-change` to too many
                elements, or too broadly (e.g., `will-change: all;`). It can
                consume significant system resources if overused. Only use it on
                elements that *will* animate, and remove it after the animation
                if possible.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Accessibility: Respecting `prefers-reduced-motion`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A crucial accessibility best practice is to accommodate users
                who prefer or require less motion on their screens due to
                conditions like vestibular disorders or ADHD.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Use the `@media (prefers-reduced-motion: reduce)` media query to
                disable or simplify your animations for these users:
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`@media (prefers-reduced-motion: reduce) {
    /* Disable all animations and transitions */
    * {
        animation: none !important;
        transition: none !important;
    }
    /* Or target specific elements */
    .my-spinning-loader {
        animation: none !important;
    }
}`}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4;">
                Other Tips:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Keep it subtle:
                  </strong>{" "}
                  Over-animating can be distracting and annoying. Use animations
                  to enhance, not to overwhelm.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Test, test, test:
                  </strong>{" "}
                  Always test on a range of devices, especially older mobile
                  phones, to gauge real-world performance.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Cubic Bezier generators:
                  </strong>{" "}
                  Use tools like{" "}
                  <a
                    href="https://cubic-bezier.com/"
                    target="_blank"
                    className="tw:text-blue-500 hover:tw-underline"
                  >
                    cubic-bezier.com
                  </a>{" "}
                  to create custom `transition-timing-function` values for
                  unique animation feels.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    JavaScript for Complex Scenarios:
                  </strong>{" "}
                  For highly complex, synchronized, or interactive animations
                  (e.g., game-like experiences, scrolling triggers), JavaScript
                  libraries like{" "}
                  <a
                    href="https://greensock.com/gsap/"
                    target="_blank"
                    className="tw:text-blue-500 hover:tw-underline"
                  >
                    GSAP (GreenSock Animation Platform)
                  </a>{" "}
                  offer unparalleled control and performance, often better than
                  raw CSS for those specific use cases.
                </li>
              </ul>
            </section>

            <CodeReviewPager code={section3} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Animate Responsibly
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                CSS Transitions and Animations are powerful allies in modern web
                development. They enable you to create highly engaging and
                intuitive user interfaces. By understanding their core
                properties, knowing when to use each, prioritizing
                GPU-accelerated properties (`transform`, `opacity`), and always
                considering accessibility (especially `prefers-reduced-motion`),
                you can craft beautiful and performant web experiences.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Experiment with the code examples, tweak the values, and observe
                the results. Practice is key to mastering these exciting aspects
                of CSS!
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
