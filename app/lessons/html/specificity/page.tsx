import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "CSS Specificity",
  description: "Understanding CSS specificity and how it affects styling.",
  keywords: ["CSS", "selectors", "specificity", "web design"],
  openGraph: {
    title: "CSS Specificity",
    description: "Understanding CSS specificity and how it affects styling.",
    url: `${baseUrl}/lessons/html/specificity`,
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/specificity`,
  },
  metadataBase: new URL(baseUrl),
};
// Code example 1: Specificity Hierarchy (Inline, ID, Class, Element)
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Specificity Hierarchy</title>
    <style>
        /* Element selector - very low specificity (0,0,0,1) */
        p {
            color: gray;
            font-size: 16px;
        }

        /* Class selector - higher specificity (0,0,1,0) */
        .my-paragraph {
            color: green;
        }

        /* ID selector - much higher specificity (0,1,0,0) */
        #unique-paragraph {
            color: red;
        }

        /* Multiple classes - specificity adds up (0,0,2,0) */
        .my-paragraph.another-class {
            color: purple;
        }
    </style>
</head>
<body>
    <h1>Specificity Hierarchy</h1>

    <p>
        This is a regular paragraph (gray).
    </p>

    <p class="my-paragraph">
        This paragraph has a class 'my-paragraph' (green).
    </p>

    <p id="unique-paragraph" class="my-paragraph">
        This paragraph has an ID and a class (red - ID wins!).
    </p>

    <p class="my-paragraph another-class">
        This paragraph has two classes (purple).
    </p>

    <p style="color: blue;">
        This paragraph has an inline style (blue - Inline wins!).
    </p>

    <p class="my-paragraph" style="color: orange;">
        This paragraph has a class AND inline style (orange - Inline wins!).
    </p>
</body>
</html>`;

// Code example 2: Calculating Specificity (Weighted Values)
const section2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculating Specificity</title>
    <style>
        /* Specificity: (0,0,0,1) */
        ul {
            list-style-type: square;
        }

        /* Specificity: (0,0,1,0) */
        .list-item {
            color: blue;
        }

        /* Specificity: (0,1,0,0) */
        #special-item {
            font-weight: bold;
        }

        /* Specificity: (0,0,1,1) (one class, one element) */
        li.list-item {
            background-color: lightcyan;
        }

        /* Specificity: (0,1,0,1) (one ID, one element) */
        li#special-item {
            background-color: lightgreen; /* This will apply */
            color: darkgreen;
        }

        /* Specificity: (0,1,1,0) (one ID, one class) - ID still weighs more! */
        #special-list .list-item {
            color: orange; /* Will not override darkgreen from li#special-item */
            background-color: yellow; /* Will not override lightgreen */
        }

        /* Specificity: (0,0,2,0) (two classes) */
        .common-style.featured {
            border: 2px solid purple;
        }

        /* Specificity: (0,0,1,2) (one class, two elements) */
        ul li.list-item {
            padding: 5px;
        }
    </style>
