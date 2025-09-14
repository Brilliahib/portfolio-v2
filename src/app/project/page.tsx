import ProjectWrapper from "@/components/organisms/project/ProjectWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Brilliahib",
  description:
    "Showcasing projects in web development, software engineering, and technology. Explore my portfolio of work and creative digital solutions.",
};

export default function ProjectPage() {
  return (
    <>
      <section id="project">
        <ProjectWrapper />
      </section>
    </>
  );
}
