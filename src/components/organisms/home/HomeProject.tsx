import Typography from "@/components/atoms/typography/Typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projectLast } from "@/data/data";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeProject() {
  return (
    <>
      <section className="pt-24">
        <div className="space-y-8">
          <Typography
            title="My Lastest Projects"
            description="I have worked on various projects, ranging from dummy projects created for learning purposes to real-world projects implemented in production."
          />
          <div className="space-y-4">
            {projectLast.map((project) => (
              <Card key={project.id}>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <Image
                      src={project.image}
                      width={1000}
                      height={1000}
                      alt={project.title}
                      className="max-h-[250px] w-full rounded-md object-cover"
                      loading="lazy"
                    />
                    <div className="space-y-2">
                      <h1 className="text-base font-semibold">
                        {project.title}
                      </h1>
                      <p className="text-sm tracking-tight text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech?.map((tech) => (
                        <Badge
                          key={tech.id}
                          variant={"secondary"}
                          className="flex items-center gap-2"
                        >
                          <Image
                            src={tech.image}
                            alt={tech.name}
                            width={1000}
                            height={1000}
                            className="max-w-[20px]"
                            loading="lazy"
                          />
                          <p className="font-medium">{tech.name}</p>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge>
                        <Link
                          target="blank"
                          href={project.link}
                          className="flex items-center gap-2 font-medium"
                        >
                          <Globe className="h-4 w-4" />
                          Preview
                        </Link>
                      </Badge>
                      <Badge>
                        <Link
                          target="blank"
                          href={project.github}
                          className="flex items-center gap-2 font-medium"
                        >
                          <Github className="h-4 w-4" />
                          Github
                        </Link>
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
