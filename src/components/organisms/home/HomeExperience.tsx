import Typography from "@/components/atoms/typography/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experiences } from "@/data/data";
import Image from "next/image";

export default function HomeExperience() {
  return (
    <>
      <section className="pt-24">
        <div className="space-y-8">
          <Typography
            title="My Experience"
            description="I have diverse experience in software engineering, including part-time work as a software developer, self-directed learning, and internships."
          />
          <div className="space-y-6">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={experience.imageSrc}
                    width={1000}
                    height={1000}
                    alt={experience.altText}
                    className="max-w-[20px]"
                  />
                  <div>
                    <h3 className="text-sm font-medium">{experience.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {experience.position}
                    </p>
                  </div>
                </div>
                <div className="hidden flex-col items-end gap-1 md:flex">
                  <p className="text-xs font-medium italic text-muted-foreground">
                    {experience.type}
                  </p>
                  <p className="text-xs font-medium text-muted-foreground">
                    {experience.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
