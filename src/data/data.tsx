import {
  BookMarked,
  BotMessageSquare,
  Code,
  Hexagon,
  Home,
} from "lucide-react";

export const collection = [
  {
    id: 1,
    title: "Tutorial Next JS Bahasa Indonesia",
    description:
      "A playlist that learns about next js using the Indonesian language",
    link: "https://www.youtube.com/watch?v=zw5wKyqDEUc&list=PLmF_zPV9ZcP2aYRuoEsMla5gqNjxP-V20",
  },
  {
    id: 2,
    title: "Build E-commerce with Next JS",
    description: "A playlist that builds an e-commerce website using Next JS",
    link: "https://www.youtube.com/watch?v=BrBs5PWAAoo&list=PLmF_zPV9ZcP39zezaMMdh26j2DzEKwqNw",
  },
  {
    id: 3,
    title: "Next JS 15 Tutorial - Beginner to Advanced",
    description:
      "A playlist that learns about next js from beginner to advanced",
    link: "https://www.youtube.com/watch?v=b4ba60j_4o8&list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY",
  },
  {
    id: 4,
    title: "Learning Tailwind CSS",
    description: "A playlist that learns about tailwind css",
    link: "https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h",
  },
  {
    id: 5,
    title: "Build Portfolio with Tailwind CSS",
    description: "A video that builds a portfolio website using tailwind css",
    link: "https://www.youtube.com/watch?v=8Ea4oq8qFtM&t=4777s",
  },
  {
    id: 6,
    title: "Tutorial Basic Rest API with Express JS, Prisma, PostgreSQL",
    description:
      "A video that learns about Rest API using Express JS, Prisma, and PostgreSQL",
    link: "https://www.youtube.com/watch?v=l9reBF_i00g&t=2893s",
  },
  {
    id: 7,
    title: "Client-side Rendering vs Server-side Rendering",
    description:
      "A video that explains the difference between client-side rendering and server-side rendering",
    link: "https://www.youtube.com/watch?v=9-mlXQqa6m0&t=350s",
  },
];

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
    icon: <Home className="h-full w-full" />,
  },
  {
    id: 2,
    label: "Project",
    href: "/project",
    icon: <Code className="h-full w-full" />,
  },
  {
    id: 3,
    label: "Collection",
    href: "/collections",
    icon: <BookMarked className="h-full w-full" />,
  },
  {
    id: 4,
    label: "Chatbot",
    href: "/bot",
    icon: <BotMessageSquare className="h-full w-full" />,
  },
  {
    id: 5,
    label: "Theme",
    icon: <Hexagon className="h-full w-full" />,
  },
];

