import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  url: string;
  image?: string;
  keywords?: string[];
  siteName?: string;
  type?: "website" | "article";
};

export function getMetadata({
  title,
  description,
  url,
  image = "https://brilliahib.tech/images/brilly.jpg",
  keywords = [],
  siteName = "Brilliahib",
  type = "website",
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
