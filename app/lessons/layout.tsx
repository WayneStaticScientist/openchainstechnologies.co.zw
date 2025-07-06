import ComingSoon from "@/components/coming-soon";
import React from "react";

export default function LayoutLessons({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ComingSoon />
      {children}
    </>
  );
}
