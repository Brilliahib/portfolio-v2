import BlogWrapper from "@/components/organisms/blog/BlogWrapper";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Blog | Brilliahib",
  description:
    "Explore articles, tutorials, and insights on web development, software engineering, and the latest technology trends.",
  url: "https://brilliahib.tech/blog",
  keywords: [
    "blog brilliahib",
    "web development blog",
    "software engineering tips",
  ],
  siteName: "Blog | Brilliahib",
  type: "website",
});

export default function BlogPage() {
  return (
    <section>
      <BlogWrapper />
    </section>
  );
}