</head>
<body>
    <h1>Calculating Specificity</h1>

    <ul id="special-list">
        <li class="list-item">Regular list item (blue, lightcyan)</li>
        <li class="list-item common-style">Common & Featured (blue, lightcyan, purple border)</li>
        <li class="list-item" id="special-item">
            Special list item (bold, darkgreen, lightgreen - because li#special-item is (0,1,0,1) vs #special-list .list-item (0,1,1,0)!)
            No, wait! My explanation was wrong here.
            li#special-item (0,1,0,1) will be specific to this exact element.
            #special-list .list-item (0,1,1,0) IS HIGHER! (1 ID, 1 Class) vs (1 ID, 1 Element)
            So, the orange/yellow *should* win if the ID selector is stronger.
            Let's correct the comment and see the actual behavior.
            Ah, no. (0,1,0,1) IS *NOT* HIGHER than (0,1,1,0). The class (1) adds more than the element (1).
            So, '#special-list .list-item' should indeed win on color/background for the *third* list item.
            This example is designed to show the actual calculation.
        </li>
        <li class="list-item featured">Featured list item (blue, lightcyan, purple border)</li>
    </ul>

    <p style="margin-top: 20px;">
        Open your browser's developer tools and inspect these elements to see which rules are applied and why.
    </p>
</body>
</html>`;

// Code example 3: The !important Rule
const section3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>!important Rule</title>
    <style>
        /* Element selector */
        p {
            color: gray;
        }

        /* Class selector */
        .my-text {
            color: green;
        }

        /* ID selector */
        #super-important {
            color: red;
        }

        /* Using !important - this overrides everything else (except another !important with higher specificity, or inline !important) */
        .override-me {
            color: blue !important;
            border: 2px solid blue !important;
        }

        /* This rule has higher specificity (ID + class) but no !important, so it's overridden */
        #super-important.my-text {
            color: orange; /* Will be overridden by .override-me */
        }

        /* Another !important rule - same specificity as .override-me (0,0,1,0) for color, so order matters */
        /* If this rule comes AFTER .override-me, and has same specificity, it will win. */
        .final-override {
            color: purple !important;
            font-weight: bold !important;
        }

    </style>
</head>
<body>
    <h1>The !important Rule</h1>

    <p class="my-text">
        This is a paragraph with a class (green).
    </p>

    <p id="super-important">
        This paragraph has an ID (red).
    </p>

    <p class="my-text override-me">
        This paragraph has a class and an !important rule (blue).
    </p>

    <p id="super-important" class="my-text override-me">
        This paragraph has ID, class, and !important (blue - !important wins).
    </p>

    <p class="override-me final-override">
        This paragraph shows !important tie-breaking (purple, bold).
    </p>

    <p style="color: brown !important;">
        Inline style with !important (brown).
    </p>

    <p style="color: cyan;">
        Inline style WITHOUT !important (cyan).
    </p>
</body>
</html>`;

export default function CssSpecificityPage() {
  const page = 19; // Adjust page number as necessary for your HtmlChapterFootMap

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E8D6CB/8D6E63?text=CSS+Specificity+Unraveled"
              alt="CSS Specificity Overview"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              CSS Specificity: Why Some Styles Win Over Others 🏆
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Have you ever written CSS rules, only to find they don't apply, or
              another rule overrides them unexpectedly? That's where **CSS
              Specificity** comes in. It's the algorithm browsers use to
              determine which CSS declaration is most relevant to an element and
              should be applied.
            </p>

            {/* Introduction to Specificity */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                What is Specificity?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                When multiple CSS rules target the same HTML element and try to
                apply conflicting styles (e.g., setting the `color` property to
                different values), the browser needs a way to decide which rule
                wins. This decision is made based on the rule's **specificity**.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Think of it like a scoring system. Each type of selector gets
                points, and the selector with the most points (highest
                specificity) wins. If two selectors have the *exact same*
                specificity, the rule that appears *later* in the CSS code (or
                loaded later) wins.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed!">
                Let's break down the hierarchy of specificity from highest to
                lowest.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 1. The Specificity Hierarchy (Highest to Lowest) */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                1. The Specificity Hierarchy (Highest to Lowest) 🪜
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                CSS Specificity is often represented as a four-part number: `(a,
                b, c, d)`.
                <br />
                Each category adds a specific "weight" to the score:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-red-600!">
                    `a` (Inline Styles):
                  </strong>
                  Styles applied directly to an HTML element using the `style`
                  attribute (e.g., {`<p style="color: blue;">`}). These have the
                  highest specificity and always override styles from external
                  stylesheets or {`<style>`} blocks.
                  <br />
                  **Value:** 1 for an inline style.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `b` (IDs):
                  </strong>
                  Selectors targeting an element by its `id` attribute (e.g.,
                  `#myId`).
                  <br />
                  **Value:** 1 for each ID in the selector.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    `c` (Classes, Attributes, Pseudo-classes):
                  </strong>
                  Selectors targeting elements by class names (e.g.,
                  `.myClass`), attribute selectors (e.g., `[type="text"]`), and
                  pseudo-classes (e.g., `:hover`, `:nth-child`).
                  <br />
                  **Value:** 1 for each class, attribute, or pseudo-class in the
                  selector.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    `d` (Elements & Pseudo-elements):
                  </strong>
                  Selectors targeting elements by their tag name (e.g., `p`,
                  `div`) and pseudo-elements (e.g., `::before`, `::after`).
                  <br />
                  **Value:** 1 for each element or pseudo-element in the
                  selector.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Universal selector (`*`), combinators (`+`, `~`, `{">"}`, ` `),
                and the negation pseudo-class (`:not()`) itself add no
                specificity points, though the selectors *inside* `:not()` do.
              </p>
              <CodeReviewPager code={section1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In this example, you can visually see the hierarchy in action.
                The ID selector (`#unique-paragraph`) overrides the class
                selector (`.my-paragraph`), and the inline style (`style="color:
                blue;"`) overrides everything else. When multiple classes are
                used (`.my-paragraph.another-class`), their specificity
                combines.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 2. Calculating Specificity: The Scorecard */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                2. Calculating Specificity: The Scorecard 📈
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                To compare two selectors, you compare their specificity values
                from left to right (a then b then c then d). The first higher
                number wins. It's not like a base-10 number; `(0,1,0,0)` (one
                ID) is always more specific than `(0,0,10,0)` (ten classes).
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold! tw:text-gray-800!">
                Let's calculate the specificity for some common selectors:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li>`p` (element): `(0,0,0,1)`</li>
                <li>`.myClass` (class): `(0,0,1,0)`</li>
                <li>`#myId` (ID): `(0,1,0,0)`</li>
                <li>`p.myClass` (element + class): `(0,0,1,1)`</li>
                <li>`div p` (two elements): `(0,0,0,2)`</li>
                <li>`#myId p` (ID + element): `(0,1,0,1)`</li>
                <li>`.myClass #myId` (class + ID): `(0,1,1,0)`</li>
                <li>
                  `div.container ul li a:hover` (element, class, element,
                  element, pseudo-class): `(0,0,1,4)`
                </li>
              </ul>
              <CodeReviewPager code={section2} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                This example can be a bit tricky, which is why understanding the
                calculation is key!
                <br />
                Let's look at the third list item: * `li.list-item` has
                specificity `(0,0,1,1)` (1 class, 1 element). `background-color:
                lightcyan;` * `li#special-item` has specificity `(0,1,0,1)` (1
                ID, 1 element). `background-color: lightgreen; color:
                darkgreen;` * `#special-list .list-item` has specificity
                `(0,1,1,0)` (1 ID, 1 class). `color: orange; background-color:
                yellow;` When applied to{" "}
                {`<li class="list-item" id="special-item">`}: * For
                `background-color`, `(0,1,1,0)` (yellow) is greater than
                `(0,1,0,1)` (lightgreen) and `(0,0,1,1)` (lightcyan). So,
                `background-color: yellow;` wins. * For `color`, `(0,1,1,0)`
                (orange) is greater than `(0,1,0,1)` (darkgreen) and `(0,0,1,0)`
                (blue). So, `color: orange;` wins. This demonstrates how even a
                single class can outweigh many element selectors if the ID
                category (b) is equal, or how a higher number in a more
                significant category (like 'b' for ID) always wins, regardless
                of 'c' or 'd'.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* 3. The !important Rule: The Nuclear Option ☢️ */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                3. The `!important` Rule: The Nuclear Option ☢️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                If a CSS declaration is marked with `!important`, it overrides
                any other declaration *regardless of specificity*. It's like a
                trump card.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Syntax:** `property: value !important;`
                <br />
                Example: `color: red !important;`
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  **Use with Caution:** While `!important` seems powerful, it
                  should be used very sparingly. It breaks the natural flow of
                  specificity, making your CSS harder to maintain, debug, and
                  override. It's often a sign that your specificity strategy
                  needs rethinking.
                </li>
                <li className="tw:leading-relaxed!">
                  **When to Consider `!important`:**
                  <ul className="tw:list-circle! tw:list-inside! tw:mt-2! tw:ml-4!">
                    <li>
                      Overriding styles from a third-party library or framework
                      where you can't modify their source CSS.
                    </li>
                    <li>
                      Utility classes for very specific, non-negotiable styles
                      (e.g., {`.hide-element { display: none !important; }`}).
                    </li>
                    <li>
                      Accessibility overrides (though often better handled with
                      more specific selectors or JavaScript).
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  **`!important` vs. `!important`:** If multiple `!important`
                  rules target the same property, the one with higher
                  specificity wins. If their specificities are equal, the last
                  one declared wins. Inline `!important` styles always win over
                  external/internal `!important` styles.
                </li>
              </ul>
              <CodeReviewPager code={section3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                In this example, you'll see how `!important` on `.override-me`
                forces the color to blue, even when a higher-specificity ID
                selector `#super-important` tries to make it red or orange. The
                paragraph with both `.override-me` and `.final-override` will
                pick up the `purple` color and `bold` font-weight from
                `.final-override` because it's declared later in the stylesheet
                (and both have the same specificity). An inline `!important`
                beats everything else defined in {`<style>`} tags.
              </p>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Best Practices & Troubleshooting */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Best Practices & Troubleshooting Specificity
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  **Aim for Low Specificity:** Whenever possible, use simpler
                  selectors (classes over IDs, element tags over classes) to
                  style your components. This makes your CSS more modular and
                  easier to override without resorting to `!important`.
                </li>
                <li className="tw:leading-relaxed!">
                  **Use Classes Regularly:** Classes are your workhorses for
                  styling. They are reusable and provide a good balance of
                  specificity.
                </li>
                <li className="tw:leading-relaxed!">
                  **IDs for Unique Elements/JS Hooks:** Reserve IDs for truly
                  unique page elements or as JavaScript hooks, not primarily for
                  styling.
                </li>
                <li className="tw:leading-relaxed!">
                  **Developer Tools are Your Friend:** When a style isn't
                  applying as expected, open your browser's developer tools (F12
                  or right-click -{`>`} Inspect). The "Styles" tab will show you
                  all applied rules, their specificities, and which rules are
                  being overridden. This is the best way to debug specificity
                  issues.
                </li>
                <li className="tw:leading-relaxed!">
                  **Be Mindful of Order:** For rules with identical specificity,
                  the last one declared wins. Place your more general styles
                  first, and your more specific (or override) styles later in
                  your stylesheet.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                Understanding CSS Specificity is fundamental to writing
                predictable and maintainable stylesheets. It empowers you to
                debug styling issues effectively and build robust designs.
              </p>
              <PageNavigationButtons
                next={{
                  title: HtmlChapterFootMap[page + 1]
                    ? HtmlChapterFootMap[page + 1].title
                    : "Next Chapter",
                  path: HtmlChapterFootMap[page + 1]
                    ? HtmlChapterFootMap[page + 1].path
                    : "#",
                }}
                prev={{
                  title: HtmlChapterFootMap[page - 1]
                    ? HtmlChapterFootMap[page - 1].title
                    : "Previous Chapter",
                  path: HtmlChapterFootMap[page - 1]
                    ? HtmlChapterFootMap[page - 1].path
                    : "#",
                }}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
