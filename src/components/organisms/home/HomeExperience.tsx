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
    description:
      "Diskominfo Jawa Tengah is the official communication and information agency of Central Java Province, Indonesia. It is responsible for managing public information, communication, and technology infrastructure in the region.",
  },
  {
    id: "item-2",
    title: "ProjectKita",
    imageSrc: "/images/projectkita.jpg",
    altText: "ProjectKita",
    description:
      "ProjectKita is an Indonesian platform that connects volunteers with social projects across the country. It aims to facilitate community engagement and support various social initiatives.",
  },
  {
    id: "item-3",
    title: "Bangkit Academy",
    imageSrc: "/images/bangkit.png",
    altText: "Bangkit",
    description:
      "Bangkit Academy is a student competency development program for a career in technology, designed through a partnership between the Director-General of Higher Education of the Ministry of Education and Culture, Google, Gojek, Tokopedia, Traveloka, and university partners. The program offers learning paths in Machine Learning, Mobile Development, and Cloud Computing.",
  },
];

export default function HomeExperience() {
  return (
    <>
      <section>
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
                      {experience.title}
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
