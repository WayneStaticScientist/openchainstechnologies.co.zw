"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { codeReviewPagerCode } from "@/utils/constants";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeReviewPager({
  code,
  highLightLanguage = "html",
}: {
  code: string;
  highLightLanguage?: string;
}) {
  const path = usePathname();
  const router = useRouter();
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
          className="tw:relative!"
          style={{
            height: `${highlighterHeight}px`,
            overflow: "hidden",
            transition: "height 0.3s ease-in-out",
          }}
        >
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
                `/editor/html?preload=true&refer=${encodeURIComponent(path)}`
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
        <iframe
          srcDoc={code}
          height={highlighterHeight}
          width={highlighterWidth}
          style={{
            maxHeight: "1200px",
            width: "100%",
          }}
        />
      )}
    </div>
  );
}
export const CssBoxHightLight = ({ code }: { code: string }) => {
  return (
    <div className="tw:w-full! tw:max-w-4xl! tw:mx-auto! tw:bg-white! tw:rounded-lg! tw:shadow-lg! tw:overflow-hidden! tw:my-8!">
      <SyntaxHighlighter
        language="css"
        style={vscDarkPlus}
        wrapLongLines={true}
        customStyle={{
          fontFamily: "sans-serif",
          fontSize: 20,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
