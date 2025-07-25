import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
const title = "Css Transformations";
const description =
  "Learn about css transformations right here on Openchains Getting in depth";
const canonicalUrl = `${baseUrl}/lessons/html/transformations`;
export const metadata = {
  title,
  description,
  keywords:
    "transformation, css transformations , css-transforms , styling , modern web design , styles",
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
// Code Example 1: Introduction & 2D Transforms
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 2D Transforms Tutorial</title>
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

        .transform-box {
            width: 120px;
            height: 120px;
            background-color: #3498db;
            margin: 30px auto;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            font-size: 1.1em;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.4s ease-in-out; /* Smooth transition on hover */
            will-change: transform; /* Performance hint */
        }

        /* --- Individual 2D Transform Functions --- */

        /* Translate (Move) */
        .translate-box:hover {
            transform: translateX(50px); /* Move 50px to the right */
        }
        .translate-y-box:hover {
            transform: translateY(-30px); /* Move 30px up */
        }
        .translate-xy-box:hover {
            transform: translate(30px, 30px); /* Move 30px right, 30px down */
        }

        /* Scale (Resize) */
        .scale-box:hover {
            transform: scale(1.2); /* Scale to 120% of original size */
        }
        .scale-x-box:hover {
            transform: scaleX(1.5); /* Stretch horizontally by 150% */
        }
        .scale-y-box:hover {
            transform: scaleY(0.8); /* Shrink vertically to 80% */
        }

        /* Rotate */
        .rotate-box:hover {
            transform: rotate(45deg); /* Rotate 45 degrees clockwise */
        }
        .rotate-neg-box:hover {
            transform: rotate(-30deg); /* Rotate 30 degrees counter-clockwise */
        }

        /* Skew */
        .skew-box:hover {
            transform: skewX(20deg); /* Skew 20 degrees horizontally */
        }
        .skew-y-box:hover {
            transform: skewY(-15deg); /* Skew -15 degrees vertically */
        }
        .skew-xy-box:hover {
            transform: skew(10deg, 10deg); /* Skew both X and Y */
        }

        /* --- transform-origin Demo --- */
        .origin-demo {
            width: 100px;
            height: 100px;
            background-color: #e74c3c;
            margin: 50px; /* Adjust margin for spacing */
            border-radius: 5px;
            display: inline-flex; /* To place them side-by-side */
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            font-size: 0.9em;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: transform 0.5s ease;
        }

        .origin-demo:hover {
            transform: rotate(90deg); /* All rotate 90 degrees */
        }

        /* Different transform-origin values */
        .origin-top-left { transform-origin: top left; }
        .origin-center { transform-origin: center center; /* default */ }
        .origin-bottom-right { transform-origin: 100% 100%; } /* Using percentages */
        .origin-custom { transform-origin: 20px 80px; } /* Using pixels */

        /* --- Combining Transforms Demo --- */
        .combine-box {
            width: 120px;
            height: 120px;
            background-color: #2ecc71;
            margin: 30px auto;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            font-size: 1.1em;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.6s ease-in-out;
            will-change: transform;
        }
        .combine-box:hover {
            /* Order matters! This will first scale, then rotate, then translate */
            transform: scale(1.1) rotate(20deg) translateX(30px);
        }
        .combine-box.alt:hover {
            /* This will first translate, then rotate, then scale - different result! */
            transform: translateX(30px) rotate(20deg) scale(1.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Transformations: Bending Pixels in 2D & 3D</h1>
        <p>CSS Transformations allow you to move, rotate, scale, and skew elements on a web page. Unlike positioning properties, transformations do not affect the document flow or the layout of other elements. They are applied *after* the element has been laid out, often leading to better performance as they are frequently GPU-accelerated.</p>

        <h2>The Core \`transform\` Property</h2>
        <p>All transformations are applied using the <code>transform</code> CSS property. You can apply one or more transformation functions as its value.</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw-font-mono! tw:mb-4! tw:mt-2!">
.element {
    transform: &lt;function-name&gt;(&lt;value&gt;);
}
/* Example: */
.box {
    transform: rotate(45deg);
}
        </pre>

        <h2>2D Transformations: Manipulating Elements on a Flat Plane (X & Y Axes)</h2>
        <p>2D transformations operate on the X (horizontal) and Y (vertical) axes, giving you control over movement, size, rotation, and distortion in a flat plane.</p>

        <h3>1. \`translate()\` / \`translateX()\` / \`translateY()\`: Moving Elements</h3>
        <p>Used to reposition an element from its original position. Values can be pixels (\`px\`), percentages (\`%\`), ems (\`em\`), etc.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>translateX(&lt;length&gt; | &lt;percentage&gt;)</code>: Moves horizontally. Positive values move right, negative move left.</li>
            <li class="tw:leading-relaxed!"><code>translateY(&lt;length&gt; | &lt;percentage&gt;)</code>: Moves vertically. Positive values move down, negative move up.</li>
            <li class="tw:leading-relaxed!"><code>translate(&lt;x-value&gt;, &lt;y-value&gt;)</code>: Moves both horizontally and vertically.</li>
        </ul>
        <p class="tw-text-center">Hover over these boxes:</p>
        <div class="transform-box translate-box">X</div>
        <div class="transform-box translate-y-box">Y</div>
        <div class="transform-box translate-xy-box">X,Y</div>

        <h3>2. \`scale()\` / \`scaleX()\` / \`scaleY()\`: Resizing Elements</h3>
        <p>Used to increase or decrease the size of an element. A value of <code>1</code> is the original size. Values greater than 1 enlarge, values less than 1 shrink.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>scaleX(&lt;number&gt;)</code>: Scales horizontally.</li>
            <li class="tw:leading-relaxed!"><code>scaleY(&lt;number&gt;)</code>: Scales vertically.</li>
            <li class="tw:leading-relaxed!"><code>scale(&lt;number&gt; | &lt;x-number&gt;, &lt;y-number&gt;)</code>: Scales uniformly or differently for X and Y.</li>
        </ul>
        <p class="tw-text-center">Hover over these boxes:</p>
        <div class="transform-box scale-box">Uniform</div>
        <div class="transform-box scale-x-box">ScaleX</div>
        <div class="transform-box scale-y-box">ScaleY</div>

        <h3>3. \`rotate()\`: Rotating Elements</h3>
        <p>Used to rotate an element around its central point (by default). Values are typically in degrees (<code>deg</code>).</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>rotate(&lt;angle&gt;)</code>: Rotates clockwise for positive angles, counter-clockwise for negative. Other units: <code>rad</code> (radians), <code>grad</code> (gradians), <code>turn</code> (turns).</li>
        </ul>
        <p class="tw-text-center">Hover over these boxes:</p>
        <div class="transform-box rotate-box">45deg</div>
        <div class="transform-box rotate-neg-box">-30deg</div>

        <h3>4. \`skew()\` / \`skewX()\` / \`skewY()\`: Distorting Elements</h3>
        <p>Used to distort an element along the X and/or Y axis, giving it a slanted appearance. Values are typically in degrees (<code>deg</code>).</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>skewX(&lt;angle&gt;)</code>: Skews horizontally.</li>
            <li class="tw:leading-relaxed!"><code>skewY(&lt;angle&gt;)</code>: Skews vertically.</li>
            <li class="tw:leading-relaxed!"><code>skew(&lt;x-angle&gt;, &lt;y-angle&gt;)</code>: Skews both horizontally and vertically.</li>
        </ul>
        <p class="tw-text-center">Hover over these boxes:</p>
        <div class="transform-box skew-box">SkewX</div>
        <div class="transform-box skew-y-box">SkewY</div>
        <div class="transform-box skew-xy-box">Skew X,Y</div>

        <h3>5. \`transform-origin\`: Changing the Pivot Point</h3>
        <p>By default, transformations like <code>scale()</code> and <code>rotate()</code> occur around the element's center (<code>50% 50%</code>). <code>transform-origin</code> allows you to change this pivot point.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!">Values: Keywords (<code>left</code>, <code>center</code>, <code>right</code>, <code>top</code>, <code>bottom</code>), percentages (<code>50% 50%</code>), or lengths (<code>px</code>, <code>em</code>).</li>
            <li class="tw:leading-relaxed!">Syntax: <code>transform-origin: &lt;x-axis&gt; &lt;y-axis&gt;;</code> (e.g., <code>top left</code>, <code>20% 80%</code>, <code>10px 20px</code>).</li>
        </ul>
        <p class="tw-text-center">Hover over these boxes to see how <code>transform-origin</code> changes the rotation point:</p>
        <div class="origin-demo origin-top-left">Top Left</div>
        <div class="origin-demo origin-center">Center (Default)</div>
        <div class="origin-demo origin-bottom-right">Bottom Right</div>
        <div class="origin-demo origin-custom">20px 80px</div>

        <h3>6. Combining Multiple 2D Transforms: Order Matters!</h3>
        <p>You can apply multiple transform functions to a single element by listing them in the <code>transform</code> property. The order in which you list them is crucial, as transformations are applied sequentially from left to right.</p>
        <p class="tw-text-center">Hover over these boxes to see how order changes the final result:</p>
        <div class="transform-box combine-box">Scale then Rotate then Translate</div>
        <div class="transform-box combine-box alt">Translate then Rotate then Scale</div>
    </div>
</body>
</html>`;

// Code Example 2: 3D Transforms
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 3D Transforms Tutorial</title>
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

        /* --- Common 3D Setup --- */
        .viewport {
            width: 200px;
            height: 200px;
            border: 1px solid #ccc;
            margin: 50px auto;
            position: relative; /* Needed for perspective */
            perspective: 800px; /* Parent element defines the perspective */
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f9f9f9;
        }

        .transform-3d-box {
            width: 100px;
            height: 100px;
            background-color: #3498db;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            font-size: 1.1em;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            transition: transform 0.6s ease-in-out;
            will-change: transform;
            /* transform-style: preserve-3d; is important for nested 3D elements */
        }

        /* --- Individual 3D Transform Functions --- */

        /* TranslateZ */
        .translate-z-box:hover {
            transform: translateZ(100px); /* Move 100px towards the viewer */
            /* Needs perspective on a parent to be visible */
        }

        /* RotateX */
        .rotate-x-box:hover {
            transform: rotateX(180deg); /* Rotate 180 degrees around the X-axis */
            /* Needs perspective on a parent to be visible */
        }

        /* RotateY */
        .rotate-y-box:hover {
            transform: rotateY(180deg); /* Rotate 180 degrees around the Y-axis */
            /* Needs perspective on a parent to be visible */
        }

        /* RotateZ (same as 2D rotate) */
        .rotate-z-box:hover {
            transform: rotateZ(90deg); /* Rotate 90 degrees around the Z-axis */
        }

        /* Rotate3d */
        .rotate-3d-box:hover {
            /* Rotate around a custom vector (1,1,0 = diagonal on XY plane) by 45deg */
            transform: rotate3d(1, 1, 0, 45deg);
        }

        /* ScaleZ (less visible standalone) */
        .scale-z-box:hover {
            transform: scaleZ(2); /* Doubles size along Z-axis - less obvious visually without 3D context */
        }

        /* Translate3d */
        .translate-3d-box:hover {
            transform: translate3d(20px, 20px, 50px); /* Move X, Y, Z */
        }

        /* Scale3d */
        .scale-3d-box:hover {
            transform: scale3d(1.2, 1.2, 1); /* Scale X, Y by 1.2, Z by 1 */
        }

        /* --- backface-visibility Demo --- */
        .flip-card-container {
            width: 200px;
            height: 250px;
            margin: 50px auto;
            perspective: 1000px; /* Parent for 3D effect */
        }

        .flip-card {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d; /* Children should exist in 3D space */
            transition: transform 0.8s; /* Flip transition */
        }

        .flip-card-container:hover .flip-card {
            transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden; /* Crucial for flip effect! */
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5em;
            font-weight: bold;
            color: white;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .flip-card-front {
            background-color: #f1c40f;
            z-index: 2; /* Ensure front is on top initially */
        }

        .flip-card-back {
            background-color: #e74c3c;
            transform: rotateY(180deg); /* Position back face correctly */
        }

        /* --- Perspective-Origin Demo --- */
        .perspective-origin-container {
            width: 300px;
            height: 200px;
            border: 1px dashed #9b59b6;
            margin: 40px auto;
            perspective: 800px;
            position: relative;
            overflow: hidden; /* Hide overflow from rotation */
        }

        .perspective-origin-box {
            width: 100px;
            height: 100px;
            background-color: #9b59b6;
            position: absolute;
            top: 50px;
            left: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            transition: transform 0.8s ease;
        }

        .perspective-origin-container.center-origin {
            perspective-origin: center center; /* Default */
        }
        .perspective-origin-container.top-left-origin {
            perspective-origin: top left;
        }
        .perspective-origin-container.bottom-right-origin {
            perspective-origin: bottom right;
        }

        .perspective-origin-container:hover .perspective-origin-box {
            transform: rotateY(45deg);
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>CSS 3D Transformations: Adding Depth to Your Designs (X, Y, & Z Axes)</h1>
        <p>While 2D transforms manipulate elements on a flat plane, 3D transforms allow you to move, rotate, and scale elements along a third axis: the Z-axis (depth). This opens up possibilities for incredibly immersive and dynamic effects.</p>

        <h2>Understanding the 3D Space (X, Y, Z Axes)</h2>
        <p>In 3D transformations, we introduce the Z-axis:</p>
        <ul>
            <li><strong>X-axis:</strong> Horizontal (left to right)</li>
            <li><strong>Y-axis:</strong> Vertical (top to bottom)</li>
            <li><strong>Z-axis:</strong> Depth (perpendicular to the screen, towards/away from the viewer). Positive Z comes out of the screen.</li>
        </ul>

        <h2>Establishing a 3D Context for Depth</h2>
        <p>For 3D transformations to look "3D" (i.e., to have perspective), you need to establish a 3D rendering context. This is typically done on a parent element.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><strong class="tw:font-semibold! tw:text-blue-600!"><code>perspective</code> (on parent):</strong> Defines the distance from the viewer to the Z=0 plane (the element's default position). Smaller values create a more extreme 3D effect (closer "camera"), larger values create a flatter effect. Without <code>perspective</code>, 3D transformations like <code>translateZ()</code> and <code>rotateX/Y()</code> will not appear to have depth.</li>
            <li class="tw:leading-relaxed!"><strong class="tw:font-semibold! tw:text-blue-600!"><code>transform-style: preserve-3d</code> (on parent of 3D children):</strong> If you have nested elements, and you want their 3D transformations to interact within the same 3D space, you must apply <code>transform-style: preserve-3d;</code> to the parent. By default, child elements are flattened into the parent's 2D plane.</li>
        </ul>
        <div class="viewport">
            <p>Parent Perspective</p>
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">This gray box has <code>perspective</code> applied, making its children's 3D transforms visible.</p>

        <h2>Individual 3D Transform Functions:</h2>
        <p>These functions allow manipulation along the Z-axis or a combination of axes.</p>

        <h3>1. \`translateZ()\` / \`translate3d()\`: Moving in Depth</h3>
        <p>Used to move an element along the Z-axis.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>translateZ(&lt;length&gt;)</code>: Positive values move the element closer to the viewer (larger appearance), negative values move it further away (smaller appearance).</li>
            <li class="tw:leading-relaxed!"><code>translate3d(&lt;x&gt;, &lt;y&gt;, &lt;z&gt;)</code>: Combines <code>translateX</code>, <code>translateY</code>, and <code>translateZ</code> into one function.</li>
        </ul>
        <div class="viewport">
            <div class="transform-3d-box translate-z-box">TranslateZ</div>
        </div>
        <div class="viewport">
            <div class="transform-3d-box translate-3d-box">Translate3d</div>
        </div>

        <h3>2. \`rotateX()\` / \`rotateY()\` / \`rotateZ()\` / \`rotate3d()\`: Rotating in 3D</h3>
        <p>Used to rotate an element around one of the 3 axes. You need \`perspective\` on a parent for \`rotateX\` and \`rotateY\` to have a visible 3D effect.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>rotateX(&lt;angle&gt;)</code>: Rotates around the horizontal (X) axis. Imagine a door swinging vertically.</li>
            <li class="tw:leading-relaxed!"><code>rotateY(&lt;angle&gt;)</code>: Rotates around the vertical (Y) axis. Imagine a door swinging horizontally.</li>
            <li class="tw:leading-relaxed!"><code>rotateZ(&lt;angle&gt;)</code>: Rotates around the Z-axis (same as 2D <code>rotate()</code>).</li>
            <li class="tw:leading-relaxed!"><code>rotate3d(&lt;x&gt;, &lt;y&gt;, &lt;z&gt;, &lt;angle&gt;)</code>: Rotates around an arbitrary 3D vector defined by (x,y,z).</li>
        </ul>
        <div class="viewport">
            <div class="transform-3d-box rotate-x-box">RotateX</div>
        </div>
        <div class="viewport">
            <div class="transform-3d-box rotate-y-box">RotateY</div>
        </div>
        <div class="viewport">
            <div class="transform-3d-box rotate-z-box">RotateZ</div>
        </div>
        <div class="viewport">
            <div class="transform-3d-box rotate-3d-box">Rotate3d</div>
        </div>

        <h3>3. \`scaleZ()\` / \`scale3d()\`: Scaling in Depth</h3>
        <p>Used to scale an element along the Z-axis or a combination of axes. \`scaleZ\` is rarely visible in isolation.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>scaleZ(&lt;number&gt;)</code>: Scales along the Z-axis.</li>
            <li class="tw:leading-relaxed!"><code>scale3d(&lt;x-number&gt;, &lt;y-number&gt;, &lt;z-number&gt;)</code>: Scales uniformly or differently for X, Y, and Z.</li>
        </ul>
        <div class="viewport">
            <div class="transform-3d-box scale-z-box">ScaleZ</div>
        </div>
        <div class="viewport">
            <div class="transform-3d-box scale-3d-box">Scale3d</div>
        </div>

        <h2><code>backface-visibility</code>: Hiding the Back of a 3D Element</h2>
        <p>When an element is rotated in 3D, its "back" side (the side facing away from the viewer) becomes visible. <code>backface-visibility</code> controls whether this back face should be rendered.</p>
        <ul class="tw-list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
            <li class="tw:leading-relaxed!"><code>visible</code> (default): The back face is rendered.</li>
            <li class="tw:leading-relaxed!"><code>hidden</code>: The back face is not rendered, appearing transparent when facing the viewer. Crucial for flip card effects!</li>
        </ul>
        <h3>Demo: Flipping Card with \`backface-visibility\`</h3>
        <p class="tw-text-center">Hover over this card to see a common 3D flip effect.</p>
        <div class="flip-card-container">
            <div class="flip-card">
                <div class="flip-card-front">FRONT</div>
                <div class="flip-card-back">BACK</div>
            </div>
        </div>

        <h2><code>perspective-origin</code>: Adjusting the Viewer's Position</h2>
        <p>While \`perspective\` sets the *distance* to the viewer, \`perspective-origin\` sets the *position* of the viewer relative to the element (or the parent with perspective). By default, it's \`center center\`.</p>
        <p class="tw-text-center">Hover over these containers. The box rotates, but the origin of the 3D perspective changes:</p>
        <div class="perspective-origin-container center-origin">
            <p class="tw-absolute tw-top-1 tw-left-1 tw-text-xs tw-text-gray-400">Center Origin</p>
            <div class="perspective-origin-box">Box</div>
        </div>
        <div class="perspective-origin-container top-left-origin">
            <p class="tw-absolute tw-top-1 tw-left-1 tw-text-xs tw-text-gray-400">Top Left Origin</p>
            <div class="perspective-origin-box">Box</div>
        </div>
        <div class="perspective-origin-container bottom-right-origin">
            <p class="tw-absolute tw-top-1 tw-left-1 tw-text-xs tw-text-gray-400">Bottom Right Origin</p>
            <div class="perspective-origin-box">Box</div>
        </div>
    </div>
</body>
</html>`;

// Code Example 3: Advanced Examples & Best Practices
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transforms Best Practices</title>
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

        /* --- Advanced 3D Example: Cube --- */
        .cube-container {
            width: 200px;
            height: 200px;
            margin: 50px auto;
            perspective: 1000px; /* Viewer distance */
            position: relative;
            transform-style: preserve-3d; /* Keep its children in 3D space */
        }

        .cube {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d; /* Children should exist in 3D space */
            transform: rotateX(-30deg) rotateY(45deg); /* Initial rotation for better view */
            transition: transform 1s ease-in-out; /* Smooth rotation */
        }

        .cube-container:hover .cube {
            transform: rotateX(360deg) rotateY(360deg); /* Spin the cube */
        }

        .face {
            position: absolute;
            width: 200px;
            height: 200px;
            border: 2px solid rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
            color: white;
            opacity: 0.9;
            backface-visibility: hidden; /* Hide back for clean edges */
        }

        /* Positioning and coloring each face of the cube */
        .front  { background-color: #e74c3c; transform: rotateY(0deg) translateZ(100px); }
        .back   { background-color: #f1c40f; transform: rotateY(180deg) translateZ(100px); }
        .right  { background-color: #2ecc71; transform: rotateY(90deg) translateZ(100px); }
        .left   { background-color: #3498db; transform: rotateY(-90deg) translateZ(100px); }
        .top    { background-color: #9b59b6; transform: rotateX(90deg) translateZ(100px); }
        .bottom { background-color: #e67e22; transform: rotateX(-90deg) translateZ(100px); }

        /* --- Best Practices Demo --- */
        .animated-element {
            width: 150px;
            height: 80px;
            background-color: #34495e;
            color: white;
            margin: 20px auto;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: transform 0.4s ease-out, background-color 0.4s ease;
            will-change: transform; /* Hint for browser performance */
            cursor: pointer;
        }

        /* Performance test: Using transform (good) */
        .animated-element.performant:hover {
            transform: translateX(50px) scale(1.1); /* GPU-accelerated */
            background-color: #1abc9c;
        }

        /* Accessibility: prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
            .animated-element {
                transition: none !important; /* Disable transitions */
                transform: none !important; /* Reset transforms if needed */
                will-change: auto !important; /* Remove will-change hint */
            }
            .animated-element.performant:hover {
                background-color: #bdc3c7; /* Static neutral state */
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Advanced 3D Examples & Best Practices for CSS Transforms</h1>
        <p>Now that we've covered the basics of 2D and 3D transforms, let's look at more complex applications and essential guidelines for using them effectively and performantly.</p>

        <h2>Advanced 3D Example: The Interactive Cube</h2>
        <p>This demo combines multiple 3D transforms, \`perspective\`, and \`transform-style: preserve-3d\` to create a truly three-dimensional object that you can interact with.</p>
        <p class="tw-text-center"><strong>Hover over the cube container</strong> to make it spin!</p>
        <div class="cube-container">
            <div class="cube">
                <div class="face front">FRONT</div>
                <div class="face back">BACK</div>
                <div class="face right">RIGHT</div>
                <div class="face left">LEFT</div>
                <div class="face top">TOP</div>
                <div class="face bottom">BOTTOM</div>
            </div>
        </div>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            Each "face" is positioned using <code>translateZ()</code> and then rotated using <code>rotateX()</code> or <code>rotateY()</code>
            to form the cube. The <code>cube</code> element itself then rotates on hover.
            <code>transform-style: preserve-3d</code> is essential on both the <code>.cube-container</code> and <code>.cube</code> elements
            to ensure faces are rendered in 3D space relative to each other.
        </p>

        <h2>Best Practices for Using CSS Transforms:</h2>

        <h3>1. Performance: Favor GPU-Accelerated Transforms</h3>
        <p>Transforms are one of the most performant CSS animations because they operate in the "Composite" stage of the browser's rendering pipeline. This means they can often be handled directly by the GPU.</p>
        <ul>
            <li><strong>Always prefer <code>transform</code> over layout-affecting properties</strong> like <code>top</code>, <code>left</code>, <code>width</code>, <code>height</code>, <code>margin</code>, or <code>padding</code> for animation. Animating these properties forces the browser to recalculate element positions and repaint pixels on every frame (CPU-bound), which can cause "jank" (stuttering), especially on lower-powered devices.</li>
            <li><strong>Properties like <code>transform</code> and <code>opacity</code> are ideal</strong> for smooth animations as they rarely trigger layout or paint.</li>
        </ul>
        <p class="tw-text-center"><strong>Hover over this box:</strong> Its transformation is highly performant.</p>
        <div class="animated-element performant">
            Performant Transform
        </div>

        <h3>2. \`will-change\` Property: A Performance Hint (Use Sparingly!)</h3>
        <p>The \`will-change\` property allows you to hint to the browser that an element's \`transform\` (or other properties) will change. This allows the browser to perform optimizations ahead of time.</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
.my-animated-element {
    will-change: transform; /* Inform browser of upcoming transform changes */
}
        </pre>
        <p class="tw-text-red-600 tw-font-bold">
            Caution: Do not overuse <code>will-change</code>! It can actually degrade performance if applied to too many elements or for properties that don't frequently change. Only use it on elements that *will* animate.
        </p>

        <h3>3. Accessibility: Respect \`prefers-reduced-motion\`</h3>
        <p>It is crucial to respect user preferences for reduced motion. Many users, particularly those with vestibular disorders or anxiety, can be negatively affected by excessive animations.</p>
        <p>Use the <code>@media (prefers-reduced-motion: reduce)</code> query to disable or simplify transforms for these users:</p>
        <pre class="tw-bg-gray-100! tw-p-4! tw-rounded! tw-text-sm! tw:font-mono! tw:mb-4! tw:mt-2!">
@media (prefers-reduced-motion: reduce) {
    .my-transforming-element {
        transform: none !important; /* Disable the transform */
        transition: none !important; /* Make any changes instant */
    }
}
        </pre>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">
            <strong>Test it:</strong> Enable "Reduce motion" in your OS settings (e.g., Windows: Settings > Accessibility > Visual effects > Animation effects; macOS: System Settings > Accessibility > Display > Reduce motion) and refresh this page. The box above should no longer animate.
        </p>

        <h3>4. Order of Transforms Matters (Crucially in 3D)</h3>
        <p>When combining multiple transform functions (e.g., \`rotate() scale() translate()\`), they are applied from left to right. Changing the order changes the outcome, especially in 3D. Experiment to get the desired effect.</p>

        <h3>5. Test on Real Devices</h3>
        <p>Always test your transforms on a range of devices, particularly mobile phones, to ensure smooth performance in real-world conditions.</p>

        <h3>6. Don't Overdo It</h3>
        <p>Subtle, purposeful transforms often provide a better user experience than flashy, distracting ones.</p>
    </div>
</body>
</html>`;

export default function CSSTransformationsTutorial() {
  const page = 33; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/D0F0C0/5C8A4A?text=CSS+2D+and+3D+Transformations"
              alt="CSS Transformations Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Transformations: Warping Reality (2D & 3D) 🚀
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              CSS Transformations allow you to move, rotate, scale, and skew
              elements in two-dimensional (2D) or three-dimensional (3D) space
              without affecting the surrounding layout. This makes them
              incredibly powerful for creating dynamic visual effects and UI
              interactions.
            </p>

            {/* 1. Introduction to CSS Transformations */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. The Power of CSS Transformations
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Unlike traditional positioning (like `margin` or `position`),
                CSS transforms don't change the element's actual footprint in
                the document flow. They are applied *after* the element has been
                laid out, visually altering its appearance. This characteristic,
                combined with their ability to be GPU-accelerated, makes them
                highly efficient for animations and interactive elements.
              </p>
              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                The `transform` Property
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                All CSS transformations are applied using the single `transform`
                property. Its value is one or more transformation functions.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.element {
    transform: rotate(45deg) scale(1.2); /* Multiple functions applied */
}`}
              </pre>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. 2D Transformations: On the Flat Plane (X & Y Axes) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. 2D Transformations: Manipulating on X & Y Axes
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                2D transformations modify an element's position, size, rotation,
                or shape on a flat two-dimensional plane (the X and Y axes).
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:mb-3! tw:mt-4! tw:text-blue-600!">
                `translate()` / `translateX()` / `translateY()` (Movement)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Moves an element from its original position without affecting
                the surrounding layout.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `translateX({`<length>`} |{`<percentage>`})`: Moves
                  horizontally.
                </li>
                <li className="tw:leading-relaxed!">
                  `translateY({`<length>`} |{`<percentage>`})`: Moves
                  vertically.
                </li>
                <li className="tw:leading-relaxed!">
                  `translate({`<x-value>`}, {`<y-value>`})`: Moves along both
                  axes.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold!  tw:mb-3! tw:mt-4! tw:text-blue-600!">
                `scale()` / `scaleX()` / `scaleY()` (Resizing)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Increases or decreases the size of an element. A value of `1` is
                the original size. Values {`>`} 1 enlarge, {`<`} 1 shrink.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `scaleX({`<number>`})`: Scales horizontally.
                </li>
                <li className="tw:leading-relaxed!">
                  `scaleY({`<number>`})`: Scales vertically.
                </li>
                <li className="tw:leading-relaxed!">
                  `scale({`<x-number>`}, {`<y-number>`})`: Scales uniformly or
                  independently.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold!  tw:mb-3! tw:mt-4! tw:text-blue-600!">
                `rotate()` (Rotation)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Rotates an element around its `transform-origin` (default:
                center).
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `rotate({`<angle>`})`: Uses units like `deg` (degrees), `rad`
                  (radians), `grad` (gradians), `turn` (turns). Positive values
                  are clockwise.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:mb-3! tw:mt-4! tw:text-blue-600!">
                `skew()` / `skewX()` / `skewY()` (Distortion)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Distorts an element, giving it a slanted appearance.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `skewX({`<angle>`})`: Skews horizontally.
                </li>
                <li className="tw:leading-relaxed!">
                  `skewY({`<angle>`})`: Skews vertically.
                </li>
                <li className="tw:leading-relaxed!">
                  `skew({`<x-angle>`}, {`<y-angle>`})`: Skews both axes.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                `transform-origin`: Changing the Pivot
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This property defines the point around which a transformation
                (like `scale()` or `rotate()`) occurs. By default, it's `center
                center` (`50% 50%`).
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.element {
    transform-origin: top left; /* Or 0% 0%, 20px 30px */
}`}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-green-600;">
                Combining Multiple 2D Transforms: Order Matters!
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You can chain multiple transform functions. They are applied
                sequentially from left to right, and changing their order will
                change the final result.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                /* Scales, then rotates, then translates */ transform:
                scale(1.2) rotate(45deg) translateX(50px); /* Translates, then
                rotates, then scales (different result!) */ transform:
                translateX(50px) rotate(45deg) scale(1.2);
              </pre>
              <p className="tw:text-center tw:text-xl tw:text-gray-700 tw:font-bold tw:mt-8">
                See all 2D transforms and `transform-origin` in action below!
              </p>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. 3D Transformations: Adding Depth (X, Y, & Z Axes) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. 3D Transformations: Adding Depth (X, Y, & Z Axes)
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                3D transformations introduce the Z-axis, which extends out of
                (positive Z) and into (negative Z) the screen. This allows for
                truly spatial manipulations.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                Establishing a 3D Context (`perspective` & `transform-style`)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                For 3D transformations to appear correctly, you need to define a
                3D rendering context, typically on a parent element.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `perspective` (on parent):
                  </strong>{" "}
                  Defines the distance from the viewer to the plane of the
                  element.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:mt-1!">
                    <li>
                      Smaller values (e.g., `200px`) create a more dramatic,
                      "fish-eye" perspective (closer camera).
                    </li>
                    <li>
                      Larger values (e.g., `1000px`) create a flatter, less
                      distorted perspective (further camera).
                    </li>
                    <li>
                      Without `perspective`, 3D rotations around X or Y will
                      appear flat, and `translateZ` will only change size.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `transform-style: preserve-3d` (on parent of 3D children):
                  </strong>{" "}
                  If you want child elements with 3D transforms to interact
                  within the same 3D space (e.g., forming a cube), apply this to
                  their parent. By default, children are flattened into the
                  parent's 2D plane after its transform.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-blue-600;">
                Individual 3D Transform Functions
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `translateZ({`<length>`})` / `translate3d({`<x>`}, {`<y>`},{" "}
                    {`<z>`})`:
                  </strong>{" "}
                  Moves an element along the Z-axis (closer or further).
                  Positive `z` comes towards you.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `rotateX({`<angle>`})`:
                  </strong>{" "}
                  Rotates an element around its horizontal (X) axis. (Imagine a
                  book opening).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `rotateY({`<angle>`})`:
                  </strong>{" "}
                  Rotates an element around its vertical (Y) axis. (Imagine a
                  door opening).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `rotateZ({`<angle>`})` / `rotate3d({`<x>`}, {`<y>`}, {`<z>`}
                    , {`<angle>`})`:
                  </strong>{" "}
                  `rotateZ` is the same as 2D `rotate()`. `rotate3d` rotates
                  around a custom 3D vector.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `scaleZ({`<number>`})` / `scale3d({`<x>`}, {`<y>`}, {`<z>`}
                    )`:
                  </strong>{" "}
                  Scales an element along the Z-axis. `scaleZ` is rarely
                  visually apparent in isolation.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                `backface-visibility`: Controlling Element Sides
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When you rotate an element in 3D, its "back" side might become
                visible. `backface-visibility` controls whether this back face
                is shown.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `visible` (default): The back face is rendered.
                </li>
                <li className="tw:leading-relaxed!">
                  `hidden`: The back face is not rendered; the element becomes
                  transparent when facing away. Essential for flip-card effects!
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4! tw:text-purple-600;">
                `perspective-origin`: Where the Viewer Is
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While `perspective` sets the *distance* of the viewer,
                `perspective-origin` sets the *position* of the viewer relative
                to the element (or its parent). Default is `center center`.
              </p>
              <p className="tw:text-center tw:text-xl tw:text-gray-700 tw-font-bold tw-mt-8">
                Dive into the examples to see 3D transforms, perspective, and
                flip cards!
              </p>
            </section>

            <CodeReviewPager code={section2} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 4. Advanced Examples & Best Practices */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                4. Advanced Examples & Best Practices
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Mastering CSS transforms involves understanding how to combine
                them effectively and ensuring they perform well and are
                accessible.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Advanced Example: The 3D Cube
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This iconic example showcases the combined power of
                `perspective`, `transform-style: preserve-3d`, `translateZ()`,
                and various `rotate()` functions to build a truly interactive 3D
                object.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Performance: Transforms are Your Friends!
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                As mentioned, transforms are highly optimized. When animating,
                **always prefer `transform`** over properties that cause layout
                changes (like `width`, `height`, `margin`, `top`, `left`, etc.)
                or painting (like `box-shadow` or `border-radius` on every
                frame). Animating layout and paint properties can lead to "jank"
                (stuttering) because the browser has to recalculate and redraw
                the entire page or parts of it on every frame.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    GPU-accelerated:
                  </strong>{" "}
                  `transform` and `opacity` are usually handled directly by the
                  GPU, ensuring smooth 60 frames per second (fps) animations.
                </li>
              </ul>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                `will-change`: A Performance Hint
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `will-change` property can be used as a hint to the browser,
                telling it which properties are expected to change on an
                element. This allows the browser to prepare for the animation
                ahead of time.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`.my-element {
    will-change: transform; /* Inform browser that transform will change */
}`}
              </pre>
              <p className="tw:text-red-600! tw:font-bold! tw:leading-relaxed! tw:mb-4!">
                **Important:** Use `will-change` sparingly! Overusing it can
                consume too many resources and actually *hurt* performance. Only
                apply it to elements that are truly about to animate.
              </p>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                Accessibility: `prefers-reduced-motion`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Always consider users who may be sensitive to motion. The
                `prefers-reduced-motion` media query allows you to provide a
                less animated experience.
              </p>
              <pre className="tw:bg-gray-100! tw:p-4! tw:rounded! tw:text-sm! tw:font-mono! tw:mb-4!">
                {`@media (prefers-reduced-motion: reduce) {
    .my-transforming-element {
        transform: none !important; /* Disable the transform */
        transition: none !important; /* Make any changes instant */
    }
}`}
              </pre>

              <h3 className="tw:text-xl! tw:font-bold! tw:text-gray-700! tw:mb-3! tw:mt-4!">
                General Tips:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Order Matters:
                  </strong>{" "}
                  Especially when combining multiple transforms. Experiment to
                  get the desired result.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Test on Real Devices:
                  </strong>{" "}
                  Performance can vary greatly across different devices and
                  browsers.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-orange-600!">
                    Don't Overdo It:
                  </strong>{" "}
                  Subtle transforms are often more effective and less
                  distracting than elaborate ones.
                </li>
              </ul>
              <p className="tw:text-center tw:text-xl tw:text-gray-700 tw:font-bold tw:mt-8">
                Explore these best practices and the 3D cube example!
              </p>
            </section>

            <CodeReviewPager code={section3} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Conclusion: Master the Art of Transformation
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                CSS Transformations are an incredibly versatile tool for web
                developers. Whether you're creating subtle hover effects with 2D
                transforms or building complex interactive 3D scenes,
                understanding these properties unlocks a new dimension of visual
                design.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                By applying them strategically, prioritizing
                performance-friendly properties, and always considering
                accessibility, you can significantly enhance the user experience
                and create truly memorable web interfaces. Practice, experiment,
                and have fun bending pixels to your will!
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
