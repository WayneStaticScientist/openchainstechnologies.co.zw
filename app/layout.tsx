import "./style.css";
import type { Metadata } from "next";
import Script from "next/script";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.css";
import "./assets/css/animate.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/meanmenu.css";
import "./assets/css/odometer.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/datepickerboot.css";
import "./assets/css/nice-select.css";
import "./assets/css/main.css";
import "./assets/css/main.css";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://openchains.shop";
export const metadata: Metadata = {
  title: {
    template: "%s | OpenChains Technologies",
    default: "OpenChains Technologies",
  },
  keywords: [
    "electronics",
    "web design",
    "system design",
    "web technologies",
    "artificial intelligence",
    "whatsapp chatsbots",
    "openchains",
    "zimbabwe",
    "websites",
  ],
  openGraph: {
    siteName: "OpenchainsTechnologies",
    url: baseUrl,
    title: "OpenchainsTechnologies",
  },
  description:
    "OpenChains Technologies builds websites, apps, games, and custom software solutions for businesses and individuals.",
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "OpenChainsTechnologies", // The desired site name
              alternateName: ["openchains.shop", "Openchains Technologies"], // Optional: alternative names
              url: baseUrl, // The canonical URL of your website
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Script
          src="/assets/js/jquery-3.7.1.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/assets/js/jquery.nice-select.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/assets/js/odometer.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/assets/js/jquery.appear.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/assets/js/bootstrap-datepicker.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/assets/js/swiper-bundle.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/assets/js/jquery.meanmenu.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/assets/js/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/assets/js/wow.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script src="/assets/js/main.js" strategy="afterInteractive"></Script>
      </body>
    </html>
  );
}
