import SectionWrapper from "@/components/atoms/motion/SectionMotionWrapper";
import BlogContent from "./BlogContent";
import BlogHeading from "./BlogHeading";

export default function BlogWrapper() {
  return (
    <SectionWrapper className="space-y-7">
      <BlogHeading />
      <BlogContent />
    </SectionWrapper>
  );
}
