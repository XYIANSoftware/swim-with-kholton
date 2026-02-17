/**
 * SEO and metadata. Set NEXT_PUBLIC_SITE_URL in production for canonical and Open Graph URLs.
 */
export const SITE_URL =
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_SITE_URL) || "";

export const DEFAULT_DESCRIPTION =
  "Swimming lessons in Irvine, Newport Beach, and Orange County. All ages and skill levels — confidence, technique, and speed with a national-level coach.";

export const DEFAULT_KEYWORDS = [
  "swimming lessons Irvine",
  "swim lessons Newport Beach",
  "Orange County swim lessons",
  "swim coach Irvine",
  "learn to swim Orange County",
  "Kholton Swim Coaching",
] as const;
