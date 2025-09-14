import CardGithubStats from "@/components/atoms/card/CardGithubStats";
import SectionWrapper from "@/components/atoms/motion/SectionMotionWrapper";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

export default function HomeAbout() {
  const tech = [
    {
      name: "Wordpress",
      logo: "/images/wordpress.png",
    },
    {
      name: "Cpanel",
      logo: "/images/cpanel.png",
    },
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
      name: "Google Cloud",
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
    {
      name: "Tailwind CSS",
      logo: "/images/tailwind.png",
    },
    {
      name: "MySQL",
      logo: "/images/mysql.png",
    },
    {
      name: "Flask",
      logo: "/images/flask.png",
    },
  ];
  return (
    <>
      <SectionWrapper wrapChildren={false} className="space-y-7 pt-24">
        <div className="space-y-4">
          <h3 className="font-jakarta-sans text-md font-bold uppercase leading-none text-foreground">
            Who is me?
          </h3>
          <p className="tracking-tight text-muted-foreground">
            I am a <span className="text-foreground">Software Engineer</span>{" "}
            based in Semarang, Indonesia, and currently a Computer Engineering
            student at Diponegoro University. I specialize in building modern,
            high-performance web applications using{" "}
            <span className="text-foreground">Next.js and TypeScript</span>.
            Through my projects, I focus on clean, maintainable code while
            continuously exploring new technologies and improving my skills.
          </p>
        </div>
        <div className="relative overflow-hidden">
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
        <CardGithubStats />
      </SectionWrapper>
    </>
  );
}
