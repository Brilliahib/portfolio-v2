import Marquee from "@/components/ui/marquee";
import Image from "next/image";

export default function HomeAbout() {
  const tech = [
    {
      name: "Typescript",
      logo: "/images/typescript.png",
    },
    {
      name: "Javascript",
      logo: "/images/javascript.png",
    },
    {
      name: "Firebase",
      logo: "/images/firebase.png",
    },
    {
      name: "React",
      logo: "/images/react.png",
    },
    {
      name: "Docker",
      logo: "/images/docker.png",
    },
    {
      name: "Google Cloud Platform",
      logo: "/images/gcp.png",
    },
    {
      name: "Postgresql",
      logo: "/images/postgresql.png",
    },
    {
      name: "PHP",
      logo: "/images/php.png",
    },
    {
      name: "Laravel",
      logo: "/images/laravel.png",
    },
  ];
  return (
    <>
      <section id="about" className="pt-24">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Who is me?</h1>
          <p className="tracking-tight">
            I am a{" "}
            <span className="font-semibold">Computer Engineering Student</span>{" "}
            at <span className="font-semibold">Diponegoro University</span>. My
            passion is in{" "}
            <span className="font-semibold">Software Engineer</span> and I
            usually work on projects using{" "}
            <span className="font-semibold">Next.js, Typescript</span>, which
            allows me to create modern, high-performance web applications.
            Through my projects, I continuously{" "}
            <span className="font-semibold">explore new technologies</span> ,
            improve my coding skills, and strive to write clean, maintainable
            code.
          </p>
        </div>
        <div className="relative mt-7 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {tech.map((item, i) => (
              <div
                key={i}
                className="mx-2 flex max-w-none cursor-default items-center gap-x-2 text-sm"
              >
                <Image
                  src={item.logo || "/vercel.svg"}
                  alt="logo"
                  width={20}
                  height={20}
                  className="rounded"
                />
                {item.name}
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </section>
    </>
  );
}
