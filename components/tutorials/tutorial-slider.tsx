"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeReviewPager({ code }: { code: string }) {
  const [highlighterHeight, setHighlighterHeight] = useState(0);
  const [highlighterWidth, setHighlighterWidth] = useState(0);
  const highlighterRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (highlighterRef.current) {
      const height = highlighterRef.current.scrollHeight;
      const width = highlighterRef.current.scrollWidth;
      setHighlighterWidth(width);
      setHighlighterHeight(height);
    }
  }, [code]);

  const [activeTab, setActiveTab] = useState("code");
  return (
    <div className="tw:w-full! tw:max-w-4xl! tw:mx-auto! tw:bg-white! tw:rounded-lg! tw:shadow-lg! tw:overflow-hidden! tw:my-8!">
      <div className="tw:flex! tw:border-b! tw:border-gray-200!">
        <button
          className={`tw:flex-1! tw:py-3! tw:px-4! tw:text-center! tw:font-semibold! tw:text-lg! tw:transition-colors! tw:duration-200! ${
            activeTab === "code"
              ? "tw:bg-indigo-600! tw:text-white!"
              : "tw:bg-gray-100! tw:text-gray-700! hover:tw:bg-gray-200!"
          }`}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
        <button
          className={`tw:flex-1! tw:py-3! tw:px-4! tw:text-center! tw:font-semibold! tw:text-lg! tw:transition-colors! tw:duration-200! ${
            activeTab === "output"
              ? "tw:bg-indigo-600! tw:text-white!"
              : "tw:bg-gray-100! tw:text-gray-700! hover:tw:bg-gray-200!"
          }`}
          onClick={() => setActiveTab("output")}
        >
          Output
        </button>
      </div>
      {activeTab === "code" ? (
        <div
          ref={highlighterRef}
          style={{
            height: `${highlighterHeight}px`,
            overflow: "hidden",
            transition: "height 0.3s ease-in-out",
          }}
        >
          <SyntaxHighlighter
            language="html"
            style={a11yDark}
            wrapLongLines={true}
            customStyle={{
              fontFamily: "sans-serif",
              fontSize: 20,
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      ) : (
        <iframe
          srcDoc={code}
          height={highlighterHeight}
          width={highlighterWidth}
        />
      )}
    </div>
  );
}
