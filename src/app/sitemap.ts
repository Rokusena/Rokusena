import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rokusena.xyz",
      lastModified: new Date("2026-05-07"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
