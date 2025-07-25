import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "HTML Introduction",
  description:
    "Learn the basics of HTML, the foundational language for web development.",
  openGraph: {
    title: "HTML Introduction",
    description:
      "Learn the basics of HTML, the foundational language for web development.",
    url: "/lessons/html/introduction",
    siteName: "Openchains Technologies",
  },
  alternates: {
    canonical: "/lessons/html/introduction",
  },
  keywords: [
    "HTML",
    "web development",
    "introduction to HTML",
    "learn HTML",
    "HTML basics",
    "HTML tutorial",
    "web design",
    "front-end development",
    "Openchains Technologies",
  ],
  metadataBase: new URL(baseUrl),
};
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Awesome First HTML Page</title>
</head>
<body>
  <header>
    <h1>Hello, Web World!</h1>
  </header>
  <main>
    <p>This is where your amazing content goes. Every paragraph starts with &lt;p&gt;!</p>
    <a href="https://www.openchainstechnologies.shop" target="_blank" rel="noopener noreferrer">
      Click here to visit Openchains Technologies
    </a>
    <img src="https://placehold.co/300x200/FFD700/000000?text=Placeholder+Image" alt="A simple placeholder image" />
  </main>
  <footer>
    <p>&copy; 2024 Openchains Technologies. Happy Coding!</p>
  </footer>
