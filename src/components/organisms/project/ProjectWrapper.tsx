import ProjectContent from "./ProjectContent";
import ProjectHeading from "./ProjectHeading";

export default function ProjectWrapper() {
  return (
    <section id="projects" className="space-y-7">
      <ProjectHeading />
      <ProjectContent />
    </section>
  );
}