export const projectLast = [
  {
    id: 1,
    title: "Vintagee",
    description:
      "Vintagee is an online marketplace for buying and selling preloved fashion items, aiming to reduce textile waste and promote sustainable shopping.",
    image: "/images/projects/vintagee.png",
    link: "https://vintagee.vercel.app",
    github: "https://github.com/Brilliahib/vintagee",
    tech: [
      {
        id: 1,
        name: "Next.Js",
        image: "/images/nextjs.png",
      },
      {
        id: 2,
        name: "Typescript",
        image: "/images/typescript.png",
      },
      {
        id: 3,
        name: "Tailwind",
        image: "/images/tailwind.png",
      },
      {
        id: 4,
        name: "PHP",
        image: "/images/php.png",
      },
      {
        id: 5,
        name: "Laravel",
        image: "/images/laravel.png",
      },
      {
        id: 6,
        name: "MySQL",
        image: "/images/mysql.png",
      },
    ],
  },
  {
    id: 2,
    title: "Tumbuh Sahabat",
    description:
      "Tumbuh Sahabat is a web-based application designed to help children with Down syndrome monitor their nutritional intake and learn through educational games.",
    image: "/images/projects/tumbuhsahabat.png",
    link: "https://tumbuhsahabat.vercel.app",
    github: "https://github.com/Brilliahib/cms-sahabat-tumbuh",
    tech: [
      {
        id: 1,
        name: "Next.Js",
        image: "/images/nextjs.png",
      },
      {
        id: 2,
        name: "Typescript",
        image: "/images/typescript.png",
      },
      {
        id: 3,
        name: "Tailwind",
        image: "/images/tailwind.png",
      },
      {
        id: 4,
        name: "PHP",
        image: "/images/php.png",
      },
      {
        id: 5,
        name: "Laravel",
        image: "/images/laravel.png",
      },
      {
        id: 6,
        name: "MySQL",
        image: "/images/mysql.png",
      },
    ],
  },
  {
    id: 3,
    title: "Charingcub",
    description:
      "Charingcub is a web application designed to help parents find daycare or childcare facilities that meet their needs.",
    image: "/images/projects/charingcub.png",
    link: "https://charingcub.com",
    github: "https://github.com/Brilliahib/cms-charing-cub",
    tech: [
      {
        id: 1,
        name: "Next.Js",
        image: "/images/nextjs.png",
      },
      {
        id: 2,
        name: "Typescript",
        image: "/images/typescript.png",
      },
      {
        id: 3,
        name: "Tailwind",
        image: "/images/tailwind.png",
      },
      {
        id: 4,
        name: "PHP",
        image: "/images/php.png",
      },
      {
        id: 5,
        name: "Laravel",
        image: "/images/laravel.png",
      },
      {
        id: 6,
        name: "MySQL",
        image: "/images/mysql.png",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Vintagee",
    description:
      "Vintagee is an online marketplace for buying and selling preloved fashion items, aiming to reduce textile waste and promote sustainable shopping.",
    image: "/images/projects/vintagee.png",
    link: "https://vintagee.vercel.app",
    github: "https://github.com/Brilliahib/vintagee",
  },
  {
    id: 2,
    title: "Codelingo",
    description:
      "CodeLingo is a coding learning program designed specifically for children, from beginners to intermediate levels.",
    image: "/images/projects/codelingo.png",
    link: "https://codelingo-dev.vercel.app",
    github: "https://github.com/Brilliahib/codelingo",
  },
  {
    id: 3,
    title: "Tumbuh Sahabat",
    description:
      "Tumbuh Sahabat is a web-based application designed to help children with Down syndrome monitor their nutritional intake and learn through educational games.",
    image: "/images/projects/tumbuhsahabat.png",
    link: "https://tumbuhsahabat.vercel.app",
    github: "https://github.com/Brilliahib/cms-sahabat-tumbuh",
  },
  {
    id: 4,
    title: "Charingcub",
    description:
      "Charingcub is a web application designed to help parents find daycare or childcare facilities that meet their needs.",
    image: "/images/projects/charingcub.png",
    link: "https://charingcub.com",
    github: "https://github.com/Brilliahib/cms-charing-cub",
  },

  {
    id: 5,
    title: "Dopamind +",
    description:
      "Dopamind is an Android application designed to help you track and enhance your mental well-being. It provides tools and features that empower you to take control of your mental health journey.",
    image: "/images/projects/dopamind.png",
    link: "https://dopamind.site",
    github: "#",
  },
  {
    id: 6,
    title: "Susun Jadwal",
    description:
      "Susun Jadwal is a website designed to help users create and organize class schedules for their studies. It provides a simple and efficient way to plan your academic timetable.",
    image: "/images/projects/susunjadwal.png",
    link: "https://susunjadwal.vercel.app",
    github: "https://github.com/Brilliahib/cms-susunjadwal",
  },
  {
    id: 7,
    title: "e-Fasilitasi",
    description:
      "e-Fasilitasi is a website designed for documentation and archiving activities related to facilitation programs organized by the Communication and Information Office (Diskominfo) of Central Java.",
    image: "/images/projects/efasilitasi.png",
    link: "https://e-fasilitasi.site",
    github: "https://github.com/akhilazahraa/fasilitasi-diskominfo",
  },
  {
    id: 8,
    title: "Forum Studi Teknik UNDIP",
    description:
      "Website Forum Studi Teknik is an online platform that showcases the profile of the Forum Studi Teknik, an organization under the Faculty of Engineering at Diponegoro University (UNDIP). ",
    image: "/images/projects/fstundip.png",
    link: "https://fstundip.com",
    github: "#",
  },
  {
    id: 9,
    title: "Pantau Tanaman",
    description:
      "Pantau Tanaman is a website designed to monitor plant growth and health. It provides tools and features to help users track the condition of their plants",
    image: "/images/projects/pantautanaman.png",
    link: "https://pantautanaman.netlify.app",
    github: "#",
  },
];
