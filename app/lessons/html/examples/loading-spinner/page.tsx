import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import React from "react";

export default function LoadingSpinner() {
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="/assets/img/examples/animated-loader.gif"
              alt="Animated Loading Spinner"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Crafting Captivating Loaders: A Deep Dive into Canvas-Based
              Spinners
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Ever wondered how those smooth, animated loading spinners are
              made? This tutorial will walk you through creating a dynamic,
              colorful loading spinner using HTML, CSS, and the powerful HTML
              Canvas API. Let's make waiting a little more visually interesting!
              🎨
            </p>

            {/* Introduction Section */}
            <section className="tw:mb-10! tw:p-4!  ">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Understanding the "Why" Behind Loaders
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                In the world of web applications, some operations take time.
                Whether it's fetching data, processing an upload, or rendering
                complex content, users might experience a brief delay. This is
                where{" "}
                <strong className="tw:font-semibold! tw:text-indigo-600!">
                  loading spinners
                </strong>{" "}
                come in!
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A loading spinner isn't just a fancy animation; it's a crucial
                part of good user experience (UX). It provides visual feedback,
                assuring the user that the application hasn't frozen and that
                their request is being processed. Without it, users might think
                the page is broken and navigate away, leading to a frustrating
                experience.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed!">
                While simple CSS animations can create basic loaders, using the{" "}
                <strong className="tw:font-semibold! tw:text-green-600!">
                  {" "}
                  HTML Canvas API
                </strong>{" "}
                allows for much more complex, dynamic, and visually rich
                animations. It's like having a blank canvas where you can draw
                anything you imagine, pixel by pixel!
              </p>
            </section>

            {/* Why Canvas for Loaders Section */}
            <section className="tw:mb-10! tw:p-4! ">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Why Use HTML Canvas for a Loader? 🖼️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You might be thinking, "Can't I just use CSS for a spinner?" And
                you'd be right for many cases! However, the{" "}
                <strong className="tw:font-semibold! tw:text-indigo-600!">
                  Canvas API
                </strong>{" "}
                offers distinct advantages for more intricate animations:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Pixel-Perfect Control:
                  </strong>{" "}
                  With Canvas, you're drawing directly onto a bitmap, giving you
                  unparalleled control over every pixel. This is perfect for
                  custom shapes, complex paths, and dynamic visual effects that
                  are difficult or impossible with pure CSS.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Complex Animations and Interactivity:
                  </strong>{" "}
                  Canvas excels at animations that involve continuous drawing,
                  erasing, and redrawing based on complex mathematical functions
                  or user interaction. Our loader, for instance, changes color
                  and "contracts" dynamically, which is much simpler to
                  implement with Canvas's drawing capabilities.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Performance for Intensive Graphics:
                  </strong>{" "}
                  While CSS animations are often GPU-accelerated, for highly
                  complex or numerous animations, Canvas can sometimes offer
                  better performance by offloading rendering to the GPU more
                  directly, especially for game-like or data visualization
                  scenarios.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Foundation for Advanced Graphics:
                  </strong>{" "}
                  Learning Canvas for a simple loader is a fantastic stepping
                  stone to more advanced topics like game development, data
                  visualization, image manipulation, and real-time interactive
                  experiences on the web.
                </li>
              </ul>
            </section>

            {/* The Code Explained Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Deconstructing Our Canvas Loader: A Line-by-Line Breakdown 🧑‍💻
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Let's break down the HTML, CSS, and JavaScript that bring our
                colorful loading spinner to life.
              </p>
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                The HTML Structure 🏗️
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Our HTML is surprisingly minimal. It sets up the basic document
                and provides a container for our Canvas element.
              </p>
              <CodeReviewPager
                code={`<!DOCTYPE html>
<html>
  <head>
    <style>
      /* Our CSS styles will go here */
    </style>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale:1.0" />
    <title>Amazing Loader</title>
  </head>
  <body>
    <div class="container">
      <canvas id="progressView" />
    </div>
    <script>
      // Our JavaScript code will go here
    </script>
  </body>
</html>`}
              />
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4! tw:mt-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;!DOCTYPE html&gt; &amp; &lt;html lang="en"&gt;:
                  </strong>{" "}
                  Standard declarations for an HTML5 document.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;head&gt;:
                  </strong>{" "}
                  Contains metadata about the page, including our inline{" "}
                  <strong className="tw:font-medium!">&lt;style&gt;</strong>{" "}
                  block for CSS and the{" "}
                  <strong className="tw:font-medium!">&lt;title&gt;</strong>{" "}
                  that appears in the browser tab.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;body&gt;:
                  </strong>{" "}
                  This is where our visible content resides.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                    <li>
                      <strong className="tw:font-medium!">
                        &lt;div class="container"&gt;:
                      </strong>{" "}
                      A simple container to center our canvas on the page using
                      Flexbox (as we'll see in the CSS).
                    </li>
                    <li>
                      <strong className="tw:font-medium!">
                        &lt;canvas id="progressView"&gt;:
                      </strong>{" "}
                      This is the star of the show! The `&lt;canvas&gt;` element
                      provides a drawing surface. We give it an `id` so we can
                      easily access it with JavaScript.
                    </li>
                    <li>
                      <strong className="tw:font-medium!">
                        &lt;script&gt;:
                      </strong>{" "}
                      Our JavaScript code is placed here, after the HTML
                      elements it will interact with.
                    </li>
                  </ul>
                </li>
              </ul>
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                The CSS Styling 💅
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The CSS is minimal but crucial for positioning our spinner in
                the center of the screen.
              </p>
              <CodeReviewPager
                code={`<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>`}
              />
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4! tw:mt-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    {`* { margin: 0; padding: 0; box-sizing: border-box; }`}:
                  </strong>{" "}
                  A universal reset to remove default browser margins and
                  paddings, ensuring consistent layout.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `.container`:
                  </strong>{" "}
                  This class styles our `&lt;div&gt;` to span the entire
                  viewport (`100vw`, `100vh`) and uses{" "}
                  <strong className="tw:font-medium! tw:text-green-600!">
                    Flexbox
                  </strong>{" "}
                  (`display: flex`, `justify-content: center`, `align-items:
                  center`) to perfectly center its child element (our canvas)
                  both horizontally and vertically.
                </li>
              </ul>
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                The JavaScript Magic ✨
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This is where the real animation happens! We use the Canvas 2D
                rendering context to draw and animate our circular loader.
              </p>
              <CodeReviewPager
                code={`<script>
  let c = document.getElementById("progressView");
  let cx = c.getContext("2d");
  let angle1 = 0;
  let angle2 = 0;
  let turn = 0;
  let time = 0;
  let radiusOuter = 45;
  let ringWidth = 8;
  let translucentFactor = 0.09;
  let stepFactor = 5;
  let colorWheel = 0;
  let contractStep = 3;

  animateProgress(); // Initial call to start the animation

  function animateProgress() {
    time++; // Increment time (though not directly used in drawing, useful for tracking)

    // Clear the canvas with a translucent overlay
    cx.fillStyle = "rgba(255,255,255," + translucentFactor + ")";
    cx.fillRect(0, 0, c.width, c.height);

    cx.lineWidth = ringWidth; // Set the width of the arc
    cx.beginPath(); // Start a new path for drawing

    // Set the stroke color using HSL for dynamic color change
    cx.strokeStyle = \`hsl(\${colorWheel},100%,40%)\`;

    // Draw the arc
    cx.arc(
      c.width / 2, // X-coordinate of the center of the arc
      c.height / 2, // Y-coordinate of the center of the arc
      radiusOuter,  // Radius of the arc
      (angle1 * Math.PI) / 180, // Start angle (converted to radians)
      (angle2 * Math.PI) / 180, // End angle (converted to radians)
      true // Counter-clockwise (important for how angles are interpreted)
    );
    cx.stroke(); // Draw the arc
    cx.closePath(); // Close the path

    // Animation logic: Controls the start and end angles of the arc
    if (turn === 0) {
      angle1 += stepFactor; // Expand the leading edge
      if (angle1 % contractStep === 0) {
        angle2 += stepFactor; // Contract the trailing edge
        colorWheel++; // Change color
      }
    } else { // Reverse direction for the "contracting" effect
      angle2 += stepFactor;
      if (angle2 % contractStep === 0) {
        angle1 += stepFactor;
        colorWheel++;
      }
    }

    // Reset angles when they complete a full circle
    if (angle1 > 360) {
      angle1 = 0;
      if (turn === 0) turn = 1; // Switch animation phase
    }
    if (angle2 > 360) {
      angle2 = 0;
      if (turn === 1) turn = 0; // Switch animation phase back
    }

    // Request the next animation frame for smooth animation
    requestAnimationFrame(animateProgress);
  }
</script>`}
              />
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4! tw:mt-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Canvas Setup:
                  </strong>{" "}
                  We get a reference to our `&lt;canvas&gt;` element and its 2D
                  rendering context (`cx`). This `cx` object is what we'll use
                  to draw on the canvas.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                    <li>
                      `let c = document.getElementById("progressView");` : Gets
                      the canvas element by its ID.
                    </li>
                    <li>
                      `let cx = c.getContext("2d");` : Gets the 2D rendering
                      context, which provides methods for drawing.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Variables for Animation:
                  </strong>{" "}
                  Several variables control the animation's behavior:
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                    <li>
                      `angle1`, `angle2`: Control the start and end angles of
                      the arc (in degrees).
                    </li>
                    <li>
                      `turn`: Determines the current phase of the animation
                      (expanding or contracting).
                    </li>
                    <li>`radiusOuter`: The radius of the circular path.</li>
                    <li>`ringWidth`: The thickness of the drawing line.</li>
                    <li>
                      `translucentFactor`: Controls how transparent the clearing
                      rectangle is, creating a "fade trail" effect.
                    </li>
                    <li>
                      `stepFactor`: How quickly the angles increment each frame.
                    </li>
                    <li>
                      `colorWheel`: Used to cycle through HSL colors, making the
                      spinner change color over time.
                    </li>
                    <li>
                      `contractStep`: How often `angle2` catches up to `angle1`
                      (or vice-versa), creating the "contracting" motion.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    `animateProgress()` Function:
                  </strong>{" "}
                  This function is the heart of our animation. It's called
                  repeatedly by `requestAnimationFrame`.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                    <li>
                      `cx.fillStyle = "rgba(255,255,255," + translucentFactor +
                      ")";` &amp; `cx.fillRect(0, 0, c.width, c.height);`: This
                      line "clears" the canvas for the next frame. By using a
                      translucent white color, it creates a subtle "fade"
                      effect, making the spinner look smoother as it animates.
                    </li>
                    <li>
                      `cx.lineWidth = ringWidth;`, `cx.beginPath();`,
                      `cx.strokeStyle = `hsl(${"{colorWheel}"},100%,40%)`,
                      `cx.arc(...)`, `cx.stroke();`, `cx.closePath();`: These
                      lines are the core Canvas drawing commands. They set the
                      line width, begin a new drawing path, define the color
                      using an HSL value (which allows for easy color cycling),
                      draw an arc based on `angle1` and `angle2`, draw the
                      stroke, and close the path.
                    </li>
                    <li>
                      <strong className="tw:font-medium! tw:text-yellow-600!">
                        Animation Logic:
                      </strong>{" "}
                      The `if (turn === 0)` and `else` blocks control how
                      `angle1` and `angle2` increment, creating the expanding
                      and contracting motion of the arc. The `colorWheel`
                      variable is also incremented here to change the color.
                    </li>
                    <li>
                      <strong className="tw:font-medium! tw:text-yellow-600!">
                        Angle Reset:
                      </strong>{" "}
                      When `angle1` or `angle2` exceed 360 degrees (a full
                      circle), they're reset to 0, and the `turn` variable might
                      be flipped to reverse the animation phase.
                    </li>
                    <li>
                      `requestAnimationFrame(animateProgress);`: This is the
                      standard way to perform animations in the browser. It
                      tells the browser to call `animateProgress` again before
                      the next screen repaint, ensuring smooth and efficient
                      animation.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                By combining a simple HTML structure, centered CSS, and the
                dynamic drawing capabilities of the Canvas API with JavaScript,
                we've created a visually engaging and informative loading
                spinner. You're now ready to customize this spinner or explore
                even more complex Canvas animations! Happy coding! 🚀
              </p>
              The Full Code Is Below
              <CodeReviewPager
                code={`<!DOCTYPE html>
<html>
  <head>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale:1.0" />
    <title>Amazing Loader</title>
  </head>
  <body>
    <div class="container">
      <canvas id="progressView" />
    </div>
    <script>
      let c = document.getElementById("progressView");
      let cx = c.getContext("2d");
      let angle1 = 0;
      let angle2 = 0;
      let turn = 0;
      let time = 0;
      let radiusOuter = 45;
      let ringWidth = 8;
      let translucentFactor = 0.09;
      let stepFactor = 5;
      let colorWheel = 0;
      let contractStep = 3;
      animateProgress();
      function animateProgress() {
        time++;
        cx.fillStyle = "rgba(255,255,255," + translucentFactor + ")";
        cx.fillRect(0, 0, c.width, c.height);
        cx.lineWidth = ringWidth;
        cx.beginPath();
        cx.strokeStyle = \`hsl(\${colorWheel},100%,40%)\`;
        cx.arc(
          c.width / 2,
          c.height / 2,
          radiusOuter,
          (angle1 * Math.PI) / 180,
          (angle2 * Math.PI) / 180,
          true
        );
        cx.stroke();
        cx.closePath();
        if (turn === 0) {
          angle1 += stepFactor;
          if (angle1 % contractStep === 0) {
            angle2 += stepFactor;
            colorWheel++;
          }
        } else {
          angle2 += stepFactor;
          if (angle2 % contractStep === 0) {
            angle1 += stepFactor;
            colorWheel++;
          }
        }
        if (angle1 > 360) {
          angle1 = 0;
          if (turn === 0) turn = 1;
        }
        if (angle2 > 360) {
          angle2 = 0;
          if (turn === 1) turn = 0;
        }
        requestAnimationFrame(animateProgress);
      }
    </script>
  </body>
</html>
`}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
