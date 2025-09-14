import CollectionWrapper from "@/components/organisms/collection/CollectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | Brilliahib",
  description:
    "Discover curated video collections for learning web development, software engineering, and technology. A personal library of resources to explore and learn.",
};

export default function CollectionsPage() {
  return (
    <section>
      <CollectionWrapper />
    </section>
  );
}
