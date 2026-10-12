import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "bingbot",
          "Applebot",
          "GPTBot",
          "PerplexityBot",
          "Claude-Web",
          "anthropic-ai",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://lankaforex.com/sitemap.xml",
  };
}
