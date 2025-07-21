import Header from "@/components/header";
import TutorialsTopBar from "@/components/tutorials-topbar";
import React from "react";
import Head from "next/head";
import { Globals } from "@/utils/globals";
import { BiLogoFacebook, BiLogoWhatsapp, BiLogoYoutube } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import Footer from "@/components/footer";

export default function HtmlTutorialsPage() {
  return (
    <>
      <Head>
        <title>HTML Tutorials - Openchains Technologies</title>
      </Head>
      <TutorialsTopBar />
      <Header />
      <section
        className="singleblog-section blogpage-section gradient"
        id="single"
      >
        <div
          className="container wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="main-box">
                <figure className="image1 mb-3">
                  <img
                    src="/assets/img/electronics.jpg"
                    alt="OpenChains Electronics Services"
                    className="img-fluid"
                    loading="lazy"
                  />
                </figure>
                <div className="">
                  {/* Header Section */}
                  <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight!">
                    HTML Tutorials: Getting Started with Web Development
                  </h1>
                  <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8!">
                    Learn the foundational language of the web with our
                    comprehensive HTML tutorials.
                  </p>

                  {/* Introduction Section */}
                  <section className="tw:mb-10!">
                    <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-200! tw:pb-2!">
                      What is HTML?
                    </h2>
                    <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                      HTML, which stands for{" "}
                      <strong className="tw:font-semibold!">
                        HyperText Markup Language
                      </strong>
                      , is the standard markup language for documents designed
                      to be displayed in a web browser. It can be assisted by
                      technologies such as Cascading Style Sheets (CSS) and
                      scripting languages such as JavaScript.
                    </p>
                    <p className="tw:text-gray-700! tw:leading-relaxed!">
                      HTML describes the structure of a web page semantically
                      and originally included cues for the appearance of the
                      document.
                    </p>
                  </section>

                  {/* Why Learn HTML Section */}
                  <section className="tw:mb-10!">
                    <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-200! tw:pb-2!">
                      Why Learn HTML?
                    </h2>
                    <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
                      <li className="tw:leading-relaxed!">
                        <strong className="tw:font-semibold!">
                          Foundation of Web Pages:
                        </strong>{" "}
                        Every website you visit is built using HTML. It's the
                        skeleton upon which all other web technologies are
                        built.
                      </li>
                      <li className="tw:leading-relaxed!">
                        <strong className="tw:font-semibold!">
                          Easy to Learn:
                        </strong>{" "}
                        HTML has a relatively simple syntax, making it an
                        excellent starting point for anyone interested in web
                        development.
                      </li>
                      <li className="tw:leading-relaxed!">
                        <strong className="tw:font-semibold!">
                          Essential for SEO:
                        </strong>{" "}
                        Proper HTML structure helps search engines understand
                        your content, which is crucial for search engine
                        optimization.
                      </li>
                      <li className="tw:leading-relaxed!">
                        <strong className="tw:font-semibold!">
                          Versatile:
                        </strong>{" "}
                        HTML is used not just for websites, but also for web
                        applications, email templates, and more.
                      </li>
                    </ul>
                  </section>

                  {/* Basic HTML Structure Section */}
                  <section className="tw:mb-10!">
                    <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-200! tw:pb-2!">
                      Basic HTML Document Structure
                    </h2>
                    <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                      Every HTML document follows a basic structure. Here's a
                      simple example:
                    </p>
                    <div className="tw:bg-gray-800! tw:text-white! tw:p-4! tw:rounded-lg! tw:font-mono! tw:text-sm! tw:overflow-x-auto! tw:mb-4!">
                      <pre>
                        <code>{`<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>My First HTML Page</title>
</head>
<body>
 <header>
 <h1>Welcome to My Page</h1>
 </header>
 <main>
 <p>This is a paragraph of text.</p>
 <a href="https://www.openchainstechnologies.co.zw">Visit Openchains Technologies</a>
 </main>
 <footer>
 <p>&copy; 2024 Openchains Technologies</p>
 </footer>
</body>
</html>`}</code>
                      </pre>
                    </div>
                    <p className="tw:text-gray-700! tw:leading-relaxed!">
                      Let's break down the key elements:
                    </p>
                    <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                      <li>
                        <strong className="tw:font-semibold!">
                          &lt;!DOCTYPE html&gt;:
                        </strong>{" "}
                        Declares the document type and version of HTML.
                      </li>
                      <li>
                        <strong className="tw:font-semibold!">
                          &lt;html&gt;:
                        </strong>{" "}
                        The root element of an HTML page.
                      </li>
                      <li>
                        <strong className="tw:font-semibold!">
                          &lt;head&gt;:
                        </strong>{" "}
                        Contains meta-information about the HTML document (e.g.,
                        character set, viewport settings, page title).
                      </li>
                      <li>
                        <strong className="tw:font-semibold!">
                          &lt;body&gt;:
                        </strong>{" "}
                        Contains the visible page content.
                      </li>
                      <li>
                        <strong className="tw:font-semibold!">
                          &lt;h1&gt;, &lt;p&gt;, &lt;a&gt;:
                        </strong>{" "}
                        Examples of common HTML tags for headings, paragraphs,
                        and links, respectively.
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 column">
              <div className="box1">
                <h5>Our Services</h5>
                <ul className="list-unstyled mb-0">
                  <li className="text-size-16">Electronics Design</li>
                  <li className="text-size-16">Electrical Engineering</li>
                  <li className="text-size-16">Automated Systems</li>
                  <li className="text-size-16">Robotics Development</li>
                  <li className="text-size-16">PCB Design & Prototyping</li>
                  <li className="text-size-16">Embedded Systems</li>
                  <li className="mb-0 text-size-16">And Many More...</li>
                </ul>
              </div>
              <div className="box1 box2">
                <h5>Popular Categories</h5>
                <ul className="list-unstyled mb-0">
                  <li className="text-size-16">Automation</li>
                  <li className="text-size-16">Industrial Robotics</li>
                  <li className="text-size-16">IoT Solutions</li>
                  <li className="mb-0 text-size-16">Custom Electronics</li>
                </ul>
              </div>
              <div className="box1 box3">
                <h5>Follow Us</h5>
                <div className="social-icons">
                  <ul className="mb-0 list-unstyled ">
                    <li>
                      <a
                        href={Globals.Facebook}
                        className="text-decoration-none"
                      >
                        <BiLogoFacebook className="social-networks" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={Globals.getWhatappFormat("hie openchains")}
                        className="text-decoration-none"
                      >
                        <BiLogoWhatsapp className="social-networks" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={Globals.Instagram}
                        className="text-decoration-none"
                      >
                        <IoLogoInstagram className="social-networks" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/openchains"
                        className="text-decoration-none"
                      >
                        <BiLogoYoutube className="social-networks" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
