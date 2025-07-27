import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
import JavascriptViewCode from "@/components/tutorials/js-view";
import { baseUrl } from "@/utils/globals";

export const metadata = {
  title:
    "JavaScript Working with APIs - Fetch, Async/Await, REST, Error Handling - OpenChains Technologies",
  description:
    "Master JavaScript API interaction: Learn HTTP requests with Fetch API, handling GET/POST, async/await, error management, CORS, authentication, and advanced API patterns.",
  openGraph: {
    title:
      "JavaScript Working with APIs - Fetch, Async/Await, REST, Error Handling - OpenChains Technologies",
    description:
      "Master JavaScript API interaction: Learn HTTP requests with Fetch API, handling GET/POST, async/await, error management, CORS, authentication, and advanced API patterns.",
    url: `${baseUrl}/lessons/javascript/working-with-apis`,
    siteName: "OpenChains Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JavaScript Working with APIs - Fetch, Async/Await, REST, Error Handling - OpenChains Technologies",
    description:
      "Master JavaScript API interaction: Learn HTTP requests with Fetch API, handling GET/POST, async/await, error management, CORS, authentication, and advanced API patterns.",
  },
  keywords: [
    "JavaScript APIs",
    "Web APIs",
    "Fetch API",
    "HTTP Requests",
    "GET Request",
    "POST Request",
    "PUT Request",
    "DELETE Request",
    "JSON",
    "REST API",
    "async await fetch",
    "Promise.then catch",
    "CORS",
    "API Authentication",
    "API Key",
    "Bearer Token",
    "Rate Limiting",
    "Pagination API",
    "HTTP Status Codes",
    "JavaScript Tutorial",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/lessons/javascript/working-with-apis`,
  },
  metadataBase: new URL(baseUrl),
};

// Dummy API endpoint for examples (using JSONPlaceholder for public access)
// const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// Code example 1: What is an API & HTTP Methods
const section1 = `// Example HTTP Methods (not runnable JS, just concepts)
// GET: Retrieve data
// GET /users              - Get a list of users
// GET /users/123          - Get details for user with ID 123

// POST: Create new data
// POST /users             - Create a new user (data in request body)

// PUT: Update existing data (entire resource)
// PUT /users/123          - Update all details for user 123 (data in request body)

// PATCH: Update existing data (partial resource)
// PATCH /users/123        - Update specific fields for user 123 (data in request body)

// DELETE: Remove data
// DELETE /users/123       - Delete user with ID 123

// Example of a JSON response (common API data format)
const jsonResponseExample = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
};
console.log("// JSON is a common data format for APIs.");
console.log(JSON.stringify(jsonResponseExample, null, 2));
`;

// Code example 2: Basic GET Request with Fetch API (.then().catch())
const section2 = `// This example uses JSONPlaceholder, a free fake API
const postsApiUrl = "https://jsonplaceholder.typicode.com/posts/1";

// Making a GET request using fetch
console.log("--- Fetching a single post (GET) ---");
fetch(postsApiUrl)
  .then(response => {
    // Check if the response was successful (HTTP status 200-299)
    if (!response.ok) {
      // If not successful, throw an error to be caught by the .catch() block
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    // Parse the JSON body of the response
    return response.json();
  })
  .then(data => {
    // Work with the fetched data
    console.log("Fetched Post Data:", data);
    console.log("Post Title:", data.title);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error("Fetch Error:", error.message);
  });

const nonExistentUrl = "https://jsonplaceholder.typicode.com/non-existent-path";
console.log("\\n--- Fetching a non-existent resource ---");
fetch(nonExistentUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Fetched Data (should not happen):", data);
  })
  .catch(error => {
    console.error("Fetch Error for non-existent resource:", error.message);
  });
`;

// Code example 3: POST Request with Fetch API
const section3 = `const newPostApiUrl = "https://jsonplaceholder.typicode.com/posts";

const newPostData = {
  title: 'My New Awesome Post',
  body: 'This is the content of my brand new post.',
  userId: 1,
};

console.log("--- Creating a new post (POST) ---");
fetch(newPostApiUrl, {
  method: 'POST', // Specify the HTTP method
  headers: {
    // Tell the server that we are sending JSON data
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newPostData), // Convert JavaScript object to JSON string
})
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    return response.json(); // Server usually responds with the created resource
  })
  .then(data => {
    console.log("Successfully created post:", data);
    // The server often returns the created resource with an ID
    console.log("New Post ID:", data.id);
  })
  .catch(error => {
    console.error("Error creating post:", error.message);
  });
