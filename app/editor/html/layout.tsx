import { baseUrl } from "@/utils/globals";
import { Suspense } from "react";

export const metadata = {
  title: "HTML Editor - OpenChains Technologies",
  description:
    "Online HTML editor by OpenChains Technologies. Write, edit, and preview your HTML code instantly.",
  openGraph: {
    type: "website",
    url: `${baseUrl}/editor/html`,
    title: "HTML Editor - OpenChains Technologies",
    description:
      "Online HTML editor by OpenChains Technologies. Write, edit, and preview your HTML code instantly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML Editor - OpenChains Technologies",
    description:
      "Online HTML editor by OpenChains Technologies. Write, edit, and preview your HTML code instantly.",
  },
  keywords: [
    "HTML editor",
    "online HTML editor",
    "code editor",
    "web development",
    "OpenChains Technologies",
  ],
  alternates: {
    canonical: `${baseUrl}/editor/html`,
  },
  metadataBase: new URL(baseUrl),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Loading editor...</div>}>{children}</Suspense>
  );
}
