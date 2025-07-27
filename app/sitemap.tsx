import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { JavascriptChapterFootMap } from "@/utils/chapters-js";
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
      url: `${baseUrl}/lessons/html/examples/loading-spinner`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/editor/html`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/editor/js`,
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    ...HtmlChapterFootMap.map((e) => ({
      url: `${baseUrl}${e.path}`,
      priority: 0.7,
      lastModified: new Date(),
    })),
    ...JavascriptChapterFootMap.map((e) => ({
      url: `${baseUrl}${e.path}`,
      priority: 0.7,
      lastModified: new Date(),
    })),
  ];
}
