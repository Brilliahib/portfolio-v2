import ProjectWrapper from "@/components/organisms/project/ProjectWrapper";
import { getMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata({
  title: "Projects | Brilliahib",
  description:
    "Showcasing projects in web development, software engineering, and technology. Explore my portfolio of work and creative digital solutions.",
  url: "https://brilliahib.tech/projects",
  keywords: [
    "projects",
    "portfolio",
    "web development projects",
    "software engineering projects",
    "Brilliahib projects",
    "digital solutions",
  ],
  siteName: "Projects | Brilliahib",
  type: "website",
});
export default function ProjectPage() {
  return (
    <>
      <section id="project">
        <ProjectWrapper />
      </section>
    </>
  );
}
