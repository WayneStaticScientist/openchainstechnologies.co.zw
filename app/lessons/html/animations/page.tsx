import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Animations - OpenChains Technologies",
  description:
    "Learn CSS animations with OpenChains Technologies. Step-by-step tutorials and resources.",
  openGraph: {
    type: "website",
    url: `${baseUrl}/lessons/html/animations`,
    title: "CSS Animations - OpenChains Technologies",
    description:
      "Learn CSS animations with OpenChains Technologies. Step-by-step tutorials and resources.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Animations - OpenChains Technologies",
    description:
      "Learn CSS animations with OpenChains Technologies. Step-by-step tutorials and resources.",
  },
  keywords: ["CSS animations", "web development", "OpenChains Technologies"],
  alternates: {
    canonical: `${baseUrl}/lessons/html/animations`,
  },
  metadataBase: new URL(baseUrl),
};
// Code Example 1: Introduction, @keyframes, and Basic Properties
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations Tutorial: Keyframes & Basics</title>
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

        /* --- Basic Animation Box Styling --- */
        .animation-box {
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
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            will-change: transform, opacity, background-color; /* Performance hint */
        }

        /* --- @keyframes Rule Examples --- */

        /* Define a simple "fade-in" animation */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* Define a "slide-in-left" animation */
        @keyframes slideInLeft {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            50% { /* Intermediate step */
                transform: translateX(20px);
                opacity: 0.5;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }

        /* Define a "pulse" animation */
        @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
        }

        /* --- Basic Animation Property Examples --- */

        /* Animation-name & animation-duration */
        .box-fade-in {
            background-color: #2ecc71;
            animation-name: fadeIn;
            animation-duration: 2s; /* Takes 2 seconds to complete */
        }

        /* animation-iteration-count */
        .box-pulse-infinite {
            background-color: #e74c3c;
            animation-name: pulse;
            animation-duration: 1.5s;
            animation-iteration-count: infinite; /* Repeats forever */
        }
        .box-slide-in-3x {
            background-color: #f1c40f;
            animation-name: slideInLeft;
            animation-duration: 1.8s;
            animation-iteration-count: 3; /* Plays 3 times */
        }

        /* animation-direction */
        .box-alternate {
            background-color: #9b59b6;
            animation-name: slideInLeft; /* Using slideInLeft animation */
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-direction: alternate; /* Plays forward then backward */
        }
        .box-reverse {
            background-color: #e67e22;
            animation-name: pulse; /* Using pulse animation */
            animation-duration: 1s;
            animation-iteration-count: 2; /* Plays twice */
            animation-direction: reverse; /* Plays from 100% to 0% */
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Animations: Bringing Elements to Life</h1>
        <p>CSS Animations allow you to define a sequence of styles that an element should go through over a specific duration. Unlike transitions, animations don't require a state change (like a hover) to trigger; they can play automatically, loop, and have complex multi-step sequences.</p>

        <h2>The Two Core Components of CSS Animations:</h2>
        <p>A CSS animation consists of two main parts:</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><strong class="tw:font-semibold! tw:text-purple-600!"><code>@keyframes</code> Rule:</strong> This is where you define the animation sequence itself. You specify the styles at different points (keyframes) of the animation.</li>
            <li class="tw:leading-relaxed!"><strong class="tw:font-semibold! tw:text-purple-600!"><code>animation</code> Property (on the element):</strong> This is applied to the HTML element you want to animate. It links the element to a <code>@keyframes</code> rule and controls how the animation behaves (duration, iterations, direction, etc.).</li>
        </ul>

        <h2>1. Defining the Animation Sequence: The \`@keyframes\` Rule</h2>
        <p>The <code>@keyframes</code> rule is used to create the animation. You give it a name, and then inside, you define the styles at specific percentages of the animation's duration (<code>0%</code> to <code>100%</code>, or shorthand <code>from</code> and <code>to</code>).</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
@keyframes &lt;animation-name&gt; {
    0%   { /* Styles at the start */ }
    50%  { /* Styles halfway through */ }
    100% { /* Styles at the end */ }
}
/* OR using from/to for simple start/end animations */
@keyframes &lt;animation-name&gt; {
    from { /* Styles at 0% */ }
    to   { /* Styles at 100% */ }
}
        </pre>
        <p class="tw-text-center tw-text-xl tw-text-gray-700 tw-font-bold tw-mt-8">
            See the <code>@keyframes</code> definitions in the CSS of this page!
        </p>

        <h2>2. Applying and Controlling the Animation: The \`animation\` Properties</h2>
        <p>Once you've defined an <code>@keyframes</code> rule, you apply it to an element using \`animation\` properties.</p>

        <h3>\`animation-name\`</h3>
        <p>Specifies the name of the \`@keyframes\` rule to use. Without this, no animation will play.</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.my-element { animation-name: myAnimationName; }
        </pre>
        <div class="animation-box box-fade-in">Fade In</div>

        <h3>\`animation-duration\`</h3>
        <p>Defines how long one cycle of the animation takes to complete. Values are in seconds (\`s\`) or milliseconds (\`ms\`).</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.my-element { animation-duration: 3s; }
        </pre>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">The "Fade In" box above takes 2 seconds.</p>

        <h3>\`animation-iteration-count\`</h3>
        <p>Specifies how many times an animation should play. Can be a number or \`infinite\`.</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.my-element { animation-iteration-count: infinite; }
.my-element { animation-iteration-count: 3; }
        </pre>
        <div class="animation-box box-pulse-infinite">Pulse (Infinite)</div>
        <div class="animation-box box-slide-in-3x">Slide (3x)</div>

        <h3>\`animation-direction\`</h3>
        <p>Defines whether the animation should play forwards, backwards, or alternate between directions on each cycle.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>normal</code> (default): Plays forwards (0% to 100%).</li>
            <li class="tw:leading-relaxed!"><code>reverse</code>: Plays backwards (100% to 0%).</li>
            <li class="tw:leading-relaxed!"><code>alternate</code>: Plays forwards on odd cycles, backwards on even cycles.</li>
            <li class="tw:leading-relaxed!"><code>alternate-reverse</code>: Plays backwards on odd cycles, forwards on even cycles.</li>
        </ul>
        <pre class="tw-bg-gray-100! tw-p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.my-element { animation-direction: alternate; }
        </pre>
        <div class="animation-box box-alternate">Alternate</div>
        <div class="animation-box box-reverse">Reverse (2x)</div>
    </div>
</body>
</html>`;

// Code Example 2: More Properties and Shorthand
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations Tutorial: Advanced Properties & Shorthand</title>
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

        /* --- Animation Box Styling --- */
        .animation-box {
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
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            will-change: transform, opacity, background-color; /* Performance hint */
        }

        /* --- @keyframes Rule Definitions --- */
        @keyframes customBounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); } /* Start and end at original position */
            40% { transform: translateY(-30px); } /* Bounce up */
            60% { transform: translateY(-15px); } /* Smaller bounce up */
        }

        @keyframes slideFromTop {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        /* --- Advanced Animation Property Examples --- */

        /* animation-timing-function */
        .box-bounce {
            background-color: #e74c3c;
            animation-name: customBounce;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-out; /* Makes the bounces more natural */
        }
        .box-linear {
            background-color: #f1c40f;
            animation-name: customBounce; /* Same keyframes */
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear; /* Constant speed - looks unnatural for bounce */
        }

        /* animation-delay */
        .box-delayed {
            background-color: #9b59b6;
            animation-name: slideFromTop;
            animation-duration: 1s;
            animation-iteration-count: 1;
            animation-delay: 1.5s; /* Animation starts after 1.5 seconds */
            opacity: 0; /* Hide initially until animation starts */
        }

        /* animation-fill-mode */
        .box-forwards {
            background-color: #34495e;
            animation-name: slideFromTop;
            animation-duration: 1s;
            animation-iteration-count: 1;
            animation-delay: 0.5s;
            animation-fill-mode: forwards; /* Element retains 100% keyframe styles after animation */
            opacity: 0; /* Hide initially */
            margin-bottom: 20px; /* Space for the next box */
        }
        .box-backwards {
            background-color: #1abc9c;
            animation-name: slideFromTop;
            animation-duration: 1s;
            animation-iteration-count: 1;
            animation-delay: 0.5s;
            animation-fill-mode: backwards; /* Element starts with 0% keyframe styles before animation */
        }
        .box-both {
            background-color: #d35400;
            animation-name: blink;
            animation-duration: 1s;
            animation-iteration-count: 3; /* Ends at opacity 1 */
            animation-delay: 0.5s;
            animation-fill-mode: both; /* Applies 'forwards' and 'backwards' behavior */
            opacity: 0.5; /* Initial state, will go to 0% keyframe before delay then 100% after */
        }

        /* animation-play-state */
        .box-paused {
            background-color: #3498db;
            animation-name: customBounce;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-play-state: paused; /* Animation starts paused */
            border: 3px dashed white; /* Visual cue for paused state */
        }
        .box-paused:hover {
            animation-play-state: running; /* Resumes on hover */
        }

        /* --- Animation Shorthand --- */
        .shorthand-box {
            background-color: #8e44ad;
            /* Shorthand: name duration timing-function delay iteration-count direction fill-mode play-state */
            animation: pulse 1.5s ease-in-out infinite alternate forwards;
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Animations: Advanced Properties & Shorthand</h1>
        <p>Beyond the basic control, CSS Animations offer fine-grained adjustments for timing, delays, how elements behave before and after an animation, and even pausing/resuming them.</p>

        <h2>\`animation-timing-function\`</h2>
        <p>Controls the speed curve of the animation over its duration, similar to \`transition-timing-function\`.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!">Keywords: \`ease\` (default), \`linear\`, \`ease-in\`, \`ease-out\`, \`ease-in-out\`.</li>
            <li class="tw:leading-relaxed!">\`cubic-bezier(x1, y1, x2, y2)\`: Custom speed curves.</li>
            <li class="tw:leading-relaxed!">\`steps(integer, [start|end])\`: Discrete jumps.</li>
        </ul>
        <p class="tw-text-center">Observe the difference in the bounce animation with \`ease-out\` vs. \`linear\`:</p>
        <div class="animation-box box-bounce">Ease-Out Bounce</div>
        <div class="animation-box box-linear">Linear Bounce</div>

        <h2>\`animation-delay\`</h2>
        <p>Specifies a time delay before the animation starts playing. Values in seconds (\`s\`) or milliseconds (\`ms\`).</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.my-element { animation-delay: 1.5s; }
        </pre>
        <div class="animation-box box-delayed">Delayed Start (1.5s)</div>

        <h2>\`animation-fill-mode\`</h2>
        <p>Defines how styles are applied to the element *before* the animation begins and *after* it ends.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>none</code> (default): Animation styles are not applied before/after the animation. Element reverts to original styles.</li>
            <li class="tw:leading-relaxed!"><code>forwards</code>: Element retains the computed styles of the *last* keyframe (100% or \`to\`) when the animation ends.</li>
            <li class="tw:leading-relaxed!"><code>backwards</code>: Element applies the computed styles of the *first* keyframe (0% or \`from\`) during its \`animation-delay\` period.</li>
            <li class="tw:leading-relaxed!"><code>both</code>: Applies both \`forwards\` and \`backwards\` behavior.</li>
        </ul>
        <p class="tw-text-center">See how elements remain in their end state or start in their initial state:</p>
        <div class="animation-box box-forwards">Forwards (remains)</div>
        <div class="animation-box box-backwards">Backwards (starts with \`from\` styles before delay)</div>
        <div class="animation-box box-both">Both (starts \`from\`, ends \`to\`)</div>

        <h2>\`animation-play-state\`</h2>
        <p>Allows you to pause or resume an animation.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>running</code> (default): Animation is playing.</li>
            <li class="tw:leading-relaxed!"><code>paused</code>: Animation is paused. Useful with \`:hover\` or JavaScript.</li>
        </ul>
        <div class="animation-box box-paused">Paused (Hover to Play)</div>

        <h2>The \`animation\` Shorthand Property</h2>
        <p>Just like transitions, you can combine all animation sub-properties into a single \`animation\` shorthand property for brevity. The order is generally important, especially for duration and delay.</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode] [play-state];
/* If two time values are provided, the first is duration, the second is delay. */
animation: pulse 1.5s ease-in-out 0.5s infinite alternate forwards running;
        </pre>
        <div class="animation-box shorthand-box">Shorthand</div>
    </div>
</body>
</html>`;

// Code Example 3: Practical Examples & Best Practices
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations Tutorial: Examples & Best Practices</title>
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

        /* --- Keyframe Definitions for Examples --- */
        @keyframes spinner {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        /* --- Examples --- */

        /* Loading Spinner */
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #3498db;
            border-radius: 50%;
            margin: 30px auto;
            animation: spinner 1s linear infinite; /* Shorthand */
            will-change: transform;
        }

        /* Staggered Text Animation */
        .staggered-text {
            text-align: center;
            font-size: 2em;
            margin-top: 40px;
            display: flex;
            justify-content: center;
        }
        .staggered-text span {
            display: inline-block; /* Crucial for transform to work */
            opacity: 0;
            animation: fadeInDown 0.6s ease-out forwards;
        }
        /* Apply delays to each span */
        .staggered-text span:nth-child(1) { animation-delay: 0s; }
        .staggered-text span:nth-child(2) { animation-delay: 0.1s; }
        .staggered-text span:nth-child(3) { animation-delay: 0.2s; }
        .staggered-text span:nth-child(4) { animation-delay: 0.3s; }
        .staggered-text span:nth-child(5) { animation-delay: 0.4s; }
        .staggered-text span:nth-child(6) { animation-delay: 0.5s; }
        .staggered-text span:nth-child(7) { animation-delay: 0.6s; }
        .staggered-text span:nth-child(8) { animation-delay: 0.7s; }
        .staggered-text span:nth-child(9) { animation-delay: 0.8s; }
        .staggered-text span:nth-child(10) { animation-delay: 0.9s; }

        /* Waving Flag Animation */
        .waving-flag {
            width: 200px;
            height: 100px;
            background-color: #e74c3c;
            border: 2px solid #c0392b;
            margin: 50px auto;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            color: white;
            perspective: 500px; /* For 3D wave effect */
            transform-style: preserve-3d;
            overflow: hidden; /* Hide parts that go off bounds */
        }
        .flag-segment {
            width: 10%; /* 10 segments for the wave */
            height: 100%;
            float: left; /* Arrange segments side-by-side */
            background-color: inherit;
            animation: wave 1.5s ease-in-out infinite alternate;
            will-change: transform;
        }
        .flag-segment:nth-child(1) { animation-delay: 0s; }
        .flag-segment:nth-child(2) { animation-delay: 0.1s; }
        .flag-segment:nth-child(3) { animation-delay: 0.2s; }
        .flag-segment:nth-child(4) { animation-delay: 0.3s; }
        .flag-segment:nth-child(5) { animation-delay: 0.4s; }
        .flag-segment:nth-child(6) { animation-delay: 0.5s; }
        .flag-segment:nth-child(7) { animation-delay: 0.6s; }
        .flag-segment:nth-child(8) { animation-delay: 0.7s; }
        .flag-segment:nth-child(9) { animation-delay: 0.8s; }
        .flag-segment:nth-child(10) { animation-delay: 0.9s; }

        /* --- Best Practices --- */
        .performant-box {
            width: 150px;
            height: 150px;
            background-color: #34495e;
            color: white;
            margin: 30px auto;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            animation: spinner 3s linear infinite; /* Using spinner keyframes */
            will-change: transform; /* Hint for performance */
        }

        @media (prefers-reduced-motion: reduce) {
            .spinner, .staggered-text span, .flag-segment, .performant-box {
                animation: none !important; /* Disable all animations */
                transform: none !important; /* Reset transforms to final state if needed */
                opacity: 1 !important; /* Ensure visibility for fade-ins */
                will-change: auto !important; /* Remove performance hint */
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Animations: Practical Examples & Best Practices</h1>
        <p>Let's look at some common and advanced use cases for CSS animations, and discuss crucial best practices for performance and accessibility.</p>

        <h2>Practical Examples:</h2>

        <h3>1. Loading Spinner / Progress Indicator:</h3>
        <p class="tw-text-center">A classic use case for an infinite, linear rotation.</p>
        <div class="spinner"></div>

        <h3>2. Staggered Text Entrance:</h3>
        <p class="tw-text-center">Animating individual characters or words with different delays for a cool effect.</p>
        <div class="staggered-text">
            <span>A</span><span>n</span><span>i</span><span>m</span><span>a</span><span>t</span><span>e</span><span>d</span><span>&nbsp;</span><span>T</span><span>e</span><span>x</span><span>t</span>
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">Each letter is a <code>span</code> with \`animation-delay\` applied using \`nth-child\`.</p>

        <h3>3. Waving Element (Multiple Segment Animation):</h3>
        <p class="tw-text-center">A more complex example using multiple elements with staggered delays to create a continuous wave.</p>
        <div class="waving-flag">
            <div class="flag-segment"></div>
            <div class="flag-segment"></div>
            <div class="flag-segment"></div>
            <div class="flag-segment"></div>
            <div class="flag-segment"></div>
            <div class="flag-segment"></div>
            <div class="flag-segment"></div>
            <div class="flag-segment"></div>
            <div class="flag-segment"></div>
            <div class="flag-segment"></div>
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            This creates a simple "flag waving" effect by animating the \`transform: translateY\` of individual segments.
        </p>

        <h2>Best Practices for CSS Animations:</h2>

        <h3>1. Performance: Animate \`transform\` and \`opacity\`</h3>
        <p>Just like with transitions, animating properties that can be GPU-accelerated leads to the smoothest animations (60fps). These are typically \`transform\` and \`opacity\`.</p>
        <ul>
            <li><strong>Avoid animating properties that trigger layout or paint operations:</strong>
                <ul>
                    <li><code>width</code>, <code>height</code>, <code>margin</code>, <code>padding</code>, <code>top</code>, <code>left</code>, etc. (trigger layout/reflow)</li>
                    <li><code>font-size</code>, <code>line-height</code>, <code>box-shadow</code>, <code>border-radius</code> (trigger paint/repaint)</li>
                </ul>
                Animating these can cause "jank" (stuttering) because the browser has to recalculate and redraw the page on every frame.
            </li>
        </ul>
        <p class="tw-text-center">This box uses a \`transform\` animation, making it highly performant:</p>
        <div class="performant-box">Performant</div>

        <h3>2. \`will-change\` Property: A Hint for Optimization (Use Sparingly!)</h3>
        <p>The \`will-change\` CSS property allows you to tell the browser which properties are expected to change. This allows the browser to optimize rendering ahead of time.</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.my-animating-element {
    will-change: transform, opacity; /* Inform browser of upcoming changes */
}
        </pre>
        <p class="tw-text-red-600 tw-font-bold">
            Caution: Do not overuse <code>will-change</code>! It can consume significant resources if applied to too many elements. Use it only on elements that are actively animating or about to animate.
        </p>

        <h3>3. Accessibility: Respect \`prefers-reduced-motion\`</h3>
        <p>Many users, especially those with vestibular disorders, motion sickness, or cognitive conditions, can be adversely affected by excessive or rapid animations. Always respect their operating system preference to reduce motion.</p>
        <p>Use the <code>@media (prefers-reduced-motion: reduce)</code> media query to disable or significantly simplify animations:</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
@media (prefers-reduced-motion: reduce) {
    .my-animated-element {
        animation: none !important; /* Disable the animation */
        transform: none !important; /* Ensure no residual transform */
        opacity: 1 !important; /* Ensure element is visible if it was animated to appear */
    }
}
        </pre>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            <strong>Test it:</strong> Enable "Reduce motion" in your OS settings (e.g., Windows: Settings > Accessibility > Visual effects > Animation effects; macOS: System Settings > Accessibility > Display > Reduce motion) and refresh this page. All animations should stop or appear instantly.
        </p>

        <h3>4. Debugging Animations</h3>
        <p>Modern browser developer tools (e.g., Chrome DevTools, Firefox Developer Tools) have an "Animations" panel that is incredibly useful for debugging CSS animations. You can:
            <ul>
                <li>Inspect all running animations on the page.</li>
                <li>Pause, resume, and scrub through animations frame by frame.</li>
                <li>Adjust timing functions and delays in real-time.</li>
            </ul>
        </p>

        <h3>5. Keep it Purposeful</h3>
        <p>Animations should enhance the user experience, not detract from it. Use them to provide feedback, guide the user's eye, or simply add delight. Avoid excessive or unnecessary animations that can feel distracting or slow down the interface.</p>
    </div>
</body>
</html>`;

export default function CSSAnimationsTutorial() {
  const page = 34; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/C0E0F0/4080A0?text=CSS+Animations:+Bringing+Web+to+Life"
              alt="CSS Animations"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Animations: Breathing Life into Your Webpages ✨
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Beyond simple state changes with transitions, CSS Animations offer
              a powerful way to create complex, multi-step, and looping visual
              sequences directly in your stylesheets, without needing
              JavaScript.
            </p>

            {/* 1. Introduction to CSS Animations */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. What are CSS Animations?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                CSS Animations allow you to define a sequence of changes to CSS
                properties over a specified duration. Unlike transitions, which
                are triggered by a change in an element's state (like `:hover`
                or adding a class), animations can run automatically and
                endlessly.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                They are perfect for:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  Creating loading spinners and progress indicators.
                </li>
                <li className="tw:leading-relaxed!">
                  Implementing repeated visual feedback (e.g., a pulsing
                  button).
                </li>
                <li className="tw:leading-relaxed!">
                  Crafting complex entrance/exit effects for elements.
                </li>
                <li className="tw:leading-relaxed!">
                  Building character-by-character text reveal animations.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. The @keyframes Rule: Defining the Animation Sequence */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. The `@keyframes` Rule: Your Animation Blueprint
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The heart of any CSS animation is the `@keyframes` rule. This is
                where you define the *sequence* of styles the animation will
                progress through.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Syntax: `from`/`to` or Percentages
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You define "keyframes" at different points in time, from `0%`
                (the start of the animation) to `100%` (the end). For simple
                animations, you can use `from` (same as `0%`) and `to` (same as
                `100%`).
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`@keyframes myAnimationName {
    0%   { opacity: 0; transform: translateY(-20px); } /* Start state */
    50%  { opacity: 0.5; transform: translateY(10px); } /* Mid-point state */
    100% { opacity: 1; transform: translateY(0); } /* End state */
}

/* Or for a simpler animation: */
@keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}`}
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Each `@keyframes` rule needs a unique name, which you'll use to
                link it to an HTML element.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. The `animation` Property: Applying and Controlling */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. The `animation` Property: Bringing it to Life
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Once your `@keyframes` rule is defined, you apply it to an
                element using the `animation` property or its individual
                sub-properties.
              </p>

              <h3 className="tw:text-xl! tw:font-bold!  tw:mb-3! tw:mt-4! tw:text-purple-600!">
                `animation-name` (Required)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Links the element to the `@keyframes` rule by name.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.my-element { animation-name: fadeIn; }`}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                `animation-duration` (Required)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Specifies how long one cycle of the animation takes to complete
                (e.g., `2s` or `500ms`).
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.my-element { animation-duration: 2s; }`}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                `animation-iteration-count`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Defines how many times the animation should play. Can be a
                number (e.g., `3`) or `infinite` for continuous looping.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.my-element { animation-iteration-count: infinite; }`}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                `animation-direction`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Controls the direction of each animation cycle.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `normal` (default): Plays forwards (0% to 100%).
                </li>
                <li className="tw:leading-relaxed!">
                  `reverse`: Plays backwards (100% to 0%).
                </li>
                <li className="tw:leading-relaxed!">
                  `alternate`: Forwards on odd cycles, backwards on even cycles.
                </li>
                <li className="tw:leading-relaxed!">
                  `alternate-reverse`: Backwards on odd cycles, forwards on even
                  cycles.
                </li>
              </ul>
              <p className="tw:text-center tw:text-xl tw:text-gray-700 tw:font-bold tw:mt-8">
                See these fundamental properties in the live examples!
              </p>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 4. More Animation Properties & The Shorthand */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                4. Advanced Animation Control & Shorthand
              </h2>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                `animation-timing-function`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Defines the speed curve of the animation, just like
                `transition-timing-function`.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  Keywords: `ease`, `linear`, `ease-in`, `ease-out`,
                  `ease-in-out`.
                </li>
                <li className="tw:leading-relaxed!">
                  `cubic-bezier(x1, y1, x2, y2)`: Custom curves (use{" "}
                  <a
                    href="https://cubic-bezier.com/"
                    target="_blank"
                    className="tw:text-blue-500 hover:tw-underline"
                  >
                    cubic-bezier.com
                  </a>
                  ).
                </li>
                <li className="tw:leading-relaxed!">
                  `steps(integer, [start|end])`: Discrete steps, not smooth.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                `animation-delay`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Specifies how long to wait before the animation starts playing
                (e.g., `1s`, `500ms`).
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                `animation-fill-mode`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Controls how an element's styles are applied *before* and
                *after* the animation runs.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `none` (default): Styles are only applied during the
                  animation. Element reverts to its original styles
                  before/after.
                </li>
                <li className="tw:leading-relaxed!">
                  `forwards`: Element retains the styles defined in the `100%`
                  (`to`) keyframe after the animation ends.
                </li>
                <li className="tw:leading-relaxed!">
                  `backwards`: Element applies the styles defined in the `0%`
                  (`from`) keyframe during its `animation-delay` period.
                </li>
                <li className="tw:leading-relaxed!">
                  `both`: Combines `forwards` and `backwards` behavior.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                `animation-play-state`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Allows you to pause or resume an animation (useful with `:hover`
                or JavaScript).
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">`running` (default)</li>
                <li className="tw:leading-relaxed!">`paused`</li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-green-600;">
                The `animation` Shorthand Property
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                For conciseness, you can combine all animation properties into a
                single `animation` shorthand:
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                /* Order matters, especially duration and delay */ animation:
                [name] [duration] [timing-function] [delay] [iteration-count]
                [direction] [fill-mode] [play-state]; /* Example: */ animation:
                myPulse 1.5s ease-in-out 0.2s infinite alternate forwards
                running;
              </pre>
              <p className="tw:text-center tw:text-xl tw:text-gray-700 tw:font-bold tw:mt-8">
                Witness advanced controls and the powerful shorthand in action!
              </p>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 5. Practical Examples & Best Practices */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                5. Practical Examples & Key Best Practices
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Let's see CSS animations in common scenarios and discuss how to
                use them effectively and responsibly.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-orange-600;">
                Common Animation Examples
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Loading Spinners:
                  </strong>{" "}
                  Continuous rotation, often `infinite` and `linear`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Staggered Entrances:
                  </strong>{" "}
                  Applying `animation-delay` to multiple elements (e.g., letters
                  in a word) for a sequential reveal.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Waving Effects:
                  </strong>{" "}
                  Multiple elements animated with varying delays to simulate a
                  fluid motion.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Performance: Favor `transform` & `opacity`!
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The golden rule for smooth CSS animations (and transitions) is
                to animate properties that can be handled directly by the GPU.
                These are typically `transform` (for position, scale, rotation)
                and `opacity`.
              </p>
              <p className="tw:text-red-600! tw:font-bold! tw:leading-relaxed! tw:mb-4!">
                Avoid animating properties like `width`, `height`, `margin`,
                `padding`, `top`, `left`, `font-size`, or complex `box-shadow`
                values, especially for continuous animations. These often
                trigger expensive browser processes (layout/reflow and
                paint/repaint) on every frame, leading to "jank" or choppy
                animations.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                `will-change` Property: A Browser Hint (Use Wisely!)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                `will-change` informs the browser about properties you expect to
                change, allowing it to prepare optimizations.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.my-animating-element {
    will-change: transform, opacity; /* Inform browser */
}`}
              </pre>
              <p className="tw:text-red-600! tw:font-bold! tw:leading-relaxed! tw:mb-4!">
                **Caution:** Overuse can degrade performance by consuming too
                many resources. Only use on elements actively animating or soon
                to be animated.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Accessibility: Respect `prefers-reduced-motion`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Essential for users sensitive to motion. Always provide a
                non-animated or simplified alternative.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`@media (prefers-reduced-motion: reduce) {
    .my-animated-element {
        animation: none !important; /* Disable all animation */
        /* Ensure elements are visible if animated to appear */
        opacity: 1 !important;
        transform: none !important;
    }
}`}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                General Tips:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Test on Real Devices:
                  </strong>{" "}
                  Ensure smooth performance across different hardware.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Debugging:
                  </strong>{" "}
                  Use browser DevTools "Animations" panel to inspect, pause, and
                  scrub through animations.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Purposeful Animation:
                  </strong>{" "}
                  Animations should enhance, not distract. Subtle feedback is
                  often more effective.
                </li>
              </ul>
              <p className="tw:text-center tw:text-xl tw:text-gray-700 tw:font-bold tw:mt-8">
                Check out the practical examples and the best practices in code!
              </p>
            </section>

            <CodeReviewPager code={section3} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Animate with Confidence!
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                CSS Animations are a powerful and efficient way to add dynamic
                visual interest and enhanced user experience to your web
                projects. By mastering `@keyframes` and the various `animation`
                properties, you gain precise control over your elements'
                movements and stylistic changes.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Remember to prioritize performance by animating GPU-friendly
                properties and to always design with accessibility in mind. With
                these tools, your creativity is the only limit to bringing your
                designs to life!
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
