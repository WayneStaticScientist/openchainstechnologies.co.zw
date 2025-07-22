import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import { baseUrl, Globals } from "@/utils/globals";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import page from "../page";

// First example for basic links
const section4_example1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML Links</title>
</head>
<body>
    <h1>Basic Links Example</h1>
    <p>
        Visit our <a href="${baseUrl}">Homepage</a>
        to learn more about Openchains Technologies.
    </p>
    <p>
        For external resources, check out
        <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noopener noreferrer">W3Schools HTML Tutorial</a>.
    </p>
    <p>
        If you have questions, <a href="${Globals.Email}">email us</a>!
    </p>
    <p>
        Jump to the <a href="#section2">Second Section</a> on this page.
    </p>
    <p id="section2">This is the Second Section!</p>
</body>
</html>`;

// Second example for more advanced navigation with lists and images
const section4_example2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced HTML Navigation</title>
    <style>
        /* Simple CSS for navigation - more on this in CSS tutorials! */
        nav ul {
            list-style: none; /* Removes bullet points */
            padding: 0;
            display: flex; /* Arranges items horizontally */
            gap: 20px; /* Space between items */
            background-color: #f0f0f0;
            padding: 10px;
            border-radius: 5px;
        }
        nav ul li a {
            text-decoration: none; /* Removes underline */
            color: #333;
            font-weight: bold;
        }
        nav ul li a:hover {
            color: #007bff; /* Changes color on hover */
        }
    </style>
</head>
<body>
    <header>
        <h1>Explore Our Site!</h1>
    </header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <h2>Image as a Link</h2>
        <a href="https://www.openchainstechnologies.shop/products">
            <img src="https://placehold.co/200x150/87CEEB/000000?text=View+Products" alt="Click to view products" title="Click to view our amazing products">
        </a>
        <p>Click the image above to visit our products page.</p>

        <h2>Downloadable File</h2>
        <p>
            Download our company brochure:
            <a href="/documents/brochure.pdf" download="OpenchainsBrochure.pdf">Download PDF</a>
        </p>

        <h2>Telephone Link</h2>
        <p>
            Call us directly: <a href="tel:${Globals.Phone}">${Globals.Phone}</a>
        </p>
    </main>
    <footer>
        <p>&copy; 2025 Openchains Technologies. Happy Navigating!</p>
    </footer>
</body>
</html>`;

