import React from "react";
import PageNavigationButtons from "@/components/navigations-button";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";
import { baseUrl } from "@/utils/globals";

export const metadata = {
  title:
    "JavaScript Web Storage: Local Storage & Session Storage Explained - OpenChains Technologies",
  description:
    "Learn client-side data persistence with JavaScript Web Storage. Understand local storage vs. session storage, how to use setItem, getItem, removeItem, and clear, with practical examples for user preferences and session data.",
  openGraph: {
    title:
      "JavaScript Web Storage: Local Storage & Session Storage Explained - OpenChains Technologies",
    description:
      "Learn client-side data persistence with JavaScript Web Storage. Understand local storage vs. session storage, how to use setItem, getItem, removeItem, and clear, with practical examples for user preferences and session data.",
    url: `${baseUrl}/lessons/javascript/web-storage`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JavaScript Web Storage: Local Storage & Session Storage Explained - OpenChains Technologies",
    description:
      "Learn client-side data persistence with JavaScript Web Storage. Understand local storage vs. session storage, how to use setItem, getItem, removeItem, and clear, with practical examples for user preferences and session data.",
  },
  keywords: [
    "JavaScript Web Storage",
    "Local Storage",
    "Session Storage",
    "setItem",
    "getItem",
    "removeItem",
    "clear",
    "Client-side Storage",
    "Browser Storage",
    "Data Persistence JavaScript",
    "User Preferences Storage",
    "Shopping Cart Storage",
    "Session Data JavaScript",
    "JavaScript Tutorial",
    "OpenChains Technologies",
    "DOM Storage",
    "localStorage vs sessionStorage",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/web-storage`,
  },
  metadataBase: new URL(baseUrl),
};

// Code example 1: Local Storage Basic Operations
const section1 = `// 1. Storing a simple string
localStorage.setItem('username', 'Alice');
console.log("Stored username: Alice");

// 2. Retrieving a simple string
const username = localStorage.getItem('username');
console.log("Retrieved username:", username); // Output: Retrieved username: Alice

// 3. Storing an object (requires JSON.stringify)
const userSettings = {
  theme: 'dark',
  notifications: true,
  lastLogin: new Date().toISOString()
};
localStorage.setItem('userSettings', JSON.stringify(userSettings));
console.log("Stored userSettings (as string):", localStorage.getItem('userSettings'));

// 4. Retrieving an object (requires JSON.parse)
const storedSettingsString = localStorage.getItem('userSettings');
const parsedSettings = JSON.parse(storedSettingsString);
console.log("Parsed userSettings:", parsedSettings);
console.log("Theme:", parsedSettings.theme); // Output: Theme: dark

// 5. Removing a specific item
localStorage.removeItem('username');
console.log("Username after removal:", localStorage.getItem('username')); // Output: Username after removal: null

// Check if an item exists
if (localStorage.getItem('nonExistentKey') === null) {
  console.log("nonExistentKey does not exist in local storage.");
}

// Get the number of items
console.log("Number of items in local storage:", localStorage.length);

// Iterate through all items (advanced)
console.log("\\n--- Iterating through localStorage ---");
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(\`Key: \${key}, Value: \${value}\`);
}

// 6. Clearing all local storage data for the current origin
// Uncomment the line below to clear all data
// localStorage.clear();
// console.log("Local storage cleared. Number of items:", localStorage.length);
`;

// Code example 2: Session Storage Basic Operations
const section2 = `// 1. Storing a simple string
sessionStorage.setItem('currentSection', 'About Us');
console.log("Stored currentSection: About Us");

// 2. Retrieving a simple string
const currentSection = sessionStorage.getItem('currentSection');
console.log("Retrieved currentSection:", currentSection); // Output: Retrieved currentSection: About Us

// 3. Storing an array (requires JSON.stringify)
const searchHistory = ["JavaScript", "Web APIs", "Local Storage"];
sessionStorage.setItem('searchHistory', JSON.stringify(searchHistory));
console.log("Stored searchHistory (as string):", sessionStorage.getItem('searchHistory'));

// 4. Retrieving an array (requires JSON.parse)
const storedHistoryString = sessionStorage.getItem('searchHistory');
const parsedHistory = JSON.parse(storedHistoryString);
console.log("Parsed searchHistory:", parsedHistory);
console.log("First search item:", parsedHistory[0]); // Output: First search item: JavaScript

// 5. Removing a specific item
sessionStorage.removeItem('currentSection');
console.log("currentSection after removal:", sessionStorage.getItem('currentSection')); // Output: currentSection after removal: null

// Get the number of items
console.log("Number of items in session storage:", sessionStorage.length);

// 6. Clearing all session storage data for the current session/origin
// Uncomment the line below to clear all data
// sessionStorage.clear();
// console.log("Session storage cleared. Number of items:", sessionStorage.length);

console.log("\\n-- Reload this page or open a new tab to see session storage clear --");
console.log("If you refresh this same tab, the data might persist depending on browser settings, but closing and reopening the tab/browser will clear it.");
`;

export default function JavascriptWebStoragePage() {
  const page = 15; // Assuming this is the tenth page (index 9) in the JS tutorial

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/C8A2C8/4D3C5C?text=Web+Storage:+Local+and+Session+Storage"
              alt="JavaScript Web Storage: Local Storage & Session Storage"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Web Storage: Local Storage & Session Storage in JavaScript 💾
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Modern web applications often need to store small amounts of data
              directly in the user's browser, for purposes like remembering user
              preferences, caching frequently accessed data, or maintaining
              application state across page loads. This is where **Web Storage**
              (part of the Web Storage API) comes in.
            </p>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Web Storage provides two objects for storing data: `localStorage`
              and `sessionStorage`. Both offer a simple key-value pair storage
              mechanism.
            </p>
            ---
            {/* Local Storage Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                1. Local Storage: Persistent Data 🌐
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                `localStorage` allows you to store data that persists even after
                the user closes the browser tab, window, or even restarts their
                computer. The data has no expiration date and remains until it's
                explicitly cleared by the web application, by the user (e.g.,
                clearing browser data), or by browser settings.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Key Characteristics:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600;">
                    Persistence:
                  </strong>{" "}
                  Data remains until explicitly deleted.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600;">
                    Scope:
                  </strong>{" "}
                  Data is scoped to the **origin** (protocol + domain + port).
                  This means `http://example.com` cannot access data stored by
                  `https://example.com` or `http://sub.example.com`.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600;">
                    Capacity:
                  </strong>{" "}
                  Typically 5-10 MB, much larger than cookies.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-green-600;">
                    Accessibility:
                  </strong>{" "}
                  Accessible only via JavaScript from the same origin. It is NOT
                  sent with every HTTP request to the server, unlike cookies.
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                Common Methods:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <code className="tw:font-mono! tw:bg-gray-100! tw:p-1! tw:rounded! tw:text-red-500!">
                    localStorage.setItem(key, value)
                  </code>
                  : Stores a key-value pair. Both key and value must be strings.
                </li>
                <li>
                  <code className="tw:font-mono! tw:bg-gray-100! tw:p-1! tw:rounded! tw:text-red-500!">
                    localStorage.getItem(key)
                  </code>
                  : Retrieves the value associated with the given key. Returns
                  `null` if the key doesn't exist.
                </li>
                <li>
                  <code className="tw:font-mono! tw:bg-gray-100! tw:p-1! tw:rounded! tw:text-red-500!">
                    localStorage.removeItem(key)
                  </code>
                  : Removes the item with the given key.
                </li>
                <li>
                  <code className="tw:font-mono! tw:bg-gray-100! tw:p-1! tw:rounded! tw:text-red-500!">
                    localStorage.clear()
                  </code>
                  : Removes all key-value pairs for the current origin.
                </li>
                <li>
                  <code className="tw:font-mono! tw:bg-gray-100! tw:p-1! tw:rounded! tw:text-red-500!">
                    localStorage.length
                  </code>
                  : Returns the number of key-value pairs.
                </li>
                <li>
                  <code className="tw:font-mono! tw:bg-gray-100! tw:p-1! tw:rounded! tw:text-red-500!">
                    localStorage.key(index)
                  </code>
                  : Returns the key at a specific index.
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                Working with Objects and Arrays:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Since `localStorage` only stores strings, you need to use
                `JSON.stringify()` to convert JavaScript objects/arrays into
                JSON strings before storing them, and `JSON.parse()` to convert
                them back when retrieving.
              </p>
              <JavascriptViewCode code={section1} indexNumber={0} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Common Use Cases for Local Storage:**
                <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:space-y-1! tw:mt-2!">
                  <li>
                    Storing user preferences (e.g., dark mode setting, language
                    preference).
                  </li>
                  <li>
                    Caching static data (e.g., a list of categories) to reduce
                    API calls.
                  </li>
                  <li>
                    Remembering login status (though tokens are usually
                    preferred for security).
                  </li>
                  <li>Shopping cart contents (before checkout).</li>
                </ul>
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Session Storage Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                2. Session Storage: Session-Specific Data ⏳
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                `sessionStorage` is very similar to `localStorage`, but its data
                persistence is limited to the duration of the "session." A
                session lasts as long as the browser tab or window is open. If
                the user closes the tab/window, the `sessionStorage` data is
                cleared. If the user opens a new tab or window to the same URL,
                it creates a *new, independent* `sessionStorage` instance.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Key Characteristics:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600;">
                    Persistence:
                  </strong>{" "}
                  Data cleared when the browser tab/window is closed.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600;">
                    Scope:
                  </strong>{" "}
                  Also scoped to the **origin** AND the specific **tab/window**.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600;">
                    Capacity:
                  </strong>{" "}
                  Similar to `localStorage`, typically 5-10 MB.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-orange-600;">
                    Accessibility:
                  </strong>{" "}
                  Accessible only via JavaScript from the same origin within the
                  same session.
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                Common Methods:
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The methods for `sessionStorage` are identical to
                `localStorage`: `sessionStorage.setItem()`,
                `sessionStorage.getItem()`, `sessionStorage.removeItem()`,
                `sessionStorage.clear()`, `sessionStorage.length`,
                `sessionStorage.key()`.
              </p>
              <JavascriptViewCode code={section2} indexNumber={1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Common Use Cases for Session Storage:**
                <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:pl-4! tw:space-y-1! tw:mt-2!">
                  <li>
                    Storing data for a multi-step form, where progress needs to
                    be maintained if the user navigates back and forth within
                    the same session, but cleared if they close the tab.
                  </li>
                  <li>
                    Saving temporary user inputs or UI state that doesn't need
                    to persist beyond the current Browse session.
                  </li>
                  <li>
                    Maintaining the scroll position on a page during a user's
                    session.
                  </li>
                </ul>
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Key Differences & Considerations Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                3. Key Differences & Important Considerations ⚠️
              </h2>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                `localStorage` vs. `sessionStorage` vs. Cookies
              </h3>
              <div className="tw:overflow-x-auto! tw:mb-6!">
                <table className="tw:min-w-full! tw:bg-white! tw:border! tw:border-gray-200! tw:rounded-lg! tw:shadow-sm!">
                  <thead>
                    <tr className="tw:bg-gray-100! tw:text-left! tw:text-sm! tw:font-semibold! tw:text-gray-600! tw:uppercase! tw:tracking-wider!">
                      <th className="tw:py-3! tw:px-4! tw:border-b!">
                        Feature
                      </th>
                      <th className="tw:py-3! tw:px-4! tw:border-b!">
                        `localStorage`
                      </th>
                      <th className="tw:py-3! tw:px-4! tw:border-b!">
                        `sessionStorage`
                      </th>
                      <th className="tw:py-3! tw:px-4! tw:border-b!">
                        Cookies
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tw:border-b! tw:border-gray-100!">
                      <td className="tw:py-3! tw:px-4!">Persistence</td>
                      <td className="tw:py-3! tw:px-4!">
                        Permanent (until cleared)
                      </td>
                      <td className="tw:py-3! tw:px-4!">
                        Per session (cleared on tab/window close)
                      </td>
                      <td className="tw:py-3! tw:px-4!">
                        Configurable expiration
                      </td>
                    </tr>
                    <tr className="tw:border-b! tw:border-gray-100! tw:bg-gray-50!">
                      <td className="tw:py-3! tw:px-4!">Capacity</td>
                      <td className="tw:py-3! tw:px-4!">5-10 MB</td>
                      <td className="tw:py-3! tw:px-4!">5-10 MB</td>
                      <td className="tw:py-3! tw:px-4!">4 KB</td>
                    </tr>
                    <tr className="tw:border-b! tw:border-gray-100!">
                      <td className="tw:py-3! tw:px-4!">Sent with Requests</td>
                      <td className="tw:py-3! tw:px-4!">No</td>
                      <td className="tw:py-3! tw:px-4!">No</td>
                      <td className="tw:py-3! tw:px-4!">
                        Yes (with every HTTP request)
                      </td>
                    </tr>
                    <tr className="tw:border-b! tw:border-gray-100! tw:bg-gray-50!">
                      <td className="tw:py-3! tw:px-4!">Accessibility</td>
                      <td className="tw:py-3! tw:px-4!">
                        JS only (same origin)
                      </td>
                      <td className="tw:py-3! tw:px-4!">
                        JS only (same origin, same tab)
                      </td>
                      <td className="tw:py-3! tw:px-4!">
                        JS & Server (via HTTP headers)
                      </td>
                    </tr>
                    <tr className="tw:border-b! tw:border-gray-100!">
                      <td className="tw:py-3! tw:px-4!">Common Use</td>
                      <td className="tw:py-3! tw:px-4!">User prefs, caching</td>
                      <td className="tw:py-3! tw:px-4!">
                        Temporary session data
                      </td>
                      <td className="tw:py-3! tw:px-4!">
                        Session management, authentication (secure HTTPOnly
                        cookies)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                For authentication tokens or sensitive session IDs, **secure
                HTTPOnly cookies** are generally preferred over Web Storage
                because they are not accessible via client-side JavaScript,
                which mitigates certain types of cross-site scripting (XSS)
                attacks. Web Storage is best for non-sensitive data that
                strictly needs client-side persistence.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Security & Limitations:
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600;">
                    XSS Vulnerability:
                  </strong>{" "}
                  Data stored in `localStorage` or `sessionStorage` is
                  vulnerable to Cross-Site Scripting (XSS) attacks. If an
                  attacker can inject malicious JavaScript into your page, they
                  can access all data in Web Storage. Never store sensitive user
                  information (passwords, credit card numbers) directly here.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600;">
                    Synchronous Operations:
                  </strong>{" "}
                  All Web Storage operations are synchronous, meaning they block
                  the main thread until completed. For very large amounts of
                  data, this can cause performance issues (though rarely a
                  problem with typical usage). For larger, more complex
                  client-side databases, consider technologies like IndexedDB.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600;">
                    Storage Quotas:
                  </strong>{" "}
                  While larger than cookies, browsers do have quotas (e.g., 5-10
                  MB per origin). If you exceed the quota, `setItem` will throw
                  an error. Always wrap `setItem` in a `try...catch` block if
                  there's a risk of exceeding the limit.
                </li>
              </ul>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Conclusion Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Conclusion: Client-Side Data Management Simplified ✅
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Web Storage (`localStorage` and `sessionStorage`) offers a
                powerful and easy-to-use solution for client-side data
                persistence in web applications.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  Use `localStorage` when you need data to persist indefinitely
                  (or until cleared by the user/app).
                </li>
                <li>
                  Use `sessionStorage` for temporary, session-specific data that
                  should clear when the tab/window closes.
                </li>
                <li>
                  Always remember to `JSON.stringify()` objects/arrays before
                  storing and `JSON.parse()` them after retrieving.
                </li>
                <li>
                  Be mindful of security: never store sensitive information
                  directly in Web Storage due to XSS risks.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                By leveraging Web Storage effectively, you can enhance user
                experience by remembering preferences, caching data, and
                maintaining UI state, making your web applications more robust
                and user-friendly.
              </p>
              <PageNavigationButtons
                prev={{
                  title: JavascriptChapterFootMap[page - 1]
                    ? JavascriptChapterFootMap[page - 1].title
                    : "Previous Chapter",
                  path: JavascriptChapterFootMap[page - 1]
                    ? JavascriptChapterFootMap[page - 1].path
                    : "#",
                }}
                next={{
                  title: JavascriptChapterFootMap[page + 1]
                    ? JavascriptChapterFootMap[page + 1].title
                    : "Next Chapter",
                  path: JavascriptChapterFootMap[page + 1]
                    ? JavascriptChapterFootMap[page + 1].path
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
