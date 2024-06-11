import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
      {
        url: "https://thangdevalone.vercel.app",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
        
      },
      {
        url: "https://thangdevalone.vercel.app/cv-review",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
    ];
  }