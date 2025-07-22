import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import { baseUrl } from "@/utils/globals";

// Example for basic image embedding
const section5_example1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML Images</title>
    <style>
        img {
            max-width: 100%; /* Makes images responsive */
            height: auto;
            display: block; /* Removes extra space below image */
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Embedding Images in HTML</h1>
    <p>A simple image with required attributes:</p>
    <img src="https://placehold.co/400x250/FFD700/000000?text=Golden+Sunrise" alt="A beautiful golden sunrise over mountains">

    <p>An image with specific width and height (though CSS is often better for this):</p>
    <img src="https://placehold.co/300x200/90EE90/000000?text=Green+Landscape" alt="A lush green landscape" width="300" height="200">

    <p>An image that acts as a link:</p>
    <a href="${baseUrl}/services">
        <img src="https://placehold.co/250x150/ADD8E6/000000?text=Our+Services" alt="Link to our services page">
    </a>

    <p>Image from a local directory :</p>
    <img src="/assets/img/web.jpg" alt="A local photograph of a flower">
</body>
</html>`;

// Example for embedding audio and video
const section5_example2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Multimedia</title>
    <style>
        video, audio {
            display: block;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%; /* Makes media responsive */
            max-width: 600px;
        }
        source {
            display: block; /* For better visual alignment in example */
            margin-top: 5px;
            font-family: monospace;
        }
    </style>
</head>
<body>
    <h1>Embedding Audio and Video in HTML</h1>
    <h2>Audio Example</h2>
    <audio controls>
        <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
        <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
        Your browser does not support the audio element.
    </audio>
    <p>This is an audio file (horse gallop sound). It includes multiple source types for wider browser compatibility.</p>

    <h2>Video Example</h2>
    <video width="320" height="240" controls poster="https://placehold.co/600x400/C0C0C0/000000?text=Video+Placeholder">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
        Your browser does not support the video tag.
    </video>
    <p>This is a short video (Big Buck Bunny). The \`poster\` attribute displays an image before the video loads.</p>
    <h2>YouTube Video Embedding (iframe)</h2>
    <p>Embedding videos from platforms like YouTube is common using \`&lt;iframe&gt;\`.</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdefgh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>Note: Always respect copyright and terms of service when embedding external content.</p>
</body>
</html>`;

export default function HtmlImagesMultimediaPage() {
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/E0F2FE/1E40AF?text=HTML+Images+and+Multimedia"
              alt="HTML Images and Multimedia"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="tw:p-4!">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              HTML Images & Multimedia: Bringing Your Pages to Life! 🖼️🔊🎬
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              Beyond text and links, the web truly comes alive with **images,
              audio, and video**. HTML provides straightforward ways to embed
              these multimedia elements, making your web pages visually engaging
              and interactive.
            </p>
            ---
            {/* Embedding Images Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                The `&lt;img&gt;` Tag: Adding Pictures to Your Page 📸
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                The **`&lt;img&gt;`** tag is used to embed an image into an HTML
                document. Unlike most elements, it's a **self-closing (void)
                tag**, meaning it doesn't have a closing tag (`&lt;/img&gt;`).
              </p>
              <div className="tw:bg-blue-50! tw:border-l-4 tw:border-blue-500! tw:text-blue-700! tw:p-4! tw:rounded-md! tw:mb-6!">
                <p className="tw:font-bold!">
                  Essential Attributes for `&lt;img&gt;`:
                </p>
                <ul className="tw:list-disc! tw:list-inside! tw:mb-2!">
                  <li>
                    <code className="tw:bg-blue-100! tw:p-1! tw:rounded! tw:font-mono!">
                      src
                    </code>{" "}
                    (Source): **Mandatory**. Specifies the URL or path to the
                    image file. This can be an absolute URL (e.g.,
                    `https://example.com/image.jpg`) or a relative path (e.g.,
                    `../images/photo.png`).
                  </li>
                  <li>
                    <code className="tw:bg-blue-100! tw:p-1! tw:rounded! tw:font-mono!">
                      alt
                    </code>{" "}
                    (Alternative Text): **Mandatory and Crucial**. Provides a
                    textual description of the image. This text is displayed if
                    the image cannot be loaded (due to an error, slow
                    connection, etc.) and is read aloud by screen readers for
                    visually impaired users. It's also vital for SEO.
                  </li>
                </ul>
                <code className="tw:bg-blue-100! tw:p-1! tw:rounded! tw:font-mono! tw:text-red-500!">
                  &lt;img src="image_path.jpg" alt="Description of the
                  image"&gt;
                </code>
              </div>

              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                **Optional but useful attributes for `&lt;img&gt;`:**
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `width` and `height`:**
                  </strong>
                  Specify the dimensions of the image in pixels. While you can
                  set these in HTML, it's often preferred to control image
                  sizing and responsiveness using **CSS** for more flexibility
                  and better design practices.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;img src="photo.jpg" alt="A scenic view" width="500"
                    height="300"&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `title`:**
                  </strong>
                  Provides extra information about the image, which typically
                  appears as a tooltip when the user hovers over the image.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;img src="logo.png" alt="Company Logo" title="Openchains
                    Technologies Logo"&gt;
                  </code>
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    `loading="lazy"`:**
                  </strong>
                  A performance optimization. Tells the browser to defer loading
                  images until they are close to the viewport, saving bandwidth
                  and improving initial page load times.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;img src="large-image.jpg" alt="Detailed photo"
                    loading="lazy"&gt;
                  </code>
                </li>
              </ul>
            </section>
            ---
            {/* Embedding Audio and Video Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Audio (`&lt;audio&gt;`) and Video (`&lt;video&gt;`) Tags 🔊🎬
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                HTML5 introduced dedicated tags for embedding audio and video
                directly into your web pages without relying on third-party
                plugins (like Flash).
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                The `&lt;audio&gt;` Tag
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  Used to embed sound content.
                  <br />
                  <strong className="tw:font-semibold! tw:text-indigo-600;">
                    `controls` attribute:
                  </strong>{" "}
                  Displays the browser's default audio controls (play/pause,
                  volume, seek bar).
                  <br />
                  <strong className="tw:font-semibold! tw:text-indigo-600;">
                    `autoplay` attribute:
                  </strong>{" "}
                  (Use with caution!) Starts playback automatically when the
                  page loads. Most browsers block this for user experience.
                  <br />
                  <strong className="tw:font-semibold! tw:text-indigo-600;">
                    `loop` attribute:
                  </strong>{" "}
                  Makes the audio repeat indefinitely.
                  <br />
                  <strong className="tw:font-semibold! tw:text-indigo-600;">
                    `muted` attribute:
                  </strong>{" "}
                  Mutes the audio by default.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;audio controls&gt;&lt;source src="song.mp3"
                    type="audio/mpeg"&gt;Your browser does not support the audio
                    element.&lt;/audio&gt;
                  </code>
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                The `&lt;video&gt;` Tag
              </h3>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  Used to embed video content.
                  <br />
                  <strong className="tw:font-semibold! tw:text-indigo-600;">
                    `controls` attribute:
                  </strong>{" "}
                  Displays the browser's default video controls (play/pause,
                  volume, fullscreen).
                  <br />
                  <strong className="tw:font-semibold! tw:text-indigo-600;">
                    `width` and `height` attributes:
                  </strong>{" "}
                  Specify the dimensions of the video player.
                  <br />
                  <strong className="tw:font-semibold! tw:text-indigo-600;">
                    `poster` attribute:
                  </strong>{" "}
                  Specifies an image to be displayed before the video starts
                  playing.
                  <br />
                  <strong className="tw:font-semibold! tw:text-indigo-600;">
                    `autoplay`, `loop`, `muted` attributes:
                  </strong>{" "}
                  Similar to audio, these control video playback behavior.
                  <br />
                  <code className="tw:bg-gray-100! tw:p-1! tw:rounded! tw:font-mono!">
                    &lt;video controls width="640" height="360"
                    poster="thumbnail.jpg"&gt;&lt;source src="movie.mp4"
                    type="video/mp4"&gt;Your browser does not support the video
                    tag.&lt;/video&gt;
                  </code>
                </li>
              </ul>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                The `&lt;source&gt;` Tag (for `&lt;audio&gt;` and
                `&lt;video&gt;`)
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Different browsers support different media formats (e.g., MP4,
                WebM, OGG for video; MP3, WAV, OGG for audio). To ensure your
                media plays across all browsers, you can provide multiple source
                files using the `&lt;source&gt;` tag inside `&lt;audio&gt;` or
                `&lt;video&gt;`. The browser will use the first format it
                supports.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600;">
                    `src` attribute:
                  </strong>{" "}
                  Path to the media file.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-indigo-600;">
                    `type` attribute:
                  </strong>{" "}
                  Specifies the MIME type of the media file (e.g., `audio/mpeg`,
                  `video/mp4`). This helps the browser quickly determine if it
                  can play the file without downloading it first.
                </li>
                <li className="tw:leading-relaxed!">
                  The text between the `&lt;audio&gt;` or `&lt;video&gt;` tags
                  (e.g., "Your browser does not support...") is fallback content
                  displayed if the browser supports neither the media tags nor
                  any of the provided source formats.
                </li>
              </ul>
            </section>
            ---
            {/* Embedding External Content (Iframes) Section */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Embedding External Content with `&lt;iframe&gt;` 📺
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Sometimes you want to embed content from another website, like a
                YouTube video, a Google Map, or a third-party application. The
                **`&lt;iframe&gt;`** tag (inline frame) allows you to embed
                another HTML document within the current document.
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-3! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600;">
                    `src` attribute:
                  </strong>{" "}
                  The URL of the document to embed.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600;">
                    `width` and `height` attributes:
                  </strong>{" "}
                  Define the dimensions of the iframe.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600;">
                    `frameborder="0"`:
                  </strong>{" "}
                  (Deprecated in HTML5, use CSS for borders) Removes the border
                  around the iframe.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600;">
                    `allowfullscreen` attribute:
                  </strong>{" "}
                  Allows the embedded content (like a YouTube video) to go
                  fullscreen.
                </li>
              </ul>
              <div className="tw:bg-yellow-50! tw:border-l-4 tw:border-yellow-500! tw:text-yellow-700! tw:p-4! tw:rounded-md! tw:mb-6!">
                <p className="tw:font-bold!">
                  Important Security Note about `&lt;iframe&gt;`:
                </p>
                <p>
                  Be cautious when embedding content from unknown sources via
                  `&lt;iframe&gt;`, as it can pose security risks. Only embed
                  content from trusted origins. Use attributes like `sandbox`
                  and `referrerpolicy` for enhanced security.
                </p>
              </div>
            </section>
            ---
            {/* Code in Action Examples */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Code in Action: Images & Multimedia Examples! 🖼️🔊🎬
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                Let's put these concepts into practice with a couple of
                interactive examples.
              </p>

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-800! tw:mb-3! tw:mt-6!">
                Example 1: Basic Image Embedding
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example showcases different ways to use the `&lt;img&gt;`
                tag, including a clickable image.
              </p>
              <CodeReviewPager code={section5_example1} />

              <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-bold! tw:text-gray-800! tw:mb-3! tw:mt-10!">
                Example 2: Audio, Video, and Iframes
              </h3>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                This example demonstrates embedding audio and video files
                directly, and also how to include content from external services
                like YouTube using `&lt;iframe&gt;`.
              </p>
              <CodeReviewPager code={section5_example2} />

              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mt-6! tw:font-semibold!">
                With images and multimedia, you can transform a plain text page
                into a rich and engaging experience for your users. Remember the
                importance of `alt` text for images and providing multiple
                `&lt;source&gt;` types for audio/video for best compatibility
                and accessibility!
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
