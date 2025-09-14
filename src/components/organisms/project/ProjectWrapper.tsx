import SectionWrapper from "@/components/atoms/motion/SectionMotionWrapper";
import ProjectContent from "./ProjectContent";
import ProjectHeading from "./ProjectHeading";

export default function ProjectWrapper() {
  return (
    <SectionWrapper id="projects" className="space-y-7">
      <ProjectHeading />
      <ProjectContent />
    </SectionWrapper>
  );
}
