import type { MetadataRoute } from "next";

const BASE_URL = "https://rok.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          es: BASE_URL,
          en: `${BASE_URL}/en`,
          pt: `${BASE_URL}/pt`,
        },
      },
    },
  ];
}
