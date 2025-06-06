import { baseUrl } from "@/utils/globals";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: baseUrl + "/sitemap.xml",
  };
}
