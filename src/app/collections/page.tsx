import CollectionWrapper from "@/components/organisms/collection/CollectionWrapper";
import { getMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata({
  title: "Collections | Brilliahib",
  description:
    "Discover curated video collections for learning web development, software engineering, and technology. A personal library of resources to explore and learn.",
  url: "https://brilliahib.tech/collections",
  keywords: [
    "video collections",
    "web development videos",
    "software engineering resources",
    "learning resources",
    "Brilliahib collections",
  ],
  siteName: "Collections | Brilliahib",
  type: "website",
});

export default function CollectionsPage() {
  return (
    <section>
      <CollectionWrapper />
    </section>
  );
}