</body>
</html>`;
export default function HtmlIntroPage() {
  const page = 0;
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=Web+Development+Basics"
              alt="OpenChains Electronics Services"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              HTML Unveiled: Your First Step into the World of Web Development
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Ready to build your very own corner of the internet? Our friendly
              HTML tutorials are here to guide you, starting with the
              fundamental language that powers every website you see. Let's
              create something amazing together!
            </p>

            {/* Introduction Section */}
            <section className="tw:mb-10! tw:p-4!  ">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                So, What Exactly *Is* HTML?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Imagine a house. Before you paint the walls or arrange the
                furniture, you need a solid foundation and a clear blueprint,
                right? That's exactly what{" "}
                <strong className="tw:font-semibold! tw:text-indigo-600!">
                  HTML
                </strong>{" "}
                is for websites!
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                HTML stands for{" "}
                <strong className="tw:font-semibold! tw:text-indigo-600!">
                  HyperText Markup Language
                </strong>
                . Don't let the fancy name scare you! In simple terms, it's the
                language we use to tell web browsers (like Chrome, Firefox, or
                Safari) what content to display on a webpage and how that
                content is structured. Think of it as the "bones" or the
                "skeleton" of your website.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed!">
                While HTML provides the structure (like headings, paragraphs,
                images, and links), it often teams up with its best friends:
                <strong className="tw:font-semibold! tw:text-green-600!">
                  {" "}
                  Cascading Style Sheets (CSS)
                </strong>{" "}
                to make things look pretty (the paint and furniture!) and{" "}
                <strong className="tw:font-semibold! tw:text-yellow-600!">
                  {" "}
                  JavaScript
                </strong>{" "}
                to make things interactive (the smart home features and moving
                parts!). But it all starts with HTML.
              </p>
            </section>

            {/* Why Learn HTML Section */}
            <section className="tw:mb-10! tw:p-4! ">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Why Should YOU Learn HTML?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Learning HTML is like gaining a superpower for the digital
                world. Here's why it's an absolute must-have skill:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    The Universal Language of the Web:
                  </strong>{" "}
                  Every single website, from simple blogs to complex online
                  stores, is built upon HTML. It's the foundational layer,
                  meaning if you want to understand how the web works or build
                  anything for it, HTML is your essential first step. You're
                  learning the ABCs of the internet!
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Surprisingly Easy to Get Started:
                  </strong>{" "}
                  Unlike some programming languages, HTML doesn't require
                  complex logic or algorithms. It's all about using simple
                  "tags" to mark up your content. You'll be creating your first
                  webpage in no time, which is incredibly rewarding and a great
                  confidence booster for your coding journey.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Boost Your Online Visibility (SEO):
                  </strong>{" "}
                  Search engines like Google rely on well-structured HTML to
                  understand what your webpage is about. By using HTML
                  correctly, you're essentially giving search engines clear
                  directions, which can help your website rank higher and get
                  noticed by more people. It's like putting up a clear sign for
                  your digital storefront!
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Versatile and Powerful:
                  </strong>{" "}
                  HTML isn't just for static webpages. It's used as the backbone
                  for dynamic web applications, interactive email templates,
                  online documentation, and even some mobile apps. Mastering
                  HTML opens doors to a wide array of digital creation.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    A Gateway to More Advanced Skills:
                  </strong>{" "}
                  Once you understand HTML, learning CSS (for styling) and
                  JavaScript (for interactivity) becomes much, much easier. It's
                  the perfect launchpad for becoming a full-fledged web
                  developer!
                </li>
              </ul>
            </section>

            {/* Basic HTML Structure Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Your First HTML Blueprint: Understanding the Basic Structure
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Every HTML document starts with a standard layout, like a
                template for your webpage. Let's look at a simple example and
                then break down what each part does. Don't worry if it looks a
                bit intimidating at first; we'll go through it step by step!
              </p>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Now, let's decipher what each of these "tags" and sections
                means:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;!DOCTYPE html&gt;:
                  </strong>{" "}
                  This isn't an HTML tag itself, but a declaration that tells
                  the web browser, "Hey, this is an HTML5 document!" It's like
                  telling a robot which instruction manual to use.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;html lang="en"&gt;:
                  </strong>{" "}
                  This is the very root (or main container) of your entire
                  webpage. The `lang="en"` part is a helpful attribute that
                  tells browsers and screen readers the primary language of the
                  page is English.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;head&gt;:
                  </strong>{" "}
                  Think of this as the "brain" or "information center" of your
                  webpage. It contains important details *about* the page that
                  aren't directly visible to the user. This includes things
                  like:
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                    <li>
                      <strong className="tw:font-medium!">
                        &lt;meta charset="UTF-8"&gt;:
                      </strong>{" "}
                      Ensures all characters (like emojis or special symbols)
                      display correctly.
                    </li>
                    <li>
                      <strong className="tw:font-medium!">
                        &lt;meta name="viewport" ...&gt;:
                      </strong>{" "}
                      Makes your webpage look good on all devices (phones,
                      tablets, desktops).
                    </li>
                    <li>
                      <strong className="tw:font-medium!">
                        &lt;title&gt;My Awesome First HTML Page&lt;/title&gt;:
                      </strong>{" "}
                      This is the text that appears in the browser tab or window
                      title bar.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;body&gt;:
                  </strong>{" "}
                  This is the "body" of your webpage – everything you see on the
                  screen! All your visible content, from text and images to
                  buttons and forms, goes inside this tag.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;header&gt;, &lt;main&gt;, &lt;footer&gt;:
                  </strong>{" "}
                  These are semantic tags, meaning they describe the *type* of
                  content they hold.
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                    <li>
                      <strong className="tw:font-medium!">
                        &lt;header&gt;:
                      </strong>{" "}
                      Often contains introductory content or navigation links.
                    </li>
                    <li>
                      <strong className="tw:font-medium!">&lt;main&gt;:</strong>{" "}
                      Holds the dominant content of the `body`.
                    </li>
                    <li>
                      <strong className="tw:font-medium!">
                        &lt;footer&gt;:
                      </strong>{" "}
                      Contains copyright information, contact details, etc.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    &lt;h1&gt;, &lt;p&gt;, &lt;a&gt;, &lt;img&gt;:
                  </strong>{" "}
                  These are just a few examples of the many HTML tags you'll
                  learn!
                  <ul className="tw:list-circle! tw:list-inside! tw:text-gray-600! tw:mt-1! tw:ml-4! tw:space-y-1!">
                    <li>
                      <strong className="tw:font-medium!">&lt;h1&gt;</strong> is
                      for the most important heading on your page.
                    </li>
                    <li>
                      <strong className="tw:font-medium!">&lt;p&gt;</strong> is
                      for a paragraph of text.
                    </li>
                    <li>
                      <strong className="tw:font-medium!">&lt;a&gt;</strong>{" "}
                      creates a clickable link to another page or website.
                    </li>
                    <li>
                      <strong className="tw:font-medium!">&lt;img&gt;</strong>{" "}
                      embeds an image into your page.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                Ready to dive deeper? Let's start building!
              </p>
              <PageNavigationButtons
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
