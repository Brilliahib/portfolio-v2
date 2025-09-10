import Typography from "@/components/atoms/typography/Typography";
import { awards } from "@/data/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function HomeAwards() {
  return (
    <>
      <section className="pt-24">
        <div className="space-y-4">
          <Typography
            title="Proud Moments"
            description="I have gained numerous awards and recognitions through the dedicated application of my skills and abilities in various fields."
          />
          <div>
            <Accordion type="single" collapsible className="w-full">
              {awards.map((award) => (
                <AccordionItem key={award.id} value={award.slug}>
                  <AccordionTrigger>
                    <div>
                      <h1>{award.title}</h1>
                      <p className="text-sm text-muted-foreground">
                        {award.date}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <Image
                      src={award.certification}
                      alt={award.title}
                      width={1000}
                      height={1000}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
