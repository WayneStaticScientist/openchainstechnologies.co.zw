import "./style.css";
import "./assets/css/shop.css";
import "./assets/css/blog.css";
import "./assets/css/custom.css";
import Script from "next/script";
import "./assets/css/animate.css";
import type { Metadata } from "next";
import "./assets/css/responsive.css";
import "./assets/css/priceslider.css";
import "./assets/css/superclasses.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/css/owl.theme.default.min.css";
import { Toaster } from "react-hot-toast";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://openchains.shop";
export const metadata: Metadata = {
  title: {
    template: "%s | OpenChains Technologies",
    default: "OpenChains Technologies - World Of Innovating Technologies",
  },
  keywords: [
    "electronics",
    "web design",
    "system design",
    "web technologies",
    "AI",
    "chatbots",
    "openchains",
    "zimbabwe",
    "websites",
  ],
  openGraph: {
    siteName: "Openchains Technologies",
    url: baseUrl,
    type: "website",
    title: "Openchains Technologies",
  },
  description:
    "Websites development, apps development,games development & custom software for businesses & individuals.OpenChains Technologies digital solutions in Zimbabwe",
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Openchains Technologies",
    alternateName: ["Openchains", "OpenTech"],
    url: baseUrl,
  };
  return (
    <html lang="en">
      <head>
        <script
          id="website-schema" //
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Toaster />
        {children}
        <Script
          src="/assets/js/jquery.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          strategy="afterInteractive"
          src="/assets/js/popper.min.js"
        ></Script>
        <Script
          strategy="afterInteractive"
          src="/assets/js/bootstrap.min.js"
        ></Script>
        <Script
          strategy="afterInteractive"
          src="/assets/js/drawer-menu.js"
        ></Script>
        <Script
          strategy="afterInteractive"
          src="/assets/js/owl.carousel.js"
        ></Script>
        <Script
          strategy="afterInteractive"
          src="/assets/js/contact-form.js"
        ></Script>
        <Script
          strategy="afterInteractive"
          src="/assets/js/video-popup.js"
        ></Script>
        <Script
          strategy="afterInteractive"
          src="/assets/js/video-section.js"
        ></Script>
        <Script
          strategy="afterInteractive"
          src="/assets/js/jquery.validate.js"
        ></Script>
        <Script strategy="afterInteractive" src="/assets/js/wow.js"></Script>
        <Script
          strategy="afterInteractive"
          src="/assets/js/counter.js"
        ></Script>
        <Script
          strategy="afterInteractive"
          src="/assets/js/jquery-ui.js"
        ></Script>
        <Script
          strategy="afterInteractive"
          src="/assets/js/vps_slider.js"
        ></Script>
        <Script strategy="afterInteractive" src="/assets/js/custom.js"></Script>
        <Script strategy="afterInteractive" src="/assets/js/search.js"></Script>
        <Script strategy="afterInteractive" src="/assets/js/shop.js"></Script>
        <Script
          strategy="afterInteractive"
          src="/assets/js/remove-product.js"
        ></Script>
        <Script
          strategy="afterInteractive"
          src="/assets/js/quantity.js"
        ></Script>
      </body>
    </html>
  );
}
