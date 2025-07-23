import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";

const section5_1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML Table</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h3>Simple Employee Data</h3>
    <table>
        <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
        </tr>
        <tr>
            <td>001</td>
            <td>John</td>
            <td>Doe</td>
            <td>Sales</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Jane</td>
            <td>Smith</td>
            <td>Marketing</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Peter</td>
            <td>Jones</td>
            <td>IT</td>
        </tr>
    </table>
</body>
</html>`;

const section5_2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table with Headers and Footers</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #e0f2fe; /* Light blue for header */
            color: #1e40af; /* Dark blue text */
        }
        tfoot td {
            background-color: #f2f2f2;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h3>Quarterly Revenue Report</h3>
    <table>
        <thead>
            <tr>
                <th>Quarter</th>
                <th>Sales Revenue ($)</th>
                <th>Expenses ($)</th>
                <th>Net Profit ($)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Q1</td>
                <td>150,000</td>
                <td>80,000</td>
                <td>70,000</td>
            </tr>
            <tr>
                <td>Q2</td>
                <td>180,000</td>
                <td>95,000</td>
                <td>85,000</td>
            </tr>
            <tr>
                <td>Q3</td>
                <td>170,000</td>
                <td>88,000</td>
                <td>82,000</td>
            </tr>
            <tr>
                <td>Q4</td>
                <td>200,000</td>
                <td>110,000</td>
                <td>90,000</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td>700,000</td>
                <td>373,000</td>
                <td>327,000</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>`;

const section5_3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table with Cell Spanning</title>
    <style>
        table {
            width: 80%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center; /* Center align for clarity in spanning */
        }
        th {
            background-color: #ffe0b2; /* Light orange */
            color: #e65100; /* Dark orange */
        }
        caption {
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 1.2em;
            color: #333;
        }
    </style>
