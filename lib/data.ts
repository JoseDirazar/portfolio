import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import wordanalyticsImg from "@/public/wordanalytics.png";
import BelliDeportes from "@/public/BelliDeportes.png";
import multicuotasTandil from "@/public/multicuotas-tandil.png";
import tuBienestar from "@/public/tu-bienestar.png";
import padelink from "@/public/padelink.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "ForgeBytes Lab",
    location: "Buenos Aires, ARG",
    description:
      "ForgeBytes Lab is my personal VPS where I develop and host client's projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Since Jan - 2025",
    url: "https://forgebyteslab.com/",
  },
  {
    title: "Bigger Tech",
    location: "Remote, Argentina",
    description:
      "Bigger Tech is a company that provides IT services to small and medium-sized businesses. I'm currently work as a Full Stack Developer making web and mobile apps for Bigger clients.",
    icon: React.createElement(CgWorkAlt),
    date: "Since Dec - 2023",
    url: "https://www.biggertech.co/",
  },
  {
    title: "Mayland Labs",
    location: "Buenos Aires, ARG",
    description:
      "Mayland labs is a small statup that provides IT services to small and medium-sized businesses located in Argentina.",
    icon: React.createElement(CgWorkAlt),
    date: "Since Nov - 2023",
    url: "https://www.maylandlabs.com/",
  },
  {
    title: "Henry Bootcamp",
    location: "Argentina, remote",
    description:
      "Henry is a intensive bootcamp where I learned the fundamentals of modern Full Stack development with React, Node.js, Express and PostgreSQL. Also learned about testing, best practices and learned how to work in a team with Scrum, Git and GitHub.",
    icon: React.createElement(LuGraduationCap),
    date: "Apr - 2023 - Sep - 2023",
    url: "https://certificates.soyhenry.com/new-cert?id=2ca8a03c45ac77da0e6ddb9ccb624fdfe0a3b3c73bed6be0413138c267683122",
  },
  {
    title: "FreeCodeCamp",
    location: "Argentina, remoto",
    description:
      "FreeCodeCamp is a online platform where I learned the fundamentals of web development with HTML, CSS and advance JavaScript algorithms.",
    icon: React.createElement(LuGraduationCap),
    url: "https://www.freecodecamp.org/certification/fcce44b564a-4071-40f3-a9b8-537a761d8ec5/javascript-algorithms-and-data-structures",
    date: "Nov - 2022 - Apr - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "TuBienestar Masajes Olavarría",
    description:
      "This is a booking platform for a massage salon located in Olavarría, Argentina.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    imageUrl: tuBienestar,
    url: "https://tu-bienestar.forgebyteslab.com/",
  },
  {
    title: "Padelink",
    description:
      "This is a social media platform for a peddle club located in Buenos Aires C.A.B.A, Argentina.",
    tags: ["React", "TypeScript", "Nest.js", "Tailwind", "TypeORM", "Vite.js"],
    imageUrl: padelink,
    url: "https://www.padelink.com.ar/",
  },
  {
    title: "Multicuotas Tandíl",
    description:
      "An e-commerce for a client store located in Tandíl. User can search products, order and pay with MercadoPago",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    imageUrl: multicuotasTandil,
    url: "https://multicuotas-tandil.vercel.app/",
  },
  {
    title: "Belli Deportes",
    description:
      "An e-commerce for an sport store located in my city. User can search products, order and pay with MercadoPago",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    imageUrl: BelliDeportes,
    url: "https://belli-deportes.vercel.app/",
  },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Expo",
  "Next.js",
  "Git",
  "Tailwind",
  "ORMs",
  "SQL",
  "Nest.js",
] as const;
