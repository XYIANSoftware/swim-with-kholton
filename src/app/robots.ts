import type { MetadataRoute } from "next";

/**
 * Only home, packages, and about are allowed for indexing.
 * All other routes are disallowed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/packages", "/about"],
      disallow: ["/schedule", "/faq", "/privacy", "/terms"],
    },
  };
}
