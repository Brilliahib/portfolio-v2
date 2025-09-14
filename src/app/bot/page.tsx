import BotWrapper from "@/components/organisms/bot/BotWrapper";
import { getMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata({
  title: "Assistant | Brilliahib",
  description:
    "An AI-powered assistant built with generative AI. Explore how this assistant helps with answering questions, providing insights, and enhancing productivity.",
  url: "https://brilliahib.tech/assistant",
  keywords: [
    "AI assistant",
    "generative AI",
    "Brilliahib assistant",
    "productivity AI",
    "AI insights",
  ],
  siteName: "Assistant | Brilliahib",
  type: "website",
});

export default function BotPage() {
  return (
    <>
      <section>
        <BotWrapper />
      </section>
    </>
  );
}
