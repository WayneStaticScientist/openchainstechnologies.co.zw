import "./style.css";
import React from "react";
import "./assets/css/shop.css";
import "./assets/css/blog.css";
import "./assets/css/custom.css";
import Script from "next/script";
import "./assets/css/animate.css";
import "./assets/css/responsive.css";
import "./assets/css/priceslider.css";
import "./assets/css/superclasses.css";
import { Toaster } from "react-hot-toast";
import { Globals } from "@/utils/globals";
import "./assets/css/owl.carousel.min.css";
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/css/owl.theme.default.min.css";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://openchains.shop";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OpenChains Technologies",
    url: baseUrl,
    logo: `${baseUrl}/assets/img/logo/web.png`, // Be sure to have a logo at this path
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+263-78-760-4187",
      contactType: "customer service",
    },
    sameAs: [Globals.Facebook],
  };
  return (
    <html lang="en">
      <head>
        <script
          id="website-schema" //
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6526622657854258"
          crossOrigin="anonymous"
          strategy="beforeInteractive" // Loads the script before hydration
        ></Script>
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
