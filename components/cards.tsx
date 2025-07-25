"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Cards({
  id,
  path,
  title,
  language,
  description,
}: {
  id: number;
  path: string;
  title: string;
  language: string;
  description: string;
}) {
  const router = useRouter();
  return (
    <div
      key={id}
      onClick={() => {
        router.push(path);
      }}
      className="tw:bg-white! tw:cursor-pointer! tw:rounded-xl! tw:shadow-lg! tw:hover:shadow-xl! tw:transition-all! tw:duration-300! tw:ease-in-out! tw:transform! tw:hover:-translate-y-1!
                       tw:border! tw:border-gray-200! tw:overflow-hidden! tw:flex! tw:flex-col!"
    >
      {/* Card Header */}
      <div className="tw:p-5! tw:bg-gradient-to-r! tw:from-indigo-500! tw:to-purple-600! tw:text-white! tw:rounded-t-xl!">
        <h2 className="tw:text-2xl! tw:font-bold! tw:mb-1!">{title}</h2>
        <span className="tw:inline-block! tw:bg-white! tw:bg-opacity-20! tw:text-xs! tw:font-sans! tw:font-semibold! tw:px-3! tw:py-1! tw:rounded-full! tw:text-indigo-500!">
          {language.toUpperCase()}
        </span>
      </div>

      {/* Card Body - Description only */}
      <div className="tw:p-5! tw:flex-grow!">
        <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
          {description}
        </p>
      </div>
      {/* Card Footer (Optional) */}
      <div className="tw:p-5! tw:bg-gray-50! tw:border-t! tw:border-gray-200! tw:text-right! tw:text-sm! tw:text-gray-500!">
        Example ID: {id}
      </div>
    </div>
  );
}