</head>
<body>
    <h3>Conference Schedule</h3>
    <table>
        <caption>Day 1 Agenda</caption>
        <thead>
            <tr>
                <th rowspan="2">Time</th>
                <th colspan="2">Morning</th>
                <th colspan="2">Afternoon</th>
            </tr>
            <tr>
                <th>Track A</th>
                <th>Track B</th>
                <th>Track A</th>
                <th>Track B</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>9:00 - 10:00</td>
                <td>Keynote Address</td>
                <td colspan="3">Welcome & Networking (Shared Session)</td>
            </tr>
            <tr>
                <td>10:00 - 11:00</td>
                <td>Session 1A</td>
                <td>Session 1B</td>
                <td>Session 2A</td>
                <td>Session 2B</td>
            </tr>
            <tr>
                <td>11:00 - 12:00</td>
                <td>Session 1C</td>
                <td>Session 1D</td>
                <td>Session 2C</td>
                <td>Session 2D</td>
            </tr>
            <tr>
                <td colspan="5">Lunch Break</td>
            </tr>
            <tr>
                <td>13:00 - 14:00</td>
                <td>Workshop 1</td>
                <td>Panel Discussion</td>
                <td>Workshop 2</td>
                <td>Case Study</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`;

export default function HtmlTablesPage() {
  const page = 6; // Assuming this is the 4th page in your tutorial series (0-indexed)
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=HTML+Tables"
              alt="HTML Tables Concepts"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              HTML Tables: Structuring Tabular Data Like a Pro! 📊
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              HTML tables are used to display data in a grid format. They are
              ideal for presenting information that naturally fits into rows and
              columns, such as financial data, product listings, or schedules.
            </p>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Why Tables? Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Why Use Tables in HTML? 📝
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Tables are a powerful tool for:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Organizing Data:
                  </strong>{" "}
                  They provide a clear, structured way to present data that has
                  a strong row/column relationship.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Readability:
                  </strong>{" "}
                  Complex data becomes much easier to read and compare when
                  presented in a tabular format.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600!">
                    Accessibility:
                  </strong>{" "}
                  Semantic table elements help screen readers and other
                  assistive technologies understand the relationships between
                  data cells and headers.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold! tw:text-red-500!">
                Important Note:
              </p>
              <p className="tw:text-gray-700! tw:leading-relaxed!">
                Do **not** use tables for page layout! While tables were once
                used for this purpose, CSS is the correct tool for page layout.
                Tables should only be used for actual tabular data.
              </p>
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Basic Table Structure Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Basic Table Structure: `&lt;table&gt;`, `&lt;tr&gt;`,
                `&lt;th&gt;`, `&lt;td&gt;` 🧱
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The foundation of any HTML table involves these core elements:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;table&gt;`:
                  </strong>
                  The container for all table content.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;tr&gt;` (Table Row):
                  </strong>
                  Defines a single row in the table. Each `&lt;tr&gt;` contains
                  either table headers or table data cells.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;th&gt;` (Table Header):
                  </strong>
                  Defines a header cell within a table. By default, content
                  inside `&lt;th&gt;` tags is bold and centered. Headers provide
                  context for the data in a column or row.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;td&gt;` (Table Data):
                  </strong>
                  Defines a standard data cell within a table. This is where the
                  actual data goes.
                </li>
              </ul>
            </section>

            {/* Code in Action 1 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 1: Building a Simple Table 🛠️
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Let's start with a basic table to display some employee
                information. Notice how `&lt;th&gt;` elements define the column
                titles.
              </p>
              <CodeReviewPager code={section5_1} />
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Semantic Table Elements Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Semantic Table Elements: `&lt;thead&gt;`, `&lt;tbody&gt;`,
                `&lt;tfoot&gt;`, `&lt;caption&gt;` 🧠
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                To improve the structure and accessibility of your tables, HTML
                provides semantic grouping elements:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;thead&gt;` (Table Head):
                  </strong>
                  Groups the header content of the table. It must contain one or
                  more `&lt;tr&gt;` elements.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;tbody&gt;` (Table Body):
                  </strong>
                  Groups the main body content of the table. This is where the
                  primary data rows are placed. A table can have multiple
                  `&lt;tbody&gt;` elements for different data sections.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;tfoot&gt;` (Table Foot):
                  </strong>
                  Groups the footer content of the table. Often used for summary
                  rows like totals. It must contain one or more `&lt;tr&gt;`
                  elements.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `&lt;caption&gt;`:
                  </strong>
                  Provides a title or description for the entire table. It
                  should be the first element inside the `&lt;table&gt;` tag.
                </li>
              </ul>
            </section>

            {/* Code in Action 2 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 2: Tables with Headers and Footers 📈
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Here, we'll demonstrate a table that uses `&lt;thead&gt;`,
                `&lt;tbody&gt;`, and `&lt;tfoot&gt;` to semantically group its
                content, making it more understandable for browsers and
                assistive technologies.
              </p>
              <CodeReviewPager code={section5_2} />
            </section>

            <hr className="my-6 tw:border-gray-300!" />

            {/* Spanning Cells Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Spanning Cells: `rowspan` and `colspan` ↔️↕️
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Sometimes, you'll need a table cell to span across multiple rows
                or columns. This is achieved using the `rowspan` and `colspan`
                attributes on `&lt;th&gt;` or `&lt;td&gt;` elements.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-4! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `colspan`:
                  </strong>
                  Specifies the number of columns a cell should span
                  horizontally.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;td colspan="2"&gt;This cell spans 2 columns&lt;/td&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `rowspan`:
                  </strong>
                  Specifies the number of rows a cell should span vertically.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;td rowspan="3"&gt;This cell spans 3 rows&lt;/td&gt;
                  </code>
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:font-semibold!">
                When using `rowspan` or `colspan`, remember to adjust the number
                of cells in the affected rows/columns accordingly to maintain
                the table's grid integrity.
              </p>
            </section>

            {/* Code in Action 3 */}
            <section className="tw:mb-10! tw:p-4!">
              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-700! tw:mb-4! tw:border-b-2! tw:border-indigo-300! tw:pb-2!">
                Code in Action 3: Spanning Cells for Complex Layouts 🧩
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example demonstrates how `rowspan` and `colspan` can be
                used to create more intricate table layouts, perfect for
                schedules or complex data grids.
              </p>
              <CodeReviewPager code={section5_3} />
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                HTML tables are a robust way to present structured data. By
                using the right elements and attributes, you can create tables
                that are not only visually appealing but also semantically
                correct and accessible. Keep practicing, and you'll be
                constructing perfect tables in no time! 💪
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
