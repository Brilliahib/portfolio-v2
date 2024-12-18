import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Codelingo",
    description:
      "CodeLingo is a coding learning program designed specifically for children, from beginners to intermediate levels.",
    image: "/images/projects/codelingo.png",
  },
  {
    id: 2,
    title: "Tumbuh Sahabat",
    description:
      "Tumbuh Sahabat is a web-based application designed to help children with Down syndrome monitor their nutritional intake and learn through educational games.",
    image: "/images/projects/tumbuhsahabat.png",
  },
  {
    id: 3,
    title: "Charingcub",
    description:
      "Charingcub is a web application designed to help parents find daycare or childcare facilities that meet their needs.",
    image: "/images/projects/charingcub.png",
  },

  {
    id: 4,
    title: "Dopamind +",
    description:
      "Dopamind is an Android application designed to help you track and enhance your mental well-being. It provides tools and features that empower you to take control of your mental health journey.",
    image: "/images/projects/dopamind.png",
  },
  {
    id: 5,
    title: "Susun Jadwal",
    description:
      "Susun Jadwal is a website designed to help users create and organize class schedules for their studies. It provides a simple and efficient way to plan your academic timetable.",
    image: "/images/projects/susunjadwal.png",
  },
  {
    id: 6,
    title: "e-Fasilitasi",
    description:
      "e-Fasilitasi is a website designed for documentation and archiving activities related to facilitation programs organized by the Communication and Information Office (Diskominfo) of Central Java.",
    image: "/images/projects/efasilitasi.png",
  },
  {
    id: 7,
    title: "Forum Studi Teknik UNDIP",
    description:
      "Website Forum Studi Teknik is an online platform that showcases the profile of the Forum Studi Teknik, an organization under the Faculty of Engineering at Diponegoro University (UNDIP). ",
    image: "/images/projects/fstundip.png",
  },
  {
    id: 8,
    title: "Pantau Tanaman",
    description:
      "Pantau Tanaman is a website designed to monitor plant growth and health. It provides tools and features to help users track the condition of their plants",
    image: "/images/projects/pantautanaman.png",
  },
];

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
              />
              <div className="space-y-2">
                <h1 className="text-base font-semibold">{project.title}</h1>
                <p className="text-sm tracking-tight">{project.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}