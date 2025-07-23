import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";

const section9_1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Comments Basics</title>
    <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; margin: 20px; background-color: #f0f4f7; color: #333; }
        h1 { color: #2c3e50; text-align: center; }
        .visible-content { background-color: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 30px; }
        .comment-display { background-color: #e3f2fd; border-left: 5px solid #2196f3; padding: 15px; border-radius: 8px; margin-top: 20px; }
        .comment-display p { font-style: italic; color: #1565c0; }
        pre { background-color: #eee; padding: 10px; border-radius: 5px; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9em; }
    </style>
</head>
<body>
    <h1>Understanding HTML Comments</h1>

    <div class="visible-content">
        <p>This is a paragraph of visible content on the webpage.</p>
        <p>You can see all the text and elements here directly in your browser.</p>
    </div>

    <div class="comment-display">
        <h3>What the browser <em>doesn't</em> show (your comments):</h3>
        <p>
            Below is the HTML code for the visible content above, but with added comments.
            Notice how the comments themselves do not appear in the browser's rendering.
        </p>
        <pre><code><!-- This is a general comment for the page's main content area -->
<div class="visible-content">
    <!-- A simple paragraph explaining visible text -->
    <p>This is a paragraph of visible content on the webpage.</p>

    <!-- Another paragraph -->
    <p>You can see all the text and elements here directly in your browser.</p>
</div>

<!-- End of visible content section -->
</code></pre>
        <p>Comments are solely for developers to improve code readability and maintainability.</p>
    </div>
</body>
</html>`;

const section9_2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Commenting Out Code</title>
    <style>
        body { font-family: 'Verdana', sans-serif; line-height: 1.7; margin: 20px; background-color: #e8f5e9; color: #333; }
        h1 { color: #2e7d32; text-align: center; }
        .active-content { background-color: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 30px; }
        .commented-out-info { background-color: #fff3e0; border-left: 5px solid #ff9800; padding: 15px; border-radius: 8px; margin-top: 20px; }
        .commented-out-info h3 { color: #e65100; margin-top: 0; }
        pre { background-color: #eee; padding: 10px; border-radius: 5px; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.9em; }
    </style>
</head>
<body>
    <h1>Testing with HTML Comments</h1>

    <div class="active-content">
        <h2>Visible Section: Main Feature</h2>
        <p>This is the primary content currently active on the page. It's fully functional and displayed to users.</p>
        <img src="https://via.placeholder.com/300x150/81C784/1B5E20?text=Active+Feature" alt="Active feature image">
    </div>

    <div class="commented-out-info">
        <h3>Temporarily Disabled Code:</h3>
        <p>Below is a section of HTML code that has been **commented out**. This means it's part of the HTML file, but the browser will completely ignore it and not render it on the page.</p>
        <p>This technique is super useful for:</p>
        <ul>
            <li>Debugging: Quickly isolating problematic sections.</li>
            <li>Testing: Trying out new features without deleting old ones.</li>
            <li>Archiving: Keeping old content for reference without showing it.</li>
        </ul>
        <pre><code><!--
<div class="hidden-feature">
    <h2>Hidden Section: Upcoming Feature (Commented Out)</h2>
    <p>This content is part of a new feature under development. It's not visible yet.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    <img src="https://via.placeholder.com/300x150/FFECB3/E65100?text=Hidden+Feature" alt="Hidden feature image">
    <p>Uncomment this block to enable the feature.</p>
</div>
--></code></pre>
        <p>To make the "Hidden Section" visible, simply remove the \`<!--\` and \`-->\` tags surrounding it in the HTML source code.</p>
    </div>
</body>
</html>`;

const section9_3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Organizing with Comments</title>
    <style>
        body { font-family: 'Roboto', sans-serif; line-height: 1.8; margin: 0; background-color: #f7f9fc; color: #333; }
        .header-section { background-color: #3f51b5; color: white; padding: 25px 0; text-align: center; }
        .header-section h1 { margin: 0; }
        .page-content { max-width: 900px; margin: 30px auto; padding: 0 20px; }
        .section-box { background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); margin-bottom: 30px; }
        .section-box h2 { color: #303f9f; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px; margin-bottom: 20px; }
        .comment-block { background-color: #e8eaf6; border-left: 5px solid #5c6bc0; padding: 15px; margin-top: 20px; border-radius: 8px; }
        .comment-block pre { background-color: #fff; padding: 10px; border-radius: 5px; overflow-x: auto; font-family: 'Courier New', Courier, monospace; font-size: 0.85em; }
    </style>
</head>
<body>
    <header class="header-section">
        <h1>My Dynamic Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main class="page-content">
        <section class="section-box">
            <h2>About Us</h2>
            <p>We are a company dedicated to providing innovative solutions to our clients.</p>
            </section>

        <section class="section-box">
            <h2>Our Services</h2>
            <ul>
                <li>Web Design</li>
                <li>Graphic Design</li>
                <li>SEO Optimization</li>
            </ul>
            </section>

        <section class="section-box">
            <h2>Latest Blog Posts</h2>
            <article>
                <h3>Post Title One</h3>
                <p>A short excerpt from the first blog post...</p>
            </article>
            <article>
                <h3>Post Title Two</h3>
                <p>A short excerpt from the second blog post...</p>
            </article>
            </section>
    </main>

    <footer class="section-box">
        <p>&copy; 2024 My Dynamic Website. All rights reserved.</p>
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
    </footer>

    <div class="comment-block">
        <h3>Observation of Comments in Code:</h3>
        <p>Notice the structured comments used throughout this HTML example. These are not visible on the page, but are immensely helpful when reviewing the source code:</p>
        <ul>
            <li>Large, block comments for overall sectioning and meta-information.</li>
            <li>Single-line comments for specific elements.</li>
            <li>\`TODO\` and \`NOTE\` comments for reminders.</li>
        </ul>
        <p>This practice makes the code much more navigable and understandable for any developer.</p>
    </div>
</body>
</html>`;

export default function HtmlCommentsPage() {
  const page = 10; // Assuming this is the 8th page in your tutorial series (0-indexed)
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=HTML+Comments"
              alt="HTML Comments Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              HTML Comments: The Unseen Notes in Your Code! 📝
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              HTML comments are special snippets of text within your HTML
              document that are **ignored by web browsers**. They're not
              rendered or displayed on the actual web page. Instead, they serve
              as notes for developers, providing context, explanations, or
              temporary modifications to the code.
            </p>

            <hr className="my-6 tw:border-gray-300!" />

            {/* What are HTML Comments? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                What Exactly Are HTML Comments? 🤔
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                HTML comments are defined by a specific syntax: they start with
                `&lt;!--` and end with `--&gt;`. Any text placed between these
                markers is considered a comment.
              </p>
              <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:text-sm! tw:overflow-x-auto! tw:mb-4!">
                <code className="language-html">
                  &lt;!-- This is a single-line HTML comment --&gt; &lt;!-- This
                  is a multi-line HTML comment. It can span across several lines
                  to provide more detailed explanations or notes. --&gt;
                </code>
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold! tw:text-blue-600!">
                Even though they're in your HTML file, comments are only visible
                when someone views the page's source code (e.g., by
                right-clicking and selecting "View Page Source" in a browser).
                They don't affect the layout, functionality, or performance of
                your web page for end-users.
              </p>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Why Use HTML Comments? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Why Are HTML Comments Indispensable? 💡
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Comments are a cornerstone of good coding practice and teamwork:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Code Explanation:
                  </strong>{" "}
                  Clarify the purpose of complex or non-obvious HTML structures,
                  especially for future developers (or your future self!).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Debugging & Testing:
                  </strong>{" "}
                  Temporarily "comment out" sections of code that might be
                  causing issues, or to test different versions of a feature
                  without deleting the original code.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Reminders & TODOs:
                  </strong>{" "}
                  Leave notes about pending tasks, future improvements, or areas
                  that need more attention (e.g., `&lt;!-- TODO: Add contact
                  form validation --&gt;`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Code Organization:
                  </strong>{" "}
                  Act as visual markers to divide large HTML documents into
                  logical sections, making the code easier to navigate and
                  understand at a glance.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Collaboration:
                  </strong>{" "}
                  When working in a team, comments provide context and
                  communication among developers, reducing misunderstandings and
                  speeding up development.
                </li>
              </ul>
            </section>

            {/* Code in Action 1 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 1: Basic Comments and Visibility 👁️
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example clearly shows how comments are present in the HTML
                source code but are completely absent from the rendered web
                page.
              </p>
              <CodeReviewPager code={section9_1} />
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Commenting Out Code Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Commenting Out Code: A Powerful Debugging Tool 🛠️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                One of the most practical uses of HTML comments is to
                **temporarily disable or hide** sections of your code. This is
                incredibly useful for:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  **Debugging:** If you suspect a particular HTML element or
                  block is causing layout issues or errors, you can comment it
                  out to see if the problem disappears.
                </li>
                <li className="tw:leading-relaxed!">
                  **Testing:** You might be experimenting with a new feature or
                  design. Instead of deleting the old code, comment it out until
                  you're sure the new version works.
                </li>
                <li className="tw:leading-relaxed!">
                  **Archiving:** Sometimes you need to keep older versions of
                  content or features for reference without having them active
                  on the live site.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold! tw:text-orange-600!">
                To comment out a block of code, simply wrap it with `&lt;!--`
                and `--&gt;`. To uncomment it, remove these markers.
              </p>
            </section>

            {/* Code in Action 2 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 2: Hiding and Revealing Content 🎭
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example clearly shows a section of HTML content that is
                "commented out" and therefore not visible on the web page.
              </p>
              <CodeReviewPager code={section9_2} />
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Best Practices Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Best Practices for Effective HTML Comments ✅
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While commenting is simple, applying these best practices can
                significantly enhance your code's quality:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Explain "Why," Not "What":
                  </strong>
                  Don't comment on obvious HTML (e.g., `&lt;!-- This is a
                  paragraph --&gt;&lt;p&gt;...&lt;/p&gt;`). Instead, explain the
                  *reason* behind a specific structure or a non-standard
                  implementation.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Keep Them Concise and Clear:
                  </strong>
                  Comments should be easy to understand and to the point. Avoid
                  long, rambling explanations that could be confusing.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Use for Sectioning:
                  </strong>
                  Employ multi-line comments to delineate major sections of your
                  HTML document (e.g., `&lt;!-- BEGIN HEADER --&gt;`, `&lt;!--
                  END FOOTER --&gt;`). This makes large files much more
                  navigable.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Keep Them Updated:
                  </strong>
                  **Crucially, outdated comments are often worse than no
                  comments at all.** If you change the code, make sure to update
                  its corresponding comments.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Avoid Over-Commenting:
                  </strong>
                  Too many comments can clutter your code and make it harder to
                  read. Strive for a balance between sufficient explanation and
                  clean code.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    No Nesting:
                  </strong>
                  HTML comments cannot be nested within each other. The parser
                  will consider the first ` --&gt;` it encounters as the end of
                  the comment.
                </li>
              </ul>
            </section>

            {/* Code in Action 3 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 3: Organizing HTML with Comments 📂
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example showcases how well-placed comments can act as a
                roadmap through a larger HTML document, improving readability
                and maintainability.
              </p>
              <CodeReviewPager code={section9_3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                HTML comments are a simple yet powerful feature that
                significantly improves the development experience. By using them
                wisely, you'll write cleaner, more maintainable code that's a
                joy to work with, both for yourself and your fellow developers.
                Happy commenting! 💪
              </p>
              <PageNavigationButtons
                prev={{
                  title: HtmlChapterFootMap[page - 1].title,
                  path: HtmlChapterFootMap[page - 1].path,
                }}
                next={{
                  title: HtmlChapterFootMap[page + 1].title,
                  path: HtmlChapterFootMap[page + 1].path,
                }}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
