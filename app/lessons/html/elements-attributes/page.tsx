import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";

const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Elements and Attributes</title>
</head>
<body>
    <header>
        <h1>Understanding HTML Elements & Attributes</h1>
    </header>
    <main>
        <p style="color: blue; font-size: 18px;">
            This paragraph has inline styles for blue text and a larger font size.
        </p>
        <img src="https://placehold.co/400x250/ADFF2F/000000?text=Element+Example" alt="A green placeholder image" title="This is an example image">
        <a href="https://www.openchainstechnologies.shop/contact" target="_blank" rel="noopener noreferrer" class="external-link">
            Contact Openchains Technologies
        </a>
        <div id="infoBox">
            <p>This is a div element, a generic container.</p>
        </div>
    </main>
    <footer>
        <p>&copy; 2024 Openchains Technologies. All rights reserved.</p>
    </footer>
</body>
</html>`;

export default function HtmlElementsAttributesPage() {
  const page = 1;
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=HTML+Elements+and+Attributes"
              alt="OpenChains Electronics Services"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              HTML Elements and Attributes: Building Blocks of the Web 🧱
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Now that you know the basic structure of an HTML page, let's dive
              into the core components:
              <strong> elements</strong> and <strong>attributes</strong>. These
              are the fundamental building blocks you'll use to construct all
              your web content.
            </p>

            {/* What are HTML Elements Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                What Exactly Are HTML Elements? 🤔
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                In HTML, an <strong>element</strong> is a piece of content
                that's defined by a <strong>start tag</strong>, some{" "}
                <strong>content</strong>, and an <strong>end tag</strong>. Think
                of tags as containers that give meaning and structure to your
                content.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The general syntax looks like this:
                <br />
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-red-500!">
                  &lt;tagname&gt; Content goes here &lt;/tagname&gt;
                </code>
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Start Tag (Opening Tag):
                  </strong>
                  This marks the beginning of the element. For example,{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;
                  </code>{" "}
                  for a paragraph or{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;h1&gt;
                  </code>{" "}
                  for a heading.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Content:
                  </strong>
                  This is the actual text, image, or other HTML elements that
                  the tag is enclosing.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    End Tag (Closing Tag):
                  </strong>
                  This marks the end of the element and includes a forward slash
                  before the tag name. For example,{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;/p&gt;
                  </code>{" "}
                  or{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;/h1&gt;
                  </code>
                  .
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Some elements, like images (`&lt;img&gt;`) or line breaks
                (`&lt;br&gt;`), are called
                <strong>empty elements</strong> or{" "}
                <strong>void elements</strong> because they don't have any
                content and thus don't require a closing tag. They are
                self-closing.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed!">
                Example of an empty element:{" "}
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                  &lt;img src="image.jpg" alt="Description"&gt;
                </code>
              </p>
            </section>

            {/* What are HTML Attributes Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                And What About HTML Attributes? ⚙️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                <strong>Attributes</strong> provide additional information about
                HTML elements. They are always specified in the{" "}
                <strong>start tag</strong> and usually come in name/value pairs
                like
                <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                  name="value"
                </code>
                .
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Purpose:
                  </strong>
                  Attributes modify the default behavior or provide extra
                  details about an element. For instance, for an image, you
                  might need to specify its source (`src`) and alternative text
                  (`alt`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Placement:
                  </strong>
                  They are placed directly after the tag name, separated by a
                  space, within the opening tag.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Syntax:
                  </strong>
                  Always in the format{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    attribute="value"
                  </code>
                  . The value should always be enclosed in quotation marks
                  (single or double). Double quotes are most common.
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Common Global Attributes (Work on Most Elements):
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `id` attribute:
                  </strong>
                  Provides a <strong>unique identifier</strong> for an HTML
                  element. Used frequently with CSS for styling a specific
                  element or with JavaScript for manipulating it. An `id` should
                  only appear once per page.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;div id="myUniqueSection"&gt;...&lt;/div&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `class` attribute:
                  </strong>
                  Used to assign one or more <strong>class names</strong> to an
                  element. Classes are ideal for applying the same CSS styles or
                  JavaScript behavior to multiple elements.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p class="highlight important"&gt;...&lt;/p&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `style` attribute:
                  </strong>
                  Used to apply <strong>inline CSS styles</strong> directly to
                  an HTML element. While convenient for quick tests, it's
                  generally better practice to use external CSS files for
                  styling.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;h2 style="color: green; text-align:
                    center;"&gt;...&lt;/h2&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `title` attribute:
                  </strong>
                  Provides <strong>advisory information</strong> about an
                  element. Often, browsers will display this as a tooltip when
                  the user hovers over the element.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;a href="#" title="Click to learn more"&gt;...&lt;/a&gt;
                  </code>
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Element-Specific Attributes:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Many attributes are specific to certain HTML elements. Here are
                a few crucial ones:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  For `&lt;a&gt;` (anchor) tags:
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                    <li>
                      <strong className="tw:font-medium!">
                        `href` (Hypertext Reference):
                      </strong>
                      Specifies the URL of the page the link goes to.
                      <br />
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        &lt;a href="https://example.com"&gt;Visit
                        Example&lt;/a&gt;
                      </code>
                    </li>
                    <li>
                      <strong className="tw:font-medium!">`target`:</strong>
                      Determines where the linked document will open. Common
                      values include `_self` (default, opens in the same window)
                      and `_blank` (opens in a new tab/window).
                      <br />
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        &lt;a href="page.html" target="_blank"&gt;Open in new
                        tab&lt;/a&gt;
                      </code>
                    </li>
                    <li>
                      <strong className="tw:font-medium!">
                        `rel` (Relationship):
                      </strong>
                      Describes the relationship between the current document
                      and the linked document. `noopener noreferrer` is often
                      used with `target="_blank"` for security reasons.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  For `&lt;img&gt;` (image) tags:
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                    <li>
                      <strong className="tw:font-medium!">
                        `src` (Source):
                      </strong>
                      Specifies the path to the image file.
                      <br />
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        &lt;img src="path/to/image.jpg"&gt;
                      </code>
                    </li>
                    <li>
                      <strong className="tw:font-medium!">
                        `alt` (Alternative Text):
                      </strong>
                      Provides descriptive text for the image, crucial for
                      accessibility (screen readers) and when the image cannot
                      be displayed.
                      <br />
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        &lt;img src="logo.png" alt="Company Logo"&gt;
                      </code>
                    </li>
                    <li>
                      <strong className="tw:font-medium!">
                        `width` and `height`:
                      </strong>
                      Specify the dimensions of the image in pixels. It's often
                      better to control image sizing with CSS for more
                      flexibility.
                      <br />
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        &lt;img src="photo.jpg" alt="A scenic view" width="500"
                        height="300"&gt;
                      </code>
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  For `&lt;input&gt;` tags (used in forms):
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                    <li>
                      <strong className="tw:font-medium!">`type`:</strong>
                      Defines the type of input field (e.g., `text`, `password`,
                      `email`, `submit`).
                      <br />
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        &lt;input type="text"&gt;
                      </code>
                    </li>
                    <li>
                      <strong className="tw:font-medium!">`name`:</strong>
                      Used to identify the input field when submitting form
                      data.
                      <br />
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        &lt;input type="email" name="userEmail"&gt;
                      </code>
                    </li>
                    <li>
                      <strong className="tw:font-medium!">
                        `placeholder`:
                      </strong>
                      Provides a hint to the user about what to enter in the
                      input field.
                      <br />
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        &lt;input type="text" placeholder="Enter your name"&gt;
                      </code>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Example and Breakdown Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Putting It All Together: An Example 🧑‍💻
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Let's look at an HTML snippet that uses various elements and
                attributes, and then we'll break it down.
              </p>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Here's what's happening in the code above:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;h1&gt;Understanding HTML Elements &
                    Attributes&lt;/h1&gt;:
                  </strong>
                  This is an <strong>`h1` element</strong>, representing the
                  main heading of the page. It contains the text content
                  "Understanding HTML Elements & Attributes".
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;p style="color: blue; font-size:
                    18px;"&gt;...&lt;/p&gt;:
                  </strong>
                  This is a <strong>`p` element</strong> (paragraph). It uses
                  the global{" "}
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    style
                  </code>{" "}
                  attribute to directly apply CSS rules, making the text blue
                  and setting its font size to 18 pixels.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;img src="..." alt="..." title="..."&gt;:
                  </strong>
                  This is an <strong>`img` element</strong>, which is a
                  self-closing tag. It has three important attributes:
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                    <li>
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        src
                      </code>
                      : Specifies the URL of the image.
                    </li>
                    <li>
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        alt
                      </code>
                      : Provides alternative text for the image, vital for
                      accessibility.
                    </li>
                    <li>
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        title
                      </code>
                      : Displays "This is an example image" as a tooltip when
                      you hover over the image.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;a href="..." target="..." rel="..."
                    class="..."&gt;...&lt;/a&gt;:
                  </strong>
                  This is an <strong>`a` element</strong> (anchor or hyperlink).
                  It has several attributes:
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                    <li>
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        href
                      </code>
                      : The destination URL of the link.
                    </li>
                    <li>
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        target="_blank"
                      </code>
                      : Instructs the browser to open the link in a new tab.
                    </li>
                    <li>
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        rel="noopener noreferrer"
                      </code>
                      : A security measure, especially important when using
                      `target="_blank"`.
                    </li>
                    <li>
                      <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                        class="external-link"
                      </code>
                      : Assigns a class name, which could be used by CSS to
                      style all external links, or by JavaScript to select them.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;div id="infoBox"&gt;...&lt;/div&gt;:
                  </strong>
                  This is a <strong>`div` element</strong>, which is a generic
                  container with no inherent meaning. It's often used to group
                  other elements together for styling or scripting purposes.
                  Here, it has an
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    id
                  </code>{" "}
                  attribute set to "infoBox", making it uniquely identifiable on
                  the page.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                Understanding elements and attributes is key to unlocking the
                full potential of HTML. Practice using them, and you'll soon be
                structuring and describing your web content like a pro! 🚀
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
