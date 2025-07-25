import Cards from "@/components/cards";
import { HTMLExamples } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
import React from "react";
export const metadata = {
  title: "HTML Code Examples",
  description:
    "Explore various HTML code examples in a clean, responsive layout.",
  openGraph: {
    title: "HTML Code Examples",
    description:
      "Explore various HTML code examples in a clean, responsive layout.",
    url: `${baseUrl}/lessons/html/examples-web`,
    siteName: "Openchains Technologies",
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/examples-web`,
  },
  metadataBase: new URL(baseUrl),
};
export default function ExampesPage() {
  return (
    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
      <div className="main-box">
        <div className="tw:text-center! tw:mb-10!">
          <h1 className="tw:text-4xl! tw:sm:text-5xl! tw:font-extrabold! tw:text-gray-900! tw:mb-4! tw:tracking-tight!">
            Code Examples Showcase
          </h1>
          <p className="tw:text-lg! tw:sm:text-xl! tw:text-gray-600! tw:max-w-2xl! tw:mx-auto!">
            Explore various code snippets presented in a clean, responsive card
            layout.
          </p>
        </div>
        {/* Code Examples Grid */}
        <div className="tw:grid! tw:grid-cols-1! tw:md:grid-cols-2! tw:lg:grid-cols-3! tw:gap-6! tw:max-w-7xl! tw:mx-auto!">
          {HTMLExamples.map((card, id) => (
            <Cards
              key={id}
              id={id}
              path={card.path}
              title={card.title}
              language={card.language}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
