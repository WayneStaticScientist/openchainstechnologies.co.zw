import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "Semantic HTML5: Building Meaningful Web Pages!",
  description:
    "Learn how to use semantic HTML5 elements to create more meaningful and accessible web pages.",
  keywords: ["HTML5", "semantic", "web development", "accessibility"],
  openGraph: {
    title: "Semantic HTML5: Building Meaningful Web Pages!",
    description:
      "Learn how to use semantic HTML5 elements to create more meaningful and accessible web pages.",
    url: `${baseUrl}/lessons/html/semantic-html5`,
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/semantic-html5`,
  },
  metadataBase: new URL(baseUrl),
};
const section7_1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic Header & Navigation</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f7f6; }
        header { background-color: #2c3e50; color: white; padding: 20px; text-align: center; }
        header h1 { margin: 0; font-size: 2.5em; }
        nav { background-color: #34495e; padding: 10px 0; }
        nav ul { list-style: none; padding: 0; margin: 0; text-align: center; }
        nav ul li { display: inline; margin: 0 15px; }
        nav ul li a { color: white; text-decoration: none; font-weight: bold; }
        nav ul li a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <header>
        <h1>Our Company Name</h1>
        <p>Innovating the Future</p>
    </header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    <main style="padding: 20px;">
        <h2>Welcome to Our Website!</h2>
        <p>This is the main content area of our page.</p>
    </main>
</body>
</html>`;

const section7_2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic Article & Aside</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #e8f5e9; }
        .container { display: flex; max-width: 1200px; margin: 20px auto; padding: 0 15px; gap: 20px; }
        article { flex: 3; background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        article h2 { color: #2e7d32; margin-top: 0; }
        aside { flex: 1; background-color: #f0f4c3; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        aside h3 { color: #827717; margin-top: 0; }
        aside ul { list-style: none; padding: 0; }
        aside ul li { margin-bottom: 8px; }
        aside ul li a { text-decoration: none; color: #558b2f; font-weight: bold; }
        aside ul li a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <article>
            <h2>The Benefits of Green Living</h2>
            <p><strong>Published on: <time datetime="2024-07-23">July 23, 2024</time></strong></p>
            <p>Going green is more than just a trend; it's a lifestyle choice that benefits both individuals and the planet. From reducing your carbon footprint to saving money on energy bills, the advantages are numerous.</p>
            <p>One of the primary benefits is improved health. By opting for organic foods and natural products, you reduce exposure to harmful chemicals. Furthermore, engaging in activities like gardening or cycling contributes to physical well-being.</p>
            <h3>Reducing Your Carbon Footprint</h3>
            <p>Simple actions like using public transport, carpooling, or investing in electric vehicles can significantly decrease your environmental impact. Energy-efficient appliances and renewable energy sources for homes also play a crucial role.</p>
            <figure>
                <img src="https://via.placeholder.com/400x250/A5D6A7/1B5E20?text=Sustainable+Living" alt="Image of sustainable living practices">
                <figcaption>Embracing sustainable practices for a healthier planet.</figcaption>
            </figure>
            <p>Ultimately, a green lifestyle fosters a deeper connection with nature and promotes a more sustainable future for generations to come. It's a journey of continuous learning and positive impact.</p>
        </article>

        <aside>
            <h3>Related Articles</h3>
            <ul>
                <li><a href="#">Composting 101</a></li>
                <li><a href="#">Benefits of Solar Power</a></li>
                <li><a href="#">Eco-Friendly Home Decor</a></li>
            </ul>
            <h3>Quick Tip!</h3>
            <p>Remember to <mark>unplug electronics</mark> when not in use to save energy!</p>
        </aside>
    </div>
</body>
</html>`;

const section7_3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Semantic Page Layout</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f7f9fc; color: #333; }
        .site-header { background-color: #6200ea; color: white; padding: 25px 0; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
        .site-header h1 { margin: 0; font-size: 2.8em; letter-spacing: 1px; }
        .site-nav { background-color: #3f51b5; padding: 12px 0; }
        .site-nav ul { list-style: none; padding: 0; margin: 0; text-align: center; }
        .site-nav ul li { display: inline-block; margin: 0 20px; }
        .site-nav ul li a { color: white; text-decoration: none; font-weight: bold; font-size: 1.1em; transition: color 0.3s ease; }
        .site-nav ul li a:hover { color: #ffeb3b; } /* Yellow hover */
        .page-main { max-width: 1000px; margin: 30px auto; padding: 0 20px; display: flex; flex-wrap: wrap; gap: 30px; }
        .main-content-section { flex: 2; min-width: 300px; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .main-content-section h2 { color: #6200ea; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px; margin-bottom: 20px; }
        .article-card { background-color: #fcfcfc; border: 1px solid #eee; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .article-card h3 { color: #3f51b5; margin-top: 0; }
        .sidebar-aside { flex: 1; min-width: 250px; background-color: #e8eaf6; padding: 25px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .sidebar-aside h3 { color: #303f9f; border-bottom: 1px solid #c5cae9; padding-bottom: 10px; margin-bottom: 20px; }
        .sidebar-aside ul { list-style: none; padding: 0; }
        .sidebar-aside ul li { margin-bottom: 10px; }
        .sidebar-aside ul li a { text-decoration: none; color: #1a237e; font-weight: bold; }
        .sidebar-aside ul li a:hover { text-decoration: underline; color: #0d47a1; }
        .site-footer { background-color: #333; color: white; text-align: center; padding: 20px 0; margin-top: 40px; }
        .site-footer p { margin: 0; font-size: 0.9em; }
    </style>
</head>
<body>
    <header class="site-header">
        <h1>My Awesome Blog</h1>
        <p>Your daily dose of knowledge and inspiration</p>
    </header>

    <nav class="site-nav">
        <ul>
            <li><a href="/">Blog</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/archive">Archive</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>

    <main class="page-main">
        <section class="main-content-section">
            <h2>Latest Articles</h2>
            <article class="article-card">
                <h3>Understanding Web Accessibility</h3>
                <p>Published: <time datetime="2024-07-20">July 20, 2024</time></p>
                <p>Learn why making your website accessible is crucial for all users, including those with disabilities...</p>
                <a href="/articles/web-accessibility">Read More</a>
            </article>
            <article class="article-card">
                <h3>The Power of CSS Grid</h3>
                <p>Published: <time datetime="2024-07-15">July 15, 2024</time></p>
                <p>Discover how CSS Grid revolutionizes layout design in modern web development...</p>
                <a href="/articles/css-grid">Read More</a>
            </article>
        </section>

        <aside class="sidebar-aside">
            <h3>Popular Tags</h3>
            <ul>
                <li><a href="/tags/html">#HTML</a></li>
                <li><a href="/tags/css">#CSS</a></li>
                <li><a href="/tags/javascript">#JavaScript</a></li>
                <li><a href="/tags/web-design">#WebDesign</a></li>
            </ul>
            <h3>About the Author</h3>
            <p>John Doe is a passionate web developer with over 10 years of experience. He loves sharing his knowledge with the community.</p>
        </aside>
    </main>

    <footer class="site-footer">
        <p>
            &copy; 2024 My Awesome Blog. All rights reserved. |
            <a href="/privacy-policy" style="color:white;">Privacy Policy</a>
        </p>
    </footer>
</body>
</html>`;

export default function HtmlSemanticPage() {
  const page = 8; // Assuming this is the 6th page in your tutorial series (0-indexed)
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=Semantic+HTML5"
              alt="Semantic HTML5 Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Semantic HTML5: Building Meaningful Web Pages! 💡
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Semantic HTML5 is about using HTML elements according to their
              meaning, rather than just their appearance. It's about giving
              context and structure to your content, making it more
              understandable for both browsers and developers.
            </p>

            <hr className="my-6 tw:border-gray-300!" />

            {/* What is Semantic HTML? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                What is Semantic HTML? 🤔
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                In the early days of the web, developers often used generic
                `&lt;div&gt;` elements with IDs or classes (e.g., `&lt;div
                id="header"&gt;`, `&lt;div class="sidebar"&gt;`) to structure
                their pages. While this worked visually, it lacked inherent
                meaning for machines.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Semantic HTML5** introduces new elements that clearly define
                the structure and purpose of different parts of a web page.
                Instead of just being a container, elements like
                `&lt;header&gt;`, `&lt;nav&gt;`, `&lt;main&gt;`,
                `&lt;article&gt;`, `&lt;section&gt;`, `&lt;aside&gt;`, and
                `&lt;footer&gt;` tell the browser, search engines, and assistive
                technologies what type of content they contain.
              </p>
              <h3 className="tw:text-xl! tw:font-semibold! tw:text-gray-700! tw:mb-3!">
                The Problem with "Div Soup" vs. Semantic Solution:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-2!">
                Consider a typical website layout. Without semantic tags, you'd
                might see something like this:
              </p>
              <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:text-sm! tw:overflow-x-auto! tw:mb-4!">
                <code className="language-html">
                  &lt;div id="header"&gt;...&lt;/div&gt; &lt;div
                  class="navigation"&gt;...&lt;/div&gt; &lt;div
                  class="main-content"&gt;...&lt;/div&gt; &lt;div
                  id="sidebar"&gt;...&lt;/div&gt; &lt;div
                  class="footer"&gt;...&lt;/div&gt;
                </code>
              </pre>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                With Semantic HTML5, the same structure becomes much more
                meaningful:
              </p>
              <pre className="tw:bg-gray-100! tw:p-3! tw:rounded! tw:text-sm! tw:overflow-x-auto! tw:mb-4!">
                <code className="language-html">
                  &lt;header&gt;...&lt;/header&gt; &lt;nav&gt;...&lt;/nav&gt;
                  &lt;main&gt;...&lt;/main&gt; &lt;aside&gt;...&lt;/aside&gt;
                  &lt;footer&gt;...&lt;/footer&gt;
                </code>
              </pre>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Why Semantic HTML Matters */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Why Semantic HTML Matters So Much 🌟
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Improved Accessibility:
                  </strong>{" "}
                  Screen readers and other assistive technologies rely on
                  semantic markup to understand the structure and hierarchy of a
                  page. This allows users with disabilities to navigate and
                  consume content more effectively.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Better SEO (Search Engine Optimization):
                  </strong>{" "}
                  Search engines (like Google) use semantic elements to
                  understand the content and context of your web page. This
                  helps them index your site more accurately and potentially
                  rank higher in search results.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Easier Maintainability and Collaboration:
                  </strong>{" "}
                  When code is semantic, it's easier for developers (including
                  your future self!) to understand the purpose of each section
                  without relying solely on comments or IDs/classes. This leads
                  to cleaner, more maintainable codebases.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Future-Proofing:
                  </strong>{" "}
                  As web standards evolve, semantic elements provide a more
                  stable and predictable foundation for your web pages.
                </li>
              </ul>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Key Semantic HTML5 Elements Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Key Semantic HTML5 Elements and Their Purpose 🏷️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Let's dive into the most commonly used semantic elements:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;header&gt;`:
                  </strong>
                  Represents introductory content, typically containing
                  headings, logos, search forms, and navigation for a section or
                  the entire document.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;nav&gt;`:
                  </strong>
                  Defines a section containing navigation links. This is for the
                  main navigation of a site or a major section of a page.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;main&gt;`:
                  </strong>
                  Represents the dominant content of the `&lt;body&gt;`. There
                  should only be one `&lt;main&gt;` element per document, and it
                  should contain content unique to that document, excluding
                  repeated elements like headers, footers, and sidebars.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;article&gt;`:
                  </strong>
                  Represents a self-contained composition that is independently
                  distributable or reusable. Think of a blog post, a news
                  article, a forum post, or a user comment.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;section&gt;`:
                  </strong>
                  Represents a standalone section of a document, which doesn't
                  have a more specific semantic element to represent it. It
                  should typically have a heading. Examples include chapters,
                  tabbed content, or any logical grouping of content within an
                  `&lt;article&gt;` or `&lt;main&gt;`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;aside&gt;`:
                  </strong>
                  Represents a portion of a document whose content is only
                  indirectly related to the document's main content. Often used
                  for sidebars, pull quotes, or advertisements.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;footer&gt;`:
                  </strong>
                  Represents a footer for its nearest sectioning content or
                  sectioning root element. Typically contains copyright
                  information, author info, contact details, or related links.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;figure&gt;` and `&lt;figcaption&gt;`:
                  </strong>
                  `&lt;figure&gt;` is for self-contained content (like images,
                  code listings, charts) that is referenced from the main
                  content. `&lt;figcaption&gt;` provides a caption for the
                  `&lt;figure&gt;`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;mark&gt;`:
                  </strong>
                  Used to highlight text that is relevant in the current
                  context.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;time&gt;`:
                  </strong>
                  Represents a specific period in time or a date, often with a
                  `datetime` attribute for machine readability.
                </li>
              </ul>
            </section>

            {/* Code in Action 1 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 1: Basic Header and Navigation 🏗️
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Let's see how `&lt;header&gt;` and `&lt;nav&gt;` are used to
                structure the top part of a typical webpage, providing clear
                semantic meaning.
              </p>
              <CodeReviewPager code={section7_1} />
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Code in Action 2 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 2: Article, Aside, Figure, and Mark 📰
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example demonstrates how an `&lt;article&gt;` can contain
                the main content (like a blog post), an `&lt;aside&gt;` can hold
                related information, and `&lt;figure&gt;/&lt;figcaption&gt;` are
                used for images with captions, while `&lt;mark&gt;` highlights
                text.
              </p>
              <CodeReviewPager code={section7_2} />
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Code in Action 3 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 3: Full Semantic Page Layout 🎨
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Here's a comprehensive example showing how multiple semantic
                elements work together to create a well-structured and
                meaningful web page layout. Notice the `&lt;main&gt;`,
                `&lt;section&gt;`, `&lt;article&gt;`, and `&lt;footer&gt;`
                elements.
              </p>
              <CodeReviewPager code={section7_3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                Embracing Semantic HTML5 is a best practice for modern web
                development. It leads to more robust, accessible, and
                SEO-friendly websites. By using these elements correctly, you're
                not just writing HTML; you're telling a more coherent story
                about your content to both machines and humans. Keep up the
                great work! 💪
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
