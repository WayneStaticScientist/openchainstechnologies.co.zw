import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import page from "../page";

const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Text Formatting</title>
</head>
<body>
    <header>
        <h1>HTML Text Formatting: Making Your Content Stand Out! ✨</h1>
    </header>
    <main>
        <h2>Emphasis and Importance</h2>
        <p>This is a normal paragraph of text.</p>

        <p>This text is <b>bold</b> using the b tag, typically for visual distinction.</p>
        <p>This text is <strong>important</strong> and also bold using the strong tag, conveying semantic importance.</p>

        <p>This text is <i>italic</i> using the i tag, often for technical terms or foreign phrases.</p>
        <p>This text is <em>emphasized</em> and also italic using the em tag, indicating stress or importance.</p>

        <h2>Other Formatting Options</h2>
        <p>You can mark text as <mark>highlighted</mark>, like a search result.</p>
        <p>This text is <small>smaller</small>, often used for disclaimers or copyright notices.</p>

        <p>Water is H<sub>2</sub>O (subscript).</p>
        <p>E = mc<sup>2</sup> (superscript).</p>

        <p>The old price was <del>$20.00</del>, now it's <ins>$15.00</ins> (deleted and inserted text).</p>

        <h2>Quotations and Addresses</h2>
        <p>My friend often says, <q>Learning to code is empowering!</q> (short quotation).</p>
        <blockquote>
            <p>
                "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past."
            </p>
            <cite>-- Tim Berners-Lee</cite>
        </blockquote>

        <address>
            <p>
                Openchains Technologies Headquarters<br>
                123 Tech Avenue, Silicon Valley<br>
                Innovation City, CA 90210<br>
                USA<br>
                Email: <a href="mailto:info@openchainstech.shop">info@openchainstech.shop</a>
            </p>
        </address>

        <h2>Code and Preformatted Text</h2>
        <p>
            When writing code, you might use the <code>&lt;code&gt;</code> tag for inline code snippets,
            like console.log("Hello, World!");.
        </p>
        <pre>
            <code>
function greet(name) {
    return "Hello, " + name + "!";
}
// This is preformatted text, preserving spaces and line breaks.
            </code>
        </pre>
    </main>
    <footer>
        <p>&copy; 2024 Openchains Technologies. Formatting the web, one tag at a time!</p>
    </footer>
