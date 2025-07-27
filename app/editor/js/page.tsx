"use client";
import { useSearchParams } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";
import { codeReviewPagerCode, defaultCode } from "@/utils/constants";
import { CodeiumEditor, Document, Language } from "@codeium/react-code-editor";
import {
  getOutputIcon,
  getOverrideScript,
} from "@/components/tutorials/js-view";
import { VscRunCoverage } from "react-icons/vsc";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
export default function HtmlEditor() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const indexNumber = 1;
  const searchParams = useSearchParams();
  const refer = searchParams.get("refer");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const [outputCode, setOutputCode] = useState("");
  const [compiling, setCompiling] = useState(false);
  const [consoleLogLists, setConsoleLogsLists] = useState<
    { message: string; color: string; lineNumber: number }[]
  >([]);
  const runCode = async () => {
    setOutputCode("");
    setCompiling(true);
    setConsoleLogsLists([]);
    consoleLogLists.filter(() => false);
    console.log("The list is ", consoleLogLists);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("The list is ", consoleLogLists);
    setCompiling(false);
    setOutputCode(code);
    toast.success("compiled successfully");
  };
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
  const addItem = (message: string, color: string) => {
    consoleLogLists.push({
      message: message,
      color: color,
      lineNumber:
        consoleLogLists.length > 0
          ? consoleLogLists[consoleLogLists.length - 1].lineNumber + 1
          : 1,
    });
    setConsoleLogsLists([...consoleLogLists]);
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
    <>
      <div className="tw:flex tw:flex-col tw:h-screen tw:overflow-hidden">
        <div className="tw:bg-gray-800  tw:flex tw:justify-between tw:items-center tw:p-4!">
          <a
            href={refer ?? "/"}
            className="tw:text-white! tw:font-semibold tw:flex! tw:gap-2! tw:items-center! "
          >
            <IoArrowBackOutline />
            HTML Editor
          </a>
          <div className="tw:flex! tw:gap-2! tw:items-center!">
            <div
              onClick={!compiling ? runCode : undefined}
              className="tw:cursor-pointer! tw:outline-0! tw:focus:border-0! tw:active:bg-blue-900! tw:focus:outline-0! tw:hover:bg-blue-400! tw:bg-blue-600! tw:p-3! tw:rounded-full!"
            >
              {compiling ? (
                <CgSpinner
                  className="tw:animate-spin! tw:text-white!"
                  size={20}
                />
              ) : (
                <VscRunCoverage size={20} className="tw:text-white! " />
              )}
            </div>
            <button
              onClick={() => setOutput(!output)}
              className="tw:bg-blue-600 tw:cursor-pointer! tw:outline-0! tw:focus:border-0! tw:focus:outline-0! tw:text-white tw:py-1! tw:px-3! tw:rounded-lg! hover:tw:bg-blue-700 tw:p-3 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-blue-500 tw:focus:ring-opacity-50"
            >
              {output ? "Hide Output" : "Show Output"}
            </button>
          </div>
        </div>
        <div className="tw:flex tw:flex-grow tw:relative!">
          <div ref={editorRef} className="tw:flex-grow tw:w-full! tw:xl:w-1/2!">
            <CodeiumEditor
              className="tw:text-3xl!"
              language="javascript"
              value={code}
              onChange={(newCode) => setCode(newCode ?? "")}
              theme="vs-dark"
              height="100%"
            />
          </div>
          <div
            className={`tw:overflow-y-auto ${
              output
                ? "tw:w-screen! tw:h-screen! tw:block! tw:visible! tw:absolute! tw:top-0! tw:left-0! tw:z-50! tw:bg-white!"
                : "tw:hidden! tw:xl:inline-block! tw:xl:w-1/2"
            }`}
          >
            <iframe
              srcDoc={`
                 <!DOCTYPE html>
                 <html>
                 <head>
                     <title>Iframe Sandbox</title>
                 </head>
                 <body>
                     <script>${getOverrideScript(indexNumber)}</script>
                     <script>${outputCode}</script>
                 </body>
                 </html>
               `}
              ref={iframeRef}
              width={0}
              height={0}
            />
            <ul className="tw:flex! tw:flex-col! tw:w-full! tw:h-full! tw:overflow-y-auto!">
              {consoleLogLists.map((log, index) => (
                <React.Fragment key={index}>
                  <li
                    className="tw:p-3! tw:w-full! tw:border-b! tw:border-gray-200! tw:flex! tw:items-center! tw:gap-2!"
                    style={{ color: log.color }}
                  >
                    {log.lineNumber}.{getOutputIcon(log.color)} {log.message}
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
