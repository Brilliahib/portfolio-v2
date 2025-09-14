import SectionWrapper from "@/components/atoms/motion/SectionMotionWrapper";
import CollectionContent from "./CollectionContent";
import CollectionHeading from "./CollectionHeading";

export default function CollectionWrapper() {
  return (
    <SectionWrapper className="space-y-7">
      <CollectionHeading />
      <CollectionContent />
    </SectionWrapper>
  );
}
