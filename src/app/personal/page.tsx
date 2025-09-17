import PersonalWrapper from "@/components/organisms/personal/PersonalWrapper";
import { getMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata({
  title: "Personal | Brilliahib",
  description:
    "A not-so-secret stash of my personal stuff — random playlists, quirky inspirations, and little treasures that somehow keep me sane (and maybe creative).",
  url: "https://brilliahib.tech/personal",
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

export default function PersonalPage() {
  return (
    <section>
      <PersonalWrapper />
    </section>
  );
}
