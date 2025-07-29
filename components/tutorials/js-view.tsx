"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { codeReviewPagerCode } from "@/utils/constants";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IoTerminalOutline } from "react-icons/io5";
import { VscDebugConsole, VscError } from "react-icons/vsc";

export default function JavascriptViewCode({
  code,
  highLightLanguage = "js",
  indexNumber = 0,
  htmlInjection,
}: {
  code: string;
  indexNumber: number;
  htmlInjection?: string;
  highLightLanguage?: string;
}) {
  const router = useRouter();
  const [consoleLogLists, setConsoleLogsLists] = useState<
    { message: string; color: string; lineNumber: number }[]
  >([]);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [highlighterHeight, setHighlighterHeight] = useState(0);
  const [highlighterWidth, setHighlighterWidth] = useState(0);
  const highlighterRef = React.useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("code");

  React.useEffect(() => {
    setConsoleLogsLists([]);
    if (highlighterRef.current) {
      const height = highlighterRef.current.scrollHeight;
      const width = highlighterRef.current.scrollWidth;
      setHighlighterWidth(width);
      setHighlighterHeight(height);
    }
  }, [code]);
  const addItem = (message: string, color: string) => {
    setConsoleLogsLists((prev) => [
      ...prev,
      {
        message: message,
        color: color,
        lineNumber:
          consoleLogLists.length > 0
            ? consoleLogLists[consoleLogLists.length - 1].lineNumber + 1
            : 1,
      },
    ]);
  };
  React.useEffect(() => {
    const handleMessage = (event: MessageEvent<any>) => {
      const { type, level, data } = event.data;
      if (type === `iframe-log-${indexNumber}`) {
        if (consoleLogLists.length > 100) consoleLogLists.shift();
        switch (level) {
          case "log":
            addItem(data.join(" "), "blue");
            break;
          case "warn":
            addItem(data.join(" "), "orange");
            break;
          case "error":
            addItem(data.join(" "), "red");
            break;
          default:
            addItem(data.join(" "), "grey");
            break;
        }
      }
    };
    window.addEventListener("message", handleMessage);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="tw:w-full! tw:max-w-4xl! tw:mx-auto! tw:bg-white! tw:rounded-lg! tw:shadow-lg! tw:overflow-hidden! tw:my-8!">
      <div className="tw:flex! tw:border-b! tw:border-gray-200!">
        <button
          className={`tw:flex-1! tw:py-3! tw:px-4! tw:text-center! tw:font-semibold! tw:text-lg! tw:transition-colors! tw:duration-200! ${
            activeTab === "code"
              ? "tw:bg-indigo-600! tw:text-white!"
              : "tw:bg-gray-100! tw:text-gray-700! hover:tw:bg-gray-200!"
          }`}
          onClick={() => {
            setActiveTab("code");
            setConsoleLogsLists([]);
          }}
        >
          Code
        </button>
        <button
          className={`tw:flex-1! tw:py-3! tw:px-4! tw:text-center! tw:font-semibold! tw:text-lg! tw:transition-colors! tw:duration-200! ${
            activeTab === "output"
              ? "tw:bg-indigo-600! tw:text-white!"
              : "tw:bg-gray-100! tw:text-gray-700! hover:tw:bg-gray-200!"
          }`}
          onClick={() => {
            setActiveTab("output");
          }}
        >
          Output
        </button>
      </div>
      {activeTab === "code" ? (
        <div
          ref={highlighterRef}
          className="tw:relative!"
          style={{
            height: `${highlighterHeight}px`,
            overflow: "hidden",
            transition: "height 0.3s ease-in-out",
          }}
        >
          <iframe
            srcDoc={`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Iframe Sandbox</title>
      </head>
      <body>
          ${htmlInjection ? htmlInjection : ""}
          <script>${getOverrideScript(indexNumber)}</script>
          <script>${code}</script>
      </body>
      </html>
    `}
            ref={iframeRef}
            width={0}
            height={0}
          />
          <SyntaxHighlighter
            language={highLightLanguage}
            style={vscDarkPlus}
            wrapLongLines={true}
            customStyle={{
              fontFamily: "sans-serif",
              fontSize: 20,
            }}
          >
            {code}
          </SyntaxHighlighter>
          <button
            onClick={() => {
              localStorage.setItem(codeReviewPagerCode, code);
              router.push(
                `/editor/js?preload=true&refer=${encodeURIComponent(
                  window.location.pathname
                )}`
              );
            }}
            className="tw:absolute! tw:top-0! tw:right-0! tw:bg-indigo-600! tw:text-white! tw:py-2! tw:px-4! tw:rounded-bl-lg!
            tw:hover:bg-indigo-400! tw:focus:outline-none! tw:focus:ring-2! tw:focus:ring-indigo-500! tw:focus:ring-opacity-50!
          tw:cursor-pointer! tw:transition-colors! tw:duration-200! hover:tw:bg-indigo-700! focus:tw:outline-none! focus:tw:ring-2! focus:tw:ring-indigo-500! focus:tw:ring-opacity-50!
           tw:shadow-md! hover:tw:bg-indigo-700! focus:tw:outline-none! focus:tw:ring-2! focus:tw:ring-indigo-500! focus:tw:ring-opacity-50!"
          >
            view in editor
          </button>
        </div>
      ) : (
        <div
          className=" tw:relative! "
          style={{
            height: highlighterHeight,
            width: highlighterWidth,
            maxHeight: "1200px",
          }}
        >
          <div className="tw:absolute! tw:top-0! tw:right-0! tw:left-0! tw:h-full! tw:bg-background!">
            <ul className="tw:flex! tw:flex-col! tw:w-full!  tw:overflow-y-auto! tw:h-full!">
              {consoleLogLists.map((log, index) => (
                <li
                  key={index}
                  className="tw:p-3! tw:w-full! tw:border-b! tw:border-gray-200! tw:flex! tw:items-center! tw:gap-2!"
                  style={{ color: log.color }}
                >
                  {log.lineNumber}.{getOutputIcon(log.color)} {log.message}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export function getOverrideScript(indexNumber: number): string {
  return `
  (function() {
    // Store original functions directly on the window object of the iframe
    // This makes them globally accessible within the iframe's context,
    // ensuring they are not lost due to scope changes.
    // Using a prefix like '_original' is good practice to avoid conflicts.
    window._originalConsoleLog = console.log;
    window._originalConsoleWarn = console.warn;
    window._originalConsoleError = console.error;

    // Helper function to make data serializable for postMessage
    function sanitizeArgs(args) {
      return args.map(arg => {
        // Handle DOM elements and collections
        if (
          arg instanceof HTMLElement ||
          arg instanceof Node || // Covers Text, Comment nodes etc.
          arg instanceof HTMLCollection ||
          arg instanceof NodeList
        ) {
          if (arg instanceof HTMLCollection || arg instanceof NodeList) {
            // Convert HTMLCollection/NodeList to an array of outerHTML strings
            return Array.from(arg).map(el => {
              if (el instanceof HTMLElement) {
                return el.outerHTML;
              }
              // For non-HTMLElement nodes in a collection (e.g., text nodes), return string representation
              return String(el);
            });
          }
          // For single HTML elements, return their outerHTML string
          if (arg instanceof HTMLElement) {
            return arg.outerHTML;
          }
          // For other Node types (e.g., TextNode), return their string representation
          return String(arg);
        }

        // Handle functions
        if (typeof arg === "function") {
          return "[Function: " + (arg.name || "anonymous") + "]"; // Provide a bit more info
        }

        // Handle errors - convert to a serializable object
        if (arg instanceof Error) {
            return {
                name: arg.name,
                message: arg.message,
                stack: arg.stack,
                // Add any other properties you want to serialize
            };
        }

        // Attempt to clone other types using JSON.stringify/parse.
        // This will fail for circular references or other non-JSON-serializable objects.
        try {
          // This will deep clone primitive values, plain objects, and arrays.
          // It's a quick way to handle most serializable data.
          return JSON.parse(JSON.stringify(arg));
        } catch (e) {
          // Fallback for non-serializable objects (e.g., circular structures,
          // complex objects not explicitly handled above).
          // String(arg) usually returns "[object Object]" for plain objects,
          // or a more specific string for built-in types.
          return String(arg);
        }
      });
    }

    // Override console.log
    console.log = function (...args) {
      try {
        window.parent.postMessage(
          { type: "iframe-log-${indexNumber}", level: "log", data: sanitizeArgs(args) },
          "*" // IMPORTANT: In production, replace '*' with the parent's actual origin for security.
        );
      } catch (e) {
        // Fallback for objects that still can't be cloned even after sanitization
        // Use the original console.error from the iframe for this message
        window._originalConsoleError.call(
          console, // Ensure 'this' context is console
          "Failed to postMessage log from iframe (DataCloneError?):",
          e,
          "Original args (not sent):",
          args
        );
        // Send a simplified error message to the parent
        window.parent.postMessage(
          {
            type: "iframe-log-${indexNumber}",
            level: "error",
            data: ["Failed to clone log arguments.", String(e), "Check iframe console for original args."],
          },
          "*"
        );
      }
      // Always call the original console.log in the iframe itself, regardless of postMessage success
      window._originalConsoleLog.apply(this, args);
    };

    // Override console.warn
    console.warn = function (...args) {
      try {
        window.parent.postMessage(
          { type: "iframe-log-${indexNumber}", level: "warn", data: sanitizeArgs(args) },
          "*"
        );
      } catch (e) {
        window._originalConsoleError.call(
          console,
          "Failed to postMessage warn from iframe (DataCloneError?):",
          e,
          "Original args (not sent):",
          args
        );
        window.parent.postMessage(
          {
            type: "iframe-log-${indexNumber}",
            level: "error",
            data: ["Failed to clone warn arguments.", String(e), "Check iframe console for original args."],
          },
          "*"
        );
      }
      window._originalConsoleWarn.apply(this, args);
    };

    // Override console.error
    console.error = function (...args) {
      try {
        window.parent.postMessage(
          { type: "iframe-log-${indexNumber}", level: "error", data: sanitizeArgs(args) },
          "*"
        );
      } catch (e) {
        window._originalConsoleError.call(
          console,
          "Failed to postMessage error from iframe (DataCloneError?):",
          e,
          "Original args (not sent):",
          args
        );
        window.parent.postMessage(
          {
            type: "iframe-log-${indexNumber}",
            level: "error",
            data: ["Failed to clone error arguments.", String(e), "Check iframe console for original args."],
          },
          "*"
        );
      }
      // For console.error, it's particularly important to call the original
      // because it often provides a stack trace which is invaluable for debugging.
      window._originalConsoleError.apply(this, args);
    };
  })();
`;
}
export function getOutputIcon(color: string): React.ReactNode {
  switch (color) {
    case "blue":
      return <IoTerminalOutline />;
    case "orange":
      return <VscDebugConsole />;
    case "red":
      return <VscError />;
    default:
      return <IoTerminalOutline />;
  }
}