`;

// Code example 4: PUT/DELETE Requests and Request Headers
const section4 = `// PUT Request (Updating an existing resource)
const updatePostUrl = "https://jsonplaceholder.typicode.com/posts/1"; // Update post with ID 1
const updatedPostData = {
  id: 1, // Often included for PUT, but server identifies by URL
  title: 'Updated Post Title',
  body: 'This post content has been entirely replaced.',
  userId: 1,
};

console.log("--- Updating a post (PUT) ---");
fetch(updatePostUrl, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedPostData),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Successfully updated post:", data);
  })
  .catch(error => {
    console.error("Error updating post:", error.message);
  });


// DELETE Request (Deleting a resource)
const deletePostUrl = "https://jsonplaceholder.typicode.com/posts/1"; // Delete post with ID 1

console.log("\\n--- Deleting a post (DELETE) ---");
fetch(deletePostUrl, {
  method: 'DELETE',
})
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    // DELETE requests often return an empty body or a success message
    // If the server returns JSON, you'd use response.json()
    console.log(\`Post deleted successfully! Status: \${response.status}\`);
  })
  .catch(error => {
    console.error("Error deleting post:", error.message);
  });


// Example: Adding Custom Headers (e.g., Authorization)
// In a real application, token would come from authentication process
const securedApiUrl = "https://jsonplaceholder.typicode.com/posts/2";
const authToken = "your_jwt_token_here"; // Replace with actual token

console.log("\\n--- Fetching with Authorization Header ---");
fetch(securedApiUrl, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': \`Bearer \${authToken}\`, // Common for JWTs
    'X-Custom-Header': 'My-Value', // Example of a custom header
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Fetched secured data:", data);
  })
  .catch(error => {
    console.error("Error fetching secured data:", error.message);
  });
`;

// Code example 5: Async/Await with Fetch for Cleaner Code
const section5 = `// Using async/await for a GET request
async function getPostById(id) {
  const url = \`https://jsonplaceholder.typicode.com/posts/\${id}\`;
  console.log(\`\\n--- Fetching post \${id} with async/await (GET) ---\`);
  try {
    const response = await fetch(url);

    if (!response.ok) {
      // Throw an error if HTTP status is not 2xx
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const data = await response.json();
    console.log(\`Post \${id} Data:\`, data);
    return data;
  } catch (error) {
    // Catch any network errors or errors thrown from inside the try block
    console.error(\`Error fetching post \${id}:\`, error.message);
    return null; // Or re-throw, or handle gracefully
  }
}

// Using async/await for a POST request
async function createNewUser(userData) {
  const url = "https://jsonplaceholder.typicode.com/users";
  console.log("\\n--- Creating a new user with async/await (POST) ---");
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json(); // Try to get error details from server
      throw new Error(\`HTTP error! Status: \${response.status}, Details: \${JSON.stringify(errorData)}\`);
    }

    const newUser = await response.json();
    console.log("New user created:", newUser);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error.message);
    return null;
  }
}

// Call the async functions
getPostById(1);
getPostById(9999); // This will simulate an HTTP 404 error

createNewUser({
  name: "Jane Doe",
  username: "janedoe",
  email: "jane.doe@example.com"
});
`;

// Code example 6: CORS Explained (Concept, not runnable JS)
const section6 = `// This is not runnable JavaScript code, but an explanation of CORS.

// Scenario 1: Same Origin (Allowed)
// Your Frontend: https://mywebsite.com
// Your Backend API: https://mywebsite.com/api
// -> Browser allows request.

// Scenario 2: Different Origin (CORS Required)
// Your Frontend: https://mywebsite.com
// Third-party API: https://api.external.com
// -> Browser sends a "preflight" (OPTIONS) request first.
//    If api.external.com's server responds with appropriate CORS headers
//    (e.g., Access-Control-Allow-Origin: https://mywebsite.com),
//    then the browser allows the actual request (GET, POST, etc.) to proceed.
//    Otherwise, the browser blocks the request and you see a CORS error in the console.

// Common CORS Error Message in Browser Console:
// Access to fetch at 'https://api.external.com/data' from origin 'https://mywebsite.com'
// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present
// on the requested resource.

// How to fix CORS errors:
// 1. Server-side (Most Common & Correct): Configure the API server to include
//    'Access-Control-Allow-Origin' header for your frontend's origin.
// 2. Proxy (Frontend Solution): Route your frontend requests through your own
//    backend server (same origin as frontend), which then forwards them to the
//    third-party API. The browser sees a same-origin request to your backend,
//    and your backend isn't subject to browser's CORS policy.
// 3. Browser Extensions (Development Only): Use extensions that disable CORS,
//    but NEVER for production or sensitive data.
`;

// Code example 7: Advanced API Concepts (Conceptual, not runnable JS for all)
const section7 = `// 1. Authentication: Proving who you are to the API

// a) API Keys: A simple, usually long string sent with each request.
//    Often sent as a query parameter or a custom header.
//    Example: GET /data?apiKey=YOUR_API_KEY
//    Example Header: 'X-API-Key': 'YOUR_API_KEY'
/*
fetch('https://api.example.com/data', {
  headers: {
    'X-API-Key': 'YOUR_API_KEY_HERE'
  }
});
*/

// b) Bearer Tokens (e.g., JWT - JSON Web Tokens):
//    After successful login, your frontend receives a token from the auth server.
//    This token is then sent in an 'Authorization' header for subsequent requests.
//    Example Header: 'Authorization': 'Bearer <your-jwt-token>'
/*
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // A real JWT
fetch('https://api.example.com/protected-data', {
  headers: {
    'Authorization': \`Bearer \${jwtToken}\`
  }
});
*/

// c) OAuth 2.0: A more complex standard for delegated authorization.
//    Used when granting a third-party app access to a user's data on another service
//    (e.g., "Login with Google", "Connect with Facebook").
//    Involves multiple steps: authorization request, user consent, getting an authorization code,
//    exchanging code for an access token, then using the access token.

// 2. Rate Limiting: Preventing abuse and ensuring fair usage
//    APIs often limit how many requests you can make in a given time period (e.g., 100 requests/minute).
//    If you exceed the limit, the API returns a 429 Too Many Requests status code.
//    Look for 'Retry-After' header in the response to know when to try again.
/*
async function fetchDataWithRetry(url) {
  let response = await fetch(url);
  if (response.status === 429) {
    const retryAfter = response.headers.get('Retry-After');
    console.warn(\`Rate limit hit! Retrying after \${retryAfter} seconds...\`);
    await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
    return fetchDataWithRetry(url); // Recursive retry
  }
  return response.json();
}
*/

// 3. Pagination: Handling large datasets
//    APIs return data in chunks (pages) to avoid overwhelming the client or server.
//    Common parameters: 'page', 'pageSize' (or 'limit', 'offset').
//    Example: GET /products?page=2&pageSize=10
/*
async function getAllProducts(page = 1, allProducts = []) {
  const response = await fetch(\`/products?page=\${page}&limit=50\`);
  const data = await response.json();
  allProducts.push(...data.products); // Add products from current page
  if (data.hasMorePages) { // Assuming API tells us if more pages exist
    return getAllProducts(page + 1, allProducts);
  }
  return allProducts;
}
getAllProducts().then(products => console.log(\`Total products: \${products.length}\`));
*/

// 4. API Error Responses: Standardized feedback from the server
//    APIs often return detailed error messages in JSON format for non-2xx statuses.
/*
// Server's error response might look like:
// {
//   "status": "error",
//   "code": "VALIDATION_FAILED",
//   "message": "The 'email' field is required.",
//   "errors": [
//     { "field": "email", "code": "MISSING_FIELD", "message": "Email is required" }
//   ]
// }
*/
/*
try {
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ name: "John" }) // Missing email
  });
  if (!response.ok) {
    const errorBody = await response.json();
    console.error("API Error:", errorBody.message, errorBody.errors);
    // Display specific error to user
  }
} catch (error) {
  console.error("Network or parsing error:", error);
}
*/
`;

export default function JavascriptWorkingWithApisPage() {
  const page = 14; // Assuming this is the ninth page (index 8) in the JS tutorial

  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/AAD2BA/3F4A59?text=Working+with+APIs+in+JavaScript"
              alt="Working with APIs in JavaScript"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Working with APIs in JavaScript: Connecting Your Apps to the World
              🌐
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              In today's interconnected world, most dynamic web applications
              don't just display static content; they interact with external
              services to fetch and send data. This interaction happens via
              **APIs (Application Programming Interfaces)**.
            </p>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Think of an API as a **menu for a restaurant** or a **blueprint
              for a complex machine**. It defines a set of rules and
              specifications that allows different software applications to
              communicate with each other. For web development, this usually
              means your JavaScript frontend communicating with a backend server
              or a third-party service (like weather data, social media feeds,
              payment gateways, etc.).
            </p>
            ---
            {/* Basic Concepts Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                1. Basic Concepts of Web APIs (HTTP & REST) 📡
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Most web APIs today follow the **REST (Representational State
                Transfer)** architectural style, which leverages the existing
                HTTP protocol.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                HTTP Methods (Verbs)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                HTTP defines several request methods (sometimes called "verbs")
                that indicate the desired action to be performed for a given
                resource. The most common ones are:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    GET:
                  </strong>{" "}
                  Retrieve data from the server. (e.g., get a list of users, get
                  a specific product). Safe and idempotent.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    POST:
                  </strong>{" "}
                  Send data to the server to create a new resource. (e.g.,
                  create a new user, submit a form).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    PUT:
                  </strong>{" "}
                  Update an existing resource on the server (usually replaces
                  the entire resource).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    PATCH:
                  </strong>{" "}
                  Partially update an existing resource on the server (updates
                  specific fields).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    DELETE:
                  </strong>{" "}
                  Remove a resource from the server.
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                URLs (Endpoints) & Resources
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                APIs expose data through specific **URLs**, often called
                **endpoints**. These URLs represent "resources" (e.g., `/users`,
                `/products/123`).
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                Request & Response
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    Request:
                  </strong>{" "}
                  Your application sends an HTTP request, containing:
                  <ul className="tw:list-circle! tw:list-inside! tw:pl-4! tw:mt-1! tw:space-y-1!">
                    <li>HTTP Method (GET, POST, etc.)</li>
                    <li>URL (Endpoint)</li>
                    <li>
                      Headers (metadata like `Content-Type`, `Authorization`)
                    </li>
                    <li>
                      Body (for POST/PUT/PATCH, containing the data to send,
                      usually JSON)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    Response:
                  </strong>{" "}
                  The server sends back an HTTP response, containing:
                  <ul className="tw:list-circle! tw:list-inside! tw:pl-4! tw:mt-1! tw:space-y-1!">
                    <li>
                      Status Code (e.g., 200 OK, 404 Not Found, 500 Internal
                      Server Error)
                    </li>
                    <li>Headers</li>
                    <li>Body (the data returned by the API, usually JSON)</li>
                  </ul>
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                JSON: The Universal Data Format
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **JSON (JavaScript Object Notation)** is the most common data
                format for web APIs. It's lightweight, human-readable, and maps
                directly to JavaScript objects, making it incredibly easy to
                work with.
              </p>
              <JavascriptViewCode code={section1} indexNumber={0} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                JSON provides a structured way for the server and client to
                exchange information.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Making API Requests Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                2. Making API Requests in JavaScript: The `Fetch` API 🚀
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Historically, JavaScript used `XMLHttpRequest` (XHR) for making
                HTTP requests. While still available, it's largely been replaced
                by the more modern, promise-based **`Fetch API`**, which offers
                a simpler and more powerful way to make network requests.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                a) Basic `GET` Request with `fetch`
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A basic `fetch()` call takes the URL as its first argument and
                returns a Promise that resolves to the `Response` object.
              </p>
              <JavascriptViewCode code={section2} indexNumber={1} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **Important `fetch` behavior**: `fetch` only `rejects` its
                Promise (i.e., goes to the `.catch()` block) for network errors
                (e.g., no internet connection). It *does not* reject for HTTP
                error status codes like 404 (Not Found) or 500 (Internal Server
                Error). For these, you must manually check `response.ok` (a
                boolean indicating 2xx status) or `response.status`.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                b) `POST` Request (Sending Data)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                To send data (e.g., for creating a new resource), you need to
                provide a second argument to `fetch()`: an `options` object.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `method`:
                  </strong>{" "}
                  Specify `'POST'` (or `'PUT'`, `'DELETE'`, etc.).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `headers`:
                  </strong>{" "}
                  An object containing HTTP headers. Crucially, `'Content-Type':
                  'application/json'` tells the server you're sending JSON.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-blue-600;">
                    `body`:
                  </strong>{" "}
                  The data you're sending, typically converted to a JSON string
                  using `JSON.stringify()`.
                </li>
              </ul>
              <JavascriptViewCode code={section3} indexNumber={2} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                c) `PUT`, `DELETE` and Custom Headers
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                `PUT` and `DELETE` requests follow similar patterns to `POST`,
                mainly differing in their `method` and whether they require a
                `body`. Custom headers are vital for authentication, content
                negotiation, and other specific API requirements.
              </p>
              <JavascriptViewCode code={section4} indexNumber={3} />
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Advanced Request Techniques Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                3. `async/await` with `Fetch`: Cleaner Asynchronous Code ✨
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                As you learned in the Promises and Async/Await section, using
                `async/await` significantly simplifies working with Promises,
                making asynchronous code look and feel more synchronous and
                readable. This is particularly true for API calls.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>Wrap your `fetch` calls in an `async` function.</li>
                <li>Use `await` before `fetch()` and `response.json()`.</li>
                <li>
                  Use standard `try...catch` blocks to handle errors effectively
                  (both network errors and HTTP status errors you throw).
                </li>
              </ul>
              <JavascriptViewCode code={section5} indexNumber={4} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                The `async/await` syntax often results in much cleaner and
                easier-to-debug API interaction code compared to chaining
                multiple `.then()` calls.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* CORS Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                4. Understanding CORS (Cross-Origin Resource Sharing) 🚫
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                One of the most common issues developers encounter when working
                with APIs from a browser is a **CORS error**. This is a security
                mechanism enforced by web browsers.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600;">
                    The Same-Origin Policy:
                  </strong>{" "}
                  Browsers by default restrict web pages from making requests to
                  a different domain (origin) than the one that served the web
                  page. This prevents malicious scripts on one site from
                  accessing sensitive data on another.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600;">
                    CORS to the Rescue:
                  </strong>{" "}
                  CORS is a mechanism that uses HTTP headers to allow a server
                  to explicitly grant permission to a web page at one origin to
                  access resources from a different origin.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-red-600;">
                    Typical CORS Error:
                  </strong>{" "}
                  If the API server you're trying to access doesn't send the
                  appropriate CORS headers (like `Access-Control-Allow-Origin`)
                  back to your browser, the browser will block the request, even
                  if the server successfully processed it.
                </li>
              </ul>
              <JavascriptViewCode code={section6} indexNumber={5} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-4! tw:mb-6!">
                **How to solve CORS errors:** The solution almost always lies on
                the **server-side**, by configuring the API to send the correct
                CORS headers. As a frontend developer, if you face a CORS issue
                with an API you control, you need to adjust your backend. If
                it's a third-party API, you might need to use a proxy server or
                check their documentation for CORS policies.
              </p>
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Advanced API Concepts Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                5. Advanced API Concepts & Patterns ⚙️
              </h2>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                a) Authentication
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Many APIs require you to prove your identity or authorization to
                access resources. Common methods include:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600;">
                    API Keys:
                  </strong>{" "}
                  A unique string sent with each request (often in a header like
                  `X-API-Key` or as a query parameter).
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600;">
                    Bearer Tokens (JWTs):
                  </strong>{" "}
                  After user login, the server issues a token (like a JSON Web
                  Token). This token is then included in the `Authorization`
                  header (`Authorization: Bearer YOUR_TOKEN`) for all subsequent
                  protected requests.
                </li>
                <li>
                  <strong className="tw:font-semibold! tw:text-purple-600;">
                    OAuth 2.0:
                  </strong>{" "}
                  A robust standard for delegated authorization, allowing users
                  to grant third-party applications limited access to their
                  resources on another service (e.g., "Login with Google").
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                b) Rate Limiting
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                APIs often impose limits on the number of requests you can make
                within a certain timeframe to prevent abuse and ensure service
                availability. If you exceed this limit, you'll typically receive
                an HTTP `429 Too Many Requests` status code. You might also find
                a `Retry-After` header indicating when you can make another
                request.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                c) Pagination
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                For APIs with large datasets, it's inefficient to send all data
                at once. APIs use pagination, returning data in smaller "pages"
                or chunks. You typically specify `page` number, `page_size` (or
                `limit`), and `offset` in query parameters to navigate through
                the data.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3! tw:mt-6;">
                d) API Error Responses
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Beyond HTTP status codes, well-designed APIs provide clear,
                structured error messages in their response body (usually JSON)
                for common issues like validation errors, invalid parameters, or
                unauthorized access. Always inspect the response body when
                `response.ok` is false to get detailed error information.
              </p>
              <JavascriptViewCode code={section7} indexNumber={6} />
            </section>
            <hr className="tw:my-8! tw:border-gray-300!" />
            {/* Conclusion Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-purple-400! tw:pb-2!">
                Conclusion: Your Gateway to Dynamic Web Applications! 🚀
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Mastering API interactions is one of the most valuable skills
                for any modern JavaScript developer. It allows your applications
                to be dynamic, integrate with countless services, and truly come
                alive with real-time data.
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                You've learned about:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li>The core concepts of APIs, HTTP methods, and JSON.</li>
                <li>
                  Making `GET`, `POST`, `PUT`, and `DELETE` requests using the
                  modern `Fetch API`.
                </li>
                <li>
                  Handling responses and errors effectively with
                  `.then().catch()` and `async/await`.
                </li>
                <li>Understanding and troubleshooting CORS issues.</li>
                <li>
                  Advanced topics like authentication, rate limiting, and
                  pagination.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                The best way to solidify this knowledge is by building projects
                that consume real APIs. Start with a free public API (like
                JSONPlaceholder, as used in these examples, or others like the
                OpenWeatherMap API, or the Giphy API) and experiment with
                fetching, displaying, and sending data. Happy API querying!
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
