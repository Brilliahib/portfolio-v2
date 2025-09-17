import SectionWrapper from "@/components/atoms/motion/SectionMotionWrapper";
import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";

export default function PersonalLove() {
  return (
    <SectionWrapper>
      <div className="space-y-4">
        <Typography
          title="My Beloved Love"
          description="The one who makes my world brighter, my heart warmer, and every moment more meaningful."
        />
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={"/images/love/love-1.jpeg"}
            alt="Akhila Zahra"
            width={500}
            height={500}
            className="h-48 w-full rounded-md object-cover grayscale filter transition duration-300 hover:grayscale-0 md:h-60"
          />
          <Image
            src={"/images/love/love-2.jpeg"}
            alt="Akhila Zahra"
            width={500}
            height={500}
            className="h-48 w-full rounded-md object-cover grayscale filter transition duration-300 hover:grayscale-0 md:h-60"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
