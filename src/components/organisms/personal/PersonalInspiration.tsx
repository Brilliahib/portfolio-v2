import SectionWrapper from "@/components/atoms/motion/SectionMotionWrapper";
import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";

export default function PersonalInspiration() {
  return (
    <SectionWrapper>
      <div className="space-y-4">
        <Typography
          title="Top Inspirations"
          description="Here's a collection of my top inspirations that keep me motivated and creative."
        />
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={"/images/inspiration/sandhika.jpg"}
            alt="Sandhika"
            width={500}
            height={500}
            className="h-48 w-full rounded-md object-cover grayscale filter transition duration-300 hover:grayscale-0 md:h-60"
          />
          <Image
            src={"/images/inspiration/voidfnc.jpeg"}
            alt="Voidfnc"
            width={500}
            height={500}
            className="h-48 w-full rounded-md object-cover grayscale filter transition duration-300 hover:grayscale-0 md:h-60"
          />
          <Image
            src={"/images/inspiration/david.jpg"}
            alt="David"
            width={500}
            height={500}
            className="h-48 w-full rounded-md object-cover grayscale filter transition duration-300 hover:grayscale-0 md:h-60"
          />
          <Image
            src={"/images/inspiration/elonmusk.jpg"}
            alt="Elon Musk"
            width={500}
            height={500}
            className="h-48 w-full rounded-md object-cover grayscale filter transition duration-300 hover:grayscale-0 md:h-60"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
