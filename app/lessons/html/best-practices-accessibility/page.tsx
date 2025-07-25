import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "HTML Accessibility Best Practices - OpenChains Technologies",
  description:
    "Learn HTML accessibility best practices to create inclusive web experiences. Understand semantic HTML, alt text, ARIA roles, and more.",
  openGraph: {
    type: "website",
    url: `${baseUrl}/lessons/html/best-practices-accessibility`,
    title: "HTML Accessibility Best Practices - OpenChains Technologies",
    description:
      "Learn HTML accessibility best practices to create inclusive web experiences. Understand semantic HTML, alt text, ARIA roles, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML Accessibility Best Practices - OpenChains Technologies",
    description:
      "Learn HTML accessibility best practices to create inclusive web experiences. Understand semantic HTML, alt text, ARIA roles, and more.",
  },
  keywords: [
    "HTML accessibility",
    "web accessibility",
    "inclusive design",
    "semantic HTML",
    "ARIA roles",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/html/best-practices-accessibility`,
  },
  metadataBase: new URL(baseUrl),
};
const section10_1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Images & Headings</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 20px; background-color: #f4f7f6; }
        h1, h2, h3 { color: #2c3e50; }
        .example-box { background-color: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 30px; }
        .code-snippet { background-color: #e3f2fd; border-left: 5px solid #2196f3; padding: 15px; border-radius: 8px; margin-top: 20px; }
        .code-snippet pre { background-color: #fff; padding: 10px; border-radius: 5px; overflow-x: auto; }
        img { max-width: 100%; height: auto; display: block; margin-top: 15px; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="example-box">
        <h1>Welcome to Our Nature Blog</h1>
        <p>Explore the beauty of the natural world through our articles and stunning photography.</p>

        <section>
            <h2>Understanding Ecosystems</h2>
            <p>Ecosystems are complex webs of living organisms and their non-living environment.</p>
            <h3>Types of Ecosystems</h3>
            <p>There are various types, from forests to aquatic environments.</p>
            <h4>Forest Ecosystems</h4>
            <p>Forests are dominated by trees and support a vast array of life.</p>
            <img src="https://via.placeholder.com/600x300/A5D6A7/1B5E20?text=Forest+Ecosystem" alt="Lush green forest with tall trees and sunlight filtering through the canopy">
            <p>This image depicts a vibrant forest ecosystem.</p>
        </section>

        <section>
            <h2>Bird Watching Tips</h2>
            <p>Discover how to identify common birds in your backyard.</p>
            <img src="https://via.placeholder.com/600x300/FFECB3/E65100?text=Decorative+Bird" alt="">
            <p>This is a purely decorative image, so its alt text is empty.</p>
        </section>
    </div>

    <div class="code-snippet">
        <h3>HTML for the above content demonstrating \`alt\` text and heading structure:</h3>
        <pre><code><!-- Page's main title -->
<h1>Welcome to Our Nature Blog</h1>
<p>Explore the beauty of the natural world through our articles and stunning photography.</p>

<section>
    <!-- Main section heading -->
    <h2>Understanding Ecosystems</h2>
    <p>Ecosystems are complex webs of living organisms and their non-living environment.</p&amp;gt
    <!-- Subsection heading -->
    <h3>Types of Ecosystems</h3>
    <p>There are various types, from forests to aquatic environments.</p>
    <!-- Sub-subsection heading -->
    <h4>Forest Ecosystems</h4>
    <p>Forests are dominated by trees and support a vast array of life.</p>
    <!-- Image with descriptive alt text for informational purpose -->
    <img src="https://via.placeholder.com/600x300/A5D6A7/1B5E20?text=Forest+Ecosystem" alt="Lush green forest with tall trees and sunlight filtering through the canopy">
    <p>This image depicts a vibrant forest ecosystem.</p>
</section>

<section>
    <h2>Bird Watching Tips</h2>
    <p>Discover how to identify common birds in your backyard.</p>
    <!-- Image with empty alt text for decorative purpose -->
    <img src="https://via.placeholder.com/600x300/FFECB3/E65100?text=Decorative+Bird" alt="">
    <p>This is a purely decorative image, so its alt text is empty.</p>
</section></code></pre>
    </div>
</body>
</html>`;

const section10_2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Forms & Links</title>
    <style>
        body { font-family: 'Roboto', sans-serif; line-height: 1.7; color: #444; margin: 20px; background-color: #e3f2fd; }
        h1 { color: #1a237e; text-align: center; margin-bottom: 30px; }
        .form-section { background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); max-width: 600px; margin: 0 auto 30px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; color: #3f51b5; }
        input[type="text"], input[type="email"], textarea { width: calc(100% - 20px); padding: 10px; border: 1px solid #ccc; border-radius: 5px; font-size: 1em; }
        textarea { resize: vertical; min-height: 80px; }
        button { background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 1.1em; }
        button:hover { background-color: #45a049; }
        .link-section { background-color: #e8eaf6; padding: 25px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto; }
        .link-section h2 { color: #303f9f; }
        a { color: #007bff; text-decoration: none; font-weight: bold; }
        a:hover { text-decoration: underline; }
        .code-snippet { background-color: #bbdefb; border-left: 5px solid #2196f3; padding: 15px; border-radius: 8px; margin-top: 20px; }
        .code-snippet pre { background-color: #fff; padding: 10px; border-radius: 5px; overflow-x: auto; }
    </style>
</head>
<body>
    <h1>Accessibility for Forms and Links</h1>

    <div class="form-section">
        <h2>Contact Us Form</h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="user_name" required>
            </div>
            <div class="form-group">
                <label for="email">Your Email:</label>
                <input type="email" id="email" name="user_email" required>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="user_message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    </div>

    <div class="link-section">
        <h2>Read Our Latest Content</h2>
        <p>Explore our recent articles:</p>
        <ul>
            <li><a href="/article/web-accessibility-guide">Learn more about Web Accessibility in our comprehensive guide.</a></li>
            <li><a href="/privacy-policy">Review our Privacy Policy.</a></li>
            <li><a href="/terms-of-service">Access our Terms of Service.</a></li>
        </ul>
        <p>Avoid generic links like this: For more info, <a href="/faq">click here</a>.</p>
    </div>

    <div class="code-snippet">
        <h3>HTML for the above forms and links:</h3>
        <pre><code><!-- Accessible Form -->
<form action="#" method="post">
    <div class="form-group">
        <label for="name">Your Name:</label> <!-- Label associated with input via 'for' and 'id' -->
        <input type="text" id="name" name="user_name" required>
    </div>
    <div class="form-group">
        <label for="email">Your Email:</label>
        <input type="email" id="email" name="user_email" required>
    </div>
    <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="user_message" required></textarea>
    </div>
    <button type="submit">Send Message</button>
</form>

<!-- Accessible Links -->
<h2>Read Our Latest Content</h2>
<ul>
    <li><a href="/article/web-accessibility-guide">Learn more about Web Accessibility in our comprehensive guide.</a></li>
    <li><a href="/privacy-policy">Review our Privacy Policy.</a></li>
    <li><a href="/terms-of-service">Access our Terms of Service.</a></li>
</ul>
<!-- BAD example of link text -->
<p>Avoid generic links like this: For more info, <a href="/faq">click here</a>.</p>
</code></pre>
    </div>
</body>
</html>`;

const section10_3 = `<!DOCTYPE html>
<html lang="en" lang="en"> <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Accessibility Concepts</title>
    <style>
        body { font-family: 'Open Sans', sans-serif; line-height: 1.7; color: #555; margin: 20px; background-color: #ecf0f1; }
        h1, h2 { color: #2c3e50; }
        .main-section { max-width: 900px; margin: 30px auto; padding: 30px; background-color: white; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.1); }
        .interactive-elements { display: flex; gap: 20px; margin-top: 20px; flex-wrap: wrap; }
        .custom-button {
            padding: 12px 20px; background-color: #3498db; color: white; border-radius: 8px;
            cursor: pointer; transition: background-color 0.3s ease; font-weight: bold;
            display: inline-block; /* To allow padding/margin and avoid full width */
            outline: none; /* Focus outline managed by JS/CSS for custom elements */
            border: none;
        }
        .custom-button:hover { background-color: #2980b9; }
        .custom-button:focus { box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.5); } /* Custom focus style */
        .aria-example { margin-top: 30px; background-color: #d1ecf1; border-left: 5px solid #007bff; padding: 20px; border-radius: 8px; }
        .aria-example h3 { color: #0056b3; margin-top: 0; }
        pre { background-color: #eee; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 0.85em; }
    </style>
</head>
<body>
    <h1>Beyond the Basics: Advanced Accessibility</h1>
    <div class="main-section">
        <p>Accessibility is a continuous journey. While semantic HTML, alt text, and labels cover a lot, more complex interactions might require additional techniques.</p>

        <h2>Keyboard Navigation & Custom Elements</h2>
        <p>Ensuring all interactive elements are reachable and operable via keyboard is fundamental. Browsers handle this for native elements like <code><button></code> and <code><a></code>. For custom interactive elements (like a \`div\` acting as a button), you'll need \`tabindex\` and JavaScript for keyboard events.</p>
        <div class="interactive-elements">
            <button onclick="alert('Native button clicked!')">Native Button</button>
            <div class="custom-button" role="button" tabindex="0" onclick="alert('Custom button clicked!')" onkeydown="if(event.key === 'Enter' || event.key === ' ') { this.click(); }">Custom Div Button</div>
        </div>
        <p class="tw:text-sm tw:text-gray-600 tw:mt-2">Try using your Tab key to navigate and Enter/Space to activate the "Custom Div Button".</p>
        <div class="aria-example">
            <h3>Code for Custom Button (including \`tabindex\` and \`role\`):</h3>
            <pre><code><div class="custom-button" role="button" tabindex="0" onclick="alert('Custom button clicked!')" onkeydown="if(event.key === 'Enter' || event.key === ' ') { this.click(); }">Custom Div Button</div></code></pre>
            <p>
                * \`role="button"\`: Informs assistive technologies that this \`div\` should be treated as a button.
                * \`tabindex="0"\`: Makes the \`div\` focusable by keyboard navigation.
                * \`onkeydown\` for \`Enter\`/\`Space\`: Ensures the button can be activated with common keyboard presses.
            </p>
        </div>

        <h2>ARIA Attributes: When Native HTML Isn't Enough</h2>
        <p>
            Accessible Rich Internet Applications (ARIA) attributes provide additional semantic information to elements that would otherwise be meaningless to assistive technologies. Use ARIA attributes only when native HTML elements don't adequately convey the semantics.
        </p>
        <div class="aria-example">
            <h3>Example: Custom Toggle Switch with ARIA</h3>
            <p>A custom toggle switch implemented with a \`div\` needs ARIA to convey its state.</p>
            <div role="switch" aria-checked="true" tabindex="0" style="padding: 10px; background-color: #a0d9e4; border-radius: 20px; width: 120px; text-align: center; cursor: pointer;">Notifications On</div>
            <pre><code><div role="switch" aria-checked="true" tabindex="0">Notifications On</div></code></pre>
            <p>
                * \`role="switch"\`: Identifies the element as a toggle switch.
                * \`aria-checked="true"\`: Indicates its current state (checked/on). This value should be toggled with JavaScript when the switch is activated.
            </p>
        </div>
    </div>
</body>
</html>`;

export default function HtmlAccessibilityPage() {
  const page = 11; // Assuming this is the 9th page in your tutorial series (0-indexed)
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=Web+Accessibility+A11y"
              alt="Web Accessibility Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              HTML Accessibility Best Practices: Building an Inclusive Web! 🌎
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Web accessibility (often shortened to "a11y") means making your
              websites usable by everyone, regardless of their abilities or the
              technology they use. This includes people with visual, auditory,
              physical, speech, cognitive, and neurological disabilities.
            </p>

            <hr className="my-6 tw:border-gray-300!" />

            {/* What is Web Accessibility? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                What is Web Accessibility (a11y)? 🧑‍🤝‍🧑
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                At its core, web accessibility ensures that individuals with
                disabilities can perceive, understand, navigate, and interact
                with your website. It's about breaking down barriers that
                prevent some people from using the web effectively.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Beyond permanent disabilities, accessibility also benefits:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  Older individuals experiencing age-related changes in vision,
                  hearing, or dexterity.
                </li>
                <li className="tw:leading-relaxed!">
                  People with temporary disabilities (e.g., a broken arm, lost
                  glasses).
                </li>
                <li className="tw:leading-relaxed!">
                  Users with situational limitations (e.g., using a mobile
                  device in bright sunlight, in a noisy environment, or with a
                  slow internet connection).
                </li>
              </ul>
              <p className=" tw:leading-relaxed! tw:font-semibold! tw:text-blue-600!">
                An accessible website is simply a better website for everyone.
              </p>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Why Build Accessible Websites? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Why Prioritize Accessibility? ⚖️
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Ethical and Social Responsibility:
                  </strong>{" "}
                  The web should be available to all, fostering inclusion and
                  equal opportunity.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Legal Compliance:
                  </strong>{" "}
                  Many countries (e.g., USA with ADA, EU with EN 301 549) have
                  legal requirements for web accessibility. Non-compliance can
                  lead to lawsuits and fines.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Expanded Market Reach:
                  </strong>{" "}
                  People with disabilities represent a significant portion of
                  the population with substantial spending power. An accessible
                  site reaches more potential users.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Improved SEO:
                  </strong>{" "}
                  Many accessibility best practices (like clear heading
                  structures, meaningful alt text, and semantic HTML) directly
                  benefit search engine optimization.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Enhanced User Experience for All:
                  </strong>{" "}
                  Features designed for accessibility often make the site easier
                  to use for everyone. For example, clear navigation benefits
                  all users, not just those using screen readers.
                </li>
              </ul>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Key HTML Accessibility Best Practices Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Key HTML Accessibility Best Practices 🛠️
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    1. Semantic HTML! (Revisited) 🏷️
                  </strong>
                  As discussed in the Semantic HTML tutorial, using the correct
                  HTML element for its purpose is the single most important
                  accessibility practice. Screen readers and other assistive
                  technologies rely on this inherent meaning. Always use
                  `&lt;button&gt;` for buttons, `&lt;nav&gt;` for navigation,
                  `&lt;ul&gt;`/`&lt;ol&gt;` for lists, etc., instead of generic
                  `&lt;div&gt;` elements.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    2. Provide Alt Text for Images (`alt` attribute) 🖼️
                  </strong>
                  The `alt` attribute on `&lt;img&gt;` tags provides a text
                  alternative for images. Screen readers announce this text,
                  allowing visually impaired users to understand the image's
                  content or purpose.
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-6! tw:mt-2! tw:space-y-1!">
                    <li>
                      **Descriptive `alt`:** For images that convey meaning or
                      information (e.g., `alt="A user filling out an online
                      form"`).
                    </li>
                    <li>
                      **Empty `alt=""`:** For purely decorative images that
                      provide no essential information (e.g., background
                      patterns, spacer images). This tells screen readers to
                      ignore them.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    3. Use Proper Heading Structure (`&lt;h1&gt;` to
                    `&lt;h6&gt;`) Hierarchically 🧱
                  </strong>
                  Headings create an outline for your page. Use `&lt;h1&gt;` for
                  the main title (only one per page!), `&lt;h2&gt;` for major
                  sections, `&lt;h3&gt;` for subsections, and so on. Do not skip
                  heading levels (e.g., jump from `&lt;h2&gt;` to `&lt;h4&gt;`).
                  Screen reader users often navigate by jumping between headings
                  to get an overview of the page content.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    4. Clear and Descriptive Link Text 🌐
                  </strong>
                  Link text should make sense on its own, without needing
                  surrounding context. Avoid generic phrases like "Click here"
                  or "Read more". Instead, make the link text descriptive of its
                  destination. (e.g., `&lt;a href="/privacy-policy"&gt;Privacy
                  Policy&lt;/a&gt;` instead of `&lt;a
                  href="/privacy-policy"&gt;Click here&lt;/a&gt;`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    5. Use Form Labels (`&lt;label&gt;` with `for` and `id`) ✍️
                  </strong>
                  Always associate a `&lt;label&gt;` element with its form input
                  using the `for` attribute on the `&lt;label&gt;` matching the
                  `id` of the input. This allows screen readers to announce the
                  label when the user focuses on the input field, and it also
                  makes the label clickable to focus the input.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    6. Ensure Keyboard Navigability (Tab Order) ⌨️
                  </strong>
                  All interactive elements on your page (links, buttons, form
                  fields, custom widgets) must be accessible and operable using
                  only the keyboard (Tab key to navigate, Enter/Space to
                  activate). Semantic HTML elements handle this naturally. For
                  custom elements, you might need to use the `tabindex`
                  attribute and JavaScript for event handling.
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-6! tw:mt-2! tw:space-y-1!">
                    <li>
                      `tabindex="0"`: Makes an element focusable and places it
                      in the natural tab order.
                    </li>
                    <li>
                      `tabindex="-1"`: Makes an element programmatically
                      focusable (e.g., with JavaScript) but removes it from the
                      natural tab order.
                    </li>
                    <li>
                      **Avoid `tabindex` values greater than 0 (`tabindex="1"`,
                      etc.)** as they disrupt the natural tab order and create
                      confusing experiences.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    7. ARIA Attributes (Accessible Rich Internet Applications)
                    ⭐
                  </strong>
                  ARIA provides attributes (`role`, `aria-label`,
                  `aria-describedby`, `aria-live`, etc.) to convey semantic
                  meaning to assistive technologies for complex UI widgets or
                  dynamic content where native HTML isn't sufficient. **The
                  first rule of ARIA is to not use ARIA.** Only use ARIA when a
                  native HTML element cannot achieve the necessary
                  accessibility.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    8. Language Declaration (`lang` attribute) 🗣️
                  </strong>
                  Always declare the primary language of your document on the
                  `&lt;html&gt;` tag (e.g., `&lt;html lang="en"&gt;`). This
                  helps screen readers pronounce the content correctly and
                  enables translation tools to work effectively.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    9. Sufficient Color Contrast 🌈
                  </strong>
                  Ensure there is enough contrast between text and its
                  background. Low contrast can make text unreadable for people
                  with low vision or color blindness. Adhere to WCAG (Web
                  Content Accessibility Guidelines) standards (at least 4.5:1
                  for normal text).
                </li>
              </ul>
            </section>

            {/* Code in Action 1 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 1: Accessible Images and Headings 🖼️🧱
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example demonstrates proper use of `alt` attributes for
                images and correct hierarchical heading (`&lt;h1&gt;` to
                `&lt;h4&gt;`) structure.
              </p>
              <CodeReviewPager code={section10_1} />
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Code in Action 2 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 2: Accessible Forms and Links ✍️🌐
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                See how linking `&lt;label&gt;` elements to inputs and using
                descriptive link text significantly improves usability for all.
              </p>
              <CodeReviewPager code={section10_2} />
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Code in Action 3 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 3: Keyboard Navigation & ARIA ⌨️⭐
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example demonstrates how to make custom interactive
                elements keyboard-accessible using `tabindex` and
                `role="button"`. It also touches upon the crucial role of ARIA
                attributes when native HTML isn't enough.
              </p>
              <CodeReviewPager code={section10_3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                Building accessible websites isn't just a compliance checklist;
                it's about creating a welcoming and functional experience for
                everyone. By integrating these HTML best practices into your
                workflow, you contribute to a more inclusive and equitable web.
                Keep learning and building for all! 🚀
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
