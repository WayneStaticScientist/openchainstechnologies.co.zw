import React from "react";

export default function PageNavigationButtons({
  prev,
  next,
}: {
  prev?: {
    title: string;
    path: string;
  };
  next?: {
    title: string;
    path: string;
  };
}) {
  return (
    <div className="tw:flex tw:justify-between tw:mt-8! tw:px-4!">
      {prev && (
        <a
          href={prev.path}
          className="tw:bg-gray-300! hover:tw:bg-gray-400! tw:text-gray-800! tw:font-bold! tw:py-3! tw:px-6! tw:rounded-lg! tw:transition! tw:duration-300! tw:shadow-lg!"
        >
          &larr; PREV: {prev.title}
        </a>
      )}
      {next && (
        <a
          href={next.path}
          className="tw:bg-indigo-600! tw:text-white! tw:font-bold! tw:py-3! tw:px-6! tw:rounded-lg! hover:tw:bg-indigo-700! tw:transition! tw:duration-300! tw:shadow-lg!"
        >
          NEXT : {next.title} &rarr;
        </a>
      )}
    </div>
  );
}
