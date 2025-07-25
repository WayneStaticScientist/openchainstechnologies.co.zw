import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "HTML Metadata: The Unseen Power Behind Your Web Page! 🕵️‍♀️",
  description:
    "Learn how HTML metadata enhances SEO, social media sharing, and browser behavior. Master essential tags like <meta>, <title>, and Open Graph for better web performance.",

  keywords: "HTML, metadata, SEO, social media, Open Graph, web development",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/lessons/html/metadata/page`,
    title: "HTML Metadata: The Unseen Power Behind Your Web Page! 🕵️‍♀️",
    description:
      "Discover the hidden potential of HTML metadata and how it can elevate your web presence.",
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/metadata/page`,
  },
  metadataBase: new URL(baseUrl),
};
const section8_1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Basic Web Page</title>
    <meta name="description" content="This is a simple web page demonstrating essential HTML metadata.">
    <meta name="author" content="Web Learner">
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 20px; background-color: #f4f7f6; }
        h1 { color: #2c3e50; }
        p { margin-bottom: 10px; }
        .head-section { background-color: #e8f5e9; padding: 15px; border-left: 5px solid #4CAF50; margin-bottom: 20px; }
        .head-section pre { background-color: #fff; padding: 10px; border-radius: 5px; overflow-x: auto; }
    </style>
</head>
<body>
    <h1>Welcome to My Page!</h1>
    <p>This is the visible content of my web page.</p>
    <p>But what really makes this page tick behind the scenes? Look at the <code>&lt;head&gt;</code> section of this HTML document!</p>

    <div class="head-section">
        <h3>Content of the <code>&lt;head&gt;</code> section:</h3>
        <pre>&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;title&gt;My Basic Web Page&lt;/title&gt;
&lt;meta name="description" content="This is a simple web page demonstrating essential HTML metadata."&gt;
&lt;meta name="author" content="Web Learner"&gt;</pre>
    </div>

    <p>These simple lines of code in the <code>&lt;head&gt;</code> provide crucial information about the page.</p>
</body>
</html>`;

const section8_2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awesome Article on Tech</title>
    <meta name="description" content="Read our latest article on cutting-edge technology and innovation.">

    <meta property="og:title" content="The Future of AI in Healthcare">
    <meta property="og:description" content="Explore how artificial intelligence is revolutionizing medical diagnostics and patient care.">
    <meta property="og:image" content="https://example.com/images/ai-healthcare-banner.jpg">
    <meta property="og:url" content="https://example.com/articles/ai-healthcare-future">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Tech Innovations Blog">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@TechInnovateBlog">
    <meta name="twitter:title" content="AI in Healthcare: A Game Changer">
    <meta name="twitter:description" content="How AI is transforming healthcare. Read more!">
    <meta name="twitter:image" content="https://example.com/images/ai-healthcare-twitter.jpg">

    <style>
        body { font-family: 'Roboto', sans-serif; line-height: 1.8; color: #444; margin: 20px; background-color: #fdfefe; }
        h1 { color: #1a237e; text-align: center; margin-bottom: 30px; }
        .content { max-width: 800px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); }
        .meta-preview { background-color: #e3f2fd; border-left: 5px solid #2196f3; padding: 15px; margin-top: 30px; border-radius: 8px; }
        .meta-preview h3 { color: #1565c0; margin-top: 0; }
        .meta-block { background-color: #ffffff; border: 1px solid #bbdefb; padding: 10px; margin-bottom: 10px; border-radius: 5px; }
        .meta-block strong { color: #0d47a1; }
    </style>
</head>
<body>
    <h1>The Future of AI in Healthcare: Revolutionizing Diagnostics</h1>
    <div class="content">
        <p>Artificial intelligence is rapidly transforming various industries, and healthcare is no exception. From early disease detection to personalized treatment plans, AI's potential is immense.</p>
        <p>This article delves into the latest advancements and ethical considerations surrounding AI's integration into medical practices. We explore how machine learning algorithms are improving the accuracy of diagnoses and enhancing operational efficiency in hospitals.</p>
        <p>When you share this article on social media, the metadata in the <code>&lt;head&gt;</code> section ensures it looks appealing and informative. Imagine this content being shared on Facebook or Twitter:</p>

        <div class="meta-preview">
            <h3>How this page appears when shared (simulated):</h3>
            <div class="meta-block">
                <strong>Social Media Title:</strong> The Future of AI in Healthcare<br>
                <strong>Social Media Description:</strong> Explore how artificial intelligence is revolutionizing medical diagnostics and patient care.<br>
                <strong>Image:</strong>  <br>
                <strong>URL:</strong> https://example.com/articles/ai-healthcare-future<br>
                <strong>Site Name:</strong> Tech Innovations Blog<br>
                <strong>Card Type:</strong> summary_large_image (for Twitter)
            </div>
            <p>This rich preview significantly increases the likelihood of users clicking on your shared link!</p>
            <h3>Relevant <code>&lt;head&gt;</code> content:</h3>
            <pre><code>&lt;meta property="og:title" content="The Future of AI in Healthcare"&gt;
&lt;meta property="og:description" content="Explore how artificial intelligence is revolutionizing medical diagnostics and patient care."&gt;
&lt;meta property="og:image" content="https://example.com/images/ai-healthcare-banner.jpg"&gt;
&lt;meta property="og:url" content="https://example.com/articles/ai-healthcare-future"&gt;
&lt;meta property="og:type" content="article"&gt;
&lt;meta property="og:site_name" content="Tech Innovations Blog"&gt;

&lt;meta name="twitter:card" content="summary_large_image"&gt;
&lt;meta name="twitter:site" content="@TechInnovateBlog"&gt;
&lt;meta name="twitter:title" content="AI in Healthcare: A Game Changer"&gt;
&lt;meta name="twitter:description" content="How AI is transforming healthcare. Read more!"&gt;
&lt;meta name="twitter:image" content="https://example.com/images/ai-healthcare-twitter.jpg"&gt;
</code></pre>
        </div>
    </div>
</body>
</html>`;

const section8_3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO & Canonical Page</title>
    <meta name="description" content="Discover advanced HTML metadata techniques for better SEO and duplicate content handling with canonical URLs.">
    <meta name="keywords" content="SEO, metadata, canonical URL, duplicate content, robots, indexing">
    <meta name="author" content="SEO Expert">
    <link rel="canonical" href="https://www.example.com/seo-best-practices">
    <meta name="robots" content="index, follow">
    <style>
        body { font-family: 'Open Sans', sans-serif; line-height: 1.7; color: #555; margin: 20px; background-color: #ecf0f1; }
        h1 { color: #2c3e50; text-align: center; margin-bottom: 30px; }
        .content-area { max-width: 900px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.1); }
        .info-box { background-color: #fcf3cf; border-left: 5px solid #f39c12; padding: 15px; margin-top: 25px; border-radius: 8px; }
        .info-box h3 { color: #d35400; margin-top: 0; }
        .info-box pre { background-color: #fff; padding: 10px; border-radius: 5px; overflow-x: auto; margin-top: 10px; }
        .highlight { color: #e67e22; font-weight: bold; }
    </style>
</head>
<body>
    <h1>Optimizing Your Website with Advanced HTML Metadata for SEO</h1>
    <div class="content-area">
        <p>Mastering HTML metadata is key to improving your website's visibility on search engines. While basic meta tags are essential, advanced techniques can give you a significant edge.</p>

        <h2>Understanding Canonical URLs</h2>
        <p>
            Duplicate content can dilute your SEO efforts. A <span class="highlight">canonical URL</span> tells search engines which version of a page is the preferred one. For example, if your page can be accessed via <code>www.example.com/product/123</code> and <code>www.example.com/product?id=123</code>, you'd use a canonical tag to point to the preferred URL.
        </p>
        <div class="info-box">
            <h3>Canonical URL Implementation:</h3>
            <pre><code>&lt;link rel="canonical" href="https://www.example.com/seo-best-practices"&gt;</code></pre>
            <p>This tag should be placed in the <code>&lt;head&gt;</code> section of <span class="highlight">all versions</span> of the page that might be considered duplicates, pointing back to the single, preferred URL.</p>
        </div>

        <h2>Controlling Search Engine Bots with \`robots\`</h2>
        <p>
            The <code>&lt;meta name="robots"&gt;</code> tag allows you to instruct web crawlers on how to handle your page. For instance, you can prevent a page from being indexed or prevent bots from following links on it.
        </p>
        <div class="info-box">
            <h3>Examples of \`robots\` Meta Tag:</h3>
            <p>To tell search engines to index your page and follow all links (this is often the default, so explicit declaration might not be needed unless overriding a previous rule):</p>
            <pre><code>&lt;meta name="robots" content="index, follow"&gt;</code></pre>
            <p>To tell search engines NOT to index your page AND NOT to follow any links on it (useful for private pages, staging environments, etc.):</p>
            <pre><code>&lt;meta name="robots" content="noindex, nofollow"&gt;</code></pre>
            <p>Understanding these directives ensures that search engines are handling your content precisely as you intend for maximum SEO benefit.</p>
        </div>

        <p>By thoughtfully implementing these advanced metadata techniques, you gain more control over how your website is perceived by search engines and how it performs in search results.</p>
    </div>
</body>
</html>`;

export default function HtmlMetadataPage() {
  const page = 9; // Assuming this is the 7th page in your tutorial series (0-indexed)
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=HTML+Metadata"
              alt="HTML Metadata Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              HTML Metadata: The Unseen Power Behind Your Web Page! 🕵️‍♀️
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              HTML metadata provides essential information about an HTML
              document, such as its author, description, keywords, and
              instructions for browsers and search engines. While not visible on
              the page itself, metadata is critical for SEO, social media
              sharing, and overall web functionality.
            </p>

            <hr className="my-6 tw:border-gray-300!" />

            {/* What is Metadata? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                What is HTML Metadata? 📜
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                In simple terms, **metadata is data about data**. In the context
                of HTML, it's information that describes the HTML document
                itself. This information is not displayed on the web page to the
                user. Instead, it lives within the `&lt;head&gt;` section of
                your HTML file, providing instructions and context to browsers,
                search engines, social media platforms, and other web services.
              </p>
              <p className="tw:leading-relaxed! tw:font-semibold! tw:text-blue-600!">
                Think of the `&lt;head&gt;` section as the "brain" of your HTML
                document, containing all the vital information about the page,
                while the `&lt;body&gt;` is the "body" containing the visible
                content.
              </p>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Why is Metadata Important? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Why is Metadata So Important? 🚀
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Metadata plays a crucial role in how your website performs and
                is perceived across the internet:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Search Engine Optimization (SEO):
                  </strong>{" "}
                  Metadata helps search engines understand what your page is
                  about, which keywords are relevant, and how to display it in
                  search results. This directly impacts your site's visibility.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Browser Behavior and User Experience:
                  </strong>{" "}
                  Metadata dictates essential rendering instructions, such as
                  character encoding (ensuring text displays correctly) and
                  viewport settings (making your site responsive on different
                  devices).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Social Media Sharing:
                  </strong>{" "}
                  Specialized meta tags control how your links appear when
                  shared on platforms like Facebook, Twitter, and LinkedIn,
                  providing rich previews with images and descriptions.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Accessibility and Tools:
                  </strong>{" "}
                  Assistive technologies and web crawlers can use metadata to
                  better understand and process your content.
                </li>
              </ul>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Common <meta> Tags Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Common `&lt;meta&gt;` Tags and Their Uses 📝
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `&lt;meta&gt;` tag is the primary way to define metadata
                that cannot be expressed by other dedicated HTML elements (like
                `&lt;title&gt;` or `&lt;link&gt;`).
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;meta charset="UTF-8"&gt;`:
                  </strong>
                  **Character Encoding.** This is one of the most vital meta
                  tags. It specifies the character encoding for the document,
                  telling the browser how to correctly interpret the characters
                  on your page. **UTF-8** is the universal standard, supporting
                  nearly all characters from any language.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;meta name="viewport" content="width=device-width,
                    initial-scale=1.0"&gt;`:
                  </strong>
                  **Viewport for Responsive Design.** Essential for modern web
                  development. This tag instructs the browser to set the
                  viewport's width to the device's width (`width=device-width`)
                  and sets the initial zoom level (`initial-scale=1.0`). Without
                  it, mobile browsers might render your page at a desktop width,
                  then scale it down, making text unreadable.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;meta name="description" content="..."&gt;`:
                  </strong>
                  **Page Description.** Provides a concise, accurate summary of
                  your web page's content. This description is often displayed
                  by search engines below your page title in search results,
                  making it a crucial factor for user click-throughs.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;meta name="author" content="..."&gt;`:
                  </strong>
                  **Author Information.** Specifies the author of the HTML
                  document.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;meta name="keywords" content="..."&gt;`:
                  </strong>
                  **Keywords (Less Relevant for SEO).** Historically used to
                  list keywords relevant to the page. Due to widespread abuse
                  (keyword stuffing), modern search engines largely ignore this
                  tag for ranking purposes, though it can still be used for
                  internal site search or analytics.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;meta http-equiv="refresh" content="N; url=..."&gt;`:
                  </strong>
                  **Auto-Refresh or Redirect.** Can be used to automatically
                  refresh the page after `N` seconds, or to redirect to another
                  URL after `N` seconds (e.g., `content="5;
                  url=https://example.com"`). Generally not recommended for
                  redirects for SEO or user experience.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;meta name="robots" content="..."&gt;`:
                  </strong>
                  **Search Engine Directives.** Used to control how web robots
                  (like Googlebot) should crawl and index your page. Common
                  values include `index, follow` (default), `noindex, nofollow`,
                  `noindex, follow`, or `index, nofollow`. This is powerful for
                  managing what content appears in search results.
                </li>
              </ul>
            </section>

            {/* Code in Action 1 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 1: Essential Metadata for Every Page 🏠
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example demonstrates the absolute basic and essential meta
                tags you should include in virtually every HTML document.
              </p>
              <CodeReviewPager code={section8_1} />
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Social Media Metadata Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Social Media Metadata: Open Graph & Twitter Cards 🌐
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When you share a link on social media, you often see a rich
                preview with an image, title, and description. This is
                controlled by specialized meta tags:
              </p>
              <h3 className="tw:text-xl! tw:font-semibold! tw:text-gray-700! tw:mb-3!">
                Open Graph Protocol (for Facebook, LinkedIn, etc.)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Developed by Facebook, Open Graph (`og:`) tags are widely
                adopted by many social media platforms.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `og:title`: The title of your content as it should appear in
                  the share.
                </li>
                <li className="tw:leading-relaxed!">
                  `og:description`: A short description of the content.
                </li>
                <li className="tw:leading-relaxed!">
                  `og:image`: The URL of an image that will appear in the share.
                  Make it visually appealing!
                </li>
                <li className="tw:leading-relaxed!">
                  `og:url`: The canonical URL of the page.
                </li>
                <li className="tw:leading-relaxed!">
                  `og:type`: The type of content (e.g., `website`, `article`,
                  `video.movie`).
                </li>
                <li className="tw:leading-relaxed!">
                  `og:site_name`: The name of your website.
                </li>
              </ul>
              <h3 className="tw:text-xl! tw:font-semibold! tw:text-gray-700! tw:mb-3!">
                Twitter Cards
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Specific to Twitter, these tags help create rich media
                experiences within tweets.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  `twitter:card`: The type of Twitter card (e.g., `summary`,
                  `summary_large_image`, `app`, `player`). `summary_large_image`
                  is common.
                </li>
                <li className="tw:leading-relaxed!">
                  `twitter:site`: The @username of the website.
                </li>
                <li className="tw:leading-relaxed!">
                  `twitter:title`: Title of the content.
                </li>
                <li className="tw:leading-relaxed!">
                  `twitter:description`: Description of the content.
                </li>
                <li className="tw:leading-relaxed!">
                  `twitter:image`: URL of the image to be displayed in the
                  tweet.
                </li>
              </ul>
            </section>

            {/* Code in Action 2 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 2: Social Media Rich Previews 📸
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example shows how to implement Open Graph and Twitter Card
                meta tags to ensure your content looks great when shared.
              </p>
              <CodeReviewPager code={section8_2} />
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Other Head Elements Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Other Important Elements in `&lt;head&gt;` 💡
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                While `&lt;meta&gt;` tags handle a lot of metadata, other
                elements within the `&lt;head&gt;` are equally important:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;title&gt;`:
                  </strong>
                  **Page Title.** This defines the title of the HTML document,
                  which appears in the browser's title bar or tab, and as the
                  main heading in search engine results. It's one of the most
                  important elements for both SEO and user experience.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;link&gt;`:
                  </strong>
                  **External Resources.** Used to link your HTML document to
                  external resources:
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-6! tw:mt-2! tw:space-y-1!">
                    <li>
                      `&lt;link rel="stylesheet" href="styles.css"&gt;`: Links
                      to an external CSS stylesheet.
                    </li>
                    <li>
                      `&lt;link rel="icon" href="/favicon.ico"
                      type="image/x-icon"&gt;`: Links to a **favicon**, the
                      small icon displayed in browser tabs.
                    </li>
                    <li>
                      `&lt;link rel="canonical" href="URL"&gt;`: **Canonical
                      URL.** A crucial SEO tag. It tells search engines the
                      "preferred" version of a webpage when there are multiple
                      URLs that serve substantially the same content. This
                      prevents duplicate content issues that can harm SEO.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;style&gt;`:
                  </strong>
                  **Internal CSS.** Allows you to write CSS directly within the
                  HTML document. Generally, external stylesheets are preferred
                  for larger projects.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;script&gt;`:
                  </strong>
                  **JavaScript.** Used to embed or link JavaScript code. While
                  scripts can be in the `&lt;head&gt;`, it's often better for
                  performance to place them just before the closing
                  `&lt;/body&gt;` tag, or use the `defer` or `async` attributes,
                  to avoid blocking page rendering.
                </li>
              </ul>
            </section>

            {/* Code in Action 3 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 3: SEO and Canonical URLs 🎯
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example highlights the use of `&lt;link
                rel="canonical"&gt;` and `&lt;meta name="robots"&gt;` for
                advanced SEO control, especially important for avoiding
                duplicate content issues and managing search engine crawling
                behavior.
              </p>
              <CodeReviewPager code={section8_3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                Understanding and correctly implementing HTML metadata is
                crucial for any serious web developer. It's the silent workhorse
                that ensures your website is properly displayed, ranked, and
                shared across the vast landscape of the internet. Keep refining
                your `&lt;head&gt;` section – it makes a world of difference! 💪
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
