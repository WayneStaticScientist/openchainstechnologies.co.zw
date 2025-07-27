import { baseUrl } from "@/utils/globals";

export const metadata = {
  title: "JavaScript Code Editor - OpenChains Technologies",
  description:
    "Online JavaScript code editor by OpenChains Technologies. Write, edit, and run your JavaScript code instantly.",
  openGraph: {
    type: "website",
    url: `${baseUrl}/editor/js`,
    title: "JavaScript Code Editor - OpenChains Technologies",
    description:
      "Online JavaScript code editor by OpenChains Technologies. Write, edit, and run your JavaScript code instantly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Code Editor - OpenChains Technologies",
    description:
      "Online JavaScript code editor by OpenChains Technologies. Write, edit, and run your JavaScript code instantly.",
  },
  keywords: [
    "JavaScript editor",
    "online JavaScript editor",
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
  return <>{children}</>;
}
