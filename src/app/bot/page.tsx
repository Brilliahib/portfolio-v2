import BotWrapper from "@/components/organisms/bot/BotWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assistant | Brilliahib",
  description:
    "An AI-powered assistant built with generative AI. Explore how this assistant helps with answering questions, providing insights, and enhancing productivity.",
};

export default function BotPage() {
  return (
    <>
      <section>
        <BotWrapper />
      </section>
    </>
  );
}