export default function HtmlLinksNavigationPage() {
  const page = 3;
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=HTML+Links+and+Navigation"
              alt="HTML Links and Navigation"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              HTML Links & Navigation: Connecting the Web 🔗
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              The true power of the web lies in its interconnectedness! **HTML
              links**, also known as **hyperlinks**, are what allow us to jump
              from one page to another, whether it's on the same website or
              across the globe. This tutorial will show you how to create and
              use them effectively.
            </p>
            ---
            {/* What are HTML Links? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                What Exactly Are HTML Links? 🤔
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                At its core, an HTML link is a clickable piece of text or an
                image that, when clicked, directs the user to another web page,
                a specific section of the same page, a downloadable file, an
                email address, or even a phone number. They are the "hyper" in
                HyperText Markup Language!
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The fundamental HTML element for creating a link is the **anchor
                tag**, denoted by `&lt;a&gt;`.
              </p>
              <div className="tw:bg-blue-50! tw:border-l-4 tw:border-blue-500! tw:text-blue-700! tw:p-4! tw:rounded-md! tw:mb-6!">
                <p className="tw:font-bold!">
                  Key Component: The `href` Attribute
                </p>
                <p>
                  The most important attribute for the `&lt;a&gt;` tag is `href`
                  (hypertext reference). This attribute specifies the
                  **destination URL** (Uniform Resource Locator) that the link
                  points to. Without it, the `&lt;a&gt;` tag won't function as a
                  link.
                </p>
                <code className="tw:bg-blue-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-red-500!">
                  &lt;a href="destination_url"&gt;Link Text&lt;/a&gt;
                </code>
              </div>
            </section>
            ---
            {/* Types of Links Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Different Types of HTML Links and Their Uses 🌐
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    1. Absolute URLs (External Links):
                  </strong>
                  These links point to other websites on the internet. They
                  include the full web address, including `http://` or
                  `https://`.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;a href="https://www.google.com"&gt;Go to
                    Google&lt;/a&gt;
                  </code>
                  <br />
                  <p className="tw:mt-2!">
                    <strong className="tw:font-semibold! tw:text-indigo-600;">
                      Useful attribute: `target="_blank"`
                    </strong>
                    This attribute opens the linked document in a new browser
                    tab or window, preventing users from navigating away from
                    your site. Always use `rel="noopener noreferrer"` with
                    `target="_blank"` for security best practices.
                    <br />
                    <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                      &lt;a href="https://example.com" target="_blank"
                      rel="noopener noreferrer"&gt;Open Example in New
                      Tab&lt;/a&gt;
                    </code>
                  </p>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    2. Relative URLs (Internal Links):
                  </strong>
                  These links point to other pages or resources *within the same
                  website*. You don't need to include the full domain name, just
                  the path relative to the current file.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;a href="about.html"&gt;About Us&lt;/a&gt;
                  </code>{" "}
                  (if about.html is in the same folder)
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;a href="/products/laptops.html"&gt;Laptops&lt;/a&gt;
                  </code>{" "}
                  (for a file in a subfolder from the root)
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    3. Anchor Links (Page Jumps):
                  </strong>
                  These links allow users to jump to a specific section *within
                  the same web page*.
                  <br />
                  <p className="tw:mt-2!">
                    To create an anchor link:
                    <ol className="tw:list-decimal! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                      <li>
                        Give the target element an `id` attribute:{" "}
                        <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                          &lt;h2 id="section-title"&gt;Section Title&lt;/h2&gt;
                        </code>
                      </li>
                      <li>
                        Create a link using `#` followed by the `id`:{" "}
                        <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                          &lt;a href="#section-title"&gt;Go to Section&lt;/a&gt;
                        </code>
                      </li>
                    </ol>
                  </p>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    4. Email Links (`mailto:`):
                  </strong>
                  Opens the user's default email client, pre-filling the
                  recipient's address.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;a href="mailto:support@example.com"&gt;Email
                    Support&lt;/a&gt;
                  </code>
                  <br />
                  You can even pre-fill subject and body:
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;a
                    href="mailto:info@example.com?subject=Inquiry%20from%20Website&body=Hello,%20I%20have%20a%20question..."&gt;Inquire
                    Now&lt;/a&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    5. Telephone Links (`tel:`):
                  </strong>
                  On mobile devices, clicking this link will prompt the user to
                  call the specified number.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;a href="tel:+15551234567"&gt;Call Us&lt;/a&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    6. Download Links:
                  </strong>
                  Allows users to download a file when they click the link. Use
                  the `download` attribute.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;a href="/documents/report.pdf" download&gt;Download
                    Report&lt;/a&gt;
                  </code>
                  <br />
                  You can also suggest a filename:
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;a href="/images/logo.png"
                    download="CompanyLogo.png"&gt;Download Logo&lt;/a&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    7. Image Links:
                  </strong>
                  You can wrap an `&lt;img&gt;` tag inside an `&lt;a&gt;` tag to
                  make an image clickable.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;a href="/gallery.html"&gt;&lt;img src="thumbnail.jpg"
                    alt="View Gallery"&gt;&lt;/a&gt;
                  </code>
                </li>
              </ul>
            </section>
            ---
            {/* Navigation Best Practices Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Building Better Navigation with HTML 🗺️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While individual links are important, creating clear and
                user-friendly **navigation menus** is crucial for any website.
                HTML provides semantic tags to help structure these menus.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;nav&gt; (Navigation Section):
                  </strong>
                  This semantic element is specifically designed for major
                  navigation blocks. It helps assistive technologies identify
                  primary navigation on your page.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;nav&gt;&lt;ul&gt;&lt;li&gt;&lt;a
                    href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;...&lt;/ul&gt;&lt;/nav&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;ul&gt; and &lt;li&gt; (Unordered List Items):
                  </strong>
                  Navigation links are very often structured using unordered
                  lists (`&lt;ul&gt;`) with each link inside a list item
                  (`&lt;li&gt;`). This provides a clean, semantic structure that
                  can be easily styled with CSS.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600;">
                    Descriptive Link Text:
                  </strong>
                  Instead of "Click Here," use descriptive text that tells the
                  user where the link goes (e.g., "Learn More About Our
                  Services"). This is good for both users and SEO.
                </li>
              </ul>
            </section>
            ---
            {/* Code in Action Examples */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Code in Action: Links & Navigation Examples! 🚀
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Let's see some of these link types in practice. Each example
                demonstrates different ways to use the `&lt;a&gt;` tag.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Example 1: Basic Links
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This first example shows a mix of external links, internal page
                jumps, and utility links (email).
              </p>
              <CodeReviewPager code={section4_example1} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-800! tw:mb-3! tw:mt-10!">
                Example 2: Navigation Menu & Advanced Link Types
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Here, we build a simple navigation menu using `&lt;nav&gt;`,
                `&lt;ul&gt;`, and `&lt;li&gt;`, and also demonstrate image
                links, download links, and telephone links. Notice the small CSS
                section to make the navigation horizontal; you'll learn more
                about CSS in future tutorials!
              </p>
              <CodeReviewPager code={section4_example2} />

              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                By mastering HTML links, you're building the true backbone of
                the web. Practice these different types of links and think about
                how they can improve the user experience on your websites!
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
