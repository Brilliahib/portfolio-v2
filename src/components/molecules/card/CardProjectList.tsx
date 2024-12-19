import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/data";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardProjectList() {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
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
                <h1 className="text-base font-semibold">{project.title}</h1>
                <p className="text-sm tracking-tight">{project.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge>
                  <Link
                    target="blank"
                    href={project.link}
                    className="flex items-center gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    Preview
                  </Link>
                </Badge>
                <Badge>
                  <Link
                    target="blank"
                    href={project.github}
                    className="flex items-center gap-2"
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
  );
}
