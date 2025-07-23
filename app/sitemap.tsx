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
      url: `${baseUrl}/founder`,
      priority: 1,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.9,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/electronics`,
      priority: 1,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/web`,
      priority: 1,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/ai`,
      priority: 1,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/contact`,
      priority: 1,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/login`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/register`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/introduction`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/elements-attributes`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/links-navigation`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/text-formatting`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/images-multimedia`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/examples/loading-spinner`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/lists`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/tables`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/forms`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/semantic-html5`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/metadata`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/comments`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/best-practices-accessibility`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/css-introduction`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/selectors-specificity`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/lessons/html/basic-selectors`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
  ];
}
