import BlogContent from "./BlogContent";
import BlogHeading from "./BlogHeading";

export default function BlogWrapper() {
  return (
    <section className="space-y-7">
      <BlogHeading />
      <BlogContent />
    </section>
  );
}
