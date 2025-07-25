import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "HTML Forms: Collecting User Input on the Web",
  description:
    "Learn how to create HTML forms to collect user input, including text fields, checkboxes, radio buttons, and more.",
  openGraph: {
    title: "HTML Forms: Collecting User Input on the Web",
    description:
      "Learn how to create HTML forms to collect user input, including text fields, checkboxes, radio buttons, and more.",
    url: `${baseUrl}/lessons/html/forms`,
    siteName: "Openchains Technologies",
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/forms`,
  },
  metadataBase: new URL(baseUrl),
};
const section6_1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML Form</title>
    <style>
        form {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            max-width: 500px;
            margin: 0 auto;
        }
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            color: #333;
        }
        input[type="text"],
        input[type="email"],
        textarea {
            width: calc(100% - 16px);
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box; /* Include padding in width */
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h3>Contact Us</h3>
    <form action="/submit-contact" method="post">
        <label for="contact_name">Your Name:</label>
        <input type="text" id="contact_name" name="contact_name" required>

        <label for="contact_email">Your Email:</label>
        <input type="email" id="contact_email" name="contact_email" required>

        <label for="contact_message">Your Message:</label>
        <textarea id="contact_message" name="contact_message" rows="6"></textarea>

        <input type="submit" value="Send Message">
    </form>
</body>
</html>`;

const section6_2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Various Input Types</title>
    <style>
        form {
            background-color: #f0f8ff; /* Light blue background */
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            max-width: 600px;
            margin: 0 auto;
        }
        label {
            display: inline-block; /* For better alignment with inputs */
            width: 150px; /* Align labels */
            margin-bottom: 10px;
            font-weight: bold;
            color: #2c3e50; /* Darker text */
        }
        input[type="text"],
        input[type="password"],
        input[type="number"],
        input[type="date"],
        input[type="color"],
        input[type="range"],
        input[type="file"],
        select {
            width: calc(100% - 160px); /* Adjust width considering label */
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #aaddff; /* Lighter blue border */
            border-radius: 4px;
            box-sizing: border-box;
            display: inline-block; /* Align with label */
            vertical-align: middle; /* Align vertically */
        }
        input[type="checkbox"],
        input[type="radio"] {
            margin-right: 5px;
            vertical-align: middle;
        }
        .form-group {
            margin-bottom: 15px;
            clear: both; /* Clear float for new line */
        }
        .form-group p {
            margin-bottom: 10px;
            font-weight: bold;
            color: #2c3e50;
        }
        input[type="submit"] {
            background-color: #007bff; /* Blue submit button */
            color: white;
            padding: 10px 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 15px;
            float: right; /* Align to right */
            margin-top: 20px;
        }
        input[type="submit"]:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h3>User Profile Form</h3>
    <form action="/submit-profile" method="post" enctype="multipart/form-data">
        <div class="form-group">
            <label for="p_username">Username:</label>
            <input type="text" id="p_username" name="username" required>
        </div>

        <div class="form-group">
            <label for="p_password">Password:</label>
            <input type="password" id="p_password" name="password" minlength="8" required>
        </div>

        <div class="form-group">
            <label for="p_age">Age:</label>
            <input type="number" id="p_age" name="age" min="18" max="99">
        </div>

        <div class="form-group">
            <label for="p_dob">Date of Birth:</label>
            <input type="date" id="p_dob" name="dob">
        </div>

        <div class="form-group">
            <label for="p_gender">Gender:</label>
            <input type="radio" id="male" name="gender" value="male"> <label for="male" style="width: auto;">Male</label>
            <input type="radio" id="female" name="gender" value="female"> <label for="female" style="width: auto;">Female</label>
            <input type="radio" id="other" name="gender" value="other"> <label for="other" style="width: auto;">Other</label>
        </div>

        <div class="form-group">
            <p>Select Interests:</p>
            <input type="checkbox" id="coding" name="interests" value="coding"> <label for="coding" style="width: auto;">Coding</label><br>
            <input type="checkbox" id="travel" name="interests" value="travel"> <label for="travel" style="width: auto;">Travel</label><br>
            <input type="checkbox" id="sports" name="interests" value="sports"> <label for="sports" style="width: auto;">Sports</label>
        </div>

        <div class="form-group">
            <label for="p_country">Country:</label>
            <select id="p_country" name="country">
                <option value="">-- Select --</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
            </select>
        </div>

        <div class="form-group">
            <label for="p_photo">Profile Photo:</label>
            <input type="file" id="p_photo" name="profile_photo" accept="image/*">
        </div>

        <input type="submit" value="Save Profile">
    </form>
</body>
</html>`;

const section6_3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation and Accessibility</title>
    <style>
        form {
            background-color: #fff3e0; /* Light orange background */
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.15);
            max-width: 600px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #5d4037; /* Brown text */
        }
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        textarea {
            width: calc(100% - 22px); /* Account for padding and border */
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ffcc80; /* Orange border */
            border-radius: 5px;
            box-sizing: border-box;
        }
        input:focus, textarea:focus, select:focus {
            border-color: #ff9800; /* Darker orange on focus */
            outline: none;
            box-shadow: 0 0 5px rgba(255,152,0,0.5);
        }
        input[type="submit"] {
            background-color: #ff5722; /* Deep orange submit button */
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }
        input[type="submit"]:hover {
            background-color: #e64a19;
        }
        input:invalid {
            border-color: #ff1744; /* Red for invalid input */
            box-shadow: 0 0 5px rgba(255,23,68,0.5);
        }
        input:invalid:focus {
            border-color: #d50000;
        }
        .hint {
            font-size: 0.9em;
            color: #757575;
            margin-top: -10px;
            margin-bottom: 15px;
            display: block; /* Ensures hint is on its own line */
        }
    </style>
</head>
<body>
    <h3>Registration Form with Validation</h3>
    <form action="/register-user" method="post">
        <label for="reg_username">Username:</label>
        <input type="text" id="reg_username" name="username" required minlength="4" maxlength="20" placeholder="e.g. johndoe">
        <span class="hint">Must be 4-20 characters long.</span>

        <label for="reg_email">Email Address:</label>
        <input type="email" id="reg_email" name="email" required placeholder="name@example.com">
        <span class="hint">Please enter a valid email address.</span>

        <label for="reg_password">Password:</label>
        <input type="password" id="reg_password" name="password" required minlength="8">
        <span class="hint">Minimum 8 characters.</span>

        <label for="reg_phone">Phone Number:</label>
        <input type="tel" id="reg_phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="e.g. 123-456-7890">
        <span class="hint">Format: XXX-XXX-XXXX (optional).</span>

        <input type="submit" value="Register">
    </form>
</body>
</html>`;

export default function HtmlFormsPage() {
  const page = 5; // Assuming this is the 5th page in your tutorial series (0-indexed)
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=HTML+Forms"
              alt="HTML Forms Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              HTML Forms: Collecting User Input on the Web! 📝
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Forms are crucial components of almost any interactive website.
              They allow users to input data, make selections, and send
              information to a web server. From login pages to contact forms,
              understanding HTML forms is fundamental to web development.
            </p>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Why Forms? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Why are HTML Forms Essential? 🚀
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Forms are the gateway for user interaction, enabling:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Data Submission:
                  </strong>{" "}
                  Sending information like login credentials, contact details,
                  or order information to a server for processing.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    User Registration/Login:
                  </strong>{" "}
                  Allowing users to create accounts and access personalized
                  content.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Surveys & Feedback:
                  </strong>{" "}
                  Gathering opinions, preferences, and feedback from users.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Search Functionality:
                  </strong>{" "}
                  Enabling users to search for specific content on a website.
                </li>
              </ul>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* The <form> Element and Its Attributes */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                The `&lt;form&gt;` Element and Its Key Attributes 🌐
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `&lt;form&gt;` tag is the container for all form elements.
                Its most important attributes define how the form data is sent:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `action`:
                  </strong>
                  Specifies the URL where the form data will be sent when
                  submitted. This is typically a server-side script that
                  processes the data (e.g., `/submit-data`, `process.php`).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `method`:
                  </strong>
                  Defines the HTTP method used to send the form data.
                  <ul className="tw:list-circle! tw:list-inside! tw:ml-6! tw:mt-2! tw:space-y-1!">
                    <li>
                      <strong className="tw:font-semibold! tw:text-green-600!">
                        `GET`:
                      </strong>{" "}
                      Appends form data to the URL as query parameters. This is
                      suitable for non-sensitive data, like search queries, and
                      has URL length limitations. Data is visible in the
                      browser's address bar.
                    </li>
                    <li>
                      <strong className="tw:font-semibold! tw:text-red-600!">
                        `POST`:
                      </strong>{" "}
                      Sends form data as part of the HTTP request body. This is
                      the preferred method for sensitive data (passwords,
                      personal info) or large amounts of data, as it's not
                      visible in the URL and has no size limitations.
                    </li>
                  </ul>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `enctype`:
                  </strong>
                  Specifies how the form data should be encoded when submitting
                  (especially with `POST`). The default is
                  `application/x-www-form-urlencoded`. If your form includes
                  file uploads, you must set it to `multipart/form-data`.
                </li>
              </ul>
            </section>

            {/* Code in Action 1 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 1: Basic Contact Form Structure ✉️
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Here's a simple contact form. Observe the `&lt;form&gt;` tag
                with its `action` and `method` attributes, and how
                `&lt;label&gt;`, `&lt;input type="text"&gt;`, `&lt;input
                type="email"&gt;`, and `&lt;textarea&gt;` are used.
              </p>
              <CodeReviewPager code={section6_1} />
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Input Elements and Types */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Input Elements and Their Versatile Types `&lt;input&gt;` ⚙️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The `&lt;input&gt;` tag is the most flexible form element,
                controlled by its `type` attribute. Each input type serves a
                specific purpose for collecting different kinds of data:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `text`:
                  </strong>{" "}
                  Single-line text input (default).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `password`:
                  </strong>{" "}
                  Single-line text input where characters are masked (e.g., with
                  asterisks).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `email`:
                  </strong>{" "}
                  For email addresses. Provides basic validation in modern
                  browsers.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `number`:
                  </strong>{" "}
                  For numerical input. Can include `min`, `max`, and `step`
                  attributes.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `date`, `time`, `datetime-local`, `month`, `week`:
                  </strong>{" "}
                  For date and time selection, often with built-in pickers.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `checkbox`:
                  </strong>{" "}
                  Allows users to select zero or more options from a list.
                  Multiple checkboxes can share the same `name` attribute.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `radio`:
                  </strong>{" "}
                  Allows users to select exactly one option from a set of
                  choices. Radio buttons in the same group must share the same
                  `name` attribute.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `file`:
                  </strong>{" "}
                  Allows users to select one or more files to upload. Use with
                  `enctype="multipart/form-data"` on the `&lt;form&gt;`.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `submit`:
                  </strong>{" "}
                  A button that submits the form data to the `action` URL.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `reset`:
                  </strong>{" "}
                  A button that resets all form fields to their initial values.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `hidden`:
                  </strong>{" "}
                  An input field not visible to the user, used to send data that
                  the user shouldn't see or modify.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `color`:
                  </strong>{" "}
                  For selecting a color, often with a color picker interface.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `range`:
                  </strong>{" "}
                  A slider for selecting a numerical value within a specified
                  range.
                </li>
              </ul>
              <p className=" tw:leading-relaxed! tw:font-semibold! tw:text-blue-500!">
                All `&lt;input&gt;` elements should have a `name` attribute.
                This `name` is what the server uses to identify the data sent
                from that input.
              </p>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Other Form Elements */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Other Important Form Elements 🏷️
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;label&gt;`:
                  </strong>
                  Provides a caption for a form element. It's crucial for
                  accessibility. The `for` attribute of the `&lt;label&gt;`
                  should match the `id` of the related input element.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;textarea&gt;`:
                  </strong>
                  For multi-line text input. Attributes like `rows` and `cols`
                  define its initial size.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;select&gt;` and `&lt;option&gt;`:
                  </strong>
                  Create a dropdown list. `&lt;select&gt;` is the container, and
                  each `&lt;option&gt;` represents a selectable item. The
                  `value` attribute of `&lt;option&gt;` is what gets sent to the
                  server.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;button&gt;`:
                  </strong>
                  A more versatile button element. Its default `type` is
                  "submit", but can be set to "reset" or "button".
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;fieldset&gt;` and `&lt;legend&gt;`:
                  </strong>
                  Used to group related form elements semantically.
                  `&lt;fieldset&gt;` draws a box around the group, and
                  `&lt;legend&gt;` provides a caption for that group.
                </li>
              </ul>
            </section>

            {/* Code in Action 2 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 2: Diverse Input Types and Selects 🎛️
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example showcases a variety of input types, including
                checkboxes, radio buttons, dropdowns, and file uploads,
                demonstrating their unique functionalities.
              </p>
              <CodeReviewPager code={section6_2} />
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Form Validation and Accessibility Attributes */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Form Validation and Accessibility Attributes ✅
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                HTML5 introduced built-in form validation, reducing the need for
                complex JavaScript for basic checks. These attributes also aid
                accessibility.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `required`:
                  </strong>{" "}
                  Makes an input field mandatory. The form cannot be submitted
                  if this field is empty.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `placeholder`:
                  </strong>{" "}
                  Provides a hint or example of the expected input value (e.g.,
                  "John Doe" for a name field).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `minlength`, `maxlength`:
                  </strong>{" "}
                  Set the minimum and maximum number of characters allowed in a
                  text-based input.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `min`, `max`:
                  </strong>{" "}
                  Set the minimum and maximum values for numerical or date
                  inputs.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `pattern`:
                  </strong>{" "}
                  Specifies a regular expression that the input value must match
                  to be considered valid. Useful for phone numbers, custom
                  formats.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `autofocus`:
                  </strong>{" "}
                  Automatically puts the cursor in this input field when the
                  page loads.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `autocomplete`:
                  </strong>{" "}
                  Suggests common values for the field based on previous user
                  input.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `disabled`, `readonly`:
                  </strong>{" "}
                  `disabled` makes the input unusable and its value is not sent
                  with the form. `readonly` makes the input unmodifiable but its
                  value is still sent.
                </li>
              </ul>
            </section>

            {/* Code in Action 3 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 3: Form Validation and Hints ✨
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example demonstrates several HTML5 validation attributes
                like `required`, `minlength`, `maxlength`, and `pattern`. Try
                submitting the form with invalid data to see the browser's
                built-in validation messages.
              </p>
              <CodeReviewPager code={section6_3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                Understanding HTML forms is a cornerstone of building
                interactive web applications. Keep practicing these foundational
                HTML skills! 💪
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
