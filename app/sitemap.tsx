import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://openchains.shop";
  return [
    {
      url: baseUrl,
      priority: 1,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/electronics`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/web`,
      priority: 0.5,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/ai`,
      priority: 0.5,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.5,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
  ];
}
