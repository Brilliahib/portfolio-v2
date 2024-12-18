import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const experiences = [
  {
    id: "item-1",
    title: "Diskominfo Jawa Tengah",
    imageSrc: "/images/kominfo.png",
    altText: "Diskominfo Jawa Tengah",
    position: "Fullstack Web Developer",
    description:
      "Diskominfo Jawa Tengah is the official communication and information agency of Central Java Province, Indonesia. It is responsible for managing public information, communication, and technology infrastructure in the region.",
  },
  {
    id: "item-2",
    title: "ProjectKita",
    imageSrc: "/images/projectkita.jpg",
    altText: "ProjectKita",
    position: "Frontend Web Developer",
    description:
      "ProjectKita is an automation manufacturing service located in the Semarang area, Central Java.",
  },
  {
    id: "item-3",
    title: "Bangkit Academy",
    imageSrc: "/images/bangkit.png",
    altText: "Bangkit",
    position: "Cloud Computing Path",
    description:
      "Bangkit Academy is a student competency development program for a career in technology, designed through a partnership between the Director-General of Higher Education of the Ministry of Education and Culture, Google, Gojek, Tokopedia, Traveloka, and university partners. The program offers learning paths in Machine Learning, Mobile Development, and Cloud Computing.",
  },
];

export default function HomeExperience() {
  return (
    <>
      <section className="pt-24">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Experience</h1>
          <p className="tracking-tight">
            I have diverse experience in software engineering, including
            part-time work as a software developer, self-directed learning, and
            internships.
          </p>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {experiences.map((experience) => (
                <AccordionItem key={experience.id} value={experience.id}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-4 font-semibold">
                      <Image
                        src={experience.imageSrc}
                        width={1000}
                        height={1000}
                        alt={experience.altText}
                        className="max-w-[30px]"
                      />
                      <div>
                        <h1>{experience.title}</h1>
                        <p className="font-base text-sm text-muted-foreground">
                          {experience.position}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{experience.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
