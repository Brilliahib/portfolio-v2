import Image from "next/image";
import mapImage from "../../../../public/assets/map.webp";

export default function HomeJumbotron() {
  return (
    <section className="space-y-7">
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Muhammad Ahib Ibrilli</h1>
        <p className="tracking-tight">
          Software Engineer. I like learning new things even though my hobby is
          just playing <span className="font-semibold">Tiktok.</span>
        </p>
      </div>
      <div className="group/map xs:aspect-video relative aspect-[5/3] h-auto w-full overflow-hidden rounded-xl border-[1.5px] bg-zinc-400 shadow-sm">
        <Image
          src={mapImage}
          alt="Map of Semarang, Indonesia"
          fill
          className="anim object-cover group-hover/map:scale-100 dark:grayscale"
          quality={60}
          placeholder="blur"
        />
      </div>
    </section>
  );
}
