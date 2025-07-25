import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "HTML Lists: Organizing Your Content Neatly! 📋",
  description:
    "Learn how to use HTML lists to structure your content effectively.",
  keywords: "HTML, lists, web development, tutorials",
  openGraph: {
    title: "HTML Lists: Organizing Your Content Neatly! 📋",
    description:
      "Learn how to use HTML lists to structure your content effectively.",
    url: `${baseUrl}/lessons/html/lists`,
  },
  alternatives: {
    canonical: `${baseUrl}/lessons/html/lists`,
  },
  metadataBase: new URL(baseUrl),
};
const section4 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Lists</title>
</head>
<body>
    <header>
        <h1>HTML Lists: Organizing Your Content Neatly! 📋</h1>
    </header>
    <main>
        <h2>Unordered Lists (ul)</h2>
        <p>This is a list of my favorite fruits:</p>
        <ul>
            <li>Apples 🍎</li>
            <li>Bananas 🍌</li>
            <li>Oranges 🍊</li>
        </ul>

        <h2>Ordered Lists (ol)</h2>
        <p>Steps to make a perfect cup of tea:</p>
        <ol>
            <li>Boil water ♨️</li>
            <li>Add tea bag to cup ☕</li>
            <li>Pour hot water over tea bag</li>
            <li>Steep for 3-5 minutes</li>
            <li>Remove tea bag and enjoy! 😊</li>
        </ol>

        <h2>Description Lists (dl)</h2>
        <p>Common web development terms:</p>
        <dl>
            <dt>HTML</dt>
            <dd>HyperText Markup Language, the standard markup language for documents designed to be displayed in a web browser.</dd>
            <dt>CSS</dt>
            <dd>Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in HTML.</dd>
            <dt>JavaScript</dt>
            <dd>A programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</dd>
        </dl>

        <h2>Nested Lists</h2>
        <p>A more complex list structure:</p>
        <ul>
            <li>Electronics
                <ol>
                    <li>Laptops
                        <ul>
                            <li>MacBook Pro</li>
                            <li>Dell XPS</li>
                        </ul>
                    </li>
                    <li>Smartphones
                        <ul>
                            <li>iPhone 15</li>
                            <li>Samsung Galaxy S24</li>
                        </ul>
                    </li>
                </ol>
            </li>
            <li>Books
                <ol>
                    <li>Fiction</li>
                    <li>Non-fiction</li>
                </ol>
            </li>
        </ul>
    </main>
    <footer>
        <p>&copy; 2024 Openchains Technologies. Listing the web, one item at a time!</p>
    </footer>
</body>
</html>`;

export default function HtmlListsPage() {
  const page = 5; // Assuming this is the 3rd page in your tutorial series (0-indexed)
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=HTML+Lists"
              alt="HTML Lists Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              HTML Lists: Organizing Your Content Neatly! 📋
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Beyond just formatting text, HTML allows you to structure content
              into different types of lists, making information easy to read and
              understand. Lists are fundamental for creating organized and
              accessible web pages.
            </p>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Why Lists? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Why are Lists Important in HTML? 📝
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Lists are essential for good web design and user experience
                because they:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Improve Readability:
                  </strong>{" "}
                  Break up large blocks of text, making content easier to scan
                  and digest.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Enhance Accessibility:
                  </strong>{" "}
                  Screen readers interpret list structures, helping users with
                  visual impairments navigate and understand hierarchical
                  information.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Boost SEO:
                  </strong>{" "}
                  Well-structured lists can help search engines understand the
                  key points and relationships within your content, potentially
                  improving search rankings.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Provide Structure:
                  </strong>{" "}
                  Offer a logical way to group related items, steps, or
                  definitions.
                </li>
              </ul>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Types of HTML Lists Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Types of HTML Lists 📂
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                HTML provides three main types of lists, each serving a distinct
                purpose:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;ul&gt; (Unordered List):
                  </strong>
                  Used for lists where the order of items does not matter. Each
                  list item is typically marked with bullet points.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;ul&gt; &lt;li&gt;Milk&lt;/li&gt;
                    &lt;li&gt;Eggs&lt;/li&gt; &lt;li&gt;Bread&lt;/li&gt;
                    &lt;/ul&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;ol&gt; (Ordered List):
                  </strong>
                  Used for lists where the order of items is important, such as
                  steps in a recipe or a ranking. Each list item is typically
                  marked with numbers or letters.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;ol&gt; &lt;li&gt;First step&lt;/li&gt; &lt;li&gt;Second
                    step&lt;/li&gt; &lt;/ol&gt;
                  </code>
                  <br />
                  You can also change the type of marker using the `type`
                  attribute (e.g., `type="A"`, `type="i"`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;dl&gt; (Description List):
                  </strong>
                  Used for a list of terms and their descriptions. It's often
                  used for glossaries, FAQs, or metadata.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;dl&gt; &lt;dt&gt;Term&lt;/dt&gt; &lt;dd&gt;Description
                    of the term.&lt;/dd&gt; &lt;/dl&gt;
                  </code>
                  <br />
                  The `&lt;dt&gt;` tag defines the **term**, and the
                  `&lt;dd&gt;` tag defines the **description** of the term.
                </li>
              </ul>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* List Items and Nesting Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                List Items and Nesting 🏗️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Regardless of the list type, each item within an `&lt;ul&gt;` or
                `&lt;ol&gt;` is defined by the `&lt;li&gt;` (list item) tag. You
                can also create **nested lists** to represent hierarchical
                information by placing a list (`&lt;ul&gt;` or `&lt;ol&gt;`)
                inside another list item `&lt;li&gt;`.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `&lt;li&gt;` (List Item):
                  </strong>{" "}
                  The core element for any item in an ordered or unordered list.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;ul&gt;&lt;li&gt;Item 1&lt;/li&gt;&lt;li&gt;Item
                    2&lt;/li&gt;&lt;/ul&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Nesting Lists:
                  </strong>{" "}
                  Embedding a list within another list item allows for complex
                  structures.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;ul&gt; &lt;li&gt;Category 1 &lt;ol&gt;
                    &lt;li&gt;Sub-item 1.1&lt;/li&gt; &lt;li&gt;Sub-item
                    1.2&lt;/li&gt; &lt;/ol&gt; &lt;/li&gt; &lt;li&gt;Category
                    2&lt;/li&gt; &lt;/ul&gt;
                  </code>
                </li>
              </ul>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Live Example Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                See Lists in Action! 🎬
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Below is an interactive example demonstrating all three types of
                HTML lists, including a nested list to show how you can create
                more complex organizational structures.
              </p>
              <CodeReviewPager code={section4} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                Mastering HTML lists is crucial for creating well-structured and
                user-friendly web pages. Experiment with different list types
                and nesting to organize your content effectively! Keep
                practicing, and you'll be a list master in no time! 💪
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