</body>
</html>`;

export default function HtmlTextFormattingPage() {
  const page = 2;
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=HTML+Text+Formatting"
              alt="HTML Text Formatting Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              HTML Text Formatting: Making Your Content Stand Out! ✨
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              After understanding elements and attributes, let's explore how
              HTML helps you give your text meaning and presentation. These tags
              go beyond just displaying text; they describe the **importance**
              or **purpose** of the text.
            </p>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Why Text Formatting? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Why is Text Formatting Important in HTML? ✍️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While CSS is the primary tool for visual styling (like changing
                colors or font sizes), HTML provides semantic tags that give
                meaning to your text. This is crucial for:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Accessibility:
                  </strong>{" "}
                  Screen readers use these semantic tags to interpret content
                  for users with visual impairments. Knowing if text is
                  "important"
                  {`<strong>`} versus just "bold" {`<b>`} helps them convey the
                  right emphasis.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Search Engine Optimization (SEO):
                  </strong>{" "}
                  Search engines better understand the content and its
                  importance, which can help your page rank higher in search
                  results.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Maintainability:
                  </strong>{" "}
                  It makes your code cleaner and easier to understand for other
                  developers (or your future self!).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Default Styling:
                  </strong>{" "}
                  Browsers apply default styles to these tags (e.g.,{" "}
                  {`<strong>`} is typically bold, {`<em>`} is italic), providing
                  a basic visual hierarchy even without custom CSS.
                </li>
              </ul>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Common Text Formatting Tags Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Essential HTML Text Formatting Tags 🏷️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Here are some of the most commonly used HTML tags for text
                formatting, along with their semantic meaning (where
                applicable), and multiple examples to illustrate their usage:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;b&gt; (Bold Text):
                  </strong>
                  Used to **bold** text, but without conveying any extra
                  importance. It's purely for visual distinction.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;This text is &lt;b&gt;bold&lt;/b&gt; for visual
                    emphasis.&lt;/p&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;This recipe calls for &lt;b&gt;fresh&lt;/b&gt;
                    ingredients.&lt;/p&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;strong&gt; (Important Text):
                  </strong>
                  Used to indicate that the text is of **strong importance**,
                  seriousness, or urgency. Browsers usually display it as bold.
                  This is a semantic tag.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;Please &lt;strong&gt;do not share&lt;/strong&gt;
                    your password.&lt;/p&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;&lt;strong&gt;Warning:&lt;/strong&gt; This action
                    is irreversible.&lt;/p&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;i&gt; (Italic Text):
                  </strong>
                  Used to italicize text, typically for technical terms, foreign
                  words, or thoughts. No extra semantic importance.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;The &lt;i&gt;Homo sapiens&lt;/i&gt; species is
                    fascinating.&lt;/p&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;She sang a beautiful
                    &lt;i&gt;aria&lt;/i&gt;.&lt;/p&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;em&gt; (Emphasized Text):
                  </strong>
                  Used to add **emphasis** to text, indicating a stress on the
                  content. Browsers usually display it as italic. This is a
                  semantic tag.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;I &lt;em&gt;really&lt;/em&gt; enjoyed that
                    book.&lt;/p&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;You &lt;em&gt;must&lt;/em&gt; see this
                    movie!&lt;/p&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;mark&gt; (Marked/Highlighted Text):
                  </strong>
                  Used to **highlight** parts of text, for example, to denote
                  relevance in a search result or a specific section of a
                  document. This is a semantic tag.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;The answer is in the &lt;mark&gt;blue
                    box&lt;/mark&gt;.&lt;/p&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;Search results for: &lt;mark&gt;HTML
                    tags&lt;/mark&gt;.&lt;/p&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;small&gt; (Smaller Text):
                  </strong>
                  Represents side comments and **small print**, like copyright
                  notices, disclaimers, or legal text.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;&lt;small&gt;Copyright &copy; 2024. All rights
                    reserved.&lt;/small&gt;&lt;/p&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;*&lt;small&gt;Terms and conditions
                    apply.&lt;/small&gt;&lt;/p&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;del&gt; (Deleted Text):
                  </strong>
                  Represents a range of text that has been **deleted** from a
                  document. Browsers usually strike a line through it. This is a
                  semantic tag.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;Old price: &lt;del&gt;$20.00&lt;/del&gt; New price:
                    $15.00&lt;/p&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;Removed feature:
                    &lt;del&gt;Guestbook&lt;/del&gt;.&lt;/p&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;ins&gt; (Inserted Text):
                  </strong>
                  Represents a range of text that has been **added** to a
                  document. Browsers usually underline it. This is a semantic
                  tag.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;Old price: $20.00 &lt;ins&gt;New price:
                    $15.00&lt;/ins&gt;&lt;/p&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;Added functionality: &lt;ins&gt;User
                    Profiles&lt;/ins&gt;.&lt;/p&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;sub&gt; (Subscript Text):
                  </strong>
                  Used for **subscript** text, like in chemical formulas or
                  mathematical expressions.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;Water: H&lt;sub&gt;2&lt;/sub&gt;O&lt;/p&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;Logarithm base:
                    log&lt;sub&gt;10&lt;/sub&gt;(x)&lt;/p&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;sup&gt; (Superscript Text):
                  </strong>
                  Used for **superscript** text, like in exponents or ordinal
                  indicators.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;E = mc&lt;sup&gt;2&lt;/sup&gt;&lt;/p&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;The 1&lt;sup&gt;st&lt;/sup&gt; place
                    winner.&lt;/p&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;q&gt; (Short Quotation):
                  </strong>
                  Used for **short inline quotations**. Browsers usually add
                  quotation marks around the content. This is a semantic tag.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;As Shakespeare said: &lt;q&gt;To be or not to
                    be&lt;/q&gt;.&lt;/p&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;She exclaimed, &lt;q&gt;That's
                    incredible!&lt;/q&gt;.&lt;/p&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;blockquote&gt; (Block Quotation):
                  </strong>
                  Used for **longer quotations** that take up multiple lines. It
                  typically indents the quoted text. The optional `cite`
                  attribute can point to the source. This is a semantic tag.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;blockquote
                    cite="https://www.w3.org/TR/html5/text-level-semantics.html#the-blockquote-element"&gt;&lt;p&gt;This
                    is a longer quote from an external source, often displayed
                    indented.&lt;/p&gt;&lt;/blockquote&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;blockquote&gt;&lt;p&gt;Innovation distinguishes between
                    a leader and a follower.&lt;/p&gt;&lt;cite&gt;-- Steve
                    Jobs&lt;/cite&gt;&lt;/blockquote&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;address&gt; (Contact Information):
                  </strong>
                  Used to provide **contact information** for the author/owner
                  of a document or an article. This is a semantic tag.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;address&gt;Written by &lt;a
                    href="mailto:johndoe@example.com"&gt;John
                    Doe&lt;/a&gt;.&lt;/address&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;address&gt;Visit us at:&lt;br&gt;123 Web
                    Street&lt;br&gt;Internet City, WC 98765&lt;/address&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;code&gt; (Code Snippet):
                  </strong>
                  Used for **inline code snippets**. Browsers typically display
                  this in a monospace font. This is a semantic tag.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;Use the &lt;code&gt;console.log()&lt;/code&gt;
                    function for debugging.&lt;/p&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;p&gt;The `div` element is written as
                    &lt;code&gt;&amp;lt;div&amp;gt;&lt;/code&gt;.&lt;/p&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    &lt;pre&gt; (Preformatted Text):
                  </strong>
                  Used for **preformatted text**. The text inside a
                  `&lt;pre&gt;` element is displayed in a fixed-width font
                  (usually Courier), and it preserves both spaces and line
                  breaks. This is useful for displaying blocks of code, ASCII
                  art, or poetry.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;pre&gt;console.log("Hello,
                    World!");&lt;br&gt;alert("Welcome!");&lt;/pre&gt;
                  </code>
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;pre&gt; +---+ | | +---+ ASCII Art &lt;/pre&gt;
                  </code>
                </li>
              </ul>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Semantic vs. Presentational Tags Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Semantic vs. Presentational: What's the Difference? 🤔
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You might notice that some tags like {`<b>`} and {`<strong>`}{" "}
                often produce similar visual results (bold text). However, their
                **meaning** to the browser and assistive technologies is
                different:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Presentational Tags (`&lt;b&gt;`, `&lt;i&gt;`, `&lt;u&gt;`):
                  </strong>
                  These tags primarily affect the visual appearance of the text
                  without conveying any additional semantic meaning about the
                  content's importance or purpose. While they still work, modern
                  web development generally prefers CSS for visual styling. For
                  example, while {`<b>`}makes text bold, it doesn't tell a
                  screen reader that the text is more important.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Semantic Tags (`&lt;strong&gt;`, `&lt;em&gt;`,
                    `&lt;mark&gt;`, `&lt;del&gt;`, `&lt;ins&gt;`, `&lt;q&gt;`,
                    `&lt;blockquote&gt;`, `&lt;address&gt;`, `&lt;code&gt;`,
                    `&lt;pre&gt;`):
                  </strong>
                  These tags describe the **meaning or purpose** of the text
                  they enclose. They are preferred because they provide better
                  structure for accessibility, SEO, and overall code clarity.
                  The browser applies a default visual style, but you can always
                  override it with CSS. For instance, {`<strong>`} not only
                  makes text bold but also indicates its importance to a screen
                  reader or search engine.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                <strong className="tw:text-red-500!">Best Practice:</strong>{" "}
                Always use semantic tags when their meaning aligns with your
                content (e.g., {`<strong>`} for importance). If you just want to
                change the visual style without any semantic meaning, use CSS.
              </p>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Live Example Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                See Text Formatting in Action! 🎬
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Below is an interactive example demonstrating many of the text
                formatting tags we've discussed. Observe how each tag affects
                the text's appearance and think about its semantic meaning.
              </p>
              <CodeReviewPager code={section3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                Now you have the tools to give your text more meaning and
                structure! Experiment with these tags to see how they change the
                appearance and underlying semantics of your content. Keep
                practicing, and you'll master HTML text formatting in no time!
                💪
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
