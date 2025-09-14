import BlogWrapper from "@/components/organisms/blog/BlogWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Brilliahib",
  description:
    "Explore articles, tutorials, and insights on web development, software engineering, and the latest technology trends.",
};

export default function BlogPage() {
  return (
    <section>
      <BlogWrapper />
    </section>
  );
}
