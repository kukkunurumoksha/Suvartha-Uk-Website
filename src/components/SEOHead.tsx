import type { Metadata } from "next";

interface SEOOptions {
  useDynamicDomain?: boolean;
  title?: string;
  description?: string;
}

export async function generateSEOMetadata(options: SEOOptions = {}): Promise<Metadata> {
  const {
    useDynamicDomain = false,
    title = "Suvartha Ministries UK",
    description = "Welcome to Suvartha Ministries UK - Spreading the Gospel since 1925. Join us for worship, fellowship, and spiritual growth."
  } = options;

  const baseUrl = useDynamicDomain 
    ? process.env.NEXT_PUBLIC_SITE_URL || "https://suvarthaministries.org.uk"
    : "https://suvarthaministries.org.uk";

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    keywords: [
      "Suvartha Ministries",
      "UK",
      "church",
      "gospel",
      "worship",
      "fellowship",
      "Christian",
      "ministry",
      "faith",
      "prayer",
    ],
    authors: [{ name: "Suvartha Ministries UK" }],
    creator: "Suvartha Ministries UK",
    publisher: "Suvartha Ministries UK",
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/assets/img/favicon.png', type: 'image/png', sizes: '32x32' },
      ],
      apple: { url: '/assets/img/suvartha-logo.svg', type: 'image/svg+xml' },
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: baseUrl,
      title,
      description,
      siteName: "Suvartha Ministries UK",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION_CODE || "your-google-verification-code",
    },
    metadataBase: new URL(baseUrl),
  };
}