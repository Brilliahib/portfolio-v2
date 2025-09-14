import Image from "next/image";
import mapImage from "../../../../public/assets/map-v2.webp";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import SectionWrapper from "@/components/atoms/motion/SectionMotionWrapper";

export default function HomeJumbotron() {
  return (
    <SectionWrapper className="space-y-7">
      <div className="space-y-7">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12">
            <Avatar className="h-full w-full">
              <AvatarImage
                src="/images/brilly.jpg"
                alt="Muhammad Ahib Ibrilli"
                className="object-cover"
              />
              <AvatarFallback>
                <Skeleton className="h-12 w-12 rounded-full" />
              </AvatarFallback>
            </Avatar>
            <BadgeCheck
              size={20}
              className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 fill-green-500 text-background"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Muhammad Ahib Ibrilli</h1>
            <p className="text-sm text-muted-foreground">Software Engineer</p>
          </div>
        </div>
        <p className="tracking-tight text-muted-foreground">
          Software Engineer based in Semarang, Indonesia. Committed to
          delivering{" "}
          <span className="text-foreground">impactful solutions</span> and
          dedicated to continuous{" "}
          <span className="text-foreground">professional growth</span>.
        </p>
      </div>
      <div className="group/map xs:aspect-video relative aspect-[5/3] h-auto w-full overflow-hidden rounded-xl border-[1.5px] bg-zinc-400 shadow-sm">
        <Image
          src={mapImage}
          alt="Map of Semarang, Indonesia"
          fill
          className="scale-100 object-cover transition-transform duration-500 group-hover/map:scale-105 dark:grayscale"
          quality={60}
          placeholder="blur"
        />

        {/* Efek animasi hijau di tengah */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="relative flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
}
