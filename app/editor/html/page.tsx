"use client";
import { codeReviewPagerCode, defaultCode } from "@/utils/constants";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { CodeiumEditor, Document, Language } from "@codeium/react-code-editor";
import { IoArrowBackOutline } from "react-icons/io5";

export default function HtmlEditor() {
  const [code, setCode] = useState("");
  const searchParams = useSearchParams();
  const [output, setOutput] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preload = searchParams.get("preload");
    let loaded = false;
    if (preload == "true") {
      const storedCode = localStorage.getItem(codeReviewPagerCode);
      if (storedCode) {
        setCode(storedCode);
        loaded = true;
      }
    }
    if (!loaded) {
      setCode(defaultCode);
    }
  }, []);
  return (
    <>
      <div className="tw:flex tw:flex-col tw:h-screen tw:overflow-hidden">
        <div className="tw:bg-gray-800  tw:flex tw:justify-between tw:items-center tw:p-4!">
          <a
            href="/"
            className="tw:text-white! tw:font-semibold tw:flex! tw:gap-2! tw:items-center! "
          >
            <IoArrowBackOutline />
            HTML Editor
          </a>
          <button
            onClick={() => setOutput(!output)}
            className="tw:bg-blue-600 tw:cursor-pointer! tw:outline-0! tw:focus:border-0! tw:focus:outline-0! tw:text-white tw:py-1! tw:px-3! tw:rounded-lg! hover:tw:bg-blue-700 tw:p-3 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-blue-500 tw:focus:ring-opacity-50"
          >
            {output ? "Hide Output" : "Show Output"}
          </button>
        </div>
        <div className="tw:flex tw:flex-grow tw:relative!">
          <div ref={editorRef} className="tw:flex-grow tw:w-full! tw:xl:w-1/2!">
            <CodeiumEditor
              className="tw:text-3xl!"
              language="html"
              value={code}
              onChange={(newCode) => setCode(newCode ?? "")}
              theme="vs-dark"
              height="100%"
            />
          </div>
          <div
            className={` ${
              output
                ? "tw:w-screen! tw:h-screen! tw:block! tw:visible! tw:absolute! tw:top-0! tw:left-0! tw:z-50! tw:bg-white!"
                : "tw:hidden! tw:xl:inline-block! tw:xl:w-1/2"
            }`}
          >
            <iframe
              srcDoc={code}
              className="tw:w-full tw:h-full tw:border-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
